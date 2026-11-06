// scripts/new_articles/article38_kanazawa.js
module.exports = function buildArticle38(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-ishikawa-kanazawa-kenrokuen-yukitsuri-kanogani-hotels-guide";
  const title = "【石川・金沢】兼六園「雪吊り」ライトアップ2026-2027＆冬の味覚の頂点「加能ガニ・香箱ガニ」完全攻略！12月末まで限定の贅沢カニ会席と金沢城・ひがし茶屋街散策、名湯を愉しむ名門宿5選";
  const description = "北陸の冬を象徴する国指定特別名勝「兼六園の雪吊りライトアップ」。11月6日のカニ漁解禁から12月29日頃までのわずか2ヶ月弱しか味わえない幻の「香箱ガニ（雌ズワイガニ）」と極上「加能ガニ」の食べ比べ、金沢城・ひがし茶屋街の雪景色散策を徹底ガイド。自家源泉の琥珀色天然温泉や老舗料亭旅館の贅を尽くしたカニ尽くし会席を味わう至高のホテル・名旅館5選を網羅。";
  const date = "2026-11-06";
  const prefecture = "石川県";
  const area = "金沢・加賀";

  // ホテル抽出
  const hSanraku = hotels.find(h => h.hotelName.includes('山楽')) || hotels[0];
  const hNono = hotels.find(h => h.hotelName.includes('野乃')) || hotels[1];
  const hMitsui = hotels.find(h => h.hotelName.includes('三井ガーデン')) || hotels[2];
  const hChaya = hotels.find(h => h.hotelName.includes('金沢茶屋')) || hotels[3];
  const hMatsusaki = hotels.find(h => h.hotelName.includes('まつさき')) || hotels[4];

  const wKenrokuen = wiki["兼六園"] || {};
  const wKanazawaCastle = wiki["金沢城"] || {};
  const wHigashi = wiki["ひがし茶屋街"] || {};
  const wOmicho = wiki["近江町市場"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-red-950 via-amber-950 to-stone-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-red-800/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-red-300 font-extrabold text-xs tracking-wider">
      <span>🦀</span><span>2026-2027冬 金沢兼六園雪吊りライトアップ＆加能ガニ・香箱ガニ 最新攻略ガイド</span>
    </div>
    <p class="text-xs text-red-100 leading-relaxed">
      12月末までしか食べられない幻の香箱ガニ！雪吊り輝く兼六園と金沢城、美肌の天然温泉に包まれる至福の冬旅。
    </p>
  </div>
  <a href="${hSanraku.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-red-500 hover:bg-red-400 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    🦀 金沢白鳥路 ホテル山楽の空室・プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 mb-4">
  白銀の庭園美と12月末までの海の宝石！兼六園「雪吊り」と金沢冬ガニ（加能ガニ・香箱ガニ）が誘う極上旅
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  加賀百万石の栄華を今に伝える城下町・金沢。冬の訪れを告げる最大の風物詩といえば、国指定特別名勝「兼六園」の唐崎松をはじめとする名木に施される伝統の技「雪吊り（ゆきづり）」です。湿り気を多く含み重たい北陸特有の雪から枝を守るため、熟練の庭師たちが数百本の縄を円錐状に張り巡らせる幾何学模様は、まさに自然と人間が織りなす究極の造形美。初冬の11月から12月、そして雪深くなる1月にかけて開催される「金沢城・兼六園四季物語（冬の段ライトアップ）」では、最新の温かな光に照らし出された雪吊りが夜空と霞ヶ池の水面に黄金色に浮かび上がり、言葉を失うほどの静寂と幽玄の世界を創り出します。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  そして、この時期の金沢を訪れる旅人にとって最大のハイライトとなるのが、日本海が育む冬の味覚の王者「カニ」です。毎年11月6日に一斉に解禁される日本海のズワイガニ漁。石川県産のブランドオスのズワイガニは「加能ガニ（かのうがに）」と呼ばれ、青いタグが付けられたその身は絹のように繊細で、濃密な甘みとコク深いカニ味噌が詰まっています。さらに見逃せないのが、雌のズワイガニである「香箱ガニ（こうばこがに）」。甲羅の中にぎっしりと詰まったオレンジ色の「内子（うちこ）」、プチプチと弾ける「外子（そとこ）」、そして濃厚な味噌とほぐし身のハーモニーは、一度食べたら忘れられない禁断の美味。資源保護のため**漁期は例年11月6日から12月29日頃までのわずか2ヶ月足らず**に厳格に限定されており、「本物の香箱ガニを味わうなら12月中に金沢へ行くしかない」と言われる所以です。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  兼六園の夜景と冬の味覚を心ゆくまで堪能した後は、しっとりとした情緒が漂う「ひがし茶屋街」や「主計町茶屋街」の石畳をそぞろ歩き、金沢市内に湧出する自家源泉の琥珀色天然温泉に身を委ねる贅沢。雪吊りの庭園、焼きガニやカニ刺し・甲羅酒の香ばしい薫り、そして名門宿の極上のホスピタリティが融合した、冬の金沢でしか体験できないプレミアムな旅をお届けします。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-6">
  💡 旅のプロ直伝！兼六園雪吊り鑑賞＆香箱ガニ堪能・冬の金沢攻略マニュアル
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-red-100 text-red-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">雪吊りライトアップ＆冬景色ベストポイント</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>唐崎松（からさきのまつ）と霞ヶ池の水鏡:</strong> 兼六園を象徴する樹齢数百年のみごとな黒松。池の周囲から徽軫灯籠（ことじとうろう）越しに眺める雪吊りの姿は金沢随一の絶景構図です。</p>
      <p>② <strong>金沢城公園・玉泉院丸庭園のライトアップ:</strong> 兼六園に隣接する金沢城の石垣と白漆喰壁が光に浮かび、玉泉院丸庭園では音楽と連動した光の演出が繰り広げられます（夜間無料開放日あり）。</p>
      <p>③ <strong>ひがし茶屋街の雪夜景:</strong> 出格子（木虫籠）から漏れる行灯の光が石畳の雪に反射するトワイライトタイム。観光客が引けた夕暮れから夜の静寂な散策が最も風情豊かです。</p>
      <p>④ <strong>近江町市場のカニ解禁熱気:</strong> 「金沢の台所」近江町市場にぎっしりと並ぶ茹でたての香箱ガニや生きた加能ガニ。市場内の海鮮丼店や居酒屋で昼からカニ三昧が楽しめます。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">カニ選び・気候対策</span>
      <h3 class="text-base font-bold text-stone-900">香箱ガニの食べ方・雪道と足元の注意点</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【香箱ガニを確実に食べる予約術】</strong> 香箱ガニは12月末で漁期が終了するため、12月の金沢旅行の宿予約では必ず「香箱ガニ付」「活カニ懐石」と明記された夕食プランを早期確保してください。市場や居酒屋でも夕方には売り切れる人気です。</p>
      <p><strong>【冬の金沢の気候「弁当忘れても傘忘れるな」】</strong> 北陸の冬は「雨雪混じりのみぞれ」が降ることが多く、湿度が高く芯から冷え込みます。防水撥水の折りたたみ傘、防水加工のスノーブーツ（または革靴用防水カバー）、撥水コートが不可欠です。</p>
      <p><strong>【融雪装置（消雪パイプ）による水はね注意】</strong> 金沢市街地の道路や歩道には地下水を撒いて雪を溶かす消雪パイプが多く設置されています。路面が水浸しになるため、スニーカーやヒールは避け、防水ハイカットシューズが安心です。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  🏨 雪吊り鑑賞に至近＆極上カニ会席を堪能！金沢の厳選名宿5選
</h2>

<!-- 宿1: 金沢白鳥路 ホテル山楽 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-red-100 text-red-900 font-black text-xs rounded-full">兼六園・金沢城まで徒歩5分・ステンドグラス輝く大正ロマン＆美肌の自家源泉天然温泉</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 金沢白鳥路　ホテル山楽（石川県金沢市丸の内）</h3>
    </div>
    <span class="px-3 py-1.5 bg-red-50 border border-red-300 text-red-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hSanraku.reviewAverage}（${hSanraku.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hSanraku.hotelImageUrl}" alt="${hSanraku.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hSanraku.roomImageUrl || hSanraku.hotelImageUrl}" alt="${hSanraku.hotelName} 温泉大浴場" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 金沢城公園の「白鳥路」に隣接し、兼六園まで徒歩約5分という雪吊りライトアップ鑑賞にこれ以上ない絶好の立地を誇るクラシックホテル。館内には精緻なステンドグラスや九谷焼、加賀友禅が配され、大正ロマンの優美な空気に包まれます。
      </p>
      <p>
        <strong>【金沢市内では希少な自家源泉「白鳥路温泉」】</strong> 地下から湧出する炭酸水素塩泉（美肌の湯）は、とろりとした琥珀色の湯ざわりが特徴。冷え切った身体を芯からじんわりと温め、湯上がりはお肌がつるつるになると女性客からも絶賛されています。
      </p>
      <p>
        <strong>【極上カニ懐石と名物朝食ビュッフェ】</strong> 夕食は旬の加能ガニや香箱ガニ、のどぐろを贅沢に盛り込んだ加賀会席。朝食ビュッフェでは金沢名物じぶ煮や車麩の卵とじ、朝獲れ海鮮丼など石川の滋味豊かな郷土料理を好きなだけ堪能できます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hSanraku.hotelMinCharge).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hSanraku.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-red-700 hover:bg-red-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 天然温泉 加賀の宝泉 御宿 野乃金沢 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">近江町市場徒歩1分・全館畳敷きの和風プレミアム＆最上階天然温泉露天風呂・サウナ</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 天然温泉　加賀の宝泉　御宿　野乃金沢（石川県金沢市下堤町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hNono.reviewAverage}（${hNono.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hNono.hotelImageUrl}" alt="${hNono.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hNono.roomImageUrl || hNono.hotelImageUrl}" alt="${hNono.hotelName} 露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 「金沢の台所」近江町市場の目の前に位置する全館畳敷きの和風プレミアムホテル。玄関で靴を脱ぎ、い草の香る畳の上を素足で歩く心地よさは旅の解放感を一気に高めてくれます。
      </p>
      <p>
        <strong>【最上階の天然温泉大浴場＆高温サウナ】</strong> 13階最上階には自家源泉を引き込んだ「加賀の宝泉」を完備。金沢の街並みや雪景色を見晴らす展望露天風呂や本格的なドライサウナ、強冷水風呂、外気浴スペースが整っており、サウナ愛好家からも絶大な人気です。
      </p>
      <p>
        <strong>【いくら盛り放題の豪華朝食＆夜鳴きそば】</strong> 朝食ビュッフェでは、いくらや甘エビ、ブリを自分の好みで豪快に盛り付ける「お好み海鮮丼」が大人気。夜にはドーミーイン名物の特製あっさり醤油ラーメン「夜鳴きそば」が無料で振る舞われます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hNono.hotelMinCharge).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hNono.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 三井ガーデンホテル金沢 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-100 text-stone-900 font-black text-xs rounded-full">金沢城公園徒歩圏・加賀友禅と金箔をあしらった洗練のアート空間＆最上階展望大浴場</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 三井ガーデンホテル金沢（石川県金沢市上堤町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-stone-50 border border-stone-300 text-stone-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hMitsui.reviewAverage}（${hMitsui.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMitsui.hotelImageUrl}" alt="${hMitsui.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMitsui.roomImageUrl || hMitsui.hotelImageUrl}" alt="${hMitsui.hotelName} 展望大浴場" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 百万石通りに面し、近江町市場や金沢城公園、香林坊へも歩いてアクセスできる好立地。加賀友禅の繊細な色彩や金沢の伝統工芸を現代的に昇華させた洗練されたインテリアが、上質な大人の旅を演出します。
      </p>
      <p>
        <strong>【最上階のパノラマ展望大浴場】</strong> 最上階13階に位置する宿泊者専用大浴場からは、金沢城公園の豊かな緑や冬の雪景色、金沢の街並みを一望。ガラス張りの広々とした浴槽でゆったりと手足を伸ばせます。
      </p>
      <p>
        <strong>【金沢おでんとおばんざい朝食】</strong> レストラン「万照」では、金沢の伝統料理である「金沢おでん（車麩、バイ貝、赤玉等）」をはじめ、地元加賀野菜を使った彩り豊かな小鉢おばんざいを取り揃えた和洋ビュッフェが好評です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hMitsui.hotelMinCharge).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hMitsui.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 加賀屋グループ 料理旅館 金沢茶屋 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-rose-100 text-rose-900 font-black text-xs rounded-full">金沢駅東口徒歩3分・和倉温泉「加賀屋」のおもてなしを受け継ぐ至高の割烹旅館</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 加賀屋グループ　料理旅館　金沢茶屋（石川県金沢市本町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-rose-50 border border-rose-300 text-rose-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hChaya.reviewAverage}（${hChaya.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hChaya.hotelImageUrl}" alt="${hChaya.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hChaya.roomImageUrl || hChaya.hotelImageUrl}" alt="${hChaya.hotelName} 料理" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 金沢駅兼六園口（東口）から徒歩わずか3分、数寄屋造りの佇まいが迎える名門料理旅館。日本一の旅館として名高い和倉温泉「加賀屋」の直営であり、細やかな心づくしのおもてなしと至高の料理を堪能できます。
      </p>
      <p>
        <strong>【輪島塗と九谷焼で彩る活ガニ懐石】</strong> 冬の夕食は、料理長自ら近江町市場で目利きした活ズワイガニ（加能ガニ）や香箱ガニを贅沢に使用。焼きガニ、カニ刺し、甲羅酒、カニすき鍋など、伝統の九谷焼や輪島塗の器に盛られた芸術的な懐石料理は圧巻の一言です。
      </p>
      <p>
        <strong>【檜と古代漆風呂の癒やし】</strong> 館内には香る檜風呂と風情豊かな古代漆風呂の大浴場を備え、駅前とは思えない静寂の中で旅の疲れを解きほぐせます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hChaya.hotelMinCharge).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hChaya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-rose-700 hover:bg-rose-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 金沢辰口温泉 まつさき -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">創業天保7年・文豪・泉鏡花ゆかりの広大な名園露天風呂と最高峰カニ尽くし</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 金沢辰口温泉　まつさき（石川県能美市辰口町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hMatsusaki.reviewAverage}（${hMatsusaki.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMatsusaki.hotelImageUrl}" alt="${hMatsusaki.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMatsusaki.roomImageUrl || hMatsusaki.hotelImageUrl}" alt="${hMatsusaki.hotelName} 庭園露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 金沢市街地から車で約25分、金沢の奥座敷として1400年の歴史を誇る辰口温泉に佇む名門老舗旅館。約1,500坪の回遊式日本庭園「松泉湖庭園」は冬には見事な雪吊りと雪景色に包まれます。
      </p>
      <p>
        <strong>【開湯1400年の名湯と展望庭園露天】</strong> 自家源泉から湧出する弱アルカリ性ナトリウム・カルシウム塩化物泉は「美肌と傷癒やしの名湯」。庭園を望む木造りの大浴場や客室専用露天風呂では、舞い散る雪を眺めながらの極上雪見風呂が叶います。
      </p>
      <p>
        <strong>【極上加能ガニ尽くし懐石】</strong> タグ付き加能ガニを贅沢にお一人様一杯以上使用したフルコースは、刺身・茹で・焼き・甲羅味噌焼き・雑炊まで余すところなく堪能できる一生に一度は味わいたい極上の味覚です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hMatsusaki.hotelMinCharge).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hMatsusaki.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="sightseeing" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6 leading-relaxed">
  兼六園の雪吊りやカニグルメと合わせて巡りたい、金沢を代表する名所をWikipedia公式データとともにご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-red-700 font-bold text-sm">📍 兼六園（特別名勝・唐崎松雪吊り）</span>
    </div>
    <img src="${wKenrokuen.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/9004/9004.jpg'}" alt="兼六園" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wKenrokuen.extract || '兼六園は、石川県金沢市にある国の特別名勝に指定された日本庭園。水戸偕楽園、岡山後楽園と並ぶ日本三名園の一つで、冬の唐崎松の雪吊りは全国的に有名な風物詩です。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-red-700 font-bold text-sm">📍 金沢城公園（菱櫓・五十間長屋・橋爪門）</span>
    </div>
    <img src="${wKanazawaCastle.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/167963/167963.jpg'}" alt="金沢城" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wKanazawaCastle.extract || '金沢城は、加賀百万石前田家の居城であった城郭。菱櫓、五十間長屋、橋爪門続櫓が木造で忠実に復元され、冬の夜には純白の城壁が美しくライトアップされます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-red-700 font-bold text-sm">📍 ひがし茶屋街（重要伝統的建造物群保存地区）</span>
    </div>
    <img src="${wHigashi.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/4707/4707.jpg'}" alt="ひがし茶屋街" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wHigashi.extract || 'ひがし茶屋街は、金沢市東山の浅野川沿いに広がる茶屋町。美しい出格子（木虫籠）の町家が連なり、金箔工芸店や町家カフェ、格式高い料亭が立ち並ぶ国の重要伝統的建造物群保存地区です。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-red-700 font-bold text-sm">📍 近江町市場（金沢市民の台所・カニ市場）</span>
    </div>
    <img src="${wOmicho.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/182423/182423.jpg'}" alt="近江町市場" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wOmicho.extract || '近江町市場は、享保6年（1721年）から300年以上続く金沢の中心市場。日本海の新鮮な魚介類や加賀野菜が並び、11月のカニ解禁以降は全国からの観光客で大いに賑わいます。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  🗺️ 雪吊りライトアップと冬ガニを味わい尽くす 1泊2日黄金モデルコース
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-red-700 text-white rounded text-xs">1日目</span>
      金沢駅「鼓門」から近江町市場・夕暮れのひがし茶屋街と兼六園雪吊り夜景へ
    </h3>
    <p class="leading-relaxed">
      11:30 北陸新幹線で金沢駅到着 ➔ もてなしドームと木造の「鼓門」前で記念撮影 ➔ 12:00 近江町市場へ移動し、旬の香箱ガニやのどぐろを盛り込んだ贅沢海鮮丼ランチ ➔ 13:30 ひがし茶屋街で町家カフェ巡り（金箔ソフトクリームや抹茶スイーツ） ➔ 15:30 金沢城公園の五十間長屋を散策 ➔ 16:30 ホテルへチェックインし天然温泉でひと休み ➔ 17:30 兼六園の冬の段ライトアップへ！水面に映る唐崎松の雪吊りと黄金色の光に息をのむ ➔ 19:30 宿でタグ付き加能ガニの焼きガニ・カニ刺しと香箱ガニの内子・外子を味わうフルコース会席 ➔ 石川の銘酒「手取川」「菊姫」の熱燗で乾杯。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-red-700 text-white rounded text-xs">2日目</span>
      朝の静かな兼六園散策と金沢21世紀美術館・加賀名菓のお買い物
    </h3>
    <p class="leading-relaxed">
      07:30 宿の琥珀色天然温泉で朝風呂 ➔ 08:30 いくら・海鮮食べ放題や金沢おでんの朝食 ➔ 09:30 一般開園直後の静寂な兼六園を再訪（朝の澄んだ空気の中で雪吊りを撮影） ➔ 11:00 金沢21世紀美術館でレアンドロのエールリッヒ「スイミング・プール」を鑑賞 ➔ 13:00 長町武家屋敷跡で雪から土塀を守る「薦掛け（こもがけ）」の情緒を味わう ➔ 14:30 金沢駅ビル「あんと」で加賀銘菓（きんつば、柴舟、カステラ）やカニ珍味を購入 ➔ 16:00 北陸新幹線かがやき号に乗車し帰路へ。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  📊 金沢 厳選5宿のスペック比較一覧
</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
      <tr>
        <th class="p-3">宿名</th>
        <th class="p-3">立地・エリア</th>
        <th class="p-3">楽天評価</th>
        <th class="p-3">宿泊目安(1名)</th>
        <th class="p-3">温泉・大浴場特徴</th>
        <th class="p-3">自慢の料理・カニプラン</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">金沢白鳥路 ホテル山楽</td>
        <td class="p-3">兼六園・金沢城徒歩5分</td>
        <td class="p-3 font-bold text-red-700">★ ${hSanraku.reviewAverage}</td>
        <td class="p-3">¥${Number(hSanraku.hotelMinCharge).toLocaleString()}〜</td>
        <td class="p-3">自家源泉の琥珀色天然温泉「白鳥路温泉」</td>
        <td class="p-3">加能ガニ・香箱ガニ加賀会席・じぶ煮朝食</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">御宿 野乃金沢</td>
        <td class="p-3">近江町市場目の前・徒歩1分</td>
        <td class="p-3 font-bold text-red-700">★ ${hNono.reviewAverage}</td>
        <td class="p-3">¥${Number(hNono.hotelMinCharge).toLocaleString()}〜</td>
        <td class="p-3">最上階13階天然温泉露天風呂＆高温サウナ</td>
        <td class="p-3">いくら盛り放題海鮮丼朝食＆夜鳴きそば</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">三井ガーデンホテル金沢</td>
        <td class="p-3">百万石通り・近江町徒歩3分</td>
        <td class="p-3 font-bold text-red-700">★ ${hMitsui.reviewAverage}</td>
        <td class="p-3">¥${Number(hMitsui.hotelMinCharge).toLocaleString()}〜</td>
        <td class="p-3">最上階展望パノラマ大浴場</td>
        <td class="p-3">金沢おでん＆加賀野菜おばんざいビュッフェ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">加賀屋グループ 金沢茶屋</td>
        <td class="p-3">金沢駅東口徒歩3分</td>
        <td class="p-3 font-bold text-red-700">★ ${hChaya.reviewAverage}</td>
        <td class="p-3">¥${Number(hChaya.hotelMinCharge).toLocaleString()}〜</td>
        <td class="p-3">檜風呂・古代漆風呂大浴場</td>
        <td class="p-3">九谷焼・輪島塗で供される活ズワイガニ割烹懐石</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">金沢辰口温泉 まつさき</td>
        <td class="p-3">金沢奥座敷・辰口温泉</td>
        <td class="p-3 font-bold text-red-700">★ ${hMatsusaki.reviewAverage}</td>
        <td class="p-3">¥${Number(hMatsusaki.hotelMinCharge).toLocaleString()}〜</td>
        <td class="p-3">1500坪庭園雪見露天風呂・客室露天</td>
        <td class="p-3">タグ付き活加能ガニ一杯丸ごとフルコース</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  ❓ 金沢兼六園雪吊り＆カニ旅行 よくある質問（FAQ）
</h2>

<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q1. 兼六園の雪吊りはいつからいつまで見られますか？ライトアップの日程は？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 兼六園の雪吊り作業は毎年11月1日から始まり、11月中旬には園内すべての松に雪吊りが完成します。翌年3月中旬の取り外しまで鑑賞可能です。「金沢城・兼六園四季物語（冬の段ライトアップ）」は例年1月下旬〜2月の特定日（週末など）を中心に開催され、期間中の夜間は入園無料で幻想的なライトアップを楽しめます。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q2. 「加能ガニ」と「香箱ガニ」の違いは何ですか？いつまで食べられますか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. どちらも日本海のズワイガニですが、「加能ガニ」はオスのズワイガニで、足が長く身がぎっしり詰まり、濃厚な味噌が特徴です（漁期は11月6日〜翌年3月20日）。一方「香箱ガニ」は雌のズワイガニで、サイズは小ぶりながら甲羅の中の赤い「内子」とプチプチの「外子」が絶品です。資源保護のため**香箱ガニの漁期は11月6日から12月29日頃までの約2ヶ月間限定**となっており、12月を過ぎると生鮮での提供は終了します。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q3. 冬の金沢を観光する際の服装や靴の選び方は？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 金沢の冬は雪だけでなく、水分を多く含んだ冷たい雨やみぞれが頻繁に降ります。道路には消雪パイプからの水が出ているため、靴は完全防水のスノーブーツまたは防水シューズが必須です。防風・撥水性の高いダウンジャケットやコート、マフラー、手袋、そして撥水性の高い折りたたみ傘を必ず常備してください。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q4. 金沢駅からの市内移動はバスとタクシーのどちらが便利ですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 金沢駅東口バスターミナルからは「城下まち金沢周遊バス」が頻繁に運行しており、兼六園、金沢城、ひがし茶屋街、近江町市場、21世紀美術館など主要観光地を1周約45分で網羅しています。交通系ICカード（Suica、ICOCA等）が利用可能です。複数人での移動や寒い夜間のライトアップ移動には、初乗り料金が手頃なタクシーの利用も快適です。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-100 border border-stone-200 text-center space-y-3">
  <h3 class="text-base font-bold text-stone-900">石川・北陸エリアの温泉＆冬のカニ観光特集も合わせてチェック！</h3>
  <ul class="text-xs text-stone-600 space-y-1.5 inline-block text-left">
    <li>👉 <a href="/posts/note-87/" class="text-red-800 hover:text-red-600 underline">越前がに＆松葉ガニ解禁！日本海の極上カニ温泉旅館5選</a></li>
    <li>👉 <a href="/posts/note-16/" class="text-red-800 hover:text-red-600 underline">タグ付き越前ガニ＆松葉ガニを本場で味わう！カニ尽くし名宿特集</a></li>
    <li>👉 <a href="/ishikawa/" class="text-red-800 hover:text-red-600 underline">石川県の温泉地・宿・旬の観光特集一覧</a></li>
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
    image: hSanraku.hotelImageUrl,
    other_images: [
      hNono.hotelImageUrl,
      hMitsui.hotelImageUrl,
      hChaya.hotelImageUrl,
      hMatsusaki.hotelImageUrl
    ],
    hotel_name: "金沢白鳥路　ホテル山楽・天然温泉　加賀の宝泉　御宿　野乃金沢 ほか",
    affiliate_url: hSanraku.affiliateUrl,
    categories: [
      "冬のイベント特集",
      "雪景色・雪吊り",
      "兼六園",
      "カニ料理・香箱ガニ",
      "加能ガニ",
      "天然温泉",
      "金沢グルメ"
    ],
    price: `¥${Number(hNono.hotelMinCharge || 6610).toLocaleString()}〜`,
    rating: hSanraku.reviewAverage || 4.56,
    review_count: hSanraku.reviewCount || 1000,
    date: date,
    is_special_feature: true,
    keywords: [
      "兼六園 雪吊り ライトアップ 2026 2027 時期",
      "香箱ガニ 金沢 時期 12月 おすすめ 宿",
      "加能ガニ 活カニ 懐石 旅館 金沢",
      "金沢白鳥路 ホテル山楽 宿泊記 天然温泉",
      "御宿 野乃金沢 朝食 いくら 口コミ",
      "金沢茶屋 カニ 料理旅館 加賀屋",
      "金沢 冬 服装 靴 雪道 観光"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["金沢", "兼六園", "雪吊り", "加能ガニ", "香箱ガニ", "天然温泉", "ホテル山楽", "石川旅行"]
---

# ${title}

北陸の冬を象徴する国指定特別名勝「兼六園の雪吊りライトアップ」。

11月6日のカニ漁解禁から12月29日頃までのわずか2ヶ月弱しか味わえない幻の「香箱ガニ（雌ズワイガニ）」と極上「加能ガニ」の食べ比べ、金沢城・ひがし茶屋街の雪景色散策を徹底ガイド。

自家源泉の琥珀色天然温泉や老舗料亭旅館の贅を尽くしたカニ尽くし会席を味わう至高のホテル・名旅館5選を網羅します。

---

## 💡 旅のプロ直伝！兼六園雪吊り鑑賞＆香箱ガニ堪能・冬の金沢攻略マニュアル

- **唐崎松と霞ヶ池の水鏡:** 徽軫灯籠越しに眺める雪吊りの姿は金沢随一の絶景構図。夕暮れ時のトワイライトが最も妖艶。
- **香箱ガニは12月末で漁期終了:** 内子と外子がぎっしり詰まった香箱ガニは12月29日頃に禁漁となるため、12月中の予約確保が必須。
- **北陸特有の気候と足元対策:** 冷たいみぞれと消雪パイプの水に対応するため、完全防水のスノーブーツと撥水ダウンが不可欠。
- **ひがし茶屋街の夜散策:** 観光客が引けた夕方17時以降、行灯の光が石畳の雪を照らす静寂な時間帯が最高にロマンチック。

---

## 🏨 雪吊り鑑賞に至近＆極上カニ会席を堪能！金沢の厳選名宿5選

### 1. 金沢白鳥路　ホテル山楽（石川県金沢市丸の内）
- **特徴:** 兼六園・金沢城まで徒歩5分。大正ロマンのステンドグラス空間と琥珀色の自家源泉「白鳥路温泉」。極上加能ガニ・香箱ガニ会席。
- **宿泊目安:** 1名 ¥${Number(hSanraku.hotelMinCharge).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hSanraku.reviewAverage}（${hSanraku.reviewCount}件）
- 👉 [金沢白鳥路 ホテル山楽の空室・宿泊プランを見る](${hSanraku.affiliateUrl})

### 2. 天然温泉　加賀の宝泉　御宿　野乃金沢（石川県金沢市下堤町）
- **特徴:** 近江町市場徒歩1分。全館畳敷きの和風プレミアム。最上階13階の天然温泉露天風呂＆高温サウナ、いくら盛り放題の豪華朝食。
- **宿泊目安:** 1名 ¥${Number(hNono.hotelMinCharge).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hNono.reviewAverage}（${hNono.reviewCount}件）
- 👉 [御宿 野乃金沢の空室・宿泊プランを見る](${hNono.affiliateUrl})

### 3. 三井ガーデンホテル金沢（石川県金沢市上堤町）
- **特徴:** 百万石通り沿い・金沢城至近。加賀友禅と金箔アートが彩るモダン空間。最上階パノラマ展望大浴場と金沢おでん朝食。
- **宿泊目安:** 1名 ¥${Number(hMitsui.hotelMinCharge).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hMitsui.reviewAverage}（${hMitsui.reviewCount}件）
- 👉 [三井ガーデンホテル金沢の空室・宿泊プランを見る](${hMitsui.affiliateUrl})

### 4. 加賀屋グループ　料理旅館　金沢茶屋（石川県金沢市本町）
- **特徴:** 金沢駅東口徒歩3分。和倉温泉「加賀屋」のおもてなしを受け継ぐ名門料理旅館。輪島塗や九谷焼で供される活ズワイガニ割烹懐石。
- **宿泊目安:** 1名 ¥${Number(hChaya.hotelMinCharge).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hChaya.reviewAverage}（${hChaya.reviewCount}件）
- 👉 [金沢茶屋の空室・宿泊プランを見る](${hChaya.affiliateUrl})

### 5. 金沢辰口温泉　まつさき（石川県能美市辰口町）
- **特徴:** 創業天保7年・文豪泉鏡花ゆかりの老舗旅館。1,500坪の回遊式日本庭園雪見露天風呂と、タグ付き活加能ガニ一杯丸ごとフルコース。
- **宿泊目安:** 1名 ¥${Number(hMatsusaki.hotelMinCharge).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hMatsusaki.reviewAverage}（${hMatsusaki.reviewCount}件）
- 👉 [金沢辰口温泉 まつさきの空室・宿泊プランを見る](${hMatsusaki.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **兼六園:** ${wKenrokuen.extract || '水戸偕楽園、岡山後楽園と並ぶ日本三名園の一つ。冬の唐崎松雪吊りは日本を代表する庭園美の極致。'}
- **金沢城公園:** ${wKanazawaCastle.extract || '加賀百万石前田家の居城。五十間長屋や橋爪門が忠実に復元され、白漆喰の城壁が雪景色に映えます。'}
- **ひがし茶屋街:** ${wHigashi.extract || '浅野川沿いに広がる国の重要伝統的建造物群保存地区。出格子（木虫籠）の町家が連なり情緒豊か。'}
- **近江町市場:** ${wOmicho.extract || '享保6年から続く金沢市民の台所。冬には獲れたての加能ガニや香箱ガニが並び熱気に包まれます。'}

---

## 🗺️ 兼六園雪吊りと冬ガニを満喫する 1泊2日モデルコース

- **1日目:** 金沢駅「鼓門」到着 ➔ 近江町市場でカニ海鮮丼ランチ ➔ ひがし茶屋街散策 ➔ 金沢城公園 ➔ ホテルチェックイン＆天然温泉 ➔ 17:30 兼六園雪吊りライトアップ鑑賞 ➔ 宿で加能ガニ＆香箱ガニの活ガニ懐石と地酒
- **2日目:** 朝の天然温泉 ➔ いくら・郷土料理朝食 ➔ 朝の兼六園散策 ➔ 金沢21世紀美術館 ➔ 長町武家屋敷跡 ➔ 金沢駅ビルでお土産購入 ➔ 新幹線で帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. 兼六園の雪吊りはいつまで見られますか？**  
A. 11月上旬から翌年3月中旬まで鑑賞可能です。冬の段ライトアップは例年1月下旬〜2月の特定日に開催されます。

**Q2. 香箱ガニを食べるならいつまでに旅行すべきですか？**  
A. 資源保護のため例年12月29日頃に禁漁となるため、12月中の来訪が必須です。

**Q3. 冬の金沢観光で靴は何を履くべきですか？**  
A. みぞれや道路の消雪パイプからの水が出るため、完全防水のスノーブーツまたは防水シューズが必須です。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【石川・金沢】兼六園「雪吊り」ライトアップ＆加能ガニ・香箱ガニ完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/${slug}/)
`;

  return { postData, noteMarkdown };
};
