"""
update_sitemap_and_llms.py
Round 136 で追加した5特集を
- public/sitemap-features.xml
- public/llms-full.txt
- public/llms/{code}.txt
へ確実に同期・更新するスクリプト。
"""

import os
import re

new_features = [
    {
        "slug": "winter-mie-kumano-kodo-onigajo-owase-tai-kumanogyu-stay",
        "title": "【世界遺産熊野古道と鬼ヶ城の絶景】2026-2027年冬の三重・熊野＆尾鷲！尾鷲真鯛と熊野牛名宿5選",
        "desc": "冬こそ歩き頃を迎える世界遺産「熊野古道伊勢路」と奇岩怪石の景勝「鬼ヶ城」！冬に旬を迎える極上「尾鷲真鯛」や幻の銘柄和牛「熊野牛」、名湯・湯ノ口温泉に寛ぎ心洗われる新春の紀伊半島おすすめ名宿5選。",
        "pref_code": "24",
        "pref_name": "三重県"
    },
    {
        "slug": "winter-saitama-chichibu-hyochu-onouchi-ogano-onsen-jibier-stay",
        "title": "【尾ノ内百景氷柱と薬師の湯】2026-2027年冬の埼玉・秩父＆小鹿野！猪鹿ぼたん鍋と武州和牛名宿5選",
        "desc": "冬の秩父路を幻想的に彩る尾ノ内百景氷柱・三十槌の氷柱と秩父三社新春初詣！名峰両神山麓に湧く美肌の「小鹿野温泉薬師の湯」、滋味豊かな秩父ジビエ猪鹿ぼたん鍋と極上武州和牛を堪能する大人の隠れ家名宿5選。",
        "pref_code": "11",
        "pref_name": "埼玉県"
    },
    {
        "slug": "winter-shiga-yogo-lake-wakasagi-kamonabe-shizugatake-stay",
        "title": "【神秘の余呉湖ワカサギと本場天然真鴨鍋】2026-2027年冬の滋賀・湖北！賤ヶ岳雪景色と近江牛名宿5選",
        "desc": "白銀の賤ヶ岳を映す羽衣伝説の余呉湖で冬のワカサギ釣りと雪景色散策！湖北の冬の至宝「天然真鴨鍋」の芳醇な旨味と最高峰「近江牛」すき焼き、信長・浅井三姉妹ゆかりの名湯・須賀谷温泉に温まる贅沢な冬名宿5選。",
        "pref_code": "25",
        "pref_name": "滋賀県"
    },
    {
        "slug": "winter-fukushima-tadami-line-yanaizu-onsen-aizujidori-stay",
        "title": "【白銀のJR只見線と赤べこ発祥圓蔵寺】2026-2027年冬の福島・奥会津＆柳津！開湯1200年名湯と会津地鶏名宿5選",
        "desc": "世界を魅了する第一只見川橋梁の雪景色と赤べこ発祥の霊場「圓蔵寺」新春初詣！只見川の清流を望む柳津温泉・早戸温泉の雪見露天風呂、旨味凝縮の「会津地鶏鍋」と極上馬刺しに舌鼓を打つ奥会津の冬籠もり名宿5選。",
        "pref_code": "07",
        "pref_name": "福島県"
    },
    {
        "slug": "winter-miyazaki-ebino-plateau-shiratori-onsen-miyazakigyu-stay",
        "title": "【霧島連山樹氷と西郷隆盛癒やしの白鳥温泉】2026-2027年冬の宮崎・えびの＆小林！最高峰宮崎牛名宿5選",
        "desc": "標高1,200mの白銀世界が広がるえびの高原の樹氷と白鳥神社新春初詣！西郷どんが愛した名湯「白鳥温泉」の展望露天と天然蒸し風呂、日本一の栄冠に輝く最高峰「宮崎牛」極上すき焼きに心満たされる南国宮崎の冬名宿5選。",
        "pref_code": "45",
        "pref_name": "宮崎県"
    }
]

def update_sitemap():
    sitemap_path = "public/sitemap-features.xml"
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
    <lastmod>2026-10-08</lastmod>
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
## {title}
- URL: {url}
- 概要: {desc}
"""
        if os.path.exists(pref_file):
            with open(pref_file, "r", encoding="utf-8") as f:
                content = f.read()
            if url not in content:
                content = content.strip() + "\n" + entry
                with open(pref_file, "w", encoding="utf-8") as f:
                    f.write(content)
                print(f"✓ Appended to {pref_file}")
            else:
                print(f"- Already exists in {pref_file}")
        else:
            with open(pref_file, "w", encoding="utf-8") as f:
                f.write(f"# {nf['pref_name']}の旅行・宿泊・観光特集\n" + entry)
            print(f"✓ Created {pref_file}")

def update_llms_full():
    llms_path = "public/llms-full.txt"
    with open(llms_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 件数インクリメント
    for nf in new_features:
        pref = nf["pref_name"]
        code = nf["pref_code"]
        pattern = rf'(- \[{pref}（)(\d+)(件\)\]\(https://croud-travel\.pages\.dev/llms/{code}\.txt\))'
        m = re.search(pattern, content)
        if m:
            old_count = int(m.group(2))
            new_count = old_count + 1
            content = content.replace(m.group(0), f"- [{pref}（{new_count}件）](https://croud-travel.pages.dev/llms/{code}.txt)")
            print(f"✓ Updated count for {pref}: {old_count} -> {new_count}")

    # 特集一覧セクションへの追記
    feature_additions = []
    for nf in new_features:
        url = f"https://croud-travel.pages.dev/{nf['slug']}"
        if url not in content:
            feature_additions.append(f"""
### {nf['title']}
- URL: {url}
- 概要: {nf['desc']}
""")

    if feature_additions:
        content = content.strip() + "\n\n## 2026-2027年 冬季追加厳選特集（Round 136）\n" + "".join(feature_additions)
        with open(llms_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"✓ Appended {len(feature_additions)} features to {llms_path}")

def main():
    print("=== Updating Sitemap & LLMs Text for Round 136 ===")
    update_sitemap()
    update_pref_llms()
    update_llms_full()
    print("🎉 All sitemap and LLM files updated successfully!")

if __name__ == "__main__":
    main()
