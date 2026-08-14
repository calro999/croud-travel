import os
import json

POSTS_DIR = "src/data/posts"

def update_post(filename, updater):
    filepath = os.path.join(POSTS_DIR, filename)
    if not os.path.exists(filepath):
        print(f"⚠️ ファイル未検出: {filename}")
        return
    with open(filepath, "r", encoding="utf-8") as f:
        data = json.load(f)
    data = updater(data)
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"✅ 更新完了: {filename}")

# 1. 出湯温泉 大石屋旅館 (107863.json)
def enhance_107863(d):
    d["title"] = "【2026最新】出湯温泉 大石屋旅館の口コミ・天然ラジウム温泉と心温まるおもてなし"
    d["description"] = "新潟県阿賀野市・出湯温泉（いでゆおんせん）の極上秘湯宿「大石屋旅館」の口コミ・名物会席料理・開湯1200年の天然ラジウム温泉、無料駐車場、アクセスを徹底解説。弘法大師ゆかりの歴史ある癒やしの湯。"
    d["review"] = """
<h2 id="oishiya-intro" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【新潟県】出湯温泉 大石屋旅館の魅力と歴史</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">新潟県阿賀野市・五頭温泉郷に位置する「出湯温泉 大石屋旅館」は、弘法大師（空海）によって開かれたと伝わる日本最古級のラジウム温泉を誇るノスタルジックな秘湯旅館です。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">静寂に包まれた情緒ある和風建築と、自家菜園の新鮮野菜や新潟ブランド米、旬の山海の幸をふんだんに盛り込んだ手作りの会席料理が口コミで極めて高い評価を得ています。</p>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-3xl shadow-sm">
  <h3 class="text-base font-bold text-amber-950 mb-3 flex items-center gap-2">💡 出湯温泉 大石屋旅館をおすすめする3つの理由</h3>
  <ul class="space-y-2 text-xs text-stone-800 font-medium">
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>全国でも希少！細胞を活性化させる開湯1200年の天然ラジウム温泉（単純放射能泉）</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>女将とスタッフの温かいおもてなし＆地元新潟の美味食材をふんだんに使った手作り和食会席</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>無料駐車場完備＆安田ICから車で約15分！五頭連峰の自然に抱かれた静かなロケーション</span></li>
  </ul>
</div>

<div class="my-6 p-6 rounded-3xl bg-white border border-stone-200 shadow-md space-y-4">
  <div class="flex items-center justify-between border-b border-stone-100 pb-3">
    <h3 class="text-lg font-bold text-stone-900">出湯温泉 大石屋旅館</h3>
    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-full">⭐ 4.67 / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-6">
    <div class="w-full md:w-5/12">
      <img src="https://img.travel.rakuten.co.jp/share/HOTEL/107863/107863.jpg" alt="出湯温泉 大石屋旅館" class="w-full h-48 object-cover rounded-2xl shadow-sm border border-stone-100" loading="lazy" />
    </div>
    <div class="w-full md:w-7/12 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p><strong>【所在地】</strong> 新潟県阿賀野市出湯801-1</p>
      <p><strong>【アクセス】</strong> 磐越自動車道「安田IC」より車で約15分 / JR水原駅より車で約15分</p>
      <p><strong>【温泉】</strong> 天然ラジウム温泉（単純放射能泉・源泉掛け流し）</p>
      <p><strong>【駐車場】</strong> 無料駐車場完備（約10台）</p>
    </div>
  </div>
  <div class="pt-4 text-center">
    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F107863%2F107863.html" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-lg">
      ✈️ 出湯温泉 大石屋旅館 のお得な最新プランを見る
    </a>
  </div>
</div>
""".strip()
    return d

update_post("107863.json", enhance_107863)

# 2. 城のホテル甲府 (992.json)
def enhance_992(d):
    d["title"] = "【2026最新】城のホテル甲府の口コミ・最上階天然温泉露天風呂と甲府城跡ビュー"
    d["description"] = "山梨県甲府駅徒歩1分の「城のホテル甲府」の口コミ評判・最上階天然温泉露天風呂（甲府城跡・富士山眺望）、地産地消の朝食ブッフェ、山梨県産ワイン＆日本酒コーナー、提携駐車場アクセスを徹底解説。"
    d["review"] = """
<h2 id="shiro-intro" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【山梨県】城のホテル甲府の絶景温泉と洗練されたプレミアム空間</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">「城のホテル甲府」は、JR甲府駅南口から徒歩わずか1分、歴史ある甲府城跡（舞鶴城公園）に隣接する最高のロケーションを誇る上質なシティ＆温泉ホテルです。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">最上階13階に用意された天然温泉大浴場および露天風呂からは、甲府城跡の緑や甲府盆地、晴れた日には神々しい富士山を一望できます。</p>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-3xl shadow-sm">
  <h3 class="text-base font-bold text-amber-950 mb-3 flex items-center gap-2">💡 城のホテル甲府がビジネス・観光に大人気の理由</h3>
  <ul class="space-y-2 text-xs text-stone-800 font-medium">
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>甲府駅徒歩1分＆甲府城跡を見下ろす最上階13階の天然温泉大浴場・露天風呂・サウナ</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>山梨の美味がズラリ！名物ほうとうや鳥モツ煮、甲州ワイン＆地酒を楽しめる朝食ブッフェ</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>全室シモンズ製高級ベッド＆最新セキュリティ完備の快適で上質な客室空間</span></li>
  </ul>
</div>

<div class="my-6 p-6 rounded-3xl bg-white border border-stone-200 shadow-md space-y-4">
  <div class="flex items-center justify-between border-b border-stone-100 pb-3">
    <h3 class="text-lg font-bold text-stone-900">城のホテル甲府</h3>
    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-full">⭐ 4.54 / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-6">
    <div class="w-full md:w-5/12">
      <img src="https://img.travel.rakuten.co.jp/share/HOTEL/992/992.jpg" alt="城のホテル甲府" class="w-full h-48 object-cover rounded-2xl shadow-sm border border-stone-100" loading="lazy" />
    </div>
    <div class="w-full md:w-7/12 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p><strong>【所在地】</strong> 山梨県甲府市丸の内1-1-8</p>
      <p><strong>【アクセス】</strong> JR甲府駅南口より徒歩約1分 / 中央自動車道「甲府昭和IC」より車で約15分</p>
      <p><strong>【温泉・風呂】</strong> 最上階天然温泉大浴場・露天風呂・サウナ完備</p>
      <p><strong>【駐車場】</strong> 敷地内タワー駐車場・提携パーキングあり</p>
    </div>
  </div>
  <div class="pt-4 text-center">
    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F992%2F992.html" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-lg">
      ✈️ 城のホテル甲府 の限定プラン・空室状況を検索
    </a>
  </div>
</div>
""".strip()
    return d

update_post("992.json", enhance_992)

# 3. 湯元さぬき瀬戸大橋温泉 せとうちそう (8175.json)
def enhance_8175(d):
    d["title"] = "【2026最新】湯元さぬき瀬戸大橋温泉 せとうちそうの口コミ・天然温泉と瀬戸内海鮮"
    d["description"] = "香川県坂出市・瀬戸大橋の絶景を望む「湯元さぬき瀬戸大橋温泉 せとうちそう」の口コミ・広々とした天然温泉大浴場、瀬戸内海の旬の鮮魚会席、無料駐車場アクセスを詳しく紹介。"
    d["review"] = """
<h2 id="setouchi-intro" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【香川県】湯元さぬき瀬戸大橋温泉 せとうちそうの魅力</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">「湯元さぬき瀬戸大橋温泉 せとうちそう」は、壮大な瀬戸大橋の麓に位置し、瀬戸内海の穏やかな景色と自家源泉の天然温泉を愉しめる人気の温泉リゾート宿です。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">四国・讃岐観光の拠点として抜群のアクセスを誇り、本場の讃岐うどんめぐりや直島・小豆島など瀬戸内の島巡りドライブの宿として大変重宝されています。</p>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-3xl shadow-sm">
  <h3 class="text-base font-bold text-amber-950 mb-3 flex items-center gap-2">💡 せとうちそうのおすすめポイント3選</h3>
  <ul class="space-y-2 text-xs text-stone-800 font-medium">
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>広々大浴場と泡風呂・サウナを備えた自家源泉の温まる天然温泉</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>瀬戸内海で獲れたての鯛・オリーブ牛・季節の味覚を散りばめた贅沢会席</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>大型無料駐車場完備！坂出北IC/坂出ICからのドライブアクセス至便</span></li>
  </ul>
</div>

<div class="my-6 p-6 rounded-3xl bg-white border border-stone-200 shadow-md space-y-4">
  <div class="flex items-center justify-between border-b border-stone-100 pb-3">
    <h3 class="text-lg font-bold text-stone-900">湯元さぬき瀬戸大橋温泉 せとうちそう</h3>
    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-full">⭐ 4.20 / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-6">
    <div class="w-full md:w-5/12">
      <img src="https://img.travel.rakuten.co.jp/share/HOTEL/8175/8175.jpg" alt="せとうちそう" class="w-full h-48 object-cover rounded-2xl shadow-sm border border-stone-100" loading="lazy" />
    </div>
    <div class="w-full md:w-7/12 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p><strong>【所在地】</strong> 香川県坂出市一番丁1-2</p>
      <p><strong>【アクセス】</strong> JR坂出駅より車で約5分（徒歩約15分） / 瀬戸中央自動車道 坂出北ICより車で約5分</p>
      <p><strong>【温泉】</strong> 自家源泉 天然温泉大浴場・サウナ</p>
      <p><strong>【駐車場】</strong> 無料駐車場完備（約60台）</p>
    </div>
  </div>
  <div class="pt-4 text-center">
    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8175%2F8175.html" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-lg">
      ✈️ 湯元さぬき瀬戸大橋温泉 せとうちそう の最新空室状況を見る
    </a>
  </div>
</div>
""".strip()
    return d

update_post("8175.json", enhance_8175)

# 4. シェラトン沖縄サンマリーナリゾート (sheraton_okinawa.json)
def enhance_sheraton_okinawa(d):
    d["title"] = "【2026年最新】シェラトン沖縄サンマリーナリゾートの口コミ・メガジップとプール・オールインクルーシブ滞在"
    d["description"] = "沖縄県恩納村の最高峰ビーチリゾート「シェラトン沖縄サンマリーナリゾート（シェラトン沖縄）」の口コミ体験談！海越えメガジップ、屋外・屋内プール、オーシャンビュー客室、キッズエリア、レストランを徹底レビュー。"
    d["review"] = """
<h2 id="sheraton-intro" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【沖縄県恩納村】シェラトン沖縄サンマリーナリゾートの極上ビーチ＆アクティビティ</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">「シェラトン沖縄サンマリーナリゾート」は、環境省の最高ランク評価を獲得したエメラルドグリーンに輝く極上ビーチの目の前に位置する大人気ファミリー＆ラグジュアリーリゾートです。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">海の上を滑空する日本初のアトラクション「メガジップ」をはじめ、ウォータースライダー付プール、マリンアクティビティ、大浴場＆サウナなど、子供から大人まで満足できるアクティビティが目白押しです。</p>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-3xl shadow-sm">
  <h3 class="text-base font-bold text-amber-950 mb-3 flex items-center gap-2">💡 シェラトン沖縄サンマリーナリゾートが絶賛される理由</h3>
  <ul class="space-y-2 text-xs text-stone-800 font-medium">
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>全長250mの海越え体験！「PANZA Okinawa メガジップ」で最高の絶景とスリル</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>全室バルコニー付オーシャンビュー！部屋から東シナ海のサンセットを一望</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>屋内ガーデンプール・大浴場・サウナ・豊富なキッズプログラムで雨の日も大満足</span></li>
  </ul>
</div>

<div class="my-6 p-6 rounded-3xl bg-white border border-stone-200 shadow-md space-y-4">
  <div class="flex items-center justify-between border-b border-stone-100 pb-3">
    <h3 class="text-lg font-bold text-stone-900">シェラトン沖縄サンマリーナリゾート</h3>
    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-full">⭐ 4.58 / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-6">
    <div class="w-full md:w-5/12">
      <img src="https://img.travel.rakuten.co.jp/share/HOTEL/1609/1609.jpg" alt="シェラトン沖縄サンマリーナリゾート" class="w-full h-48 object-cover rounded-2xl shadow-sm border border-stone-100" loading="lazy" />
    </div>
    <div class="w-full md:w-7/12 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p><strong>【所在地】</strong> 沖縄県国頭郡恩納村字冨着66-1</p>
      <p><strong>【アクセス】</strong> 那覇空港より沖縄自動車道利用で車で約50分（リムジンバス直行あり）</p>
      <p><strong>【プール・スパ】</strong> 屋外ガーデンプール・屋内プール・大浴場「CHURA SPA」・サウナ</p>
      <p><strong>【駐車場】</strong> 敷地内駐車場完備</p>
    </div>
  </div>
  <div class="pt-4 text-center">
    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1609%2F1609.html" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-lg">
      ✈️ シェラトン沖縄サンマリーナリゾート のプラン一覧・限定空室を見る
    </a>
  </div>
</div>
""".strip()
    return d

update_post("sheraton_okinawa.json", enhance_sheraton_okinawa)

print("✨ 第二弾の記事肉付けが完了しました！")
