import os
import json

POSTS_DIR = "src/data/posts"

def update_json(filename, updater_fn):
    filepath = os.path.join(POSTS_DIR, filename)
    if not os.path.exists(filepath):
        print(f"⚠️ File not found: {filename}")
        return
    with open(filepath, "r", encoding="utf-8") as f:
        data = json.load(f)
    data = updater_fn(data)
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"✅ Enhanced {filename}")

# 1. 洞川温泉 いろは旅館＜奈良県＞ (9362.json)
def enhance_9362(data):
    data["title"] = "【2026年最新】洞川温泉 いろは旅館＜奈良県＞の温泉・客室口コミと宿泊予約"
    data["description"] = "奈良・吉野の奥座敷「洞川温泉 いろは旅館＜奈良県＞」の絶品名物ぼたん鍋・名水豆腐、評判の天然温泉、無料駐車場・アクセスを徹底解説。縁側のあるレトロな和室と大自然に包まれる至福の時間を紹介。"
    data["prefecture"] = "奈良県"
    data["area"] = "吉野・大峰・洞川温泉"
    data["hot_spring_info"] = "弱アルカリ性単純温泉（洞川温泉）。疲労回復や神経痛、美肌効果に優れ、木の温もりあふれる大浴場でゆっくり温まります。"
    data["parking_info"] = "敷地内無料駐車場完備（約15台・宿横で移動もラクラク）。"
    data["meal_availability"] = "夕食は名物「吉野のぼたん鍋（山鯨）」や「名水大峯豆腐」、岩魚の塩焼きを堪能。朝食は和定食をご提供。"
    data["family_friendly"] = "昔ながらの温かいおもてなしで、子連れファミリーや三世代旅行にも大人気です。"
    
    data["review"] = """
<h2 id="intro" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【奈良県】洞川温泉 いろは旅館＜奈良県＞の魅力とリアルな宿泊体験談</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">「洞川温泉 いろは旅館＜奈良県＞」は、修験道の聖地・大峯山の麓に位置し、どこか懐かしいノスタルジックな温泉街の風情を愉しめる極上の温泉旅館です。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">「名水百選」に選ばれたごろごろ水で仕込む名物豆腐や、冬季・旬の絶品ぼたん鍋、お肌になめらかな洞川温泉が旅の疲れを優しく癒やします。</p>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-3xl shadow-sm">
  <h3 class="text-base font-bold text-amber-950 mb-3 flex items-center gap-2">💡 洞川温泉 いろは旅館＜奈良県＞をおすすめする3つの理由</h3>
  <ul class="space-y-2 text-xs text-stone-800 font-medium">
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>名物ぼたん鍋＆名水大峯豆腐！地元の旬の味覚を心ゆくまで堪能</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>身体の芯から温まる天然温泉と、木の香漂う寛ぎの大浴場</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>敷地内無料駐車場完備＆面不動鍾乳洞や龍泉寺への散策に最高の立地</span></li>
  </ul>
</div>

<h2 id="features" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-6">温泉・お部屋・無料駐車場・アクセス</h2>
<div class="my-6 p-6 rounded-3xl bg-white border border-stone-200 shadow-md space-y-4">
  <div class="flex items-center justify-between border-b border-stone-100 pb-3">
    <h3 class="text-lg font-bold text-stone-900">洞川温泉 いろは旅館＜奈良県＞</h3>
    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-full">⭐ 4.61 / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-6">
    <div class="w-full md:w-5/12">
      <img src="https://img.travel.rakuten.co.jp/share/HOTEL/9362/9362.jpg" alt="洞川温泉 いろは旅館＜奈良県＞" class="w-full h-48 object-cover rounded-2xl shadow-sm border border-stone-100" loading="lazy" />
    </div>
    <div class="w-full md:w-7/12 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p><strong>【都道府県】</strong> 奈良県</p>
      <p><strong>【エリア】</strong> 吉野・大峰・洞川温泉</p>
      <p><strong>【お風呂】</strong> 天然温泉大浴場（洞川温泉）</p>
      <p><strong>【駐車場】</strong> 無料駐車場あり（宿横・約15台）</p>
    </div>
  </div>
  <div class="pt-4 text-center">
    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9362%2F9362.html" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-lg">
      ✈️ 洞川温泉 いろは旅館＜奈良県＞ の最新空室状況・限定お得プランを見る
    </a>
  </div>
</div>

<h2 id="faq" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-6">💡 よくある質問（FAQ）</h2>
<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-500 text-white text-xs font-black rounded-md">Q</span>駐車場料金や予約について教えてください。</h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-amber-200"><span class="font-bold text-amber-600">A.</span> ご宿泊のお客様は無料駐車場をご利用いただけます。お車での吉野ドライブ観光にも非常に便利です。</p>
  </div>
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-500 text-white text-xs font-black rounded-md">Q</span>名物のお料理（ぼたん鍋や名水豆腐）は夕食で食べられますか？</h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-amber-200"><span class="font-bold text-amber-600">A.</span> はい！季節の会席プランやぼたん鍋プランにて、名水「ごろごろ水」で作られた豆腐や吉野の山海の幸を存分に堪能いただけます。</p>
  </div>
</div>
""".strip()
    return data

update_json("9362.json", enhance_9362)

# 2. 湯の児温泉 松原荘＜熊本県＞ (30938.json)
def enhance_30938(data):
    data["title"] = "【2026年最新】湯の児温泉 松原荘＜熊本県＞の温泉・客室口コミと宿泊予約"
    data["description"] = "熊本県水俣・湯の児温泉にある「湯の児温泉 松原荘＜熊本県＞ / 旅館 松原荘」の口コミ評判、不知火海を望む絶景天然温泉、新鮮な地魚会席、無料駐車場・アクセス情報を徹底解説。"
    data["prefecture"] = "熊本県"
    data["area"] = "八代・水俣・湯の児"
    data["hot_spring_info"] = "源泉かけ流しの天然温泉。不知火海の心地よい潮風を感じながら浸かる露天風呂が自慢です。"
    data["parking_info"] = "無料駐車場あり（約30台・広々スペース）。"
    data["meal_availability"] = "天草・不知火海で獲れた新鮮な魚介類のお造りや地元熊本ブランド肉の和食会席料理をご用意。"
    
    data["review"] = """
<h2 id="intro" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【熊本県】湯の児温泉 松原荘＜熊本県＞の魅力と海の絶景ガイド</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">「湯の児温泉 松原荘＜熊本県＞（旅館 松原荘）」は、美しい不知火海（しらぬいかい）のパノラマと、豊富な湯量を誇る源泉かけ流し温泉が自慢の癒やしの温泉宿です。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">海沿いの静かなロケーションで、獲れたての新鮮な海の幸と心地よい温泉を満喫できるため、カップルやご家族連れ、一人旅にも大変人気があります。</p>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-3xl shadow-sm">
  <h3 class="text-base font-bold text-amber-950 mb-3 flex items-center gap-2">💡 湯の児温泉 松原荘が選ばれる3つの理由</h3>
  <ul class="space-y-2 text-xs text-stone-800 font-medium">
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>不知火海を一望する絶景！源泉かけ流しの天然温泉でリフレッシュ</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>地元水俣・天草産の獲れたて新鮮海鮮づくし会席料理</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>車移動も安心の敷地内無料駐車場完備＆九州ドライブ旅行の絶好ポイント</span></li>
  </ul>
</div>

<h2 id="features" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-6">温泉・客室・施設の特徴</h2>
<div class="my-6 p-6 rounded-3xl bg-white border border-stone-200 shadow-md space-y-4">
  <div class="flex items-center justify-between border-b border-stone-100 pb-3">
    <h3 class="text-lg font-bold text-stone-900">湯の児温泉 松原荘＜熊本県＞</h3>
    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-full">⭐ 4.25 / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-6">
    <div class="w-full md:w-5/12">
      <img src="https://img.travel.rakuten.co.jp/share/HOTEL/30938/30938.jpg" alt="湯の児温泉 松原荘＜熊本県＞" class="w-full h-48 object-cover rounded-2xl shadow-sm border border-stone-100" loading="lazy" />
    </div>
    <div class="w-full md:w-7/12 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p><strong>【都道府県】</strong> 熊本県</p>
      <p><strong>【エリア】</strong> 八代・水俣・湯の児</p>
      <p><strong>【お風呂】</strong> 源泉かけ流し天然温泉大浴場・露天風呂</p>
      <p><strong>【駐車場】</strong> 敷地内無料駐車場完備</p>
    </div>
  </div>
  <div class="pt-4 text-center">
    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30938%2F30938.html" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-lg">
      ✈️ 湯の児温泉 松原荘＜熊本県＞ の最新空室状況・お得プランを見る
    </a>
  </div>
</div>
""".strip()
    return data

update_json("30938.json", enhance_30938)

# 3. 五頭温泉郷 出湯温泉 郷愁の宿 大石屋旅館 (107863.json)
def enhance_107863(data):
    data["title"] = "【2026年最新】出湯温泉 大石屋旅館の温泉・客室口コミと宿泊予約"
    data["description"] = "新潟県五頭温泉郷「出湯温泉 大石屋旅館」の口コミ評判、弘法大師ゆかりの歴史あるラジウム温泉、美味しい新潟米と旬懐石、無料駐車場・アクセス情報を徹底解読。"
    data["prefecture"] = "新潟県"
    data["area"] = "阿賀野・五頭温泉郷"
    data["hot_spring_info"] = "開湯1200年を誇る出湯温泉。全国有数のラジウム温泉で心身ともに深くリフレッシュできます。"
    data["parking_info"] = "無料駐車場あり（約20台）。"
    data["meal_availability"] = "コシヒカリ本場の極上ご飯と、山菜・川魚・地元野菜を中心とした滋味あふれる里山料理。"
    
    data["review"] = """
<h2 id="intro" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【新潟県】出湯温泉 大石屋旅館で過ごす至福の安らぎガイド</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">「五頭温泉郷 出湯温泉 郷愁の宿 大石屋旅館」は、新潟県阿賀野市に佇む開湯1200年の歴史を持つ名湯宿です。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">全国的にも珍しいラジウム温泉の素晴らしい泉質と、木のぬくもりを感じる静かな木造空間、新潟の美味しい地酒と料理が口コミで極めて高い評価（★4.83）を獲得しています。</p>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-3xl shadow-sm">
  <h3 class="text-base font-bold text-amber-950 mb-3 flex items-center gap-2">💡 出湯温泉 大石屋旅館をおすすめする3つの理由</h3>
  <ul class="space-y-2 text-xs text-stone-800 font-medium">
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>万病に効くと評される歴史あるラジウム温泉の源泉浴</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>新潟県産コシヒカリと季節の地場食材を味わう絶品和会席</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>無料駐車場完備＆静かな五頭山麓で過ごす大人リトリート</span></li>
  </ul>
</div>

<h2 id="features" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-6">温泉・客室・施設の特徴</h2>
<div class="my-6 p-6 rounded-3xl bg-white border border-stone-200 shadow-md space-y-4">
  <div class="flex items-center justify-between border-b border-stone-100 pb-3">
    <h3 class="text-lg font-bold text-stone-900">出湯温泉 大石屋旅館</h3>
    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-full">⭐ 4.83 / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-6">
    <div class="w-full md:w-5/12">
      <img src="https://img.travel.rakuten.co.jp/share/HOTEL/107863/107863.jpg" alt="出湯温泉 大石屋旅館" class="w-full h-48 object-cover rounded-2xl shadow-sm border border-stone-100" loading="lazy" />
    </div>
    <div class="w-full md:w-7/12 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p><strong>【都道府県】</strong> 新潟県</p>
      <p><strong>【エリア】</strong> 阿賀野・五頭温泉郷</p>
      <p><strong>【お風呂】</strong> 歴史あるラジウム天然温泉大浴場</p>
      <p><strong>【駐車場】</strong> 無料駐車場あり（約20台）</p>
    </div>
  </div>
  <div class="pt-4 text-center">
    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F107863%2F107863.html" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-lg">
      ✈️ 出湯温泉 大石屋旅館 の最新空室状況・限定お得プランを見る
    </a>
  </div>
</div>
""".strip()
    return data

update_json("107863.json", enhance_107863)

# 4. プールリゾート特集 (pool-resort-hotel-guide.json)
def enhance_pool(data):
    data["title"] = "【2026年最新】夏休み プール付きホテル・インフィニティプールおすすめ特集"
    data["description"] = "夏休みのプール付きホテル、インフィニティプール日本国内のおすすめリゾートホテルを厳選！沖縄・関東・関西・北海道の人気ナイトプール・全天候温水プール・子連れファミリー向け施設を徹底比較。"
    
    custom_review = """
<h2 id="intro" class="text-xl font-bold text-stone-900 border-b-2 border-sky-500 pb-2 mb-4">【2026年最新】夏休み プール付きホテル・インフィニティプール日本国内おすすめリゾート</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">「青い海と空に溶け込むインフィニティプールで最高のリゾートフォトを撮りたい！」「夏休みに子連れで安心して泳げる温水プールやナイトプール付きホテルに泊まりたい！」</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">本記事では、Google検索人気急上昇中の「夏休み プール ホテル」「インフィニティ プール 日本」「夏 ホテル プール」を満たす、日本全国の極上プール付きリゾートを厳選まとめ紹介します。</p>

<div class="my-6 p-6 bg-gradient-to-br from-sky-50 to-blue-50/50 border border-sky-200 rounded-3xl shadow-sm">
  <h3 class="text-base font-bold text-sky-950 mb-3 flex items-center gap-2">🏊 プール付きホテルの選び方・4大チェックポイント</h3>
  <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-stone-800 font-medium">
    <li class="p-3 bg-white rounded-xl border border-sky-100"><strong class="text-sky-700">① インフィニティプール：</strong> 水面と海・空が一体化する絶景。大人のラグジュアリーステイやカップルに最適。</li>
    <li class="p-3 bg-white rounded-xl border border-sky-100"><strong class="text-sky-700">② ナイトプール：</strong> ライトアップやDJサウンドで日焼けを気にせず夜の優雅な時間を満喫。</li>
    <li class="p-3 bg-white rounded-xl border border-sky-100"><strong class="text-sky-700">③ 全天候型温水プール：</strong> 天候や季節を問わず子連れファミリー・赤ちゃんと一緒に遊べるインドアプール。</li>
    <li class="p-3 bg-white rounded-xl border border-sky-100"><strong class="text-sky-700">④ プライベートプールヴィラ：</strong> お部屋のテラスに専用プールを備えた贅沢な完全個室リゾート。</li>
  </ul>
</div>

<h2 id="faq" class="text-xl font-bold text-stone-900 border-b-2 border-sky-500 pb-2 my-6">💡 プール利用に関するよくある質問（FAQ）</h2>
<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2"><span class="px-2 py-0.5 bg-sky-500 text-white text-xs font-black rounded-md">Q</span>インフィニティプールや屋外プールはいつから営業していますか？</h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-sky-200"><span class="font-bold text-sky-600">A.</span> 沖縄や南国リゾートでは4月〜10月頃まで営業。関東・関西の多くのホテルでは夏休み期間（7月上旬〜9月中旬）にオープンします。温水インドアプールはオールシーズン利用可能です。</p>
  </div>
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2"><span class="px-2 py-0.5 bg-sky-500 text-white text-xs font-black rounded-md">Q</span>おむつの取れていない赤ちゃんとプールに入れますか？</h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-sky-200"><span class="font-bold text-sky-600">A.</span> 多くのファミリー対応ホテル（リブマックスリゾート越後湯沢や沖縄リゾートなど）では、水遊び用おむつ着用の上で水着を着れば利用可能です。施設ごとの規約をご確認ください。</p>
  </div>
</div>
""".strip()
    data["review"] = custom_review + data["review"][data["review"].find('<h2 id="ranking"'):] if '<h2 id="ranking"' in data["review"] else custom_review
    return data

update_json("pool-resort-hotel-guide.json", enhance_pool)

# 5. お盆旅行・直前予約特集 (obon-travel-guide.json)
def enhance_obon(data):
    data["title"] = "【2026年最新】お盆 旅行・お盆に泊まれる宿・8月11日直前予約ガイド"
    data["description"] = "2026年のお盆休み（8月11日〜8月中旬）の旅行・宿泊予約特集！今からでも間に合う穴場温泉宿、お盆 旅行 カップル向けロマンチックホテル、ファミリー向け無料駐車場完備宿を速報でお届け。"
    
    custom_review = """
<h2 id="intro" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026年お盆休み】今からでも間に合う！お盆に泊まれる宿・8月11日直前予約＆カップル・家族旅行</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">「お盆直前だけど今からでも予約できる宿を探したい！」「8月11日・祝日の山の日周辺でカップルや家族で泊まれる温泉宿はどこ？」</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">お盆休みの旅行ラッシュでも諦める必要はありません！直前キャンセル枠や穴場エリアの温泉宿、アクセス抜群の無料駐車場付きホテルを厳選しました。</p>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-3xl shadow-sm">
  <h3 class="text-base font-bold text-amber-950 mb-3 flex items-center gap-2">💡 お盆旅行（8月11日〜）に失敗しない3つの攻略法</h3>
  <ul class="space-y-2 text-xs text-stone-800 font-medium">
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span><strong>直前キャンセル枠を狙う：</strong> 宿泊日3日〜7日前はキャンセル料発生直前の狙い目タイミング！</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span><strong>穴場温泉地セレクト：</strong> 都心から少し離れた五頭温泉郷（新潟）や湯の児温泉（熊本）などは穴場！</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span><strong>楽天トラベル「5と0のつく日」クーポン併用：</strong> お盆の宿泊費も最大20%還元・割引でお得に予約！</span></li>
  </ul>
</div>
""".strip()
    data["review"] = custom_review + data["review"][data["review"].find('<h2 id="ranking"'):] if '<h2 id="ranking"' in data["review"] else custom_review
    return data

update_json("obon-travel-guide.json", enhance_obon)

# 6. 楽天トラベルガイド (rakuten-travel-guide.json)
def enhance_rakuten(data):
    data["title"] = "【2026年最新】楽天 トラベル セール＆楽天 クーポン トラベル徹底活用ガイド"
    data["description"] = "「楽天 トラベル セール」「楽天 クーポン トラベル」で旅行代金を劇的にお得にする裏ワザを大公開！5と0のつく日、スーパーSALE、楽パック、最大3枚併用可能な最新クーポンの獲得・使い方はこちら。"
    return data

update_json("rakuten-travel-guide.json", enhance_rakuten)

print("🎉 Finished enhancing all target posts for GSC queries!")
