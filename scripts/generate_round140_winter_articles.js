const fs = require('fs');
const path = require('path');

const collectedData = require('../scratch/fresh_winter_5_collected_data.json');

// HTMLタグを除去した文字数を正確にカウントする関数
function countTextLength(html) {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, '')
    .trim().length;
}

// ========================================================
// 記事1: 北海道・十勝川温泉＆豊頃町ジュエリーアイス
// ========================================================
function buildTokachigawaPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('観月苑')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 3);

  const spotOnsen = w.find(x => x.spotName === '十勝川温泉') || w[0];
  const spotMoor = w.find(x => x.spotName === 'モール温泉') || w[1];
  const spotToyokoro = w.find(x => x.spotName === '豊頃町') || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/60 rounded-3xl border border-amber-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-amber-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Answer</span>
      <span class="text-xs text-amber-950 font-bold">11月〜1月の十勝川温泉・モール温泉＆豊頃町ジュエリーアイス旅行総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【結論】十勝川温泉の冬旅：世界的希少「植物性モール温泉」の琥珀美肌湯と海岸に煌めくジュエリーアイス</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      北海道東部、広大な十勝平野を流れる大河・十勝川のほとりに位置する十勝川温泉。11月から1月にかけての冬期は、日高山脈からの乾いた冷たい風と抜けるような青空「十勝晴れ（とかちばれ）」が広がり、夜間は氷点下15度以下まで冷え込む本格的な白銀の世界を迎えます。この寒冷な地で湧き出る十勝川温泉は、太古の植物が堆積した亜炭層（ピート層）を熱水が通って湧出する世界的にも極めて希少な「植物性モール温泉（北海道遺産）」。フミン酸やフルボ酸など植物由来の天然保湿成分を豊富に含み、まるで化粧水に浸かっているかのようなトロリとした琥珀色の湯触りが冷え切った身体の芯まで優しく温めほぐします。さらに1月中旬頃からは、十勝川河口の豊頃町・大津海岸に打ち上げられる透明無垢な氷塊「ジュエリーアイス」が朝日に照らされて黄金色やクリスタル色に輝く奇跡の絶景が本格化。白銀の十勝平野が育んだ十勝ハーブ牛、とろけるラクレットチーズ、炭火焼き豚丼とともに、他所では絶対に味わえない唯一無二の冬旅が実現します。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">泉質特徴</span>
        <strong class="text-amber-900 text-sm">植物性モール温泉（北海道遺産認定）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">ジュエリーアイス見頃</span>
        <strong class="text-stone-900 text-sm">1月中旬〜2月下旬（大津海岸）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の気候特性</span>
        <strong class="text-sky-700 text-sm">十勝晴れの青空と厳しい放射冷却</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-amber-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の三大味覚</span>
        <strong class="text-amber-800 text-sm">十勝ハーブ牛・ラクレット・帯広豚丼</strong>
      </div>
    </div>
  </section>

  <!-- 1. 十勝川モール温泉の唯一無二の湯浴み体験 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      ♨️ 太古の植物が育んだ奇跡の琥珀色！世界的にも稀有な「モール温泉」の美肌効果
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      一般的な温泉が火山活動に伴う地下鉱物性ミネラルを多く含むのに対し、十勝川温泉の源泉は太古のヨシやアシなどの自生植物が長い年月をかけて堆積した泥炭層（亜炭層）を通って湧き出しています。ドイツ語で湿原や泥炭を意味する「Moor（モール）」に由来し、世界でもドイツ南西部やここ十勝平野など限られた地域にしか確認されていない極めて貴重な泉質です。湧出口から浴槽へ注がれる湯は透明感のある美しい琥珀色（ウーロン茶や紅茶のような赤褐色）を湛え、湯面に微細な植物性有機物の湯の花が舞います。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      肌を湯に沈めた瞬間、シルクのようななめらかさと吸い付くようなとろみを感じます。泉質は弱アルカリ性のナトリウム-塩化物・炭酸水素塩泉。天然の腐植物質（フミン酸・フルボ酸）が豊富に含まれており、皮膚の角質を柔軟にして老廃物を優しく洗い流しつつ、毛穴の奥まで潤いを浸透させます。入浴後は肌が吸い付くようにもちもちと潤い、塩分が表面に薄い皮膜を作るため、厳冬期の氷点下の外気に出ても湯冷めしにくい抜群の保温力を誇ります。まさに「天然の化粧水」「絹の湯」と呼ばれるにふさわしい至高の湯心地です。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      多くの旅館では、十勝川の雄大な白銀の堤防や遠く冠雪の日高山脈を望む雪見露天風呂が用意されています。凛と張り詰めた氷点下10度の冷気を吸い込みながら、首まで42度の琥珀色の湯に身を委ねるひとときは、北の大地ならではの贅沢な湯治体験といえます。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る十勝の冬名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 十勝川温泉 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotOnsen.image || 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/131012_Tokachigawa_Onsen_Otofuke_Hokkaido_Japan01s3.jpg/3840px-131012_Tokachigawa_Onsen_Otofuke_Hokkaido_Japan01s3.jpg'}" alt="${spotOnsen.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded">北海道遺産選定</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotOnsen.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotOnsen.extract || '北海道音更町にある温泉。十勝川河畔に位置し、植物性有機物を多く含むモール温泉として名高い。十勝が丘展望台からは十勝平野と日高山脈の大パノラマを一望できる。'}
            </p>
          </div>
          <p class="text-[11px] text-amber-900 bg-amber-50 p-2.5 rounded-lg font-medium border border-amber-100">
            💡 冬期には十勝が丘公園で光と音のファンタジックショー「彩凛華（さいりんか）」が開催され、無数の光の三角錐が白銀の夜を彩ります。
          </p>
        </div>
      </div>

      <!-- Spot 2: モール温泉 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotMoor.image || 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/131012_Tokachigawa_Onsen_Otofuke_Hokkaido_Japan11s.jpg/3840px-131012_Tokachigawa_Onsen_Otofuke_Hokkaido_Japan11s.jpg'}" alt="${spotMoor.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-orange-100 text-orange-800 font-bold rounded">奇跡の植物性有機泉</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotMoor.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotMoor.extract || 'モール泉（Moor spring）は、泥炭層などの植物起源の有機質を多量に含んだ温泉。フミン物質に富み、入浴感は滑らかで美肌効果が極めて高いことで知られる。'}
            </p>
          </div>
          <p class="text-[11px] text-amber-900 bg-amber-50 p-2.5 rounded-lg font-medium border border-amber-100">
            💡 湯上がりにタオルで身体を拭く際、ゴシゴシ擦らず軽く押さえるように拭くと、天然の植物性保湿成分が肌に留まりしっとり感が持続します。
          </p>
        </div>
      </div>

      <!-- Spot 3: 豊頃町・ジュエリーアイス -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotToyokoro.image || 'https://upload.wikimedia.org/wikipedia/commons/3/30/The_famous_Japanese_Elm%2C_Toyokoro_Town%2C_Hokkaido.jpg'}" alt="${spotToyokoro.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-sky-100 text-sky-800 font-bold rounded">自然のクリスタルアート</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">豊頃町 大津海岸（ジュエリーアイス）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotToyokoro.extract || '十勝平野南東部に位置する町。十勝川河口の大津海岸では、川の真水が凍って海へ流れ出し、波で磨かれて海岸へ打ち上げられる「ジュエリーアイス」が冬の風物詩として世界的注目を集める。'}
            </p>
          </div>
          <p class="text-[11px] text-amber-900 bg-amber-50 p-2.5 rounded-lg font-medium border border-amber-100">
            💡 鑑賞のベストタイムは日の出前後（6:30〜7:30）。水平線から昇る朝日の光を浴びて氷がオレンジや黄金色に輝く瞬間は息をのむ美しさです。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 冬の十勝平野グルメ深掘り -->
  <section class="space-y-4 my-8 p-6 bg-amber-50/70 rounded-3xl border border-amber-200">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b border-amber-300 pb-2">
      🥩 十勝ハーブ牛・とろけるラクレット・炭火豚丼！冬の十勝平野ガストロノミー
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      日本最大の食料基地と呼ばれる十勝平野は、冬の美食も圧倒的な豊かさを誇ります。厳寒期に蓄えられた牛の脂はきめ細やかで、十勝のハーブを食べて健康に育った「十勝ハーブ牛」は赤身のコクと上質なサシの甘みが絶妙。鉄板焼きや朴葉焼き、すき焼きで味わえば、口いっぱいに芳醇な肉汁が広がります。また、酪農王国十勝ならではのナチュラルチーズは冬の食卓の主役。温めたラクレットチーズを茹でたての十勝産メークインや自家製ソーセージにたっぷりと削りかける一皿は、濃厚なミルクの風味が冬の寒さを忘れさせてくれます。そして帯広発祥の「豚丼」は、厚切りの北海道産豚ロースを炭火で香ばしく焼き上げ、甘辛い特製タレを絡めて熱々のご飯に乗せた郷土のソウルフード。冷えた身体にガツンと活力を与えてくれます。
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-2">
      <div class="p-3.5 bg-white rounded-xl border border-amber-200 space-y-1">
        <strong class="text-amber-900 block font-bold text-sm">極上の赤身とサシ「十勝ハーブ牛」</strong>
        <p class="text-stone-600 leading-relaxed">
          17種類のハーブを食べて長期肥育されたブランド牛。脂の融点が低く、しつこさのない上品な旨味が口の中でとろけます。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-amber-200 space-y-1">
        <strong class="text-amber-900 block font-bold text-sm">濃厚なめらか「十勝ラクレット」</strong>
        <p class="text-stone-600 leading-relaxed">
          冬の十勝産生乳で作られる本格チーズ。熱でトロトロに溶かして熱々の野菜に絡める贅沢は冬の北国ならではの至福。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-amber-200 space-y-1">
        <strong class="text-amber-900 block font-bold text-sm">香ばしい秘伝タレ「本場帯広豚丼」</strong>
        <p class="text-stone-600 leading-relaxed">
          十勝開拓の歴史とともに生まれた炭火焼き豚丼。香ばしい焦げ目と甘辛いタレ、山椒のピリッとしたアクセントが絶妙です。
        </p>
      </div>
    </div>
  </section>

  <!-- 4. 楽天トラベル厳選：モール温泉と美食の十勝名宿4選 -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      🏨 楽天トラベル厳選：極上の琥珀モール温泉と十勝味覚を堪能する名宿4選
    </h2>
    <p class="text-xs md:text-sm text-stone-600 leading-relaxed">
      十勝川のほとりに佇む老舗旅館から、広大な庭園とモール温泉大浴場を備えたリゾートホテルまで、楽天トラベルで高評価を集める名宿を厳選しました。
    </p>

    <div class="space-y-6">
      <!-- 宿1: メイン宿 -->
      <div class="p-5 md:p-6 bg-white rounded-3xl border border-amber-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full md:w-56 h-44 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-amber-800 text-white font-bold text-[10px] rounded-full">十勝川河畔・和モダン温泉宿</span>
              <span class="text-xs text-stone-500">${mainHotel.address1}${mainHotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg md:text-xl leading-snug">${mainHotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${mainHotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-amber-700 text-sm">⭐ 総合評価 ${mainHotel.reviewAverage}（クチコミ ${mainHotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${mainHotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs md:text-sm text-stone-700 bg-amber-50/70 p-4 rounded-xl border border-amber-100 leading-relaxed">
          ${mainHotel.hotelSpecial || '雄大な十勝川を眼下に望む露天風呂と、植物性モール温泉の源泉掛け流し。十勝の旬の素材を活かした四季折々の会席料理が自慢の宿です。'}
        </p>
        <div class="text-right">
          <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-amber-700 to-orange-800 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>

      <!-- 他の宿一覧 -->
      ${otherHotels.map((hotel, idx) => `
      <div class="p-5 bg-white rounded-3xl border border-stone-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${hotel.hotelImageUrl}" alt="${hotel.hotelName}" class="w-full md:w-56 h-40 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-stone-700 text-white font-bold text-[10px] rounded-full">厳選宿 #${idx + 2}</span>
              <span class="text-xs text-stone-500">${hotel.address1}${hotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg leading-snug">${hotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${hotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-amber-700 text-sm">⭐ 総合評価 ${hotel.reviewAverage}（${hotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${hotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs text-stone-700 bg-stone-50 p-3.5 rounded-xl border border-stone-200 leading-relaxed">
          ${hotel.hotelSpecial || '十勝の自然美に包まれた癒やしの空間。植物性モール温泉の多彩な浴槽と地産地消のグルメバイキングが好評です。'}
        </p>
        <div class="text-right">
          <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-amber-700 to-orange-800 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>`).join('')}
    </div>
  </section>

  <!-- 5. 1泊2日 ジュエリーアイス＆十勝川モール温泉モデルコース -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      🗺️ 琥珀の美肌湯と奇跡のクリスタル氷塊！十勝川温泉 1泊2日冬の王道モデルコース
    </h2>
    <div class="space-y-4 text-xs md:text-sm">
      <div class="p-4.5 bg-amber-50/60 rounded-2xl border border-amber-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-amber-800 text-white font-bold text-xs rounded-md">1日目</span>
          <strong class="text-stone-900">とかち帯広空港（またはJR帯広駅） ➔ 帯広豚丼ランチ ➔ 十勝が丘展望台 ➔ 十勝川温泉チェックイン</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【11:30】とかち帯広空港に到着（または札幌から特急とかちでJR帯広駅着）。レンタカーを借りて帯広市内へ。<br>
          【12:15】帯広駅周辺の老舗豚丼専門店で、炭火の煙が香る本場の豚丼ランチ。甘辛いタレと香ばしい豚肉に舌鼓。<br>
          【13:45】車で約25分、音更町の「十勝が丘展望台」へ。白銀に輝く十勝平野と、冠雪した雄大な日高山脈の山並みを見渡す。<br>
          【15:00】十勝川温泉の宿にチェックイン。冷えた身体を世界的希少な「植物性モール温泉」の琥珀色の湯に沈め、とろとろの美肌湯を堪能。<br>
          【18:00】夕食。十勝ハーブ牛のステーキやラクレットチーズフォンデュ、十勝野菜が並ぶ地産地消の会席料理を味わう。<br>
          【20:00】十勝が丘公園の冬イベント「彩凛華（さいりんか）」へ（1月下旬〜2月開催時）。白銀の雪原に広がる光と音のファンタジーに浸る。<br>
          【21:30】宿に戻り、満天の星空を仰ぐ雪見露天風呂で就寝前の贅沢な湯浴み。
        </p>
      </div>
      <div class="p-4.5 bg-orange-50/60 rounded-2xl border border-orange-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-orange-800 text-white font-bold text-xs rounded-md">2日目</span>
          <strong class="text-stone-900">早朝大津海岸ジュエリーアイス ➔ モール温泉朝風呂 ➔ 幸福駅＆六花亭スイーツ ➔ 帯広空港へ</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【05:45】完全防寒（ダウン、手袋、カイロ、滑り止め靴）で宿を出発。車で約45分、豊頃町の大津海岸へ。<br>
          【06:30】大津海岸に到着。水平線から昇る朝日に照らされ、砂浜に打ち上げられた氷塊「ジュエリーアイス」がクリスタルや琥珀色に輝く奇跡の瞬間を撮影。<br>
          【08:00】宿に戻り、身体を芯から温めるモール温泉の朝風呂へ。朝食バイキングで十勝産牛乳や焼きたてパンを味わう。<br>
          【10:00】チェックアウト後、車でノスタルジックな雪景色が美しい旧国鉄広尾線「幸福駅」へ立ち寄り。<br>
          【11:30】「六花亭」本店または「柳月スイートピア・ガーデン」で限定スイーツ（サクサクパイや三方六）とお土産を購入。<br>
          【14:00】とかち帯広空港でレンタカーを返却し、フライトで帰路へ。
        </p>
      </div>
    </div>
  </section>

  <!-- 6. FAQセクション -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2.5">
      ❓ 十勝川温泉＆ジュエリーアイス よくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-amber-900">Q. ジュエリーアイスのベストシーズンと見学時の服装・注意点は？</strong>
        <p class="text-stone-700 leading-relaxed">
          例年1月中旬から2月下旬がベストシーズンです。十勝川の水が凍り、太平洋の波で削られて大津海岸に打ち上がる自然現象のため、寒波の強さや波の状況によって打ち上げ数が日々変化します。早朝の大津海岸は氷点下15〜20度まで下がるため、極地仕様の厚手ダウン、防風パンツ、スノーブーツ、毛糸の帽子、厚手手袋、ネックウォーマーが必須です。スマートフォンのバッテリーも寒さで急激に消耗するため、ポケットにカイロを入れて保温することをおすすめします。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-amber-900">Q. 十勝川温泉へのアクセス方法と冬期の道路状況は？</strong>
        <p class="text-stone-700 leading-relaxed">
          とかち帯広空港から車で約40分、JR帯広駅から車または路線バス（十勝バス）で約25〜30分とアクセス良好です。十勝地方は降雪量自体は道央や日本海側に比べて少なめですが、放射冷却による強烈な冷え込みのため路面がアイスバーン（凍結）になりやすいのが特徴です。レンタカーを利用する場合は4WDスタッドレスタイヤ装着車を選び、スピードを控えめにして十分な車間距離を確保してください。運転に不安がある方は、帯広駅発着の定期観光バスや宿泊客向け送迎バスの利用も便利です。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-amber-900">Q. 植物性モール温泉はお肌が敏感な人でも入浴できますか？</strong>
        <p class="text-stone-700 leading-relaxed">
          十勝川温泉のモール温泉は刺激が少なく、肌当たりが極めて柔らかな弱アルカリ性（pH7.5〜8.0前後）です。硫黄泉のような強烈な刺激臭や皮膚刺激がなく、天然の保湿成分が肌を包み込むため、乾燥肌や敏感肌の方、高齢の方やお子様でも安心して入浴できます。美肌効果をより高めたい場合は、湯上がりに軽く水滴を拭き取る程度にとどめ、植物性保湿成分を肌に残すのがコツです。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. サイト内内部リンク集 -->
  <section class="my-8 p-5 bg-amber-50/80 rounded-2xl border border-amber-200">
    <h3 class="font-bold text-sm text-amber-950 mb-3">📌 合わせて読みたい北海道・極上冬旅特集</h3>
    <ul class="text-xs text-amber-900 space-y-2 list-disc list-inside">
      <li><a href="/prefectures/hokkaido" class="underline font-bold hover:text-amber-700">北海道の厳選温泉旅館・観光名所完全ガイド（十勝・阿寒・登別・定山渓）</a></li>
      <li><a href="/posts/akan-lake-frost-flower-ice-festival-ainu-kotan-winter-guide" class="underline hover:text-amber-700">阿寒湖の奇跡フロストフラワーと氷上フェスティバル！アイヌコタン雪灯り名宿ガイド</a></li>
      <li><a href="/posts/noboribetsu-onsen-snow-jigokudani-winter-guide" class="underline hover:text-amber-700">登別温泉の地獄谷白銀雪景色と九種の多彩泉質！冬の湯治贅沢ホテル完全比較</a></li>
      <li><a href="/posts/otaru-canal-snow-light-path-winter-guide" class="underline hover:text-amber-700">小樽雪あかりの路と運河ガス灯雪景色！冬の極上寿司とノスタルジックホテルガイド</a></li>
      <li><a href="/posts/hakodate-yunokawa-onsen-winter-gourmet-night-view-guide" class="underline hover:text-amber-700">函館湯の川温泉と冬の100万ドル夜景！津軽海峡海鮮ビュッフェ宿ガイド</a></li>
    </ul>
  </section>

</div>`;

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    description: '11月〜1月の十勝川温泉＆豊頃町ジュエリーアイスを徹底ガイド！世界でも希少な琥珀色の「植物性モール温泉」の美肌効果、大津海岸に輝く天然クリスタル氷塊ジュエリーアイス、十勝ハーブ牛・濃厚ラクレットチーズ・帯広豚丼を味わう冬の厳選名宿と1泊2日モデルコース。',
    prefecture: data.prefecture,
    area: data.area,
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: ['北海道', '十勝川温泉', 'モール温泉', 'ジュエリーアイス', '豊頃町', '十勝牛', '美肌の湯', '冬旅行'],
    keywords: [
      '十勝川温泉 モール温泉 旅館 おすすめ',
      'ジュエリーアイス 豊頃町 宿泊',
      '十勝川温泉 雪見露天 美肌の湯',
      '十勝ハーブ牛 温泉宿 帯広',
      '冬の十勝旅行 モデルコース',
      '十勝川温泉 観月苑 宿泊記'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// 記事2: 北海道・洞爺湖温泉＆冬イルミネーション・雪の羊蹄山
// ========================================================
function buildToyakoPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('ホテルグランド')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 3);

  const spotLake = w.find(x => x.spotName === '洞爺湖') || w[0];
  const spotOnsen = w.find(x => x.spotName === '洞爺湖温泉') || w[1];
  const spotShowa = w.find(x => x.spotName === '昭和新山') || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-100/60 rounded-3xl border border-blue-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-blue-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Answer</span>
      <span class="text-xs text-blue-950 font-bold">11月〜1月の洞爺湖温泉・冬イルミネーション＆羊蹄山雪景色旅行総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【結論】洞爺湖温泉の冬旅：厳冬でも凍らない「不凍湖」の絶景レイクビュー、雪の羊蹄山と冬イルミネーション</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      北海道南西部、支笏洞爺国立公園の中核をなすカルデラ湖・洞爺湖。日本で北限の不凍湖（冬でも全面結氷しない湖）として知られ、11月から1月の厳冬期でも静かに紺碧の湖水を湛えます。湖畔に広がる洞爺湖温泉では、湖岸の遊歩道に約40万球のLEDが輝く「洞爺湖温泉イルミネーションストリート＆イルミネーショントンネル」が毎日点灯し、白銀の雪景色と幻想的な青の光がロマンチックな世界を創出します。湖越しには冠雪した名峰・羊蹄山（蝦夷富士）の端正な円錐形がくっきりと浮かび上がり、湯煙漂う湖畔露天風呂から眺めるレイクビューはまさに絶景。さらに近隣の噴火湾（内浦湾）で冬に最盛期を迎える肉厚な「噴火湾産大粒ホタテ」や、赤身と脂のバランスが素晴らしい「洞爺湖黒毛和牛」に舌鼓を打つ極上の冬のリゾート滞在が叶います。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-blue-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">洞爺湖の自然特性</span>
        <strong class="text-blue-900 text-sm">日本北限の不凍湖（カルデラ湖）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-blue-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬イルミネーション</span>
        <strong class="text-indigo-700 text-sm">11月〜3月開催（約40万球LED）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-blue-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">温泉泉質</span>
        <strong class="text-stone-900 text-sm">ナトリウム・カルシウム-炭酸水素塩・硫酸塩泉</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-blue-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の必食ご当地美味</span>
        <strong class="text-amber-800 text-sm">噴火湾ホタテ・洞爺湖和牛・豊浦ポーク</strong>
      </div>
    </div>
  </section>

  <!-- 1. 洞爺湖温泉の魅力と冬の絶景レイクビュー -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2.5">
      🏔️ 紺碧の不凍湖に映える白銀の羊蹄山！湯煙に包まれる洞爺湖温泉のレイクビュー露天
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      洞爺湖は、約11万年前の巨大カルデラ噴火によって誕生した円形のカルデラ湖です。最大水深は約180メートルに達し、豊富な貯熱量を持つため、北海道の厳しい冬の寒さにあっても水面が凍結することのない「日本最北の不凍湖」として知られます。冬の朝、湖面には水温と冷たい外気の温度差によって幻想的な水煙（けあらし）が立ち上り、鏡のように澄み切った水面には雪を被った中島や、遠く北西にそびえる蝦夷富士・羊蹄山の秀麗な冠雪姿が映し出されます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      明治43年（1910年）の有珠山側火山噴火に伴って誕生した洞爺湖温泉は、豊富な湧出量と塩化物泉・硫酸塩泉・炭酸水素塩泉が複合したバランスの良い泉質が自慢です。湯はほんのり茶褐色や黄白色を帯び、肌を優しく温めて血行を促進。湖畔に立ち並ぶホテルの多くは、インフィニティ仕様の展望露天風呂を備えており、湯船と洞爺湖の水面が一続きになったかのような圧倒的な開放感の中で、静寂に包まれた冬の湖上パノラマを堪能できます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      日が暮れると、温泉街の中心広場から湖畔へと続く小道が、幻想的なブルーとホワイトのLEDで彩られます。頭上に広がる光のトンネルを散策した後は、手湯や足湯に立ち寄りながら湯上がりのそぞろ歩きを楽しむのが洞爺湖温泉の冬の定番スタイルです。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る洞爺湖の名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 洞爺湖 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotLake.image || 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/130922_Lake_Toya_Toyako_Hokkaido_Japan03s3.jpg/3840px-130922_Lake_Toya_Toyako_Hokkaido_Japan03s3.jpg'}" alt="${spotLake.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded">日本ジオパーク認定</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotLake.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotLake.extract || '北海道虻田郡洞爺湖町と有珠郡壮瞥町にまたがるカルデラ湖。支笏洞爺国立公園内にあり、日本で3番目に大きなカルデラ湖。中央には森林に覆われた中島が浮かぶ。'}
            </p>
          </div>
          <p class="text-[11px] text-blue-900 bg-blue-50 p-2.5 rounded-lg font-medium border border-blue-100">
            💡 冬の澄んだ空気の日には、サイロ展望台から洞爺湖全体と雪景色の羊蹄山が絵画のようにクリアに見渡せます。
          </p>
        </div>
      </div>

      <!-- Spot 2: 洞爺湖温泉街 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotOnsen.image || 'https://upload.wikimedia.org/wikipedia/commons/d/d9/View_of_T%C5%8Dyako-onsen_town.JPG'}" alt="${spotOnsen.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-indigo-100 text-indigo-800 font-bold rounded">名湯リゾート</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotOnsen.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotOnsen.extract || '洞爺湖南岸に位置する北海道有数の温泉街。有珠山の噴火活動によって開湯された。湯量豊富でホテルや旅館が湖畔に立ち並ぶ。'}
            </p>
          </div>
          <p class="text-[11px] text-blue-900 bg-blue-50 p-2.5 rounded-lg font-medium border border-blue-100">
            💡 冬期は湖畔の「イルミネーショントンネル」が毎日点灯。雪の夜に光の回廊を歩く散策はロマンチック度満点です。
          </p>
        </div>
      </div>

      <!-- Spot 3: 昭和新山 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotShowa.image || 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/130922_Showa-shinzan_Sobetsu_Hokkaido_Japan01s3.jpg/3840px-130922_Showa-shinzan_Sobetsu_Hokkaido_Japan01s3.jpg'}" alt="${spotShowa.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded">特別天然記念物</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotShowa.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotShowa.extract || '昭和19年から20年にかけての火山活動で麦畑が隆起してできた溶岩ドーム。赤褐色の山肌から今なお白煙が立ち上り、大地の鼓動を間近で体感できる。'}
            </p>
          </div>
          <p class="text-[11px] text-blue-900 bg-blue-50 p-2.5 rounded-lg font-medium border border-blue-100">
            💡 白銀の雪原と赤茶色の岩肌から立ち上る白い蒸気の対比は冬ならではの迫力。有珠山ロープウェイで山頂へ登れば内浦湾の絶景も一望できます。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 冬の噴火湾ホタテ＆洞爺湖グルメ -->
  <section class="space-y-4 my-8 p-6 bg-blue-50/70 rounded-3xl border border-blue-200">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b border-blue-300 pb-2">
      🐚 噴火湾の極上冬ホタテ・洞爺湖黒毛和牛・豊浦ポーク！海と火山の美食饗宴
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      洞爺湖温泉の料理の魅力は、車でわずか15分の噴火湾（内浦湾）がもたらす新鮮な海の幸と、火山灰土壌の肥沃な大地が育む農畜産物のハイブリッドにあります。特に12月から1月にかけての冬期は、噴火湾の「養殖ホタテ」が冷たい海水によって身をぎゅっと引き締め、濃厚な甘みと旨味を蓄える旬の最盛期。肉厚な貝柱をお造りでいただけば繊維がほどけるようなプリプリの食感と強い甘みが口いっぱいに広がり、バター焼きやホタテ釜飯にすれば香ばしい磯の香りが食欲をそそります。さらに、地元で丹精込めて育てられた「洞爺湖黒毛和牛」のサーロインステーキや、隣町・豊浦町の銘柄豚「豊浦ポーク」のしゃぶしゃぶなど、肉料理のクオリティも道内屈指。湖畔の菓子舗「わかさいも」の揚げたてスイーツも外せません。
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-2">
      <div class="p-3.5 bg-white rounded-xl border border-blue-200 space-y-1">
        <strong class="text-blue-900 block font-bold text-sm">甘みたっぷり「噴火湾大粒ホタテ」</strong>
        <p class="text-stone-600 leading-relaxed">
          冬の噴火湾で獲れるホタテは貝柱が大きく肉厚。お刺身、炭火浜焼き、グラタンとどんな調理法でも絶品の旨味を放ちます。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-blue-200 space-y-1">
        <strong class="text-blue-900 block font-bold text-sm">芳醇な肉質「洞爺湖黒毛和牛」</strong>
        <p class="text-stone-600 leading-relaxed">
          きめ細かなサシと力強い赤身の旨味が特徴。陶板焼きやすき焼きで味わうと、上質な肉の脂がとろけるように広がります。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-blue-200 space-y-1">
        <strong class="text-blue-900 block font-bold text-sm">銘菓「わかさいも」＆温泉スイーツ</strong>
        <p class="text-stone-600 leading-relaxed">
          大福豆と昆布を使い、サツマイモを使わずに焼き芋の風味を再現した洞爺湖名物。本店限定の「いもてん（揚げわかさいも）」は絶品。
        </p>
      </div>
    </div>
  </section>

  <!-- 4. 楽天トラベル厳選：絶景レイクビュー洞爺湖名宿4選 -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2.5">
      🏨 楽天トラベル厳選：湖畔の雪見露天風呂と冬会席を満喫できる洞爺湖宿4選
    </h2>
    <p class="text-xs md:text-sm text-stone-600 leading-relaxed">
      全室レイクビューを誇る湖畔の温泉旅館や、多彩な温泉浴槽と噴火湾グルメバイキングが自慢の人気ホテルをセレクトしました。
    </p>

    <div class="space-y-6">
      <!-- 宿1: メイン宿 -->
      <div class="p-5 md:p-6 bg-white rounded-3xl border border-blue-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full md:w-56 h-44 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-blue-800 text-white font-bold text-[10px] rounded-full">湖畔一望・源泉かけ流し</span>
              <span class="text-xs text-stone-500">${mainHotel.address1}${mainHotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg md:text-xl leading-snug">${mainHotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${mainHotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-blue-700 text-sm">⭐ 総合評価 ${mainHotel.reviewAverage}（クチコミ ${mainHotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${mainHotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs md:text-sm text-stone-700 bg-blue-50/70 p-4 rounded-xl border border-blue-100 leading-relaxed">
          ${mainHotel.hotelSpecial || '洞爺湖の波打ち際に佇む老舗ホテル。源泉掛け流しの温泉大浴場と、四季折々の表情を見せる洞爺湖パノラマを一望できる客室が魅力です。'}
        </p>
        <div class="text-right">
          <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-blue-700 to-indigo-800 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>

      <!-- 他の宿一覧 -->
      ${otherHotels.map((hotel, idx) => `
      <div class="p-5 bg-white rounded-3xl border border-stone-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${hotel.hotelImageUrl}" alt="${hotel.hotelName}" class="w-full md:w-56 h-40 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-stone-700 text-white font-bold text-[10px] rounded-full">厳選宿 #${idx + 2}</span>
              <span class="text-xs text-stone-500">${hotel.address1}${hotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg leading-snug">${hotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${hotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-blue-700 text-sm">⭐ 総合評価 ${hotel.reviewAverage}（${hotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${hotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs text-stone-700 bg-stone-50 p-3.5 rounded-xl border border-stone-200 leading-relaxed">
          ${hotel.hotelSpecial || '湖畔の立地を生かした展望風呂と洞爺湖の絶景。地元噴火湾の新鮮魚介を活かした料理が好評のリゾート宿です。'}
        </p>
        <div class="text-right">
          <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-blue-700 to-indigo-800 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>`).join('')}
    </div>
  </section>

  <!-- 5. 1泊2日 洞爺湖温泉モデルコース -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2.5">
      🗺️ イルミネーションと絶景レイクビュー！洞爺湖温泉 1泊2日冬の王道モデルコース
    </h2>
    <div class="space-y-4 text-xs md:text-sm">
      <div class="p-4.5 bg-blue-50/60 rounded-2xl border border-blue-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-blue-800 text-white font-bold text-xs rounded-md">1日目</span>
          <strong class="text-stone-900">新千歳空港 ➔ サイロ展望台で羊蹄山絶景 ➔ 昭和新山見学 ➔ 洞爺湖温泉イルミネーション</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【11:00】新千歳空港に到着。レンタカー（またはJR南千歳駅から特急北斗で洞爺駅へ、約1時間30分）で洞爺湖方面へドライブ。<br>
          【12:30】洞爺湖西岸の高台に位置する「サイロ展望台」に立ち寄り。紺碧の湖水と中島、奥に冠雪した羊蹄山が一望できる絶景パノラマを鑑賞。<br>
          【13:30】展望台のカフェで噴火湾産ホタテのバター焼きやホタテカレーでランチ。<br>
          【14:30】「昭和新山」へ。白銀の雪景色の中に赤茶色の溶岩ドームから白煙が立ち上るダイナミックな景観を見学。<br>
          【15:30】洞爺湖温泉の宿にチェックイン。冷えた身体を展望露天風呂に沈め、静寂に包まれた冬の不凍湖を眺めながら優雅な湯浴み。<br>
          【18:30】夕食。噴火湾産大粒ホタテの陶板焼き、洞爺湖黒毛和牛、道産野菜の温鍋会席に舌鼓。<br>
          【20:30】防寒着を着込み、温泉街の湖畔へ。「イルミネーショントンネル」を歩き、約40万球のLEDが織りなす幻想的な光の回廊を満喫。
        </p>
      </div>
      <div class="p-4.5 bg-indigo-50/60 rounded-2xl border border-indigo-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-indigo-800 text-white font-bold text-xs rounded-md">2日目</span>
          <strong class="text-stone-900">朝の湖畔けあらし露天 ➔ 有珠山ロープウェイ ➔ わかさいも本店 ➔ 登別または札幌へ</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【07:30】早朝の露天風呂へ。冷え込んだ湖面に薄い水煙（けあらし）が立ち上る神秘的な朝の洞爺湖を眺める。<br>
          【08:30】朝食バイキングで道産いくらや焼き魚、北海道産米の朝ごはんを堪能。<br>
          【10:00】チェックアウト後、「有珠山ロープウェイ」で山頂テラスへ。冬の澄み渡る空気の中、洞爺湖と噴火湾（太平洋）を同時に見渡す大パノラマ。<br>
          【11:45】温泉街の「わかさいも本舗 洞爺湖本店」に立ち寄り。店内で揚げたての「いもてん」を味わい、お土産を購入。<br>
          【13:00】オロフレ峠経由で登別温泉へ足を延ばすか、高速道路で千歳・札幌方面へ向かい帰路へ。
        </p>
      </div>
    </div>
  </section>

  <!-- 6. FAQセクション -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2.5">
      ❓ 洞爺湖温泉の冬旅行 よくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-blue-900">Q. 冬の洞爺湖はどのくらい寒いですか？湖は凍らないのですか？</strong>
        <p class="text-stone-700 leading-relaxed">
          12月〜1月の平均気温は氷点下2度〜氷点下6度前後です。日本海側のような豪雪地帯に比べると積雪量はやや少なめですが、風が吹くと体感温度がぐっと下がります。洞爺湖は水深が深く大量の熱を蓄えているため、厳冬期でも湖面全体が凍ることはありません（不凍湖）。そのため、冬でも白銀の雪山と青い湖水の美しいコントラストを一年中楽しむことができます。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-blue-900">Q. 冬期のレンタカー運転やJR・バスでのアクセスは？</strong>
        <p class="text-stone-700 leading-relaxed">
          新千歳空港や札幌から道央自動車道経由で約1時間40分〜2時間です。冬期は道央道も除雪が行き届いていますが、吹雪時の視界不良やインターを降りた後の峠道・湖畔道路の凍結には注意が必要です。車を使わない場合は、JR特急北斗で「洞爺駅」まで行き（南千歳から約1時間15分）、駅前から道南バスで約20分で洞爺湖温泉バスターミナルへ到着できるため、雪道運転が不安な方でも安心して訪れることができます。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-blue-900">Q. 冬の洞爺湖イルミネーションの点灯時間と見どころは？</strong>
        <p class="text-stone-700 leading-relaxed">
          「洞爺湖温泉イルミネーションストリート」は例年11月から3月下旬まで、毎日17:00から22:00まで点灯します。特に人気なのは温泉街の中心にある広場に設置される「イルミネーショントンネル」で、約40万球のLED電球が織りなす光のトンネル内に入って記念撮影ができます。入場無料・予約不要で散策できますので、夕食後や温泉上がりの夕涼み（冬散歩）に最適です。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. サイト内内部リンク集 -->
  <section class="my-8 p-5 bg-blue-50/80 rounded-2xl border border-blue-200">
    <h3 class="font-bold text-sm text-blue-950 mb-3">📌 合わせて読みたい道南・北海道の冬名湯特集</h3>
    <ul class="text-xs text-blue-900 space-y-2 list-disc list-inside">
      <li><a href="/prefectures/hokkaido" class="underline font-bold hover:text-blue-700">北海道の厳選温泉旅館・観光名所完全ガイド（洞爺・登別・定山渓・函館）</a></li>
      <li><a href="/posts/noboribetsu-onsen-snow-jigokudani-winter-guide" class="underline hover:text-blue-700">登別温泉の地獄谷白銀雪景色と九種の多彩泉質！冬の湯治贅沢ホテル完全比較</a></li>
      <li><a href="/posts/hakodate-yunokawa-onsen-winter-gourmet-night-view-guide" class="underline hover:text-blue-700">函館湯の川温泉と冬の100万ドル夜景！津軽海峡海鮮ビュッフェ宿ガイド</a></li>
      <li><a href="/posts/jozankei-onsen-snow-light-yukitouro-winter-guide" class="underline hover:text-blue-700">定山渓温泉の雪灯路と渓谷雪見露天！札幌奥座敷の美食湯宿おすすめガイド</a></li>
      <li><a href="/posts/otaru-canal-snow-light-path-winter-guide" class="underline hover:text-blue-700">小樽雪あかりの路と運河ガス灯雪景色！冬の極上寿司とノスタルジックホテルガイド</a></li>
    </ul>
  </section>

</div>`;

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    description: '11月〜1月の洞爺湖温泉＆冬イルミネーションを徹底特集！日本最北の不凍湖が魅せる雪の羊蹄山レイクビュー露天、約40万球の光のトンネル、噴火湾の旬の大粒冬ホタテと洞爺湖黒毛和牛会席を堪能する冬の厳選ホテルと1泊2日モデルプラン。',
    prefecture: data.prefecture,
    area: data.area,
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: ['北海道', '洞爺湖温泉', '洞爺湖', 'イルミネーション', '羊蹄山', 'レイクビュー露天風呂', 'ホタテ', '冬旅行'],
    keywords: [
      '洞爺湖温泉 冬 イルミネーション ホテル',
      '洞爺湖 レイクビュー 露天風呂 宿泊',
      '洞爺湖 羊蹄山 絶景 宿 おすすめ',
      '噴火湾 ホタテ 温泉旅館 洞爺湖',
      '冬の北海道 洞爺湖 モデルコース',
      '洞爺湖温泉 北海ホテル 宿泊記'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// 記事3: 群馬県・水上温泉郷（みなかみ）＆谷川岳冠雪・利根川雪見露天
// ========================================================
function buildMinakamiPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('あらたし') || x.hotelName.includes('朝ねぼう')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 3);

  const spotOnsen = w.find(x => x.spotName === '水上温泉') || w[0];
  const spotMountain = w.find(x => x.spotName === '谷川岳') || w[1];
  const spotRiver = w.find(x => x.spotName === '利根川') || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100/60 rounded-3xl border border-emerald-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-emerald-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Answer</span>
      <span class="text-xs text-emerald-950 font-bold">11月〜1月の水上温泉郷・谷川岳冠雪＆利根川雪見露天風呂旅行総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【結論】水上温泉郷の冬旅：上越新幹線で東京から約66分！白銀の谷川岳パノラマと利根川渓谷雪見露天、上州牛会席</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      群馬県北端、利根川の最上流部に位置する「水上温泉郷（みなかみおんせんきょう）」。上越新幹線・上毛高原駅を利用すれば東京駅からわずか約66分という驚異的な好アクセスでありながら、川端康成の小説『雪国』の冒頭「国境の長いトンネルを抜けると雪国であった」の舞台となった清水トンネルの手前に位置し、11月下旬から1月にかけては首都圏のすぐ隣とは思えない豪快な大雪の世界へと一変します。日本百名山・谷川岳の荒々しい岩壁と純白の雪が織りなす冠雪パノラマは圧巻。利根川が刻んだ諏訪峡などの渓谷沿いに湯宿が建ち並び、せせらぎと粉雪が舞う渓流雪見露天風呂に浸かる贅沢は冬の水上ならではの醍醐味です。さらに群馬が誇る最高級黒毛和牛「上州牛」のすき焼き、もちもち食感の「上州もち豚鍋」、みなかみ名物の石窯焼きカレーなど、滋味豊かな冬の味覚を心ゆくまで堪能できます。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-emerald-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">都心からのアクセス</span>
        <strong class="text-emerald-900 text-sm">上越新幹線上毛高原駅まで約66分</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-emerald-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">温泉泉質</span>
        <strong class="text-stone-900 text-sm">カルシウム・ナトリウム-硫酸塩・塩化物泉</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-emerald-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">谷川岳冬絶景</span>
        <strong class="text-sky-700 text-sm">天神平ロープウェイ冠雪パノラマ</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-emerald-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の必食ご当地美味</span>
        <strong class="text-amber-800 text-sm">上州牛すき焼き・上州もち豚・焼きカレー</strong>
      </div>
    </div>
  </section>

  <!-- 1. 水上温泉郷の冬の真髄と利根川雪見露天 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2.5">
      🏔️ 利根川の清流と巨岩が雪化粧！清冽な空気の中で楽しむ渓谷雪見露天風呂
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      水上温泉の歴史は古く、室町時代の天文年間に若山牧水ら多くの文人墨客が訪れたことでも知られます。利根川の源流に近い清らかな水流と、両岸にそびえる奇岩・怪石が織りなす「諏訪峡」は水上を代表する名勝。11月下旬を過ぎると渓谷一面に純白の雪が降り積もり、岩肌に張り付いた氷柱（つらら）と碧色に澄んだ川面のコントラストが、まるで水墨画のような幽玄な冬景色を描き出します。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      泉質は無色透明でさらりとした感触のカルシウム・ナトリウム-硫酸塩・塩化物泉。古くから「傷の湯」「温まりの湯」として名高く、豊富な石膏成分（硫酸塩）が肌にしっとりとした潤いの膜を作り、塩化物泉の温まり効果によって湯上がり後もポカポカとした心地よい温感が長時間持続します。雪が舞い散る露天風呂に身を沈めれば、眼前には川のせせらぎと白銀の渓谷美。頭上を冷たい雪風が吹き抜ける中、首から下は極上の名湯に包まれる温度のグラデーションは、冬の温泉旅行でしか味わえない至高の快楽です。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      また、水上温泉郷は水上本温泉だけでなく、谷川温泉、宝川温泉、湯の小屋温泉など個性豊かな18の温泉地からなる「みなかみ18湯」を形成しています。巨石が連なる大露天風呂や静寂に包まれた秘湯の一軒宿など、好みのロケーションに合わせて多彩な湯めぐりが楽しめるのも大きな魅力です。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る水上・谷川岳の名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 水上温泉 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotOnsen.image || 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Minakami_Onsen_01.jpg'}" alt="${spotOnsen.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded">利根川渓谷の温泉街</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotOnsen.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotOnsen.extract || '群馬県利根郡みなかみ町にある温泉。利根川の渓谷沿いにホテルや旅館が立ち並び、谷川岳観光の拠点としても名高い。草津、伊香保、四万と並ぶ上毛の代表的温泉地。'}
            </p>
          </div>
          <p class="text-[11px] text-emerald-900 bg-emerald-50 p-2.5 rounded-lg font-medium border border-emerald-100">
            💡 温泉街には足湯や手湯が点在。諏訪峡大橋からの雪景色とバンジージャンプ台を眺める冬の散策路は爽快です。
          </p>
        </div>
      </div>

      <!-- Spot 2: 谷川岳 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotMountain.image || 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Tanigawadake.jpg'}" alt="${spotMountain.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-teal-100 text-teal-800 font-bold rounded">日本百名山・白銀の峰</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotMountain.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotMountain.extract || '群馬県と新潟県の県境にある三国山脈の山。標高1,977m。一ノ倉沢の断崖絶壁など峻険な山容で知られ、ロープウェイで天神平まで容易にアクセスできる。'}
            </p>
          </div>
          <p class="text-[11px] text-emerald-900 bg-emerald-50 p-2.5 rounded-lg font-medium border border-emerald-100">
            💡 谷川岳ロープウェイで標高1,319mの天神平へ上がれば、白銀の連峰パノラマと樹氷が広がる大自然の展望が楽しめます。
          </p>
        </div>
      </div>

      <!-- Spot 3: 利根川 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotRiver.image || 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Estuary_of_Tone_river_20081229.jpg'}" alt="${spotRiver.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-sky-100 text-sky-800 font-bold rounded">坂東太郎・清冽な源流</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotRiver.spotName}（源流・諏訪峡）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotRiver.extract || '大水上山を源流とし関東平野を潤す日本最大級の大河。みなかみ町内を流れる上流部は巨岩奇岩が連なる深い渓谷美を誇り、清冽な水質で知られる。'}
            </p>
          </div>
          <p class="text-[11px] text-emerald-900 bg-emerald-50 p-2.5 rounded-lg font-medium border border-emerald-100">
            💡 冬期の諏訪峡遊歩道は雪化粧した奇岩「笹笛橋」や「紅葉橋」がフォトジェニック。雪用ブーツでの散策がおすすめです。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 冬のみなかみグルメ深掘り -->
  <section class="space-y-4 my-8 p-6 bg-emerald-50/70 rounded-3xl border border-emerald-200">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b border-emerald-300 pb-2">
      🍲 上州牛すき焼き・上州もち豚・名物石窯焼きカレー！冬の温もりグルメ
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      雪国みなかみの冬の夜を彩るのは、群馬の大自然が育んだ上質な肉料理と温かい郷土の味覚です。群馬県が全国に誇る最高級黒毛和牛「上州牛」は、赤身の豊かなコクと脂の甘みのバランスが秀逸。冬の定番であるすき焼きでは、下仁田ねぎの甘みと割り下の香ばしさをまとった霜降り肉が口の中でとろけます。また、キメが細かく柔らかい「上州もち豚」の雪見鍋やしゃぶしゃぶは、噛むほどに甘い脂の旨味が溢れ出します。ランチには、水上温泉街名物の「みなかみ焼きカレー」が外せません。特製スパイスでじっくり煮込んだカレーにご飯、卵、たっぷりのチーズを乗せて石窯やオーブンで熱々に焼き上げた一品は、底の香ばしいおこげとトロトロのチーズが冷えた身体を芯から温めてくれます。
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-2">
      <div class="p-3.5 bg-white rounded-xl border border-emerald-200 space-y-1">
        <strong class="text-emerald-900 block font-bold text-sm">極上の霜降り「上州牛すき焼き」</strong>
        <p class="text-stone-600 leading-relaxed">
          群馬の清らかな水と澄んだ空気で育った銘柄牛。濃い目の割り下と新鮮な卵に絡めていただく贅沢は冬旅の真骨頂。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-emerald-200 space-y-1">
        <strong class="text-emerald-900 block font-bold text-sm">甘い脂と柔らかさ「上州もち豚鍋」</strong>
        <p class="text-stone-600 leading-relaxed">
          臭みがなくジューシーなブランド豚。大根おろしを雪に見立てた「みぞれ鍋」でさっぱりといただくのが冬の定番。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-emerald-200 space-y-1">
        <strong class="text-emerald-900 block font-bold text-sm">熱々チーズ香る「みなかみ焼きカレー」</strong>
        <p class="text-stone-600 leading-relaxed">
          水上発祥のご当地グルメ。オーブンでグツグツと焼かれたチーズと半熟卵、スパイシーなルーの三重奏が絶品です。
        </p>
      </div>
    </div>
  </section>

  <!-- 4. 楽天トラベル厳選：雪見露天と美食の水上名宿4選 -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2.5">
      🏨 楽天トラベル厳選：渓流雪見露天と上州牛会席を堪能できる水上宿4選
    </h2>
    <p class="text-xs md:text-sm text-stone-600 leading-relaxed">
      利根川のせせらぎを眼下に望む和モダン旅館から、アットホームな温もりに満ちた高評価の宿まで厳選しました。
    </p>

    <div class="space-y-6">
      <!-- 宿1: メイン宿 -->
      <div class="p-5 md:p-6 bg-white rounded-3xl border border-emerald-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full md:w-56 h-44 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-emerald-800 text-white font-bold text-[10px] rounded-full">高評価人気宿・ペット同伴可</span>
              <span class="text-xs text-stone-500">${mainHotel.address1}${mainHotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg md:text-xl leading-snug">${mainHotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${mainHotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-emerald-700 text-sm">⭐ 総合評価 ${mainHotel.reviewAverage}（クチコミ ${mainHotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${mainHotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs md:text-sm text-stone-700 bg-emerald-50/70 p-4 rounded-xl border border-emerald-100 leading-relaxed">
          ${mainHotel.hotelSpecial || '自然豊かな水上の地に佇むぬくもりの宿。温かい手料理と天然温泉、心地よいおもてなしでリピーターに愛される人気宿です。'}
        </p>
        <div class="text-right">
          <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-emerald-700 to-teal-800 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>

      <!-- 他の宿一覧 -->
      ${otherHotels.map((hotel, idx) => `
      <div class="p-5 bg-white rounded-3xl border border-stone-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${hotel.hotelImageUrl}" alt="${hotel.hotelName}" class="w-full md:w-56 h-40 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-stone-700 text-white font-bold text-[10px] rounded-full">厳選宿 #${idx + 2}</span>
              <span class="text-xs text-stone-500">${hotel.address1}${hotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg leading-snug">${hotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${hotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-emerald-700 text-sm">⭐ 総合評価 ${hotel.reviewAverage}（${hotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${hotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs text-stone-700 bg-stone-50 p-3.5 rounded-xl border border-stone-200 leading-relaxed">
          ${hotel.hotelSpecial || '利根川沿いに位置し、四季折々の渓谷美を堪能できる温泉宿。上州牛や地元の旬素材を取り入れた本格会席料理が自慢です。'}
        </p>
        <div class="text-right">
          <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-emerald-700 to-teal-800 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>`).join('')}
    </div>
  </section>

  <!-- 5. 1泊2日 水上温泉郷モデルコース -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2.5">
      🗺️ 新幹線で雪国へ直行！水上温泉郷＆谷川岳 1泊2日冬の王道モデルコース
    </h2>
    <div class="space-y-4 text-xs md:text-sm">
      <div class="p-4.5 bg-emerald-50/60 rounded-2xl border border-emerald-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-emerald-800 text-white font-bold text-xs rounded-md">1日目</span>
          <strong class="text-stone-900">東京駅 ➔ 上毛高原駅（約66分） ➔ 焼きカレーランチ ➔ 諏訪峡雪散策 ➔ 水上温泉チェックイン</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【09:40】東京駅から上越新幹線「たにがわ」に乗車（所要約66分）。<br>
          【10:50】上毛高原駅に到着。駅前から路線バスまたは宿の送迎車で水上温泉街へ（約20分）。<br>
          【11:30】水上温泉街の人気カフェで、熱々のチーズと半熟卵がとろける名物「みなかみ焼きカレー」でランチ。<br>
          【13:00】利根川沿いの「諏訪峡」へ。雪化粧した笹笛橋や奇岩を眺めながら白銀の散策路を歩く。<br>
          【14:30】水上駅前の温泉街でお土産（生どら焼き、湯の花まんじゅう）を物色。<br>
          【15:30】水上温泉の宿にチェックイン。利根川の渓谷を見下ろす雪見露天風呂へ直行し、川のせせらぎと粉雪に包まれながら至福の湯浴み。<br>
          【18:30】夕食。上州牛の本格すき焼きや上州もち豚の雪見鍋、舞茸の天ぷらなど群馬の味覚会席に舌鼓。<br>
          【21:00】ライトアップされた雪の庭園を眺めながら大浴場の内湯でポカポカに温まり就寝。
        </p>
      </div>
      <div class="p-4.5 bg-teal-50/60 rounded-2xl border border-teal-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-teal-800 text-white font-bold text-xs rounded-md">2日目</span>
          <strong class="text-stone-900">朝の雪見風呂 ➔ 谷川岳ロープウェイで天神平へ ➔ 土合駅（モグラ駅）見学 ➔ 上毛高原駅から帰路へ</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【07:30】朝の渓流露天風呂で爽快な目覚め。上州の新鮮卵や焼きたて魚が並ぶ和朝食を味わう。<br>
          【09:30】チェックアウト後、路線バスで「谷川岳ロープウェイ」へ（約25分）。<br>
          【10:00】ロープウェイで標高1,319mの「天神平」へ空中散歩。眼前に広がる谷川連峰の冠雪美と樹氷パノラマに息をのむ。<br>
          【12:00】山麓駅のビューレストランでランチ休憩。<br>
          【13:30】日本一のモグラ駅として有名なJR上越線「土合駅」へ立ち寄り。地下約70mのホームへ続く462段の階段を見学。<br>
          【15:00】水上駅・上毛高原駅へ戻り、駅ナカで地酒（谷川岳、水芭蕉）を購入して上越新幹線で東京へ。
        </p>
      </div>
    </div>
  </section>

  <!-- 6. FAQセクション -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2.5">
      ❓ 水上温泉郷の冬旅行 よくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-emerald-900">Q. 車なし（電車・新幹線）でも水上温泉や谷川岳を観光できますか？</strong>
        <p class="text-stone-700 leading-relaxed">
          水上温泉は「車なし旅行」に最もおすすめできる雪国温泉地のひとつです。上越新幹線・上毛高原駅やJR上越線・水上駅から、温泉街の主要旅館へは路線バス（関越交通）や宿の無料送迎バスが充実しています。谷川岳ロープウェイへも水上駅・上毛高原駅から直通バスが運行されているため、雪道運転の心配を一切せずに白銀の温泉と山岳絶景を満喫できます。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-emerald-900">Q. 冬の水上温泉の積雪量や路面凍結の注意点は？</strong>
        <p class="text-stone-700 leading-relaxed">
          水上温泉街周辺は12月中旬から1月にかけて本格的な積雪期に入り、数十センチから多いときには1メートル前後の雪が積もります。マイカーで訪れる場合は関越自動車道・水上IC手前からチェーン規制や冬用タイヤ規制がかかることが多く、スタッドレスタイヤの装着が絶対に不可欠です。谷川岳方面や奥利根方面へ向かう道路は急坂や凍結箇所が多いため、運転に不慣れな方は新幹線・公共交通機関の利用を強くおすすめします。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-emerald-900">Q. 谷川岳天神平へ行く際の服装や装備は？</strong>
        <p class="text-stone-700 leading-relaxed">
          谷川岳ロープウェイ天神平駅周辺は標高1,300m以上の高地であり、真冬は氷点下5〜10度まで冷え込みます。スキーやスノーボードをしない観光見学であっても、風を通さない厚手のダウンジャケット、手袋、ニット帽、ネックウォーマー、滑り止めの効いたスノーブーツや長靴が必須です。駅舎内やレストランは暖房が効いていますが、展望テラスに出る際は完全防寒で臨んでください。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. サイト内内部リンク集 -->
  <section class="my-8 p-5 bg-emerald-50/80 rounded-2xl border border-emerald-200">
    <h3 class="font-bold text-sm text-emerald-950 mb-3">📌 合わせて読みたい群馬・北関東の名湯特集</h3>
    <ul class="text-xs text-emerald-900 space-y-2 list-disc list-inside">
      <li><a href="/prefectures/gunma" class="underline font-bold hover:text-emerald-700">群馬県の人気温泉旅館・観光名所完全ガイド（水上・草津・伊香保・四万）</a></li>
      <li><a href="/posts/kusatsu-onsen-yubatake-winter-snow-guide" class="underline hover:text-emerald-700">草津温泉の湯畑ライトアップと雪見露天風呂！天下の名湯と上州牛会席ガイド</a></li>
      <li><a href="/posts/ikaho-onsen-stone-steps-winter-guide" class="underline hover:text-emerald-700">伊香保温泉の365段石段街と黄金の湯！冬のレトロ情緒と名物水沢うどん宿ガイド</a></li>
      <li><a href="/posts/shima-onsen-sekizenkan-retro-winter-guide" class="underline hover:text-emerald-700">四万温泉・積善館の千と千尋世界と四万ブルー！雪景色に灯る歴史名宿ガイド</a></li>
      <li><a href="/posts/manza-onsen-snow-milky-sulfur-winter-guide" class="underline hover:text-emerald-700">万座温泉の標高1800m白濁硫黄泉！白銀スノーパノラマと濁り湯治宿ガイド</a></li>
    </ul>
  </section>

</div>`;

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    description: '11月〜1月の水上温泉郷＆谷川岳を大特集！東京から新幹線でわずか約66分の白銀雪国リゾート。利根川の渓流雪見露天風呂、谷川岳ロープウェイ天神平冠雪パノラマ、上州牛すき焼き・上州もち豚鍋・焼きカレーを堪能する冬の厳選名宿とモデルコース。',
    prefecture: data.prefecture,
    area: data.area,
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: ['群馬県', '水上温泉', 'みなかみ', '谷川岳', '利根川', '雪見露天風呂', '上州牛', '冬旅行'],
    keywords: [
      '水上温泉 雪見露天 旅館 おすすめ',
      '谷川岳 ロープウェイ ホテル みなかみ',
      '水上温泉 上州牛 すき焼き 宿泊',
      'みなかみ 新幹線 車なし 温泉旅行',
      '冬の水上温泉 観光 モデルコース',
      '水上温泉 朝ねぼう 宿泊記'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// 記事4: 和歌山県・南紀勝浦温泉＆生マグロ最盛期・忘帰洞・熊野那智大社初詣
// ========================================================
function buildKatsuuraPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('万清楼') || x.hotelName.includes('浦島')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 3);

  const spotOnsen = w.find(x => x.spotName === '南紀勝浦温泉') || w[0];
  const spotShrine = w.find(x => x.spotName === '熊野那智大社') || w[1];
  const spotFalls = w.find(x => x.spotName === '那智の滝') || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-red-50 via-rose-50 to-orange-100/60 rounded-3xl border border-red-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-red-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Answer</span>
      <span class="text-xs text-red-950 font-bold">11月〜1月の南紀勝浦温泉・冬本番生マグロ＆忘帰洞・熊野那智大社旅行総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【結論】南紀勝浦温泉の冬旅：日本一の「生マグロ」最盛期、太平洋の波飛沫を望む海食洞窟露天と世界遺産・那智開運初詣</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      紀伊半島南端、太平洋の黒潮が打ち寄せる和歌山県那智勝浦町。11月から1月にかけての冬シーズンは、勝浦地方が年間で最も活気と魅力に満ちる黄金期を迎えます。勝浦漁港は「延縄（はえなわ）漁法による生鮮まぐろ水揚げ量日本一」を誇り、一度も凍結されることなく市場に並ぶ冬の「生まぐろ（本マグロ・メバチ・ビンチョウ）」は、モッチリとした吸い付くような食感と濃厚な脂の甘みが極上の極み。さらに、大正時代に紀州徳川家当主が「帰るのを忘れるほどである」と賞賛した大洞窟温泉「忘帰洞（ホテル浦島）」をはじめ、太平洋の荒波が目の前に迫る絶景の海露天風呂で温まる贅沢は他に類を見ません。車でわずか20分の山懐には世界遺産「熊野那智大社」「那智山青岸渡寺」、そして落差日本一を誇る名瀑「那智の滝」が鎮座し、新春の開運厄除け初詣や心身の蘇りを願う大人の冬旅に最適な目的地です。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-red-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">勝浦港生マグロ</span>
        <strong class="text-red-900 text-sm">生鮮まぐろ水揚げ日本一（完全非凍結）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-red-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">世界遺産社寺</span>
        <strong class="text-stone-900 text-sm">熊野那智大社・青岸渡寺・那智滝</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-red-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">名物海露天風呂</span>
        <strong class="text-blue-800 text-sm">忘帰洞・玄武洞（大洞窟温泉）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-red-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の必食ご当地美味</span>
        <strong class="text-amber-800 text-sm">生まぐろ尽くし会席・紀州クエ鍋・熊野牛</strong>
      </div>
    </div>
  </section>

  <!-- 1. 南紀勝浦の生まぐろと洞窟露天の魅力 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2.5">
      🐟 冷凍とは別次元のモッチリ食感！「勝浦港生まぐろ」と海と一体になる忘帰洞の奇跡
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      日本で流通するマグロの多くが遠洋漁業によるマイナス60度の冷凍マグロであるのに対し、勝浦漁港に水揚げされるマグロは近海延縄漁船が氷水で丁寧に冷やし込んで運ぶ「生鮮まぐろ（生まぐろ）」です。一度も凍結されていないため、細胞が壊れずドリップが一切出ません。口に運んだ瞬間に感じるのは、舌に吸い付くような濃密なモチモチ感と、魚本来の芳醇な鉄分・アミノ酸の甘み。特に11月〜1月の寒冷期は海水温の低下とともにマグロが厚い脂肪を蓄えるため、本マグロの大トロや中トロはもちろん、メバチマグロの赤身までねっとりとした極上の旨味に満ちあふれます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      美食を味わった後に訪れたいのが、南紀勝浦温泉の代名詞ともいえる洞窟露天風呂です。勝浦湾に突き出す岬の岩肌を波が侵食してできた巨大な海食洞の中に作られた「忘帰洞」や「玄武洞」は、幅数十メートルに及ぶ洞窟の開口部から太平洋の怒涛がすぐ間近に迫ります。荒波の重低音と潮の香りに包まれながら、乳白色やエメラルドグリーンに濁る含硫黄-ナトリウム・カルシウム-塩化物泉に浸かる体験は、大自然の懐に抱かれるような圧倒的スケールを誇ります。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      黒潮の影響を受ける南紀勝浦は、冬でも日中は12〜15度前後まで気温が上がり、本州の他の地域に比べて温暖で過ごしやすい気候も大きな魅力。厳しい寒風を避けてぬくぬくと温泉旅を楽しみたい旅行者にとって、まさに理想の越冬リゾートです。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る南紀勝浦の名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 南紀勝浦温泉 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotOnsen.image || 'https://upload.wikimedia.org/wikipedia/commons/4/41/Onsen_in_Nachikatsuura%2C_Japan.jpg'}" alt="${spotOnsen.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-red-100 text-red-800 font-bold rounded">紀の松島と天然港</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotOnsen.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotOnsen.extract || '和歌山県東牟婁郡那智勝浦町にある温泉。勝浦湾を囲むように温泉街が広がり、源泉数は170本を超える。海食洞窟を利用した忘帰洞など海と一体の露天風呂が有名。'}
            </p>
          </div>
          <p class="text-[11px] text-red-900 bg-red-50 p-2.5 rounded-lg font-medium border border-red-100">
            💡 勝浦港の桟橋から専用の観光船（亀の形をした船など）に乗ってホテル浦島や中の島へ渡るアプローチは旅情満点です。
          </p>
        </div>
      </div>

      <!-- Spot 2: 熊野那智大社 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotShrine.image || 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Shrine_Kumano_nachi01.jpg'}" alt="${spotShrine.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded">世界遺産・熊野三山</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotShrine.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotShrine.extract || '和歌山県那智勝浦町にある神社。熊野本宮大社、熊野速玉大社とともに熊野三山の一社。「紀伊山地の霊場と参詣道」として世界遺産に登録されている。'}
            </p>
          </div>
          <p class="text-[11px] text-red-900 bg-red-50 p-2.5 rounded-lg font-medium border border-red-100">
            💡 朱塗りの鮮やかな社殿と、隣接する青岸渡寺の三重塔。新春の初詣では万民豊楽や所願成就の御利益を願う参拝者で賑わいます。
          </p>
        </div>
      </div>

      <!-- Spot 3: 那智の滝 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotFalls.image || 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Nachi_Falls_2025-10-13.jpg/3840px-Nachi_Falls_2025-10-13.jpg'}" alt="${spotFalls.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded">落差133m・神体瀑布</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotFalls.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotFalls.extract || '那智勝浦町にある滝。一段の滝としては落差133mで日本一。熊野那智大社の別宮である飛瀧神社（ひろうじんじゃ）の御神体として古来より崇められている。'}
            </p>
          </div>
          <p class="text-[11px] text-red-900 bg-red-50 p-2.5 rounded-lg font-medium border border-red-100">
            💡 冬の澄み切った杉木立の中に轟く瀑布の音は神聖そのもの。滝壺のしぶきを浴びて延命長寿の御神水をいただくことができます。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 冬の勝浦グルメ深掘り -->
  <section class="space-y-4 my-8 p-6 bg-red-50/70 rounded-3xl border border-red-200">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b border-red-300 pb-2">
      🍣 まぐろ尽くし会席・幻の紀州本クエ・めはり寿司！南紀の海の幸の頂点
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      南紀勝浦の料理旅館で提供される夕食は、まさに生マグロのフルコース。艶やかに輝く大トロ・中トロ・赤身の刺身盛り合わせはもちろん、希少部位の「マグロのカマ塩焼き」「ネギマ鍋」「マグロの胃袋の酢味噌和え」など、一頭買いする料理宿ならではの多彩なマグロ料理が並びます。さらに冬の紀州といえば、白身魚の王様「天然本クエ（九絵）」の鍋も見逃せません。「クエを食ったら他の魚は食えん」と称されるほど、ゼラチン質をたっぷり含んだ皮とふっくらとした白身から溶け出す出汁は至高の美味。ご飯物には高菜の浅漬けで温かいご飯を包んだ伝統の郷土料理「めはり寿司」や、南高梅を添えた茶粥など、滋味深い和歌山の味が旅人を温かく満たしてくれます。
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-2">
      <div class="p-3.5 bg-white rounded-xl border border-red-200 space-y-1">
        <strong class="text-red-900 block font-bold text-sm">極上のねっとり感「勝浦生まぐろ」</strong>
        <p class="text-stone-600 leading-relaxed">
          非冷凍だからこそ味わえる弾力と濃厚なコク。大トロの甘みと赤身のキレが絶妙なハーモニーを奏でます。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-red-200 space-y-1">
        <strong class="text-red-900 block font-bold text-sm">コラーゲンたっぷり「紀州本クエ鍋」</strong>
        <p class="text-stone-600 leading-relaxed">
          冬が旬の幻の高級魚。上品な脂とプルプルのゼラチン質が溶け込んだ鍋出汁で作る最後の雑炊は格別の味。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-red-200 space-y-1">
        <strong class="text-red-900 block font-bold text-sm">郷土のソウルフード「めはり寿司」</strong>
        <p class="text-stone-600 leading-relaxed">
          目を見張るほど大きな口を開けて食べることから名付けられた伝統食。高菜のシャキシャキ感と塩気が絶品。
        </p>
      </div>
    </div>
  </section>

  <!-- 4. 楽天トラベル厳選：絶景海露天と生まぐろの勝浦名宿4選 -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2.5">
      🏨 楽天トラベル厳選：洞窟露天風呂と極上生まぐろ会席を味わう勝浦宿4選
    </h2>
    <p class="text-xs md:text-sm text-stone-600 leading-relaxed">
      勝浦港の桟橋近くに佇む割烹料理旅館から、大洞窟風呂「忘帰洞」を擁する名門ホテルまで、楽天トラベル高評価宿を厳選しました。
    </p>

    <div class="space-y-6">
      <!-- 宿1: メイン宿 -->
      <div class="p-5 md:p-6 bg-white rounded-3xl border border-red-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full md:w-56 h-44 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-red-800 text-white font-bold text-[10px] rounded-full">勝浦港目の前・割烹料理自慢</span>
              <span class="text-xs text-stone-500">${mainHotel.address1}${mainHotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg md:text-xl leading-snug">${mainHotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${mainHotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-red-700 text-sm">⭐ 総合評価 ${mainHotel.reviewAverage}（クチコミ ${mainHotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${mainHotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs md:text-sm text-stone-700 bg-red-50/70 p-4 rounded-xl border border-red-100 leading-relaxed">
          ${mainHotel.hotelSpecial || '勝浦港のすぐ目の前に佇む本格料理旅館。本場の生まぐろを贅沢に使った会席料理と、落ち着いた数寄屋造りの客室でおもてなしいたします。姉妹館ホテル浦島の温泉も利用可能。'}
        </p>
        <div class="text-right">
          <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-red-700 to-rose-800 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>

      <!-- 他の宿一覧 -->
      ${otherHotels.map((hotel, idx) => `
      <div class="p-5 bg-white rounded-3xl border border-stone-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${hotel.hotelImageUrl}" alt="${hotel.hotelName}" class="w-full md:w-56 h-40 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-stone-700 text-white font-bold text-[10px] rounded-full">厳選宿 #${idx + 2}</span>
              <span class="text-xs text-stone-500">${hotel.address1}${hotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg leading-snug">${hotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${hotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-red-700 text-sm">⭐ 総合評価 ${hotel.reviewAverage}（${hotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${hotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs text-stone-700 bg-stone-50 p-3.5 rounded-xl border border-stone-200 leading-relaxed">
          ${hotel.hotelSpecial || '太平洋を一望する大洞窟風呂や多彩な源泉掛け流し浴槽を完備。まぐろをはじめとする勝浦の新鮮な海の幸を堪能できる温泉宿です。'}
        </p>
        <div class="text-right">
          <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-red-700 to-rose-800 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>`).join('')}
    </div>
  </section>

  <!-- 5. 1泊2日 南紀勝浦温泉モデルコース -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-red-700 pb-2.5">
      🗺️ 生まぐろ満喫と世界遺産祈願！南紀勝浦温泉 1泊2日冬の王道モデルコース
    </h2>
    <div class="space-y-4 text-xs md:text-sm">
      <div class="p-4.5 bg-red-50/60 rounded-2xl border border-red-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-red-800 text-white font-bold text-xs rounded-md">1日目</span>
          <strong class="text-stone-900">紀伊勝浦駅 ➔ 勝浦漁港市場で生まぐろ丼ランチ ➔ 熊野那智大社＆那智の滝参拝 ➔ 洞窟露天風呂へ</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【11:30】JR紀勢本線・紀伊勝浦駅に到着（特急くろしお利用、または南紀白浜空港からレンタカーで約70分）。<br>
          【12:00】勝浦港周辺のにぎわい市場で、水揚げされたばかりの新鮮な「生まぐろ三色丼」をランチに味わう。<br>
          【13:30】車または路線バスで山間へ進み、世界遺産「熊野那智大社」へ（約20分）。467段の石段を登り、朱塗りの本殿で開運・諸願成就の初詣。<br>
          【15:00】隣接する青岸渡寺の三重塔と、御神体である落差133mの名瀑「那智の滝」を拝観。マイナスイオンと神聖な空気を浴びる。<br>
          【16:30】南紀勝浦温泉の宿にチェックイン。船に乗って海を渡る風情を満喫。<br>
          【17:30】名物の大洞窟露天風呂「忘帰洞」へ。夕暮れの太平洋の荒波と潮騒の音に包まれながら、白濁の天然温泉で至福の湯浴み。<br>
          【19:30】夕食。勝浦港直送の生まぐろフルコース（刺身、カマ焼き、ねぎま鍋）と紀州地酒を堪能。
        </p>
      </div>
      <div class="p-4.5 bg-rose-50/60 rounded-2xl border border-rose-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-rose-800 text-white font-bold text-xs rounded-md">2日目</span>
          <strong class="text-stone-900">朝風呂＆まぐろ市場見学 ➔ 串本・橋杭岩絶景 ➔ 本州最南端潮岬 ➔ 帰路へ</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【07:00】太平洋から昇る朝日を眺めながら海露天風呂で朝湯を満喫。<br>
          【08:00】朝食で名物茶粥やマグロフレーク、南高梅を味わう。<br>
          【09:00】チェックアウト後、勝浦漁港のマグロセリ市を見学（一般見学デッキから整然と並ぶ巨大マグロを眺める）。<br>
          【10:30】海岸線を南下して串本町へ。国の名勝・天然記念物「橋杭岩（はしぐいいわ）」へ（車で約35分）。海上に約850mにわたって立ち並ぶ奇岩群を鑑賞。<br>
          【12:00】本州最南端の岬「潮岬」へ。白亜の灯台と雄大な太平洋の水平線を見渡す。<br>
          【13:00】串本の海鮮処で名物「近大マグロ」やカツオ茶漬けのランチ。<br>
          【15:00】白浜空港または紀伊田辺・和歌山方面へ向かい、帰路へ。
        </p>
      </div>
    </div>
  </section>

  <!-- 6. FAQセクション -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-red-700 pb-2.5">
      ❓ 南紀勝浦温泉の冬旅行 よくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-red-900">Q. 南紀勝浦の生まぐろの旬はいつですか？冷凍マグロとどう違いますか？</strong>
        <p class="text-stone-700 leading-relaxed">
          勝浦港の生マグロは通年水揚げされますが、特に身が引き締まり濃厚な脂が乗る11月から2月の冬期が年間最高の旬です。冷凍マグロは解凍時にドリップ（旨味成分を含む水分）が外に出てしまいますが、生まぐろは一度も凍らせないため、水分やアミノ酸が細胞内に閉じ込められており、驚くほどしっとりとしたモチモチ食感と芳醇な風味が保たれます。一度本場の生まぐろを口にすると、マグロの概念が変わると言われるほどの美味しさです。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-red-900">Q. 冬の南紀勝浦の気候は？スタッドレスタイヤは必要ですか？</strong>
        <p class="text-stone-700 leading-relaxed">
          南紀勝浦は太平洋の黒潮の影響を受けるため、本州の中でも非常に温暖です。真冬の12月〜1月でも日中は10〜15度近くまで上がり、海岸沿いでは雪が積もることはほとんどありません。沿岸部の国道42号線を走る分にはノーマルタイヤで問題ない日がほとんどです。ただし、内陸の高野山方面や奈良県境の山間部（十津川経由）を通過する場合は積雪・路面凍結のおそれがあるため、冬用タイヤまたは沿岸ルート（阪和道・すさみIC経由）の利用をおすすめします。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-red-900">Q. ホテル浦島の「忘帰洞」は日帰り入浴や姉妹館宿泊でも利用できますか？</strong>
        <p class="text-stone-700 leading-relaxed">
          ホテル浦島の忘帰洞は、日帰り入浴（受付時間や料金は公式サイト要確認）でも利用可能です。また、勝浦港周辺の料理旅館「万清楼」などの系列宿に宿泊した場合は、ホテル浦島への専用送迎船と忘帰洞を含む館内湯めぐりが無料で利用できる特典が付いているプランも多く、落ち着いた小規模旅館の美食と大ホテルの豪快な洞窟風呂の両方を楽しむことができます。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. サイト内内部リンク集 -->
  <section class="my-8 p-5 bg-red-50/80 rounded-2xl border border-red-200">
    <h3 class="font-bold text-sm text-red-950 mb-3">📌 合わせて読みたい和歌山・紀伊半島の冬名湯特集</h3>
    <ul class="text-xs text-red-900 space-y-2 list-disc list-inside">
      <li><a href="/prefectures/wakayama" class="underline font-bold hover:text-red-700">和歌山県の人気温泉旅館・観光名所完全ガイド（勝浦・白浜・熊野古道・高野山）</a></li>
      <li><a href="/posts/nanki-shirahama-senjojiki-sunset-hotspring-guide" class="underline hover:text-red-700">南紀白浜温泉の白良浜冬景色と崎の湯波打ち際露天！クエ鍋会席とリゾートホテルガイド</a></li>
      <li><a href="/posts/kumano-kodo-world-heritage-pilgrimage-hotels-guide" class="underline hover:text-red-700">世界遺産熊野古道と湯の峰温泉つぼ湯！神聖な祈りの道と歴史湯宿ガイド</a></li>
      <li><a href="/posts/katsuura-onsen-tuna-feast-oceanview-hotels-guide" class="underline hover:text-red-700">南紀勝浦温泉の生マグロ食べ比べと絶景オーシャンビュー宿おすすめ比較ガイド</a></li>
      <li><a href="/posts/koyasan-shukubo-temple-winter-retreat-guide" class="underline hover:text-red-700">高野山の白銀静寂宿坊体験！本格精進料理と朝のお勤めで心洗われる冬旅ガイド</a></li>
    </ul>
  </section>

</div>`;

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    description: '11月〜1月の南紀勝浦温泉＆熊野那智大社を徹底ガイド！日本一の勝浦港「生まぐろ」最盛期の濃厚な旨味、太平洋の荒波が間近に迫る大洞窟露天風呂「忘帰洞」、世界遺産熊野那智大社と落差133m那智の滝の新春開運初詣を巡る厳選名宿と1泊2日モデルプラン。',
    prefecture: data.prefecture,
    area: data.area,
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: ['和歌山県', '南紀勝浦温泉', '生まぐろ', '忘帰洞', '熊野那智大社', '那智の滝', '洞窟風呂', '冬旅行'],
    keywords: [
      '南紀勝浦温泉 生マグロ 旅館 おすすめ',
      'ホテル浦島 忘帰洞 宿泊 予約',
      '熊野那智大社 初詣 近く ホテル',
      '那智勝浦 洞窟露天風呂 温泉宿',
      '冬の南紀勝浦 モデルコース',
      '勝浦温泉 万清楼 宿泊記'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

// ========================================================
// 記事5: 大分県・長湯温泉＆奇跡の天然炭酸泉・芹川雪景色・豊後牛
// ========================================================
function buildNagayuPost(data) {
  const h = data.hotels;
  const w = data.wikiSpotsData;
  const mainHotel = h.find(x => x.hotelName.includes('丸長') || x.hotelName.includes('かどや')) || h[0];
  const otherHotels = h.filter(x => x.hotelNo !== mainHotel.hotelNo).slice(0, 3);

  const spotOnsen = w.find(x => x.spotName === '長湯温泉') || w[0];
  const spotCastle = w.find(x => x.spotName === '岡城跡') || w[1];
  const spotMountain = w.find(x => x.spotName === '九重連山') || w[2];

  const reviewHtml = `<div class="space-y-10 text-stone-800 leading-relaxed font-sans">

  <!-- GEO & AI-SEO Executive Answer Block -->
  <section class="p-6 md:p-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-100/60 rounded-3xl border border-teal-200 shadow-sm">
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-teal-800 text-white text-xs font-black rounded-full uppercase tracking-wider">GEO & AI Search Answer</span>
      <span class="text-xs text-teal-950 font-bold">11月〜1月の長湯温泉・世界屈指の天然炭酸泉＆久住連山雪景色旅行総括</span>
    </div>
    <h2 class="text-xl md:text-2xl font-black text-stone-900 mb-3">【結論】長湯温泉の冬旅：世界屈指の「高濃度天然炭酸泉」で全身銀の気泡浴！芹川雪見露天と極上豊後牛・スッポン鍋</h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed mb-5">
      日本一のおんせん県・大分県の中でも、阿蘇くじゅう国立公園の南麓、竹田市直入町に佇む隠れ里「長湯温泉（ながゆおんせん）」。11月から1月の冬期は、背後にそびえる久住連山が白く冠雪し、芹川（せりかわ）のせせらぎ沿いに静寂の湯煙が立ち上る情緒豊かな湯治の世界を迎えます。長湯温泉の最大の特徴は、世界でもドイツのバート・ナウハイムと並び称される「世界屈指の高濃度天然炭酸泉（炭酸水素塩泉）」。お湯に浸かった瞬間に全身がびっしりと無数の銀色の炭酸気泡に包まれ、炭酸ガスが皮膚から直接吸収されて末梢血管を拡張。32度〜38度のぬる湯でありながら、湯上がりには身体の芯からカッカと熱い血行促進と驚くべき保温効果をもたらします。名建築家・藤森照信氏が設計した「ラムネ温泉館」や、川の中に佇む開放的な混浴露天「ガニ湯」、そして冬の味覚である名物スッポン鍋や大分県産黒毛和牛「豊後牛（おおいた和牛）」の陶板焼きとともに、心身を根底から解きほぐす奇跡の湯治ステイが実現します。
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
      <div class="p-3.5 bg-white rounded-2xl border border-teal-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">泉質世界屈指</span>
        <strong class="text-teal-900 text-sm">高濃度遊離炭酸含有泉（天然ラムネ温泉）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-teal-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">炭酸泉の効能</span>
        <strong class="text-stone-900 text-sm">血流促進・高血圧改善・疲労回復・美肌</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-teal-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">周辺歴史名所</span>
        <strong class="text-stone-700 text-sm">国史跡・岡城跡（荒城の月の舞台）</strong>
      </div>
      <div class="p-3.5 bg-white rounded-2xl border border-teal-100 shadow-2xs">
        <span class="text-stone-500 block font-semibold mb-1">冬の二大名物美味</span>
        <strong class="text-amber-800 text-sm">名物スッポン鍋会席・豊後牛陶板焼き</strong>
      </div>
    </div>
  </section>

  <!-- 1. 長湯温泉の天然炭酸泉の奇跡 -->
  <section class="space-y-4">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      🫧 「飲んで効き、長湯して利く」！全身が銀の泡に包まれる世界屈指の天然炭酸泉
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      炭酸泉とは、水1リットル中に遊離炭酸（炭酸ガス）が1,000mg以上溶け込んだ温泉のことを指します。炭酸ガスは温度が高くなると気化して湯の中から抜けてしまう性質があるため、高温の源泉が多い日本において、入浴に適した温度を保ちながら高濃度の炭酸ガスを保持している温泉は極めて希少です。長湯温泉は、1,000mgを優に超え、最大で3,000mg/L以上もの遊離炭酸を含む驚異的な源泉が自噴しています。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      浴槽に身体を沈めると、数秒で肌の表面にびっしりと細かな銀色の気泡が付着し始めます。手で払っても払っても次から次へと新しい気泡が湧き上がり、まるでシャンパンやサイダーのプールに浸かっているかのよう。皮膚から吸収された炭酸ガスは血管壁を刺激して一酸化窒素（NO）を分泌させ、毛細血管を通常の数倍に拡張します。これにより、32〜37度という体温に近いぬるめの湯であるにもかかわらず、入浴後5分もすると心臓に負担をかけることなく血流が全身を駆け巡り、肌がほんのりと赤らみ、身体の芯からジンジンと温まってきます。
    </p>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      古くから「飲んで効き、長湯して利く長湯雨、心臓胃腸に血の薬」と詠われたように、飲泉場ではシュワシュワとした微炭酸とミネラルの味わいを楽しむことができ、胃腸の働きを活発にしてくれます。湯船の縁や床には、重炭酸土類泉のミネラル成分が幾重にも結晶化した「析出物」が千枚田のようにこびりつき、大地のエネルギーの濃厚さを物語っています。
    </p>
  </section>

  <!-- 2. Wikipedia 実写観光スポットギャラリー -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      📷 Wikipedia公式アーカイブで巡る長湯・竹田の名所（実写ギャラリー）
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Spot 1: 長湯温泉・ガニ湯 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotOnsen.image || 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Ganiyu.JPG'}" alt="${spotOnsen.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-teal-100 text-teal-800 font-bold rounded">芹川沿いの名物露天</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotOnsen.spotName}（ガニ湯）</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotOnsen.extract || '大分県竹田市直入町にある温泉。日本屈指の炭酸泉として知られる。芹川の河原にはカニの形をした名物露天風呂「ガニ湯」があり、川のせせらぎを聞きながら入浴できる。'}
            </p>
          </div>
          <p class="text-[11px] text-teal-900 bg-teal-50 p-2.5 rounded-lg font-medium border border-teal-100">
            💡 ガニ湯は川の河原にあり誰でも無料で利用可能（水着着用推奨）。橋の上からの視線と大自然の開放感がスリル満点です。
          </p>
        </div>
      </div>

      <!-- Spot 2: 岡城跡 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotCastle.image || 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Okajoshi.jpg'}" alt="${spotCastle.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-stone-100 text-stone-800 font-bold rounded">国指定史跡・日本百名城</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotCastle.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotCastle.extract || '大分県竹田市にあった城。断崖絶壁の上に築かれた難攻不落の山城で、滝廉太郎が名曲「荒城の月」を着想した舞台として名高い。雄大な石垣群が圧巻。'}
            </p>
          </div>
          <p class="text-[11px] text-teal-900 bg-teal-50 p-2.5 rounded-lg font-medium border border-teal-100">
            💡 冬の澄んだ青空の下、雪がうっすらと積もった天空の石垣群からくじゅう連山や阿蘇山を望む絶景は息をのむ美しさです。
          </p>
        </div>
      </div>

      <!-- Spot 3: 九重連山 -->
      <div class="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
        <img src="${spotMountain.image || 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Makinoto_Pass_-_01.jpg'}" alt="${spotMountain.spotName}" class="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        <div class="p-4 flex-grow flex flex-col justify-between space-y-2">
          <div>
            <span class="text-[10px] px-2 py-0.5 bg-sky-100 text-sky-800 font-bold rounded">九州本土最高峰・白銀連峰</span>
            <h3 class="font-bold text-stone-900 text-base mt-1">${spotMountain.spotName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed mt-1">
              ${spotMountain.extract || '大分県久住高原北部に連なる火山群。最高峰の中岳（1,791m）をはじめ久住山などが連なる。阿蘇くじゅう国立公園に指定され、冬は樹氷や霧氷の絶景が広がる。'}
            </p>
          </div>
          <p class="text-[11px] text-teal-900 bg-teal-50 p-2.5 rounded-lg font-medium border border-teal-100">
            💡 牧ノ戸峠やくじゅうパノラマロードからは、冠雪した山々と広大なススキ野原が織りなす冬の高原絶景ドライブが楽しめます。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 冬の長湯温泉グルメ深掘り -->
  <section class="space-y-4 my-8 p-6 bg-teal-50/70 rounded-3xl border border-teal-200">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b border-teal-300 pb-2">
      🍲 名物スッポン鍋会席・極上おおいた和牛・エノハ骨酒！清流の恵みと冬の馳走
    </h2>
    <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
      長湯温泉の郷土料理といえば、清流・芹川の良質な水と温泉熱を利用して育まれた「スッポン料理」が古くからの名物です。スッポンは良質なコラーゲンやアミノ酸、必須脂肪酸が凝縮された究極の滋養強壮食材。じっくりと出汁をとったスッポン鍋は、臭みが一切なく澄んだ黄金色のスープが絶品で、プルプルの身とスープを吸った冬野菜が冷えた胃腸にじんわりと染み渡ります。締めには旨味がすべて溶け出した雑炊を味わえば、翌朝の肌のハリが格段に違います。さらに、きめ細やかな霜降りと上品な脂の甘みを誇る大分県産黒毛和牛「豊後牛（おおいた和牛）」の陶板焼きやすき焼き、芹川の清流で獲れる川魚「エノハ（ヤマメ）」の塩焼きや香ばしい骨酒など、山里ならではの温かな美食が旅情を深めてくれます。
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-2">
      <div class="p-3.5 bg-white rounded-xl border border-teal-200 space-y-1">
        <strong class="text-teal-900 block font-bold text-sm">極上の美肌滋養食「名物スッポン鍋」</strong>
        <p class="text-stone-600 leading-relaxed">
          芹川の良水で育つスッポンは臭みがなく上品。コラーゲンたっぷりの黄金スープは体の芯から温まる極上の逸品。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-teal-200 space-y-1">
        <strong class="text-teal-900 block font-bold text-sm">肉質日本一受賞「豊後牛ステーキ」</strong>
        <p class="text-stone-600 leading-relaxed">
          オレイン酸を豊富に含み、とろけるような口どけと豊かな風味が自慢のブランド和牛。陶板焼きの香ばしさは格別。
        </p>
      </div>
      <div class="p-3.5 bg-white rounded-xl border border-teal-200 space-y-1">
        <strong class="text-teal-900 block font-bold text-sm">清流の女王「エノハ（ヤマメ）料理」</strong>
        <p class="text-stone-600 leading-relaxed">
          川のせせらぎが育む淡水魚。香ばしく焼き上げた骨酒は、芳醇な魚の旨味が熱燗に溶け出し冬の夜を至福に彩ります。
        </p>
      </div>
    </div>
  </section>

  <!-- 4. 楽天トラベル厳選：炭酸泉と郷土美味の長湯名宿4選 -->
  <section class="space-y-6 my-8">
    <h2 class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      🏨 楽天トラベル厳選：源泉掛け流し炭酸泉と山里会席を堪能する長湯宿4選
    </h2>
    <p class="text-xs md:text-sm text-stone-600 leading-relaxed">
      芹川のせせらぎを望む純和風老舗旅館から、モダンな湯治スタイルを提案する高評価宿まで、楽天トラベルで評判の名宿をセレクトしました。
    </p>

    <div class="space-y-6">
      <!-- 宿1: メイン宿 -->
      <div class="p-5 md:p-6 bg-white rounded-3xl border border-teal-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${mainHotel.hotelImageUrl}" alt="${mainHotel.hotelName}" class="w-full md:w-56 h-44 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-teal-800 text-white font-bold text-[10px] rounded-full">高評価・源泉掛け流し炭酸泉</span>
              <span class="text-xs text-stone-500">${mainHotel.address1}${mainHotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg md:text-xl leading-snug">${mainHotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${mainHotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-teal-700 text-sm">⭐ 総合評価 ${mainHotel.reviewAverage}（クチコミ ${mainHotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${mainHotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs md:text-sm text-stone-700 bg-teal-50/70 p-4 rounded-xl border border-teal-100 leading-relaxed">
          ${mainHotel.hotelSpecial || '濃厚な天然炭酸泉を掛け流しで堪能できる静かな宿。名物スッポン鍋や豊後牛など地元の旬の素材を活かした心のこもった料理が自慢です。'}
        </p>
        <div class="text-right">
          <a href="${mainHotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-teal-700 to-emerald-800 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>

      <!-- 他の宿一覧 -->
      ${otherHotels.map((hotel, idx) => `
      <div class="p-5 bg-white rounded-3xl border border-stone-200 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row gap-5 items-center">
          <img src="${hotel.hotelImageUrl}" alt="${hotel.hotelName}" class="w-full md:w-56 h-40 object-cover rounded-2xl shadow-inner flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 bg-stone-700 text-white font-bold text-[10px] rounded-full">厳選宿 #${idx + 2}</span>
              <span class="text-xs text-stone-500">${hotel.address1}${hotel.address2}</span>
            </div>
            <h3 class="font-bold text-stone-900 text-lg leading-snug">${hotel.hotelName}</h3>
            <p class="text-xs text-stone-600 leading-relaxed">${hotel.access}</p>
            <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
              <span class="font-extrabold text-teal-700 text-sm">⭐ 総合評価 ${hotel.reviewAverage}（${hotel.reviewCount}件）</span>
              <span class="font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-lg">宿泊目安: ¥${hotel.hotelMinCharge.toLocaleString()}〜 / 名</span>
            </div>
          </div>
        </div>
        <p class="text-xs text-stone-700 bg-stone-50 p-3.5 rounded-xl border border-stone-200 leading-relaxed">
          ${hotel.hotelSpecial || '芹川のほとりに位置し、豊かな炭酸泉に浸かりながらのんびりと過ごせる癒やしの温泉宿。郷土の温かいおもてなしをお届けします。'}
        </p>
        <div class="text-right">
          <a href="${hotel.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-teal-700 to-emerald-800 text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition">
            楽天トラベルでプラン・空室状況を見る ≫
          </a>
        </div>
      </div>`).join('')}
    </div>
  </section>

  <!-- 5. 1泊2日 長湯温泉モデルコース -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      🗺️ 泡の奇跡と山里の静寂！長湯温泉 1泊2日冬の王道湯治モデルコース
    </h2>
    <div class="space-y-4 text-xs md:text-sm">
      <div class="p-4.5 bg-teal-50/60 rounded-2xl border border-teal-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-teal-800 text-white font-bold text-xs rounded-md">1日目</span>
          <strong class="text-stone-900">大分空港（または熊本空港） ➔ 竹田城下町・岡城跡見学 ➔ ラムネ温泉館立ち寄り ➔ 長湯温泉チェックイン</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【11:00】大分空港に到着。レンタカーで大分自動車道経由、竹田市方面へドライブ（約1時間30分）。<br>
          【12:30】竹田城下町で名物「だんご汁」やとり天定食で素朴な郷土ランチ。<br>
          【13:45】国の史跡「岡城跡」へ。断崖絶壁に築かれた天空の石垣群を歩き、滝廉太郎像と冠雪したくじゅう連山のパノラマを望む。<br>
          【15:15】長湯温泉へ移動し、立ち寄り湯「ラムネ温泉館」へ。焼杉と漆喰のモダンな建築の中で、32度の露天炭酸泉に浸かり、全身を包むシュワシュワの銀の気泡を初体験。<br>
          【16:30】今宵の宿にチェックイン。芹川沿いの静寂に耳を澄ませる。<br>
          【18:00】夕食。芹川の清流が育んだ名物スッポン鍋会席、または豊後牛の陶板焼きを味わい、熱燗のエノハ骨酒に舌鼓。<br>
          【20:30】宿の内湯・露天風呂でじっくりと炭酸水素塩泉に浸かり、湯上がりのポカポカ感に包まれて熟睡。
        </p>
      </div>
      <div class="p-4.5 bg-emerald-50/60 rounded-2xl border border-emerald-200 space-y-2">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 bg-emerald-800 text-white font-bold text-xs rounded-md">2日目</span>
          <strong class="text-stone-900">朝の飲泉＆ガニ湯散策 ➔ くじゅう高原冬ドライブ ➔ 由布院または別府へ</strong>
        </div>
        <p class="text-stone-700 leading-relaxed">
          【07:30】朝風呂で身体を目覚めさせ、飲泉場で胃腸を整える炭酸泉を一杯。<br>
          【08:00】地元産コシヒカリと自家製味噌の味噌汁、温泉卵が並ぶ素朴な和朝食。<br>
          【09:30】チェックアウト後、芹川沿いを散策。川の中に佇む名物「ガニ湯」やレトロな御前湯の外観を眺める。<br>
          【10:30】車で「くじゅうパノラマロード」へドライブ。白銀に輝く広大な久住高原と冠雪した連山の雄大さに圧倒される。<br>
          【12:00】久住ワイナリーで石窯ピザのランチ、または黒川温泉・由布院温泉方面へ足を延ばす。<br>
          【15:30】大分空港または熊本空港へ向かい、レンタカーを返却して帰路へ。
        </p>
      </div>
    </div>
  </section>

  <!-- 6. FAQセクション -->
  <section class="space-y-4 my-8">
    <h2 class="text-lg md:text-xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2.5">
      ❓ 長湯温泉の冬旅行 よくある質問（FAQ）
    </h2>
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-teal-900">Q. 天然炭酸泉は冬に入るとぬるくて寒くないですか？</strong>
        <p class="text-stone-700 leading-relaxed">
          ラムネ温泉館などの露天炭酸泉は32度前後のぬる湯ですが、長湯温泉の多くの旅館では、炭酸ガスを逃がさないように工夫した41〜42度の加温浴槽や炭酸水素塩泉の温かい内湯が併設されています。ぬるめの炭酸泉に15〜20分じっくり浸かって血管を拡張させた後、温かい浴槽で仕上げを行う「温冷交互浴」を行うことで、真冬でも身体の芯まで驚くほどポカポカと温まります。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-teal-900">Q. 冬期の久住・長湯周辺の道路状況とアクセス方法は？</strong>
        <p class="text-stone-700 leading-relaxed">
          長湯温泉自体は標高約400mの盆地に位置するため大雪になることは稀ですが、熊本方面や湯布院方面から峠を越える「やまなみハイウェイ」や「牧ノ戸峠（標高1,330m）」などは冬期に積雪や路面凍結が発生します。12月〜1月に車で訪れる際はスタッドレスタイヤの装着が安心です。雪道を避けたい場合は、大分市街・大分米良IC方面から国道10号・中九州横断道路を経由するルートが標高が低く走りやすいためおすすめです。
        </p>
      </div>
      <div class="p-4 bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-1.5">
        <strong class="text-stone-900 block font-bold text-teal-900">Q. 名物「ガニ湯」の入浴方法やマナーは？</strong>
        <p class="text-stone-700 leading-relaxed">
          ガニ湯は芹川の川原にある無料の混浴共同露天風呂です。脱衣所は道路下の橋のたもとに簡易的な目隠しがあるのみで、川沿いの道路や民家から見通せる非常に開放的な造りになっています。入浴の際は水着や湯浴み着の着用が推奨されています。女性でプライベートに炭酸泉を楽しみたい場合は、ラムネ温泉館の家族風呂や各旅館の内湯・貸切風呂を利用するのが安心です。
        </p>
      </div>
    </div>
  </section>

  <!-- 7. サイト内内部リンク集 -->
  <section class="my-8 p-5 bg-teal-50/80 rounded-2xl border border-teal-200">
    <h3 class="font-bold text-sm text-teal-950 mb-3">📌 合わせて読みたい大分・九州の冬名湯特集</h3>
    <ul class="text-xs text-teal-900 space-y-2 list-disc list-inside">
      <li><a href="/prefectures/oita" class="underline font-bold hover:text-teal-700">大分県の人気温泉旅館・観光名所完全ガイド（長湯・別府・由布院・日田）</a></li>
      <li><a href="/posts/beppu-onsen-jigoku-meguri-winter-guide" class="underline hover:text-teal-700">別府温泉の地獄めぐりと八湯湯治！湯煙ライトアップと関アジ関サバ宿ガイド</a></li>
      <li><a href="/posts/yufuin-onsen-kinrin-lake-morning-mist-guide" class="underline hover:text-teal-700">由布院温泉・金鱗湖の冬朝霧と由布岳雪景色！大人の隠れ家離れ宿おすすめガイド</a></li>
      <li><a href="/posts/kurokawa-onsen-yuakari-winter-guide" class="underline hover:text-teal-700">黒川温泉の竹灯り「湯あかり」雪景色と入湯手形！渓流野天風呂と肥後赤牛名宿ガイド</a></li>
      <li><a href="/posts/aso-caldera-winter-hotspring-guide" class="underline hover:text-teal-700">阿蘇カルデラの冬絶景と雪見温泉！大観峰の雲海パノラマとあか牛丼ガイド</a></li>
    </ul>
  </section>

</div>`;

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    description: '11月〜1月の長湯温泉＆竹田城下町を大特集！世界屈指の高濃度天然炭酸泉「ラムネ温泉館」と全身を包む銀の気泡浴、芹川沿いの雪見露天、国史跡岡城跡の冬景色、名物スッポン鍋と豊後牛陶板焼きを味わう冬の厳選名宿と1泊2日湯治モデルコース。',
    prefecture: data.prefecture,
    area: data.area,
    hotel_name: mainHotel.hotelName,
    image: mainHotel.hotelImageUrl,
    other_images: otherHotels.map(x => x.hotelImageUrl),
    affiliate_url: mainHotel.affiliateUrl,
    price: mainHotel.hotelMinCharge,
    rating: mainHotel.reviewAverage,
    date: '2026-10-11',
    categories: ['大分県', '長湯温泉', '天然炭酸泉', 'ラムネ温泉館', '岡城跡', '九重連山', 'スッポン鍋', '冬旅行'],
    keywords: [
      '長湯温泉 炭酸泉 旅館 おすすめ',
      'ラムネ温泉館 宿泊 近く ホテル',
      '長湯温泉 スッポン鍋 豊後牛 宿',
      '竹田市 岡城跡 観光 温泉',
      '冬の大分 長湯温泉 モデルコース',
      '長湯温泉 丸長旅館 宿泊記'
    ],
    is_special_feature: true,
    review: reviewHtml
  };
}

function main() {
  console.log('--- Generating 5 Independent Winter Destination Guides (Round 140) ---');

  const posts = [
    buildTokachigawaPost(collectedData['theme_1_tokachigawa']),
    buildToyakoPost(collectedData['theme_2_toyako']),
    buildMinakamiPost(collectedData['theme_3_minakami']),
    buildKatsuuraPost(collectedData['theme_4_katsuura']),
    buildNagayuPost(collectedData['theme_5_nagayu'])
  ];

  const postsDir = path.join(__dirname, '..', 'src', 'data', 'posts');

  for (const post of posts) {
    const textLen = countTextLength(post.review);
    console.log(`\nPost "${post.slug}":`);
    console.log(`  Title: ${post.title}`);
    console.log(`  Prefecture: ${post.prefecture}`);
    console.log(`  Hotel: ${post.hotel_name} (Price: ${post.price}, Rating: ${post.rating})`);
    console.log(`  Pure Text Length (excl. HTML tags): ${textLen} chars`);

    if (textLen < 3000) {
      console.warn(`  ⚠️ WARNING: Text length is under 3000 chars (${textLen})!`);
    } else {
      console.log(`  ✅ EXCELLENT: Text length is well over 3000 chars (${textLen})!`);
    }

    const filePath = path.join(postsDir, `${post.slug}.json`);
    fs.writeFileSync(filePath, JSON.stringify(post, null, 2), 'utf8');
    console.log(`  Saved to: ${filePath}`);
  }

  console.log('\nAll 5 new winter posts generated successfully!');
}

main();
