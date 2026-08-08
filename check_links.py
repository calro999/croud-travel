import requests
import json

urls_to_check = [
    {
        "name": "Yu Kiroro (yukiroro)",
        "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178491%2F178491.html",
        "raw_url": "https://travel.rakuten.co.jp/HOTEL/178491/178491.html"
    },
    {
        "name": "シェラトン沖縄サンマリーナリゾート",
        "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14544%2F14544.html",
        "raw_url": "https://travel.rakuten.co.jp/HOTEL/14544/14544.html"
    },
    {
        "name": "鴨川シーワールドホテル",
        "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6410%2F6410.html",
        "raw_url": "https://travel.rakuten.co.jp/HOTEL/6410/6410.html"
    },
    {
        "name": "草津ナウリゾートホテル",
        "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2311%2F2311.html",
        "raw_url": "https://travel.rakuten.co.jp/HOTEL/2311/2311.html"
    },
    {
        "name": "箱根小涌園 天悠",
        "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F160867%2F160867.html",
        "raw_url": "https://travel.rakuten.co.jp/HOTEL/160867/160867.html"
    },
    {
        "name": "名古屋観光ホテル",
        "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F940%2F940.html",
        "raw_url": "https://travel.rakuten.co.jp/HOTEL/940/940.html"
    },
    {
        "name": "いにしえの宿 佳雲 (出雲)",
        "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161821%2F161821.html",
        "raw_url": "https://travel.rakuten.co.jp/HOTEL/161821/161821.html"
    }
]

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

results = []
for item in urls_to_check:
    try:
        res = requests.head(item["raw_url"], headers=headers, allow_redirects=True, timeout=5)
        status = res.status_code
    except Exception as e:
        status = f"Error: {e}"
    results.append({
        "name": item["name"],
        "status": status,
        "affiliate_url": item["affiliate_url"],
        "raw_url": item["raw_url"]
    })

print(json.dumps(results, ensure_ascii=False, indent=2))
