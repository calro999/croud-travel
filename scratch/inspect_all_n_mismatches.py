import json, glob, os, re

post_files = glob.glob('src/data/posts/*.json')
n_sen_pattern = re.compile(r'[【「\[]?(\d+)選[】」\]]?')

mismatches = []
for pf in post_files:
    with open(pf, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
        except Exception:
            continue
    
    title = data.get('title', '')
    match = n_sen_pattern.search(title)
    if match:
        n = int(match.group(1))
        review = data.get('review', '')
        
        # Real distinct hotel card detection
        # Count individual affiliate links targeting hotels or distinct hotel cards
        # Distinct hotel links with hb.afl.rakuten.co.jp or travel.rakuten.co.jp/HOTEL/
        hotel_links = set(re.findall(r'https%3A%2F%2Ftravel\.rakuten\.co\.jp%2FHOTEL%2F(\d+)', review))
        if not hotel_links:
            # check direct hotel card titles
            hotel_cards = re.findall(r'<h4[^>]*font-bold[^>]*>.*?</h4>', review)
            count = len(hotel_cards)
        else:
            count = len(hotel_links)
        
        # Also check card blocks with hotel names
        card_blocks = re.findall(r'class="[^"]*(?:p-4 bg-white rounded-2xl border|p-4 bg-stone-50)[^"]*"', review)
        if len(card_blocks) > count:
            count = len(card_blocks)
            
        if count < n:
            mismatches.append({
                'file': pf,
                'slug': data.get('slug') or data.get('id'),
                'title': title,
                'target_n': n,
                'count': count,
                'prefecture': data.get('prefecture', ''),
                'area': data.get('area', '')
            })

print(f"Total true mismatches: {len(mismatches)}")
for m in mismatches:
    print(f"- {m['slug']}: target {m['target_n']} vs actual {m['count']} ({m['prefecture']} - {m['area']})")
