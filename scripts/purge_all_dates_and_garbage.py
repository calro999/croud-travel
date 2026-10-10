import glob
import re

print("Purging all review posting dates and garbage from site pages and notes...")

# 1. サイト側 (Next.js)
ts_files = glob.glob("src/app/**/page.tsx", recursive=True)
count_ts = 0

date_pattern = re.compile(r'\s*\d{4}[-/年]\d{1,2}[-/月]\d{1,2}(?:日)?(?:\s+\d{1,2}:\d{2}(?::\d{2})?)?(?:投稿)?')
link_pattern = re.compile(r'(?:他の画像やクチコミの詳細はこちら|クチコミの詳細はこちら|つづきはこちら)[^\n"\'<]*')

for fpath in ts_files:
    try:
        with open(fpath, "r", encoding="utf-8") as f:
            c = f.read()
        orig = c
        c = date_pattern.sub('', c)
        c = link_pattern.sub('', c)
        c = re.sub(r'https?://review\.travel\.rakuten\.co\.jp[^\s"\'<]*', '', c)
        c = re.sub(r'https?://img\.travel\.rakuten\.co\.jp/image/tr/api[^\s"\'<]*', '', c)
        if c != orig:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(c)
            count_ts += 1
    except Exception as e:
        print(f"Error {fpath}: {e}")

print(f"Purged review dates & garbage from {count_ts} Next.js pages!")

# 2. note記事
note_files = glob.glob("note-*.md")
count_note = 0
for fpath in note_files:
    try:
        with open(fpath, "r", encoding="utf-8") as f:
            c = f.read()
        orig = c
        c = date_pattern.sub('', c)
        c = link_pattern.sub('', c)
        c = re.sub(r'https?://review\.travel\.rakuten\.co\.jp[^\s"\'<]*', '', c)
        c = re.sub(r'https?://img\.travel\.rakuten\.co\.jp/image/tr/api[^\s"\'<]*', '', c)
        # 秋の彩りに包まれる のテンプレ末尾も脱テンプレ化
        c = c.replace("秋の彩りに包まれる", "四季折々の美しい情景が広がる")
        if c != orig:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(c)
            count_note += 1
    except Exception as e:
        print(f"Error {fpath}: {e}")

print(f"Purged review dates & garbage from {count_note} note files!")
