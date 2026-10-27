#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import re
from datetime import datetime

NEW_FEATURES = [
    {
        "slug": "winter-mie-ago-bay-luxury-basara-shimanokaze-matsusaka-stay",
        "title": "英虞湾の夕景リアスと全室離れ露天風呂！三重・汀渚ばさら邸＆志摩観光ホテル・天然伊勢海老・松阪牛名宿5選",
        "short_title": "志摩賢島ばさら邸＆伊勢海老松阪牛宿",
        "desc": "伊勢志摩国立公園の英虞湾を望む至高のリゾート！『汀渚 ばさら邸』客室露天風呂と天然伊勢海老・A5等級松阪牛…",
        "badge": "高級・11・12月特集"
    },
    {
        "slug": "winter-yamanashi-kawaguchiko-luxury-fufu-konansou-fuji-stay",
        "title": "冠雪富士を望む全室富士山ビュー温泉露天！山梨・ふふ河口湖＆うぶや・極上甲州牛名宿5選",
        "short_title": "富士河口湖ふふ＆富士山ビュー露天宿",
        "desc": "初冬の澄み渡る空気と雪化粧の富士山絶景！木々の温もりに抱かれるスモールラグジュアリー『ふふ 河口湖』…",
        "badge": "高級・11・12月特集"
    },
    {
        "slug": "winter-kumamoto-kurokawa-luxury-takefue-hoshinoya-akaushi-stay",
        "title": "阿蘇外輪山と湯あかり幻想美に抱かれる奥座敷！熊本・深山山荘＆山あいの宿山みず木・極上阿蘇あか牛名宿5選",
        "short_title": "黒川温泉深山山荘＆阿蘇あか牛離れ宿",
        "desc": "冬の夜を彩る竹灯籠『湯あかり』と渓流露天風呂！黒川温泉の離れ宿『深山山荘』、自家源泉掛け流しと阿蘇あか牛ステーキ…",
        "badge": "高級・11・12月特集"
    },
    {
        "slug": "winter-kyoto-tango-taizagani-luxury-sumihei-amadori-matsuba-stay",
        "title": "幻の間人ガニ解禁と日本海オーシャンビュー客室露天！京都丹後・間人温泉炭平＆夕日ヶ浦・活松葉ガニ名宿5選",
        "short_title": "丹後間人ガニ炭平＆日本海絶景露天宿",
        "desc": "11月解禁の緑タグ『幻の間人ガニ』！全室オーシャンビュー客室露天風呂の老舗旅館『間人温泉 炭平』…",
        "badge": "高級・11・12月特集"
    },
    {
        "slug": "winter-kagoshima-kirishima-myoken-luxury-gajin-ishiharaso-kurobuta-stay",
        "title": "天降川の渓流野天風呂と源泉自噴炭酸泉！鹿児島・妙見石原荘＆忘れの里雅叙苑・極上黒毛和牛名宿5選",
        "short_title": "霧島妙見石原荘＆渓流野天炭酸泉宿",
        "desc": "霧島連山の麓、天降川渓流沿いに自噴する名湯！日本屈指の温泉宿『妙見石原荘』、源泉掛け流し野天風呂と鹿児島黒牛…",
        "badge": "高級・11・12月特集"
    }
]

TODAY = "2026-10-12"

def update_feature_trends():
    trends_path = "src/data/featureTrendsData.ts"
    with open(trends_path, "r", encoding="utf-8") as f:
        content = f.read()

    # FEATURE_TREND_TOPICS: TrendTopicItem[] = [ の直後に挿入
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

    # 冬特集の件数をカウントアップし、Linksを追加
    # <span>冬・新春初詣・雪見露天・旬のカニ特集 (XXX選)</span>
    m = re.search(r'冬・新春初詣・雪見露天・旬のカニ特集 \((\d+)選\)', content)
    if m:
        current_count = int(m.group(1))
        new_count = current_count + len(NEW_FEATURES)
        content = content.replace(f"冬・新春初詣・雪見露天・旬のカニ特集 ({current_count}選)", f"冬・新春初詣・雪見露天・旬のカニ特集 ({new_count}選)")

    # <div className="flex flex-wrap gap-1.5 pt-1"> 直下に挿入
    marker = '<span>冬・新春初詣・雪見露天・旬のカニ特集 ('
    idx = content.find(marker)
    if idx != -1:
        div_idx = content.find('<div className="flex flex-wrap gap-1.5 pt-1">', idx)
        if div_idx != -1:
            div_end = div_idx + len('<div className="flex flex-wrap gap-1.5 pt-1">\n')
            links_code = ""
            for feat in NEW_FEATURES:
                links_code += f"""              <Link
                href="/{feat[/"slug']}"
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

    # 各URLブロックを挿入（ソート位置を探すか、適切に挿入）
    for feat in NEW_FEATURES:
        url_block = f"""  <url>
    <loc>https://croud-travel.pages.dev/{feat['slug']}/</loc>
    <lastmod>{TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
"""
        # ソート順に合う場所を探す
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
            # 末尾の </urlset> 直前に挿入
            pos = content.rfind("</urlset>")
            content = content[:pos] + url_block + content[pos:]

    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("✓ Updated public/sitemap-features.xml")

def update_llms_full():
    llms_path = "public/llms-full.txt"
    with open(llms_path, "r", encoding="utf-8") as f:
        content = f.read()

    # ## 特集記事（XXXX件）の数字を更新
    m = re.search(r'## 特集記事（(\d+)件）', content)
    if m:
        curr = int(m.group(1))
        content = content.replace(f"## 特集記事（{curr}件）", f"## 特集記事（{curr + len(NEW_FEATURES)}件）")

    # URLをソート順に挿入
    lines = content.splitlines()
    for feat in NEW_FEATURES:
        url_line = f"- https://croud-travel.pages.dev/{feat['slug']}/"
        # 挿入位置を検索
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

    # <channel> 直下に新規 item を追加
    items = ""
    for feat in NEW_FEATURES:
        pubdate = datetime.utcnow().strftime("%a, %d %b %Y %H:%M:%S GMT")
        items += f"""<item><title>{feat['title']}</title><link>https://croud-travel.pages.dev/{feat['slug']}/</link><guid>https://croud-travel.pages.dev/{feat['slug']}/</guid><pubDate>{pubdate}</pubDate><description>{feat['desc']}</description></item>
"""
    # 最初の <item> の直前に挿入
    idx = content.find("<item>")
    if idx != -1:
        content = content[:idx] + items + content[idx:]
    else:
        # </channel> の直前
        idx = content.find("</channel>")
        content = content[:idx] + items + content[idx:]

    with open(feed_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("✓ Updated public/feed.xml")

def main():
    print("Updating site metadata for Round 147...")
    update_feature_trends()
    update_accordion()
    update_sitemap()
    update_llms_full()
    update_feed()
    print("All site metadata successfully updated!")

if __name__ == "__main__":
    main()
