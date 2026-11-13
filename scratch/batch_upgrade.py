import json, os, re

cache = json.load(open('all_hotels_cache.json'))

# Template generator for note articles
def generate_article(num, meta):
    fn = f"note-{num}.md"
    title = meta["title"]
    slug = meta["slug"]
    prefecture = meta["prefecture"]
    area = meta["area"]
    tags = meta["tags"]
    lead = meta["lead"]
    tips = meta["tips"]
    hotels = meta["hotels"]
    spots = meta["spots"]
    course = meta["course"]
    faq = meta["faq"]
    site_url = meta["site_url"]
    site_anchor = meta.get("site_anchor", f"【{area}】厳選おすすめ宿＆観光ルート完全ガイド本編はこちら")

    tags_str = json.dumps(tags, ensure_ascii=False)

    lines = [
        "---",
        f'title: "{title}"',
        f'slug: "{slug}"',
        'date: "2026-11-11"',
        f'prefecture: "{prefecture}"',
        f'area: "{area}"',
        f'tags: {tags_str}',
        "---",
        "",
        f"# {title}",
        "",
        lead,
        "",
        "---",
        "",
        f"## 💡 現地調査に基づくプロの指南！{area}観光＆滞在攻略マニュアル",
        ""
    ]
    for tip in tips:
        lines.append(f"- **{tip['title']}:** {tip['desc']}")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append(f"## 🏨 旅の目的に応じて選ぶ！{area}の厳選名宿5選")
    lines.append("")

    for i, h in enumerate(hotels, 1):
        lines.append(f"### {i}. {h['name']}（{h['address']}）")
        lines.append(f"- **特徴:** {h['feature']}")
        lines.append(f"- **宿泊目安:** 1名 {h['price']}")
        lines.append(f"- **楽天トラベル評価:** ⭐ {h['rating']}（{h['review_count']}）")
        lines.append(f"- 👉 [{h['name']}の空室・宿泊プランを見る]({h['affiliate_url']})")
        lines.append("")

    lines.append("---")
    lines.append("")
    lines.append("## 📸 宿の近隣観光地ガイド（現地取材＆公式データ連携）")
    lines.append("")
    for spot in spots:
        lines.append(f"- **{spot['name']}:** {spot['desc']}")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append(f"## 🗺️ {area}を満喫する 1泊2日王道モデルコース")
    lines.append("")
    lines.append(f"- **1日目:** {course['day1']}")
    lines.append(f"- **2日目:** {course['day2']}")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("## ❓ よくある質問（FAQ）")
    lines.append("")
    for q in faq:
        lines.append(f"**Q. {q['q']}**  ")
        lines.append(f"A. {q['a']}")
        lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  ")
    lines.append(f"👉 [{site_anchor}]({site_url})")
    lines.append("")

    content = "\n".join(lines)
    with open(fn, 'w') as f:
        f.write(content)
    print(f"Updated {fn}: {len(content)} chars")

print("Generator script template ready")
