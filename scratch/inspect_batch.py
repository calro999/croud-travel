import json, re, glob, os

cache = json.load(open('all_hotels_cache.json'))

def get_hotel_details(hid, fallback_name=""):
    info = cache.get(str(hid)) or cache.get(int(hid)) or {}
    name = info.get('hotelName') or fallback_name
    rating = info.get('reviewAverage')
    count = info.get('reviewCount')
    price = info.get('hotelMinCharge')
    addr = info.get('address2') or info.get('address1') or ""
    return {
        'id': str(hid),
        'name': name,
        'rating': rating,
        'count': count,
        'price': price,
        'address': addr,
        'url': f"https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F{hid}%2F{hid}.html"
    }

for n in range(179, 185):
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
        d = get_hotel_details(hid, clean_name)
        print(f"  [{d['id']}] {d['name']} | rating:{d['rating']} | count:{d['count']} | price:{d['price']} | addr:{d['address']}")

