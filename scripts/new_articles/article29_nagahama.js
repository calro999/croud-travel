// scripts/new_articles/article29_nagahama.js
module.exports = function buildArticle29(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-shiga-nagahama-kohoku-wild-duck-nabe-taiko-onsen-hotels-guide";
  const title = "【滋賀・長浜/湖北】冬の琵琶湖・湖北雪景色と伝統「天然真鴨鍋」完全攻略！渡り鳥舞う水鳥公園と長浜太閤温泉・黒壁スクエアを巡る近江牛＆美肌湯宿5選";
  const description = "11月中旬の狩猟解禁とともに最盛期を迎える湖北の冬の至高「天然真鴨鍋（かも鍋）」。オオヒシクイやコハクチョウが飛来する琵琶湖水鳥湿地センターの静寂な白銀絶景、羽柴秀吉ゆかりの長浜城と黒壁スクエアのガラスアート散策を徹底解説。豊臣秀吉の長男誕生に湧いた含鉄炭酸泉・長浜太閤温泉の赤茶色の名湯や、日本三大和牛・近江牛のすき焼きを堪能できる特等席旅館5選を完全網羅。";
  const date = "2026-11-04";
  const prefecture = "滋賀県";
  const area = "長浜・湖北";

  const hHamakogetsu = hotels.find(h => h.hotelNo === 13910) || hotels[0];
  const hGrazie = hotels.find(h => h.hotelNo === 16047) || hotels[1];
  const hGrand = hotels.find(h => h.hotelNo === 2922) || hotels[2];
  const hSugatani = hotels.find(h => h.hotelNo === 8796) || hotels[3];
  const hBeniayu = hotels.find(h => h.hotelNo === 74600) || hotels[4];

  const wNagahamaCastle = wiki["長浜城 (近江国)"] || {};
  const wKurokabe = wiki["黒壁スクエア"] || {};
  const wChikubushima = wiki["竹生島"] || {};
  const wBiwako = wiki["琵琶湖"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-teal-950 via-slate-900 to-amber-950 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-teal-800/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-teal-300 font-extrabold text-xs tracking-wider">
      <span>🦆</span><span>2026-2027冬 湖北の雪景色と名物「天然真鴨鍋」 最新現地ガイド</span>
    </div>
    <p class="text-xs text-teal-100 leading-relaxed">
      11月中旬解禁！網獲り天然真鴨の芳醇なコクとシャキシャキのセリ。長浜太閤温泉の赤茶湯、そして雪化粧のびわ湖を巡る大人の冬旅。
    </p>
  </div>
  <a href="${hHamakogetsu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    🌊 琵琶湖畔・浜湖月の空室を見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2 mb-4">
  白銀の琵琶湖に渡り鳥が舞う！湖北の冬の滋味「天然真鴨鍋」の深奥
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  日本最大の湖・琵琶湖の北端に広がる「湖北（こほく）」エリア。伊吹山から吹き降ろす伊吹おろしとともに雪雲が流れ込み、湖畔一帯が静謐な白銀の世界へと包まれる12月から1月、全国の食通たちが熱い視線を注ぐ冬の極上食材が姿を現します。毎年11月15日の狩猟解禁とともに旬を迎える「天然真鴨（マガモ）」です。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  飼育された合鴨（アイガモ）とは異なり、北の大地から越冬のために琵琶湖へ飛来した天然の真鴨は、厳しい寒さに耐えるために上質な脂をたっぷりと蓄えています。特に湖北伝統の「無双網（むそうあみ）」猟法で傷をつけずに捕獲された真鴨は、鉄分を含む真紅の赤身の力強い旨味と、融点が低く舌の上ですっととろける甘やかな脂身のバランスが秀逸。昆布と鰹の香り高い出汁に、新鮮な真鴨のロース肉、骨ごと叩いたツミレ、たっぷりの白ネギ、そして冬の香草・根セリをくぐらせて食す「天然真鴨鍋」は、一口すするだけで五臓六腑に染み渡る滋味を誇ります。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  冬の湖北の魅力は美食にとどまりません。国の天然記念物オオヒシクイやコハクチョウが群れ飛ぶ「湖北野鳥センター」、豊臣秀吉が初めて一国一城の主となった長浜城の雪景色、そして明治の銀行建築を再生したレトロモダンな「黒壁スクエア」のガラスギャラリー巡りなど、静かに心を潤す見どころが満載。夜は秀吉の長男誕生の折に湧き出たと伝わる長浜太閤温泉の濃厚な茶褐色の湯に身を委ね、近江牛のすき焼きとともに美酒・七本鎗に酔いしれる――これこそが、大人が心底憧れる冬の近江路の贅沢です。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2 my-6">
  ❄️ 湖北の冬鳥鑑賞＆真鴨鍋を極める！現地ライターの散策テクニック
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-teal-100 text-teal-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">水鳥観察の絶好ポイント＆冬の琵琶湖絶景</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>湖北水鳥公園・野鳥センター:</strong> シベリアから数千キロの旅を経て飛来するオオヒシクイやコハクチョウの観察拠点。暖かい館内のフィールドスコープから、雪の湖面で羽を休める優雅な姿を間近に観察できます。</p>
      <p>② <strong>山本山のオオワシ（湖北の女王）:</strong> 25年以上連続で山本山に飛来している天然記念物のオオワシ。翼長2メートルを超える雄大な飛翔姿は全国の野鳥愛好家の憧れの的です。</p>
      <p>③ <strong>雪景色の豊公園（長浜城）:</strong> 琵琶湖畔に佇む長浜城天守閣の周囲に広がる白銀の日本庭園。夕暮れ時には琵琶湖越しに沈む夕陽が雪面を茜色に染め上げる絶景が広がります。</p>
      <p>④ <strong>黒壁スクエアのガラス体験:</strong> 北国街道沿いの黒漆喰の古民家群。雪の街並みに映えるステンドグラスやガラス工芸品を眺めながら、冬限定の和スイーツや名物「のっぺいうどん」を楽しめます。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">鴨鍋の作法と防寒</span>
      <h3 class="text-base font-bold text-stone-900">本物の天然真鴨の見分け方＆伊吹おろし対策</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【天然真鴨の提供時期】</strong> 狩猟期間は11月15日〜2月15日。宿で「本物の天然真鴨プラン」を予約する場合、12月〜1月が最も脂が乗って美味とされています。仕入れに限りがあるため、完全予約制の老舗旅館を早期に確保するのが鉄則です。</p>
      <p><strong>【伊吹おろしの厳しい寒風対策】</strong> 湖北の冬は、伊吹山からの吹き降ろす冷たい風「伊吹おろし」と湖風が重なり、体感温度が氷点下まで下がります。防風性の高いロングコート、マフラー、手袋、滑り止め付きの防水ブーツを用意してください。</p>
      <p><strong>【冬用タイヤと北陸本線】</strong> 北陸自動車道（米原〜長浜〜木之本）は冬期にチェーン規制や冬用タイヤ規制が頻繁にかかります。マイカーの場合はスタッドレス必須。JR北陸本線・新快速利用なら京都駅から長浜駅まで乗り換えなし約70分と極めて快適です。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2 my-8">
  🏨 琵琶湖を望む名湯と冬の極上味覚！長浜・湖北の厳選宿5選
</h2>

<!-- 宿1: びわ湖畔 おいしい湯の宿 長浜太閤温泉 浜湖月 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-teal-100 text-teal-900 font-black text-xs rounded-full">長浜港一望・長浜太閤温泉の茶褐色名湯と天然真鴨鍋が絶品の料亭旅館</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. びわ湖畔 おいしい湯の宿 長浜太閤温泉 浜湖月（滋賀県長浜市公園町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-teal-50 border border-teal-300 text-teal-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hHamakogetsu.reviewAverage}（${hHamakogetsu.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hHamakogetsu.hotelImageUrl}" alt="${hHamakogetsu.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hHamakogetsu.roomImageUrl || hHamakogetsu.hotelImageUrl}" alt="${hHamakogetsu.hotelName} 客室露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 琵琶湖のほとり、長浜城がそびえる豊公園に隣接する格式高い料理旅館。客室の窓一面に雄大な琵琶湖の湖面と竹生島、比良山系の雪景色が広がり、夕暮れ時には茜色に染まる湖水が息を呑む美しさです。
      </p>
      <p>
        <strong>【太閤秀吉ゆかりの赤茶色の濁り湯】</strong> 自家源泉から湧き出る長浜太閤温泉は、空気に触れると赤茶色に変化する濃厚な含鉄炭酸泉。高い保温効果で「子宝の湯」としても親しまれ、展望大浴場や露天風呂付き客室で湖風を感じながら贅沢な湯浴みを楽しめます。
      </p>
      <p>
        <strong>【伝統の天然真鴨鍋と近江牛会席】</strong> 料理自慢の浜湖月が冬に提供する真鴨鍋は、厳選された天然真鴨の旨味を引き出した秘伝の出汁が評判。最上級A5ランク近江牛のステーキやびわ湖のビワマスなど、滋賀の誇る美食を個室食事処で心ゆくまで堪能できます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hHamakogetsu.hotelMinCharge || 27170).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hHamakogetsu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-teal-700 hover:bg-teal-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 北ビワコホテル グラツィエ -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-sky-100 text-sky-900 font-black text-xs rounded-full">北イタリア・ヴェローナの風情漂う湖畔リゾートホテル・充実の本格サウナ</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 北ビワコホテル グラツィエ（滋賀県長浜市港町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-sky-50 border border-sky-300 text-sky-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hGrazie.reviewAverage}（${hGrazie.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hGrazie.hotelImageUrl}" alt="${hGrazie.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hGrazie.roomImageUrl || hGrazie.hotelImageUrl}" alt="${hGrazie.hotelName} 展望風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 長浜港の目の前に位置し、姉妹都市であるイタリア・ヴェローナの街並みをイメージしたお洒落な外観が印象的なリゾートホテル。長浜駅からも徒歩約10分とアクセス良好です。
      </p>
      <p>
        <strong>【天然温泉大浴場と展望サウナ】</strong> 最上階の展望スパからは琵琶湖を行き交う観光船や冬の夕暮れパノラマを一望。ドライサウナや水風呂も完備され、旅の疲れを心地よくリフレッシュできます。
      </p>
      <p>
        <strong>【本格イタリアンと近江牛ディナー】</strong> 館内には薪窯で焼き上げる本格ナポリピッツァが人気のイタリアンレストランと、近江牛を堪能できる和食処を備え、湖北の旬の食材を多彩なスタイルで楽しめます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hGrazie.hotelMinCharge || 7700).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hGrazie.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-sky-700 hover:bg-sky-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 旅館 紅鮎 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">全室琵琶湖を望む露天風呂付き・湖北尾上温泉の静寂に抱かれる大人の隠れ宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 尾上温泉 旅館 紅鮎（滋賀県長浜市湖北町尾上）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hBeniayu.reviewAverage}（${hBeniayu.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hBeniayu.hotelImageUrl}" alt="${hBeniayu.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hBeniayu.roomImageUrl || hBeniayu.hotelImageUrl}" alt="${hBeniayu.hotelName} 客室露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 長浜市街から北へ進んだ尾上（おのえ）の漁港近く、水鳥湿地センター至近の湖畔に佇む全15室の高級旅館。全ての客室に琵琶湖を一望する専用の温泉露天風呂とマッサージチェアが完備されています。
      </p>
      <p>
        <strong>【客室露天風呂から望む水鳥と夕景】</strong> 客室露天風呂のお湯に浸かると、目線の高さに広がる冬の琵琶湖と竹生島。夕暮れ時には群れ飛ぶ水鳥の羽音を聞きながら、茜色に染まる湖水を眺める極上のプライベート時間が流れます。
      </p>
      <p>
        <strong>【冬の看板料理・天然真鴨鍋コース】</strong> 冬季限定の天然真鴨鍋プランは、骨ごと叩いたツミレから出る出汁と芳醇な胸肉のロースが絶品。朝食には鮎雑炊や近江の伝統惣菜が並び、滋賀の豊かな食文化を堪能できます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hBeniayu.hotelMinCharge || 11000).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hBeniayu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 須賀谷温泉 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-rose-100 text-rose-900 font-black text-xs rounded-full">浅井長政・お市の方ゆかりの小谷城の隠し湯・茶褐色の秘湯</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 須賀谷温泉（滋賀県長浜市須賀谷町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-rose-50 border border-rose-300 text-rose-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hSugatani.reviewAverage}（${hSugatani.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hSugatani.hotelImageUrl}" alt="${hSugatani.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hSugatani.roomImageUrl || hSugatani.hotelImageUrl}" alt="${hSugatani.hotelName} 露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 戦国武将・浅井長政とお市の方、そして浅井三姉妹が暮らした小谷城の麓にひっそりと佇む一軒宿。信長の焼き討ちを逃れた歴史ロマンあふれる秘湯です。
      </p>
      <p>
        <strong>【お市の方も湯治した赤湯】</strong> 湯口から注がれる無色透明のお湯が空気に触れて濃い赤茶色に濁る含鉄炭酸泉。筋肉痛や関節痛、冷え性に優れた効能を持ち、身体が芯まで温まって湯冷めしにくいのが特徴です。
      </p>
      <p>
        <strong>【近江牛と冬の天然鴨鍋膳】</strong> 夕食には地元湖北で獲れる天然真鴨の鍋や、A5ランク認定の近江牛のすき焼き・しゃぶしゃぶプランが充実。山里ならではの素朴で温かいもてなしに心が和みます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hSugatani.hotelMinCharge || 19460).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hSugatani.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-rose-700 hover:bg-rose-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: グランドメルキュール琵琶湖リゾート＆スパ -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-indigo-100 text-indigo-900 font-black text-xs rounded-full">リブランド開業・オールインクルーシブで地酒＆ビュッフェを満喫</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. グランドメルキュール琵琶湖リゾート＆スパ（滋賀県長浜市大島町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-indigo-50 border border-indigo-300 text-indigo-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hGrand.reviewAverage}（${hGrand.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hGrand.hotelImageUrl}" alt="${hGrand.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hGrand.roomImageUrl || hGrand.hotelImageUrl}" alt="${hGrand.hotelName} レストランビュッフェ" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 旧長浜ロイヤルホテルが世界ブランド「グランドメルキュール」として大刷新。長浜駅から徒歩約10分の湖畔フロントに位置し、夕暮れから夜にかけてのラウンジアルコールフリーフローを含むオールインクルーシブステイが好評です。
      </p>
      <p>
        <strong>【長浜太閤温泉大浴場】</strong> 広々とした大浴場では長浜太閤温泉の茶褐色の湯を堪能でき、清潔感あふれる内湯や露天風呂、サウナを完備。ゆったりと足を伸ばして旅の疲れを癒やせます。
      </p>
      <p>
        <strong>【地元食材を味わう豪華ビュッフェ】</strong> ディナービュッフェでは、近江牛のローストビーフや滋賀名物の郷土料理、地元酒蔵の日本酒・ワインを好きなだけ味わえる贅沢なスタイル。ファミリーやグループにも最適です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hGrand.hotelMinCharge || 5670).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hGrand.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-indigo-700 hover:bg-indigo-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="sightseeing" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6 leading-relaxed">
  湖北の冬旅でぜひ訪れたい、歴史ある城下町と琵琶湖を代表する名所をWikipedia公式解説とともにご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-teal-700 font-bold text-sm">📍 長浜城（羽柴秀吉ゆかりの城）</span>
    </div>
    ${wNagahamaCastle.thumbnail ? `<img src="${wNagahamaCastle.thumbnail}" alt="${wNagahamaCastle.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wNagahamaCastle.extract || '羽柴秀吉（豊臣秀吉）が浅井氏を滅ぼした功績で織田信長から拝領し、初めて築城した居城。天守閣展望フロアから琵琶湖や伊吹山の雪景色を一望できます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-teal-700 font-bold text-sm">📍 黒壁スクエア（黒壁ガラス館）</span>
    </div>
    ${wKurokabe.thumbnail ? `<img src="${wKurokabe.thumbnail}" alt="${wKurokabe.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wKurokabe.extract || '明治33年に建てられた旧第百三十銀行長浜支店の木造洋館「黒壁一號館」を中心に広がるガラスの街並み。カフェや工房が軒を連ねます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-teal-700 font-bold text-sm">📍 竹生島（日本三弁財天・宝厳寺）</span>
    </div>
    ${wChikubushima.thumbnail ? `<img src="${wChikubushima.thumbnail}" alt="${wChikubushima.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wChikubushima.extract || '琵琶湖の北部に浮かぶ神の島。西国三十三所第30番札所の宝厳寺や都久夫須麻神社が鎮座し、冬の澄んだ湖上クルーズで訪れる参拝客で賑わいます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-teal-700 font-bold text-sm">📍 琵琶湖（湖北水鳥湿地センター周辺）</span>
    </div>
    ${wBiwako.thumbnail ? `<img src="${wBiwako.thumbnail}" alt="${wBiwako.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wBiwako.extract || '滋賀県の面積の約6分の1を占める日本最大の古代湖。冬の湖北エリアはラムサール条約登録湿地として、数万羽の渡り鳥が越冬する野鳥の楽園となります。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2 my-8">
  🗺️ 湖北の冬鳥と天然真鴨鍋 1泊2日大人の美食モデルコース
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-teal-700 text-white rounded text-xs">1日目</span>
      黒壁スクエア散策から夕暮れの琵琶湖・真鴨鍋へ
    </h3>
    <p class="leading-relaxed">
      11:00 JR長浜駅到着 ➔ 黒壁スクエアでガラスギャラリー散策＆名物「長浜のっぺいうどん」ランチ ➔ 13:30 豊公園（長浜城）で雪景色と天守閣見学 ➔ 15:30 湖畔の宿へチェックイン ➔ 長浜太閤温泉の赤茶色の名湯で温まる ➔ 17:00 部屋の窓から夕陽に染まる琵琶湖と水鳥を眺望 ➔ 18:30 個室食事処にて、本場「天然真鴨鍋」と近江牛、地酒「七本鎗」を堪能 ➔ 静寂の露天風呂で星空鑑賞。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-teal-700 text-white rounded text-xs">2日目</span>
      湖北水鳥湿地センターで野鳥観察と竹生島クルーズ
    </h3>
    <p class="leading-relaxed">
      08:00 宿の朝食（鮎雑炊・近江郷土料理） ➔ 09:30 湖北野鳥センターへ移動、スコープでオオヒシクイやコハクチョウの優美な群れを観察 ➔ 11:30 長浜港から観光船で神の島「竹生島」へ（または木之本の古い宿場町散策） ➔ 宝厳寺参拝とかわらけ投げ ➔ 14:30 長浜港帰着、駅前でお土産（小鮎の佃煮・鮒ずし・近江牛味噌漬け）を購入 ➔ 新快速で帰路へ。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2 my-8">
  📊 長浜・湖北エリア 厳選5宿のスペック比較一覧
</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
      <tr>
        <th class="p-3">宿名</th>
        <th class="p-3">エリア</th>
        <th class="p-3">楽天評価</th>
        <th class="p-3">宿泊目安(1名)</th>
        <th class="p-3">温泉・風呂特徴</th>
        <th class="p-3">食事の看板メニュー</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">浜湖月</td>
        <td class="p-3">長浜港畔</td>
        <td class="p-3 font-bold text-teal-700">★ ${hHamakogetsu.reviewAverage}</td>
        <td class="p-3">¥${(hHamakogetsu.hotelMinCharge || 27170).toLocaleString()}〜</td>
        <td class="p-3">長浜太閤温泉赤茶色の湯・露天付客室</td>
        <td class="p-3">本場天然真鴨鍋＆A5近江牛会席</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">北ビワコホテル グラツィエ</td>
        <td class="p-3">長浜港前</td>
        <td class="p-3 font-bold text-teal-700">★ ${hGrazie.reviewAverage}</td>
        <td class="p-3">¥${(hGrazie.hotelMinCharge || 7700).toLocaleString()}〜</td>
        <td class="p-3">琵琶湖一望の展望温泉大浴場・サウナ</td>
        <td class="p-3">本格窯焼きピッツァ＆近江牛ディナー</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">尾上温泉 旅館 紅鮎</td>
        <td class="p-3">湖北町尾上</td>
        <td class="p-3 font-bold text-teal-700">★ ${hBeniayu.reviewAverage}</td>
        <td class="p-3">¥${(hBeniayu.hotelMinCharge || 11000).toLocaleString()}〜</td>
        <td class="p-3">全客室琵琶湖一望の専用露天風呂完備</td>
        <td class="p-3">冬期限定・天然真鴨鍋コース</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">須賀谷温泉</td>
        <td class="p-3">小谷城山麓</td>
        <td class="p-3 font-bold text-teal-700">★ ${hSugatani.reviewAverage}</td>
        <td class="p-3">¥${(hSugatani.hotelMinCharge || 19460).toLocaleString()}〜</td>
        <td class="p-3">お市の方ゆかりの濃厚含鉄炭酸赤湯</td>
        <td class="p-3">天然鴨鍋会席＆近江牛すき焼き</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">グランドメルキュール琵琶湖</td>
        <td class="p-3">長浜大島町</td>
        <td class="p-3 font-bold text-teal-700">★ ${hGrand.reviewAverage}</td>
        <td class="p-3">¥${(hGrand.hotelMinCharge || 5670).toLocaleString()}〜</td>
        <td class="p-3">広々とした太閤温泉大浴場・サウナ</td>
        <td class="p-3">オールインクルーシブ贅沢ビュッフェ</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>

<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q1. 天然真鴨鍋はいつからいつまで食べられますか？合鴨との違いは？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 滋賀県の真鴨猟は毎年11月15日に解禁され、2月15日までの冬期限定で味わえます。飼育された合鴨に比べて、天然の真鴨は野性味あふれる芳醇な香りと力強い赤身のコク、融点の低いサラリとした甘い脂身が特徴で、まったく脂っこくなく出汁まで飲み干せる美味しさです。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q2. 冬の長浜は雪が積もりますか？ノーマルタイヤでも行けますか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 湖北エリアは日本海側気候の影響を受け、12月下旬〜2月にかけてまとまった積雪や路面凍結が発生します。マイカーの場合はスタッドレスタイヤの装着が必須です。電車の場合、JR長浜駅までは京都・大阪から新快速が直通しており、雪による運休も新幹線経由などに比べて比較的少ないため電車利用が安心です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q3. 竹生島行きのクルーズ船は冬でも運航していますか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 長浜港発着の琵琶湖汽船は冬期も毎日運航しています（冬ダイヤで便数が調整されます）。ただし、琵琶湖上で強風や高波が発生した場合は欠航となることがあるため、当日の朝に運航状況を公式サイトで確認することをおすすめします。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q4. 長浜太閤温泉のお湯の特徴は？タオルは赤く染まりますか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 湧出時は無色透明ですが、鉄分が豊富に含まれているため空気に触れて濃い茶褐色に変化します。保温効果が非常に高く湯冷めしにくい名湯です。鉄分によって白いタオルが茶色く染まることがありますので、宿の備え付けタオルをご使用ください。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-100 border border-stone-200 text-center space-y-3">
  <h3 class="text-base font-bold text-stone-900">滋賀・琵琶湖エリアの温泉＆グルメ特集も合わせてチェック！</h3>
  <ul class="text-xs text-stone-600 space-y-1.5 inline-block text-left">
    <li>👉 <a href="/winter-shiga-hieizan-enryakuji-ogoto-onsen-omigyu-stay/" class="text-teal-800 hover:text-teal-600 underline">比叡山延暦寺・おごと温泉の雪景色と近江牛を味わう名旅館ガイド</a></li>
    <li>👉 <a href="/winter-shiga-taga-taisha-hatsumode-omigyu-sukiyaki-itokirimochi-stay/" class="text-teal-800 hover:text-teal-600 underline">多賀大社の迎春初詣＆名物すき焼き・糸切餅を愉しむ滋賀の宿特集</a></li>
    <li>👉 <a href="/shiga/" class="text-teal-800 hover:text-teal-600 underline">滋賀県の宿・温泉地・旬の観光特集一覧</a></li>
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
    image: hHamakogetsu.hotelImageUrl,
    other_images: [
      hGrazie.hotelImageUrl,
      hBeniayu.hotelImageUrl,
      hSugatani.hotelImageUrl,
      hGrand.hotelImageUrl
    ],
    hotel_name: `${hHamakogetsu.hotelName}・${hGrazie.hotelName} ほか`,
    affiliate_url: hHamakogetsu.affiliateUrl,
    categories: ["冬のイベント特集", "天然真鴨鍋", "長浜太閤温泉", "湖北雪景色", "黒壁スクエア", "近江牛"],
    price: `¥${(hGrand.hotelMinCharge || 5670).toLocaleString()}〜`,
    rating: hHamakogetsu.reviewAverage || 4.68,
    review_count: hHamakogetsu.reviewCount || 850,
    date: date,
    is_special_feature: true,
    keywords: [
      "長浜 天然真鴨鍋 おすすめ宿",
      "浜湖月 宿泊記 長浜太閤温泉",
      "紅鮎 尾上温泉 客室露天風呂",
      "須賀谷温泉 お市の方 赤湯",
      "北ビワコホテル グラツィエ 口コミ",
      "湖北水鳥湿地センター コハクチョウ 見頃"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["長浜太閤温泉", "天然真鴨鍋", "湖北雪景色", "浜湖月", "紅鮎", "黒壁スクエア", "近江牛", "冬の滋賀旅行"]
---

# ${title}

11月中旬の狩猟解禁とともに最盛期を迎える湖北の冬の至高「天然真鴨鍋（かも鍋）」。

オオヒシクイやコハクチョウが飛来する琵琶湖水鳥湿地センターの静寂な白銀絶景、羽柴秀吉ゆかりの長浜城と黒壁スクエアのガラスアート散策を徹底解説。

豊臣秀吉の長男誕生に湧いた含鉄炭酸泉・長浜太閤温泉の赤茶色の名湯や、日本三大和牛・近江牛のすき焼きを堪能できる特等席旅館5選を完全網羅します。

---

## ❄️ 湖北の冬鳥鑑賞＆真鴨鍋を極める！現地ライターの散策テクニック

- **天然真鴨の旬:** 11月15日狩猟解禁〜2月中旬。厳しい寒さで蓄えられた芳醇な脂と赤身のコク、根セリとの相性が至高。
- **湖北水鳥公園の絶景:** シベリアから越冬に訪れるコハクチョウや天然記念物オオヒシクイの優美な群れを観察。
- **長浜太閤温泉の赤茶湯:** 秀吉ゆかりの含鉄炭酸泉。高い保温力で湯冷め知らずの温まりを実感。
- **伊吹おろしと雪道対策:** 湖北はまとまった積雪があるため、車はスタッドレス必須。電車（JR新快速直通）利用も快適。

---

## 🏨 琵琶湖を望む名湯と冬の極上味覚！長浜・湖北の厳選宿5選

### 1. びわ湖畔 おいしい湯の宿 長浜太閤温泉 浜湖月（滋賀県長浜市公園町）
- **特徴:** 豊公園隣接、長浜港一望。茶褐色の太閤温泉と、秘伝出汁で味わう極上の本場「天然真鴨鍋」会席が絶品。
- **宿泊目安:** 1名 ¥${(hHamakogetsu.hotelMinCharge || 27170).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hHamakogetsu.reviewAverage}（${hHamakogetsu.reviewCount}件）
- 👉 [浜湖月の空室・宿泊プランを見る](${hHamakogetsu.affiliateUrl})

### 2. 北ビワコホテル グラツィエ（滋賀県長浜市港町）
- **特徴:** イタリア・ヴェローナの風情漂う湖畔ホテル。最上階の展望温泉スパとサウナ、本格窯焼きピッツァと近江牛ディナー。
- **宿泊目安:** 1名 ¥${(hGrazie.hotelMinCharge || 7700).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hGrazie.reviewAverage}（${hGrazie.reviewCount}件）
- 👉 [北ビワコホテル グラツィエの空室・宿泊プランを見る](${hGrazie.affiliateUrl})

### 3. 尾上温泉 旅館 紅鮎（滋賀県長浜市湖北町尾上）
- **特徴:** 全室琵琶湖を望む専用露天風呂付き。水鳥湿地センター至近。静寂のなか竹生島を眺めながら味わう冬季限定天然真鴨鍋。
- **宿泊目安:** 1名 ¥${(hBeniayu.hotelMinCharge || 11000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hBeniayu.reviewAverage}（${hBeniayu.reviewCount}件）
- 👉 [旅館 紅鮎の空室・宿泊プランを見る](${hBeniayu.affiliateUrl})

### 4. 須賀谷温泉（滋賀県長浜市須賀谷町）
- **特徴:** 小谷城山麓の一軒宿。お市の方も湯治した含鉄炭酸泉の秘湯赤湯と、山里ならではの天然鴨鍋・近江牛すき焼き。
- **宿泊目安:** 1名 ¥${(hSugatani.hotelMinCharge || 19460).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hSugatani.reviewAverage}（${hSugatani.reviewCount}件）
- 👉 [須賀谷温泉の空室・宿泊プランを見る](${hSugatani.affiliateUrl})

### 5. グランドメルキュール琵琶湖リゾート＆スパ（滋賀県長浜市大島町）
- **特徴:** リブランドオープン。オールインクルーシブで地酒やラウンジを満喫。太閤温泉大浴場と豪華ディナービュッフェ。
- **宿泊目安:** 1名 ¥${(hGrand.hotelMinCharge || 5670).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hGrand.reviewAverage}（${hGrand.reviewCount}件）
- 👉 [グランドメルキュール琵琶湖の空室・宿泊プランを見る](${hGrand.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **長浜城:** ${wNagahamaCastle.extract || '羽柴秀吉が初めて築いた居城。天守閣から雪景色の琵琶湖や伊吹山を一望。'}
- **黒壁スクエア:** ${wKurokabe.extract || '明治の洋館を活用したガラスの街並み。カフェや工芸工房が並ぶ人気エリア。'}
- **竹生島:** ${wChikubushima.extract || '琵琶湖北部に浮かぶ神の島。宝厳寺や都久夫須麻神社が鎮座する信仰の聖地。'}
- **琵琶湖（湖北水鳥湿地センター）:** ${wBiwako.extract || '日本最大の古代湖。冬の湖北は数万羽の渡り鳥が越冬する野鳥の楽園。'}

---

## 🗺️ 湖北の冬鳥と天然真鴨鍋 1泊2日モデルコース

- **1日目:** 長浜駅到着 ➔ 黒壁スクエア散策・のっぺいうどんランチ ➔ 長浜城見学 ➔ 湖畔の宿チェックイン ➔ 太閤温泉で温まる ➔ 天然真鴨鍋＆近江牛ディナー ➔ 露天風呂
- **2日目:** 朝食 ➔ 湖北水鳥公園で野鳥観察 ➔ 竹生島クルーズ（宝厳寺参拝） ➔ 駅前でお土産購入 ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. 天然真鴨鍋はいつ食べられますか？**  
A. 狩猟解禁となる11月15日〜2月15日の冬季限定です。12月〜1月が最も脂が乗っています。

**Q2. 雪道の運転は必要ですか？**  
A. 湖北エリアはまとまった降雪があるため、スタッドレス必須です。JR新快速電車でのアクセスも便利です。

**Q3. 長浜太閤温泉のお湯の特徴は？**  
A. 鉄分を豊富に含み空気に触れて赤茶色に濁る含鉄炭酸泉で、抜群の保温・保湿効果があります。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【滋賀・長浜/湖北】冬の琵琶湖・湖北雪景色と伝統「天然真鴨鍋」完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/${slug}/)
`;

  return { postData, noteMarkdown };
};
