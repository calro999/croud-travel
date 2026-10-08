"""
update_sitemap_and_llms.py
Round 139 で追加した5特集を
- public/sitemap-features.xml
- public/llms-full.txt
- public/llms/{code}.txt
へ確実に同期・更新するスクリプト。
"""

import os
import re

new_features = [
    {
        "slug": "winter-chiba-katori-shrine-hatsumode-sawara-inubosaki-kinmedai-stay",
        "title": "【下総国一宮・香取神宮新春初詣と小江戸佐原の雪情話】2026-2027年冬の千葉・香取＆犬吠埼！本州最速初日の出と極上寒金目鯛名宿5選",
        "desc": "全国約400社ある香取神社の総本社・下総国一之宮「香取神宮」新春初詣！江戸情緒残る水郷・佐原の重伝建の町並みと本州で最も早い初日の出を望む犬吠埼温泉。冬に脂が乗る銚子の至宝「寒つり金目鯛」や極上和牛に心奪われる北総・東総の厳選名宿5選。",
        "pref_code": "12",
        "pref_name": "千葉県"
    },
    {
        "slug": "winter-okayama-tsuyama-castle-mimasaka-santo-onsen-sozurinabe-chiyagyu-stay",
        "title": "【雪見の名泉・美作三湯と津山城下町の冬叙情】2026-2027年冬の岡山・津山＆湯原・奥津！名物そずり鍋と幻の千屋牛会席名宿5選",
        "desc": "西日本を代表する名湯「美作三湯（湯原・奥津・湯郷）」の雪見露天風呂！津山城鶴山公園の雄大な石垣美とレトロ城下町散策。骨周りの旨味が凝縮した冬の郷土鍋「津山そずり鍋」や日本最古の蔓牛「千屋牛」に満たされる冬の岡山・美作の厳選名宿5選。",
        "pref_code": "33",
        "pref_name": "岡山県"
    },
    {
        "slug": "winter-shiga-taga-taisha-hatsumode-omigyu-sukiyaki-itokirimochi-stay",
        "title": "【近江国第一の古社・多賀大社新春初詣と名物糸切餅】2026-2027年冬の滋賀・多賀＆彦根！冬の極上近江牛すき焼きと美肌天然温泉名宿5選",
        "desc": "「お伊勢参らばお多賀へ参れ」と称えられる近江国随一の古社「多賀大社」新春初詣！延命長寿のお多賀杓子と名物糸切餅、国宝彦根城の冬景色。冬の極上霜降り「近江牛すき焼き」や鴨鍋、湖東の豊かな天然温泉で身体の芯から温まる冬の厳選名宿5選。",
        "pref_code": "25",
        "pref_name": "滋賀県"
    },
    {
        "slug": "winter-tokushima-mima-udatsu-kirihataji-hatsumode-awaodori-onsen-stay",
        "title": "【藍商人の白壁美・うだつの町並みと四国霊場切幡寺初詣】2026-2027年冬の徳島・美馬＆吉野川！阿波尾鶏地鶏鍋と清流温泉名宿5選",
        "desc": "江戸〜明治の藍商人たちが築いた重伝建「脇町・うだつの上がる町並み」の凛とした冬景色！四国八十八箇所第十番札所・切幡寺の五重塔新春初詣。徳島が誇る最高峰地鶏「阿波尾鶏」の水炊き・すき焼きと吉野川流域の美肌温泉に癒やされる冬の厳選名宿5選。",
        "pref_code": "36",
        "pref_name": "徳島県"
    },
    {
        "slug": "winter-toyama-amaharashi-tateyama-snow-zuiryuji-hatsumode-kanburi-stay",
        "title": "【富山湾越しの冠雪立山連峰・雨晴海岸と国宝瑞龍寺初詣】2026-2027年冬の富山・高岡＆氷見！寒ぶりの王様「ひみ寒ぶり」会席名宿5選",
        "desc": "冬晴れの富山湾越しに3,000m級の立山連峰が海に浮かぶ奇跡の絶景「雨晴海岸」！前田利長公の菩提寺・国宝「高岡瑞龍寺」新春開運初詣。11月〜1月に極上の脂がのる「ひみ寒ぶり」の刺身・しゃぶしゃぶ・ブリ大根と展望温泉を満喫する富山の厳選名宿5選。",
        "pref_code": "16",
        "pref_name": "富山県"
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
    print("=== Round 139: Updating Sitemap & LLMs ===")
    update_sitemap()
    update_pref_llms()
    update_llms_full()
    print("Done!")
