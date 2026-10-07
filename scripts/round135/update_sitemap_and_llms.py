"""
update_sitemap_and_llms.py
Round 135 で追加した5特集を
- public/sitemap-features.xml
- public/llms-full.txt
- public/llms/{code}.txt
へ確実に同期・更新するスクリプト。
"""

import os
import re

new_features = [
    {
        "slug": "winter-ehime-kumakogen-shikoku-karst-snow-starry-hoshifuru-stay",
        "title": "【標高1400mの白銀カルストと満天の星空】2026-2027年冬の愛媛・久万高原！高原温泉と冬絶景宿5選",
        "desc": "四国とは思えない白銀の別世界が広がる「四国カルスト天狗高原」と澄み切った満天の星空！四国霊場第44番大寶寺の新春初詣、滋味豊かな愛媛ブランド牛・きじ鍋と心温まる高原の名湯に寛ぐ大自然の冬名宿5選。",
        "pref_code": "38",
        "pref_name": "愛媛県"
    },
    {
        "slug": "winter-kochi-niyodogawa-niyodoblue-nakatsu-tosa-akagyu-onsen-stay",
        "title": "【冬に透明度極まる仁淀ブルーと中津渓谷】2026-2027年冬の高知・仁淀川！渓流温泉と土佐あかうし名宿5選",
        "desc": "年間で最も透明度が高まり神秘のコバルトブルーに輝く奇跡の清流「仁淀川」の冬絶景！中津渓谷トレッキング、旨味凝縮の「幻の和牛・土佐あかうし」鍋と清流のせせらぎを聞く名湯露天風呂に癒やされる冬名宿5選。",
        "pref_code": "39",
        "pref_name": "高知県"
    },
    {
        "slug": "winter-osaka-inunakiyama-onsen-kongosan-juhyo-inunakipork-stay",
        "title": "【静寂の渓谷露天と金剛山樹氷】2026-2027年冬の大阪・犬鳴山温泉！犬鳴ポークと名湯宿5選",
        "desc": "都心から約50分で辿り着く大阪随一の秘境「犬鳴山温泉」と金剛山の幻想的な冬の樹氷！修験道の歴史薫る渓流露天風呂、ブランド豚「犬鳴ポーク」のしゃぶしゃぶや冬のぼたん鍋を堪能する大人の冬籠もり名宿5選。",
        "pref_code": "27",
        "pref_name": "大阪府"
    },
    {
        "slug": "winter-saga-imari-arita-ookawachiyama-imarigyu-pottery-stay",
        "title": "【秘窯の里大川内山と最高峰伊万里牛】2026-2027年冬の佐賀・伊万里＆有田！名窯巡りと美食名宿5選",
        "desc": "静寂に包まれる鍋島藩窯の里「大川内山」の冬景色と有田・陶山神社の新春初詣！日本屈指の黒毛和牛「伊万里牛」の極上すき焼き・ステーキ、源泉掛け流し温泉で心身を解きほぐす至福の冬旅おすすめ名宿5選。",
        "pref_code": "41",
        "pref_name": "佐賀県"
    },
    {
        "slug": "winter-tokushima-mima-udatsu-historic-awao-dori-onsen-stay",
        "title": "【藍商のうだつの町並みと阿波尾鶏鍋】2026-2027年冬の徳島・美馬！吉野川展望温泉と老舗名宿5選",
        "desc": "重伝建の白壁と装飾瓦が白銀に映える「脇町うだつの町並み」の冬風情！徳島が誇る極上地鶏「阿波尾鶏」の水炊きや冬の美馬そば、吉野川の清流を見下ろす天然温泉でぬくもる心安らぐ冬の歴史旅名宿5選。",
        "pref_code": "36",
        "pref_name": "徳島県"
    }
]

def update_sitemap():
    sitemap_path = "public/sitemap-features.xml"
    with open(sitemap_path, "r", encoding="utf-8") as f:
        content = f.read()

    # <url>...</url> のブロックを抽出
    url_pattern = re.compile(r'  <url>[\s\S]*?</url>')
    urls = url_pattern.findall(content)

    url_dict = {}
    for u in urls:
        m = re.search(r'<loc>(https://croud-travel\.pages\.dev/([^/]+)/?)</loc>', u)
        if m:
            url_dict[m.group(2)] = u

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

def update_llms_full():
    llms_path = "public/llms-full.txt"
    with open(llms_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 各県の件数更新
    for nf in new_features:
        pref = nf["pref_name"]
        code = nf["pref_code"]
        # 例: - [徳島県（30件）](https://croud-travel.pages.dev/llms/36.txt)
        pattern = rf'(- \[{pref}（)(\d+)(件\)\]\(https://croud-travel\.pages\.dev/llms/{code}\.txt\))'
        m = re.search(pattern, content)
        if m:
            old_cnt = int(m.group(2))
            new_cnt = old_cnt + 1
            content = content[:m.start()] + f"- [{pref}（{new_cnt}件）](https://croud-travel.pages.dev/llms/{code}.txt)" + content[m.end():]
            print(f"  Updated {pref} count: {old_cnt} -> {new_cnt}")

    # 特集記事件数の更新
    m_feat = re.search(r'## 特集記事（(\d+)件）', content)
    if m_feat:
        old_total = int(m_feat.group(1))
        new_total = old_total + len(new_features)
        content = content.replace(f"## 特集記事（{old_total}件）", f"## 特集記事（{new_total}件）")
        print(f"  Updated total features count: {old_total} -> {new_total}")

    # URLリストの抽出と追加
    feature_sec_split = content.split("## 特集記事")
    header_part = feature_sec_split[0]
    body_part = "## 特集記事" + feature_sec_split[1]

    # 行ごとに分割
    lines = body_part.splitlines()
    url_lines = [l for l in lines if l.startswith("- https://croud-travel.pages.dev/")]
    other_lines = [l for l in lines if not l.startswith("- https://croud-travel.pages.dev/")]

    for nf in new_features:
        u_line = f"- https://croud-travel.pages.dev/{nf['slug']}/"
        if u_line not in url_lines:
            url_lines.append(u_line)

    url_lines.sort()

    # 再構成
    new_body = "\n".join(other_lines[:1]) + "\n" + "\n".join(url_lines) + "\n"
    new_llms_content = header_part + new_body

    with open(llms_path, "w", encoding="utf-8") as f:
        f.write(new_llms_content)
    print(f"✓ Updated {llms_path}")

def update_pref_llms():
    for nf in new_features:
        code = nf["pref_code"]
        path = f"public/llms/{code}.txt"
        if not os.path.exists(path):
            print(f"⚠️ Warning: {path} does not exist, skipping")
            continue

        with open(path, "r", encoding="utf-8") as f:
            p_content = f.read()

        new_entry = f"\n### {nf['title']}\n- URL: https://croud-travel.pages.dev/{nf['slug']}/\n- 概要: {nf['desc']}\n"
        if nf['slug'] not in p_content:
            p_content += new_entry
            with open(path, "w", encoding="utf-8") as f:
                f.write(p_content)
            print(f"✓ Added entry to {path}")

if __name__ == "__main__":
    update_sitemap()
    update_llms_full()
    update_pref_llms()
