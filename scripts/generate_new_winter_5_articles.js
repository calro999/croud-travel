const fs = require('fs');
const path = require('path');

const collectedData = require('../scratch/new_winter_5_collected_data.json');

// HTMLタグを除去した文字数を正確にカウントする関数
function countTextLength(html) {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, '')
    .trim().length;
}

// ========================================================
// 記事1: 長野・野沢温泉
// ========================================================
function buildNozawaPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h[0];
  const otherHotels = h.slice(1, 4);

  const spotNozawa = w.find(x => x.spotName === '野沢温泉') || w[0];
  const spotVillage = w.find(x => x.spotName === '野沢温泉村') || w[1];
  const spotDosojin = w.find(x => x.spotName === '道祖神') || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 rounded-3xl border border-teal-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-teal-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Answer</span>
      <span class="text-xs text-teal-950 font-bold">12月〜1月の野沢温泉・外湯めぐり＆道祖神祭り旅行総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【結論】野沢温泉の冬旅：13の外湯めぐりと道祖神祭り、白銀の湯煙に包まれる雪国湯治</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      長野県北東部、毛無山の裾野に位置する野沢温泉村。冬期（12月〜1月）は数メートルに達する豪雪に包まれながら、村内各地から立ち上る湯煙と温かな人情が旅人を迎えます。最大の特徴は、江戸時代から村人たちの自治組織「湯仲間（ゆなかま）」が大切に守り継いできた13箇所の天然共同浴場「外湯（そとゆ）」。シンボルである「大湯」をはじめ、すべて源泉掛け流しで無色透明から青白のにごり湯まで多彩な泉質を楽しめます。毎年1月15日には日本三大奇祭のひとつ「野沢温泉の道祖神祭り（国の重要無形民俗文化財）」が厳冬の雪原で開催され、高さ十数メートルの社殿を舞台にした猛烈な火の攻防戦は圧巻です。名物の熱湯「麻釜（おがま）」で茹でられる冬の本漬け野沢菜や温泉卵、信州プレミアム牛のすき焼きとともに、日本の原風景が息づく特別な冬を過ごせます。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-teal-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">外湯数・入浴形態</span>
        <strong class="text-teal-900 text-sm">13箇所（寸志・外湯めぐり自由）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-teal-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">主要泉質</span>
        <strong class="text-stone-900 text-sm">単純硫黄泉・弱アルカリ性硫黄泉</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-teal-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">道祖神祭り開催日</span>
        <strong class="text-red-700 text-sm">毎年1月15日夜（日本三大奇祭）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-teal-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の必食ご当地美味</span>
        <strong class="text-amber-700 text-sm">麻釜茹で野沢菜・信州牛すき焼き</strong>
      </div>
    </div>
  </section>

  <!-- 1. 野沢温泉の冬の魅力と外湯文化 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      ♨️ 江戸時代から続く奇跡の湯仲間文化！野沢温泉「13の外湯めぐり」の極意と歩き方
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      野沢温泉の外湯は、観光地化された入浴施設とは一線を画します。村内に点在する13の外湯（大湯、河原湯、秋葉の湯、麻釜の湯、上寺湯、熊の手洗湯、松葉の湯、中尾の湯、新田の湯、真湯、十王堂の湯、横落の湯、滝の湯）は、近隣の住民たちが「湯仲間」を結成し、毎日の清掃や湯守、補修費用を分担しながら維持管理を行っています。観光客も寸志（入り口の賽銭箱への感謝の志）を納めることで入浴が許されており、雪の降る石畳をカランコロンと下駄を鳴らして巡る体験は野沢温泉ならではの醍醐味です。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      湯船に注がれる源泉はすべて自噴の源泉掛け流し。温度は42℃から熱いところでは46℃前後に達し、冬の厳しい寒さで冷えた体を一瞬で芯から温めてくれます。特に温泉街中心にそびえる木造三層入母屋造りの「大湯」は、総檜の浴槽が「あつ湯」と「ぬる湯」に仕切られ、白濁した硫黄の香りに包まれる名建築です。また「熊の手洗湯」は傷ついた熊が湯浴みをして傷を癒やしたという開湯伝説が残る歴史最古の源泉で、ぬるめの湯船がありじっくり長湯が楽しめます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      外湯巡りの必需品は、各宿で貸し出してくれる「湯かご」、タオル、そして長靴です。12月から1月にかけての野沢温泉は連日雪が降り積もるため、防寒ブーツや滑り止めの効いた履物が欠かせません。湯上がりにはポカポカの熱が全身を巡り、氷点下の外気さえも心地よい天然のクールダウンとして楽しむことができます。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る野沢温泉の冬景色・名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 野沢温泉 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotNozawa.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Nozawa_Onsen_Oyu.jpg/640px-Nozawa_Onsen_Oyu.jpg'}" alt="${spotNozawa.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-teal-100 text-teal-800 font-bold rounded">外湯文化の象徴</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotNozawa.wikiTitle}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              野沢温泉（のざわおんせん）は、長野県下高井郡野沢温泉村にある温泉。開湯は奈良時代と伝えられ、江戸時代には飯山藩の湯治場として栄えた。毛無山山麓に自噴する三十余の源泉を持ち、温泉街中心に木造の共同浴場が立ち並ぶ。
            </p>
          </div>
          <p class="text-[11px] text-teal-900 bg-teal-50 p-2.5 rounded-lg font-medium border border-teal-100">
            💡 温泉街には集印帳（スタンプラリー）が用意されており、外湯や史跡を巡りながら朱印を集める散策が旅の楽しい記念になります。
          </p>
        </div>
      </div>

      <!-- Spot 2: 野沢温泉村 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotVillage.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nozawaonsen_village_office.jpg/640px-Nozawaonsen_village_office.jpg'}" alt="${spotVillage.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">雪国とスキーの里</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotVillage.wikiTitle}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              野沢温泉村（のざわおんせんむら）は、長野県北東部に位置する村。豪雪地帯に指定されており、日本最古級の野沢温泉スキー場を擁する。冬は極上のパウダースノーを求めて世界中からスキーヤーや観光客が訪れる国際的なリゾート。
            </p>
          </div>
          <p class="text-[11px] text-teal-900 bg-teal-50 p-2.5 rounded-lg font-medium border border-teal-100">
            💡 村内には天然記念物の「麻釜（おがま）」があり、90℃以上の熱湯が湧出。地元の方々が野菜や山菜を茹でる生活の場として今も機能しています。
          </p>
        </div>
      </div>

      <!-- Spot 3: 道祖神祭り -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotDosojin.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Dosojin_fire_festival_Nozawaonsen.jpg/640px-Dosojin_fire_festival_Nozawaonsen.jpg'}" alt="${spotDosojin.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded">国の重要無形民俗文化財</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">野沢温泉の道祖神祭り</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              道祖神（どうそじん）祭りは、毎年1月15日の夜に行われる小正月の火祭り。厄年の男たち（25歳と42歳）が守る木造社殿に、たいまつを持った村人が火をつけようと激しく攻防する。最後は社殿が巨大な火柱となって燃え盛る日本三大奇祭。
            </p>
          </div>
          <p class="text-[11px] text-teal-900 bg-teal-50 p-2.5 rounded-lg font-medium border border-teal-100">
            💡 祭りの火で焼いた餅を食べると無病息災で過ごせると信じられています。見学の際は火の粉が舞うため、燃えにくい綿の防寒着での観覧が鉄則です。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 麻釜と本場野沢菜・信州美食 -->
  <section class="space-y-4 my-8 p-6 bg-stone-50 rounded-3xl border border-stone-200">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b border-stone-300 pb-2">
      🥬 麻釜の熱湯が育む冬の味覚！本場野沢菜の本漬けと信州プレミアム牛すき焼き
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      野沢温泉の発祥の地とされる「麻釜（おがま）」は、大釜・丸釜・ゆで釜・竹のし釜・下釜の5つの湯だまりからなり、湧出温度は約90℃。古くは麻を茹でて皮を剥いだことからその名がつきました。11月下旬から12月にかけて、収穫されたばかりの野沢菜の根元を麻釜の熱湯でサッと茹でてから塩樽に漬け込む「お菜洗い」が行われます。この熱湯処理によって余分なアクが抜け、乳酸発酵が進んだ12月〜1月の「本漬け野沢菜」は、深いべっ甲色を帯びて酸味と旨味が絶妙に調和した極上の逸品へと仕上がります。
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-2">
      <div class="p-3.5 bg-white rounded-xl border border-stone-200 space-y-1">
        <strong class="text-teal-900 block font-bold text-sm">麻釜茹で温泉卵＆野沢菜</strong>
        <p class="text-stone-600 leading-relaxed">
          麻釜源泉で作る温泉卵は白身がとろとろ、黄身がしっとり濃厚。塩気の効いた本漬け野沢菜とともにご飯やお酒が進みます。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-stone-200 space-y-1">
        <strong class="text-teal-900 block font-bold text-sm">信州プレミアム牛すき焼き</strong>
        <p class="text-stone-600 leading-relaxed">
          長野県の独自基準をクリアしたオレイン酸豊富な霜降り牛。雪降る夜にぐつぐつと煮立つ鉄鍋ですき焼きを堪能できます。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-stone-200 space-y-1">
        <strong class="text-teal-900 block font-bold text-sm">北信濃の地酒「水尾」</strong>
        <p class="text-stone-600 leading-relaxed">
          野沢温泉の隣町・飯山市の田中屋酒造店が醸す「水尾」。野沢温泉の雪解け水で仕込まれた芳醇辛口の銘酒で、熱燗が雪見風呂の後に染みます。
        </p>
      </div>
    </div>
  </section>

  <!-- 4. 楽天トラベル厳選：外湯めぐり至便＆雪見名宿4選 -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      🏨 楽天トラベル厳選：外湯めぐりに最適＆自家源泉・郷土美食の野沢温泉宿4選
    </h2>
    <p class="text-xs md:text-sm text-stone-600 leading-relaxed">
      大湯や熊の手洗湯などの主要外湯に徒歩数分でアクセスでき、雪景色を望む自家源泉風呂と心温まる信州会席を味わえる宿を厳選しました。
    </p>

    <div class="space-y-6">
      <!-- 宿1: メイン宿 -->
      <div class="p-5 md:p-6 bg-white rounded-3xl border border-teal-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full md:w-56 h-44 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-teal-800 text-white font-bold text-[10px] rounded-full">発祥の源泉・熊の手洗湯隣接</span>
              <span class="text-xs text-stone-500">${mainHotel.address1}${mainHotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg md:text-xl leading-snug">${mainHotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${mainHotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-teal-700 text-sm">⭐ 総合評価 ${mainHotel.reviewAverage}（クチコミ ${mainHotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${mainHotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs md:text-sm text-stone-700 bg-teal-50/70 p-4 rounded-xl border border-teal-100 leading-relaxed">
          ${mainHotel.hotelSpecial || '野沢温泉発祥の湯「熊の手洗湯」に最も近い情緒豊かな老舗宿。自家源泉の掛け流し内湯を満喫でき、外湯めぐりの拠点として抜群の立地を誇ります。手作りの信州郷土料理と温かいおもてなしでリピーターの絶えない人気湯宿です。'}
        </p>
        <div class="text-right">
          <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-teal-700 to-emerald-800 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
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
              <span class="text-xs text-stone-500">${hotel.address1}${hotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg leading-snug">${hotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${hotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-teal-700 text-sm">⭐ 総合評価 ${hotel.reviewAverage}（${hotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${hotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs text-stone-700 bg-stone-50 p-3.5 rounded-xl border border-stone-200 leading-relaxed">
          ${hotel.hotelSpecial || '野沢温泉の情緒ある街並みに佇み、源泉掛け流しの名湯と旬の信州味覚を堪能できる高評価宿。スキー場へのアクセスや外湯めぐりにも便利な立地です。'}
        </p>
        <div class="text-right">
          <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-teal-700 to-emerald-800 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>`).join('')}
    </div>
  </section>

  <!-- 5. 1泊2日 外湯制覇＆雪国体験モデルコース -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      🗺️ 13の外湯と雪国情話を味わい尽くす！野沢温泉 1泊2日王道モデルコース
    </h2>
    <div class="space-y-4 text-xs md:text-sm">
      <div class="p-4.5 bg-teal-50/60 rounded-2xl border border-teal-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-teal-800 text-white font-bold text-xs rounded-md">1日目</span>
          <strong class="text-stone-900">飯山駅 ➔ 野沢温泉ライナー ➔ 大湯・熊の手洗湯めぐり ➔ 麻釜見学 ➔ 宿で信州牛会席</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【12:30】北陸新幹線・飯山駅に到着。千曲川口バスターミナルから直通バス「野沢温泉ライナー」に乗車（所要約25分）。<br>
          【13:00】野沢温泉中央ターミナルに到着。旅館に荷物を預け、宿の湯かご・下駄・長靴を借りて温泉街へ出発。<br>
          【13:30】まずは温泉街のシンボル「大湯」へ。あつ湯とぬる湯に浸かり、硫黄の香りで長旅の疲れをほぐす。<br>
          【15:00】天然記念物「麻釜」へ散策。もうもうと立ち上る湯煙と、地元の方がお菜洗いをする雪国の日常風景を見学。<br>
          【16:30】開湯伝説の地「熊の手洗湯」へ。ややぬるめの柔らかな青白色の湯でじっくり体を温める。<br>
          【18:30】旅館で夕食。本漬け野沢菜、信州プレミアム牛のすき焼き、信州そば、地酒「水尾」の熱燗に舌鼓。
        </p>
      </div>
      <div class="p-4.5 bg-emerald-50/60 rounded-2xl border border-emerald-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-emerald-800 text-white font-bold text-xs rounded-md">2日目</span>
          <strong class="text-stone-900">真湯の朝風呂 ➔ 温泉街でお土産探し（温泉まんじゅう・野沢菜） ➔ 飯山駅へ</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【07:30】朝の澄んだ空気の中、黒い湯の花が舞う「真湯」へ朝風呂に出かける。天候によって淡い緑色や白濁に変化する名湯を堪能。<br>
          【08:30】宿で朝食。温泉卵と炊きたて長野県産コシヒカリ、手作りの味噌汁で温まる。<br>
          【10:00】チェックアウト後、大湯通りを散策。老舗菓子舗の蒸したて「温泉まんじゅう」や、本漬け野沢菜樽詰めをお土産に購入。<br>
          【12:00】温泉街の老舗そば処で、大根おろしの搾り汁と信州味噌で食べる名物「富倉そば」を味わう。<br>
          【13:30】野沢温泉ライナーで飯山駅へ戻り、新幹線で帰路へ。
        </p>
      </div>
    </div>
  </section>

  <!-- 6. FAQセクション -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      ❓ 野沢温泉の冬旅・外湯めぐり よくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-teal-900">Q. 外湯に入る際のマナーや料金はどうなっていますか？</strong>
        <p class="text-stone-700 leading-relaxed">
          外湯は地元住民の共同生活の場です。入り口に設置された賽銭箱に寸志（100円〜数百円程度が目安）を納めてから入浴してください。石鹸やシャンプーは備え付けられておらず、環境保護や排水設備の関係から使用が制限・禁止されている外湯もあります。湯船に入る前は必ず十分にかかり湯を行い、湯船から上がる際は体をよく拭いてから脱衣場に上がることがルールです。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-teal-900">Q. 冬期の車でのアクセスや路面凍結の注意点は？</strong>
        <p class="text-stone-700 leading-relaxed">
          12月から1月の野沢温泉周辺は豪雪地帯のため、道路は完全な圧雪・アイスバーン状態になります。4WD車かつスタッドレスタイヤの装着が絶対必須です。温泉街内部は道幅が狭く一方通行や急坂が多いため、自家用車は温泉街入口の大型駐車場（有料・中央ターミナル周辺等）に停め、宿の送迎や徒歩で移動するのが安心です。雪道運転に不慣れな場合は、北陸新幹線・飯山駅からの直通「野沢温泉ライナー（約25分）」の利用を強く推奨します。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-teal-900">Q. 1月15日の「道祖神祭り」を見学する際の注意点は？</strong>
        <p class="text-stone-700 leading-relaxed">
          道祖神祭りの夜は氷点下10℃前後の極寒となり、激しい火の攻防によって火の粉が広範囲に飛び散ります。ダウンジャケットや化繊の服は火の粉で穴が開きやすいため、綿や難燃素材の防寒着（ヤッケなど）を着用し、耳当て・ニット帽・手袋・滑り止め付きスノーブーツで完全防備してください。また、当日は全国から観光客が集まり大変混雑するため、宿は数ヶ月前から予約しておく必要があります。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. サイト内内部リンク集 -->
  <section class="my-8 p-5 bg-teal-50/80 rounded-2xl border border-teal-200">
    <h3 class="font-bold text-sm text-teal-950 mb-3">📌 合わせて読みたい長野・甲信越の雪見名湯・冬旅特集</h3>
    <ul class="text-xs text-teal-900 space-y-2 list-disc list-inside">
      <li><a href="/nagano" class="underline font-bold hover:text-teal-700">長野県の人気温泉旅館・観光名所完全ガイド（渋・野沢・白馬・上高地）</a></li>
      <li><a href="/posts/snow-monkey-jigokudani-shibu-yudanaka-onsen-guide" class="underline hover:text-teal-700">地獄谷野猿公苑スノーモンキーと渋温泉・湯田中温泉郷の旅！九湯めぐりガイド</a></li>
      <li><a href="/posts/kusatsu-onsen-yubatake-winter-lightup-snow-bath-guide" class="underline hover:text-teal-700">草津温泉の冬の湯畑ライトアップと西の河原雪見露天風呂！極上名宿ガイド</a></li>
      <li><a href="/posts/zao-onsen-snow-monster-juhyo-lightup-winter-guide" class="underline hover:text-teal-700">蔵王温泉の樹氷ライトアップ・スノーモンスター体験と強酸性硫黄泉名宿ガイド</a></li>
      <li><a href="/posts/echigoyuzawa-famous-things-gourmet-hotels-guide" class="underline hover:text-teal-700">越後湯沢の雪国情緒と日本酒ぽんしゅ館・魚沼コシヒカリ美食温泉宿ガイド</a></li>
    </ul>
  </section>

</div>`;

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    description: '12月〜1月の野沢温泉を大特集！江戸時代から続く13の天然外湯（大湯・熊の手洗湯など）の泉質と歩き方、1月15日の日本三大奇祭「道祖神祭り」、天然記念物「麻釜」の本場野沢菜漬け、信州プレミアム牛すき焼きを味わう厳選名宿と1泊2日モデルプランを徹底解説。',
    prefecture: data.prefecture,
    area: data.area,
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: ['長野県', '野沢温泉', '外湯めぐり', '雪見温泉', '道祖神祭り', '野沢菜', '信州牛', '冬旅行'],
    keywords: [
      '野沢温泉 外湯めぐり ホテル',
      '野沢温泉 道祖神祭り 宿泊',
      '野沢温泉 麻釜 野沢菜 旅館',
      '野沢温泉 スキー 温泉宿 おすすめ',
      '野沢温泉 源泉かけ流し 雪見露天',
      '野沢温泉 信州牛 部屋食'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// 記事2: 岐阜・奥飛騨温泉郷
// ========================================================
function buildOkuhidaPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('かつら木') || x.hotelName.includes('松乃井')) || h[2] || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 3);

  const spotOkuhida = w.find(x => x.spotName === '奥飛騨温泉郷') || w[0];
  const spotRopeway = w.find(x => x.spotName === '新穂高ロープウェイ') || w[1];
  const spotShinhotaka = w.find(x => x.spotName === '新穂高温泉') || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-50 rounded-3xl border border-indigo-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-indigo-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Answer</span>
      <span class="text-xs text-indigo-950 font-bold">12月〜1月の奥飛騨温泉郷・青だる氷瀑＆新穂高ロープウェイ旅行総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【結論】奥飛騨温泉郷の冬旅：巨大氷瀑「青だる」と北アルプス雪見露天、囲炉裏の飛騨牛会席</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      岐阜県高山市の北東部、標高3,000m級の北アルプス（乗鞍岳・焼岳・穂高連峰）に抱かれた「奥飛騨温泉郷」。平湯・福地・新平湯・栃尾・新穂高の5つの温泉地で構成され、総湧出量は毎分44,000リットル超と日本屈指の規模を誇ります。12月下旬から1月にかけての見どころは、福地温泉の山肌に出現する巨大な青い氷のカーテン「青だる（あおだる）ライトアップ」。澄み切った厳冬の夜空に青白く浮かび上がる氷瀑の散歩道は息をのむ美しさです。さらに日本唯一の2階建てゴンドラ「新穂高ロープウェイ」で標高2,156mの西穂高口駅へ登れば、白銀に輝く槍ヶ岳・穂高連峰の360度大パノラマが眼前に広がります。夜は重厚な古民家旅館で雪景色を望む露天風呂に浸かり、囲炉裏端の炭火で香ばしく焼き上げる極上飛騨牛の朴葉味噌焼きや岩魚の塩焼きに舌鼓を打つ、本物の日本の冬籠りがここにあります。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-indigo-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">青だるライトアップ期間</span>
        <strong class="text-indigo-900 text-sm">12月下旬〜3月下旬（福地温泉）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-indigo-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">主要温泉泉質</span>
        <strong class="text-stone-900 text-sm">単純温泉・炭酸水素塩泉・硫黄泉</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-indigo-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">新穂高山頂展望台標高</span>
        <strong class="text-blue-700 text-sm">標高2,156m（西穂高口駅展望台）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-indigo-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の必食ご当地美味</span>
        <strong class="text-amber-700 text-sm">飛騨牛朴葉味噌焼き＆すったて汁</strong>
      </div>
    </div>
  </section>

  <!-- 1. 奥飛騨温泉郷の冬景色と青だる氷瀑 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2.5">
      ❄️ 自然が創り出す神秘の氷のアート「青だる」と野趣あふれる雪見露天風呂
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      奥飛騨温泉郷のなかでも平家落人伝説が伝わる静かな隠れ湯「福地温泉」。冬になると、福地の山奥の岩壁を伝い滴る清水が厳冬の冷気によって幾重にも凍りつき、巨大な青い氷のカーテンを形成します。これを地元では「青だる」と呼びます。かつては山奥の険しい場所でしか見られなかったこの自然現象を、温泉街の木々に水を吹きかけて再現したのが「青だる氷の散歩道」です。12月下旬から3月にかけて夜間ライトアップが行われ、青や白の光に照らし出された氷柱が幻想的な回廊を作り出します。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      そして奥飛騨の真骨頂といえば、圧倒的なスケールを誇る雪見露天風呂です。豊富な湯量に恵まれているため、多くの宿が惜しげもなく源泉を掛け流しで使用。湯船の縁に降り積もる純白の雪と、北アルプスの険しい峰々を仰ぎ見ながらの湯浴みは、日常の喧騒を一瞬で忘れさせてくれます。川沿いの露天風呂では、川のせせらぎと雪がしんしんと降る静寂が心地よい音色を奏でます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      また、新平湯温泉の「タルマかねこおりライトアップ」や、栃尾温泉の洞雲寺での冬灯りなど、5つの温泉地それぞれで独自の冬イベントが開催されるのも魅力。湯めぐり手形を利用して、個性豊かな温泉を巡る湯めぐりも冬の醍醐味です。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る奥飛騨・北アルプスの冬絶景（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 奥飛騨温泉郷 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotOkuhida.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Okuhida_Onsen-go_Hirayu.jpg/640px-Okuhida_Onsen-go_Hirayu.jpg'}" alt="${spotOkuhida.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-indigo-100 text-indigo-800 font-bold rounded">北アルプス山麓の名湯群</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotOkuhida.wikiTitle}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              奥飛騨温泉郷（おくひだおんせんごう）は、岐阜県高山市（旧飛騨国吉城郡上宝村）にある5つの温泉（平湯温泉、福地温泉、新平湯温泉、栃尾温泉、新穂高温泉）の総称。乗鞍岳や焼岳など北アルプスの山懐に抱かれた自然豊かな温泉地帯。
            </p>
          </div>
          <p class="text-[11px] text-indigo-900 bg-indigo-50 p-2.5 rounded-lg font-medium border border-indigo-100">
            💡 温泉郷内には100を超える源泉があり、野天風呂の数は日本一とも言われます。冬の白銀世界での雪見風呂は全国の温泉ファン垂涎の的です。
          </p>
        </div>
      </div>

      <!-- Spot 2: 新穂高ロープウェイ -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotRopeway.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Shinhotaka_Ropeway_2nd_line.jpg/640px-Shinhotaka_Ropeway_2nd_line.jpg'}" alt="${spotRopeway.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded">標高2,156mの雲上世界</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotRopeway.wikiTitle}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              新穂高ロープウェイ（しんほたかロープウェイ）は、岐阜県高山市の新穂高温泉にある索道。日本で唯一の2階建てゴンドラが運行する第2ロープウェイがあり、標高2,156mの西穂高口駅屋上展望台からは槍・穂高連峰の冠雪パノラマが望める。
            </p>
          </div>
          <p class="text-[11px] text-indigo-900 bg-indigo-50 p-2.5 rounded-lg font-medium border border-indigo-100">
            💡 冬期は山頂駅周辺に「雪の回廊」が出現。高さ数メートルの雪壁に挟まれた散策路で、極寒の北アルプスならではの雪の迫力を体感できます。
          </p>
        </div>
      </div>

      <!-- Spot 3: 新穂高温泉 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotShinhotaka.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Shinhotaka_Onsen_Yari-no-yu.jpg/640px-Shinhotaka_Onsen_Yari-no-yu.jpg'}" alt="${spotShinhotaka.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-800 font-bold rounded">最奥の秘湯リゾート</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotShinhotaka.wikiTitle}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              新穂高温泉（しんほたかおんせん）は、奥飛騨温泉郷の最奥部に位置する温泉。蒲田川沿いに露天風呂が点在し、北アルプスの雄大な山肌を真近に望む。透明度が高く柔らかな単純温泉が豊富に湧出する。
            </p>
          </div>
          <p class="text-[11px] text-indigo-900 bg-indigo-50 p-2.5 rounded-lg font-medium border border-indigo-100">
            💡 蒲田川の河原には巨石を配した野趣満点の露天風呂が多く、湯船のすぐ横を流れる清流と雪景色が一体となった絶景入浴が叶います。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 古民家囲炉裏と飛騨牛会席 -->
  <section class="space-y-4 my-8 p-6 bg-amber-50/70 rounded-3xl border border-amber-200">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b border-amber-300 pb-2">
      🔥 囲炉裏の炭火で香ばしく焼き上げる！冬の飛騨牛朴葉味噌焼きと飛騨郷土鍋
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      奥飛騨の夜の歓びは、豪農屋敷や合掌造りを移築した重厚な梁の下、パチパチと炭が爆ぜる「囲炉裏（いろり）」を囲む夕食です。飛騨の厳しい冬を乗り越える知恵として生まれた「朴葉味噌（ほおばみそ）」は、乾燥させた朴の木の葉の上に特製味噌とネギ、きのこを載せ、その上に最高ランクの「飛騨牛」の霜降りロースを並べて炭火で炙ります。味噌の焦げる香ばしい匂いと、とろけるような飛騨牛の脂の甘みが口いっぱいに広がり、地酒の熱燗との相性は抜群です。
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-2">
      <div class="p-3.5 bg-white rounded-xl border border-amber-200 space-y-1">
        <strong class="text-amber-900 block font-bold text-sm">極上飛騨牛の朴葉味噌＆ステーキ</strong>
        <p class="text-stone-600 leading-relaxed">
          サシが細かく入った飛騨牛。炭火の遠赤外線で表面を香ばしく、中はジューシーに焼き上げることで肉本来の芳醇な旨味が引き立ちます。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-amber-200 space-y-1">
        <strong class="text-amber-900 block font-bold text-sm">岩魚の炭火塩焼き</strong>
        <p class="text-stone-600 leading-relaxed">
          奥飛騨の清流で育った川魚の王様・岩魚（イワナ）。囲炉裏の灰に串を刺し、じっくり時間をかけて焼き上げるため頭から骨まで丸ごといただけます。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-amber-200 space-y-1">
        <strong class="text-amber-900 block font-bold text-sm">白川郷・飛騨伝統「すったて汁」</strong>
        <p class="text-stone-600 leading-relaxed">
          大豆を石臼ですり潰したペーストを味噌や醤油出汁に加えた濃厚な郷土汁。雪降る寒夜に体の芯からポカポカと温まります。
        </p>
      </div>
    </div>
  </section>

  <!-- 4. 楽天トラベル厳選：絶景雪見露天＆囲炉裏の奥飛騨名宿4選 -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2.5">
      🏨 楽天トラベル厳選：雪見露天風呂自慢＆極上飛騨牛囲炉裏料理の宿4選
    </h2>
    <p class="text-xs md:text-sm text-stone-600 leading-relaxed">
      青だるライトアップや新穂高ロープウェイ観光に便利で、豊かな自家源泉と風情ある古民家造りが評判の厳選宿をピックアップしました。
    </p>

    <div class="space-y-6">
      <!-- 宿1: メイン宿 -->
      <div class="p-5 md:p-6 bg-white rounded-3xl border border-indigo-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full md:w-56 h-44 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-indigo-800 text-white font-bold text-[10px] rounded-full">囲炉裏会席・名湯の隠れ宿</span>
              <span class="text-xs text-stone-500">${mainHotel.address1}${mainHotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg md:text-xl leading-snug">${mainHotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${mainHotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-indigo-700 text-sm">⭐ 総合評価 ${mainHotel.reviewAverage}（クチコミ ${mainHotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${mainHotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs md:text-sm text-stone-700 bg-indigo-50/70 p-4 rounded-xl border border-indigo-100 leading-relaxed">
          ${mainHotel.hotelSpecial || '奥飛騨の雄大な山々に抱かれた静寂の温泉宿。雪景色を一望できる天然温泉掛け流しの露天風呂と、地元の旬素材・飛騨牛を贅沢に使った囲炉裏会席が自慢です。木のぬくもりに満ちた落ち着いた空間で極上の大人の休日をお過ごしいただけます。'}
        </p>
        <div class="text-right">
          <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-indigo-700 to-blue-800 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
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
              <span class="text-xs text-stone-500">${hotel.address1}${hotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg leading-snug">${hotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${hotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-indigo-700 text-sm">⭐ 総合評価 ${hotel.reviewAverage}（${hotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${hotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs text-stone-700 bg-stone-50 p-3.5 rounded-xl border border-stone-200 leading-relaxed">
          ${hotel.hotelSpecial || '北アルプスの自然美に包まれた名湯宿。源泉掛け流しの雪見風呂と、飛騨の恵みを活かした温かい料理で心身ともに癒やされる寛ぎのひとときをお届けします。'}
        </p>
        <div class="text-right">
          <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-indigo-700 to-blue-800 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>`).join('')}
    </div>
  </section>

  <!-- 5. 1泊2日 青だる鑑賞＆新穂高ロープウェイ満喫モデルコース -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2.5">
      🗺️ 氷瀑と北アルプス大パノラマを巡る！奥飛騨温泉郷 1泊2日王道モデルコース
    </h2>
    <div class="space-y-4 text-xs md:text-sm">
      <div class="p-4.5 bg-indigo-50/60 rounded-2xl border border-indigo-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-indigo-800 text-white font-bold text-xs rounded-md">1日目</span>
          <strong class="text-stone-900">高山駅 ➔ 濃飛バスで平湯温泉 ➔ 福地温泉チェックイン ➔ 青だる氷瀑ライトアップ鑑賞</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【12:30】JR高山駅前・高山濃飛バスターミナルから新穂高温泉行き路線バスに乗車（所要約60分）。<br>
          【13:40】福地温泉口または平湯バスターミナルに到着。宿の送迎車で旅館へチェックイン。<br>
          【15:00】雪化粧の山並みを望む自家源泉の雪見露天風呂で、氷点下の外気とアツアツの湯の心地よいコントラストを堪能。<br>
          【18:00】囲炉裏端で夕食。炭火でじっくり焼く飛騨牛の朴葉味噌焼き、岩魚の塩焼き、すったて汁を地酒「飛騨の地酒」熱燗とともに味わう。<br>
          【20:00】防寒具（厚手ダウン、手袋、マフラー、滑り止め靴）を整え、徒歩で福地温泉「青だる」ライトアップ会場へ。青白く輝く巨大な氷瀑の回廊を散策。<br>
          【21:30】宿へ戻り、就寝前の露天風呂で冷えた体をじっくり温めて深い眠りへ。
        </p>
      </div>
      <div class="p-4.5 bg-blue-50/60 rounded-2xl border border-blue-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-blue-800 text-white font-bold text-xs rounded-md">2日目</span>
          <strong class="text-stone-900">朝の雪見風呂 ➔ 新穂高ロープウェイ山頂展望台 ➔ 平湯温泉足湯 ➔ 高山へ</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【07:30】朝風呂で爽やかな目覚め。朴葉味噌と温泉卵が並ぶ飛騨の温かな朝食をいただく。<br>
          【09:00】チェックアウト後、バスで新穂高温泉・新穂高ロープウェイ新穂高温泉駅へ。<br>
          【10:00】日本唯一の2階建てゴンドラに乗車し、標高2,156mの西穂高口駅展望台へ。白銀の槍・穂高連峰の360度大パノラマと雪の回廊を散策。<br>
          【12:30】ロープウェイ麓駅のレストランで、飛騨牛カレーや温かい高山ラーメンでランチ休憩。<br>
          【14:30】平湯バスターミナルへ移動し、バスターミナル内の足湯で温まりながらお土産（飛騨牛加工品、地酒、さるぼぼ）を購入。<br>
          【15:30】濃飛バスで高山駅へ戻り、特急ひだまたは高速バスで帰路へ。
        </p>
      </div>
    </div>
  </section>

  <!-- 6. FAQセクション -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2.5">
      ❓ 奥飛騨温泉郷の冬旅 よくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-indigo-900">Q. 冬期の奥飛騨への車でのアクセスは可能ですか？</strong>
        <p class="text-stone-700 leading-relaxed">
          国道158号線（安房峠道路）および国道471号線は、12月から3月にかけて激しい積雪と凍結路面（ブラックアイスバーン）になります。普通タイヤでの走行は道路交通法違反かつ命に関わる危険があります。必ず4WD車＋高性能スタッドレスタイヤを装着し、万が一の立ち往生に備えてタイヤチェーンを携行してください。降雪時の運転に不安がある方は、JR高山駅または松本駅からの直通定期バス（濃飛バス・アルピコ交通）の利用が最も安全・確実です。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-indigo-900">Q. 新穂高ロープウェイ山頂の気温と必要な服装は？</strong>
        <p class="text-stone-700 leading-relaxed">
          標高2,156mの西穂高口駅屋上展望台は、12月〜1月の厳冬期には日中でも氷点下10℃〜15℃前後、強風が吹くと体感温度は氷点下20℃近くまで低下します。スキーウェアや厚手のダウンジャケット、防風パンツ、厚手ウール靴下、滑り止め付きスノーブーツ、耳当て付きニット帽、手袋、ネックウォーマー、サングラス（雪の照り返し対策）が必須です。カイロをスマホの背面に貼っておくと低温による急激なバッテリー消費を防げます。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-indigo-900">Q. 「青だる」ライトアップの開催場所と見学のコツは？</strong>
        <p class="text-stone-700 leading-relaxed">
          青だるライトアップは福地温泉の温泉街中心（福地温泉バス停近く）で開催されます。見学は無料です。例年12月下旬から3月下旬の17:00〜22:00頃まで点灯されます。夜間の見学路は足元が凍結して非常に滑りやすいため、長靴やスノーブーツで慎重に歩行してください。宿で長靴や防寒具の貸し出しを行っている場合が多いので、チェックイン時に確認することをおすすめします。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. サイト内内部リンク集 -->
  <section class="my-8 p-5 bg-indigo-50/80 rounded-2xl border border-indigo-200">
    <h3 class="font-bold text-sm text-indigo-950 mb-3">📌 合わせて読みたい飛騨・中部の雪見名湯・冬旅特集</h3>
    <ul class="text-xs text-indigo-900 space-y-2 list-disc list-inside">
      <li><a href="/gifu" class="underline font-bold hover:text-indigo-700">岐阜県の人気温泉旅館・観光名所完全ガイド（下呂・奥飛騨・白川郷・高山）</a></li>
      <li><a href="/posts/shirakawago-okuhida-shinhotaka-hotels-guide" class="underline hover:text-indigo-700">白川郷合掌造り雪景色と奥飛騨温泉郷・新穂高絶景露天風呂巡りガイド</a></li>
      <li><a href="/posts/gero-onsen-bihada-ranking-guide" class="underline hover:text-indigo-700">下呂温泉：天下の三名泉！とろとろ美肌の湯と飛騨牛食べ比べ名宿ガイド</a></li>
      <li><a href="/posts/kusatsu-onsen-yubatake-winter-lightup-snow-bath-guide" class="underline hover:text-indigo-700">草津温泉の冬の湯畑ライトアップと西の河原雪見露天風呂！極上名宿ガイド</a></li>
      <li><a href="/posts/himi-onsen-tateyama-view-buri-guide" class="underline hover:text-indigo-700">富山・氷見温泉郷：雪の立山連峰パノラマと冬の王様「寒ぶり」会席ガイド</a></li>
    </ul>
  </section>

</div>`;

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    description: '12月〜1月の奥飛騨温泉郷を大特集！福地温泉の巨大氷瀑「青だる」ライトアップ、標高2,156m新穂高ロープウェイ西穂高口の冠雪大パノラマ、源泉掛け流しの雪見露天風呂、囲炉裏の飛騨牛朴葉味噌焼きを堪能する厳選名宿と1泊2日モデルプランを徹底解説。',
    prefecture: data.prefecture,
    area: data.area,
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: ['岐阜県', '奥飛騨温泉郷', '青だる', '氷瀑', '雪見露天風呂', '新穂高ロープウェイ', '飛騨牛', '冬旅行'],
    keywords: [
      '奥飛騨温泉郷 雪見露天 旅館',
      '青だる ライトアップ 福地温泉 ホテル',
      '新穂高ロープウェイ 近く 温泉宿',
      '奥飛騨 囲炉裏 飛騨牛 おすすめ宿',
      '奥飛騨温泉郷 源泉かけ流し 貸切露天',
      '奥飛騨 冬 旅行 モデルコース'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// 記事3: 北海道・阿寒湖温泉
// ========================================================
function buildAkanPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h[0];
  const otherHotels = h.slice(1, 4);

  const spotAkan = w.find(x => x.spotName === '阿寒湖') || w[0];
  const spotOnsen = w.find(x => x.spotName === '阿寒湖温泉') || w[1];
  const spotMarimo = w.find(x => x.spotName === 'マリモ') || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50 rounded-3xl border border-blue-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-blue-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Answer</span>
      <span class="text-xs text-blue-950 font-bold">12月〜1月の阿寒湖温泉・フロストフラワー＆氷上フェスティバル旅行総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【結論】阿寒湖の冬旅：奇跡の氷花「フロストフラワー」と氷上花火、アイヌの森に抱かれる名湯</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      道東の阿寒摩周国立公園に位置するカルデラ湖「阿寒湖」。12月下旬から湖面が完全に結氷し、厳冬期（12月〜1月）にだけ現れる世界的奇跡の造形美が「フロストフラワー（霜の花）」です。氷点下15℃以下の無風・快晴の朝、湖面の薄氷の上に水蒸気が結晶化して純白のガラス細工のような花畑を形成します。さらに結氷した湖上では「阿寒湖氷上フェスティバル ICE・愛す・阿寒『冬華美』」が開催され、マイナス20℃の澄み切った漆黒の夜空に打ち上がる大迫力の氷上花火やスノーモービル、氷上ワカサギ釣りが楽しめます。湖畔には北海道最大規模の「阿寒湖アイヌコタン」があり、幻想的なたいまつ行進やアイヌ古式舞踊を鑑賞可能。阿寒湖温泉の豊富な源泉掛け流し雪見露天風呂に浸かり、阿寒モシリ牛やオホーツク海産のタラバガニ・揚げたてワカサギ天ぷらを堪能する究極の道東冬旅が叶います。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-blue-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">フロストフラワー出現条件</span>
        <strong class="text-blue-900 text-sm">氷点下15℃以下・無風・快晴の早朝</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-blue-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">温泉泉質</span>
        <strong class="text-stone-900 text-sm">単純温泉・硫黄泉（美肌の湯）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-blue-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の氷上イベント</span>
        <strong class="text-cyan-800 text-sm">ICE・愛す・阿寒 冬華美（氷上花火）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-blue-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の必食ご当地美味</span>
        <strong class="text-amber-700 text-sm">氷上ワカサギ天ぷら＆阿寒モシリ牛</strong>
      </div>
    </div>
  </section>

  <!-- 1. 阿寒湖の冬景色とフロストフラワー -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2.5">
      ❄️ 湖面に咲く奇跡の氷の結晶「フロストフラワー」と白銀の阿寒湖氷上アクティビティ
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      「奇跡の霜の花」と呼ばれるフロストフラワーは、世界でも限られた条件の極寒地でしか見られない奇跡の自然現象です。出現の条件は「湖面が新しく結氷していること」「積雪がないこと」「気温がマイナス15℃以下であること」「風がほとんどないこと」の4つが揃った早朝に限られます。氷の割れ目から蒸発した湖水が瞬時に結晶化し、時間を追うごとに手のひらほどの純白の花びらのように成長していきます。息を吹きかけただけでも溶けてしまうほど繊細な造形美は、自然が生み出す芸術そのものです。鑑賞には地元ガイド同行のモーニングスノーシューツアーへの参加が安全で確実です。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      厚く張った氷の上では、冬ならではのアクティビティが目白押しです。氷にドリルで穴を開けて楽しむ「氷上ワカサギ釣り」は、道具一式をレンタルでき初心者でも手軽に挑戦可能。釣り上げたばかりのピチピチのワカサギをその場で天ぷらにして味わうサクサクの旨さは格別です。また、スノーモービルや四輪バギーで結氷した広大な湖上を疾走する体験は爽快そのものです。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      夜には「阿寒湖氷上フェスティバル ICE・愛す・阿寒『冬華美』」が連夜開催。氷点下20℃の凛とした静寂の中、湖上から打ち上げられる花火は、澄み切った冬空に光の粒がくっきりと浮かび上がり、雪原に反射して息をのむ美しさを放ちます。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る阿寒湖の冬の自然・文化（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 阿寒湖 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotAkan.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Lake_Akan_and_Mt_Oakan.jpg/640px-Lake_Akan_and_Mt_Oakan.jpg'}" alt="${spotAkan.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded">カルデラの聖湖</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotAkan.wikiTitle}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              阿寒湖（あかんこ）は、北海道釧路市北部にある淡水湖。阿寒摩周国立公園に含まれるカルデラ湖で、特別天然記念物のマリモが生息することで世界的知名度を持つ。冬期は全面結氷し、湖上フェスティバルやワカサギ釣りの舞台となる。
            </p>
          </div>
          <p class="text-[11px] text-blue-900 bg-blue-50 p-2.5 rounded-lg font-medium border border-blue-100">
            💡 湖畔からは雄阿寒岳と雌阿寒岳の雄大な山並みを望め、冬の白銀に染まる冠雪の稜線は神秘的な佇まいを見せます。
          </p>
        </div>
      </div>

      <!-- Spot 2: 阿寒湖温泉 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotOnsen.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Lake_Akan_hot_spring.jpg/640px-Lake_Akan_hot_spring.jpg'}" alt="${spotOnsen.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-cyan-100 text-cyan-800 font-bold rounded">道東随一の温泉街</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotOnsen.wikiTitle}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              阿寒湖温泉（あかんこおんせん）は、阿寒湖南岸に位置する北海道を代表する温泉地。1858年に松浦武四郎が調査した記録が残り、古くからアイヌの人々が利用してきた。弱アルカリ性単純温泉が豊富に湧出する。
            </p>
          </div>
          <p class="text-[11px] text-blue-900 bg-blue-50 p-2.5 rounded-lg font-medium border border-blue-100">
            💡 温泉街には手湯や足湯が点在し、各ホテルの最上階展望大浴場や露天風呂からは結氷した阿寒湖の広大な白銀世界を一望できます。
          </p>
        </div>
      </div>

      <!-- Spot 3: マリモ・アイヌコタン -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotMarimo.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Aegagropila_linnaei.jpg/640px-Aegagropila_linnaei.jpg'}" alt="${spotMarimo.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">特別天然記念物＆アイヌの絆</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">マリモと阿寒アイヌコタン</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              マリモは阿寒湖に群生する緑藻の一種で、美しい球状を保つ世界的希少生物。温泉街奥には約120名が暮らす北海道最大のアイヌ集落「阿寒湖アイヌコタン」があり、民芸品店や伝統舞踊劇場「イコロ」が並ぶ。
            </p>
          </div>
          <p class="text-[11px] text-blue-900 bg-blue-50 p-2.5 rounded-lg font-medium border border-blue-100">
            💡 冬の夜のアイヌコタンでは、雪に照らされるたいまつ行進やデジタルアートと古式舞踊を融合させたプログラム「ロストカムイ」が必見です。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 道東の冬グルメ深掘り -->
  <section class="space-y-4 my-8 p-6 bg-slate-50 rounded-3xl border border-slate-200">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b border-slate-300 pb-2">
      🦀 揚げたてワカサギ天ぷらと阿寒モシリ牛！オホーツク海鮮が彩る冬の道東美味会席
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      阿寒湖温泉の食の魅力は、清らかな湖の恵みと、釧路・オホーツクの極上海鮮、そして道東の大地が育むブランド肉の融合です。氷上釣りで揚がったばかりのワカサギは、臭みが一切なく骨まで柔らか。カラッと揚げた天ぷらに抹茶塩を振って頬張ると、上品な甘みとほのかな苦みが口いっぱいに広がります。また、阿寒の広大な自然で育てられた黒毛和牛「阿寒モシリ牛」は、赤身の芳醇な旨味と脂のキレが素晴らしく、陶板焼きやすき焼きで極上の肉質を堪能できます。
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-2">
      <div class="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
        <strong class="text-blue-900 block font-bold text-sm">氷上採れたてワカサギ天ぷら</strong>
        <p class="text-stone-600 leading-relaxed">
          真冬の阿寒湖名物。マイナス20℃の湖上で釣りたてを揚げる天ぷらは、身がふわふわでビールや地酒が進む冬の絶品です。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
        <strong class="text-blue-900 block font-bold text-sm">極上阿寒モシリ牛ステーキ</strong>
        <p class="text-stone-600 leading-relaxed">
          道東の大自然で丹精込めて肥育されたブランド牛。きめ細やかな肉質と濃厚な肉汁が冬の温泉宿の夕食を華やかに彩ります。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
        <strong class="text-blue-900 block font-bold text-sm">オホーツク直送タラバガニ＆ホタテ</strong>
        <p class="text-stone-600 leading-relaxed">
          釧路港・オホーツク海から直送される冬の蟹と大粒ホタテ。刺身、焼き、鍋と贅を尽くした海鮮会席が味わえます。
        </p>
      </div>
    </div>
  </section>

  <!-- 4. 楽天トラベル厳選：湖畔絶景＆源泉掛け流しの阿寒湖温泉名宿4選 -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2.5">
      🏨 楽天トラベル厳選：結氷湖パノラマ露天＆至高のおもてなしを誇る阿寒湖宿4選
    </h2>
    <p class="text-xs md:text-sm text-stone-600 leading-relaxed">
      全室から阿寒湖の白銀絶景を望める高級和風旅館から、氷上花火鑑賞に便利な湖畔のリゾートホテルまで、評判の高い宿を厳選しました。
    </p>

    <div class="space-y-6">
      <!-- 宿1: メイン宿 -->
      <div class="p-5 md:p-6 bg-white rounded-3xl border border-blue-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full md:w-56 h-44 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-blue-800 text-white font-bold text-[10px] rounded-full">全室露天風呂付・最高峰の座</span>
              <span class="text-xs text-stone-500">${mainHotel.address1}${mainHotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg md:text-xl leading-snug">${mainHotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${mainHotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-blue-700 text-sm">⭐ 総合評価 ${mainHotel.reviewAverage}（クチコミ ${mainHotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${mainHotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs md:text-sm text-stone-700 bg-blue-50/70 p-4 rounded-xl border border-blue-100 leading-relaxed">
          ${mainHotel.hotelSpecial || '阿寒湖畔に佇む大人のための隠れ家旅館。全室に自家源泉の客室露天風呂を備え、結氷した阿寒湖の静寂をプライベートに一望できます。道東の厳選食材をふんだんに盛り込んだ創作茶懐石と、細やかで行き届いたおもてなしで至福の冬籠りをお約束します。'}
        </p>
        <div class="text-right">
          <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-blue-700 to-cyan-800 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
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
              <span class="text-xs text-stone-500">${hotel.address1}${hotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg leading-snug">${hotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${hotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-blue-700 text-sm">⭐ 総合評価 ${hotel.reviewAverage}（${hotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${hotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs text-stone-700 bg-stone-50 p-3.5 rounded-xl border border-stone-200 leading-relaxed">
          ${hotel.hotelSpecial || '阿寒湖の結氷美と豊かな温泉を心ゆくまで満喫できる湖畔の人気宿。旬の道東食材を活かした温かい料理と、広々とした大浴場で極寒の旅の疲れを優しく癒やします。'}
        </p>
        <div class="text-right">
          <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-blue-700 to-cyan-800 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>`).join('')}
    </div>
  </section>

  <!-- 5. 1泊2日 フロストフラワー＆氷上フェスティバル満喫モデルコース -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2.5">
      🗺️ 氷の花と夜の氷上花火を巡る！阿寒湖温泉 1泊2日王道モデルコース
    </h2>
    <div class="space-y-4 text-xs md:text-sm">
      <div class="p-4.5 bg-blue-50/60 rounded-2xl border border-blue-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-blue-800 text-white font-bold text-xs rounded-md">1日目</span>
          <strong class="text-stone-900">たんちょう釧路空港 ➔ 阿寒バスで阿寒湖温泉 ➔ アイヌコタン散策 ➔ 氷上花火鑑賞</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【12:00】たんちょう釧路空港に到着。空港連絡バス「阿寒バス・阿寒湖エアポートライナー」に乗車（所要約70分）。<br>
          【13:15】阿寒湖温泉バスターミナルに到着。宿にチェックインし、湖畔を散策。<br>
          【14:30】「阿寒湖アイヌコタン」へ。木彫り工芸品のショップを巡り、アイヌシアター「イコロ」で伝統舞踊と現代劇「ロストカムイ」を鑑賞。<br>
          【17:00】旅館の最上階展望露天風呂へ。結氷した阿寒湖に夕暮れの残光が広がる白銀の絶景を眺めながら湯浴み。<br>
          【18:30】夕食。オホーツク直送の蟹、阿寒モシリ牛の陶板焼き、地場野菜の温かい小鍋仕立てに舌鼓。<br>
          【20:00】完全防寒を整え、結氷した阿寒湖上のフェスティバル会場へ。氷点下20℃の静寂の中、間近で打ち上がる「冬華美」花火を鑑賞。
        </p>
      </div>
      <div class="p-4.5 bg-cyan-50/60 rounded-2xl border border-cyan-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-cyan-800 text-white font-bold text-xs rounded-md">2日目</span>
          <strong class="text-stone-900">早朝フロストフラワー探勝ツアー ➔ 氷上ワカサギ釣り ➔ 釧路市内へ</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【06:30】地元公認ガイド同行のモーニングツアーに出発。結氷した湖面へスノーシューで向かい、朝日に輝く奇跡の「フロストフラワー」を探勝・撮影。<br>
          【08:00】宿へ戻り、温かい朝食で冷えた体を回復。温泉卵と北海道産米、熱い蟹汁を満喫。<br>
          【09:30】チェックアウト後、結氷湖上の特設テントで「氷上ワカサギ釣り」に挑戦。釣れたてをその場でサクサクの天ぷらに揚げて味わう。<br>
          【12:30】温泉街のカフェで名物の温かいシチューでランチ休憩。<br>
          【14:00】阿寒バスで釧路駅または釧路空港へ向かい、冬の道東の余韻を胸に帰路へ。
        </p>
      </div>
    </div>
  </section>

  <!-- 6. FAQセクション -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2.5">
      ❓ 阿寒湖の冬旅 よくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-blue-900">Q. フロストフラワーは必ず見られますか？見学時の注意点は？</strong>
        <p class="text-stone-700 leading-relaxed">
          フロストフラワーは「氷点下15℃以下の極寒」「無風」「積雪がないこと」など複数の気象条件が重なった早朝にしか現れないため、出現確率は約20〜30%と言われます。また、薄氷の危険箇所（湯壺と呼ばれる温泉湧出による未結氷地帯）があるため、個人で結氷湖上へ立ち入るのは絶対に避けてください。阿寒観光協会認定のネイチャーガイドが案内する早朝ツアーに必ず申し込んで参加してください。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-blue-900">Q. 冬期の気温はどのくらいですか？必要な防寒装備は？</strong>
        <p class="text-stone-700 leading-relaxed">
          12月下旬から1月の阿寒湖は、日中でも氷点下5℃〜10℃、夜間や早朝はマイナス20℃から25℃まで冷え込みます。スキーウェアクラスの完全防寒着、極暖インナーの重ね着、フリース、厚手ウール靴下（2枚履き推奨）、防寒・防水スノーブーツ、耳当て付きニット帽、防寒手袋（スマホ操作対応）、ネックウォーマーが必須です。カイロを靴先や腰、ポケットに複数携帯してください。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-blue-900">Q. 冬期の交通アクセスとレンタカー運転の難易度は？</strong>
        <p class="text-stone-700 leading-relaxed">
          冬期の道東の道路は広範囲にわたって圧雪・アイスバーンとなり、吹雪による地吹雪（ホワイトアウト）が発生することもあります。雪道運転に相当の慣れがない限り、レンタカーの運転は避け、たんちょう釧路空港やJR釧路駅、女満別空港からの定期路線バス（阿寒バス）やホテル運行の送迎バスを利用することを強くおすすめします。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. サイト内内部リンク集 -->
  <section class="my-8 p-5 bg-blue-50/80 rounded-2xl border border-blue-200">
    <h3 class="font-bold text-sm text-blue-950 mb-3">📌 合わせて読みたい北海道・道東の雪見名湯・冬旅特集</h3>
    <ul class="text-xs text-blue-900 space-y-2 list-disc list-inside">
      <li><a href="/hokkaido" class="underline font-bold hover:text-blue-700">北海道の人気温泉リゾート・観光名所完全ガイド（定山渓・登別・洞爺湖・阿寒湖）</a></li>
      <li><a href="/posts/drift-ice-walk-icebreaker-cruise-okhotsk-hotels-guide" class="underline hover:text-blue-700">オホーツク流氷ウォークと砕氷船おーろら号！知床ウトロ・網走温泉名宿ガイド</a></li>
      <li><a href="/posts/otaru-snow-story-canal-illumination-asarigawa-onsen-guide" class="underline hover:text-blue-700">小樽ゆき物語「青の運河」と朝里川温泉！冬の小樽寿司と雪見露天名宿ガイド</a></li>
      <li><a href="/posts/zao-onsen-snow-monster-juhyo-lightup-winter-guide" class="underline hover:text-blue-700">蔵王温泉の樹氷ライトアップ・スノーモンスター体験と強酸性硫黄泉名宿ガイド</a></li>
      <li><a href="/posts/nyuto-onsen-kyo-snow-secret-bath-kiritanpo-akita-guide" class="underline hover:text-blue-700">秋田・乳頭温泉郷の白銀雪見露天風呂と本場きりたんぽ鍋ガイド</a></li>
    </ul>
  </section>

</div>`;

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    description: '12月〜1月の阿寒湖温泉を大特集！マイナス15℃以下の早朝に湖面に咲く奇跡の「フロストフラワー（霜の花）」、氷上フェスティバルICE・愛す・阿寒の冬花火、阿寒アイヌコタンの幻想雪灯り、湖水一望の源泉かけ流し雪見露天風呂と阿寒モシリ牛・ワカサギ天ぷらを味わう厳選名宿ガイド。',
    prefecture: data.prefecture,
    area: data.area,
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: ['北海道', '阿寒湖温泉', 'フロストフラワー', '雪見温泉', '冬華美', 'アイヌコタン', 'ワカサギ釣り', '冬旅行'],
    keywords: [
      '阿寒湖 フロストフラワー ツアー ホテル',
      '阿寒湖温泉 雪見露天 旅館 おすすめ',
      '阿寒湖 氷上フェスティバル 花火 宿泊',
      '阿寒湖 アイヌコタン 近く 温泉宿',
      '阿寒湖温泉 高級旅館 部屋食',
      '冬の北海道 道東 温泉旅行 モデルコース'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// 記事4: 山口・下関＆長門湯本温泉
// ========================================================
function buildShimonosekiPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h[0];
  const otherHotels = h.slice(1, 4);

  const spotKarato = w.find(x => x.spotName === '唐戸市場') || w[0];
  const spotYumoto = w.find(x => x.spotName === '長門湯本温泉') || w[1];
  const spotMotonosumi = w.find(x => x.spotName === '元乃隅神社') || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50 rounded-3xl border border-rose-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-rose-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Answer</span>
      <span class="text-xs text-rose-950 font-bold">11月〜1月の下関とらふぐ＆長門湯本温泉・元乃隅神社旅行総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【結論】下関・長門湯本の冬旅：本場「下関とらふぐ」最盛期と開湯600年温泉街、元乃隅神社初詣</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      本州最西端に位置する山口県の下関と長門湯本。11月から1月にかけての冬シーズンは、下関名物「ふく（とらふぐ）」が年間で最も脂と旨味を蓄える最高の旬を迎えます。日本屈指のフグ取扱量を誇る南風泊市場直送の極上とらふぐは、職人技が光る菊花盛りの「てっさ（薄造り）」、プリプリの身を骨ごと楽しむ「てっちり鍋」、香ばしく炙ったヒレ酒、とろける白子焼きまでフルコースで堪能できます。美食に酔いしれた後は、開湯約600年を誇る名湯「長門湯本温泉」へ。音信川（おとずれがわ）沿いに竹林の階段や飛び石、カフェが整備された和モダンな温泉街は、冬のライトアップが情緒満点です。さらに日本海に突き出す断崖絶壁に123基の朱塗り鳥居が連なる「元乃隅神社」や「角島大橋」へ足を延ばせば、荒波と朱色のコントラストが美しい新春開運初詣が叶います。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-rose-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">とらふぐ最盛期</span>
        <strong class="text-rose-900 text-sm">11月中旬〜2月（冬が最も濃厚）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-rose-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">温泉泉質</span>
        <strong class="text-stone-900 text-sm">アルカリ性単純温泉（pH9.9の美肌湯）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-rose-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">元乃隅神社鳥居数</span>
        <strong class="text-red-700 text-sm">123基（CNN日本の美しい場所選出）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-rose-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の必食ご当地美味</span>
        <strong class="text-amber-800 text-sm">活とらふぐフルコース＆長州地鶏</strong>
      </div>
    </div>
  </section>

  <!-- 1. 下関とらふぐの真髄と長門湯本温泉の魅力 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2.5">
      🐡 冬の王様「下関とらふぐ」のフルコースと音信川沿いに灯る長門湯本温泉の風情
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      下関では、福を呼ぶ魚として親しみを込めて「ふく」と呼ばれます。豊後水道や日本海で獲れた最高級のとらふぐが集まる下関南風泊市場では、冬の訪れとともに初競りが行われ、11月から1月にかけて身が引き締まり最も濃厚な旨味を蓄えます。皿の絵柄が透けて見えるほど極限まで薄く引かれた「てっさ」は、コリコリとした弾力と噛むほどに広がる上品なアミノ酸の甘みが秀逸。自家製ポン酢と安岡ねぎ、もみじおろしを巻いていただく贅沢は、まさに冬の日本料理の至高です。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      美食を堪能した後は、車で約1時間の「長門湯本温泉」へ。室町時代に大寧寺の定庵禅師が住吉大明神のお告げによって発見したとされる山口県最古の名湯です。近年、星野リゾートの監修のもと温泉街全体が大胆にリノベーションされ、清流・音信川を中心に川床テラス、竹林の小径、足湯、飛び石が配置された「そぞろ歩きが楽しい温泉街」へと進化を遂げました。温泉街中央に佇む立ち寄り湯「恩湯（おんとう）」は、岩盤から湧き出る足元湧出の生きた源泉を堪能できる名建築です。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      長門湯本の泉質は、pH9.9を誇る高アルカリ性単純温泉。とろりと肌を包み込むようなまろやかな感触で、古い角質をやさしく落とし、湯上がり後は吸い付くようなしっとり肌へと整えてくれる「美肌の湯」として女性にも圧倒的な支持を集めています。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る下関・長門の名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 唐戸市場 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotKarato.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Karato_Fish_Market_Shimonoseki_Japan.jpg/640px-Karato_Fish_Market_Shimonoseki_Japan.jpg'}" alt="${spotKarato.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-rose-100 text-rose-800 font-bold rounded">関門海峡の海の台所</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotKarato.wikiTitle}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              唐戸市場（からといちば）は、山口県下関市唐戸町にある魚市場。関門海峡に面し、地方卸売市場でありながら一般客や観光客に広く開かれている。週末や祝日には名物「活きいき馬関街」が開催され、握り寿司やふぐ汁が並ぶ。
            </p>
          </div>
          <p class="text-[11px] text-rose-900 bg-rose-50 p-2.5 rounded-lg font-medium border border-rose-100">
            💡 冬の朝の唐戸市場では、天然とらふぐの刺身やふく汁（フグのアラで出汁をとった熱々味噌汁）が手頃な価格で味わえます。
          </p>
        </div>
      </div>

      <!-- Spot 2: 長門湯本温泉 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotYumoto.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nagato_Yumoto_Onsen.jpg/640px-Nagato_Yumoto_Onsen.jpg'}" alt="${spotYumoto.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded">開湯600年の温泉街再生</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotYumoto.wikiTitle}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              長門湯本温泉（ながとゆもとおんせん）は、山口県長門市深川湯本にある温泉。応永34年（1427年）開湯の県内最古の温泉。音信川沿いの温泉街リノベーションが高く評価され、全国から注目を集める名湯リゾート。
            </p>
          </div>
          <p class="text-[11px] text-rose-900 bg-rose-50 p-2.5 rounded-lg font-medium border border-rose-100">
            💡 音信川沿いの飛び石や竹林ライトアップは夜の散策に最適。温泉街のクラフトビールバーや和カフェでのんびり過ごすのが大人の贅沢です。
          </p>
        </div>
      </div>

      <!-- Spot 3: 元乃隅神社 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotMotonosumi.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Motonosumi_Inari_Shrine_torii_tunnel.jpg/640px-Motonosumi_Inari_Shrine_torii_tunnel.jpg'}" alt="${spotMotonosumi.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-red-100 text-red-800 font-bold rounded">日本海の開運絶景</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotMotonosumi.wikiTitle}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              元乃隅神社（もとのすみじんじゃ）は、山口県長門市油谷津黄にある神社。昭和30年に白狐のお告げにより建立。日本海に向かって断崖に123基の赤い鳥居がトンネルのように連なり、大鳥居の上部に設置された日本一入れにくい賽銭箱で知られる。
            </p>
          </div>
          <p class="text-[11px] text-rose-900 bg-rose-50 p-2.5 rounded-lg font-medium border border-rose-100">
            💡 冬の日本海の白波と朱色の鳥居が織りなすコントラストは圧巻。年末年始の新春開運祈願スポットとして全国から参拝者が訪れます。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 冬の下関ふぐ料理深掘り -->
  <section class="space-y-4 my-8 p-6 bg-amber-50/70 rounded-3xl border border-amber-200">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b border-amber-300 pb-2">
      🍲 てっさ・てっちり・ヒレ酒・白子焼き！冬の「下関活とらふぐ」完全解剖
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      冬の下関で味わうふぐ会席は、まさに人生で一度は体験したい日本の食の頂点です。ふぐの身は高タンパク低カロリーで、良質なコラーゲンがたっぷり。薄造りの「てっさ」で舌触りと淡麗な旨味を楽しんだ後は、土鍋に昆布出汁を張り、ふぐのアラと身、春菊や白菜を煮込む「てっちり鍋」へ。ふぐの骨から溶け出した極上の旨味エキスを吸った野菜とプルプルの身は、体の芯から温まる極上の美味です。さらに、香ばしく天日干ししたヒレを熱々の日本酒に浸してマッチで点火する「ヒレ酒」は、立ち上る香ばしい芳香とコク深い旨味が冷えた体に染み渡ります。締めには、ふぐの出汁がすべて凝縮された黄金色の「ふぐ雑炊」で至福の余韻を味わいます。
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-2">
      <div class="p-3.5 bg-white rounded-xl border border-amber-200 space-y-1">
        <strong class="text-rose-900 block font-bold text-sm">職人技の薄造り「てっさ」</strong>
        <p class="text-stone-600 leading-relaxed">
          熟練の包丁さばきで大皿に美しく広げられた菊花盛り。特製ポン酢とピリ辛のもみじおろしでいただく弾力は絶品です。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-amber-200 space-y-1">
        <strong class="text-rose-900 block font-bold text-sm">濃厚とろける「とらふぐ白子焼き」</strong>
        <p class="text-stone-600 leading-relaxed">
          冬の12月〜1月にしか出回らない貴重なオスの白子。表面を香ばしく焼き、中はクリーミーなチーズのようにとろける贅沢品。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-amber-200 space-y-1">
        <strong class="text-rose-900 block font-bold text-sm">香ばしい「ふぐヒレ酒」＆雑炊</strong>
        <p class="text-stone-600 leading-relaxed">
          炙りヒレの出汁が溶け込んだ熱燗と、すべての旨味を米粒が吸い込んだ雑炊。最後の一口までふぐの恵みを堪能できます。
        </p>
      </div>
    </div>
  </section>

  <!-- 4. 楽天トラベル厳選：とらふぐ会席＆極上名湯の長門湯本・下関宿4選 -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2.5">
      🏨 楽天トラベル厳選：本場とらふぐ会席＆美肌温泉を堪能できる山口名宿4選
    </h2>
    <p class="text-xs md:text-sm text-stone-600 leading-relaxed">
      音信川沿いの散策が心地よい長門湯本温泉の老舗旅館や、関門海峡の眺望と活ふぐフルコースを提供する高評価宿をセレクトしました。
    </p>

    <div class="space-y-6">
      <!-- 宿1: メイン宿 -->
      <div class="p-5 md:p-6 bg-white rounded-3xl border border-rose-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full md:w-56 h-44 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-rose-800 text-white font-bold text-[10px] rounded-full">音信川沿い・旬の味覚会席</span>
              <span class="text-xs text-stone-500">${mainHotel.address1}${mainHotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg md:text-xl leading-snug">${mainHotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${mainHotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-rose-700 text-sm">⭐ 総合評価 ${mainHotel.reviewAverage}（クチコミ ${mainHotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${mainHotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs md:text-sm text-stone-700 bg-rose-50/70 p-4 rounded-xl border border-rose-100 leading-relaxed">
          ${mainHotel.hotelSpecial || '長門湯本温泉の静かな高台に佇むやすらぎの湯宿。豊かなアルカリ性単純温泉の湯をたたえる大浴場と露天風呂で肌を磨き、冬は本場山口のとらふぐや長州地鶏、日本海の旬魚を贅沢に取り入れた会席料理をご堪能いただけます。'}
        </p>
        <div class="text-right">
          <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-rose-700 to-orange-800 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
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
              <span class="text-xs text-stone-500">${hotel.address1}${hotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg leading-snug">${hotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${hotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-rose-700 text-sm">⭐ 総合評価 ${hotel.reviewAverage}（${hotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${hotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs text-stone-700 bg-stone-50 p-3.5 rounded-xl border border-stone-200 leading-relaxed">
          ${hotel.hotelSpecial || '開湯600年の名湯と山口の海・山の幸を心ゆくまで満喫できる人気宿。落ち着いた和の風情の中で、冬の極上ふぐ料理と温泉三昧をお楽しみいただけます。'}
        </p>
        <div class="text-right">
          <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-rose-700 to-orange-800 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>`).join('')}
    </div>
  </section>

  <!-- 5. 1泊2日 とらふぐ＆長門湯本・元乃隅神社モデルコース -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2.5">
      🗺️ ふぐ満喫と開運初詣！下関・長門湯本温泉 1泊2日大人の王道モデルコース
    </h2>
    <div class="space-y-4 text-xs md:text-sm">
      <div class="p-4.5 bg-rose-50/60 rounded-2xl border border-rose-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-rose-800 text-white font-bold text-xs rounded-md">1日目</span>
          <strong class="text-stone-900">新下関駅 ➔ 唐戸市場でふぐ汁ランチ ➔ 赤間神宮参拝 ➔ 長門湯本温泉へ</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【11:00】山陽新幹線・新下関駅に到着。レンタカーまたはバスで唐戸市場へ（所要約20分）。<br>
          【11:30】唐戸市場で握り寿司や熱々のふぐ汁をランチに味わう。関門海峡の潮風を感じながらボードウォークを散策。<br>
          【13:00】竜宮城を模した鮮やかな水天門が美しい「赤間神宮」へ参拝。安徳天皇を祀る社殿で開運・厄除け祈願。<br>
          【14:30】車で日本海側を北上し、長門湯本温泉へ（所要約60分）。<br>
          【15:30】長門湯本温泉にチェックイン。音信川沿いの散策路に出て、竹林の階段や飛び石、立ち寄り湯「恩湯」の外観を眺めながら足湯を満喫。<br>
          【18:30】旅館で夕食。本場下関直送の活とらふぐフルコース（てっさ・てっちり・ヒレ酒・白子・雑炊）に舌鼓。<br>
          【20:30】夜の音信川ライトアップを散策後、とろとろの美肌露天風呂で極上の湯浴み。
        </p>
      </div>
      <div class="p-4.5 bg-orange-50/60 rounded-2xl border border-orange-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-orange-800 text-white font-bold text-xs rounded-md">2日目</span>
          <strong class="text-stone-900">朝の美肌湯 ➔ 元乃隅神社初詣 ➔ 角島大橋の冬絶景 ➔ 新下関駅へ</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【08:00】朝風呂で肌を磨き、山口県産コシヒカリと郷土料理が並ぶ朝食を味わう。<br>
          【09:30】チェックアウト後、車で断崖絶壁に佇む「元乃隅神社」へ（所要約30分）。123基の朱塗り鳥居をくぐり、日本海の白波が打ち寄せる龍宮の潮吹を望む。大鳥居の賽銭箱に挑戦！<br>
          【11:30】エメラルドグリーンの海に架かる「角島大橋」へドライブ（所要約35分）。冬の澄み切った大気に映える日本屈指の絶景パノラマを堪能。<br>
          【13:00】角島の食事処で名物「瓦そば」や海鮮丼でランチ休憩。<br>
          【15:30】新下関駅へ戻り、駅ナカでお土産（ふぐ刺しセット、獺祭、ういろう）を購入して新幹線で帰路へ。
        </p>
      </div>
    </div>
  </section>

  <!-- 6. FAQセクション -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2.5">
      ❓ 下関とらふぐ＆長門湯本温泉 よくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-rose-900">Q. とらふぐの美味しい時期はいつですか？予約のコツは？</strong>
        <p class="text-stone-700 leading-relaxed">
          「秋の彼岸から春の彼岸まで」と言われますが、特に身が最も締まり白子が大きくなる11月中旬から1月・2月が年間最高の旬です。冬場の人気旅館や名門割烹は、年末年始や週末を中心に満室になりやすいため、1〜2ヶ月前からの早期予約をおすすめします。予約時は「とらふぐフルコース」確約の宿泊プランを選ぶと間違いありません。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-rose-900">Q. 冬期の山口・日本海側の天候や路面凍結の心配は？</strong>
        <p class="text-stone-700 leading-relaxed">
          山口県の日本海側（長門市・萩市方面）は、冬期に強い寒波が入ると積雪や早朝・夜間の路面凍結が発生することがあります。特に元乃隅神社や角島へ向かう峠道や橋梁上は凍結しやすいため、12月下旬〜1月にレンタカーを借りる際はスタッドレスタイヤ装着車の指定が安心です。寒波のない晴れた日中はノーマルタイヤでも走行可能な日が多いですが、事前の天気予報チェックが大切です。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-rose-900">Q. 長門湯本温泉の立ち寄り湯「恩湯」の利用方法は？</strong>
        <p class="text-stone-700 leading-relaxed">
          恩湯は予約不要で利用できる共同浴場です（営業時間10:00〜22:00、入浴料は大人900円前後）。深さ約1メートルの浴槽の底から湧き出る39℃前後のぬる湯は、加温・加水・循環ろ過を一切行わない完全な源泉掛け流し。熱い湯が苦手な方でも30分以上ゆったり浸かることができ、温泉街散策の途中に立ち寄るのが最高です。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. サイト内内部リンク集 -->
  <section class="my-8 p-5 bg-rose-50/80 rounded-2xl border border-rose-200">
    <h3 class="font-bold text-sm text-rose-950 mb-3">📌 合わせて読みたい山口・西日本の冬の美食名湯特集</h3>
    <ul class="text-xs text-rose-900 space-y-2 list-disc list-inside">
      <li><a href="/yamaguchi" class="underline font-bold hover:text-rose-700">山口県の人気温泉旅館・観光名所完全ガイド（長門湯本・萩・下関・湯田）</a></li>
      <li><a href="/posts/hagi-castle-town-shokasonjuku-hotels-guide" class="underline hover:text-rose-700">萩の城下町と松下村塾！世界遺産と日本海鮮魚を堪能する名旅館ガイド</a></li>
      <li><a href="/posts/torafugu-blowfish-kaiseki-gourmet-hotels-guide" class="underline hover:text-rose-700">本場とらふぐ会席が美味しい名宿！全国の厳選ふぐ料理温泉宿比較ガイド</a></li>
      <li><a href="/posts/kinosaki-onsen-seven-baths-yukata-guide" class="underline hover:text-rose-700">城崎温泉カニ旅行：七つの外湯めぐりと冬の極上松葉ガニ会席ガイド</a></li>
      <li><a href="/posts/dogo-onsen-matsuyama-hotels-guide" class="underline hover:text-rose-700">愛媛・道後温泉：日本最古の名湯本館と瀬戸内冬真鯛・伊予牛名宿ガイド</a></li>
    </ul>
  </section>

</div>`;

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    description: '11月〜1月の下関＆長門湯本温泉を大特集！最盛期を迎える本場「下関とらふぐ」極上てっさ・てっちり・ヒレ酒フルコース、音信川の和モダンな冬ライトアップとpH9.9の美肌名湯、元乃隅神社の123基鳥居開運初詣と角島大橋絶景を巡る1泊2日モデルプランを徹底解説。',
    prefecture: data.prefecture,
    area: data.area,
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: ['山口県', '下関', 'とらふぐ', '長門湯本温泉', '元乃隅神社', '美肌の湯', '角島大橋', '冬旅行'],
    keywords: [
      '下関 ふぐ 温泉旅館 おすすめ',
      '長門湯本温泉 とらふぐ 会席 ホテル',
      '元乃隅神社 近く 宿泊',
      '長門湯本 音信川 温泉宿 おすすめ',
      '下関 とらふぐ てっさ 宿泊プラン',
      '冬の山口旅行 温泉モデルコース'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// 記事5: 福島・会津若松＆大内宿・東山温泉
// ========================================================
function buildAizuPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('原瀧') || x.hotelName.includes('月のあかり')) || h[1] || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 3);

  const spotOuchijuku = w.find(x => x.spotName === '大内宿') || w[0];
  const spotHigashiyama = w.find(x => x.spotName === '東山温泉') || w[1];
  const spotTsurugajo = w.find(x => x.spotName === '若松城') || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50 rounded-3xl border border-amber-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-amber-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Answer</span>
      <span class="text-xs text-amber-950 font-bold">12月〜1月の会津若松・大内宿雪まつり＆東山温泉旅行総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【結論】会津・大内宿の冬旅：白銀の茅葺き宿場町と鶴ヶ城雪景色、東山温泉の雪見露天と会津馬刺し</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      東北・福島県の歴史と伝統が息づく城下町「会津若松」と、国の重要伝統的建造物群保存地区「大内宿」。12月下旬から1月にかけては一面の白銀世界へと変貌を遂げます。大内宿では、街道沿いに立ち並ぶ約30軒の茅葺き民家の屋根にふんわりと厚い雪帽子が積もり、まるで江戸時代へタイムスリップしたかのような日本の原風景が広がります。名物の一本の長ネギを箸代わりにしてすする「高遠そば（ねぎそば）」や、囲炉裏の炭火で焼く郷土菓子「しんごろう」は冬散策の醍醐味。市内では赤瓦の天守閣が純白の雪と鮮やかな対比を描く名城「鶴ヶ城」が凛と佇みます。宿は開湯約1300年、名僧行基が発見し会津藩主の湯治場として栄えた「東山温泉」へ。湯川の渓流沿いに湧く硫酸塩泉の雪見露天風呂に浸かり、柔らかく濃厚な極上会津馬刺しや伝統料理こづゆ、全国新酒鑑評会金賞連覇を誇る会津銘酒の熱燗を堪能する極上の冬籠りをお届けします。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">大内宿雪景色見頃</span>
        <strong class="text-amber-900 text-sm">12月下旬〜2月下旬（白銀の宿場町）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">温泉泉質</span>
        <strong class="text-stone-900 text-sm">カルシウム・ナトリウム-硫酸塩・塩化物泉</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">名城雪景色</span>
        <strong class="text-red-700 text-sm">鶴ヶ城（国内唯一の赤瓦天守雪景色）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の必食ご当地美味</span>
        <strong class="text-amber-800 text-sm">会津赤身馬刺し＆ねぎそば・熱燗</strong>
      </div>
    </div>
  </section>

  <!-- 1. 白銀の大内宿と鶴ヶ城雪景色の魅力 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      ❄️ 江戸の風情を今に残す「大内宿」の雪化粧と赤瓦が映える名城「鶴ヶ城」
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      南会津の山間に抱かれた大内宿は、かつて会津若松と日光今市を結ぶ下野街道（会津西街道）の要衝として栄えた宿場町です。約450メートルにわたる街道の両側には、寄棟造りの茅葺き民家が整然と並び、現在も店舗兼住居として大切に住み継がれています。雪が降り積もる冬期は、茅葺き屋根の上に丸く盛り上がった雪が積もり、軒下からはツララが下がる幻想的な光景が出現。村外れの「見晴台」から街道を一望すると、水墨画の世界に迷い込んだかのような圧倒的な静寂美に包まれます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      大内宿を訪れたら外せないのが、老舗「三澤屋」をはじめとする蕎麦屋でいただく「高遠そば（ねぎそば）」です。器の上に丸ごと一本渡された生の白ネギを箸代わりに使い、蕎麦を器用に引っ掛けてすすりながら、ネギそのものをかじって薬味とします。ネギのピリリとした辛味と甘みが、コシの強い手打ち十割蕎麦の風味を引き立て、囲炉裏の炭火にあたりながら頬張る時間は旅の最高の思い出になります。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      会津若松市内へ戻れば、難攻不落の名城「鶴ヶ城（若松城）」が待っています。幕末の戊辰戦争で約1ヶ月の猛攻に耐え抜いた城として名高く、現存する日本の天守閣で唯一の「赤瓦」を採用。赤瓦の落ち着いた朱色と、真っ白な天守閣の壁、そして屋根に積もる雪のコントラストは、冬の会津ならではの息をのむ美景です。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る会津・大内宿の名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 大内宿 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotOuchijuku.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ouchijuku_Aizu_Japan.jpg/640px-Ouchijuku_Aizu_Japan.jpg'}" alt="${spotOuchijuku.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded">重要伝統的建造物群保存地区</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotOuchijuku.wikiTitle}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              大内宿（おおうちじゅく）は、福島県南会津郡下郷町大字大内にある旧宿場。下野街道の宿場町として栄え、国の重要伝統的建造物群保存地区に選定。茅葺き屋根の民家が街道沿いに整然と立ち並び、江戸時代の宿場の景観を今に残す。
            </p>
          </div>
          <p class="text-[11px] text-amber-900 bg-amber-50 p-2.5 rounded-lg font-medium border border-amber-100">
            💡 街道の奥にある子安観音堂への石段を登った見晴台から望む茅葺き屋根の雪景色パノラマは、SNSやポスターでも名高い絶景撮影スポットです。
          </p>
        </div>
      </div>

      <!-- Spot 2: 東山温泉 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotHigashiyama.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Higashiyama_Onsen_Aizuwakamatsu.jpg/640px-Higashiyama_Onsen_Aizuwakamatsu.jpg'}" alt="${spotHigashiyama.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-stone-200 text-stone-800 font-bold rounded">開湯1300年の名湯</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotHigashiyama.wikiTitle}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              東山温泉（ひがしやまおんせん）は、福島県会津若松市にある温泉。8世紀に行基によって発見されたと伝えられ、会津藩の奥座敷として歴代藩主や新選組の土方歳三、竹久夢二、与謝野晶子など多くの文人墨客が逗留した。
            </p>
          </div>
          <p class="text-[11px] text-amber-900 bg-amber-50 p-2.5 rounded-lg font-medium border border-amber-100">
            💡 湯川の渓流沿いに旅館が立ち並び、川床や渓谷を望む露天風呂からは雪が舞い散る美しい渓流雪景色を間近に楽しめます。
          </p>
        </div>
      </div>

      <!-- Spot 3: 鶴ヶ城（若松城） -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotTsurugajo.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Aizuwakamatsu_Castle_Keep.jpg/640px-Aizuwakamatsu_Castle_Keep.jpg'}" alt="${spotTsurugajo.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-red-100 text-red-800 font-bold rounded">名城の赤瓦雪化粧</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotTsurugajo.wikiTitle}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              若松城（わかまつじょう）は、福島県会津若松市追手町にあった日本の城。地元では鶴ヶ城（つるがじょう）と呼ばれる。国指定史跡。戊辰戦争の舞台として知られ、赤瓦を用いた五層の天守閣が白銀の冬景色の中に堂々とそびえる。
            </p>
          </div>
          <p class="text-[11px] text-amber-900 bg-amber-50 p-2.5 rounded-lg font-medium border border-amber-100">
            💡 冬期には鶴ヶ城公園で「会津絵ろうそくまつり」が開催され、雪の上に灯される手描きの絵ろうそくの柔らかな光が幻想的な夜を彩ります。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 会津の冬グルメ深掘り -->
  <section class="space-y-4 my-8 p-6 bg-orange-50/70 rounded-3xl border border-orange-200">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b border-orange-300 pb-2">
      🥩 極上「会津赤身馬刺し」と名物「こづゆ」！日本一の金賞地酒を熱燗で愉しむ
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      会津地方の冬の食文化を語る上で欠かせないのが「馬刺し」です。熊本の霜降り馬刺しとは異なり、会津の馬刺しはきめ細やかな極上の「赤身肉」が主流。力道山が会津を訪れた際に広めたとされる「特製辛子味噌」を醤油に溶いて食べるのが会津流の伝統スタイルです。脂っこさがなく、噛みしめるほどに肉の豊かなコクと旨味が広がる赤身馬刺しは、ヘルシーで深い味わいを誇ります。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      さらに、冠婚葬祭やお正月のお祝いに欠かせない伝統郷土料理「こづゆ」は、ホタテの干し貝柱から取った上品な出汁に、里芋、人参、キクラゲ、糸こんにゃく、豆麩（まめふ）を煮込んだ滋味あふれる一杯。専用の浅い朱塗りの会津漆器（手塩皿）で何杯でもおかわりしていただくのが礼儀とされます。そして福島県は全国新酒鑑評会で金賞受賞数日本一の記録を誇る酒どころ。飛露喜、写楽、会津ほまれ、末廣など、極寒の冬に仕込まれた銘酒を雪見露天上がりに熱燗でキュッと傾ける時間は至高の極みです。
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-2">
      <div class="p-3.5 bg-white rounded-xl border border-orange-200 space-y-1">
        <strong class="text-amber-900 block font-bold text-sm">会津伝統の極上赤身馬刺し</strong>
        <p class="text-stone-600 leading-relaxed">
          鮮度抜群の柔らかい赤身モモ肉。ピリッと辛い特製ニンニク辛子味噌を溶いた醤油で食す、一度食べたら忘れられない名物。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-orange-200 space-y-1">
        <strong class="text-amber-900 block font-bold text-sm">貝柱出汁が香る伝統「こづゆ」</strong>
        <p class="text-stone-600 leading-relaxed">
          江戸時代から受け継がれる武家料理。干し貝柱の上品な旨味と具沢山の温かさが、冬の旅人の胃袋を優しく癒やします。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-orange-200 space-y-1">
        <strong class="text-amber-900 block font-bold text-sm">会津が誇る銘酒の熱燗</strong>
        <p class="text-stone-600 leading-relaxed">
          飯豊山や磐梯山の清らかな伏流水で仕込まれた純米酒。雪降る夜にいただくぬる燗・熱燗は、郷土料理の旨味を何倍にも引き立てます。
        </p>
      </div>
    </div>
  </section>

  <!-- 4. 楽天トラベル厳選：東山温泉・渓流雪見露天＆会津美食の宿4選 -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      🏨 楽天トラベル厳選：湯川渓流の雪見露天＆会津会席を愉しむ東山温泉宿4選
    </h2>
    <p class="text-xs md:text-sm text-stone-600 leading-relaxed">
      大内宿や鶴ヶ城へのアクセスに優れ、湯川の滝や渓流を望む自家源泉の雪見露天風呂と、会津の郷土料理を味わえる評判宿を厳選しました。
    </p>

    <div class="space-y-6">
      <!-- 宿1: メイン宿 -->
      <div class="p-5 md:p-6 bg-white rounded-3xl border border-amber-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full md:w-56 h-44 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-amber-800 text-white font-bold text-[10px] rounded-full">湯川渓谷沿い・自家源泉の湯宿</span>
              <span class="text-xs text-stone-500">${mainHotel.address1}${mainHotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg md:text-xl leading-snug">${mainHotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${mainHotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-amber-700 text-sm">⭐ 総合評価 ${mainHotel.reviewAverage}（クチコミ ${mainHotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${mainHotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs md:text-sm text-stone-700 bg-amber-50/70 p-4 rounded-xl border border-amber-100 leading-relaxed">
          ${mainHotel.hotelSpecial || '湯川の自然瀑布を望む絶好のロケーションを誇る名門宿。自家源泉から湧き出る豊かな硫酸塩泉を掛け流した露天風呂からは、雪化粧した渓谷美を間近に一望できます。夕食には極上の会津牛や赤身馬刺し、伝統のこづゆなど、会津の旬と歴史を味わい尽くす本格会席料理が振る舞われます。'}
        </p>
        <div class="text-right">
          <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-amber-700 to-orange-800 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
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
              <span class="text-xs text-stone-500">${hotel.address1}${hotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg leading-snug">${hotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${hotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-amber-700 text-sm">⭐ 総合評価 ${hotel.reviewAverage}（${hotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${hotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs text-stone-700 bg-stone-50 p-3.5 rounded-xl border border-stone-200 leading-relaxed">
          ${hotel.hotelSpecial || '開湯1300年の名湯・東山温泉の歴史薫る宿。雪見風呂を満喫できる広々とした大浴場と、会津の旬素材を活かした温かいお料理で旅の疲れを優しく解きほぐします。'}
        </p>
        <div class="text-right">
          <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-amber-700 to-orange-800 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>`).join('')}
    </div>
  </section>

  <!-- 5. 1泊2日 大内宿＆東山温泉満喫モデルコース -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      🗺️ 茅葺き雪宿場と名城の白銀世界！会津若松・大内宿 1泊2日王道モデルコース
    </h2>
    <div class="space-y-4 text-xs md:text-sm">
      <div class="p-4.5 bg-amber-50/60 rounded-2xl border border-amber-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-amber-800 text-white font-bold text-xs rounded-md">1日目</span>
          <strong class="text-stone-900">会津若松駅 ➔ 鶴ヶ城雪景色見学 ➔ 七日町通り散策 ➔ 東山温泉へ</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【11:30】磐越西線・会津若松駅に到着。「まちなか周遊バス（あかべぇ・ハイカラさん）」に乗車。<br>
          【12:00】「鶴ヶ城（若松城）」に到着。赤瓦と天守閣の白壁が純白の雪と織りなす冬の壮麗な景色を鑑賞。天守閣から雪晴れの会津盆地を一望。<br>
          【14:00】大正ロマン薫るレトロな街並み「七日町通り」へ。老舗酒蔵（末廣酒造嘉永蔵）で酒蔵見学と利き酒を楽しみ、会津漆器や絵ろうそくのお店を巡る。<br>
          【16:00】路線バスまたはタクシーで会津の奥座敷「東山温泉」へ（所要約15分）。<br>
          【16:30】旅館にチェックイン。湯川のせせらぎと雪景色を望む自家源泉の露天風呂で冷えた体をじっくり温める。<br>
          【18:30】夕食。会津名物の赤身馬刺し、温かいこづゆ、会津牛の陶板焼きを地酒「飛露喜」「写楽」の熱燗とともに満喫。
        </p>
      </div>
      <div class="p-4.5 bg-stone-100 rounded-2xl border border-stone-300 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-stone-800 text-white font-bold text-xs rounded-md">2日目</span>
          <strong class="text-stone-900">朝風呂 ➔ 湯野上温泉経由で大内宿へ ➔ 名物ねぎそばランチ ➔ 帰路へ</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【08:00】雪見の朝風呂を満喫後、会津コシヒカリと郷土小鉢が並ぶ朝食をいただく。<br>
          【09:30】チェックアウト後、車または会津鉄道「お座敷・展望列車」で湯野上温泉駅へ（茅葺き屋根の駅舎が雪に覆われ風情抜群）。<br>
          【10:30】タクシーまたは連絡バス「猿游号」で白銀の「大内宿」へ（所要約15分）。<br>
          【11:00】雪帽子をかぶった茅葺き民家が並ぶ街道を散策。見晴台へ登り、水墨画のような大内宿の絶景パノラマを撮影。<br>
          【12:30】老舗蕎麦処で名物の「高遠そば（ねぎそば）」と囲炉裏炭火焼きの「しんごろう（じゅうねん味噌を塗った餅）」を味わう。<br>
          【14:30】会津若松駅へ戻り、駅ナカでお土産（赤べこ、ままどおる、喜多方ラーメン、地酒）を購入して帰路へ。
        </p>
      </div>
    </div>
  </section>

  <!-- 6. FAQセクション -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      ❓ 会津・大内宿の冬旅 よくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-amber-900">Q. 冬期の大内宿へのアクセス方法と道路状況は？</strong>
        <p class="text-stone-700 leading-relaxed">
          12月から2月の大内宿周辺は豪雪地帯です。車で行く場合は4WD車＋スタッドレスタイヤが絶対必須で、路面凍結や急カーブに注意してください。公共交通機関を利用する場合は、会津若松駅から会津鉄道で「湯野上温泉駅」へ向かい、そこから観光周遊バス「猿游号（さるゆうごう・冬期ダイヤ要確認）」またはタクシー（約15分、片道約2,000円〜2,500円）を利用するのが確実で安心です。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-amber-900">Q. 大内宿の冬の散策に適した服装や履物は？</strong>
        <p class="text-stone-700 leading-relaxed">
          大内宿の街道および見晴台への石段は、踏み固められた雪が凍結して非常に滑りやすくなります。革靴やヒールは厳禁で、滑り止めの溝が深いスノーブーツや長靴が必須です。気温は日中でも0℃前後、風が吹くと氷点下まで下がるため、厚手のダウンコート、手袋、マフラー、ニット帽、使い捨てカイロをご用意ください。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-amber-900">Q. 大内宿雪まつりの開催時期と見どころは？</strong>
        <p class="text-stone-700 leading-relaxed">
          例年2月の第2土曜日・日曜日に「大内宿雪まつり」が開催されます。宿場内に無数の雪灯籠が作られ、夕暮れとともに火が灯されます。下帯姿の男衆がたいまつを持って街道を駆け抜ける御神火戴火（ごじんかたいか）や、夜空を彩る冬花火など、幻想的な雪国の祭りを体感できます。まつり期間中は周辺道路が大変混雑するため、時間に余裕を持った行動が必要です。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. サイト内内部リンク集 -->
  <section class="my-8 p-5 bg-amber-50/80 rounded-2xl border border-amber-200">
    <h3 class="font-bold text-sm text-amber-950 mb-3">📌 合わせて読みたい福島・東北の雪見名湯・冬旅特集</h3>
    <ul class="text-xs text-amber-900 space-y-2 list-disc list-inside">
      <li><a href="/fukushima" class="underline font-bold hover:text-amber-700">福島県の人気温泉旅館・観光名所完全ガイド（会津若松・磐梯・東山・いわき）</a></li>
      <li><a href="/posts/155" class="underline hover:text-amber-700">白銀のJR只見線と奥会津柳津！名湯と会津地鶏を満喫する冬の厳選名宿ガイド</a></li>
      <li><a href="/posts/zao-onsen-snow-monster-juhyo-lightup-winter-guide" class="underline hover:text-amber-700">蔵王温泉の樹氷ライトアップ・スノーモンスター体験と強酸性硫黄泉名宿ガイド</a></li>
      <li><a href="/posts/ginzan-onsen-taisho-roman-snow-view-guide" class="underline hover:text-amber-700">山形・銀山温泉：大正ロマンの木造建築＆ガス灯灯る雪景色宿おすすめガイド</a></li>
      <li><a href="/posts/nyuto-onsen-kyo-snow-secret-bath-kiritanpo-akita-guide" class="underline hover:text-amber-700">秋田・乳頭温泉郷の白銀雪見露天風呂と本場きりたんぽ鍋ガイド</a></li>
    </ul>
  </section>

</div>`;

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    description: '12月〜1月の会津若松・東山温泉＆大内宿を大特集！白銀に輝く茅葺き屋根の宿場町「大内宿」と名物一本ねぎそば、国内唯一の赤瓦天守が雪化粧する「鶴ヶ城」、開湯1300年の東山温泉渓流雪見露天、極上会津赤身馬刺しと日本一の金賞地酒を味わう厳選名宿ガイド。',
    prefecture: data.prefecture,
    area: data.area,
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: ['福島県', '大内宿', '会津若松', '東山温泉', '鶴ヶ城', '雪見露天風呂', '馬刺し', '冬旅行'],
    keywords: [
      '大内宿 雪景色 観光 ホテル',
      '会津東山温泉 雪見露天 旅館 おすすめ',
      '鶴ヶ城 雪化粧 観光 宿泊',
      '大内宿 ねぎそば 近く 宿',
      '会津若松 馬刺し 郷土料理 温泉宿',
      '冬の福島 会津 温泉旅行 モデルコース'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

function main() {
  console.log('Generating 5 completely independent winter destination guides...');

  const posts = [
    buildNozawaPost(collectedData['theme_1_nozawa']),
    buildOkuhidaPost(collectedData['theme_2_okuhida']),
    buildAkanPost(collectedData['theme_3_akan']),
    buildShimonosekiPost(collectedData['theme_4_shimonoseki_nagato']),
    buildAizuPost(collectedData['theme_5_aizu_higashiyama'])
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
