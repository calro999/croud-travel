// scripts/new_articles/article40_karuizawa_christmas.js
module.exports = function buildArticle40(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-nagano-karuizawa-plateau-church-christmas-candle-hotels-guide";
  const title = "【軽井沢】軽井沢高原教会「星降る森のクリスマス2026」＆ハルニレテラス完全攻略！無数のランタンキャンドルと白糸の滝ライトアップ、星野温泉トンボの湯＆信州牛・極上フレンチを堪能するクラシックリゾート宿5選";
  const description = "2026年12月開催の軽井沢高原教会「星降る森のクリスマス」とハルニレテラスのもみの木イルミネーションを徹底解説。大正時代から続く森に灯る無数のランタンキャンドル、完全事前予約制の攻略法、白糸の滝の真冬ライトアップ、星野温泉トンボの湯の雪見露天を網羅。創業130年の歴史を誇る万平ホテルや旧軽井沢の上質隠れ家リゾートなど厳選5宿をご紹介。";
  const date = "2026-11-07";
  const prefecture = "長野県";
  const area = "軽井沢・星野エリア";

  // ホテル抽出
  const hMampei = hotels.find(h => h.hotelNo === 28308) || hotels[0];
  const hKikyo = hotels.find(h => h.hotelNo === 167027) || hotels[1];
  const hLegrand = hotels.find(h => h.hotelNo === 167023) || hotels[2];
  const hIndigo = hotels.find(h => h.hotelNo === 183829) || hotels[3];
  const hPrince = hotels.find(h => h.hotelNo === 181343) || hotels[4];

  // Wikiスポット
  const wKogen = wiki["軽井沢高原教会"] || {};
  const wHoshino = wiki["星野温泉"] || {};
  const wShiraito = wiki["白糸の滝 (長野県)"] || {};
  const wKyuKaru = wiki["旧軽井沢"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-emerald-950 via-teal-950 to-stone-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-emerald-800/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-emerald-300 font-extrabold text-xs tracking-wider">
      <span>🕯️</span><span>2026冬 軽井沢高原教会 星降る森のクリスマス＆ハルニレテラス 最新現地攻略ガイド</span>
    </div>
    <p class="text-xs text-emerald-100 leading-relaxed">
      12月1日〜25日開催！森一面に瞬く本物のランタンキャンドルと高さ6mの天然もみの木ツリー。歴史あるクラシックホテル＆美肌の名湯で過ごす極上の高原冬旅。
    </p>
  </div>
  <a href="${hMampei.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    👑 万平ホテルの空室・宿泊プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 mb-4">
  凛とした静寂の森に揺れる無数の灯火！「軽井沢高原教会 星降る森のクリスマス」の圧倒的な世界観
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  夏の避暑地としての賑わいが去り、澄み渡る冷気と静寂が戻る12月の信州・軽井沢。木立が葉を落とし、浅間山がうっすらと雪化粧をまとう冬の高原は、一年の中で最も上質でロマンチックな雰囲気に包まれます。その象徴となるのが、大正10年（1921年）の文化学院開講に端を発する歴史ある「軽井沢高原教会」で開催される冬の風物詩「星降る森のクリスマス」です。教会の周囲に広がる中庭の森一面に、スタッフの手によって一つひとつ火が灯された無数のランタンキャンドルが並べられ、中央にそびえる高さ約6メートルの天然もみの木ツリーが温かな光を放ちます。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  LED照明による派手な演出とは一線を画し、本物の炎がゆらめく教会の中庭は、訪れる人々の心を静かに穏やかに包み込みます。ランタンの灯りに照らされたウッドデッキの散策路を歩けば、キリリと冷えた空気の中に針葉樹の清々しい香りが漂い、教会の三角屋根越しに満天の星空が広がります。教会内ではパイプオルガンの重厚な音色やハープの生演奏、牧師によるクリスマスの講話が響き、都会の喧騒では決して味わえない崇高な感動が胸を満たします。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  さらに教会から歩いてすぐの「ハルニレテラス」では、湯川のせせらぎ沿いに天然もみの木のイルミネーションが点灯。老舗「丸山珈琲」のスペシャルティコーヒーや信州そば、温かい信州シードルを楽しめます。散策で冷えた身体は、開湯100年を超える名湯「星野温泉 トンボの湯」の雪見露天風呂でじんわりと癒やすのが王道の過ごし方です。12月の軽井沢高原教会は完全事前予約制（抽選・先着）となるため、事前の確実なチケット確保と、冷え込みに耐える万全の防寒対策、そして高原リゾートならではの極上フレンチや信州牛ディナーを備えた名宿選びが重要になります。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-6">
  💡 現地調査に基づくプロの指南！軽井沢クリスマス攻略＆混雑・寒さ対策マニュアル
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">12月の軽井沢・必見イベント＆散策術</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>星降る森のクリスマス（軽井沢高原教会）:</strong> 開催期間は12月1日(火)〜12月25日(金)の毎夜（19:30〜21:30）。本物の炎が灯るランタンキャンドルと教会内の音楽礼拝。公式ウェブサイトからの完全事前予約（日時指定チケット）が必須です。</p>
      <p>② <strong>ハルニレテラス「クリスマスタウン」:</strong> 清流沿いの木道デッキにイルミネーションが煌めき、巨大もみの木が点灯。夕暮れ時の16:30〜18:00が点灯直後のブルーアワーと重なり最もフォトジェニックです。</p>
      <p>③ <strong>白糸の滝「真冬のライトアップ」:</strong> 白糸ハイランドウェイ沿いに位置する名瀑。真冬の夜間、湾曲した岩肌から幾筋もの清水が流れ落ちる滝が幻想的な光に照らされ、氷と水の神秘的な情景が出現します。</p>
      <p>④ <strong>軽井沢プリンスショッピングプラザ イルミネーション:</strong> 広大な芝生広場と池に映り込む約10万球のウィンターイルミネーション。駅前直結でショッピングの合間に気軽に楽しめます。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-teal-100 text-teal-800 font-extrabold text-xs rounded-lg">気候・移動テクニック</span>
      <h3 class="text-base font-bold text-stone-900">氷点下対策・道路凍結・新幹線アクセス</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【標高約1,000mの極寒に備える完全防寒】</strong> 軽井沢は北海道南部と同等の気候です。12月の夜間はマイナス5℃〜10℃近くまで冷え込みます。中庭の森は屋外で長時間滞在するため、極厚のロングダウンコート、裏起毛パンツ、厚手マフラー、手袋、耳当て、足用カイロが欠かせません。</p>
      <p><strong>【車でのアクセスはスタッドレス必須】</strong> 昼間に雪がなくても、夕方以降は路面が凍結（ブラックアイスバーン）します。自家用車やレンタカーで訪れる場合は必ず4WD＋スタッドレスタイヤを装着し、急ブレーキ・急ハンドルは厳禁です。</p>
      <p><strong>【北陸新幹線＋タクシー・シャトルバスが快適】</strong> 東京駅から軽井沢駅までは北陸新幹線でわずか約65分。駅からは各主要ホテルへの送迎シャトルバスやタクシー、路線バスが充実しており、雪道運転の不安なくアクセス可能です。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  🏨 高原の特別な冬を彩る！軽井沢の厳選名門ホテル＆温泉リゾート5選
</h2>

<!-- 宿1: 万平ホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">創業130年・ジョン・レノンゆかりの日本最高峰クラシックホテル</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 万平ホテル（長野県北佐久郡軽井沢町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hMampei.reviewAverage}（${hMampei.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMampei.hotelImageUrl}" alt="${hMampei.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMampei.roomImageUrl || hMampei.hotelImageUrl}" alt="${hMampei.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 明治27年（1894年）創業、登録有形文化財の本館アルプス館をはじめとする歴史的空間が息づく日本屈指のクラシックホテル。ジョン・レノンをはじめ国内外のVIPに愛され続け、大規模改修を経て伝統の品格と現代の快適性が見事に調和しています。
      </p>
      <p>
        <strong>【格式高きメインダイニングルームの伝統フレンチ】</strong> ステンドグラスに彩られた重厚なメインダイニングで味わうディナーは、代々の料理長が守り継ぐ伝統のフランス料理。信州の旬の食材を取り入れたクラシカルなローストやコンソメスープは、一度は味わいたい至極の逸品です。
      </p>
      <p>
        <strong>【伝説のカフェテラスとロイヤルミルクティー】</strong> 滞在中に必ず立ち寄りたいのが、ジョン・レノン直伝のレシピで知られるロイヤルミルクティーとアップルパイが人気のカフェテラス。冬の木立を眺めながら過ごす午後のひとときは、何物にも代えがたい贅沢です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hMampei.hotelMinCharge || 22348).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hMampei.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 旧軽井沢KIKYOキュリオ・コレクションbyヒルトン -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-900 text-amber-200 font-black text-xs rounded-full">旧軽井沢の静寂に抱かれる隠れ家・大浴場完備＆ヒルトン最高級ブランド</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 旧軽井沢ＫＩＫＹＯキュリオ・コレクションｂｙヒルトン（長野県北佐久郡軽井沢町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-stone-100 border border-stone-300 text-stone-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKikyo.reviewAverage}（${hKikyo.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKikyo.hotelImageUrl}" alt="${hKikyo.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKikyo.roomImageUrl || hKikyo.hotelImageUrl}" alt="${hKikyo.hotelName} 中庭ラウンジ" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 旧軽井沢銀座通りまで徒歩圏内という好立地にありながら、一歩館内に足を踏み入れると閑静な中庭と洗練されたモダンラグジュアリー空間が広がります。ベンツによる軽井沢駅無料送迎サービスなど、細部まで行き届いたホスピタリティが魅力です。
      </p>
      <p>
        <strong>【心地よい温もりの大浴場「SILENT SPA」】</strong> 館内地下には、シックな間接照明に包まれた大浴場「SILENT SPA」とサウナを完備。冬の星空散策で冷えた身体を静寂の中でじんわりと温め、深いリラクゼーションへと導いてくれます。
      </p>
      <p>
        <strong>【信州のテロワールを表現するフレンチダイニング「SONORITÉ」】</strong> 地元信州の契約農家から届く高原野菜や信州プレミアム牛を、現代的な感性で昇華させたコースディナーを提供。厳選された信州ワインやシャンパーニュとのペアリングも秀逸です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hKikyo.hotelMinCharge || 22028).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hKikyo.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: ルグラン軽井沢ホテル＆リゾート -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">南軽井沢の広大な森に佇む欧風リゾート・天然温泉「八風温泉」の庭園露天風呂</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. ルグラン軽井沢ホテル＆リゾート（長野県北佐久郡軽井沢町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hLegrand.reviewAverage}（${hLegrand.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hLegrand.hotelImageUrl}" alt="${hLegrand.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hLegrand.roomImageUrl || hLegrand.hotelImageUrl}" alt="${hLegrand.hotelName} 露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 南軽井沢の豊かな自然に抱かれた約7万坪の広大な敷地を誇る欧風リゾート。標高約1,000メートルの高台に位置し、浅間山を一望できる山頂デッキや、クラシックなヨーロッパ調の客室が非日常の旅を演出します。
      </p>
      <p>
        <strong>【自家源泉の天然温泉「八風温泉」の開放的な庭園露天風呂】</strong> 軽井沢エリアでは希少な天然温泉「八風温泉」を引き入れた露天風呂を完備。三大美肌泉質と呼ばれるナトリウム-炭酸水素塩泉で、肌が滑らかに整います。雪化粧した浅間山や木立を眺めながらの雪見風呂は格別です。
      </p>
      <p>
        <strong>【ミシュラン星獲得シェフが監修する極上フレンチ】</strong> 本館レストラン「Vaas」では、信州サーモンや信州牛、地元高原野菜をふんだんに使った本格フレンチフルコースを堪能。暖炉の火が揺れるクラシカルな空間で優雅なディナーを楽しめます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hLegrand.hotelMinCharge || 16170).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hLegrand.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: ホテルインディゴ軽井沢 by IHG -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-indigo-100 text-indigo-900 font-black text-xs rounded-full">浅間山ビューと別荘ライクな洗練空間・薪火イタリアン＆大浴場・サウナ</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. ホテルインディゴ軽井沢　ｂｙ　ＩＨＧ（長野県北佐久郡軽井沢町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-indigo-50 border border-indigo-300 text-indigo-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hIndigo.reviewAverage}（${hIndigo.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hIndigo.hotelImageUrl}" alt="${hIndigo.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hIndigo.roomImageUrl || hIndigo.hotelImageUrl}" alt="${hIndigo.hotelName} レストラン" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 軽井沢の別荘文化と西洋の歴史を随所に取り入れたスタイリッシュなブティックホテル。浅間山を望む中庭を囲むように配置された客室棟は、木材の温もりとアートが調和した心地よいプライベート空間です。
      </p>
      <p>
        <strong>【炭酸泉風呂とサウナを備えたスタイリッシュな大浴場】</strong> 館内にはリフレッシュに最適な広々とした大浴場を完備。血行を促進する高濃度炭酸泉や屋外の露天風呂、ドライサウナが用意されており、冬の冷えた身体を芯から解きほぐしてくれます。
      </p>
      <p>
        <strong>【薪の炎が香るオールデイダイニング「KAGARIBI」】</strong> レストラン「KAGARIBI」の中央には薪火オーブンが鎮座。薪の直火で豪快かつ繊細に焼き上げられる信州牛や地元野菜のグリル料理、手打ち生パスタなど、香り豊かなイタリアンが好評を博しています。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hIndigo.hotelMinCharge || 18000).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hIndigo.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-indigo-700 hover:bg-indigo-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 軽井沢プリンスホテル イースト -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-teal-100 text-teal-900 font-black text-xs rounded-full">駅至近・森の温泉スパ「フォレストホットスプリング」＆ゲレンデ直結</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 軽井沢プリンスホテル　イースト（長野県北佐久郡軽井沢町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-teal-50 border border-teal-300 text-teal-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hPrince.reviewAverage}（${hPrince.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hPrince.hotelImageUrl}" alt="${hPrince.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hPrince.roomImageUrl || hPrince.hotelImageUrl}" alt="${hPrince.hotelName} スパ温泉" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 軽井沢駅南口から無料ピックアップバスですぐの好立地。冬は軽井沢プリンスホテルスキー場が目の前に広がり、ショッピングプラザへも徒歩圏内。アクティブにもリゾートステイにも最適なプレミアムホテルです。
      </p>
      <p>
        <strong>【イースト本館宿泊者限定の温泉スパ「Forest Hot Spring」】</strong> 敷地内から湧出する天然温泉を楽しめる専用スパ施設を併設。内湯のほか、白樺の木立に囲まれた露天風呂やスチームサウナを備え、森の澄んだ空気を吸い込みながらリフレッシュできます。
      </p>
      <p>
        <strong>【信州の旬を薪火グリルで味わう「All Day Dining Karuizawa Grill」】</strong> オープンキッチンから香ばしい匂いが漂うダイニングでは、信州産ポークや信州牛、高原野菜のグリルを提供。朝食は信州の食材が色鮮やかに並ぶ洋食ビュッフェで爽やかな朝をスタートできます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hPrince.hotelMinCharge || 13396).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hPrince.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-teal-700 hover:bg-teal-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="sightseeing" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6 leading-relaxed">
  軽井沢高原教会でのクリスマス鑑賞やリゾート滞在と合わせて訪れたい、軽井沢を代表する名所をWikipedia公式データとともにご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-emerald-700 font-bold text-sm">📍 軽井沢高原教会（Karuizawa Kogen Church）</span>
    </div>
    <img src="${wKogen.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/28308/28308.jpg'}" alt="軽井沢高原教会" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wKogen.extract || '軽井沢高原教会は、長野県軽井沢町にあるプロテスタントの教会。大正期に内村鑑三や北原白秋ら文化人が集った「芸術自由教育講習会」を起源とし、木の温もりあふれる三角屋根の美しい教会建築で知られます。毎年12月の「星降る森のクリスマス」では中庭一面に無数のランタンが灯ります。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-emerald-700 font-bold text-sm">📍 星野温泉（Hoshino Onsen）</span>
    </div>
    <img src="${wHoshino.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/167027/167027.jpg'}" alt="星野温泉" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wHoshino.extract || '星野温泉は、長野県北佐久郡軽井沢町にある名湯。大正4年（1915年）に開湯し、与謝野鉄幹・晶子夫妻や島崎藤村など文豪に愛された歴史を持ちます。日帰り温泉施設「トンボの湯」では軟らかい美肌の湯と雪見露天風呂が楽しめます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-emerald-700 font-bold text-sm">📍 白糸の滝（Shiraito Falls）</span>
    </div>
    <img src="${wShiraito.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/167023/167023.jpg'}" alt="白糸の滝" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wShiraito.extract || '白糸の滝は、長野県北佐久郡軽井沢町にある滝。浅間山の地下水が岩肌から湧き出し、高さ3メートル、幅70メートルの湾曲した岸壁から数百条の白糸のように流れ落ちます。冬季には氷と滝がライトアップされる幻想的なイベントが行われます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-emerald-700 font-bold text-sm">📍 旧軽井沢（Old Karuizawa）</span>
    </div>
    <img src="${wKyuKaru.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/183829/183829.jpg'}" alt="旧軽井沢" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wKyuKaru.extract || '旧軽井沢は、旧中山道軽井沢宿から発展した軽井沢観光の中心地。旧軽井沢銀座通りには老舗ベーカリーやジャム店、伝統の工芸品店が並び、冬は静かな大人の散策が楽しめます。聖パウロカトリック教会など歴史ある洋風建築も点在します。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  🗺️ ランタンキャンドルと美食・温泉を満喫する 1泊2日軽井沢冬の王道モデルコース
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-emerald-700 text-white rounded text-xs">1日目</span>
      旧軽井沢散策からハルニレテラス、幻想の高原教会キャンドルナイトへ
    </h3>
    <p class="leading-relaxed">
      11:30 北陸新幹線で軽井沢駅に到着 ➔ ホテルへ手荷物を預け、タクシーまたはバスで旧軽井沢へ ➔ 万平ホテルのカフェテラスで伝統のロイヤルミルクティーとアップルパイを味わう ➔ 旧軽井沢銀座通りで老舗ベーカリーのパンや手作りジャムをお買い物 ➔ 15:30 星野エリアへ移動、ハルニレテラスの木道デッキを散策しながら夕暮れのもみの木イルミネーション点灯を眺める ➔ 17:00 星野温泉トンボの湯で、冷えた身体を檜香る雪見露天風呂で温める ➔ 18:30 ホテルまたは星野エリアのレストランで信州牛ステーキと信州ワインのディナー ➔ 20:00 予約制の軽井沢高原教会「星降る森のクリスマス」へ入場！中庭一面に揺れる無数のランタンキャンドルとパイプオルガンの調べに包まれる感動の夜 ➔ ホテルへ戻り暖炉の灯火を眺めながら寛ぎの就寝。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-emerald-700 text-white rounded text-xs">2日目</span>
      爽やかな高原の朝食ビュッフェと白糸の滝・駅前ショッピング
    </h3>
    <p class="leading-relaxed">
      08:00 雪化粧した浅間山を望むダイニングで高原野菜と焼き立てオムレツの優雅な朝食 ➔ 09:30 チェックアウト後、ドライブまたはタクシーで白糸ハイランドウェイを通り白糸の滝へ ➔ 白銀の雪原と岩肌から湧き出る清流のコントラストを撮影 ➔ 12:00 軽井沢駅前エリアへ戻り、名物「信州手打ちそば」と季節の天ぷらランチ ➔ 13:30 軽井沢プリンスショッピングプラザで冬物ファッションや信州銘菓のお土産を購入 ➔ 16:00 軽井沢駅より北陸新幹線に乗車し帰路へ。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  📊 軽井沢 厳選5ホテルの特徴・温泉・宿泊目安比較一覧
</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
      <tr>
        <th class="p-3">ホテル名</th>
        <th class="p-3">エリア・立地</th>
        <th class="p-3">楽天評価</th>
        <th class="p-3">宿泊目安(1名)</th>
        <th class="p-3">温泉・スパ・設備</th>
        <th class="p-3">ディナー・名物料理</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">万平ホテル</td>
        <td class="p-3">旧軽井沢・閑静な森</td>
        <td class="p-3 font-bold text-amber-700">★ ${hMampei.reviewAverage}</td>
        <td class="p-3">¥${Number(hMampei.hotelMinCharge || 22348).toLocaleString()}〜</td>
        <td class="p-3">登録有形文化財・格式高きバー・サロン</td>
        <td class="p-3">伝統のクラシックフレンチ・アップルパイ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">旧軽井沢KIKYO</td>
        <td class="p-3">旧軽井沢・銀座通り至近</td>
        <td class="p-3 font-bold text-stone-900">★ ${hKikyo.reviewAverage}</td>
        <td class="p-3">¥${Number(hKikyo.hotelMinCharge || 22028).toLocaleString()}〜</td>
        <td class="p-3">大浴場「SILENT SPA」サウナ完備</td>
        <td class="p-3">信州食材を昇華させたモダンフレンチ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ルグラン軽井沢ホテル＆リゾート</td>
        <td class="p-3">南軽井沢・広大な自然</td>
        <td class="p-3 font-bold text-emerald-700">★ ${hLegrand.reviewAverage}</td>
        <td class="p-3">¥${Number(hLegrand.hotelMinCharge || 16170).toLocaleString()}〜</td>
        <td class="p-3">美肌天然温泉「八風温泉」の庭園露天風呂</td>
        <td class="p-3">ミシュラン星シェフ監修の信州フレンチ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ホテルインディゴ軽井沢</td>
        <td class="p-3">南軽井沢・浅間山ビュー</td>
        <td class="p-3 font-bold text-indigo-700">★ ${hIndigo.reviewAverage}</td>
        <td class="p-3">¥${Number(hIndigo.hotelMinCharge || 18000).toLocaleString()}〜</td>
        <td class="p-3">炭酸泉大浴場・サウナ・焚き火ラウンジ</td>
        <td class="p-3">薪火オーブンで焼き上げる信州牛イタリアン</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">軽井沢プリンスホテル イースト</td>
        <td class="p-3">軽井沢駅南口・スキー場直結</td>
        <td class="p-3 font-bold text-teal-700">★ ${hPrince.reviewAverage}</td>
        <td class="p-3">¥${Number(hPrince.hotelMinCharge || 13396).toLocaleString()}〜</td>
        <td class="p-3">専用天然温泉スパ「Forest Hot Spring」</td>
        <td class="p-3">信州産ポーク・信州牛の薪火グリル</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  ❓ 軽井沢クリスマス＆冬旅 よくある質問（FAQ）
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-emerald-950">Q1. 軽井沢高原教会の星降る森のクリスマスはどうやって予約しますか？</h3>
    <p class="text-stone-700 leading-relaxed">
      軽井沢高原教会のクリスマスイベントは完全事前予約制です。例年10月下旬〜11月上旬にかけて公式ウェブサイトで抽選申込および先着順予約が開始されます。週末やクリスマス直前の日程は大変人気が高いため、公式サイトの受付開始日をこまめにチェックして早めに予約を確保することをおすすめします。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-emerald-950">Q2. 冬の軽井沢はどのくらい寒いですか？服装の注意点は？</h3>
    <p class="text-stone-700 leading-relaxed">
      軽井沢は標高が約1,000mあるため、12月の夜間はマイナス5℃からマイナス10℃近くまで冷え込みます。屋外のランタンキャンドル鑑賞で30分〜1時間ほど滞在するため、ロング丈の防風・防寒ダウンコート、厚手の手袋、マフラー、耳が隠れるニット帽、タイツや足用カイロなど、スキー場へ行くのと同等の厳重な防寒着を準備してください。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-emerald-950">Q3. 車で行く場合、スタッドレスタイヤは必要ですか？</h3>
    <p class="text-stone-700 leading-relaxed">
      はい、必須です。たとえ日中に降雪がなくても、夕方以降は路面温度が氷点下となり、溶けた水分が凍りついて透明な氷の膜（ブラックアイスバーン）になります。ノーマルタイヤでの走行は極めて危険ですので、必ず4WD車に高性能スタッドレスタイヤを装着して運転してください。運転に不安のある方は、東京駅から新幹線を利用し、現地ではタクシーや無料送迎バスを活用するのが安全で快適です。
    </p>
  </div>
</div>

<h2 id="internal-links" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  📌 あわせて読みたい信州・長野の観光＆名湯特集
</h2>
<div class="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200 space-y-3 my-6">
  <p class="text-xs text-emerald-900 font-bold mb-2">当サイトでは、長野県の四季折々の魅力や名湯・美食宿ガイドを多数公開しています。</p>
  <ul class="text-xs text-emerald-900 space-y-2 list-disc list-inside">
    <li><a href="/prefectures/nagano/" class="underline font-bold hover:text-emerald-700">長野県の温泉旅館・リゾートホテル完全ガイド（軽井沢・白骨・野沢・白馬）</a></li>
    <li><a href="/posts/karuizawa-hotels-selection-guide" class="underline hover:text-emerald-700">軽井沢の憧れ名門リゾートホテル！クラシック＆温泉付き客室特集</a></li>
    <li><a href="/posts/snow-monkey-jigokudani-shibu-yudanaka-onsen-guide" class="underline hover:text-emerald-700">冬の白銀世界！地獄谷野猿公苑スノーモンキーと渋温泉九湯めぐりガイド</a></li>
    <li><a href="/posts/winter-snow-nagano-hakuba-valley-powder-guide" class="underline hover:text-emerald-700">白馬バレー極上パウダースノーと山岳リゾート温泉ホテル完全ガイド</a></li>
    <li><a href="/posts/winter-family-nagano-karuizawa-prince-snow-guide" class="underline hover:text-emerald-700">冬の軽井沢ファミリー旅行！プリンススノーリゾートと温泉ホテル滞在記</a></li>
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
    hero_image: hMampei.hotelImageUrl,
    gallery: [
      hMampei.hotelImageUrl,
      hKikyo.hotelImageUrl,
      hLegrand.hotelImageUrl,
      hIndigo.hotelImageUrl,
      hPrince.hotelImageUrl
    ],
    hotel_name: "万平ホテル・旧軽井沢KIKYO・ルグラン軽井沢ホテル＆リゾート ほか",
    affiliate_url: hMampei.affiliateUrl,
    categories: [
      "冬のイベント特集",
      "イルミネーション",
      "クリスマス特集",
      "軽井沢",
      "クラシックホテル",
      "天然温泉"
    ],
    price: `¥${Number(hPrince.hotelMinCharge || 13396).toLocaleString()}〜`,
    rating: hMampei.reviewAverage || 4.73,
    review_count: hMampei.reviewCount || 536,
    date: date,
    is_special_feature: true,
    keywords: [
      "軽井沢高原教会 星降る森のクリスマス 2026",
      "軽井沢 クリスマス ランタン 予約 方法",
      "ハルニレテラス もみの木 イルミネーション",
      "万平ホテル 宿泊記 改修 クラシックホテル",
      "旧軽井沢KIKYO キュリオコレクション 口コミ",
      "ルグラン軽井沢ホテル 八風温泉 露天風呂",
      "ホテルインディゴ軽井沢 KAGARIBI ディナー",
      "軽井沢 冬 服装 気温 車 スタッドレス"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["軽井沢", "クリスマス", "軽井沢高原教会", "万平ホテル", "星降る森のクリスマス", "ハルニレテラス", "長野旅行"]
---

# ${title}

2026年12月開催の軽井沢高原教会「星降る森のクリスマス」とハルニレテラスのもみの木イルミネーションを徹底解説！

大正時代から続く森に灯る無数のランタンキャンドル、完全事前予約制の攻略法、白糸の滝の真冬ライトアップ、星野温泉トンボの湯の雪見露天を網羅。

創業130年の歴史を誇る万平ホテルや旧軽井沢の上質隠れ家リゾートなど厳選5宿をご紹介します。

---

## 💡 現地調査に基づくプロの指南！軽井沢クリスマス攻略＆混雑・寒さ対策マニュアル

- **星降る森のクリスマス（軽井沢高原教会）:** 12月1日〜25日開催。本物の炎が灯るランタンキャンドルと教会内の音楽礼拝。公式ウェブサイトからの完全事前予約（日時指定チケット）が必須。
- **ハルニレテラス「クリスマスタウン」:** 清流沿いの木道デッキにイルミネーションが煌めき、巨大もみの木が点灯。夕暮れのブルーアワー（16:30〜）が最も美しい。
- **標高1,000mの極寒に備える完全防寒:** 12月の軽井沢の夜間はマイナス5℃〜10℃近くまで冷え込みます。極厚ロングダウン、裏起毛パンツ、手袋、耳当て、足用カイロが欠かせません。
- **車でのアクセスはスタッドレス必須:** 夕方以降は路面凍結（ブラックアイスバーン）が発生。新幹線＋タクシーの利用も快適でおすすめです。

---

## 🏨 高原の特別な冬を彩る！軽井沢の厳選名門ホテル＆温泉リゾート5選

### 1. 万平ホテル（長野県北佐久郡軽井沢町）
- **特徴:** 創業130年。ジョン・レノンゆかりの日本最高峰クラシックホテル。登録有形文化財の重厚な空間、伝統のフランス料理とロイヤルミルクティー。
- **宿泊目安:** 1名 ¥${Number(hMampei.hotelMinCharge || 22348).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hMampei.reviewAverage}（${hMampei.reviewCount}件）
- 👉 [万平ホテルの空室・宿泊プランを見る](${hMampei.affiliateUrl})

### 2. 旧軽井沢ＫＩＫＹＯキュリオ・コレクションｂｙヒルトン（長野県北佐久郡軽井沢町）
- **特徴:** 旧軽井沢銀座通り至近の閑静な隠れ家。大浴場「SILENT SPA」とサウナ完備。信州食材を昇華させたモダンフレンチダイニング。
- **宿泊目安:** 1名 ¥${Number(hKikyo.hotelMinCharge || 22028).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hKikyo.reviewAverage}（${hKikyo.reviewCount}件）
- 👉 [旧軽井沢ＫＩＫＹＯの空室・宿泊プランを見る](${hKikyo.affiliateUrl})

### 3. ルグラン軽井沢ホテル＆リゾート（長野県北佐久郡軽井沢町）
- **特徴:** 南軽井沢の7万坪の森に佇む欧風リゾート。浅間山を一望、希少な天然温泉「八風温泉」の庭園露天風呂とミシュラン星シェフ監修フレンチ。
- **宿泊目安:** 1名 ¥${Number(hLegrand.hotelMinCharge || 16170).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hLegrand.reviewAverage}（${hLegrand.reviewCount}件）
- 👉 [ルグラン軽井沢ホテル＆リゾートの空室・宿泊プランを見る](${hLegrand.affiliateUrl})

### 4. ホテルインディゴ軽井沢　ｂｙ　ＩＨＧ（長野県北佐久郡軽井沢町）
- **特徴:** 浅間山ビューと別荘ライクな洗練空間。炭酸泉大浴場・サウナ完備。薪火オーブンで焼き上げる信州牛イタリアン。
- **宿泊目安:** 1名 ¥${Number(hIndigo.hotelMinCharge || 18000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hIndigo.reviewAverage}（${hIndigo.reviewCount}件）
- 👉 [ホテルインディゴ軽井沢の空室・宿泊プランを見る](${hIndigo.affiliateUrl})

### 5. 軽井沢プリンスホテル　イースト（長野県北佐久郡軽井沢町）
- **特徴:** 軽井沢駅南口至近・ゲレンデ直結。イースト本館宿泊者限定の森の温泉スパ「Forest Hot Spring」と信州食材の薪火グリル。
- **宿泊目安:** 1名 ¥${Number(hPrince.hotelMinCharge || 13396).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hPrince.reviewAverage}（${hPrince.reviewCount}件）
- 👉 [軽井沢プリンスホテル イーストの空室・宿泊プランを見る](${hPrince.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **軽井沢高原教会:** ${wKogen.extract || '大正期に内村鑑三らが集った講習会を起源とする歴史あるプロテスタント教会。12月の「星降る森のクリスマス」では中庭に無数のランタンが灯ります。'}
- **星野温泉:** ${wHoshino.extract || '大正4年開湯、文豪に愛された名湯。日帰り温泉「トンボの湯」では軟らかい美肌の湯と雪見露天風呂が楽しめます。'}
- **白糸の滝:** ${wShiraito.extract || '湾曲した岸壁から数百条の清流が流れ落ちる名瀑。冬季は氷と滝がライトアップされる幻想的な情景が出現します。'}
- **旧軽井沢:** ${wKyuKaru.extract || '旧中山道軽井沢宿から発展した観光の中心地。歴史ある銀座通りには老舗ベーカリーや工芸品店が並びます。'}

---

## 🗺️ 軽井沢を満喫する 1泊2日モデルコース

- **1日目:** 軽井沢駅到着 ➔ 万平ホテルカフェテラスで伝統のロイヤルミルクティー ➔ 旧軽井沢銀座通り散策 ➔ ハルニレテラス夕暮れイルミネーション ➔ 星野温泉トンボの湯で雪見風呂 ➔ 信州牛ディナー ➔ 軽井沢高原教会「星降る森のクリスマス」ランタンキャンドル鑑賞
- **2日目:** 雪景色を望む朝食ビュッフェ ➔ 白糸の滝冬景色 ➔ 信州手打ちそばランチ ➔ 軽井沢プリンスショッピングプラザでお土産購入 ➔ 新幹線で帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. 軽井沢高原教会のクリスマスは予約なしでも見学できますか？**  
A. いいえ、混雑緩和のため完全事前予約制となっています。公式サイトで事前予約チケットを必ず確保してからお出かけください。

**Q2. 車でのアクセス時の注意点は？**  
A. 12月は路面凍結（ブラックアイスバーン）が多発するため、スタッドレスタイヤの装着が必須です。

**Q3. 夜間の防寒対策はどのようなものが必要ですか？**  
A. マイナス5℃〜10℃まで下がるため、極厚ロングダウン、ニット帽、厚手の手袋、マフラー、靴下2枚履きなど完全防寒が必要です。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【軽井沢】軽井沢高原教会「星降る森のクリスマス2026」完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/${slug}/)
`;

  return { postData, noteMarkdown };
};
