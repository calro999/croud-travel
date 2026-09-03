import json, os

POSTS_DIR = os.path.join("src", "data", "posts")

link_mappings = {
    # Sukayu
    "aomori-onsen-ranking-hotels-guide.json": [
        {"title": "【青森・八甲田】酸ヶ湯温泉宿泊ガイド！名物「ヒバ千人風呂」混浴・女性専用時間と湯治文化", "url": "/posts/sukayu-onsen-thousand-people-bath-aomori-guide"}
    ],
    # Atagawa
    "shizuoka-onsen-ranking-hotels-guide.json": [
        {"title": "【東伊豆・熱川温泉】懐かしの自然湯 熱川温泉 一柳閣！7本の自家源泉と金目鯛姿煮プラン", "url": "/posts/atagawa-ichiryukaku-hot-spring-sea-view-guide"}
    ],
    # Aso Uchinomaki
    "kumamoto-famous-things-gourmet-spots-guide.json": [
        {"title": "【熊本・阿蘇】阿蘇内牧温泉おすすめ宿6選！大観峰のカルデラパノラマとあか牛・馬刺し会席", "url": "/posts/aso-uchinomaki-onsen-caldera-view-hotels-guide"}
    ],
    # Kiyosato
    "yamanashi-famous-things-gourmet-spots-guide.json": [
        {"title": "【山梨・八ヶ岳】清里温泉おすすめリゾートホテル5選！標高1,200mの星空露天と高原フレンチ", "url": "/posts/kiyosato-yatsugatake-highland-starry-onsen-guide"}
    ],
    # Hirugami
    "nagano-onsen-ranking-hotels-guide.json": [
        {"title": "【長野・阿智村】昼神温泉おすすめ宿7選！日本一の星空ナイトツアーと極上美肌の湯", "url": "/posts/hirugami-onsen-achi-starry-sky-bihada-guide"},
        {"title": "【長野・千曲】戸倉上山田温泉 梅むら旅館 うぐいす亭！ほのかな硫黄香る美肌湯と信州美味", "url": "/posts/togurakamiyamada-uguisutei-onsen-guide"},
        {"title": "【長野・白馬】白馬五竜ホテル ステラベラ！北アルプス山麓の天然温泉と信州バイキング", "url": "/posts/hakuba-stellabella-alps-resort-guide"}
    ],
    # Yunoko
    "yunoko-onsen-matsubaraso-kumamoto-guide.json": [
        {"title": "【熊本・水俣】湯の児温泉 松原荘宿泊ガイド！不知火海に沈む夕陽と太刀魚・海の幸会席", "url": "/posts/yunoko-matsubaraso-ocean-sunset-guide"}
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

print("Wave 5 internal linking completed.")
