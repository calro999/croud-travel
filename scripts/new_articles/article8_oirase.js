// scripts/new_articles/article8_oirase.js
module.exports = function buildArticle8(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "autumn-winter-aomori-oirase-hyobaku-towada-hakkoda-onsen-hotels-guide";
  const title = "【青森・奥入瀬/八甲田】奥入瀬渓流 氷瀑ライトアップ＆十和田湖の絶景完全攻略！晩秋の錦秋から白銀の秘湯・酸ヶ湯温泉と青森の郷土味覚を愉しむ厳選名宿5選";
  const description = "11月のブナ原生林の黄葉フィナーレから12〜1月の白銀の世界へと移ろう青森の奥入瀬渓流。冬のハイライト「奥入瀬渓流 氷瀑ライトアップツアー」では、銚子大滝や馬門岩が巨大な青い氷の彫刻と化し、専用照明車で幻想的に照らし出されます。唯一渓流沿いに建つ星野リゾート、登録有形文化財の十和田ホテル、千人風呂で知られる名湯・酸ヶ湯温泉など厳選5宿を徹底ガイド。";
  const date = "2026-10-31";
  const prefecture = "青森県";
  const area = "十和田・奥入瀬・八甲田";

  const hOirase = hotels.find(h => h.hotelNo === 40434) || hotels[0];
  const hTowada = hotels.find(h => h.hotelNo === 73909) || hotels[1];
  const hSukayu = hotels.find(h => h.hotelNo === 41009) || hotels[2];
  const hTsuta = hotels.find(h => h.hotelNo === 142919) || hotels[3];
  const hHachinohe = hotels.find(h => h.hotelNo === 8663) || hotels[4];

  const wOirase = wiki["奥入瀬渓流"] || {};
  const wTowada = wiki["十和田湖"] || {};
  const wHakkoda = wiki["八甲田山"] || {};
  const wSukayu = wiki["酸ヶ湯"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-cyan-950 via-teal-900 to-stone-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-cyan-300 font-extrabold text-xs">
      <span>❄️</span><span>2026-2027年 奥入瀬渓流 氷瀑ライトアップ＆晩秋速報</span>
    </div>
    <p class="text-xs text-stone-200">
      11月上旬〜中旬はブナ黄葉と初雪の共演！12月中旬からは巨大な滝が凍りつく「氷瀑ライトアップツアー」が開幕。渓流露天風呂や総ヒバ千人風呂で極上の温もりを。
    </p>
  </div>
  <a href="${hOirase.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    ❄️ 奥入瀬渓流ホテルの空室・プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 mb-4">
  エメラルドの激流から青き氷の世界へ。北東北の大自然が創り出す奇跡の造形美
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  十和田湖の子ノ口から約14キロメートルにわたり続く国の特別名勝・天然記念物「奥入瀬渓流」。11月に入ると、広大なブナやカツラの原生林が黄金色の輝きを極め、木々の葉が散り敷く遊歩道にはふかふかの落ち葉の絨毯が広がります。晩秋から初冬へかけてのこの季節は、観光客の喧騒が引き、渓流のせせらぎと鳥のさえずりだけが森に響き渡る最も静謐で美しい時間帯です。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  そして12月中旬、気温が氷点下へと急降下すると、勢いよく流れ落ちていた名瀑「銚子大滝」や岩肌を伝う湧水が一瞬にして凍りつき、巨大な青白い氷柱群「氷瀑（ひょうばく）」へと変貌を遂げます。夜間には専用の特殊照明車が同行する「奥入瀬渓流 氷瀑ライトアップツアー」が開催され、闇夜に浮かび上がる神秘の氷のアートは息を呑む感動をもたらします。本特集では、白銀の世界と青森の名湯治・郷土の美味を堪能できる厳選5宿を徹底解説します。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-6">
  🎪 奥入瀬渓流 氷瀑ライトアップツアーの見どころ＆冬旅の準備
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-cyan-100 text-cyan-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">氷瀑ライトアップと十和田湖冬の絶景</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>銚子大滝・馬門岩の氷瀑ライトアップ:</strong> 渓流随一の落差と水量を誇る銚子大滝や、そそり立つ岸壁の馬門岩。夜間は一般車の通行が制限される中、専用ツアーバスで巡り、最新のLED投光器で青や白に照らされる巨大氷柱を間近で鑑賞できます。</p>
      <p>② <strong>11月のブナ林黄葉と「初雪」のコントラスト:</strong> 11月上旬〜中旬は、まだ木々に残る黄金色の黄葉の上に、うっすらと白雪が積もる奇跡のグラデーションに出会える特異なシーズン。苔むした岩と清流のコントラストが際立ちます。</p>
      <p>③ <strong>八甲田山の樹氷（スノーモンスター）:</strong> ロープウェーで山頂駅へ登ると、オオシラビソの木々に過冷却水滴が吹き付けられて成長した巨大な「樹氷群」が姿を現します。白銀の山頂から遠く岩木山や北海道まで見渡せます。</p>
      <p>④ <strong>青森の冬の郷土味覚:</strong> 脂が乗り切った「大間マグロ」、香ばしい出汁を吸った「八戸せんべい汁」、十和田バラ焼き、そして陸奥湾のホタテの味噌貝焼きなど、身体の芯から温まる郷土料理が満載。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-teal-100 text-teal-800 font-extrabold text-xs rounded-lg">実戦アドバイス</span>
      <h3 class="text-base font-bold text-stone-900">極寒の冬期アクセスと防寒完全対策</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【冬期道路通行止めに注意】</strong> 国道103号の酸ヶ湯〜八甲田温泉間（八甲田・十和田ゴールドライン）は例年11月下旬から冬期閉鎖に入ります。青森市内から奥入瀬・十和田湖方面へ向かうルートは八戸回りや十和田市経由など迂回路の事前確認が必須です。</p>
      <p><strong>【氷点下10度の防寒装備】</strong> 奥入瀬の冬の夜間はマイナス5度〜マイナス10度まで冷え込みます。氷瀑鑑賞時は足元が雪や凍結路面となるため、滑り止めの効くスノーブーツ、厚手の防寒タイツ、風を通さないダウンコート、ニット帽、厚手の手袋が不可欠です。</p>
      <p><strong>【ツアーの事前予約】</strong> 星野リゾート宿泊者限定のアクティビティや十和田市主催の公式氷瀑ライトアップツアーは席数に限りがあるため、宿泊予約と同時に確保することが強く推奨されます。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  🏨 白銀の絶景と名湯で温まる！奥入瀬・八甲田の厳選名宿5選
</h2>

<!-- 宿1: 星野リゾート 奥入瀬渓流ホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 font-black text-xs rounded-full">唯一渓流沿いに建つ最高峰リゾート・氷瀑露天風呂</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 奥入瀬渓流ホテル by 星野リゾート（青森県十和田市）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hOirase.reviewAverage}（${hOirase.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hOirase.hotelImageUrl}" alt="${hOirase.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hOirase.roomImageUrl || hOirase.hotelImageUrl}" alt="${hOirase.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">岡本太郎作の大暖炉「森の神話」と、冬限定の「氷瀑露天風呂」で過ごす贅沢な休日</p>
      <p>奥入瀬渓流の畔に建つ唯一のリゾートホテル。ロビーラウンジでは世界的芸術家・岡本太郎氏による大暖炉「森の神話」が温かな炎をたたえ、巨大なガラス窓の外には雪に覆われたブナの原生林が広がります。冬期には露天風呂の壁面に本物の氷瀑を作り出す「氷瀑露天風呂」が登場し、青く輝く氷を間近に眺めながら猿倉温泉の源泉に浸かる極上の体験が待っています。宿泊者限定の「氷瀑ライトアップツアー」やスノーシューハイキングなどアクティビティも充実。ビュッフェレストラン「青森りんごキッチン」では、目の前で焼き上げるアップルパイやりんご料理を存分に堪能できます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hOirase.address1}${hOirase.address2}</p>
        <p><strong>【アクセス】</strong> ${hOirase.access}</p>
        <p><strong>【温泉・施設】</strong> 渓流露天風呂（猿倉温泉・単純温泉）、展望大浴場、岡本太郎大暖炉、ビュッフェ、フレンチ「Sonore」。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hOirase.hotelMinCharge || 24000).toLocaleString()}〜</span>
        <a href="${hOirase.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-black text-xs rounded-xl shadow transition text-center">
          奥入瀬渓流ホテルの宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 十和田ホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">宮大工が手がけた登録有形文化財・十和田湖畔の名建築</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 十和田ホテル（秋田県鹿角郡小坂町十和田湖畔）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hTowada.reviewAverage}（${hTowada.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hTowada.hotelImageUrl}" alt="${hTowada.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hTowada.roomImageUrl || hTowada.hotelImageUrl}" alt="${hTowada.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">昭和14年築、秋田杉の巨木を用いた宮大工の技。十和田湖の静寂を見下ろすクラシックリゾート</p>
      <p>幻の東京オリンピック（1940年）の外国人迎賓館として国策で建てられた、国の登録有形文化財宿。青森・秋田・岩手の宮大工80名が技を競い合い、天然秋田杉の丸太を惜しげもなく組み上げた本館ロビーの吹き抜け空間は、息を呑むほどの重厚感と美しさを湛えています。高台に位置するため客室やレストランからはコバルトブルーの十和田湖を一望。露天風呂からも四季折々の湖景を眺めることができます。夕食は十和田湖名物のヒメマス料理や秋田錦牛、きりたんぽ鍋など、北東北の豊かな実りを活かした滋味深い和食会席が心を満たします。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hTowada.address1}${hTowada.address2}</p>
        <p><strong>【アクセス】</strong> ${hTowada.access}</p>
        <p><strong>【温泉・施設】</strong> 十和田湖畔温泉（ナトリウム・カルシウム-硫酸塩・塩化物泉）。展望大浴場・露天風呂、登録有形文化財本館。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hTowada.hotelMinCharge || 18000).toLocaleString()}〜</span>
        <a href="${hTowada.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition text-center">
          十和田ホテルの宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 酸ヶ湯温泉旅館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-200 text-stone-900 font-black text-xs rounded-full">国民保養温泉地第1号・総ヒバ造り160畳の「ヒバ千人風呂」</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 酸ヶ湯温泉旅館（青森県青森市荒川・八甲田山）</h3>
    </div>
    <span class="px-3 py-1.5 bg-stone-50 border border-stone-300 text-stone-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hSukayu.reviewAverage}（${hSukayu.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hSukayu.hotelImageUrl}" alt="${hSukayu.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hSukayu.roomImageUrl || hSukayu.hotelImageUrl}" alt="${hSukayu.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">八甲田の豪雪に抱かれる開湯300年の奇跡。白濁の強酸性硫黄泉が五臓六腑に染み渡る</p>
      <p>昭和29年、全国の温泉のモデルとして「国民保養温泉地第1号」に指定された日本を代表する名湯治宿。柱を一本も使わない総ヒバ造り160畳の大浴場「ヒバ千人風呂」には、熱湯・四分六分の湯・冷えの湯・湯滝など源泉の異なる多彩な浴槽が並び、もうもうと立ち込める湯煙の中で至福の湯浴みが叶います（混浴、女性専用時間あり。男女別小浴場「玉の湯」も完備）。冬は全国屈指の積雪深を記録する八甲田の白銀の世界。山菜やきのこ、津軽海峡の魚介を素朴かつ丁寧に調理した湯治膳が、冷えた身体にじんわりと滋味を届けます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hSukayu.address1}${hSukayu.address2}</p>
        <p><strong>【アクセス】</strong> ${hSukayu.access}</p>
        <p><strong>【温泉・施設】</strong> 酸ヶ湯温泉（酸性・含硫黄-鉄・ナトリウム-塩化物・硫酸塩泉、pH1.5〜2.0）。ヒバ千人風呂、玉の湯、売店。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hSukayu.hotelMinCharge || 12000).toLocaleString()}〜</span>
        <a href="${hSukayu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-white font-black text-xs rounded-xl shadow transition text-center">
          酸ヶ湯温泉旅館の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 蔦温泉旅館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">千年の秘湯・ブナ原生林の湯船底から湧き出る自噴泉</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 蔦温泉旅館－足元から源泉湧出の自噴温泉－（青森県十和田市）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hTsuta.reviewAverage}（${hTsuta.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hTsuta.hotelImageUrl}" alt="${hTsuta.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hTsuta.roomImageUrl || hTsuta.hotelImageUrl}" alt="${hTsuta.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">平安時代開湯、文豪・大町桂月が愛した秘湯。ブナの板張りの湯底からぷくぷくと自噴する奇跡</p>
      <p>十和田樹海と呼ばれる深いブナ原生林の中にひっそりと佇む一軒宿「蔦温泉旅館」。名物の「久安の湯」「泉響の湯」は、全国でも極めて珍しい「足元湧出温泉」。浴槽の底に敷き詰められたブナ材の隙間から、空気に触れることなく生まれたての源泉がぷくぷくと湧き上がります。大正ロマンの風情漂う本館建築や、すぐ近くの「蔦七沼」の神秘的な水鏡風景は圧巻。夕食は青森県産短角牛や清流の岩魚、旬の根菜など滋味豊かな会席料理をプライベートな個室でじっくり味わえます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hTsuta.address1}${hTsuta.address2}</p>
        <p><strong>【アクセス】</strong> ${hTsuta.access}</p>
        <p><strong>【温泉・施設】</strong> 蔦温泉（ナトリウム・カルシウム-硫酸塩・炭酸水素塩・塩化物泉）。久安の湯・泉響の湯（足元湧出自噴泉）、貸切風呂。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hTsuta.hotelMinCharge || 21000).toLocaleString()}〜</span>
        <a href="${hTsuta.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs rounded-xl shadow transition text-center">
          蔦温泉旅館の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 八戸グランドホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-blue-100 text-blue-900 font-black text-xs rounded-full">みろく横丁徒歩圏・奥入瀬＆八食センターへの快適シティ拠点</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 八戸グランドホテル（青森県八戸市番町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-blue-50 border border-blue-300 text-blue-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hHachinohe.reviewAverage}（${hHachinohe.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hHachinohe.hotelImageUrl}" alt="${hHachinohe.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hHachinohe.roomImageUrl || hHachinohe.hotelImageUrl}" alt="${hHachinohe.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">八戸市中心街の高台。名物みろく横丁の屋台巡りとせんべい汁朝食を満喫する美食の拠点</p>
      <p>八戸市の中心部に位置し、奥入瀬渓流へのアクセス拠点として高い利便性を誇るシティホテル。昭和天皇の御宿泊をはじめ多くの要人を迎えてきた伝統と格式があります。ホテルから徒歩数分で名物の屋台街「みろく横丁」へ繰り出すことができ、冬に脂が乗った八戸前沖さばやイカ、せんべい汁を地酒とともに味わう夜市めぐりに最適。朝食ビュッフェでは地元名物のせんべい汁や新鮮な烏賊の塩辛など八戸の郷土料理が並び、奥入瀬・十和田湖へのドライブ前をエネルギーで満たしてくれます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hHachinohe.address1}${hHachinohe.address2}</p>
        <p><strong>【アクセス】</strong> ${hHachinohe.access}</p>
        <p><strong>【施設・サービス】</strong> レストラン「サヴァラン」、バーラウンジ、宴会場、駐車場完備。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hHachinohe.hotelMinCharge || 7000).toLocaleString()}〜</span>
        <a href="${hHachinohe.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-blue-700 hover:bg-blue-600 text-white font-black text-xs rounded-xl shadow transition text-center">
          八戸グランドホテルの宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="nearby-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs text-stone-600 mb-6">
  奥入瀬渓流や十和田湖、八甲田連峰の大自然スポットを厳選。宿からの移動時間や冬期のアクセス情報をご確認ください。
</p>

<div class="space-y-6 my-6">
  <!-- スポット1: 奥入瀬渓流 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wOirase.thumbnail || hOirase.hotelImageUrl}" alt="奥入瀬渓流" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[11px] rounded-md">🌊 国の特別名勝・天然記念物</span>
        <h3 class="text-base font-bold text-stone-900">奥入瀬渓流（青森県十和田市）</h3>
        <p>${wOirase.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 奥入瀬渓流ホテルの目の前。十和田湖・子ノ口から焼山まで約14kmにわたり滝と清流が続きます。</p>
      </div>
    </div>
  </div>

  <!-- スポット2: 十和田湖 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wTowada.thumbnail || hTowada.hotelImageUrl}" alt="十和田湖" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-800 font-bold text-[11px] rounded-md">⛵ 二重カルデラ湖・神秘の瑠璃色水面</span>
        <h3 class="text-base font-bold text-stone-900">十和田湖（青森県・秋田県）</h3>
        <p>${wTowada.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 十和田ホテルから見下ろす位置。高村光太郎作「乙女の像」や十和田神社など見どころが点在。</p>
      </div>
    </div>
  </div>

  <!-- スポット3: 八甲田山 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wHakkoda.thumbnail || hSukayu.hotelImageUrl}" alt="八甲田山" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-cyan-100 text-cyan-800 font-bold text-[11px] rounded-md">🏔️ 日本百名山・スノーモンスター樹氷群</span>
        <h3 class="text-base font-bold text-stone-900">八甲田山（青森県青森市）</h3>
        <p>${wHakkoda.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 酸ヶ湯温泉から八甲田ロープウェー山麓駅まで車で約10分。冬は樹氷観賞ロープウェーが運行。</p>
      </div>
    </div>
  </div>

  <!-- スポット4: 酸ヶ湯 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wSukayu.thumbnail || hTsuta.hotelImageUrl}" alt="酸ヶ湯" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-yellow-100 text-yellow-800 font-bold text-[11px] rounded-md">♨️ 国民保養温泉地第1号・ヒバ千人風呂</span>
        <h3 class="text-base font-bold text-stone-900">酸ヶ湯温泉（青森県青森市荒川）</h3>
        <p>${wSukayu.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 酸ヶ湯温泉旅館の所在地。八甲田山麓の標高約900mに湧く硫黄香る白濁の名湯。</p>
      </div>
    </div>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  🗺️ 奥入瀬渓流 氷瀑ライトアップ＆八甲田 1泊2日満喫モデルコース
</h2>
<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-cyan-50/60 to-blue-50/40 border border-cyan-200 space-y-4 text-xs text-stone-700 leading-relaxed">
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【1日目】八戸から十和田・奥入瀬へ・夜の氷瀑ライトアップツアー</h3>
    <p>午前中に東北新幹線で八戸駅に到着。レンタカー（4WD・スタッドレス装着）または宿の送迎バスで奥入瀬方面へ。十和田市内名物の「バラ焼き」定食で昼食。14:30に「星野リゾート 奥入瀬渓流ホテル」へチェックイン。岡本太郎の大暖炉の前でウェルカムスイーツをいただき、冬限定の「氷瀑露天風呂」で雪見風呂を満喫。早めの夕食後、18:30発のホテル専用「氷瀑ライトアップツアー」へ出発。馬門岩や銚子大滝で青く輝く巨大な氷柱群の神秘を体感し、20:30に帰館して温かいバーで地酒を楽しむ。</p>
  </div>
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【2日目】蔦温泉の自噴泉と八甲田ロープウェー樹氷鑑賞・酸ヶ湯へ</h3>
    <p>朝食後、ホテルをチェックアウトして車で約15分の「蔦温泉」へ。ブナ原生林に囲まれた浴場で足元から湧き出る奇跡の自噴泉を立ち寄り湯で体験。その後、八甲田ロープウェーへ向かい山頂駅へ。雪原に立ち並ぶ巨大なスノーモンスター（樹氷）の圧倒的景観をパノラマ鑑賞。昼食は酸ヶ湯温泉で名物の「酸ヶ湯そば」を味わい、総ヒバ造り千人風呂で身体を芯まで温めて八戸駅または青森空港から帰路へ。</p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-3 my-6 text-xs text-stone-800">
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q1. 氷瀑ライトアップツアーは自家用車で見学できますか？</h3>
    <p class="text-stone-600">A. 氷瀑ライトアップの開催時間中は環境保護と安全確保のため、一般車両の駐停車が厳しく規制されます。個人車での見学は困難なため、星野リゾート宿泊者専用ツアーや十和田市主催の公式ガイドツアーバスをご利用ください。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q2. 冬の運転に自信がない場合はどうすればいいですか？</h3>
    <p class="text-stone-600">A. 冬の八甲田・奥入瀬エリアは完全な圧雪・アイスバーンとなります。雪道運転に不慣れな方は、JR新青森駅や八戸駅から運行される各ホテルの無料送迎シャトルバス（要事前予約）の利用を強くおすすめします。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q3. 11月の奥入瀬渓流の見どころは何ですか？</h3>
    <p class="text-stone-600">A. 11月上旬〜中旬はブナやカツラの黄葉のフィナーレを迎え、落ち葉の絨毯が渓流遊歩道を埋め尽くします。初雪が降ると黄葉と白雪の鮮やかな対比が楽しめ、観光客が少なく静かな渓流散策を満喫できる大人の隠れたおすすめシーズンです。</p>
  </div>
</div>

<div class="my-8 p-6 rounded-3xl bg-cyan-50/60 border border-cyan-200">
  <h3 class="text-sm font-bold text-cyan-950 mb-2">🔗 あわせてチェックしたい青森・北東北の旅行特集</h3>
  <ul class="text-xs space-y-1.5 font-medium text-stone-700">
    <li>👉 <a href="/prefectures/aomori/" class="text-cyan-800 hover:text-cyan-600 underline">青森県の観光名所・秘湯温泉＆名所ガイド</a></li>
    <li>👉 <a href="/furusato-tax-waterfall-river-gorge-healing-onsen-stay/" class="text-cyan-800 hover:text-cyan-600 underline">清流渓谷＆名瀑ヒーリング温泉宿特集（奥入瀬・天城）</a></li>
    <li>👉 <a href="/furusato-tax-three-major-medicinal-baths-onsen-stay/" class="text-cyan-800 hover:text-cyan-600 underline">奇跡の濃厚湯治宿×ふるさと納税ガイド（酸ヶ湯・草津・有馬）</a></li>
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
    hot_spring_info: "猿倉温泉（単純温泉）・酸ヶ湯温泉（酸性硫黄泉）・蔦温泉（足元湧出硫酸塩泉）・十和田湖畔温泉",
    parking_info: "各宿に無料駐車場完備。冬期は積雪・凍結路面のため4WDスタッドレス車または宿の無料送迎バス推奨。",
    meal_availability: "十和田湖ヒメマス料理・八戸せんべい汁・青森りんご料理・十和田バラ焼き・短角牛ステーキ・大間マグロ",
    hotel_name: "奥入瀬渓流 氷瀑ライトアップ周辺 厳選名宿5選",
    image: hOirase.hotelImageUrl,
    affiliate_url: hOirase.affiliateUrl,
    categories: ["11月旅行", "12月旅行", "1月旅行", "氷瀑", "秘湯", "温泉宿", "青森旅行"],
    keywords: [
      "奥入瀬渓流 氷瀑ライトアップ 2026",
      "奥入瀬渓流ホテル 星野リゾート",
      "十和田ホテル 登録有形文化財",
      "酸ヶ湯温泉 ヒバ千人風呂",
      "蔦温泉 足元湧出",
      "八戸グランドホテル みろく横丁",
      "八甲田 樹氷 スノーモンスター",
      "十和田湖 冬 観光",
      "青森 11月 イベント",
      "奥入瀬 紅葉 時期"
    ],
    review: reviewHtml,
    price: hOirase.hotelMinCharge || 24000,
    rating: hOirase.reviewAverage || 4.6,
    date: date,
    other_images: [
      hTowada.hotelImageUrl,
      hSukayu.hotelImageUrl,
      hTsuta.hotelImageUrl,
      hHachinohe.hotelImageUrl,
      wOirase.thumbnail,
      wTowada.thumbnail
    ].filter(Boolean),
    summary: description,
    review_count: (hOirase.reviewCount || 0) + (hTowada.reviewCount || 0),
    family_friendly: "はい、奥入瀬渓流ホテルのファミリー向けアクティビティやりんごキッチンビュッフェなど家族旅行にも好評です。"
  };

  const noteMarkdown = `---
title: "${title}"
date: "${date}"
description: "${description}"
tags: ["奥入瀬渓流", "氷瀑", "星野リゾート", "酸ヶ湯温泉", "十和田湖", "青森旅行", "楽天トラベル"]
---

11月のブナ原生林の黄金色のフィナーレから、12〜1月の白銀と氷の世界へと劇的に表情を変える青森県・奥入瀬渓流。冬のハイライト「奥入瀬渓流 氷瀑ライトアップツアー」では、豪快な水量を誇る銚子大滝や馬門岩が青く輝く巨大な氷の彫刻と化し、専用照明車で幻想的に照らし出されます。

さらに八甲田連峰に広がる巨大なスノーモンスター（樹氷群）、開湯300年の国民保養温泉第1号「酸ヶ湯温泉」の総ヒバ千人風呂、ブナの湯底からぷくぷくと自噴する「蔦温泉」など、北東北ならではの圧倒的な大自然美と名湯治文化が凝縮されています。

楽天トラベルの最新データから高評価の名宿5選を厳選し、見どころと冬道アクセス攻略を徹底解説します。

---

## ❄️ 奥入瀬渓流 氷瀑ライトアップ＆冬旅の攻略ポイント
- **見頃の移ろい**: 11月上旬〜中旬はブナ黄葉と初雪の共演、12月中旬〜3月上旬は巨大な氷瀑と樹氷の世界。
- **氷瀑ライトアップツアー**: 夜間の奥入瀬渓流は一般車通行規制がかかるため、星野リゾート宿泊者限定ツアーや十和田市公式ツアーバスの利用が必須。
- **冬の防寒対策**: 気温はマイナス5〜10度まで低下。スノーブーツ、防寒手袋、風を通さない厚手のダウンコート、ニット帽を完全装備しましょう。
- **交通手段**: 冬の八甲田・奥入瀬は完全な圧雪・凍結路面。雪道運転に不慣れな場合は新青森駅や八戸駅からの各ホテル無料送迎バスが確実です。

---

## 1. 奥入瀬渓流ホテル by 星野リゾート（青森県十和田市）
![奥入瀬渓流ホテル](${hOirase.hotelImageUrl})
奥入瀬渓流の畔に建つ唯一のリゾートホテル。岡本太郎作の大暖炉「森の神話」が迎えるロビー、冬期限定の「氷瀑露天風呂」、宿泊者専用の氷瀑ライトアップツアーなど圧倒的な充実度。ビュッフェ「青森りんごキッチン」で出来立てのアップルパイやりんご料理を堪能できます。

- **楽天トラベル総合評価**: ★${hOirase.reviewAverage}（クチコミ ${hOirase.reviewCount}件）
- **目安料金**: 1名 ¥${(hOirase.hotelMinCharge || 24000).toLocaleString()}〜
- **所在地**: ${hOirase.address1}${hOirase.address2}
- **アクセス**: ${hOirase.access}
- **駐車場**: ${hOirase.parkingInformation}
- [👉 奥入瀬渓流ホテルの宿泊プラン・空室状況を見る](${hOirase.affiliateUrl})

---

## 2. 十和田ホテル（秋田県鹿角郡小坂町十和田湖畔）
![十和田ホテル](${hTowada.hotelImageUrl})
昭和14年築、天然秋田杉の丸太を用いた宮大工80名による登録有形文化財宿。高台からコバルトブルーの十和田湖を見下ろすクラシックな空間。十和田湖名物のヒメマス料理や秋田錦牛、きりたんぽ鍋など北東北の美食と絶景露天風呂を満喫できます。

- **楽天トラベル総合評価**: ★${hTowada.reviewAverage}（クチコミ ${hTowada.reviewCount}件）
- **目安料金**: 1名 ¥${(hTowada.hotelMinCharge || 18000).toLocaleString()}〜
- **所在地**: ${hTowada.address1}${hTowada.address2}
- **アクセス**: ${hTowada.access}
- **駐車場**: ${hTowada.parkingInformation}
- [👉 十和田ホテルの宿泊プラン・空室状況を見る](${hTowada.affiliateUrl})

---

## 3. 酸ヶ湯温泉旅館（青森県青森市荒川・八甲田山）
![酸ヶ湯温泉旅館](${hSukayu.hotelImageUrl})
国民保養温泉地第1号に指定された日本屈指の名湯治宿。総ヒバ造り160畳の大浴場「ヒバ千人風呂」に白濁の強酸性硫黄泉が滾々と湧き出します。八甲田の豪雪に抱かれ、素朴で温かい湯治膳と名物「酸ヶ湯そば」で心身のデトックスが叶います。

- **楽天トラベル総合評価**: ★${hSukayu.reviewAverage}（クチコミ ${hSukayu.reviewCount}件）
- **目安料金**: 1名 ¥${(hSukayu.hotelMinCharge || 12000).toLocaleString()}〜
- **所在地**: ${hSukayu.address1}${hSukayu.address2}
- **アクセス**: ${hSukayu.access}
- **駐車場**: ${hSukayu.parkingInformation}
- [👉 酸ヶ湯温泉旅館の宿泊プラン・空室状況を見る](${hSukayu.affiliateUrl})

---

## 4. 蔦温泉旅館－足元から源泉湧出の自噴温泉－（青森県十和田市）
![蔦温泉旅館](${hTsuta.hotelImageUrl})
平安時代開湯、千年の秘湯。ブナの原生林に抱かれ、浴槽の底のブナ板から空気に触れずに自噴する「久安の湯」「泉響の湯」は全国でも極めて貴重。大正ロマンの風情漂う本館と、青森短角牛や清流岩魚を味わう会席料理が絶品です。

- **楽天トラベル総合評価**: ★${hTsuta.reviewAverage}（クチコミ ${hTsuta.reviewCount}件）
- **目安料金**: 1名 ¥${(hTsuta.hotelMinCharge || 21000).toLocaleString()}〜
- **所在地**: ${hTsuta.address1}${hTsuta.address2}
- **アクセス**: ${hTsuta.access}
- **駐車場**: ${hTsuta.parkingInformation}
- [👉 蔦温泉旅館の宿泊プラン・空室状況を見る](${hTsuta.affiliateUrl})

---

## 5. 八戸グランドホテル（青森県八戸市番町）
![八戸グランドホテル](${hHachinohe.hotelImageUrl})
八戸市中心部に位置し、奥入瀬観光の快適な前泊・後泊拠点。名物屋台街「みろく横丁」まで徒歩数分で、旬の八戸前沖さばやせんべい汁、地酒を満喫。朝食ビュッフェの郷土料理も大好評です。

- **楽天トラベル総合評価**: ★${hHachinohe.reviewAverage}（クチコミ ${hHachinohe.reviewCount}件）
- **目安料金**: 1名 ¥${(hHachinohe.hotelMinCharge || 7000).toLocaleString()}〜
- **所在地**: ${hHachinohe.address1}${hHachinohe.address2}
- **アクセス**: ${hHachinohe.access}
- **駐車場**: ${hHachinohe.parkingInformation}
- [👉 八戸グランドホテルの宿泊プラン・空室状況を見る](${hHachinohe.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

### 奥入瀬渓流（青森県十和田市）
![奥入瀬渓流](${wOirase.thumbnail || hOirase.hotelImageUrl})
${wOirase.extract}
- **宿からのアクセス**: 奥入瀬渓流ホテルの目の前。銚子大滝や阿修羅の流れなど名瀑が連なります。

### 十和田湖（青森県・秋田県）
![十和田湖](${wTowada.thumbnail || hTowada.hotelImageUrl})
${wTowada.extract}
- **宿からのアクセス**: 十和田ホテルから眼下すぐ。神秘的なカルデラ湖畔の雪景色が楽しめます。

### 八甲田山（青森県青森市）
![八甲田山](${wHakkoda.thumbnail || hSukayu.hotelImageUrl})
${wHakkoda.extract}
- **宿からのアクセス**: 酸ヶ湯温泉から八甲田ロープウェー山麓駅まで車で約10分。巨大な樹氷群は圧巻。

### 酸ヶ湯温泉（青森県青森市荒川）
![酸ヶ湯](${wSukayu.thumbnail || hTsuta.hotelImageUrl})
${wSukayu.extract}
- **宿からのアクセス**: 酸ヶ湯温泉旅館の所在地。標高約900mの白濁強酸性硫黄泉です。
`;

  return { postData, noteMarkdown };
};
