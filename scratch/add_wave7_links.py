import json, os

POSTS_DIR = os.path.join("src", "data", "posts")

link_mappings = {
    # Manza & Ikaho
    "gunma-onsen-ranking-hotels-guide.json": [
        {"title": "【群馬・万座温泉】日本一の高濃度硫黄泉！標高1,800mの雲上絶景露天風呂おすすめ宿6選", "url": "/posts/manza-onsen-highest-sulfur-springs-guide"},
        {"title": "【群馬・伊香保温泉】365段の石段街散策＆黄金の湯・白銀の湯おすすめ宿7選！名物水沢うどん", "url": "/posts/ikaho-onsen-stone-steps-golden-bath-guide"}
    ],
    # Kaike
    "tottori-onsen-ranking-hotels-guide.json": [
        {"title": "【鳥取・皆生温泉】日本海の白砂青松を一望する海辺の名湯宿7選！松葉ガニ＆大山地鶏会席", "url": "/posts/kaike-onsen-ocean-front-crab-daisen-guide"}
    ],
    # Ibusuki
    "ibusuki-vs-kirishima-kagoshima-onsen-guide.json": [
        {"title": "【鹿児島・指宿温泉】名物「天然砂むし温泉」と絶景露天風呂の宿7選！薩摩富士・開聞岳と黒豚会席", "url": "/posts/ibusuki-onsen-sand-bath-kaimondake-guide"}
    ],
    # Kinugawa
    "tochigi-onsen-ranking-hotels-guide.json": [
        {"title": "【栃木・鬼怒川温泉】渓谷美を望む絶景露天風呂＆豪華バイキング人気宿7選！あさやホテルと名湯", "url": "/posts/kinugawa-onsen-gorge-view-buffet-guide"}
    ],
    # Shirahone
    "nagano-onsen-ranking-hotels-guide.json": [
        {"title": "【長野・白骨温泉】乳白色の秘湯源泉かけ流し宿5選！「3日入れば3年風邪をひかない」名湯と信州牛", "url": "/posts/shirahone-onsen-milky-secret-bath-guide"}
    ],
    # Ureshino
    "saga-onsen-ranking-hotels-guide.json": [
        {"title": "【佐賀・嬉野温泉】日本三大美肌の湯！とろける「名物温泉湯どうふ」と嬉野茶・佐賀牛会席宿7選", "url": "/posts/ureshino-onsen-bihada-yudofu-tea-guide"}
    ],
    # Tsukahara
    "yufuin-onsen-hanare-private-bath-guide.json": [
        {"title": "【由布院・塚原温泉】日本三大薬湯・伽藍岳火口の秘湯宿！驚異の強酸性美肌湯と豊後牛", "url": "/posts/tsukahara-onsen-yufuin-yakuto-guide"}
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

print("Wave 7 internal linking completed.")
