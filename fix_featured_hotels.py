# -*- coding: utf-8 -*-
import glob, json

target_slugs = [
    'christmas-date-travel-japan-hub-guide',
    'christmas-date-hokkaido-tohoku-guide',
    'christmas-date-kanto-koshinetsu-guide',
    'christmas-date-chubu-hokuriku-guide',
    'christmas-date-kinki-kansai-guide',
    'christmas-date-chugoku-shikoku-guide',
    'christmas-date-kyushu-okinawa-guide',
    'winter-tokyo-ginza-hibiya-christmas-date-luxury-hotels-guide'
]

for slug in target_slugs:
    fpath = f'src/data/posts/{slug}.json'
    try:
        with open(fpath, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        hotels = data.get('hotels', [])
        featured_list = []
        for h in hotels:
            rating_val = h.get('reviewAverage', 0.0)
            rating_str = f"{rating_val:.2f}" if isinstance(rating_val, (int, float)) else str(rating_val)
            min_charge = h.get('hotelMinCharge', 0)
            price_str = f"¥{min_charge:,}〜" if min_charge else "要確認"
            url = h.get('affiliateUrl') or h.get('hotelInformationUrl')
            
            featured_list.append({
                "name": h.get('hotelName'),
                "rating": rating_str,
                "price": price_str,
                "url": url
            })
        
        data['featured_hotels'] = featured_list
        data['is_special_feature'] = True
        
        with open(fpath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"Updated featured_hotels for {slug}: {len(featured_list)} items")
    except Exception as e:
        print(f"Error {slug}: {e}")
