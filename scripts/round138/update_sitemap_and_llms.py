"""
update_sitemap_and_llms.py
Round 138 で追加した5特集を
- public/sitemap-features.xml
- public/llms-full.txt
- public/llms/{code}.txt
へ確実に同期・更新するスクリプト。
"""

import os
import re

new_features = [
    {
        "slug": "winter-saitama-kumagaya-menuma-shodenzan-fukaya-negi-bushugyu-stay",
        "title": "【国宝・妻沼聖天山新春初詣と冬の極上深谷ねぎ】2026-2027年冬の埼玉・熊谷＆深谷！美肌天然温泉と武州和牛すき焼き名宿5選",
        "desc": "「埼玉の日光東照宮」と称される国宝・妻沼聖天山歓喜院の精緻な彫刻美と新春開運初詣！寒さで糖度15度を超える冬の至宝「深谷ねぎ」のねぎカルビやすき焼き、渋沢栄一の郷愁、天然温泉のぬくもりに癒やされる埼玉北部の厳選名宿5選。",
        "pref_code": "11",
        "pref_name": "埼玉県"
    },
    {
        "slug": "winter-kanagawa-kawasaki-daishi-hatsumode-factory-nightview-haneda-onsen-stay",
        "title": "【初詣300万人の厄除け霊場・川崎大師と幻想の工場夜景】2026-2027年冬の神奈川・川崎＆羽田！黒湯天然温泉と特選牛名宿5選",
        "desc": "全国有数の初詣参拝者を誇る厄除け大本山「川崎大師（平間寺）」新春初詣！冬の澄んだ夜空に浮かび上がる「川崎工場夜景クルーズ」と羽田空港を望む展望天然温泉、名物久寿餅と上質ディナーを満喫する冬の厳選名宿5選。",
        "pref_code": "14",
        "pref_name": "神奈川県"
    },
    {
        "slug": "winter-saga-yoshinogari-hikarinohibiki-ariake-nori-sagagyu-onsen-stay",
        "title": "【古代環濠の灯火・吉野ヶ里光の響と冬の初摘み有明海苔】2026-2027年冬の佐賀・神埼＆佐賀城下！古湯名湯と最高峰佐賀牛名宿5選",
        "desc": "数千個のキャンドルと熱気球が幻想的に夜空を彩る12月の吉野ヶ里歴史公園「光の響」と佐賀城下町！11〜1月に旬を迎える冬の最高峰「有明海初摘み海苔」と口の中でとろける極上「佐賀牛」、ぬる湯名湯・古湯温泉に癒やされる冬の厳選名宿5選。",
        "pref_code": "41",
        "pref_name": "佐賀県"
    },
    {
        "slug": "winter-osaka-sumiyoshi-taisha-hatsumode-sakai-taikobashi-kawachikamo-stay",
        "title": "【国宝本殿と反橋・摂津国一宮 住吉大社新春初詣】2026-2027年冬の大阪・住吉＆堺！千利休の茶の湯と滋味河内鴨鍋名宿5選",
        "desc": "200万人以上が訪れる全国住吉神社の総本社「住吉大社」新春初詣！太鼓橋（反橋）の冬の水鏡と国宝本殿の荘厳美、千利休ゆかりの堺の歴史と冬の極上ブランド肉「河内鴨鍋」・なにわ黒牛に心温まる大阪・堺の厳選名宿5選。",
        "pref_code": "27",
        "pref_name": "大阪府"
    },
    {
        "slug": "winter-mie-futamiura-meotoiwa-hatsuhinode-vison-matsusaka-stay",
        "title": "【伊勢湾の霊峰・二見浦夫婦岩の初日の出と日本最大級VISON】2026-2027年冬の三重・伊勢二見＆多気！薬草温泉と極上松阪牛名宿5選",
        "desc": "冬の澄んだ朝日に輝く二見興玉神社「夫婦岩」の新春初日の出・初詣と冬の満月の神秘！日本最大級の商業リゾート「VISON」の本草湯と美食巡り、本場伊勢の極上「松阪牛」すき焼きや冬の伊勢海老・的矢牡蠣に満たされる三重の厳選名宿5選。",
        "pref_code": "24",
        "pref_name": "三重県"
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
    print("=== Round 138: Updating Sitemap & LLMs ===")
    update_sitemap()
    update_pref_llms()
    update_llms_full()
    print("Done!")
