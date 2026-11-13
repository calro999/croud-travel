import json, re

cache = json.load(open('all_hotels_cache.json'))

for n in range(203, 208):
    fn = f"note-{n}.md"
    with open(fn) as f: c = f.read()
    m_slug = re.search(r'https://croud-travel\.pages\.dev/([^/\)\s]+)/([^/\)\s]+)', c)
    slug = m_slug.group(2) if m_slug else ""
    title = c.split('\n')[0].replace('# ', '')
    hotels = re.findall(r'・\*\*【(.*?)】\*\*\n\s+(.*?)\n\s+👉 \[(.*?)\]\((.*?HOTEL%2F(\d+)%2F.*?)\)', c)
    print(f"=== {fn} ({slug}) ===")
    print("Title:", title)
    for h in hotels:
        raw_name, desc, _, _, hid = h
        clean_name = re.sub(r'^楽天トラベルで「|」の空室・$', '', raw_name)
        info = cache.get(str(hid)) or cache.get(int(hid)) or {}
        name = info.get('hotelName') or clean_name
        rating = info.get('reviewAverage')
        count = info.get('reviewCount')
        price = info.get('hotelMinCharge')
        addr = info.get('address2') or info.get('address1') or ""
        print(f"  [{hid}] {name} | {rating} | {count} | {price} | {addr}")

