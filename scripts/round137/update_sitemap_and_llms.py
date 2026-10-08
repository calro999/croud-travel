"""
update_sitemap_and_llms.py
Round 137 で追加した5特集を
- public/sitemap-features.xml
- public/llms-full.txt
- public/llms/{code}.txt
へ確実に同期・更新するスクリプト。
"""

import os
import re

new_features = [
    {
        "slug": "winter-fukuoka-fukutsu-miyajidake-shrine-hatsumode-hikari-genkainada-stay",
        "title": "【光の道夕景と日本一の大注連縄・宮地嶽神社新春初詣】2026-2027年冬の福岡・福津＆玄界灘！天然とらふぐと博多和牛名宿5選",
        "desc": "嵐のCMで話題となった「光の道」と日本一の大注連縄を誇る開運神社「宮地嶽神社」新春初詣！冬の澄み渡る玄界灘の夕景、冬に旬を迎える極上「天然とらふぐ」や活ヤリイカ、博多和牛の贅沢会席に舌鼓を打つ冬の厳選名宿5選。",
        "pref_code": "40",
        "pref_name": "福岡県"
    },
    {
        "slug": "winter-yamagata-tendo-onsen-yamadera-snow-risshakuji-yamagatagyu-stay",
        "title": "【白銀の水墨画世界・山寺立石寺と将棋のまち天童温泉】2026-2027年冬の山形・山寺＆天童！美肌名湯と極上山形牛すき焼き名宿5選",
        "desc": "松尾芭蕉ゆかりの奇岩霊山「宝珠山立石寺（山寺）」が白銀に包まれる一幅の水墨画の絶景と冬の開運千段石段！将棋駒のまち「天童温泉」の美肌の湯、極上霜降り「山形牛」のすき焼き・ステーキと冬の手打ち蕎麦に心温まる東北の名宿5選。",
        "pref_code": "06",
        "pref_name": "山形県"
    },
    {
        "slug": "winter-ibaraki-kashima-jingu-hatsumode-itako-hamaguri-hitachigyu-stay",
        "title": "【関東最古の霊場・鹿島神宮新春初詣と水郷の冬景色】2026-2027年冬の茨城・鹿島＆潮来！鹿島灘はまぐりと極上常陸牛名宿5選",
        "desc": "日本全国の鹿島神社の総本社・東国三社筆頭「鹿島神宮」の新春開運初詣！冬の水郷潮来・霞ヶ浦の静寂と、寒さとともに身が肥える「鹿島灘はまぐり」の網焼き・酒蒸し、茨城最高峰ブランド「常陸牛」を堪能する水郷鹿行の冬名宿5選。",
        "pref_code": "08",
        "pref_name": "茨城県"
    },
    {
        "slug": "winter-niigata-nagaoka-teradomari-kani-yomogihira-onsen-koryu-stay",
        "title": "【日本海魚のアメ横・寺泊冬のカニ市場と商売繁盛高龍神社】2026-2027年冬の新潟・寺泊＆長岡！とろみ美肌湯と越後牛名宿5選",
        "desc": "冬の日本海の至宝・本ズワイガニや寒ブリが活気あふれる寺泊「魚のアメ横」と、全国の起業家が詣でる商売繁盛の奇跡「高龍神社」新春初詣！長岡の奥座敷・蓬平温泉の極上とろみ美肌湯と、越後牛・地酒に心満たされる新潟の冬名宿5選。",
        "pref_code": "15",
        "pref_name": "新潟県"
    },
    {
        "slug": "winter-nara-shigisan-chogosonshiji-hatsumode-onsen-yamatogyu-stay",
        "title": "【聖徳太子開創の霊峰・信貴山朝護孫子寺と世界一の福寅】2026-2027年冬の奈良・生駒＆信貴山！信貴山温泉と大和牛・ぼたん鍋名宿5選",
        "desc": "巨大な張子の寅が迎える毘沙門天総本山「信貴山朝護孫子寺」の新春開運初詣！登録有形文化財「開運橋」の冬景色と信貴山温泉のぬくもり、滋味あふれる猪鹿ぼたん鍋と奈良が誇る最高峰「大和牛」すき焼きに満たされる大和路の隠れ家名宿5選。",
        "pref_code": "29",
        "pref_name": "奈良県"
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
                c = f.read()
            if url not in c:
                with open(pref_file, "a", encoding="utf-8") as f:
                    f.write(entry)
                print(f"✓ Appended {slug} to {pref_file}")
            else:
                print(f"  Already in {pref_file}: {slug}")
        else:
            os.makedirs("public/llms", exist_ok=True)
            with open(pref_file, "w", encoding="utf-8") as f:
                f.write(f"# {nf['pref_name']} 旅行・宿泊特集ガイド\n" + entry)
            print(f"✓ Created {pref_file} with {slug}")

def update_llms_full():
    llms_full = "public/llms-full.txt"
    if not os.path.exists(llms_full):
        return

    with open(llms_full, "r", encoding="utf-8") as f:
        content = f.read()

    appended = 0
    new_entries = []
    for nf in new_features:
        url = f"https://croud-travel.pages.dev/{nf['slug']}"
        if url not in content:
            entry = f"""
### {nf['title']}
- URL: {url}
- エリア: {nf['pref_name']}
- 概要: {nf['desc']}
"""
            new_entries.append(entry)
            appended += 1

    if new_entries:
        with open(llms_full, "a", encoding="utf-8") as f:
            f.write("\n" + "".join(new_entries))
        print(f"✓ Appended {appended} new features to {llms_full}")

def main():
    print("=== Updating Sitemap & LLMs.txt for Round 137 ===")
    update_sitemap()
    update_pref_llms()
    update_llms_full()
    print("Done!")

if __name__ == "__main__":
    main()
