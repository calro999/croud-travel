import json, os

POSTS_DIR = os.path.join("src", "data", "posts")

link_mappings = {
    # Kanazawa / L'Arc
    "larc-link-location-travel-guide.json": [
        {"title": "【金沢21世紀美術館】周辺のおしゃれホテル＆天然温泉宿6選！アート巡り・女子旅宿泊", "url": "/posts/kanazawa-art-museum-girls-trip-hotels-guide"}
    ],
    # Zao
    "zao-ginzan-akyu-matsushima-naruko-tohoku-onsen-guide.json": [
        {"title": "【蔵王温泉】名物大露天風呂＆蔵王牛・ジンギスカンが旨い人気宿7選！強酸性美肌湯ガイド", "url": "/posts/zao-onsen-rotenburo-jingisukan-gourmet-guide"},
        {"title": "【松島温泉】日本三景・松島湾を一望する絶景ホテル7選！松島牡蠣＆仙台牛会席", "url": "/posts/matsushima-onsen-ocean-view-oyster-guide"}
    ],
    # Sumoto / Awaji
    "kansai-glamping-onsen-dome-tent-guide.json": [
        {"title": "【淡路島・洲本温泉】海と空が繋がる絶景インフィニティ温泉宿6選！淡路牛＆天然鯛の美食旅", "url": "/posts/sumoto-onsen-awaji-luxury-ocean-view-guide"}
    ],
    # Kirishima
    "ibusuki-vs-kirishima-kagoshima-onsen-guide.json": [
        {"title": "【霧島温泉】天然泥湯＆源泉かけ流しにごり湯の宿6選！霧島神宮参拝と黒豚料理", "url": "/posts/kirishima-onsen-doroyu-sulfur-springs-guide"}
    ],
    # Hirosaki
    "hirosaki-park-hotel-aomori-stay-guide.json": [
        {"title": "【弘前・津軽】名物りんご風呂＆レトロ洋館巡りおすすめ宿6選！津軽三味線と郷土料理", "url": "/posts/hirosaki-tsugaru-apple-bath-retro-hotels-guide"}
    ],
    # Unazuki
    "unazuki-kurobe-misasa-onsen-chubu-chugoku-guide.json": [
        {"title": "【宇奈月温泉】黒部峡谷トロッコ電車の拠点！日本一の透明度を誇る名湯旅館7選", "url": "/posts/unazuki-kurobe-gorge-trolley-ryokan-guide"}
    ]
}

for filename, links in link_mappings.items():
    filepath = os.path.join(POSTS_DIR, filename)
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)
        review = data.get("review", "")
        
        links_html = """\n<div class="my-6 p-4 bg-amber-50/60 rounded-xl border border-amber-200">
  <h4 class="font-bold text-xs text-amber-950 mb-2">📌 関連する特化旅行ガイド</h4>
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

print("Wave 2 internal linking completed.")
