// scripts/new_articles/article14_kanazawa.js
module.exports = function buildArticle14(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "autumn-winter-kanazawa-kenrokuen-yukitsuri-crab-kaiseki-onsen-hotels-guide";
  const title = "【石川・金沢/加賀】兼六園の雪吊り＆秋の段ライトアップ2026完全攻略！11月解禁の加能ガニ・香箱ガニと名湯・山中温泉・辰口温泉を巡る厳選極上宿5選";
  const description = "11月1日に始まる兼六園の冬支度「雪吊り」と、モミジが黄金色の縄に映える夜間ライトアップ「四季物語 秋の段」。そして11月6日には日本海の冬の味覚の王様「加能ガニ（ズワイガニ）」と内子・外子が詰まった「香箱ガニ」の漁がいよいよ解禁！近江町市場の熱気、金沢城と兼六園の無料開園スケジュール、極上の茹でガニ・焼きガニ会席と加賀の名湯に癒やされる厳選名宿5選を徹底解説。";
  const date = "2026-11-01";
  const prefecture = "石川県";
  const area = "金沢・加賀温泉郷・白山";

  const hMatsusaki = hotels.find(h => h.hotelNo === 38847) || hotels[0];
  const hHanamurasaki = hotels.find(h => h.hotelNo === 67297) || hotels[1];
  const hYunokuni = hotels.find(h => h.hotelNo === 1616) || hotels[2];
  const hSanraku = hotels.find(h => h.hotelNo === 9004) || hotels[3];
  const hKagari = hotels.find(h => h.hotelNo === 68251) || hotels[4];

  const wKenrokuen = wiki["兼六園"] || {};
  const wKanazawajo = wiki["金沢城"] || {};
  const wHigashi = wiki["ひがし茶屋街"] || {};
  const wOmicho = wiki["近江町市場"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-red-950 via-amber-900 to-stone-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-amber-300 font-extrabold text-xs">
      <span>🦀</span><span>2026年 兼六園雪吊り＆北陸カニ漁解禁速報</span>
    </div>
    <p class="text-xs text-stone-200">
      11月1日に兼六園の雪吊り作業が始動し、11月6日には待望の「加能ガニ・香箱ガニ」が解禁！紅葉ライトアップと初物の冬ガニが重なる11月〜12月は北陸旅行の年間最頂点です。
    </p>
  </div>
  <a href="${hMatsusaki.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    🦀 金沢辰口温泉 まつさきの空室・プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 mb-4">
  唐崎松の円錐形が描く幾何学美と、日本海の荒波が育むズワイガニの王座
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  加賀百万石の城下町として優美な伝統文化を今に伝える石川県・金沢。11月の訪れとともに、日本三名園のひとつ「兼六園」では、重い湿雪から枝を守るための伝統技法「雪吊り（ゆきづり）」の作業が一斉に幕を開けます。名木「唐崎松（からさきのまつ）」の頭頂部から放射状に張られた数百本もの荒縄が幾何学模様を描き、深まる秋のモミジやドウダンツツジの紅と織りなす景観は、北陸の冬の到来を告げる叙情詩そのものです。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  そして11月6日、日本海沿岸の漁港が一斉に活気づきます。石川県産オスのズワイガニ「加能（かのう）ガニ」と、メスの「香箱（こうばこ）ガニ」の漁が解禁されるのです。ぎっしりと詰まった濃厚なカニ味噌と上品な甘みの脚肉、そして香箱ガニの内子（うちこ）と外子（そとこ）のプチプチとした旨味。11月から12月にかけての石川は、紅葉と雪吊りの絶景を愛で、解禁直後の最高峰のカニ会席を堪能し、加賀の名湯に身を沈めるという、日本の旅の贅沢を極めた体験が叶います。今回は兼六園ライトアップの攻略法とともに、カニ尽くし会席と源泉露天風呂が自慢の珠玉の名宿5選を徹底解説します。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-6">
  🎪 2026兼六園・金沢城ライトアップ「四季物語 秋の段」＆カニ解禁攻略術
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-red-100 text-red-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">兼六園雪吊りライトアップ＆近江町市場</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>兼六園・金沢城四季物語「秋の段」:</strong> 例年11月中旬〜下旬の週末を中心に開催。夜間は兼六園が無料開放され、唐崎松の雪吊りと霞ヶ池の水鏡、徽軫灯籠（ことじとうろう）が黄金の光に浮かび上がります。点灯時間は17:30〜20:45頃まで。</p>
      <p>② <strong>雪吊り作業の実演見学:</strong> 11月1日から約1ヶ月半をかけて園内数百本の樹木に雪吊りが施されます。庭師が竿の先端から縄を投げ下ろす伝統の職人技を間近で見学できるのは11月前半の昼間ならではの特権です。</p>
      <p>③ <strong>11月6日解禁！加能ガニと香箱ガニ:</strong> 加能ガニ（青タグ）は太い脚に甘みが凝縮。香箱ガニは12月末までの約2ヶ月間しか味わえない貴重な味覚で、甲羅に内子・外子・身を美しく盛り付けた「カニ面」はおでん種や会席の華として必食です。</p>
      <p>④ <strong>活気あふれる近江町市場:</strong> カニ解禁直後の市場内は初物のズワイガニが山積みにされ、威勢の良い掛け声が響き渡ります。早朝のセリ落とし直後のカニ丼や海鮮丼の食べ歩きも最高の贅沢です。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">実戦アドバイス</span>
      <h3 class="text-base font-bold text-stone-900">宿の選び方と「弁当忘れても傘忘れるな」の気候</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【金沢市内泊 vs 加賀温泉郷泊】</strong> 金沢市街地のホテル（白鳥路ホテル山楽など）は兼六園ライトアップや近江町市場に徒歩でアクセスできる機動力が魅力。一方、車や特急で30〜40分の山中温泉・山代温泉・辰口温泉は、広大な露天風呂と本格的なフルコースカニ会席をお部屋食でじっくり愉しめるのが最大の醍醐味です。</p>
      <p><strong>【北陸特有の「しぐれ」と防寒】</strong> 「弁当忘れても傘忘れるな」と言われる金沢の11月。急な通り雨（時雨）や雷雨、霰（あられ）に見舞われることが日常茶飯事です。折りたたみ傘またはフード付きの撥水・防寒コートを必ず準備してください。</p>
      <p><strong>【カニプランの早期予約】</strong> 加能ガニ・活ズワイガニを一人1杯以上使った本生カニプランは仕入れ数が限られるため、11月〜12月は週末を中心に早い段階で満室となります。日程が決まり次第の早期予約が鉄則です。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  🏨 加能ガニ会席と極上名湯！金沢・加賀温泉郷の厳選宿5選
</h2>

<!-- 宿1: 辰口温泉 まつさき -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">金沢郊外・泉鏡花ゆかりの広大な日本庭園と露天風呂付き客室</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 金沢辰口温泉 まつさき（石川県能美市辰口町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hMatsusaki.reviewAverage}（${hMatsusaki.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMatsusaki.hotelImageUrl}" alt="${hMatsusaki.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMatsusaki.roomImageUrl || hMatsusaki.hotelImageUrl}" alt="${hMatsusaki.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">金沢市内から車で約30分。文豪・泉鏡花が逗留した池泉回遊式庭園と最高峰カニ懐石</p>
      <p>天保7年（1836年）創業、文豪・泉鏡花が小説『海の鳴る時』を執筆したことでも知られる「まつさき」。約1万坪もの広大な日本庭園を抱き、庭園を囲むように新館「鳳凰」や本館の客室が配されています。多くの客室に源泉露天風呂が備わり、庭園のモミジや初冬の雪景色を眺めながら、開湯1400年の辰口の名湯に浸ることができます。最大のハイライトは料理長自らが厳選する加賀懐石。冬は解禁されたばかりの加能ガニを焼きガニ、茹でガニ、カニ刺し、甲羅味噌焼きなど多彩な技で味わい尽くせます。金沢観光の喧騒を離れ、至高の贅に浸りたい旅人に選ばれる名門宿です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hMatsusaki.address1}${hMatsusaki.address2}</p>
        <p><strong>【アクセス】</strong> ${hMatsusaki.access}</p>
        <p><strong>【温泉・施設】</strong> 庭園露天風呂、大浴場、貸切風呂、露天風呂付き客室、茶室、庭園ラウンジ。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hMatsusaki.hotelMinCharge || 36000).toLocaleString()}〜</span>
        <a href="${hMatsusaki.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          辰口温泉 まつさきの宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 山中温泉 花紫 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-red-100 text-red-900 font-black text-xs rounded-full">楽天評価★5.0満点・鶴仙渓を見下ろすアラカルト懐石</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 山中温泉 花紫（石川県加賀市山中温泉東町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-red-50 border border-red-300 text-red-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hHanamurasaki.reviewAverage}（${hHanamurasaki.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hHanamurasaki.hotelImageUrl}" alt="${hHanamurasaki.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hHanamurasaki.roomImageUrl || hHanamurasaki.hotelImageUrl}" alt="${hHanamurasaki.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">鶴仙渓の絶景黒谷橋のたもとに佇む、楽天トラベル評価5点満点の奇跡の美食宿</p>
      <p>「花紫」は、山中温泉の名勝・鶴仙渓を見下ろす最高のロケーションに位置し、楽天トラベル評価において満点の★5.0を誇る極上の隠れ宿。全客室の窓から、渓谷を染め上げる紅葉と清流のダイナミックな景観が広がります。最上階の展望露天風呂「ひらの湯」からは、錦秋の山並みを見渡しながら名湯を満喫。最大の特長は、約50種類の旬の小皿から自分好みの献立を自由に組み立てられる「アラカルト懐石」。冬はもちろん水揚げされたばかりの加能ガニや香箱ガニ、のどぐろを最高の調理法で好きなだけオーダーできる究極の美食体験が待っています。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hHanamurasaki.address1}${hHanamurasaki.address2}</p>
        <p><strong>【アクセス】</strong> ${hHanamurasaki.access}</p>
        <p><strong>【温泉・施設】</strong> 展望露天風呂、展望大浴場、サウナ、茶房ラウンジ、ギャラリー。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hHanamurasaki.hotelMinCharge || 42000).toLocaleString()}〜</span>
        <a href="${hHanamurasaki.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          山中温泉 花紫の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 山代温泉 ゆのくに天祥 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">一泊三湯十八ゆめぐり・自家源泉の美肌湯とカニ三昧</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 山代温泉 ゆのくに天祥（石川県加賀市山代温泉）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hYunokuni.reviewAverage}（${hYunokuni.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hYunokuni.hotelImageUrl}" alt="${hYunokuni.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hYunokuni.roomImageUrl || hYunokuni.hotelImageUrl}" alt="${hYunokuni.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">「一泊三湯十八ゆめぐり」で名湯を満喫。自家源泉の天然温泉と北陸冬の王道カニ会席</p>
      <p>「ゆのくに天祥」は、山代温泉を代表する大型名門温泉旅館。自慢は趣の異なる3つの大浴場に備えられた計18種類もの湯舟を巡る「一泊三湯十八ゆめぐり」です。敷地内から湧出する自家源泉と山代温泉の引湯をブレンドした弱アルカリ性の湯は肌に優しく、温泉好きを唸らせます。冬の夕食プランでは、姿ズワイガニの浜茹でや焼きガニ、カニ鍋、カニ雑炊などカニを余すことなく味わい尽くす「カニ会席」が大人気。広々とした客室や多彩な館内施設が充実しており、家族旅行や三世代での冬旅にも最も安心して選べる宿です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hYunokuni.address1}${hYunokuni.address2}</p>
        <p><strong>【アクセス】</strong> ${hYunokuni.access}</p>
        <p><strong>【温泉・施設】</strong> 悠久の湯・滝の湯・九谷の湯（計18湯舟）、エステ、ラウンジ、無料送迎バスあり。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hYunokuni.hotelMinCharge || 18000).toLocaleString()}〜</span>
        <a href="${hYunokuni.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          ゆのくに天祥の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 金沢白鳥路 ホテル山楽 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-purple-100 text-purple-900 font-black text-xs rounded-full">兼六園徒歩5分・金沢市内唯一の天然温泉と大正ロマン</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 金沢白鳥路 ホテル山楽（石川県金沢市丸の内）</h3>
    </div>
    <span class="px-3 py-1.5 bg-purple-50 border border-purple-300 text-purple-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hSanraku.reviewAverage}（${hSanraku.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hSanraku.hotelImageUrl}" alt="${hSanraku.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hSanraku.roomImageUrl || hSanraku.hotelImageUrl}" alt="${hSanraku.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">金沢城公園に隣接し兼六園まで徒歩約5分。ステンドグラス煌めくクラシック空間と琥珀色の名湯</p>
      <p>「金沢白鳥路 ホテル山楽」は、金沢城公園の「白鳥路」に隣接し、兼六園まで徒歩わずか5分という奇跡的な立地を誇るクラシックホテル。館内は大正ロマンの情緒漂うステンドグラスや九谷焼、金箔工芸が散りばめられ、古都金沢の美意識に包まれます。金沢市街地の中心にありながら、地下から湧出する炭酸水素塩泉の天然温泉大浴場を完備。とろりとした琥珀色の湯が、冷え込んだ夜の兼六園散策の身体を優しく癒やします。朝食ブッフェは近江町市場直送の海の幸や金沢おでん、治部煮など加賀の郷土料理がずらりと並ぶ豪華絢爛な内容です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hSanraku.address1}${hSanraku.address2}</p>
        <p><strong>【アクセス】</strong> ${hSanraku.access}</p>
        <p><strong>【温泉・施設】</strong> 自家源泉天然温泉大浴場、サウナ、ティーラウンジ、郷土料理ダイニング。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hSanraku.hotelMinCharge || 17000).toLocaleString()}〜</span>
        <a href="${hSanraku.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          金沢白鳥路 ホテル山楽の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 山中温泉 かがり吉祥亭 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-teal-100 text-teal-900 font-black text-xs rounded-full">鶴仙渓こおろぎ橋たもと・加賀会席と充実の無料おもてなし</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 山中温泉 かがり吉祥亭（石川県加賀市山中温泉こおろぎ町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-teal-50 border border-teal-300 text-teal-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKagari.reviewAverage}（${hKagari.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKagari.hotelImageUrl}" alt="${hKagari.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKagari.roomImageUrl || hKagari.hotelImageUrl}" alt="${hKagari.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">鶴仙渓のシンボル「こおろぎ橋」に隣接。渓流を望む立ち湯露天風呂とズワイガニ会席</p>
      <p>「かがり吉祥亭」は、総檜造りの名橋「こおろぎ橋」のすぐたもとに佇み、鶴仙渓の紅葉パノラマを間近に臨む温泉宿。渓流沿いの露天風呂では、せせらぎの音を聞きながら紅葉の枝葉が間近に迫る贅沢な湯浴みが楽しめます。名物の夕食は、揚げたて天ぷらが食べ放題の加賀会席で、冬期はズワイガニの甲羅焼きやカニすき鍋がテーブルを彩ります。夕方の加賀甘味（冷やしぜんざい等）のサービスや、湯上がりビール・郷土料理の無料提供など、細やかなおもてなしの数々も宿泊客から絶大な人気を集めています。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hKagari.address1}${hKagari.address2}</p>
        <p><strong>【アクセス】</strong> ${hKagari.access}</p>
        <p><strong>【温泉・施設】</strong> 渓流露天風呂、立ち湯露天、大浴場、貸切風呂、加賀サロン、無料送迎あり。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hKagari.hotelMinCharge || 19000).toLocaleString()}〜</span>
        <a href="${hKagari.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          かがり吉祥亭の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="nearby-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs text-stone-600 mb-6">
  金沢を象徴する天下の名園や歴史遺産、美食の市場。宿からの移動時間や観光のポイントをご案内します。
</p>

<div class="space-y-6 my-6">
  <!-- スポット1: 兼六園 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wKenrokuen.thumbnail || hSanraku.hotelImageUrl}" alt="兼六園" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-red-100 text-red-800 font-bold text-[11px] rounded-md">🌲 日本三名園・特別名勝</span>
        <h3 class="text-base font-bold text-stone-900">兼六園（石川県金沢市兼六町）</h3>
        <p>${wKenrokuen.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 白鳥路ホテル山楽から徒歩約5分、辰口温泉から車で約35分。雪吊りと紅葉が霞ヶ池に映える夜間ライトアップは金沢の秋最大のハイライトです。</p>
      </div>
    </div>
  </div>

  <!-- スポット2: 金沢城 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wKanazawajo.thumbnail || hMatsusaki.hotelImageUrl}" alt="金沢城" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-800 font-bold text-[11px] rounded-md">🏯 加賀百万石の前田家居城</span>
        <h3 class="text-base font-bold text-stone-900">金沢城公園（石川県金沢市丸の内）</h3>
        <p>${wKanazawajo.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 兼六園と石川橋を挟んで直結。復元された菱櫓・五十間長屋・橋爪門続櫓の白漆喰壁が、夜間ライトアップで美しく輝きます。</p>
      </div>
    </div>
  </div>

  <!-- スポット3: ひがし茶屋街 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wHigashi.thumbnail || hHanamurasaki.hotelImageUrl}" alt="ひがし茶屋街" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[11px] rounded-md">🏮 重要伝統的建造物群保存地区</span>
        <h3 class="text-base font-bold text-stone-900">ひがし茶屋街（石川県金沢市東山）</h3>
        <p>${wHigashi.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 金沢中心部からバスまたは車で約7分。出格子（木虫籠）の町家が連なり、金箔ソフトクリームや伝統茶房での和菓子体験が人気です。</p>
      </div>
    </div>
  </div>

  <!-- スポット4: 近江町市場 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wOmicho.thumbnail || hYunokuni.hotelImageUrl}" alt="近江町市場" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-800 font-bold text-[11px] rounded-md">🐟 金沢市民の台所・300年の歴史</span>
        <h3 class="text-base font-bold text-stone-900">近江町市場（石川県金沢市青草町）</h3>
        <p>${wOmicho.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 金沢駅より徒歩約15分。11月6日のカニ漁解禁後は店頭に加能ガニ・香箱ガニがずらりと並び、朝から熱気あふれる海鮮グルメが楽しめます。</p>
      </div>
    </div>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  🗺️ 兼六園雪吊りライトアップ＆加能ガニ堪能 1泊2日満喫モデルコース
</h2>
<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-red-50/60 to-amber-50/40 border border-red-200 space-y-4 text-xs text-stone-700 leading-relaxed">
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【1日目】近江町市場でカニ丼ランチ・兼六園雪吊り散策と温泉宿のカニ会席</h3>
    <p>午前11:00に金沢駅へ到着し、「近江町市場」へ直行。解禁されたばかりの香箱ガニと日本海の鮮魚がてんこ盛りの海鮮丼を堪能。13:30に「兼六園」へ入場し、職人による雪吊り作業の実演と紅葉を鑑賞。15:30に加賀山中温泉「花紫」または辰口温泉「まつさき」へ移動しチェックイン。源泉露天風呂で温まった後、18:30から夕食。茹でたて熱々の加能ガニや甲羅味噌焼き、カニ刺しなど冬の味覚を心ゆくまで満喫する。</p>
  </div>
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【2日目】山中温泉・鶴仙渓遊歩道散策とひがし茶屋街・兼六園夜間ライトアップ</h3>
    <p>朝食後、山中温泉のシンボル「こおろぎ橋」から「あやとりはし」へ続く鶴仙渓遊歩道を散策し、清流と紅葉のパノラマを満喫。金沢市内へ戻り、ひがし茶屋街の格子戸の町並みで町家カフェの抹茶と上生菓子を味わう。夕方17:30から夜間無料開放の兼六園へ。雪吊りと唐崎松が黄金に照らされる「四季物語 秋の段」の幻想美を目に焼き付け、金沢駅でお土産の香箱ガニや地酒を購入して帰路へ。</p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-3 my-6 text-xs text-stone-800">
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q1. 兼六園の雪吊りはいつからいつまで見られますか？</h3>
    <p class="text-stone-600">A. 雪吊り作業は毎年11月1日に唐崎松から開始され、12月中旬まで順次行われます。完成した雪吊りは翌年3月中旬の取り外しまで見られるため、11月から3月上旬にかけて美しい幾何学模様の雪吊り景観を堪能できます。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q2. 加能ガニと香箱ガニの違いは何ですか？</h3>
    <p class="text-stone-600">A. 「加能ガニ」は石川県沖で水揚げされたオスのズワイガニのことで、青いタグが付けられます。太い脚肉と濃厚なカニ味噌が特徴で漁期は3月下旬まで。「香箱ガニ」はメスのズワイガニで小ぶりですが、甲羅の中の未成熟卵「内子」と腹の「外子」が絶品です。資源保護のため漁期が11月6日から12月末までの約2ヶ月間に限定される貴重品です。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q3. 兼六園ライトアップの入場料はかかりますか？</h3>
    <p class="text-stone-600">A. 兼六園・金沢城四季物語の夜間ライトアップ開催中は、なんと「入園無料」で夜間開放されます。通常の日中拝観料（大人320円）もかかりません。日没時間に合わせて開園されます。</p>
  </div>
</div>

<div class="my-8 p-6 rounded-3xl bg-red-50/60 border border-red-200">
  <h3 class="text-sm font-bold text-red-950 mb-2">🔗 あわせてチェックしたい北陸の旅行特集</h3>
  <ul class="text-xs space-y-1.5 font-medium text-stone-700">
    <li>👉 <a href="/prefectures/ishikawa/" class="text-red-800 hover:text-red-600 underline">石川県の観光名所・名湯温泉＆厳選ホテルガイド</a></li>
    <li>👉 <a href="/furusato-tax-hokuriku-onsen-crab-kaiseki/" class="text-red-800 hover:text-red-600 underline">北陸のズワイガニ会席＆名湯宿×ふるさと納税宿泊特集</a></li>
    <li>👉 <a href="/autumn-winter-aomori-oirase-hyobaku-towada-hakkoda-onsen-hotels-guide/" class="text-red-800 hover:text-red-600 underline">奥入瀬渓流氷瀑ライトアップ＆八甲田・酸ヶ湯温泉ガイド</a></li>
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
    image: hMatsusaki.hotelImageUrl,
    other_images: [
      hHanamurasaki.hotelImageUrl,
      hYunokuni.hotelImageUrl,
      hSanraku.hotelImageUrl,
      hKagari.hotelImageUrl
    ],
    hotel_name: `${hMatsusaki.hotelName}・${hHanamurasaki.hotelName} ほか`,
    affiliate_url: hMatsusaki.affiliateUrl,
    categories: ["秋のイベント特集", "冬の味覚", "カニ解禁", "兼六園雪吊り", "石川旅行"],
    price: `¥${(hSanraku.hotelMinCharge || 17000).toLocaleString()}〜`,
    rating: hHanamurasaki.reviewAverage || 5.0,
    review_count: hYunokuni.reviewCount || 1500,
    date: date,
    is_special_feature: true,
    keywords: [
      "兼六園 雪吊り 2026 ライトアップ",
      "加能ガニ 香箱ガニ 解禁日 11月",
      "金沢 カニ 温泉宿 おすすめ 露天風呂",
      "山中温泉 花紫 まつさき ゆのくに天祥",
      "近江町市場 カニ丼 ひがし茶屋街",
      "兼六園 四季物語 秋の段 無料開放"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["兼六園", "雪吊り", "加能ガニ", "香箱ガニ", "山中温泉", "金沢旅行"]
---

# ${title}

11月1日に始まる兼六園の冬支度「雪吊り」と、モミジが黄金色の縄に映える夜間ライトアップ「四季物語 秋の段」。そして11月6日には日本海の冬の味覚の王様「加能ガニ（ズワイガニ）」と内子・外子が詰まった「香箱ガニ」の漁がいよいよ解禁！

近江町市場の熱気、金沢城と兼六園の無料開園スケジュール、極上の茹でガニ・焼きガニ会席と加賀の名湯に癒やされる厳選名宿5選を徹底解説します。

---

## 🎪 2026兼六園・金沢城ライトアップ「四季物語 秋の段」＆カニ解禁攻略術

- **兼六園・金沢城四季物語「秋の段」:** 11月中旬〜下旬の週末を中心に開催。夜間は無料開放され、唐崎松の雪吊りと霞ヶ池の水鏡が黄金に浮かび上がります。
- **11月1日開始の雪吊り作業:** 職人が縄を投げ下ろして幾何学模様を張る伝統技法。11月前半の昼間に見学できます。
- **11月6日カニ漁解禁:** 石川の誇る青タグ「加能ガニ」と、12月末までの期間限定「香箱ガニ」。カニ面やおでん、会席の茹でガニは絶品。
- **近江町市場の熱気:** 解禁直後の市場には初物が山積み。朝から新鮮なカニ丼や海鮮丼を堪能できます。
- **気候と服装:** 金沢の11月は「時雨（しぐれ）」が多く急な雨や霰が降るため、撥水コートや折りたたみ傘を必携してください。

---

## 🏨 加能ガニ会席と極上名湯！金沢・加賀温泉郷の厳選宿5選

### 1. 金沢辰口温泉 まつさき（石川県能美市）
- **特徴:** 金沢市内から車で約30分。泉鏡花ゆかりの老舗。1万坪の庭園を望む客室露天風呂と、解禁直後の加能ガニを多彩な技で味わう懐石。
- **宿泊目安:** 1名 ¥${(hMatsusaki.hotelMinCharge || 36000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hMatsusaki.reviewAverage}（${hMatsusaki.reviewCount}件）
- 👉 [辰口温泉 まつさきの空室・宿泊プランを見る](${hMatsusaki.affiliateUrl})

### 2. 山中温泉 花紫（石川県加賀市）
- **特徴:** 楽天トラベル評価★5.0満点の美食宿。鶴仙渓を見下ろす展望露天風呂と、約50種の小皿から選べるアラカルト懐石で加能ガニ・香箱ガニを満喫。
- **宿泊目安:** 1名 ¥${(hHanamurasaki.hotelMinCharge || 42000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hHanamurasaki.reviewAverage}（${hHanamurasaki.reviewCount}件）
- 👉 [山中温泉 花紫の空室・宿泊プランを見る](${hHanamurasaki.affiliateUrl})

### 3. 山代温泉 ゆのくに天祥（石川県加賀市）
- **特徴:** 自家源泉の天然温泉「一泊三湯十八ゆめぐり」。姿ズワイガニや焼きガニ、カニすきなど冬のカニ会席が充実した大型名門旅館。
- **宿泊目安:** 1名 ¥${(hYunokuni.hotelMinCharge || 18000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hYunokuni.reviewAverage}（${hYunokuni.reviewCount}件）
- 👉 [ゆのくに天祥の空室・宿泊プランを見る](${hYunokuni.affiliateUrl})

### 4. 金沢白鳥路 ホテル山楽（石川県金沢市）
- **特徴:** 兼六園まで徒歩5分。大正ロマンのステンドグラス空間に、金沢市街地唯一の琥珀色天然温泉大浴場を完備。豪華朝食ブッフェも人気。
- **宿泊目安:** 1名 ¥${(hSanraku.hotelMinCharge || 17000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hSanraku.reviewAverage}（${hSanraku.reviewCount}件）
- 👉 [金沢白鳥路 ホテル山楽の空室・宿泊プランを見る](${hSanraku.affiliateUrl})

### 5. 山中温泉 かがり吉祥亭（石川県加賀市）
- **特徴:** 鶴仙渓こおろぎ橋たもと。渓流沿いの立ち湯露天風呂と揚げたて天ぷら食べ放題付き加賀会席。冬はカニすき鍋も登場。
- **宿泊目安:** 1名 ¥${(hKagari.hotelMinCharge || 19000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hKagari.reviewAverage}（${hKagari.reviewCount}件）
- 👉 [かがり吉祥亭の空室・宿泊プランを見る](${hKagari.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **兼六園:** ${wKenrokuen.extract}（白鳥路ホテル山楽から徒歩5分、雪吊りライトアップ）
- **金沢城公園:** ${wKanazawajo.extract}（石川橋で兼六園直結、五十間長屋のライトアップ）
- **ひがし茶屋街:** ${wHigashi.extract}（格子戸の茶屋町並みと金箔体験）
- **近江町市場:** ${wOmicho.extract}（11月6日カニ解禁後の熱気あふれる海鮮市場）

---

## 🗺️ 1泊2日満喫モデルコース

- **1日目:** 11:00 金沢駅到着 ➔ 近江町市場でカニ海鮮丼 ➔ 13:30 兼六園で雪吊り作業実演見学 ➔ 15:30 山中温泉・辰口温泉へ移動チェックイン ➔ 名湯露天風呂 ➔ 18:30 加能ガニフルコース会席
- **2日目:** 鶴仙渓遊歩道・こおろぎ橋散策 ➔ 金沢市内へ戻り「ひがし茶屋街」散策 ➔ 夕方17:30 兼六園無料夜間ライトアップ鑑賞 ➔ 金沢駅でカニ駅弁・地酒購入 ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. 雪吊りはいつ見られますか？**  
A. 11月1日から作業が始まり、3月中旬まで園内に設置されています。

**Q2. 香箱ガニはいつまで食べられますか？**  
A. 雌の香箱ガニは11月6日から12月末までの約2ヶ月間限定です。内子・外子を味わうなら年内の旅行が必須です。

**Q3. ライトアップの入園料は？**  
A. 四季物語の開催期間中は夜間無料開放されます。
`;

  return { postData, noteMarkdown };
};
