import requests
import json
import datetime
import os

API_URL = "https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20170426"
OUTPUT_FILE = "/Users/calro/Downloads/croud-travel/src/data/posts/solo-travel-luxury-guide.json"

def fetch_solo_hotels_api():
    env_path = "/Users/calro/Downloads/croud-travel/.env"
    if os.path.exists(env_path):
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                if "=" in line and not line.startswith("#"):
                    k, v = line.strip().split("=", 1)
                    os.environ[k] = v

    app_id = os.environ.get("RAKUTEN_APPLICATION_ID", "18431f8e-b43b-41f1-aebe-ead995d7a126")
    ak_raw = os.environ.get("RAKUTEN_ACCESS_KEY")
    access_key = ak_raw.strip() if ak_raw else "dummy_key"

    params = {
        "applicationId": app_id,
        "accessKey": access_key,
        "format": "json",
        "keyword": "一人旅 高級",
        "hits": 6
    }
    
    print(f"Requesting API: {API_URL}")
    response = requests.get(API_URL, params=params)
    
    if response.status_code != 200:
        raise Exception(f"API Error {response.status_code}: {response.text}")
    
    data = response.json()
    hotels = data.get("hotels", [])
    
    hotel_list = []
    for h in hotels:
        info = h["hotel"][0]["hotelBasicInfo"]
        hotel_list.append({
            "name": info.get("hotelName"),
            "special": info.get("hotelSpecial", ""),
            "min_price": info.get("hotelMinPrice", "要確認"),
            "image": info.get("largeImageUrl") or info.get("hotelImageUrl") or "",
            "url": info.get("affiliateUrl") or info.get("hotelInformationUrl") or "",
            "review_avg": info.get("reviewAverage", "N/A")
        })
        
    return hotel_list

def generate_review_html(hotels):
    html = """<h2 id="intro">【自分へのご褒美】一人旅歓迎！極上のリトリートステイができる高級ホテル・温泉宿特集</h2>
<p>「日々の疲れを癒やすために、誰にも気兼ねなく一人で贅沢な時間を過ごしたい…」</p>
<p>近年、そんな「おひとりさま」でのご褒美ステイやリトリート目的の旅行が爆発的な人気を集めています。しかし、高級宿の中には「お一人様利用不可」の施設も少なくありません。</p>
<p>本記事では、楽天トラベルAPIの最新データから、お一人様を大歓迎してくれる全国の極上ホテル・高級温泉宿を厳選してご紹介します！</p>

<div class="my-6 p-5 bg-white border border-violet-950/20 rounded-2xl shadow-sm">
  <h3 class="text-lg font-bold text-violet-900 border-b border-violet-950/10 pb-2 mb-3">📌 目次</h3>
  <ul class="space-y-2 text-sm text-violet-950/80 font-medium">
    <li><a href="#about" class="hover:text-violet-600 hover:underline">1. 🧘‍♀️ 極上の一人旅を成功させる宿選びのコツ</a></li>
    <li><a href="#ranking" class="hover:text-violet-600 hover:underline">2. 🥂 楽天トラベル厳選！一人旅におすすめの高級宿一覧</a></li>
  </ul>
</div>

<hr class="my-8 border-violet-950/10" />

<h2 id="about">🧘‍♀️ 1. 極上の一人旅を成功させる宿選びのコツ</h2>
<p>一人旅での宿選びのポイントは、「セキュリティが万全で安心できること」「お部屋食や個室での食事が可能で周りの目が気にならないこと」「スパやエステ、絶景温泉などリフレッシュできる設備があること」です。</p>

<h2 id="ranking">🥂 2. 楽天トラベル厳選！一人旅におすすめの高級宿一覧</h2>
<p>口コミ評価が非常に高く、極上のおもてなしとプライベート空間を約束してくれる名宿をピックアップしました！</p>
"""

    for i, h in enumerate(hotels):
        rank = i + 1
        html += f"""
<div class="my-8 p-6 rounded-3xl bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 border border-violet-400/40 shadow-sm space-y-4">
  <div class="flex items-center justify-between border-b border-violet-300/40 pb-3">
    <span class="text-xs font-black text-violet-900 bg-violet-200 px-3 py-1 rounded-full uppercase">👑 おすすめ 第{rank}位</span>
    <span class="text-[11px] font-bold text-violet-800">⭐ {h['review_avg']} / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-4">
    <div class="w-full md:w-1/3">
      <img src="{h['image']}" alt="{h['name']}" class="w-full h-auto rounded-xl shadow-md border border-violet-200" loading="lazy" />
    </div>
    <div class="w-full md:w-2/3 space-y-2">
      <h3 class="text-lg font-black font-journal-serif text-violet-950">{h['name']}</h3>
      <p class="text-xs text-violet-950/80 leading-relaxed font-medium">
        {h['special']}
      </p>
      <div class="text-sm font-bold text-violet-700 mt-2">
        💰 最安料金目安：¥{h['min_price']}〜
      </div>
    </div>
  </div>
  <div class="pt-4 text-right">
    <a href="{h['url']}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-extrabold text-xs rounded-xl shadow transition">
      🏨 {h['name']}の詳細・空室を見る
    </a>
  </div>
</div>
"""
    return html

def main():
    print("Generating Solo Travel Hotels data STRICTLY via Rakuten API...")
    try:
        hotels = fetch_solo_hotels_api()
    except Exception as e:
        print(f"Error fetching from API: {e}")
        return
    
    if not hotels:
        print("No hotels fetched.")
        return
        
    review_html = generate_review_html(hotels)
    main_image = hotels[0]['image']
        
    new_post = {
        "id": "solo-travel-luxury-guide",
        "title": "【自分へのご褒美】一人旅歓迎！極上のリトリートステイができる高級ホテル・温泉宿",
        "hotel_name": "全国 一人旅歓迎の高級宿",
        "description": "「誰にも気兼ねなく、一人で贅沢な時間を過ごしたい」そんな願いを叶える、お一人様歓迎の極上ホテル・高級温泉宿を楽天トラベルAPIから厳選してご紹介します。",
        "is_special_feature": True,
        "review": review_html,
        "image": main_image,
        "other_images": [h['image'] for h in hotels[1:4]] if len(hotels) > 4 else [],
        "affiliate_url": hotels[0]['url'],
        "prefecture": "全国",
        "area": "全国",
        "categories": ["特集・まとめ", "一人旅・リトリート", "高級宿"],
        "price": None,
        "rating": None,
        "date": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(new_post, f, ensure_ascii=False, indent=2)
        
    print(f"Successfully added Solo Travel hotels post to {OUTPUT_FILE}!")

if __name__ == "__main__":
    main()
