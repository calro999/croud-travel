import json, os

POSTS_DIR = os.path.join("src", "data", "posts")

link_mappings = {
    # Hanamaki
    "iwate-famous-things-gourmet-spots-guide.json": [
        {"title": "【岩手・花巻温泉郷】名物バラ風呂＆宮沢賢治ゆかりの宿7選！前沢牛・白金豚美食と渓流露天", "url": "/posts/hanamaki-onsen-rose-bath-kenji-guide"}
    ],
    # Okunikko
    "tochigi-onsen-ranking-hotels-guide.json": [
        {"title": "【奥日光湯元温泉】乳白色のにごり湯源泉かけ流し宿6選！中禅寺湖・湯滝ハイキングととちぎ和牛", "url": "/posts/okunikko-yumoto-onsen-sulfur-springs-guide"}
    ],
    # Yugawara
    "kanagawa-onsen-ranking-hotels-guide.json": [
        {"title": "【神奈川・湯河原温泉】文豪が愛した名湯の隠れ宿6選！プライベート貸切露天と相模湾地魚会席", "url": "/posts/yugawara-onsen-bungo-retreat-luxury-guide"}
    ],
    # Himi
    "toyama-onsen-ranking-hotels-guide.json": [
        {"title": "【富山・氷見温泉郷】富山湾越しに立山連峰を望む絶景宿6選！名物「氷見寒ブリ」＆白えび三昧", "url": "/posts/himi-onsen-tateyama-view-buri-guide"}
    ],
    # Kinosaki
    "hyogo-onsen-ranking-hotels-guide.json": [
        {"title": "【兵庫・城崎温泉】七つの外湯めぐり＆浴衣散策おすすめ宿7選！但馬牛＆冬の松葉ガニ会席", "url": "/posts/kinosaki-onsen-seven-baths-yukata-guide"}
    ],
    # Tamatsukuri
    "shimane-famous-things-gourmet-spots-guide.json": [
        {"title": "【島根・玉造温泉】神の湯・日本最古の美肌温泉おすすめ宿7選！出雲大社参拝としまね和牛", "url": "/posts/tamatsukuri-onsen-bihada-magatama-guide"}
    ],
    # Dogo
    "shimanami-kaido-view-onsen-hotels-imabari-guide.json": [
        {"title": "【愛媛・道後温泉】日本最古の湯・道後温泉本館周辺の人気宿7選！坊っちゃんゆかりの湯と鯛めし", "url": "/posts/dogo-onsen-honkan-botchan-ehime-guide"}
    ],
    # Takeo
    "saga-onsen-ranking-hotels-guide.json": [
        {"title": "【佐賀・武雄温泉】辰野金吾設計の楼門が迎える名湯宿6選！とろとろ美肌湯と極上佐賀牛ステーキ", "url": "/posts/takeo-onsen-romon-saga-beef-guide"}
    ]
}

for filename, links in link_mappings.items():
    filepath = os.path.join(POSTS_DIR, filename)
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)
        review = data.get("review", "")
        
        links_html = """\n<div class="my-6 p-4 bg-amber-50/60 rounded-xl border border-amber-200">
  <h4 class="font-bold text-xs text-amber-950 mb-2">📌 関連する特化温泉・宿泊ガイド</h4>
  <ul class="text-xs text-amber-900 space-y-1.5 list-disc list-inside">
"""
        added = False
        for l in links:
            if l["url"] not in review:
                links_html += f'    <li><a href="{l["url"]}" class="underline hover:text-amber-700 font-medium">{l["title"]}</a></li>\n'
                added = True
        links_html += "  </ul>\n</div>\n"
        
        if added:
            data["review"] = review + links_html
            with open(filepath, "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            print(f"Added links to: {filename}")

print("Wave 6 internal linking completed.")
