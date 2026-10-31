// scripts/new_articles/article6_kawaguchiko.js
module.exports = function buildArticle6(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "autumn-fuji-kawaguchiko-momiji-festival-lake-view-onsen-hotels-guide";
  const title = "【山梨・河口湖】富士河口湖紅葉まつり2026＆もみじ回廊ライトアップ完全攻略！紅葉と富士山の絶景パノラマ露天風呂を愉しむ厳選温泉宿5選";
  const description = "11月上旬から下旬にかけて湖畔が燃えるような朱に染まる「富士河口湖紅葉まつり」。メイン会場の「もみじ回廊」では、約60本の古木モミジが約150mにわたり光に浮かび上がり、昼は雪化粧をまとった霊峰富士と紅葉、夜は幻想的な光のトンネルが広がります。激しい渋滞を回避するアクセス法、夜間の冷え込み対策、河口湖畔で富士山を正面に望む露天風呂付き客室や老舗名旅館など厳選5宿を徹底解説。";
  const date = "2026-10-31";
  const prefecture = "山梨県";
  const area = "富士五湖・河口湖";

  const hKogetsu = hotels.find(h => h.hotelNo === 43939) || hotels[0];
  const hKonansou = hotels.find(h => h.hotelNo === 31111) || hotels[1];
  const hUbuya = hotels.find(h => h.hotelNo === 8053) || hotels[2];
  const hMaruei = hotels.find(h => h.hotelNo === 61663) || hotels[3];
  const hLaVista = hotels.find(h => h.hotelNo === 149122) || hotels[4];

  const wKawaguchiko = wiki["河口湖"] || {};
  const wFuji = wiki["富士山"] || {};
  const wOshino = wiki["忍野八海"] || {};
  const wArakurayama = wiki["新倉山浅間公園"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-red-950 via-amber-900 to-stone-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-amber-300 font-extrabold text-xs">
      <span>🍁</span><span>2026年 富士河口湖紅葉まつり速報</span>
    </div>
    <p class="text-xs text-stone-200">
      11月上旬〜下旬はもみじ回廊ライトアップと冠雪した富士山が重なる秋の絶景ピーク！湖畔道路は週末を中心に大混雑するため、湖畔名宿への早期チェックインが鉄則。
    </p>
  </div>
  <a href="${hKogetsu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    🍁 秀峰閣 湖月の空室・プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 mb-4">
  白銀の冠雪を抱く富士と、深紅のモミジが織りなす秋の最高峰パノラマ
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  富士五湖のなかでも随一の観光基盤を誇る河口湖。標高約830メートルに位置するこの湖畔一帯は、10月下旬を過ぎると急激に朝晩の冷え込みが厳しさを増し、周囲を取り巻くモミジやケヤキが息を呑むほどの鮮やかさで色づき始めます。澄み切った秋空の下、雪化粧を始めた霊峰富士の威容と、湖面にせり出す紅葉の枝葉が織りなすコントラストは、日本が世界に誇る秋の原風景そのものです。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  特に11月中旬、梨川沿いに約60本の古木モミジが連なる「もみじ回廊」では、昼間の壮麗な景観から一転、日没とともに光が灯され、真紅のトンネルが夜空に浮かび上がります。足元を流れる小川に敷き詰められた落葉の「紅葉の絨毯」もまた格別の風情。本特集では、祭りの混雑を巧みに回避しながら、温泉露天風呂から富士山と紅葉の絶景を独占できる厳選名宿5選と、現地取材に基づく攻略ルートを詳しくお伝えします。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-6">
  🎪 2026富士河口湖紅葉まつり＆もみじ回廊の見どころ・混雑回避テクニック
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-red-100 text-red-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">もみじ回廊と湖畔の絶景撮影ポイント</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>梨川「もみじ回廊」ライトアップ:</strong> 樹齢を重ねた巨木モミジが川の両岸から枝を交差させ、頭上を覆い尽くす光の回廊を形成します。点灯時間は日没（16:30頃）から21:40頃まで。奥の久保田一竹美術館側へ進むほど静寂が増し、落ち着いた鑑賞が可能です。</p>
      <p>② <strong>留守ヶ岩・もみじ街道の逆さ富士:</strong> もみじ回廊から西へ湖畔を進むと、富士山と河口湖、そして紅葉が一枚のフレームに収まる名撮影地が点在。早朝の風が止む時間帯は、湖面に映り込む「逆さ富士」との共演が狙えます。</p>
      <p>③ <strong>クラフト市と秋の味覚屋台:</strong> メイン会場周辺には地元農家の朝採れぶどう・甲州百目柿・甲州ワイン、名物ほうとうや焼き立てアユの塩焼きを供する屋台が立ち並び、秋の味覚散策も楽しめます。</p>
      <p>④ <strong>新倉山浅間公園の五重塔コラボ:</strong> 車で約15分、忠霊塔（五重塔）越しに富士山とモミジを一望する世界的人気スポット。午前中の順光時間帯の立ち寄りがベストです。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">実戦アドバイス</span>
      <h3 class="text-base font-bold text-stone-900">交通渋滞の回避と防寒の極意</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【週末の湖畔道路渋滞】</strong> 11月の土日、河口湖大橋北詰から北岸もみじ回廊へ続く県道21号は正午から20時頃まで激しい渋滞が発生します。臨時駐車場への入庫待ちに1時間以上を要することも珍しくありません。湖畔宿に14時前に到着して車を預け、徒歩または宿のレンタサイクルで会場入りするのが最も優雅な攻略法です。</p>
      <p><strong>【朝晩の気温差と防寒】</strong> 11月の河口湖の夜間気温は平気で5度を下回り、11月下旬には0度前後の冬日となる日もあります。湖畔の吹き下ろす冷風は体感温度をさらに下げます。風を通さないダウンコート、ニット帽、手袋、カイロを必ず携行してください。</p>
      <p><strong>【落葉の絨毯の時期】</strong> 11月中旬が見頃のピークですが、11月下旬の散り始めの時期は川底一面が紅葉の絨毯で埋め尽くされ、上を見ても下を見ても紅に染まる幻想的な光景に出会えます。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  🏨 富士山と紅葉のパノラマを堪能する！河口湖周辺の厳選名宿5選
</h2>

<!-- 宿1: 秀峰閣 湖月 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-red-100 text-red-900 font-black text-xs rounded-full">もみじ回廊徒歩3分・全室から富士山と湖を一望</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 富士河口湖温泉 秀峰閣 湖月（山梨県南都留郡富士河口湖町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-red-50 border border-red-300 text-red-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKogetsu.reviewAverage}（${hKogetsu.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKogetsu.hotelImageUrl}" alt="${hKogetsu.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKogetsu.roomImageUrl || hKogetsu.hotelImageUrl}" alt="${hKogetsu.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">河口湖北岸の特等席。さえぎるもののない霊峰富士と河口湖水鏡を望む絶景宿</p>
      <p>「秀峰閣 湖月」は、紅葉まつりのメイン会場「もみじ回廊」まで徒歩わずか3分という奇跡的な立地を誇る高級和風旅館。最大の魅力は、全客室および露天風呂から電柱や建物の遮りなく富士山と河口湖が正面に広がるパノラマビューです。湖畔に面した庭園露天風呂に身を沈めれば、湯気の向こうに夕日に赤く染まる富士の峰が浮かび上がります。もみじ回廊への夜間散策も手ぶらでふらりと出かけられる抜群のフットワークが約束されます。夕食は旬の甲州ワインビーフや甲斐サーモンを盛り込んだ上品な創作会席をお部屋または個室で贅沢に味わえます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hKogetsu.address1}${hKogetsu.address2}</p>
        <p><strong>【アクセス】</strong> ${hKogetsu.access}</p>
        <p><strong>【温泉・施設】</strong> 河口湖温泉（カルシウム・ナトリウム・硫酸塩・塩化物泉）。露天風呂付き客室、足湯付きテラス完備。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hKogetsu.hotelMinCharge || 26000).toLocaleString()}〜</span>
        <a href="${hKogetsu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          秀峰閣 湖月の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 湖南荘 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">屋上足湯パノラマ＆多彩な天然温泉貸切風呂</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 富士河口湖温泉 湖南荘（山梨県南都留郡富士河口湖町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKonansou.reviewAverage}（${hKonansou.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKonansou.hotelImageUrl}" alt="${hKonansou.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKonansou.roomImageUrl || hKonansou.hotelImageUrl}" alt="${hKonansou.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">屋上展望足湯「フットスパ湖景」から望む360度の大パノラマと細やかな和のおもてなし</p>
      <p>河口湖温泉街の中心、船津浜に佇む「湖南荘」は、きめ細やかなホスピタリティで世代を問わず絶賛される純和風温泉旅館。屋上にある展望足湯「フットスパ湖景」からは、正面に雄大な富士山、眼下に穏やかな河口湖が広がり、足元から温まりながら秋の黄昏を過ごせます。露天風呂付き客室や趣の異なる3つの天然温泉貸切風呂を備え、プライベートな湯浴みを満喫したいカップルやご家族に最適。夕食はお部屋食または個室ダイニングにて、山梨の恵みを織り交ぜた月替わりの本格会席料理が供されます。河口湖駅からの無料送迎もあり、電車・バス派の旅行者にも安心です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hKonansou.address1}${hKonansou.address2}</p>
        <p><strong>【アクセス】</strong> ${hKonansou.access}</p>
        <p><strong>【温泉・施設】</strong> 屋上足湯、富士山展望大浴場、貸切露天風呂、エステサロン、料亭個室。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hKonansou.hotelMinCharge || 22000).toLocaleString()}〜</span>
        <a href="${hKonansou.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          湖南荘の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: うぶや -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-rose-100 text-rose-900 font-black text-xs rounded-full">「人生を祝う宿」全客室＆大浴場から富士山一望</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 河口湖温泉 うぶや（山梨県南都留郡富士河口湖町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-rose-50 border border-rose-300 text-rose-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hUbuya.reviewAverage}（${hUbuya.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hUbuya.hotelImageUrl}" alt="${hUbuya.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hUbuya.roomImageUrl || hUbuya.hotelImageUrl}" alt="${hUbuya.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">産屋ヶ崎の絶景地に位置し、還暦や誕生日など特別な記念日を祝福する最高峰のホスピタリティ</p>
      <p>富士山と河口湖が最も美しく見える名勝「産屋ヶ崎」に佇む「うぶや」は、「人生を祝う宿」をコンセプトに掲げるハイエンド旅館。すべての客室に大きなピクチャーウィンドウが設えられ、まるで絵画のような富士山が眼前に迫ります。館内の大浴場「茶神の湯」や寝湯、露天風呂からも雄大な富士を眺めながらの贅沢な湯浴みが叶います。名物の黒毛和牛のしゃぶしゃぶや会席料理は素材の旨味が際立ち、スタッフによる心温まるおもてなしとお祝いの演出は旅の記憶に深く刻まれます。紅葉まつり会場までも車で約5分、朝の散策にも絶好の立地です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hUbuya.address1}${hUbuya.address2}</p>
        <p><strong>【アクセス】</strong> ${hUbuya.access}</p>
        <p><strong>【温泉・施設】</strong> 露天風呂付き客室、富士山眺望大浴場、ラウンジ、マッサージサロン。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hUbuya.hotelMinCharge || 35000).toLocaleString()}〜</span>
        <a href="${hUbuya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          うぶやの宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 若草の宿 丸栄 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">富士山一望の屋上展望露天「富士の湯」と名物会席</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 富士河口湖温泉 若草の宿 丸栄（山梨県南都留郡富士河口湖町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hMaruei.reviewAverage}（${hMaruei.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMaruei.hotelImageUrl}" alt="${hMaruei.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMaruei.roomImageUrl || hMaruei.hotelImageUrl}" alt="${hMaruei.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">静寂に包まれた南岸の老舗宿。最上階の見晴らし露天風呂と季節の旬を凝縮した日本料理</p>
      <p>河口湖南岸の閑静な入り江に位置する「若草の宿 丸栄」は、日本の伝統的な数寄屋建築と心尽くしの料理でもてなす本格温泉旅館。最上階にある展望露天風呂「富士の湯」からは裾野まで広がる富士山を、「湖の湯」からは秋の気配深まる河口湖の水面を一望できます。喧騒から離れた落ち着きある環境は、大人の静かな紅葉鑑賞旅行にうってつけ。夕食は旬の川魚や甲州牛、山菜やきのこなど地元の山の幸を贅沢に仕立てた季節会席をお部屋でゆっくり味わえます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hMaruei.address1}${hMaruei.address2}</p>
        <p><strong>【アクセス】</strong> ${hMaruei.access}</p>
        <p><strong>【温泉・施設】</strong> 最上階展望露天風呂（富士の湯・湖の湯）、貸切展望風呂、宴会場、茶室。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hMaruei.hotelMinCharge || 20000).toLocaleString()}〜</span>
        <a href="${hMaruei.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          若草の宿 丸栄の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: ラビスタ富士河口湖 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-indigo-100 text-indigo-900 font-black text-xs rounded-full">プロヴァンス風洋館・全室富士山眺望ビューバス付き</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. ラビスタ富士河口湖（共立リゾート）（山梨県南都留郡富士河口湖町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-indigo-50 border border-indigo-300 text-indigo-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hLaVista.reviewAverage}（${hLaVista.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hLaVista.hotelImageUrl}" alt="${hLaVista.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hLaVista.roomImageUrl || hLaVista.hotelImageUrl}" alt="${hLaVista.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">南仏プロヴァンスの薫り漂う高台のリゾート。ビューバスから富士山と紅葉のパノラマを満喫</p>
      <p>河口湖北岸の高台に佇む「ラビスタ富士河口湖」は、共立リゾートが手掛ける南仏プロヴァンス様式の瀟洒なリゾートホテル。すべての客室のバルコニーやビューバスから、湖越しにそびえる富士山を一望できます。館内には富士山を望む大浴場や露天風呂のほか、竹炭・レンガ・モザイクタイル・岩造りなど趣の異なる4種の無料貸切風呂を完備。夕食は山梨県産食材を贅沢に使った洋食フルコース、夜は名物の「夜鳴きそば」の無料サービスも好評です。もみじ回廊までは徒歩約10分と散策にも最適です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hLaVista.address1}${hLaVista.address2}</p>
        <p><strong>【アクセス】</strong> ${hLaVista.access}</p>
        <p><strong>【温泉・施設】</strong> 天然温泉大浴場、4種の無料貸切風呂、ビューバス付き客室、レストラン。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hLaVista.hotelMinCharge || 18000).toLocaleString()}〜</span>
        <a href="${hLaVista.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          ラビスタ富士河口湖の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="nearby-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs text-stone-600 mb-6">
  河口湖周辺の紅葉名所や霊峰富士ゆかりの名所を厳選。宿からの移動時間や巡回ルートの参考にご活用ください。
</p>

<div class="space-y-6 my-6">
  <!-- スポット1: 河口湖 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wKawaguchiko.thumbnail || hKogetsu.hotelImageUrl}" alt="河口湖" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-800 font-bold text-[11px] rounded-md">🌊 富士五湖・世界遺産構成資産</span>
        <h3 class="text-base font-bold text-stone-900">河口湖（山梨県富士河口湖町）</h3>
        <p>${wKawaguchiko.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 各宿の目の前または徒歩数分。湖畔遊歩道の散策や河口湖遊覧船「天晴」での紅葉クルーズが楽しめます。</p>
      </div>
    </div>
  </div>

  <!-- スポット2: 富士山 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wFuji.thumbnail || hKonansou.hotelImageUrl}" alt="富士山" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-red-100 text-red-800 font-bold text-[11px] rounded-md">🗻 日本最高峰・世界文化遺産</span>
        <h3 class="text-base font-bold text-stone-900">富士山（山梨県・静岡県）</h3>
        <p>${wFuji.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 今回紹介した全宿の客室や露天風呂から冠雪した富士の峰を直接一望できます。</p>
      </div>
    </div>
  </div>

  <!-- スポット3: 忍野八海 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wOshino.thumbnail || hUbuya.hotelImageUrl}" alt="忍野八海" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[11px] rounded-md">💧 国指定天然記念物・湧水群</span>
        <h3 class="text-base font-bold text-stone-900">忍野八海（山梨県南都留郡忍野村）</h3>
        <p>${wOshino.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 河口湖畔各宿から車で約20分。富士山の雪解け水が数十年の歳月をかけて湧き出る透明度抜群の池と藁葺き屋根の秋景色が広がります。</p>
      </div>
    </div>
  </div>

  <!-- スポット4: 新倉山浅間公園 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wArakurayama.thumbnail || hMaruei.hotelImageUrl}" alt="新倉山浅間公園" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-800 font-bold text-[11px] rounded-md">⛩️ 忠霊塔と富士の絶景</span>
        <h3 class="text-base font-bold text-stone-900">新倉山浅間公園（山梨県富士吉田市）</h3>
        <p>${wArakurayama.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 河口湖畔から車で約15分。398段の咲くや姫階段を上ると、五重塔と富士山、周囲の紅葉が共演する世界的名パノラマに出会えます。</p>
      </div>
    </div>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  🗺️ 富士河口湖紅葉まつり 1泊2日満喫モデルコース
</h2>
<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-red-50/60 to-amber-50/40 border border-red-200 space-y-4 text-xs text-stone-700 leading-relaxed">
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【1日目】新倉山浅間公園から河口湖へ・もみじ回廊ライトアップ鑑賞</h3>
    <p>11:00に富士吉田「新倉山浅間公園」に到着。五重塔と雪化粧した富士山の秋景色を撮影。12:30に吉田うどんの名店でコシの強い郷土うどんを堪能。14:00に渋滞が本格化する前に「秀峰閣 湖月」など河口湖北岸の宿にチェックインし車を預ける。15:30から夕暮れの湖畔を散策し、日没の16:30にもみじ回廊へ。ライトアップに照らし出される真紅のトンネルを鑑賞後、19:00に宿に戻って富士山を正面に望む露天風呂で温まり、甲州ワインビーフの会席に舌鼓を打つ。</p>
  </div>
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【2日目】早朝の逆さ富士鑑賞と忍野八海・勝沼ワイナリーへ</h3>
    <p>早朝6:30、風の凪いだ時間に客室テラスから湖面に映る「逆さ富士」を拝む。朝食後、宿をチェックアウトして「忍野八海」へ移動（車で約20分）。透き通る湧水池と藁葺き屋根の原風景を巡る。昼食は名物のほうとうを味わい、午後は御坂峠を越えて勝沼エリアへ足を伸ばし、老舗ワイナリーで搾りたての新酒ワインを試飲・購入して帰路へ。</p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-3 my-6 text-xs text-stone-800">
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q1. 紅葉まつりのライトアップ時間は何時までですか？</h3>
    <p class="text-stone-600">A. もみじ回廊のライトアップは日没（例年16:30頃）から21:40頃まで点灯しています。20時を過ぎると日帰りバスツアーの団体客が引き上げるため、落ち着いて撮影や散策を楽しみたい方は20:00〜21:30の時間帯が狙い目です。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q2. 車のタイヤはスタッドレスが必要ですか？</h3>
    <p class="text-stone-600">A. 11月上旬から中旬の平野部はノーマルタイヤで通行可能な日がほとんどですが、11月下旬になると強い寒波の到来時に早朝・深夜の路面凍結や峠道での降雪の可能性があります。最新の週間天気予報を確認し、11月下旬以降はチェーン携行または冬用タイヤの装着を推奨します。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q3. 河口湖駅から会場までの公共交通機関はありますか？</h3>
    <p class="text-stone-600">A. 富士急行線「河口湖駅」から「河口湖周遊バス（レッドライン）」が運行しており、「久保田一竹美術館」バス停下車ですぐです。ただし紅葉まつり期間中の夕方は道路混雑でダイヤが乱れやすいため、時間の余裕を持った行動をおすすめします。</p>
  </div>
</div>

<div class="my-8 p-6 rounded-3xl bg-red-50/60 border border-red-200">
  <h3 class="text-sm font-bold text-red-950 mb-2">🔗 あわせてチェックしたい富士五湖・山梨の旅行特集</h3>
  <ul class="text-xs space-y-1.5 font-medium text-stone-700">
    <li>👉 <a href="/prefectures/yamanashi/" class="text-red-800 hover:text-red-600 underline">山梨県の観光名所・名湯温泉＆厳選ホテルガイド</a></li>
    <li>👉 <a href="/furusato-tax-fuji-view-onsen-resort-stay/" class="text-red-800 hover:text-red-600 underline">富士山ビュー露天風呂宿×ふるさと納税宿泊ガイド</a></li>
    <li>👉 <a href="/furusato-tax-winery-craft-beer-auberge-stay/" class="text-red-800 hover:text-red-600 underline">勝沼・富良野ワイナリー＆醸造オーベルジュ特集</a></li>
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
    hot_spring_info: "河口湖温泉（カルシウム・ナトリウム・硫酸塩・塩化物泉。神経痛、冷え性、疲労回復に効能）",
    parking_info: "各宿に無料駐車場完備。紅葉まつり期間中の湖畔道路渋滞時は早めのチェックインと宿の徒歩移動推奨。",
    meal_availability: "甲州ワインビーフステーキ・富士桜ポーク・甲斐サーモンのお造り・地元手打ちほうとう・季節の懐石料理",
    hotel_name: "富士河口湖紅葉まつり周辺 厳選温泉宿5選",
    image: hKogetsu.hotelImageUrl,
    affiliate_url: hKogetsu.affiliateUrl,
    categories: ["11月旅行", "紅葉", "温泉宿", "ライトアップ", "富士山", "山梨旅行"],
    keywords: [
      "富士河口湖紅葉まつり 2026",
      "もみじ回廊 ライトアップ",
      "河口湖 温泉 ホテル おすすめ",
      "秀峰閣 湖月",
      "湖南荘 河口湖",
      "うぶや 富士山",
      "若草の宿 丸栄",
      "ラビスタ富士河口湖",
      "河口湖 富士山 露天風呂",
      "山梨 11月 イベント"
    ],
    review: reviewHtml,
    price: hKogetsu.hotelMinCharge || 26000,
    rating: hKogetsu.reviewAverage || 4.7,
    date: date,
    other_images: [
      hKonansou.hotelImageUrl,
      hUbuya.hotelImageUrl,
      hMaruei.hotelImageUrl,
      hLaVista.hotelImageUrl,
      wKawaguchiko.thumbnail,
      wFuji.thumbnail
    ].filter(Boolean),
    summary: description,
    review_count: (hKogetsu.reviewCount || 0) + (hKonansou.reviewCount || 0),
    family_friendly: "はい、客室露天風呂や多彩な貸切風呂、お部屋食対応の宿が多く、三世代旅行やファミリーにも安心です。"
  };

  const noteMarkdown = `---
title: "${title}"
date: "${date}"
description: "${description}"
tags: ["河口湖", "紅葉まつり", "もみじ回廊", "富士山", "河口湖温泉", "山梨旅行", "楽天トラベル"]
---

澄み切った秋空の下、雪化粧を始めた霊峰富士の威容と、湖面にせり出す紅葉の枝葉が織りなすコントラスト。山梨県・河口湖畔で毎年11月に開催される「富士河口湖紅葉まつり」は、日本屈指の秋の絶景イベントとして全国から多くの旅人を惹きつけます。

メイン会場となる「もみじ回廊」では、約60本の巨木モミジが約150メートルにわたって梨川沿いに連なり、日没を迎えると幻想的なライトアップの光に包まれます。昼は冠雪した富士山を背にした鮮烈な紅葉、夜は真紅の光の回廊、そして足元に広がる落葉の絨毯と、息を呑む景観が展開します。

本記事では、祭りの混雑を巧みに回避しながら、客室や露天風呂から富士山と紅葉のパノラマを独占できる楽天トラベル高評価の名宿5選と、現地取材に基づく攻略ルートを詳しく解説します。

---

## 🍁 富士河口湖紅葉まつり＆もみじ回廊の攻略ポイント
- **開催期間**: 11月上旬〜11月下旬（見頃のピークは11月中旬、落葉の絨毯は11月下旬）
- **ライトアップ時間**: 日没（16:30頃）〜21:40頃まで点灯
- **混雑ピークと渋滞対策**: 週末の13:00〜19:00は河口湖北岸の県道21号が大渋滞します。湖畔宿へ14:00前にチェックインして車を預け、徒歩またはレンタサイクルで会場へ向かうのがベスト。
- **夜間の防寒**: 標高約830mのため、11月の夜間は気温が0〜5度まで冷え込みます。風を通さないダウンコート、手袋、マフラーを必ず準備しましょう。
- **20時以降の狙い目時間**: 日帰りバスツアーの団体客が引き上げる20:00〜21:30は比較的ゆったり鑑賞できます。

---

## 1. 富士河口湖温泉 秀峰閣 湖月（山梨県南都留郡富士河口湖町）
![秀峰閣 湖月](${hKogetsu.hotelImageUrl})
紅葉まつりメイン会場「もみじ回廊」まで徒歩3分。全客室および庭園露天風呂から電柱や建造物の遮りなく富士山と河口湖が正面に広がる奇跡の立地。夜のライトアップ散策へも手ぶらで出かけられ、夕食は甲州牛や甲斐サーモンを盛り込んだ創作会席を堪能できます。

- **楽天トラベル総合評価**: ★${hKogetsu.reviewAverage}（クチコミ ${hKogetsu.reviewCount}件）
- **目安料金**: 1名 ¥${(hKogetsu.hotelMinCharge || 26000).toLocaleString()}〜
- **所在地**: ${hKogetsu.address1}${hKogetsu.address2}
- **アクセス**: ${hKogetsu.access}
- **駐車場**: ${hKogetsu.parkingInformation}
- [👉 秀峰閣 湖月の宿泊プラン・空室状況を見る](${hKogetsu.affiliateUrl})

---

## 2. 富士河口湖温泉 湖南荘（山梨県南都留郡富士河口湖町）
![湖南荘](${hKonansou.hotelImageUrl})
屋上展望足湯「フットスパ湖景」から望む360度の大パノラマ。正面に雄大な富士山、眼下に河口湖を一望。露天風呂付き客室や3つの天然温泉貸切風呂を備え、お部屋食または個室ダイニングでいただく月替わりの本格会席が評判の老舗宿です。

- **楽天トラベル総合評価**: ★${hKonansou.reviewAverage}（クチコミ ${hKonansou.reviewCount}件）
- **目安料金**: 1名 ¥${(hKonansou.hotelMinCharge || 22000).toLocaleString()}〜
- **所在地**: ${hKonansou.address1}${hKonansou.address2}
- **アクセス**: ${hKonansou.access}
- **駐車場**: ${hKonansou.parkingInformation}
- [👉 湖南荘の宿泊プラン・空室状況を見る](${hKonansou.affiliateUrl})

---

## 3. 河口湖温泉 うぶや（山梨県南都留郡富士河口湖町）
![うぶや](${hUbuya.hotelImageUrl})
「人生を祝う宿」を掲げるハイエンド旅館。名勝・産屋ヶ崎に位置し、全客室の大きなピクチャーウィンドウから富士山が迫ります。大浴場「茶神の湯」や寝湯からの眺望も圧巻。名物の黒毛和牛しゃぶしゃぶと、大切な記念日を華やかに彩るおもてなしが格別です。

- **楽天トラベル総合評価**: ★${hUbuya.reviewAverage}（クチコミ ${hUbuya.reviewCount}件）
- **目安料金**: 1名 ¥${(hUbuya.hotelMinCharge || 35000).toLocaleString()}〜
- **所在地**: ${hUbuya.address1}${hUbuya.address2}
- **アクセス**: ${hUbuya.access}
- **駐車場**: ${hUbuya.parkingInformation}
- [👉 うぶやの宿泊プラン・空室状況を見る](${hUbuya.affiliateUrl})

---

## 4. 富士河口湖温泉 若草の宿 丸栄（山梨県南都留郡富士河口湖町）
![若草の宿 丸栄](${hMaruei.hotelImageUrl})
南岸の閑静な入り江に佇む数寄屋造りの名旅館。最上階の展望露天風呂「富士の湯」からは裾野まで広がる富士を、「湖の湯」からは穏やかな湖面を一望。地元の山の幸や甲州牛を贅沢に仕立てた季節会席をお部屋でゆっくり味わえます。

- **楽天トラベル総合評価**: ★${hMaruei.reviewAverage}（クチコミ ${hMaruei.reviewCount}件）
- **目安料金**: 1名 ¥${(hMaruei.hotelMinCharge || 20000).toLocaleString()}〜
- **所在地**: ${hMaruei.address1}${hMaruei.address2}
- **アクセス**: ${hMaruei.access}
- **駐車場**: ${hMaruei.parkingInformation}
- [👉 若草の宿 丸栄の宿泊プラン・空室状況を見る](${hMaruei.affiliateUrl})

---

## 5. ラビスタ富士河口湖（共立リゾート）（山梨県南都留郡富士河口湖町）
![ラビスタ富士河口湖](${hLaVista.hotelImageUrl})
南仏プロヴァンス様式の優雅なリゾートホテル。北岸の高台から富士山と河口湖を見下ろす全室ビューバス付き。富士山展望大浴場に加え、4種の無料貸切風呂、山梨県産食材の洋食フルコース、夜鳴きそばサービスなど魅力が詰まっています。

- **楽天トラベル総合評価**: ★${hLaVista.reviewAverage}（クチコミ ${hLaVista.reviewCount}件）
- **目安料金**: 1名 ¥${(hLaVista.hotelMinCharge || 18000).toLocaleString()}〜
- **所在地**: ${hLaVista.address1}${hLaVista.address2}
- **アクセス**: ${hLaVista.access}
- **駐車場**: ${hLaVista.parkingInformation}
- [👉 ラビスタ富士河口湖の宿泊プラン・空室状況を見る](${hLaVista.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

### 河口湖（山梨県富士河口湖町）
![河口湖](${wKawaguchiko.thumbnail || hKogetsu.hotelImageUrl})
${wKawaguchiko.extract}
- **宿からのアクセス**: 宿の目の前または徒歩すぐ。湖畔遊歩道の紅葉散策や遊覧船クルーズが楽しめます。

### 富士山（山梨県・静岡県）
![富士山](${wFuji.thumbnail || hKonansou.hotelImageUrl})
${wFuji.extract}
- **宿からのアクセス**: 各宿の客室や展望露天風呂から、冠雪した壮麗な姿を直に望むことができます。

### 忍野八海（山梨県南都留郡忍野村）
![忍野八海](${wOshino.thumbnail || hUbuya.hotelImageUrl})
${wOshino.extract}
- **宿からのアクセス**: 河口湖畔から車で約20分。透明度抜群の神聖な湧水池と藁葺き屋根の原風景が広がります。

### 新倉山浅間公園（山梨県富士吉田市）
![新倉山浅間公園](${wArakurayama.thumbnail || hMaruei.hotelImageUrl})
${wArakurayama.extract}
- **宿からのアクセス**: 河口湖畔から車で約15分。忠霊塔・富士山・紅葉が織りなす世界的人気の絶景スポットです。
`;

  return { postData, noteMarkdown };
};
