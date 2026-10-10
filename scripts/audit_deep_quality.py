import glob
import json
import os
import re

print("=== STARTING DEEP QUALITY AUDIT ===")

# 1. AI臭い陳腐な定型句のチェック
AI_CLICHES = [
    "いかがでしたでしょうか",
    "いかがでしたか？",
    "ぜひ訪れてみてはいかがでしょうか",
    "足を運んでみてはいかがでしょうか",
    "魅力が伝わりましたでしょうか",
    "参考になれば幸いです",
    "〜と言えるでしょう",
    "と言えるでしょう",
    "のではないでしょうか。"
]

ts_files = glob.glob("src/app/**/page.tsx", recursive=True)
note_files = glob.glob("note-*.md")

print(f"Auditing {len(ts_files)} Next.js pages and {len(note_files)} note files...")

# AI定型句スキャン
ai_in_site = {}
for f in ts_files:
    try:
        c = open(f, encoding="utf-8", errors="ignore").read()
        found = [cl for cl in AI_CLICHES if cl in c]
        if found:
            ai_in_site[f] = found
    except:
        pass

ai_in_notes = {}
for f in note_files:
    try:
        c = open(f, encoding="utf-8", errors="ignore").read()
        found = [cl for cl in AI_CLICHES if cl in c]
        if found:
            ai_in_notes[f] = found
    except:
        pass

print(f"AI cliches in site pages: {len(ai_in_site)}")
print(f"AI cliches in notes: {len(ai_in_notes)}")

# 2. 壊れた画像URL（undefined, null, 空白, 不正な楽天URL）
broken_img_site = []
for f in ts_files:
    try:
        c = open(f, encoding="utf-8", errors="ignore").read()
        if 'src=""' in c or 'src="undefined"' in c or 'src="null"' in c or 'hotelImageUrl: ""' in c:
            broken_img_site.append(f)
    except:
        pass

print(f"Broken images in site: {len(broken_img_site)}")

# 3. 壊れたリンク（href="", undefined, null）
broken_links_site = []
for f in ts_files:
    try:
        c = open(f, encoding="utf-8", errors="ignore").read()
        if 'href=""' in c or 'href="undefined"' in c or 'href="null"' in c:
            broken_links_site.append(f)
    except:
        pass

print(f"Broken links in site: {len(broken_links_site)}")

# 4. note記事での不自然なプレースホルダー、undefined、404チェック
note_placeholders = []
for f in note_files:
    try:
        c = open(f, encoding="utf-8", errors="ignore").read()
        if any(w in c for w in ["undefined", "null", "NaN", "¥0", "税込 0円", "おすすめの宿 1", "おすすめの宿 2"]):
            note_placeholders.append(f)
    except:
        pass

print(f"Note files with placeholders/zeros: {len(note_placeholders)}")

# 5. JSON-LD の構文・破損チェック（Next.js側）
json_ld_broken = []
for f in ts_files:
    try:
        c = open(f, encoding="utf-8", errors="ignore").read()
        matches = re.findall(r'<script\s+type="application/ld\+json"[^>]*dangerouslySetInnerHTML=\{\{\s*__html:\s*(?:JSON\.stringify\((.*?)\)|`([^`]+)`)\s*\}\}', c)
        for m in matches:
            raw_json = m[1]
            if raw_json:
                try:
                    # テンプレートリテラル内の構文チェック
                    cleaned = re.sub(r'\$\{[^}]+\}', '"PLACEHOLDER"', raw_json)
                    json.loads(cleaned)
                except Exception as je:
                    json_ld_broken.append((f, str(je)[:80]))
    except:
        pass

print(f"Broken JSON-LD in site: {len(json_ld_broken)}")

