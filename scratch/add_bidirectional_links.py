import json, os, glob

POSTS_DIR = os.path.join("src", "data", "posts")

# Mapping of parent articles to new expansion articles to cross-link
link_mappings = {
    # 1. Glamping parent
    "silver-week-glamping-luxury-guide.json": [
        {"title": "【富士山×サウナ付き】プライベートグランピング厳選5選！富士山麓の絶景外気浴と星空BBQ", "url": "/posts/fuji-glamping-sauna-private-view-guide"},
        {"title": "【関西】温泉併設グランピングおすすめ7選！客室露天風呂・天然温泉付きドームテント", "url": "/posts/kansai-glamping-onsen-dome-tent-guide"}
    ],
    # 2. Gero onsen master
    "gero-onsen-ranking-gourmet-hotels-guide.json": [
        {"title": "【下呂温泉】客室露天風呂付きおすすめ宿6選！カップル・記念日に泊まりたい美肌の湯", "url": "/posts/gero-onsen-private-open-air-bath-hotels-guide"},
        {"title": "【下呂温泉】A5等級飛騨牛を堪能できる美食旅館7選！ステーキ・しゃぶしゃぶ・朴葉味噌焼き", "url": "/posts/gero-onsen-hida-beef-gourmet-ryokan-guide"}
    ],
    # 3. Tohoku Shinkansen guide
    "silver-week-tohoku-shinkansen-travel-guide.json": [
        {"title": "【東北新幹線】駅から徒歩・送迎ですぐ行ける名湯宿8選！車なしで巡る東北温泉旅", "url": "/posts/tohoku-shinkansen-station-walk-onsen-hotels-guide"}
    ],
    # 4. Cave Onsen master
    "cave-onsen-dokutsu-furo-japan-ranking-guide.json": [
        {"title": "【南紀勝浦】ホテル浦島「大洞窟風呂 忘帰洞」完全宿泊ルポ！海蝕洞窟の絶景温泉と生マグロ会席", "url": "/posts/nachikatsuura-urashima-bokido-cave-bath-guide"}
    ],
    # 5. Unkai View master
    "unkai-view-hotel-resort-japan-ranking.json": [
        {"title": "【長野・信州】雲海テラスが見える絶景ホテル5選！早朝の雲海パノラマと満天の星空", "url": "/posts/nagano-unkai-terrace-highland-resort-hotels-guide"}
    ],
    # 6. Fruit Picking master
    "silver-week-fruit-picking-grape-travel-guide.json": [
        {"title": "【山梨・勝沼】シャインマスカット狩り×石和温泉！ワイナリー巡りと美肌湯おすすめ宿", "url": "/posts/yamanashi-katsunuma-grape-isawa-onsen-hotels-guide"}
    ],
    # 7. Mud Onsen master
    "mud-onsen-doroyu-pack-japan-guide.json": [
        {"title": "【別府温泉】天然泥湯＆泥パックが体験できる名湯宿！美肌泥パック・鉱泥温泉ガイド", "url": "/posts/beppu-doroyu-mud-pack-onsen-hotels-guide"}
    ],
    # 8. Shimanami master
    "shimanami-kaido-imabari-onsen-hotels-guide.json": [
        {"title": "【しまなみ海道】瀬戸内海を一望する絶景温泉宿！今治・来島海峡大橋の夕景と海鮮会席", "url": "/posts/shimanami-kaido-view-onsen-hotels-imabari-guide"}
    ]
}

updated_parents = 0
for filename, links in link_mappings.items():
    filepath = os.path.join(POSTS_DIR, filename)
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)
        
        review = data.get("review", "")
        links_html = """\n<div class="my-6 p-4 bg-amber-50/60 rounded-xl border border-amber-200">
  <h4 class="font-bold text-xs text-amber-950 mb-2">📌 テーマ別・特化詳細ガイド</h4>
  <ul class="text-xs text-amber-900 space-y-1.5 list-disc list-inside">
"""
        for l in links:
            if l["url"] not in review:
                links_html += f'    <li><a href="{l["url"]}" class="underline hover:text-amber-700 font-medium">{l["title"]}</a></li>\n'
        links_html += "  </ul>\n</div>\n"

        if "テーマ別・特化詳細ガイド" not in review:
            data["review"] = review + links_html
            with open(filepath, "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            updated_parents += 1
            print(f"Updated parent internal links: {filename}")

print(f"Successfully cross-linked {updated_parents} parent articles.")
