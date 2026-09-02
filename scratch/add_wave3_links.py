import json, os

POSTS_DIR = os.path.join("src", "data", "posts")

link_mappings = {
    # Akiu & Naruko
    "zao-ginzan-akyu-matsushima-naruko-tohoku-onsen-guide.json": [
        {"title": "【秋保温泉】仙台奥座敷のおすすめ温泉旅館7選！豪華バイキング＆室内プール付きリゾート", "url": "/posts/akyu-onsen-sendai-family-buffet-hotels-guide"},
        {"title": "【鳴子温泉郷】日本屈指の多彩な泉質を巡る名湯宿7選！鳴子峡の紅葉と伝統こけしの街", "url": "/posts/naruko-onsen-kyuto-yumeguri-retro-ryokan-guide"}
    ],
    # Kochi Sansuien
    "kochi-sansuien-riverside-hotel-guide.json": [
        {"title": "【高知】天然温泉 三翠園宿泊ガイド！高知城下・旧藩主山内家ゆかりの名門宿と皿鉢料理", "url": "/posts/kochi-sansuien-castle-history-tataki-guide"}
    ],
    # Jozankei & Shikotsuko
    "hokkaido-onsen-ranking-hotels-guide.json": [
        {"title": "【定山渓温泉】札幌から1時間！渓谷美露天風呂＆本格サウナが自慢の人気宿7選", "url": "/posts/jozankei-onsen-sapporo-gorge-sauna-guide"},
        {"title": "【支笏湖温泉】日本屈指の透明度を誇る湖畔リゾート！美肌とろとろ湯とレイクビュー宿5選", "url": "/posts/shikotsuko-onsen-lake-view-bihada-guide"}
    ],
    # Misasa
    "unazuki-kurobe-misasa-onsen-chubu-chugoku-guide.json": [
        {"title": "【三朝温泉】世界有数の高濃度ラジウム泉！免疫力高まる湯治の宿＆冬の松葉ガニ会席7選", "url": "/posts/misasa-onsen-radium-healing-crab-guide"}
    ],
    # Kurokawa & Yufuin
    "oita-onsen-ranking-hotels-guide.json": [
        {"title": "【黒川温泉】入湯手形で巡る露天風呂＆あか牛料理が旨い人気宿7選！阿蘇の秘湯ガイド", "url": "/posts/kurokawa-onsen-nyuto-tegata-akagyu-guide"},
        {"title": "【由布院温泉】完全プライベート離れ＆客室露天風呂の極上宿6選！金鱗湖散策と豊後牛会席", "url": "/posts/yufuin-onsen-hanare-private-bath-guide"}
    ]
}

for filename, links in link_mappings.items():
    filepath = os.path.join(POSTS_DIR, filename)
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)
        review = data.get("review", "")
        
        links_html = """\n<div class="my-6 p-4 bg-amber-50/60 rounded-xl border border-amber-200">
  <h4 class="font-bold text-xs text-amber-950 mb-2">📌 おすすめ特化温泉ガイド</h4>
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

print("Wave 3 internal linking completed.")
