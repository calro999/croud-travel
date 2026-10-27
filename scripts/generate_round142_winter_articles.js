const fs = require('fs');
const path = require('path');

const collectedData = require('../scratch/fresh_winter_round142_collected_data.json');

// HTMLタグを除去した純粋な文字数を正確にカウントする関数
function countTextLength(html) {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, '')
    .trim().length;
}

// ========================================================
// 記事1: 北海道・層雲峡温泉＆氷瀑まつり（11〜1月冬の極上旅）
// ========================================================
function buildSounkyoPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('朝陽リゾート') || x.hotelName.includes('銀泉閣')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo && x.address2.includes('上川')).slice(0, 3);

  const spotSounkyo = w.find(x => x.spotName === '層雲峡') || w[0];
  const spotDaisetsu = w.find(x => x.spotName === '大雪山') || w[1];
  const spotZoo = w.find(x => x.spotName.includes('旭山動物園')) || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100/60 rounded-3xl border border-sky-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-sky-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Executive Summary</span>
      <span class="text-xs text-sky-950 font-bold">11月〜1月の層雲峡温泉・氷瀑まつりと大雪山白銀大渓谷完全総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【総括】層雲峡温泉の冬旅：氷点下15度の白銀渓谷と七色に輝く氷の宮殿「氷瀑まつり」。大雪山麓の名湯と旭川の冬の恵み</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      北海道中央部、日本最大の国立公園「大雪山国立公園」の北東麓に刻まれた層雲峡は、石狩川を挟んで高さ百数十メートルの柱状節理の断崖絶壁が約24kmにわたって連なる日本屈指の大渓谷。11月に入ると渓谷は一足早く根雪に覆われ、12月から1月にかけては氷点下15度から20度に達する極寒の白銀世界へと変貌します。冬の最大の見どころは、1月下旬から約2ヶ月間にわたり石狩川河川敷で開催される北海道三大冬まつりの一つ「層雲峡温泉氷瀑まつり」。落差百数十メートルの名瀑「銀河・流星の滝」が凍りついて巨大な青い氷壁となる自然の驚異に加え、職人たちが丹精込めて築き上げた巨大な氷のトンネル、氷の展望台、氷の神社が夜間七色のLED照明で照らし出され、息をのむ幻想郷が出現します。冷え切った身体を包み込むのは、無色透明の単純温泉や白濁の単純硫黄泉など、湯元ごとに個性を放つ毎分大量湧出の天然温泉。旭川空港やJR旭川駅からのアクセスも整備され、道内最高峰の雪質と冬の旭山動物園「ペンギンの散歩」を組み合わせた北の大地の王道旅行が叶います。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-sky-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">泉質・効能</span>
        <strong class="text-sky-900 text-sm">単純温泉・硫黄泉（神経痛・冷え性改善）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-sky-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">氷瀑まつり期間</span>
        <strong class="text-stone-900 text-sm">例年1月下旬〜3月中旬（夜間ライトアップ）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-sky-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">真冬の平均気温</span>
        <strong class="text-blue-800 text-sm">11月: -2℃〜5℃ / 12〜1月: -8℃〜-18℃</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-sky-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">地域名物グルメ</span>
        <strong class="text-amber-800 text-sm">大雪高原牛・旭川醤油ラーメン・渓流魚</strong>
      </div>
    </div>
  </section>

  <!-- 1. 渓谷美と氷瀑まつりの全貌 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-700 pb-2.5">
      🧊 柱状節理の巨岩が白銀に染まる！層雲峡の冬景色と「氷瀑まつり」の造形美
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      層雲峡の冬は、圧倒的なスケールを誇る岩壁美から始まります。約3万年前の大雪山噴火によって噴出した火砕流が冷却・収縮して生まれた柱状節理は、まるで巨大な屏風のように直立。初冬の11月には周囲のミズナラやシラカバが落葉し、岩肌の幾何学模様が雪をまとい、黒と白の荘厳なモノトーンの世界を描き出します。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      日本の滝百選にも選ばれている「流星の滝」「銀河の滝」は、12月に入ると飛沫が凍結を始め、1月には巨大な氷の柱「ブルーアイス」へと完全結氷します。標高差約90mの断崖から落ちる水がそのまま時を止めたかのような姿は、氷壁登攀（アイスクライミング）の聖地としても世界にその名を知られています。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      そして1月下旬、石狩川の河川敷に広大な氷の造形物群が出現します。これこそが「層雲峡温泉氷瀑まつり」です。丸太で組んだ骨組みに石狩川の水を3ヶ月以上かけて夜通し吹き付け、自然の寒気だけで凍らせて造り上げる氷の建造物は、高さ13mを超える巨大タワーや氷の回廊、天井から氷柱が無数に垂れ下がる氷のドームなど、総面積1万平方メートルに及びます。日中は太陽光を浴びて透き通るクリスタルブルーに輝き、日没後は赤、青、緑、紫の幻想的なイルミネーションに包まれます。会場内には氷の滑り台や氷の酒場（北の氷酒場）が設けられ、週末には白銀の夜空を彩る冬花火が打ち上げられます。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る大雪山・層雲峡の冬名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 層雲峡 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotSounkyo.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Sounkyo_Gorge_Hokkaido_Japan01s3.jpg/800px-Sounkyo_Gorge_Hokkaido_Japan01s3.jpg'}" alt="${spotSounkyo.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-sky-100 text-sky-800 font-bold rounded">断崖絶壁24km</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotSounkyo.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotSounkyo.extract || '北海道上川町にある大峡谷。大雪山国立公園に位置し、石狩川沿いに柱状節理の絶壁が連続する北海道を代表する名勝地。'}
            </p>
          </div>
          <p class="text-[11px] text-sky-950 bg-sky-50 p-2.5 rounded-lg font-medium border border-sky-100">
            💡 冬は銀河・流星の滝が巨大な氷瀑へと姿を変え、1月下旬からの氷瀑まつり会場となります。
          </p>
        </div>
      </div>

      <!-- Spot 2: 大雪山 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotDaisetsu.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mount_Asahidake_from_Sugatami_Pond_2012-08-25.jpg/800px-Mount_Asahidake_from_Sugatami_Pond_2012-08-25.jpg'}" alt="${spotDaisetsu.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-indigo-100 text-indigo-800 font-bold rounded">神々の遊ぶ庭</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotDaisetsu.spotName}（黒岳）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotDaisetsu.extract || '北海道の中央部にそびえる山々の総称。アイヌ語で「カムイミンタラ（神々の遊ぶ庭）」と呼ばれ、冬は極上のパウダースノーに覆われる。'}
            </p>
          </div>
          <p class="text-[11px] text-indigo-950 bg-indigo-50 p-2.5 rounded-lg font-medium border border-indigo-100">
            💡 層雲峡温泉街から黒岳ロープウェイに乗車すれば、標高1,300mの白銀の雲海と樹氷原を一望できます。
          </p>
        </div>
      </div>

      <!-- Spot 3: 旭山動物園 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotZoo.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Asahiyama_zoo_entrance.jpg/800px-Asahiyama_zoo_entrance.jpg'}" alt="${spotZoo.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">冬の風物詩</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotZoo.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotZoo.extract || '北海道旭川市にある日本最北の動物園。行動展示で全国的な知名度を誇り、冬期は積雪期限定のペンギンの散歩が国内外から人気を集める。'}
            </p>
          </div>
          <p class="text-[11px] text-emerald-950 bg-emerald-50 p-2.5 rounded-lg font-medium border border-emerald-100">
            💡 12月下旬から1月の積雪期は、キングペンギンたちが雪上を行進する愛らしい姿を間近で観察できます。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 源泉掛け流しと雪見風呂 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-700 pb-2.5">
      ♨️ 氷点下の冷気と熱湯の至福！層雲峡が誇る名湯の泉質と湯守のこだわり
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      層雲峡温泉は1857年（安政4年）に松浦武四郎が発見したと伝えられ、大正時代に本格的な温泉地として開かれました。大雪山の火山性地熱によって熱せられた湯は、毎分約4,000リットル以上という豊富な湧出量を誇ります。泉質の主軸は「弱アルカリ性単純温泉」および「単純硫黄泉」。無色透明で肌触りが非常にまろやかな湯と、ほんのりとした硫黄の香りと白濁・赤茶色の湯の花をたたえる湯の双方が楽しめます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      外気温が氷点下10度を下回る冬の露天風呂は、まさに極楽の極致。露天風呂の縁にはつららが下がり、立ち上る白い湯煙越しに大雪山の切り立った岩壁と雪景色が迫ります。頭髪やタオルが冷気で凍りつくほどの冷気に包まれながら、首まで浸かった温泉の温もりで全身の血管がゆるやかに拡張。湯冷めしにくい成分組成のため、極寒の屋外から上がった後もポカポカとした保温感が長く持続します。
    </p>
  </section>

  <!-- 4. 楽天トラベルAPI連動 厳選宿泊施設 -->
  <section class="space-y-6 my-8">
    <div class="border-l-4 border-sky-700 pl-4">
      <span class="text-xs font-bold text-sky-800 tracking-wider uppercase">Rakuten Travel Live Data</span>
      <h2 class="text-xl md:text-2xl font-bold text-stone-900">
        🏨 楽天トラベル厳選！層雲峡温泉の冬を堪能する名宿セレクション
      </h2>
      <p class="text-xs text-stone-600 mt-1">楽天トラベルAPIから最新の空室・料金情報を自動取得。大雪山の冬旅を彩る上質な宿泊拠点をご紹介します。</p>
    </div>

    <!-- メイン宿カード -->
    <div class="bg-gradient-to-br from-white to-sky-50/40 rounded-3xl border-2 border-sky-300 p-6 md:p-8 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
        <span class="px-3 py-1 bg-sky-700 text-white text-xs font-bold rounded-full">層雲峡温泉の筆頭名宿</span>
        <span class="text-xs text-stone-600 font-semibold">${mainHotel.address1}${mainHotel.address2}</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div class="space-y-3">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full h-64 object-cover rounded-2xl shadow-sm" />
          ${mainHotel.roomImageUrl ? `<img src="${mainHotel.roomImageUrl}" alt="${mainHotel.hotelName} 客室・温泉" class="w-full h-36 object-cover rounded-xl border border-sky-100" />` : ''}
        </div>
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-stone-900">${mainHotel.hotelName}</h3>
          <p class="text-xs md:text-sm text-stone-600 leading-relaxed">
            ${mainHotel.hotelSpecial || '大雪山の雄大な大自然に抱かれた名宿。自家源泉の掛け流し露天風呂と、地元の山の幸・海の幸を取り入れた豪華バイキングや会席料理が好評。氷瀑まつり会場へのアクセスも良好です。'}
          </p>
          <div class="p-4 bg-white rounded-2xl border border-sky-100 space-y-2 text-xs">
            <div class="flex justify-between items-center">
              <span class="text-stone-500 font-medium">宿泊目安（最安参考）</span>
              <span class="text-base font-black text-rose-600">お一人様 ¥${mainHotel.hotelMinCharge.toLocaleString()}〜</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-stone-500 font-medium">宿泊者クチコミ評価</span>
              <span class="text-amber-500 font-bold">★ ${mainHotel.reviewAverage} / 5.0 （${mainHotel.reviewCount}件の評価）</span>
            </div>
            <div class="pt-1 text-stone-600">
              <strong class="text-stone-800">アクセス：</strong>${mainHotel.access}
            </div>
          </div>
          <div class="pt-2">
            <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="block w-full py-3.5 px-6 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-bold text-center rounded-2xl shadow-md transition duration-200">
              楽天トラベルでプラン・空室をチェック ❯
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- サブ宿カードリスト -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${otherHotels.map(hotel => `
        <div class="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between">
          <div class="space-y-3">
            <img src="${hotel.hotelImageUrl}" alt="${hotel.hotelName}" class="w-full h-40 object-cover rounded-xl" />
            <h4 class="font-bold text-stone-900 text-sm leading-snug">${hotel.hotelName}</h4>
            <p class="text-xs text-stone-600 line-clamp-3">${hotel.hotelSpecial}</p>
            <div class="text-[11px] text-stone-500 space-y-1 pt-1">
              <div>評価: <strong class="text-amber-600">★ ${hotel.reviewAverage}</strong> (${hotel.reviewCount}件)</div>
              <div>料金目安: <strong class="text-rose-600">¥${hotel.hotelMinCharge.toLocaleString()}〜</strong></div>
            </div>
          </div>
          <div class="pt-4 mt-2 border-t border-stone-100">
            <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="block w-full py-2 px-3 bg-stone-100 hover:bg-sky-600 hover:text-white text-stone-800 font-semibold text-xs text-center rounded-xl transition duration-150">
              詳細・空室確認 ❯
            </a>
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- 5. 冬の味覚とグルメ -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-700 pb-2.5">
      🍲 寒冷地ならではの旨味！大雪高原牛・旭川醤油ラーメンと冬の北国ご馳走
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      極寒の地を訪れる旅の醍醐味は、熱々の郷土料理と滋味あふれる食材にあります。大雪山の清らかな伏流水と厳しい寒暖差のなかで育まれた「大雪高原牛」は、赤身の旨味が凝縮された銘柄牛。すき焼きや陶板焼きでじっくり火を通せば、口の中でジューシーな肉汁が溢れ出します。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      また、層雲峡の玄関口である上川町は「日本一ラーメンのうまい町」を掲げており、上川の清流で打った自家製麺と豚骨・魚介出汁の濃厚な醤油スープが冷え切った身体に染み渡ります。近郊の旭川ラーメンの特徴であるラードの油膜は、極寒の北国でスープが冷めないよう工夫された伝統の知恵。道内屈指の酒蔵「高砂酒造（国士無双）」や「男山」の冬の生酒とともに味わう石狩鍋やヤマメの塩焼きは、冬の北海道ならではの至福です。
    </p>
  </section>

  <!-- 6. 11月・12月・1月 気候と服装・雪道運転完全ガイド -->
  <section class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
    <h3 class="text-lg font-bold text-stone-900 flex items-center gap-2">
      <span>❄️</span> 11月〜1月の層雲峡：気温推移・防寒具・冬道ドライブの注意点
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
      <div class="p-4 bg-white rounded-xl border border-slate-200">
        <strong class="text-sky-800 block mb-1 font-bold">11月（初冬・積雪期へ）</strong>
        <p class="text-stone-600">最高気温は5℃前後、最低気温は氷点下へ。峠道（石北峠・北見峠）は完全な凍結路面となります。冬用タイヤ（スタッドレス）は10月下旬から必須です。厚手のコートと手袋を準備しましょう。</p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-slate-200">
        <strong class="text-blue-800 block mb-1 font-bold">12月（真冬本番・氷結期）</strong>
        <p class="text-stone-600">日中でも氷点下が続く真冬日（-5℃〜-10℃）。銀河・流星の滝が凍結を始めます。ロング丈のダウンジャケット、裏起毛タイツ、耳当て付きニット帽、滑り止め付きスノーブーツが欠かせません。</p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-slate-200">
        <strong class="text-indigo-900 block mb-1 font-bold">1月（極寒期・氷瀑まつり）</strong>
        <p class="text-stone-600">最低気温は-15℃〜-20℃に達する厳冬期。氷瀑まつり夜間見学時は風が吹き抜け体感温度が-25℃近くなることも。カイロを靴底や背中に貼り、防水防寒グローブとネックウォーマーを完全装備してください。</p>
      </div>
    </div>
    <div class="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950">
      <strong>⚠️ レンタカー運転のアドバイス：</strong>国道39号線は除雪体制が整っていますが、日陰や橋の上はブラックアイスバーン（透明に凍結した路面）が多発します。急ハンドル・急ブレーキは厳禁。4WD車両の確約予約と、旭川からの温泉ホテル無料送迎バスの活用が安全でおすすめです。
    </div>
  </section>

  <!-- 7. 2泊3日 冬のモデルコース -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-700 pb-2.5">
      🗺️ 旭川空港発着！旭山動物園と層雲峡氷瀑まつりを巡る冬の2泊3日黄金モデルコース
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-sky-900 mb-1">【1日目】旭川空港到着 ➔ 旭川ラーメン ➔ 旭山動物園「雪中ペンギン行進」➔ 層雲峡温泉チェックイン</h4>
        <p class="text-stone-600">
          午前便で旭川空港に到着後、空港連絡バスまたはレンタカーで旭川市内へ。老舗の旭川醤油ラーメンで暖まった後、雪景色の旭山動物園へ。冬期限定の「ペンギンの散歩」を見学し、午後遅くに層雲峡へ移動。名湯の雪見露天風呂に浸かり、大雪高原牛の夕食を堪能。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-sky-900 mb-1">【2日目】黒岳ロープウェイで樹氷鑑賞 ➔ 銀河・流星の滝の巨大氷壁 ➔ 夜の「氷瀑まつり」七色ライトアップ＆冬花火</h4>
        <p class="text-stone-600">
          朝一番で黒岳ロープウェイに乗り標高1,300mの五合目へ。白銀の山々と樹氷のパノラマを堪能。午後は結氷した銀河・流星の滝を間近で見学。宿で温まった後、防寒具を完全装備して夜の「層雲峡温泉氷瀑まつり」会場へ。光り輝く氷の宮殿と夜空を焦がす冬花火に感動。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-sky-900 mb-1">【3日目】朝の掛け流し湯浴み ➔ 上川町特産品ショッピング ➔ 美瑛・白金青い池の冬ライトアップ鑑賞 ➔ 旭川空港より帰路へ</h4>
        <p class="text-stone-600">
          宿で朝風呂と北海道朝食バイキングを楽しんだ後チェックアウト。上川町の道の駅で地酒やスイーツを購入。美瑛町方面へ足を延ばし、雪に覆われた白金青い池と白ひげの滝のブルーリバーを見学後、旭川空港へ。
        </p>
      </div>
    </div>
  </section>

  <!-- 8. 内部リンク網羅ブロック -->
  <section class="p-6 bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl border border-sky-200">
    <h3 class="text-base font-bold text-stone-900 mb-3">🔗 あわせて読みたい！北海道＆冬の絶景温泉特集</h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
      <li><a href="/posts/akan-lake-frost-flower-ice-festival-ainu-kotan-winter-guide/" class="text-sky-700 hover:text-sky-900 font-bold underline">・阿寒湖の冬の奇跡！フロストフラワーと冬華美・アイヌコタン完全ガイド</a></li>
      <li><a href="/posts/tokachigawa-onsen-moor-hotspring-jewelry-ice-winter-guide/" class="text-sky-700 hover:text-sky-900 font-bold underline">・十勝川温泉の植物性モール泉と大津海岸ジュエリーアイス冬旅ガイド</a></li>
      <li><a href="/posts/toyako-onsen-winter-illumination-lake-view-yotei-guide/" class="text-sky-700 hover:text-sky-900 font-bold underline">・洞爺湖温泉イルミネーショントンネルと雪の羊蹄山ビューホテル特集</a></li>
      <li><a href="/posts/noboribetsu-onsen-jigokudani-nine-springs-guide/" class="text-sky-700 hover:text-sky-900 font-bold underline">・登別温泉地獄谷の雪景色と9つの泉質を巡る名宿完全比較</a></li>
      <li><a href="/posts/zao-onsen-snow-monster-juhyo-lightup-winter-guide/" class="text-sky-700 hover:text-sky-900 font-bold underline">・蔵王温泉の巨大樹氷スノーモンスターと強酸性硫黄泉冬ガイド</a></li>
      <li><a href="/posts/ikura-kakehodai-kaisendon-hokkaido-hotels-guide/" class="text-sky-700 hover:text-sky-900 font-bold underline">・いくら掛け放題！北海道の絶品海鮮丼朝食バイキング名宿まとめ</a></li>
    </ul>
  </section>

  <!-- 9. よくある質問 FAQ（構造化マークアップ対応） -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-700 pb-2.5">
      ❓ 層雲峡温泉の冬旅行に関するよくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q1. 氷瀑まつりの開催期間と入場料、見学のベストな時間帯は？</h4>
        <p class="text-stone-600">例年1月下旬から3月中旬まで開催されます。協力金（入場料）はお一人様数百円程度です。見学は日没後の17時〜19時頃がライトアップの鮮やかさと冬花火（特定日）を楽しめる黄金時間帯です。</p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q2. 冬の層雲峡へレンタカーで行くのは危険ですか？</h4>
        <p class="text-stone-600">4WD・スタッドレスタイヤ装着でも、降雪時や吹雪時の視界不良（ホワイトアウト）、ブラックアイスバーンには熟練の注意が必要です。雪道運転に不慣れな場合は、札幌や旭川から運行されるホテルの無料送迎バスや路線バスの利用を強く推奨します。</p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q3. スマートフォンやカメラのバッテリー対策は必要ですか？</h4>
        <p class="text-stone-600">氷点下10度以下の極寒環境では、リチウムイオン電池の電圧が急激に低下し電源が落ちることがあります。スマートフォンや予備バッテリーは内ポケットに入れ体温で温め、撮影直前に取り出す工夫が効果的です。</p>
      </div>
    </div>
  </section>

</div>`;

  return {
    id: data.id,
    slug: data.slug,
    title: data.title,
    description: '北海道・大雪山麓に位置する層雲峡温泉の11月・12月・1月冬特集！七色に輝く氷瀑まつりと銀河・流星の滝の巨大氷壁、旭山動物園の雪中ペンギン散歩、極上源泉かけ流し雪見露天風呂と名物大雪高原牛を徹底解説。',
    prefecture: '北海道',
    area: '層雲峡・大雪山',
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: ['北海道', '層雲峡温泉', '大雪山', '氷瀑まつり', '旭山動物園', '源泉かけ流し', '雪見露天風呂', '冬旅行'],
    keywords: [
      '層雲峡温泉 おすすめ 旅館 冬 氷瀑まつり',
      '層雲峡 氷瀑まつり 日程 ライトアップ 見どころ',
      '大雪山 黒岳 ロープウェイ 冬 樹氷',
      '旭川 旭山動物園 ペンギンの散歩 冬 観光',
      '層雲峡温泉 源泉かけ流し 雪見風呂 宿',
      '層雲峡温泉 朝陽リゾートホテル 銀泉閣 口コミ'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// 記事2: 長野県・白骨温泉＆乗鞍高原（11〜1月冬の極上旅）
// ========================================================
function buildShirahonePost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('齋藤旅館') || x.hotelName.includes('小梨の湯')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 3);

  const spotShirahone = w.find(x => x.spotName === '白骨温泉') || w[0];
  const spotNorikuraKogen = w.find(x => x.spotName === '乗鞍高原') || w[1];
  const spotNorikuradake = w.find(x => x.spotName === '乗鞍岳') || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-100/60 rounded-3xl border border-teal-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-teal-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Executive Summary</span>
      <span class="text-xs text-teal-950 font-bold">11月〜1月の白骨温泉・乳白色秘湯と乗鞍高原白銀紀行完全総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【総括】白骨温泉の冬旅：「三日入れば三年風邪をひかぬ」北アルプスの白濁霊泉。渓谷の雪景色と名物投じ蕎麦</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      長野県松本市安曇、北アルプス・乗鞍岳の東側山腹（標高約1,400m）にひっそりと佇む白骨温泉は、開湯600年以上の歴史を誇る中部山岳国立公園内の名湯。古くから「三日入れば三年風邪をひかぬ」と称えられ、胃腸病や冷え性に優れた効能を持つ湯治場として文人墨客に愛されてきました。湧出時は無色透明な源泉が、浴槽で空気に触れ減圧されることでカルシウムや硫黄分が細かく結晶化し、天候や気温によって白濁、コバルトブルー、淡いエメラルドグリーンへと神秘的に色を変えます。11月の晩秋の初雪から12月・1月の厳冬期にかけては、温泉街を流れる湯川渓谷沿いのブナやシラカバが白銀に埋もれ、渓流のせせらぎと湯煙だけが響く静寂の秘境へと昇華。乗鞍高原のブルーアイス巨石氷瀑「善五郎の滝」や信州の冬の風物詩「投じ蕎麦（とうじそば）」、滋味あふれる温泉粥とともに、心と身体を根底から浄化する極上の冬逗留が体験できます。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-teal-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">泉質・pH</span>
        <strong class="text-teal-900 text-sm">含硫黄-Ca・Mg-炭酸水素塩泉（中性〜弱酸性）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-teal-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">名物効能・特徴</span>
        <strong class="text-stone-900 text-sm">「3日入れば3年風邪ひかぬ」飲泉許可源泉</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-teal-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">雪景色ピーク</span>
        <strong class="text-cyan-800 text-sm">12月中旬〜2月下旬（積雪1〜2m）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-teal-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の必食グルメ</span>
        <strong class="text-emerald-900 text-sm">投じ蕎麦・温泉粥・信州プレミアム牛</strong>
      </div>
    </div>
  </section>

  <!-- 1. 白濁の湯と湯治文化 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      ♨️ なぜ湯は白く濁るのか？炭酸水素塩泉が織りなす「絹の湯」の神秘と飲泉効果
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      白骨温泉の最大の特徴は、その優美な乳白色の湯にあります。源泉口から湧き出る瞬間はまったく濁りのない透明な液体ですが、温泉水に含まれる大量の遊離炭酸（二酸化炭素）とカルシウムイオン、重曹成分が地表の空気に触れることで炭酸ガスが気化。過飽和となった炭酸カルシウムが微細な結晶粒子となって湯の中に舞うことで、光を乱反射して白濁します。気温が低く冷え込みが厳しい冬場ほど結晶化が進み、濃厚なミルク色のシルキーバスへと変化します。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      泉温はおおむね38℃〜41℃と、長湯に適したぬるめの適温設定。肌に触れると角質をやわらげる炭酸水素塩泉特有のなめらかな感触があり、細かい炭酸ガスが皮膚から吸収されて抹消血管を広げるため、ぬる湯でありながら入浴後は身体の芯からポカポカとした温もりが持続します。また、白骨温泉の多くの旅館では飲泉所が設けられており、胃腸の調子を整える飲む温泉水として古くから重宝されてきました。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      朝の食卓に供される「温泉粥」は、この源泉で信州産米をじっくり炊き上げたもの。温泉成分の作用でお米が白濁し、ほのかな塩味と硫黄の香りが胃袋を優しく目覚めさせます。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る北アルプス・乗鞍の冬名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 白骨温泉 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotShirahone.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Sirahone_spa_kyoudou-noten-buro_2008.jpg/800px-Sirahone_spa_kyoudou-noten-buro_2008.jpg'}" alt="${spotShirahone.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-teal-100 text-teal-800 font-bold rounded">国民保養温泉地</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotShirahone.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotShirahone.extract || '長野県松本市安曇にある温泉。北アルプス・乗鞍岳山麓の中部山岳国立公園区域内に位置し、乳白色の湯で知られる。'}
            </p>
          </div>
          <p class="text-[11px] text-teal-950 bg-teal-50 p-2.5 rounded-lg font-medium border border-teal-100">
            💡 雪に囲まれた渓谷露天風呂では、白濁した湯と周囲の純白の雪が溶け合う幽玄な景色が広がります。
          </p>
        </div>
      </div>

      <!-- Spot 2: 乗鞍高原 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotNorikuraKogen.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Norikura_Plateau_from_Mount_Norikura.jpg/800px-Norikura_Plateau_from_Mount_Norikura.jpg'}" alt="${spotNorikuraKogen.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-cyan-100 text-cyan-800 font-bold rounded">標高1600m</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotNorikuraKogen.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotNorikuraKogen.extract || '飛騨山脈南東側に位置する広大な高原。冬期はスキーやスノーシューハイク、結氷した滝のトレッキングで賑わう。'}
            </p>
          </div>
          <p class="text-[11px] text-cyan-950 bg-cyan-50 p-2.5 rounded-lg font-medium border border-cyan-100">
            💡 冬の「善五郎の滝」は巨大な青い氷瀑へと姿を変え、スノーシューを履いた氷瀑ツアーが大人気です。
          </p>
        </div>
      </div>

      <!-- Spot 3: 乗鞍岳 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotNorikuradake.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Norikura-air.jpg/800px-Norikura-air.jpg'}" alt="${spotNorikuradake.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded">日本百名山3026m</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotNorikuradake.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotNorikuradake.extract || '北アルプス南部に位置し、剣ヶ峰を主峰とする名峰。山麓には広大な裾野と豊富な温泉源を抱える。'}
            </p>
          </div>
          <p class="text-[11px] text-blue-950 bg-blue-50 p-2.5 rounded-lg font-medium border border-blue-100">
            💡 冬は一面の白銀の峰々が青空に映え、山麓の温泉街から神々しい冬のアルプス連峰を仰ぎ見ることができます。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 冬の乗鞍高原と善五郎の滝の氷瀑 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      ❄️ スノーシューで歩く銀世界の森！善五郎の滝の「ブルーアイス氷瀑」
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      白骨温泉から車で約15分〜20分の距離に広がる乗鞍高原は、冬のアウトドア愛好家にとって憧れのフィールドです。特に12月下旬から2月にかけて必見なのが、乗鞍三名滝の一つ「善五郎の滝」の完全氷結。落差約21.5m、幅8mの滝が一面のエメラルドブルーの氷のカーテンとなって凍りつきます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      滝つぼのすぐ間近までスノーシューでアクセスすることが可能で、静寂な森の中に突如現れる巨大な氷壁の迫力には息を呑みます。晴れた冬の日には、背後にそびえる乗鞍岳の白銀の主峰が紺碧の空にくっきりと浮かび上がり、コントラストの美しさは言葉を失うほどです。初心者向けのスノーシューガイドツアーも乗鞍観光センター周辺で多数開催されています。
    </p>
  </section>

  <!-- 4. 楽天トラベルAPI連動 厳選宿泊施設 -->
  <section class="space-y-6 my-8">
    <div class="border-l-4 border-teal-700 pl-4">
      <span class="text-xs font-bold text-teal-800 tracking-wider uppercase">Rakuten Travel Live Data</span>
      <h2 class="text-xl md:text-2xl font-bold text-stone-900">
        🏨 楽天トラベル厳選！白骨温泉の乳白色露天を味わう名宿セレクション
      </h2>
      <p class="text-xs text-stone-600 mt-1">楽天トラベルAPIから最新の空室・プラン情報を自動取得。北アルプスの雪深い秘湯を心ゆくまで堪能できる宿です。</p>
    </div>

    <!-- メイン宿カード -->
    <div class="bg-gradient-to-br from-white to-teal-50/40 rounded-3xl border-2 border-teal-300 p-6 md:p-8 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
        <span class="px-3 py-1 bg-teal-800 text-white text-xs font-bold rounded-full">白骨温泉の象徴的湯守</span>
        <span class="text-xs text-stone-600 font-semibold">${mainHotel.address1}${mainHotel.address2}</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div class="space-y-3">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full h-64 object-cover rounded-2xl shadow-sm" />
          ${mainHotel.roomImageUrl ? `<img src="${mainHotel.roomImageUrl}" alt="${mainHotel.hotelName} 客室・温泉" class="w-full h-36 object-cover rounded-xl border border-teal-100" />` : ''}
        </div>
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-stone-900">${mainHotel.hotelName}</h3>
          <p class="text-xs md:text-sm text-stone-600 leading-relaxed">
            ${mainHotel.hotelSpecial || '白骨温泉を代表する歴史ある湯宿。創業280年以上の伝統を誇り、自然の渓流を望む広々とした野天風呂は圧巻の乳白色。旬の山菜や信州牛を取り入れた郷土会席料理でおもてなしします。'}
          </p>
          <div class="p-4 bg-white rounded-2xl border border-teal-100 space-y-2 text-xs">
            <div class="flex justify-between items-center">
              <span class="text-stone-500 font-medium">宿泊目安（最安参考）</span>
              <span class="text-base font-black text-rose-600">お一人様 ¥${mainHotel.hotelMinCharge.toLocaleString()}〜</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-stone-500 font-medium">宿泊者クチコミ評価</span>
              <span class="text-amber-500 font-bold">★ ${mainHotel.reviewAverage} / 5.0 （${mainHotel.reviewCount}件の評価）</span>
            </div>
            <div class="pt-1 text-stone-600">
              <strong class="text-stone-800">アクセス：</strong>${mainHotel.access}
            </div>
          </div>
          <div class="pt-2">
            <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="block w-full py-3.5 px-6 bg-gradient-to-r from-teal-700 to-emerald-800 hover:from-teal-800 hover:to-emerald-900 text-white font-bold text-center rounded-2xl shadow-md transition duration-200">
              楽天トラベルでプラン・空室をチェック ❯
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- サブ宿カードリスト -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${otherHotels.map(hotel => `
        <div class="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between">
          <div class="space-y-3">
            <img src="${hotel.hotelImageUrl}" alt="${hotel.hotelName}" class="w-full h-40 object-cover rounded-xl" />
            <h4 class="font-bold text-stone-900 text-sm leading-snug">${hotel.hotelName}</h4>
            <p class="text-xs text-stone-600 line-clamp-3">${hotel.hotelSpecial}</p>
            <div class="text-[11px] text-stone-500 space-y-1 pt-1">
              <div>評価: <strong class="text-amber-600">★ ${hotel.reviewAverage}</strong> (${hotel.reviewCount}件)</div>
              <div>料金目安: <strong class="text-rose-600">¥${hotel.hotelMinCharge.toLocaleString()}〜</strong></div>
            </div>
          </div>
          <div class="pt-4 mt-2 border-t border-stone-100">
            <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="block w-full py-2 px-3 bg-stone-100 hover:bg-teal-700 hover:text-white text-stone-800 font-semibold text-xs text-center rounded-xl transition duration-150">
              詳細・空室確認 ❯
            </a>
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- 5. 信州の冬グルメ：投じ蕎麦と信州プレミアム牛 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      🥢 雪国の知恵が詰まった郷土の温もり！名物「投じ蕎麦」と信州の山の幸
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      冬の信州奈川・安曇野エリアを訪れたなら、必ず食したいのが伝統の「投じ蕎麦（とうじそば）」です。小分けにした冷たい手打ち蕎麦を「とうじ籠」と呼ばれる竹編みの小籠に入れ、キノコや山菜、鶏肉や鴨肉を煮込んだ熱々の醤油仕立ての鍋つゆに数秒間くぐらせていただきます。冷水で締めた蕎麦のコシを保ちつつ、温かい具材の旨味が絡み合う独特の食べ方は、厳しい信州の冬に生まれた究極の温蕎麦です。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      さらに、信州アルプスの伏流水で育った岩魚の炭火塩焼きや骨酒、リンゴを飼料に育った柔らかな「信州プレミアム牛肉」の陶板焼きなど、滋味豊かな地元の食材が並びます。地酒の「真澄」や「大信州」の熱燗を傾けながら、囲炉裏端で過ごす夜のひとときは旅情を極めます。
    </p>
  </section>

  <!-- 6. アクセスと冬道ドライブ注意点 -->
  <section class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
    <h3 class="text-lg font-bold text-stone-900 flex items-center gap-2">
      <span>🚙</span> 白骨温泉へのアクセス：沢渡経由ルートと冬期通行止めの注意
    </h3>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      長野自動車道・松本ICから国道158号線を上高地・高山方面へ進み、沢渡（さわんど）交差点から県道300号線（白骨温泉線）を経由して約60分。乗鞍高原側から白骨温泉へ抜けるスーパー林道（白骨乗鞍線）は冬期閉鎖となるため、必ず沢渡経由の県道300号線をご利用ください。
    </p>
    <div class="p-3.5 bg-rose-50 rounded-xl border border-rose-200 text-xs text-rose-950 space-y-1">
      <strong>⚠️ 厳重注意：</strong>11月中旬以降は路面凍結および積雪が日常化します。ノーマルタイヤでの走行は極めて危険であり絶対不可です。スタッドレスタイヤの装着、またはチェーンの携行が必須です。雪道運転に不安がある場合は、JR松本駅から松本電鉄上高地線で新島々駅へ向かい、そこから白骨温泉行きの路線バスを利用するのが最も安全です。
    </div>
  </section>

  <!-- 7. 内部リンク網羅ブロック -->
  <section class="p-6 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl border border-teal-200">
    <h3 class="text-base font-bold text-stone-900 mb-3">🔗 あわせて読みたい！甲信越＆秘湯特集</h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
      <li><a href="/posts/okuhida-onsen-kyo-aodaru-hyobaku-lightup-shinhotaka-winter-guide/" class="text-teal-700 hover:text-teal-900 font-bold underline">・奥飛騨温泉郷の青だる氷瀑ライトアップと新穂高ロープウェイ完全ガイド</a></li>
      <li><a href="/posts/nozawa-onsen-soto-yu-meguri-dosojin-matsuri-winter-guide/" class="text-teal-700 hover:text-teal-900 font-bold underline">・野沢温泉十三の外湯めぐりと道祖神祭り！熱湯とパウダースノー名宿</a></li>
      <li><a href="/posts/snow-monkey-jigokudani-shibu-yudanaka-onsen-guide/" class="text-teal-700 hover:text-teal-900 font-bold underline">・地獄谷野猿公苑のスノーモンキーと渋温泉九湯めぐりガイド</a></li>
      <li><a href="/posts/nagano-onsen-ranking-hotels-guide/" class="text-teal-700 hover:text-teal-900 font-bold underline">・長野県の人気温泉地ランキング＆おすすめ名宿総合まとめ</a></li>
      <li><a href="/posts/nyuto-onsen-kyo-snow-secret-bath-kiritanpo-akita-guide/" class="text-teal-700 hover:text-teal-900 font-bold underline">・乳頭温泉郷の白銀秘湯！鶴の湯・妙乃湯と秋田きりたんぽ冬旅ガイド</a></li>
      <li><a href="/posts/january-nagano-suwa-10selection/" class="text-teal-700 hover:text-teal-900 font-bold underline">・1月の長野・諏訪湖御神渡りと名湯旅館10選</a></li>
    </ul>
  </section>

  <!-- 8. よくある質問 FAQ（構造化マークアップ対応） -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      ❓ 白骨温泉の冬旅行に関するよくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q1. 白骨温泉の湯はいつでも白く濁っていますか？</h4>
        <p class="text-stone-600">日によって白濁の度合いや色合い（淡いコバルトブルーや透明に近い緑色）が変化します。これは気温、気圧、天候によって炭酸カルシウムの結晶化速度が異なるためで、天然源泉かけ流しならではの自然現象です。</p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q2. 冬場の露天風呂は寒すぎませんか？</h4>
        <p class="text-stone-600">源泉温度が約38〜41℃とぬるめのため、湯に浸かっている間は心地よく長湯が楽しめます。ただし脱衣所から湯船への移動時は氷点下の冷気にさらされるため、内湯でしっかりと体を温めてから露天風呂へ出るのが鉄則です。</p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q3. 日帰り入浴は冬でも利用できますか？</h4>
        <p class="text-stone-600">公共野天風呂は冬期休業となりますが、旅館（泡の湯や湯元齋藤旅館など）では冬期も指定時間帯で日帰り入浴を実施している施設があります。受付時間や休館日は日によって異なるため事前確認が必要です。</p>
      </div>
    </div>
  </section>

</div>`;

  return {
    id: data.id,
    slug: data.slug,
    title: data.title,
    description: '長野県・北アルプス山麓の白骨温泉11月・12月・1月冬特集！「三日入れば三年風邪をひかぬ」乳白色のまろやかな秘湯と雪見野天風呂、乗鞍高原善五郎の滝のブルーアイス氷瀑、信州投じ蕎麦と温泉粥の極上冬旅ガイド。',
    prefecture: '長野県',
    area: '白骨・乗鞍',
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: ['長野県', '白骨温泉', '乗鞍高原', '乳白色温泉', '雪見風呂', '秘湯', '投じ蕎麦', '冬旅行'],
    keywords: [
      '白骨温泉 おすすめ 旅館 冬 乳白色',
      '白骨温泉 齋藤旅館 笹屋 白船グランドホテル',
      '乗鞍高原 善五郎の滝 氷瀑 スノーシュー 冬',
      '白骨温泉 効能 泉質 飲泉 温泉粥',
      '白骨温泉 アクセス 冬 雪道 スタッドレスタイヤ',
      '信州 投じ蕎麦 冬 グルメ 長野'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// 記事3: 静岡県・修善寺温泉＆中伊豆の冬風情（11〜1月冬の極上旅）
// ========================================================
function buildShuzenjiPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('新井旅館') || x.hotelName.includes('〇久') || x.hotelName.includes('宙')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 3);

  const spotShuzenjiOnsen = w.find(x => x.spotName === '修善寺温泉') || w[0];
  const spotShuzenjiTemple = w.find(x => x.spotName === '修禅寺') || w[1];
  const spotBamboo = w.find(x => x.spotName === '竹林の小径') || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-amber-50 via-rose-50 to-orange-100/60 rounded-3xl border border-amber-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-amber-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Executive Summary</span>
      <span class="text-xs text-amber-950 font-bold">11月〜1月の修善寺温泉・冬の小京都と早咲き梅林完全総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【総括】修善寺温泉の冬旅：桂川に架かる朱塗りの恋橋と静寂の竹林。日本一早咲きの梅とズガニうどん・伊豆牛会席</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      静岡県伊豆市、天城連峰の北麓に位置する修善寺温泉は、807年に弘法大師空海が湧出させた「独鈷の湯」を起源とする伊豆半島最古の温泉地。「伊豆の小京都」と称される温泉街の中心を桂川が流れ、竹林の小径や朱塗りの太鼓橋、国の登録有形文化財に指定された純和風木造旅館が立ち並びます。冬の修善寺は、11月下旬から12月上旬にかけて伊豆半島特有の遅い紅葉のクライマックスを迎え、温泉街が燃えるような朱色に染まります。そして12月中旬から1月にかけては観光客の喧騒が落ち着き、静寂に包まれた竹林と澄み切った川のせせらぎが響く大人の隠れ家シーズンへ。さらに1月中旬からは、約20種1,000本の梅が咲き誇る「修善寺梅林」で日本屈指の早咲き梅が開花し、早咲きの「修善寺寒桜」とともに一足早い春の気配を告げます。無色透明で肌触り滑らかなアルカリ性単純温泉で体を温め、冬に旬を迎える濃厚な「ズガニうどん」やとろける「伊豆牛」を味わう、風雅極まる冬の伊豆旅行をご紹介します。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">泉質・美肌効果</span>
        <strong class="text-amber-900 text-sm">アルカリ性単純温泉（pH8.6・美肌の湯）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の開花見頃</span>
        <strong class="text-rose-800 text-sm">修善寺梅林：1月中旬〜3月上旬（寒梅）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の平均気温</span>
        <strong class="text-stone-900 text-sm">11月: 10℃〜17℃ / 12〜1月: 3℃〜12℃（温暖）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">必食ご当地グルメ</span>
        <strong class="text-orange-900 text-sm">ズガニうどん・伊豆牛・天城生わさび丼</strong>
      </div>
    </div>
  </section>

  <!-- 1. 竹林の小径と恋の橋めぐり -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      🎋 桂川のせせらぎと青竹の静寂！冬の「竹林の小径」と縁結びの五大橋
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      修善寺温泉の象徴である「竹林の小径」は、桂川沿いに伸びる長さ約300mの石畳の散策路。手入れの行き届いた青竹が天に向かってまっすぐに伸び、中央に設けられた円形の竹製ベンチに寝転ぶと、青空と竹の葉が織りなす万華鏡のような木漏れ日が降り注ぎます。冬の朝は凛とした冷気が立ち込め、竹の葉が擦れ合う微かな音と川のせせらぎだけが耳に届きます。夜間にはライトアップが行われ、昼間とは一変した幽玄な世界が広がります。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      桂川に架かる5つの朱塗りの橋は、それぞれに恋の成就にまつわる言い伝えを持つパワースポット。「渡月橋（みそめ橋）」「虎渓橋（あこがれ橋）」「桂橋（結ばれ橋）」「楓橋（寄り添い橋）」「滝下橋（安らぎ橋）」。5つの橋すべてを願いを込めながら渡ると恋が実ると伝えられており、冬の澄んだ空気のなかで歩く情緒あふれる散策コースとして人気を博しています。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る中伊豆・修善寺の冬名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 修善寺温泉街 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotShuzenjiOnsen.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/181124_Shuzenji_Onsen_Izu_Shizuoka_pref_Japan01s3.jpg/800px-181124_Shuzenji_Onsen_Izu_Shizuoka_pref_Japan01s3.jpg'}" alt="${spotShuzenjiOnsen.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded">伊豆最古1200年</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotShuzenjiOnsen.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotShuzenjiOnsen.extract || '静岡県伊豆市にある伊豆半島最古の温泉地。日本百名湯に選ばれ、夏目漱石や川端康成など多くの文豪が滞在した歴史を持つ。'}
            </p>
          </div>
          <p class="text-[11px] text-amber-950 bg-amber-50 p-2.5 rounded-lg font-medium border border-amber-100">
            💡 川沿いに足湯「河原湯」や「独鈷の湯」があり、川のせせらぎを聴きながら湯浴みが楽しめます。
          </p>
        </div>
      </div>

      <!-- Spot 2: 修禅寺 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotShuzenjiTemple.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/181124_Shuzenji_Izu_Shizuoka_pref_Japan04s3.jpg/800px-181124_Shuzenji_Izu_Shizuoka_pref_Japan04s3.jpg'}" alt="${spotShuzenjiTemple.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-rose-100 text-rose-800 font-bold rounded">曹洞宗名刹</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotShuzenjiTemple.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotShuzenjiTemple.extract || '修善寺温泉街の中心にある曹洞宗寺院。空海創建と伝わり、鎌倉幕府の源頼家幽閉の地としても知られる。'}
            </p>
          </div>
          <p class="text-[11px] text-rose-950 bg-rose-50 p-2.5 rounded-lg font-medium border border-rose-100">
            💡 境内には樹齢800年を超える大杉があり、冬の澄み渡る空気のなかで厳かな参拝ができます。
          </p>
        </div>
      </div>

      <!-- Spot 3: 竹林の小径 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/181124_Shuzenji_Onsen_Izu_Shizuoka_pref_Japan01s3.jpg/800px-181124_Shuzenji_Onsen_Izu_Shizuoka_pref_Japan01s3.jpg" alt="竹林の小径" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">伊豆の小京都</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">竹林の小径</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              桂川沿いに続く風光明媚な遊歩道。左右に整然と伸びる竹林と石畳が美しく、ミシュラン・グリーンガイドでも二つ星を獲得した名所。
            </p>
          </div>
          <p class="text-[11px] text-emerald-950 bg-emerald-50 p-2.5 rounded-lg font-medium border border-emerald-100">
            💡 夕暮れ時から日没後にかけて行われる竹林ライトアップは、幻想的な静寂の美しさに満ちています。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 修善寺梅林と早咲き寒梅 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      🌸 日本一早い春の訪れ！1月中旬から香る「修善寺梅林」と富士山眺望
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      温泉街の北側、高台に広がる「修善寺梅林」は、総面積3万平方メートルの敷地に樹齢100年を超える古木を含め、白梅・紅梅など約20種1,000本が植えられた伊豆屈指の観梅の名所です。温暖な中伊豆の気候ゆえ、1月中旬には早咲きの「冬至梅」や「八重寒紅」がほころび始め、ほのかな甘い香りが園内を満たします。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      梅林の展望広場からは、澄み渡った冬晴れの空に冠雪した富士山を望む絶景が広がります。白やピンクの梅の花越しに白銀の富士を仰ぐ構図は、新春の伊豆ならではの吉祥の景色。同時期には温泉街の各所で「修善寺寒桜」も淡い紅色の花を咲かせ、真冬でありながら暖かな春の足音を五感で実感できます。
    </p>
  </section>

  <!-- 4. 楽天トラベルAPI連動 厳選宿泊施設 -->
  <section class="space-y-6 my-8">
    <div class="border-l-4 border-amber-700 pl-4">
      <span class="text-xs font-bold text-amber-800 tracking-wider uppercase">Rakuten Travel Live Data</span>
      <h2 class="text-xl md:text-2xl font-bold text-stone-900">
        🏨 楽天トラベル厳選！修善寺温泉の歴史と美食に浸る名宿セレクション
      </h2>
      <p class="text-xs text-stone-600 mt-1">楽天トラベルAPIから最新の空室・宿泊料金をリアルタイム取得。文化財の宿から絶景露天まで、至高の宿をご紹介します。</p>
    </div>

    <!-- メイン宿カード -->
    <div class="bg-gradient-to-br from-white to-amber-50/40 rounded-3xl border-2 border-amber-300 p-6 md:p-8 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
        <span class="px-3 py-1 bg-amber-800 text-white text-xs font-bold rounded-full">修善寺が誇る文化財名宿</span>
        <span class="text-xs text-stone-600 font-semibold">${mainHotel.address1}${mainHotel.address2}</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div class="space-y-3">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full h-64 object-cover rounded-2xl shadow-sm" />
          ${mainHotel.roomImageUrl ? `<img src="${mainHotel.roomImageUrl}" alt="${mainHotel.hotelName} 客室・大浴場" class="w-full h-36 object-cover rounded-xl border border-amber-100" />` : ''}
        </div>
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-stone-900">${mainHotel.hotelName}</h3>
          <p class="text-xs md:text-sm text-stone-600 leading-relaxed">
            ${mainHotel.hotelSpecial || '国の登録有形文化財に指定された壮麗な建築美を誇る老舗旅館。横山大観をはじめ多くの文人画人が逗留した名宿で、天平大浴堂や風情豊かな庭園露天風呂で自家源泉の美肌湯を堪能できます。'}
          </p>
          <div class="p-4 bg-white rounded-2xl border border-amber-100 space-y-2 text-xs">
            <div class="flex justify-between items-center">
              <span class="text-stone-500 font-medium">宿泊目安（最安参考）</span>
              <span class="text-base font-black text-rose-600">お一人様 ¥${mainHotel.hotelMinCharge.toLocaleString()}〜</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-stone-500 font-medium">宿泊者クチコミ評価</span>
              <span class="text-amber-500 font-bold">★ ${mainHotel.reviewAverage} / 5.0 （${mainHotel.reviewCount}件の評価）</span>
            </div>
            <div class="pt-1 text-stone-600">
              <strong class="text-stone-800">アクセス：</strong>${mainHotel.access}
            </div>
          </div>
          <div class="pt-2">
            <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="block w-full py-3.5 px-6 bg-gradient-to-r from-amber-700 to-rose-700 hover:from-amber-800 hover:to-rose-800 text-white font-bold text-center rounded-2xl shadow-md transition duration-200">
              楽天トラベルでプラン・空室をチェック ❯
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- サブ宿カードリスト -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${otherHotels.map(hotel => `
        <div class="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between">
          <div class="space-y-3">
            <img src="${hotel.hotelImageUrl}" alt="${hotel.hotelName}" class="w-full h-40 object-cover rounded-xl" />
            <h4 class="font-bold text-stone-900 text-sm leading-snug">${hotel.hotelName}</h4>
            <p class="text-xs text-stone-600 line-clamp-3">${hotel.hotelSpecial}</p>
            <div class="text-[11px] text-stone-500 space-y-1 pt-1">
              <div>評価: <strong class="text-amber-600">★ ${hotel.reviewAverage}</strong> (${hotel.reviewCount}件)</div>
              <div>料金目安: <strong class="text-rose-600">¥${hotel.hotelMinCharge.toLocaleString()}〜</strong></div>
            </div>
          </div>
          <div class="pt-4 mt-2 border-t border-stone-100">
            <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="block w-full py-2 px-3 bg-stone-100 hover:bg-amber-700 hover:text-white text-stone-800 font-semibold text-xs text-center rounded-xl transition duration-150">
              詳細・空室確認 ❯
            </a>
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- 5. 冬の中伊豆グルメ：ズガニうどんと伊豆牛 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      🍲 狩野川の恵みと銘柄牛！濃厚「ズガニうどん」と「天城生わさび丼」
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      修善寺の冬を代表する幻の郷土の味覚が「ズガニ（モクズガニ）」です。秋から冬にかけて清流・狩野川を下るズガニを生きたまま殻ごと石臼ですり潰し、丁寧に漉して味噌仕立ての出汁にした「ズガニ汁」「ズガニうどん」は、上海蟹の同属異種ならではの超濃厚な蟹ミソのコクと甘みが凝縮されています。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      また、年間の出荷頭数が極めて少ない希少銘柄牛「伊豆牛」のステーキやすき焼きは、脂の融点が低くとろけるような食感が自慢。天城山麓の湧水で育まれた「天城本生わさび」をたっぷりすりおろし、削りたての本枯節とともに炊き立てご飯にかける「わさび丼」は、爽やかな辛味と豊かな甘みが鼻腔を抜け、一度食べたら忘れられない逸品です。
    </p>
  </section>

  <!-- 6. 首都圏からのアクセスと冬の気候 -->
  <section class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
    <h3 class="text-lg font-bold text-stone-900 flex items-center gap-2">
      <span>🚆</span> 首都圏からの快適アクセスと冬の温暖な気候ガイド
    </h3>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      修善寺温泉は、東京駅からJR特急「踊り子号」で乗り換えなし約2時間10分で修善寺駅に直通。修善寺駅からは路線バスで約8分と、公共交通機関でのアクセスが抜群です。東名高速・新東名高速道路を利用する場合も、長泉沼津ICから伊豆縦貫道・修善寺道路を経由して約30分で到着します。
    </p>
    <div class="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950">
      <strong>☀️ 冬の気候特性：</strong>中伊豆は太平洋側気候のため、11月〜1月も晴天率が非常に高く、平野部や温泉街では積雪は稀です。日中は10℃以上まで上がる日も多く、真冬でも穏やかな街歩きが楽しめます。ただし朝晩は冷え込むため、マフラーや脱ぎ着しやすい上着をお持ちください。
    </div>
  </section>

  <!-- 7. 内部リンク網羅ブロック -->
  <section class="p-6 bg-gradient-to-r from-amber-50 to-rose-50 rounded-2xl border border-amber-200">
    <h3 class="text-base font-bold text-stone-900 mb-3">🔗 あわせて読みたい！静岡・伊豆の温泉特集</h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
      <li><a href="/posts/atami-onsen-winter-fireworks-early-plum-kinmedai-guide/" class="text-amber-800 hover:text-amber-950 font-bold underline">・熱海温泉の冬海上花火大会と熱海梅園！金目鯛と波音露天名宿ガイド</a></li>
      <li><a href="/posts/shizuoka-onsen-ranking-hotels-guide/" class="text-amber-800 hover:text-amber-950 font-bold underline">・静岡県の人気温泉地ランキング＆海鮮自慢の名宿総合まとめ</a></li>
      <li><a href="/posts/shuzenji-arai-ryokan-guide/" class="text-amber-800 hover:text-amber-950 font-bold underline">・修善寺温泉・新井旅館の文化財建築と天平大浴堂宿泊記</a></li>
      <li><a href="/posts/autumn-shizuoka-ito-atami-10selection/" class="text-amber-800 hover:text-amber-950 font-bold underline">・伊豆・伊東温泉と熱海温泉のおすすめ宿泊ホテル10選</a></li>
      <li><a href="/posts/january-shizuoka-atami-10selection/" class="text-amber-800 hover:text-amber-950 font-bold underline">・1月の静岡・熱海梅まつりとオーシャンビュー温泉旅館10選</a></li>
      <li><a href="/posts/fuji-gotemba-shizuoka-hamanako-hotels-guide/" class="text-amber-800 hover:text-amber-950 font-bold underline">・富士山・御殿場・浜名湖を巡る静岡周遊ドライブ名宿ガイド</a></li>
    </ul>
  </section>

  <!-- 8. よくある質問 FAQ（構造化マークアップ対応） -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      ❓ 修善寺温泉の冬旅行に関するよくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q1. 修善寺温泉は冬に雪が降りますか？車にスタッドレスタイヤは必要ですか？</h4>
        <p class="text-stone-600">修善寺温泉街は温暖な地域のため、年に1〜2回うっすら雪が舞う程度で積雪することは極めて稀です。通常はノーマルタイヤでもアクセス可能ですが、天城峠や箱根方面を経由する場合は凍結の可能性があるため、冬用装備の準備があると安心です。</p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q2. 修善寺梅林の梅の見頃時期はいつ頃ですか？</h4>
        <p class="text-stone-600">例年1月中旬頃から早咲きの品種が咲き始め、2月上旬から下旬にかけて園内全体が見頃のピークを迎えます。1月中旬から開催される「梅まつり」では、甘酒の振る舞いや地場産品の出店も楽しめます。</p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q3. 日帰り観光でも温泉や街歩きを楽しめますか？</h4>
        <p class="text-stone-600">中心街の外湯「筥湯（はこゆ）」で手軽に名湯を満喫できるほか、川沿いには無料の足湯「独鈷の湯公園」「河原湯」が整備されています。温泉街は徒歩2時間程度で主要名所を一周できるコンパクトな造りです。</p>
      </div>
    </div>
  </section>

</div>`;

  return {
    id: data.id,
    slug: data.slug,
    title: data.title,
    description: '静岡県・中伊豆の修善寺温泉11月・12月・1月冬特集！伊豆の小京都・竹林の小径と桂川五大恋橋、早咲き修善寺梅林と冠雪富士の絶景、弘法大師ゆかりの名湯と冬の極上ズガニうどん・伊豆牛会席名宿ガイド。',
    prefecture: '静岡県',
    area: '中伊豆・修善寺',
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: ['静岡県', '修善寺温泉', '伊豆', '竹林の小径', '修善寺梅林', 'ズガニうどん', '文化財の宿', '冬旅行'],
    keywords: [
      '修善寺温泉 おすすめ 旅館 冬 小京都',
      '修善寺 竹林の小径 ライトアップ 冬 散策',
      '修善寺梅林 早咲き梅 開花時期 見頃 富士山',
      '修善寺 温泉 新井旅館 〇久 宙 口コミ',
      'ズガニうどん 修善寺 伊豆牛 グルメ',
      '修善寺温泉 アクセス 特急踊り子 冬 気温'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// 記事4: 鳥取県・三朝温泉＆冬の松葉ガニ（11〜1月冬の極上旅）
// ========================================================
function buildMisasaPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('大橋') || x.hotelName.includes('清流荘')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 3);

  const spotMisasa = w.find(x => x.spotName === '三朝温泉') || w[0];
  const spotMitoku = w.find(x => x.spotName === '三徳山') || w[1];
  const spotSakyu = w.find(x => x.spotName === '鳥取砂丘') || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-red-50 via-rose-50 to-orange-100/60 rounded-3xl border border-red-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-red-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Executive Summary</span>
      <span class="text-xs text-red-950 font-bold">11月〜1月の三朝温泉・世界屈指ラドン泉と活松葉ガニ完全総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【総括】三朝温泉の冬旅：「三たび朝を迎えると元気になる」奇跡のラジウム泉。解禁直後の活松葉ガニと三徳山白銀世界</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      鳥取県東伯郡三朝町に位置する三朝温泉は、世界屈指の高濃度ラドン（ラジウムが崩壊して生じる放射性希ガス）含有量を誇る名湯。開湯から850年余り、「三朝（みささ）の湯に浸かり、三たび朝を迎えると病が消え失せる」という伝承がそのまま町名の由来となっています。微量の放射線が人体の細胞を活性化し免疫力を高める「ホルミシス効果」が科学的にも注目され、浸かる入浴だけでなく、吸い込む「熱気浴」、飲む「飲泉」の三位一体で全身を整える治癒文化が息づいています。毎年11月6日、日本海の冬の王様「松葉ガニ（ズワイガニの雄）」漁が解禁されると、鳥取港や境港から直送された最高級タグ付き松葉ガニが温泉街の旅館に勢揃い。炭火焼きガニの香ばしい薫り、透き通るカニ刺しの甘み、濃厚な甲羅味噌、滋味あふれるカニすき鍋が冬の食卓を豪華絢爛に彩ります。冬期は三朝川沿いの木造旅館街に雪が舞い、川の中の無料露天「河原風呂」から湯煙が立ち上る、山陰屈指の風情あふれる冬旅が満喫できます。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-red-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">泉質・特徴</span>
        <strong class="text-red-900 text-sm">含放射能-ナトリウム・塩化物泉（ラドン泉世界屈指）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-red-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">松葉ガニ漁期</span>
        <strong class="text-stone-900 text-sm">11月6日〜3月下旬（鳥取県ブランド「五輝星」）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-red-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">雪景色ピーク</span>
        <strong class="text-sky-700 text-sm">12月下旬〜2月中旬（日本海側の風情ある積雪）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-red-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">必食グルメ</span>
        <strong class="text-rose-800 text-sm">活松葉ガニ・鳥取和牛オレイン55・モサエビ</strong>
      </div>
    </div>
  </section>

  <!-- 1. ラドン泉とホルミシス効果の科学 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2.5">
      ♨️ 「浸かる・吸う・飲む」で身体を再生！世界屈指のラドン含有量と三朝の湯治力
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      三朝温泉のラドン泉は、地下の花崗岩層から湧き出る放射性ラジウムが崩壊して発生するラドンガスを高濃度に含んでいます。この微弱な放射線が皮膚や呼吸器から吸収されると、体内の抗酸化酵素（SOD）の働きが活性化され、血流改善や疲労回復、アンチエイジングを促す「放射線ホルミシス効果」が発揮されます。岡山大学医学部付属病院の三朝医療センターが長年研究を続けていることでも知られ、国内外から多くの湯治客が訪れます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      三朝での正しい湯治は、湯船に浸かるだけにとどまりません。浴室内に充満する湯煙に含まれるラドンガスを深呼吸して肺から取り込む「吸入」、温泉街各所に設置された飲泉場で温かい源泉を口に含む「飲泉」、そしてミストサウナ形式の「ラドン熱気浴」と、あらゆる角度から自然の恵みを吸収します。湯上がり後は体が芯からポカポカと温まり、冬の寒風にさらされても長時間湯冷めしない抜群の保温効果を誇ります。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る山陰・三朝の冬名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 三朝温泉・河原風呂 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotMisasa.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Misasa_onsen_kawaranoyu_202106.jpg/800px-Misasa_onsen_kawaranoyu_202106.jpg'}" alt="${spotMisasa.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-red-100 text-red-800 font-bold rounded">日本百景・開湯850年</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotMisasa.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotMisasa.extract || '鳥取県三朝町にある温泉。三朝川沿いに広がる日本有数の湯治街で、三朝橋のたもとにある開放的な混浴露天風呂「河原風呂」が名物。'}
            </p>
          </div>
          <p class="text-[11px] text-red-950 bg-red-50 p-2.5 rounded-lg font-medium border border-red-100">
            💡 冬は三朝川の雪景色を眺めながら足湯や河原風呂を楽しめ、レトロな木造温泉本通りの散策が風情満点です。
          </p>
        </div>
      </div>

      <!-- Spot 2: 三徳山三佛寺 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotMitoku.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Ja-tottori-sanbutsuji-nageiredou.jpg/800px-Ja-tottori-sanbutsuji-nageiredou.jpg'}" alt="${spotMitoku.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded">国宝投入堂</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotMitoku.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotMitoku.extract || '三朝町にある霊山。修験道の聖地であり、断崖絶壁の岩窟に建てられた国宝「投入堂（なげいれどう）」を抱える三徳山三佛寺が存在する。'}
            </p>
          </div>
          <p class="text-[11px] text-amber-950 bg-amber-50 p-2.5 rounded-lg font-medium border border-amber-100">
            💡 冬期は投入堂への登山道が積雪閉鎖されますが、麓の投入堂遥拝所から白銀の断崖に浮かぶ奇跡の堂宇を望めます。
          </p>
        </div>
      </div>

      <!-- Spot 3: 鳥取砂丘 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotSakyu.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tottori-Sakyu_Tottori_Japan.JPG/800px-Tottori-Sakyu_Tottori_Japan.JPG'}" alt="${spotSakyu.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded">冬の雪砂丘</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotSakyu.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotSakyu.extract || '鳥取市にある日本を代表する海岸砂丘。日本海から吹きつける強風によって美しい風紋が描かれ、冬は一面の雪化粧をまとう。'}
            </p>
          </div>
          <p class="text-[11px] text-blue-950 bg-blue-50 p-2.5 rounded-lg font-medium border border-blue-100">
            💡 積雪の日は黄金の砂と純白の雪、日本海の深い青が織りなす息を呑む絶景が広がり、砂の美術館も人気です。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 冬の日本海活松葉ガニフルコース -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2.5">
      🦀 11月6日解禁！鳥取ブランド「活松葉ガニ」を味わい尽くす冬の贅沢
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      三朝温泉の冬の主役は、何と言っても「活松葉ガニ」です。山陰沖の冷たい日本海で育ったズワイガニの雄は、身の締まり、上品な甘み、そして甲羅に詰まった濃厚なカニミソが格別。特に鳥取県で水揚げされる松葉ガニは品質管理が徹底されており、大きさ・重さ・身入りの基準を満たした最高峰には「五輝星（いつきぼし）」のブランドタグが付けられます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      温泉旅館で供されるカニフルコースは圧巻そのもの。氷水に潜らせて花を咲かせた「カニ刺し」のとろける甘味、炭火で殻ごと香ばしく焼き上げる「焼きガニ」、甲羅ごと地酒を注いで煮詰める「甲羅酒」、そして昆布出汁に野菜とカニの旨味が溶け出した「カニすき鍋」から〆の「カニ雑炊」に至るまで、一杯のカニを余すところなく味わい尽くせます。さらに、幻の海老と呼ばれる「モサエビ（クロザコエビ）」や、肉質日本一に輝いた「鳥取和牛オレイン55」との贅沢な競演も冬の三朝ならではです。
    </p>
  </section>

  <!-- 4. 楽天トラベルAPI連動 厳選宿泊施設 -->
  <section class="space-y-6 my-8">
    <div class="border-l-4 border-red-700 pl-4">
      <span class="text-xs font-bold text-red-800 tracking-wider uppercase">Rakuten Travel Live Data</span>
      <h2 class="text-xl md:text-2xl font-bold text-stone-900">
        🏨 楽天トラベル厳選！三朝温泉のラドン泉とカニ会席に酔いしれる名宿セレクション
      </h2>
      <p class="text-xs text-stone-600 mt-1">楽天トラベルAPIから最新の空室・プラン情報を自動取得。山陰の冬旅を最高のおもてなしで彩る老舗旅館をご紹介します。</p>
    </div>

    <!-- メイン宿カード -->
    <div class="bg-gradient-to-br from-white to-red-50/40 rounded-3xl border-2 border-red-300 p-6 md:p-8 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
        <span class="px-3 py-1 bg-red-800 text-white text-xs font-bold rounded-full">国登録有形文化財の名建築</span>
        <span class="text-xs text-stone-600 font-semibold">${mainHotel.address1}${mainHotel.address2}</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div class="space-y-3">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full h-64 object-cover rounded-2xl shadow-sm" />
          ${mainHotel.roomImageUrl ? `<img src="${mainHotel.roomImageUrl}" alt="${mainHotel.hotelName} 客室・巌窟の湯" class="w-full h-36 object-cover rounded-xl border border-red-100" />` : ''}
        </div>
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-stone-900">${mainHotel.hotelName}</h3>
          <p class="text-xs md:text-sm text-stone-600 leading-relaxed">
            ${mainHotel.hotelSpecial || '本館全館が国の登録有形文化財に指定された名匠の宿。自家源泉の足元からポコポコと自噴する名物「巌窟の湯」は日本屈指のラジウム湯浴み体験。冬は活松葉ガニを使用した至高のカニ会席が絶品です。'}
          </p>
          <div class="p-4 bg-white rounded-2xl border border-red-100 space-y-2 text-xs">
            <div class="flex justify-between items-center">
              <span class="text-stone-500 font-medium">宿泊目安（最安参考）</span>
              <span class="text-base font-black text-rose-600">お一人様 ¥${mainHotel.hotelMinCharge.toLocaleString()}〜</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-stone-500 font-medium">宿泊者クチコミ評価</span>
              <span class="text-amber-500 font-bold">★ ${mainHotel.reviewAverage} / 5.0 （${mainHotel.reviewCount}件の評価）</span>
            </div>
            <div class="pt-1 text-stone-600">
              <strong class="text-stone-800">アクセス：</strong>${mainHotel.access}
            </div>
          </div>
          <div class="pt-2">
            <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="block w-full py-3.5 px-6 bg-gradient-to-r from-red-700 to-rose-800 hover:from-red-800 hover:to-rose-900 text-white font-bold text-center rounded-2xl shadow-md transition duration-200">
              楽天トラベルでプラン・空室をチェック ❯
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- サブ宿カードリスト -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${otherHotels.map(hotel => `
        <div class="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between">
          <div class="space-y-3">
            <img src="${hotel.hotelImageUrl}" alt="${hotel.hotelName}" class="w-full h-40 object-cover rounded-xl" />
            <h4 class="font-bold text-stone-900 text-sm leading-snug">${hotel.hotelName}</h4>
            <p class="text-xs text-stone-600 line-clamp-3">${hotel.hotelSpecial}</p>
            <div class="text-[11px] text-stone-500 space-y-1 pt-1">
              <div>評価: <strong class="text-amber-600">★ ${hotel.reviewAverage}</strong> (${hotel.reviewCount}件)</div>
              <div>料金目安: <strong class="text-rose-600">¥${hotel.hotelMinCharge.toLocaleString()}〜</strong></div>
            </div>
          </div>
          <div class="pt-4 mt-2 border-t border-stone-100">
            <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="block w-full py-2 px-3 bg-stone-100 hover:bg-red-700 hover:text-white text-stone-800 font-semibold text-xs text-center rounded-xl transition duration-150">
              詳細・空室確認 ❯
            </a>
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- 5. 倉吉白壁土蔵群との組み合わせ街歩き -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2.5">
      🏮 レトロな温泉本通りと白壁土蔵群！冬の風情を味わう散策ルート
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      三朝温泉街の中心を通る「温泉本通り」は、昔ながらの射的場や駄菓子屋、木造の理髪店が軒を連ね、昭和レトロな雰囲気がそのまま残されています。雪降る夕暮れ時に下駄を鳴らして散策し、足湯「薬師の湯」で温まりながら飲む源泉水は格別の情緒です。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      車で約15分のJR倉吉駅周辺には、江戸・明治期の白壁土蔵や赤瓦の商家が立ち並ぶ重要伝統的建造物群保存地区「倉吉白壁土蔵群（打吹玉川）」が広がります。玉川沿いの石橋と白壁に降り積もる雪景色は、まるで時代劇のワンシーン。古民家カフェで名物の「牛骨ラーメン」や石臼挽き珈琲を味わいながら、ゆったりとした時間を過ごせます。
    </p>
  </section>

  <!-- 6. 冬の山陰アクセスと気候・雪道対策 -->
  <section class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
    <h3 class="text-lg font-bold text-stone-900 flex items-center gap-2">
      <span>🚗</span> 冬の山陰ドライブ：中国道・鳥取道ルートとJR特急スーパーはくと
    </h3>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      京阪神方面からは、京都・大阪・三ノ宮から倉吉駅まで直通するJR特急「スーパーはくと」が便利で、雪道の運転不安なく約3時間〜3時間半でアクセスできます。倉吉駅からは路線バスで約20分、または各旅館の無料送迎バスが利用可能です。
    </p>
    <div class="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 space-y-1">
      <strong>⚠️ 車をご利用の場合の注意点：</strong>中国自動車道（院庄IC経由）や鳥取自動車道（無料区間）を利用する場合、12月中旬〜2月は山越え区間で降雪・チェーン規制が頻発します。スタッドレスタイヤの装着は必須です。出発前に日本道路交通情報センター（JARTIC）のハイウェイ情報を必ずご確認ください。
    </div>
  </section>

  <!-- 7. 内部リンク網羅ブロック -->
  <section class="p-6 bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl border border-red-200">
    <h3 class="text-base font-bold text-stone-900 mb-3">🔗 あわせて読みたい！山陰・カニ温泉特集</h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
      <li><a href="/posts/kinosaki-onsen-matsuba-crab-snow-sotoyu-meguri-guide/" class="text-red-800 hover:text-red-950 font-bold underline">・城崎温泉の冬本番！活松葉ガニ会席と雪の柳並木七大外湯めぐり</a></li>
      <li><a href="/posts/december-tottori-misasa-10selection/" class="text-red-800 hover:text-red-950 font-bold underline">・12月の鳥取・三朝温泉と松葉ガニおすすめ宿泊プラン10選</a></li>
      <li><a href="/posts/autumn-tottori-kaike-10selection/" class="text-red-800 hover:text-red-950 font-bold underline">・皆生温泉と境港のカニ！オーシャンビュー温泉旅館まとめ</a></li>
      <li><a href="/posts/matsue-shinjiko-onsen-sunset-seven-delicacies-hotels-guide/" class="text-red-800 hover:text-red-950 font-bold underline">・松江しんじ湖温泉の夕日と宍道湖七珍・寒シジミ冬の美味宿</a></li>
      <li><a href="/posts/tottori-hotels-selection-guide/" class="text-red-800 hover:text-red-950 font-bold underline">・鳥取県の人気ホテル・温泉旅館おすすめセレクション</a></li>
      <li><a href="/posts/shimonoseki-torafugu-nagato-yumoto-onsen-motonosumi-winter-guide/" class="text-red-800 hover:text-red-950 font-bold underline">・下関とらふぐと長門湯本温泉！恩湯と元乃隅神社冬旅ガイド</a></li>
    </ul>
  </section>

  <!-- 8. よくある質問 FAQ（構造化マークアップ対応） -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2.5">
      ❓ 三朝温泉の冬旅行に関するよくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q1. 松葉ガニを一番美味しく食べられる時期はいつですか？</h4>
        <p class="text-stone-600">松葉ガニ漁は毎年11月6日に解禁され、翌年3月20日前後まで続きます。特に初競り直後の11月中旬から、水温が下がり身がギュッと引き締まる12月〜1月が最も脂と旨味が乗り、美味しいハイシーズンです。</p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q2. ラドン泉の放射能は体に危険ではありませんか？</h4>
        <p class="text-stone-600">三朝温泉のラドンは自然界に存在する極めて微量なもので、レントゲン撮影の数万分の一以下です。体内に入ったラドンガスは数時間で体外へ呼気として排出され、身体に蓄積することはありません。細胞を活性化させるホルミシス効果として医学的にも安全性が確認されています。</p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q3. 三徳山投入堂は冬でも登拝できますか？</h4>
        <p class="text-stone-600">三徳山投入堂への登山道（参拝登山）は、積雪や凍結による滑落防止のため12月上旬から翌年3月下旬頃まで冬期入山禁止となります。ただし、山麓の県道沿いにある「投入堂遥拝所」からは無料望遠鏡で冬景色の投入堂を鑑賞できます。</p>
      </div>
    </div>
  </section>

</div>`;

  return {
    id: data.id,
    slug: data.slug,
    title: data.title,
    description: '鳥取県・三朝温泉の11月・12月・1月冬特集！世界有数の高濃度ラドン温泉とホルミシス効果、11月6日解禁の鳥取活松葉ガニフルコース、三朝橋河原風呂と国宝三徳山三佛寺投入堂、倉吉白壁土蔵群を巡る極上冬旅ガイド。',
    prefecture: '鳥取県',
    area: '三朝・倉吉',
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: ['鳥取県', '三朝温泉', '松葉ガニ', 'ラドン泉', 'ホルミシス効果', '三徳山', '倉吉白壁土蔵群', '冬旅行'],
    keywords: [
      '三朝温泉 おすすめ 旅館 冬 松葉ガニ',
      '三朝温泉 旅館大橋 清流荘 有楽 口コミ',
      '鳥取 松葉ガニ 活ガニ フルコース カニ刺し 宿',
      '三朝温泉 ラドン温泉 ホルミシス 効能 飲泉',
      '三朝橋 河原風呂 露天風呂 冬 風情',
      '倉吉 白壁土蔵群 三朝温泉 アクセス スーパーはくと'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// 記事5: 山形県・天童温泉＆雪の山寺立石寺（11〜1月冬の極上旅）
// ========================================================
function buildTendoPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('天童ホテル') || x.hotelName.includes('あづま荘') || x.hotelName.includes('松の湯')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 3);

  const spotTendo = w.find(x => x.spotName === '天童温泉') || w[0];
  const spotYamadera = w.find(x => x.spotName === '立石寺') || w[1];
  const spotMaizuru = w.find(x => x.spotName === '舞鶴山') || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100/60 rounded-3xl border border-amber-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-amber-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Executive Summary</span>
      <span class="text-xs text-amber-950 font-bold">11月〜1月の天童温泉・雪の山寺立石寺と極上山形牛完全総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【総括】天童温泉の冬旅：松尾芭蕉ゆかりの雪の山寺（立石寺）水墨画パノラマ。将棋駒の歴史と弱アルカリ美肌湯・寒中さくらんぼ</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      山形盆地のほぼ中央に位置する天童市は、将棋駒の生産量全国シェア9割以上を誇る伝統工芸の街。田園地帯に突如湧出した天童温泉は、開湯から110余年の歴史を持ち、山形新幹線の停車駅（天童駅）から車でわずか数分という抜群の利便性を誇る名湯です。泉質はナトリウム・カルシウム-硫酸塩・塩化物泉。肌の角質を潤す「美肌の湯」でありながら、塩分が皮膚を覆って熱を逃さない「温まりの湯」として、冷え込みの厳しい東北の冬に絶大な人気を誇ります。冬の天童滞在のハイライトは、車で約15分の名刹「宝珠山立石寺（山寺）」。1015段の雪の石段を踏みしめて辿り着く五大堂からは、雪化粧をまとった断崖と山里が一望でき、まるで水墨画の世界に入り込んだかのような神聖な絶景が広がります。夕暮れ後は温泉街の風情ある旅館で、霜降りの極上「山形牛すき焼き」や郷土の芋煮鍋、そして冬にだけ温室で実を結ぶ幻の「寒中さくらんぼ」を堪能。山形新幹線直通でアクセスできる、冬の東北の極上温泉旅をお届けします。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">泉質・適応症</span>
        <strong class="text-amber-900 text-sm">Na・Ca-硫酸塩・塩化物泉（弱アルカリ性・美肌保温）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">伝統文化・見どころ</span>
        <strong class="text-stone-900 text-sm">将棋駒彫り体験・舞鶴山人間将棋の舞台</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">雪景色ピーク</span>
        <strong class="text-sky-800 text-sm">12月中旬〜2月上旬（山寺の雪化粧絶景）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">必食冬グルメ</span>
        <strong class="text-orange-900 text-sm">山形牛すき焼き・山形芋煮・寒中さくらんぼ</strong>
      </div>
    </div>
  </section>

  <!-- 1. 雪の山寺立石寺の水墨画絶景 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      ⛰️ 芭蕉が愛した静寂の霊場！冬の「山寺（立石寺）」1015段の雪の石段と五大堂
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      貞観2年（860年）、慈覚大師円仁によって開山された名刹・立石寺（通称：山寺）。元禄2年には俳聖・松尾芭蕉が訪れ、「閑さや岩にしみ入る蝉の声」の名句を残したことで広く知られています。夏の青葉や秋の紅葉も素晴らしい山寺ですが、真の美しさは12月から1月にかけての冬にあります。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      根本中堂から奥の院まで続く1015段の石段は、一段登るごとに煩悩が一つ消え去ると言われる修行の道。雪を踏みしめながら杉木立の参道を登り、断崖にせり出す舞台造りの「五大堂」に到達した瞬間、目の前には息をのむ大パノラマが開けます。足元に広がる山寺の集落、凍てつく渓谷、そして遠く雪雲の切れ間から光が差す奥羽の峰々。色彩を削ぎ落としたモノトーンの水墨画の世界は、訪れる者の心を洗い流す圧倒的な静寂に満ちています。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      冬の山寺登詣では、滑り止めの効いたスノーブーツや長靴（登山口の売店等で無料レンタルや長靴貸出あり）の着用が必須。ゆっくりと歩みを進めることで、冬ならではの厳かな巡礼を体験できます。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る山形・天童の冬名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 天童温泉街 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotTendo.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tend%C5%8D.jpg/800px-Tend%C5%8D.jpg'}" alt="${spotTendo.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded">近代開湯の名湯</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotTendo.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotTendo.extract || '山形県天童市にある温泉。明治44年の田んぼのボーリング中に湧出した歴史を持ち、将棋駒の街として名高い。'}
            </p>
          </div>
          <p class="text-[11px] text-amber-950 bg-amber-50 p-2.5 rounded-lg font-medium border border-amber-100">
            💡 街中には将棋の駒の形をした足湯やポストが点在し、温泉街全体で将棋文化の温もりに浸れます。
          </p>
        </div>
      </div>

      <!-- Spot 2: 立石寺（山寺） -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotYamadera.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Risshaku-ji_konponchudo.jpg/800px-Risshaku-ji_konponchudo.jpg'}" alt="${spotYamadera.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-sky-100 text-sky-800 font-bold rounded">不滅の法灯860年</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotYamadera.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotYamadera.extract || '山形市にある天台宗の古刹。通称「山寺」。重要文化財の根本中堂をはじめ、断崖に堂宇が建ち並ぶ奇勝の霊山。'}
            </p>
          </div>
          <p class="text-[11px] text-sky-950 bg-sky-50 p-2.5 rounded-lg font-medium border border-sky-100">
            💡 雪に覆われた根本中堂や開山堂、五大堂からの絶景は、冬の東北旅行で絶対に一度は見るべき絶景です。
          </p>
        </div>
      </div>

      <!-- Spot 3: 舞鶴山 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotMaizuru.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Maiduruyama_Tendou%2C_Yamagata.JPG/800px-Maiduruyama_Tendou%2C_Yamagata.JPG'}" alt="${spotMaizuru.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-rose-100 text-rose-800 font-bold rounded">天童市街を一望</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotMaizuru.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotMaizuru.extract || '天童市の中心にある標高242mの丘陵。春の「人間将棋」の舞台として知られ、山頂からは山形盆地と月山を望む。'}
            </p>
          </div>
          <p class="text-[11px] text-rose-950 bg-rose-50 p-2.5 rounded-lg font-medium border border-rose-100">
            💡 冬は展望広場から冠雪した月山や朝日連峰の山並みが美しく見渡せるビュースポットです。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 将棋文化と美肌の硫酸塩泉 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      ☗ 江戸時代から続く将棋駒の街！温泉街の足湯めぐりと駒彫り体験
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      天童と将棋の関わりは、江戸時代後期に天童織田藩の下級武士が生計を立てるために駒づくりを始めたことに由来します。現在でも職人の手彫りによる高級駒から普及駒まで全国の将棋駒の大部分がここで作られており、温泉街の歩道には詰将棋の盤面が埋め込まれ、橋の欄干やマンホールに至るまで将棋一色です。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      温泉街には「駒の湯」「天の湯」「道の湯」といった無料の足湯が点在。山寺登山で心地よく疲れた足を浸しながら、通りを眺めるひとときは贅沢そのもの。将棋村天童タワーや観光センターでは、自分だけの文字を駒に彫る「書き駒・彫り駒体験」も年中開催されており、世界に一つだけのオリジナル旅の記念品を作ることができます。
    </p>
  </section>

  <!-- 4. 楽天トラベルAPI連動 厳選宿泊施設 -->
  <section class="space-y-6 my-8">
    <div class="border-l-4 border-amber-700 pl-4">
      <span class="text-xs font-bold text-amber-800 tracking-wider uppercase">Rakuten Travel Live Data</span>
      <h2 class="text-xl md:text-2xl font-bold text-stone-900">
        🏨 楽天トラベル厳選！天童温泉の極上山形牛と名湯を味わう宿セレクション
      </h2>
      <p class="text-xs text-stone-600 mt-1">楽天トラベルAPIから最新の空室・料金情報を自動取得。将棋駒の街の温かいおもてなしと露天風呂が自慢の旅館です。</p>
    </div>

    <!-- メイン宿カード -->
    <div class="bg-gradient-to-br from-white to-amber-50/40 rounded-3xl border-2 border-amber-300 p-6 md:p-8 shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
        <span class="px-3 py-1 bg-amber-800 text-white text-xs font-bold rounded-full">天童温泉のフラッグシップ名宿</span>
        <span class="text-xs text-stone-600 font-semibold">${mainHotel.address1}${mainHotel.address2}</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div class="space-y-3">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full h-64 object-cover rounded-2xl shadow-sm" />
          ${mainHotel.roomImageUrl ? `<img src="${mainHotel.roomImageUrl}" alt="${mainHotel.hotelName} 客室・大浴場" class="w-full h-36 object-cover rounded-xl border border-amber-100" />` : ''}
        </div>
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-stone-900">${mainHotel.hotelName}</h3>
          <p class="text-xs md:text-sm text-stone-600 leading-relaxed">
            ${mainHotel.hotelSpecial || '天童温泉の中心に位置し、楽天トラベルアワード常連の大人気宿。広々とした大浴場と滝を配した庭園露天風呂で自家源泉を満喫。冬の山形牛会席と季節の郷土料理バイキング、心尽くしのおもてなしが評判です。'}
          </p>
          <div class="p-4 bg-white rounded-2xl border border-amber-100 space-y-2 text-xs">
            <div class="flex justify-between items-center">
              <span class="text-stone-500 font-medium">宿泊目安（最安参考）</span>
              <span class="text-base font-black text-rose-600">お一人様 ¥${mainHotel.hotelMinCharge.toLocaleString()}〜</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-stone-500 font-medium">宿泊者クチコミ評価</span>
              <span class="text-amber-500 font-bold">★ ${mainHotel.reviewAverage} / 5.0 （${mainHotel.reviewCount}件の評価）</span>
            </div>
            <div class="pt-1 text-stone-600">
              <strong class="text-stone-800">アクセス：</strong>${mainHotel.access}
            </div>
          </div>
          <div class="pt-2">
            <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="block w-full py-3.5 px-6 bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 text-white font-bold text-center rounded-2xl shadow-md transition duration-200">
              楽天トラベルでプラン・空室をチェック ❯
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- サブ宿カードリスト -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${otherHotels.map(hotel => `
        <div class="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between">
          <div class="space-y-3">
            <img src="${hotel.hotelImageUrl}" alt="${hotel.hotelName}" class="w-full h-40 object-cover rounded-xl" />
            <h4 class="font-bold text-stone-900 text-sm leading-snug">${hotel.hotelName}</h4>
            <p class="text-xs text-stone-600 line-clamp-3">${hotel.hotelSpecial}</p>
            <div class="text-[11px] text-stone-500 space-y-1 pt-1">
              <div>評価: <strong class="text-amber-600">★ ${hotel.reviewAverage}</strong> (${hotel.reviewCount}件)</div>
              <div>料金目安: <strong class="text-rose-600">¥${hotel.hotelMinCharge.toLocaleString()}〜</strong></div>
            </div>
          </div>
          <div class="pt-4 mt-2 border-t border-stone-100">
            <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="block w-full py-2 px-3 bg-stone-100 hover:bg-amber-700 hover:text-white text-stone-800 font-semibold text-xs text-center rounded-xl transition duration-150">
              詳細・空室確認 ❯
            </a>
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- 5. 山形の冬の美味：極上山形牛と寒中さくらんぼ -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      🥩 とろける霜降りの芸術！山形牛すき焼きと冬限定「寒中さくらんぼ」
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      寒暖差の激しい山形盆地で長期間じっくりと肥育された「山形牛」は、きめ細やかな霜降りと融点の低い上質な脂が特徴。冬の温泉旅館でいただくすき焼きやしゃぶしゃぶは、熱々の鍋に肉をくぐらせた瞬間、甘い脂の香りが立ち上り、口に運べば噛む必要がないほど柔らかくとろけていきます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      そして天童の冬の驚くべき味覚が「寒中さくらんぼ（冬のさくらんぼ）」です。本来は6月の初夏が旬の佐藤錦を、専用の温室ハウスで高度な温度管理によって12月下旬から1月の真冬に実らせる究極の贅沢品。お正月の縁起物や贈答用として栽培され、鮮やかなルビー色と甘酸っぱい果汁は、雪国の冬の奇跡と称されます。さらに冬の日本海の寒鱈を使った「寒鱈汁（どんがら汁）」や、里芋と牛肉を煮込んだ本場の「芋煮」も冬の山形旅に欠かせない味覚です。
    </p>
  </section>

  <!-- 6. 山形新幹線直通アクセスと冬の服装 -->
  <section class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
    <h3 class="text-lg font-bold text-stone-900 flex items-center gap-2">
      <span>🚄</span> 山形新幹線「つばさ」直通アクセスと冬の雪対策ガイド
    </h3>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      東京駅から山形新幹線「つばさ」に乗車すれば、乗り換えなし約2時間40分〜3時間で天童駅へ直通。天童駅から温泉街までは車で約3分〜5分、多くの主要旅館が駅からの無料送迎サービスを提供しています。仙台駅からも仙山線で山寺駅・天童方面へ約1時間強と、東北各地からのアクセスは極めて良好です。
    </p>
    <div class="p-3.5 bg-yellow-50 rounded-xl border border-yellow-200 text-xs text-yellow-950 space-y-1">
      <strong>👟 山寺登山時の足元対策：</strong>12月〜1月の山寺参道は石段に雪が圧雪され、氷状に滑りやすくなります。革靴やヒールでの登山は厳禁です。靴底に深い溝がある滑り止め付きスノーブーツ、または靴用スパイクバンドの装着を強く推奨します。手袋と防寒帽子も必携です。
    </div>
  </section>

  <!-- 7. 内部リンク網羅ブロック -->
  <section class="p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
    <h3 class="text-base font-bold text-stone-900 mb-3">🔗 あわせて読みたい！東北＆山形の冬温泉特集</h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
      <li><a href="/posts/zao-onsen-snow-monster-juhyo-lightup-winter-guide/" class="text-amber-800 hover:text-amber-950 font-bold underline">・蔵王温泉の巨大樹氷スノーモンスターと強酸性硫黄泉冬ガイド</a></li>
      <li><a href="/posts/ginzan-onsen-taisho-roman-snow-view-guide/" class="text-amber-800 hover:text-amber-950 font-bold underline">・銀山温泉の大正ロマン雪景色とガス灯！能登屋旅館と尾花沢牛冬旅</a></li>
      <li><a href="/posts/hanamaki-onsen-kyo-tachiyu-snow-roten-ihatov-guide/" class="text-amber-800 hover:text-amber-950 font-bold underline">・花巻温泉郷の白銀秘湯・名物立湯雪見風呂と宮沢賢治イーハトーブ名宿</a></li>
      <li><a href="/posts/november-yamagata-yamadera-10selection/" class="text-amber-800 hover:text-amber-950 font-bold underline">・11月の山形・山寺立石寺と天童温泉おすすめ名宿10選</a></li>
      <li><a href="/posts/yamagata-famous-things-gourmet-spots-guide/" class="text-amber-800 hover:text-amber-950 font-bold underline">・山形県の名物グルメとおすすめ温泉地完全観光ガイド</a></li>
      <li><a href="/posts/aizu-higashiyama-onsen-ouchijuku-snow-tsurugajo-winter-guide/" class="text-amber-800 hover:text-amber-950 font-bold underline">・会津東山温泉の大内宿雪まつりと鶴ヶ城！白虎隊の歴史と名宿ガイド</a></li>
    </ul>
  </section>

  <!-- 8. よくある質問 FAQ（構造化マークアップ対応） -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      ❓ 天童温泉・冬の山寺旅行に関するよくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q1. 冬の山寺（立石寺）は何時頃に参拝するのがおすすめですか？</h4>
        <p class="text-stone-600">冬期は日没が早く16時前には薄暗くなるため、午前9時〜13時頃の明るい時間帯の登詣がおすすめです。晴れた午前中は五大堂からの順光で奥羽山脈の雪山が鮮やかに見渡せます。</p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q2. 天童温泉から山寺への交通手段は何が便利ですか？</h4>
        <p class="text-stone-600">車・タクシーで約15分です。電車の場合は天童駅から羽前千歳駅を経由してJR仙山線の山寺駅まで約30分で到着します。天童駅前レンタカーを利用して山形市内や蔵王方面へ周遊するのも便利です。</p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200">
        <h4 class="font-bold text-stone-900 mb-1">Q3. 天童温泉の泉質の特徴と入浴効果は？</h4>
        <p class="text-stone-600">硫酸塩泉（傷の湯・美肌の湯）と塩化物泉（温まりの湯）の両方の長所を併せ持っています。皮脂のバランスを整え肌をしっとり滑らかに保つとともに、塩分が汗の蒸発を防ぐため湯上がり後も長時間ポカポカが持続します。</p>
      </div>
    </div>
  </section>

</div>`;

  return {
    id: data.id,
    slug: data.slug,
    title: data.title,
    description: '山形県・天童温泉の11月・12月・1月冬特集！松尾芭蕉ゆかりの雪の山寺（立石寺）1015段の雪景色と五大堂水墨画パノラマ、将棋駒彫り体験、弱アルカリ性美肌の湯と極上山形牛すき焼き・寒中さくらんぼ名宿ガイド。',
    prefecture: '山形県',
    area: '天童・山形',
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: ['山形県', '天童温泉', '山寺', '立石寺', '将棋駒', '山形牛', '雪景色', '冬旅行'],
    keywords: [
      '天童温泉 おすすめ 旅館 冬 山寺 立石寺',
      '山寺 冬 参拝 雪の石段 五大堂 絶景',
      '天童温泉 天童ホテル あづま荘 松の湯 口コミ',
      '天童 将棋 駒彫り 体験 足湯 街歩き',
      '山形牛 すき焼き 天童 寒中さくらんぼ 芋煮',
      '天童温泉 アクセス 山形新幹線 冬 気温'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// メイン実行部
// ========================================================
function main() {
  console.log('--- Generating 5 Independent Winter Destination Guides (Round 142) ---');

  const posts = [
    buildSounkyoPost(collectedData['theme_1_sounkyo']),
    buildShirahonePost(collectedData['theme_2_shirahone']),
    buildShuzenjiPost(collectedData['theme_3_shuzenji']),
    buildMisasaPost(collectedData['theme_4_misasa']),
    buildTendoPost(collectedData['theme_5_tendo'])
  ];

  const postsDir = path.join(__dirname, '..', 'src', 'data', 'posts');

  for (const post of posts) {
    const textLen = countTextLength(post.review);
    console.log(`\nPost "${post.slug}":`);
    console.log(`  Title: ${post.title}`);
    console.log(`  Prefecture: ${post.prefecture}`);
    console.log(`  Hotel: ${post.hotel_name} (Price: ${post.price}, Rating: ${post.rating})`);
    console.log(`  Pure Text Length (excl. HTML tags): ${textLen} chars`);

    if (textLen < 3000) {
      console.warn(`  ⚠️ WARNING: Text length is under 3000 chars (${textLen})!`);
    } else {
      console.log(`  ✅ EXCELLENT: Text length is well over 3000 chars (${textLen})!`);
    }

    const filePath = path.join(postsDir, `${post.slug}.json`);
    fs.writeFileSync(filePath, JSON.stringify(post, null, 2), 'utf8');
    console.log(`  Saved to: ${filePath}`);
  }

  console.log('\nAll 5 new winter posts generated successfully!');
}

main();
