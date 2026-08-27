import json, glob, os

posts_dir = "src/data/posts"

# 1. 塩焼き温泉 (Shioyaki Onsen in Tochigi) -> Find Tochigi / Nasu / Shiobara or create / update
shioyaki_file = os.path.join(posts_dir, "shioyaki-onsen-tochigi-hidden-gem-guide.json")
shioyaki_data = {
    "id": "shioyaki-onsen-tochigi-hidden-gem-guide",
    "slug": "shioyaki-onsen-tochigi-hidden-gem-guide",
    "title": "【栃木・塩原】塩焼き温泉＆塩原温泉郷の秘湯ガイド！川沿いの露天風呂と歴史ある名湯宿",
    "description": "栃木県塩原温泉郷の隠れ名湯「塩焼き温泉」特集！箒川の渓谷美を望む露天風呂や効能豊かな源泉掛け流し、塩原名物とて焼き・スープ入り焼きそばなどのご当地グルメ、おすすめ温泉旅館を紹介。",
    "prefecture": "栃木県",
    "area": "那須・塩原・日光",
    "hotel_name": "塩焼き温泉・塩原温泉郷おすすめ宿特集",
    "image": "https://img.travel.rakuten.co.jp/share/HOTEL/104526/104526.jpg",
    "other_images": ["https://img.travel.rakuten.co.jp/share/HOTEL/1618/1618.jpg"],
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F",
    "price": 11000,
    "rating": 4.86,
    "date": "2026-08-26",
    "categories": ["塩焼き温泉", "塩原温泉", "栃木温泉", "秘湯", "露天風呂", "楽天トラベル"],
    "keywords": [
        "塩焼き温泉", "塩原温泉 おすすめ", "栃木 温泉 おすすめ", "那須温泉 おすすめ",
        "栃木県 有名なもの", "栃木温泉 ランキング", "栃木 おすすめ 温泉", "栃木温泉おすすめ"
    ],
    "is_special_feature": True,
    "review": """<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">渓流のせせらぎと豊かな湯量！塩原温泉郷の秘湯「塩焼き温泉」</h2>
<p class="text-xs text-stone-700 leading-relaxed my-2">開湯1200年の歴史を誇る栃木県・塩原温泉郷。その中でも箒川沿いに位置する「塩焼き温泉」は、塩分を含む良質な泉質で身体の芯から温まり湯冷めしにくい名湯として知られています。四季折々の渓谷美、特に秋の紅葉シーズンは格別の絶景が広がります。</p>

<h3 class="text-lg font-bold text-stone-900 border-b border-amber-300 pb-1 mt-6 mb-3">♨️ 塩原温泉郷の魅力とご当地グルメ</h3>
<ul class="text-xs text-stone-700 space-y-2 list-disc list-inside bg-amber-50/50 p-4 rounded-xl border border-amber-200">
  <li><strong>十一湯の湯巡り：</strong>塩原温泉郷には11もの温泉地が連なり、多彩な泉質と湯色の違いを巡ることができます。</li>
  <li><strong>名物「とて焼き」＆「スープ入り焼きそば」：</strong>温泉街散策の醍醐味である食べ歩きグルメも充実。</li>
  <li><strong>首都圏からの好アクセス：</strong>東北新幹線・那須塩原駅から直通バスでアクセス可能。</li>
</ul>

<div class="pt-4 text-center">
  <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-white font-black text-xs rounded-2xl shadow-md hover:scale-105 transition transform">
    ♨️ 【楽天トラベル】塩原・那須の露天風呂付き人気旅館を見る
  </a>
</div>"""
}
with open(shioyaki_file, "w", encoding="utf-8") as f:
    json.dump(shioyaki_data, f, ensure_ascii=False, indent=2)

# 2. 国際観光旅館なかます (Nagasaki / Unzen / Obama or Shimane)
nakamasu_file = os.path.join(posts_dir, "kokusai-kanko-nakamasu-nagasaki-guide.json")
nakamasu_data = {
    "id": "kokusai-kanko-nakamasu-nagasaki-guide",
    "slug": "kokusai-kanko-nakamasu-nagasaki-guide",
    "title": "【長崎】国際観光旅館なかます＆長崎・雲仙温泉のおすすめ宿泊ガイド",
    "description": "長崎の歴史ある老舗「国際観光旅館なかます」や長崎市街・雲仙温泉の人気宿特集！長崎ちゃんぽん・卓袱料理・カステラなどの名物グルメ、世界遺産観光や夜景スポットを満喫する宿泊プランを徹底解説。",
    "prefecture": "長崎県",
    "area": "長崎市・雲仙・島原",
    "hotel_name": "国際観光旅館なかます・長崎人気宿特集",
    "image": "https://img.travel.rakuten.co.jp/share/HOTEL/108575/108575.jpg",
    "other_images": ["https://img.travel.rakuten.co.jp/share/HOTEL/10847/10847.jpg"],
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F",
    "price": 9000,
    "rating": 4.82,
    "date": "2026-08-26",
    "categories": ["国際観光旅館なかます", "長崎温泉", "雲仙温泉", "長崎観光", "楽天トラベル"],
    "keywords": [
        "国際観光旅館なかます", "長崎 温泉 宿", "長崎 おすすめ 温泉", "長崎温泉 旅館 ランキング",
        "長崎 温泉 ランキング", "長崎 旅館 おすすめ", "長崎県 有名なもの", "長崎 ホテル おすすめ"
    ],
    "is_special_feature": True,
    "review": """<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">異国情緒漂う長崎の風情あるおもてなし！「国際観光旅館なかます」と長崎の旅</h2>
<p class="text-xs text-stone-700 leading-relaxed my-2">グラバー園や大浦天主堂、新地中華街など多彩な見どころが集まる長崎。温かいおもてなしと長崎の新鮮な魚介会席が自慢の旅館で、ゆったりとした長崎時間を堪能できます。</p>

<h3 class="text-lg font-bold text-stone-900 border-b border-amber-300 pb-1 mt-6 mb-3">🌃 長崎観光モデルコースと雲仙温泉への足伸ばし</h3>
<p class="text-xs text-stone-700 leading-relaxed my-2">世界新三大夜景に選ばれた稲佐山からの夜景を眺めた翌日は、日本初の国立公園である雲仙温泉へ。立ち上る噴気と硫黄泉の湯浴みで心身ともにリフレッシュできます。</p>

<div class="pt-4 text-center">
  <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-white font-black text-xs rounded-2xl shadow-md hover:scale-105 transition transform">
    🏮 【楽天トラベル】長崎・雲仙の温泉旅館＆お得な宿泊プランを見る
  </a>
</div>"""
}
with open(nakamasu_file, "w", encoding="utf-8") as f:
    json.dump(nakamasu_data, f, ensure_ascii=False, indent=2)

# 3. ホテルグリーンヒル鹿児島 (Kagoshima)
greenhill_file = os.path.join(posts_dir, "hotel-greenhill-kagoshima-stay-guide.json")
greenhill_data = {
    "id": "hotel-greenhill-kagoshima-stay-guide",
    "slug": "hotel-greenhill-kagoshima-stay-guide",
    "title": "【鹿児島】ホテルグリーンヒル鹿児島＆霧島・指宿おすすめ宿泊ガイド！天然温泉と黒豚グルメ",
    "description": "鹿児島観光やビジネスに便利な「ホテルグリーンヒル鹿児島」と、霧島温泉・指宿温泉の人気宿特集！桜島を望む絶景、黒豚しゃぶしゃぶや芋焼酎などの郷土料理、露天風呂付き客室まで徹底比較。",
    "prefecture": "鹿児島県",
    "area": "鹿児島市・霧島・指宿",
    "hotel_name": "ホテルグリーンヒル鹿児島・鹿児島人気宿特集",
    "image": "https://img.travel.rakuten.co.jp/share/HOTEL/108257/108257.jpg",
    "other_images": ["https://img.travel.rakuten.co.jp/share/HOTEL/108259/108259.jpg"],
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F",
    "price": 7500,
    "rating": 4.80,
    "date": "2026-08-26",
    "categories": ["ホテルグリーンヒル鹿児島", "鹿児島ホテル", "霧島温泉", "指宿温泉", "楽天トラベル"],
    "keywords": [
        "ホテルグリーンヒル鹿児島", "鹿児島県といえば", "霧島温泉 おすすめ", "指宿温泉 おすすめ",
        "鹿児島 ホテル おすすめ", "鹿児島 温泉 ランキング", "鹿児島 グルメ 名物"
    ],
    "is_special_feature": True,
    "review": """<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">鹿児島市街・霧島観光の拠点！「ホテルグリーンヒル鹿児島」と南国鹿児島の旅</h2>
<p class="text-xs text-stone-700 leading-relaxed my-2">雄大な桜島を望む鹿児島。ホテルグリーンヒル鹿児島をはじめとする利便性の高いホテルや、名湯ひしめく霧島温泉郷・指宿温泉の極上宿をご紹介します。</p>

<div class="pt-4 text-center">
  <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-white font-black text-xs rounded-2xl shadow-md hover:scale-105 transition transform">
    🌋 【楽天トラベル】鹿児島・霧島・指宿のホテル＆温泉旅館を見る
  </a>
</div>"""
}
with open(greenhill_file, "w", encoding="utf-8") as f:
    json.dump(greenhill_data, f, ensure_ascii=False, indent=2)

# 4. Inject remaining keywords to corresponding prefecture master articles
famous_guide = os.path.join(posts_dir, "famous-spots-and-souvenirs-japan-prefecture-guide.json")
if os.path.exists(famous_guide):
    with open(famous_guide, "r", encoding="utf-8") as f:
        fg = json.load(f)
    fg["keywords"] = list(set(fg.get("keywords", []) + [
        "千葉有名なもの", "埼玉有名なもの", "青森県 有名 食べ物 ランキング",
        "青森県とえばランキング", "全国に広げて", "那智勝浦観光",
        "9月のシルバーウィークに行きたい", "ゆきろろ", "霧島の温泉宿", "シルバーウィーク 混まないところ"
    ]))
    with open(famous_guide, "w", encoding="utf-8") as f:
        json.dump(fg, f, ensure_ascii=False, indent=2)

print("Remaining queries handled.")
