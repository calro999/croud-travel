import requests
import json
import re

# 楽天APIでヒットしない場合、キーワード検索結果ページや確実な正しいHotelNoマッピング
fixed_hotels = {
    "src/data/posts/sheraton_okinawa.json": {
        "hotel_no": "14544",
        "raw_url": "https://travel.rakuten.co.jp/HOTEL/14544/14544.html"
    },
    "src/data/posts/kamogawa_seaworld_hotel.json": {
        "hotel_no": "6410",
        "raw_url": "https://travel.rakuten.co.jp/HOTEL/6410/6410.html"
    },
    "src/data/posts/nagoya_kanko_hotel.json": {
        "hotel_no": "940",
        "raw_url": "https://travel.rakuten.co.jp/HOTEL/940/940.html"
    },
    "src/data/posts/inishie_no_yado_kei.json": {
        "hotel_no": "161821",
        "raw_url": "https://travel.rakuten.co.jp/HOTEL/161821/161821.html"
    }
}

# 楽天キーワード検索で直接正しいリンクを見つける
keywords = {
    "src/data/posts/sheraton_okinawa.json": "シェラトン沖縄サンマリーナリゾート",
    "src/data/posts/kamogawa_seaworld_hotel.json": "鴨川シーワールドホテル",
    "src/data/posts/nagoya_kanko_hotel.json": "名古屋観光ホテル",
    "src/data/posts/inishie_no_yado_kei.json": "いにしえの宿 佳雲"
}

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

affiliate_prefix = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc="

for filepath, kw in keywords.items():
    search_url = f"https://travel.rakuten.co.jp/HOTEL/{kw}/"
    # キーワード検索
    resp = requests.get(f"https://search.travel.rakuten.co.jp/ds/hotel/search?f_teikei=&f_query={requests.utils.quote(kw)}", headers=headers)
    m = re.search(r'travel\.rakuten\.co\.jp/HOTEL/(\d+)/\1\.html', resp.text)
    if m:
        hno = m.group(1)
        target_raw = f"https://travel.rakuten.co.jp/HOTEL/{hno}/{hno}.html"
        print(f"Matched Rakuten HotelNo for {kw}: {hno} -> {target_raw}")
        with open(filepath, "r", encoding="utf-8") as f:
            pdata = json.load(f)
        pdata["affiliate_url"] = f"{affiliate_prefix}{requests.utils.quote(target_raw, safe='')}"
        pdata["image"] = f"https://img.travel.rakuten.co.jp/share/HOTEL/{hno}/{hno}.jpg"
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(pdata, f, ensure_ascii=False, indent=2)

