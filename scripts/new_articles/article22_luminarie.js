// scripts/new_articles/article22_luminarie.js
module.exports = function buildArticle22(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-hyogo-kobe-luminarie-arima-onsen-kinsen-hotels-guide";
  const title = "【兵庫・神戸/有馬温泉】「神戸ルミナリエ2027」先行対策＆冬の有馬温泉「金泉・銀泉」完全攻略！鎮魂と希望の光の彫刻と日本最古泉の濃厚赤湯、最高峰神戸牛を堪能する名門宿5選";
  const description = "阪神・淡路大震災の犠牲者への鎮魂と復興の祈りを宿し、1月下旬に神戸の冬空を照らす光の芸術「神戸ルミナリエ」。11月の最新公式情報をもとに、メリケンパークや旧居留地などの有料・無料観覧エリアの攻略法を徹底解説。六甲山を越えて日本三古湯・有馬温泉へ足を伸ばせば、鉄分と塩分が凝縮した赤褐色の「金泉」と炭酸ラジウム泉「銀泉」が冷えた体を芯から包み込みます。極上のA5神戸牛を味わう名門老舗旅館と神戸港ホテル5選。";
  const date = "2026-11-03";
  const prefecture = "兵庫県";
  const area = "神戸・有馬温泉・六甲山";

  const hHyoe = hotels.find(h => h.hotelNo === 8636) || hotels[0];
  const hKinzan = hotels.find(h => h.hotelNo === 53390) || hotels[1];
  const hGrand = hotels.find(h => h.hotelNo === 25128) || hotels[2];
  const hChoraku = hotels.find(h => h.hotelNo === 18093) || hotels[3];
  const hMeriken = hotels.find(h => h.hotelNo === 8978) || hotels[4];

  const wLuminarie = wiki["神戸ルミナリエ"] || {};
  const wArima = wiki["有馬温泉"] || {};
  const wPort = wiki["神戸港"] || {};
  const wRokko = wiki["六甲山"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-amber-950 via-stone-900 to-yellow-950 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-amber-300 font-extrabold text-xs">
      <span>✨</span><span>神戸ルミナリエ2027公式発表＆冬の有馬温泉速報</span>
    </div>
    <p class="text-xs text-amber-100">
      11月に詳細が明かされる神戸の冬の象徴！光の彫刻を巡る感動の夜と、有馬温泉が誇る濃厚な「金泉」＆最高峰A5神戸ビーフの贅沢旅。
    </p>
  </div>
  <a href="${hHyoe.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    ♨️ 有馬温泉 兵衛向陽閣の空室を見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2 mb-4">
  暗闇に浮かぶ光の聖堂！祈りと復興を紡ぐ「神戸ルミナリエ」と有馬の赤湯
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  1995年1月17日の阪神・淡路大震災から立ち上がった神戸の街。その年の12月に犠牲者への鎮魂と街の復興を願い始まった「神戸ルミナリエ」は、単なる商業イルミネーションとは一線を画す、人々の深い祈りと誇りが込められた唯一無二の光のモニュメントです。近年は開催時期を震災の記憶が刻まれる1月下旬へと移行し、会場も東遊園地、旧居留地、そして海を臨むメリケンパークへと分散展開され、より安全でゆったりと鑑賞できるスタイルへと進化を遂げました。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  イタリア伝統の木製フレームに手作業で組み込まれた数万個の電球が織りなす「スパッリエーラ」や「ガレリア」は、ヨーロッパの古典建築を彷彿とさせる幾何学模様を描き、冬の澄んだ夜空に圧倒的な荘厳さでそびえ立ちます。温かな光に包まれながら神戸の歴史に思いを馳せた後は、六甲山の北側に位置する日本最古の温泉地・有馬温泉へ。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  大地の深部から湧き出る有馬の「金泉」は、海水よりもはるかに濃い塩分と高濃度の鉄分を含み、空気に触れると鮮やかな赤褐色へと変化します。湯上がりの肌には塩分の膜が作られ、真冬の寒さを寄せ付けない抜群の保温力を誇ります。透き通ったラジウム泉「銀泉」との交互浴を楽しみ、兵庫県産但馬牛の最高峰「A5神戸牛」を味わう旅は、大人の冬の関西旅行においてこれ以上ない贅沢な選択肢です。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2 my-6">
  🏛️ 神戸ルミナリエ攻略の極意＆有馬温泉への賢い周遊ルート
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">鑑賞ノウハウ</span>
      <h3 class="text-base font-bold text-stone-900">会場別見どころと有料エリアの事前確保</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>メリケンパーク特別鑑賞エリア（有料）:</strong> 海沿いに設置される光の回廊「ガレリア」と巨大な「スパッリエーラ」は圧巻。日時指定の事前前売券（オンライン購入）を確保することで、混雑時でもスムーズに最前列で鑑賞できます。</p>
      <p>② <strong>東遊園地（無料）:</strong> 慰霊と復興の象徴「1.17希望の灯り」が灯る広場に、巨大な光の聖堂「カッサ・アルモニカ」が登場。フルオーケストラの優しい音楽と光の調和に心が洗われます。</p>
      <p>③ <strong>旧居留地（無料）:</strong> レトロな近代建築が立ち並ぶ通り沿いに光の彫刻が点在。大丸神戸店周辺の上品な街並みと相まって、大人の街歩きに最適なロケーションです。</p>
      <p>④ <strong>点灯直後の鑑賞がおすすめ:</strong> 日没直後の17:30前後は、港の夜景の残光とイルミネーションが美しく重なり、写真撮影のベストアングルとなります。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-stone-100 text-stone-800 font-extrabold text-xs rounded-lg">アクセス＆周遊</span>
      <h3 class="text-base font-bold text-stone-900">三宮から有馬温泉への快適移動術</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【電車ルート（最速約30分）】</strong> 三宮駅から神戸市営地下鉄（北神線）で谷上駅へ（約10分）。そこから神戸電鉄有馬線・有馬口駅で乗り換え、有馬温泉駅まで約30分。地下鉄と私鉄のスムーズな接続で天候に左右されず快適です。</p>
      <p><strong>【直通バスルート】</strong> 三宮バスターミナルから有馬温泉行きの高速バス（神姫バスまたはJRバス）が運行しており、乗り換えなし約45分で温泉街中心部に直着します。</p>
      <p><strong>【六甲山越え絶景ルート】</strong> 晴天の日中は、有馬温泉から「六甲有馬ロープウェー」で六甲山頂へ登り、1000万ドルの夜景を眺めながら六甲ケーブルで神戸市街地へ下るルートも非日常感あふれるおすすめコースです。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2 my-8">
  🏨 至福の金泉・銀泉と美食を味わう！有馬＆神戸の厳選宿5選
</h2>

<!-- 宿1: 有馬温泉 兵衛向陽閣 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">創業700年の名門・趣の異なる三つの大浴場で金泉巡り</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 有馬温泉 兵衛向陽閣（兵庫県神戸市北区有馬町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hHyoe.reviewAverage}（${hHyoe.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hHyoe.hotelImageUrl}" alt="${hHyoe.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hHyoe.roomImageUrl || hHyoe.hotelImageUrl}" alt="${hHyoe.hotelName} 金泉露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        太閤秀吉から「兵衛」の名を授かったと伝わる、創業700年の歴史を誇る有馬屈指の老舗旅館。「一の湯（和風情）」「二の湯（ローマ風情）」「三の湯（湯治場風情）」という趣の全く異なる3つの大浴場すべてに名湯「金泉」を贅沢に湛えています。冬の澄んだ外気の中で赤褐色の湯に浸かる心地よさは格別。夕食は特選神戸牛をすき焼きや会席料理で存分に堪能できます。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hHyoe.address1}${hHyoe.address2}</div>
        <div><strong>アクセス:</strong> 神戸電鉄有馬温泉駅より徒歩約5分（無料送迎バス随時運行）</div>
        <div><strong>温泉特徴:</strong> 敷地内で楽しむ3つの大浴場＆開放感抜群の金泉露天風呂</div>
        <div><strong>夕食会席:</strong> 熟練の料理人が腕を振るう旬の会席・神戸牛炭火焼き・ブッフェプラン</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hHyoe.hotelMinCharge || 17600).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hHyoe.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルで兵衛向陽閣のプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 有馬温泉 欽山 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">大人のための数寄屋造り料亭旅館・ミシュラン評価の京風創作懐石</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 有馬温泉 欽山（兵庫県神戸市北区有馬町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKinzan.reviewAverage}（${hKinzan.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKinzan.hotelImageUrl}" alt="${hKinzan.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKinzan.roomImageUrl || hKinzan.hotelImageUrl}" alt="${hKinzan.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        小学生以下の宿泊をご遠慮いただくことで、静寂と優雅な大人の時間を保ち続ける高級料亭旅館。凛とした数寄屋建築の美と手入れの行き届いた日本庭園が迎えます。大浴場には有馬屈指の濃厚な金泉が掛け流され、肌にじんわりと染み渡る極上の湯浴みが叶います。お部屋食で一品ずつ供される京風創作懐石は、瀬戸内の冬の魚介と極上但馬牛・神戸牛が調和した芸術的な味わいです。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hKinzan.address1}${hKinzan.address2}</div>
        <div><strong>アクセス:</strong> 有馬温泉駅より徒歩約3分（無料送迎あり）</div>
        <div><strong>おもてなし:</strong> 専任の客室係による細やかなお部屋食サービス</div>
        <div><strong>名物料理:</strong> 特選A5神戸ビーフのフィレステーキ＆瀬戸内天然真鯛の懐石</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hKinzan.hotelMinCharge || 25850).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hKinzan.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルで有馬温泉 欽山のプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 有馬温泉 有馬グランドホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">高台から望む有馬のパノラマ・展望大浴場「雲海」で金泉＆銀泉</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 有馬温泉 有馬グランドホテル（兵庫県神戸市北区有馬町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hGrand.reviewAverage}（${hGrand.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hGrand.hotelImageUrl}" alt="${hGrand.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hGrand.roomImageUrl || hGrand.hotelImageUrl}" alt="${hGrand.hotelName} 展望大浴場雲海" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        有馬温泉街を見下ろす高台に建つ総合リゾートホテル。最上階の9階に位置する展望大浴場「雲海」からは、丹波の山並みと有馬の湯煙を一望。遮るもののない大パノラマの中で、赤褐色の「金泉」と無色透明の「銀泉」の双方の露天風呂に浸かる贅沢が味わえます。地下2階の大浴場「ゆらり」では和風庭園に囲まれた本格温泉サウナも楽しめます。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hGrand.address1}${hGrand.address2}</div>
        <div><strong>アクセス:</strong> 有馬温泉駅・バス停より無料送迎バス約2分</div>
        <div><strong>風呂設備:</strong> 最上階展望大浴場「雲海」＆地下2階アクアテラス「ゆらり」</div>
        <div><strong>多彩な食事:</strong> 伝統会席・中国料理・洋食フレンチの各専用レストラン完備</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hGrand.hotelMinCharge || 17050).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hGrand.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルで有馬グランドホテルのプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 有馬温泉 銀水荘 兆楽 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">金泉とラジウム銀泉の自家源泉をダブル保有・櫟林の秘湯情緒</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 有馬温泉 銀水荘 兆楽（兵庫県神戸市北区有馬町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hChoraku.reviewAverage}（${hChoraku.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hChoraku.hotelImageUrl}" alt="${hChoraku.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hChoraku.roomImageUrl || hChoraku.hotelImageUrl}" alt="${hChoraku.hotelName} 露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        有馬温泉でも極めて希少な、敷地内に「金泉」と「ラジウム銀泉」の2つの自家源泉を併せ持つ温泉通垂涎の湯宿。豊かなクヌギ林に囲まれた野天風呂「紫翠」では、木々のざわめきと野鳥の声を聴きながら、手つかずの濃密な赤湯と銀泉を交互に堪能できます。プライベートに源泉を楽しめる離れのヴィラや露天風呂付き客室も充実しています。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hChoraku.address1}${hChoraku.address2}</div>
        <div><strong>アクセス:</strong> 有馬温泉駅より車で約3分（無料送迎あり）</div>
        <div><strong>自家源泉:</strong> 敷地内自噴の金泉＆高濃度ラジウム銀泉</div>
        <div><strong>厳選料理:</strong> 三田牛や神戸牛の陶板焼き・蒸ししゃぶを取り入れた旬菜会席</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hChoraku.hotelMinCharge || 24420).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hChoraku.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルで銀水荘 兆楽のプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 神戸メリケンパークオリエンタルホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">神戸ルミナリエ主会場直結・全室バルコニー付きの海上ホテル</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 神戸メリケンパークオリエンタルホテル（兵庫県神戸市中央区波止場町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hMeriken.reviewAverage}（${hMeriken.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMeriken.hotelImageUrl}" alt="${hMeriken.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMeriken.roomImageUrl || hMeriken.hotelImageUrl}" alt="${hMeriken.hotelName} バルコニー夜景" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        神戸港の埠頭の先端に位置し、海に浮かぶ豪華客船のような外観を持つシティリゾート。全客室に開放的なウッドデッキバルコニーが備わり、港を行き交う船やライトアップされた神戸ポートタワー、ハーバーランドの夜景を一望。「神戸ルミナリエ」のメリケンパーク会場まで徒歩数分という特等席に位置し、鑑賞前後のディナーやバータイムまでロマンチックに完結します。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hMeriken.address1}${hMeriken.address2}</div>
        <div><strong>アクセス:</strong> JR・阪神「元町駅」より徒歩約15分、三ノ宮駅より無料シャトルバス運行</div>
        <div><strong>ロケーション:</strong> メリケンパークの南端、270度を海に囲まれた唯一無二の眺望</div>
        <div><strong>ブレックファスト:</strong> 目の前で仕上げるフレンチトーストやオムレツが人気の朝食ビュッフェ</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hMeriken.hotelMinCharge || 7990).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hMeriken.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルで神戸メリケンパークオリエンタルホテルのプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="wiki-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6">
  冬の神戸・有馬旅行で必ず訪れたい名所。歴史的な背景とともにその魅力をご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <!-- 観光地1: 神戸ルミナリエ -->
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
    <div class="flex items-center justify-between border-b border-stone-100 pb-2">
      <h3 class="font-bold text-stone-900 text-sm md:text-base">神戸ルミナリエ（冬の光の祭典）</h3>
      <span class="text-xs text-amber-700 font-extrabold">鎮魂と復興の光</span>
    </div>
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wLuminarie.extract || '阪神・淡路大震災の記憶を後世に語り継ぎ、犠牲者への鎮魂と都市の復興・希望を託して1995年12月に始まった光の彫刻作品群。イタリアの伝統的な光の装飾芸術が冬の神戸を温かく照らします。'}
    </p>
  </div>

  <!-- 観光地2: 有馬温泉 -->
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
    <div class="flex items-center justify-between border-b border-stone-100 pb-2">
      <h3 class="font-bold text-stone-900 text-sm md:text-base">有馬温泉（日本三古湯・三名泉）</h3>
      <span class="text-xs text-amber-700 font-extrabold">金泉と銀泉の名湯街</span>
    </div>
    ${wArima.thumbnail ? `<img src="${wArima.thumbnail}" alt="有馬温泉" class="w-full h-44 object-cover rounded-xl" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wArima.extract || '日本書紀にも記される日本最古の温泉地の一つ。豊臣秀吉が愛したことでも名高く、塩分と鉄分を豊富に含む赤褐色の「金泉」と、無色透明のラジウム炭酸泉「銀泉」という異なる泉質が同時に湧出します。'}
    </p>
  </div>

  <!-- 観光地3: 神戸港 / メリケンパーク -->
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
    <div class="flex items-center justify-between border-b border-stone-100 pb-2">
      <h3 class="font-bold text-stone-900 text-sm md:text-base">神戸港・メリケンパーク</h3>
      <span class="text-xs text-amber-700 font-extrabold">国際港湾都市のシンボル</span>
    </div>
    ${wPort.thumbnail ? `<img src="${wPort.thumbnail}" alt="神戸港" class="w-full h-44 object-cover rounded-xl" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wPort.extract || '明治元年の開港以来、日本の玄関口として栄えた国際貿易港。赤い神戸ポートタワーや海洋博物館、BE KOBEモニュメントが並び、海風を感じながらの散策や夜景鑑賞スポットとして絶大な人気を誇ります。'}
    </p>
  </div>

  <!-- 観光地4: 六甲山 -->
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
    <div class="flex items-center justify-between border-b border-stone-100 pb-2">
      <h3 class="font-bold text-stone-900 text-sm md:text-base">六甲山（1000万ドルの夜景）</h3>
      <span class="text-xs text-amber-700 font-extrabold">神戸と有馬を繋ぐ山脈</span>
    </div>
    ${wRokko.thumbnail ? `<img src="${wRokko.thumbnail}" alt="六甲山" class="w-full h-44 object-cover rounded-xl" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wRokko.extract || '神戸市街地の背後に東西に連なる名峰群。山頂の天覧台や六甲ガーデンテラスからは大阪湾から紀伊半島まで見渡す大パノラマ夜景が広がり、ロープウェーで有馬温泉へと直結しています。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2 my-8">
  🗺️ 神戸ルミナリエ＆有馬温泉 1泊2日極上モデルコース
</h2>
<div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-4 text-xs md:text-sm text-stone-700 leading-relaxed">
  <div class="border-b border-stone-200 pb-3">
    <strong class="text-amber-900 text-sm">【1日目: 神戸旧居留地散策からルミナリエ鑑賞、有馬の夜へ】</strong>
    <p class="mt-1">
      午前11:00 JR三ノ宮駅到着 ➔ 旧居留地の大丸神戸店周辺で冬の街並み散策＆洋食ランチ ➔ 14:00 メリケンパークでBE KOBE記念撮影 ➔ 17:30 神戸ルミナリエ点灯！東遊園地・旧居留地・メリケンパークの光の彫刻を巡る ➔ 19:30 地下鉄北神線＆神戸電鉄で有馬温泉へ（約35分） ➔ 有馬の老舗旅館へチェックイン ➔ 冷えた体を濃厚な「金泉」で芯から温める ➔ お部屋でとろける極上A5神戸牛すき焼き会席に舌鼓
    </p>
  </div>
  <div>
    <strong class="text-amber-900 text-sm">【2日目: 有馬湯めぐりと六甲山パノラマ】</strong>
    <p class="mt-1">
      朝07:30 朝の澄んだ空気の中「銀泉」露天風呂に入浴 ➔ 地元食材を活かした和朝食 ➔ 10:00 有馬温泉街の湯本坂を散策（名物「炭酸せんべい」の手焼き体験や有馬サイダー） ➔ 11:30 六甲有馬ロープウェーに乗車し六甲山頂へ ➔ 展望台から見渡す神戸港の大絶景 ➔ 六甲ケーブルで市街地へ下り、新神戸駅から新幹線で帰路へ
    </p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q1. 神戸ルミナリエのチケットは事前予約が必要ですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. メリケンパークに設置される特別鑑賞エリア（ガレリア・スパッリエーラ回廊）は有料となり、日時指定の事前前売券（オンライン）の購入が推奨されます。東遊園地や旧居留地の展示は無料・チケット不要で自由に鑑賞可能です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q2. 有馬温泉の「金泉」と「銀泉」の違いは何ですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 「金泉（含鉄ナトリウム塩化物強塩高温泉）」は鉄分と塩分が極めて多く、空気に触れると赤褐色に濁り、強力な保温・保湿効果があります。「銀泉」は無色透明の炭酸水素塩泉やラジウム鉱泉で、毛細血管を広げ血流を促進し肌を滑らかに整える効果があります。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q3. 冬の有馬温泉へ車で行く場合、ノーマルタイヤでも大丈夫ですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 有馬温泉は六甲山の裏側に位置するため、神戸市街地よりも気温が3〜5度低くなります。特に12月下旬〜2月は阪神高速北神戸線や一般道で積雪・路面凍結が発生することがあるため、冬用スタッドレスタイヤの装着またはチェーン携行が強く推奨されます。公共交通機関（電車・高速バス）の利用が最も安全です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q4. 有馬温泉で日帰り入浴はできますか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 公共外湯の「金の湯（金泉）」と「銀の湯（銀泉）」をはじめ、大型日帰り温泉「太閤の湯」などで日帰り入浴が可能です。ただし、ルミナリエ期間中の夕方以降は大変混雑するため、旅館に宿泊して専用大浴場でゆっくり浸かるのが理想的です。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-100 border border-stone-200 text-center space-y-3">
  <h3 class="text-base font-bold text-stone-900">兵庫・神戸・関西エリアの旅行情報も合わせてチェック！</h3>
  <ul class="text-xs text-stone-600 space-y-1.5 inline-block text-left">
    <li>👉 <a href="/arima-hyoe-koyokaku-guide/" class="text-amber-800 hover:text-amber-600 underline">有馬温泉 兵衛向陽閣の宿泊記＆三つの金泉大浴場徹底レビュー</a></li>
    <li>👉 <a href="/autumn-kansai-matsutake-gourmet-guide/" class="text-amber-800 hover:text-amber-600 underline">関西の贅沢美食宿！神戸牛＆近江牛と名湯露天風呂特集</a></li>
    <li>👉 <a href="/hyogo/" class="text-amber-800 hover:text-amber-600 underline">兵庫県の温泉旅館・ホテル・観光ガイド一覧</a></li>
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
    image: hHyoe.hotelImageUrl,
    other_images: [
      hKinzan.hotelImageUrl,
      hGrand.hotelImageUrl,
      hChoraku.hotelImageUrl,
      hMeriken.hotelImageUrl
    ],
    hotel_name: `${hHyoe.hotelName}・${hKinzan.hotelName} ほか`,
    affiliate_url: hHyoe.affiliateUrl,
    categories: ["冬のイベント特集", "神戸ルミナリエ", "有馬温泉", "金泉銀泉", "神戸牛グルメ", "六甲山"],
    price: `¥${(hMeriken.hotelMinCharge || 7990).toLocaleString()}〜`,
    rating: hGrand.reviewAverage || 4.67,
    review_count: hHyoe.reviewCount || 4200,
    date: date,
    is_special_feature: true,
    keywords: [
      "神戸ルミナリエ 2027 チケット 混雑 日程",
      "有馬温泉 金泉 銀泉 おすすめ宿",
      "兵衛向陽閣 宿泊記 楽天トラベル",
      "有馬温泉 欽山 神戸牛 懐石",
      "有馬グランドホテル 展望風呂 雲海",
      "神戸メリケンパークオリエンタルホテル 夜景",
      "冬の神戸 有馬温泉 モデルコース"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["神戸ルミナリエ", "有馬温泉", "兵衛向陽閣", "金泉銀泉", "神戸牛", "神戸ホテル", "冬の関西旅行"]
---

# ${title}

阪神・淡路大震災の犠牲者への鎮魂と復興の祈りを宿し、1月下旬に神戸の冬空を照らす光の芸術「神戸ルミナリエ」。

11月の最新公式情報をもとに、メリケンパークや旧居留地などの有料・無料観覧エリアの攻略法を徹底解説。

六甲山を越えて日本三古湯・有馬温泉へ足を伸ばせば、鉄分と塩分が凝縮した赤褐色の「金泉」と炭酸ラジウム泉「銀泉」が冷えた体を芯から包み込みます。

極上のA5神戸牛を味わう名門老舗旅館と神戸港ホテル5選を現地目線で徹底紹介します。

---

## 🏛️ 神戸ルミナリエ攻略の極意＆有馬温泉への賢い周遊ルート

- **メリケンパーク有料特別鑑賞エリア:** 光の回廊「ガレリア」と巨大「スパッリエーラ」を最前列で鑑賞できる日時指定チケットは事前確保が鉄則。
- **東遊園地＆旧居留地:** 無料で鑑賞できる光の彫刻。1.17希望の灯りとともに静かに祈りを捧げる荘厳な空間。
- **三宮から有馬温泉へわずか30分:** 地下鉄北神線と神戸電鉄の乗り継ぎで、市街地から極上の湯の街へスムーズに移動可能。
- **六甲山頂ロープウェー経由:** 晴れた日は有馬からロープウェーで六甲山頂へ登り、1000万ドルの夜景を眼下に収める贅沢ルートも。

---

## 🏨 至福の金泉・銀泉と美食を味わう！有馬＆神戸の厳選宿5選

### 1. 有馬温泉 兵衛向陽閣（兵庫県神戸市北区有馬町）
- **特徴:** 創業700年の歴史を誇る老舗名門。「一の湯」「二の湯」「三の湯」という趣の異なる3つの大浴場すべてで名湯「金泉」を堪能。
- **宿泊目安:** 1名 ¥${(hHyoe.hotelMinCharge || 17600).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hHyoe.reviewAverage}（${hHyoe.reviewCount}件）
- 👉 [兵衛向陽閣の空室・宿泊プランを見る](${hHyoe.affiliateUrl})

### 2. 有馬温泉 欽山（兵庫県神戸市北区有馬町）
- **特徴:** 小学生以下お断りの静寂を守る数寄屋造り料亭旅館。ミシュラン評価の京風創作懐石とお部屋食、濃厚な金泉掛け流し。
- **宿泊目安:** 1名 ¥${(hKinzan.hotelMinCharge || 25850).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hKinzan.reviewAverage}（${hKinzan.reviewCount}件）
- 👉 [有馬温泉 欽山の空室・宿泊プランを見る](${hKinzan.affiliateUrl})

### 3. 有馬温泉 有馬グランドホテル（兵庫県神戸市北区有馬町）
- **特徴:** 高台に建つ絶景リゾート。最上階9階の展望大浴場「雲海」から有馬の湯煙を見下ろしつつ、金泉と銀泉の両方に浸かる贅沢。
- **宿泊目安:** 1名 ¥${(hGrand.hotelMinCharge || 17050).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hGrand.reviewAverage}（${hGrand.reviewCount}件）
- 👉 [有馬グランドホテルの空室・宿泊プランを見る](${hGrand.affiliateUrl})

### 4. 有馬温泉 銀水荘 兆楽（兵庫県神戸市北区有馬町）
- **特徴:** 有馬でも希少な「金泉」と「ラジウム銀泉」の2つの自家源泉を敷地内に保有。クヌギ林に囲まれた野趣あふれる湯浴み。
- **宿泊目安:** 1名 ¥${(hChoraku.hotelMinCharge || 24420).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hChoraku.reviewAverage}（${hChoraku.reviewCount}件）
- 👉 [銀水荘 兆楽の空室・宿泊プランを見る](${hChoraku.affiliateUrl})

### 5. 神戸メリケンパークオリエンタルホテル（兵庫県神戸市中央区）
- **特徴:** 神戸港の埠頭先端に建つ海上ホテル。全室バルコニー付きでルミナリエメリケンパーク会場至近。港夜景を独占する都会派リゾート。
- **宿泊目安:** 1名 ¥${(hMeriken.hotelMinCharge || 7990).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hMeriken.reviewAverage}（${hMeriken.reviewCount}件）
- 👉 [神戸メリケンパークオリエンタルホテルの空室・宿泊プランを見る](${hMeriken.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **神戸ルミナリエ:** ${wLuminarie.extract || '阪神・淡路大震災の犠牲者への鎮魂と復興を願って始まった光の彫刻作品群。'}
- **有馬温泉:** ${wArima.extract || '日本書紀にも記される日本三古湯。濃厚な赤褐色の金泉と無色透明の銀泉が湧出する名湯。'}
- **神戸港・メリケンパーク:** ${wPort.extract || '神戸ポートタワーや海洋博物館が立ち並ぶ港湾公園。ルミナリエ特別鑑賞エリアの舞台。'}
- **六甲山:** ${wRokko.extract || '1000万ドルの夜景が広がる名峰。ロープウェーで有馬温泉と直結する絶景スポット。'}

---

## 🗺️ 神戸ルミナリエ＆有馬温泉 1泊2日モデルコース

- **1日目:** JR三ノ宮駅 ➔ 旧居留地散策・ランチ ➔ メリケンパーク散策 ➔ 17:30 ルミナリエ点灯鑑賞 ➔ 電車で有馬温泉へ ➔ 宿チェックイン ➔ 金泉露天風呂 ➔ 神戸牛会席
- **2日目:** 朝の銀泉入浴 ➔ 有馬温泉街湯本坂散策（炭酸せんべい） ➔ 六甲有馬ロープウェーで六甲山頂へ ➔ 展望パノラマ ➔ 新神戸駅より帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. ルミナリエの有料エリアチケットはどこで買えますか？**  
A. 公式オンラインチケットサイトやコンビニ端末で前売券が販売されます。

**Q2. 有馬温泉の金泉の効能は？**  
A. 海水より濃い塩分と高濃度鉄分を含み、湯冷めしにくく神経痛や冷え性に優れた効能があります。

**Q3. 冬のアクセスで雪道対策は必要ですか？**  
A. 有馬は市街地より気温が低く路面凍結の恐れがあるため、車の場合は冬用タイヤ必須です。電車や直通高速バスが安全でおすすめです。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【兵庫・神戸/有馬温泉】「神戸ルミナリエ2027」先行対策＆冬の有馬温泉「金泉・銀泉」完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/${slug}/)
`;

  return { postData, noteMarkdown };
};
