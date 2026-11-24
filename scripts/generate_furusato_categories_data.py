import os
import json
import re

app_dir = 'src/app'

def extract_meta(slug, label=""):
    p_path = os.path.join(app_dir, slug, 'page.tsx')
    title = slug
    desc = ''
    try:
        with open(p_path, 'r', encoding='utf-8') as f:
            c = f.read()
        m_title = re.search(r'title:\s*["\']([^"\']+)["\']', c)
        if m_title:
            raw = m_title.group(1).split('【')[0].split('！')[0].strip()
            if not raw:
                raw = m_title.group(1)[:32]
            title = raw
        m_desc = re.search(r'description:\s*["\']([^"\']+)["\']', c)
        if m_desc:
            desc = m_desc.group(1)[:75] + "..."
    except Exception:
        pass
    return {"slug": slug, "label": label, "title": title[:36], "desc": desc}

# 1. 温泉地別（実在する主要記事）
onsen_slugs = [
    ("furusato-tax-kusatsu-onsen-yubatake-heritage-stay", "群馬・草津温泉"),
    ("furusato-tax-hakone-gora-onsen-art-luxury-stay", "神奈川・箱根温泉"),
    ("furusato-tax-beppu-kannawa-onsen-jigokumushi-stay", "大分・別府温泉"),
    ("furusato-tax-yufuin-onsen-hanare-private-stay", "大分・由布院温泉"),
    ("furusato-tax-noboribetsu-onsen-jigokudani-resort-stay", "北海道・登別温泉"),
    ("furusato-tax-gero-onsen-bihada-hida-beef-stay", "岐阜・下呂温泉"),
    ("furusato-tax-dogo-onsen-historic-bath-stay", "愛媛・道後温泉"),
    ("furusato-tax-kurokawa-onsen-nyuto-tegata-stay", "熊本・黒川温泉"),
    ("furusato-tax-kinosaki-onsen-sotoyu-crab-stay", "兵庫・城崎温泉"),
    ("furusato-tax-arima-onsen-gold-silver-kobe-beef-stay", "兵庫・有馬温泉"),
    ("furusato-tax-atami-ocean-view-fireworks-hotel-stay", "静岡・熱海温泉"),
    ("furusato-tax-ito-onsen-seafood-historic-stay", "静岡・伊東温泉")
]

# 2. 目的別：高級宿・離れ・客室露天
luxury_slugs = [
    ("furusato-tax-karuizawa-luxury-resort-villa-stay", "長野・軽井沢高級ヴィラ"),
    ("furusato-tax-anniversary-luxury-suite-villa-stay", "極上アニバーサリースイート"),
    ("furusato-tax-private-villa-hanare-hideaway-stay", "隠れ家離れ・プライベートヴィラ"),
    ("furusato-tax-all-inclusive-luxury-onsen-stay", "オールインクルーシブ名湯宿"),
    ("furusato-tax-tangible-cultural-property-architectural-ryokan-stay", "登録有形文化財・名建築旅館"),
    ("furusato-tax-resort-infinity-pool-luxury-hotel-stay", "インフィニティ温泉＆ラグジュアリー"),
    ("furusato-tax-shirahama-ocean-resort-luxury-stay", "南紀白浜オーシャンリゾート")
]

# 3. 目的別：ファミリー・子連れ・テーマパーク
family_slugs = [
    ("furusato-tax-themepark-aquarium-family-hotel-stay", "水族館＆テーマパーク満喫ステイ"),
    ("furusato-tax-aquarium-family-ocean-resort-stay", "海辺の大型ファミリーリゾート"),
    ("furusato-tax-whitewater-rafting-canyoning-adventure-stay", "大自然アクティビティ＆温泉"),
    ("furusato-tax-three-great-cable-cars-ropeway-stay", "絶景ロープウェイ＆高原ホテル")
]

# 4. 目的別：極上グルメ・ブランド和牛・カニ・美酒
gourmet_slugs = [
    ("furusato-tax-tamba-sasayama-autumn-gourmet-stay", "丹波篠山・ぼたん鍋＆松茸会席"),
    ("furusato-tax-winery-vineyard-auberge-stay", "極上ワイナリー＆オーベルジュ"),
    ("furusato-tax-three-great-wagashi-tea-culture-stay", "茶の湯と伝統銘菓を味わう名宿"),
    ("furusato-tax-three-great-citrus-kingdoms-resort-stay", "旬の柑橘＆瀬戸内海鮮ステイ"),
    ("furusato-tax-all-inclusive-free-drinks-alcohol-stay", "銘酒フリーフロー付き美食の宿")
]

# 5. 季節別：雪見温泉・冬の絶景・紅葉
seasonal_slugs = [
    ("furusato-tax-yamagata-zao-onsen-okama-stay", "山形蔵王・樹氷雪見露天風呂"),
    ("furusato-tax-akiu-rairaikyo-autumn-leaves-stay", "宮城秋保・渓谷美と名湯"),
    ("furusato-tax-akan-onsen-marimo-heritage-stay", "北海道阿寒湖・氷上絶景リゾート"),
    ("furusato-tax-kamikochi-japan-alps-resort-stay", "北アルプス・上高地マウンテンリゾート"),
    ("furusato-tax-fujikawaguchiko-autumn-leaves-festival-stay", "富士河口湖・富士山絶景ホテル"),
    ("furusato-tax-hakkoda-sukayu-autumn-leaves-stay", "青森八甲田・酸ヶ湯名湯ステイ")
]

catalog = {
    "onsen": [extract_meta(s, lbl) for s, lbl in onsen_slugs if os.path.exists(os.path.join(app_dir, s))],
    "luxury": [extract_meta(s, lbl) for s, lbl in luxury_slugs if os.path.exists(os.path.join(app_dir, s))],
    "family": [extract_meta(s, lbl) for s, lbl in family_slugs if os.path.exists(os.path.join(app_dir, s))],
    "gourmet": [extract_meta(s, lbl) for s, lbl in gourmet_slugs if os.path.exists(os.path.join(app_dir, s))],
    "seasonal": [extract_meta(s, lbl) for s, lbl in seasonal_slugs if os.path.exists(os.path.join(app_dir, s))]
}

out_path = 'src/data/furusato_categories_catalog.json'
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(catalog, f, ensure_ascii=False, indent=2)

print(f"Catalog saved to {out_path}:")
for k, v in catalog.items():
    print(f"  {k}: {len(v)} articles")
