#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import re
from datetime import datetime

NEW_FEATURES = [
    {
        "slug": "winter-shizuoka-izu-shuzenji-luxury-asaba-sora-onsen-stay",
        "title": "竹林の小径の静寂と数寄屋露天離れ！静岡・柳生の庄＆宙SORA・天城軍鶏・伊豆伊勢海老名宿5選",
        "short_title": "修善寺柳生の庄＆天城軍鶏伊勢海老宿",
        "desc": "弘法大師開湯の歴史を紡ぐ伊豆最古の湯！竹林に佇む本格料亭旅館『柳生の庄』や『宙 SORA』、国の登録文化財『新井旅館』…",
        "badge": "高級・11〜1月特集"
    },
    {
        "slug": "winter-hokkaido-niseko-luxury-resort-parkhyatt-setsuniseko-yotei-stay",
        "title": "世界屈指のパウダースノーと羊蹄山ビュー雪見スイート！北海道・雪ニセコ＆パークハイアット・極上食材名宿5選",
        "short_title": "ニセコ雪ニセコ＆パークハイアット宿",
        "desc": "世界中が憧れる奇跡の粉雪JAPOW！羊蹄山を望む最高峰リゾート『雪ニセコ』『パーク ハイアット ニセコ』、白老牛やタラバガニ…",
        "badge": "高級・12〜1月特集"
    },
    {
        "slug": "winter-hyogo-kinosaki-luxury-nishimuraya-mikiya-tsuiyamagani-stay",
        "title": "雪の柳並木と最高峰青タグ津居山ガニ解禁！兵庫・創業160年西村屋本館＆三木屋・活松葉ガニ名宿5選",
        "short_title": "城崎温泉西村屋本館＆津居山ガニ宿",
        "desc": "日帰り水揚げの最高峰・青タグ津居山ガニ！創業160年の名門『西村屋本館』や志賀直哉ゆかりの『三木屋』、雪の柳並木と外湯めぐり…",
        "badge": "高級・11〜1月特集"
    },
    {
        "slug": "winter-tottori-misasa-kaike-luxury-matsubagani-ryokan-ohashi-yugetsu-stay",
        "title": "奇跡の自噴ラジウム温泉と日本海インフィニティ露天！鳥取・旅館大橋＆皆生游月・鳥取松葉ガニ名宿5選",
        "short_title": "三朝旅館大橋＆皆生游月松葉ガニ宿",
        "desc": "世界屈指の高濃度ラドンを含む三朝温泉と皆生温泉！国登録有形文化財『旅館 大橋』自噴巌窟の湯や『皆生 游月』、鳥取松葉ガニ五輝星…",
        "badge": "高級・11〜1月特集"
    },
    {
        "slug": "winter-fukushima-aizu-ashinomaki-higashiyama-luxury-ookawaso-mukaitaki-snow-stay",
        "title": "幻想の浮き舞台雪景色と文化財雪見ろうそく！福島・大川荘＆登録有形文化財向瀧・雪見露天と会津馬刺し名宿5選",
        "short_title": "会津大川荘浮き舞台＆向瀧雪見ろうそく宿",
        "desc": "奥会津の白銀世界と大川渓谷の絶景！三味線浮き舞台の『大川荘』や中庭に雪見ろうそくが灯る『向瀧』、雪見露天風呂と極上会津馬刺し…",
        "badge": "高級・12〜1月特集"
    }
]

TODAY = "2026-10-12"

def update_feature_trends():
    trends_path = "src/data/featureTrendsData.ts"
    with open(trends_path, "r", encoding="utf-8") as f:
        content = f.read()

    new_items_code = ""
    for feat in NEW_FEATURES:
        new_items_code += f"""  {{
    slug: '{feat["slug"]}',
    title: "{feat["title"]}",
    desc: "{feat["desc"]}",
    badge: '{feat["badge"]}'
  }},
"""
    updated = content.replace("export const FEATURE_TREND_TOPICS: TrendTopicItem[] = [", "export const FEATURE_TREND_TOPICS: TrendTopicItem[] = [\n" + new_items_code.rstrip())
    with open(trends_path, "w", encoding="utf-8") as f:
        f.write(updated)
    print("✓ Updated src/data/featureTrendsData.ts")

def update_accordion():
    accordion_path = "src/app/components/AllFeaturesAccordion.tsx"
    with open(accordion_path, "r", encoding="utf-8") as f:
        content = f.read()

    m = re.search(r'冬・新春初詣・雪見露天・旬のカニ特集 \((\d+)選\)', content)
    if m:
        current_count = int(m.group(1))
        new_count = current_count + len(NEW_FEATURES)
        content = content.replace(f"冬・新春初詣・雪見露天・旬のカニ特集 ({current_count}選)", f"冬・新春初詣・雪見露天・旬のカニ特集 ({new_count}選)")

    marker = '<span>冬・新春初詣・雪見露天・旬のカニ特集 ('
    idx = content.find(marker)
    if idx != -1:
        div_idx = content.find('<div className="flex flex-wrap gap-1.5 pt-1">', idx)
        if div_idx != -1:
            div_end = div_idx + len('<div className="flex flex-wrap gap-1.5 pt-1">\n')
            links_code = ""
            for feat in NEW_FEATURES:
                links_code += f"""              <Link
                href="/{feat['slug']}"
                className="px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-white hover:bg-teal-700 hover:text-white rounded-lg border border-slate-200/80 shadow-2xs transition truncate max-w-[200px]"
                title="{feat['title']}"
              >
                {feat['short_title']}
              </Link>
"""
            content = content[:div_end] + links_code + content[div_end:]
    
    with open(accordion_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("✓ Updated src/app/components/AllFeaturesAccordion.tsx")

def update_sitemap():
    sitemap_path = "public/sitemap-features.xml"
    with open(sitemap_path, "r", encoding="utf-8") as f:
        content = f.read()

    for feat in NEW_FEATURES:
        url_block = f"""  <url>
    <loc>https://croud-travel.pages.dev/{feat['slug']}/</loc>
    <lastmod>{TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
"""
        pattern = r'(  <url>\s+<loc>https://croud-travel\.pages\.dev/([^/]+)/</loc>)'
        matches = list(re.finditer(pattern, content))
        inserted = False
        for m in matches:
            slug_in_xml = m.group(2)
            if slug_in_xml > feat['slug']:
                pos = m.start()
                content = content[:pos] + url_block + content[pos:]
                inserted = True
                break
        if not inserted:
            pos = content.rfind("</urlset>")
            content = content[:pos] + url_block + content[pos:]

    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("✓ Updated public/sitemap-features.xml")

def update_llms_full():
    llms_path = "public/llms-full.txt"
    with open(llms_path, "r", encoding="utf-8") as f:
        content = f.read()

    m = re.search(r'## 特集記事（(\d+)件）', content)
    if m:
        curr = int(m.group(1))
        content = content.replace(f"## 特集記事（{curr}件）", f"## 特集記事（{curr + len(NEW_FEATURES)}件）")

    lines = content.splitlines()
    for feat in NEW_FEATURES:
        url_line = f"- https://croud-travel.pages.dev/{feat['slug']}/"
        inserted = False
        for i, line in enumerate(lines):
            if line.startswith("- https://croud-travel.pages.dev/"):
                item_slug = line.replace("- https://croud-travel.pages.dev/", "").rstrip("/")
                if item_slug > feat['slug']:
                    lines.insert(i, url_line)
                    inserted = True
                    break
        if not inserted:
            lines.append(url_line)
    
    with open(llms_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    print("✓ Updated public/llms-full.txt")

def update_feed():
    feed_path = "public/feed.xml"
    with open(feed_path, "r", encoding="utf-8") as f:
        content = f.read()

    items = ""
    for feat in NEW_FEATURES:
        pubdate = datetime.utcnow().strftime("%a, %d %b %Y %H:%M:%S GMT")
        items += f"""<item><title>{feat['title']}</title><link>https://croud-travel.pages.dev/{feat['slug']}/</link><guid>https://croud-travel.pages.dev/{feat['slug']}/</guid><pubDate>{pubdate}</pubDate><description>{feat['desc']}</description></item>
"""
    idx = content.find("<item>")
    if idx != -1:
        content = content[:idx] + items + content[idx:]
    else:
        idx = content.find("</channel>")
        content = content[:idx] + items + content[idx:]

    with open(feed_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("✓ Updated public/feed.xml")

def main():
    print("Updating site metadata for Round 148...")
    update_feature_trends()
    update_accordion()
    update_sitemap()
    update_llms_full()
    update_feed()
    print("All site metadata successfully updated!")

if __name__ == "__main__":
    main()
