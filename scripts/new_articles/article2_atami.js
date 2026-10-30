// scripts/new_articles/article2_atami.js
module.exports = function buildArticle2(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "autumn-winter-atami-kaijo-hanabi-momiji-onsen-hotels-guide";
  const title = "【静岡・熱海】秋・冬の熱海海上花火大会＆熱海梅園もみじまつり完全ガイド！澄んだ夜空を彩る大空中ナイアガラと日本一遅い紅葉を特等席で望む厳選温泉宿5選";
  const description = "11月・12月の熱海は、澄み切った冷涼な夜空に轟音が響き渡る「熱海海上花火大会」と、12月上旬まで見頃が続く「熱海梅園もみじまつり」が同時に満喫できる黄金の旅行期。すり鉢状の熱海湾が創り出す天然スタジアムの大迫力スターマインを部屋や露天風呂から真正面に眺望できるホテルや、創業200年超の名湯を守る老舗温泉旅館など厳選5宿を徹底ガイド。";
  const date = "2026-10-30";
  const prefecture = "静岡県";
  const area = "熱海・伊豆山";

  const hKorakuen = hotels.find(h => h.hotelNo === 1656) || hotels[0];
  const hPearlstar = hotels.find(h => h.hotelNo === 181405) || hotels[1];
  const hAkao = hotels.find(h => h.hotelNo === 5417) || hotels[2];
  const hFuruya = hotels.find(h => h.hotelNo === 16668) || hotels[3];
  const hShukaen = hotels.find(h => h.hotelNo === 7666) || hotels[4];

  const wHanabi = wiki["熱海海上花火大会"] || {};
  const wOnsen = wiki["熱海温泉"] || {};
  const wBai = wiki["熱海梅園"] || {};
  const wKinomiya = wiki["来宮神社"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-rose-950 via-red-900 to-slate-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-amber-300 font-extrabold text-xs">
      <span>🎆</span><span>2026年 秋・冬の熱海海上花火大会＆紅葉速報</span>
    </div>
    <p class="text-xs text-stone-200">
      秋・冬は空気が澄んで花火が一年で最も美しく見え、音の反響も段違い！客室から花火を真正面に望む特等席プランは早期完売必至です。
    </p>
  </div>
  <a href="${hKorakuen.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    ✨ 熱海後楽園ホテルの空室・プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-600 pb-2 mb-4">
  すり鉢状の海に轟く重低音と、日本一遅い紅葉が魅せる錦秋の熱海
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  「花火といえば夏」という常識を心地よく覆してくれるのが、伊豆の玄関口・熱海温泉の秋・冬です。三方を山に囲まれ、前方に相模湾が開けた熱海湾の独特な地形は、まるで天然の巨大スタジアム。海上で炸裂する尺玉の破裂音が山肌に反響し、身体の芯までズシンと震わせる大音響は、空気が澄み渡る晩秋から冬にかけてこそ真価を発揮します。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  さらに熱海には、温暖な気候ゆえに11月中旬から12月上旬にかけて見頃を迎える「日本一遅い紅葉」の舞台・熱海梅園があります。約380本の色鮮やかなカエデと早咲きの冬梅が同じ庭園内で咲き競う奇跡のグラデーション。昼は木漏れ日の中で紅葉狩りと足湯を楽しみ、夜は名湯の湯守が注ぐ湯煙に包まれながら、夜空を埋め尽くす大空中ナイアガラを特等席で独占する——そんな贅沢極まる大人の熱海ステイをお届けします。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-600 pb-2 my-6">
  🎆 秋・冬の熱海海上花火大会＆熱海梅園もみじまつり 鑑賞完全ガイド
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-rose-100 text-rose-800 font-extrabold text-xs rounded-lg">海上の大パノラマ</span>
      <h3 class="text-base font-bold text-stone-900">熱海海上花火大会の秋・冬開催が推される理由</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【開催時間】</strong> 20:20〜20:40（約20分間の濃密集中打上げ）</p>
      <p><strong>【打上げ場所】</strong> 熱海湾（熱海港海釣り施設〜防波堤周辺）</p>
      <p><strong>【秋・冬が夏より快適な理由】</strong>
        <br />① <strong>空気の透明度と煙はけ:</strong> 冬型の気圧配置で湿度が下がり、遠くの光までくっきりとクリアに見え、煙が滞留せず連続スターマインの色彩が鮮明に目に飛び込みます。
        <br />② <strong>フィナーレ「大空中ナイアガラ」:</strong> 仕掛け花火ではなく、銀色のスターマインが夜空一面を埋め尽くす圧巻の銀瀑。昼間のように明るくなった海面と街並み、そして山に反響する轟音は涙が出るほどの迫力です。
      </p>
      <p><strong>【おすすめ観覧スタイル】</strong> 海風で冷え込む砂浜席よりも、客室のテラスや部屋食の窓辺、あるいは最上階の大浴場露天風呂から温まりながら見下ろすのが最上の鑑賞法です。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">日本一遅い紅葉</span>
      <h3 class="text-base font-bold text-stone-900">熱海梅園もみじまつり＆来宮神社ライトアップ</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【熱海梅園もみじまつり】</strong> 例年11月中旬〜12月上旬開催。園内にはイロハモミジなど約380本のカエデ類が群生し、初霜が降りる頃に赤や黄色へと色づきます。園内の足湯に浸かりながら紅葉を眺めるひとときは格別。日没からは園内ライトアップが行われ、昼とは一変した幽玄な景観に包まれます。</p>
      <p><strong>【来宮神社の大楠ライトアップ】</strong> 国指定天然記念物で樹齢2100年を超える御神木「大楠」。夕暮れから約160個の灯籠でライトアップされ、幹の周りを1周すると寿命が1年延びる、願い事が叶うとされるパワースポット。境内のオープンカフェ「茶寮 報鼓」でいただく麦こがしソフトも人気。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-600 pb-2 my-8">
  🏨 花火と紅葉を特等席で味わう！熱海温泉のおすすめ厳選名宿5選
</h2>

<!-- 宿1: 熱海後楽園ホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-rose-100 text-rose-900 font-black text-xs rounded-full">花火打上会場の真横！圧倒的迫力の特等席</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 熱海温泉 熱海後楽園ホテル（静岡県熱海市和田浜南町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-rose-50 border border-rose-300 text-rose-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKorakuen.reviewAverage}（${hKorakuen.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKorakuen.hotelImageUrl}" alt="${hKorakuen.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKorakuen.roomImageUrl || hKorakuen.hotelImageUrl}" alt="${hKorakuen.hotelName} 露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">全室オーシャンビューのタワー館と複合リゾート「Fuua」。目の前で火花が降り注ぐような大感動</p>
      <p>熱海港の先端に位置する熱海後楽園ホテルは、花火大会の打上げ場所（海釣り施設周辺）に最も近いホテルのひとつ。タワー館の高層階客室からは、花火の炸裂球が視界の高さと同じ位置で広がる唯一無二のパノラマビューを体感できます。併設のオーシャンスパ「Fuua（フーア）」には、日本最大級の長さを誇る露天立ち湯があり、相模湾の海と空に溶け込むインフィニティ温泉を堪能。伊豆の山海の幸を豪快に焼き上げるブッフェレストラン「HARBOR'S W」でのディナーも大好評です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hKorakuen.address1}${hKorakuen.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hKorakuen.access}</p>
        <p><strong>【駐車場】</strong> ${hKorakuen.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hKorakuen.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hKorakuen.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-rose-600 to-red-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✨ 熱海後楽園ホテルの最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿2: 熱海パールスターホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">お宮の松正面・最上階インフィニティ露天風呂</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 熱海パールスターホテル（静岡県熱海市東海岸町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-rose-50 border border-rose-300 text-rose-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hPearlstar.reviewAverage}（${hPearlstar.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hPearlstar.hotelImageUrl}" alt="${hPearlstar.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hPearlstar.roomImageUrl || hPearlstar.hotelImageUrl}" alt="${hPearlstar.hotelName} インフィニティ露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">熱海サンビーチの眼前に誕生した国際級ラグジュアリーホテル。全長12mの天空インフィニティバス</p>
      <p>熱海随一のメインストリート・国道135号線沿い、名所「お宮の松」の真正面に建つハイエンドホテル。最上階（10階）の「天空インフィニティ露天風呂」からは、相模湾の水平線とサンビーチが一望でき、花火大会当日は海面を照らす花火の光条を湯船に浸かりながら眺めるという至高の時間を過ごせます。客室は全室にバトラーサービスと最新鋭の設備を備え、モダンラグジュアリーな大人の休日にふさわしい静謐な空間。夕食は和食会席・鉄板焼・フレンチ・中国料理の4つの専門店から選べ、美食家を唸らせています。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hPearlstar.address1}${hPearlstar.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hPearlstar.access}</p>
        <p><strong>【駐車場】</strong> ${hPearlstar.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hPearlstar.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hPearlstar.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-rose-600 to-red-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✨ 熱海パールスターホテルの最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿3: ホテルニューアカオ -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-blue-100 text-blue-900 font-black text-xs rounded-full">錦ヶ浦の断崖絶壁に建つ昭和モダン名建築リゾート</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. ホテルニューアカオ（静岡県熱海市熱海）</h3>
    </div>
    <span class="px-3 py-1.5 bg-rose-50 border border-rose-300 text-rose-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hAkao.reviewAverage}（${hAkao.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hAkao.hotelImageUrl}" alt="${hAkao.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hAkao.roomImageUrl || hAkao.hotelImageUrl}" alt="${hAkao.hotelName} メインダイニング" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">波打ち際の天然温泉「波音」と巨大シアターレストラン。海の上に浮かぶようなドラマチックステイ</p>
      <p>名勝「錦ヶ浦」の切り立った崖に寄り添うように建てられた、熱海を象徴する昭和クラシックリゾート。リニューアルを経て、往年の豪壮なシャンデリアが輝くメインダイニング「錦」や、波しぶきが届きそうなほど海に近い露天風呂「波音（なみね）」が息を吹き返しました。海に向かって扇状に広がる客室からは、熱海市街地の夜景と海上花火がパノラマで一望でき、まるで映画のワンシーンのようなドラマチックな眺望を堪能できます。館内にはアート空間やフォトスポットが満載です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hAkao.address1}${hAkao.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hAkao.access}</p>
        <p><strong>【駐車場】</strong> ${hAkao.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hAkao.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hAkao.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-rose-600 to-red-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✨ ホテルニューアカオの最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿4: 熱海温泉 古屋旅館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-800 text-amber-300 font-black text-xs rounded-full">創業1806年・熱海七湯「清左衛門の湯」完全源泉掛流し</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 熱海温泉 古屋旅館（静岡県熱海市東海岸町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hFuruya.reviewAverage}（${hFuruya.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hFuruya.hotelImageUrl}" alt="${hFuruya.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hFuruya.roomImageUrl || hFuruya.hotelImageUrl}" alt="${hFuruya.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">門外不出の名湯を守り続ける老舗旅館。部屋食で味わう伝統の京風本格懐石</p>
      <p>文化三年（1806年）創業、熱海で現存する最古の温泉旅館。敷地内に熱海七湯の筆頭「清左衛門の湯」を自社所有し、一切の加水・加熱・循環を行わない純度100%の源泉掛け流しを貫いています。湯上がりの肌がしっとりと潤う極上の湯触りは、温泉通の間で別格と賞賛されるほど。夕食・朝食ともにお部屋食で提供され、伊豆の金目鯛や鮑、国産黒毛和牛を板前が手塩にかけて仕立てる正統派の京風懐石が楽しめます。花火大会当日は海岸の観覧エリアまで徒歩約2分で出られる利便性も魅力。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hFuruya.address1}${hFuruya.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hFuruya.access}</p>
        <p><strong>【駐車場】</strong> ${hFuruya.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hFuruya.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hFuruya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-stone-800 to-stone-900 text-amber-300 font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✨ 熱海温泉 古屋旅館の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿5: 秀花園 湯の花膳 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-red-100 text-red-900 font-black text-xs rounded-full">屋上露天風呂から花火を見下ろす絶景料理宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 熱海温泉 秀花園 湯の花膳（静岡県熱海市和田浜南町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-rose-50 border border-rose-300 text-rose-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hShukaen.reviewAverage}（${hShukaen.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hShukaen.hotelImageUrl}" alt="${hShukaen.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hShukaen.roomImageUrl || hShukaen.hotelImageUrl}" alt="${hShukaen.hotelName} 展望露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">熱海港を見下ろす高台に建つ全室オーシャンビュー。金目鯛の姿煮と海鮮づくしのお部屋食</p>
      <p>熱海港の岸壁を見下ろす高台に位置し、花火大会の打上げ台を斜め上空から一望できる抜群のポジショニングを誇る宿。屋上展望露天風呂「月下美人」に浸かると、熱海市街地の煌めく夜景と相模湾の夜風に包まれ、花火開催日には湯煙の向こうに大輪の光が咲き乱れます。夕食は創業以来名物の「金目鯛の姿煮」をはじめ、相模湾で水揚げされた地魚の舟盛りが並ぶ贅沢な海鮮和会席。仲居さんの温かいおもてなしとお部屋食で、周囲を気にせず気兼ねなく花火と美食に浸れます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hShukaen.address1}${hShukaen.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hShukaen.access}</p>
        <p><strong>【駐車場】</strong> ${hShukaen.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hShukaen.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hShukaen.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-rose-600 to-red-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✨ 秀花園 湯の花膳の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<h2 id="nearby-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-600 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs text-stone-600 mb-6">
  花火鑑賞の前後に巡りたい、熱海温泉の象徴的な名所案内です。
</p>

<div class="space-y-6 my-6">
  <!-- スポット1: 熱海海上花火大会 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wHanabi.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/1656/1656.jpg'}" alt="熱海海上花火大会" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-rose-100 text-rose-800 font-bold text-[11px] rounded-md">🎆 熱海湾</span>
        <h3 class="text-base font-bold text-stone-900">熱海海上花火大会</h3>
        <p>${wHanabi.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 熱海後楽園ホテル・秀花園は会場目の前。パールスターホテル・古屋旅館からは海岸沿いへ徒歩2〜5分です。</p>
      </div>
    </div>
  </div>

  <!-- スポット2: 熱海梅園 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wBai.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/16668/16668.jpg'}" alt="熱海梅園" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-800 font-bold text-[11px] rounded-md">🍁 熱海市梅園町</span>
        <h3 class="text-base font-bold text-stone-900">熱海梅園（もみじまつり会場）</h3>
        <p>${wBai.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 各宿から車または路線バスで約10〜15分。JR来宮駅からは徒歩約10分です。11月中旬から12月上旬の夜間ライトアップも必見。</p>
      </div>
    </div>
  </div>

  <!-- スポット3: 来宮神社 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wKinomiya.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/181405/181405.jpg'}" alt="来宮神社" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[11px] rounded-md">⛩️ 熱海市西山町</span>
        <h3 class="text-base font-bold text-stone-900">来宮神社（樹齢2100年の大楠）</h3>
        <p>${wKinomiya.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 熱海駅・海岸エリアから車で約7分、JR伊東線来宮駅から徒歩5分。夕暮れ時の大楠ライトアップ散策が女性客に大人気。</p>
      </div>
    </div>
  </div>

  <!-- スポット4: 熱海温泉 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wOnsen.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/5417/5417.jpg'}" alt="熱海温泉" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-800 font-bold text-[11px] rounded-md">♨️ 日本屈指の湯量を誇る古湯</span>
        <h3 class="text-base font-bold text-stone-900">熱海温泉（熱海七湯めぐり）</h3>
        <p>${wOnsen.extract}</p>
        <p class="text-stone-500"><strong>【歴史と泉質】</strong> 徳川家康が愛し江戸城まで湯を運ばせた名湯。塩化物泉・硫酸塩泉が多く、湯冷めしにくく冬の身体を芯まで温めます。</p>
      </div>
    </div>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-600 pb-2 my-8">
  🗺️ 花火と紅葉を巡る熱海1泊2日 プレミアムモデルコース
</h2>
<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-rose-50/60 to-orange-50/40 border border-rose-200 space-y-4 text-xs text-stone-700 leading-relaxed">
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【1日目】熱海梅園もみじ狩りと客室からの花火鑑賞</h3>
    <p>新幹線で13:00に熱海駅へ到着。駅前平和通り商店街で温泉まんじゅうを食べ歩き後、タクシーで「熱海梅園」へ。見頃を迎えた錦秋のカエデの下を散策し、園内の足湯でリフレッシュ。15:30に「熱海後楽園ホテル」へチェックイン。最上階のオーシャンスパ「Fuua」で相模湾を眺めながら入浴。18:00からディナーブッフェで新鮮な地魚料理を味わい、20:20からは客室バルコニーに出て、眼前の海上で打ち上がる「熱海海上花火大会」を大迫力の重低音とともに堪能。</p>
  </div>
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【2日目】来宮神社参拝とお宮の松・熱海銀座散策</h3>
    <p>海から昇る朝日の絶景を眺めながら朝湯と朝食を堪能。10:00にチェックアウトし、パワースポット「来宮神社」へ。樹齢2100年の大楠を巡り、境内の茶寮でひと休み。その後、熱海銀座商店街の「熱海プリン カフェ2nd」や干物店に立ち寄り、熱海サンビーチ沿いをお散歩。昼食に「味里」や「大寿し」で獲れたての地魚丼を味わって帰路へ。</p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-600 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-3 my-6 text-xs text-stone-800">
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q1. 秋・冬の花火大会は雨天でも開催されますか？</h3>
    <p class="text-stone-600">A. 熱海海上花火大会は雨天決行です。台風などの極端な荒天や高波警報が発令されない限り、少々の雨や風であれば通常通り20:20から打ち上げられます。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q2. 花火終了後の道路や電車の混雑はどのくらいですか？</h3>
    <p class="text-stone-600">A. 花火終了直後（20:45〜21:30）は、海岸沿いから熱海駅へ向かう道路やタクシー乗り場、JR東海道線の改札口が大変混雑します。熱海の宿に宿泊していれば、混雑を横目に部屋へ戻ってそのまま温泉に入浴できるため、宿泊しての鑑賞が圧倒的に快適です。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q3. 熱海梅園の紅葉の見頃時期はいつですか？</h3>
    <p class="text-stone-600">A. 熱海梅園は温暖な気候のため、全国で最も遅い紅葉のひとつとして知られ、例年11月中旬から色づき始め、11月下旬〜12月上旬に見頃のピークを迎えます。早咲きの冬梅との共演が見られる年もあります。</p>
  </div>
</div>

<div class="my-8 p-6 rounded-3xl bg-rose-50/60 border border-rose-200">
  <h3 class="text-sm font-bold text-rose-950 mb-2">🔗 あわせてチェックしたい静岡・伊豆の旅行ガイド</h3>
  <ul class="text-xs space-y-1.5 font-medium text-stone-700">
    <li>👉 <a href="/prefectures/shizuoka/" class="text-rose-800 hover:text-rose-600 underline">静岡県の観光名所・人気温泉地＆ホテル特集</a></li>
    <li>👉 <a href="/posts/winter-youth-shizuoka-izu-atami-shimoda-onsen-guide" class="text-rose-800 hover:text-rose-600 underline">伊豆・熱海・下田の海鮮グルメ＆絶景露天風呂巡り完全ガイド</a></li>
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
    hot_spring_info: "熱海温泉（ナトリウム・カルシウム-塩化物温泉／硫酸塩温泉）・熱海七湯「清左衛門の湯」掛け流し",
    parking_info: "各宿に駐車場完備。花火大会当日は海岸線道路の渋滞・交通規制があるため早めの入庫推奨。",
    meal_availability: "金目鯛の姿煮・相模湾直送地魚舟盛り・伊勢海老・国産黒毛和牛・熱海後楽園ブッフェ",
    hotel_name: "熱海海上花火大会＆熱海梅園もみじまつり周辺 厳選宿5選",
    image: hKorakuen.hotelImageUrl,
    affiliate_url: hKorakuen.affiliateUrl,
    categories: ["11月旅行", "12月旅行", "花火大会", "温泉宿", "紅葉", "静岡旅行"],
    keywords: [
      "熱海海上花火大会 2026 冬",
      "熱海 花火 部屋から見える宿",
      "熱海後楽園ホテル 花火",
      "熱海パールスターホテル 口コミ",
      "ホテルニューアカオ 宿泊記",
      "熱海温泉 古屋旅館 源泉",
      "秀花園 湯の花膳 花火",
      "熱海梅園 もみじまつり 見頃",
      "熱海 11月 イベント",
      "熱海 12月 旅行"
    ],
    review: reviewHtml,
    price: hKorakuen.hotelMinCharge || 19800,
    rating: hKorakuen.reviewAverage || 4.4,
    date: date,
    other_images: [
      hPearlstar.hotelImageUrl,
      hAkao.hotelImageUrl,
      hFuruya.hotelImageUrl,
      hShukaen.hotelImageUrl,
      wHanabi.thumbnail,
      wBai.thumbnail
    ].filter(Boolean),
    summary: description,
    review_count: (hKorakuen.reviewCount || 0) + (hPearlstar.reviewCount || 0),
    family_friendly: "はい、部屋食対応の宿やオーシャンスパ併設リゾートなどファミリーや三世代旅行にも快適な設備が整っています。"
  };

  const noteMarkdown = `---
title: "${title}"
date: "${date}"
description: "${description}"
tags: ["熱海海上花火大会", "熱海温泉", "熱海梅園", "熱海後楽園ホテル", "静岡旅行", "楽天トラベル"]
---

「花火といえば夏」という常識を心地よく覆してくれるのが、伊豆の玄関口・熱海温泉の秋・冬です。三方を山に囲まれ、前方に相模湾が開けた熱海湾の独特な地形は、まるで天然の巨大スタジアム。海上で炸裂する尺玉の破裂音が山肌に反響し、身体の芯までズシンと震わせる大音響は、空気が澄み渡る晩秋から冬にかけてこそ真価を発揮します。

さらに熱海には、温暖な気候ゆえに11月中旬から12月上旬にかけて見頃を迎える「日本一遅い紅葉」の舞台・熱海梅園があります。約380本の色鮮やかなカエデと早咲きの冬梅が咲き競う奇跡のグラデーション。大空中ナイアガラを部屋や露天風呂から真正面に望む厳選名宿をお届けします。

---

## 🎆 秋・冬の熱海海上花火大会＆紅葉の攻略ポイント
- **開催時間**: 20:20〜20:40（約20分間の凝縮打上げ）
- **冬の花火が最高な理由**: 空気が乾燥して澄み渡るため、花火の閃光がシャープに見え、夏場のように煙が滞留しません。フィナーレの「大空中ナイアガラ」の白銀の輝きと重低音は鳥肌モノの感動です。
- **熱海梅園もみじまつり**: 例年11月中旬〜12月上旬。園内の足湯に浸かりながら「日本一遅い紅葉」を愛でることができ、日没後のライトアップも幻想的。
- **混雑回避の決定打**: 花火終了後は海岸線道路や熱海駅が激しく混雑します。客室テラスや館内露天風呂から鑑賞できる宿を予約するのが最もスマートです。

---

## 1. 熱海温泉 熱海後楽園ホテル（静岡県熱海市和田浜南町）
![熱海後楽園ホテル](${hKorakuen.hotelImageUrl})
打上げ場所のすぐ真横に位置するリゾートホテル。タワー館の高層階客室からは、目の前の高さで大輪の花火が咲き乱れる大迫力ビューが楽しめます。相模湾と一体化するインフィニティ温泉「Fuua」も併設。

- **楽天トラベル総合評価**: ★${hKorakuen.reviewAverage}（クチコミ ${hKorakuen.reviewCount}件）
- **目安料金**: 1名 ¥${hKorakuen.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hKorakuen.address1}${hKorakuen.address2}
- **アクセス**: ${hKorakuen.access}
- **駐車場**: ${hKorakuen.parkingInformation}
- [👉 熱海後楽園ホテルの宿泊プラン・空室状況を見る](${hKorakuen.affiliateUrl})

---

## 2. 熱海パールスターホテル（静岡県熱海市東海岸町）
![熱海パールスターホテル](${hPearlstar.hotelImageUrl})
熱海サンビーチの眼前に佇む国際級ラグジュアリーホテル。最上階の天空インフィニティ露天風呂から、相模湾の水平線と花火の光条を見下ろす贅沢な時間が流れます。全室に最新鋭設備と上質なおもてなしを完備。

- **楽天トラベル総合評価**: ★${hPearlstar.reviewAverage}（クチコミ ${hPearlstar.reviewCount}件）
- **目安料金**: 1名 ¥${hPearlstar.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hPearlstar.address1}${hPearlstar.address2}
- **アクセス**: ${hPearlstar.access}
- **駐車場**: ${hPearlstar.parkingInformation}
- [👉 熱海パールスターホテルの宿泊プラン・空室状況を見る](${hPearlstar.affiliateUrl})

---

## 3. ホテルニューアカオ（静岡県熱海市熱海）
![ホテルニューアカオ](${hAkao.hotelImageUrl})
錦ヶ浦の断崖絶壁に建つ昭和クラシック建築の最高峰。波打ち際の天然温泉露天風呂「波音」と、シャンデリアが煌めく巨大シアターダイニングが圧巻。扇状に広がる客室から海上花火と熱海の夜景をパノラマで楽しめます。

- **楽天トラベル総合評価**: ★${hAkao.reviewAverage}（クチコミ ${hAkao.reviewCount}件）
- **目安料金**: 1名 ¥${hAkao.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hAkao.address1}${hAkao.address2}
- **アクセス**: ${hAkao.access}
- **駐車場**: ${hAkao.parkingInformation}
- [👉 ホテルニューアカオの宿泊プラン・空室状況を見る](${hAkao.affiliateUrl})

---

## 4. 熱海温泉 古屋旅館（静岡県熱海市東海岸町）
![熱海温泉 古屋旅館](${hFuruya.hotelImageUrl})
創業1806年、熱海で現存最古の歴史を刻む名旅館。熱海七湯「清左衛門の湯」を自社源泉から100%完全掛け流しで提供。お部屋食で楽しむ伝統の京風本格懐石と、海岸まで徒歩2分の好立地が魅力です。

- **楽天トラベル総合評価**: ★${hFuruya.reviewAverage}（クチコミ ${hFuruya.reviewCount}件）
- **目安料金**: 1名 ¥${hFuruya.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hFuruya.address1}${hFuruya.address2}
- **アクセス**: ${hFuruya.access}
- **駐車場**: ${hFuruya.parkingInformation}
- [👉 熱海温泉 古屋旅館の宿泊プラン・空室状況を見る](${hFuruya.affiliateUrl})

---

## 5. 熱海温泉 秀花園 湯の花膳（静岡県熱海市和田浜南町）
![秀花園 湯の花膳](${hShukaen.hotelImageUrl})
熱海港を見下ろす高台に建つ全室オーシャンビューの料理旅館。屋上展望露天風呂「月下美人」から見下ろす花火と街の夜景は息を呑む美しさ。名物・金目鯛の姿煮をはじめとする海鮮料理をお部屋食で堪能できます。

- **楽天トラベル総合評価**: ★${hShukaen.reviewAverage}（クチコミ ${hShukaen.reviewCount}件）
- **目安料金**: 1名 ¥${hShukaen.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hShukaen.address1}${hShukaen.address2}
- **アクセス**: ${hShukaen.access}
- **駐車場**: ${hShukaen.parkingInformation}
- [👉 秀花園 湯の花膳の宿泊プラン・空室状況を見る](${hShukaen.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

### 熱海海上花火大会（静岡県熱海市）
![熱海海上花火大会](${wHanabi.thumbnail || hKorakuen.hotelImageUrl})
${wHanabi.extract}
- **宿からのアクセス**: 後楽園ホテル・秀花園は会場至近。パールスターホテル・古屋旅館から海岸まで徒歩2〜5分。

### 熱海梅園（もみじまつり会場）
![熱海梅園](${wBai.thumbnail || hFuruya.hotelImageUrl})
${wBai.extract}
- **宿からのアクセス**: 各宿から車で約10〜15分。11月中旬〜12月上旬には日本一遅い紅葉のライトアップが開催。

### 来宮神社（静岡県熱海市）
![来宮神社](${wKinomiya.thumbnail || hPearlstar.hotelImageUrl})
${wKinomiya.extract}
- **宿からのアクセス**: 海岸エリアから車で約7分。樹齢2100年の大楠ライトアップが女性やカップルに大人気。

### 熱海温泉（静岡県熱海市）
![熱海温泉](${wOnsen.thumbnail || hAkao.hotelImageUrl})
${wOnsen.extract}
- **歴史と泉質**: 徳川家康が愛した名湯。冷え性や美肌に嬉しい塩化物泉で冬でもポカポカ温まります。
`;

  return { postData, noteMarkdown };
};
