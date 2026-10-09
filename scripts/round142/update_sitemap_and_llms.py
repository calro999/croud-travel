"""
update_sitemap_and_llms.py
Round 142 で追加した5特集を
- public/sitemap-features.xml
- public/llms-full.txt
- public/llms/{code}.txt
へ確実に同期・更新するスクリプト。
"""

import os
import re

new_features = [
    {
        "slug": "winter-kagoshima-chiran-samurai-makurazaki-katsuo-kaimondake-kurobuta-stay",
        "title": "【薩摩の小京都・知覧武家屋敷庭園と開聞岳絶景】2026-2027年冬の鹿児島・南薩摩＆枕崎！本場一本釣り鰹と鹿児島黒豚・黒牛会席名宿5選",
        "desc": "薩摩の小京都・国の名勝「知覧武家屋敷庭園」の冬枯山水美と、薩摩富士・開聞岳を望む雄大な冬パノラマ！本場枕崎の最高級本枯節・一本釣り鰹の藁焼きタタキや、極上の鹿児島黒豚・鹿児島黒牛会席に舌鼓。温暖な南薩摩の心地よい潮風と美肌天然温泉に癒やされる厳選名宿5選。",
        "pref_code": "46",
        "pref_name": "鹿児島県"
    },
    {
        "slug": "winter-saitama-gyoda-oshi-castle-sakidama-kofun-tabigura-onsen-bushugyu-stay",
        "title": "【のぼうの城・行田忍城雪景色と足袋蔵の街重伝建】2026-2027年冬の埼玉・行田＆熊谷！行田天然温泉と武州牛・加須手打ちうどん名宿5選",
        "desc": "映画『のぼうの城』の舞台・浮き城「忍城」御三階櫓の冬晴れ雪景色と、日本遺産「足袋蔵のまち」レトロ散策！古代のロマン漂うさきたま古墳群や源泉かけ流し行田天然温泉。冬の身体を芯から温める加須手打ちうどん・行田ゼリーフライと極上武州牛を堪能する冬の北埼玉厳選名宿5選。",
        "pref_code": "11",
        "pref_name": "埼玉県"
    },
    {
        "slug": "winter-ibaraki-sakuragawa-makabe-townscape-tsukubasan-shrine-hatsumode-hitachigyu-stay",
        "title": "【常陸国の蔵の街・真壁の町並み重伝建と筑波山神社新春初詣】2026-2027年冬の茨城・桜川＆筑波！名物常陸秋そばと常陸牛会席名宿5選",
        "desc": "国の重伝建・登録文化財が100棟以上連なる蔵の街「真壁の町並み」の冬風情と、関東屈指の開運霊峰「筑波山神社」新春初詣！冬に風味際立つ極上「常陸秋そば」や霜降り常陸牛、筑波山温泉郷の絶景雪見露天風呂。澄み切った関東平野の冬空の下、悠久の歴史と美肌温泉に浸る厳選名宿5選。",
        "pref_code": "08",
        "pref_name": "茨城県"
    },
    {
        "slug": "winter-yamanashi-otsuki-saruhashi-bridge-fuji-view-houtou-koshugyu-stay",
        "title": "【日本三奇橋・名勝猿橋の冬峡谷美と霊峰富士パノラマ】2026-2027年冬の山梨・大月＆都留！名物手打ちほうとうと甲州牛会席名宿5選",
        "desc": "歌川広重の浮世絵にも描かれた日本三奇橋・国の名勝「猿橋」の冬峡谷雪景色と、岩殿山から仰ぐ秀麗富嶽十二景・冠雪の富士山大パノラマ！熱々の名物手打ちかぼちゃほうとうや甲州富士桜ポーク、最高峰甲州牛会席。都留の美肌天然温泉「より道の湯」や快適ホテルで寛ぐ冬の東山梨厳選名宿5選。",
        "pref_code": "19",
        "pref_name": "山梨県"
    },
    {
        "slug": "winter-saga-kashima-hizenhamashuku-yutoku-inari-hatsumode-sagagyu-stay",
        "title": "【肥前浜宿の酒蔵通り重伝建と日本三大稲荷・祐徳稲荷神社新春初詣】2026-2027年冬の佐賀・鹿島＆嬉野！冬の新酒仕込みと佐賀牛・有明海苔名宿5選",
        "desc": "国の重伝建・白壁土蔵が連なる「肥前浜宿酒蔵通り」の冬新酒仕込み情緒と、日本三大稲荷「祐徳稲荷神社」新春開運初詣！有明海の初摘み極上海苔や冬の竹崎カニ、最高峰佐賀牛会席。日本三大美肌の湯・嬉野温泉や武雄温泉の名湯に浸かり、芳醇な佐賀の銘酒を味わう至福の冬厳選名宿5選。",
        "pref_code": "41",
        "pref_name": "佐賀県"
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
    print("=== Updating Sitemap & LLMs files for Round 142 ===\n")
    update_sitemap()
    update_pref_llms()
    update_llms_full()
