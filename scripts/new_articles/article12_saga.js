// scripts/new_articles/article12_saga.js
module.exports = function buildArticle12(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "autumn-saga-arita-touki-mifuneyama-lightup-ureshino-takeo-onsen-hotels-guide";
  const title = "【佐賀・武雄/有田/嬉野】秋の有田陶磁器まつり2026＆御船山楽園「紅葉まつり」夜間ライトアップ完全攻略！日本三大美肌の湯と佐賀牛・温泉湯豆腐を堪能する厳選名宿5選";
  const description = "11月下旬、肥前陶磁の里が最も華やぐ「秋の有田陶磁器まつり」と、奇岩・御船山を借景に約4万坪が燃えるような紅に染まる武雄・御船山楽園「紅葉まつり」。九州屈指の規模を誇る夜間ライトアップは息を呑む幽玄の美です。有田の内山地区散策ルート、混雑を回避する駐車場情報、日本三大美肌の湯・嬉野温泉の名物「温泉湯豆腐」や最高峰「佐賀牛」を味わい尽くす厳選5宿を徹底解説。";
  const date = "2026-11-01";
  const prefecture = "佐賀県";
  const area = "武雄・嬉野・有田・伊万里";

  const hWataya = hotels.find(h => h.hotelNo === 40527) || hotels[0];
  const hMifuneyama = hotels.find(h => h.hotelNo === 13417) || hotels[1];
  const hTaishoya = hotels.find(h => h.hotelNo === 19923) || hotels[2];
  const hShunkeiya = hotels.find(h => h.hotelNo === 19713) || hotels[3];
  const hShiiba = hotels.find(h => h.hotelNo === 40293) || hotels[4];

  const wMifuneyama = wiki["御船山楽園"] || {};
  const wArita = wiki["有田焼"] || {};
  const wUreshino = wiki["嬉野温泉"] || {};
  const wTakeo = wiki["武雄温泉"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-red-950 via-amber-900 to-stone-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-amber-300 font-extrabold text-xs">
      <span>🍁</span><span>2026年 佐賀・秋の陶磁器まつり＆御船山楽園ライトアップ速報</span>
    </div>
    <p class="text-xs text-stone-200">
      11月中旬から下旬は御船山楽園4万坪の紅葉ライトアップと「秋の有田陶磁器まつり」が重なる佐賀の年間最高潮シーズン！武雄・嬉野の温泉宿を拠点にゆったり巡るのが大人の鉄則。
    </p>
  </div>
  <a href="${hMifuneyama.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    🍁 御船山楽園ホテルの空室・プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 mb-4">
  400年の陶磁史が息づく町並みと、奇岩を彩る錦秋のパノラマ
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  西九州の山あいに広がる佐賀県・肥前エリア。400年以上の歴史を刻む有田焼の窯元が連なる有田町、武雄鍋島公の美意識が今なお息づく武雄温泉、そして「日本三大美肌の湯」として名高い嬉野温泉。これら3つの個性豊かな地域が車で30分圏内に凝縮されているのが、佐賀・西松浦エリアの類まれな魅力です。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  春の陶器市が100万人を超える賑わいを見せるのに対し、11月下旬（勤労感謝の日前後）に開催される「秋の有田陶磁器まつり」は、情緒ある重要伝統的建造物群保存地区「内山地区」の白壁やトンバイ塀の路地をのんびりと歩き、窯元との語らいを愉しめる通好みの陶磁の祭典。さらに隣接する武雄では、武雄鍋島公が創り上げた15万坪の大庭園「御船山楽園」にて、日本最大級の規模を誇る紅葉ライトアップ「たまゆらの夕べ」が開幕します。断崖絶壁の御船山を背景に鏡池を彩る深紅のモミジ、そして湯上がりの肌をしっとり潤す名湯と佐賀牛の極上会席。秋の五感を揺さぶる至高の旅路をご案内します。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-6">
  🎪 2026秋の有田陶磁器まつり＆御船山楽園「紅葉まつり」見どころ・散策術
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-red-100 text-red-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">秋の有田散策と御船山楽園ライトアップ</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>御船山楽園「たまゆらの夕べ」ライトアップ:</strong> 標高210mの御船山を借景に、夜の庭園内に広がる鏡池の水面に錦秋のモミジと巨岩が鮮明に映り込みます。点灯時間は17:30から22:00まで。池の周囲を巡る木道からのパノラマビューは日本庭園ライトアップの最高傑作と称されます。</p>
      <p>② <strong>有田・内山地区のトンバイ塀と町屋散策:</strong> 窯を築く際に使った耐火レンガ（トンバイ）を廃物利用して作られた「トンバイ塀」が続く裏通り。秋には路地のあちこちで大イチョウが黄金色の落葉を広げ、風情ある陶磁の町並みを彩ります。</p>
      <p>③ <strong>泉山磁石場の大イチョウ（国指定天然記念物）:</strong> 樹齢約1,000年、高さ約30mを誇る巨木。11月中旬から下旬にかけて木全体が黄金に染まり、黄色の絨毯が足元を埋め尽くします。</p>
      <p>④ <strong>食と器のコラボレーション:</strong> まつり期間中、有田町内の料亭やカフェでは、有田焼の限定器で味わう郷土料理「ごどうふ」や佐賀牛ランチの特別メニューが提供されます。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">実戦アドバイス</span>
      <h3 class="text-base font-bold text-stone-900">効率的な周遊ルートと防寒対策</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【有田と武雄・嬉野の位置関係】</strong> 有田町内から武雄温泉・御船山楽園までは車で約20分、嬉野温泉までは車で約25分です。昼間は有田町内で陶器巡りとランチを楽しみ、16時頃に武雄・嬉野の宿にチェックイン。夕食前または夕食後に御船山楽園へライトアップ鑑賞に出かけるのが最もスムーズな黄金ルートです。</p>
      <p><strong>【駐車場の確保】</strong> 秋の有田陶磁器まつりは町内の公営駐車場（泉山磁石場前や有田小学校グランドなど）が利用可能です。御船山楽園のライトアップは17時〜18時半が入庫のピークを迎えるため、19時以降の遅めの時間帯を狙うと駐車が格段にスムーズです。</p>
      <p><strong>【夜の冷え込み】</strong> 盆地状の山あいに位置するため、11月下旬の夜は10度を下回り、風が吹くと体感温度がぐっと下がります。御船山楽園の広い庭園を1時間以上歩くため、歩きやすい防寒靴と温かいアウターを必ず着用してください。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  🏨 美肌の湯と極上美食！嬉野・武雄の厳選名宿5選
</h2>

<!-- 宿1: 嬉野温泉 和多屋別荘 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">嬉野川沿い2万坪の大空間・黒川紀章設計タワー館</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 嬉野温泉 和多屋別荘（佐賀県嬉野市嬉野町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hWataya.reviewAverage}（${hWataya.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hWataya.hotelImageUrl}" alt="${hWataya.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hWataya.roomImageUrl || hWataya.hotelImageUrl}" alt="${hWataya.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">広大な日本庭園とカルチャーが融合する老舗。日本三大美肌の湯と佐賀牛鉄板焼き</p>
      <p>嬉野川を挟んで広がる約2万坪の広大な敷地を誇る「和多屋別荘」は、佐賀を代表するランドマーク温泉旅館。黒川紀章氏が設計したタワー館や、数寄屋造りの別邸が水と緑の景観と美しく調和しています。天然重曹泉である嬉野の美肌湯をたっぷりと湛えた大浴場「御影殿」や渓流沿いの露天風呂は、トロリとした湯ざわりで肌を滑らかに包み込みます。近年は「お茶」と「本」をテーマにしたBooks & Tea三服やピエール・エルメ・パリのサロンなど洗練された空間展開でも高い注目を集めています。夕食は特選佐賀牛のステーキや名物温泉湯どうふ会席を贅沢に味わえます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hWataya.address1}${hWataya.address2}</p>
        <p><strong>【アクセス】</strong> ${hWataya.access}</p>
        <p><strong>【温泉・施設】</strong> 大浴場「御影殿」、露天風呂、茶房ラウンジ、足湯カフェ、エステ、Wi-Fi完備。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hWataya.hotelMinCharge || 19000).toLocaleString()}〜</span>
        <a href="${hWataya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          和多屋別荘の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 武雄温泉 御船山楽園ホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-red-100 text-red-900 font-black text-xs rounded-full">御船山楽園直結・サウナシュラン日本一「らかんの湯」</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 武雄温泉 御船山楽園ホテル（佐賀県武雄市武雄町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-red-50 border border-red-300 text-red-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hMifuneyama.reviewAverage}（${hMifuneyama.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMifuneyama.hotelImageUrl}" alt="${hMifuneyama.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMifuneyama.roomImageUrl || hMifuneyama.hotelImageUrl}" alt="${hMifuneyama.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">ロビーに入った瞬間広がるチームラボのアート空間。宿泊者専用パスで庭園ライトアップを自由散策</p>
      <p>御船山楽園の敷地内に直接佇む「御船山楽園ホテル」は、アートと歴史庭園、そして世界最高峰のサウナ体験が融合した唯一無二のデスティネーションホテル。エントランスには無数のランプが呼応するチームラボの常設アートが広がり、訪れる者を幻想の世界へ誘います。さらにサウナ愛好家から絶賛され「サウナシュラン殿堂入り」を果たした「らかんの湯」では、御船山の自然林を望む露天サウナや武雄の薬草ロウリュ、武雄温泉の極上冷水風呂を堪能できます。宿泊者は紅葉まつり期間中の庭園ライトアップに何度でも出入り自由。夜更けの静まり返った錦秋の庭園を独占できる至高の特権です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hMifuneyama.address1}${hMifuneyama.address2}</p>
        <p><strong>【アクセス】</strong> ${hMifuneyama.access}</p>
        <p><strong>【温泉・施設】</strong> らかんの湯（露天風呂・薪サウナ・ドライサウナ）、チームラボ常設展示ロビー、茶屋。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hMifuneyama.hotelMinCharge || 25000).toLocaleString()}〜</span>
        <a href="${hMifuneyama.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          御船山楽園ホテルの宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 嬉野温泉 大正屋 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">吉村順三設計の静謐な数寄屋建築・皇室御用達の老舗</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 嬉野温泉 大正屋（佐賀県嬉野市嬉野町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hTaishoya.reviewAverage}（${hTaishoya.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hTaishoya.hotelImageUrl}" alt="${hTaishoya.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hTaishoya.roomImageUrl || hTaishoya.hotelImageUrl}" alt="${hTaishoya.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">日本建築界の巨匠・吉村順三氏が遺した端正な和の空間。四季の花咲く中庭と名湯「四季の湯」</p>
      <p>大正14年創業の「大正屋」は、日本を代表する建築家・吉村順三氏が手掛けた名建築として知られる老舗温泉宿。嬉野の温泉街中心に位置しながら、館内に一歩足を踏み入れると杉苔の美しい中庭と静寂の別世界が広がります。開放感あふれる大浴場「四季の湯」はガラス張りの吹き抜け空間で、庭の緑を眺めながら化粧水のような重曹泉に身を委ねられます。有田焼の器に盛り付けられる夕食の月替わり会席は、厳選された佐賀牛や玄界灘・有明海の新鮮な魚介を卓越した技で仕上げた逸品ぞろい。朝食の名物「大正屋特製とろける温泉湯どうふ」は言葉を失う美味しさです。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hTaishoya.address1}${hTaishoya.address2}</p>
        <p><strong>【アクセス】</strong> ${hTaishoya.access}</p>
        <p><strong>【温泉・施設】</strong> 大浴場「四季の湯」「滝の湯」、日本庭園、サロン、茶房、駐車場完備。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hTaishoya.hotelMinCharge || 21000).toLocaleString()}〜</span>
        <a href="${hTaishoya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          大正屋の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 武雄温泉 ホテル春慶屋 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-purple-100 text-purple-900 font-black text-xs rounded-full">武雄温泉楼門徒歩3分・最上階の展望露天風呂</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 武雄温泉 ホテル春慶屋（佐賀県武雄市武雄町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-purple-50 border border-purple-300 text-purple-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hShunkeiya.reviewAverage}（${hShunkeiya.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hShunkeiya.hotelImageUrl}" alt="${hShunkeiya.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hShunkeiya.roomImageUrl || hShunkeiya.hotelImageUrl}" alt="${hShunkeiya.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">国指定重要文化財「武雄温泉楼門」の至近。1300年の歴史を誇る名湯を最上階展望露天風呂で満喫</p>
      <p>「ホテル春慶屋」は、辰野金吾設計の名建築「武雄温泉楼門」から徒歩わずか3分という好立地に佇む純和風宿。宿の最上階に設けられた展望露天風呂からは、武雄の山並みと秋の空を眺めながら、弱アルカリ性単純温泉の柔らかな湯に浸ることができます。源泉100%かけ流しの豊かな湯量は旅の疲れを心地よく解きほぐします。夕食は佐賀牛の陶板焼きをはじめ、有明海の魚介や旬の根菜を彩り豊かにあしらった季節会席。御船山楽園へのアクセスも車で約5分と至近で、陶器市散策とライトアップ鑑賞の両立に最適な宿です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hShunkeiya.address1}${hShunkeiya.address2}</p>
        <p><strong>【アクセス】</strong> ${hShunkeiya.access}</p>
        <p><strong>【温泉・施設】</strong> 最上階展望露天風呂、大浴場、宴会場、売店、無料送迎あり。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hShunkeiya.hotelMinCharge || 16000).toLocaleString()}〜</span>
        <a href="${hShunkeiya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          ホテル春慶屋の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 嬉野温泉 椎葉山荘 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-teal-100 text-teal-900 font-black text-xs rounded-full">椎葉川の渓流に抱かれた一軒宿・山の湯露天風呂</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 嬉野温泉 大正屋 椎葉山荘（佐賀県嬉野市嬉野町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-teal-50 border border-teal-300 text-teal-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hShiiba.reviewAverage}（${hShiiba.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hShiiba.hotelImageUrl}" alt="${hShiiba.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hShiiba.roomImageUrl || hShiiba.hotelImageUrl}" alt="${hShiiba.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">椎葉山の山峡に隠れるように佇む静寂の離れ宿。渓流のせせらぎと山海の美味に酔いしれる</p>
      <p>嬉野の温泉街から車で約5分、山あいを流れる椎葉川のほとりに佇む「椎葉山荘」は、大正屋グループが誇る山あいの隠れ宿。大自然に溶け込む木造建築の客室からは、紅葉に染まる山肌と清流を望むことができます。名物の大露天風呂「山の湯」は、木立の合間から差し込む秋の光を浴びながら開放感あふれる湯浴みが楽しめ、夜には満天の星空が広がります。夕食はレストラン「しいばの小径」で味わう、佐賀牛のしゃぶしゃぶや四季の山川の幸をふんだんに使った盛り込み料理。都会の喧騒を完全に忘れ、秋の静寂に身を委ねたい旅行者に選ばれ続ける名宿です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hShiiba.address1}${hShiiba.address2}</p>
        <p><strong>【アクセス】</strong> ${hShiiba.access}</p>
        <p><strong>【温泉・施設】</strong> 大露天風呂「山の湯」、内湯「山の湯」、渓流沿い遊歩道、バーラウンジ。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hShiiba.hotelMinCharge || 23000).toLocaleString()}〜</span>
        <a href="${hShiiba.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          椎葉山荘の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="nearby-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs text-stone-600 mb-6">
  武雄・嬉野・有田が誇る国指定名勝や伝統文化スポット。宿からのアクセス情報と共にご案内します。
</p>

<div class="space-y-6 my-6">
  <!-- スポット1: 御船山楽園 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wMifuneyama.thumbnail || hMifuneyama.hotelImageUrl}" alt="御船山楽園" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-red-100 text-red-800 font-bold text-[11px] rounded-md">🍁 国登録記念物・15万坪の大庭園</span>
        <h3 class="text-base font-bold text-stone-900">御船山楽園（佐賀県武雄市武雄町）</h3>
        <p>${wMifuneyama.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 御船山楽園ホテル直結。武雄温泉各宿から車で約5分、嬉野温泉各宿から車で約20分。池に映る紅葉ライトアップ「たまゆらの夕べ」は必見です。</p>
      </div>
    </div>
  </div>

  <!-- スポット2: 有田焼 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wArita.thumbnail || hWataya.hotelImageUrl}" alt="有田焼" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-800 font-bold text-[11px] rounded-md">🏺 日本最古の磁器・伝統工芸品</span>
        <h3 class="text-base font-bold text-stone-900">有田焼・内山地区（佐賀県西松浦郡有田町）</h3>
        <p>${wArita.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 武雄温泉・嬉野温泉から車で約20〜25分。トンバイ塀の散策路や泉山磁石場、大公孫樹（大イチョウ）の黄葉が見どころです。</p>
      </div>
    </div>
  </div>

  <!-- スポット3: 嬉野温泉 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wUreshino.thumbnail || hTaishoya.hotelImageUrl}" alt="嬉野温泉" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[11px] rounded-md">♨️ 日本三大美肌の湯・ナトリウム炭酸水素塩泉</span>
        <h3 class="text-base font-bold text-stone-900">嬉野温泉（佐賀県嬉野市）</h3>
        <p>${wUreshino.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 和多屋別荘・大正屋・椎葉山荘が所在する名湯郷。名物「温泉湯どうふ」は温泉水のアルカリ成分で豆腐がとろける絶品グルメです。</p>
      </div>
    </div>
  </div>

  <!-- スポット4: 武雄温泉 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wTakeo.thumbnail || hShunkeiya.hotelImageUrl}" alt="武雄温泉" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-800 font-bold text-[11px] rounded-md">🏛️ 竜宮城を模した国指定重要文化財・楼門</span>
        <h3 class="text-base font-bold text-stone-900">武雄温泉・楼門（佐賀県武雄市武雄町）</h3>
        <p>${wTakeo.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> ホテル春慶屋から徒歩3分、御船山楽園ホテルから車で約5分。東京駅を手掛けた辰野金吾設計の朱塗り楼門と元湯の共同浴場が象徴です。</p>
      </div>
    </div>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  🗺️ 秋の有田陶磁器まつり＆御船山楽園 1泊2日満喫モデルコース
</h2>
<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-red-50/60 to-amber-50/40 border border-red-200 space-y-4 text-xs text-stone-700 leading-relaxed">
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【1日目】有田のトンバイ塀・大公孫樹散策と御船山楽園ライトアップ</h3>
    <p>午前10:00に有田町に到着。内山地区のトンバイ塀の裏通りを歩きながら、お気に入りの窯元や陶器ギャラリーで秋の新作器を探す。泉山磁石場の大公孫樹（大イチョウ）の黄金のトンネルを鑑賞。昼食は有田焼の器で楽しむ佐賀牛シチューランチ。15:00に武雄・嬉野の宿（御船山楽園ホテルや和多屋別荘）にチェックイン。美肌の湯で旅の汗を流した後、18:00に御船山楽園へ。池に映る錦秋の紅葉ライトアップ「たまゆらの夕べ」を鑑賞。宿に戻り、佐賀牛の陶板焼き会席と名湯を満喫する。</p>
  </div>
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【2日目】武雄温泉楼門朝風呂・嬉野茶寮と温泉湯どうふ</h3>
    <p>早朝、武雄温泉楼門の元湯または宿の大浴場で朝風呂を満喫。朝食には温泉水で白濁したとろとろの「温泉湯どうふ」を味わう。宿をチェックアウト後、武雄市図書館のスタイリッシュな空間を見学。車で嬉野へ移動し、嬉野茶の専門店で丁寧にいれた極上玉露と茶菓子を味わう「嬉野茶寮」を体験。波佐見町や伊万里大川内山へ足を伸ばし、肥前窯元めぐりを満喫して帰路へ。</p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-3 my-6 text-xs text-stone-800">
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q1. 秋の有田陶磁器まつりの開催時期と春の陶器市との違いは？</h3>
    <p class="text-stone-600">A. 例年11月19日前後から23日（勤労感謝の日）にかけて開催されます。春の陶器市が大通り一面に出店が並ぶ大規模セールであるのに対し、秋のまつりは「食と器」「町並み散策」「紅葉鑑賞」をテーマにしたゆったりとした大人のイベントです。混雑も春ほど激しくなく、窯元とじっくり話しながら器を選べます。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q2. 御船山楽園の紅葉ライトアップの点灯時間と入場料は？</h3>
    <p class="text-stone-600">A. 例年11月上旬から12月上旬にかけて、17:30〜22:00まで点灯されます。入場料は大人（中学生以上）約1,000円前後（昼夜共通券やチームラボ企画展の有無により変動あり）。御船山楽園ホテルの宿泊者は滞在中無料で入場できます。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q3. 有田・武雄・嬉野の移動に車は必須ですか？</h3>
    <p class="text-stone-600">A. JR佐世保線（武雄温泉駅〜有田駅）や西九州新幹線（武雄温泉駅〜嬉野温泉駅）、路線バスも運行していますが、ライトアップ鑑賞や点在する窯元巡りをスムーズに行うにはレンタカーまたはマイカーの利用が圧倒的に便利です。</p>
  </div>
</div>

<div class="my-8 p-6 rounded-3xl bg-red-50/60 border border-red-200">
  <h3 class="text-sm font-bold text-red-950 mb-2">🔗 あわせてチェックしたい九州の旅行特集</h3>
  <ul class="text-xs space-y-1.5 font-medium text-stone-700">
    <li>👉 <a href="/prefectures/saga/" class="text-red-800 hover:text-red-600 underline">佐賀県の観光名所・名湯温泉＆厳選ホテルガイド</a></li>
    <li>👉 <a href="/furusato-tax-onsen-ryokan-kyushu-selection/" class="text-red-800 hover:text-red-600 underline">九州の名湯旅館・客室露天風呂×ふるさと納税宿泊特集</a></li>
    <li>👉 <a href="/autumn-kagawa-ritsurin-garden-lightup-kotohira-onsen-hotels-guide/" class="text-red-800 hover:text-red-600 underline">栗林公園秋の紅葉ライトアップ＆金刀比羅宮もみじ祭ガイド</a></li>
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
    image: hMifuneyama.hotelImageUrl,
    other_images: [
      hWataya.hotelImageUrl,
      hTaishoya.hotelImageUrl,
      hShunkeiya.hotelImageUrl,
      hShiiba.hotelImageUrl
    ],
    hotel_name: `${hMifuneyama.hotelName}・${hWataya.hotelName} ほか`,
    affiliate_url: hMifuneyama.affiliateUrl,
    categories: ["秋のイベント特集", "紅葉ライトアップ", "陶器市", "美肌の湯", "佐賀旅行"],
    price: `¥${(hShunkeiya.hotelMinCharge || 16000).toLocaleString()}〜`,
    rating: hMifuneyama.reviewAverage || 4.59,
    review_count: hMifuneyama.reviewCount || 600,
    date: date,
    is_special_feature: true,
    keywords: [
      "秋の有田陶磁器まつり 2026",
      "御船山楽園 紅葉まつり たまゆらの夕べ",
      "嬉野温泉 おすすめ 旅館 美肌の湯",
      "武雄温泉 らかんの湯 御船山楽園ホテル",
      "嬉野温泉 湯豆腐 佐賀牛 会席",
      "有田 トンバイ塀 大イチョウ 見頃"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["御船山楽園", "有田陶磁器まつり", "嬉野温泉", "武雄温泉", "佐賀旅行", "国内旅行"]
---

# ${title}

11月下旬、肥前陶磁の里が最も華やぐ「秋の有田陶磁器まつり」と、奇岩・御船山を借景に約4万坪が燃えるような紅に染まる武雄・御船山楽園「紅葉まつり」。九州屈指の規模を誇る夜間ライトアップは息を呑む幽玄の美です。

有田の内山地区散策ルート、混雑を回避する駐車場情報、日本三大美肌の湯・嬉野温泉の名物「温泉湯豆腐」や最高峰「佐賀牛」を味わい尽くす厳選5宿を徹底解説します。

---

## 🎪 2026秋の有田陶磁器まつり＆御船山楽園「紅葉まつり」見どころ・散策術

- **御船山楽園「たまゆらの夕べ」ライトアップ:** 標高210mの御船山を背景に鏡池を彩る深紅のモミジ。17:30〜22:00点灯で、池の木道からの水鏡パノラマは必見。
- **有田・内山地区のトンバイ塀散策:** 登り窯の廃材レンガで作られたトンバイ塀の路地。秋の大イチョウの落葉と重なり、趣ある陶磁の町並みを演出。
- **泉山磁石場の大公孫樹（国指定天然記念物）:** 樹齢1000年の巨木イチョウが黄金に輝く11月中旬〜下旬が見頃ピーク。
- **効率的な周遊法:** 有田〜武雄は車で20分、嬉野は25分。昼に有田で器探し、夕方に温泉宿チェックイン、夜に御船山楽園ライトアップへ向かうのが王道ルート。
- **夜間の防寒:** 盆地の山あいのため11月夜間は10度を下回ります。1時間以上の庭園散策に備えて暖かいアウターと歩きやすい靴を用意しましょう。

---

## 🏨 美肌の湯と極上美食！嬉野・武雄の厳選名宿5選

### 1. 嬉野温泉 和多屋別荘（佐賀県嬉野市）
- **特徴:** 嬉野川沿い2万坪の敷地に黒川紀章設計タワー館や日本庭園が調和する老舗。日本三大美肌の湯と「Books & Tea三服」、佐賀牛鉄板焼き。
- **宿泊目安:** 1名 ¥${(hWataya.hotelMinCharge || 19000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hWataya.reviewAverage}（${hWataya.reviewCount}件）
- 👉 [和多屋別荘の空室・宿泊プランを見る](${hWataya.affiliateUrl})

### 2. 武雄温泉 御船山楽園ホテル（佐賀県武雄市）
- **特徴:** 御船山楽園直結。チームラボのアート空間ロビーと、サウナシュラン殿堂入りの「らかんの湯」を備える唯一無二の宿。庭園ライトアップ出入り自由。
- **宿泊目安:** 1名 ¥${(hMifuneyama.hotelMinCharge || 25000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hMifuneyama.reviewAverage}（${hMifuneyama.reviewCount}件）
- 👉 [御船山楽園ホテルの空室・宿泊プランを見る](${hMifuneyama.affiliateUrl})

### 3. 嬉野温泉 大正屋（佐賀県嬉野市）
- **特徴:** 巨匠・吉村順三設計の端正な和空間。四季の花咲く中庭と名湯「四季の湯」、名物とろける温泉湯どうふの朝食。
- **宿泊目安:** 1名 ¥${(hTaishoya.hotelMinCharge || 21000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hTaishoya.reviewAverage}（${hTaishoya.reviewCount}件）
- 👉 [大正屋の空室・宿泊プランを見る](${hTaishoya.affiliateUrl})

### 4. 武雄温泉 ホテル春慶屋（佐賀県武雄市）
- **特徴:** 武雄温泉楼門徒歩3分。1300年の名湯を最上階の展望露天風呂でかけ流し。佐賀牛陶板焼き会席と手厚いおもてなし。
- **宿泊目安:** 1名 ¥${(hShunkeiya.hotelMinCharge || 16000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hShunkeiya.reviewAverage}（${hShunkeiya.reviewCount}件）
- 👉 [ホテル春慶屋の空室・宿泊プランを見る](${hShunkeiya.affiliateUrl})

### 5. 嬉野温泉 大正屋 椎葉山荘（佐賀県嬉野市）
- **特徴:** 椎葉川の山峡に佇む静寂の一軒宿。渓流沿いの大露天風呂「山の湯」と佐賀牛しゃぶしゃぶ。自然の静寂に癒やされる大人の隠れ家。
- **宿泊目安:** 1名 ¥${(hShiiba.hotelMinCharge || 23000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hShiiba.reviewAverage}（${hShiiba.reviewCount}件）
- 👉 [椎葉山荘の空室・宿泊プランを見る](${hShiiba.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **御船山楽園:** ${wMifuneyama.extract}（御船山楽園ホテル直結、武雄温泉各宿から車5分）
- **有田焼・内山地区:** ${wArita.extract}（武雄・嬉野から車で約20〜25分、トンバイ塀と町並み）
- **嬉野温泉:** ${wUreshino.extract}（ナトリウム炭酸水素塩泉の美肌の湯と名物温泉湯豆腐）
- **武雄温泉・楼門:** ${wTakeo.extract}（辰野金吾設計の朱塗り楼門、春慶屋から徒歩3分）

---

## 🗺️ 1泊2日満喫モデルコース

- **1日目:** 10:00 有田・内山地区到着 ➔ トンバイ塀散策＆秋の窯元巡り ➔ 泉山磁石場の大公孫樹 ➔ 15:00 武雄・嬉野の宿チェックイン・美肌湯 ➔ 18:00 御船山楽園ライトアップ「たまゆらの夕べ」 ➔ 宿で佐賀牛会席
- **2日目:** 武雄温泉楼門で朝風呂 ➔ 宿で名物とろける温泉湯どうふ朝食 ➔ 武雄市図書館見学 ➔ 嬉野茶寮でお茶体験 ➔ 波佐見や伊万里窯元めぐり ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. 秋の有田陶磁器まつりはいつ開催されますか？**  
A. 例年11月19日前後から23日（勤労感謝の日）にかけて開催されます。春に比べてゆったりと窯元巡りや町並み散策を楽しめるのが特徴です。

**Q2. 御船山楽園ライトアップは何時までですか？**  
A. 17:30〜22:00まで点灯しています。御船山楽園ホテル宿泊者は滞在中無料で入場できます。

**Q3. 車がないと観光は難しいですか？**  
A. 電車やバスもありますが、点在する窯元や夜間のライトアップ会場へのスムーズなアクセスのためにはレンタカー利用がおすすめです。
`;

  return { postData, noteMarkdown };
};
