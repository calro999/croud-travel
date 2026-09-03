import json, glob, os

files = glob.glob('src/data/posts/*.json')
print(f"Total post files: {len(files)}")

short_articles = []
for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        try:
            data = json.load(fp)
        except Exception:
            continue
    review = data.get('review', '')
    # Strip basic HTML tags for rough character count
    plain_text = ''.join(c for c in review if c not in '<>/"=:\n\r\t')
    char_count = len(plain_text)
    if char_count < 1200:
        short_articles.append((os.path.basename(f), char_count, data.get('title', '')))

print(f"Articles under 1200 chars: {len(short_articles)}")
for s in short_articles[:15]:
    print(f"- {s[0]} ({s[1]} chars): {s[2]}")
