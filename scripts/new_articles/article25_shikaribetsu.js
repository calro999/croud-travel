// scripts/new_articles/article25_shikaribetsu.js
module.exports = function buildArticle25(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-hokkaido-shikaribetsuko-kotan-ice-bath-tokachigawa-moor-hotels-guide";
  const title = "【北海道・十勝/然別湖】極寒が生む奇跡「しかりべつ湖コタン2027」幻の氷上露天風呂＆十勝川モール温泉完全攻略！完全結氷の湖上アイスバーと世界屈指の植物性美肌湯、十勝牛グリルを愉しむ極上宿5選";
  const description = "最低気温マイナス30度にも達する厳冬の北海道・大雪山国立公園。完全結氷した然別湖の白銀の湖上にわずか60日間だけ現れる幻の氷の村「しかりべつ湖コタン」。世界唯一の雪と氷に囲まれた「氷上露天風呂」や氷のグラスでカクテルを傾ける「アイスバー」の非日常体験を徹底解説。さらに世界的に極めて希少な琥珀色の美肌遺産「十勝川モール温泉」の極上宿、十勝牛や芳醇なラクレットチーズを堪能できる厳選5宿をご紹介します。";
  const date = "2026-11-03";
  const prefecture = "北海道";
  const area = "帯広・十勝川温泉・然別湖";

  const hFusui = hotels.find(h => h.hotelNo === 135963) || hotels[0];
  const hDaiichi = hotels.find(h => h.hotelNo === 5818) || hotels[1];
  const hKangetsuen = hotels.find(h => h.hotelNo === 19237) || hotels[2];
  const hDaiheigen = hotels.find(h => h.hotelNo === 54836) || hotels[3];
  const hSasai = hotels.find(h => h.hotelNo === 30897) || hotels[4];

  const wShikaribetsu = wiki["然別湖"] || {};
  const wTokachigawa = wiki["十勝川温泉"] || {};
  const wObihiro = wiki["帯広市"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-blue-950 via-teal-950 to-cyan-950 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-cyan-300 font-extrabold text-xs">
      <span>❄️</span><span>しかりべつ湖コタン2027速報＆十勝川モール温泉特集</span>
    </div>
    <p class="text-xs text-cyan-100">
      11月から氷の切り出し準備が始まる奇跡の氷上村！氷上露天風呂の幻想世界と、世界的に希少な植物性モール温泉＆十勝牛に酔いしれる冬の冒険へ。
    </p>
  </div>
  <a href="${hFusui.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    ♨️ 然別湖畔ホテル風水の空室を見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 mb-4">
  マイナス30度の極北が魅せる幻影！氷上の露天風呂と琥珀色に輝く奇跡のモール湯
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  大雪山国立公園の南端、標高810mに位置する「然別湖（しかりべつこ）」は、北海道で最も標高の高い自然湖。冬になると氷点下30度を下回る過酷な寒気に包まれ、湖面は厚さ数十センチから1メートルに及ぶ分厚い氷の平原へと変貌します。この完全結氷した湖の上に、1月下旬からわずか約60日間だけ設営される世界唯一の氷の村――それが「しかりべつ湖コタン（コタン＝アイヌ語で村）」です。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  11月から現地では湖の結氷状態の観測が始まり、厳冬期に切り出された透明度の高い氷ブロックと純白の雪を積み上げて、ドーム状のイグルー群が築かれます。その中でも世界中の旅人を惹きつけてやまないのが「氷上露天風呂」。見渡す限りの氷と雪の世界の真ん中に設置された湯船に、湖畔の源泉からパイプで引き込んだ茶褐色の天然温泉が絶え間なく注がれます。外気マイナス20度、湯船は40度――湯から出た髪の毛が一瞬で凍りつく極限の温度差の中、湯煙の向こうに広がる満天の星空やダイヤモンドダストを見上げる体験は、人生観が変わるほどの感動をもたらします。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  湖畔で氷の村を満喫した後は、十勝平野へと車を進め「十勝川温泉」へ。ここは世界的にもドイツのバーデンバーデンと並び極めて珍しい「植物性モール温泉」が自噴する奇跡の温泉郷。太古の植物が長い年月をかけて堆積した亜炭層を通って湧き出る湯は、天然の化粧水と呼ばれる「フミン酸」「フルボ酸」を豊富に含み、琥珀色のとろりとした湯触りで肌をしっとりと包み込みます。極寒の地だからこそ生まれる十勝牛の力強い旨味や濃厚なラクレットチーズとともに、大自然の恩恵を五感で味わい尽くす旅をご紹介します。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-6">
  🧊 しかりべつ湖コタンの全貌＆氷上露天風呂の入浴マナー
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-cyan-100 text-cyan-800 font-extrabold text-xs rounded-lg">コタン施設案内</span>
      <h3 class="text-base font-bold text-stone-900">氷上露天風呂・アイスバー・アイスチャペル</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>氷上露天風呂＆氷上足湯:</strong> 湖上の雪で作られた壁の中に浴槽が鎮座。男女混浴（水着や湯浴み着着用可、専用更衣室あり）および時間帯別の男女専用時間が設けられています。手軽に楽しむなら氷上足湯もおすすめです。</p>
      <p>② <strong>アイスバー:</strong> カウンターも椅子もすべて本物の氷。自作の氷のグラスに注がれるカクテルやソフトドリンクを味わう体験は格別です。</p>
      <p>③ <strong>アイスチャペル＆イグルー宿泊体験:</strong> 静寂の氷のチャペルや、雪のブロックで作られたイグルー内での極寒宿泊（寝袋使用・事前予約制）など、北欧さながらの非日常空間が広がります。</p>
      <p>④ <strong>スノーモービル＆スノーラフティング:</strong> 昼間は広大な氷原を疾走する迫力のアクティビティが用意されています。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-teal-100 text-teal-800 font-extrabold text-xs rounded-lg">極寒対策＆アクセス</span>
      <h3 class="text-base font-bold text-stone-900">入浴のコツと帯広駅からの移動法</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【氷上露天風呂入浴の心得】</strong> 脱衣所から湯船までは数歩ですが、足裏が氷に張り付くのを防ぐためサンダルを履いて移動します。髪が濡れると一瞬で凍りつくため、乾いたタオルを頭に巻いて入浴するのが鉄則です。</p>
      <p><strong>【雪道運転に注意・路線バス推奨】</strong> 然別湖への道（道道85号）は急カーブと完全なアイスバーンが続く難所です。雪道運転に不慣れな方は、JR帯広駅バスターミナルから運行される「北海道拓殖バス（然別湖行き）」の利用を強く推奨します（冬季宿泊者無料キャンペーンあり）。</p>
      <p><strong>【重ね着レイヤリング】</strong> 湖上は風を遮るものがなく体感温度はマイナス25度以下になります。吸湿速乾インナー＋フリース＋防風ダウン＋防寒オーバーパンツの完全装備でお出かけください。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  🏨 湖畔の特等席＆琥珀色の美肌モール温泉！十勝の厳選宿5選
</h2>

<!-- 宿1: 然別湖畔温泉ホテル風水 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 font-black text-xs rounded-full">然別湖畔唯一の温泉ホテル・全室レイクビュー＆コタン会場目の前</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 然別湖畔温泉 然別湖畔温泉ホテル風水（北海道河東郡鹿追町然別湖畔）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hFusui.reviewAverage}（${hFusui.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hFusui.hotelImageUrl}" alt="${hFusui.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hFusui.roomImageUrl || hFusui.hotelImageUrl}" alt="${hFusui.hotelName} 展望露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        しかりべつ湖コタンの会場まで徒歩わずか1分、湖畔の特等席に佇む唯一の宿泊施設。全客室が然別湖に面し、白銀に凍りついた湖面と美しい天望山（くちびる山）のパノラマが窓一面に広がります。展望大浴場と露天風呂には、鉄分と塩分を含んだ黄褐色のにごり湯「然別湖畔温泉」が100%掛け流し。氷上村で冷えた体をすぐさま館内の温かい湯船で包み込める最高のロケーションです。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hFusui.address1}${hFusui.address2}</div>
        <div><strong>アクセス:</strong> JR新得駅より拓殖バス約55分、JR帯広駅より拓殖バス約1時間40分（ホテル前下車）</div>
        <div><strong>温泉特徴:</strong> ナトリウム・塩化物・炭酸水素塩温泉（茶褐色の源泉100%掛け流し）</div>
        <div><strong>名物グルメ:</strong> 幻の魚「オしょろこま」塩焼きや十勝産牛ステーキの会席</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hFusui.hotelMinCharge || 11550).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hFusui.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルでホテル風水のプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 十勝川温泉 第一ホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 font-black text-xs rounded-full">十勝川のほとり・最高峰の寛ぎを約束する「豊洲亭」「豆陽亭」</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 十勝川温泉 第一ホテル（北海道河東郡音更町十勝川温泉南）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hDaiichi.reviewAverage}（${hDaiichi.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hDaiichi.hotelImageUrl}" alt="${hDaiichi.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hDaiichi.roomImageUrl || hDaiichi.hotelImageUrl}" alt="${hDaiichi.hotelName} 庭園露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        十勝川の雄大な流れを望む名門旅館。全室客室露天風呂付きのプレミアム棟「豊洲亭」と、木の温もりあふれる「豆陽亭」から成ります。琥珀色に輝く自慢の「植物性モール温泉」は、2層吹き抜けの大浴場「湯楽」や十勝川のせせらぎを聴く露天風呂で満喫。夕食は十勝牛や新鮮な蝦夷アワビ、十勝野菜を贅沢に仕立てた創作和食会席やオープンキッチンビュッフェが感動の美味です。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hDaiichi.address1}${hDaiichi.address2}</div>
        <div><strong>アクセス:</strong> JR帯広駅より路線バス約30分（十勝川温泉第一ホテル前下車すぐ）</div>
        <div><strong>美肌モール泉:</strong> 太古の植物成分が溶け込んだ天然保湿成分たっぷりの赤褐色名湯</div>
        <div><strong>極上ステイ:</strong> 豊洲亭宿泊者専用ラウンジでワインやフィンガーフード無料提供</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hDaiichi.hotelMinCharge || 15900).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hDaiichi.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルで十勝川温泉 第一ホテルのプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 十勝川温泉 観月苑 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 font-black text-xs rounded-full">十勝川を望む庭園露天風呂＆本場フィンランド式ロウリュサウナ</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 十勝川温泉 観月苑（北海道河東郡音更町十勝川温泉南）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKangetsuen.reviewAverage}（${hKangetsuen.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKangetsuen.hotelImageUrl}" alt="${hKangetsuen.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKangetsuen.roomImageUrl || hKangetsuen.hotelImageUrl}" alt="${hKangetsuen.hotelName} 露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        十勝川のほとりに広がる情緒豊かな和風温泉宿。庭園露天風呂からは、雪化粧した十勝中央大橋と白鳥が飛来する川面の情景を一望できます。さらに全国のサウナーから熱い注目を集めるのが、十勝の白樺を使った本場フィンランド式ロウリュサウナ。十勝川の伏流水を使った水風呂とモール温泉の温冷交代浴で、至極の「ととのい」を体験できます。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hKangetsuen.address1}${hKangetsuen.address2}</div>
        <div><strong>アクセス:</strong> JR帯広駅より路線バス約30分（観月苑前下車すぐ）</div>
        <div><strong>温泉サウナ:</strong> 琥珀色モール泉庭園露天＆セルフロウリュ完備サウナ</div>
        <div><strong>ディナー:</strong> 十勝ラクレットチーズや十勝ハーブ牛を愉しむバイキング＆会席</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hKangetsuen.hotelMinCharge || 11770).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hKangetsuen.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルで観月苑のプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 十勝川温泉 ホテル大平原 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 font-black text-xs rounded-full">直営農場野菜と十勝バイキング・モール温泉の大浴場エステ</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 十勝川温泉 ホテル大平原（北海道河東郡音更町十勝川温泉南）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hDaiheigen.reviewAverage}（${hDaiheigen.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hDaiheigen.hotelImageUrl}" alt="${hDaiheigen.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hDaiheigen.roomImageUrl || hDaiheigen.hotelImageUrl}" alt="${hDaiheigen.hotelName} 大浴場" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        広大な十勝平野の真ん中に位置し、ファミリーから一人旅まで心地よく寛げる大型リゾート。地下から汲み上げる濃厚な植物性モール温泉を、開放的な大浴場や露天風呂、気泡風呂で贅沢に楽しめます。夕食はホテル直営農場「大平原ファーム」で収穫された新鮮野菜や十勝産ポーク、十勝チーズをふんだんに使った種類豊富なバイキングが家族連れに大好評です。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hDaiheigen.address1}${hDaiheigen.address2}</div>
        <div><strong>アクセス:</strong> JR帯広駅より車で約20分、または路線バス約30分</div>
        <div><strong>温泉設備:</strong> 植物性モール温泉の広々とした大浴場・露天風呂・サウナ</div>
        <div><strong>食事自慢:</strong> 自社農場野菜と十勝の恵みを味わう和洋中ディナーバイキング</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hDaiheigen.hotelMinCharge || 7700).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hDaiheigen.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルでホテル大平原のプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 十勝川温泉 笹井ホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 font-black text-xs rounded-full">大正15年創業・十勝川温泉最古の歴史を誇る老舗の湯処</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 十勝川温泉 笹井ホテル（北海道河東郡音更町十勝川温泉北）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hSasai.reviewAverage}（${hSasai.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hSasai.hotelImageUrl}" alt="${hSasai.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hSasai.roomImageUrl || hSasai.hotelImageUrl}" alt="${hSasai.hotelName} 露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        1926年（大正15年）創業、十勝川温泉の歴史そのものと共に歩んできた由緒ある老舗宿。自慢の「白鳥の湯」には、敷地内の自家源泉から湧出するピュアな植物性モール温泉が豊かに注がれ、古くから湯治客の体を癒やし続けてきました。夕食は十勝名物の豚丼やジンギスカン、新鮮な北の海の幸を出来立てで味わえるライブキッチンバイキングが人気を集めています。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hSasai.address1}${hSasai.address2}</div>
        <div><strong>アクセス:</strong> JR帯広駅バスターミナルより十勝川温泉行きバスで約30分（笹井ホテル前下車すぐ）</div>
        <div><strong>温泉の歴史:</strong> 開湯当時から受け継がれる琥珀色のかけ流しモール温泉</div>
        <div><strong>名物グルメ:</strong> ライブキッチンで焼き上げる十勝牛や揚げたて天ぷら</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hSasai.hotelMinCharge || 8800).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hSasai.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルで笹井ホテルのプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="wiki-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6">
  冬の十勝・然別湖エリアの壮大な自然遺産。冬期ならではの気候と見どころを解説します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <!-- 観光地1: 然別湖 -->
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
    <div class="flex items-center justify-between border-b border-stone-100 pb-2">
      <h3 class="font-bold text-stone-900 text-sm md:text-base">然別湖（大雪山国立公園）</h3>
      <span class="text-xs text-cyan-700 font-extrabold">北海道最高標高の自然湖</span>
    </div>
    ${wShikaribetsu.thumbnail ? `<img src="${wShikaribetsu.thumbnail}" alt="然別湖" class="w-full h-44 object-cover rounded-xl" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wShikaribetsu.extract || '大雪山国立公園内にある標高810mのカルデラ湖。周囲を原生林に囲まれ、冬は完全結氷して「しかりべつ湖コタン」の舞台となります。固有種のミヤベイワナが生息することでも有名です。'}
    </p>
  </div>

  <!-- 観光地2: 十勝川温泉 -->
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
    <div class="flex items-center justify-between border-b border-stone-100 pb-2">
      <h3 class="font-bold text-stone-900 text-sm md:text-base">十勝川温泉（植物性モール温泉）</h3>
      <span class="text-xs text-cyan-700 font-extrabold">北海道遺産の琥珀色の名湯</span>
    </div>
    ${wTokachigawa.thumbnail ? `<img src="${wTokachigawa.thumbnail}" alt="十勝川温泉" class="w-full h-44 object-cover rounded-xl" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wTokachigawa.extract || '音更町にある温泉。アシなどの植物が堆積した亜炭層を通って湧出する「モール温泉」は、世界でも極めて珍しい泉質として北海道遺産に認定されています。'}
    </p>
  </div>

  <!-- 観光地3: 帯広市 / ばんえい競馬 -->
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
    <div class="flex items-center justify-between border-b border-stone-100 pb-2">
      <h3 class="font-bold text-stone-900 text-sm md:text-base">帯広市（十勝平野の中心地）</h3>
      <span class="text-xs text-cyan-700 font-extrabold">食の宝庫＆ばんえい十勝</span>
    </div>
    ${wObihiro.thumbnail ? `<img src="${wObihiro.thumbnail}" alt="帯広市" class="w-full h-44 object-cover rounded-xl" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wObihiro.extract || '十勝総合振興局の所在地。広大な畑作・酪農地帯の中心であり、世界で唯一の「ばんえい競馬」が開催される帯広競馬場や、元祖豚丼、スイーツの名店が集まるグルメ都市です。'}
    </p>
  </div>

  <!-- 観光地4: 白鳥飛来地（十勝川） -->
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
    <div class="flex items-center justify-between border-b border-stone-100 pb-2">
      <h3 class="font-bold text-stone-900 text-sm md:text-base">十勝川の白鳥飛来地</h3>
      <span class="text-xs text-cyan-700 font-extrabold">冬の十勝の風物詩</span>
    </div>
    <p class="text-xs text-stone-700 leading-relaxed">
      十勝川温泉のすぐ裏手を流れる十勝川には、シベリアから数百羽の大白鳥が飛来します。温泉の排熱で水温が保たれるため川面が凍らず、朝霧や気嵐（けあらし）が立ち込める幻想的な風景の中で羽を休める姿を間近に観察できます。
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  🗺️ 冬の然別湖コタン＆十勝川温泉 1泊2日極北アドベンチャー
</h2>
<div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-4 text-xs md:text-sm text-stone-700 leading-relaxed">
  <div class="border-b border-stone-200 pb-3">
    <strong class="text-cyan-900 text-sm">【1日目: とかち帯広空港から然別湖コタンの氷上世界へ】</strong>
    <p class="mt-1">
      午前10:30 とかち帯広空港到着 ➔ 連絡バスで帯広駅へ移動 ➔ 駅前通りで名物「元祖豚丼」ランチ ➔ 13:30 帯広駅バスターミナルから拓殖バス「然別湖行き」乗車 ➔ 15:10 然別湖畔温泉ホテル風水にチェックイン ➔ 防寒着を整えて湖上の「しかりべつ湖コタン」へ ➔ アイスバーで氷のグラスカクテル ➔ 夕暮れ時の「氷上露天風呂」で奇跡の雪見入浴 ➔ 宿に戻り鉄分たっぷりの温泉で温まり、十勝牛ステーキ会席を堪能
    </p>
  </div>
  <div>
    <strong class="text-cyan-900 text-sm">【2日目: 十勝川の白鳥とモール温泉サウナ】</strong>
    <p class="mt-1">
      朝07:00 凍結した然別湖の朝焼けを鑑賞 ➔ 宿朝食後チェックアウト ➔ 拓殖バスで十勝川温泉へ移動 ➔ 十勝川のほとりで気嵐と白鳥の優雅な群れを見学 ➔ 日帰りモール温泉＆フィンランドサウナで極上のととのい ➔ 帯広駅へ戻り六花亭本店でサクサクパイ＆スイーツ購入 ➔ とかち帯広空港より帰路へ
    </p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q1. しかりべつ湖コタンの開催期間と入場料は？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 例年1月下旬から3月中旬まで開催されます。入場時にシーズンパス（協賛金として500円程度）を購入することで、期間中何度でも入場可能です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q2. 氷上露天風呂は水着着用が必要ですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 混浴時間帯は水着や湯浴み着の着用が可能です（バスタオル巻きも可）。また、時間帯により「男性専用時間」「女性専用時間」が設けられているため、混浴に抵抗がある方でも安心して入浴できます。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q3. レンタカーで然別湖へ行くのは危険ですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 然別湖周辺の峠道（道道85号）は完全な圧雪・アイスバーンとなり、エゾシカの飛び出しも頻発します。雪道運転の経験が豊富でない限り、帯広駅からの路線バス（北海道拓殖バス）の利用を強く推奨します。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q4. 植物性モール温泉の泉質の特徴は何ですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 太古の植物堆積層を通って湧き出る温泉で、フミン酸やフルボ酸といった天然のオーガニック保湿成分を豊富に含みます。琥珀色で独特の芳香があり、湯上がりの肌がしっとりと潤う「美人の湯」として世界的に評価されています。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-100 border border-stone-200 text-center space-y-3">
  <h3 class="text-base font-bold text-stone-900">北海道・十勝・道東の温泉旅行特集も合わせてチェック！</h3>
  <ul class="text-xs text-stone-600 space-y-1.5 inline-block text-left">
    <li>👉 <a href="/tokachigawa-onsen-moor-hotspring-jewelry-ice-winter-guide/" class="text-cyan-800 hover:text-cyan-600 underline">十勝川モール温泉＆大津海岸ジュエリーアイス冬旅完全ガイド</a></li>
    <li>👉 <a href="/autumn-winter-sapporo-white-illumination-odori-park-hotels-guide/" class="text-cyan-800 hover:text-cyan-600 underline">さっぽろホワイトイルミネーション＆定山渓雪見露天特集</a></li>
    <li>👉 <a href="/hokkaido/" class="text-cyan-800 hover:text-cyan-600 underline">北海道の名湯温泉・グルメ・雪景色特集一覧</a></li>
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
    image: hFusui.hotelImageUrl,
    other_images: [
      hDaiichi.hotelImageUrl,
      hKangetsuen.hotelImageUrl,
      hDaiheigen.hotelImageUrl,
      hSasai.hotelImageUrl
    ],
    hotel_name: `${hFusui.hotelName}・${hDaiichi.hotelName} ほか`,
    affiliate_url: hFusui.affiliateUrl,
    categories: ["冬のイベント特集", "しかりべつ湖コタン", "氷上露天風呂", "十勝川温泉", "植物性モール温泉", "十勝牛"],
    price: `¥${(hDaiheigen.hotelMinCharge || 7700).toLocaleString()}〜`,
    rating: hDaiichi.reviewAverage || 4.56,
    review_count: hDaiichi.reviewCount || 1900,
    date: date,
    is_special_feature: true,
    keywords: [
      "しかりべつ湖コタン 2027 開催期間 氷上露天風呂",
      "然別湖コタン バス 帯広駅 拓殖バス",
      "ホテル風水 宿泊記 楽天トラベル",
      "十勝川温泉 第一ホテル 豊洲亭 モール温泉",
      "観月苑 サウナ ロウリュ 露天風呂",
      "十勝川温泉 笹井ホテル 口コミ",
      "冬の北海道 氷上露天風呂 入浴方法"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["しかりべつ湖コタン", "氷上露天風呂", "然別湖", "十勝川温泉", "モール温泉", "十勝川第一ホテル", "北海道旅行", "冬の北海道"]
---

# ${title}

最低気温マイナス30度にも達する厳冬の北海道・大雪山国立公園。

完全結氷した然別湖の白銀の湖上にわずか60日間だけ現れる幻の氷の村「しかりべつ湖コタン」。

世界唯一の雪と氷に囲まれた「氷上露天風呂」や氷のグラスでカクテルを傾ける「アイスバー」の非日常体験を現地目線で徹底解説。

さらに世界的に極めて希少な琥珀色の美肌遺産「十勝川モール温泉」の極上宿、十勝牛や芳醇なラクレットチーズを堪能できる厳選5宿をご紹介します。

---

## 🧊 しかりべつ湖コタンの全貌＆氷上露天風呂の入浴マナー

- **幻の氷上露天風呂:** 見渡す限りの氷原の真ん中で浸かる天然温泉。頭に巻いたタオルが一瞬で凍りつく極限の温度差体験。
- **氷の建物アイスバー:** カウンターも椅子もすべて本物の氷ブロック。自作のアイスグラスで味わう冷たいカクテル。
- **帯広駅からの直通バス:** 雪道運転の不安を解消する北海道拓殖バス（冬季運行）の賢い利用法。
- **完全防寒レイヤリング:** マイナス20度以下に対応する防風ダウンと防寒スノーブーツの必携装備。

---

## 🏨 湖畔の特等席＆琥珀色の美肌モール温泉！十勝の厳選宿5選

### 1. 然別湖畔温泉 然別湖畔温泉ホテル風水（北海道鹿追町）
- **特徴:** 然別湖畔唯一の宿、全室レイクビューでコタン会場まで徒歩1分。源泉100%掛け流しの茶褐色にごり湯。
- **宿泊目安:** 1名 ¥${(hFusui.hotelMinCharge || 11550).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hFusui.reviewAverage}（${hFusui.reviewCount}件）
- 👉 [然別湖畔温泉ホテル風水の空室・宿泊プランを見る](${hFusui.affiliateUrl})

### 2. 十勝川温泉 第一ホテル（北海道音更町）
- **特徴:** 十勝川のほとりに佇む名門。琥珀色の「植物性モール温泉」大浴場と、全室客室露天風呂付きのプレミアム棟「豊洲亭」。
- **宿泊目安:** 1名 ¥${(hDaiichi.hotelMinCharge || 15900).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hDaiichi.reviewAverage}（${hDaiichi.reviewCount}件）
- 👉 [十勝川温泉 第一ホテルの空室・宿泊プランを見る](${hDaiichi.affiliateUrl})

### 3. 十勝川温泉 観月苑（北海道音更町）
- **特徴:** 十勝川と白鳥を望む庭園露天風呂と、白樺ロウリュが楽しめる本格フィンランド式サウナがサウナーに絶賛される和風宿。
- **宿泊目安:** 1名 ¥${(hKangetsuen.hotelMinCharge || 11770).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hKangetsuen.reviewAverage}（${hKangetsuen.reviewCount}件）
- 👉 [十勝川温泉 観月苑の空室・宿泊プランを見る](${hKangetsuen.affiliateUrl})

### 4. 十勝川温泉 ホテル大平原（北海道音更町）
- **特徴:** 自社農場直営の新鮮野菜バイキングと、広大なモール温泉大浴場。家族連れやグループ旅行にも最適な大型リゾート。
- **宿泊目安:** 1名 ¥${(hDaiheigen.hotelMinCharge || 7700).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hDaiheigen.reviewAverage}（${hDaiheigen.reviewCount}件）
- 👉 [ホテル大平原の空室・宿泊プランを見る](${hDaiheigen.affiliateUrl})

### 5. 十勝川温泉 笹井ホテル（北海道音更町）
- **特徴:** 大正15年創業、十勝川温泉最古の老舗。名湯「白鳥の湯」で注がれる濃厚な琥珀色モール泉とライブキッチンバイキング。
- **宿泊目安:** 1名 ¥${(hSasai.hotelMinCharge || 8800).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hSasai.reviewAverage}（${hSasai.reviewCount}件）
- 👉 [十勝川温泉 笹井ホテルの空室・宿泊プランを見る](${hSasai.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **然別湖:** ${wShikaribetsu.extract || '標高810m、北海道で最も標高の高い自然湖。冬は完全結氷しアイスビレッジが出現。'}
- **十勝川温泉:** ${wTokachigawa.extract || '太古の植物層を通って湧出する植物性モール温泉。北海道遺産認定の美肌の湯。'}
- **帯広市:** ${wObihiro.extract || '十勝平野の中心都市。元祖豚丼やスイーツ、ばんえい競馬など北海道美食の集積地。'}
- **十勝川の白鳥飛来地:** 温泉熱で凍らない十勝川に越冬のため飛来する数百羽の大白鳥の群れ。

---

## 🗺️ 冬の然別湖＆十勝川温泉 1泊2日モデルコース

- **1日目:** とかち帯広空港 ➔ 帯広駅元祖豚丼ランチ ➔ 拓殖バスで然別湖へ ➔ ホテル風水チェックイン ➔ しかりべつ湖コタン散策 ➔ アイスバー ➔ 氷上露天風呂入浴 ➔ 宿で十勝牛会席
- **2日目:** 凍結湖面の朝焼け鑑賞 ➔ 宿朝食 ➔ バスで十勝川温泉へ ➔ 白鳥飛来地見学 ➔ 観月苑でモール温泉＆サウナ ➔ 帯広駅でスイーツ購入 ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. しかりべつ湖コタンの開催期間は？**  
A. 1月下旬〜3月中旬頃まで開催されます。

**Q2. 氷上露天風呂の入浴料金は？**  
A. コタンの入場パスポート（協賛金500円程度）があれば無料で入浴可能です。

**Q3. 雪道運転に自信がない場合は？**  
A. 然別湖周辺は難所のため、JR帯広駅からの路線バス（北海道拓殖バス）の利用が安全でおすすめです。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【北海道・十勝/然別湖】極寒が生む奇跡「しかりべつ湖コタン2027」幻の氷上露天風呂＆十勝川モール温泉完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/${slug}/)
`;

  return { postData, noteMarkdown };
};
