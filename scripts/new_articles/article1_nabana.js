// scripts/new_articles/article1_nabana.js
module.exports = function buildArticle1(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-mie-nabana-no-sato-illumination-nagashima-hotels-guide";
  const title = "【三重・なばなの里】2026なばなの里イルミネーション完全攻略！国内最大級の光の祭典と紅葉水鏡＆伊勢湾の味覚を堪能する厳選名宿5選";
  const description = "10月下旬から翌年5月まで開催される日本最大級の光の祭典「なばなの里イルミネーション」。特に11月は紅葉ライトアップ「鏡池」とイルミネーションが同時期に楽しめる年間最高峰のシーズンです。混雑回避の入場ルート、水上イルミネーションと200mの光のトンネルの鑑賞テクニック、そしてナガシマリゾート直営の限定特典付き名宿や湯の山温泉の極上ヴィラなど厳選5宿を徹底解説。";
  const date = "2026-10-30";
  const prefecture = "三重県";
  const area = "桑名・長島・湯の山";

  const hHanamizuki = hotels.find(h => h.hotelNo === 106022) || hotels[0];
  const hOlive = hotels.find(h => h.hotelNo === 106020) || hotels[1];
  const hNagashima = hotels.find(h => h.hotelNo === 106021) || hotels[2];
  const hSosukyo = hotels.find(h => h.hotelNo === 181001) || hotels[3];
  const hRouteInn = hotels.find(h => h.hotelNo === 188410) || hotels[4];

  const wNabana = wiki["なばなの里"] || {};
  const wSpaLand = wiki["ナガシマスパーランド"] || {};
  const wIse = wiki["伊勢神宮"] || {};
  const wRokkaen = wiki["六華苑"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-amber-300 font-extrabold text-xs">
      <span>🌟</span><span>2026-2027年 なばなの里イルミネーション速報</span>
    </div>
    <p class="text-xs text-stone-200">
      11月中旬〜12月上旬は紅葉水鏡とイルミネーションが重なる年間最大のピーク！オフィシャルホテルはなばなの里入村無料＆専用送迎バス特典付き。
    </p>
  </div>
  <a href="${hHanamizuki.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    ✨ ホテル花水木の空室・プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-600 pb-2 mb-4">
  360度を取り囲む圧倒的な光の海と、池に映り込む奇跡の紅葉リフレクション
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  夕暮れの伊勢湾岸に帳が下りる瞬間、広大なナガシマリゾートの一角が数百万球のLEDで埋め尽くされます。三重県桑名市が世界に誇る「なばなの里イルミネーション」は、全国のイルミネーションランキングで幾度となく日本一に輝いてきた光の聖地。なかでも11月中旬から12月上旬にかけては、園内の「鏡池」周辺のモミジが見事な深紅に染まり、風のない夜には水面に上下対称の紅葉絵巻が浮かび上がります。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  国内最大規模を誇る水上イルミネーション「光の大河」、温かな白熱電球で彩られる全長200メートルの「光のトンネル 華回廊」、そして毎年テーマが変わる超巨大メインイルミネーション。その感動を余すところなく味わうためには、点灯直後の凄まじい渋滞を避け、オフィシャルホテルの専用通行特典や無料シャトルバス、あるいは極上の温泉宿を拠点にするのが賢い大人の旅の選択肢です。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-600 pb-2 my-6">
  🎪 2026なばなの里イルミネーション＆紅葉まつりの必見ポイント
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-extrabold text-xs rounded-lg">エリア別見どころ</span>
      <h3 class="text-base font-bold text-stone-900">園内4大イルミネーションスポット</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>水上イルミネーション「光の大河」:</strong> 池の広大な水面を舞台に、最新のコンピューター制御で木曽三川の流れを表現した国内唯一の水上イルミ。チャペルの鐘の音とともに光の波が押し寄せます。</p>
      <p>② <strong>光のトンネル「華回廊」（200m）:</strong> 花びら型のソケットに包まれた温白色LEDが織りなす光の回廊。前後に視界いっぱいの優しい光が広がり、記念撮影のベストスポット。</p>
      <p>③ <strong>巨大テーマエリア:</strong> 毎年大スケールで作り込まれる高さ約35m・横幅約155mの圧巻の光のモニュメント。壮大な音楽と連動する光のストーリーは鳥肌モノの迫力。</p>
      <p>④ <strong>アイランド富士（地上45mの大パノラマ）:</strong> 回転しながら上空へと昇る展望台。園内全域のイルミネーションと伊勢湾の夜景を一望できます（料金別途）。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">11月限定の絶景＆混雑対策</span>
      <h3 class="text-base font-bold text-stone-900">紅葉水鏡と渋滞回避テクニック</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【鏡池の紅葉ライトアップ】</strong> 11月中旬〜12月上旬にかけて、園内中央の「鏡池」のモミジが一斉に色づきます。風のない穏やかな夜は、水面に鏡のように映り込む紅葉の美しさに息を呑みます。イルミネーションの点灯前にまず鏡池へ足を運ぶのがプロの鑑賞順序。</p>
      <p><strong>【点灯時間と混雑のピーク】</strong> 11月の点灯時間は例年17:00〜17:20頃。点灯の瞬間は拍手が湧き起こります。伊勢湾岸道・東名阪道からのアクセス道路は16:30から激しい渋滞が発生するため、15:30には現地駐車場へ入庫するか、ナガシマリゾート直営ホテルの専用無料送迎バスを利用するのが最もスムーズです。</p>
      <p><strong>【防寒対策】</strong> 川沿いに位置するため、夜間は伊勢湾からの川風で想像以上に冷え込みます。手袋、マフラー、風を通さない厚手のダウンジャケットを用意して出かけましょう。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-600 pb-2 my-8">
  🏨 なばなの里＆伊勢湾味覚を満喫する！厳選おすすめ名宿5選
</h2>

<!-- 宿1: ホテル花水木 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">ナガシマリゾート最高峰の純和風旅館</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. ホテル花水木（三重県桑名市・長島温泉）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hHanamizuki.reviewAverage}（${hHanamizuki.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hHanamizuki.hotelImageUrl}" alt="${hHanamizuki.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hHanamizuki.roomImageUrl || hHanamizuki.hotelImageUrl}" alt="${hHanamizuki.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">数寄屋造りの気品ある空間、伊勢湾の伊勢海老・桑名のはまぐりを味わう最高級のおもてなし</p>
      <p>ナガシマリゾートの中核をなす「ホテル花水木」は、全国の旅館ランキングでも常に上位に位置する格式高い名旅館。宿泊者には「なばなの里入村無料」「ホテル専用シャトルバスでの直行送迎」「湯あみの島入館無料」「ナガシマスパーランド入場無料＆開園10分前アーリーエントリー」という破格の特典が付帯します。庭園露天風呂「瀧の湯」では、湯量豊富な長島温泉のアルカリ性単純温泉が肌をやさしく包み込みます。夕食はお部屋または料亭個室にて、伊勢海老や黒毛和牛、桑名名物の天然蛤を贅沢に盛り込んだ京風会席に舌鼓を打てます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hHanamizuki.address1}${hHanamizuki.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hHanamizuki.access}</p>
        <p><strong>【駐車場】</strong> ${hHanamizuki.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hHanamizuki.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hHanamizuki.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✨ ホテル花水木の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿2: ガーデンホテルオリーブ -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-teal-100 text-teal-900 font-black text-xs rounded-full">家族連れに絶大な支持！豪華和洋中バイキング</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. ガーデンホテルオリーブ（三重県桑名市・長島温泉）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hOlive.reviewAverage}（${hOlive.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hOlive.hotelImageUrl}" alt="${hOlive.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hOlive.roomImageUrl || hOlive.hotelImageUrl}" alt="${hOlive.hotelName} 温泉" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">目の前で揚げる天ぷらやローストビーフ！特典満載でコスパ抜群のリゾートホテル</p>
      <p>ナガシマリゾート直営館の中で、特にファミリーやグループ旅行に大人気なのが「ガーデンホテルオリーブ」。花水木と同様になばなの里への無料送迎＆入場特典が付いており、点灯観覧後にバスでラクラク帰館できるのが最大の魅力。夕食バイキングはオープンキッチンでシェフが腕を振るい、揚げたて天ぷら、握り寿司、ローストビーフ、季節のデザートなど約100種類の料理が並びます。敷地内の天然温泉大浴場はもちろん、渡り廊下で接続された「湯あみの島」の17種類の大露天風呂も無料で入り放題です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hOlive.address1}${hOlive.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hOlive.access}</p>
        <p><strong>【駐車場】</strong> ${hOlive.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hOlive.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hOlive.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✨ ガーデンホテルオリーブの最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿3: ホテルナガシマ -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-sky-100 text-sky-900 font-black text-xs rounded-full">湯あみの島に直結！全室洋室のゆったり温泉ステイ</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. ホテルナガシマ（三重県桑名市・長島温泉）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hNagashima.reviewAverage}（${hNagashima.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hNagashima.hotelImageUrl}" alt="${hNagashima.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hNagashima.roomImageUrl || hNagashima.hotelImageUrl}" alt="${hNagashima.hotelName} ロビー" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">大自然露天風呂「湯あみの島」直結！シニア・カップルに寛ぎを届ける洋室リゾート</p>
      <p>ホテルナガシマは、全客室が広々とした洋室ベッドタイプで統一された落ち着きあるホテル。足腰に負担をかけたくないシニア世代や、ベッドでゆったり眠りたいカップルに大好評です。日本最大級の天然温泉施設「湯あみの島」のすぐ隣に位置し、奥入瀬渓流や黒部峡谷を模したダイナミックな巨岩露天風呂へといつでも浴衣のままアクセス可能。レストラン「山もみじ」でのディナービュッフェでは、季節の地元食材をふんだんに使った上品な和洋中メニューが揃います。もちろん、なばなの里への専用送迎バス特典も完備。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hNagashima.address1}${hNagashima.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hNagashima.access}</p>
        <p><strong>【駐車場】</strong> ${hNagashima.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hNagashima.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hNagashima.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✨ ホテルナガシマの最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿4: アクアイグニス別邸 湯の山温泉 素粋居 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-800 text-amber-300 font-black text-xs rounded-full">鈴鹿山麓の隠れ家・全室源泉掛け流し離れヴィラ</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. アクアイグニス別邸 湯の山温泉 素粋居（SOSUIKYO）（三重県三重郡菰野町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-stone-100 border border-stone-300 text-stone-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hSosukyo.reviewAverage}（${hSosukyo.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hSosukyo.hotelImageUrl}" alt="${hSosukyo.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hSosukyo.roomImageUrl || hSosukyo.hotelImageUrl}" alt="${hSosukyo.hotelName} 客室露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">「土・石・木・漆」の自然美に包まれる12棟の離れ。ミシュラン星付きシェフ監修の薪火料理</p>
      <p>なばなの里から新名神高速道路経由で車で約30分、御在所岳の麓・湯の山温泉に佇む究極の隠れ家リゾート。敷地内にはわずか12棟の完全独立型ヴィラが点在し、各棟に異なる現代美術と職人技が凝縮されています。全室に湯の山温泉の自家源泉を惜しみなく注ぎ込む専用露天風呂を備え、鈴鹿山脈の澄んだ空気を吸い込みながら至福の湯浴みが叶います。夕食は直営の薪火レストラン「HINOMORI」や蕎麦割烹にて、炎の熱源で引き出された松阪牛や伊勢湾の海の幸を五感で堪能できます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hSosukyo.address1}${hSosukyo.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hSosukyo.access}</p>
        <p><strong>【駐車場】</strong> ${hSosukyo.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hSosukyo.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hSosukyo.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-stone-800 to-stone-900 text-amber-300 font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✨ アクアイグニス別邸 素粋居の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿5: ホテルルートイン桑名 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-blue-100 text-blue-900 font-black text-xs rounded-full">桑名ICすぐ・なばなの里まで車で約15分の好立地</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. ホテルルートイン桑名（三重県桑名市）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hRouteInn.reviewAverage}（${hRouteInn.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hRouteInn.hotelImageUrl}" alt="${hRouteInn.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hRouteInn.roomImageUrl || hRouteInn.hotelImageUrl}" alt="${hRouteInn.hotelName} 大浴場" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">活性人工温泉大浴場完備＆無料朝食バイキング！ドライブ旅行のスマートな選択肢</p>
      <p>東名阪自動車道「桑名IC」から車で約5分、なばなの里まで約15分という抜群の機動力を誇るビジネスホテル。夜遅くまでイルミネーションを満喫したあと、チェックインして足を伸ばせる活性石人工温泉「旅人の湯」が疲れをじんわりほぐしてくれます。宿泊者全員に無料で提供される朝食バイキングでは、ヨーロッパ直輸入の焼きたてパンや温かい和洋のおかずが充実。無料の平面駐車場を多数完備しており、マイカーやレンタカーで三重・愛知をアクティブに周遊する旅行者に最適です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hRouteInn.address1}${hRouteInn.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hRouteInn.access}</p>
        <p><strong>【駐車場】</strong> ${hRouteInn.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hRouteInn.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hRouteInn.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✨ ホテルルートイン桑名の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<h2 id="nearby-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-600 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs text-stone-600 mb-6">
  なばなの里とあわせて訪れたい、桑名・長島・伊勢エリアの名所案内です。
</p>

<div class="space-y-6 my-6">
  <!-- スポット1: なばなの里 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wNabana.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/106022/106022.jpg'}" alt="なばなの里" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[11px] rounded-md">🌸 桑名市長島町</span>
        <h3 class="text-base font-bold text-stone-900">なばなの里（花と食のテーマパーク）</h3>
        <p>${wNabana.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> ホテル花水木・オリーブ・ナガシマから専用無料シャトルバスで約10〜15分。ホテルルートイン桑名から車で約15分。</p>
      </div>
    </div>
  </div>

  <!-- スポット2: ナガシマスパーランド -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wSpaLand.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/106020/106020.jpg'}" alt="ナガシマスパーランド" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-800 font-bold text-[11px] rounded-md">🎢 日本最大級のアミューズメント</span>
        <h3 class="text-base font-bold text-stone-900">ナガシマスパーランド</h3>
        <p>${wSpaLand.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 花水木・オリーブ・ナガシマの敷地に隣接。宿泊者は専用ゲートから一般開園より10分早く入場可能です。</p>
      </div>
    </div>
  </div>

  <!-- スポット3: 六華苑 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wRokkaen.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/188410/188410.jpg'}" alt="六華苑" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-800 font-bold text-[11px] rounded-md">🏛️ 桑名市大字桑名</span>
        <h3 class="text-base font-bold text-stone-900">六華苑（旧諸戸清六邸・国指定重要文化財）</h3>
        <p>${wRokkaen.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> ホテルルートイン桑名から車で約10分、ナガシマリゾート各館から車で約15分。鹿鳴館を手掛けたジョサイア・コンドル設計の洋館と日本庭園が美しい。</p>
      </div>
    </div>
  </div>

  <!-- スポット4: 伊勢神宮 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wIse.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/181001/181001.jpg'}" alt="伊勢神宮" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-red-100 text-red-800 font-bold text-[11px] rounded-md">⛩️ 三重県伊勢市</span>
        <h3 class="text-base font-bold text-stone-900">伊勢神宮（皇大神宮・豊受大神宮）</h3>
        <p>${wIse.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 桑名・長島エリアから東名阪道・伊勢自動車道経由で約1時間15分。11月23日には秋の実りに感謝を捧げる最重要の神事「新嘗祭」が斎行されます。</p>
      </div>
    </div>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-600 pb-2 my-8">
  🗺️ なばなの里＆ナガシマリゾート 1泊2日満喫モデルコース
</h2>
<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-emerald-50/60 to-teal-50/40 border border-emerald-200 space-y-4 text-xs text-stone-700 leading-relaxed">
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【1日目】アウトレット散策となばなの里イルミネーション鑑賞</h3>
    <p>13:00に「三井アウトレットパーク ジャズドリーム長島」に到着してショッピング。15:00に「ホテル花水木」へチェックインし、客室で抹茶の接待を受けながら一息。16:30発のホテル専用バスに乗って「なばなの里」へ移動。まずは17:00前に「鏡池」の紅葉ライトアップを鑑賞し、17:15のイルミネーション点灯カウントダウンに参加。「光の大河」「光のトンネル」「大テーマエリア」をゆっくり巡り、ホテルバスで20:00に帰館。庭園露天風呂で身体を温めた後、桑名産蛤と伊勢海老の特選会席を堪能。</p>
  </div>
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【2日目】湯あみの島朝風呂と六華苑・伊勢神宮へ</h3>
    <p>早朝、宿泊者専用連絡口から「湯あみの島」へ足を運び、渓流を再現した大露天風呂の朝湯を満喫。朝食後、開園10分前アーリーエントリー特典で「ナガシマスパーランド」の人気アトラクションを先行体験。チェックアウト後は桑名市内へ向かい、国指定重要文化財「六華苑」で大正ロマンの洋館建築を見学。昼食は桑名名物「日の出」などで焼き蛤を味わい、伊勢自動車道で伊勢神宮・おかげ横丁へ足を伸ばして帰路へ。</p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-600 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-3 my-6 text-xs text-stone-800">
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q1. なばなの里の入場券は事前に購入が必要ですか？</h3>
    <p class="text-stone-600">A. 12月の特定日（クリスマス前後の土日）は日時指定券の前売り購入が義務付けられますが、ナガシマリゾート直営オフィシャルホテル（ホテル花水木、ガーデンホテルオリーブ、ホテルナガシマ）の宿泊者は、当日券完売日や特定日であっても入村証（無料特典）でそのまま入村可能です。チケット争奪戦を回避したい場合は直営ホテル宿泊が最も確実です。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q2. 雨の日でもイルミネーションは点灯しますか？</h3>
    <p class="text-stone-600">A. なばなの里イルミネーションは雨天でも通常通り点灯します。濡れたアスファルトや石畳にイルミネーションの光が鏡のように反射するため、雨の夜ならではの幻想的な写真が撮れるとカメラファンには密かに人気があります。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q3. ペットを連れての入場はできますか？</h3>
    <p class="text-stone-600">A. なばなの里園内への盲導犬・介助犬・聴導犬以外のペットの同伴入場は禁止されています。周辺のペットホテルや一時預かりサービスを事前にお調べいただくことを推奨します。</p>
  </div>
</div>

<div class="my-8 p-6 rounded-3xl bg-emerald-50/60 border border-emerald-200">
  <h3 class="text-sm font-bold text-emerald-950 mb-2">🔗 あわせてチェックしたい三重県の旅行ガイド</h3>
  <ul class="text-xs space-y-1.5 font-medium text-stone-700">
    <li>👉 <a href="/prefectures/mie/" class="text-emerald-800 hover:text-emerald-600 underline">三重県の観光名所・人気温泉地＆ホテル特集</a></li>
    <li>👉 <a href="/posts/winter-youth-mie-ise-shima-resort-guide" class="text-emerald-800 hover:text-emerald-600 underline">伊勢志摩リゾートホテル＆伊勢神宮おかげ横丁食べ歩きガイド</a></li>
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
    hot_spring_info: "長島温泉（弱アルカリ性単純温泉）・湯の山温泉（アルカリ性単純温泉）・活性石人工温泉",
    parking_info: "各宿に無料大型駐車場完備。なばなの里周辺渋滞時はオフィシャルホテル送迎バス利用推奨。",
    meal_availability: "桑名天然ハマグリ料理・伊勢湾直送伊勢海老・松阪牛ステーキ＆薪火料理・豪華和洋中バイキング",
    hotel_name: "なばなの里イルミネーション周辺 厳選宿5選",
    image: hHanamizuki.hotelImageUrl,
    affiliate_url: hHanamizuki.affiliateUrl,
    categories: ["11月旅行", "12月旅行", "イルミネーション", "温泉宿", "紅葉", "三重旅行"],
    keywords: [
      "なばなの里 イルミネーション 2026",
      "なばなの里 ホテル おすすめ",
      "なばなの里 入場券 特典 ホテル",
      "ホテル花水木 なばなの里",
      "ガーデンホテルオリーブ バイキング",
      "ホテルナガシマ 湯あみの島",
      "素粋居 湯の山温泉",
      "ホテルルートイン桑名",
      "なばなの里 鏡池 紅葉",
      "三重 11月 イベント"
    ],
    review: reviewHtml,
    price: hHanamizuki.hotelMinCharge || 22000,
    rating: hHanamizuki.reviewAverage || 4.6,
    date: date,
    other_images: [
      hOlive.hotelImageUrl,
      hNagashima.hotelImageUrl,
      hSosukyo.hotelImageUrl,
      hRouteInn.hotelImageUrl,
      wNabana.thumbnail,
      wSpaLand.thumbnail
    ].filter(Boolean),
    summary: description,
    review_count: (hHanamizuki.reviewCount || 0) + (hOlive.reviewCount || 0),
    family_friendly: "はい、オフィシャルホテルはなばなの里直通無料シャトルバス、バイキング対応、遊園地入場無料特典がありファミリーにも最適です。"
  };

  const noteMarkdown = `---
title: "${title}"
date: "${date}"
description: "${description}"
tags: ["なばなの里", "イルミネーション", "長島温泉", "ホテル花水木", "三重旅行", "楽天トラベル"]
---

夕暮れの伊勢湾岸に帳が下りる瞬間、広大なナガシマリゾートの一角が数百万球のLEDで埋め尽くされます。三重県桑名市が世界に誇る「なばなの里イルミネーション」は、全国イルミネーションランキングで幾度となく日本一に輝いてきた光の聖地。なかでも11月中旬から12月上旬にかけては、園内の「鏡池」周辺のモミジが見事な深紅に染まり、水面に上下対称の紅葉絵巻が浮かび上がります。

国内最大規模を誇る水上イルミネーション「光の大河」、温かな白熱電球で彩られる全長200メートルの「光のトンネル 華回廊」、そして毎年テーマが変わる超巨大メインイルミネーション。その感動を余すところなく味わうための攻略ポイントと、楽天トラベル最新データから★4.2〜4.6超の厳選名宿をお届けします。

---

## 🌟 2026なばなの里イルミネーションの攻略ポイント
- **開催期間**: 10月下旬〜翌年5月下旬（11月中旬〜12月上旬は鏡池の紅葉ライトアップと重なる年間最大の見どころ！）
- **点灯時間**: 11月は日没に合わせ17:00〜17:20頃。点灯の瞬間は場内から歓声が上がります。
- **水上イルミネーション「光の大河」**: 池の広大な水面を舞台に木曽三川の流れを表現した国内唯一の水上イルミ。チャペルの鐘とともに光の波が押し寄せます。
- **光のトンネル「華回廊」（200m）**: 花びら型ソケットの温白色LEDが織りなす圧倒的な光の回廊。記念写真のベストスポット。
- **渋滞とチケット対策**: 週末や12月の特定日は道路が激渋滞し、入場制限（前売り日時指定券のみ）がかかります。しかし、**ナガシマリゾート直営オフィシャルホテル宿泊者は、いつでも無料入村＆専用送迎バスが確約**されます。

---

## 1. ホテル花水木（三重県桑名市・長島温泉）
![ホテル花水木](${hHanamizuki.hotelImageUrl})
ナガシマリゾートの最高峰に位置する純和風の格式ある名旅館。宿泊者には「なばなの里入村無料」「ホテル専用バス送迎」「湯あみの島入館無料」「ナガシマスパーランド10分前アーリーエントリー」という圧巻の特典が付帯します。庭園露天風呂「瀧の湯」と伊勢海老・桑名産蛤の特選会席が自慢。

- **楽天トラベル総合評価**: ★${hHanamizuki.reviewAverage}（クチコミ ${hHanamizuki.reviewCount}件）
- **目安料金**: 1名 ¥${hHanamizuki.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hHanamizuki.address1}${hHanamizuki.address2}
- **アクセス**: ${hHanamizuki.access}
- **駐車場**: ${hHanamizuki.parkingInformation}
- [👉 ホテル花水木の宿泊プラン・空室状況を見る](${hHanamizuki.affiliateUrl})

---

## 2. ガーデンホテルオリーブ（三重県桑名市・長島温泉）
![ガーデンホテルオリーブ](${hOlive.hotelImageUrl})
ファミリーやグループに大人気の直営オフィシャルホテル。なばなの里への無料送迎＆無料入場特典はもちろん、夕食は約100種類の料理が並ぶ豪華和洋中バイキング。揚げたて天ぷらや握り寿司、ローストビーフが食べ放題。大露天風呂「湯あみの島」も無料で入り放題です。

- **楽天トラベル総合評価**: ★${hOlive.reviewAverage}（クチコミ ${hOlive.reviewCount}件）
- **目安料金**: 1名 ¥${hOlive.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hOlive.address1}${hOlive.address2}
- **アクセス**: ${hOlive.access}
- **駐車場**: ${hOlive.parkingInformation}
- [👉 ガーデンホテルオリーブの宿泊プラン・空室状況を見る](${hOlive.affiliateUrl})

---

## 3. ホテルナガシマ（三重県桑名市・長島温泉）
![ホテルナガシマ](${hNagashima.hotelImageUrl})
全室が広々とした洋室ベッド仕様で、シニアやカップルに寛ぎのひとときを提供するリゾートホテル。日本最大級の大自然露天風呂「湯あみの島」に直結しており、巨岩露天風呂巡りを心ゆくまで満喫できます。なばなの里専用無料送迎バスも完備。

- **楽天トラベル総合評価**: ★${hNagashima.reviewAverage}（クチコミ ${hNagashima.reviewCount}件）
- **目安料金**: 1名 ¥${hNagashima.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hNagashima.address1}${hNagashima.address2}
- **アクセス**: ${hNagashima.access}
- **駐車場**: ${hNagashima.parkingInformation}
- [👉 ホテルナガシマの宿泊プラン・空室状況を見る](${hNagashima.affiliateUrl})

---

## 4. アクアイグニス別邸 湯の山温泉 素粋居（三重県三重郡菰野町）
![素粋居](${hSosukyo.hotelImageUrl})
鈴鹿山脈の麓に佇む、わずか12棟の完全独立型ラグジュアリーヴィラ。全室に湯の山温泉の自家源泉掛け流し露天風呂を完備。「土・石・木・漆」をテーマにした芸術的な建築と、ミシュランシェフ監修の直火薪料理が至極の旅を演出します。

- **楽天トラベル総合評価**: ★${hSosukyo.reviewAverage}（クチコミ ${hSosukyo.reviewCount}件）
- **目安料金**: 1名 ¥${hSosukyo.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hSosukyo.address1}${hSosukyo.address2}
- **アクセス**: ${hSosukyo.access}
- **駐車場**: ${hSosukyo.parkingInformation}
- [👉 アクアイグニス別邸 素粋居の宿泊プラン・空室状況を見る](${hSosukyo.affiliateUrl})

---

## 5. ホテルルートイン桑名（三重県桑名市）
![ホテルルートイン桑名](${hRouteInn.hotelImageUrl})
東名阪道「桑名IC」すぐ、なばなの里まで車で約15分のスマート拠点。活性石人工温泉大浴場と無料朝食バイキングが付き、ドライブ観光のコスパ重視派に最適です。

- **楽天トラベル総合評価**: ★${hRouteInn.reviewAverage}（クチコミ ${hRouteInn.reviewCount}件）
- **目安料金**: 1名 ¥${hRouteInn.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hRouteInn.address1}${hRouteInn.address2}
- **アクセス**: ${hRouteInn.access}
- **駐車場**: ${hRouteInn.parkingInformation}
- [👉 ホテルルートイン桑名の宿泊プラン・空室状況を見る](${hRouteInn.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

### なばなの里（三重県桑名市）
![なばなの里](${wNabana.thumbnail || hHanamizuki.hotelImageUrl})
${wNabana.extract}
- **宿からのアクセス**: ホテル花水木・オリーブ・ナガシマから専用シャトルバスで約10〜15分。

### ナガシマスパーランド（三重県桑名市）
![ナガシマスパーランド](${wSpaLand.thumbnail || hOlive.hotelImageUrl})
${wSpaLand.extract}
- **宿からのアクセス**: オフィシャルホテル群に隣接。宿泊者は開園10分前に先行入場可能。

### 六華苑（三重県桑名市）
![六華苑](${wRokkaen.thumbnail || hRouteInn.hotelImageUrl})
${wRokkaen.extract}
- **宿からのアクセス**: ホテルルートイン桑名から車で約10分。ジョサイア・コンドル設計の重要文化財。

### 伊勢神宮（三重県伊勢市）
![伊勢神宮](${wIse.thumbnail || hSosukyo.hotelImageUrl})
${wIse.extract}
- **宿からのアクセス**: 桑名・長島から高速道路経由で約1時間15分。11月23日には秋の実りに感謝する「新嘗祭」が斎行されます。
`;

  return { postData, noteMarkdown };
};
