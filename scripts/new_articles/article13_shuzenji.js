// scripts/new_articles/article13_shuzenji.js
module.exports = function buildArticle13(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "autumn-shuzenji-momiji-festival-bamboo-lightup-izu-onsen-hotels-guide";
  const title = "【静岡・伊豆修善寺】修善寺もみじまつり2026＆竹林の小径・虹の郷ライトアップ完全攻略！伊豆最古の湯の街と桂川の錦秋、伊豆の極上会席を愉しむ厳選温泉宿5選";
  const description = "11月中旬から12月上旬、伊豆半島で最も遅い紅葉の見頃を迎える「伊豆の小京都」修善寺温泉。「修善寺もみじまつり」期間中は、弘法大師ゆかりの修禅寺方丈庭園が特別公開され、桂川沿いの竹林の小径や「修善寺虹の郷」のもみじ林が夜間ライトアップで燃えるような真紅に輝きます。温泉街の情緒あふれる歩き方、散策用駐車場、駿河湾の金目鯛や天城本わさび会席を堪能できる登録有形文化財宿やハイクラス名宿5選を徹底解説。";
  const date = "2026-11-01";
  const prefecture = "静岡県";
  const area = "中伊豆・修善寺・伊豆長岡";

  const hSora = hotels.find(h => h.hotelNo === 27983) || hotels[0];
  const hKikuya = hotels.find(h => h.hotelNo === 7491) || hotels[1];
  const hKatsuragawa = hotels.find(h => h.hotelNo === 1645) || hotels[2];
  const hArai = hotels.find(h => h.hotelNo === 31865) || hotels[3];
  const hShotokan = hotels.find(h => h.hotelNo === 7673) || hotels[4];

  const wShuzenjiOnsen = wiki["修善寺温泉"] || {};
  const wShuzenjiTemple = wiki["修禅寺"] || {};
  const wTokko = wiki["独鈷の湯"] || {};
  const wNijinosato = wiki["修善寺虹の郷"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-red-950 via-amber-900 to-stone-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-amber-300 font-extrabold text-xs">
      <span>🍁</span><span>2026年 修善寺もみじまつり＆虹の郷ライトアップ速報</span>
    </div>
    <p class="text-xs text-stone-200">
      11月中旬から12月上旬は修善寺温泉街のモミジ林と虹の郷の紅葉ライトアップが同時開催！温泉街中心部は道幅が狭く混雑するため、名宿に早めに車を預けて徒歩散策するのが極意。
    </p>
  </div>
  <a href="${hSora.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    🍁 宙 SORA 渡月荘金龍の空室・プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 mb-4">
  清流・桂川のせせらぎと朱塗りの橋、1200年の歴史が息づく錦秋の小京都
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  平安初期、大同2年（807年）に弘法大師・空海が桂川の岩を独鈷杵で打ち砕き、温泉を湧出させたという開湯伝説が残る「修善寺温泉」。日本百名湯にも選ばれる伊豆半島最古の温泉街は、夏目漱石が療養し、岡本綺堂が名作戯曲『修禅寺物語』を執筆した文豪ゆかりの地としても名高く、街の中心を流れる桂川を挟んで歴史ある木造旅館や風情ある格子戸の町家が軒を連ねます。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  温暖な気候に恵まれた伊豆半島において、修善寺の紅葉は11月中旬から12月上旬にかけてピークを迎えます。桂川にかかる5つの朱塗りの橋（恋の橋めぐり）と頭上を覆う深紅のモミジ、青々と天を突く竹林のコントラストは、まさに息を呑む日本の美意識の極致。さらに例年この時期にのみ特別公開される「修禅寺方丈庭園」の錦秋、約1,000本のもみじ林が光に包まれる広大なテーマパーク「修善寺虹の郷」のライトアップなど、昼夜を問わず幻想的な秋景色に浸ることができます。今回は、温泉街散策のベストルートとともに、登録有形文化財の老舗宿や絶景デザイナーズ宿など珠玉の5軒をご紹介します。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-6">
  🎪 2026修善寺もみじまつり＆虹の郷ライトアップ見どころ・散策術
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-red-100 text-red-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">修善寺温泉街＆虹の郷の紅葉巡り</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>修禅寺庭園（東海第一園）秋の特別公開:</strong> 普段は非公開の方丈庭園が、もみじまつり期間中のみ限定公開（入園料別途）。大日如来を祀る本堂裏手に広がる庭園では、池に映えるモミジの枝ぶりが計算され尽くした名庭の美を見せてくれます。</p>
      <p>② <strong>竹林の小径＆桂川の朱塗りの橋:</strong> 桂川沿いに続く石畳の散策路。円形の竹製ベンチに寝転がって見上げる「青竹と紅葉の天蓋」は修善寺屈指の絶景。夜間は竹林と足元がほのかにライトアップされ、幽玄な散策を楽しめます。</p>
      <p>③ <strong>修善寺自然公園もみじ林（約1,000本）:</strong> 約1ヘクタールの敷地に約1,000本のもみじが植栽された伊豆最大級の群生地。晴れた日には真っ赤な紅葉越しに富士山の頭が顔を覗かせます。</p>
      <p>④ <strong>修善寺虹の郷「もみじライトアップ」:</strong> 日本庭園と匠の村、イギリス村など異国情緒が漂う園内。約2,000本のもみじが池や菖蒲田の周囲で光に浮かび上がり、光るSL（ロムニー鉄道）が夜の紅葉林を走り抜ける幻想的な体験が楽しめます。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">実戦アドバイス</span>
      <h3 class="text-base font-bold text-stone-900">混雑回避と駐車場・移動のポイント</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【温泉街中心部の車移動は避ける】</strong> 修禅寺門前や桂川周辺は道幅が極めて狭く、歩行者で溢れかえります。温泉街の有料駐車場（小山駐車場や虎渓橋周辺）は午前11時前後に満車になるため、宿泊する宿に14時前後に車を預けてから徒歩で観光するのが最も快適です。</p>
      <p><strong>【虹の郷へのアクセス】</strong> 温泉街から虹の郷までは車・路線バスで約10分の山坂道。夜間のライトアップ（16:00〜21:00）鑑賞時は、宿の夕食時間を17時台またはライトアップ後の20時台に調整するか、夕食付きプランのタイムスケジュールを宿と相談しておくと安心です。</p>
      <p><strong>【気候と服装】</strong> 伊豆の中では内陸の盆地地形にあるため、日中は日差しがあれば暖かいものの、日没後は急激に冷え込みます。竹林や虹の郷の夜間散策には防寒性の高いコートやストールが必須です。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  🏨 桂川のせせらぎと名湯！修善寺・伊豆の厳選宿5選
</h2>

<!-- 宿1: 宙 SORA 渡月荘金龍 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-red-100 text-red-900 font-black text-xs rounded-full">1万5000坪の日本庭園・ドラマ「逃げ恥」ロケ地のデザイナーズ宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 修善寺温泉 宙 SORA 渡月荘金龍（静岡県伊豆市修善寺）</h3>
    </div>
    <span class="px-3 py-1.5 bg-red-50 border border-red-300 text-red-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hSora.reviewAverage}（${hSora.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hSora.hotelImageUrl}" alt="${hSora.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hSora.roomImageUrl || hSora.hotelImageUrl}" alt="${hSora.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">修善寺の山裾に広がる圧倒的な自然美。光の露天風呂と月光ラウンジが演出する非日常</p>
      <p>「宙 SORA 渡月荘金龍」は、修善寺温泉街の高台に位置し、約1万5,000坪もの壮大な日本庭園を抱くモダンラグジュアリー旅館。テレビドラマのロケ地としても脚光を浴びた洗練された空間デザインが光ります。名物の大浴場や露天風呂、さらには山肌にせり出すように作られた2つの無料貸切露天風呂「光の露天風呂」「夕焼けの露天風呂」からは、錦秋に染まる山並みをパノラマで見渡せます。夕食は沼津港直送の鮮魚や伊豆牛、伊豆天城の本わさびをあしらった目にも美しい月替わりの創作会席。庭園の散策路を歩けば、宿の敷地内だけでも本格的な紅葉狩りを堪能できます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hSora.address1}${hSora.address2}</p>
        <p><strong>【アクセス】</strong> ${hSora.access}</p>
        <p><strong>【温泉・施設】</strong> 絶景露天風呂、貸切露天風呂、広大な日本庭園、足湯バー、ラウンジ。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hSora.hotelMinCharge || 32000).toLocaleString()}〜</span>
        <a href="${hSora.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          宙 SORA 渡月荘金龍の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 湯回廊 菊屋 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">創業約400年・夏目漱石逗留の回廊で結ばれた老舗</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 湯回廊 菊屋（共立リゾート）（静岡県伊豆市修善寺）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKikuya.reviewAverage}（${hKikuya.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKikuya.hotelImageUrl}" alt="${hKikuya.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKikuya.roomImageUrl || hKikuya.hotelImageUrl}" alt="${hKikuya.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">桂川の清流をまたぐ渡り廊下と庭園。文豪・夏目漱石が『修善寺の記』を遺した歴史名宿</p>
      <p>慶長年間の創業から約400年、夏目漱石をはじめ多くの文人墨客を魅了してきた「湯回廊 菊屋」。桂川の清流をまたぎ、敷地内の各棟を木造の渡り廊下が結ぶ独特の建築美が最大の魅力です。廊下を歩くだけで足元を流れる川音と、中庭の紅葉が窓枠を絵画のように切り取ります。大浴場や露天風呂のほか、空いていれば何度でも無料で利用できる4つの趣異なる貸切風呂を完備。夕食は主菜を選べる「趣肴会席」で、駿河湾の旬魚や伊豆名物のわさび飯を堪能。共立リゾート名物の夜鳴きそばサービスも好評です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hKikuya.address1}${hKikuya.address2}</p>
        <p><strong>【アクセス】</strong> ${hKikuya.access}</p>
        <p><strong>【温泉・施設】</strong> 大浴場、露天風呂、4種の無料貸切風呂、漱石の間、休み処、ラウンジ。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hKikuya.hotelMinCharge || 22000).toLocaleString()}〜</span>
        <a href="${hKikuya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          湯回廊 菊屋の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 修善寺温泉 桂川 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">7つの無料貸切風呂・バイキングと湯めぐりの宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 湯めぐりの宿 修善寺温泉 桂川（共立リゾート）（静岡県伊豆市修善寺）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKatsuragawa.reviewAverage}（${hKatsuragawa.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKatsuragawa.hotelImageUrl}" alt="${hKatsuragawa.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKatsuragawa.roomImageUrl || hKatsuragawa.hotelImageUrl}" alt="${hKatsuragawa.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">修善寺温泉街の中心に佇むコスパ抜群の湯めぐり宿。多彩な貸切風呂と豪華和洋バイキング</p>
      <p>「湯めぐりの宿 桂川」は、修禅寺や竹林の小径まで徒歩数分という便利なロケーションに建つ共立リゾートの温泉ホテル。最大の魅力は、館内に設けられた個性あふれる「7つの貸切風呂」が予約不要・無料で何度でも湯巡りできる点です。檜風呂、岩風呂、陶器風呂など趣の異なる湯舟で、家族やカップル気兼ねなくプライベートな名湯浴を満喫できます。夕食はオープンキッチンで揚げたての天ぷらや焼き立てのステーキ、金目鯛料理などを好きなだけ味わえる贅沢バイキング。リーズナブルに修善寺の秋を満喫したい旅行者に圧倒的な支持を得ています。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hKatsuragawa.address1}${hKatsuragawa.address2}</p>
        <p><strong>【アクセス】</strong> ${hKatsuragawa.access}</p>
        <p><strong>【温泉・施設】</strong> 大浴場、露天風呂、7つの無料貸切風呂、湯上がり処、夜鳴きそば処。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hKatsuragawa.hotelMinCharge || 14000).toLocaleString()}〜</span>
        <a href="${hKatsuragawa.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          桂川の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 新井旅館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-indigo-100 text-indigo-900 font-black text-xs rounded-full">全15棟が国登録有形文化財・名画に描かれた天平大浴堂</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 修善寺温泉 国の登録文化財の宿 新井旅館（静岡県伊豆市修善寺）</h3>
    </div>
    <span class="px-3 py-1.5 bg-indigo-50 border border-indigo-300 text-indigo-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hArai.reviewAverage}（${hArai.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hArai.hotelImageUrl}" alt="${hArai.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hArai.roomImageUrl || hArai.hotelImageUrl}" alt="${hArai.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">横山大観や安田靫彦ら日本画壇の巨匠が集った文化財宿。総檜造りの名建築「天平大浴堂」</p>
      <p>明治5年創業の「新井旅館」は、敷地内に佇む客室棟や大浴堂など実に15棟が国の登録有形文化財に指定されている生きた文化財旅館。日本画の巨匠たちや歌舞伎役者たちが逗留し、館内の意匠や庭園の作庭に深く関わりました。文化財指定の「天平大浴堂」は、釘を一本も使わずに組み上げられた総檜造りの寺院建築様式で、天平時代の息吹を感じながら無色透明の名湯に浸ることができます。渡り廊下から見渡す錦秋の日本庭園には優雅に錦鯉が泳ぎ、まるで明治・大正期の絵巻物の中に迷い込んだかのような深い情緒を体感できます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hArai.address1}${hArai.address2}</p>
        <p><strong>【アクセス】</strong> ${hArai.access}</p>
        <p><strong>【温泉・施設】</strong> 文化財天平大浴堂、木漏れ日の湯、貸切風呂、日本庭園、美術品展示館。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hArai.hotelMinCharge || 30000).toLocaleString()}〜</span>
        <a href="${hArai.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          新井旅館の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 松濤館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-teal-100 text-teal-900 font-black text-xs rounded-full">富士山と駿河湾一望・伊豆屈指の美食割烹旅館</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 海と富士絶景の美食宿 伊豆・三津浜温泉 松濤館（静岡県沼津市内浦三津）</h3>
    </div>
    <span class="px-3 py-1.5 bg-teal-50 border border-teal-300 text-teal-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hShotokan.reviewAverage}（${hShotokan.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hShotokan.hotelImageUrl}" alt="${hShotokan.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hShotokan.roomImageUrl || hShotokan.hotelImageUrl}" alt="${hShotokan.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">修善寺から車で約20分。全室から駿河湾越しに冠雪の霊峰富士を望む、伊豆最高峰の美食宿</p>
      <p>「松濤館」は、修善寺から伊豆中央道経由で約20分、駿河湾の三津浜に佇む創業100年を超える名門割烹旅館。全客室や最上階の露天風呂から、静かな内海越しに雪化粧をまとった富士山を正面に望む奇跡の絶景パノラマが広がります。夕暮れ時には紅富士と茜色に染まる海が一枚の絵画のように眼前に迫ります。最大の自慢は、料理長が腕を振るう本格和創作会席。駿河湾で揚がった伊勢海老や金目鯛、アワビや銘柄牛を極上の出汁と繊細な盛り付けで堪能できます。修善寺の紅葉散策と、海の絶景＆美食の両方を贅沢に欲張りたい大人の旅にふさわしい最高峰の宿です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hShotokan.address1}${hShotokan.address2}</p>
        <p><strong>【アクセス】</strong> ${hShotokan.access}</p>
        <p><strong>【温泉・施設】</strong> 展望大浴場、絶景露天風呂、貸切風呂、料亭個室、ラウンジ。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hShotokan.hotelMinCharge || 38000).toLocaleString()}〜</span>
        <a href="${hShotokan.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-black text-xs rounded-xl shadow transition text-center">
          松濤館の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="nearby-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs text-stone-600 mb-6">
  弘法大師ゆかりの歴史名所から伊豆屈指の広大なテーマパークまで。修善寺の秋歩きに欠かせない重要スポットです。
</p>

<div class="space-y-6 my-6">
  <!-- スポット1: 修善寺温泉 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wShuzenjiOnsen.thumbnail || hSora.hotelImageUrl}" alt="修善寺温泉" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-red-100 text-red-800 font-bold text-[11px] rounded-md">♨️ 日本百名湯・伊豆最古の名湯</span>
        <h3 class="text-base font-bold text-stone-900">修善寺温泉（静岡県伊豆市修善寺）</h3>
        <p>${wShuzenjiOnsen.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 宙SORA・菊屋・桂川・新井旅館が面する歴史ある温泉街。浴衣に下駄を鳴らしてそぞろ歩きが楽しめます。</p>
      </div>
    </div>
  </div>

  <!-- スポット2: 修禅寺 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wShuzenjiTemple.thumbnail || hKikuya.hotelImageUrl}" alt="修禅寺" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-800 font-bold text-[11px] rounded-md">⛩️ 弘法大師開基・源氏興亡の古刹</span>
        <h3 class="text-base font-bold text-stone-900">修禅寺（福地山修禅萬安禅寺）（静岡県伊豆市修善寺）</h3>
        <p>${wShuzenjiTemple.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 温泉街各宿から徒歩約3〜7分。もみじまつり期間中に限定公開される方丈庭園「東海第一園」の紅葉は見逃せません。</p>
      </div>
    </div>
  </div>

  <!-- スポット3: 独鈷の湯 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wTokko.thumbnail || hKatsuragawa.hotelImageUrl}" alt="独鈷の湯" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[11px] rounded-md">🌊 修善寺温泉発祥の霊泉</span>
        <h3 class="text-base font-bold text-stone-900">独鈷の湯（静岡県伊豆市修善寺）</h3>
        <p>${wTokko.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 桂川の虎渓橋たもと、温泉街の中心に位置。対岸には無料の足湯「河原湯」や足湯公園が整備されています。</p>
      </div>
    </div>
  </div>

  <!-- スポット4: 修善寺虹の郷 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wNijinosato.thumbnail || hArai.hotelImageUrl}" alt="修善寺虹の郷" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-800 font-bold text-[11px] rounded-md">🚂 2,000本のもみじ林と光のSL</span>
        <h3 class="text-base font-bold text-stone-900">修善寺虹の郷（静岡県伊豆市修善寺）</h3>
        <p>${wNijinosato.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 温泉街から車またはバスで約10分。約50万平米の敷地で繰り広げられる夜間紅葉ライトアップは東日本屈指の規模を誇ります。</p>
      </div>
    </div>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  🗺️ 修善寺もみじまつり＆虹の郷 1泊2日満喫モデルコース
</h2>
<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-red-50/60 to-amber-50/40 border border-red-200 space-y-4 text-xs text-stone-700 leading-relaxed">
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【1日目】竹林の小径散策・修禅寺特別公開と虹の郷もみじライトアップ</h3>
    <p>午前11:00に修善寺温泉街へ到着。名物の修善寺そば処で、自分ですりおろす天城本わさび付きせいろそばを味わう。13:30に宿泊宿（宙SORAや菊屋）に早めに車を預け、手ぶらで温泉街散策へ。弘法大師ゆかりの修禅寺で方丈庭園の秋の特別公開を拝観し、桂川の朱塗りの橋と竹林の小径で紅葉天蓋を撮影。16:00に車またはシャトルバスで「修善寺虹の郷」へ移動。日没とともに点灯する約2,000本の紅葉ライトアップとロムニー鉄道の光の演出を満喫。19:00に宿へ戻り、名湯露天風呂と駿河湾の金目鯛・伊豆牛会席を堪能。</p>
  </div>
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【2日目】早朝の静寂散策と修善寺自然公園・伊豆パノラマパークへ</h3>
    <p>朝7:00、観光客のいない清澄な朝の竹林の小径と桂川遊歩道を静かに散策。朝食後宿をチェックアウトし、約1,000本の紅葉が広がる「修善寺自然公園もみじ林」へ（車で約7分）。紅葉越しに頭を出す富士山を眺望。その後、伊豆の国市方面へ車を走らせ、「伊豆パノラマパーク」のロープウェイで葛城山山頂の碧テラスへ。駿河湾と富士山の雄大な大パノラマを目に焼き付けて帰路へ。</p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-3 my-6 text-xs text-stone-800">
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q1. 修善寺の紅葉のベストな見頃時期はいつ頃ですか？</h3>
    <p class="text-stone-600">A. 伊豆半島は比較的温暖なため、見頃は11月中旬から12月上旬にかけてです。修善寺自然公園や虹の郷が11月中旬頃から色づき始め、温泉街の桂川沿いや修禅寺境内は11月下旬〜12月上旬が最も鮮やかなピークとなります。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q2. 修禅寺庭園の特別公開は予約が必要ですか？</h3>
    <p class="text-stone-600">A. 事前予約は不要ですが、もみじまつり期間中（通常11月下旬の約10日間〜2週間程度）のみの限定公開で、別途保存協賛金（大人200円〜300円程度）が必要です。拝観時間は例年9:00〜16:00頃までとなっています。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q3. 電車・バスのみで観光は可能ですか？</h3>
    <p class="text-stone-600">A. 伊豆箱根鉄道駿豆線「修善寺駅」から温泉街までは路線バスで約10分、バス停から中心街は徒歩すぐです。虹の郷へも修善寺駅または温泉街から東海バスが運行しており、車がなくても快適に秋の観光スポットを巡ることができます。</p>
  </div>
</div>

<div class="my-8 p-6 rounded-3xl bg-red-50/60 border border-red-200">
  <h3 class="text-sm font-bold text-red-950 mb-2">🔗 あわせてチェックしたい静岡・東海の旅行特集</h3>
  <ul class="text-xs space-y-1.5 font-medium text-stone-700">
    <li>👉 <a href="/prefectures/shizuoka/" class="text-red-800 hover:text-red-600 underline">静岡県の観光名所・名湯温泉＆厳選ホテルガイド</a></li>
    <li>👉 <a href="/autumn-winter-atami-fireworks-ocean-view-onsen-hotels-guide/" class="text-red-800 hover:text-red-600 underline">熱海海上花火大会＆オーシャンビュー温泉ホテル完全攻略</a></li>
    <li>👉 <a href="/furusato-tax-private-villa-retreat-japan/" class="text-red-800 hover:text-red-600 underline">伊豆・箱根の一棟貸しプライベートヴィラ×ふるさと納税特集</a></li>
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
    image: hSora.hotelImageUrl,
    other_images: [
      hKikuya.hotelImageUrl,
      hKatsuragawa.hotelImageUrl,
      hArai.hotelImageUrl,
      hShotokan.hotelImageUrl
    ],
    hotel_name: `${hSora.hotelName}・${hKikuya.hotelName} ほか`,
    affiliate_url: hSora.affiliateUrl,
    categories: ["秋のイベント特集", "紅葉ライトアップ", "伊豆温泉", "名湯名宿", "静岡旅行"],
    price: `¥${(hKatsuragawa.hotelMinCharge || 14000).toLocaleString()}〜`,
    rating: hSora.reviewAverage || 4.74,
    review_count: hSora.reviewCount || 900,
    date: date,
    is_special_feature: true,
    keywords: [
      "修善寺もみじまつり 2026",
      "修善寺 虹の郷 紅葉ライトアップ",
      "竹林の小径 修善寺温泉 紅葉 見頃",
      "修禅寺 方丈庭園 秋の特別公開",
      "修善寺温泉 おすすめ 高級旅館 露天風呂",
      "宙 SORA 渡月荘金龍 湯回廊 菊屋 宿泊記"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["修善寺温泉", "修善寺もみじまつり", "虹の郷", "伊豆旅行", "竹林の小径", "国内旅行"]
---

# ${title}

11月中旬から12月上旬、伊豆半島で最も遅い紅葉の見頃を迎える「伊豆の小京都」修善寺温泉。「修善寺もみじまつり」期間中は、弘法大師ゆかりの修禅寺方丈庭園が特別公開され、桂川沿いの竹林の小径や「修善寺虹の郷」のもみじ林が夜間ライトアップで燃えるような真紅に輝きます。

温泉街の情緒あふれる歩き方、散策用駐車場、駿河湾の金目鯛や天城本わさび会席を堪能できる登録有形文化財宿やハイクラス名宿5選を徹底解説します。

---

## 🎪 2026修善寺もみじまつり＆虹の郷ライトアップ見どころ・散策術

- **修禅寺庭園（東海第一園）特別公開:** 普段非公開の方丈庭園が秋のまつり期間のみ限定公開。池に映るモミジの枝ぶりが見事な名庭。
- **竹林の小径＆桂川の朱塗りの橋:** 桂川のせせらぎを聞きながら歩く石畳。竹製ベンチから見上げる「青竹と深紅の天蓋」は修善寺屈指の名景。
- **修善寺虹の郷「もみじライトアップ」:** 約2000本のもみじが照らし出され、光るSL（ロムニー鉄道）が夜の紅葉林を疾走する東日本屈指の夜間イベント。
- **混雑回避の鉄則:** 温泉街中心部は道幅が狭く有料駐車場も午前中に満車になるため、宿泊宿に14時前にチェックインして車を預け、徒歩で散策するのが最も快適。
- **夜間の防寒:** 盆地地形のため日没後は急激に冷え込みます。ライトアップ散策時は暖かいアウターを用意しましょう。

---

## 🏨 桂川のせせらぎと名湯！修善寺・伊豆の厳選宿5選

### 1. 修善寺温泉 宙 SORA 渡月荘金龍（静岡県伊豆市）
- **特徴:** 1万5000坪の壮大な日本庭園を抱くデザイナーズ温泉旅館。山肌にせり出す光の露天風呂や月光ラウンジ。駿河湾直送鮮魚と伊豆牛創作会席。
- **宿泊目安:** 1名 ¥${(hSora.hotelMinCharge || 32000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hSora.reviewAverage}（${hSora.reviewCount}件）
- 👉 [宙 SORA 渡月荘金龍の空室・宿泊プランを見る](${hSora.affiliateUrl})

### 2. 湯回廊 菊屋（共立リゾート）（静岡県伊豆市）
- **特徴:** 創業約400年。夏目漱石が逗留した老舗。桂川をまたぐ木造の渡り廊下が美しく、4つの無料貸切風呂と選べる趣肴会席を完備。
- **宿泊目安:** 1名 ¥${(hKikuya.hotelMinCharge || 22000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hKikuya.reviewAverage}（${hKikuya.reviewCount}件）
- 👉 [湯回廊 菊屋の空室・宿泊プランを見る](${hKikuya.affiliateUrl})

### 3. 湯めぐりの宿 修善寺温泉 桂川（共立リゾート）（静岡県伊豆市）
- **特徴:** 修禅寺や竹林の小径まで徒歩すぐ。館内7つの無料貸切風呂が予約不要で湯巡りし放題。豪華和洋バイキングでコスパ抜群。
- **宿泊目安:** 1名 ¥${(hKatsuragawa.hotelMinCharge || 14000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hKatsuragawa.reviewAverage}（${hKatsuragawa.reviewCount}件）
- 👉 [桂川の空室・宿泊プランを見る](${hKatsuragawa.affiliateUrl})

### 4. 修善寺温泉 国の登録文化財の宿 新井旅館（静岡県伊豆市）
- **特徴:** 全15棟が国登録有形文化財。総檜造りの名建築「天平大浴堂」や日本庭園。横山大観や安田靫彦ら文人墨客が集った本物の歴史空間。
- **宿泊目安:** 1名 ¥${(hArai.hotelMinCharge || 30000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hArai.reviewAverage}（${hArai.reviewCount}件）
- 👉 [新井旅館の空室・宿泊プランを見る](${hArai.affiliateUrl})

### 5. 海と富士絶景の美食宿 伊豆・三津浜温泉 松濤館（静岡県沼津市）
- **特徴:** 修善寺から車で約20分。全室から駿河湾越しに冠雪の富士山を一望。伊勢海老や金目鯛を極めた伊豆屈指の名門割烹旅館。
- **宿泊目安:** 1名 ¥${(hShotokan.hotelMinCharge || 38000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hShotokan.reviewAverage}（${hShotokan.reviewCount}件）
- 👉 [松濤館の空室・宿泊プランを見る](${hShotokan.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **修善寺温泉:** ${wShuzenjiOnsen.extract}（弘法大師開湯の伊豆最古の湯街）
- **修禅寺:** ${wShuzenjiTemple.extract}（源氏興亡の舞台、秋の方丈庭園特別公開）
- **独鈷の湯:** ${wTokko.extract}（桂川沿いの温泉発祥地、対岸に足湯公園）
- **修善寺虹の郷:** ${wNijinosato.extract}（約2000本のもみじライトアップと光るSL）

---

## 🗺️ 1泊2日満喫モデルコース

- **1日目:** 11:00 修善寺到着 ➔ 天城本わさび蕎麦ランチ ➔ 13:30 宿チェックイン＆車預け ➔ 修禅寺庭園特別拝観＆竹林の小径 ➔ 16:30 虹の郷もみじライトアップ ➔ 19:30 宿で名湯露天風呂と金目鯛会席
- **2日目:** 早朝の清澄な竹林散策 ➔ 朝食 ➔ 修善寺自然公園もみじ林（約1000本の紅葉と富士山） ➔ 伊豆パノラマパーク碧テラス ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. 修善寺の紅葉の見頃ピークは？**  
A. 温暖な伊豆のため11月中旬から12月上旬にかけてです。温泉街は11月下旬〜12月上旬がベスト。

**Q2. 虹の郷ライトアップの時間は？**  
A. 例年16:00〜21:00まで点灯されます。夜間入場券で入場可能です。

**Q3. 電車・バスだけでも楽しめますか？**  
A. 修善寺駅からの路線バスが温泉街および虹の郷へ頻繁に運行しており、公共交通機関のみでも十分に観光可能です。
`;

  return { postData, noteMarkdown };
};
