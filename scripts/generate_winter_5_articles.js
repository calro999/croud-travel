const fs = require('fs');
const path = require('path');

const collectedData = require('../scratch/winter_5_new_collected_data.json');

// HTMLタグを除去した文字数を正確にカウントする関数
function countTextLength(html) {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, '')
    .trim().length;
}

// 記事1: 蔵王温泉
function buildZaoPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelNo === 40164 || x.hotelName.includes('わかまつや')) || h[3] || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 3);

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 rounded-3xl border border-sky-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-sky-700 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Answer</span>
      <span class="text-xs text-sky-900 font-bold">12月〜1月の蔵王温泉・樹氷（スノーモンスター）旅行総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【結論】蔵王の樹氷ライトアップと名湯硫黄泉：白銀の世界を五感で味わう究極の冬旅</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      山形県と宮城県の境にそびえる蔵王連峰。標高1,600m超の山頂線では、日本海からの湿った季節風とシベリア寒気団が生み出す世界的奇観「樹氷（スノーモンスター）」が姿を現します。鑑賞のベストシーズンは12月下旬から2月にかけて。蔵王ロープウェイ山頂線から見下ろす白銀の原生林と、夕暮れから始まる幻想的な樹氷ライトアップは、一生に一度は見たい冬の絶景です。散策後は開湯1900年の歴史を誇る「蔵王温泉」へ。pH1.5前後の強酸性白濁硫黄泉が冷えた体を芯から温め、皮膚をなめらかに整える美肌の湯としても名高く、山形牛のすき焼き会席とともに極上の冬籠りを約束します。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-sky-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">樹氷見頃・ライトアップ</span>
        <strong class="text-sky-800 text-sm">12月下旬〜2月下旬</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-sky-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">温泉泉質</span>
        <strong class="text-stone-900 text-sm">酸性・含硫黄-硫酸塩・塩化物泉</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-sky-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">山頂気温と装備</span>
        <strong class="text-red-700 text-sm">氷点下10℃〜15℃（極寒防寒必須）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-sky-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の必食ご当地美味</span>
        <strong class="text-amber-700 text-sm">山形牛すき焼き＆玉こんにゃく</strong>
      </div>
    </div>
  </section>

  <!-- 1. 蔵王連峰が魅せる冬の奇跡 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-600 pb-2.5">
      ❄️ 蔵王連峰のアオモリトドマツが創り出す「スノーモンスター」の誕生秘話と見どころ
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      世界中を探しても、ドイツのシュヴァルツヴァルトや北米の一部などごく限られた豪雪地帯にしか出現しない自然の彫刻「樹氷」。蔵王の樹氷は、日本海を渡る対馬暖流から蒸発した水蒸気が過冷却水滴となり、シベリア高気圧から吹き付ける強烈な北西季節風に乗ってアオモリトドマツの葉や枝に衝突・凍結することで形成されます。風上に向かってエビの尻尾状に成長を重ね、やがて木全体を飲み込んで巨大な雪の怪獣へと変貌を遂げます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      12月は樹氷の着氷・着雪が始まる成長期であり、針葉樹の輪郭を残しながら白く覆われていく造形美が見事です。1月に入ると雪が厚みを増し、いよいよ堂々たる「スノーモンスター」の威容を現します。蔵王ロープウェイに乗車し、山麓線から山頂線へと乗り継ぐにつれて、眼下に広がる広葉樹林の樹氷から針葉樹林の巨大モンスター群へと車窓の景色が一変する瞬間は圧巻のひと言です。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      夜間には特殊な照明で照らし出される「樹氷ライトアップ」が開催されます。暗闇の雪原に浮かび上がるカクテル光線と、氷点下の澄み切った大気にきらめく満天の冬星。暖房付きの雪上車「ナイトクルーザー号」に乗って巡るナイトツアーも運行されており、日中とはまったく異なる幻想的な静寂に浸ることができます。
    </p>
  </section>

  <!-- 2. Wikipedia 観光スポット実写ギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-600 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る蔵王の自然美・名所ガイド（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 蔵王温泉 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${w[0].image || 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/220430_ZaoOnsen_Yamagata_Yamagata_pref_Japan24s3.jpg/3840px-220430_ZaoOnsen_Yamagata_Yamagata_pref_Japan24s3.jpg'}" alt="蔵王温泉の街並み" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-sky-100 text-sky-800 font-bold rounded">奥羽三高湯の名湯</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">蔵王温泉（高湯）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${w[0].extract}
            </p>
          </div>
          <p class="text-[11px] text-sky-900 bg-sky-50 p-2.5 rounded-lg font-medium border border-sky-100">
            💡 温泉街には「上湯」「下湯」「川原湯」の3つの共同浴場が点在。木造建築の湯小屋で足元から湧き出る源泉に浸かる湯めぐりが格別です。
          </p>
        </div>
      </div>

      <!-- Spot 2: 蔵王連峰 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${w[1].image || 'https://upload.wikimedia.org/wikipedia/commons/5/5e/ShigaYokote.jpg'}" alt="蔵王連峰の雄姿" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded">雄大なる連峰</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">蔵王連峰（主峰熊野岳）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${w[1].extract}
            </p>
          </div>
          <p class="text-[11px] text-sky-900 bg-sky-50 p-2.5 rounded-lg font-medium border border-sky-100">
            💡 山頂付近の地蔵山頂駅には高さ約2.34mの「蔵王地蔵尊」が鎮座。雪の深さにより冬は肩まで埋まる姿が冬の風物詩となっています。
          </p>
        </div>
      </div>

      <!-- Spot 3: 御釜 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${w[2].image || 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Zao_Okama.jpg'}" alt="蔵王の御釜" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">神秘のエメラルド火口湖</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">御釜（五色沼）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${w[2].extract}
            </p>
          </div>
          <p class="text-[11px] text-sky-900 bg-sky-50 p-2.5 rounded-lg font-medium border border-sky-100">
            💡 冬期（11月上旬〜4月下旬）は蔵王エコーラインが通行止めとなりますが、冬の雪上車ツアーやガイド同行のスノーシューツアーで冠雪の御釜を望むことができます。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 開湯1900年・蔵王温泉の強酸性硫黄泉の効能 -->
  <section class="space-y-4 my-8 p-6 bg-slate-50 rounded-3xl border border-slate-200">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b border-slate-300 pb-2">
      ♨️ 国内屈指の強酸性泉！「美人づくりの湯」と呼ばれる蔵王温泉の秘密
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      蔵王温泉の湯は、白濁した硫黄の香りが立ち込める独特の泉質。湧出直後は無色透明ですが、空気に触れることで硫黄の微粒子が析出し、乳白色や青白く輝く神秘的な湯へと変化します。pH値はレモン果汁に匹敵する1.5〜2.0前後の強酸性。強力な殺菌作用と古い角質を溶かすピーリング作用があり、肌を白く滑らかにする「美人づくりの湯」として古くから親しまれてきました。
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-2">
      <div class="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
        <strong class="text-sky-900 block font-bold text-sm">血行促進＆ポカポカ持続</strong>
        <p class="text-stone-600 leading-relaxed">
          硫化水素ガス成分が毛細血管を拡張させ、体の末端まで血流を促進。氷点下の吹雪で冷え切った手足も、湯上がりに驚くほどポカポカが持続します。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
        <strong class="text-sky-900 block font-bold text-sm">美肌＆皮膚再生サポート</strong>
        <p class="text-stone-600 leading-relaxed">
          酸性の引き締め効果と豊富なメタケイ酸が皮膚のターンオーバーを促し、キメの整ったすべすべの肌へと導きます。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
        <strong class="text-sky-900 block font-bold text-sm">入浴時の注意点</strong>
        <p class="text-stone-600 leading-relaxed">
          貴金属（シルバーアクセサリー）は硫黄と反応して一瞬で黒変するため必ず外して入浴してください。酸性が強いため目に入らないようご注意ください。
        </p>
      </div>
    </div>
  </section>

  <!-- 4. 楽天トラベル厳選：樹氷観光アクセス抜群＆絶景雪見風呂の宿4選 -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-600 pb-2.5">
      🏨 楽天トラベル厳選：樹氷鑑賞に便利＆極上雪見露天の蔵王温泉名宿4選
    </h2>
    <p class="text-xs md:text-sm text-stone-600 leading-relaxed">
      樹氷ロープウェイ駅への送迎やアクセスが良く、雪景色を眺めながら自家源泉の湯浴みができる高評価宿をセレクトしました。
    </p>

    <div class="space-y-6">
      <!-- 宿1: メイン宿 -->
      <div class="p-5 md:p-6 bg-white rounded-3xl border border-sky-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full md:w-56 h-44 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-sky-700 text-white font-bold text-[10px] rounded-full">創業160年・自家源泉</span>
              <span class="text-xs text-stone-500">${mainHotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg md:text-xl leading-snug">${mainHotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${mainHotel.address1}${mainHotel.address2} ｜ ${mainHotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-sky-700 text-sm">⭐ 総合評価 ${mainHotel.reviewAverage}（クチコミ ${mainHotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${mainHotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs md:text-sm text-stone-700 bg-sky-50/70 p-4 rounded-xl border border-sky-100 leading-relaxed">
          ${mainHotel.hotelSpecial} 歌人・斎藤茂吉も逗留した由緒ある木造建築の湯宿。館内には24時間掛け流しの自家源泉「霊泉湧出の湯」が溢れ、総檜造りの湯船から静かに降り積もる雪を眺められます。夕食には山形牛の陶板焼きやすき焼き、地場産芋煮など郷土のぬくもりが詰まった会席料理が振る舞われます。
        </p>
        <div class="text-right">
          <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>

      <!-- 他の宿一覧 -->
      ${otherHotels.map((hotel, idx) => `
      <div class="p-5 bg-white rounded-3xl border border-stone-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${hotel.hotelImageUrl}" alt="${hotel.hotelName}" class="w-full md:w-56 h-40 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-stone-700 text-white font-bold text-[10px] rounded-full">厳選宿 #${idx + 2}</span>
              <span class="text-xs text-stone-500">${hotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg leading-snug">${hotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${hotel.address1}${hotel.address2} ｜ ${hotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-sky-700 text-sm">⭐ 総合評価 ${hotel.reviewAverage}（${hotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${hotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs text-stone-700 bg-stone-50 p-3.5 rounded-xl border border-stone-200 leading-relaxed">
          ${hotel.hotelSpecial} 樹氷ライトアップ鑑賞へ出かける観光拠点として極めて便利。源泉かけ流しの贅沢な雪見風呂と、山形が誇る旬の味覚を心ゆくまで堪能できる人気宿です。
        </p>
        <div class="text-right">
          <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>
      `).join('')}
    </div>
  </section>

  <!-- 5. 山形の冬グルメ深掘り -->
  <section class="space-y-4 my-8 p-6 bg-amber-50/60 rounded-3xl border border-amber-200">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b border-amber-300 pb-2">
      🥩 極上の霜降り「山形牛」とアツアツ名物「玉こんにゃく」：冬の蔵王グルメ徹底解剖
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      厳しい冬の寒暖差が育む山形牛は、きめ細やかなサシと芳醇な脂の甘みが特徴。冷え切った体で宿に戻った後、ぐつぐつと煮立つ鉄鍋から立ち上る割下の甘辛い香りは格別です。また、温泉街の石段やロープウェイ乗り場で湯気を立てる丸い玉こんにゃくは、スルメの出汁と濃口醤油が芯まで染み込み、ピリッと辛子を効かせて頬張る蔵王散策の必須アイテムです。
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
      <div class="p-4 bg-white rounded-xl border border-amber-200 space-y-1.5">
        <strong class="text-amber-900 block font-bold text-sm">極上山形牛のすき焼き・しゃぶしゃぶ</strong>
        <p class="text-stone-600 leading-relaxed">
          口に入れた瞬間にとろける極上の霜降り肉。冬のネギや地元産きのこ、山形県産つや姫の新米とともにいただく夕餉は至福のひとときです。
        </p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-amber-200 space-y-1.5">
        <strong class="text-amber-900 block font-bold text-sm">名物玉こんにゃく＆地酒巡り</strong>
        <p class="text-stone-600 leading-relaxed">
          1本100〜150円ほどで手軽に温まれる玉こん。さらに夜は山形が誇る銘酒「十四代」「出羽桜」「楯野川」など、冬の雪水で仕込まれた純米吟醸の熱燗・冷酒が合います。
        </p>
      </div>
    </div>
  </section>

  <!-- 6. 1泊2日 樹氷鑑賞＆名湯満喫モデルコース -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-sky-600 pb-2.5">
      🗺️ 樹氷ライトアップと名湯を満喫する！蔵王温泉 1泊2日王道モデルコース
    </h2>
    <div class="space-y-4 text-xs md:text-sm">
      <div class="p-4.5 bg-sky-50/60 rounded-2xl border border-sky-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-sky-800 text-white font-bold text-xs rounded-md">1日目</span>
          <strong class="text-stone-900">山形駅 ➔ 蔵王温泉街散策 ➔ 夕暮れの樹氷ライトアップ鑑賞 ➔ 宿で雪見風呂</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【12:00】山形新幹線・山形駅に到着。東口バスターミナルから山交バス「蔵王温泉行き」に乗車（所要約45分）。<br>
          【13:00】蔵王温泉バスターミナルに到着。宿に荷物を預け、温泉街の下湯共同浴場や足湯を巡り、アツアツの玉こんにゃくを味わう。<br>
          【16:00】完全防寒（スキーウェア・スノーブーツ・ネックウォーマー・カイロ）を整え、蔵王ロープウェイ山麓駅へ。<br>
          【17:00】地蔵山頂駅へ到着。夕暮れの蒼い薄明から漆黒へと移ろう中、鮮やかに照らされる樹氷群を間近で鑑賞。<br>
          【19:00】下山して旅館へチェックイン。乳白色の強酸性露天風呂で冷え切った体を芯まで温め、山形牛すき焼き会席に舌鼓。
        </p>
      </div>
      <div class="p-4.5 bg-blue-50/60 rounded-2xl border border-blue-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-blue-800 text-white font-bold text-xs rounded-md">2日目</span>
          <strong class="text-stone-900">白銀の朝風呂 ➔ 晴天の昼間スノーモンスター ➔ 山形市内へ</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【07:30】雪景色を望む露天風呂で朝湯を満喫。山形の郷土料理が並ぶ朝食でエネルギーを補給。<br>
          【09:30】晴天の青空が広がる午前中、再び山頂へ向かい青空と純白のスノーモンスターのコントラストを撮影（青空の日照時はさらに大迫力）。<br>
          【12:30】温泉街の老舗そば処で名物の「板そば」と山菜の天ぷらを堪能。<br>
          【14:30】山交バスで山形駅へ戻り、駅ビルでおみやげ（ラ・フランス銘菓、地酒、米沢牛加工品）を購入して帰路へ。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. FAQセクション -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-sky-600 pb-2.5">
      ❓ 蔵王の冬旅・樹氷鑑賞 よくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-sky-900">Q. 山頂の気温はどれくらいですか？どのような服装が必要ですか？</strong>
        <p class="text-stone-700 leading-relaxed">
          12月〜1月の樹氷原（標高1,600m以上）は、風が吹き抜けると体感温度が氷点下15℃〜20℃近くまで下がります。スキーウェアまたは厚手のダウンジャケット、防風防水パンツ、厚手の靴下、スノーブーツ（滑り止め付き）、耳当て付きニット帽、防寒手袋、ネックウォーマー、ホッカイロが必須です。肌の露出を極力減らすことが重要です。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-sky-900">Q. 車で行く場合、スタッドレスタイヤやチェーンは必要ですか？</strong>
        <p class="text-stone-700 leading-relaxed">
          冬の蔵王温泉街およびアクセス道路（西蔵王高原ライン等）は完全な積雪・凍結路面（アイスバーン）となります。4WD車＋高性能スタッドレスタイヤが必須であり、急勾配に備えてタイヤチェーンの携行が推奨されます。運転に不安がある方は、山形駅からの定期路線バスの利用を強くおすすめします。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-sky-900">Q. 樹氷ライトアップの日程や混雑状況はどうですか？</strong>
        <p class="text-stone-700 leading-relaxed">
          例年12月下旬から2月末にかけての特定日（年末年始や週末、1月下旬以降は毎夜）に開催されます。特に年末年始や土曜日の夕方（16:30〜18:00）はロープウェイ山麓駅で乗車待ちの列が発生するため、早めに山麓駅へ向かうか、防寒対策を万全にして時間に余裕を持って行動してください。
        </p>
      </div>
    </div>
  </section>

  <!-- 8. サイト内内部リンク集 -->
  <section class="my-8 p-5 bg-sky-50/80 rounded-2xl border border-sky-200">
    <h3 class="font-bold text-sm text-sky-950 mb-3">📌 合わせて読みたい山形・東北の雪見温泉・冬の旅特集</h3>
    <ul class="text-xs text-sky-900 space-y-2 list-disc list-inside">
      <li><a href="/yamagata" class="underline font-bold hover:text-sky-700">山形県の温泉旅館・観光名所完全ガイド（蔵王・銀山・かみのやま・天童）</a></li>
      <li><a href="/posts/74573" class="underline hover:text-sky-700">山形県・東北観光：名所と旬のグルメを満喫する周遊おすすめモデルコースガイド</a></li>
      <li><a href="/posts/zao-ginzan-akyu-matsushima-naruko-tohoku-onsen-guide" class="underline hover:text-sky-700">東北の名湯めぐり！蔵王・銀山・秋保・鳴子温泉の雪見露天風呂比較ガイド</a></li>
      <li><a href="/posts/snow-monkey-jigokudani-shibu-yudanaka-onsen-guide" class="underline hover:text-sky-700">冬の白銀世界！地獄谷野猿公苑スノーモンキーと渋温泉九湯めぐりガイド</a></li>
    </ul>
  </section>

</div>`;

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    description: '12月〜1月の蔵王温泉・樹氷（スノーモンスター）ライトアップを大特集！アオモリトドマツが創る神秘の氷雪アート、ロープウェイの鑑賞コツ、防寒装備、開湯1900年の強酸性白濁硫黄泉、極上山形牛すき焼きを味わう厳選名宿と1泊2日モデルプランを徹底解説。',
    prefecture: data.prefecture,
    area: data.area,
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl).filter(Boolean),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: [
      '山形県',
      '蔵王温泉',
      '樹氷',
      'スノーモンスター',
      '雪見露天風呂',
      '硫黄泉',
      '山形牛',
      '冬旅行'
    ],
    keywords: [
      '蔵王温泉 樹氷 ホテル',
      '蔵王 樹氷ライトアップ おすすめ宿',
      '蔵王温泉 露天風呂 旅館',
      'スノーモンスター 蔵王 見頃',
      '蔵王温泉 山形牛 宿泊',
      '蔵王ロープウェイ 近く 宿',
      '蔵王温泉 雪見露天 部屋食'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// 記事2: 兼六園＆加賀温泉郷
function buildKanazawaKagaPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('たわらや')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 3);

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 rounded-3xl border border-rose-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-rose-700 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Answer</span>
      <span class="text-xs text-rose-950 font-bold">11月〜1月の金沢・兼六園雪吊り＆加賀温泉郷カニ旅行総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【結論】初冬の金沢・兼六園と加賀温泉郷：雪吊りの美と香箱ガニ（せいこがに）解禁の至福</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      11月に入ると北陸・金沢は冬の装いを一気に深めます。11月1日から始まる日本三名園「兼六園」の唐崎松の雪吊り作業は、幾何学的な縄の傘が庭園に映える初冬の風物詩。そして11月6日、日本海のカニ漁が解禁されると、メスのズワイガニである「香箱ガニ（コウバコガニ）」がわずか年内〜1月上旬限定で市場に並びます。プチプチとした外子、濃厚な内子（赤こ）、そして甘い身がぎっしり詰まった香箱ガニの甲羅盛りは、この時期の北陸でしか味わえない究極の味覚。金沢から足を延ばし、開湯1300年の加賀温泉郷（山中・山代・粟津・片山津）の温泉宿に投宿し、渓流雪見露天風呂とカニ尽くし会席を堪能する旅は、大人の冬旅の最高峰です。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-rose-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">兼六園 雪吊り期間</span>
        <strong class="text-rose-800 text-sm">11月1日〜3月中旬</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-rose-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">香箱ガニ漁期</span>
        <strong class="text-red-700 text-sm">11月6日〜12月末（希少）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-rose-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">加賀温泉郷の拠点</span>
        <strong class="text-stone-900 text-sm">山中・山代・粟津・片山津</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-rose-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の2大名物</span>
        <strong class="text-amber-800 text-sm">加能ガニ＆金沢おでん</strong>
      </div>
    </div>
  </section>

  <!-- 1. 兼六園の雪吊りと北陸の美意識 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-600 pb-2.5">
      🌲 前田家加賀百万石の美意識：兼六園の雪吊りと白銀のひがし茶屋街
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      湿り気を帯びた重いボタン雪が降る北陸地方において、樹齢数百年の松の枝が雪の重みで折れるのを防ぐために考案された実用技術「雪吊り（ゆきづり）」。兼六園の唐崎松には、芯柱となる長い丸太を立て、その頭頂部から何百本もの荒縄を放射状に枝へと張り巡らせる「りんご吊り」が施されます。その優美な幾何学模様は、単なる防護策を超えて北陸の冬を象徴する造形美へと昇華されています。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      兼六園を歩いた後は、浅野川のほとりに広がる「ひがし茶屋街」へ。紅殻格子の町家が立ち並ぶ石畳の路地に雪が舞い散る光景は、まるで江戸時代の絵巻物の中に迷い込んだかのような情緒を醸し出します。軒先から漏れる温かい行灯の灯りと、格子戸の奥から微かに響く三味線の音。茶房で温かい加賀棒茶と上生菓子をいただきながら、古都の冬の静けさを味わう時間は旅人の心を解きほぐします。
    </p>
  </section>

  <!-- 2. Wikipedia 観光スポット実写ギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-600 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る金沢・加賀の名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 兼六園 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${w[0].image || 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Kenrokuen_Yukitsuri.jpg/1280px-Kenrokuen_Yukitsuri.jpg'}" alt="兼六園の雪吊り" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-rose-100 text-rose-800 font-bold rounded">日本三名園</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">兼六園</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${w[0].extract}
            </p>
          </div>
          <p class="text-[11px] text-rose-900 bg-rose-50 p-2.5 rounded-lg font-medium border border-rose-100">
            💡 徽軫灯籠（ことじとうろう）と霞ヶ池、唐崎松が一直線に収まる撮影ポイントは、雪が降った早朝の開園直後（早朝無料開放あり）が最も静寂で神秘的です。
          </p>
        </div>
      </div>

      <!-- Spot 2: ひがし茶屋街 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${w[1].image || 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Higashichaya.jpg/1280px-Higashichaya.jpg'}" alt="ひがし茶屋街の街並み" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded">重要伝統的建造物群保存地区</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">ひがし茶屋街（東山ひがし）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${w[1].extract}
            </p>
          </div>
          <p class="text-[11px] text-rose-900 bg-rose-50 p-2.5 rounded-lg font-medium border border-rose-100">
            💡 金箔工芸の体験工房や、金箔ソフトクリーム、老舗料亭が点在。夕暮れどきに街灯が点灯すると、石畳に光が反射して格別の風情が漂います。
          </p>
        </div>
      </div>

      <!-- Spot 3: 山中温泉 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${w[2].image || 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Yamanaka_Onsen.jpg/1280px-Yamanaka_Onsen.jpg'}" alt="山中温泉の風景" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">芭蕉ゆかりの渓谷名湯</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">山中温泉・鶴仙渓</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${w[2].extract}
            </p>
          </div>
          <p class="text-[11px] text-rose-900 bg-rose-50 p-2.5 rounded-lg font-medium border border-rose-100">
            💡 松尾芭蕉が有馬・草津と並び「扶桑三名湯」と称えた名湯。鶴仙渓のあやとり橋やこおろぎ橋に雪が積もる渓谷美を露天風呂から眺める贅沢は格別です。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 冬の味覚の女王：香箱ガニと加能ガニの解剖 -->
  <section class="space-y-4 my-8 p-6 bg-rose-50/70 rounded-3xl border border-rose-200">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b border-rose-300 pb-2">
      🦀 11月6日解禁！なぜ石川の「香箱ガニ（せいこがに）」は美食家を虜にするのか
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      オスのズワイガニ「加能ガニ（青タグ）」が太い脚肉の豪快な甘みを誇るのに対し、メスの「香箱ガニ」は資源保護のため漁期が11月6日から12月29日頃までの約2ヶ月間と極めて短く、地元・北陸の食通が待ち焦がれる真の冬の味覚です。小ぶりな甲羅の中に、他のカニでは決して味わえない3つの宝が凝縮されています。
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-2">
      <div class="p-3.5 bg-white rounded-xl border border-rose-200 space-y-1">
        <strong class="text-rose-900 block font-bold text-sm">内子（うちこ・赤こ）</strong>
        <p class="text-stone-600 leading-relaxed">
          甲羅の内部にある未成熟卵。鮮やかな朱色をしており、チーズのように濃厚で奥深い旨味とコクが口いっぱいに広がります。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-rose-200 space-y-1">
        <strong class="text-rose-900 block font-bold text-sm">外子（そとこ）</strong>
        <p class="text-stone-600 leading-relaxed">
          腹部に抱えられた成熟卵。プチプチとした心地よい歯ごたえと爽やかな磯の香りがクセになる絶品珍味です。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-rose-200 space-y-1">
        <strong class="text-rose-900 block font-bold text-sm">甲羅盛り「面寿し（カニ面）」</strong>
        <p class="text-stone-600 leading-relaxed">
          職人が手作業で脚肉、カニ味噌、内子、外子を甲羅に美しく詰め戻した芸術品。金沢おでんの出汁を含ませて食べる「カニ面」も名物です。
        </p>
      </div>
    </div>
  </section>

  <!-- 4. 楽天トラベル厳選：加賀温泉郷のカニ会席＆名湯宿4選 -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-600 pb-2.5">
      🏨 楽天トラベル厳選：本場活カニ会席と雪見名湯を誇る加賀温泉郷の名宿4選
    </h2>
    <p class="text-xs md:text-sm text-stone-600 leading-relaxed">
      金沢駅から特急や北陸新幹線で約20〜30分。鶴仙渓の絶景や開湯千数百年の歴史ある温泉街で、カニ料理と良泉を心ゆくまで堪能できる宿を厳選しました。
    </p>

    <div class="space-y-6">
      <!-- 宿1: メイン宿 -->
      <div class="p-5 md:p-6 bg-white rounded-3xl border border-rose-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full md:w-56 h-44 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-rose-700 text-white font-bold text-[10px] rounded-full">創業800年・鶴仙渓畔</span>
              <span class="text-xs text-stone-500">${mainHotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg md:text-xl leading-snug">${mainHotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${mainHotel.address1}${mainHotel.address2} ｜ ${mainHotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-rose-700 text-sm">⭐ 総合評価 ${mainHotel.reviewAverage}（クチコミ ${mainHotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${mainHotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs md:text-sm text-stone-700 bg-rose-50/70 p-4 rounded-xl border border-rose-100 leading-relaxed">
          ${mainHotel.hotelSpecial} 鎌倉時代創業、鶴仙渓の景勝地に佇む老舗温泉旅館。渓流のせせらぎと白銀の渓谷美を間近に臨む大浴場・露天風呂は風情満点。冬期には日本海から直送される香箱ガニやズワイガニの甲羅焼き、カニ刺し、加賀野菜を取り入れた伝統の会席料理がテーブルを華やかに彩ります。
        </p>
        <div class="text-right">
          <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-rose-600 to-amber-600 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>

      <!-- 他の宿一覧 -->
      ${otherHotels.map((hotel, idx) => `
      <div class="p-5 bg-white rounded-3xl border border-stone-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${hotel.hotelImageUrl}" alt="${hotel.hotelName}" class="w-full md:w-56 h-40 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-stone-700 text-white font-bold text-[10px] rounded-full">厳選宿 #${idx + 2}</span>
              <span class="text-xs text-stone-500">${hotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg leading-snug">${hotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${hotel.address1}${hotel.address2} ｜ ${hotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-rose-700 text-sm">⭐ 総合評価 ${hotel.reviewAverage}（${hotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${hotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs text-stone-700 bg-stone-50 p-3.5 rounded-xl border border-stone-200 leading-relaxed">
          ${hotel.hotelSpecial} 加賀温泉郷を代表する高評価リゾート＆温泉旅館。広々とした大浴場や露天風呂、旬の北陸の海の幸をふんだんに使った贅沢な和食会席で上質な休日を過ごせます。
        </p>
        <div class="text-right">
          <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-rose-600 to-amber-600 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>
      `).join('')}
    </div>
  </section>

  <!-- 5. 1泊2日 金沢美景＆加賀温泉カニ尽くしモデルコース -->
  <section class="space-y-4 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-600 pb-2.5">
      🗺️ 雪吊りと香箱ガニを巡る！金沢・加賀温泉郷 1泊2日贅沢モデルコース
    </h2>
    <div class="space-y-4 text-xs md:text-sm">
      <div class="p-4.5 bg-rose-50/60 rounded-2xl border border-rose-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-rose-800 text-white font-bold text-xs rounded-md">1日目</span>
          <strong class="text-stone-900">金沢駅 ➔ 近江町市場で海鮮ランチ ➔ 兼六園雪吊り ➔ 加賀温泉郷へ</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【11:00】北陸新幹線で金沢駅（鼓門）に到着。路線バスで「近江町市場」へ向かい、冬限定の香箱ガニ丼や旬ののどぐろ炙り丼を味わう。<br>
          【13:30】「兼六園」へ移動。霞ヶ池の湖畔から唐崎松の雪吊りと徽軫灯籠をじっくり鑑賞。隣接する金沢城公園の石垣雪景色も散策。<br>
          【15:30】「ひがし茶屋街」の石畳を歩き、老舗茶房で加賀棒茶のスイーツで一服。<br>
          【16:45】金沢駅から北陸新幹線または特急で加賀温泉駅へ（約20分）。旅館の送迎バスで山中温泉または山代温泉の宿へチェックイン。<br>
          【19:00】鶴仙渓や庭園の雪景色を望む露天風呂で温まり、香箱ガニや加能ガニの姿盛りを含む豪華カニ会席に舌鼓。
        </p>
      </div>
      <div class="p-4.5 bg-amber-50/60 rounded-2xl border border-amber-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-amber-800 text-white font-bold text-xs rounded-md">2日目</span>
          <strong class="text-stone-900">鶴仙渓雪見散歩 ➔ 山中漆器・九谷焼窯元めぐり ➔ 金沢駅で銘菓選び</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【08:00】温泉街の澄んだ空気の中、鶴仙渓の「あやとり橋」「こおろぎ橋」周辺の白銀遊歩道を朝の散策。<br>
          【10:30】山中温泉「ゆげ街道」で温泉たまごや揚げたてコロッケを頬張り、伝統の山中漆器や九谷焼のギャラリーでお気に入りの器を探す。<br>
          【13:00】地元の手打ち蕎麦処で加賀名物の鴨南蛮そばを味わう。<br>
          【15:00】加賀温泉駅から金沢駅へ戻り、金沢百番街「あんと」で加賀銘菓（きんつば、柴舟、生麩）や地酒「菊姫」「手取川」を購入して帰路へ。
        </p>
      </div>
    </div>
  </section>

  <!-- 6. FAQセクション -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-rose-600 pb-2.5">
      ❓ 金沢・加賀の冬旅 よくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-rose-900">Q. 香箱ガニが食べられる時期はいつからいつまでですか？</strong>
        <p class="text-stone-700 leading-relaxed">
          香箱ガニの漁期は法律により毎年11月6日から12月末まで（年内いっぱい）と厳格に定められています。1月上旬〜中旬頃までは生簀や冷凍保存のものが提供される場合もありますが、獲れたての生の茹でたて香箱ガニを堪能するなら11月中旬から12月下旬までの宿泊がベストです。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-rose-900">Q. 金沢や加賀の冬の天候と靴の選び方は？</strong>
        <p class="text-stone-700 leading-relaxed">
          北陸の冬は「弁当忘れても傘忘れるな」と言われるほど雨やみぞれ、雪が変わりやすく降ります。道路には消雪パイプから水が出ている箇所が多いため、スニーカーや革靴は濡れてしまいます。防水加工が施された防滑仕様のスノーブーツやレインブーツの着用を強くおすすめします。折りたたみ傘も必携です。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-rose-900">Q. 加賀温泉郷の各温泉（山中・山代・粟津・片山津）の違いは何ですか？</strong>
        <p class="text-stone-700 leading-relaxed">
          山中温泉は鶴仙渓の自然と漆器文化、山代温泉は赤瓦の総湯を中心とする歴史と九谷焼、粟津温泉は開湯1300年の自家源泉と静寂、片山津温泉は柴山潟の湖畔に広がる開放感と塩分を含む温まりの湯が特徴です。カニ料理や雪見露天の風情に合わせてお好みの温泉街をお選びいただけます。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. サイト内内部リンク集 -->
  <section class="my-8 p-5 bg-rose-50/80 rounded-2xl border border-rose-200">
    <h3 class="font-bold text-sm text-rose-950 mb-3">📌 合わせて読みたい石川・北陸の温泉＆美食特集</h3>
    <ul class="text-xs text-rose-900 space-y-2 list-disc list-inside">
      <li><a href="/ishikawa" class="underline font-bold hover:text-rose-700">石川県の温泉旅館・観光名所完全ガイド（金沢・加賀温泉郷・能登）</a></li>
      <li><a href="/posts/noto-pokemon-travel-guide" class="underline hover:text-rose-700">能登半島・応援観光ガイド：和倉温泉・能登の美食を味わう復興応援の旅</a></li>
      <li><a href="/posts/larc-link-location-travel-guide" class="underline hover:text-rose-700">山代温泉・加賀名湯旅館の宿泊ルポ＆客室・露天風呂比較ガイド</a></li>
      <li><a href="/posts/ise-jingu-newyear-hatsumode-toba-onsen-ise-ebi-guide" class="underline hover:text-rose-700">冬の味覚対決！伊勢神宮初詣＆鳥羽温泉郷の活伊勢海老・的矢牡蠣ガイド</a></li>
    </ul>
  </section>

</div>`;

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    description: '11月〜1月の金沢・兼六園雪吊りと加賀温泉郷を大特集！11月解禁の冬の味覚の女王「香箱ガニ（せいこがに）」の甲羅盛り、ひがし茶屋街の雪景色、山中・山代・片山津温泉の渓流雪見露天風呂、極上カニ会席宿と大人の1泊2日モデルプランを徹底解説。',
    prefecture: data.prefecture,
    area: data.area,
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl).filter(Boolean),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: [
      '石川県',
      '兼六園',
      '金沢',
      '加賀温泉郷',
      '山中温泉',
      '香箱ガニ',
      '加能ガニ',
      '雪吊り'
    ],
    keywords: [
      '兼六園 雪吊り 宿泊',
      '香箱ガニ 加賀温泉 旅館',
      '金沢 カニ 温泉 おすすめ宿',
      '山中温泉 露天風呂 カニ会席',
      '加賀温泉郷 カニ 食べ放題',
      'ひがし茶屋街 ホテル',
      '兼六園 近く 高級旅館'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// 記事3: 草津温泉
function buildKusatsuPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('ベルクラント')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 3);

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl border border-teal-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-teal-700 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Answer</span>
      <span class="text-xs text-teal-950 font-bold">11月〜1月の草津温泉・冬の湯畑ライトアップ旅行総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【結論】天下の名湯・草津温泉の真冬：湯畑の立ち上る湯けむりと日本一の湧出量を肌で感じる旅</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      日本三名泉の筆頭、毎分32,300リットル以上という日本一の自然湧出量を誇る群馬県「草津温泉」。標高1,200mに位置する草津の真価が発揮されるのは、外気温が氷点下へと冷え込む11月〜1月です。中央の「湯畑」からは真っ白な湯けむりが轟音とともに夜空へ立ち上り、イルミネーションとエメラルドグリーンの源泉池が幻想的な光景を創り出します。広大な日本屈指の露天風呂「西の河原露天風呂」で粉雪が舞う中の雪見風呂を楽しみ、熱乃湯の伝統的な「湯もみ」を見学した後は、草津温泉街の宿で上州牛のすき焼き会席と強酸性の源泉かけ流しに包まれる至福の時間をお過ごしください。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-teal-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">自然湧出量</span>
        <strong class="text-teal-800 text-sm">毎分32,300L超（日本一）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-teal-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">泉質・pH値</span>
        <strong class="text-stone-900 text-sm">酸性・含硫黄泉（pH約2.1）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-teal-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の気候・標高</span>
        <strong class="text-blue-700 text-sm">標高1,200m（氷点下・積雪あり）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-teal-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の必食ご当地美味</span>
        <strong class="text-amber-700 text-sm">上州牛すき焼き＆温泉まんじゅう</strong>
      </div>
    </div>
  </section>

  <!-- 1. 氷点下の湯畑と熱気あふれる湯けむり -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-600 pb-2.5">
      ♨️ 氷点下に立ち上る圧倒的湯けむり：湯畑ライティングと西の河原公園の雪景色
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      草津温泉街の中心に位置する「湯畑」。周囲を囲む歩道に立つと、毎分4,000リットルもの熱湯が轟音を立てて湧き出し、7本の木樋を通って湯滝へと流れ落ちる大迫力の光景が広がります。冬の気温が氷点下に達すると、源泉の温度（約55℃〜60℃）と外気温の劇的な差により、猛烈な湯煙が雲海のように温泉街を包み込みます。日暮れとともに木樋や湯滝がライトアップされると、ブルーやエメラルド、紫の光に染まった蒸気が夜空へ昇り、息を呑むほど幽玄な世界が現れます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      湯畑から西へ徒歩約10分の「西の河原（さいのかわら）公園」は、あちこちの岩場から毎分15,000リットルもの温泉が湧き出し、湯の川となって流れる奇勝地。冬には周囲の松林に純白の雪が積もり、雪と蒸気とエメラルドの湯溜まりが織りなす水墨画のような景観を楽しめます。公園の最奥にある「西の河原露天風呂」は、男女合わせて総面積500平方メートルという日本屈指の巨大露天風呂。360度の大自然に囲まれ、頭上を舞う粉雪を受けながら入る雪見風呂は、旅のハイライトにふさわしい爽快感です。
    </p>
  </section>

  <!-- 2. Wikipedia 観光スポット実写ギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-600 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る草津の名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 草津温泉 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${w[0].image || 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Kusatsu_Onsen_Yubatake.jpg/1280px-Kusatsu_Onsen_Yubatake.jpg'}" alt="草津温泉の風景" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-teal-100 text-teal-800 font-bold rounded">天下の名湯</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">草津温泉</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${w[0].extract}
            </p>
          </div>
          <p class="text-[11px] text-teal-900 bg-teal-50 p-2.5 rounded-lg font-medium border border-teal-100">
            💡 温泉街には「白旗の湯」「千代の湯」「地蔵の湯」など無料の共同浴場もあり、古くからの時間湯文化や地元の人情に触れられます。
          </p>
        </div>
      </div>

      <!-- Spot 2: 湯畑 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${w[1].image || 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Yubatake_Kusatsu.jpg/1280px-Yubatake_Kusatsu.jpg'}" alt="草津温泉の湯畑" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">草津のシンボル</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">湯畑（ゆばたけ）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${w[1].extract}
            </p>
          </div>
          <p class="text-[11px] text-teal-900 bg-teal-50 p-2.5 rounded-lg font-medium border border-teal-100">
            💡 湯畑の周囲には瓦を敷き詰めた歩道「湯畑まえ広場」や足湯「湯けむり亭」があり、手足を温めながらの散策が楽しめます。
          </p>
        </div>
      </div>

      <!-- Spot 3: 草津白根山 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${w[2].image || 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Mount_Kusatsu-Shirane.jpg/1280px-Mount_Kusatsu-Shirane.jpg'}" alt="草津白根山" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded">上信越高原の霊峰</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">草津白根山</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${w[2].extract}
            </p>
          </div>
          <p class="text-[11px] text-teal-900 bg-teal-50 p-2.5 rounded-lg font-medium border border-teal-100">
            💡 白根山の麓に広がる草津温泉スキー場はパウダースノーで名高く、スキーやスノーボードを楽しんだ後に直行する温泉浴が最高の贅沢です。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 草津の6大源泉と強酸性の効能 -->
  <section class="space-y-4 my-8 p-6 bg-teal-50/60 rounded-3xl border border-teal-200">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b border-teal-300 pb-2">
      💧 「恋の病以外なら何でも治る」草津の主要源泉と効能の魅力
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      草津温泉には主に「湯畑源泉」「白旗源泉」「万代鉱源泉」「西の河原源泉」「地蔵源泉」「煮川源泉」という主要な6つの源泉が存在します。いずれもpH1.6〜2.1という極めて高い酸性度を誇り、雑菌を一瞬で死滅させるほどの強力な殺菌力を持っています。水で薄めることなく温度を下げる伝統の「湯もみ」によって、源泉100%の濃厚な泉効をそのまま体感できます。
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-2">
      <div class="p-3.5 bg-white rounded-xl border border-teal-200 space-y-1">
        <strong class="text-teal-900 block font-bold text-sm">万代鉱（ばんだいこう）源泉</strong>
        <p class="text-stone-600 leading-relaxed">
          湧出量最大を誇る源泉。pH約1.6の超強酸性でピリッとした刺激的な肌触りと、体の芯まで一気に温める力強さが特徴です。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-teal-200 space-y-1">
        <strong class="text-teal-900 block font-bold text-sm">湯畑（ゆばたけ）源泉</strong>
        <p class="text-stone-600 leading-relaxed">
          硫黄分を多く含み、ほのかに白濁する柔らかな肌触り。美肌効果や神経痛、疲労回復に優れた草津の代表格です。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-teal-200 space-y-1">
        <strong class="text-teal-900 block font-bold text-sm">白旗（しらはた）源泉</strong>
        <p class="text-stone-600 leading-relaxed">
          源頼朝が発見したと伝わる白濁の名湯。まろやかな湯触りと濃厚な湯の花が舞う、温泉通憧れの源泉です。
        </p>
      </div>
    </div>
  </section>

  <!-- 4. 楽天トラベル厳選：湯畑徒歩圏＆名湯風呂自慢の草津名宿4選 -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-600 pb-2.5">
      🏨 楽天トラベル厳選：湯畑散策に便利＆極上かけ流しを愉しむ草津の宿4選
    </h2>
    <p class="text-xs md:text-sm text-stone-600 leading-relaxed">
      湯畑周辺の夜間散策を存分に楽しめ、貸切風呂や料理自慢でクチコミ評価の高い名宿をピックアップしました。
    </p>

    <div class="space-y-6">
      <!-- 宿1: メイン宿 -->
      <div class="p-5 md:p-6 bg-white rounded-3xl border border-teal-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full md:w-56 h-44 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-teal-700 text-white font-bold text-[10px] rounded-full">高評価★4.69・静寂の隠れ宿</span>
              <span class="text-xs text-stone-500">${mainHotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg md:text-xl leading-snug">${mainHotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${mainHotel.address1}${mainHotel.address2} ｜ ${mainHotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-teal-700 text-sm">⭐ 総合評価 ${mainHotel.reviewAverage}（クチコミ ${mainHotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${mainHotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs md:text-sm text-stone-700 bg-teal-50/70 p-4 rounded-xl border border-teal-100 leading-relaxed">
          ${mainHotel.hotelSpecial} 草津温泉の良質な天然温泉を貸切風呂で満喫できる評判の隠れ家ペンション。オーナーシェフが腕を振るう欧風創作ディナーは、上州牛や地場産高原野菜を贅沢に使用しリピーターから絶大な支持を得ています。アットホームなもてなしと清潔感あふれる客室で心温まる冬の滞在が叶います。
        </p>
        <div class="text-right">
          <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-700 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>

      <!-- 他の宿一覧 -->
      ${otherHotels.map((hotel, idx) => `
      <div class="p-5 bg-white rounded-3xl border border-stone-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${hotel.hotelImageUrl}" alt="${hotel.hotelName}" class="w-full md:w-56 h-40 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-stone-700 text-white font-bold text-[10px] rounded-full">厳選宿 #${idx + 2}</span>
              <span class="text-xs text-stone-500">${hotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg leading-snug">${hotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${hotel.address1}${hotel.address2} ｜ ${hotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-teal-700 text-sm">⭐ 総合評価 ${hotel.reviewAverage}（${hotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${hotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs text-stone-700 bg-stone-50 p-3.5 rounded-xl border border-stone-200 leading-relaxed">
          ${hotel.hotelSpecial} 草津の源泉をそのまま掛け流す贅沢な内湯・貸切風呂を完備。湯畑へのアクセスも良く、夜の温泉街散策やグルメ巡りの拠点として抜群のロケーションです。
        </p>
        <div class="text-right">
          <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-700 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>
      `).join('')}
    </div>
  </section>

  <!-- 5. 草津温泉の冬グルメ・食べ歩き -->
  <section class="space-y-4 my-8 p-6 bg-amber-50/60 rounded-3xl border border-amber-200">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b border-amber-300 pb-2">
      🥩 極上上州牛と湯けむり食べ歩き：冬の草津で外せない美食グルメ
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      群馬県が誇る黒毛和牛「上州牛」は、赤身の豊かな旨味と上質なサシのバランスが絶妙。すき焼き鍋で煮込むと、特製割下に肉の旨味が溶け出し、寒さで冷えた体を芯から温めてくれます。さらに、湯畑周辺には蒸したての温泉まんじゅうを配る名物店や、焼きたての焼き鳥、地ビール「草津温泉麦酒」を味わえるお店が立ち並び、浴衣に丹前を羽織ったそぞろ歩きが最高に盛り上がります。
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
      <div class="p-4 bg-white rounded-xl border border-amber-200 space-y-1.5">
        <strong class="text-amber-900 block font-bold text-sm">上州牛のすき焼き＆ステーキ会席</strong>
        <p class="text-stone-600 leading-relaxed">
          草津温泉の夜は上州牛料理が定番。群馬特産のこんにゃくや下仁田ネギとともに煮込むすき焼きは、甘辛い風味が肉の柔らかさを引き立てます。
        </p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-amber-200 space-y-1.5">
        <strong class="text-amber-900 block font-bold text-sm">蒸したて温泉まんじゅう＆花いんげん甘納豆</strong>
        <p class="text-stone-600 leading-relaxed">
          湯気が立ち上る蒸籠から手渡されるアツアツの温泉まんじゅう。標高1,000m以上の高原でしか実を結ばない大粒の「花いんげん豆」の甘納豆もお土産に大人気です。
        </p>
      </div>
    </div>
  </section>

  <!-- 6. 1泊2日 草津名湯制覇モデルコース -->
  <section class="space-y-4 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-600 pb-2.5">
      🗺️ 湯畑・西の河原・湯もみを巡る！草津温泉 1泊2日湯治＆散策モデルコース
    </h2>
    <div class="space-y-4 text-xs md:text-sm">
      <div class="p-4.5 bg-teal-50/60 rounded-2xl border border-teal-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-teal-800 text-white font-bold text-xs rounded-md">1日目</span>
          <strong class="text-stone-900">草津バスターミナル ➔ 湯畑 ➔ 熱乃湯「湯もみ見学」 ➔ 夜の湯畑ライトアップ</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【12:30】JR吾妻線・長野原草津口駅からJRバスで草津温泉バスターミナルへ到着（約25分）。<br>
          【13:00】温泉街の中心「湯畑」へ。木樋を流れる圧倒的な湯量と硫黄の香りに圧倒される。<br>
          【14:00】湯畑前の「熱乃湯」で名物「湯もみと踊りショー」を鑑賞。迫力ある湯もみ体験に参加。<br>
          【15:30】宿へチェックイン。まずは宿自慢の源泉かけ流し風呂で旅の疲れを癒やす。<br>
          【18:00】群馬の美味が詰まった上州牛ディナーを堪能。<br>
          【20:00】浴衣に防寒着を着込んで夜の湯畑へ。幻想的なイルミネーションと湯けむりのコラボレーションを満喫。
        </p>
      </div>
      <div class="p-4.5 bg-emerald-50/60 rounded-2xl border border-emerald-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-emerald-800 text-white font-bold text-xs rounded-md">2日目</span>
          <strong class="text-stone-900">西の河原公園雪見散策 ➔ 大露天風呂 ➔ 地蔵の湯 ➔ 帰路へ</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【08:00】朝風呂と和朝食をゆっくり楽しんだ後、宿をチェックアウト。<br>
          【09:30】「西の河原公園」へ向かい、湯の川と雪景色を散策。奥にある「西の河原露天風呂」で粉雪が舞う大自然パノラマ雪見露天を体験。<br>
          【11:30】再整備された「地蔵地区」を訪れ、百年石別邸やカフェで足湯に浸かりながらコーヒーブレイク。<br>
          【13:00】名物の手打ちうどん・おっきりこみで温まり、温泉まんじゅうをお土産に購入してバスターミナルから帰路へ。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. FAQセクション -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-teal-600 pb-2.5">
      ❓ 草津温泉の冬旅行 よくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-teal-900">Q. 冬の草津温泉へのアクセス方法でおすすめは？</strong>
        <p class="text-stone-700 leading-relaxed">
          冬期の草津温泉（標高1,200m）は道路が激しく凍結するため、自家用車の場合はスタッドレスタイヤ必須です。雪道運転に慣れていない場合は、東京（新宿・東京駅）からの直行高速バス「上州ゆめぐり号」またはJR特急「草津・四万号」（上野〜長野原草津口）＋路線バスの利用が最も安全で快適です。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-teal-900">Q. 酸性が強い温泉ですが、肌が弱い人でも入れますか？</strong>
        <p class="text-stone-700 leading-relaxed">
          草津温泉の湯はpH約2.0前後の強酸性です。肌がデリケートな方や傷口がある場合はピリピリとしみる場合があります。入浴後はシャワーの上がり湯で軽く洗い流すか、刺激が比較的穏やかな「地蔵源泉」や「西の河原源泉」の宿を選ぶのがおすすめです。長時間の長湯は避け、こまめに休憩を挟みましょう。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-teal-900">Q. 湯畑ライトアップは何時まで点灯していますか？</strong>
        <p class="text-stone-700 leading-relaxed">
          湯畑のライトアップは日没から毎日24時（深夜0時）まで点灯しています。夕食後の散策はもちろん、深夜の静まり返った幻想的な時間帯の散策も素晴らしい雰囲気です。ただし夜間は氷点下5℃〜10℃近くまで冷え込むため、ダウンコートや手袋など万全の防寒対策でお出かけください。
        </p>
      </div>
    </div>
  </section>

  <!-- 8. サイト内内部リンク集 -->
  <section class="my-8 p-5 bg-teal-50/80 rounded-2xl border border-teal-200">
    <h3 class="font-bold text-sm text-teal-950 mb-3">📌 合わせて読みたい群馬・関東の温泉名宿特集</h3>
    <ul class="text-xs text-teal-900 space-y-2 list-disc list-inside">
      <li><a href="/gunma" class="underline font-bold hover:text-teal-700">群馬県の温泉旅館・観光名所完全ガイド（草津・伊香保・四万・みなかみ）</a></li>
      <li><a href="/posts/16110" class="underline hover:text-teal-700">亀の井ホテル草津リゾート（草津温泉）の宿泊ルポ＆見どころガイド</a></li>
      <li><a href="/posts/manza-onsen-highest-sulfur-springs-guide" class="underline hover:text-teal-700">標高1800mの白濁極上雪見露天！万座温泉名湯ガイド</a></li>
      <li><a href="/posts/yunishigawa-onsen-kamakura-festival-snow-heike-guide" class="underline hover:text-teal-700">栃木・湯西川温泉かまくら祭＆平家落人の隠れ里雪見露天ガイド</a></li>
    </ul>
  </section>

</div>`;

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    description: '11月〜1月の草津温泉・冬の湯畑ライトアップを大特集！氷点下に立ち上る猛烈な湯けむり、西の河原公園の日本屈指の雪見露天風呂、熱乃湯の湯もみ体験、強酸性源泉かけ流しの名宿と上州牛会席、1泊2日モデルプランを徹底解説。',
    prefecture: data.prefecture,
    area: data.area,
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl).filter(Boolean),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: [
      '群馬県',
      '草津温泉',
      '湯畑',
      '雪見露天風呂',
      '西の河原公園',
      '上州牛',
      '温泉街散策',
      '天下の名湯'
    ],
    keywords: [
      '草津温泉 湯畑ライトアップ ホテル',
      '草津温泉 冬 おすすめ旅館',
      '草津温泉 雪見露天 宿泊',
      '西の河原露天風呂 近く 宿',
      '草津温泉 上州牛 会席プラン',
      '草津 貸切風呂 源泉かけ流し',
      '草津温泉 カップル 冬旅行'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// 記事4: 貴船神社＆奥京都
function buildKifuneKyotoPost(data) {
  const w = data.wikiSpotsData;
  // 京都府の宿を厳選
  const kyotoHotels = [
    {
      hotelNo: 14751,
      hotelName: "大原温泉湯元　旬味草菜　お宿　芹生",
      hotelImageUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/14751/14751.jpg",
      reviewCount: 312,
      reviewAverage: 4.78,
      hotelMinCharge: 38582,
      address1: "京都府",
      address2: "京都市左京区大原勝林院町22",
      access: "京都駅より京都バス大原行で約60分（大原バス停より徒歩約10分／送迎有）",
      hotelSpecial: "ミシュラン掲載の料理旅館。三千院門前に佇み、美しい日本庭園と自家源泉の温泉露天風呂、極上の草菜会席・ぼたん鍋を堪能。",
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/14751/14751.html"
    },
    {
      hotelNo: 7247,
      hotelName: "京都大原の民宿～１００年続く希少味噌～大原温泉　大原の里",
      hotelImageUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/7247/7247.jpg",
      reviewCount: 448,
      reviewAverage: 4.17,
      hotelMinCharge: 8800,
      address1: "京都府",
      address2: "京都市左京区大原草生町41",
      access: "ＪＲ京都駅より京都バス大原行き終点（大原）下車、徒歩約１２分",
      hotelSpecial: "名物「味噌鍋（雲井鍋）」と露天風呂。100年樽で仕込む無添加味噌と新鮮な猪肉、大原の地場産冬野菜が織りなす絶品の滋味。",
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/7247/7247.html"
    },
    {
      hotelNo: 29774,
      hotelName: "京都北白川天然ラジウム温泉　えいせん京",
      hotelImageUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/29774/29774.jpg",
      reviewCount: 201,
      reviewAverage: 4.88,
      hotelMinCharge: 35300,
      address1: "京都府",
      address2: "京都市左京区北白川地蔵谷町1-125",
      access: "京阪出町柳駅より市バス乗車「北白川仕伏町」下車、送迎車あり。名神京都東ICより車約25分",
      hotelSpecial: "比叡山の懐に湧く国内有数の奇跡の高濃度天然ラジウム温泉。全室離れ感覚の静寂と、旬の京料理・特選牛会席で心身を浄化する極上の隠れ宿。",
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/29774/29774.html"
    },
    {
      hotelNo: 69279,
      hotelName: "京都　嵐山温泉　花伝抄（共立リゾート）",
      hotelImageUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/69279/69279.jpg",
      reviewCount: 2150,
      reviewAverage: 4.46,
      hotelMinCharge: 18100,
      address1: "京都府",
      address2: "京都市西京区嵐山西一ノ井町5-4",
      access: "阪急嵐山駅徒歩1分／JR嵯峨嵐山駅徒歩約15分。名神高速京都南ICより車で約40分",
      hotelSpecial: "全館畳敷きの和の温もり。大浴場と5つの趣異なる無料貸切風呂、京都の四季を映す贅沢な会席料理と天ぷら・おばんざいオーダービュッフェ。",
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A//travel.rakuten.co.jp/HOTEL/69279/69279.html"
    }
  ];

  const mainHotel = kyotoHotels[0];
  const otherHotels = kyotoHotels.slice(1);

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-stone-100 via-amber-50 to-orange-50 rounded-3xl border border-amber-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-amber-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Answer</span>
      <span class="text-xs text-amber-950 font-bold">12月〜1月の京都・貴船神社積雪ライトアップ＆冬の奥座敷総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【結論】雪の京都が生み出す奇跡の絶景「貴船神社の積雪日限定ライトアップ」と名物ぼたん鍋</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      冬の京都で最も息を呑む絶景として旅人を魅了するのが、洛北・貴船に佇む「貴船神社」の積雪日限定ライトアップです。朱塗りの春日灯篭が連なる石段参道に純白の雪が降り積もり、夕闇の中で灯火に照らし出される光景は、まさに「雪の氣生根（きふね）」と讃えられる幽玄の極致。開催されるのは12月下旬〜2月のうち「適度な積雪があった日」の夕方のみという幻のイベントです。参拝後は、すぐ近くの料理旅館や大原温泉の湯宿へ。冷えた体を芯から温める冬の京都名物「本場ぼたん鍋（猪肉の味噌仕立て）」と、雪見の天然温泉露天風呂に浸かり、大人の静寂に満ちた古都の冬籠りをご堪能ください。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">積雪ライトアップ</span>
        <strong class="text-red-700 text-sm">積雪日のみ当日15時公式発表</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">見頃・積雪時期</span>
        <strong class="text-amber-900 text-sm">12月下旬〜2月中旬（寒波襲来時）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">洛北の冬の気温</span>
        <strong class="text-blue-800 text-sm">京都市街地より3〜5℃低い</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の至高の味覚</span>
        <strong class="text-stone-900 text-sm">本場ぼたん鍋＆蕪蒸し</strong>
      </div>
    </div>
  </section>

  <!-- 1. 貴船神社の幻のライトアップ -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      ⛩️ 朱塗りの灯篭と純白の雪：貴船神社「積雪日限定ライトアップ」の魅力と鑑賞の心得
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      古くから雨乞い・雨止みの神、そして「氣が生ずる根源の地」として信仰を集めてきた貴船神社。夏は貴船川の川床で賑わいますが、冬の訪れとともに静寂の聖域へと姿を変えます。特に冬型の気圧配置が強まり、洛北の山々に雪が降り積もった夜、貴船神社では「積雪日限定ライトアップ」が開催されます。本宮へと続く87段の石段の両脇に並ぶ春日灯篭に温かな橙色の光が灯り、石段の純白の雪と鮮やかな朱色、そして背後の杉木立の影が重なり合う光景は、絵画を超えた神聖さを漂わせます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      このライトアップの最大の特徴は「事前に日程が決まっていない」こと。開催当日の午後3時に神社公式SNS（X/Twitter等）で開催の可否が発表されるため、まさに偶然居合わせた旅人だけが出会える一期一会の奇跡です。石段は滑りやすくなるためスノーブーツが必須ですが、凍てつく冷気の中で手を合わせる「水占みくじ」や、奥宮へ続く杉木立の雪景色は、一生の思い出として心に刻まれます。
    </p>
  </section>

  <!-- 2. Wikipedia 観光スポット実写ギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る洛北・奥京都の名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 貴船神社 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${w[0].image || 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Kifune_Shrine.jpg/1280px-Kifune_Shrine.jpg'}" alt="貴船神社の石段参道" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded">水の神・氣生根</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">貴船神社（本宮・結社・奥宮）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${w[0].extract}
            </p>
          </div>
          <p class="text-[11px] text-amber-900 bg-amber-50 p-2.5 rounded-lg font-medium border border-amber-100">
            💡 本宮の御神水に浮かべると文字が浮き出る「水占みくじ」は冬も大人気。縁結びの神として名高い中宮「結社」への参拝も欠かせません。
          </p>
        </div>
      </div>

      <!-- Spot 2: 鞍馬寺 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${w[1].image || 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Kurama-dera.jpg/1280px-Kurama-dera.jpg'}" alt="鞍馬寺の霊峰" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-red-100 text-red-800 font-bold rounded">天狗伝説と宇宙のエネルギー</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">鞍馬寺（金剛床）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${w[1].extract}
            </p>
          </div>
          <p class="text-[11px] text-amber-900 bg-amber-50 p-2.5 rounded-lg font-medium border border-amber-100">
            💡 貴船神社から木の根道を通って鞍馬寺へ抜ける峠道は冬期スノーハイクとしても知られます（積雪時は叡山電鉄利用が安心です）。
          </p>
        </div>
      </div>

      <!-- Spot 3: 三千院 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${w[2].image || 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Sanzen-in.jpg/1280px-Sanzen-in.jpg'}" alt="大原三千院の雪景色" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">洛北大原の名刹</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">三千院（有清園）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${w[2].extract}
            </p>
          </div>
          <p class="text-[11px] text-amber-900 bg-amber-50 p-2.5 rounded-lg font-medium border border-amber-100">
            💡 杉木立と青苔が雪に覆われる「有清園」の冬景色。雪の帽子をかぶった「わらべ地蔵」の愛らしい姿に心癒やされます。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 冬の京都の極み：本場ぼたん鍋の魅力 -->
  <section class="space-y-4 my-8 p-6 bg-amber-50/70 rounded-3xl border border-amber-200">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b border-amber-300 pb-2">
      🐗 丹波・洛北の冬の醍醐味：大原・貴船で味わう「本場ぼたん鍋」の深み
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      京都の冬の鍋料理といえば、牡丹の花のように美しく盛り付けられた「ぼたん鍋（猪鍋）」。秋のドングリや栗をたっぷり食べて冬眠に備えた天然猪の肉は、牛や豚よりも脂身が白く澄んでおり、臭みが一切なく噛むほどに芳醇な甘みが溢れ出します。煮込めば煮込むほど肉質が柔らかくなるのも猪肉ならではの特長。老舗味噌蔵の自家製ブレンド味噌と、京都特産の聖護院大根、九条ネギ、壬生菜が絡み合う熱々の鍋は、冬の京都旅行のハイライトです。
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
      <div class="p-4 bg-white rounded-xl border border-amber-200 space-y-1.5">
        <strong class="text-amber-900 block font-bold text-sm">特製ブレンド味噌と上質な脂身</strong>
        <p class="text-stone-600 leading-relaxed">
          八丁味噌や白味噌を絶妙に合わせた出汁でじっくり煮込むことで、猪肉のコラーゲンが溶け出しスープにとろみとコクが加わります。粉山椒を少し振っていただくのが京都流。
        </p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-amber-200 space-y-1.5">
        <strong class="text-amber-900 block font-bold text-sm">冬の京野菜と締めのおじや・うどん</strong>
        <p class="text-stone-600 leading-relaxed">
          霜が降りて甘みを凝縮させた九条ネギと京豆腐が味噌出汁をたっぷり吸い込みます。締めには旨味が凝縮されたスープにご飯と卵を落とす雑炊が格別の味わいです。
        </p>
      </div>
    </div>
  </section>

  <!-- 4. 楽天トラベル厳選：洛北・奥京都の温泉＆料理宿4選 -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      🏨 楽天トラベル厳選：貴船参拝に便利＆絶品ぼたん鍋と名湯を誇る大人の宿4選
    </h2>
    <p class="text-xs md:text-sm text-stone-600 leading-relaxed">
      貴船神社や大原三千院へのアクセスが良く、静寂な大自然の中で天然温泉と極上の冬会席を堪能できる宿を厳選しました。
    </p>

    <div class="space-y-6">
      <!-- 宿1: メイン宿 -->
      <div class="p-5 md:p-6 bg-white rounded-3xl border border-amber-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full md:w-56 h-44 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-amber-800 text-white font-bold text-[10px] rounded-full">ミシュラン掲載・三千院門前</span>
              <span class="text-xs text-stone-500">${mainHotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg md:text-xl leading-snug">${mainHotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${mainHotel.address1}${mainHotel.address2} ｜ ${mainHotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-amber-800 text-sm">⭐ 総合評価 ${mainHotel.reviewAverage}（クチコミ ${mainHotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${mainHotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs md:text-sm text-stone-700 bg-amber-50/70 p-4 rounded-xl border border-amber-100 leading-relaxed">
          ${mainHotel.hotelSpecial} 三千院のすぐ隣に佇む数寄屋造りの名旅館。美しく手入れされた日本庭園を望む客室と、大原温泉の自家源泉を引いた庭園露天風呂が自慢。冬には極上の天然猪肉を使用したぼたん鍋や、京野菜を取り入れた繊細な会席料理が振る舞われ、静寂に包まれた極上の大人の京都時間を過ごせます。
        </p>
        <div class="text-right">
          <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-amber-700 to-orange-700 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>

      <!-- 他の宿一覧 -->
      ${otherHotels.map((hotel, idx) => `
      <div class="p-5 bg-white rounded-3xl border border-stone-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${hotel.hotelImageUrl}" alt="${hotel.hotelName}" class="w-full md:w-56 h-40 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-stone-700 text-white font-bold text-[10px] rounded-full">厳選宿 #${idx + 2}</span>
              <span class="text-xs text-stone-500">${hotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg leading-snug">${hotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${hotel.address1}${hotel.address2} ｜ ${hotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-amber-800 text-sm">⭐ 総合評価 ${hotel.reviewAverage}（${hotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${hotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs text-stone-700 bg-stone-50 p-3.5 rounded-xl border border-stone-200 leading-relaxed">
          ${hotel.hotelSpecial} 冬の京都の自然美に抱かれた高評価宿。冷えた体を包み込む良質な温泉と、旬の食材を贅沢に使った鍋料理や京懐石で特別なひとときをお過ごしいただけます。
        </p>
        <div class="text-right">
          <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-amber-700 to-orange-700 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>
      `).join('')}
    </div>
  </section>

  <!-- 5. 1泊2日 貴船雪見参拝＆大原温泉モデルコース -->
  <section class="space-y-4 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      🗺️ 幻の雪景色と名湯に癒やされる！貴船・大原 1泊2日冬の京都モデルコース
    </h2>
    <div class="space-y-4 text-xs md:text-sm">
      <div class="p-4.5 bg-amber-50/60 rounded-2xl border border-amber-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-amber-900 text-white font-bold text-xs rounded-md">1日目</span>
          <strong class="text-stone-900">出町柳駅 ➔ 叡山電鉄で貴船口へ ➔ 貴船神社雪見参拝 ➔ 大原温泉へ投宿</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【12:00】京阪本線・叡山電鉄の出町柳駅を出発。展望列車「きらら」に乗車し、白銀の「もみじのトンネル」を抜け貴船口駅へ。<br>
          【13:00】京都バスで貴船へ。朱塗りの春日灯篭が連なる石段参道を上り「貴船神社本宮」へ参拝。水占みくじを引いて運勢を占う。<br>
          【15:00】奥宮の神秘的な静寂に触れた後、貴船口駅からバスまたはタクシーで大原温泉郷へ移動。<br>
          【16:30】大原温泉の宿へチェックイン。雪景色を望む露天風呂で冷えた手足をじんわり温める。<br>
          【18:30】自家製ブレンド味噌で煮込む名物「ぼたん鍋」と京地野菜のフルコースを堪能。
        </p>
      </div>
      <div class="p-4.5 bg-stone-100 rounded-2xl border border-stone-300 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-stone-800 text-white font-bold text-xs rounded-md">2日目</span>
          <strong class="text-stone-900">三千院の雪景色 ➔ 寂光院 ➔ 京都駅でお土産選び</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【08:30】朝風呂で目を覚まし、大原の里芋や自家製味噌汁が並ぶ和朝食。<br>
          【09:30】朝一番の静寂な「三千院」へ。有清園の雪苔とわらべ地蔵の佇まいを愛で、金色不動堂でお茶の接待を受ける。<br>
          【11:30】平家物語ゆかりの「寂光院」へ足を延ばし、歴史の哀愁漂う庭園を鑑賞。<br>
          【13:00】大原名物の「紫蘇アイス」や手作りしば漬けの老舗でお土産を購入。<br>
          【14:30】京都バスで京都駅へ直行（約60分）。新幹線改札前で八ッ橋や京漬物を買い求めて帰路へ。
        </p>
      </div>
    </div>
  </section>

  <!-- 6. FAQセクション -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      ❓ 貴船神社・冬の洛北旅行 よくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-amber-900">Q. 貴船神社の積雪ライトアップの開催日はどのように分かりますか？</strong>
        <p class="text-stone-700 leading-relaxed">
          積雪ライトアップは、例年12月下旬から2月中旬頃にかけて、境内に十分な積雪がある日の夕方（17:00頃〜20:00頃）に開催されます。開催可否は「当日の午後3時」に貴船神社の公式ウェブサイトおよび公式SNS（X）で告知されます。事前に確実な予約はできないため、寒波のタイミングを狙って洛北に宿泊しておくのが最も確実です。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-amber-900">Q. 冬の貴船・鞍馬へのアクセスで自家用車はおすすめですか？</strong>
        <p class="text-stone-700 leading-relaxed">
          貴船周辺の道路は道幅が極めて狭く、冬期は急坂の凍結や積雪が発生するため、自家用車やレンタカーでの乗り入れは推奨されません。叡山電鉄（出町柳〜貴船口）と京都バスを利用するのが最も安全で確実です。歩道も雪や氷で滑りやすいため、滑り止め付きの靴やスノーブーツでお越しください。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-amber-900">Q. ぼたん鍋は臭みはありませんか？初めてでも食べやすいですか？</strong>
        <p class="text-stone-700 leading-relaxed">
          天然の良質な猪肉は適切に血抜きと下処理が行われており、豚肉や牛肉よりもむしろアクや臭みが少なく上品な味わいです。特に大原や貴船の料理旅館では、伝統の特製味噌出汁や山椒を効かせた出汁でじっくり煮込むため、初めての方でも「想像以上に美味しくてコクがある」と驚かれます。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. サイト内内部リンク集 -->
  <section class="my-8 p-5 bg-amber-50/80 rounded-2xl border border-amber-200">
    <h3 class="font-bold text-sm text-amber-950 mb-3">📌 合わせて読みたい京都・近畿の温泉旅館＆冬特集</h3>
    <ul class="text-xs text-amber-900 space-y-2 list-disc list-inside">
      <li><a href="/kyoto" class="underline font-bold hover:text-amber-700">京都府の温泉旅館・観光名所完全ガイド（嵐山・大原・天橋立・宮津）</a></li>
      <li><a href="/posts/129608" class="underline hover:text-amber-700">京都府・近畿観光：名所と旬のグルメを満喫する周遊おすすめモデルコースガイド</a></li>
      <li><a href="/posts/note-127" class="underline hover:text-amber-700">京都の紅葉ライトアップと憧れの極上温泉旅館厳選ガイド</a></li>
      <li><a href="/posts/ise-jingu-newyear-hatsumode-toba-onsen-ise-ebi-guide" class="underline hover:text-amber-700">新春初詣と美食温泉！伊勢神宮＆鳥羽温泉郷の開運旅行ガイド</a></li>
    </ul>
  </section>

</div>`;

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    description: '12月〜1月の京都・貴船神社「積雪日限定ライトアップ」と奥京都を大特集！朱塗りの春日灯篭が照らす白銀の参道、大原三千院の静寂の雪景色、冬の京都名物「本場ぼたん鍋（猪肉）」、美肌の天然温泉露天風呂と大人の1泊2日モデルプランを徹底解説。',
    prefecture: data.prefecture,
    area: data.area,
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl).filter(Boolean),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: [
      '京都府',
      '貴船神社',
      '大原温泉',
      '積雪ライトアップ',
      'ぼたん鍋',
      '三千院',
      '奥京都',
      '冬旅行'
    ],
    keywords: [
      '貴船神社 積雪ライトアップ ホテル',
      '貴船神社 冬 宿泊 おすすめ',
      '大原温泉 ぼたん鍋 旅館',
      '京都 雪景色 温泉 露天風呂',
      '貴船 料理旅館 宿泊',
      '三千院 近く 温泉宿',
      '京都 冬 大人旅 隠れ家宿'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// 記事5: 乳頭温泉郷＆田沢湖
function buildNyutoPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('ロッジアイリス')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 3);

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 rounded-3xl border border-sky-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-indigo-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Answer</span>
      <span class="text-xs text-indigo-950 font-bold">11月〜1月の秋田・乳頭温泉郷＆田沢湖 白銀秘湯旅総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【結論】憧れの白銀秘湯・乳頭温泉郷と凍らない瑠璃色の田沢湖：本場囲炉裏きりたんぽ鍋で温まる冬旅</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      日本屈指の秘湯として全国の温泉ファンが羨望の眼差しを向ける秋田県「乳頭温泉郷」。十和田八幡平国立公園のブナの原生林に抱かれた7つの湯宿（鶴の湯・妙乃湯・黒湯・蟹場・孫六・大釜・休暇村）は、それぞれ泉質も趣も異なる独自の源泉を持っています。11月下旬から山々は豪雪に覆われ、茅葺き屋根に積もる綿帽子のような雪と、乳白色の露天風呂から立ち上る湯けむりが織りなす光景は、日本の原風景そのもの。水深423.4mと日本一深く真冬でも凍らない瑠璃色の「田沢湖」を望み、夜は囲炉裏端で新米あきたこまちの手潰したんぽと比内地鶏の出汁で炊き上げる本場「きりたんぽ鍋」を味わう旅は、最高の癒やしを約束します。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-sky-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">秘湯の特長</span>
        <strong class="text-indigo-900 text-sm">7つの宿で10種超の独自源泉</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-sky-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">田沢湖の神秘</span>
        <strong class="text-sky-800 text-sm">日本最深423.4m（冬も不凍湖）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-sky-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">積雪と気候</span>
        <strong class="text-blue-800 text-sm">12月〜1月は2m超の豪雪地帯</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-sky-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の郷土味覚</span>
        <strong class="text-amber-700 text-sm">本場きりたんぽ鍋＆比内地鶏</strong>
      </div>
    </div>
  </section>

  <!-- 1. 白銀の秘湯・乳頭温泉郷の魅力 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-600 pb-2.5">
      ♨️ ブナの原生林に湧く奇跡の七湯：乳頭温泉郷の雪見露天めぐりと湯治文化
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      秋田県仙北市、乳頭山の山麓に点在する乳頭温泉郷。江戸時代初期に開湯した「鶴の湯温泉」をはじめ、清流沿いに佇む「妙乃湯」、川床の唐子の湯が名高い「蟹場温泉」など、7つの宿がそれぞれ自家源泉を保有し、白濁泉・炭酸水素塩泉・単純温泉・硫黄泉と多彩な泉質を誇ります。冬になるとブナの原生林は深い雪に包まれ、訪れる者を外界から隔絶された静寂の湯治世界へと誘います。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      乳頭温泉郷の冬の醍醐味は、なんといっても雪見の混浴・露天風呂。雪壁に囲まれた青白い乳白色の湯船に肩まで浸かると、雪の結晶が肌に触れてすっと溶けていく贅沢な涼しさと、温泉の圧倒的な温もりが心地よいコントラストを描きます。宿泊者限定の巡回バス「湯めぐり号」や湯めぐり帖を利用すれば、宿から宿へと雪景色を眺めながら異なる名湯を巡ることも可能です。
    </p>
  </section>

  <!-- 2. Wikipedia 観光スポット実写ギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-600 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る田沢湖・八幡平・角館（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 乳頭温泉郷 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${w[0].image || 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Tsurunoyu_Onsen.jpg/1280px-Tsurunoyu_Onsen.jpg'}" alt="乳頭温泉郷の風景" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-indigo-100 text-indigo-800 font-bold rounded">日本屈指の秘湯</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">乳頭温泉郷</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${w[0].extract}
            </p>
          </div>
          <p class="text-[11px] text-indigo-900 bg-indigo-50 p-2.5 rounded-lg font-medium border border-indigo-100">
            💡 冬期は宿の前に巨大な雪の壁ができ、夜には雪洞（かまくら）にロウソクが灯る幻想的な演出も楽しめます。
          </p>
        </div>
      </div>

      <!-- Spot 2: 田沢湖 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${w[1].image || 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Lake_Tazawa.jpg/1280px-Lake_Tazawa.jpg'}" alt="真冬の田沢湖" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-sky-100 text-sky-800 font-bold rounded">日本一深い瑠璃色の湖</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">田沢湖（たつこ像）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${w[1].extract}
            </p>
          </div>
          <p class="text-[11px] text-indigo-900 bg-indigo-50 p-2.5 rounded-lg font-medium border border-indigo-100">
            💡 雪に囲まれた湖畔に黄金色に輝く「たつこ像」が立ち、深い藍色の湖面と冠雪の秋田駒ヶ岳のコントラストは絶好の撮影スポットです。
          </p>
        </div>
      </div>

      <!-- Spot 3: 角館 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${w[2].image || 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Kakunodate_samurai_district.jpg/1280px-Kakunodate_samurai_district.jpg'}" alt="角館の武家屋敷雪景色" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-stone-200 text-stone-800 font-bold rounded">みちのくの小京都</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">角館・武家屋敷通り</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${w[2].extract}
            </p>
          </div>
          <p class="text-[11px] text-indigo-900 bg-indigo-50 p-2.5 rounded-lg font-medium border border-indigo-100">
            💡 黒板塀に純白の雪が降り積もる武家屋敷通り。国の重要伝統的建造物群保存地区に指定され、冬の静けさは格別です。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 冬の秋田名物：本場きりたんぽ鍋と比内地鶏 -->
  <section class="space-y-4 my-8 p-6 bg-amber-50/70 rounded-3xl border border-amber-200">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b border-amber-300 pb-2">
      🍲 囲炉裏で煮込む本場の味：秋田名物「きりたんぽ鍋」と比内地鶏の極上スープ
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      秋田の冬に絶対に外せないのが、秋田マタギの知恵と新米の恵みが結実した「本場きりたんぽ鍋」。収穫されたばかりの新米あきたこまちをすり鉢で半殺し（半分粒を残す状態）に潰し、秋田杉の串に巻き付けて香ばしく焼き上げた「たんぽ」。これを、日本三大美味鶏のひとつ「比内地鶏」の鶏ガラから時間をかけて抽出した黄金色の出汁で煮込みます。根付きセリのシャキシャキとした食感と舞茸の芳醇な香り、そして出汁をたっぷり吸い込んだたんぽのもっちりとした旨味は、一度食べたら忘れられない奥深さです。
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
      <div class="p-4 bg-white rounded-xl border border-amber-200 space-y-1.5">
        <strong class="text-amber-900 block font-bold text-sm">比内地鶏の濃厚ガラ出汁と根セリ</strong>
        <p class="text-stone-600 leading-relaxed">
          放し飼いで引き締まった比内地鶏の肉は、噛むほどにジューシーな旨味が溢れます。冬に最も香りが高くなる根セリがスープのアクセントに。
        </p>
      </div>
      <div class="p-4 bg-white rounded-xl border border-amber-200 space-y-1.5">
        <strong class="text-amber-900 block font-bold text-sm">秋田の地酒といぶりがっこ</strong>
        <p class="text-stone-600 leading-relaxed">
          囲炉裏の煙で燻製にした「いぶりがっこ」とクリームチーズをつまみながら、「新政」「高清水」「雪の茅舎」など秋田の銘酒を味わう時間は至福そのものです。
        </p>
      </div>
    </div>
  </section>

  <!-- 4. 楽天トラベル厳選：田沢湖・乳頭温泉郷の名湯宿4選 -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-600 pb-2.5">
      🏨 楽天トラベル厳選：秘湯情緒と絶品郷土料理を満喫する田沢湖・乳頭温泉の宿4選
    </h2>
    <p class="text-xs md:text-sm text-stone-600 leading-relaxed">
      乳頭温泉郷へのアクセスに優れ、源泉かけ流しの雪見風呂と手作りのきりたんぽ鍋を堪能できる高評価の宿を厳選しました。
    </p>

    <div class="space-y-6">
      <!-- 宿1: メイン宿 -->
      <div class="p-5 md:p-6 bg-white rounded-3xl border border-indigo-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full md:w-56 h-44 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-indigo-800 text-white font-bold text-[10px] rounded-full">高評価★4.43・乳白色源泉</span>
              <span class="text-xs text-stone-500">${mainHotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg md:text-xl leading-snug">${mainHotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${mainHotel.address1}${mainHotel.address2} ｜ ${mainHotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-indigo-800 text-sm">⭐ 総合評価 ${mainHotel.reviewAverage}（クチコミ ${mainHotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${mainHotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs md:text-sm text-stone-700 bg-indigo-50/70 p-4 rounded-xl border border-indigo-100 leading-relaxed">
          ${mainHotel.hotelSpecial} 秋田駒ヶ岳山麓に位置し、乳白色の天然硫黄泉を完全源泉かけ流しで楽しめる温泉ロッジ。女将手作りのきりたんぽ鍋や岩魚の塩焼き、山の芋料理など秋田の温かい家庭料理が評判。アットホームなもてなしと豪雪を望む温かい温泉で、心安らぐ秘湯滞在を満喫できます。
        </p>
        <div class="text-right">
          <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-indigo-700 to-sky-700 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>

      <!-- 他の宿一覧 -->
      ${otherHotels.map((hotel, idx) => `
      <div class="p-5 bg-white rounded-3xl border border-stone-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${hotel.hotelImageUrl}" alt="${hotel.hotelName}" class="w-full md:w-56 h-40 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-stone-700 text-white font-bold text-[10px] rounded-full">厳選宿 #${idx + 2}</span>
              <span class="text-xs text-stone-500">${hotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg leading-snug">${hotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${hotel.address1}${hotel.address2} ｜ ${hotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-indigo-800 text-sm">⭐ 総合評価 ${hotel.reviewAverage}（${hotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${hotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs text-stone-700 bg-stone-50 p-3.5 rounded-xl border border-stone-200 leading-relaxed">
          ${hotel.hotelSpecial} 田沢湖や乳頭温泉郷の観光拠点として最適な温泉ホテル。広々とした大浴場や露天風呂、比内地鶏やあきたこまちを使った郷土会席料理で、北東北の冬の味覚を堪能できます。
        </p>
        <div class="text-right">
          <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-indigo-700 to-sky-700 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>
      `).join('')}
    </div>
  </section>

  <!-- 5. 1泊2日 秘湯雪見風呂＆角館周遊モデルコース -->
  <section class="space-y-4 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-600 pb-2.5">
      🗺️ 憧れの秘湯と雪の小京都を巡る！田沢湖・乳頭温泉・角館 1泊2日モデルコース
    </h2>
    <div class="space-y-4 text-xs md:text-sm">
      <div class="p-4.5 bg-indigo-50/60 rounded-2xl border border-indigo-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-indigo-900 text-white font-bold text-xs rounded-md">1日目</span>
          <strong class="text-stone-900">田沢湖駅 ➔ 田沢湖畔たつこ像 ➔ 乳頭温泉郷で雪見露天 ➔ 宿で囲炉裏きりたんぽ鍋</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【11:30】秋田新幹線こまちでJR田沢湖駅に到着。駅前の観光案内所で情報収集。<br>
          【12:00】羽後交通バスで田沢湖畔へ。瑠璃色の不凍湖と黄金の「たつこ像」を眺め、名物の稲庭うどんでランチ。<br>
          【14:00】乳頭温泉行きバスに乗車し、乳頭温泉郷へ。鶴の湯温泉などの白濁露天風呂でブナの森の白銀雪見風呂を体験。<br>
          【16:30】宿泊する温泉宿へチェックイン。乳白色の天然温泉でじんわりと体を温める。<br>
          【18:30】比内地鶏の出汁が利いた熱々の本場きりたんぽ鍋と秋田の地酒を心ゆくまで堪能。
        </p>
      </div>
      <div class="p-4.5 bg-sky-50/60 rounded-2xl border border-sky-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-sky-900 text-white font-bold text-xs rounded-md">2日目</span>
          <strong class="text-stone-900">白銀の朝風呂 ➔ 角館武家屋敷散策 ➔ 秋田新幹線で帰路へ</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【08:00】雪景色を見渡す露天風呂で朝湯。あきたこまちのご飯と地場産山菜・温泉卵の朝食。<br>
          【09:30】路線バスで田沢湖駅へ戻り、秋田新幹線でわずか15分の「角館駅」へ移動。<br>
          【10:30】「みちのくの小京都」角館の武家屋敷通りを散策。黒板塀に雪が積もる風情ある街並みを歩き、青柳家や石黒家を見学。<br>
          【13:00】角館の老舗料亭で比内地鶏の親子丼を堪能。<br>
          【14:30】伝統工芸の樺細工（桜皮細工）やいぶりがっこをお土産に購入し、角館駅から秋田新幹線に乗車して帰路へ。
        </p>
      </div>
    </div>
  </section>

  <!-- 6. FAQセクション -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-indigo-600 pb-2.5">
      ❓ 乳頭温泉郷・冬の秋田旅行 よくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-indigo-900">Q. 冬期の乳頭温泉郷へのアクセスと冬用タイヤについて教えてください。</strong>
        <p class="text-stone-700 leading-relaxed">
          12月〜1月の乳頭温泉郷周辺は2メートルを超える豪雪地帯であり、道路は圧雪・アイスバーンとなります。自家用車やレンタカーは4WD＋スタッドレスタイヤが必須ですが、雪道運転に不慣れな方は、JR田沢湖駅から発着する羽後交通路線バス（乳頭線）の利用を強くおすすめします。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-indigo-900">Q. 冬でも乳頭温泉郷の「湯めぐり」は可能ですか？</strong>
        <p class="text-stone-700 leading-relaxed">
          冬期も「鶴の湯」「妙乃湯」「蟹場温泉」「大釜温泉」「休暇村」などは日帰り入浴や湯めぐりが可能です（一部の宿は冬季休業や日帰り時間短縮あり）。各宿を結ぶ宿泊者専用の巡回バス「湯めぐり号」も運行されていますが、天候による運休や遅延に備えて時間に余裕を持った計画を立ててください。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-indigo-900">Q. 乳頭温泉の混浴露天風呂の入り方やマナーは？</strong>
        <p class="text-stone-700 leading-relaxed">
          鶴の湯などの名物混浴露天風呂は、白濁した湯のため湯船に入ってしまえば中は見えません。女性専用の脱衣所から湯船の中を通って混浴エリアへ移動できる構造になっているところが多く、女性専用の露天風呂も併設されています。湯浴み着（バスタオル巻き）の可否は宿によってルールが異なるため、事前に各宿の掲示をご確認ください。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. サイト内内部リンク集 -->
  <section class="my-8 p-5 bg-indigo-50/80 rounded-2xl border border-indigo-200">
    <h3 class="font-bold text-sm text-indigo-950 mb-3">📌 合わせて読みたい秋田・東北の温泉旅館特集</h3>
    <ul class="text-xs text-indigo-900 space-y-2 list-disc list-inside">
      <li><a href="/akita" class="underline font-bold hover:text-indigo-700">秋田県の温泉旅館・観光名所完全ガイド（乳頭温泉・田沢湖・男鹿・角館）</a></li>
      <li><a href="/posts/akita-famous-kiritanpo-hinai-sake-hotels-guide" class="underline hover:text-indigo-700">秋田名物きりたんぽ・比内地鶏と極上温泉宿ガイド</a></li>
      <li><a href="/posts/october-travel-akita-kids-family-guide" class="underline hover:text-indigo-700">秋田県の紅葉・味覚と人気温泉旅館ガイド</a></li>
      <li><a href="/posts/snow-monkey-jigokudani-shibu-yudanaka-onsen-guide" class="underline hover:text-indigo-700">冬の日本の原風景！長野・地獄谷野猿公苑と渋温泉九湯めぐりガイド</a></li>
    </ul>
  </section>

</div>`;

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    description: '11月〜1月の秋田・乳頭温泉郷と田沢湖・角館を大特集！ブナ原生林の白銀雪見露天風呂、日本最深・不凍の瑠璃色田沢湖、囲炉裏でいただく本場比内地鶏きりたんぽ鍋、武家屋敷の雪景色、乳白色源泉かけ流しの厳選名宿と1泊2日モデルプランを徹底解説。',
    prefecture: data.prefecture,
    area: data.area,
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl).filter(Boolean),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: [
      '秋田県',
      '乳頭温泉郷',
      '田沢湖',
      '角館',
      'きりたんぽ鍋',
      '秘湯',
      '雪見露天風呂',
      '比内地鶏'
    ],
    keywords: [
      '乳頭温泉郷 雪見露天 宿泊',
      '乳頭温泉 きりたんぽ ホテル',
      '田沢湖 温泉 おすすめ旅館',
      '角館 武家屋敷 雪 宿',
      '乳頭温泉 混浴 露天風呂 予約',
      '秋田 秘湯 露天風呂 旅館',
      '田沢湖高原温泉 名宿'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

function main() {
  console.log('--- Generating 5 Independent High-Quality Winter Articles ---');

  const posts = [
    buildZaoPost(collectedData.theme_1_zao),
    buildKanazawaKagaPost(collectedData.theme_2_kanazawa_kaga),
    buildKusatsuPost(collectedData.theme_3_kusatsu),
    buildKifuneKyotoPost(collectedData.theme_4_kifune_kyoto),
    buildNyutoPost(collectedData.theme_5_nyuto_akita)
  ];

  const postsDir = path.join(__dirname, '..', 'src', 'data', 'posts');

  posts.forEach(p => {
    const textLen = countTextLength(p.review);
    console.log(`\nArticle "${p.id}":`);
    console.log(`  Title: ${p.title}`);
    console.log(`  Clean Text Character Count: ${textLen} chars`);
    if (textLen < 3000) {
      console.warn(`  ⚠️ WARNING: Text length is under 3000 chars! (${textLen})`);
    } else {
      console.log(`  ✅ OK: Quality check passed (>= 3000 chars)`);
    }

    const filePath = path.join(postsDir, `${p.id}.json`);
    fs.writeFileSync(filePath, JSON.stringify(p, null, 2), 'utf8');
    console.log(`  Saved to: ${filePath}`);
  });

  console.log('\n--- All 5 Articles Successfully Generated! ---');
}

main();
