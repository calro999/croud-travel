"""
update_sitemap_and_llms.py
Round 141 で追加した5特集を
- public/sitemap-features.xml
- public/llms-full.txt
- public/llms/{code}.txt
へ確実に同期・更新するスクリプト。
"""

import os
import re

new_features = [
    {
        "slug": "winter-okinawa-nanjo-sefa-utaki-chinen-misaki-hatsuhinode-ryukyu-onsen-stay",
        "title": "【琉球最高の聖地・斎場御嶽新春祈願と知念岬初日の出】2026-2027年冬の沖縄・南城！美ら海絶景と琉球温泉・あぐー豚名宿5選",
        "desc": "琉球王国最高の聖地・世界遺産「斎場御嶽」の新春開運祈願と、神の島・久高島を仰ぐ知念岬の感動初日の出！冬でも平均気温18℃前後の心地よい南城市。太平洋を望む絶景天然温泉やあぐー豚しゃぶしゃぶ・近海魚料理に癒やされる冬の南沖縄厳選リゾート名宿5選。",
        "pref_code": "47",
        "pref_name": "沖縄県"
    },
    {
        "slug": "winter-miyazaki-nichinan-obi-castle-udo-jingu-hatsumode-miyazakigyu-stay",
        "title": "【日州の小京都・飫肥城下町重伝建と鵜戸神宮新春初詣】2026-2027年冬の宮崎・日南！名物一本釣りカツオと宮崎牛会席名宿5選",
        "desc": "飫肥杉薫る九州の小京都「飫肥城下町」の武家屋敷冬情緒と、日南海岸の断崖洞窟「鵜戸神宮」新春開運運玉初詣！冬でも温暖な南国宮崎で味わう脂の乗った日南一本釣りカツオ・最高峰宮崎牛・近海伊勢海老。日南海岸を望む絶景天然温泉と上質なおもてなしを誇る厳選名宿5選。",
        "pref_code": "45",
        "pref_name": "宮崎県"
    },
    {
        "slug": "winter-kochi-aki-noradokei-muroto-daruma-sunrise-kinmedai-akagyu-stay",
        "title": "【土佐の小京都・安芸武家屋敷と室戸岬冬のだるま朝日】2026-2027年冬の高知・安芸＆室戸！脂の乗った室戸キンメダイと土佐あかうし名宿5選",
        "desc": "歴史薫る土佐の安芸「野良時計」と土居廓中武家屋敷、そして冬の室戸岬で出逢う奇跡の絶景「だるま朝日」！太平洋の雄大な黒潮が育む冬の極上「室戸キンメダイ煮付け」や幻の赤身肉「土佐あかうし」。黒潮の潮騒と太平洋一望露天風呂に癒やされる冬の東高知厳選名宿5選。",
        "pref_code": "39",
        "pref_name": "高知県"
    },
    {
        "slug": "winter-ehime-niihama-besshi-copper-mine-ishizuchi-shrine-hatsumode-iyogyu-stay",
        "title": "【東洋のマチュピチュ・別子銅山の冬霧氷と石鎚神社新春初詣】2026-2027年冬の愛媛・新居浜＆西条！名水うちぬきの里と伊予牛会席名宿5選",
        "desc": "標高750mに聳える産業遺産・別子銅山「東平」の雪化粧と、霊峰石鎚山を仰ぐ石鎚神社新春開運初詣！日本名水百選・西条「うちぬき」が育む地酒と瀬戸内海の旬魚介、極上の霜降り伊予牛に舌鼓。道後温泉に次ぐ名湯・本谷温泉や快適ホテルで寛ぐ冬の東予・新居浜＆西条厳選名宿5選。",
        "pref_code": "38",
        "pref_name": "愛媛県"
    },
    {
        "slug": "winter-nara-sakurai-oomiwa-shrine-hatsumode-miwa-somen-yamatogyu-stay",
        "title": "【日本最古の神域・三輪明神大神神社新春初詣と山の辺の道】2026-2027年冬の奈良・桜井！本場三輪にゅうめんと大和牛すき焼き名宿5選",
        "desc": "日本最古の神社と称される大和国一之宮「大神神社（三輪明神）」新春開運初詣！三輪山をご神体とする神秘の森と冬の静けさに包まれる日本最古の道「山の辺の道」。伝統の手延べ「三輪にゅうめん」と極上霜降り大和牛に心温まる、古代史のロマンあふれる冬の奈良・桜井厳選名宿5選。",
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
    print("=== Updating Sitemap & LLMs files for Round 141 ===\n")
    update_sitemap()
    update_pref_llms()
    update_llms_full()
    print("\n✓ All sitemaps and LLM guides updated successfully!")
