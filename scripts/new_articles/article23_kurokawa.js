// scripts/new_articles/article23_kurokawa.js
module.exports = function buildArticle23(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-kumamoto-kurokawa-onsen-yuakari-bamboo-lantern-hotels-guide";
  const title = "【熊本・阿蘇黒川温泉】冬の風物詩「黒川温泉 湯あかり2026-2027」＆入湯手形露天風呂巡り完全攻略！田の原川を照らす無数の鞠灯篭と肥後あかうし・馬刺しを味わう情緒豊かな名旅館5選";
  const description = "深山幽谷の温泉街・黒川温泉を幻想的な竹灯篭の温もりで包み込む冬の風物詩「湯あかり」。田の原川の清流に浮かぶ無数の鞠灯篭（まりとうろう）と川端通りの竹筒が織りなす幽玄の世界を徹底解説。名物「入湯手形」で28箇所の露天風呂から趣異なる名湯を巡り、阿蘇の草原で育まれた極上の「肥後あかうし」や特選馬刺しに舌鼓。冬のやまなみハイウェイ雪道対策から情緒あふれる厳選5宿まで完全網羅します。";
  const date = "2026-11-03";
  const prefecture = "熊本県";
  const area = "阿蘇・黒川温泉・杖立";

  const hOkyakuya = hotels.find(h => h.hotelNo === 80591) || hotels[0];
  const hYamamizuki = hotels.find(h => h.hotelNo === 136864) || hotels[1];
  const hKurokawaso = hotels.find(h => h.hotelNo === 56843) || hotels[2];
  const hYusai = hotels.find(h => h.hotelNo === 151280) || hotels[3];
  const hFumoto = hotels.find(h => h.hotelNo === 54971) || hotels[4];

  const wKurokawa = wiki["黒川温泉"] || {};
  const wAso = wiki["阿蘇山"] || {};
  const wShirakawa = wiki["白川水源"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-950 via-stone-900 to-teal-950 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-emerald-300 font-extrabold text-xs">
      <span>🎋</span><span>黒川温泉「湯あかり2026-2027」＆冬の阿蘇旅 最新情報</span>
    </div>
    <p class="text-xs text-emerald-100">
      12月中旬から田の原川を照らす無数の竹灯篭！名物「入湯手形」で巡る雪見露天と、とろける肥後あかうし・本場熊本馬刺しを味わう冬の極上湯治旅。
    </p>
  </div>
  <a href="${hOkyakuya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    ♨️ 歴史の宿 御客屋の空室を見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 mb-4">
  渓流に揺れる竹の鞠！静寂の温泉街を照らす「湯あかり」のぬくもり
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  九州の中央部、阿蘇外輪山の山深き谷あいに湯煙を上げる黒川温泉。派手なネオンサインを一切排除し、「街全体が一軒の宿、通りは廊下、旅館は客室」という調和のとれた里山景観を守り続けるこの温泉郷が、一年で最も風情を増すのが冬の季節です。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  11月に入ると、温泉街の人々が山林の環境保全のために間伐した竹を使い、一つひとつ手作業で編み込んだ球状の「鞠灯篭（まりとうろう）」や筒灯籠の製作・設置が進められます。そして12月中旬の夕暮れ、澄み切った冷気の中で灯りがともされると、田の原川のせせらぎの上に約300個もの鞠灯篭が浮かび上がり、川面を黄金色の柔らかい光で染め上げます。これが黒川温泉の冬の代名詞「湯あかり」です。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  吐く息の白さと竹灯篭のぬくもり、川沿いの丸鈴橋に響く下駄の音。杉皮葺きの木造宿が連なる坂道を歩きながら、名物「入湯手形」を手に趣の異なる露天風呂を巡る贅沢。湯上がりには阿蘇の大地で健やかに育った「肥後あかうし」の溶岩焼きや、鮮度抜群の特選霜降り馬刺しを熊本の地酒とともに味わう――日本の原風景に出会う至高の冬旅がここにあります。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-6">
  🏮 「湯あかり」ベスト鑑賞スポット＆入湯手形・雪道アクセス攻略
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">丸鈴橋からの絶景＆手形湯めぐりの作法</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>丸鈴橋（まるすずばし）からの眺望:</strong> 湯あかり最大のビューポイント。川面にかかる竹の鞠灯篭が立体的に重なり合い、川霧と合わさって幻想的な光のトンネルを形成します。</p>
      <p>② <strong>やまびこ旅館前の川端通り:</strong> 歩道沿いに竹筒の灯籠が連なり、足元を優しく照らします。浴衣の上に暖かい丹前や羽織を重ねて歩くのが黒川流の過ごし方です。</p>
      <p>③ <strong>入湯手形（1,300円）の賢い使い方:</strong> 1枚で加盟旅館28軒の中から好きな3箇所の露天風呂に入浴可能（または2箇所入浴＋1つはお土産や飲食に利用可能）。半年間有効なので翌朝の利用も可能です。</p>
      <p>④ <strong>点灯時間:</strong> 例年12月中旬から3月下旬まで、日没（17:00頃）から21:30まで毎日点灯します。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-stone-100 text-stone-800 font-extrabold text-xs rounded-lg">冬道・寒さ対策</span>
      <h3 class="text-base font-bold text-stone-900">やまなみハイウェイの凍結注意と直通バス</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【冬の道路状況とタイヤ規制】</strong> 黒川温泉は標高約700mの高地に位置し、阿蘇やまなみハイウェイや瀬の本高原周辺は12月〜2月に積雪・路面凍結が頻発します。車で向かう場合はスタッドレスタイヤ必須です。</p>
      <p><strong>【直通高速バスが最も安全】</strong> 運転が不安な方は、熊本駅・阿蘇くまもと空港から運行されている「九州横断バス」、または福岡・天神および博多バスターミナル発の高速バス「黒川温泉行き」を利用すれば、雪道の心配なく温泉街へ直行できます。</p>
      <p><strong>【足元の防寒と滑り止め】</strong> 温泉街は石畳や階段、急坂が多く、夜間は凍結することがあります。下駄での散策には滑り止めゴムが付いているか確認し、スノーブーツや防寒靴を用意すると安心です。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  🏨 情緒あふれる露天風呂と阿蘇美食を堪能！黒川温泉の厳選宿5選
</h2>

<!-- 宿1: 歴史の宿 御客屋 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">創業300年・黒川温泉で最も古い歴史を誇る老舗名宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 黒川温泉 歴史の宿 御客屋（熊本県阿蘇郡南小国町満願寺）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hOkyakuya.reviewAverage}（${hOkyakuya.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hOkyakuya.hotelImageUrl}" alt="${hOkyakuya.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hOkyakuya.roomImageUrl || hOkyakuya.hotelImageUrl}" alt="${hOkyakuya.hotelName} 露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        江戸時代、肥後細川藩の御用宿として開業した黒川最古の宿。木造3階建ての趣ある本館は、柱や梁に長年の歴史が刻まれ、落ち着いたぬくもりに満ちています。肥後藩主も浸かったとされる名湯「代官の湯」をはじめ、趣異なる7つの湯処で自家源泉掛け流しの湯を堪能。夕食は契約農家の無農薬野菜と、柔らかな「肥後あかうし」の炭火焼きステーキ会席が絶品です。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hOkyakuya.address1}${hOkyakuya.address2}</div>
        <div><strong>アクセス:</strong> 黒川温泉バス停より徒歩約5分（無料送迎あり）</div>
        <div><strong>温泉特徴:</strong> 含鉄泉・単純温泉など異なる泉質を湛える7つの湯処</div>
        <div><strong>名物料理:</strong> あかうしステーキ＆自家菜園野菜の郷土創作会席</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hOkyakuya.hotelMinCharge || 16500).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hOkyakuya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルで歴史の宿 御客屋のプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 山あいの宿 山みず木 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">奥黒川の清流沿い・渓流と森に抱かれる露天風呂「幽谷の湯」</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 黒川温泉 山あいの宿 山みず木（熊本県阿蘇郡南小国町満願寺）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hYamamizuki.reviewAverage}（${hYamamizuki.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hYamamizuki.hotelImageUrl}" alt="${hYamamizuki.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hYamamizuki.roomImageUrl || hYamamizuki.hotelImageUrl}" alt="${hYamamizuki.hotelName} 渓流露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        黒川温泉街から少し離れた「奥黒川」の深い原生林の中に佇む隠れ家旅館。渓流のすぐ脇に造られた名物露天風呂「幽谷の湯（男湯）」「森の湯（女湯）」は、岩風呂に浸かると川のせせらぎが手の届くような距離に迫り、自然と一体化する圧倒的な没入感を味わえます。冬は雪をかぶった木々と湯気が幽玄な絵巻物を創り出します。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hYamamizuki.address1}${hYamamizuki.address2}</div>
        <div><strong>アクセス:</strong> 黒川温泉バス停より車で約5分（送迎あり）</div>
        <div><strong>露天風呂:</strong> 田の原川の清流にせり出す野趣あふれる巨岩露天</div>
        <div><strong>夕食:</strong> 地元・南小国の旬食材を活かした素朴で洗練された山里会席</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hYamamizuki.hotelMinCharge || 23100).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hYamamizuki.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルで山みず木のプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 黒川温泉 黒川荘 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">びょうぶ岩を仰ぐ茅葺きの館・神秘的な緑白色のにごり湯</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 黒川温泉 黒川荘（熊本県阿蘇郡南小国町満願寺）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKurokawaso.reviewAverage}（${hKurokawaso.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKurokawaso.hotelImageUrl}" alt="${hKurokawaso.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKurokawaso.roomImageUrl || hKurokawaso.hotelImageUrl}" alt="${hKurokawaso.hotelName} にごり湯露天" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        温泉街の川沿い、堂々たる「びょうぶ岩」の麓に茅葺き屋根の古民家を移築した重厚な佇まいの宿。黒川荘の最大の特徴は、天候や気温によってエメラルドグリーンから乳白色へと神秘的に色を変える「緑白色のにごり湯」です。豊富なメタケイ酸を含む美肌の湯を、巨岩を配した大露天風呂や昔ながらの観音風呂で心ゆくまで満喫できます。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hKurokawaso.address1}${hKurokawaso.address2}</div>
        <div><strong>アクセス:</strong> 黒川温泉中心街より徒歩約5分（送迎対応あり）</div>
        <div><strong>名物泉質:</strong> 珍しいエメラルドグリーンの緑白色硫黄泉（美肌効果抜群）</div>
        <div><strong>お料理:</strong> 霜降り馬刺しや肥後あかうしの石焼きを盛り込んだ贅沢会席</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hKurokawaso.hotelMinCharge || 17000).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hKurokawaso.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルで黒川荘のプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 優彩別館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">竹林と清流に寄り添う静寂の宿・リーズナブルに味わう名湯</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 黒川温泉 優彩別館（熊本県阿蘇郡南小国町満願寺）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hYusai.reviewAverage}（${hYusai.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hYusai.hotelImageUrl}" alt="${hYusai.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hYusai.roomImageUrl || hYusai.hotelImageUrl}" alt="${hYusai.hotelName} お風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        黒川温泉の竹林沿いに位置し、清流のせせらぎを聞きながら気兼ねなく滞在できる隠れ家宿。湯あかりのライトアップスポットへのアクセスも良好で、夕食後の散策にも便利です。効能豊かな自家源泉のお風呂でじっくりと体を温め、阿蘇の大自然の恵みを取り入れた手作りの山里料理を堪能できます。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hYusai.address1}${hYusai.address2}</div>
        <div><strong>アクセス:</strong> 黒川温泉バス停より徒歩約7分</div>
        <div><strong>温泉特徴:</strong> 清らかな弱アルカリ性単純温泉で肌に優しい湯浴み</div>
        <div><strong>滞在スタイル:</strong> 静かな竹林に面した客室で過ごすプライベートステイ</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hYusai.hotelMinCharge || 9353).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hYusai.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルで優彩別館のプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: ふもと旅館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">温泉街中心部・湯あかり会場目の前！趣異なる全15の湯処めぐり</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 黒川温泉 ふもと旅館（熊本県阿蘇郡南小国町満願寺）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hFumoto.reviewAverage}（${hFumoto.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hFumoto.hotelImageUrl}" alt="${hFumoto.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hFumoto.roomImageUrl || hFumoto.hotelImageUrl}" alt="${hFumoto.hotelName} 露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        田の原川沿い、湯あかりのメインステージである丸鈴橋のすぐそばに位置する純和風旅館。館内には立ち湯や打たせ湯、岩風呂、檜風呂など趣の異なる全15ものお風呂があり、宿泊者は空いている貸切風呂を無料で何度でも巡ることができます。玄関を出ればすぐ目の前に幻想的な竹灯篭が広がり、夜の散策にこれ以上ない絶好の立地です。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hFumoto.address1}${hFumoto.address2}</div>
        <div><strong>アクセス:</strong> 黒川温泉バス停より徒歩約3分</div>
        <div><strong>圧倒的湯めぐり:</strong> 露天・内湯・貸切など全15の多彩な温泉処</div>
        <div><strong>名物グルメ:</strong> 阿蘇あか牛の陶板焼き＆極上霜降り馬刺しの会席料理</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hFumoto.hotelMinCharge || 23100).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hFumoto.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルでふもと旅館のプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="wiki-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6">
  黒川温泉と合わせて巡りたい阿蘇の大自然と名所。冬ならではの澄んだ空気の中で訪ねるべきスポットをご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <!-- 観光地1: 黒川温泉 -->
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
    <div class="flex items-center justify-between border-b border-stone-100 pb-2">
      <h3 class="font-bold text-stone-900 text-sm md:text-base">黒川温泉（日本の名湯郷）</h3>
      <span class="text-xs text-emerald-700 font-extrabold">入湯手形と里山景観</span>
    </div>
    ${wKurokawa.thumbnail ? `<img src="${wKurokawa.thumbnail}" alt="黒川温泉" class="w-full h-44 object-cover rounded-xl" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wKurokawa.extract || '熊本県阿蘇郡南小国町にある温泉。田の原川渓谷沿いに木造旅館が建ち並び、入湯手形による露天風呂巡りと美しい統一景観で全国的な人気を誇ります。'}
    </p>
  </div>

  <!-- 観光地2: 阿蘇山 -->
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
    <div class="flex items-center justify-between border-b border-stone-100 pb-2">
      <h3 class="font-bold text-stone-900 text-sm md:text-base">阿蘇山（世界最大級のカルデラ）</h3>
      <span class="text-xs text-emerald-700 font-extrabold">大観峰と草千里ヶ浜</span>
    </div>
    ${wAso.thumbnail ? `<img src="${wAso.thumbnail}" alt="阿蘇山" class="w-full h-44 object-cover rounded-xl" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wAso.extract || '熊本県東部に位置する活火山。世界屈指の規模を誇るカルデラを持ち、冬の大観峰からは白銀に染まる阿蘇五岳（釈迦涅槃像）の絶景や神秘的な雲海が望めます。'}
    </p>
  </div>

  <!-- 観光地3: 白川水源 -->
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
    <div class="flex items-center justify-between border-b border-stone-100 pb-2">
      <h3 class="font-bold text-stone-900 text-sm md:text-base">白川水源（日本名水百選）</h3>
      <span class="text-xs text-emerald-700 font-extrabold">毎分60トンの清らかな湧水</span>
    </div>
    ${wShirakawa.thumbnail ? `<img src="${wShirakawa.thumbnail}" alt="白川水源" class="w-full h-44 object-cover rounded-xl" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wShirakawa.extract || '阿蘇山麓に位置する名水百選の代表的湧水地。常温14度の澄み切った地下水が砂を巻き上げてこんこんと湧き出し、冬でも凍ることなく清らかな水面を見せてくれます。'}
    </p>
  </div>

  <!-- 観光地4: 鍋ヶ滝 -->
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
    <div class="flex items-center justify-between border-b border-stone-100 pb-2">
      <h3 class="font-bold text-stone-900 text-sm md:text-base">鍋ヶ滝（裏見の滝）</h3>
      <span class="text-xs text-emerald-700 font-extrabold">カーテン状の美しい滝</span>
    </div>
    <p class="text-xs text-stone-700 leading-relaxed">
      南小国町にある落差約10m、幅約20mの滝。水のカーテンのように幅広く流れ落ち、滝の裏側の空間に入ることができる「裏見の滝」として有名です。冬の澄んだ水と周囲の木々が静謐な空間を作り出します（見学は事前予約制）。
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  🗺️ 冬の黒川温泉＆阿蘇 1泊2日湯治モデルコース
</h2>
<div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-4 text-xs md:text-sm text-stone-700 leading-relaxed">
  <div class="border-b border-stone-200 pb-3">
    <strong class="text-emerald-900 text-sm">【1日目: 阿蘇大観峰パノラマから湯あかりの温泉街へ】</strong>
    <p class="mt-1">
      午前11:00 熊本駅または阿蘇くまもと空港からレンタカー（スタッドレス装備）または高速バス乗車 ➔ 12:30 阿蘇の大観峰展望台で雄大なカルデラと冬の阿蘇五岳を一望 ➔ 14:00 黒川温泉到着・風の舎で「入湯手形」を購入 ➔ 宿にチェックインし手形を持って1軒目の雪見露天風呂へ ➔ 17:00 日没とともに「湯あかり」点灯！丸鈴橋から田の原川に浮かぶ鞠灯篭を鑑賞 ➔ 18:30 宿で肥後あかうしの石焼きステーキ＆特選馬刺し会席 ➔ 20:30 静かな夜の竹あかり散策と宿の貸切風呂で就寝
    </p>
  </div>
  <div>
    <strong class="text-emerald-900 text-sm">【2日目: 朝露天風呂めぐりと南小国グルメ】</strong>
    <p class="mt-1">
      朝07:00 清流のせせらぎを聞きながら朝露天風呂へ入浴 ➔ 地元契約農家の新鮮野菜と郷土和朝食 ➔ 09:30 手形を使って2軒目の宿の渓流露天風呂を湯めぐり ➔ 11:00 チェックアウト後、温泉街のカフェで名物どら焼き「どらどらバーガー」やジャージー牛乳ソフト ➔ 12:30 鍋ヶ滝公園（要予約）を散策 ➔ 14:30 熊本銘菓（陣太鼓・武者がえし）を購入し帰路へ
    </p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q1. 「湯あかり」の開催期間と点灯時間は何時からですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 例年12月中旬から翌年3月下旬まで開催されます。点灯時間は日没（17:00頃）から21:30までです。雨天や雪の日でも点灯し、雪化粧した竹灯篭は一層幻想的な美しさとなります。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q2. 入湯手形はどこで購入できますか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 黒川温泉観光旅館協同組合「風の舎（かぜのや）」窓口、または加盟各旅館のフロントにて1枚1,300円（税込）で販売されています。有効期限は購入日から6ヶ月間です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q3. 車で行く場合、ノーマルタイヤでも行けますか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 12月〜2月の黒川温泉および阿蘇周辺は山岳地帯のため、急な降雪や夜間の路面凍結が日常的に発生します。ノーマルタイヤでの走行は極めて危険ですので、必ずスタッドレスタイヤを装着したレンタカーを利用するか、熊本駅や博多駅からの直通高速バスをご利用ください。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q4. 黒川温泉にコンビニやATMはありますか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 黒川温泉街の中には24時間営業の大手コンビニエンスストアはありません。商店（後藤酒店など）はありますが夕方以降に閉店するため、必要な夜食や日用品は事前に購入しておくことをおすすめします。郵便局にATMがあります。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-100 border border-stone-200 text-center space-y-3">
  <h3 class="text-base font-bold text-stone-900">熊本・阿蘇・九州の温泉旅情報も合わせてチェック！</h3>
  <ul class="text-xs text-stone-600 space-y-1.5 inline-block text-left">
    <li>👉 <a href="/autumn-kumamoto-kurokawa-onsen-akagyu-guide/" class="text-emerald-800 hover:text-emerald-600 underline">黒川温泉の秋・冬露天風呂めぐり＆あかうし会席徹底レビュー</a></li>
    <li>👉 <a href="/kumamoto/" class="text-emerald-800 hover:text-emerald-600 underline">熊本県の人気温泉宿・観光名所完全ガイド</a></li>
    <li>👉 <a href="/winter-youth-beppu-hotspring-hells-tour-guide/" class="text-emerald-800 hover:text-emerald-600 underline">大分・別府温泉の地獄めぐりと冬の湯けむりステイ特集</a></li>
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
    image: hOkyakuya.hotelImageUrl,
    other_images: [
      hYamamizuki.hotelImageUrl,
      hKurokawaso.hotelImageUrl,
      hYusai.hotelImageUrl,
      hFumoto.hotelImageUrl
    ],
    hotel_name: `${hOkyakuya.hotelName}・${hYamamizuki.hotelName} ほか`,
    affiliate_url: hOkyakuya.affiliateUrl,
    categories: ["冬のイベント特集", "湯あかり", "黒川温泉", "阿蘇", "入湯手形", "肥後あかうし"],
    price: `¥${(hYusai.hotelMinCharge || 9353).toLocaleString()}〜`,
    rating: hOkyakuya.reviewAverage || 4.88,
    review_count: hYamamizuki.reviewCount || 2100,
    date: date,
    is_special_feature: true,
    keywords: [
      "黒川温泉 湯あかり 2026 2027 点灯時間",
      "黒川温泉 入湯手形 露天風呂巡り",
      "御客屋 宿泊記 楽天トラベル",
      "山みず木 幽谷の湯 渓流露天",
      "黒川荘 にごり湯 茅葺き",
      "ふもと旅館 貸切風呂 湯あかり",
      "阿蘇 冬 やまなみハイウェイ 雪道"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["黒川温泉", "湯あかり", "入湯手形", "御客屋", "山みず木", "肥後あかうし", "熊本旅行", "冬の温泉"]
---

# ${title}

深山幽谷の温泉街・黒川温泉を幻想的な竹灯篭の温もりで包み込む冬の風物詩「湯あかり」。

田の原川の清流に浮かぶ無数の鞠灯篭（まりとうろう）と川端通りの竹筒が織りなす幽玄の世界を現地目線で徹底解説。

名物「入湯手形」で28箇所の露天風呂から趣異なる名湯を巡り、阿蘇の草原で育まれた極上の「肥後あかうし」や特選馬刺しに舌鼓。

冬のやまなみハイウェイ雪道対策から情緒あふれる厳選5宿まで完全網羅します。

---

## 🏮 「湯あかり」ベスト鑑賞スポット＆入湯手形・雪道アクセス攻略

- **丸鈴橋（まるすずばし）からの絶景:** 川面に浮かぶ立体的な鞠灯篭と川霧が織りなす黄金色の光の回廊。
- **川端通りの竹筒ライトアップ:** 浴衣に丹前を羽織って下駄の音を響かせながら散策する冬の温泉街情緒。
- **名物「入湯手形（1,300円）」:** 1枚で加盟宿28軒中3箇所の露天風呂を巡れる大人気パスポート。
- **直通バスのススメ:** 冬のやまなみハイウェイは積雪・凍結のリスクが高いため、熊本駅や福岡からの直行高速バス利用が安心安全。

---

## 🏨 情緒あふれる露天風呂と阿蘇美食を堪能！黒川温泉の厳選宿5選

### 1. 黒川温泉 歴史の宿 御客屋（熊本県南小国町）
- **特徴:** 創業300年、黒川温泉最古の老舗旅館。「代官の湯」など自家源泉7つの湯処と、契約農家の有機野菜・あかうし炭火焼き会席。
- **宿泊目安:** 1名 ¥${(hOkyakuya.hotelMinCharge || 16500).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hOkyakuya.reviewAverage}（${hOkyakuya.reviewCount}件）
- 👉 [歴史の宿 御客屋の空室・宿泊プランを見る](${hOkyakuya.affiliateUrl})

### 2. 黒川温泉 山あいの宿 山みず木（熊本県南小国町）
- **特徴:** 奥黒川の渓流沿いに佇む隠れ宿。清流が間近に迫る絶景巨岩露天風呂「幽谷の湯」で自然に溶け込む贅沢な湯浴み。
- **宿泊目安:** 1名 ¥${(hYamamizuki.hotelMinCharge || 23100).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hYamamizuki.reviewAverage}（${hYamamizuki.reviewCount}件）
- 👉 [山あいの宿 山みず木の空室・宿泊プランを見る](${hYamamizuki.affiliateUrl})

### 3. 黒川温泉 黒川荘（熊本県南小国町）
- **特徴:** びょうぶ岩を仰ぐ茅葺きの館。エメラルドグリーンから乳白色へと色を変える神秘的な「緑白色のにごり湯」と極上馬刺し。
- **宿泊目安:** 1名 ¥${(hKurokawaso.hotelMinCharge || 17000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hKurokawaso.reviewAverage}（${hKurokawaso.reviewCount}件）
- 👉 [黒川荘の空室・宿泊プランを見る](${hKurokawaso.affiliateUrl})

### 4. 黒川温泉 優彩別館（熊本県南小国町）
- **特徴:** 竹林と清流に面した静寂の隠れ家。肌に優しい弱アルカリ性の名湯と、湯あかりスポットへ気軽に出かけられる好アクセス。
- **宿泊目安:** 1名 ¥${(hYusai.hotelMinCharge || 9353).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hYusai.reviewAverage}（${hYusai.reviewCount}件）
- 👉 [優彩別館の空室・宿泊プランを見る](${hYusai.affiliateUrl})

### 5. 黒川温泉 ふもと旅館（熊本県南小国町）
- **特徴:** 丸鈴橋のすぐそば、湯あかり鑑賞に最高の立地。立ち湯や打たせ湯など全15の多彩なお風呂を巡る湯めぐりパラダイス。
- **宿泊目安:** 1名 ¥${(hFumoto.hotelMinCharge || 23100).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hFumoto.reviewAverage}（${hFumoto.reviewCount}件）
- 👉 [ふもと旅館の空室・宿泊プランを見る](${hFumoto.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **黒川温泉:** ${wKurokawa.extract || '田の原川沿いに広がる風情ある温泉街。入湯手形による露天風呂巡りが有名。'}
- **阿蘇山:** ${wAso.extract || '世界屈指の巨大カルデラを持つ活火山。冬の大観峰からの雲海と雪景色は圧巻。'}
- **白川水源:** ${wShirakawa.extract || '日本名水百選に選定された清冽な湧水地。冬でも水温約14度を保ち清らかに湧出。'}
- **鍋ヶ滝:** 幅約20mの水のカーテン。滝の裏側へ回ることができる神秘の裏見の滝（事前予約制）。

---

## 🗺️ 冬の黒川温泉 1泊2日湯治モデルコース

- **1日目:** 熊本駅/空港 ➔ 阿蘇大観峰展望台 ➔ 黒川温泉到着・風の舎で入湯手形購入 ➔ 宿チェックイン ➔ 雪見露天風呂 ➔ 17:00 湯あかり点灯鑑賞 ➔ あかうし＆馬刺し会席
- **2日目:** 朝露天風呂 ➔ 郷土和朝食 ➔ 手形で2軒目の露天風呂巡り ➔ 温泉街カフェ散策 ➔ 鍋ヶ滝 ➔ 熊本駅より帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. 湯あかりの点灯時間は？**  
A. 12月中旬〜3月下旬、毎日17:00〜21:30まで点灯します。

**Q2. 入湯手形の料金と有効期間は？**  
A. 1枚1,300円で加盟旅館3箇所の露天風呂に入浴でき、半年間有効です。

**Q3. 車の雪道対策は必要ですか？**  
A. 標高700mの高地のため冬期は積雪・凍結します。スタッドレスタイヤ必須、または直行高速バスが安心です。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【熊本・阿蘇黒川温泉】冬の風物詩「黒川温泉 湯あかり2026-2027」＆入湯手形露天風呂巡り完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/${slug}/)
`;

  return { postData, noteMarkdown };
};
