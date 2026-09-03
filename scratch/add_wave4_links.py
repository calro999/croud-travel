import json, os

POSTS_DIR = os.path.join("src", "data", "posts")

link_mappings = {
    # Centia Hotel Naito
    "centia-hotel-naito-kofu-stay-guide.json": [
        {"title": "【甲府】センティアホテル内藤宿泊レビュー！甲府駅周辺のおすすめホテル＆甲州ワイン美食", "url": "/posts/centia-hotel-naito-kofu-stay-review-guide"}
    ],
    # Yu Kiroro
    "yu-kiroro-hokkaido-luxury-stay-guide.json": [
        {"title": "【北海道・キロロ】YU KIRORO宿泊ガイド！全室キッチン付き高級コンドミニアムと天然温泉", "url": "/posts/yu-kiroro-luxury-condo-hokkaido-stay-guide"}
    ],
    # Kamogawakan
    "chiba-onsen-ranking-hotels-guide.json": [
        {"title": "【千葉・房総】鴨川館宿泊ガイド！屋上温泉ぷーろHARUKA＆房総伊勢海老・鮑会席", "url": "/posts/kamogawakan-boso-ocean-view-spa-guide"}
    ],
    # Arai Ryokan
    "shizuoka-onsen-ranking-hotels-guide.json": [
        {"title": "【伊豆・修善寺】国の登録有形文化財「新井旅館」宿泊ガイド！名建築・天平大浴堂と竹林の小径", "url": "/posts/arai-ryokan-shuzenji-cultural-heritage-guide"}
    ],
    # Otaru Furukawa
    "otaru-furukawa-canal-guide.json": [
        {"title": "【小樽】運河の宿 おたる ふる川宿泊ガイド！小樽運河を一望する展望温泉とノスタルジー会席", "url": "/posts/otaru-furukawa-canal-view-retro-guide"}
    ],
    # Ligare Kasugano
    "nara-famous-things-gourmet-spots-guide.json": [
        {"title": "【奈良】ホテル リガーレ春日野宿泊ガイド！奈良公園・東大寺徒歩圏内の静寂ホテルと大和牛会席", "url": "/posts/ligare-kasugano-nara-park-todaiji-guide"}
    ],
    # Setouchiso
    "setouchiso-sanuki-guide.json": [
        {"title": "【香川・坂出】湯元さぬき瀬戸大橋温泉 せとうちそう！瀬戸大橋ライトアップと本場讃岐うどん巡り", "url": "/posts/setouchiso-sakaide-seto-bridge-udon-guide"}
    ]
}

for filename, links in link_mappings.items():
    filepath = os.path.join(POSTS_DIR, filename)
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)
        review = data.get("review", "")
        
        links_html = """\n<div class="my-6 p-4 bg-amber-50/60 rounded-xl border border-amber-200">
  <h4 class="font-bold text-xs text-amber-950 mb-2">📌 関連する特化宿泊ガイド</h4>
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

print("Wave 4 internal linking completed.")
