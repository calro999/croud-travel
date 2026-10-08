"""
update_sitemap_and_llms.py
Round 140 で追加した5特集を
- public/sitemap-features.xml
- public/llms-full.txt
- public/llms/{code}.txt
へ確実に同期・更新するスクリプト。
"""

import os
import re

new_features = [
    {
        "slug": "winter-kagawa-higashikagawa-hiketa-shirotori-shrine-hamachi-stay",
        "title": "【讃岐の風待ち港町・引田の商家町と白鳥神社新春初詣】2026-2027年冬の香川・東かがわ！安戸池の冬オリーブハマチと瀬戸内温泉名宿5選",
        "desc": "日本初のハマチ養殖発祥・安戸池の冬オリーブハマチと、日本武尊白鳥伝説の白鳥神社新春初詣！風待ち港町・引田のレトロ商家町散策。瀬戸内海の潮騒と美肌温泉で心身を解きほぐす冬の東かがわ・さぬき厳選名宿5選。",
        "pref_code": "37",
        "pref_name": "香川県"
    },
    {
        "slug": "winter-fukui-obama-myotsuji-temple-snow-wakasa-fugu-mackerel-stay",
        "title": "【御食国の冬味覚・明通寺国宝本堂の静寂と若狭ふぐ】2026-2027年冬の福井・若狭小浜！名物若狭とらふぐフルコースと雪見温泉名宿5選",
        "desc": "国宝・明通寺本堂と三重塔が雪化粧をまとう冬の若狭小浜！朝廷に食を献上した御食国の至宝「若狭ふぐ（とらふぐコース）」や名物焼き鯖、若狭牛に舌鼓。若狭湾の絶景と柔らかな湯に心ほどける冬の福井・小浜厳選名宿5選。",
        "pref_code": "18",
        "pref_name": "福井県"
    },
    {
        "slug": "winter-aichi-okazaki-castle-iga-hachimangu-hatsumode-hatcho-miso-mikawagyu-stay",
        "title": "【徳川家康生誕の城下町・岡崎城雪景色と伊賀八幡宮新春初詣】2026-2027年冬の愛知・岡崎！本場八丁味噌鍋と三河牛会席名宿5選",
        "desc": "徳川家康公生誕の地・岡崎城と徳川将軍家祈願所「伊賀八幡宮」新春開運初詣！二社のみが守る伝統の八丁味噌蔵巡りと、冬に温まる濃厚八丁味噌鍋や三河牛すき焼き。三河の奥座敷や快適シティで過ごす冬の厳選名宿5選。",
        "pref_code": "23",
        "pref_name": "愛知県"
    },
    {
        "slug": "winter-gifu-ena-iwamura-castle-snow-enakyo-onsen-goheimochi-hidagyu-stay",
        "title": "【日本三大山城・岩村城跡の霧氷美と女城主の里重伝建】2026-2027年冬の岐阜・恵那！恵那峡温泉の絶景露天と飛騨牛朴葉味噌・五平餅名宿5選",
        "desc": "霧氷と白雪に抱かれる日本三大山城「岩村城跡」と江戸情緒残る城下町重伝建地区！冬の奇岩パノラマ恵那峡温泉の絶景露天風呂。香ばしい郷土の五平餅や極上飛騨牛の朴葉味噌焼きに満たされる冬の東濃・恵那の厳選名宿5選。",
        "pref_code": "21",
        "pref_name": "岐阜県"
    },
    {
        "slug": "winter-shimane-hamada-tatamigaura-asahi-onsen-donchitchi-nodoguro-stay",
        "title": "【冬の日本海白波奇勝・石見畳ヶ浦と幻のどんちっちノドグロ】2026-2027年冬の島根・浜田！美肌名湯旭温泉と石見神楽冬情話名宿5選",
        "desc": "天然記念物「石見畳ヶ浦」の豪快な日本海白波と冬の奇岩絶景！脂の乗り日本一と称される浜田港特選「どんちっちノドグロ」の姿焼き・小鍋と石見神楽の夜。PH高き美肌のぬる湯・旭温泉や有福温泉で温まる冬の石見厳選名宿5選。",
        "pref_code": "32",
        "pref_name": "島根県"
    }
]

def update_sitemap():
    sitemap_path = "public/sitemap-features.xml"
    if not os.path.exists(sitemap_path):
        print(f"Skipping {sitemap_path} (not found)")
        return

    with open(sitemap_path, "r", encoding="utf-8") as f:
        content = f.read()

    url_pattern = re.compile(r'  <url>[\s\S]*?</url>')
    urls = url_pattern.findall(content)

    url_dict = {}
    for u in urls:
        m = re.search(r'<loc>https://croud-travel\.pages\.dev/([^/]+)/?</loc>', u)
        if m:
            url_dict[m.group(1)] = u

    added_count = 0
    for nf in new_features:
        slug = nf["slug"]
        if slug not in url_dict:
            entry = f"""  <url>
    <loc>https://croud-travel.pages.dev/{slug}/</loc>
    <lastmod>2026-10-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>"""
            url_dict[slug] = entry
            added_count += 1

    sorted_slugs = sorted(url_dict.keys())
    sorted_urls = [url_dict[s] for s in sorted_slugs]

    new_content = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + "\n".join(sorted_urls) + "\n</urlset>\n"

    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"✓ Updated {sitemap_path} with {added_count} new URLs (Total: {len(sorted_slugs)})")

def update_pref_llms():
    for nf in new_features:
        code = nf["pref_code"]
        pref_file = f"public/llms/{code}.txt"
        slug = nf["slug"]
        title = nf["title"]
        desc = nf["desc"]
        url = f"https://croud-travel.pages.dev/{slug}"

        entry = f"""
## 特集: {title}
- URL: {url}
- 概要: {desc}
- 推奨シーズン: 11月〜1月（冬期）
- 特徴: 楽天トラベル実データ厳選5宿、Wikipedia公式観光アーカイブ、モデルコース、FAQ完備
"""
        if os.path.exists(pref_file):
            with open(pref_file, "r", encoding="utf-8") as pf:
                txt = pf.read()
            if url not in txt:
                with open(pref_file, "a", encoding="utf-8") as pf:
                    pf.write(entry)
                print(f"✓ Appended new feature to {pref_file}")
            else:
                print(f"- Already in {pref_file}")
        else:
            with open(pref_file, "w", encoding="utf-8") as pf:
                pf.write(f"# {nf['pref_name']} 旅行情報ガイド\n" + entry)
            print(f"✓ Created and wrote {pref_file}")

def update_llms_full():
    llms_full_path = "public/llms-full.txt"
    if not os.path.exists(llms_full_path):
        print(f"Skipping {llms_full_path} (not found)")
        return

    with open(llms_full_path, "r", encoding="utf-8") as f:
        content = f.read()

    entries_to_add = []
    for nf in new_features:
        url = f"https://croud-travel.pages.dev/{nf['slug']}"
        if url not in content:
            entry = f"""
### {nf['title']}
- URL: {url}
- 地域: {nf['pref_name']}
- シーズン: 11月〜1月（冬期）
- 概要: {nf['desc']}
"""
            entries_to_add.append(entry)

    if entries_to_add:
        new_content = content + "\n" + "".join(entries_to_add)
        with open(llms_full_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"✓ Appended {len(entries_to_add)} features to {llms_full_path}")
    else:
        print(f"- Features already in {llms_full_path}")

if __name__ == "__main__":
    print("=== Round 140: Updating Sitemap & LLMs ===")
    update_sitemap()
    update_pref_llms()
    update_llms_full()
