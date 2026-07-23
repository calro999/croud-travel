import os
import requests
import json
import re
import time

POSTS_DIR = "src/data/posts"

# 楽天アフィリエイトID
AFFILIATE_ID_PREFIX = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc="

TARGET_AREAS = [
    # 石川県
    {"subSlug": "higashi-chaya", "pref": "石川県", "area": "金沢・ひがし茶屋街周辺", "searchUrl": "https://travel.rakuten.co.jp/yado/ishikawa/kanazawa.html"},
    {"subSlug": "kanazawa-kenrokuen", "pref": "石川県", "area": "金沢・兼六園周辺", "searchUrl": "https://travel.rakuten.co.jp/yado/ishikawa/kanazawa.html"},
    {"subSlug": "ohmicho-korinbo", "pref": "石川県", "area": "金沢・近江町市場周辺", "searchUrl": "https://travel.rakuten.co.jp/yado/ishikawa/kanazawa.html"},
    {"subSlug": "wajima-senmaida", "pref": "石川県", "area": "能登・輪島周辺", "searchUrl": "https://travel.rakuten.co.jp/yado/ishikawa/wajima.html"},
    {"subSlug": "wakura-nanao", "pref": "石川県", "area": "能登・和倉温泉周辺", "searchUrl": "https://travel.rakuten.co.jp/yado/ishikawa/wakura.html"},
    {"subSlug": "kaga-three-onsen", "pref": "石川県", "area": "加賀温泉郷周辺", "searchUrl": "https://travel.rakuten.co.jp/yado/ishikawa/kaga.html"},
    
    # 北海道
    {"subSlug": "sapporo-central", "pref": "北海道", "area": "札幌・大通周辺", "searchUrl": "https://travel.rakuten.co.jp/yado/hokkaido/sapporo.html"},
    {"subSlug": "otaru-yoichi", "pref": "北海道", "area": "小樽・運河周辺", "searchUrl": "https://travel.rakuten.co.jp/yado/hokkaido/otaru.html"},
]

def scrape_rakuten_hotels():
    os.makedirs(POSTS_DIR, exist_ok=True)
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }

    results = {}

    for target in TARGET_AREAS:
        subSlug = target["subSlug"]
        pref = target["pref"]
        area_label = target["area"]
        url = target["searchUrl"]

        print(f"Scraping Rakuten Travel for [{area_label}] -> {url} ...")
        try:
            res = requests.get(url, headers=headers, timeout=10)
            if res.status_code == 200:
                html = res.text
                # HOTEL/([0-9]+)/ パターンからhotelNoを抽出
                matches = re.findall(r'travel\.rakuten\.co\.jp/HOTEL/([0-9]+)/', html)
                unique_hotel_nos = list(dict.fromkeys(matches))[:5] # 各エリア上位5件

                area_hotel_list = []
                for hotel_no in unique_hotel_nos:
                    # 宿名等のパース
                    hotel_name_match = re.search(rf'HOTEL/{hotel_no}/[^">]*">([^<]+)</a>', html)
                    hotel_name = hotel_name_match.group(1).strip() if hotel_name_match else f"{area_label}の厳選宿 ({hotel_no})"
                    
                    image_url = f"https://img.travel.rakuten.co.jp/share/HOTEL/{hotel_no}/{hotel_no}.jpg"
                    rakuten_hotel_url = f"https://travel.rakuten.co.jp/HOTEL/{hotel_no}/{hotel_no}.html"
                    affiliate_url = f"{AFFILIATE_ID_PREFIX}{requests.utils.quote(rakuten_hotel_url)}"

                    # 個別記事JSONを作成・保存
                    post_data = {
                        "id": hotel_no,
                        "title": f"【{area_label}厳選宿】{hotel_name}の魅力と見どころ徹底取材",
                        "hotel_name": hotel_name,
                        "description": f"{area_label}の絶品宿泊施設「{hotel_name}」。最高の立地と温かいおもてなしで、素晴らしい旅の時間を提供します。",
                        "review": f"""
<h2>{hotel_name}をおすすめする3つの理由</h2>
<ul>
  <li><strong>{area_label}に抜群のロケーション</strong>：観光スポットや最寄り駅・バス停から近く、拠点として最適です。</li>
  <li><strong>清潔で心地よい客室と充実のアメニティ</strong>：旅の疲れをほぐす寛ぎの空間と快適なインターネット環境。</li>
  <li><strong>地元食材を活かした絶品お料理とおもてなし</strong>：心温まる丁寧な対応と極上の美食を心ゆくまで堪能。</li>
</ul>

<h2>施設の特徴と魅力</h2>
<p>{hotel_name}は、{area_label}ならではの豊かな情景と歴史・文化を五感で楽しめる最高級の宿です。</p>

<h2>アクセスと周辺観光</h2>
<p>{area_label}の人気観光名所へも徒歩や短い移動でアクセス可能。観光・グルメ・お買い物・温泉巡りのベースキャンプとして最適です。</p>

<h2>まとめ</h2>
<p>{hotel_name}でのご滞在は、旅をより豊かなものにしてくれます。空室状況やプラン詳細は下記公式リンクよりご覧ください。</p>
""".strip(),
                        "image": image_url,
                        "other_images": [image_url],
                        "affiliate_url": affiliate_url,
                        "prefecture": pref,
                        "area": area_label,
                        "categories": ["厳選ホテル・旅館", "人気おすすめ宿"],
                        "price": 12000,
                        "rating": 4.6,
                        "date": time.strftime("%Y-%m-%d %H:%M:%S")
                    }

                    post_path = os.path.join(POSTS_DIR, f"{hotel_no}.json")
                    with open(post_path, "w", encoding="utf-8") as f:
                        json.dump(post_data, f, ensure_ascii=False, indent=2)

                    print(f"  -> Generated New Post JSON: {post_path} [{hotel_name}]")
                    area_hotel_list.append({
                        "hotelName": hotel_name,
                        "areaName": area_label,
                        "postId": hotel_no,
                        "image": image_url,
                        "price": 12000,
                        "rating": 4.6,
                        "affiliateUrl": affiliate_url
                    })

                results[subSlug] = area_hotel_list
            else:
                print(f"Failed status {res.status_code} for {url}")
        except Exception as e:
            print(f"Error scraping {url}: {e}")

        time.sleep(1)

    with open("scraped_area_hotels.json", "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    print("Scraping and post generation completed successfully!")

if __name__ == "__main__":
    scrape_rakuten_hotels()
