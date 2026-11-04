// scripts/new_articles/article27_misotsuchi.js
module.exports = function buildArticle27(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-saitama-chichibu-misotsuchi-tsurara-ashigakubo-onsen-hotels-guide";
  const title = "【埼玉・奥秩父】三十槌の氷柱＆あしがくぼの氷柱2027完全攻略！荒川源流の巨大天然氷瀑ライトアップと秩父七湯・名物豚みそ丼を堪能する極上温泉宿5選";
  const description = "厳冬の奥秩父に現れる自然の彫刻「三十槌の氷柱」と道の駅直結の壮大な「あしがくぼの氷柱」。大滝・荒川源流の断崖絶壁に凍りつく幅30m超の天然氷瀑、七色に揺らめく夜間ライトアップの鑑賞ポイント、マイカー凍結道路の走行注意点を現地目線で徹底解説。開湯200年を誇る秩父七湯・新木鉱泉の卵水美肌温泉や、伝統の豚みそ丼・名水手打ちそばを堪能できる厳選名宿5選を完全網羅。";
  const date = "2026-11-04";
  const prefecture = "埼玉県";
  const area = "秩父・長瀞";

  const hAraki = hotels.find(h => h.hotelNo === 5828) || hotels[0];
  const hHananoya = hotels.find(h => h.hotelNo === 147685) || hotels[1];
  const hNoen = hotels.find(h => h.hotelNo === 2636) || hotels[2];
  const hMiyamoto = hotels.find(h => h.hotelNo === 20394) || hotels[3];
  const hWadou = hotels.find(h => h.hotelNo === 6100) || hotels[4];

  const wTsurara = wiki["三十槌の氷柱"] || {};
  const wChichibuShrine = wiki["秩父神社"] || {};
  const wNagatoro = wiki["長瀞渓谷"] || {};
  const wMitsumine = wiki["三峯神社"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-cyan-800/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-cyan-300 font-extrabold text-xs tracking-wider">
      <span>❄️</span><span>2026-2027冬 奥秩父「三十槌の氷柱」＆秩父温泉郷 最新現地速報</span>
    </div>
    <p class="text-xs text-cyan-100 leading-relaxed">
      1月上旬開幕！荒川源流の断崖を埋め尽くす巨大天然氷瀑ライトアップ。名物・豚みそ丼と開湯200年「卵水」美肌温泉を巡る奥秩父の極上冬旅へ。
    </p>
  </div>
  <a href="${hAraki.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    ♨️ 秩父七湯・新木鉱泉の空室を見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 mb-4">
  奥秩父の厳冬が創り出す青き氷のカーテン！「三十槌の氷柱」の神秘
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  都心から西武特急ラビューでわずか約80分、秩父盆地を取り囲む山々が深い静寂に包まれる1月。荒川の源流域に位置する奥秩父・大滝地区の河原に、自然の猛威と美しさが織りなす冬の奇跡「三十槌の氷柱（みそつちのつらら）」姿を現します。岩肌から染み出す清らかな湧水が、氷点下の寒気によって幾重にも凍りつき、幅約30メートル、高さ約8メートルにおよぶ天然の巨大な氷壁を形成します。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  秩父三大氷柱（三十槌の氷柱、あしがくぼの氷柱、尾ノ内渓谷百景氷柱）の中でも、三十槌の氷柱だけが唯一「湧水によって自生する完全な天然氷柱」を含んでいるのが最大の特長です。清流・荒川のエメラルドグリーンの川面に映り込む氷の造形美は、日中は陽光を受けてクリスタルのように青白く輝き、夜間にはフルカラーLEDによるライトアップによって幻想的な青、白、紫のグラデーションへと変貌します。対岸のキャンプ場ウッドデッキから見渡すその光景は、別世界へと迷い込んだかのような錯覚を覚えるほどの迫力です。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  さらに秩父路の冬を彩るもう一つの名所が、西武秩父線芦ヶ久保駅から徒歩わずか10分の「あしがくぼの氷柱」。地元の人々が斜面に散水して創り上げる壮大な人工氷瀑で、電車を降りてすぐ鑑賞できるアクセスの良さと、地元のボランティアから振る舞われる温かい甘酒や紅茶が旅人の冷えた身体を優しく癒やしてくれます。氷柱鑑賞のあとは、江戸時代から続く秩父七湯の名湯に身を沈め、秩父名物の豚みそ丼や名水手打ちそば、秩父錦などの銘酒に舌鼓を打つ――これこそが首都圏近郊で味わえる最高の冬旅です。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-6">
  ❄️ 三十槌＆あしがくぼ氷柱 鑑賞の極意＆凍結道路・防寒対策
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-cyan-100 text-cyan-800 font-extrabold text-xs rounded-lg">鑑賞ポイント</span>
      <h3 class="text-base font-bold text-stone-900">天然氷柱と人工氷柱の見どころ比較</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>三十槌の天然氷柱:</strong> 上流側にある天然氷柱は、岩の割れ目から染み出る湧水が創り出すため、氷の先端が繊細で透明度が際立っています。気温が安定して氷点下が続く1月中旬〜2月上旬が最も成長し美しい姿を見せます。</p>
      <p>② <strong>三十槌の人工氷柱:</strong> 下流側の巨大な氷柱群。散水によって迫力ある氷のカーテンが作られ、天然氷柱との対比が楽しめます。夜のライトアップ時は両方が一斉に照らされ圧巻のスケールを誇ります。</p>
      <p>③ <strong>あしがくぼの氷柱の特等席:</strong> 兵ノ沢の自然斜面約200mに広がる氷柱。遊歩道を登った展望台からは、眼下を走る西武特急ラビューと氷柱のコラボレーションという鉄道ファン垂涎の絶景が撮影できます。</p>
      <p>④ <strong>温かいおもてなし:</strong> あしがくぼの氷柱会場では、地元産の紅茶（横瀬町産）または甘酒の1杯無料サービスがあり、厳しい寒さの中でホッとする温もりを味わえます。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-blue-100 text-blue-800 font-extrabold text-xs rounded-lg">アクセス＆装備</span>
      <h3 class="text-base font-bold text-stone-900">路面凍結・スタッドレス必須と足元防寒</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【マイカーのスタッドレスタイヤ必須】</strong> 三十槌の氷柱がある大滝地区（国道140号線）は、標高が高く日陰が多いため、日中に雪が溶けても夕暮れ以降はブラックアイスバーン状態に完全凍結します。ノーマルタイヤでの走行は絶対に危険ですので、スタッドレスタイヤまたはチェーンを必ず装着してください。</p>
      <p><strong>【足元の完全滑り止め対策】</strong> 河原や見学路は氷が張っていたり雪が固まっていたりして大変滑りやすくなっています。溝の深いスノーブーツや防寒トレッキングシューズを着用し、必要に応じて簡易チェーンスパイクを装着するのが賢明です。</p>
      <p><strong>【公共交通機関のアクセス】</strong> 三十槌へは西武秩父駅から西武観光バス「三峯神社行き」または「中津川行き」で「三十場」バス停下車徒歩約15分。あしがくぼへは西武秩父線「芦ヶ久保駅」から徒歩約10分と電車でのアクセスが極めて良好です。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  🏨 秩父七湯の名湯と美食に憩う！奥秩父・秩父温泉郷の厳選宿5選
</h2>

<!-- 宿1: 新木鉱泉旅館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 font-black text-xs rounded-full">創業文政十年（1827年）・秩父七湯「御代の湯」名物卵水と木造建築の情緒</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 秩父七湯『御代の湯』 新木鉱泉旅館（埼玉県秩父市山田）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hAraki.reviewAverage}（${hAraki.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hAraki.hotelImageUrl}" alt="${hAraki.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hAraki.roomImageUrl || hAraki.hotelImageUrl}" alt="${hAraki.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 江戸時代後期、文政10年の創業から約200年の歴史を紡ぐ木造の老舗湯宿。太い梁と格子窓が残る本館は、古き良き日本の旅籠の情緒を今に伝えます。中庭を囲む落ち着いた空間で、氷柱散策で冷えた身体を温めるのに最高のロケーションです。
      </p>
      <p>
        <strong>【名物「卵水（たまごみず）」の湯触り】</strong> 代々受け継がれる源泉は、ほんのりと硫黄の香りが漂い、掌にすくうとまるで化粧水のようにトロリと滑らかな感触から「卵水」と称される名湯。入浴直後から肌がつるつるになり、高い保湿・保温効果で湯冷めしにくいのが冬に嬉しい特徴です。
      </p>
      <p>
        <strong>【郷土会席と手打ちそば】</strong> 夕食は秩父の山川の恵みを活かした郷土会席。秩父名産の豚肉を特製味噌でじっくり漬け込んで焼き上げた「豚みそ焼き」や、岩魚の塩焼き、季節の山菜料理、そして手打ちの秩父そばが並び、滋味あふれる味わいを堪能できます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hAraki.hotelMinCharge || 8220).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hAraki.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: ちちぶ温泉 はなのや -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-purple-100 text-purple-900 font-black text-xs rounded-full">全室露天風呂付き・大人の隠れ家リゾート</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. ちちぶ温泉 はなのや（埼玉県秩父市荒川白久）</h3>
    </div>
    <span class="px-3 py-1.5 bg-purple-50 border border-purple-300 text-purple-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hHananoya.reviewAverage}（${hHananoya.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hHananoya.hotelImageUrl}" alt="${hHananoya.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hHananoya.roomImageUrl || hHananoya.hotelImageUrl}" alt="${hHananoya.hotelName} 露天風呂付き客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 奥秩父の山並みに抱かれた白久の地に佇む全客室露天風呂付きの贅沢な湯宿。秩父鉄道白久駅から無料送迎があり、三十槌の氷柱がある大滝エリアへもアクセスしやすい絶好の拠点です。
      </p>
      <p>
        <strong>【プライベート露天風呂の贅沢】</strong> すべての客室のテラスに陶器や檜の客室露天風呂が備えられ、冬の澄んだ夜空に輝く満天の星空を眺めながら、24時間いつでも好きな時にプライベートな雪見・星見風呂を堪能できます。
      </p>
      <p>
        <strong>【創作和食とフリードリンクの贅】</strong> 食事は個室食事処にて、地元秩父の採れたて野菜や上質な黒毛和牛を使用した華やかな創作会席を提供。ロビーでは無料の地酒やワイン、湯上がりアイスのサービスが充実しており、滞在満足度が非常に高い名宿です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hHananoya.hotelMinCharge || 18700).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hHananoya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-purple-700 hover:bg-purple-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 和銅鉱泉 薬師の湯 ゆの宿 和どう -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">日本最古の通貨「和同開珎」ゆかりの薬師の湯・横瀬川の渓流露天</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 和銅鉱泉 薬師の湯 ゆの宿 和どう（埼玉県秩父市黒谷）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hWadou.reviewAverage}（${hWadou.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hWadou.hotelImageUrl}" alt="${hWadou.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hWadou.roomImageUrl || hWadou.hotelImageUrl}" alt="${hWadou.hotelName} 渓流露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 和同開珎の発祥の地・和銅遺跡の近く、横瀬川の清流沿いに建つ静寂の温泉宿。秩父鉄道和銅黒谷駅から徒歩約15分（送迎あり）。金運招福のパワースポットとしても知られ、あしがくぼの氷柱会場へも車で約15分の距離にあります。
      </p>
      <p>
        <strong>【歴史ある薬師の湯】</strong> 古くから「目薬の湯」「傷治しの湯」として近郷の人々に親しまれてきた薬師の湯。横瀬川のせせらぎが耳に心地よい露天風呂や大浴場は、弱アルカリ性の柔らかな湯触りで心身の緊張を解きほぐしてくれます。
      </p>
      <p>
        <strong>【名物・ぼたん鍋と秩父会席】</strong> 冬の夕食には、旨味が凝縮された猪肉を特製赤味噌で煮込む「ぼたん鍋」プランが大人気。秩父岩魚の塩焼きや地元野菜の天ぷらとともに、体の芯からぽかぽかと温まる冬ならではの味覚を堪能できます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hWadou.hotelMinCharge || 5808).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hWadou.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: ナチュラルファームシティ農園ホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">高台から秩父盆地と武甲山を一望・冬の雲海と自然食バイキング</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. ナチュラルファームシティ農園ホテル（埼玉県秩父市大宮）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hNoen.reviewAverage}（${hNoen.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hNoen.hotelImageUrl}" alt="${hNoen.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hNoen.roomImageUrl || hNoen.hotelImageUrl}" alt="${hNoen.hotelName} 展望風呂からの夜景" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 秩父市街を見下ろす高台に位置し、霊峰・武甲山の堂々たる姿と秩父市街地のパノラマを一望できるリゾートホテル。気象条件が整う冬の早朝には、眼下に広がる壮大な「秩父雲海」に出会える特等席です。
      </p>
      <p>
        <strong>【絶景展望大浴場】</strong> 展望大浴場「満天の湯」からは、昼は雪化粧の山並み、夜は煌めく秩父の夜景を見渡しながらの入浴が可能。サウナや露天風呂も完備され、広々とした空間で開放感あふれるリフレッシュが叶います。
      </p>
      <p>
        <strong>【直営農園の新鮮野菜バイキング】</strong> 夕食・朝食は、地元農家や直営農園で収穫された新鮮な減農薬・無農薬野菜をたっぷり使った自然食バイキング。健康志向のヘルシーな料理から秩父名物グルメまで豊富に揃い、ファミリー層にも大好評です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hNoen.hotelMinCharge || 8500).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hNoen.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 秩父西谷津の湯 宮本の湯 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-rose-100 text-rose-900 font-black text-xs rounded-full">元幕内力士が手がけるユニークな相撲風呂・名物ちゃんこ鍋</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 秩父西谷津の湯 里山香ぐはし 宮本の湯（埼玉県秩父郡小鹿野町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-rose-50 border border-rose-300 text-rose-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hMiyamoto.reviewAverage}（${hMiyamoto.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMiyamoto.hotelImageUrl}" alt="${hMiyamoto.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMiyamoto.roomImageUrl || hMiyamoto.hotelImageUrl}" alt="${hMiyamoto.hotelName} 土俵露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 元幕内力士「剣武」の実家が営む個性豊かな里山旅館。小鹿野町の自然に囲まれた素朴なロケーションで、三十槌の氷柱や尾ノ内渓谷百景氷柱へのアクセス拠点として大変人気があります。
      </p>
      <p>
        <strong>【土俵を模したユニークな大浴場】</strong> 本格的な大相撲の土俵を模した露天風呂や、囲炉裏を備えた貸切風呂など他にはない趣向が満載。天然の西谷津温泉はアルカリ性の優しいお湯で、湯上がりの肌がしっとりと潤います。
      </p>
      <p>
        <strong>【本場直伝の本格ちゃんこ鍋】</strong> 夕食の目玉は、元力士直伝の特製秘伝スープで作る本格ちゃんこ鍋。たっぷりの季節野菜と鶏肉、特製つみれが煮込まれた熱々の鍋は、冬の奥秩父観光で冷えた身体を芯からポカポカに温めてくれます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hMiyamoto.hotelMinCharge || 11550).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hMiyamoto.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-rose-700 hover:bg-rose-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="sightseeing" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6 leading-relaxed">
  氷柱鑑賞とともに巡りたい、奥秩父・長瀞エリア屈指のパワースポットや名勝をWikipedia公式データと合わせて解説します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-cyan-700 font-bold text-sm">📍 三十槌の氷柱（みそつちのつらら）</span>
    </div>
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wTsurara.extract || '奥秩父・荒川の源流域の断崖絶壁から湧き出る湧水が、厳冬期の厳しい寒気によって凍結して創り出される天然の巨大氷瀑。幅約30m、高さ約8mにおよぶ氷のカーテンがライトアップされ、青や白の幻想的な光に照らされます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-cyan-700 font-bold text-sm">📍 秩父神社（知々夫国新一の宮）</span>
    </div>
    ${wChichibuShrine.thumbnail ? `<img src="${wChichibuShrine.thumbnail}" alt="${wChichibuShrine.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wChichibuShrine.extract || '三峯神社・宝登山神社とともに秩父三社の一角を占める名社。徳川家康公寄進の社殿には「つなぎの龍」や「お元気三猿」など左甚五郎作の見事な彫刻が施されています。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-cyan-700 font-bold text-sm">📍 長瀞渓谷（岩畳・宝登山神社）</span>
    </div>
    ${wNagatoro.thumbnail ? `<img src="${wNagatoro.thumbnail}" alt="${wNagatoro.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wNagatoro.extract || '国の名勝・天然記念物に指定されている結晶片岩の岩畳。冬の長瀞ではこたつ舟の運航や、宝登山山頂の黄色いロウバイ園（1月中旬〜）が見頃を迎えます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-cyan-700 font-bold text-sm">📍 三峯神社（関東屈指の天空パワースポット）</span>
    </div>
    ${wMitsumine.thumbnail ? `<img src="${wMitsumine.thumbnail}" alt="${wMitsumine.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wMitsumine.extract || '標高約1100mの奥秩父山上に鎮座し、狼を神の使い（お犬さま）として祀る古社。厳冬期は厳かな霧や雪景色に包まれ、神秘的な気線が満ちています。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  🗺️ 奥秩父の氷瀑と美肌名湯 1泊2日冬モデルコース
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-cyan-700 text-white rounded text-xs">1日目</span>
      秩父神社初詣から三十槌の氷柱ライトアップへ
    </h3>
    <p class="leading-relaxed">
      10:30 西武秩父駅到着 ➔ 徒歩で「秩父神社」参拝・社殿彫刻鑑賞 ➔ 番場通りで名物「豚みそ丼」または「わらじカツ丼」ランチ ➔ 14:00 宿にチェックインし名物温泉で体を温める ➔ 16:30 防寒具を整えて奥秩父「三十槌の氷柱」へ移動 ➔ 17:00 点灯・青く輝く天然氷瀑とライトアップ鑑賞 ➔ 19:00 宿へ戻り、熱々のぼたん鍋や郷土会席料理に舌鼓 ➔ 夜の貸切風呂で極上の温まり体験。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-cyan-700 text-white rounded text-xs">2日目</span>
      あしがくぼの氷柱鑑賞と長瀞ロウバイ散策
    </h3>
    <p class="leading-relaxed">
      08:30 宿の和朝食 ➔ 09:30 出発 ➔ 10:00「あしがくぼの氷柱」見学、無料の温かい甘酒を堪能 ➔ 11:30 長瀞へ移動、宝登山ロープウェイで山頂へ、咲き誇る冬のロウバイ園鑑賞 ➔ 13:30 長瀞岩畳周辺で名水手打ちそばランチ ➔ 15:30 西武秩父駅前「祭の湯」でお土産（ちちぶ餅・秩父錦）を購入し特急ラビューで帰路へ。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  📊 奥秩父・秩父温泉郷 厳選5宿のスペック比較一覧
</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
      <tr>
        <th class="p-3">宿名</th>
        <th class="p-3">エリア</th>
        <th class="p-3">楽天評価</th>
        <th class="p-3">宿泊目安(1名)</th>
        <th class="p-3">温泉・泉質特徴</th>
        <th class="p-3">食事の看板メニュー</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">新木鉱泉旅館</td>
        <td class="p-3">秩父山田</td>
        <td class="p-3 font-bold text-cyan-700">★ ${hAraki.reviewAverage}</td>
        <td class="p-3">¥${(hAraki.hotelMinCharge || 8220).toLocaleString()}〜</td>
        <td class="p-3">開湯200年名物「卵水」単純硫黄泉</td>
        <td class="p-3">秩父豚みそ焼き・手打ち秩父そば</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ちちぶ温泉 はなのや</td>
        <td class="p-3">奥秩父白久</td>
        <td class="p-3 font-bold text-cyan-700">★ ${hHananoya.reviewAverage}</td>
        <td class="p-3">¥${(hHananoya.hotelMinCharge || 18700).toLocaleString()}〜</td>
        <td class="p-3">全客室テラス露天風呂完備</td>
        <td class="p-3">個室創作会席・地酒フリードリンク</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">和銅鉱泉 ゆの宿 和どう</td>
        <td class="p-3">秩父黒谷</td>
        <td class="p-3 font-bold text-cyan-700">★ ${hWadou.reviewAverage}</td>
        <td class="p-3">¥${(hWadou.hotelMinCharge || 5808).toLocaleString()}〜</td>
        <td class="p-3">横瀬川の渓流露天風呂・薬師の湯</td>
        <td class="p-3">冬限定・熱々特製ぼたん鍋</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">農園ホテル</td>
        <td class="p-3">秩父高台</td>
        <td class="p-3 font-bold text-cyan-700">★ ${hNoen.reviewAverage}</td>
        <td class="p-3">¥${(hNoen.hotelMinCharge || 8500).toLocaleString()}〜</td>
        <td class="p-3">武甲山と市街夜景を望む展望大浴場</td>
        <td class="p-3">直営農園の自然食・野菜バイキング</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">宮本の湯</td>
        <td class="p-3">小鹿野町</td>
        <td class="p-3 font-bold text-cyan-700">★ ${hMiyamoto.reviewAverage}</td>
        <td class="p-3">¥${(hMiyamoto.hotelMinCharge || 11550).toLocaleString()}〜</td>
        <td class="p-3">大相撲の土俵を模した露天風呂</td>
        <td class="p-3">元幕内力士直伝・本格ちゃんこ鍋</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>

<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q1. 三十槌の氷柱の見頃時期とライトアップ時間はいつですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 例年1月上旬から2月中旬にかけて見頃を迎えます。天候や冷え込みの状況により前後しますが、氷が最も太く成長するのは1月中旬〜下旬です。ライトアップは平日17:00〜19:00、土日祝は17:00〜20:00頃まで実施されます（最終入場は終了30分前）。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q2. ノーマルタイヤの車で行くことはできますか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 絶対におやめください。秩父市街地には雪がなくても、三十槌の氷柱がある大滝地区や影森以西の国道140号線、山影のカーブは日没とともに路面凍結（ブラックアイスバーン）が発生します。スタッドレスタイヤまたは滑り止めチェーンの携行が必須です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q3. 電車・バスで行く場合、おすすめのアクセス方法は？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 電車利用の場合、芦ヶ久保駅直結の「あしがくぼの氷柱」が圧倒的に便利です。三十槌の氷柱へ行く場合は、西武秩父駅から西武観光バスを利用するか、西武秩父駅前でレンタカー（スタッドレス標準装備指定）を利用するのがスムーズです。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q4. 会場の足元の状況や適した服装は？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 河原の石や雪道、木製階段を歩くため、ハイヒールや革靴は厳禁です。滑り止めの溝がある防水スノーブーツや防寒トレッキングシューズを強く推奨します。夜間はマイナス5度以下まで下がるため、極暖ヒートテック、厚手のダウンコート、手袋、耳当て、ホッカイロを持参してください。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-100 border border-stone-200 text-center space-y-3">
  <h3 class="text-base font-bold text-stone-900">埼玉・秩父エリアの旅情報も合わせてチェック！</h3>
  <ul class="text-xs text-stone-600 space-y-1.5 inline-block text-left">
    <li>👉 <a href="/saitama-famous-chichibu-sake-hotels-guide/" class="text-cyan-800 hover:text-cyan-600 underline">秩父の地酒「秩父錦」と名物グルメを愉しむ温泉宿ガイド</a></li>
    <li>👉 <a href="/chichibu-nagatoro-mitsumine-hotels-guide/" class="text-cyan-800 hover:text-cyan-600 underline">三峯神社・長瀞渓谷参拝に便利な秩父人気ホテル特集</a></li>
    <li>👉 <a href="/saitama/" class="text-cyan-800 hover:text-cyan-600 underline">埼玉県の宿・温泉地・旬の観光特集一覧</a></li>
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
    image: hAraki.hotelImageUrl,
    other_images: [
      hHananoya.hotelImageUrl,
      hWadou.hotelImageUrl,
      hNoen.hotelImageUrl,
      hMiyamoto.hotelImageUrl
    ],
    hotel_name: `${hAraki.hotelName}・${hHananoya.hotelName} ほか`,
    affiliate_url: hAraki.affiliateUrl,
    categories: ["冬のイベント特集", "氷柱ライトアップ", "三十槌の氷柱", "あしがくぼの氷柱", "秩父温泉郷", "豚みそ丼"],
    price: `¥${(hWadou.hotelMinCharge || 5808).toLocaleString()}〜`,
    rating: hAraki.reviewAverage || 4.57,
    review_count: hAraki.reviewCount || 980,
    date: date,
    is_special_feature: true,
    keywords: [
      "三十槌の氷柱 2027 混雑 ライトアップ 見頃",
      "あしがくぼの氷柱 アクセス 電車",
      "新木鉱泉旅館 卵水 宿泊記",
      "ちちぶ温泉 はなのや 露天風呂付き客室",
      "和どう 薬師の湯 ぼたん鍋",
      "秩父 氷柱 道路 凍結 スタッドレス"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["三十槌の氷柱", "あしがくぼの氷柱", "秩父温泉", "新木鉱泉", "はなのや", "豚みそ丼", "冬の秩父旅行"]
---

# ${title}

厳冬の奥秩父に現れる自然の彫刻「三十槌の氷柱」と道の駅直結の壮大な「あしがくぼの氷柱」。

大滝・荒川源流の断崖絶壁に凍りつく幅30m超の天然氷瀑、七色に揺らめく夜間ライトアップの鑑賞ポイント、マイカー凍結道路の走行注意点を徹底解説。

開湯200年を誇る秩父七湯・新木鉱泉の卵水美肌温泉や、伝統の豚みそ丼・名水手打ちそばを堪能できる厳選名宿5選を完全網羅します。

---

## ❄️ 三十槌＆あしがくぼ氷柱 鑑賞の極意＆凍結道路・防寒対策

- **三十槌の天然氷柱:** 湧水が自生して凍りつくため透明度が高く、1月中旬〜下旬に最盛期を迎える青白い氷のカーテン。
- **あしがくぼの氷柱:** 芦ヶ久保駅徒歩10分。特急ラビューと氷柱の共演や、地元ボランティアによる温かい甘酒・紅茶の無料振る舞いが魅力。
- **スタッドレスタイヤ必須:** 国道140号線大滝周辺は日没後に完全凍結（ブラックアイスバーン）するためノーマルタイヤ厳禁。
- **足元の防寒＆滑り止め:** 河原の石道や凍結階段を歩くため、防水防寒スノーブーツを必ず着用してください。

---

## 🏨 秩父七湯の名湯と美食に憩う！奥秩父・秩父温泉郷の厳選宿5選

### 1. 秩父七湯『御代の湯』 新木鉱泉旅館（埼玉県秩父市山田）
- **特徴:** 創業文政10年（1827年）。太い梁の木造建築。化粧水のようにトロリとした名物「卵水（たまごみず）」温泉と秩父豚みそ焼き会席。
- **宿泊目安:** 1名 ¥${(hAraki.hotelMinCharge || 8220).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hAraki.reviewAverage}（${hAraki.reviewCount}件）
- 👉 [新木鉱泉旅館の空室・宿泊プランを見る](${hAraki.affiliateUrl})

### 2. ちちぶ温泉 はなのや（埼玉県秩父市荒川白久）
- **特徴:** 全客室露天風呂付きの大人の隠れ家。三十槌エリアへ好アクセス。満天の星空を眺めるプライベート湯浴みと個室創作会席。
- **宿泊目安:** 1名 ¥${(hHananoya.hotelMinCharge || 18700).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hHananoya.reviewAverage}（${hHananoya.reviewCount}件）
- 👉 [ちちぶ温泉 はなのやの空室・宿泊プランを見る](${hHananoya.affiliateUrl})

### 3. 和銅鉱泉 薬師の湯 ゆの宿 和どう（埼玉県秩父市黒谷）
- **特徴:** 和同開珎ゆかりの薬師の湯。横瀬川の渓流露天風呂と、冬限定の熱々特製「ぼたん鍋」会席が絶品。
- **宿泊目安:** 1名 ¥${(hWadou.hotelMinCharge || 5808).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hWadou.reviewAverage}（${hWadou.reviewCount}件）
- 👉 [ゆの宿 和どうの空室・宿泊プランを見る](${hWadou.affiliateUrl})

### 4. ナチュラルファームシティ農園ホテル（埼玉県秩父市大宮）
- **特徴:** 秩父市街の高台に位置。武甲山と秩父夜景を見渡す展望大浴場。直営農園の新鮮野菜バイキングと冬の早朝雲海。
- **宿泊目安:** 1名 ¥${(hNoen.hotelMinCharge || 8500).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hNoen.reviewAverage}（${hNoen.reviewCount}件）
- 👉 [農園ホテルの空室・宿泊プランを見る](${hNoen.affiliateUrl})

### 5. 秩父西谷津の湯 里山香ぐはし 宮本の湯（埼玉県秩父郡小鹿野町）
- **特徴:** 元幕内力士「剣武」の実家が営む里山宿。本物の土俵を模したユニークな露天風呂と元力士直伝の本格ちゃんこ鍋。
- **宿泊目安:** 1名 ¥${(hMiyamoto.hotelMinCharge || 11550).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hMiyamoto.reviewAverage}（${hMiyamoto.reviewCount}件）
- 👉 [宮本の湯の空室・宿泊プランを見る](${hMiyamoto.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **三十槌の氷柱:** ${wTsurara.extract || '奥秩父・荒川の源流域の断崖絶壁から湧き出る湧水が、厳冬期の厳しい寒気によって凍結して創り出される天然の巨大氷瀑。'}
- **秩父神社:** ${wChichibuShrine.extract || '秩父三社の一角。徳川家康公寄進の社殿には「つなぎの龍」や「お元気三猿」など見事な彫刻が施されています。'}
- **長瀞渓谷:** ${wNagatoro.extract || '国の名勝・天然記念物の岩畳。冬のこたつ舟や宝登山山頂のロウバイ園が見頃を迎えます。'}
- **三峯神社:** ${wMitsumine.extract || '標高約1100mの奥秩父山上に鎮座し、狼を神の使いとして祀る関東屈指の霊験あらたかな古社。'}

---

## 🗺️ 奥秩父の氷瀑と美肌名湯 1泊2日モデルコース

- **1日目:** 西武秩父駅到着 ➔ 秩父神社参拝 ➔ 豚みそ丼ランチ ➔ 宿チェックイン ➔ 三十槌の氷柱へ移動・点灯鑑賞 ➔ 宿で熱々のぼたん鍋や郷土会席 ➔ 卵水美肌露天風呂
- **2日目:** 朝食 ➔ あしがくぼの氷柱見学（甘酒堪能） ➔ 長瀞宝登山ロウバイ園 ➔ 手打ちそばランチ ➔ 祭の湯でお土産購入 ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. 三十槌の氷柱の見頃は？**  
A. 1月中旬〜下旬が最も氷が成長して美しい時期です。ライトアップは日没〜19:00または20:00まで実施されます。

**Q2. 車のタイヤはノーマルでも大丈夫？**  
A. 絶対に不可です。夜間は日陰道路が完全凍結するため、スタッドレスタイヤまたはチェーンが必須です。

**Q3. 電車で行くならどちらの氷柱がおすすめ？**  
A. 芦ヶ久保駅徒歩10分の「あしがくぼの氷柱」が圧倒的にアクセス良好でおすすめです。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【埼玉・奥秩父】三十槌の氷柱＆あしがくぼの氷柱2027完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/${slug}/)
`;

  return { postData, noteMarkdown };
};
