import json, glob, os, re

post_files = glob.glob('src/data/posts/*.json')
print(f"Checking {len(post_files)} posts for typos and AI cliches...")

# Cliches to replace with direct, human-written traveler tone
replacements = [
    ("魅力をご紹介します", "見どころと宿泊ポイントを詳しく解説します"),
    ("魅力をご紹介", "見どころを解説"),
    ("魅力に迫ります", "特徴と宿泊体験をレポート"),
    ("ご紹介いたします", "解説します"),
    ("ご紹介します", "紹介します"),
    ("いかがでしたでしょうか", ""),
    ("いかがでしたか", ""),
    ("ぜひ訪れてみてはいかがでしょうか", "ぜひ旅の計画にお役立てください"),
    ("ぜひ足を運んでみてはいかがでしょうか", "ぜひ訪れてみてください"),
    ("ぜひ参考にしてみてください", "旅行計画の参考にどうぞ"),
    ("参考になれば幸いです", "旅選びの参考になれば幸いです"),
    ("心身ともにリフレッシュできること間違いなしです", "日常を忘れて心から寛げる癒やしの時間をお過ごしいただけます"),
    ("至福のひとときを過ごしてみてはいかがでしょうか", "贅沢なひとときを心ゆくまでお楽しみください"),
]

# Typo fixes in text & keywords
typo_fixes = [
    ("青森県とえばランキング", "青森県といえば ランキング"),
    ("せとうち そう 廃業", "せとうちそう 坂出 宿泊"),
]

modified_count = 0

for pf in post_files:
    with open(pf, 'r', encoding='utf-8') as f:
        content = f.read()

    orig_content = content
    for old, new in replacements:
        if old in content:
            content = content.replace(old, new)

    for old, new in typo_fixes:
        if old in content:
            content = content.replace(old, new)

    if content != orig_content:
        with open(pf, 'w', encoding='utf-8') as f:
            f.write(content)
        modified_count += 1

print(f"Updated and cleaned {modified_count} posts.")
