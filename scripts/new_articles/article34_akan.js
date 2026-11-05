// scripts/new_articles/article34_akan.js
module.exports = function buildArticle34(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-hokkaido-akan-mashu-frost-flower-ice-lake-onsen-hotels-guide";
  const title = "【北海道・阿寒/摩周】奇跡の絶景「フロストフラワー＆摩周湖霧氷」完全攻略！マイナス15度の氷上アートと阿寒湖温泉アイヌコタン・冬の道東厳選グルメを堪能する湖畔の温泉宿5選";
  const description = "マイナス15度以下の静寂の朝にだけ湖上に咲く氷の華「フロストフラワー」。12月〜1月の完全結氷期に阿寒湖や屈斜路湖で現れる奇跡の自然現象と、世界有数の透明度を誇る摩周湖の霧氷・ダイヤモンドダストを徹底解説。北海道最大級の阿寒湖アイヌコタンで触れる伝統文化、阿寒湖温泉の天空インフィニティ露天風呂、オホーツクの冬海鮮・エゾ鹿肉を愉しむ名宿5選を完全網羅。";
  const date = "2026-11-05";
  const prefecture = "北海道";
  const area = "釧路・阿寒湖・摩周";

  // ホテル抽出
  const hYukyu = hotels.find(h => h.hotelNo === 40045) || hotels[0];
  const hNewAkan = hotels.find(h => h.hotelNo === 9568) || hotels[1];
  const hForest = hotels.find(h => h.hotelNo === 41841) || hotels[2];
  const hKussharo = hotels.find(h => h.hotelNo === 15401) || hotels[3];
  const hKinkiyu = hotels.find(h => h.hotelNo === 182124) || hotels[4];

  const wAkan = wiki["阿寒湖"] || {};
  const wMashu = wiki["摩周湖"] || {};
  const wAkanOnsen = wiki["阿寒湖温泉"] || {};
  const wTeshikaga = wiki["弟子屈町"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-blue-800/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-cyan-300 font-extrabold text-xs tracking-wider">
      <span>❄️</span><span>2026-2027冬 阿寒湖フロストフラワー＆摩周湖霧氷 現地完全ガイド</span>
    </div>
    <p class="text-xs text-blue-100 leading-relaxed">
      12月〜1月の厳冬期限定！湖面に咲く奇跡の氷花と摩周ブルーの霧氷世界。湖畔の源泉天空スパとアイヌ文化を巡る極上道東旅。
    </p>
  </div>
  <a href="${hYukyu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    🏔️ あかん遊久の里 鶴雅の空室を見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 mb-4">
  マイナス15度の静寂が生み出す奇跡の氷花！阿寒湖フロストフラワーと神秘の摩周湖
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  北海道東部、阿寒摩周国立公園の雄大な大自然に抱かれた「阿寒湖」と「摩周湖」。11月中旬を迎えると周囲の原生林は深い雪に覆われ、12月中旬から1月にかけて厳しい寒波が押し寄せると、阿寒湖の広大な湖面が一面のエメラルドアイスへと完全結氷します。この極寒の地で真冬の早朝にだけ姿を現す幻の現象が、湖面に咲く氷の結晶「フロストフラワー（霜の花）」です。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  フロストフラワーが出現するには「気温がマイナス15度以下であること」「風がほとんどないこと」「氷の上に雪が積もっていないこと」という3つの厳しい気象条件が重なる必要があります。湖の薄氷にある小さな割れ目から立ち上る水蒸気が極冷気によって瞬時に結晶化し、時間をかけて手のひらサイズの白い薔薇のような花へと成長します。朝陽が昇り始める瞬間、薄紅色の光を浴びてキラキラと輝く無数の氷の花々は、息をするのもためらわれるほど神秘的な美しさです。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  阿寒湖から車で約50分の距離にある「摩周湖」では、世界有数の透明度を誇るコバルトブルーの湖面を取り囲む外輪山が、純白の「霧氷（むひょう）」で覆われます。晴れた早朝には大気中の氷晶が光を乱反射する「ダイヤモンドダスト」や「サンピラー（太陽柱）」が空を彩り、地球の美しさを五感で実感できます。神秘の絶景を巡った後は、湖畔に湧き出る良質な「阿寒湖温泉」へ。雄阿寒岳と凍結した湖を一望する天空露天風呂で温まり、北海道最大級の「アイヌコタン」でアイヌの伝統古式舞踊や木彫り工芸に触れ、夕食にはオホーツクの極上毛蟹やサチク麦王豚、エゾ鹿肉会席を味わう――これこそ冬の北海道旅行の究極の贅沢です。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-6">
  💡 旅のプロ直伝！フロストフラワー＆冬の道東絶景攻略マニュアル
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-cyan-100 text-cyan-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">早朝ツアー・摩周霧氷・アイヌシアター</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>阿寒湖早朝フロストフラワーツアー:</strong> 地元認定ガイドが案内する早朝スノーシューツアー（午前6時頃出発）。安全な結氷ポイントまで歩き、朝日を浴びる霜の花を間近で観察します。</p>
      <p>② <strong>摩周第一展望台の霧氷とダイヤモンドダスト:</strong> 冬でも滅多に凍らない摩周湖の藍色の水面と、周囲のダケカンバに白く咲き誇る霧氷のコントラスト。朝8時前後の斜光がベストタイミング。</p>
      <p>③ <strong>阿寒湖アイヌコタン「ロストカムイ」:</strong> 阿寒湖畔にある約120名が暮らす集落。アイヌシアター「イコロ」で上演される古式舞踊と現代舞踊・CGプロジェクションマッピングが融合した舞台は必見です。</p>
      <p>④ <strong>冬華美（ふゆはなび）とアイスランド阿寒:</strong> 1月下旬から湖上で開催される冬華美。マイナス20度の澄み切った漆黒の夜空に大輪の花火が打ち上がります。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-blue-100 text-blue-800 font-extrabold text-xs rounded-lg">必見攻略テクニック</span>
      <h3 class="text-base font-bold text-stone-900">極寒対策・レンタカー運転・時間帯</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【マイナス20度に耐えるレイヤリング】</strong> 道東の早朝はマイナス15度から25度近くまで下がります。吸湿発熱インナー、フリース、防風中綿ダウンの重ね着、防寒防水スノーブーツ、厚手ウール靴下2枚重ね、耳が隠れるニット帽、防寒ミトン手袋、フェイスマスクを必ず着用してください。</p>
      <p><strong>【結氷した湖上への立ち入り注意】</strong> 阿寒湖は温泉が湧き出している場所があり、氷が薄い危険箇所（湯壺）が存在します。個人で氷上に立ち入るのは極めて危険なため、必ず現地のネイチャーガイドツアーに参加してください。</p>
      <p><strong>【冬道レンタカー運転の心得】</strong> 釧路空港や女満別空港からのアクセス道路は圧雪・ブラックアイスバーンが続きます。車間距離を通常の3倍以上取り、急ブレーキ・急ハンドルを避けて日没前の16時までに宿に到着する旅程を組むのが鉄則です。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-8">
  🏨 絶景天空露天と北の美食を堪能！阿寒湖・摩周周辺の厳選名宿5選
</h2>

<!-- 宿1: あかん遊久の里 鶴雅 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 font-black text-xs rounded-full">阿寒湖畔の圧倒的フラッグシップ・阿寒湖と一体になる天空露天風呂と多彩な湯殿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. あかん遊久の里 鶴雅（北海道釧路市阿寒町阿寒湖温泉）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hYukyu.reviewAverage}（${hYukyu.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hYukyu.hotelImageUrl}" alt="${hYukyu.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hYukyu.roomImageUrl || hYukyu.hotelImageUrl}" alt="${hYukyu.hotelName} 露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 阿寒湖の岸辺に堂々と佇む鶴雅グループの原点にして最高峰の温泉旅館。アイヌ文様の木彫り彫刻が彩る美術館のようなロビー、阿寒湖を望む客室、きめ細やかなおもてなしが特別な滞在を演出します。
      </p>
      <p>
        <strong>【湖とつながる天空露天風呂「天頂」】</strong> 8階屋上に位置する天空露天風呂からは、完全結氷した阿寒湖の白銀パノラマと雄阿寒岳を一望。1階の庭園露天風呂では阿寒湖の水面と同じ目線で湯浴みが愉しめ、サウナシュラン選出の本格サウナも完備しています。
      </p>
      <p>
        <strong>【北の味覚バイキング＆料亭会席】</strong> 夕食はオープンキッチンでシェフが腕を振るう「天の河」での豪華バイキング、または個室料亭での旬彩和食会席。オホーツクの新鮮魚介や道東産の牛肉を贅沢に味わえます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hYukyu.hotelMinCharge || 14520).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hYukyu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: ニュー阿寒ホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-blue-100 text-blue-900 font-black text-xs rounded-full">屋上インフィニティ・エッジ・スパ「天空ガーデンスパ」と充実のビュッフェリゾート</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. ニュー阿寒ホテル（北海道釧路市阿寒町阿寒湖温泉）</h3>
    </div>
    <span class="px-3 py-1.5 bg-blue-50 border border-blue-300 text-blue-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hNewAkan.reviewAverage}（${hNewAkan.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hNewAkan.hotelImageUrl}" alt="${hNewAkan.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hNewAkan.roomImageUrl || hNewAkan.hotelImageUrl}" alt="${hNewAkan.hotelName} スパ" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 阿寒湖畔に位置する大型温泉リゾートホテル。屋上地上30メートルに設けられた水着着用（専用湯着あり）のインフィニティスパ「天空ガーデンスパ」は、阿寒湖の結氷面と空に溶け込むような唯一無二の絶景を誇ります。
      </p>
      <p>
        <strong>【絶景サウナと極上のととのい】</strong> スパエリアには阿寒湖を眺めるパノラマサウナと冷水風呂が完備され、冬の澄み切った氷点下の外気浴とともに究極の「ととのい」体験が味わえます。
      </p>
      <p>
        <strong>【豪華リゾートビュッフェ】</strong> レストラン「フェリシェ」での夕食ビュッフェでは、揚げたての天ぷら、焼きたてのステーキ、新鮮な海鮮丼コーナーなど、多彩な北海道グルメを心ゆくまで堪能できます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hNewAkan.hotelMinCharge || 8000).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hNewAkan.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-blue-700 hover:bg-blue-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: THE FOREST阿寒 TSURUGA RESORT -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">阿寒の深い森と湖を感じるナチュラルモダンリゾート・優雅な湖畔滞在</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. THE FOREST阿寒 TSURUGA RESORT（旧：花ゆう香）（北海道釧路市阿寒町阿寒湖温泉）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hForest.reviewAverage}（${hForest.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hForest.hotelImageUrl}" alt="${hForest.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hForest.roomImageUrl || hForest.hotelImageUrl}" alt="${hForest.hotelName} ロビー" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 阿寒湖畔の森に調和するスタイリッシュなリゾートホテル。木の質感を生かした北欧風のナチュラルな客室と、洗練されたラウンジ空間が女子旅やカップル旅行に高い支持を得ています。
      </p>
      <p>
        <strong>【系列館「遊久の里」への湯めぐり】</strong> 館内の温泉大浴場に加えて、徒歩数分の本館「あかん遊久の里 鶴雅」の多彩な大浴場や露天風呂を無料で自由に利用できる湯めぐり特典が付いています。
      </p>
      <p>
        <strong>【森のグリルビュッフェ】</strong> 夕食は北海道の新鮮な野菜や肉、魚介をライブキッチンで焼き上げる香ばしいグリルビュッフェ。目にも鮮やかなスイーツコーナーも女性客から好評です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hForest.hotelMinCharge || 12644).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hForest.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 屈斜路プリンスホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-indigo-100 text-indigo-900 font-black text-xs rounded-full">屈斜路湖畔の森に佇む円形リゾート・地下源泉の露天風呂と白鳥が飛来する冬絶景</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 屈斜路プリンスホテル（北海道川上郡弟子屈町屈斜路温泉）</h3>
    </div>
    <span class="px-3 py-1.5 bg-indigo-50 border border-indigo-300 text-indigo-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKussharo.reviewAverage}（${hKussharo.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKussharo.hotelImageUrl}" alt="${hKussharo.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKussharo.roomImageUrl || hKussharo.hotelImageUrl}" alt="${hKussharo.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 日本最大のカルデラ湖「屈斜路湖」の湖畔に建つ円形の高原ホテル。冬期にはホテル前の湖畔にシベリアからオオハクチョウが飛来し、朝陽に輝く湖面を優雅に泳ぐ姿を客室から眺められます。
      </p>
      <p>
        <strong>【地下1,000mの屈斜路温泉】</strong> 庭園に面した屋根付き露天風呂はナトリウム-炭酸水素塩・塩化物泉。湯冷めしにくい美肌の湯が、冷え切った身体を優しく包み込みます。
      </p>
      <p>
        <strong>【道東食材を味わうディナー】</strong> 高い吹き抜けが印象的なメインダイニングでは、地元弟子屈町産の食材や北海道の海の幸をふんだんに取り入れたディナーを提供しています。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hKussharo.hotelMinCharge || 3244).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hKussharo.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-indigo-700 hover:bg-indigo-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: お宿欣喜湯 別邸 すいかずら -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">強酸性pH1.7の名湯・川湯温泉の真髄を味わうスタイリッシュなモダン湯宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. お宿欣喜湯 別邸 すいかずら（北海道川上郡弟子屈町川湯温泉）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKinkiyu.reviewAverage}（${hKinkiyu.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKinkiyu.hotelImageUrl}" alt="${hKinkiyu.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKinkiyu.roomImageUrl || hKinkiyu.hotelImageUrl}" alt="${hKinkiyu.hotelName} 温泉" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 摩周湖や硫黄山（アトサヌプリ）にほど近い名湯・川湯温泉に佇む上質な温泉旅館。伝統ある温泉街にモダンで洗練された和の設えを取り入れ、心地よい滞在を提供します。
      </p>
      <p>
        <strong>【日本屈指の強酸性硫黄泉】</strong> 釘を入れると数日で溶けてしまうと言われるpH1.7前後の超強酸性泉。殺菌力と温まり効果が極めて高く、昔から「名湯中の名湯」として湯治客を魅了し続けています。
      </p>
      <p>
        <strong>【弟子屈の恵み会席】</strong> 夕食は地元弟子屈産の摩周ポークや新鮮野菜、オホーツクの旬の海鮮を美しく盛り付けた和食会席。地酒とともにゆったりと楽しめます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hKinkiyu.hotelMinCharge || 9000).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hKinkiyu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="sightseeing" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6 leading-relaxed">
  フロストフラワー観賞と合わせて巡りたい、阿寒・摩周エリアの自然遺産をWikipedia公式データとともにご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-blue-700 font-bold text-sm">📍 阿寒湖（阿寒摩周国立公園・特別天然記念物マリモ）</span>
    </div>
    ${wAkan.thumbnail ? `<img src="${wAkan.thumbnail}" alt="${wAkan.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wAkan.extract || '北海道釧路市にある淡水湖。国の特別天然記念物マリモの生息地として知られ、冬には湖面が完全結氷してフロストフラワーやワカサギ釣りなどの冬の体験が楽しめます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-blue-700 font-bold text-sm">📍 摩周湖（摩周ブルー・霧氷）</span>
    </div>
    ${wMashu.thumbnail ? `<img src="${wMashu.thumbnail}" alt="${wMashu.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wMashu.extract || '弟子屈町にあるカルデラ湖。世界屈指の透明度を誇り「摩周ブルー」と称される深い青色の湖面が特徴。真冬には外輪山一帯に見事な霧氷が咲き誇ります。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-blue-700 font-bold text-sm">📍 阿寒湖温泉・アイヌコタン</span>
    </div>
    ${wAkanOnsen.thumbnail ? `<img src="${wAkanOnsen.thumbnail}" alt="${wAkanOnsen.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wAkanOnsen.extract || '阿寒湖南岸に広がる道東屈指の温泉地。湖畔には北海道最大級のアイヌ集落「阿寒湖アイヌコタン」があり、アイヌ伝統工芸や舞踊文化が今なお息づいています。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-blue-700 font-bold text-sm">📍 弟子屈町（屈斜路湖・硫黄山）</span>
    </div>
    ${wTeshikaga.thumbnail ? `<img src="${wTeshikaga.thumbnail}" alt="${wTeshikaga.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wTeshikaga.extract || '摩周湖と屈斜路湖という2大カルデラ湖を擁する自然豊かな町。今なお噴煙を上げる活火山・硫黄山や、川湯温泉などダイナミックな火山活動の恩恵を受けています。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-8">
  🗺️ 氷花と霧氷を巡る神秘の道東 1泊2日王道モデルコース
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-blue-700 text-white rounded text-xs">1日目</span>
      たんちょう釧路空港から阿寒湖へ・アイヌコタン文化体験と天空露天風呂
    </h3>
    <p class="leading-relaxed">
      11:30 たんちょう釧路空港到着 ➔ 空港連絡バスまたはレンタカー（4WDスタッドレス）で阿寒湖温泉へ（約60分） ➔ 13:00 阿寒湖温泉街到着、郷土料理店で「エゾ鹿肉丼」または「ワカサギ天丼」ランチ ➔ 14:30 阿寒湖アイヌコタン散策、木彫り民芸品工房見学 ➔ 15:30 宿へチェックイン ➔ 阿寒湖を見渡す天空露天風呂やインフィニティスパで雪見風呂 ➔ 18:00 北海道の山海の幸を味わう豪華ビュッフェまたは会席 ➔ 20:00 アイヌシアター「イコロ」で感動の舞台『ロストカムイ』鑑賞。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-blue-700 text-white rounded text-xs">2日目</span>
      早朝の奇跡フロストフラワー観賞から摩周湖の霧氷パノラマへ
    </h3>
    <p class="leading-relaxed">
      06:00 ガイド付き早朝フロストフラワーツアー出発 ➔ 阿寒湖の完全結氷面を歩き、朝日に輝く氷の花々を撮影 ➔ 07:30 宿へ戻り温泉朝風呂＆温かい和洋朝食 ➔ 09:30 チェックアウト ➔ 車で摩周湖第一展望台へ移動（約50分） ➔ 摩周ブルーと外輪山の白い霧氷パノラマ鑑賞 ➔ 12:00 弟子屈町内で名物「弟子屈ラーメン」ランチ ➔ 13:30 硫黄山（アトサヌプリ）の豪快な噴煙を見学 ➔ 15:30 女満別空港または釧路空港へ向かい帰路へ。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-8">
  📊 阿寒湖・摩周エリア 厳選5宿のスペック比較一覧
</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
      <tr>
        <th class="p-3">宿名</th>
        <th class="p-3">エリア</th>
        <th class="p-3">楽天評価</th>
        <th class="p-3">宿泊目安(1名)</th>
        <th class="p-3">風呂・スパ特徴</th>
        <th class="p-3">料理の自慢</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">あかん遊久の里 鶴雅</td>
        <td class="p-3">阿寒湖畔</td>
        <td class="p-3 font-bold text-blue-700">★ ${hYukyu.reviewAverage}</td>
        <td class="p-3">¥${(hYukyu.hotelMinCharge || 14520).toLocaleString()}〜</td>
        <td class="p-3">屋上天空露天風呂「天頂」・湖水庭園風呂</td>
        <td class="p-3">天の河バイキング・個室料亭会席</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ニュー阿寒ホテル</td>
        <td class="p-3">阿寒湖畔</td>
        <td class="p-3 font-bold text-blue-700">★ ${hNewAkan.reviewAverage}</td>
        <td class="p-3">¥${(hNewAkan.hotelMinCharge || 8000).toLocaleString()}〜</td>
        <td class="p-3">屋上天空ガーデンスパ（インフィニティ）</td>
        <td class="p-3">リゾートビュッフェ「フェリシェ」</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">THE FOREST阿寒</td>
        <td class="p-3">阿寒湖畔</td>
        <td class="p-3 font-bold text-blue-700">★ ${hForest.reviewAverage}</td>
        <td class="p-3">¥${(hForest.hotelMinCharge || 12644).toLocaleString()}〜</td>
        <td class="p-3">館内大浴場＋本館「遊久の里」湯めぐり</td>
        <td class="p-3">森のグリルビュッフェ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">屈斜路プリンスホテル</td>
        <td class="p-3">屈斜路湖畔</td>
        <td class="p-3 font-bold text-blue-700">★ ${hKussharo.reviewAverage}</td>
        <td class="p-3">¥${(hKussharo.hotelMinCharge || 3244).toLocaleString()}〜</td>
        <td class="p-3">庭園露天風呂（ナトリウム炭酸水素塩泉）</td>
        <td class="p-3">吹き抜けメインダイニング・道東ディナー</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">お宿欣喜湯 すいかずら</td>
        <td class="p-3">川湯温泉</td>
        <td class="p-3 font-bold text-blue-700">★ ${hKinkiyu.reviewAverage}</td>
        <td class="p-3">¥${(hKinkiyu.hotelMinCharge || 9000).toLocaleString()}〜</td>
        <td class="p-3">日本屈指の超強酸性pH1.7硫黄泉</td>
        <td class="p-3">摩周ポークと旬彩和食会席</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-8">
  ❓ フロストフラワー＆冬の道東旅行のよくある質問（FAQ）
</h2>

<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q1. フロストフラワーはいつ、どこで見られますか？見られる確率は？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 例年12月中旬から1月下旬にかけて、阿寒湖が完全結氷した直後が最も出現率が高くなります。見られる条件は「マイナス15度以下」「無風」「積雪がないこと」で、早朝6時〜7時頃の日の出前後に現れます。出現確率はシーズン中で約30〜40%と言われる貴重な現象です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q2. 個人で阿寒湖の氷上を歩いて見に行っても大丈夫ですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 個人での氷上単独行動は絶対に避けてください。阿寒湖には温泉が湧き出している場所があり、氷が薄い「湯壺」に誤って落ちると重大な事故につながります。必ず阿寒湖観光振興公社や地元公認ガイドが催行する「早朝フロストフラワーツアー」に参加してください。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q3. 冬の道東へのアクセスで飛行機はどの空港を使うのが便利ですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 「たんちょう釧路空港」または「女満別空港」が便利です。釧路空港から阿寒湖温泉までは車・バスで約60分、女満別空港からは約80分です。冬期は阿寒・摩周・知床を結ぶ観光周遊バス「ホワイトピリカ号」なども運行されています。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q4. カメラやスマートフォンの防寒対策は？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. マイナス20度の環境下ではリチウムイオンバッテリーが急激に電圧低下しシャットダウンします。予備バッテリーを衣服の内ポケットに入れ、カイロと一緒に温めておきましょう。撮影後は急激に暖かい部屋に持ち込むと内部結露するため、ジップロック等の密閉袋に入れて室温に慣らすのが鉄則です。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-100 border border-stone-200 text-center space-y-3">
  <h3 class="text-base font-bold text-stone-900">北海道・道東エリアの観光＆温泉特集も合わせてチェック！</h3>
  <ul class="text-xs text-stone-600 space-y-1.5 inline-block text-left">
    <li>👉 <a href="/furusato-tax-akan-onsen-marimo-heritage-stay/" class="text-blue-800 hover:text-blue-600 underline">ふるさと納税でお得に泊まる阿寒湖温泉名宿ガイド</a></li>
    <li>👉 <a href="/hokkaido/" class="text-blue-800 hover:text-blue-600 underline">北海道の温泉地・宿・旬の観光特集一覧</a></li>
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
    image: hYukyu.hotelImageUrl,
    other_images: [
      hNewAkan.hotelImageUrl,
      hForest.hotelImageUrl,
      hKussharo.hotelImageUrl,
      hKinkiyu.hotelImageUrl
    ],
    hotel_name: `${hYukyu.hotelName}・${hNewAkan.hotelName} ほか`,
    affiliate_url: hYukyu.affiliateUrl,
    categories: ["冬のイベント特集", "雪景色・氷瀑", "阿寒湖温泉", "フロストフラワー", "摩周湖", "アイヌコタン"],
    price: `¥${(hKussharo.hotelMinCharge || 3244).toLocaleString()}〜`,
    rating: hYukyu.reviewAverage || 4.49,
    review_count: hYukyu.reviewCount || 2310,
    date: date,
    is_special_feature: true,
    keywords: [
      "阿寒湖 フロストフラワー 時期 条件 確率",
      "摩周湖 霧氷 ダイヤモンドダスト 見頃",
      "阿寒湖温泉 ホテル おすすめ 露天風呂",
      "あかん遊久の里 鶴雅 宿泊記 天空露天",
      "ニュー阿寒ホテル 天空ガーデンスパ 口コミ",
      "阿寒湖 アイヌコタン ロストカムイ チケット"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["阿寒湖温泉", "フロストフラワー", "摩周湖", "霧氷", "あかん遊久の里鶴雅", "ニュー阿寒ホテル", "冬の北海道旅行"]
---

# ${title}

マイナス15度以下の静寂の朝にだけ湖上に咲く氷の華「フロストフラワー」。

12月〜1月の完全結氷期に阿寒湖や屈斜路湖で現れる奇跡の自然現象と、世界有数の透明度を誇る摩周湖の霧氷・ダイヤモンドダストを徹底解説。

北海道最大級の阿寒湖アイヌコタンで触れる伝統文化、阿寒湖温泉の天空インフィニティ露天風呂、オホーツクの冬海鮮・エゾ鹿肉を愉しむ名宿5選を完全網羅します。

---

## 💡 旅のプロ直伝！フロストフラワー＆冬の道東絶景攻略マニュアル

- **阿寒湖早朝フロストフラワーツアー:** 12月中旬〜1月がベスト。マイナス15度以下・無風の朝、薄氷の上に咲く氷の薔薇をガイドと観察。
- **摩周湖の霧氷とダイヤモンドダスト:** 藍色の湖面と外輪山の白い霧氷。朝8時前後の光が差し込む時間帯が最も美しい瞬間。
- **マイナス20度耐寒レイヤリング:** 発熱インナー＋フリース＋防風ダウン、厚手ウール靴下、防寒スノーブーツ、防寒ミトンが必須。
- **阿寒湖アイヌコタン:** アイヌシアター「イコロ」の舞台『ロストカムイ』や木彫り工房巡りで北の大地の精神文化を体感。

---

## 🏨 絶景天空露天と北の美食を堪能！阿寒湖・摩周周辺の厳選名宿5選

### 1. あかん遊久の里 鶴雅（北海道釧路市阿寒町阿寒湖温泉）
- **特徴:** 阿寒湖畔の圧倒的フラッグシップ。8階屋上天空露天風呂「天頂」と湖水庭園露天風呂。天の河バイキング・個室料亭会席。
- **宿泊目安:** 1名 ¥${(hYukyu.hotelMinCharge || 14520).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hYukyu.reviewAverage}（${hYukyu.reviewCount}件）
- 👉 [あかん遊久の里 鶴雅の空室・宿泊プランを見る](${hYukyu.affiliateUrl})

### 2. ニュー阿寒ホテル（北海道釧路市阿寒町阿寒湖温泉）
- **特徴:** 屋上地上30mのインフィニティスパ「天空ガーデンスパ」が圧巻。阿寒湖を望むパノラマサウナと豪華バイキング。
- **宿泊目安:** 1名 ¥${(hNewAkan.hotelMinCharge || 8000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hNewAkan.reviewAverage}（${hNewAkan.reviewCount}件）
- 👉 [ニュー阿寒ホテルの空室・宿泊プランを見る](${hNewAkan.affiliateUrl})

### 3. THE FOREST阿寒 TSURUGA RESORT（北海道釧路市阿寒町阿寒湖温泉）
- **特徴:** 阿寒の森と調和するナチュラルモダンリゾート。北欧風の洗練空間と森のグリルビュッフェ。本館「遊久の里」への湯めぐり無料。
- **宿泊目安:** 1名 ¥${(hForest.hotelMinCharge || 12644).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hForest.reviewAverage}（${hForest.reviewCount}件）
- 👉 [THE FOREST阿寒の空室・宿泊プランを見る](${hForest.affiliateUrl})

### 4. 屈斜路プリンスホテル（北海道川上郡弟子屈町屈斜路温泉）
- **特徴:** 屈斜路湖畔に建つ円形リゾート。真冬には湖畔にオオハクチョウが飛来。地下1,000mのナトリウム炭酸水素塩温泉露天風呂。
- **宿泊目安:** 1名 ¥${(hKussharo.hotelMinCharge || 3244).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hKussharo.reviewAverage}（${hKussharo.reviewCount}件）
- 👉 [屈斜路プリンスホテルの空室・宿泊プランを見る](${hKussharo.affiliateUrl})

### 5. お宿欣喜湯 別邸 すいかずら（北海道川上郡弟子屈町川湯温泉）
- **特徴:** 日本屈指の超強酸性pH1.7硫黄泉を誇る名湯・川湯温泉のモダン和宿。殺菌力抜群の本格湯治体験と弟子屈ポーク会席。
- **宿泊目安:** 1名 ¥${(hKinkiyu.hotelMinCharge || 9000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hKinkiyu.reviewAverage}（${hKinkiyu.reviewCount}件）
- 👉 [お宿欣喜湯 すいかずらの空室・宿泊プランを見る](${hKinkiyu.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **阿寒湖:** ${wAkan.extract || '淡水湖で国の特別天然記念物マリモの生息地。冬には完全結氷してフロストフラワーなどの体験が楽しめます。'}
- **摩周湖:** ${wMashu.extract || '弟子屈町にあるカルデラ湖。世界屈指の透明度「摩周ブルー」が特徴で、真冬の外輪山の霧氷が見事。'}
- **阿寒湖温泉・アイヌコタン:** ${wAkanOnsen.extract || '湖畔に北海道最大級のアイヌ集落があり、木彫りや舞踊文化が今なお息づく道東屈指の温泉地。'}
- **弟子屈町:** ${wTeshikaga.extract || '摩周湖と屈斜路湖を擁する町。噴煙を上げる硫黄山や名湯川湯温泉などダイナミックな火山活動の恩恵を受ける地。'}

---

## 🗺️ 氷花と霧氷を巡る道東 1泊2日モデルコース

- **1日目:** 釧路空港到着 ➔ 阿寒湖温泉へ移動 ➔ 鹿肉丼ランチ ➔ アイヌコタン散策・木彫り工房見学 ➔ 宿チェックイン ➔ 天空露天風呂で湖水パノラマ ➔ 北の味覚ディナー ➔ アイヌシアター『ロストカムイ』鑑賞
- **2日目:** 早朝フロストフラワーツアー ➔ 朝風呂＆朝食 ➔ チェックアウト ➔ 摩周湖第一展望台で霧氷鑑賞 ➔ 弟子屈ラーメンランチ ➔ 硫黄山見学 ➔ 空港へ向かい帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. フロストフラワーの見られる確率は？**  
A. 12月中旬〜1月下旬の「マイナス15度以下・無風・積雪なし」の早朝に出現し、シーズン中の確率は約30〜40%です。

**Q2. 個人で氷上を歩いても大丈夫？**  
A. 温泉が湧いて氷が薄い「湯壺」があり危険なため、必ず現地の公認ガイドツアーに参加してください。

**Q3. どの空港を利用するのが便利ですか？**  
A. 「たんちょう釧路空港」（車・バスで約60分）または「女満別空港」（約80分）が最寄りです。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【北海道・阿寒/摩周】奇跡の絶景「フロストフラワー＆摩周湖霧氷」完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/${slug}/)
`;

  return { postData, noteMarkdown };
};
