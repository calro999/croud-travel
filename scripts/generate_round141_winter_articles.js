const fs = require('fs');
const path = require('path');

const collectedData = require('../scratch/fresh_winter_round141_collected_data.json');

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
// 記事1: 兵庫県・城崎温泉＆活松葉ガニ（11〜1月冬の極上旅）
// ========================================================
function buildKinosakiPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('西村屋')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 3);

  const spotOnsen = w.find(x => x.spotName === '城崎温泉') || w[0];
  const spotGenbudo = w.find(x => x.spotName === '玄武洞') || w[1];
  const spotIzushi = w.find(x => x.spotName === '出石') || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-red-50 via-amber-50 to-orange-100/60 rounded-3xl border border-red-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-red-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Executive Summary</span>
      <span class="text-xs text-red-950 font-bold">11月〜1月の城崎温泉・冬の活松葉ガニと七つの外湯めぐり完全総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【総括】城崎温泉の冬旅：11月6日カニ漁解禁から真冬の白銀世界へ。津居山港直送活松葉ガニと下駄の音響く外湯情緒</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      兵庫県北部・但馬地方の日本海に面する城崎温泉は、開湯1300年を超える関西屈指の歴史ある湯治街。毎年11月6日の「松葉ガニ（ズワイガニ雄）漁解禁」とともに、温泉街は一年で最も華やかで活気に満ちた美食シーズンへと突入します。地元津居山（ついやま）港や柴山（しばやま）港で水揚げされた青色の識別タグ付き「活松葉ガニ」は、繊細な甘みの花咲くカニ刺し、香ばしい炭火焼きガニ、濃厚な甲羅味噌、そして滋味あふれるカニ鍋（カニすき）に至るまで、冬の日本海の至宝を味わい尽くせます。12月中旬から1月にかけては日本海特有の雪が降り積もり、柳並木と大谿川（おおたにがわ）沿いの太鼓橋、木造三階建ての老舗旅館が純白の雪化粧に包まれます。宿泊客に手渡される「デジタル外湯券（ゆめぱ）」を手に、浴衣に丹前を羽織り、カランコロンと下駄を鳴らして巡る「七つの外湯（一の湯、御所の湯、鴻の湯、まんだら湯、柳湯、地蔵湯、さとの湯）」の湯巡りは、城崎でしか体験できない情緒あふれる冬の旅情です。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-red-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">泉質・適応症</span>
        <strong class="text-red-900 text-sm">Na・Ca-塩化物泉（保温・保湿抜群）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-red-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">松葉ガニ漁期</span>
        <strong class="text-stone-900 text-sm">11月6日〜3月下旬（津居山港・柴山港）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-red-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">雪景色ピーク</span>
        <strong class="text-sky-700 text-sm">12月下旬〜1月下旬（降雪・積雪注意）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-red-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">必食グルメ</span>
        <strong class="text-red-800 text-sm">タグ付き松葉ガニ・但馬牛・出石皿そば</strong>
      </div>
    </div>
  </section>

  <!-- 1. 七つの外湯めぐりと冬の街歩き極意 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2.5">
      ♨️ 「街全体が一つの大きな温泉宿」！雪舞う城崎で巡る七つの外湯と湯巡り文化
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      城崎温泉には古くから「駅は玄関、道路は廊下、旅館は客室、外湯は大浴場」という共生の思想が根付いています。内湯の規模をあえて控えめにし、宿泊客が街へ繰り出して外湯を巡り、土産物屋や射的場、甘味処を巡ることで温泉街全体が一体となって賑わいを創出してきました。冬の城崎の醍醐味は、雪の舞う寒風の中、浴衣に防寒用の丹前や羽織を重ね着し、木製の下駄を鳴らしながら歩く外湯巡りです。各旅館のフロントで貸し出されるフリーパス「ゆめぱ（デジタル外湯入浴券）」をかざせば、滞在中は何度でも七つの外湯に入浴できます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      七つの外湯にはそれぞれ明確な個性と歴史的由来があります。滝の流れる野天風呂が広がる「御所の湯（美人の湯）」は、後白河法皇の御姉安嘉門院が入湯したと伝えられる名湯。洞窟風呂が名物の「一の湯」は江戸時代の名医・香川修徳が天下第一と絶賛した格式を誇ります。温泉街の最奥に位置する「鴻の湯」はコウノトリが傷を癒したという開湯伝説の湯で、庭園露天風呂の雪景色が格別です。さらに、熱めの湯で身体の芯まで温まる「柳湯」、唐破風の屋根が印象的な「まんだら湯」、六角形の窓が特徴的な「地蔵湯」、城崎温泉駅前でハーブ湯やサウナを備える「さとの湯」と、巡るごとに異なる湯浴み体験が待っています。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      泉質はナトリウム・カルシウム-塩化物泉。湯上がりに肌表面へ塩分の微細な皮膜が形成されるため、雪が吹き付ける氷点下の屋外へ出ても驚くほど湯冷めしません。冷気に頬を撫でられながら、もうもうと立ち上る湯煙の向こうに雪化粧した柳並木を眺める風情は、他のどの温泉地にも代えがたい冬の贅沢です。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る但馬・城崎の冬名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 城崎温泉街 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotOnsen.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Kinosaki_Onsen_at_night.JPG/800px-Kinosaki_Onsen_at_night.JPG'}" alt="${spotOnsen.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-red-100 text-red-800 font-bold rounded">名湯1300年</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotOnsen.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotOnsen.extract || '兵庫県豊岡市城崎町にある名湯。平安時代以前から知られ、志賀直哉の小説『城の崎にて』の舞台としても名高い。大谿川沿いに柳並木と木造旅館が建ち並ぶ情緒豊かな温泉街。'}
            </p>
          </div>
          <p class="text-[11px] text-red-950 bg-red-50 p-2.5 rounded-lg font-medium border border-red-100">
            💡 冬期は雪吊りと柳のコントラストが美しく、夜間は街灯に雪が照らされ幻想的な夜景が広がります。
          </p>
        </div>
      </div>

      <!-- Spot 2: 玄武洞 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotGenbudo.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Genbudo_Toyooka_Hyogo_pref_Japan02s.jpg/800px-Genbudo_Toyooka_Hyogo_pref_Japan02s.jpg'}" alt="${spotGenbudo.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-stone-100 text-stone-800 font-bold rounded">国の天然記念物・山陰海岸ジオパーク</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotGenbudo.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotGenbudo.extract || '約160万年前に噴火したマグマが冷却してできた規則正しい柱状節理の奇岩絶壁。世界で初めて地球磁場の逆転現象が発見された地学史上極めて重要な名勝。'}
            </p>
          </div>
          <p class="text-[11px] text-stone-950 bg-stone-50 p-2.5 rounded-lg font-medium border border-stone-200">
            💡 城崎温泉駅から円山川を挟んで車で約10分。冬は雪をまとった柱状節理の幾何学美が息をのむ迫力です。
          </p>
        </div>
      </div>

      <!-- Spot 3: 出石城下町 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotIzushi.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Shinkorou_Izushi_Hyogo_Japan.JPG/800px-Shinkorou_Izushi_Hyogo_Japan.JPG'}" alt="${spotIzushi.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded">但馬の小京都・重伝建地区</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotIzushi.spotName}（出石城下町）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotIzushi.extract || '豊岡市南部にある旧出石藩5万8千石の城下町。日本最古級の時計台「辰鼓楼（しんころう）」や出石城跡、白壁土蔵が残る風情ある街並み。'}
            </p>
          </div>
          <p class="text-[11px] text-amber-950 bg-amber-50 p-2.5 rounded-lg font-medium border border-amber-100">
            💡 小皿に盛られた挽きたて・打ちたての「出石皿そば」を薬味や山芋、生卵で味変しながら巡るのが定番の冬旅グルメ。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 冬の日本海がもたらす究極の味覚：松葉ガニと但馬牛 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2.5">
      🦀 11月6日解禁！津居山港のタグ付き「活松葉ガニ」フルコースと但馬牛の競演
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      冬の城崎温泉を語る上で欠かせないのが「松葉ガニ（ズワイガニの雄）」。城崎の目と鼻の先にある津居山港は小型底引き網漁船が日帰り操業を行うため、生きたまま競りにかけられる圧倒的な鮮度を誇ります。津居山港で揚がった最高品質のカニには青いタグ、隣の柴山港ではピンクのタグが付けられ、日本屈指のブランドガニとして全国の食通を唸らせています。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      名門宿で提供される活カニ会席は、まさにカニ尽くしの芸術品です。まずは氷水でキュッと締めた「カニ刺し」。透き通るような白身がパッと花咲き、口に含めば濃厚な甘みと潮の香りが広がります。続いて目の前で備長炭で焼き上げる「焼きガニ」。芳ばしい殻の香りと凝縮された旨味が滴り、ふっくらとした身の弾力に驚かされます。甲羅にたっぷりと詰まった深緑色の「蟹味噌」は炭火でフツフツと温め、身をディップして食す至高の贅沢。さらに濃厚な出汁で白菜やネギとともに煮込む「カニすき（カニ鍋）」、旨味がすべて溶け出した出汁にご飯と溶き卵を流し込む「カニ雑炊」で締めくくれば、冬の味覚の頂点を実感できます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      さらに但馬地方は、神戸牛や松阪牛など全国のブランド和牛のルーツとなった素牛「但馬牛（たじまぎゅう）」の故郷。きめ細やかなサシと芳醇な香りを誇る但馬牛ステーキや炙り握りとのダブルメインプランは、記念日やご褒美旅行に絶大な人気を誇ります。
    </p>
  </section>

  <!-- 4. 楽天トラベル厳選名宿紹介 -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2.5">
      🏨 楽天トラベル高評価！冬の城崎温泉を満喫する厳選名宿
    </h2>

    <!-- メイン宿: 西村屋ホテル招月庭 -->
    <div class="bg-white rounded-3xl border border-red-200 p-6 md:p-8 shadow-sm">
      <div class="flex flex-col md:flex-row gap-6">
        <div class="md:w-1/2">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full h-64 md:h-80 object-cover rounded-2xl shadow-sm" />
          <div class="mt-3 flex items-center justify-between text-xs text-stone-500">
            <span>評価: ★${mainHotel.reviewAverage}（クチコミ ${mainHotel.reviewCount}件）</span>
            <span class="font-bold text-red-800 text-sm">参考料金: ¥${Number(mainHotel.hotelMinCharge).toLocaleString()}〜/人</span>
          </div>
        </div>
        <div class="md:w-1/2 flex flex-col justify-between space-y-4">
          <div>
            <span class="px-2.5 py-1 bg-red-100 text-red-800 text-xs font-bold rounded-full">創業160年・西村屋の別邸</span>
            <h3 class="text-lg md:text-xl font-bold text-stone-900 mt-2">${mainHotel.hotelName}</h3>
            <p class="text-xs text-stone-500 mt-0.5">${mainHotel.address1}${mainHotel.address2} / ${mainHotel.access}</p>
            <p class="text-xs md:text-sm text-stone-700 leading-relaxed mt-3">
              城崎温泉随一の老舗「西村屋本館」の伝統を受け継ぎ、五万坪の広大な森林庭園に佇む優美な名旅館。庭園を望む大浴場「月下の湯」には、雪景色を望む露天風呂やミストサウナ、ジャグジーを完備。さらに貸切露天風呂「森のプライベートスパ」では、白銀の木立に囲まれた完全プライベートな雪見温泉を満喫できます。冬の夕食には津居山港産タグ付き活松葉ガニと但馬牛の特選会席が振る舞われ、洗練されたおもてなしとともに極上の休日を約束してくれます。
            </p>
          </div>
          <div class="pt-4 border-t border-stone-100 flex items-center justify-between">
            <span class="text-xs text-stone-500">※外湯巡りシャトルバス随時運行</span>
            <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="px-6 py-3 bg-red-700 hover:bg-red-800 text-white text-xs md:text-sm font-bold rounded-xl transition duration-300 shadow-sm flex items-center gap-1.5">
              <span>楽天トラベルでプラン・空室を見る</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- サブ宿3選 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${otherHotels.map((hotel, idx) => `
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs flex flex-col justify-between">
        <div>
          <img src="${hotel.hotelImageUrl}" alt="${hotel.hotelName}" class="w-full h-44 object-cover" />
          <div class="p-4 space-y-2">
            <span class="text-[10px] px-2 py-0.5 bg-stone-100 text-stone-700 font-bold rounded">厳選宿 #${idx + 2}</span>
            <h4 class="font-bold text-stone-900 text-sm">${hotel.hotelName}</h4>
            <div class="flex items-center justify-between text-xs text-stone-500">
              <span>★${hotel.reviewAverage}（${hotel.reviewCount}件）</span>
              <span class="font-bold text-red-800">¥${Number(hotel.hotelMinCharge).toLocaleString()}〜</span>
            </div>
            <p class="text-xs text-stone-600 line-clamp-3 leading-relaxed">
              ${hotel.hotelSpecial || hotel.access || '城崎温泉の情緒あふれる好立地。冬の味覚松葉ガニ会席と外湯巡りへのアクセスが抜群の人気宿。'}
            </p>
          </div>
        </div>
        <div class="p-4 pt-0">
          <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="block w-full py-2.5 text-center bg-stone-800 hover:bg-stone-900 text-white text-xs font-bold rounded-xl transition">
            詳細・予約（楽天トラベル）
          </a>
        </div>
      </div>
      `).join('')}
    </div>
  </section>

  <!-- 5. 11月〜1月の冬旅特化！1泊2日王道モデルコース -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2.5">
      🗺️ 【11月〜1月】雪の城崎温泉と但馬小京都を満喫する1泊2日モデルコース
    </h2>
    <div class="space-y-4 text-xs md:text-sm text-stone-700">
      <div class="p-4 bg-stone-50 rounded-2xl border border-stone-200">
        <strong class="text-red-900 block text-sm mb-1">【1日目：城下町そば散策と七湯めぐり、夜のカニ会席】</strong>
        <ul class="list-disc list-inside space-y-1.5 leading-relaxed text-stone-600">
          <li><strong>11:30 出石城下町に到着：</strong> 辰鼓楼を眺めながら歴史情緒ある通りを散策。名物「出石皿そば」で腹ごしらえ（小皿20枚完食で手形記念品）。</li>
          <li><strong>13:30 玄武洞公園を見学：</strong> 円山川沿いを走り国の天然記念物「玄武洞」へ。雪をまとった圧巻の柱状節理を間近で観察。</li>
          <li><strong>15:00 城崎温泉にチェックイン：</strong> 色浴衣を選び、旅館オリジナルの丹前を羽織って外湯パス「ゆめぱ」を受け取る。</li>
          <li><strong>16:00 外湯巡り第1弾（御所の湯＆一の湯）：</strong> 夕暮れ時の柳並木を散策しながら、まずは名湯2箇所を巡る。湯上がりに温泉たまごを味わう。</li>
          <li><strong>18:30 夕食・活松葉ガニフルコース：</strong> 焼きガニの香ばしい薫りと甲羅味噌、カニ刺し、但馬牛に地酒「香住鶴」を合わせて舌鼓。</li>
          <li><strong>20:30 夜の雪見外湯散策（まんだら湯・鴻の湯）：</strong> カランコロンと下駄を響かせ、夜間ライトアップされた太鼓橋を渡って奥の湯へ。</li>
        </ul>
      </div>

      <div class="p-4 bg-stone-50 rounded-2xl border border-stone-200">
        <strong class="text-red-900 block text-sm mb-1">【2日目：朝風呂の贅と津居山港海産物ショッピング】</strong>
        <ul class="list-disc list-inside space-y-1.5 leading-relaxed text-stone-600">
          <li><strong>07:00 早朝の鴻の湯で雪見朝風呂：</strong> 最も澄み切った朝の冷気の中、庭園露天風呂で静かに湯浴み。</li>
          <li><strong>08:30 旅館の朝食：</strong> 炊きたて但馬産コシヒカリ、カニ身入り味噌汁、ハタハタの一夜干しなど海の恵みを堪能。</li>
          <li><strong>10:00 チェックアウト＆駅前通りでお土産探し：</strong> 城崎伝統工芸の「麦わら細工」や、焼き立てカニせんべい、地酒をお買い物。</li>
          <li><strong>11:00 津居山港・おけしょう鮮魚へ：</strong> 獲れたて松葉ガニやセコガニ（雌ガニ）、干物を自宅用・贈答用に買い求めて帰路へ。</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- 6. 城崎温泉冬旅・よくある質問（FAQ） -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2.5">
      ❓ 城崎温泉の冬旅行でよくある質問（雪道・服装・外湯マナー）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
        <h3 class="font-bold text-stone-900 mb-1">Q1. 11月〜1月に車で行く場合、スタッドレスタイヤやチェーンは必須ですか？</h3>
        <p class="text-stone-600 leading-relaxed">
          11月中旬まではノーマルタイヤでも走行可能な日が多いですが、12月中旬以降は冬用タイヤ（スタッドレス）が必須です。但馬地方は豪雪地帯に指定されており、北近畿豊岡自動車道や峠道では突然の降雪や凍結によるチェーン規制が行われることがあります。雪道運転に不安がある場合は、JR特急「こうのとり」または「きのさき」の利用を強くおすすめします。新大阪や京都から乗り換えなしで城崎温泉駅へ直行できます。
        </p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
        <h3 class="font-bold text-stone-900 mb-1">Q2. 冬の外湯めぐりは寒すぎませんか？どのような服装が良いですか？</h3>
        <p class="text-stone-600 leading-relaxed">
          浴衣の下にヒートテックなどの暖かいインナーレギンスや長袖シャツを着用し、旅館の丹前（たんぜん）の上に厚手の羽織を重ねるのが基本です。また、下駄を履くため足袋ソックス（旅館で提供されることが多いです）を重ね履きし、首元にはマフラーを巻くと快適です。塩化物泉の保温効果が高いため、しっかり浸かれば移動中も身体がポカポカ温まります。
        </p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
        <h3 class="font-bold text-stone-900 mb-1">Q3. 「松葉ガニ」と「紅ズワイガニ」はどう違いますか？</h3>
        <p class="text-stone-600 leading-relaxed">
          松葉ガニは本ズワイガニの雄のことで、水深200〜400mの砂泥底に生息し、引き締まった身質と濃厚な蟹味噌、上品な甘みが特徴の高級品です。一方、紅ズワイガニは水深800〜1500mの深海に生息し、殻が全体的に赤く、水分量が多くジューシーで甘みが強いのが特徴です。城崎温泉の冬の王道はタグ付き活松葉ガニです。
        </p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
        <h3 class="font-bold text-stone-900 mb-1">Q4. 外湯にシャンプーやボディーソープ、タオルは備え付けられていますか？</h3>
        <p class="text-stone-600 leading-relaxed">
          七つの外湯の洗い場には、ボディーソープとリンスインシャンプーが常備されています。ただし、タオルやバスタオルは備え付けがないため、宿泊する旅館の「外湯めぐり用カゴバッグ」にフェイスタオルとバスタオルを入れて持参する必要があります。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. サイト内内部リンク集 -->
  <section class="my-8 p-5 bg-red-50/80 rounded-2xl border border-red-200">
    <h3 class="font-bold text-sm text-red-950 mb-3">📌 合わせて読みたい兵庫・関西の冬名湯＆ご当地グルメ特集</h3>
    <ul class="text-xs text-red-900 space-y-2 list-disc list-inside">
      <li><a href="/prefectures/hyogo/" class="underline font-bold hover:text-red-700">兵庫県の人気温泉旅館・観光名所完全ガイド（城崎・有馬・淡路島・湯村）</a></li>
      <li><a href="/furusato-tax-winter-crab-gourmet-luxury-stay/" class="underline hover:text-red-700">冬の味覚の王様×活蟹尽くし極上温泉宿ガイド（城崎・三国・皆生のタグ付き松葉ガニ）</a></li>
      <li><a href="/furusato-tax-luxury-hotspring-ryokan-stay/" class="underline hover:text-red-700">実質2,000円で泊まる名湯・高級温泉旅館完全ガイド（有馬・草津・伊豆）</a></li>
      <li><a href="/posts/nanki-katsuura-onsen-tuna-bokido-kumano-nachi-winter-guide/" class="underline hover:text-red-700">南紀勝浦温泉の冬本番生マグロ会席と洞窟露天風呂・忘帰洞ガイド</a></li>
      <li><a href="/posts/kifune-shrine-snow-lightup-botannabe-kyoto-onsen-guide/" class="underline hover:text-red-700">貴船神社の雪景色ライトアップと名物ぼたん鍋・京都奥座敷温泉ガイド</a></li>
    </ul>
  </section>

</div>`;

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    description: '11月〜1月の城崎温泉を徹底解説！11月6日解禁の津居山港タグ付き活松葉ガニフルコース、大谿川の雪舞う柳並木と下駄で巡る七つの外湯めぐり、玄武洞の柱状節理、出石皿そば、名門西村屋ホテル招月庭ほか厳選宿と冬の1泊2日モデルコース。',
    prefecture: data.prefecture,
    area: data.area,
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: ['兵庫県', '城崎温泉', '松葉ガニ', '外湯めぐり', '玄武洞', '出石そば', '但馬牛', '冬旅行'],
    keywords: [
      '城崎温泉 松葉ガニ 旅館 おすすめ',
      '城崎温泉 外湯めぐり 冬 雪景色',
      '城崎温泉 西村屋ホテル招月庭 カニ宿泊記',
      '津居山ガニ 城崎 温泉 カニ料理',
      '冬の城崎温泉 1泊2日 モデルコース',
      '城崎温泉 電車 アクセス 冬 車 スタッドレス'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// 記事2: 岩手県・花巻温泉郷（鉛温泉・大沢温泉雪見立湯＆イーハトーブ）
// ========================================================
function buildHanamakiPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('佳松園') || x.hotelName.includes('愛隣館')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 3);

  const spotOnsen = w.find(x => x.spotName === '花巻温泉郷') || w[0];
  const spotNamari = w.find(x => x.spotName === '鉛温泉') || w[1];
  const spotKenji = w.find(x => x.spotName.includes('宮沢賢治')) || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100/60 rounded-3xl border border-indigo-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-indigo-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Executive Summary</span>
      <span class="text-xs text-indigo-950 font-bold">11月〜1月の花巻温泉郷・深雪秘湯立湯と宮沢賢治イーハトーブ完全総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【総括】花巻温泉郷の冬旅：日本一深い自噴天然岩風呂「白猿の湯」と宮沢賢治が愛した白銀イーハトーブ、極上前沢牛すき焼き</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      岩手県中西部に位置する花巻温泉郷は、奥羽山脈の渓谷に沿って12の名湯（台、花巻、金矢、松倉、志戸平、渡り、大沢、山の神、高倉、鉛、新鉛、花巻北）が連なる東北屈指の温泉天国。11月下旬の初雪から1月にかけては、豊沢川や台川の渓流沿いが一面純白の雪景色に覆われ、静寂に包まれた本格的な雪見温泉シーズンを迎えます。最大の見どころは、鉛温泉「藤三旅館」が誇る日本一深い自噴天然岩風呂「白猿の湯（水深約1.25m、立って入浴する奇跡の立湯）」や、大沢温泉の清流沿いに広がる茅葺き屋根の雪見露天風呂。詩人・宮沢賢治が愛した銀世界のふるさと「イーハトーブ」の情景が広がり、賢治記念館や童話村では幻想的な世界観に浸れます。さらに冬の食卓を彩る岩手最高峰の「前沢牛」すき焼き、きめ細やかな肉質の「白金豚（プラチナポーク）」、三陸直送の寒鱈やアワビとともに、心身の奥深くまで温まる至福のみちのく冬旅が実現します。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-indigo-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">名物浴場</span>
        <strong class="text-indigo-900 text-sm">自噴天然岩風呂・白猿の湯（深さ1.25m立湯）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-indigo-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の気候・降雪</span>
        <strong class="text-stone-900 text-sm">12月〜1月は完全積雪（防寒＆冬タイヤ必須）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-indigo-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">文化遺産</span>
        <strong class="text-sky-700 text-sm">宮沢賢治の故郷（記念館・童話村）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-indigo-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の三大美味</span>
        <strong class="text-indigo-800 text-sm">前沢牛・白金豚・三陸寒鱈鍋</strong>
      </div>
    </div>
  </section>

  <!-- 1. 花巻温泉郷の多様な湯守文化と奇跡の立湯 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2.5">
      ♨️ 底から湧き出る生きた源泉！日本一深い「白猿の湯」と渓流雪見露天の神秘
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      花巻温泉郷の魅力は、単一の温泉地ではなく、清流沿いに点在する12の湯がそれぞれ全く異なる泉質・風情・歴史を持っている点にあります。近代的なリゾートホテルが立ち並ぶ「花巻温泉」から、清流豊沢川を遡ると、歴史ある湯治場の面影を色濃く残す「志戸平温泉」「大沢温泉」「山の神温泉」「鉛温泉」「新鉛温泉」へと風景が一変します。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      中でも全国の温泉ファンが羨望の眼差しを向けるのが、鉛温泉・藤三旅館の「白猿の湯（しろざるのゆ）」。総ケヤキ造りの吹き抜け湯小屋の地下へ石段を下りていくと、自然の岩肌をくり抜いた浴槽が広がります。水深は約1.25メートル。大人の胸元まで達する深さがあり、湯船の底の岩の割れ目から、生まれたての無色透明な源泉（アルカリ性単純温泉）がこんこんと自噴しています。足元からポコポコと気泡とともに立ち上る湯を立ったまま全身で受け止める立ち湯は、湯圧によって血行が促進され、まるで母胎の中に浮かんでいるかのような無重力感と心地よい浮遊感を味わえます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      また、お隣の大沢温泉「大沢の湯」は、豊沢川のせせらぎと対岸の白銀の山肌を目の前に望む大露天風呂。雪がしんしんと降り積もる中、対岸の木々に積もった新雪が川面へ滑り落ちるかすかな水音に耳を傾けながら浸かる雪見風呂は、日常の喧騒を完全に忘れさせてくれます。pH値7.5〜9.0の弱アルカリ性からアルカリ性の肌に優しい湯が多く、湯上がりは肌がスベスベに整います。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡るイーハトーブ花巻の冬名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 花巻温泉郷 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotOnsen.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Hanamaki_Onsen_Rose_Garden.jpg/800px-Hanamaki_Onsen_Rose_Garden.jpg'}" alt="${spotOnsen.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-indigo-100 text-indigo-800 font-bold rounded">奥羽山脈の名湯群</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotOnsen.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotOnsen.extract || '岩手県花巻市にある温泉群の総称。台川や豊沢川沿いに12の温泉が点在し、歴史ある自炊湯治場から大規模リゾート旅館まで多彩な湯処を擁する。'}
            </p>
          </div>
          <p class="text-[11px] text-indigo-950 bg-indigo-50 p-2.5 rounded-lg font-medium border border-indigo-100">
            💡 各温泉間は無料送迎バスや路線バスが運行。冬は白銀の渓谷を縫う湯巡りドライブも風情満点です。
          </p>
        </div>
      </div>

      <!-- Spot 2: 鉛温泉 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotNamari.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Namari_onsen_fujisan_ryokan.jpg/800px-Namari_onsen_fujisan_ryokan.jpg'}" alt="${spotNamari.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-800 font-bold rounded">日本一深い自噴立湯</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotNamari.spotName}（藤三旅館）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotNamari.extract || '花巻市豊沢川上流にある歴史ある名湯。深さ1.25mの天然岩風呂「白猿の湯」で知られ、古くから白猿が傷を癒したという開湯伝説が伝わる。'}
            </p>
          </div>
          <p class="text-[11px] text-slate-950 bg-slate-50 p-2.5 rounded-lg font-medium border border-slate-200">
            💡 宮沢賢治の童話『なめとこ山の熊』にも登場する由緒正しい秘湯。総ケヤキ造りの湯小屋が旅情をそそります。
          </p>
        </div>
      </div>

      <!-- Spot 3: 宮沢賢治ゆかりのイーハトーブ花巻 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotKenji.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Miyazawa_Kenji_portrait.jpg/800px-Miyazawa_Kenji_portrait.jpg'}" alt="${spotKenji.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded">郷土の文豪・童話の世界</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotKenji.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotKenji.extract || '花巻が生んだ世界的詩人・童話作家。花巻温泉郷の湯をこよなく愛し、岩手を理想郷「イーハトーブ」と呼んで数々の不朽の名作を生み出した。'}
            </p>
          </div>
          <p class="text-[11px] text-blue-950 bg-blue-50 p-2.5 rounded-lg font-medium border border-blue-100">
            💡 胡四王山にある「宮沢賢治記念館」や「宮沢賢治童話村」は、雪化粧に包まれると銀河鉄道の夜の幻想空間そのものです。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 岩手・みちのくの冬の美食：前沢牛と白金豚 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2.5">
      🥩 岩手の大自然が育む極上肉の饗宴！前沢牛すき焼き＆奥羽山脈名水が育てる白金豚
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      冬の花巻温泉郷を訪れたなら、寒さに打ち勝つ豊かな肉料理に舌鼓を打つのが最高の愉しみです。その筆頭が、岩手県南部の奥州市前沢で肥育される日本屈指の黒毛和牛「前沢牛（まえさわぎゅう）」。寒暖差の激しい気候と良質な稲わら、澄んだ地下水でじっくりと育てられた前沢牛は、鮮やかな霜降りと人肌でとろける脂の融点が自慢です。冬の会席では、南部鉄器の鍋で割下とともにじゅわっと煮立てる「前沢牛すき焼き」や、鉄板で表面をカリッと香ばしく焼き上げる「サーロインステーキ」が振る舞われます。噛むほどに芳醇な甘みとコクが広がり、温泉で温まった身体をさらに芯から満たしてくれます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      さらに花巻を代表するブランドポークが「白金豚（プラチナポーク）」。奥羽山脈の湧水を飲み水にし、非遺伝子組み換え飼料で衛生管理を徹底して育てられた銘柄豚です。脂身が驚くほど甘く、臭みが全くないジューシーな肉質は全国の一流シェフからも高く評価されています。冬は白金豚のしゃぶしゃぶ鍋や豆乳鍋が定番。地元花巻の地酒「南部美人」や「月の輪」、紫波町の純米酒と合わせれば、至福の晩酌の時間が完成します。
    </p>
  </section>

  <!-- 4. 楽天トラベル厳選名宿紹介 -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2.5">
      🏨 楽天トラベル高評価！冬の花巻温泉郷を満喫する厳選名宿
    </h2>

    <!-- メイン宿: 佳松園 または 愛隣館 -->
    <div class="bg-white rounded-3xl border border-indigo-200 p-6 md:p-8 shadow-sm">
      <div class="flex flex-col md:flex-row gap-6">
        <div class="md:w-1/2">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full h-64 md:h-80 object-cover rounded-2xl shadow-sm" />
          <div class="mt-3 flex items-center justify-between text-xs text-stone-500">
            <span>評価: ★${mainHotel.reviewAverage}（クチコミ ${mainHotel.reviewCount}件）</span>
            <span class="font-bold text-indigo-800 text-sm">参考料金: ¥${Number(mainHotel.hotelMinCharge).toLocaleString()}〜/人</span>
          </div>
        </div>
        <div class="md:w-1/2 flex flex-col justify-between space-y-4">
          <div>
            <span class="px-2.5 py-1 bg-indigo-100 text-indigo-800 text-xs font-bold rounded-full">とろとろ美肌の湯・南部赤松林の静寂</span>
            <h3 class="text-lg md:text-xl font-bold text-stone-900 mt-2">${mainHotel.hotelName}</h3>
            <p class="text-xs text-stone-500 mt-0.5">${mainHotel.address1}${mainHotel.address2} / ${mainHotel.access}</p>
            <p class="text-xs md:text-sm text-stone-700 leading-relaxed mt-3">
              花巻温泉の奥座敷、美しい南部赤松の自然林に抱かれた最高級旅館。pH9.0を誇る自家源泉は、驚くほどのとろみを帯びた「アルカリ性単純温泉」。まるで美容液に浸かっているかのように肌へ吸い付き、湯上がりはしっとりとキメが整います。雪景色の中庭に面した檜露天風呂では、静かに降り積もる雪と赤松の木立を眺めながら優雅な湯浴みを満喫。夕食には三陸のアワビや前沢牛、季節の山海の恵みを盛り込んだ本格京風会席が提供され、上質なおこもり旅を約束します。
            </p>
          </div>
          <div class="pt-4 border-t border-stone-100 flex items-center justify-between">
            <span class="text-xs text-stone-500">※新花巻駅・花巻駅より無料送迎バス運行</span>
            <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="px-6 py-3 bg-indigo-700 hover:bg-indigo-800 text-white text-xs md:text-sm font-bold rounded-xl transition duration-300 shadow-sm flex items-center gap-1.5">
              <span>楽天トラベルでプラン・空室を見る</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- サブ宿3選 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${otherHotels.map((hotel, idx) => `
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs flex flex-col justify-between">
        <div>
          <img src="${hotel.hotelImageUrl}" alt="${hotel.hotelName}" class="w-full h-44 object-cover" />
          <div class="p-4 space-y-2">
            <span class="text-[10px] px-2 py-0.5 bg-stone-100 text-stone-700 font-bold rounded">厳選宿 #${idx + 2}</span>
            <h4 class="font-bold text-stone-900 text-sm">${hotel.hotelName}</h4>
            <div class="flex items-center justify-between text-xs text-stone-500">
              <span>★${hotel.reviewAverage}（${hotel.reviewCount}件）</span>
              <span class="font-bold text-indigo-800">¥${Number(hotel.hotelMinCharge).toLocaleString()}〜</span>
            </div>
            <p class="text-xs text-stone-600 line-clamp-3 leading-relaxed">
              ${hotel.hotelSpecial || hotel.access || '花巻温泉郷の心地よい自然に囲まれた人気宿。雪見露天風呂と岩手の郷土会席バイキングが充実。'}
            </p>
          </div>
        </div>
        <div class="p-4 pt-0">
          <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="block w-full py-2.5 text-center bg-stone-800 hover:bg-stone-900 text-white text-xs font-bold rounded-xl transition">
            詳細・予約（楽天トラベル）
          </a>
        </div>
      </div>
      `).join('')}
    </div>
  </section>

  <!-- 5. 11月〜1月の冬旅特化！1泊2日王道モデルコース -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2.5">
      🗺️ 【11月〜1月】宮沢賢治の世界と雪見名湯を巡る1泊2日モデルコース
    </h2>
    <div class="space-y-4 text-xs md:text-sm text-stone-700">
      <div class="p-4 bg-stone-50 rounded-2xl border border-stone-200">
        <strong class="text-indigo-900 block text-sm mb-1">【1日目：新幹線で新花巻へ、童話の世界と雪見秘湯チェックイン】</strong>
        <ul class="list-disc list-inside space-y-1.5 leading-relaxed text-stone-600">
          <li><strong>10:30 東北新幹線・新花巻駅に到着：</strong> 駅レンタカーまたは周遊タクシーで出発（雪道運転はスタッドレス必須）。</li>
          <li><strong>11:00 宮沢賢治童話村＆記念館：</strong> 賢治の学校で幻想的な空間を体験。銀河鉄道の世界観と直筆原稿に触れる。</li>
          <li><strong>12:45 花巻名物「わんこそば」昼食：</strong> 老舗「嘉司屋（かじや）」または「やぶ屋」で名物そばを堪能。宮沢賢治も通った天ぷらそばとサイダーのセットも人気。</li>
          <li><strong>14:30 イギリス海岸・高村光太郎山荘へ：</strong> 北上川のイギリス海岸の雪景色を車窓に眺め、高村山荘の白銀の森を散策。</li>
          <li><strong>15:30 花巻温泉郷にチェックイン：</strong> 宿に到着後、まずはとろみのある美肌の湯へ。雪をまとった木立を眺めながら旅の疲れをほぐす。</li>
          <li><strong>18:30 前沢牛＆白金豚の冬会席：</strong> 岩手の銘柄肉の食べ比べに舌鼓。地酒「南部美人」とともにみちのくの夜を過ごす。</li>
        </ul>
      </div>

      <div class="p-4 bg-stone-50 rounded-2xl border border-stone-200">
        <strong class="text-indigo-900 block text-sm mb-1">【2日目：鉛温泉の白猿立湯体験とお土産めぐり】</strong>
        <ul class="list-disc list-inside space-y-1.5 leading-relaxed text-stone-600">
          <li><strong>08:00 旅館の朝食：</strong> 岩手県産ひとめぼれの炊きたてご飯と郷土料理「ひっつみ汁」で温まる。</li>
          <li><strong>09:30 鉛温泉・藤三旅館へ（日帰り立湯入浴）：</strong> 水深1.25mの奇跡の自噴岩風呂「白猿の湯」へ。立って入る独特の浮遊感を堪能。</li>
          <li><strong>11:30 マルカンビル大食堂へ：</strong> 花巻市民のソウルフード、10段巻きの巨大ソフトクリーム（箸で食べるのが流儀）とナポリカツを体験。</li>
          <li><strong>13:30 花巻駅・新花巻駅でお土産購入：</strong> 銘菓「かもめの玉子」「南部煎餅」、エーデルワインをお土産にして新幹線で帰路へ。</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- 6. 花巻温泉郷冬旅・よくある質問（FAQ） -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2.5">
      ❓ 花巻温泉郷の冬旅行でよくある質問（積雪・公共交通・立湯利用法）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
        <h3 class="font-bold text-stone-900 mb-1">Q1. 冬の花巻はどれくらい雪が降りますか？車なしでも観光できますか？</h3>
        <p class="text-stone-600 leading-relaxed">
          12月中旬から1月下旬にかけては本格的な積雪（20〜50cm程度）となります。ただし、花巻温泉郷は東北新幹線の「新花巻駅」およびJR東北本線「花巻駅」から無料送迎バスや路線バス（岩手県交通）が頻繁に運行しているため、車がなくても極めてスムーズにアクセス可能です。観光地も路線バスや観光タクシーを活用すれば雪道運転の不安なく楽しめます。
        </p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
        <h3 class="font-bold text-stone-900 mb-1">Q2. 鉛温泉「白猿の湯」は混浴ですか？女性専用時間はありますか？</h3>
        <p class="text-stone-600 leading-relaxed">
          白猿の湯は基本的には混浴ですが、女性専用時間（1日3回：8:00〜9:00、14:00〜15:00、19:30〜21:00など、詳細は公式確認）が毎日設けられています。女性の方も安心して奇跡の立湯を独占して楽しむことができます。
        </p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
        <h3 class="font-bold text-stone-900 mb-1">Q3. 花巻温泉郷の冬の服装・靴はどう準備すべきですか？</h3>
        <p class="text-stone-600 leading-relaxed">
          朝晩の気温は氷点下5度〜10度まで下がることがあります。ロング丈のダウンコート、手袋、マフラー、ニット帽は必須です。また、歩道が凍結してアイスバーンになることがあるため、底に深い溝があるスノーブーツや防滑ソールの靴を着用してください。
        </p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
        <h3 class="font-bold text-stone-900 mb-1">Q4. 花巻の三大名物グルメは何ですか？</h3>
        <p class="text-stone-600 leading-relaxed">
          ブランド牛「前沢牛」、極上の甘みを誇る「白金豚（プラチナポーク）」、そして給仕さんの掛け声とともに楽しむ「わんこそば」です。また、B級グルメとしてレトロなマルカンビル大食堂のナポリカツ＆10段ソフトクリームも全国的に有名です。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. サイト内内部リンク集 -->
  <section class="my-8 p-5 bg-indigo-50/80 rounded-2xl border border-indigo-200">
    <h3 class="font-bold text-sm text-indigo-950 mb-3">📌 合わせて読みたい岩手・東北の冬名湯＆秘湯特集</h3>
    <ul class="text-xs text-indigo-900 space-y-2 list-disc list-inside">
      <li><a href="/prefectures/iwate/" class="underline font-bold hover:text-indigo-700">岩手県の人気温泉旅館・観光名所完全ガイド（花巻・八幡平・平泉・盛岡）</a></li>
      <li><a href="/posts/nyuto-onsen-kyo-snow-secret-bath-kiritanpo-akita-guide/" class="underline hover:text-indigo-700">乳頭温泉郷の雪見露天風呂と鶴の湯・きりたんぽ鍋ガイド</a></li>
      <li><a href="/posts/zao-onsen-snow-monster-juhyo-lightup-winter-guide/" class="underline hover:text-indigo-700">蔵王温泉の樹氷スノーモンスターと強酸性硫黄泉名宿ガイド</a></li>
      <li><a href="/furusato-tax-rare-wagyu-tankaku-akagyu-gourmet-stay/" class="underline hover:text-indigo-700">幻の極上赤身肉「短角牛・あか牛」美食宿ふるさと納税完全ガイド</a></li>
      <li><a href="/posts/aizu-higashiyama-onsen-ouchijuku-snow-tsurugajo-winter-guide/" class="underline hover:text-indigo-700">会津東山温泉の大内宿雪景色と鶴ヶ城ライトアップガイド</a></li>
    </ul>
  </section>

</div>`;

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    description: '11月〜1月の花巻温泉郷を完全網羅！奥羽山脈の白銀渓谷に湧く12の名湯、鉛温泉「白猿の湯（日本一深い自噴立湯）」、大沢温泉の雪見露天、宮沢賢治イーハトーブ記念館・童話村、前沢牛すき焼きと白金豚鍋、佳松園ほか厳選宿と冬の1泊2日モデルコース。',
    prefecture: data.prefecture,
    area: data.area,
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: ['岩手県', '花巻温泉郷', '鉛温泉', '立湯', '宮沢賢治', '前沢牛', '白金豚', '冬旅行'],
    keywords: [
      '花巻温泉 おすすめ 旅館 宿泊記',
      '鉛温泉 白猿の湯 立ち湯 混浴 時間',
      '花巻温泉郷 雪見露天風呂 冬',
      '宮沢賢治 イーハトーブ 観光 モデルコース',
      '前沢牛 すき焼き 花巻 温泉 宿',
      '花巻温泉 佳松園 クチコミ 評判'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// 記事3: 熊本県・黒川温泉（冬の風物詩「湯あかり」竹灯籠＆入湯手形）
// ========================================================
function buildKurokawaPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('美里') || x.hotelName.includes('優彩')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 3);

  const spotOnsen = w.find(x => x.spotName === '黒川温泉') || w[0];
  const spotAso = w.find(x => x.spotName === '阿蘇山') || w[1];
  const spotKusasenri = w.find(x => x.spotName.includes('草千里')) || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100/60 rounded-3xl border border-teal-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-teal-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Executive Summary</span>
      <span class="text-xs text-teal-950 font-bold">12月〜1月の黒川温泉・冬の竹灯籠「湯あかり」と入湯手形野天風呂完全総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【総括】黒川温泉の冬旅：田の原川に揺らめく竹毬灯籠「湯あかり」の幽玄美と、小国杉の手形で行く野天風呂巡り・極上あか牛</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      熊本県阿蘇郡南小国町、阿蘇カルデラの北麓・筑後川の源流沿いに広がる黒川温泉。標高約700メートルの山あいに黒塗りの木造建築が調和し、過度な看板を排した統一感ある景観美で「日本一の温泉街」と称えられます。12月中旬から翌年3月末にかけて開催される冬の風物詩が「湯あかり（ゆあかり）」。間伐した小国杉や竹を編んで作られた数百個の竹毬灯籠や筒灯籠が田の原川の渓流沿いや丸鈴橋周辺に浮かび上がり、夕暮れから夜にかけてオレンジ色の温かな光が川面を照らす光景は息をのむ美しさです。地元産の小国杉で作られた「入湯手形（1枚1,500円）」を手に、渓流沿いの野天風呂や洞窟風呂、立ったまま浸かる立ち湯など3カ所の温泉を巡る湯巡りは冬の情緒そのもの。雪化粧した阿蘇草千里ケ浜のパノラマ絶景、熊本が誇るブランド和牛「肥後あか牛」の溶岩焼きステーキ、本場特選馬刺し会席とともに、五感を研ぎ澄ます至高の冬の九州旅が待っています。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-teal-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬のライトアップ</span>
        <strong class="text-teal-900 text-sm">湯あかり（12月中旬〜3月末点灯）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-teal-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">名物システム</span>
        <strong class="text-stone-900 text-sm">入湯手形（3カ所巡り＆飲食割引）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-teal-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">標高・冬の気候</span>
        <strong class="text-emerald-700 text-sm">標高700m（降雪・路面凍結注意）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-teal-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">二大名物美食</span>
        <strong class="text-teal-800 text-sm">肥後あか牛溶岩焼き・熊本特選馬刺し</strong>
      </div>
    </div>
  </section>

  <!-- 1. 湯あかりの情景と入湯手形の醍醐味 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      ♨️ 「黒川一帯が一軒の宿」！川面に浮かぶ竹毬の灯火と入湯手形野天風呂の魅力
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      黒川温泉が世界中から愛される最大の理由は、「黒川温泉一和（いっか）」の精神です。「街の通りは廊下、旅館は客室、木々は庭の植木、すべての温泉街が一軒の宿」というコンセプトのもと、昭和の時代から統一した景観づくりが徹底されてきました。派手なネオンサインは一切なく、黒を基調とした落ち着いた木造の佇まい、石畳の小道、そして木々のざわめきと湯煙が旅行者を包み込みます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      冬の黒川温泉を象徴する「湯あかり」は、地域の里山保全活動から生まれました。竹林の繁茂を防ぐために伐採された竹を再利用し、職人たちが一つひとつ丁寧に編み上げた大小様々な竹毬（たけまり）や竹筒の灯籠。毎日夕暮れの17時頃になると柔らかな明かりが灯り、丸鈴橋から見下ろす田の原川の清流には、まるで無数の星屑が水面に舞い降りたかのような幽玄の景観が浮かび上がります。冷たい夜気を吸い込みながら、浴衣に丹前を重ね、川沿いの遊歩道をそぞろ歩く時間は、冬の黒川温泉でしか味わえない静謐な癒やしの瞬間です。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      名物の「入湯手形」は、杉の木の輪切りで作られた情緒ある木製パス。約30軒の加盟旅館の中から、好きな露天風呂（野天風呂）を3カ所選んで入浴できます（うち1カ所は土産物や飲食の利用券としても利用可能）。弱酸性単純温泉から含鉄泉、硫黄泉、塩化物泉、硫酸塩泉と、各宿ごとに源泉井戸が異なるため、乳白色の濁り湯からエメラルドグリーン、無色透明のトロトロ湯まで、多彩な泉質を一度に堪能できるのが黒川の真骨頂です。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る阿蘇・黒川の冬名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 黒川温泉 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotOnsen.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Kurokawa_Onsen01s.jpg/800px-Kurokawa_Onsen01s.jpg'}" alt="${spotOnsen.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-teal-100 text-teal-800 font-bold rounded">ミシュラン二つ星評価の景観</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotOnsen.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotOnsen.extract || '熊本県阿蘇郡南小国町にある名湯。渓谷沿いに黒壁の木造旅館が立ち並び、入湯手形による露天風呂巡りと統一感ある景観美で全国的な知名度を誇る。'}
            </p>
          </div>
          <p class="text-[11px] text-teal-950 bg-teal-50 p-2.5 rounded-lg font-medium border border-teal-100">
            💡 12月中旬〜3月は川沿いの「湯あかり」が点灯。雪が降ると竹毬の上に雪が積もり一段と幻想的になります。
          </p>
        </div>
      </div>

      <!-- Spot 2: 阿蘇山・大観峰 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotAso.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Aso_central_cones_from_Daikanbo.jpg/800px-Aso_central_cones_from_Daikanbo.jpg'}" alt="${spotAso.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-stone-100 text-stone-800 font-bold rounded">世界最大級のカルデラ</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotAso.spotName}（阿蘇五岳）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotAso.extract || '九州中央部に位置する活火山。東西約18km、南北約25kmの広大なカルデラ地形を有し、中岳火口の噴煙や阿蘇五岳（根子岳、高岳、中岳、烏帽子岳、杵島岳）が織りなす大パノラマ。'}
            </p>
          </div>
          <p class="text-[11px] text-stone-950 bg-stone-50 p-2.5 rounded-lg font-medium border border-stone-200">
            💡 冬期の大観峰からは、カルデラ盆地に発生する雄大な「冬の雲海」と冠雪した阿蘇五岳の神々しい姿が望めます。
          </p>
        </div>
      </div>

      <!-- Spot 3: 草千里ヶ浜 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotKusasenri.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Kusasenri-ga-hama_in_Winter.JPG/800px-Kusasenri-ga-hama_in_Winter.JPG'}" alt="${spotKusasenri.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">国指定名勝・白銀の大草原</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotKusasenri.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotKusasenri.extract || '烏帽子岳の北麓に広がる直径約1kmの円形二重火口跡。中央の大きな池と放牧された馬の風景で知られ、四季折々に雄大な姿を見せる国の名勝・天然記念物。'}
            </p>
          </div>
          <p class="text-[11px] text-emerald-950 bg-emerald-50 p-2.5 rounded-lg font-medium border border-emerald-100">
            💡 冬は一面が純白の雪原へと姿を変え、凍結した池と背後の中岳から立ち上る白い噴煙のコントラストが圧倒的です。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 阿蘇の大地の恵み：肥後あか牛と馬刺し -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      🐂 赤身の旨味が凝縮！阿蘇の草原が育む「肥後あか牛」と本場熊本の特選馬刺し会席
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      黒川温泉の夕食における主役は、なんといっても阿蘇の大草原で放牧されて育った褐毛和種「肥後あか牛（あかうし）」です。黒毛和牛に比べて無駄な脂肪分が少なく、赤身肉本来の濃厚な旨味とアミノ酸がぎっしり詰まっているのが最大の特徴。阿蘇の溶岩プレートで焼き上げる溶岩焼きステーキは、遠赤外線効果で表面は香ばしく中はふっくらジューシーに仕上がり、自家製のかぼすポン酢や阿蘇の天然塩、わさびでいただけば、噛むほどに芳醇な肉汁が溢れ出します。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      さらに熊本名物「馬刺し」も欠かせません。美しいサシの入った極上「霜降り（特選バラ）」、赤身の味が際立つ「ロース」、コリコリとした食感が癖になる首の脂「タテガミ（コーネ）」の盛り合わせが供されます。生姜とニンニクを合わせた甘口の九州醤油につけて味わえば、舌の上でとろけるような甘みと旨味が広がります。南小国名産の原木しいたけや、冬の根菜をたっぷり煮込んだ郷土汁「だご汁」とともに、心温まる九州山里の美食を満喫できます。
    </p>
  </section>

  <!-- 4. 楽天トラベル厳選名宿紹介 -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      🏨 楽天トラベル高評価！冬の黒川温泉を満喫する厳選名宿
    </h2>

    <!-- メイン宿: 旅館 美里 または 優彩 -->
    <div class="bg-white rounded-3xl border border-teal-200 p-6 md:p-8 shadow-sm">
      <div class="flex flex-col md:flex-row gap-6">
        <div class="md:w-1/2">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full h-64 md:h-80 object-cover rounded-2xl shadow-sm" />
          <div class="mt-3 flex items-center justify-between text-xs text-stone-500">
            <span>評価: ★${mainHotel.reviewAverage}（クチコミ ${mainHotel.reviewCount}件）</span>
            <span class="font-bold text-teal-800 text-sm">参考料金: ¥${Number(mainHotel.hotelMinCharge).toLocaleString()}〜/人</span>
          </div>
        </div>
        <div class="md:w-1/2 flex flex-col justify-between space-y-4">
          <div>
            <span class="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-full">硫黄香る美肌湯・温泉街中央の好立地</span>
            <h3 class="text-lg md:text-xl font-bold text-stone-900 mt-2">${mainHotel.hotelName}</h3>
            <p class="text-xs text-stone-500 mt-0.5">${mainHotel.address1}${mainHotel.address2} / ${mainHotel.access}</p>
            <p class="text-xs md:text-sm text-stone-700 leading-relaxed mt-3">
              黒川温泉の中心部、湯あかりのメイン会場である田の原川・丸鈴橋まで徒歩すぐの好立地に佇む純和風旅館。敷地内に自家源泉を有し、日によって透明から白濁、青みがかった色へと表情を変える硫黄泉は黒川随一の泉質自慢。檜の露天風呂からは冬の凛とした山並みを望め、体の芯までポカポカと温まります。夕食には阿蘇のあか牛溶岩焼きや新鮮な馬刺し、地元の契約農家が育てた冬野菜の会席料理が個室食事処で振る舞われ、アットホームで細やかなおもてなしが評判です。
            </p>
          </div>
          <div class="pt-4 border-t border-stone-100 flex items-center justify-between">
            <span class="text-xs text-stone-500">※湯あかり散策に最適な温泉街中心地</span>
            <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white text-xs md:text-sm font-bold rounded-xl transition duration-300 shadow-sm flex items-center gap-1.5">
              <span>楽天トラベルでプラン・空室を見る</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- サブ宿3選 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${otherHotels.map((hotel, idx) => `
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs flex flex-col justify-between">
        <div>
          <img src="${hotel.hotelImageUrl}" alt="${hotel.hotelName}" class="w-full h-44 object-cover" />
          <div class="p-4 space-y-2">
            <span class="text-[10px] px-2 py-0.5 bg-stone-100 text-stone-700 font-bold rounded">厳選宿 #${idx + 2}</span>
            <h4 class="font-bold text-stone-900 text-sm">${hotel.hotelName}</h4>
            <div class="flex items-center justify-between text-xs text-stone-500">
              <span>★${hotel.reviewAverage}（${hotel.reviewCount}件）</span>
              <span class="font-bold text-teal-800">¥${Number(hotel.hotelMinCharge).toLocaleString()}〜</span>
            </div>
            <p class="text-xs text-stone-600 line-clamp-3 leading-relaxed">
              ${hotel.hotelSpecial || hotel.access || '黒川温泉の情緒あふれる渓流沿いや山あいの名宿。入湯手形巡りや冬の湯あかり鑑賞に絶好の立地。'}
            </p>
          </div>
        </div>
        <div class="p-4 pt-0">
          <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="block w-full py-2.5 text-center bg-stone-800 hover:bg-stone-900 text-white text-xs font-bold rounded-xl transition">
            詳細・予約（楽天トラベル）
          </a>
        </div>
      </div>
      `).join('')}
    </div>
  </section>

  <!-- 5. 12月〜1月の冬旅特化！1泊2日王道モデルコース -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      🗺️ 【12月〜1月】阿蘇冬絶景と湯あかり＆入湯手形を満喫する1泊2日モデルコース
    </h2>
    <div class="space-y-4 text-xs md:text-sm text-stone-700">
      <div class="p-4 bg-stone-50 rounded-2xl border border-stone-200">
        <strong class="text-teal-900 block text-sm mb-1">【1日目：熊本空港から阿蘇パノラマライン、黒川温泉湯あかり鑑賞】</strong>
        <ul class="list-disc list-inside space-y-1.5 leading-relaxed text-stone-600">
          <li><strong>10:30 阿蘇くまもと空港を出発：</strong> レンタカー（冬期スタッドレス指定）または九州横断バスで阿蘇方面へ。</li>
          <li><strong>11:30 草千里ヶ浜・阿蘇火山博物館：</strong> 白銀の雪原となった草千里ヶ浜を見学。展望カフェで温かい阿蘇小国ジャージー牛乳ラテを味わう。</li>
          <li><strong>13:00 大観峰からのパノラマ絶景：</strong> カルデラ外輪山の最高峰から、涅槃像に例えられる阿蘇五岳の冠雪パノラマを一望。</li>
          <li><strong>15:00 黒川温泉にチェックイン：</strong> 案内所で「入湯手形」を購入し、まずは渓流沿いの有名野天風呂（いこい旅館の立ち湯等）へ1湯目。</li>
          <li><strong>17:30 湯あかり点灯鑑賞：</strong> 夕暮れとともに丸鈴橋周辺の竹毬灯籠に明かりが灯る。川面に揺らめくオレンジの灯火を撮影。</li>
          <li><strong>19:00 あか牛ステーキ＆馬刺し会席：</strong> 熊本の誇る極上肉と山里の冬野菜を地酒「れいざん」とともに堪能。</li>
          <li><strong>21:00 夜の温泉街散策：</strong> 静まり返った温泉街の湯けむりと竹灯籠の余韻を楽しみながら宿の内湯で温まる。</li>
        </ul>
      </div>

      <div class="p-4 bg-stone-50 rounded-2xl border border-stone-200">
        <strong class="text-teal-900 block text-sm mb-1">【2日目：朝の入湯手形巡りと小国郷スイーツ散策】</strong>
        <ul class="list-disc list-inside space-y-1.5 leading-relaxed text-stone-600">
          <li><strong>07:30 朝の露天風呂と山里の朝食：</strong> 澄み切った冷気の中、露天風呂に浸かり、炊きたてのご飯と温泉粥で目覚める。</li>
          <li><strong>09:00 入湯手形巡り2・3湯目：</strong> 山あいの隠れ家露天風呂（山の宿新明館の洞窟風呂など）を巡り、手形のシールをコンプリート。</li>
          <li><strong>11:00 温泉街のカフェ巡り：</strong> 「パティスリー麓」で小国ジャージー牛乳を使った焼きたてシュークリームやプリンを味わう。</li>
          <li><strong>12:30 鍋ヶ滝（なべがたき）へ：</strong> 南小国町の隣、小国町にある水のカーテン「鍋ヶ滝」の冬の清流を見学して熊本空港へ。</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- 6. 黒川温泉冬旅・よくある質問（FAQ） -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      ❓ 黒川温泉の冬旅行でよくある質問（スタッドレスタイヤ・アクセス・混雑）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
        <h3 class="font-bold text-stone-900 mb-1">Q1. 九州ですが、冬の黒川温泉や阿蘇は雪が積もりますか？スタッドレスは必要ですか？</h3>
        <p class="text-stone-600 leading-relaxed">
          黒川温泉は標高約700メートル、阿蘇周辺の峠道は標高900メートルを超える高地です。九州であっても12月中旬から2月にかけては積雪や路面凍結（アイスバーン）が頻繁に発生します。車で訪れる場合は、必ずスタッドレスタイヤ装着車を選択してください。高速道路や阿蘇ミルクロードで冬用タイヤ規制が行われることがあります。
        </p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
        <h3 class="font-bold text-stone-900 mb-1">Q2. 電車やバスだけで黒川温泉へ行けますか？</h3>
        <p class="text-stone-600 leading-relaxed">
          電車は通っていませんが、高速直行バスが大変便利です。JR熊本駅・阿蘇くまもと空港から「九州横断バス（別府行き）」が毎日運行しており、黒川温泉バス停まで直通でアクセス可能です。また福岡・博多駅や福岡空港からも高速バス（福岡〜黒川温泉線）が運行しているため、車がなくても快適に旅ができます。
        </p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
        <h3 class="font-bold text-stone-900 mb-1">Q3. 「湯あかり」の点灯時間と期間はいつですか？</h3>
        <p class="text-stone-600 leading-relaxed">
          毎年12月中旬から翌年3月末（または4月上旬）まで毎日開催されます。点灯時間は日没（17:00〜17:30頃）から21:30または22:00頃までです。雨天や降雪時でも基本的に点灯しています。
        </p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
        <h3 class="font-bold text-stone-900 mb-1">Q4. 入湯手形は当日どこで購入できますか？有効期限はありますか？</h3>
        <p class="text-stone-600 leading-relaxed">
          黒川温泉の中心部にある「風の舎（旅館組合案内所）」または加盟各旅館のフロントで1枚1,500円（税込）で購入できます。有効期限は購入日から半年間有効ですので、1泊で使い切れなかった場合も再訪時に利用可能です。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. サイト内内部リンク集 -->
  <section class="my-8 p-5 bg-teal-50/80 rounded-2xl border border-teal-200">
    <h3 class="font-bold text-sm text-teal-950 mb-3">📌 合わせて読みたい熊本・九州の冬名湯＆絶景特集</h3>
    <ul class="text-xs text-teal-900 space-y-2 list-disc list-inside">
      <li><a href="/prefectures/kumamoto/" class="underline font-bold hover:text-teal-700">熊本県の人気温泉旅館・観光名所完全ガイド（黒川・阿蘇・天草・人吉）</a></li>
      <li><a href="/posts/nagayu-onsen-natural-carbonated-spring-kuju-winter-guide/" class="underline hover:text-teal-700">長湯温泉の奇跡の天然炭酸泉とラムネ温泉館・九重連山雪景色ガイド</a></li>
      <li><a href="/furusato-tax-bihada-medicinal-springs-retreat-stay/" class="underline hover:text-teal-700">奇跡の名湯×強炭酸泉・泥湯・美肌温泉リトリート（長湯・霧島・嬉野）</a></li>
      <li><a href="/posts/shimonoseki-torafugu-nagato-yumoto-onsen-motonosumi-winter-guide/" class="underline hover:text-teal-700">下関トラフグ会席と長門湯本温泉・元乃隅神社冬絶景ガイド</a></li>
      <li><a href="/furusato-tax-private-villa-hanare-hideaway-stay/" class="underline hover:text-teal-700">全室離れの隠れ家おこもり宿×極上プライベートヴィラ（由布院・伊豆・定山渓）</a></li>
    </ul>
  </section>

</div>`;

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    description: '12月〜1月の黒川温泉を徹底特集！田の原川沿いに数百の竹毬灯籠が浮かぶ冬の風物詩「湯あかり」、小国杉の入湯手形で巡る個性派野天風呂、雪の阿蘇草千里ケ浜パノラマ、肥後あか牛溶岩焼きと本場特選馬刺し会席、旅館美里ほか厳選宿と冬の1泊2日モデルコース。',
    prefecture: data.prefecture,
    area: data.area,
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: ['熊本県', '黒川温泉', '湯あかり', '入湯手形', '阿蘇山', '草千里ヶ浜', 'あか牛', '冬旅行'],
    keywords: [
      '黒川温泉 湯あかり 期間 時間',
      '黒川温泉 入湯手形 露天風呂めぐり おすすめ',
      '黒川温泉 あか牛 馬刺し 宿',
      '阿蘇 冬 観光 草千里 雪景色',
      '黒川温泉 アクセス 冬 車 スタッドレス バス',
      '黒川温泉 旅館美里 宿泊記 クチコミ'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// 記事4: 富山県・宇奈月温泉（黒部峡谷雪景色＆氷見寒ブリ・紅ズワイガニ）
// ========================================================
function buildUnazukiPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('サン柳亭') || x.hotelName.includes('ホテル黒部')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 3);

  const spotOnsen = w.find(x => x.spotName === '宇奈月温泉') || w[0];
  const spotGorge = w.find(x => x.spotName === '黒部峡谷') || w[1];
  const spotHimi = w.find(x => x.spotName === '氷見漁港') || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-100/60 rounded-3xl border border-sky-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-sky-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Executive Summary</span>
      <span class="text-xs text-sky-950 font-bold">11月〜1月の宇奈月温泉・黒部峡谷雪景色と富山湾冬の味覚完全総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【総括】宇奈月温泉の冬旅：日本屈指の透明度を誇る「つべつべ美肌の湯」と、冬の王者「氷見寒ブリ」「新湊紅ズワイガニ」・雪上峡谷花火</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      富山県東部、北アルプスから流れ下る清流・黒部川の扇状地入り口に位置する宇奈月温泉。黒部峡谷の秘境への玄関口として大正時代に電源開発とともに開湯した名湯です。11月中旬の晩秋から1月にかけては、深山幽谷の黒部峡谷が目を見張る白銀の銀世界へと様変わり。日本一の透明度を誇る黒部川の上流・黒薙（くろなぎ）から引湯される弱アルカリ性単純温泉は、富山弁でスベスベを意味する「つべつべ美肌の湯」として親しまれ、湯上がりの肌をしっとりとなめらかに包み込みます。この季節の主役は、富山湾が誇る冬の二大味覚。11月下旬の「ひみ寒ぶり宣言」とともに最盛期を迎える「氷見の寒ブリ」は、脂の乗り切ったブリしゃぶや刺身で至福の甘みを堪能。さらに新湊港直送の「紅ズワイガニ」や「富山湾の白えび」が膳を埋め尽くします。1月からは峡谷に轟音と光がこだまする「宇奈月温泉冬物語・雪上花火大会」も開催され、北陸新幹線・黒部宇奈月温泉駅からアクセス抜群の至高の冬温泉リトリートを満喫できます。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-sky-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">泉質特徴</span>
        <strong class="text-sky-900 text-sm">弱アルカリ性単純温泉（つべつべ美肌湯）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-sky-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の二大味覚</span>
        <strong class="text-stone-900 text-sm">氷見寒ブリ（11〜1月）・紅ズワイガニ</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-sky-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬のイベント</span>
        <strong class="text-blue-700 text-sm">宇奈月温泉冬物語（雪上花火・1〜3月）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-sky-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">アクセス利便性</span>
        <strong class="text-sky-800 text-sm">北陸新幹線・黒部宇奈月温泉駅連絡</strong>
      </div>
    </div>
  </section>

  <!-- 1. 黒部川の清流とつべつべ美肌の湯の真髄 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-700 pb-2.5">
      ♨️ 日本屈指の透明度を誇る名湯！黒部川の清流を望む「つべつべ美肌の湯」
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      宇奈月温泉の源泉は、温泉街から約7km上流の険しい黒部峡谷の谷底にある「黒薙温泉（くろなぎおんせん）」から、独自の木管やパイプを通じて毎分約2,000リットル以上も引湯されています。湧出温度は約90度前後と高温で、自然の傾斜を利用して湯の鮮度を保ったまま温泉街の各旅館へ供給されています。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      泉質はpH8.2〜8.5の弱アルカリ性単純温泉。日本屈指の透明度を誇り、湯船の底まで青白く澄み切った清らかな湯は、無色透明で硫黄臭などの癖がありません。刺激が非常に少ないため、赤ちゃんから高齢者まで安心して長湯を楽しめます。弱アルカリ性の性質が皮膚の古い角質を優しく軟化させて落とし、炭酸水素塩成分が肌に潤いを与えるため、入浴後はまるで一皮むけたように肌がツルツルに。「つべつべの湯」という愛称の通り、冬の乾燥しがちな肌を滑らかに整えてくれます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      冬期は黒部峡谷鉄道のトロッコ電車は運行休止（冬期運休）となりますが、そのぶん温泉街は観光地の喧騒から解放され、静寂に包まれた大人のおこもり湯治場へと変わります。峡谷沿いにせり出すように作られた露天風呂からは、雪をまとった険しい岩肌と、エメラルドグリーンに輝く黒部川の清流、そして赤い「想影橋（おもかげばし）」や「山彦橋」が白銀に浮かび上がる絶景を独り占めできます。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る黒部・富山湾の冬名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 宇奈月温泉街 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotOnsen.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Unazuki_Onsen_Station_01.jpg/800px-Unazuki_Onsen_Station_01.jpg'}" alt="${spotOnsen.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-sky-100 text-sky-800 font-bold rounded">黒部峡谷の玄関口</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotOnsen.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotOnsen.extract || '富山県黒部市にある温泉。黒部川の電源開発を背景に開湯し、黒部峡谷鉄道トロッコ電車の起点としても知られる北陸屈指の名湯。'}
            </p>
          </div>
          <p class="text-[11px] text-sky-950 bg-sky-50 p-2.5 rounded-lg font-medium border border-sky-100">
            💡 駅前には湯けむりを上げる温泉噴水があり、冬期は雪灯籠やイルミネーションが美しく灯ります。
          </p>
        </div>
      </div>

      <!-- Spot 2: 黒部峡谷 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotGorge.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Kurobe_Gorge_Yamabiko_Bridge.jpg/800px-Kurobe_Gorge_Yamabiko_Bridge.jpg'}" alt="${spotGorge.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded">国指定特別天然記念物・日本三大峡谷</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotGorge.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotGorge.extract || '富山県黒部市にある黒部川の深いV字谷。日本三大渓谷・秘境の一つに数えられ、切り立った断崖とエメラルドグリーンの激流が織りなす大自然。'}
            </p>
          </div>
          <p class="text-[11px] text-blue-950 bg-blue-50 p-2.5 rounded-lg font-medium border border-blue-100">
            💡 冬は「やまびこ遊歩道」から雪化粧した旧山彦橋と峡谷の銀世界を一望。静寂な冬の渓谷美を堪能できます。
          </p>
        </div>
      </div>

      <!-- Spot 3: 氷見漁港 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotHimi.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Himi_Fishing_Port.jpg/800px-Himi_Fishing_Port.jpg'}" alt="${spotHimi.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-cyan-100 text-cyan-800 font-bold rounded">天然の生け簀・冬の富山湾</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotHimi.spotName}（富山湾の寒ブリ）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotHimi.extract || '富山湾西部に位置する富山県最大の漁港。定置網漁で知られ、冬の「ひみ寒ぶり」やシロエビ、ホタルイカなど富山湾のキトキト（新鮮）な魚介が集まる。'}
            </p>
          </div>
          <p class="text-[11px] text-cyan-950 bg-cyan-50 p-2.5 rounded-lg font-medium border border-cyan-100">
            💡 11月〜1月の富山湾は「天然の生け簀」。荒波で身の締まった寒ブリは脂乗り抜群で全国の食通を魅了します。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 冬の富山湾の王者：氷見寒ブリと紅ズワイガニ -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-700 pb-2.5">
      🐟 荒波が育む脂の乗り！「氷見の寒ブリ」しゃぶしゃぶと新湊産「紅ズワイガニ」会席
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      「天然の生け簀」と称される富山湾。晩秋から冬にかけて、北風が吹き荒れ日本海が時化ると、産卵のために南下してきた丸々と太ったブリが富山湾特有の定置網に追い込まれます。これが名高い「氷見の寒ブリ（寒鰤）」です。6kg以上、厳しい判定基準をクリアしたものだけに青い販売証明書が発行され、全国の市場で最高値を記録します。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      宇奈月温泉の料理宿で味わう寒ブリ会席は、まさに冬の贅の極みです。まずは厚切りのお造り。きめ細やかにサシが入った身は醤油を弾くほど脂が乗っており、口に入れると舌の温度で甘くとろけます。そして一番のハイライトが「ブリしゃぶ」。昆布出汁にくぐらせると、余分な脂がサッと落ちて旨味がギュッと凝縮。表面が霜降りになったブリを特製ポン酢と白髪ネギで食せば、香ばしさと奥深いコクが広がります。さらに大根に出汁がしみ込んだ「ブリ大根」、香ばしいカマ塩焼きと、一匹のブリを余すところなく堪能できます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      加えて、富山湾の深海から水揚げされる「新湊産の紅ズワイガニ」も茹でたてアツアツで姿盛り。富山湾の宝石「白えび」のかき揚げや造り、黒部名水ポークとともに、富山の豊かな地酒（銀盤、立山、幻の瀧）と合わせる晩餐は、旅の記憶に深く刻まれます。
    </p>
  </section>

  <!-- 4. 楽天トラベル厳選名宿紹介 -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-700 pb-2.5">
      🏨 楽天トラベル高評価！冬の宇奈月温泉を満喫する厳選名宿
    </h2>

    <!-- メイン宿: サン柳亭 または ホテル黒部 -->
    <div class="bg-white rounded-3xl border border-sky-200 p-6 md:p-8 shadow-sm">
      <div class="flex flex-col md:flex-row gap-6">
        <div class="md:w-1/2">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full h-64 md:h-80 object-cover rounded-2xl shadow-sm" />
          <div class="mt-3 flex items-center justify-between text-xs text-stone-500">
            <span>評価: ★${mainHotel.reviewAverage}（クチコミ ${mainHotel.reviewCount}件）</span>
            <span class="font-bold text-sky-800 text-sm">参考料金: ¥${Number(mainHotel.hotelMinCharge).toLocaleString()}〜/人</span>
          </div>
        </div>
        <div class="md:w-1/2 flex flex-col justify-between space-y-4">
          <div>
            <span class="px-2.5 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-full">峡谷一望露天・富山旬菜会席の極み</span>
            <h3 class="text-lg md:text-xl font-bold text-stone-900 mt-2">${mainHotel.hotelName}</h3>
            <p class="text-xs text-stone-500 mt-0.5">${mainHotel.address1}${mainHotel.address2} / ${mainHotel.access}</p>
            <p class="text-xs md:text-sm text-stone-700 leading-relaxed mt-3">
              黒部川の清流を眼下に望む全室リバービューの名宿。広々とした大浴場や清流露天風呂からは、雪化粧した黒部峡谷の雄大なパノラマを一望。無色透明でまろやかな「つべつべ美肌の湯」を掛け流しで堪能できます。冬の夕食には、富山湾の冬の味覚を極めた「氷見寒ブリ会席」や「紅ズワイガニ姿盛り」、名水で育まれた黒部ポークの陶板焼きが供され、料理人の技が光る繊細な味わいが旅の夜を華やかに彩ります。
            </p>
          </div>
          <div class="pt-4 border-t border-stone-100 flex items-center justify-between">
            <span class="text-xs text-stone-500">※宇奈月温泉駅より徒歩約3分（送迎あり）</span>
            <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="px-6 py-3 bg-sky-700 hover:bg-sky-800 text-white text-xs md:text-sm font-bold rounded-xl transition duration-300 shadow-sm flex items-center gap-1.5">
              <span>楽天トラベルでプラン・空室を見る</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- サブ宿3選 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${otherHotels.map((hotel, idx) => `
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs flex flex-col justify-between">
        <div>
          <img src="${hotel.hotelImageUrl}" alt="${hotel.hotelName}" class="w-full h-44 object-cover" />
          <div class="p-4 space-y-2">
            <span class="text-[10px] px-2 py-0.5 bg-stone-100 text-stone-700 font-bold rounded">厳選宿 #${idx + 2}</span>
            <h4 class="font-bold text-stone-900 text-sm">${hotel.hotelName}</h4>
            <div class="flex items-center justify-between text-xs text-stone-500">
              <span>★${hotel.reviewAverage}（${hotel.reviewCount}件）</span>
              <span class="font-bold text-sky-800">¥${Number(hotel.hotelMinCharge).toLocaleString()}〜</span>
            </div>
            <p class="text-xs text-stone-600 line-clamp-3 leading-relaxed">
              ${hotel.hotelSpecial || hotel.access || '黒部峡谷の絶景を望む老舗旅館。美肌温泉と富山湾直送の寒ブリやカニ会席が自慢の人気宿。'}
            </p>
          </div>
        </div>
        <div class="p-4 pt-0">
          <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="block w-full py-2.5 text-center bg-stone-800 hover:bg-stone-900 text-white text-xs font-bold rounded-xl transition">
            詳細・予約（楽天トラベル）
          </a>
        </div>
      </div>
      `).join('')}
    </div>
  </section>

  <!-- 5. 11月〜1月の冬旅特化！1泊2日王道モデルコース -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-700 pb-2.5">
      🗺️ 【11月〜1月】新幹線直結！黒部峡谷雪景色と富山湾キトキト魚介1泊2日モデルコース
    </h2>
    <div class="space-y-4 text-xs md:text-sm text-stone-700">
      <div class="p-4 bg-stone-50 rounded-2xl border border-stone-200">
        <strong class="text-sky-900 block text-sm mb-1">【1日目：北陸新幹線で黒部へ、峡谷雪散策と寒ブリ会席】</strong>
        <ul class="list-disc list-inside space-y-1.5 leading-relaxed text-stone-600">
          <li><strong>11:30 北陸新幹線・黒部宇奈月温泉駅に到着：</strong> 富山地方鉄道「新黒部駅」に乗り換え、約25分で「宇奈月温泉駅」へ。</li>
          <li><strong>12:30 温泉街のカフェで名水グルメ：</strong> 「黒部名水うどん」や名水仕込みのコーヒー、宇奈月地ビールを堪能。</li>
          <li><strong>14:00 やまびこ展望台＆雪の旧山彦橋散策：</strong> 静寂の黒部峡谷に架かる赤い鉄橋と雪景色のコラボレーションを鑑賞。</li>
          <li><strong>15:30 宿にチェックイン：</strong> 黒部川を望む客室へ。さっそく「つべつべ美肌の湯」露天風呂で冷えた身体を温める。</li>
          <li><strong>18:30 氷見寒ブリ＆富山湾冬の味覚会席：</strong> 寒ブリしゃぶしゃぶ、紅ズワイガニ、白えびを純米酒「立山」とともに堪能。</li>
          <li><strong>20:30 宇奈月温泉冬物語（雪上花火・1月開催時）：</strong> 峡谷の夜空を彩る大輪の花火と雪のコントラストを宿の窓や展望スペースから鑑賞。</li>
        </ul>
      </div>

      <div class="p-4 bg-stone-50 rounded-2xl border border-stone-200">
        <strong class="text-sky-900 block text-sm mb-1">【2日目：雪見朝風呂と新湊・富山駅海の幸ショッピング】</strong>
        <ul class="list-disc list-inside space-y-1.5 leading-relaxed text-stone-600">
          <li><strong>07:30 澄み切った朝の雪見露天風呂：</strong> 朝日に照らされる黒部川の清流を眺めながら至福の湯浴み。</li>
          <li><strong>08:30 朝食バイキング：</strong> ホタルイカの沖漬けや富山米コシヒカリ、手作りかまぼこなど富山の朝ごはんを堪能。</li>
          <li><strong>10:00 温泉街でお土産探し：</strong> 宇奈月名物「湯の花豆腐」や「とうふプリン」、老舗の銘菓「月世界」を購入。</li>
          <li><strong>11:30 富山地方鉄道で新黒部駅・富山駅へ：</strong> 富山湾の廻転とやま鮨で白えび・のどぐろを味わって帰路へ。</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- 6. 宇奈月温泉冬旅・よくある質問（FAQ） -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-700 pb-2.5">
      ❓ 宇奈月温泉の冬旅行でよくある質問（トロッコ運休・寒さ・アクセス）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
        <h3 class="font-bold text-stone-900 mb-1">Q1. 冬の間、黒部峡谷鉄道のトロッコ電車は乗れますか？</h3>
        <p class="text-stone-600 leading-relaxed">
          黒部峡谷鉄道トロッコ電車は豪雪地帯を走るため、例年12月1日〜翌年4月中旬まで全線冬期運休となります。ただし、冬期は観光客で混み合うことなく、静かな雪見温泉地としての上質なおこもり滞在が楽しめます。やまびこ遊歩道など温泉街周辺の散策路から雄大な峡谷の雪景色を鑑賞できます。
        </p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
        <h3 class="font-bold text-stone-900 mb-1">Q2. 北陸新幹線からのアクセスは便利ですか？車は必要ですか？</h3>
        <p class="text-stone-600 leading-relaxed">
          北陸新幹線「黒部宇奈月温泉駅」のすぐ目の前に富山地方鉄道「新黒部駅」があり、乗り換え約25分で温泉街中心の「宇奈月温泉駅」に到着します。駅から各旅館へは徒歩圏内または無料送迎があるため、雪道運転の心配なしに完全ノーマイカーで旅程を組むことが可能です。
        </p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
        <h3 class="font-bold text-stone-900 mb-1">Q3. 「氷見寒ブリ」が食べられるベストな時期はいつですか？</h3>
        <p class="text-stone-600 leading-relaxed">
          例年11月下旬〜1月下旬が最盛期です。富山湾の海水温が下がり「ひみ寒ぶり宣言」が出されるこの期間は、脂の乗りが最高潮に達します。宇奈月温泉の旅館でもこの時期限定の寒ブリ尽くしプランが多数登場します。
        </p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
        <h3 class="font-bold text-stone-900 mb-1">Q4. 冬の花火大会はいつ開催されますか？</h3>
        <p class="text-stone-600 leading-relaxed">
          「宇奈月温泉冬物語」の雪上花火大会は、例年1月上旬〜3月末までの毎週土曜日（20:30〜約10分間）に打ち上げられます。澄み切った冬空の峡谷に音が反響し、大迫力の花火を温泉街から間近に楽しめます。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. サイト内内部リンク集 -->
  <section class="my-8 p-5 bg-sky-50/80 rounded-2xl border border-sky-200">
    <h3 class="font-bold text-sm text-sky-950 mb-3">📌 合わせて読みたい富山・北陸の冬名湯＆海の幸特集</h3>
    <ul class="text-xs text-sky-900 space-y-2 list-disc list-inside">
      <li><a href="/prefectures/toyama/" class="underline font-bold hover:text-sky-700">富山県の人気温泉旅館・観光名所完全ガイド（宇奈月・氷見・富山湾・立山）</a></li>
      <li><a href="/posts/kenrokuen-yukitsuri-kanazawa-koubakogani-kaga-onsen-guide/" class="underline hover:text-sky-700">兼六園の雪吊りと金沢香箱ガニ・加賀温泉郷名宿ガイド</a></li>
      <li><a href="/furusato-tax-shinkansen-station-walk-hotspring-stay/" class="underline hover:text-sky-700">車なし・新幹線駅直結の名湯旅館ガイド（越後湯沢・熱海・加賀温泉）</a></li>
      <li><a href="/posts/tokachigawa-onsen-moor-hotspring-jewelry-ice-winter-guide/" class="underline hover:text-sky-700">十勝川温泉の奇跡のモール温泉と豊頃町ジュエリーアイスガイド</a></li>
      <li><a href="/furusato-tax-winter-crab-gourmet-luxury-stay/" class="underline hover:text-sky-700">冬の味覚の王様×活蟹尽くし極上温泉宿ガイド（タグ付き越前ガニ・松葉ガニ）</a></li>
    </ul>
  </section>

</div>`;

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    description: '11月〜1月の宇奈月温泉を徹底取材！黒部峡谷の白銀絶景と日本屈指の透明度を誇る「つべつべ美肌の湯」、富山湾の冬の王者「氷見の寒ブリ」しゃぶしゃぶ、新湊港紅ズワイガニ会席、宇奈月温泉冬物語の雪上花火、サン柳亭ほか厳選宿と冬の1泊2日モデルコース。',
    prefecture: data.prefecture,
    area: data.area,
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: ['富山県', '宇奈月温泉', '黒部峡谷', '氷見寒ブリ', '紅ズワイガニ', '美肌の湯', '冬花火', '冬旅行'],
    keywords: [
      '宇奈月温泉 寒ブリ 料理 旅館 おすすめ',
      '宇奈月温泉 つべつべ 美肌の湯 宿泊記',
      '黒部峡谷 冬 雪景色 観光',
      '富山 宇奈月温泉 サン柳亭 クチコミ',
      '宇奈月温泉冬物語 花火 日程',
      '新幹線 黒部宇奈月温泉 アクセス 冬'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// 記事5: 静岡県・熱海温泉（冬海上花火大会＆日本一早咲きの熱海梅園・金目鯛）
// ========================================================
function buildAtamiPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('昭和倶楽部') || x.hotelName.includes('三平荘') || x.hotelName.includes('サンミ倶楽部')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 3);

  const spotOnsen = w.find(x => x.spotName === '熱海温泉') || w[0];
  const spotBai = w.find(x => x.spotName === '熱海梅園') || w[1];
  const spotKinomiya = w.find(x => x.spotName.includes('来宮神社') || x.spotName.includes('神社')) || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-rose-50 via-pink-50 to-amber-100/60 rounded-3xl border border-rose-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-rose-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Executive Summary</span>
      <span class="text-xs text-rose-950 font-bold">11月〜1月の熱海温泉・冬海上花火と早咲き熱海梅園・相模湾金目鯛完全総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【総括】熱海温泉の冬旅：空気が澄み渡る12月冬海上花火大会と1月開幕「日本一早咲きの梅」、オーシャン露天と金目鯛姿煮</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      静岡県伊豆半島の玄関口に位置し、徳川家康をはじめ歴代の名将や文豪が愛した日本屈指の名湯・熱海温泉。冬の熱海は、都心から新幹線でわずか約35〜45分という圧倒的アクセスを誇りながら、温暖な海洋性気候に恵まれ、寒さを避けて快適にリゾートステイを楽しめる「冬の特等席」です。11月下旬の熱海梅園もみじ狩りから始まり、12月にはすり鉢状の熱海湾に重低音が轟く名物「冬の熱海海上花火大会」が澄み切った夜空を彩ります。さらに年が明けた1月上旬からは、樹齢100年を超える名木が咲き誇る「熱海梅園梅まつり」が開幕し、日本で最も早い春の訪れを満喫できます。湧出量毎分約17,000リットルを誇る弱アルカリ性ナトリウム・カルシウム-塩化物泉は抜群の保温力を誇り、相模湾を一望する絶景インフィニティ露天風呂や老舗料亭宿の風情が旅情を深めます。相模灘の冬の恵み「金目鯛の姿煮」「活伊勢海老のお造り」、樹齢2100年の御神木が鎮座する「来宮神社」での新春開運祈願とともに、冬の熱海温泉で贅沢な休日が叶います。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-rose-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の二大絶景</span>
        <strong class="text-rose-900 text-sm">12月冬海上花火＆1月熱海梅園早咲き梅</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-rose-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">泉質・保温効果</span>
        <strong class="text-stone-900 text-sm">塩化物・硫酸塩泉（湯冷めしない美肌湯）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-rose-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">開運パワースポット</span>
        <strong class="text-emerald-700 text-sm">来宮神社（樹齢2100年大楠）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-rose-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の海の幸</span>
        <strong class="text-rose-800 text-sm">金目鯛姿煮・活伊勢海老・アジたたき</strong>
      </div>
    </div>
  </section>

  <!-- 1. 熱海温泉の歴史と塩化物泉の温もり -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2.5">
      ♨️ 家康も愛した徳川将軍御用達の湯！冷え知らずの「塩化物泉」と波音パノラマ露天風呂
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      熱海温泉の歴史は古く、奈良時代の開湯と伝えられます。江戸時代には徳川家康が熱海に湯治に訪れ、その効能の高さに感激した家康が江戸城まで温泉を運ばせた「御汲湯（おくみゆ）」の故事は広く知られています。熱海七湯をはじめとする豊富な源泉は今なお健在で、市内各所からもうもうと立ち上る湯煙が温泉情緒を漂わせています。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      熱海の主たる泉質は、ナトリウム・カルシウム-塩化物温泉、および硫酸塩温泉です。弱アルカリ性の湯触りはさらりとして肌馴染みが良く、主成分である塩分（塩化ナトリウム）が入浴後の肌に薄いベールを作って水分の蒸発を防ぎます。そのため「熱の湯」とも呼ばれ、入浴後も身体の芯までポカポカとした温もりが何時間も持続し、冷え性の改善や疲労回復に抜群の効果を発揮します。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      熱海の温泉宿が誇るもう一つの魅力が、相模湾の水平線を一望する絶景ロケーションです。海沿いの宿では、朝日が昇る水平線と茜色に染まる海原を望むインフィニティ露天風呂、山の手の閑静な高台に佇む隠れ家旅館では、数寄屋造りの客室露天風呂や手入れの行き届いた日本庭園を眺めながら優雅な湯浴みを楽しめます。冬の澄み切った大気のもと、夜には熱海市街地の煌めく夜景と遠く初島・大島の灯台の光を眺めながら湯に浸かる贅沢は格別です。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る熱海の冬名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 熱海温泉街・相模湾 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotOnsen.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Atami_Sun_Beach_and_Hotels_20170423.jpg/800px-Atami_Sun_Beach_and_Hotels_20170423.jpg'}" alt="${spotOnsen.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-rose-100 text-rose-800 font-bold rounded">徳川将軍御用達の名湯</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotOnsen.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotOnsen.extract || '静岡県熱海市にある名湯。相模灘に面した温暖な温泉リゾートで、古くから多くの文化人や文豪に愛された。東京駅から新幹線で最短約35分の抜群のアクセス。'}
            </p>
          </div>
          <p class="text-[11px] text-rose-950 bg-rose-50 p-2.5 rounded-lg font-medium border border-rose-100">
            💡 サンビーチ周辺は夜間ライトアップされ、冬の澄んだ空気の中でヤシの木と青い光の幻想的な散策を楽しめます。
          </p>
        </div>
      </div>

      <!-- Spot 2: 熱海梅園 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotBai.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Atami_Bai-en_Japanese_Apricot_Garden.jpg/800px-Atami_Bai-en_Japanese_Apricot_Garden.jpg'}" alt="${spotBai.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-pink-100 text-pink-800 font-bold rounded">日本一早咲きの梅・日本一遅い紅葉</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotBai.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotBai.extract || '静岡県熱海市にある市営の名庭園。明治19年に開園し、60品種・469本もの梅が植えられている。11月下旬の紅葉まつりと1月上旬からの梅まつりで知られる。'}
            </p>
          </div>
          <p class="text-[11px] text-pink-950 bg-pink-50 p-2.5 rounded-lg font-medium border border-pink-100">
            💡 11月中旬〜12月上旬は遅い紅葉、1月上旬〜3月上旬は早咲き梅と、冬の間に二つの絶景を堪能できます。
          </p>
        </div>
      </div>

      <!-- Spot 3: 来宮神社 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotKinomiya.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Kinomiya_Shrine_Okusu_Atami_20170423.jpg/800px-Kinomiya_Shrine_Okusu_Atami_20170423.jpg'}" alt="${spotKinomiya.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">国指定天然記念物・樹齢2100年の大楠</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotKinomiya.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotKinomiya.extract || '熱海市西山町にある由緒正しい神社。本殿奥に鎮座する御神木の大楠は幹周り約24m、樹齢2100年を超え、幹を1周すると寿命が1年延びると伝わる。'}
            </p>
          </div>
          <p class="text-[11px] text-emerald-950 bg-emerald-50 p-2.5 rounded-lg font-medium border border-emerald-100">
            💡 境内にはおしゃれなオープンカフェや竹林があり、夜間は杜の草木がライトアップされる人気の新春初詣スポットです。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 冬の相模灘の美食：金目鯛姿煮と伊勢海老 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2.5">
      🐟 秘伝のタレが染み渡る！「金目鯛の姿煮」と甘み弾ける活伊勢海老の極上会席
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      熱海温泉の夕食における不動の主役は、相模湾から伊豆近海で獲れる「地金目鯛（じきんめだい）」です。冬は産卵を前に脂がたっぷりと乗り、身の甘みと旨味が最高潮に達します。名門旅館の板前が代々受け継ぐ秘伝の濃厚な甘辛タレで、丸ごと一匹煮崩れせずに照りよく炊き上げた「金目鯛の姿煮」は、皮目の芳醇な脂とふっくら柔らかな白身のコントラストが絶品。濃厚な煮汁をご飯にかけていただく「煮汁かけご飯」は、熱海ならではの至福の郷土の味です。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      さらに冬の祝宴を盛り上げるのが、近海で水揚げされる「活伊勢海老のお造り」。ピクピクと動く鮮度抜群の身は、透き通るような弾力と噛むほどに広がる濃厚な甘みが格別。翌朝の朝食には、伊勢海老の頭から濃厚な味噌と出汁を引き出した「伊勢海老の味噌汁」が供され、五臓六腑に染み渡る贅沢を堪能できます。静岡が誇る銘酒「磯自慢」や「初亀」、静岡割り（緑茶割り）とともに、冬の海の恵みを余すところなく味わえます。
    </p>
  </section>

  <!-- 4. 楽天トラベル厳選名宿紹介 -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2.5">
      🏨 楽天トラベル高評価！冬の熱海温泉を満喫する厳選名宿
    </h2>

    <!-- メイン宿: 昭和倶楽部 または 三平荘 -->
    <div class="bg-white rounded-3xl border border-rose-200 p-6 md:p-8 shadow-sm">
      <div class="flex flex-col md:flex-row gap-6">
        <div class="md:w-1/2">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full h-64 md:h-80 object-cover rounded-2xl shadow-sm" />
          <div class="mt-3 flex items-center justify-between text-xs text-stone-500">
            <span>評価: ★${mainHotel.reviewAverage}（クチコミ ${mainHotel.reviewCount}件）</span>
            <span class="font-bold text-rose-800 text-sm">参考料金: ¥${Number(mainHotel.hotelMinCharge).toLocaleString()}〜/人</span>
          </div>
        </div>
        <div class="md:w-1/2 flex flex-col justify-between space-y-4">
          <div>
            <span class="px-2.5 py-1 bg-rose-100 text-rose-800 text-xs font-bold rounded-full">高台から熱海街並みを一望・数寄屋の粋</span>
            <h3 class="text-lg md:text-xl font-bold text-stone-900 mt-2">${mainHotel.hotelName}</h3>
            <p class="text-xs text-stone-500 mt-0.5">${mainHotel.address1}${mainHotel.address2} / ${mainHotel.access}</p>
            <p class="text-xs md:text-sm text-stone-700 leading-relaxed mt-3">
              熱海の閑静な高台に佇む、大人の隠れ家料亭旅館。檜の香る大浴場や客室からは熱海の街並みと相模湾のパノラマを一望。冬海上花火大会の開催日には、混雑を避けて優雅に夜空を彩る大輪の花火を鑑賞できます。塩化物泉の源泉は湯冷めしにくく肌に優しい極上の泉質。夕食には相模湾の地金目鯛姿煮をはじめ、料理長が腕によりをかけた月替わりの本格会席料理が部屋食または個室で振る舞われ、静寂の中で上質な寛ぎを堪能できます。
            </p>
          </div>
          <div class="pt-4 border-t border-stone-100 flex items-center justify-between">
            <span class="text-xs text-stone-500">※熱海駅よりタクシー約7分・無料送迎相談可</span>
            <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="px-6 py-3 bg-rose-700 hover:bg-rose-800 text-white text-xs md:text-sm font-bold rounded-xl transition duration-300 shadow-sm flex items-center gap-1.5">
              <span>楽天トラベルでプラン・空室を見る</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- サブ宿3選 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${otherHotels.map((hotel, idx) => `
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs flex flex-col justify-between">
        <div>
          <img src="${hotel.hotelImageUrl}" alt="${hotel.hotelName}" class="w-full h-44 object-cover" />
          <div class="p-4 space-y-2">
            <span class="text-[10px] px-2 py-0.5 bg-stone-100 text-stone-700 font-bold rounded">厳選宿 #${idx + 2}</span>
            <h4 class="font-bold text-stone-900 text-sm">${hotel.hotelName}</h4>
            <div class="flex items-center justify-between text-xs text-stone-500">
              <span>★${hotel.reviewAverage}（${hotel.reviewCount}件）</span>
              <span class="font-bold text-rose-800">¥${Number(hotel.hotelMinCharge).toLocaleString()}〜</span>
            </div>
            <p class="text-xs text-stone-600 line-clamp-3 leading-relaxed">
              ${hotel.hotelSpecial || hotel.access || '熱海温泉の中心地やオーシャンフロントに位置する人気宿。冬の温泉露天風呂と海の幸バイキング・会席が充実。'}
            </p>
          </div>
        </div>
        <div class="p-4 pt-0">
          <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="block w-full py-2.5 text-center bg-stone-800 hover:bg-stone-900 text-white text-xs font-bold rounded-xl transition">
            詳細・予約（楽天トラベル）
          </a>
        </div>
      </div>
      `).join('')}
    </div>
  </section>

  <!-- 5. 11月〜1月の冬旅特化！1泊2日王道モデルコース -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2.5">
      🗺️ 【11月〜1月】新幹線で手軽に行く！冬花火＆早咲き梅と開運神社1泊2日モデルコース
    </h2>
    <div class="space-y-4 text-xs md:text-sm text-stone-700">
      <div class="p-4 bg-stone-50 rounded-2xl border border-stone-200">
        <strong class="text-rose-900 block text-sm mb-1">【1日目：熱海駅前商店街食べ歩き、来宮神社参拝と冬花火鑑賞】</strong>
        <ul class="list-disc list-inside space-y-1.5 leading-relaxed text-stone-600">
          <li><strong>11:00 新幹線で熱海駅に到着：</strong> 東京駅から約40分。駅前の「平和通り商店街」「仲見世商店街」へ。</li>
          <li><strong>11:30 商店街食べ歩きランチ：</strong> 揚げたて熱海温泉まんじゅう、金目鯛バーガー、熱海プリンなど人気スイーツを堪能。</li>
          <li><strong>13:30 来宮神社で開運祈願：</strong> 樹齢2100年の大楠の幹を一周して無病息災・延命長寿を祈願。境内カフェで落ち葉アートを鑑賞。</li>
          <li><strong>15:30 宿にチェックイン：</strong> 相模湾を望む温泉露天風呂へ。塩化物泉の温もりで移動の疲れを癒やす。</li>
          <li><strong>18:00 金目鯛姿煮＆海の幸会席：</strong> 秘伝のタレでふっくら煮付けた地金目鯛と活伊勢海老のお造りに舌鼓。</li>
          <li><strong>20:20 冬の熱海海上花火大会（12月開催日）：</strong> すり鉢状の地形に反響する大音響と、フィナーレの大空中ナイアガラを観賞。</li>
        </ul>
      </div>

      <div class="p-4 bg-stone-50 rounded-2xl border border-stone-200">
        <strong class="text-rose-900 block text-sm mb-1">【2日目：熱海梅園の早咲き梅観賞とMOA美術館アート巡り】</strong>
        <ul class="list-disc list-inside space-y-1.5 leading-relaxed text-stone-600">
          <li><strong>08:00 朝のオーシャンビュー朝風呂：</strong> 朝日に輝く相模湾を眺めながら入浴。伊勢海老の味噌汁で元気をチャージ。</li>
          <li><strong>09:30 熱海梅園へ：</strong> 1月上旬開幕の梅まつりへ。日本一早咲きの白梅・紅梅の芳しい香りに包まれ足湯でひと息。</li>
          <li><strong>11:30 MOA美術館へ：</strong> 高台から相模灘を見渡す美術館。国宝「紅白梅図屏風」など名宝と円形万華鏡プロジェクションを見学。</li>
          <li><strong>14:00 熱海駅でお土産購入：</strong> 創業大正の名店「徳造丸」で金目鯛煮付けパックや干物を買い求め、新幹線で帰路へ。</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- 6. 熱海温泉冬旅・よくある質問（FAQ） -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2.5">
      ❓ 熱海温泉の冬旅行でよくある質問（花火日程・梅の開花・雪の心配）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
        <h3 class="font-bold text-stone-900 mb-1">Q1. 冬の熱海海上花火大会はいつ開催されますか？観覧のコツは？</h3>
        <p class="text-stone-600 leading-relaxed">
          熱海海上花火大会は年間を通じて開催されており、冬期は例年12月上旬〜中旬に数回開催されます（20:20〜20:40の約20分間）。熱海湾は三方を山に囲まれたすり鉢状の地形のため、スタジアムのような反響音が響き渡る大迫力が魅力です。サンビーチ沿いの親水公園から観覧するか、客室や屋上から花火が見える宿泊プランを選ぶと混雑を避けて快適に楽しめます。
        </p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
        <h3 class="font-bold text-stone-900 mb-1">Q2. 熱海梅園の梅はいつから咲きますか？紅葉も見られますか？</h3>
        <p class="text-stone-600 leading-relaxed">
          熱海梅園の梅は「日本一早咲き」として知られ、例年11月下旬〜12月に早咲きの品種が開花し始め、1月上旬〜3月上旬に「熱海梅園梅まつり」が開催されます。また、11月下旬〜12月上旬は園内のイロハモミジが色づく「もみじまつり（日本一遅い紅葉）」が開催されるため、時期によっては紅葉と早咲きの梅を同時に楽しむことができます。
        </p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
        <h3 class="font-bold text-stone-900 mb-1">Q3. 冬の熱海は雪が降りますか？ノーマルタイヤでも大丈夫ですか？</h3>
        <p class="text-stone-600 leading-relaxed">
          熱海市街地や海岸沿いは温暖な海洋性気候のため、真冬でも平地で雪が積もることは極めて稀です。沿岸部へのアクセスであれば基本的にノーマルタイヤで問題ありません。ただし、十国峠や箱根方面、伊豆スカイラインなどの山道を経由する場合は降雪や路面凍結の恐れがあるため、冬用タイヤまたは海岸沿いのルート（西湘バイパス・真鶴道路）の利用を推奨します。
        </p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
        <h3 class="font-bold text-stone-900 mb-1">Q4. 新幹線でのアクセス所要時間と料金はどれくらいですか？</h3>
        <p class="text-stone-600 leading-relaxed">
          東海道新幹線「こだま」または「ひかり」を利用した場合、東京駅から熱海駅まではわずか約35〜45分、品川駅から約30〜40分、新横浜駅から約25分です。片道自由席特急料金込みで約3,740円（東京発）と手軽で、首都圏からの週末温泉旅行に圧倒的な人気を誇ります。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. サイト内内部リンク集 -->
  <section class="my-8 p-5 bg-rose-50/80 rounded-2xl border border-rose-200">
    <h3 class="font-bold text-sm text-rose-950 mb-3">📌 合わせて読みたい静岡・伊豆の冬名湯＆オーシャンビュー特集</h3>
    <ul class="text-xs text-rose-900 space-y-2 list-disc list-inside">
      <li><a href="/prefectures/shizuoka/" class="underline font-bold hover:text-rose-700">静岡県の人気温泉旅館・観光名所完全ガイド（熱海・伊東・下田・修善寺）</a></li>
      <li><a href="/posts/shimoda-tsumekizaki-narcissus-kinmedai-winter-onsen-guide/" class="underline hover:text-rose-700">下田・爪木崎水仙まつりと金目鯛会席・南伊豆温泉ガイド</a></li>
      <li><a href="/furusato-tax-infinity-onsen-sky-ocean-view-stay/" class="underline hover:text-rose-700">絶景インフィニティ温泉×海空一体パノラマ露天宿（熱海・南紀白浜・指宿）</a></li>
      <li><a href="/posts/minakami-onsen-tanigawadake-snow-river-roten-guide/" class="underline hover:text-rose-700">水上温泉郷の谷川岳冠雪パノラマと利根川渓谷雪見露天風呂ガイド</a></li>
      <li><a href="/posts/nanki-katsuura-onsen-tuna-bokido-kumano-nachi-winter-guide/" class="underline hover:text-rose-700">南紀勝浦温泉の冬本番生マグロ会席と洞窟露天風呂・忘帰洞ガイド</a></li>
    </ul>
  </section>

</div>`;

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    description: '11月〜1月の熱海温泉を徹底ガイド！冬の澄んだ夜空に響く「冬海上花火大会」、1月開幕「日本一早咲きの熱海梅園梅まつり」、樹齢2100年来宮神社の大楠、相模湾を望むオーシャンビュー塩化物泉、秘伝タレの金目鯛姿煮と活伊勢海老会席、昭和倶楽部ほか厳選宿と冬の1泊2日モデルコース。',
    prefecture: data.prefecture,
    area: data.area,
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: ['静岡県', '熱海温泉', '熱海海上花火大会', '熱海梅園', '来宮神社', '金目鯛', '伊勢海老', '冬旅行'],
    keywords: [
      '熱海温泉 おすすめ 旅館 冬 海花火',
      '熱海海上花火大会 冬 日程 宿から見える',
      '熱海梅園 梅まつり 開花時期 見頃',
      '来宮神社 パワースポット 熱海 観光',
      '熱海 温泉 金目鯛 姿煮 伊勢海老 宿',
      '熱海 温泉 昭和倶楽部 宿泊記 クチコミ'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// メイン実行部
// ========================================================
function main() {
  console.log('--- Generating 5 Independent Winter Destination Guides (Round 141) ---');

  const posts = [
    buildKinosakiPost(collectedData['theme_1_kinosaki']),
    buildHanamakiPost(collectedData['theme_2_hanamaki']),
    buildKurokawaPost(collectedData['theme_3_kurokawa']),
    buildUnazukiPost(collectedData['theme_4_unazuki']),
    buildAtamiPost(collectedData['theme_5_atami'])
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
