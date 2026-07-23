import os
import requests
import json
import time

POSTS_DIR = "src/data/posts"

# 楽天APIキー（applicationId）
APP_ID = "1082847525167699920"
AFFILIATE_ID = "1b1a78ad.7b51b311.1b1a78ae.e46a78db"

TARGET_KEYWORDS = [
  {"pref": "石川県", "subSlug": "higashi-chaya", "kw": "金沢 ひがし茶屋街 ホテル", "area": "金沢・ひがし茶屋街周辺"},
  {"pref": "石川県", "subSlug": "kanazawa-kenrokuen", "kw": "金沢 兼六園 ホテル", "area": "金沢・兼六園周辺"},
  {"pref": "石川県", "subSlug": "ohmicho-korinbo", "kw": "金沢 近江町市場 ホテル", "area": "金沢・近江町市場周辺"},
  {"pref": "石川県", "subSlug": "wajima-senmaida", "kw": "輪島 旅館", "area": "能登・輪島周辺"},
  {"pref": "石川県", "subSlug": "wakura-nanao", "kw": "和倉温泉 旅館", "area": "能登・和倉温泉周辺"},
  {"pref": "石川県", "subSlug": "kaga-three-onsen", "kw": "山代温泉 旅館", "area": "加賀温泉郷周辺"},

  {"pref": "北海道", "subSlug": "sapporo-central", "kw": "札幌 大通 ホテル", "area": "札幌・大通周辺"},
  {"pref": "北海道", "subSlug": "otaru-yoichi", "kw": "小樽 運河 ホテル", "area": "小樽・運河周辺"},

  {"pref": "東京都", "subSlug": "asakusa-skytree", "kw": "浅草 ホテル", "area": "東京・浅草周辺"},
  {"pref": "京都府", "subSlug": "gion-kiyomizu", "kw": "京都 祇園 旅館", "area": "京都・祇園清水周辺"},
  {"pref": "福岡県", "subSlug": "hakata-tenjin", "kw": "博多 天神 ホテル", "area": "福岡・博多周辺"},
  {"pref": "沖縄県", "subSlug": "naha-kokusai", "kw": "那覇 国際通り ホテル", "area": "沖縄・那覇国際通り"}
]

def fetch_and_create_posts():
    os.makedirs(POSTS_DIR, exist_ok=True)
    results_by_subarea = {}

    for target in TARGET_KEYWORDS:
        pref = target["pref"]
        subSlug = target["subSlug"]
        kw = target["kw"]
        area_label = target["area"]

        print(f"Fetching Rakuten API for [{pref}] {kw} ...")
        # app.rakuten.co.jp ドメインを使用
        url = "https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426"
        params = {
            "applicationId": APP_ID,
            "affiliateId": AFFILIATE_ID,
            "format": "json",
            "keyword": kw,
            "hits": 3
        }

        try:
            res = requests.get(url, params=params, timeout=10)
            if res.status_code == 200:
                data = res.json()
                hotels = data.get("hotels", [])
                created_post_ids = []

                for h in hotels:
                    container = h.get("hotel", [])
                    if not container:
                        continue
                    info = container[0].get("hotelBasicInfo", {})
                    hotel_no = str(info.get("hotelNo"))
                    hotel_name = info.get("hotelName", "")
                    
                    if not hotel_no or not hotel_name:
                        continue

                    image_url = info.get("largeImageUrl") or info.get("hotelImageUrl") or ""
                    affiliate_url = info.get("affiliateUrl") or info.get("hotelInformationUrl") or f"https://travel.rakuten.co.jp/HOTEL/{hotel_no}/{hotel_no}.html"
                    price = info.get("hotelMinPrice") or 10000
                    rating = info.get("reviewAverage") or 4.5
                    special = info.get("hotelSpecial") or f"{hotel_name}は、{area_label}の観光やビジネスに最適な至高の宿です。"

                    review_html = f"""
<h2>{hotel_name}をおすすめする3つの理由</h2>
<ul>
  <li><strong>{area_label}に抜群の好立地</strong>：主要観光スポットや最寄り駅へのアクセスが非常にスムーズです。</li>
  <li><strong>快適で上質な客室空間</strong>：無料Wi-Fiや充実のアメニティを完備し、旅の疲労を優しく癒やします。</li>
  <li><strong>極上のホスピタリティと美食</strong>：地場の食材を存分に活かしたお料理や温かいおもてなしが評判です。</li>
</ul>

<h2>施設の特徴と魅力</h2>
<p>{special}</p>

<h2>アクセスと周辺観光</h2>
<p>{area_label}の中心に位置し、散策やグルメ巡りの拠点として大変便利です。四季折々の風情を心ゆくまでお楽しみください。</p>

<h2>まとめ</h2>
<p>{hotel_name}で過ごす時間は、旅の素晴らしい思い出になること間違いありません。ご予約・空室状況は下記よりご確認いただけます。</p>
"""
                    post_data = {
                        "id": hotel_no,
                        "title": f"【{area_label}宿】{hotel_name}の魅力と見どころガイド",
                        "hotel_name": hotel_name,
                        "description": f"{area_label}の人気宿泊施設「{hotel_name}」。{special[:80]}",
                        "review": review_html.strip(),
                        "image": image_url,
                        "other_images": [image_url],
                        "affiliate_url": affiliate_url,
                        "prefecture": pref,
                        "area": area_label,
                        "categories": ["観光宿・リゾート", "人気おすすめ宿"],
                        "price": price,
                        "rating": rating,
                        "date": time.strftime("%Y-%m-%d %H:%M:%S")
                    }

                    post_file = os.path.join(POSTS_DIR, f"{hotel_no}.json")
                    with open(post_file, "w", encoding="utf-8") as f:
                        json.dump(post_data, f, ensure_ascii=False, indent=2)

                    print(f"  [SUCCESS] Created Real Post: {post_file} ({hotel_name})")
                    created_post_ids.append({
                        "hotelName": hotel_name,
                        "areaName": area_label,
                        "postId": hotel_no,
                        "image": image_url,
                        "price": price,
                        "rating": rating,
                        "affiliateUrl": affiliate_url
                    })

                results_by_subarea[subSlug] = created_post_ids
            else:
                print(f"Error status {res.status_code} for {kw}: {res.text}")
        except Exception as e:
            print(f"Exception fetching {kw}: {e}")

        time.sleep(1)

    with open("fetched_area_hotels.json", "w", encoding="utf-8") as f:
        json.dump(results_by_subarea, f, ensure_ascii=False, indent=2)

    print("Completed fetching and creating new real Rakuten hotel posts!")

if __name__ == "__main__":
    fetch_and_create_posts()
