// scripts/new_articles/article9_miyajima.js
module.exports = function buildArticle9(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "autumn-hiroshima-miyajima-momijidani-itsukushima-onsen-hotels-guide";
  const title = "【広島・宮島】世界遺産・嚴島神社＆紅葉谷公園もみじ狩り完全攻略！大鳥居の潮汐と紅葉ライトアップ、旬の広島牡蠣・穴子を堪能する厳選温泉宿5選";
  const description = "日本三景の筆頭・安芸の宮島が一年で最も華やぐ11月の紅葉シーズン。約700本ものモミジが朱に染まる「紅葉谷公園」では、清流にもみじ橋が映り込む錦秋の絶景が広がり、夜は世界遺産・嚴島神社の大鳥居が幻想的に照らし出されます。11月に旨味のピークを迎える名物「広島牡蠣」や極上穴子めし、神の島に湧く宮島潮湯温泉の名旅館や対岸・宮浜温泉の絶景庭園宿など厳選5宿を徹底解説。";
  const date = "2026-10-31";
  const prefecture = "広島県";
  const area = "宮島・廿日市・宮浜温泉";

  const hKinsuikan = hotels.find(h => h.hotelNo === 6271) || hotels[0];
  const hArimoto = hotels.find(h => h.hotelNo === 18848) || hotels[1];
  const hIwaso = hotels.find(h => h.hotelNo === 145390) || hotels[2];
  const hAkiGrand = hotels.find(h => h.hotelNo === 7754) || hotels[3];
  const hSekitei = hotels.find(h => h.hotelNo === 11225) || hotels[4];

  const wItsukushima = wiki["厳島神社"] || {};
  const wMomijidani = wiki["紅葉谷公園 (廿日市市)"] || wiki["紅葉谷公園"] || {};
  const wMisen = wiki["弥山 (広島県)"] || {};
  const wMiyajimaAqua = wiki["宮島水族館"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-red-950 via-rose-900 to-stone-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-amber-300 font-extrabold text-xs">
      <span>🍁</span><span>2026年 宮島・紅葉谷公園もみじ狩り速報</span>
    </div>
    <p class="text-xs text-stone-200">
      11月中旬〜下旬は紅葉谷公園約700本のもみじと嚴島神社ライトアップの最高潮！11月は旬の広島生牡蠣・焼き牡蠣が本格解禁。宮島島内宿泊で夜と朝の静寂を独占。
    </p>
  </div>
  <a href="${hKinsuikan.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    🍁 錦水館の空室・プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 mb-4">
  海に浮かぶ社殿の朱と、山を染め上げる紅葉のグラデーション
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  古より島そのものが御神体として崇められてきた安芸の宮島（厳島）。日本三景の一つに数えられるこの霊島が最も息を呑む美しさを放つのが、11月中旬から下旬にかけての紅葉シーズンです。弥山の原始林を背にして佇む「紅葉谷公園」では、イロハモミジやオオモミジなど約700本が深紅や黄金色に染まり、渓流に架かる朱塗りのもみじ橋と見事な調和を見せます。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  海上に忽然と姿を現す世界遺産「嚴島神社」の国宝社殿と大鳥居は、満潮時には潮の上に優雅に浮かび、干潮時には鳥居の真下まで歩いて触れることができる奇跡の建築美。さらに日没を迎えると社殿と大鳥居がライトアップされ、夜の海に神々しい黄金色の輪郭を描き出します。そして11月は、瀬戸内海の豊かな潮流が育んだ「広島牡蠣」が本格解禁を迎える美食の頂点。日帰り客が最終フェリーで引き揚げた後の、凛とした静寂に包まれる宮島島内または対岸の極上温泉宿で過ごす旅の魅力を余すところなくお伝えします。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-6">
  🎪 宮島紅葉谷公園もみじ狩り＆嚴島神社大鳥居の潮汐完全攻略
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-rose-100 text-rose-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">紅葉谷公園と大鳥居の2大絶景ポイント</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>紅葉谷公園「もみじ橋」の深紅リフレクション:</strong> 紅葉谷川沿いに広がる名園。朱塗りのもみじ橋の周囲を巨木モミジが包み込み、木漏れ日の中に輝く紅葉のトンネルが広がります。朝の早い時間帯は人も少なく、絵画のような静けさの中で写真撮影が楽しめます。</p>
      <p>② <strong>嚴島神社・大鳥居の満潮と干潮の2度訪れる美:</strong> 潮位約250cm以上の満潮時には社殿が海に浮かぶ平安絵巻の姿となり、潮位100cm以下の干潮時には大鳥居の根元まで砂浜を歩いて近づけます。宮島観光協会の潮見表で当日の満潮・干潮時間を事前にチェックしておくのがプロの鉄則。</p>
      <p>③ <strong>ナイトクルーズとライトアップ散策:</strong> 毎夜日没から23時頃まで嚴島神社と大鳥居がライトアップされます。屋形船やホテル専用船で海上から大鳥居をくぐるナイトクルーズは一生の思い出になる迫力です。</p>
      <p>④ <strong>11月解禁のぷりっぷり広島牡蠣と穴子めし:</strong> 11月は身がぷっくりと太った真牡蠣の出荷が本格化。表参道商店街の香ばしい焼き牡蠣、老舗の穴子めし、揚げたてもみじ饅頭など、宮島グルメの食べ歩きも最高の楽しみ。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">実戦アドバイス</span>
      <h3 class="text-base font-bold text-stone-900">混雑回避と宮島宿泊の圧倒的メリット</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【日中の大混雑とフェリーの待ち時間】</strong> 11月の土日は宮島口の駐車場が午前中から満車となり、フェリー乗船場も長蛇の列ができます。お昼前後は表参道商店街も身動きが取れないほど混雑するため、宮島島内の宿に宿泊して「早朝7時〜9時」および「夕方17時以降」に散策するのが最大の混雑回避策です。</p>
      <p><strong>【宮島島内と対岸（宮浜温泉）の選び方】</strong> 夜のライトアップ散策や早朝参拝を徒歩で満喫したいなら島内の老舗旅館（岩惣、錦水館、有もと）。広大な日本庭園や瀬戸内海を一望する天然温泉、車移動をスムーズにしたいなら対岸の宮浜温泉（石亭、安芸グランドホテル）がベストです。</p>
      <p><strong>【野生の鹿への注意】</strong> 宮島の鹿はおとなしいですが、紙類（地図やパンフレット）や食べ物の袋を見せると寄ってきて食べてしまいます。ゴミは持ち帰り、不用意に近づかないようマナーを守りましょう。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-8">
  🏨 宮島紅葉狩りと美食を極める！厳選おすすめ名宿5選
</h2>

<!-- 宿1: 錦水館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-rose-100 text-rose-900 font-black text-xs rounded-full">創業180年・宮島唯一の自家源泉「宮島潮湯温泉」</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 宮島潮湯温泉 錦水館（広島県廿日市市宮島町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-rose-50 border border-rose-300 text-rose-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKinsuikan.reviewAverage}（${hKinsuikan.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKinsuikan.hotelImageUrl}" alt="${hKinsuikan.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKinsuikan.roomImageUrl || hKinsuikan.hotelImageUrl}" alt="${hKinsuikan.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">嚴島神社まで徒歩3分。大鳥居を望むシーサイド客室と美肌の天然潮湯温泉</p>
      <p>宮島桟橋から徒歩5分、嚴島神社の参道沿いに位置する創業180年の老舗宿「錦水館」。地下深層から湧出する宮島唯一の天然温泉「宮島潮湯温泉」は、ミネラルを豊富に含み、旅の疲れを芯から癒やして肌をすべすべに整えます。海側の客室からは瀬戸内海と大鳥居を見晴らすことができ、夕暮れのマジックアワーの光景は格別。夕食は旬の広島産牡蠣会席や広島牛、近海で揚がる鮮魚の逸品料理が並び、瀬戸内の豊かな恵みを五感で堪能できます。宿泊者専用ラウンジでの地酒やコーヒーの無料サービスも大好評です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hKinsuikan.address1}${hKinsuikan.address2}</p>
        <p><strong>【アクセス】</strong> ${hKinsuikan.access}</p>
        <p><strong>【温泉・施設】</strong> 宮島潮湯温泉（含弱放射能-ナトリウム-塩化物冷鉱泉）。大浴場、貸切風呂、宿泊者専用フリーラウンジ、シーサイドテラス。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hKinsuikan.hotelMinCharge || 26000).toLocaleString()}〜</span>
        <a href="${hKinsuikan.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-rose-700 hover:bg-rose-600 text-white font-black text-xs rounded-xl shadow transition text-center">
          錦水館の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 宮島グランドホテル 有もと -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">江戸初期創業・嚴島神社出口から徒歩3分の名門旅館</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 宮島グランドホテル 有もと（広島県廿日市市宮島町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hArimoto.reviewAverage}（${hArimoto.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hArimoto.hotelImageUrl}" alt="${hArimoto.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hArimoto.roomImageUrl || hArimoto.hotelImageUrl}" alt="${hArimoto.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">神の島最古の歴史を紡ぐ宿。紅葉谷公園の入口に位置し、数寄屋造りの雅と露天風呂付き客室</p>
      <p>江戸時代初期、厳島参詣の宿坊として創業し、400年近い歴史を誇る名門宿。嚴島神社の回廊出口から徒歩わずか3分、紅葉谷公園の入り口に佇むという贅沢極まるロケーションを誇ります。宮大工の技が息づく数寄屋造りの純和風客室や、紅葉の木々を望む露天風呂付きスイートなど上質な空間が揃います。潮風を感じる露天風呂で温まった後は、名物の焼き牡蠣や穴子飯、旬の瀬戸内鮮魚を美しく盛り付けた伝統の本格会席を個室で堪能。夕暮れや早朝の嚴島神社参拝にもこれ以上ない利便性を誇ります。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hArimoto.address1}${hArimoto.address2}</p>
        <p><strong>【アクセス】</strong> ${hArimoto.access}</p>
        <p><strong>【温泉・施設】</strong> 露天風呂付き客室、大浴場・露天風呂、茶室、料亭個室、宮島桟橋無料送迎。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hArimoto.hotelMinCharge || 24000).toLocaleString()}〜</span>
        <a href="${hArimoto.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition text-center">
          宮島グランドホテル 有もとの宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: みやじまの宿 岩惣 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-800 text-white font-black text-xs rounded-full">安政元年創業・紅葉谷公園に佇む皇族・文豪ゆかりの離れ名宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. みやじまの宿 岩惣（広島県廿日市市宮島町もみじ谷）</h3>
    </div>
    <span class="px-3 py-1.5 bg-stone-50 border border-stone-300 text-stone-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hIwaso.reviewAverage}（${hIwaso.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hIwaso.hotelImageUrl}" alt="${hIwaso.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hIwaso.roomImageUrl || hIwaso.hotelImageUrl}" alt="${hIwaso.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">伊藤博文や夏目漱石も逗留した宮島屈指の最高峰旅館。紅葉谷のせせらぎと若草温泉</p>
      <p>安政元年（1854年）、宮島を訪れる旅人のために茶店を開いたのが始まりの「岩惣」。昭和天皇をはじめとする皇族方や夏目漱石、ヘレン・ケラーなど歴史上の偉人が数多く逗留した宮島を代表する最高峰の名旅館です。紅葉谷公園の敷地内に位置し、渓流に面した大正・昭和初期築の「離れ」客室は一棟ごとに意匠が異なる文化財級の建築。敷地内から自噴する若草温泉（単純弱放射能冷鉱泉）の湯船からは、窓の外の燃えるような紅葉が間近に迫ります。一客一亭のおもてなしと、厳選された瀬戸内の食材で仕立てる懐石料理はまさに至福の極みです。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hIwaso.address1}${hIwaso.address2}</p>
        <p><strong>【アクセス】</strong> ${hIwaso.access}</p>
        <p><strong>【温泉・施設】</strong> 若草温泉。本館・新館・登録有形文化財クラスの離れ、渓流露天風呂、大浴場。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hIwaso.hotelMinCharge || 38000).toLocaleString()}〜</span>
        <a href="${hIwaso.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-black text-xs rounded-xl shadow transition text-center">
          みやじまの宿 岩惣の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 安芸グランドホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 font-black text-xs rounded-full">宮島対岸・ホテル専用船で巡る「世界遺産ナイトクルーズ」</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 安芸グランドホテル（広島県廿日市市宮島口西）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hAkiGrand.reviewAverage}（${hAkiGrand.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hAkiGrand.hotelImageUrl}" alt="${hAkiGrand.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hAkiGrand.roomImageUrl || hAkiGrand.hotelImageUrl}" alt="${hAkiGrand.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">瀬戸内海のオーシャンフロント。宮島大鳥居のライトアップを海から参拝する専用クルーズ</p>
      <p>宮島口の海岸沿いに位置し、全室から対岸の宮島と瀬戸内海の多島美を一望できるシーサイドリゾート。最大の目玉は、ホテル専用桟橋から毎夜出航する「世界遺産ナイトクルーズ」。ライトアップされた大鳥居の間近まで船で接近し、海上から社殿を仰ぎ見る迫力満点のクルーズ体験が楽しめます。展望大浴場や露天風呂からも宮島を望むことができ、夕食は瀬戸内名物の牡蠣会席や広島牛鉄板焼きなど多彩なレストランから選べます。車でのドライブ旅行者にとっても大型無料駐車場完備で非常に利便性の高いホテルです。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hAkiGrand.address1}${hAkiGrand.address2}</p>
        <p><strong>【アクセス】</strong> ${hAkiGrand.access}</p>
        <p><strong>【施設・サービス】</strong> 専用船ナイトクルーズ、展望大浴場、貸切露天風呂、日本料理・洋食・鉄板焼きレストラン。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hAkiGrand.hotelMinCharge || 12000).toLocaleString()}〜</span>
        <a href="${hAkiGrand.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-black text-xs rounded-xl shadow transition text-center">
          安芸グランドホテルの宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 庭園の宿 石亭 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">宮島を望む広大な回遊式日本庭園・全国屈指の美食オーベルジュ宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 宮浜温泉 庭園の宿 石亭（広島県廿日市市宮浜温泉）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hSekitei.reviewAverage}（${hSekitei.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hSekitei.hotelImageUrl}" alt="${hSekitei.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hSekitei.roomImageUrl || hSekitei.hotelImageUrl}" alt="${hSekitei.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">斜面に広がる名園と隠れ家文庫。名物・焼き穴子会席と宮浜の天然ラドン温泉に酔いしれる</p>
      <p>宮島の対岸、宮浜温泉のなだらかな丘陵に広がる約1,500坪の回遊式日本庭園を囲むように離れ客室が点在する「石亭」。庭園の随所には地下文庫やサロンが潜み、大人の知的好奇心を刺激します。客室露天風呂や大浴場には天然ラドンを豊富に含む宮浜温泉が引かれ、庭園越しに瀬戸内海と宮島を遠望。夕食は全国の美食家を唸らせる名物「穴子重ね焼き」をはじめ、11月解禁の極上真牡蠣、広島牛など一品一品が芸術品のような懐石料理。喧騒を完全に遮断した究極の優雅を味わいたい旅人にこれ以上の選択肢はありません。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hSekitei.address1}${hSekitei.address2}</p>
        <p><strong>【アクセス】</strong> ${hSekitei.access}</p>
        <p><strong>【温泉・施設】</strong> 宮浜温泉（単純弱放射能温泉）。回遊式日本庭園、地下ライブラリー、露天風呂付き離れ、サロン。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hSekitei.hotelMinCharge || 42000).toLocaleString()}〜</span>
        <a href="${hSekitei.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs rounded-xl shadow transition text-center">
          庭園の宿 石亭の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="nearby-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs text-stone-600 mb-6">
  世界文化遺産・嚴島神社や紅葉谷公園など宮島を代表する名所を網羅。宿からの所要時間や見学のポイントをご確認ください。
</p>

<div class="space-y-6 my-6">
  <!-- スポット1: 厳島神社 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wItsukushima.thumbnail || hKinsuikan.hotelImageUrl}" alt="厳島神社" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-red-100 text-red-800 font-bold text-[11px] rounded-md">⛩️ ユネスコ世界文化遺産・国宝</span>
        <h3 class="text-base font-bold text-stone-900">嚴島神社（広島県廿日市市宮島町）</h3>
        <p>${wItsukushima.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 錦水館・有もとから徒歩約3分、岩惣から徒歩約5分。夜間のライトアップと早朝参拝がおすすめ。</p>
      </div>
    </div>
  </div>

  <!-- スポット2: 紅葉谷公園 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wMomijidani.thumbnail || hIwaso.hotelImageUrl}" alt="紅葉谷公園" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-rose-100 text-rose-800 font-bold text-[11px] rounded-md">🍁 日本屈指の紅葉名所・もみじ橋</span>
        <h3 class="text-base font-bold text-stone-900">紅葉谷公園（広島県廿日市市宮島町）</h3>
        <p>${wMomijidani.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 岩惣の目の前、有もとから徒歩約2分。約700本のもみじが朱色に染まる散策路が続きます。</p>
      </div>
    </div>
  </div>

  <!-- スポット3: 弥山 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wMisen.thumbnail || hArimoto.hotelImageUrl}" alt="弥山" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[11px] rounded-md">🏔️ 宮島最高峰・天然記念物原始林</span>
        <h3 class="text-base font-bold text-stone-900">弥山（広島県廿日市市宮島町）</h3>
        <p>${wMisen.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 紅葉谷公園から宮島ロープウェー紅葉谷駅まで徒歩約10分。山頂展望台からは瀬戸内海の多島美を一望。</p>
      </div>
    </div>
  </div>

  <!-- スポット4: 宮島水族館（みやじマリン） -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wMiyajimaAqua.thumbnail || hAkiGrand.hotelImageUrl}" alt="宮島水族館" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-800 font-bold text-[11px] rounded-md">🐬 瀬戸内海の海洋生物とカキいかだ展示</span>
        <h3 class="text-base font-bold text-stone-900">宮島水族館 みやじマリン（広島県廿日市市）</h3>
        <p>${wMiyajimaAqua.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 嚴島神社から西へ徒歩約10分。スナメリやアシカライブ、瀬戸内のカキ養殖いかだの再現展示が人気。</p>
      </div>
    </div>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-8">
  🗺️ 宮島紅葉狩り＆嚴島神社 1泊2日満喫モデルコース
</h2>
<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-rose-50/60 to-red-50/40 border border-rose-200 space-y-4 text-xs text-stone-700 leading-relaxed">
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【1日目】宮島渡航と穴子めし・紅葉谷公園散策＆大鳥具ライトアップ</h3>
    <p>11:30に宮島口に到着し、名店「うえの」で香ばしい名物穴子飯をいただく。13:00のフェリーで宮島へ渡航。「錦水館」または「岩惣」に手荷物を預けて身軽に。「紅葉谷公園」へ向かい、深紅に染まるもみじ橋周辺を散策。ロープウェーで弥山山頂へ登り、瀬戸内海の絶景パノラマを堪能。夕方に宿へチェックインし、宮島潮湯温泉で湯浴み。夕食は11月に解禁されたばかりの広島産牡蠣会席を味わう。食後は夜の嚴島神社へ散策し、闇夜に黄金色に浮かび上がる大鳥居のライトアップを静かに拝観。</p>
  </div>
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【2日目】早朝の嚴島神社参拝と表参道商店街食べ歩き</h3>
    <p>朝6:30、観光客のいない清澄な朝の嚴島神社へ早朝参拝。干潮時には大鳥居の真下まで歩き、巨木の楠木造りの迫力を体感。朝食後、宿をチェックアウトして表参道商店街へ。焼き立ての揚げもみじや焼き牡蠣を頬張りながらお土産散策。大聖院で戒壇めぐりを体験後、フェリーで宮島口へ戻り帰路へ。</p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-3 my-6 text-xs text-stone-800">
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q1. 宮島の大鳥居が海に浮いて見えるのは何時頃ですか？</h3>
    <p class="text-stone-600">A. 潮位が約250cm以上になると社殿と大鳥居が海に浮かんでいるように見えます。逆に潮位100cm以下になると鳥居の足元まで歩いて行けます。満潮・干潮は毎日約6時間周期で入れ替わるため、宮島観光協会の年間潮見表で当日の時間を必ず事前に確認しましょう。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q2. 宮島へ渡るフェリーは予約が必要ですか？</h3>
    <p class="text-stone-600">A. JR西日本宮島フェリーおよび宮島松大汽船が10〜15分間隔で頻発運航しているため予約は不要です。JRフェリーは大鳥居に接近する航路をとるため、往路の乗船におすすめです。なお、宮島訪問税（1人100円）がフェリー運賃に含まれます。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q3. 宮島島内での車の利用はできますか？</h3>
    <p class="text-stone-600">A. フェリーに車を積載することは可能ですが、宮島島内は道幅が極めて狭く、一般車両の通行が規制されている区域がほとんどです。車は本土側の宮島口周辺駐車場に預けて、徒歩で渡島するのが一般的かつ快適です。</p>
  </div>
</div>

<div class="my-8 p-6 rounded-3xl bg-rose-50/60 border border-rose-200">
  <h3 class="text-sm font-bold text-rose-950 mb-2">🔗 あわせてチェックしたい広島・瀬戸内の旅行特集</h3>
  <ul class="text-xs space-y-1.5 font-medium text-stone-700">
    <li>👉 <a href="/prefectures/hiroshima/" class="text-rose-800 hover:text-rose-600 underline">広島県の観光名所・宮島・尾道＆ホテル完全ガイド</a></li>
    <li>👉 <a href="/furusato-tax-three-scenic-views-heritage-stay/" class="text-rose-800 hover:text-rose-600 underline">日本三景（宮島・天橋立・松島）名門宿特集</a></li>
    <li>👉 <a href="/miyajima-famous-things-gourmet-hotels-guide" class="text-rose-800 hover:text-rose-600 underline">宮島名物グルメ（牡蠣・あなごめし）＆おすすめ宿</a></li>
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
    hot_spring_info: "宮島潮湯温泉（含弱放射能-ナトリウム-塩化物冷鉱泉）・若草温泉・宮浜温泉（単純弱放射能泉）",
    parking_info: "宮島島内宿は車不可（宮島口駐車場利用）。宮島対岸（安芸グランドホテル・石亭）は大型無料駐車場完備。",
    meal_availability: "広島産旬の生牡蠣・焼き牡蠣・穴子重ね焼き会席・広島牛ステーキ・瀬戸内小魚のお造り・地酒ペアリング",
    hotel_name: "宮島嚴島神社＆紅葉谷公園周辺 厳選名宿5選",
    image: hKinsuikan.hotelImageUrl,
    affiliate_url: hKinsuikan.affiliateUrl,
    categories: ["11月旅行", "紅葉", "世界遺産", "温泉宿", "ご当地グルメ", "広島旅行"],
    keywords: [
      "宮島 紅葉 2026",
      "紅葉谷公園 もみじ狩り",
      "厳島神社 大鳥居 満潮 干潮",
      "錦水館 宮島潮湯温泉",
      "宮島グランドホテル 有もと",
      "みやじまの宿 岩惣",
      "安芸グランドホテル ナイトクルーズ",
      "庭園の宿 石亭 穴子",
      "広島 牡蠣 時期 11月",
      "広島 11月 イベント"
    ],
    review: reviewHtml,
    price: hKinsuikan.hotelMinCharge || 26000,
    rating: hKinsuikan.reviewAverage || 4.7,
    date: date,
    other_images: [
      hArimoto.hotelImageUrl,
      hIwaso.hotelImageUrl,
      hAkiGrand.hotelImageUrl,
      hSekitei.hotelImageUrl,
      wItsukushima.thumbnail,
      wMomijidani.thumbnail
    ].filter(Boolean),
    summary: description,
    review_count: (hKinsuikan.reviewCount || 0) + (hArimoto.reviewCount || 0),
    family_friendly: "はい、安芸グランドホテルの大鳥居ナイトクルーズや錦水館のファミリールームなど子供連れにも大好評です。"
  };

  const noteMarkdown = `---
title: "${title}"
date: "${date}"
description: "${description}"
tags: ["宮島", "厳島神社", "紅葉谷公園", "錦水館", "岩惣", "広島牡蠣", "広島旅行", "楽天トラベル"]
---

日本三景の筆頭として世界中の旅人を魅了する安芸の宮島。弥山の原始林を背にして佇む「紅葉谷公園」では、11月中旬から下旬にかけて約700本ものモミジが燃えるような深紅や黄金色に染まり、渓流に架かる朱塗りのもみじ橋とともに息を呑む錦秋絵巻を描き出します。

世界文化遺産「嚴島神社」の国宝社殿と海上の大鳥居は、満潮時には潮の上に優雅に浮かび、干潮時には砂浜を歩いて大鳥居の根元まで近づける奇跡の建築。夜間は荘厳なライトアップが施され、静寂に包まれた島内に神々しい姿が浮かび上がります。

さらに11月は、身がぷっくりと太った「広島牡蠣」の出荷が本格解禁を迎える美食の黄金期。神の島に湧く天然温泉旅館や、対岸の宮浜温泉で名園と穴子料理を極めた美食宿など、楽天トラベル最新データから★4.3〜4.8超の厳選名宿5選を徹底解説します。

---

## 🍁 宮島紅葉狩り＆嚴島神社大鳥居の攻略ポイント
- **紅葉谷公園の見頃**: 11月上旬〜下旬（ピークは11月中旬〜下旬。約700本のモミジが朱に染まります）
- **大鳥居の潮汐攻略**: 潮位約250cm以上で海に浮かぶ姿、潮位100cm以下で足元まで歩いて行けます。当日の潮見表を事前に確認しておきましょう。
- **ライトアップ時間**: 毎夜日没〜23:00まで社殿と大鳥居がライトアップ。
- **島内宿泊の特権**: 日帰り客がフェリーで引き揚げた後の「夜のライトアップ」と「早朝の静寂な参拝」は宿泊者だけの特別な体験です。
- **11月の味覚解禁**: 旬の広島生牡蠣・焼き牡蠣、名物穴子めし、揚げたてもみじ饅頭など瀬戸内の美食を心ゆくまで堪能できます。

---

## 1. 宮島潮湯温泉 錦水館（広島県廿日市市宮島町）
![錦水館](${hKinsuikan.hotelImageUrl})
創業180年、嚴島神社まで徒歩3分の好立地。宮島唯一の自家源泉「宮島潮湯温泉」の大浴場を備え、海側の客室からは大鳥居と瀬戸内海を一望。旬の広島産牡蠣会席や広島牛、地酒を楽しめる宿泊者専用ラウンジも大好評です。

- **楽天トラベル総合評価**: ★${hKinsuikan.reviewAverage}（クチコミ ${hKinsuikan.reviewCount}件）
- **目安料金**: 1名 ¥${(hKinsuikan.hotelMinCharge || 26000).toLocaleString()}〜
- **所在地**: ${hKinsuikan.address1}${hKinsuikan.address2}
- **アクセス**: ${hKinsuikan.access}
- **駐車場**: ${hKinsuikan.parkingInformation}
- [👉 錦水館の宿泊プラン・空室状況を見る](${hKinsuikan.affiliateUrl})

---

## 2. 宮島グランドホテル 有もと（広島県廿日市市宮島町）
![宮島グランドホテル 有もと](${hArimoto.hotelImageUrl})
江戸初期創業、400年近い歴史を誇る名門宿。嚴島神社回廊出口から徒歩3分、紅葉谷公園の入り口に位置する抜群のロケーション。宮大工の技が息づく客室露天風呂や、瀬戸内の海の幸を個室で味わう本格会席が評判です。

- **楽天トラベル総合評価**: ★${hArimoto.reviewAverage}（クチコミ ${hArimoto.reviewCount}件）
- **目安料金**: 1名 ¥${(hArimoto.hotelMinCharge || 24000).toLocaleString()}〜
- **所在地**: ${hArimoto.address1}${hArimoto.address2}
- **アクセス**: ${hArimoto.access}
- **駐車場**: ${hArimoto.parkingInformation}
- [👉 宮島グランドホテル 有もとの宿泊プラン・空室状況を見る](${hArimoto.affiliateUrl})

---

## 3. みやじまの宿 岩惣（広島県廿日市市宮島町もみじ谷）
![みやじまの宿 岩惣](${hIwaso.hotelImageUrl})
安政元年創業、皇族や夏目漱石など数々の偉人に愛されてきた宮島屈指の最高峰旅館。紅葉谷公園の敷地内に建ち、大正・昭和初期築の「離れ」客室は文化財級。自家源泉の若草温泉と、厳選された瀬戸内の食材で仕立てる懐石料理は至福の極みです。

- **楽天トラベル総合評価**: ★${hIwaso.reviewAverage}（クチコミ ${hIwaso.reviewCount}件）
- **目安料金**: 1名 ¥${(hIwaso.hotelMinCharge || 38000).toLocaleString()}〜
- **所在地**: ${hIwaso.address1}${hIwaso.address2}
- **アクセス**: ${hIwaso.access}
- **駐車場**: ${hIwaso.parkingInformation}
- [👉 みやじまの宿 岩惣の宿泊プラン・空室状況を見る](${hIwaso.affiliateUrl})

---

## 4. 安芸グランドホテル（広島県廿日市市宮島口西）
![安芸グランドホテル](${hAkiGrand.hotelImageUrl})
宮島対岸のオーシャンフロントリゾート。ホテル専用桟橋から毎夜出航する「世界遺産ナイトクルーズ」でライトアップされた大鳥居に大接近。展望大浴場や多彩なレストラン、大型無料駐車場を完備しドライブ旅行にも最適です。

- **楽天トラベル総合評価**: ★${hAkiGrand.reviewAverage}（クチコミ ${hAkiGrand.reviewCount}件）
- **目安料金**: 1名 ¥${(hAkiGrand.hotelMinCharge || 12000).toLocaleString()}〜
- **所在地**: ${hAkiGrand.address1}${hAkiGrand.address2}
- **アクセス**: ${hAkiGrand.access}
- **駐車場**: ${hAkiGrand.parkingInformation}
- [👉 安芸グランドホテルの宿泊プラン・空室状況を見る](${hAkiGrand.affiliateUrl})

---

## 5. 宮浜温泉 庭園の宿 石亭（広島県廿日市市宮浜温泉）
![庭園の宿 石亭](${hSekitei.hotelImageUrl})
宮島を望む丘陵に広がる約1,500坪の回遊式日本庭園と名建築。天然ラドン温泉の露天風呂と、全国の美食家が絶賛する名物「穴子重ね焼き」懐石。静寂と日本の美意識に包まれる究極のおこもり宿です。

- **楽天トラベル総合評価**: ★${hSekitei.reviewAverage}（クチコミ ${hSekitei.reviewCount}件）
- **目安料金**: 1名 ¥${(hSekitei.hotelMinCharge || 42000).toLocaleString()}〜
- **所在地**: ${hSekitei.address1}${hSekitei.address2}
- **アクセス**: ${hSekitei.access}
- **駐車場**: ${hSekitei.parkingInformation}
- [👉 庭園の宿 石亭の宿泊プラン・空室状況を見る](${hSekitei.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

### 厳島神社（広島県廿日市市宮島町）
![厳島神社](${wItsukushima.thumbnail || hKinsuikan.hotelImageUrl})
${wItsukushima.extract}
- **宿からのアクセス**: 錦水館・有もとから徒歩約3分、岩惣から徒歩約5分。

### 紅葉谷公園（広島県廿日市市宮島町）
![紅葉谷公園](${wMomijidani.thumbnail || hIwaso.hotelImageUrl})
${wMomijidani.extract}
- **宿からのアクセス**: 岩惣の目の前。約700本のモミジが朱色に染まる名所です。

### 弥山（広島県廿日市市宮島町）
![弥山](${wMisen.thumbnail || hArimoto.hotelImageUrl})
${wMisen.extract}
- **宿からのアクセス**: 紅葉谷公園からロープウェー駅まで徒歩約10分。山頂展望台から瀬戸内海を一望。

### 宮島水族館（みやじマリン）（広島県廿日市市）
![宮島水族館](${wMiyajimaAqua.thumbnail || hAkiGrand.hotelImageUrl})
${wMiyajimaAqua.extract}
- **宿からのアクセス**: 嚴島神社から徒歩約10分。瀬戸内のスナメリやカキいかだ展示が楽しめます。
`;

  return { postData, noteMarkdown };
};
