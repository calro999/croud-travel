import json, os

POSTS_DIR = os.path.join("src", "data", "posts")

link_mappings = {
    # Nyuto
    "akita-famous-things-gourmet-spots-guide.json": [
        {"title": "【秋田・乳頭温泉郷】憧れの秘湯「鶴の湯温泉」と七湯めぐり宿6選！白濁にごり湯ときりたんぽ鍋", "url": "/posts/nyuto-onsen-tsurunoyu-secret-hotspring-guide"}
    ],
    # Ginzan
    "zao-onsen-rotenburo-jingisukan-gourmet-guide.json": [
        {"title": "【山形・銀山温泉】大正ロマンの木造建築＆ガス灯灯る雪景色宿6選！尾花沢牛と立ち並ぶ名旅館", "url": "/posts/ginzan-onsen-taisho-roman-snow-view-guide"}
    ],
    # Arima
    "hyogo-onsen-ranking-hotels-guide.json": [
        {"title": "【兵庫・有馬温泉】日本三古湯！赤褐色の金泉＆無色の銀泉を満喫する極上宿7選！神戸牛会席", "url": "/posts/arima-onsen-gold-silver-bath-kobe-beef-guide"}
    ],
    # Yufuin Yunotsubo
    "yufuin-onsen-hanare-private-bath-guide.json": [
        {"title": "【由布院】湯の坪街道食べ歩き＆金鱗湖散策に便利なおすすめホテル6選！スイーツと朝霧パノラマ", "url": "/posts/yufuin-yunotsubo-street-walking-gourmet-guide"}
    ],
    # Noboribetsu
    "hokkaido-onsen-ranking-hotels-guide.json": [
        {"title": "【北海道・登別温泉】地獄谷の大迫力パノラマ＆9種類の多彩な泉質を誇る名湯宿7選！北海道三大蟹バイキング", "url": "/posts/noboribetsu-onsen-jigokudani-nine-springs-guide"}
    ],
    # Shirahama
    "wakayama-onsen-ranking-hotels-guide.json": [
        {"title": "【和歌山・南紀白浜温泉】白良浜の絶景オーシャンビュー＆幻の高級魚クエ鍋が旨い宿7選！日本三古湯", "url": "/posts/shirahama-onsen-ocean-view-kue-fish-guide"}
    ],
    # Kannawa
    "beppu-doroyu-mud-pack-onsen-hotels-guide.json": [
        {"title": "【別府・鉄輪温泉】名物「地獄蒸し料理」と湯けむり展望露天風呂の宿7選！別府八湯巡り", "url": "/posts/kannawa-onsen-beppu-jigokumushi-view-guide"}
    ],
    # Gero Ogawaya
    "gero-onsen-ranking-gourmet-hotels-guide.json": [
        {"title": "【下呂温泉】名物「100帖の畳風呂」小川屋宿泊ガイド！飛騨川を望む絶景と飛騨牛三昧会席", "url": "/posts/gero-ogawaya-tatami-bath-spa-guide"}
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

print("Wave 8 internal linking completed.")
