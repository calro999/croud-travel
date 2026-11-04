// scripts/new_articles/article30_suwa.js
module.exports = function buildArticle30(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-nagano-suwa-taisha-hatsumode-omiwatari-kamisuwa-onsen-hotels-guide";
  const title = "【長野・諏訪湖/上諏訪】諏訪大社四社めぐり新春初詣＆御神渡り祈願完全攻略！日本最古の聖地と諏訪湖畔の自家源泉かけ流し露天・諏訪五蔵地酒を味わう名門宿5選";
  const description = "日本最古の神社の一つ、信濃國一之宮・諏訪大社（上社本宮・前宮、下社春宮・秋宮）の四社まいり新春初詣と、冬の諏訪湖が魅せる神秘の自然現象「御神渡り（おみわたり）」を徹底解説。国指定重要文化財「片倉館」の千人風呂や、諏訪湖畔に湧く高温自家源泉掛け流しの絶景露天風呂、甲州街道沿いの「諏訪五蔵」酒蔵めぐり、信州サーモンや信州プレミアム牛肉を堪能できる厳選名宿5選を完全網羅。";
  const date = "2026-11-04";
  const prefecture = "長野県";
  const area = "諏訪・上諏訪・下諏訪";

  const hShinyu = hotels.find(h => h.hotelNo === 130095) || hotels[0];
  const hHamanoyu = hotels.find(h => h.hotelNo === 2879) || hotels[1];
  const hNunohan = hotels.find(h => h.hotelNo === 7071) || hotels[2];
  const hBeniya = hotels.find(h => h.hotelNo === 2880) || hotels[3];
  const hAburaya = hotels.find(h => h.hotelNo === 18155) || hotels[4];

  const wSuwaShrine = wiki["諏訪大社"] || {};
  const wLakeSuwa = wiki["諏訪湖"] || {};
  const wOmiwatari = wiki["御神渡り"] || {};
  const wKatakurakan = wiki["片倉館"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-indigo-950 via-slate-900 to-sky-950 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-indigo-800/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-indigo-300 font-extrabold text-xs tracking-wider">
      <span>⛩️</span><span>2026-2027冬 諏訪大社四社まいり新春初詣＆御神渡り 最新現地ガイド</span>
    </div>
    <p class="text-xs text-indigo-100 leading-relaxed">
      日本最古の聖地で迎春！諏訪湖畔に湧く高温自家源泉掛け流し露天風呂、諏訪五蔵の美酒、そして信州牛会席を味わう極上の冬旅へ。
    </p>
  </div>
  <a href="${hShinyu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-indigo-400 hover:bg-indigo-300 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    ♨️ 諏訪湖一望・しんゆの空室を見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 mb-4">
  神が渡る白銀の湖面！諏訪大社四社新春初詣と「御神渡り」の神秘
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  八ヶ岳連峰と南アルプスに抱かれた標高約759メートルの高原湖、長野県諏訪湖。寒気が極まる12月から1月、古事記の時代から続く神話の息吹が最も色濃く感じられる季節を迎えます。全国に約2万5千社ある諏訪神社の総本社であり、日本最古の社の一つに数えられる「諏訪大社」への新春初詣です。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  諏訪大社は諏訪湖を挟んで南側に「上社（本宮・前宮）」、北側に「下社（秋宮・春宮）」という二社四宮の社殿が鎮座する極めて珍しい神域構造を持っています。本殿を持たず、背後の神体山や神木を直接拝する古代日本の自然信仰が色濃く残されており、四社すべてを巡拝する「四社まいり」は、新年の心願成就や無病息災、商売繁盛を祈願する最高峰のパワースポット巡りとして全国から崇敬を集めています。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  そして真冬の諏訪湖最大のロマンが、全面結氷した湖面に現れる奇跡の自然現象「御神渡り（おみわたり）」。昼夜の寒暖差によって氷が収縮と膨張を繰り返し、大音響とともに氷の亀裂が数キロメートルにわたって山脈状にせり上がるこの現象は、上社の男神（建御名方神）が下社の女神（八坂刀売神）のもとへ逢瀬に通った足跡と伝えられます。湖畔に佇む上諏訪温泉は、毎分大量に湧き出る高温自家源泉が自慢。片倉館の歴史ある千人風呂に浸かり、甲州街道沿いわずか500mに並ぶ「諏訪五蔵（真澄・本金・横笛・麗人・舞姫）」の銘酒を味わい、信州サーモンや信州プレミアム牛肉に舌鼓を打つ――これこそが大人の冬の信州旅の極致です。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-6">
  ⛩️ 諏訪大社「四社まいり」完全攻略ルート＆御神渡り観察ポイント
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-indigo-100 text-indigo-800 font-extrabold text-xs rounded-lg">巡拝ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">二社四宮の巡拝順序＆御朱印・記念品</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>巡拝の王道ルート:</strong> 正式な決まりはありませんが、交通動線としては「上社前宮 ➔ 上社本宮 ➔ 下社秋宮 ➔ 下社春宮」の順で巡るのが最も効率的です。車なら所要約3〜4時間、バスやタクシーを組み合わせても半日で巡拝可能です。</p>
      <p>② <strong>四社参拝記念の記念品:</strong> 四社すべての御朱印を集めると、最後の神社で「四社参拝記念の特製落雁（らくがん）」または「きんちゃく袋」などの記念品が授与されます。</p>
      <p>③ <strong>御柱（おんばしら）の迫力:</b> 各社の四隅にそびえ立つ樹齢数百年の巨大なモミの大木「御柱」。寅年と申年に行われる天下の大祭「御柱祭」の熱気と神聖な威厳を間近で体感できます。</p>
      <p>④ <strong>万治の石仏（下社春宮近く）:</strong> 春宮から川を渡った先にあるユニークな石仏。「よろずおさまりますように」と願いながら石仏の周りを時計回りに3周唱えながら回ると願いが叶うと伝わります。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-sky-100 text-sky-800 font-extrabold text-xs rounded-lg">気候＆防寒</span>
      <h3 class="text-base font-bold text-stone-900">高原盆地の底冷え対策と御神渡りの見学マナー</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【氷点下10度に対応する極暖装備】</strong> 諏訪盆地は標高約760mの高地にあり、晴天の夜から早朝にかけて強い放射冷却現象が発生します。12月〜1月の早朝はマイナス5度〜マイナス10度まで冷え込むため、ダウンコートの下にインナーダウンやフリースを重ね着し、防風耳当て付き帽子と厚手手袋を必携してください。</p>
      <p><strong>【湖上の立ち入りは厳禁】</strong> 御神渡りが発生した際、氷の上に絶対に立ち入らないでください。結氷の厚さは場所によって異なり、氷が割れて落水する重大事故の危険があります。必ず湖畔の遊歩道や堤防から安全に見学してください。</p>
      <p><strong>【諏訪五蔵めぐりのコツ】</strong> JR上諏訪駅から徒歩約10分の甲州街道沿いには、わずか500mの間に5軒の造り酒屋が並びます。専用グラスを購入して飲み比べができる「ごくらくセット」は酒好きにはたまらない名物です（試飲される方は必ず徒歩で巡りましょう）。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  🏨 諏訪湖を一望する自家源泉と美食に浸る！上諏訪温泉の厳選名宿5選
</h2>

<!-- 宿1: 上諏訪温泉 しんゆ -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-indigo-100 text-indigo-900 font-black text-xs rounded-full">全館大リニューアル・諏訪湖一望の絶景露天風呂と創作和会席「美し巡り膳」</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 上諏訪温泉 しんゆ（長野県諏訪市湖岸通り）</h3>
    </div>
    <span class="px-3 py-1.5 bg-indigo-50 border border-indigo-300 text-indigo-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hShinyu.reviewAverage}（${hShinyu.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hShinyu.hotelImageUrl}" alt="${hShinyu.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hShinyu.roomImageUrl || hShinyu.hotelImageUrl}" alt="${hShinyu.hotelName} 露天風呂からの諏訪湖眺望" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 諏訪湖畔のベストポジションに位置し、モダンで洗練された癒やしの空間を提供する人気のデザイン温泉旅館。客室の窓一面に広がる冬の諏訪湖と遠くアルプスの稜線が、刻一刻と表情を変える情景に魅了されます。
      </p>
      <p>
        <strong>【自家源泉と畳敷き大浴場】</strong> 敷地内から湧き出る良質な自家源泉を惜しみなく注ぎ込む大浴場は、足元が滑りにくく温かみのある「畳風呂」。湖面を渡る清らかな風を感じられる露天風呂や、プライベートな貸切半露天風呂も完備されています。
      </p>
      <p>
        <strong>【二十四節気を味わう創作和会席】</strong> 夕食は個室料亭にて、地元の旬野菜や信州サーモン、信州牛を彩り豊かに盛り込んだ創作和会席「美し巡り膳」を提供。諏訪五蔵の銘酒とのペアリングも秀逸で、至福の美食時間を過ごせます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hShinyu.hotelMinCharge || 9000).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hShinyu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-indigo-700 hover:bg-indigo-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 上諏訪温泉 浜の湯 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">「おもてなしの心」と本格会席料理が絶賛・24時間入浴可能な大浴場</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 上諏訪温泉 浜の湯（長野県諏訪市湖岸通り）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hHamanoyu.reviewAverage}（${hHamanoyu.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hHamanoyu.hotelImageUrl}" alt="${hHamanoyu.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hHamanoyu.roomImageUrl || hHamanoyu.hotelImageUrl}" alt="${hHamanoyu.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 諏訪湖畔に佇む格式高い名門温泉旅館。スタッフのきめ細やかなおもてなしの評価が極めて高く、大切な記念日やご家族三世代の旅行でも安心して寛ぐことができます。
      </p>
      <p>
        <strong>【24時間入浴可能な湯処】</strong> 広々とした大浴場や露天風呂、ミストサウナは清掃時間を除き24時間いつでも入浴可能。冬の澄んだ夜空を見上げる星見風呂や、朝の爽快な湯浴みを時間の制約なく楽しめます。
      </p>
      <p>
        <strong>【料亭仕込みの本格会席】</strong> 料理自慢の宿として知られ、旬の海の幸と信州の山の幸を融合させた本格会席は一品ずつ温かいものは温かく提供。信州プレミアム牛のすき焼きや陶板焼きの柔らかい肉質はまさに絶品です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hHamanoyu.hotelMinCharge || 7810).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hHamanoyu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 上諏訪温泉 ぬのはん -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-sky-100 text-sky-900 font-black text-xs rounded-full">創業嘉永年間（1848年）・文人墨客に愛された純和風老舗旅館</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 上諏訪温泉 ぬのはん（長野県諏訪市湖岸通り）</h3>
    </div>
    <span class="px-3 py-1.5 bg-sky-50 border border-sky-300 text-sky-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hNunohan.reviewAverage}（${hNunohan.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hNunohan.hotelImageUrl}" alt="${hNunohan.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hNunohan.roomImageUrl || hNunohan.hotelImageUrl}" alt="${hNunohan.hotelName} 庭園露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 江戸末期の嘉永元年創業、170年以上の歴史を誇る上諏訪温泉屈指の老舗。島崎藤村ら多くの文人墨客が逗留した由緒ある宿で、美しい日本庭園を囲む落ち着いた純和風の空間が旅人を迎えます。
      </p>
      <p>
        <strong>【自家源泉「朱の湯」】</strong> 敷地内から自噴する高温の自家源泉は、淡い琥珀色を帯びた肌に優しい美肌の湯。庭園露天風呂や総檜風呂からは、冬の庭園の雪景色を眺めながら趣深い湯浴みが叶います。
      </p>
      <p>
        <strong>【伝統の信州郷土会席】</strong> 信州の伝統を受け継ぐ夕食会席は、信州蕎麦やわかさぎの天ぷら、信州牛の石焼きステーキなど、素材本来の旨味を大切にした上品な味付けが好評です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hNunohan.hotelMinCharge || 10450).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hNunohan.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-sky-700 hover:bg-sky-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 上諏訪温泉 ホテル紅や -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-rose-100 text-rose-900 font-black text-xs rounded-full">地上14階の展望大浴場・最上階からの諏訪湖パノラマ絶景</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 上諏訪温泉 ホテル紅や（長野県諏訪市湖岸通り）</h3>
    </div>
    <span class="px-3 py-1.5 bg-rose-50 border border-rose-300 text-rose-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hBeniya.reviewAverage}（${hBeniya.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hBeniya.hotelImageUrl}" alt="${hBeniya.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hBeniya.roomImageUrl || hBeniya.hotelImageUrl}" alt="${hBeniya.hotelName} 展望大浴場" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 諏訪湖畔のシンボル的存在の近代的な高層温泉ホテル。上諏訪駅から徒歩約10分。敷地内には足湯やロープウェイ直結施設も備え、快適な滞在環境が整っています。
      </p>
      <p>
        <strong>【最上階のパノラマ展望温泉】</strong> 本館最上階（14階）に位置する展望大浴場からは、諏訪湖全景と御神渡りの観察ポイント、遠く日本アルプスの白銀連峰をダイナミックに見渡せます。岩盤浴や貸切風呂も完備されています。
      </p>
      <p>
        <strong>【和洋選べるダイニング】</strong> 和食会席から本格フランス料理のコースディナー、さらに気軽なビュッフェプランまで幅広いニーズに対応。湖を見下ろすレストランでの食事は旅の思い出を一層鮮やかに彩ります。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hBeniya.hotelMinCharge || 9400).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hBeniya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-rose-700 hover:bg-rose-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 上諏訪温泉 油屋旅館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">最上階展望露天風呂・夕食時アルコール飲み放題付きのコスパ抜群宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 上諏訪温泉 油屋旅館（長野県諏訪市湖岸通り）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hAburaya.reviewAverage}（${hAburaya.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hAburaya.hotelImageUrl}" alt="${hAburaya.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hAburaya.roomImageUrl || hAburaya.hotelImageUrl}" alt="${hAburaya.hotelName} 展望露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 上諏訪駅から徒歩約5分の好立地。リーズナブルな価格設定で知られる伊東園ホテルズグループの宿で、夕食時のアルコール・ソフトドリンク飲み放題が全プランに標準装備されています。
      </p>
      <p>
        <strong>【最上階展望露天風呂「八峰の湯」】</strong> 最上階（7階）の露天風呂からは諏訪湖の美しい水面を眼下に見下ろすパノラマビュー。自家源泉のやわらかなお湯に浸かりながら、夕焼けや朝霧に煙る湖の情景を堪能できます。
      </p>
      <p>
        <strong>【季節の味覚バイキング】</strong> 夕食は約70種類の和洋中バイキング。冬期はカニや信州名物の特別フェアも開催され、生ビールや地酒とともに気兼ねなく満腹になれるのが魅力です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hAburaya.hotelMinCharge || 7898).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hAburaya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="sightseeing" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6 leading-relaxed">
  四社まいりと合わせて巡りたい、諏訪湖畔の歴史遺産や文化名所をWikipedia公式解説とともにご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-indigo-700 font-bold text-sm">📍 諏訪大社（信濃國一之宮）</span>
    </div>
    ${wSuwaShrine.thumbnail ? `<img src="${wSuwaShrine.thumbnail}" alt="${wSuwaShrine.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wSuwaShrine.extract || '信濃国一之宮。上社（本宮・前宮）と下社（春宮・秋宮）の二社四宮からなる日本屈指の古社で、本殿を持たない原初的な自然崇拝の形式を今に伝えています。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-indigo-700 font-bold text-sm">📍 諏訪湖（御神渡りの舞台）</span>
    </div>
    ${wLakeSuwa.thumbnail ? `<img src="${wLakeSuwa.thumbnail}" alt="${wLakeSuwa.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wLakeSuwa.extract || '標高759m、周囲約16kmの断層湖。冬には全面結氷し「御神渡り」と呼ばれる氷のせり上がり現象が発生することで全国的に知られます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-indigo-700 font-bold text-sm">📍 御神渡り（八剣神社による拝観神事）</span>
    </div>
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wOmiwatari.extract || '諏訪湖が結氷した際、氷が筋状に盛り上がる現象。上社の男神が下社の女神のもとへ通う道筋とされ、地元の八剣神社の宮司らによって拝観式が行われ、その年の吉凶や農作物の豊凶が占われます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-indigo-700 font-bold text-sm">📍 片倉館（千人風呂・国指定重要文化財）</span>
    </div>
    ${wKatakurakan.thumbnail ? `<img src="${wKatakurakan.thumbnail}" alt="${wKatakurakan.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wKatakurakan.extract || '製糸王・片倉財閥が昭和初期に建設した洋風建築の温泉保養施設。深さ約1.1mの立ち湯大浴場「千人風呂」には底に玉砂利が敷き詰められ、ステンドグラスや彫刻に囲まれた名湯を体験できます。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  🗺️ 諏訪大社四社まいりと湖畔名湯 1泊2日新春開運モデルコース
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-indigo-700 text-white rounded text-xs">1日目</span>
      上社二社参拝から片倉館千人風呂・諏訪五蔵酒蔵巡りへ
    </h3>
    <p class="leading-relaxed">
      10:30 JR上諏訪駅到着 ➔ レンタカーまたはタクシーで「上社前宮」へ参拝（名水と原初的聖地） ➔ 「上社本宮」へ移動し重要文化財の壮麗な拝殿参拝 ➔ 門前で信州名物「みそ天丼」または「手打ち蕎麦」ランチ ➔ 14:00 上諏訪温泉街へ移動、昭和初期の洋風重要文化財「片倉館」で深さ1.1mの千人風呂立ち寄り入浴 ➔ 15:30 甲州街道で「諏訪五蔵（真澄・本金など）」の酒蔵めぐりとお土産選び ➔ 17:00 湖畔宿チェックイン ➔ 自家源泉露天風呂で温まり、信州プレミアム牛会席を堪能。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-indigo-700 text-white rounded text-xs">2日目</span>
      朝の御神渡り観察と下社二宮参拝・万治の石仏
    </h3>
    <p class="leading-relaxed">
      07:30 朝の湖畔散歩、結氷した諏訪湖と御神渡りの亀裂ラインを安全な堤防から観察 ➔ 08:30 宿の和朝食 ➔ 09:30 チェックアウト ➔ 湖北の下社へ移動 ➔ 「下社秋宮」参拝（巨大なしめ縄と青銅製狛犬） ➔ 「下社春宮」参拝と御柱見学 ➔ 春宮近くの「万治の石仏」で3周巡拝祈願 ➔ 四社参拝達成の記念品拝受 ➔ 下諏訪駅前で名物塩羊羹を購入し特急あずさで帰路へ。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  📊 上諏訪温泉 厳選5宿のスペック比較一覧
</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
      <tr>
        <th class="p-3">宿名</th>
        <th class="p-3">エリア</th>
        <th class="p-3">楽天評価</th>
        <th class="p-3">宿泊目安(1名)</th>
        <th class="p-3">温泉・風呂特徴</th>
        <th class="p-3">食事の看板メニュー</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">上諏訪温泉 しんゆ</td>
        <td class="p-3">諏訪湖畔中央</td>
        <td class="p-3 font-bold text-indigo-700">★ ${hShinyu.reviewAverage}</td>
        <td class="p-3">¥${(hShinyu.hotelMinCharge || 9000).toLocaleString()}〜</td>
        <td class="p-3">自家源泉掛け流し畳風呂・絶景露天</td>
        <td class="p-3">二十四節気の創作和会席「美し巡り膳」</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">上諏訪温泉 浜の湯</td>
        <td class="p-3">諏訪湖畔</td>
        <td class="p-3 font-bold text-indigo-700">★ ${hHamanoyu.reviewAverage}</td>
        <td class="p-3">¥${(hHamanoyu.hotelMinCharge || 7810).toLocaleString()}〜</td>
        <td class="p-3">24時間入浴可能な大浴場・ミストサウナ</td>
        <td class="p-3">料亭仕込み本格会席・信州牛料理</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">上諏訪温泉 ぬのはん</td>
        <td class="p-3">諏訪湖畔老舗街</td>
        <td class="p-3 font-bold text-indigo-700">★ ${hNunohan.reviewAverage}</td>
        <td class="p-3">¥${(hNunohan.hotelMinCharge || 10450).toLocaleString()}〜</td>
        <td class="p-3">嘉永元年創業・自家源泉「朱の湯」</td>
        <td class="p-3">伝統信州郷土会席・信州蕎麦</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ホテル紅や</td>
        <td class="p-3">諏訪湖畔高層</td>
        <td class="p-3 font-bold text-indigo-700">★ ${hBeniya.reviewAverage}</td>
        <td class="p-3">¥${(hBeniya.hotelMinCharge || 9400).toLocaleString()}〜</td>
        <td class="p-3">最上階14階のパノラマ展望温泉大浴場</td>
        <td class="p-3">和洋選べるディナー・フレンチコース</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">油屋旅館</td>
        <td class="p-3">上諏訪駅徒歩5分</td>
        <td class="p-3 font-bold text-indigo-700">★ ${hAburaya.reviewAverage}</td>
        <td class="p-3">¥${(hAburaya.hotelMinCharge || 7898).toLocaleString()}〜</td>
        <td class="p-3">最上階7階の展望露天風呂「八峰の湯」</td>
        <td class="p-3">飲み放題付き和洋中バイキング</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>

<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q1. 諏訪大社の四社めぐりは車なし（電車・バス）でも可能ですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 電車と路線バス、タクシーを組み合わせれば車なしでも十分可能です。下社秋宮・春宮はJR下諏訪駅から徒歩10〜15分程度。上社本宮・前宮へはJR茅野駅または上諏訪駅から路線バス「かりんちゃんバス」や路線バスが運行しています。初詣期間中は臨時シャトルバスも運行される場合があります。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q2. 「御神渡り」は毎年必ず見られますか？いつ頃発生しますか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 御神渡りは連続して厳しい氷点下の冷え込み（最低気温マイナス10度前後）が続く気象条件が必要なため、近年は暖冬により結氷しない「明けの海（あけのうみ）」となる年もあります。観測される場合は例年1月中旬から2月上旬にかけて発生し、八剣神社による拝観式が行われます。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q3. 冬の諏訪湖周辺を車で走る場合、スタッドレスタイヤは必要ですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 必須です。中央自動車道（小淵沢〜諏訪〜岡谷）は冬用タイヤ規制が日常的に行われ、諏訪湖畔や諏訪大社周辺の道路も朝晩は日陰を中心に激しく凍結します。レンタカーを利用する場合も必ずスタッドレスタイヤ装着車をご予約ください。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q4. 国指定重要文化財「片倉館」千人風呂の立ち寄り入浴時間は？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 午前10:00〜午後8:00（受付終了は午後7:30まで）です。毎月第2・第4火曜日が休館日となります。深さ1.1mの立ち湯で底の玉砂利の刺激が心地よく、レトロなステンドグラスを眺めながらの入浴は一生の記念になります。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-100 border border-stone-200 text-center space-y-3">
  <h3 class="text-base font-bold text-stone-900">長野・信州エリアの温泉＆パワースポット特集も合わせてチェック！</h3>
  <ul class="text-xs text-stone-600 space-y-1.5 inline-block text-left">
    <li>👉 <a href="/hirugami-onsen-achi-starry-sky-hotels-guide/" class="text-indigo-800 hover:text-indigo-600 underline">昼神温泉と阿智村・日本一の星空ナイトツアーおすすめ美肌宿ガイド</a></li>
    <li>👉 <a href="/winter-nagano-shibu-onsen-jigokudani-snow-monkey-hotels-guide/" class="text-indigo-800 hover:text-indigo-600 underline">渋温泉・九湯めぐりと地獄谷スノーモンキー雪景色名宿特集</a></li>
    <li>👉 <a href="/nagano/" class="text-indigo-800 hover:text-indigo-600 underline">長野県の宿・温泉地・旬の観光特集一覧</a></li>
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
    image: hShinyu.hotelImageUrl,
    other_images: [
      hHamanoyu.hotelImageUrl,
      hNunohan.hotelImageUrl,
      hBeniya.hotelImageUrl,
      hAburaya.hotelImageUrl
    ],
    hotel_name: `${hShinyu.hotelName}・${hHamanoyu.hotelName} ほか`,
    affiliate_url: hShinyu.affiliateUrl,
    categories: ["冬のイベント特集", "新春初詣", "諏訪大社四社まいり", "御神渡り", "上諏訪温泉", "諏訪五蔵地酒"],
    price: `¥${(hHamanoyu.hotelMinCharge || 7810).toLocaleString()}〜`,
    rating: hShinyu.reviewAverage || 4.53,
    review_count: hShinyu.reviewCount || 1100,
    date: date,
    is_special_feature: true,
    keywords: [
      "諏訪大社 四社まいり ルート 初詣",
      "諏訪湖 御神渡り 見頃 時期",
      "上諏訪温泉 しんゆ 宿泊記",
      "上諏訪温泉 浜の湯 口コミ 会席",
      "ぬのはん 自家源泉 朱の湯",
      "片倉館 千人風呂 立ち寄り 料金"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["諏訪大社", "諏訪大社四社まいり", "御神渡り", "上諏訪温泉", "しんゆ", "ぬのはん", "片倉館", "冬の信州旅行"]
---

# ${title}

日本最古の神社の一つ、信濃國一之宮・諏訪大社（上社本宮・前宮、下社春宮・秋宮）の四社まいり新春初詣と、冬の諏訪湖が魅せる神秘の自然現象「御神渡り（おみわたり）」を徹底解説。

国指定重要文化財「片倉館」の千人風呂や、諏訪湖畔に湧く高温自家源泉掛け流しの絶景露天風呂、甲州街道沿いの「諏訪五蔵」酒蔵めぐり、信州サーモンや信州プレミアム牛肉を堪能できる厳選名宿5選を完全網羅します。

---

## ⛩️ 諏訪大社「四社まいり」完全攻略ルート＆御神渡り観察ポイント

- **四社まいりの王道ルート:** 上社前宮 ➔ 上社本宮 ➔ 下社秋宮 ➔ 下社春宮。四社すべての御朱印を集めると参拝記念の記念品を拝受。
- **御神渡りの奇跡:** 全面結氷した諏訪湖面が山脈状にせり上がる大自然の神秘。湖畔遊歩道から安全に見学。
- **片倉館の千人風呂:** 昭和初期の洋風重要文化財。深さ1.1mの立ち湯で底に敷かれた玉砂利の心地よい刺激を体験。
- **諏訪五蔵の酒蔵街道:** 甲州街道沿い500mに並ぶ5つの銘醸蔵（真澄・本金・横笛・麗人・舞姫）の飲み比べ。

---

## 🏨 諏訪湖を一望する自家源泉と美食に浸る！上諏訪温泉の厳選名宿5選

### 1. 上諏訪温泉 しんゆ（長野県諏訪市湖岸通り）
- **特徴:** 全館リニューアル。諏訪湖一望の絶景露天風呂と畳風呂。二十四節気を味わう創作和会席「美し巡り膳」が好評。
- **宿泊目安:** 1名 ¥${(hShinyu.hotelMinCharge || 9000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hShinyu.reviewAverage}（${hShinyu.reviewCount}件）
- 👉 [上諏訪温泉 しんゆの空室・宿泊プランを見る](${hShinyu.affiliateUrl})

### 2. 上諏訪温泉 浜の湯（長野県諏訪市湖岸通り）
- **特徴:** 諏訪湖畔の名門和風旅館。24時間入浴可能な大浴場とミストサウナ。料亭仕込みの本格会席と信州牛すき焼き。
- **宿泊目安:** 1名 ¥${(hHamanoyu.hotelMinCharge || 7810).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hHamanoyu.reviewAverage}（${hHamanoyu.reviewCount}件）
- 👉 [上諏訪温泉 浜の湯の空室・宿泊プランを見る](${hHamanoyu.affiliateUrl})

### 3. 上諏訪温泉 ぬのはん（長野県諏訪市湖岸通り）
- **特徴:** 嘉永元年創業（1848年）の純和風老舗。島崎藤村逗留の宿。自家源泉「朱の湯」の庭園露天風呂と伝統の信州郷土料理。
- **宿泊目安:** 1名 ¥${(hNunohan.hotelMinCharge || 10450).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hNunohan.reviewAverage}（${hNunohan.reviewCount}件）
- 👉 [上諏訪温泉 ぬのはんの空室・宿泊プランを見る](${hNunohan.affiliateUrl})

### 4. 上諏訪温泉 ホテル紅や（長野県諏訪市湖岸通り）
- **特徴:** 湖畔の高層シンボルホテル。最上階14階のパノラマ展望温泉大浴場から諏訪湖と御神渡りラインを一望。
- **宿泊目安:** 1名 ¥${(hBeniya.hotelMinCharge || 9400).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hBeniya.reviewAverage}（${hBeniya.reviewCount}件）
- 👉 [ホテル紅やの空室・宿泊プランを見る](${hBeniya.affiliateUrl})

### 5. 上諏訪温泉 油屋旅館（長野県諏訪市湖岸通り）
- **特徴:** 上諏訪駅徒歩5分。最上階7階の展望露天風呂「八峰の湯」。夕食時アルコール飲み放題付きバイキングでコスパ抜群。
- **宿泊目安:** 1名 ¥${(hAburaya.hotelMinCharge || 7898).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hAburaya.reviewAverage}（${hAburaya.reviewCount}件）
- 👉 [油屋旅館の空室・宿泊プランを見る](${hAburaya.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **諏訪大社:** ${wSuwaShrine.extract || '信濃国一之宮。上社と下社の二社四宮からなる日本屈指の古社。自然崇拝の形式を今に伝える。'}
- **諏訪湖:** ${wLakeSuwa.extract || '標高759mの断層湖。冬には全面結氷し「御神渡り」が発生する舞台。'}
- **御神渡り:** ${wOmiwatari.extract || '氷がせり上がる現象。上社の男神が下社の女神のもとへ通う道筋とされ、拝観式で吉凶が占われる。'}
- **片倉館:** ${wKatakurakan.extract || '昭和初期に建設された洋風重要文化財。深さ1.1mの立ち湯「千人風呂」が有名。'}

---

## 🗺️ 諏訪大社四社まいりと湖畔名湯 1泊2日モデルコース

- **1日目:** 上諏訪駅到着 ➔ 上社前宮参拝 ➔ 上社本宮参拝 ➔ 門前蕎麦ランチ ➔ 片倉館千人風呂 ➔ 諏訪五蔵酒蔵めぐり ➔ 宿チェックイン ➔ 自家源泉露天風呂 ➔ 信州牛ディナー
- **2日目:** 朝の諏訪湖散歩（御神渡り観察） ➔ 朝食 ➔ 下社秋宮参拝 ➔ 下社春宮参拝 ➔ 万治の石仏参拝祈願 ➔ 四社参拝記念品拝受 ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. 四社まいりは車なしでも巡れますか？**  
A. 電車、路線バス（かりんちゃんバス等）、タクシーを組み合わせれば半日で巡拝可能です。

**Q2. 御神渡りはいつ発生しますか？**  
A. 冷え込みが続いた場合の1月中旬〜2月上旬が見頃ですが、暖冬の年は結氷しない場合もあります。

**Q3. 冬の道路状況や運転の注意点は？**  
A. 諏訪地域は標高が高く朝晩激しく凍結するため、スタッドレスタイヤ装着が必須です。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【長野・諏訪湖/上諏訪】諏訪大社四社めぐり新春初詣＆御神渡り祈願完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/${slug}/)
`;

  return { postData, noteMarkdown };
};
