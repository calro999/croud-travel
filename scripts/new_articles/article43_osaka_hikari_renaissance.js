// scripts/new_articles/article43_osaka_hikari_renaissance.js
module.exports = function buildArticle43(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-osaka-hikari-renaissance-nakanoshima-midosuji-hotels-guide";
  const title = "【大阪・中之島】OSAKA光のルネサンス2026＆御堂筋イルミネーション完全攻略！大阪市中央公会堂プロジェクションマッピングと光のマルシェ、水都の天空パノラマ夜景＆クラシック名門ホテル5選";
  const description = "2026年12月開催の「OSAKA光のルネサンス」と「御堂筋イルミネーション」を徹底解説。水都大阪のシンボル・中之島を舞台に、大正モダン建築の大阪市中央公会堂に投影される圧巻のプロジェクションマッピング、中之島公園の光のマルシェ、全長4kmの黄金の御堂筋を網羅。コンラッド大阪やリーガロイヤルホテルなど、クリスマスディナーと天空パノラマ夜景を堪能できる楽天トラベル高評価宿5選をご紹介。";
  const date = "2026-11-08";
  const prefecture = "大阪府";
  const area = "中之島・梅田・堂島・本町";

  // ホテル抽出
  const hConrad = hotels.find(h => h.hotelNo === 162668) || hotels[0];
  const hRihga = hotels.find(h => h.hotelNo === 103) || hotels[1];
  const hImperial = hotels.find(h => h.hotelNo === 28654) || hotels[2];
  const hMitsui = hotels.find(h => h.hotelNo === 144957) || hotels[3];
  const hIconic = hotels.find(h => h.hotelNo === 178174) || hotels[4];

  // Wikiスポット
  const wKokaido = wiki["大阪市中央公会堂"] || {};
  const wNakanoshima = wiki["中之島 (大阪府)"] || {};
  const wMidosuji = wiki["御堂筋"] || {};
  const wPark = wiki["中之島公園"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-blue-950 via-indigo-950 to-stone-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-indigo-800/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-indigo-300 font-extrabold text-xs tracking-wider">
      <span>✨</span><span>2026冬 OSAKA光のルネサンス＆御堂筋イルミネーション 最新現地攻略ガイド</span>
    </div>
    <p class="text-xs text-indigo-100 leading-relaxed">
      12月14日〜25日開催！中之島の中央公会堂プロジェクションマッピングと4kmの御堂筋光の回廊。水都大阪の天空夜景＆クラシック名門宿で過ごす特別なクリスマスステイ。
    </p>
  </div>
  <a href="${hConrad.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-indigo-400 hover:bg-indigo-300 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    👑 コンラッド大阪の空室状況を見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 mb-4">
  大正ロマンの近代建築が光のカンバスに！「OSAKA光のルネサンス」と全長4kmの御堂筋が創り出す冬の奇跡
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  12月の大阪は、水都の川面に無数の光彩が揺らめき、年間で最もロマンチックな祝祭ムードに満たされます。大阪の冬を象徴する光の祭典「大阪・光の饗宴」の中核を担うコアプログラムが、毎年12月14日から12月25日のクリスマス当日まで開催される「OSAKA光のルネサンス」です。会場となる中之島エリアは、堂島川と土佐堀川に挟まれた中州であり、近代大阪の繁栄を今に伝える重厚な近代建築が立ち並ぶ文化・芸術の中心地。そのシンボルである国指定重要文化財「大阪市中央公会堂」の赤レンガ東側壁面に、最新鋭のプロジェクションマッピングが高精細に投影されます。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  荘厳なオーケストラサウンドに合わせて、公会堂のアーチ窓や彫刻レリーフが次々と姿を変え、光のグラフィックと歴史的建造物が完璧に融合する映像美は、まさに息を呑むスケールです。公会堂前の広場や中之島公園にはヨーロッパの冬景色を思わせる「光のマルシェ」が登場し、スパイスの効いたホットワイン（グリューワイン）や焼きソーセージ、クリスマストリーツの香りが漂います。さらに大阪市役所から中之島通りへ続くイルミネーションファサードや、水辺の遊歩道を照らす光のアート作品が夜の散策を華やかに演出します。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  そして中之島から梅田・心斎橋・難波へと南北に貫くメインストリート「御堂筋」では、ギネス世界記録にも認定された全長約4kmにおよぶ並木道イルミネーションが点灯。エリアごとに異なる5色の光のグラデーションが冬のビル街を包み込みます。本記事では、2026年12月のOSAKA光のルネサンス攻略法、公会堂マッピングの最前列確保術、そして水都大阪の天空夜景やクラシカルな美食ディナーを堪能できる楽天トラベル高評価ホテル5選を詳しくご紹介します。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-6">
  💡 現地調査に基づくプロの指南！OSAKA光のルネサンス攻略＆混雑回避マニュアル
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-indigo-100 text-indigo-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">12月中之島・必見プログラム＆観覧ルート</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>大阪市中央公会堂プロジェクションマッピング（17:00〜21:00）:</strong> 約8分間の映像ショーが15分間隔で連続上映されます。公会堂東側広場の正面中央部がベストポジション。17:00の初回上映直後または20:15以降の遅い時間帯が比較的混雑が緩和します。</p>
      <p>② <strong>中之島イルミネーションストリート＆市役所ファサード:</strong> みおつくしプロムナードのケヤキ並木が音楽に合わせて青やゴールドに変化する全長約150mの光のトンネル。記念撮影スポットとして毎年大人気です。</p>
      <p>③ <strong>光のマルシェ（中之島公園芝生広場周辺）:</strong> 国内外の本格グルメキッチンカーが約30店舗集結。ドイツソーセージ、ローストビーフ、クラムチャウダー、温かいチュロスなどを片手に光のアートを巡回できます。</p>
      <p>④ <strong>中之島リバークルーズからの水上鑑賞:</strong> 堂島川を行き交う観光クルーズ船に乗船すれば、陸上の喧騒を離れ、水面に反射する中央公会堂やイルミネーションを川面から見上げる特別な視点を楽しめます。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-blue-100 text-blue-800 font-extrabold text-xs rounded-lg">アクセス・寒さ対策</span>
      <h3 class="text-base font-bold text-stone-900">ビル風対策・地下鉄ルート・一方通行規制</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【川沿い特有の強烈なビル風と防寒装備】</strong> 中之島は堂島川と土佐堀川に挟まれた地形上、冬の寒風が川沿いを吹き抜けます。体感温度は実際の気温より3〜5℃低く感じられるため、防風仕様のロングコート、手袋、マフラー、耳当てが必須です。</p>
      <p><strong>【淀屋橋駅・北浜駅の混雑と一方通行規制】</strong> ピーク時間帯（18:30〜20:00）の中之島通りは一方通行規制が敷かれ、Osaka Metro御堂筋線「淀屋橋駅」の改札や階段は激しく混雑します。京阪中之島線「なにわ橋駅」や「大江橋駅」を利用すると混雑を大幅に回避できます。</p>
      <p><strong>【御堂筋イルミネーションとの徒歩連携】</strong> 中之島の鑑賞後は、大江橋から御堂筋を南下して本町・心斎橋方面へ光の回廊を歩くコースが王道。歩きやすいスニーカーや防寒ブーツでの散策をおすすめします。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  🏨 旅の目的に応じて選ぶ！大阪・中之島の厳選名ホテル＆ラグジュアリー宿5選
</h2>

<!-- 宿1: コンラッド大阪 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-indigo-100 text-indigo-900 font-black text-xs rounded-full">中之島最高層・地上200mの天空パノラマ夜景と世界的スマートラグジュアリー</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. コンラッド大阪（大阪府大阪市北区中之島）</h3>
    </div>
    <span class="px-3 py-1.5 bg-indigo-50 border border-indigo-300 text-indigo-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.73（348件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hConrad.hotelImageUrl}" alt="コンラッド大阪 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hConrad.roomImageUrl || hConrad.hotelImageUrl}" alt="コンラッド大阪 客室からのパノラマ夜景" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 中之島フェスティバルタワー・ウエストの最高層（33〜40階）に位置する最高級ラグジュアリーホテル。「Your Address in the Sky（空のアドレス）」をコンセプトに、中之島駅・肥後橋駅直結という抜群のアクセスを誇ります。
      </p>
      <p>
        <strong>【地上200メートルから見下ろす水都の光の海】</strong> 40階のロビーラウンジに足を踏み入れた瞬間に広がるのは、堂島川や御堂筋、遠く大阪湾まで見渡すパノラマ絶景。全客室が50平米以上の広さを誇り、床から天井までの全面ガラス窓から冬の煌めく大阪夜景を眼下に独り占めできます。
      </p>
      <p>
        <strong>【クリスマスを彩る世界基準のダイニング】</strong> 薪焼きのプレミアムシーフード＆グリル料理「C:GRILL」や、最上級和牛を味わう鉄板焼「蔵」、洗練されたオールデイダイニング「アトモス・ダイニング」など、特別な夜にふさわしい極上の美食が揃っています。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥33,360〜（2名1室利用時）</span>
        <a href="${hConrad.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-indigo-700 hover:bg-indigo-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: リーガロイヤルホテル大阪 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">中之島直結・創業90年余の歴史を誇る「大阪の迎賓館」格式と伝統の美食</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. リーガロイヤルホテル大阪　ヴィニェット　コレクション　ｂｙ　ＩＨＧ（大阪府大阪市北区中之島）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.42（12921件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hRihga.hotelImageUrl}" alt="リーガロイヤルホテル大阪 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hRihga.roomImageUrl || hRihga.hotelImageUrl}" alt="リーガロイヤルホテル大阪 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 1935年創業、国内外のVIPや国賓を数多く迎えてきた名門ホテル。中之島西部に堂々と構え、京阪中之島駅直結、JR大阪駅からの無料シャトルバスが終日高頻度で運行され、イベント鑑賞の拠点として抜群の利便性を誇ります。
      </p>
      <p>
        <strong>【歴史とモダンが融合する上質ステイ】</strong> IHGの「ヴィニェット コレクション」加盟によりリニューアルが進み、伝統的なおもてなしに現代的な洗練が融合。高層階のザ・プレジデンシャルタワーズでは専用ラウンジでのアフタヌーンティーやカクテルタイムが優雅なひとときを約束します。
      </p>
      <p>
        <strong>【名門フレンチ「シャンボール」と多彩なレストラン】</strong> フランスの古城をイメージした最高峰フレンチ「レストラン シャンボール」をはじめ、日本料理「なにわ」、中国料理、鉄板焼など館内に20店以上の直営レストラン・バーが揃い、大阪屈指の美食体験を誇ります。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥7,750〜（2名1室利用時）</span>
        <a href="${hRihga.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 帝国ホテル 大阪 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-900 text-amber-200 font-black text-xs rounded-full">大川リバーサイド・日本のホテル界を牽引する帝国ホテルの伝統と上質なホスピタリティ</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 帝国ホテル大阪（大阪府大阪市北区天満橋）</h3>
    </div>
    <span class="px-3 py-1.5 bg-stone-100 border border-stone-300 text-stone-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.67（3636件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hImperial.hotelImageUrl}" alt="帝国ホテル大阪 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hImperial.roomImageUrl || hImperial.hotelImageUrl}" alt="帝国ホテル大阪 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 水の都・大阪を象徴する大川のほとりに佇む名門ホテル。都心の喧騒から一歩離れた緑豊かなリバーサイドに位置し、JR大阪駅との間を無料シャトルバスが巡回。中之島イベントエリアへもタクシーで約10分の好立地です。
      </p>
      <p>
        <strong>【大川の水辺と大阪市街を望む優雅な客室】</strong> 広々とした客室からは、穏やかに流れる大川と大阪の夜景が広がり、冬の澄んだ空気の中で心安らぐ時間を過ごせます。老舗ならではの細やかで行き届いた接客サービスは記念日や大切な人との宿泊に最適です。
      </p>
      <p>
        <strong>【受け継がれる伝統のフランス料理「レ セゾン」】</strong> 帝国ホテル東京の伝統を受け継ぐグランメゾン「レ セゾン」での本格フレンチや、鉄板焼「嘉門」、本格江戸前鮨など、厳選食材を用いた贅沢なクリスマスディナーが旅を格調高く彩ります。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥16,900〜（2名1室利用時）</span>
        <a href="${hImperial.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 三井ガーデンホテル大阪プレミア -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">中之島西船溜まり・最上階SPA人工温泉大浴場＆靴を脱いでくつろぐフローリング客室</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 三井ガーデンホテル大阪プレミア（大阪府大阪市北区中之島）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.35（4845件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMitsui.hotelImageUrl}" alt="三井ガーデンホテル大阪プレミア 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMitsui.roomImageUrl || hMitsui.hotelImageUrl}" alt="三井ガーデンホテル大阪プレミア 最上階SPA" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 水辺の風情が美しい中之島西船溜まりに面し、JR大阪駅桜橋口から無料シャトルバスを運行。光のルネサンス会場の中之島通りへも徒歩圏内で、イベント鑑賞後の帰宿も非常にスムーズです。
      </p>
      <p>
        <strong>【最上階16階のSPA大浴場＆女性専用ガーデンジャグジー】</strong> 最上階には宿泊者専用のガーデン大浴場「SPA」を完備。冬の冷たい夜風で冷えた身体を温かい湯船で芯から癒やせます。女性用には坪庭を望む露天ジャグジーも用意されています。
      </p>
      <p>
        <strong>【全室靴を脱ぐフローリング仕様の快適空間】</strong> 客室は全室バス・トイレ・洗面が独立したセパレート設計。靴を脱いで素足でリラックスできるフローリング仕様となっており、自宅のような居心地の良さが高く評価されています。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥10,272〜（2名1室利用時）</span>
        <a href="${hMitsui.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: ザ ロイヤルパークホテル アイコニック 大阪御堂筋 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-purple-100 text-purple-900 font-black text-xs rounded-full">御堂筋直結・客室から御堂筋イルミネーションを見下ろす高層スタイリッシュホテル</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. ザ　ロイヤルパークホテル　アイコニック　大阪御堂筋（大阪府大阪市中央区平野町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-purple-50 border border-purple-300 text-purple-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.44（1034件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hIconic.hotelImageUrl}" alt="ザ ロイヤルパークホテル アイコニック 大阪御堂筋 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hIconic.roomImageUrl || hIconic.hotelImageUrl}" alt="ザ ロイヤルパークホテル アイコニック 大阪御堂筋 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 御堂筋の中心、淀屋橋駅と本町駅の間に位置する複合タワービルの高層階（15〜25階）に展開。「The Midosuji Icon」を掲げ、ホテルの真下を走る御堂筋イルミネーションを客室からダイレクトに見下ろせる絶好のロケーションです。
      </p>
      <p>
        <strong>【高層階から見下ろす黄金のイルミネーション回廊】</strong> 客室の大きなピクチャーウィンドウから、約4kmにわたって光が一直線に伸びる御堂筋の夜景が一望のもとに広がります。夜遅くまで部屋にいながら光の祭典に包まれる贅沢な滞在が叶います。
      </p>
      <p>
        <strong>【エグゼクティブラウンジとモダンフレンチ】</strong> 24・25階のエグゼクティブフロア宿泊者には専用ラウンジアクセスが付き、夜景とともにシャンパンやオードブルを堪能。15階のメインダイニング「THE BLINK」では現代フレンチをカジュアルに楽しめます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥12,100〜（2名1室利用時）</span>
        <a href="${hIconic.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-purple-700 hover:bg-purple-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="sightseeing" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（現地観光案内アーカイブ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6 leading-relaxed">
  OSAKA光のルネサンス鑑賞やラグジュアリーステイと合わせて巡りたい、大阪・中之島周辺の名所を現地観光案内アーカイブとともにご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-indigo-700 font-bold text-sm">📍 大阪市中央公会堂（Osaka City Central Public Hall）</span>
    </div>
    <img src="${wKokaido.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/162668/162668.jpg'}" alt="大阪市中央公会堂" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wKokaido.extract || '大阪市中央公会堂（おおさかしちゅうおうこうかいどう）は、大阪市北区中之島にある集会施設。ネオルネサンス様式の外観を持つ、国の重要文化財。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-indigo-700 font-bold text-sm">📍 中之島 (大阪府)（Nakanoshima）</span>
    </div>
    <img src="${wNakanoshima.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/103/103.jpg'}" alt="中之島" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wNakanoshima.extract || '中之島（なかのしま）は、大阪府大阪市北区にある堂島川と土佐堀川に挟まれた細長い中州。行政・経済・文化施設が集積する水都大阪の中心地。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-indigo-700 font-bold text-sm">📍 御堂筋（Midosuji）</span>
    </div>
    <img src="${wMidosuji.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/178174/178174.jpg'}" alt="御堂筋" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wMidosuji.extract || '御堂筋（みどうすじ）は、大阪府大阪市中心部を南北に縦断する幹線道路。冬期には全線にわたる大規模な街路樹イルミネーションが実施されます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-indigo-700 font-bold text-sm">📍 中之島公園（Nakanoshima Park）</span>
    </div>
    <img src="${wPark.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/144957/144957.jpg'}" alt="中之島公園" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wPark.extract || '中之島公園（なかのしまこうえん）は、大阪府大阪市北区中之島にある都市公園。大阪市で初めて誕生した市営公園であり、光のルネサンスの主要舞台となります。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  🗺️ 3Dマッピング・水辺マルシェ・天空夜景を満喫する 1泊2日大阪冬の洗練モデルコース
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-indigo-700 text-white rounded text-xs">1日目</span>
      大阪中之島美術館散策から公会堂プロジェクションマッピング・水都クリスマスディナーへ
    </h3>
    <p class="leading-relaxed">
      13:00 JR大阪駅または新大阪駅に到着 ➔ ホテル（コンラッド大阪やリーガロイヤルホテルなど）へ荷物を預ける ➔ 中之島西側エリアへ向かい「大阪中之島美術館」や「国立国際美術館」でモダンアート鑑賞 ➔ 15:30 川沿いのカフェで温かいカフェラテとパティスリーでひと休み ➔ 16:30 中之島通りを東へ歩き、大阪市役所前のイルミネーションファサードへ ➔ 17:00 大阪市中央公会堂前広場で場所を確保、カウントダウンとともに映し出される大迫力の3Dプロジェクションマッピングの初回上映を鑑賞 ➔ 18:00 中之島公園の「光のマルシェ」でホットワインや本格ドイツソーセージを味わいながら水辺のイルミアートを散策 ➔ 19:30 御堂筋を大江橋から本町方面へ歩き、黄金色に輝く街路樹の光の回廊を満喫 ➔ 20:30 ホテル内のメインダイニングで極上クリスマスディナー ➔ 客室の窓から広がる大阪の100万ドルの夜景を眺めながら乾杯。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-indigo-700 text-white rounded text-xs">2日目</span>
      天空ホテルモーニング＆水上クルーズとクラシック建築巡り
    </h3>
    <p class="leading-relaxed">
      07:30 朝の清々しい堂島川とビル群を見渡しながら目覚めのひととき ➔ ホテル自慢の朝食ビュッフェで焼きたてクロワッサンやトリュフオムレツ、新鮮なフレッシュジュースを堪能 ➔ 10:00 チェックアウト後、中之島リバークルーズに乗船し、水上から歴史的橋梁群（水晶橋や大江橋）と近代建築を眺めるパノラマクルージング ➔ 11:30 北浜の生駒ビルヂングや青山ビルなどレトロ建築を巡り、歴史ある洋館カフェでランチ ➔ 13:30 梅田の阪急うめだ本店やグランフロント大阪でクリスマスプレゼントや大阪銘菓のお土産を購入 ➔ 15:30 充実した冬の思い出を胸に帰路へ。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  📊 大阪・中之島 厳選5ホテルの特徴・眺望・宿泊目安比較一覧
</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
      <tr>
        <th class="p-3">ホテル名</th>
        <th class="p-3">立地・アクセス</th>
        <th class="p-3">楽天評価</th>
        <th class="p-3">宿泊目安(1名)</th>
        <th class="p-3">客室・眺望・スパ</th>
        <th class="p-3">食事の魅力・ディナー</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">コンラッド大阪</td>
        <td class="p-3">中之島駅・肥後橋駅直結</td>
        <td class="p-3 font-bold text-indigo-700">★ ${hConrad.reviewAverage}</td>
        <td class="p-3">¥${hConrad.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">地上200m天空パノラマ・全室50平米以上の超広空間</td>
        <td class="p-3">薪焼きグリル「C:GRILL」＆最上級鉄板焼「蔵」</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">リーガロイヤルホテル大阪</td>
        <td class="p-3">中之島駅直結（大阪駅バス有）</td>
        <td class="p-3 font-bold text-amber-700">★ ${hRihga.reviewAverage}</td>
        <td class="p-3">¥${hRihga.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">「大阪の迎賓館」格式・プレジデンシャルタワーズ</td>
        <td class="p-3">古城風グランメゾン「シャンボール」など20以上の直営店</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">帝国ホテル大阪</td>
        <td class="p-3">大川沿い（大阪駅バス有）</td>
        <td class="p-3 font-bold text-stone-900">★ ${hImperial.reviewAverage}</td>
        <td class="p-3">¥${hImperial.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">水辺のリバーサイドビュー・伝統と洗練のホスピタリティ</td>
        <td class="p-3">帝国ホテルの歴史を受け継ぐ正統派フレンチ「レ セゾン」</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">三井ガーデンホテル大阪プレミア</td>
        <td class="p-3">中之島西船溜まり（大阪駅バス有）</td>
        <td class="p-3 font-bold text-emerald-700">★ ${hMitsui.reviewAverage}</td>
        <td class="p-3">¥${hMitsui.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">最上階16階宿泊者専用SPA大浴場・素足フローリング客室</td>
        <td class="p-3">九州郷土料理と彩り野菜のヘルシー朝食ビュッフェ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ザ ロイヤルパークホテル アイコニック 大阪御堂筋</td>
        <td class="p-3">淀屋橋・本町駅徒歩3分</td>
        <td class="p-3 font-bold text-purple-700">★ ${hIconic.reviewAverage}</td>
        <td class="p-3">¥${hIconic.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">御堂筋直結・高層階から御堂筋イルミネーションを見下ろす</td>
        <td class="p-3">現代フレンチ「THE BLINK」＆専用クラブラウンジ</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  ❓ OSAKA光のルネサンス＆御堂筋イルミネーション よくある質問（FAQ）
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-indigo-950">Q1. OSAKA光のルネサンスの開催期間と点灯時間は？</h3>
    <p class="text-stone-700 leading-relaxed">
      2026年は12月14日(月)から12月25日(金)まで毎日開催されます。中央公会堂プロジェクションマッピングは17:00〜21:00（1回約8分、約15分間隔）、光のマルシェやイルミネーションストリートは17:00〜22:00まで点灯します。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-indigo-950">Q2. 中央公会堂プロジェクションマッピングを混雑せずに観るコツは？</h3>
    <p class="text-stone-700 leading-relaxed">
      18:00〜19:30の時間帯は淀屋橋方面からの来場者が集中し最も混雑します。点灯開始直後の17:00の回、または20:15以降の遅い回を狙うと、前方の視界の良いスペースで落ち着いて鑑賞できます。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-indigo-950">Q3. 中之島周辺に宿泊するメリットは何ですか？</h3>
    <p class="text-stone-700 leading-relaxed">
      イベント終了後の地下鉄改札の長い行列や混雑に巻き込まれることなく、徒歩数分で温かいホテルの客室に戻れる点が最大のメリットです。また、高層階の客室から水都や御堂筋の夜景を見下ろしながら、プライベートな空間でクリスマスシャンパンやディナーを楽しめます。
    </p>
  </div>
</div>

<h2 id="internal-links" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  📌 あわせて読みたい大阪・関西の冬の観光＆名宿特集
</h2>
<div class="p-6 rounded-3xl bg-indigo-50/70 border border-indigo-200 space-y-3 my-6">
  <p class="text-xs text-indigo-900 font-bold mb-2">当サイトでは、大阪・関西の冬のイルミネーションや名門ホテルを満喫できる厳選ガイドを多数公開しています。</p>
  <ul class="text-xs text-indigo-900 space-y-2 list-disc list-inside">
    <li><a href="/prefectures/osaka/" class="underline font-bold hover:text-indigo-700">大阪府のホテル・旅館・観光名所完全ガイド（梅田・難波・中之島）</a></li>
    <li><a href="/posts/autumn-november-osaka-midosuji-lightup-guide" class="underline hover:text-indigo-700">御堂筋イルミネーション完全ガイド！全長4kmの光の回廊と駅直結ホテル特集</a></li>
    <li><a href="/posts/namba-shinsaibashi-dotonbori-hotels-guide" class="underline hover:text-indigo-700">なんば・心斎橋・道頓堀の厳選ホテルガイド！大阪グルメ満喫ステイ</a></li>
    <li><a href="/posts/osaka-famous-takoyaki-kushikatsu-hotels-guide" class="underline hover:text-indigo-700">大阪名物グルメと天然温泉！たこ焼き・串かつを満喫する人気宿特集</a></li>
    <li><a href="/posts/winter-hyogo-kobe-luminarie-arima-onsen-kinsen-hotels-guide" class="underline hover:text-indigo-700">神戸ルミナリエと有馬温泉金泉！冬の兵庫ロマンチック旅行ガイド</a></li>
  </ul>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${title}",
  "description": "${description}",
  "datePublished": "${date}",
  "dateModified": "${date}",
  "author": {
    "@type": "Organization",
    "name": "クランドトラベル（Croud Travel）編集部"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Croud Travel",
    "logo": {
      "@type": "ImageObject",
      "url": "https://croud-travel.pages.dev/favicon.ico"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://croud-travel.pages.dev/posts/${slug}"
  }
}
</script>
`;

  const postData = {
    id: slug,
    slug: slug,
    title: title,
    description: description,
    hero_image: hConrad.hotelImageUrl,
    gallery: [
      hConrad.hotelImageUrl,
      hRihga.hotelImageUrl,
      hImperial.hotelImageUrl,
      hMitsui.hotelImageUrl,
      hIconic.hotelImageUrl
    ],
    hotel_name: "コンラッド大阪・リーガロイヤルホテル大阪・帝国ホテル大阪 ほか",
    affiliate_url: hConrad.affiliateUrl,
    categories: [
      "冬のイベント特集",
      "イルミネーション",
      "クリスマス特集",
      "中之島",
      "大阪夜景ホテル",
      "プロジェクションマッピング"
    ],
    price: `¥${hRihga.hotelMinCharge?.toLocaleString() || '7,750'}〜`,
    rating: hConrad.reviewAverage || 4.73,
    review_count: hRihga.reviewCount || 12921,
    date: date,
    is_special_feature: true,
    keywords: [
      "OSAKA光のルネサンス 2026",
      "大阪市中央公会堂 プロジェクションマッピング 時間",
      "中之島 イルミネーション 2026",
      "御堂筋イルミネーション 点灯時間 期間",
      "コンラッド大阪 クリスマスディナー 宿泊記",
      "リーガロイヤルホテル大阪 シャトルバス 口コミ",
      "帝国ホテル大阪 クリスマス宿泊プラン",
      "三井ガーデンホテル大阪プレミア 大浴場",
      "ザ ロイヤルパークホテル アイコニック 大阪御堂筋 イルミ部屋"
    ],
    review: reviewHtml,
    image: hConrad.hotelImageUrl,
    other_images: [
      hConrad.hotelImageUrl,
      hRihga.hotelImageUrl,
      hImperial.hotelImageUrl,
      hMitsui.hotelImageUrl,
      hIconic.hotelImageUrl
    ]
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["OSAKA光のルネサンス", "中之島", "御堂筋イルミネーション", "コンラッド大阪", "大阪市中央公会堂", "クリスマス", "大阪ホテル"]
---

# ${title}

2026年12月開催の「OSAKA光のルネサンス」と「御堂筋イルミネーション」を徹底解説！

水都大阪のシンボル・中之島を舞台に、大正モダン建築の大阪市中央公会堂に投影される圧巻のプロジェクションマッピング、中之島公園の光のマルシェ、全長4kmの黄金の御堂筋を網羅。

コンラッド大阪やリーガロイヤルホテルなど、クリスマスディナーと天空パノラマ夜景を堪能できる厳選5宿をご紹介します。

---

## 💡 現地調査に基づくプロの指南！OSAKA光のルネサンス攻略＆混雑回避マニュアル

- **大阪市中央公会堂プロジェクションマッピング（17:00〜21:00）:** 約8分間のショーが15分間隔で連続上映。公会堂東側広場の正面が特等席。17:00初回上映直後、または20:15以降の遅い時間帯が比較的スムーズです。
- **光のマルシェ（中之島公園芝生広場周辺）:** 国内外の本格グルメキッチンカーが集結。ホットワインやドイツソーセージ、温かいスープを片手に光のアートを散策できます。
- **川沿いのビル風と防寒装備:** 堂島川と土佐堀川に挟まれた中之島は冷たいビル風が吹き抜けます。体感温度は氷点下近くに下がるため、防風ロングコート、手袋、マフラーが必須です。
- **地下鉄の混雑回避ルート:** 18:30〜20:00の淀屋橋駅は大変混雑します。京阪中之島線「なにわ橋駅」や「大江橋駅」を利用すると快適に移動できます。

---

## 🏨 旅の目的に応じて選ぶ！大阪・中之島の厳選名ホテル＆ラグジュアリー宿5選

### 1. コンラッド大阪（大阪府大阪市北区中之島）
- **特徴:** 中之島フェスティバルタワー最高層（33〜40階）。地上200mの天空パノラマ夜景。全室50平米以上のラグジュアリー空間と薪焼きグリル・最高峰鉄板焼。
- **宿泊目安:** 1名 ¥${hConrad.hotelMinCharge?.toLocaleString() || '33,360'}〜
- **楽天トラベル評価:** ⭐ ${hConrad.reviewAverage}（${hConrad.reviewCount}件）
- 👉 [コンラッド大阪の空室・宿泊プランを見る](${hConrad.affiliateUrl})

### 2. リーガロイヤルホテル大阪　ヴィニェット　コレクション　ｂｙ　ＩＨＧ（大阪府大阪市北区中之島）
- **特徴:** 創業90年余の伝統を誇る「大阪の迎賓館」。京阪中之島駅直結＆大阪駅無料シャトルバス運行。名門グランメゾン「シャンボール」など20店以上の直営レストラン。
- **宿泊目安:** 1名 ¥${hRihga.hotelMinCharge?.toLocaleString() || '7,750'}〜
- **楽天トラベル評価:** ⭐ ${hRihga.reviewAverage}（${hRihga.reviewCount}件）
- 👉 [リーガロイヤルホテル大阪の空室・宿泊プランを見る](${hRihga.affiliateUrl})

### 3. 帝国ホテル大阪（大阪府大阪市北区天満橋）
- **特徴:** 大川のリバーサイドに佇む名門。帝国ホテルの誇る世界基準のおもてなし。優雅な水辺の夜景と正統派フレンチ「レ セゾン」の至高クリスマスディナー。
- **宿泊目安:** 1名 ¥${hImperial.hotelMinCharge?.toLocaleString() || '16,900'}〜
- **楽天トラベル評価:** ⭐ ${hImperial.reviewAverage}（${hImperial.reviewCount}件）
- 👉 [帝国ホテル大阪の空室・宿泊プランを見る](${hImperial.affiliateUrl})

### 4. 三井ガーデンホテル大阪プレミア（大阪府大阪市北区中之島）
- **特徴:** 中之島西船溜まり沿い。最上階16階に宿泊者専用SPA大浴場＆女性専用露天ジャグジー完備。全室素足でくつろげるフローリング仕様＆セパレート水回り。
- **宿泊目安:** 1名 ¥${hMitsui.hotelMinCharge?.toLocaleString() || '10,272'}〜
- **楽天トラベル評価:** ⭐ ${hMitsui.reviewAverage}（${hMitsui.reviewCount}件）
- 👉 [三井ガーデンホテル大阪プレミアの空室・宿泊プランを見る](${hMitsui.affiliateUrl})

### 5. ザ　ロイヤルパークホテル　アイコニック　大阪御堂筋（大阪府大阪市中央区平野町）
- **特徴:** 御堂筋沿いの高層複合タワー（15〜25階）。客室の窓から黄金の御堂筋イルミネーションをダイレクトに見下ろす特等席。現代フレンチと専用クラブラウンジ。
- **宿泊目安:** 1名 ¥${hIconic.hotelMinCharge?.toLocaleString() || '12,100'}〜
- **楽天トラベル評価:** ⭐ ${hIconic.reviewAverage}（${hIconic.reviewCount}件）
- 👉 [ザ ロイヤルパークホテル アイコニック 大阪御堂筋の空室・宿泊プランを見る](${hIconic.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **大阪市中央公会堂:** ${wKokaido.extract || '大阪市中央公会堂（おおさかしちゅうおうこうかいどう）は、大阪市北区中之島にある集会施設。ネオルネサンス様式の外観を持つ、国の重要文化財。'}
- **中之島 (大阪府):** ${wNakanoshima.extract || '中之島（なかのしま）は、大阪府大阪市北区にある堂島川と土佐堀川に挟まれた細長い中州。行政・経済・文化施設が集積する水都大阪の中心地。'}
- **御堂筋:** ${wMidosuji.extract || '御堂筋（みどうすじ）は、大阪府大阪市中心部を南北に縦断する幹線道路。冬期には全線にわたる大規模な街路樹イルミネーションが実施されます。'}
- **中之島公園:** ${wPark.extract || '中之島公園（なかのしまこうえん）は、大阪府大阪市北区中之島にある都市公園。大阪市で初めて誕生した市営公園であり、光のルネサンスの主要舞台となります。'}

---

## 🗺️ 大阪・中之島を満喫する 1泊2日モデルコース

- **1日目:** 大阪駅到着 ➔ ホテルへ荷物預け ➔ 大阪中之島美術館でアート鑑賞 ➔ 川沿いカフェで休憩 ➔ 17:00 大阪市中央公会堂前で3Dプロジェクションマッピング初回鑑賞 ➔ 光のマルシェでホットワイン＆ソーセージ ➔ 御堂筋の光の回廊を散策 ➔ ホテルでクリスマスディナー ➔ 客室から大阪夜景を鑑賞
- **2日目:** 天空レストランで優雅な朝食ビュッフェ ➔ 中之島リバークルーズで水上から近代建築鑑賞 ➔ 北浜レトロ建築散策＆ランチ ➔ 梅田デパ地下でお土産選び ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. OSAKA光のルネサンスのプロジェクションマッピングは何時からですか？**  
A. 17:00から21:00まで、約8分間のプログラムが約15分間隔で繰り返し上映されます。

**Q2. 中之島周辺で混雑を避けて食事をするには？**  
A. 光のマルシェは手軽ですが夜は並ぶため、宿泊ホテルのレストランを事前にディナー予約しておくのが最もスムーズで特別な夜を過ごせます。

**Q3. 御堂筋イルミネーションはいつまで点灯していますか？**  
A. 御堂筋イルミネーションは例年11月上旬から12月31日大晦日まで、17:00頃から23:00まで点灯しています。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【大阪・中之島】OSAKA光のルネサンス2026＆御堂筋イルミネーション完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/posts/${slug})
`;

  return { postData, noteMarkdown };
};
