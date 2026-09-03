import json, glob, os, re

post_files = glob.glob('src/data/posts/*.json')
print(f"Total post files: {len(post_files)}")

n_sen_pattern = re.compile(r'[【「\[]?(\d+)選[】」\]]?')

mismatch_articles = []
checked_count = 0

for pf in post_files:
    with open(pf, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
        except Exception:
            continue
    
    title = data.get('title', '')
    match = n_sen_pattern.search(title)
    if match:
        checked_count += 1
        n = int(match.group(1))
        
        # Count hotels in review content or structured items
        review = data.get('review', '')
        
        # Various ways hotels are represented:
        # 1. <h3 ...>1. ... or <h3>【第1位】...
        # 2. rakuten affiliate links <a href="https://hb.afl.rakuten.co.jp...
        # 3. card blocks <div class="...hotel...
        
        aff_links = re.findall(r'hb\.afl\.rakuten\.co\.jp', review)
        h3_hotels = re.findall(r'<h[34][^>]*>(?:【?\d+[\.選位】]|(?:第\d+位)|(?:[①-⑩]))', review)
        hotel_names_bold = re.findall(r'<h4[^>]*class="[^"]*font-bold[^"]*"', review)
        
        # Let's count maximum distinct indicators of hotel recommendations in the review
        hotel_count = max(len(aff_links), len(h3_hotels), len(hotel_names_bold))
        
        # Also check other_images
        other_images = data.get('other_images', [])
        total_images = len(other_images) + (1 if data.get('image') else 0)
        
        if hotel_count < n:
            mismatch_articles.append({
                'file': os.path.basename(pf),
                'title': title,
                'target_n': n,
                'detected_count': hotel_count,
                'aff_links_count': len(aff_links),
                'prefecture': data.get('prefecture', ''),
                'area': data.get('area', '')
            })

print(f"Checked 'n選' articles: {checked_count}")
print(f"Mismatches found: {len(mismatch_articles)}")
for m in mismatch_articles[:20]:
    print(f"- [{m['file']}] '{m['title']}': target={m['target_n']}, detected={m['detected_count']} (aff_links={m['aff_links_count']})")
