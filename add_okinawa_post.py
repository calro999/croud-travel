import requests
import json
import datetime
import os

API_URL = "https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20170426"
OUTPUT_FILE = "/Users/calro/Downloads/croud-travel/src/data/posts/okinawa-luxury-resorts-guide.json"

def fetch_okinawa_hotels_api():
    # .env ファイルを直接読み込んで環境変数にセットする
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
        "keyword": "沖縄 恩納村 リゾート",
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
    html = """<h2 id="intro">【2026年夏最新】沖縄の絶景・高級リゾートホテル厳選ガイド</h2>
<p>沖縄旅行の醍醐味といえば、透き通るような青い海と、日常を忘れさせてくれる極上のリゾートホテルでの滞在です。</p>
<p>本記事では、楽天トラベルAPIから取得したリアルタイムなデータをもとに、いま最もおすすめしたい沖縄（恩納村・西海岸エリア等）の絶景ラグジュアリーリゾートを厳選してご紹介します！</p>

<div class="my-6 p-5 bg-white border border-sky-950/20 rounded-2xl shadow-sm">
  <h3 class="text-lg font-bold text-sky-900 border-b border-sky-950/10 pb-2 mb-3">📌 目次</h3>
  <ul class="space-y-2 text-sm text-sky-950/80 font-medium">
    <li><a href="#about" class="hover:text-sky-600 hover:underline">1. 🌴 沖縄リゾート選びの重要なポイント</a></li>
    <li><a href="#ranking" class="hover:text-sky-600 hover:underline">2. 🌊 楽天トラベル厳選！極上リゾートホテル一覧</a></li>
  </ul>
</div>

<hr class="my-8 border-sky-950/10" />

<h2 id="about">🌴 1. 沖縄リゾート選びの重要なポイント</h2>
<p>沖縄のリゾートホテルを選ぶ際は、「プライベートビーチの有無」「インフィニティプールの充実度」「オーシャンビューの客室」を重視するのがおすすめです。非日常を味わえる極上ステイをお楽しみください。</p>

<h2 id="ranking">🌊 2. 楽天トラベル厳選！極上リゾートホテル一覧</h2>
<p>最新のAPIデータに基づくおすすめの沖縄リゾートです。美しい写真とともに最新のプランをチェックしましょう！</p>
"""

    for i, h in enumerate(hotels):
        rank = i + 1
        html += f"""
<div class="my-8 p-6 rounded-3xl bg-gradient-to-br from-sky-500/10 via-cyan-500/10 to-blue-500/10 border border-sky-400/40 shadow-sm space-y-4">
  <div class="flex items-center justify-between border-b border-sky-300/40 pb-3">
    <span class="text-xs font-black text-sky-900 bg-sky-200 px-3 py-1 rounded-full uppercase">👑 厳選リゾート 第{rank}位</span>
    <span class="text-[11px] font-bold text-sky-800">⭐ {h['review_avg']} / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-4">
    <div class="w-full md:w-1/3">
      <img src="{h['image']}" alt="{h['name']}" class="w-full h-auto rounded-xl shadow-md border border-sky-200" loading="lazy" />
    </div>
    <div class="w-full md:w-2/3 space-y-2">
      <h3 class="text-lg font-black font-journal-serif text-sky-950">{h['name']}</h3>
      <p class="text-xs text-sky-950/80 leading-relaxed font-medium">
        {h['special']}
      </p>
      <div class="text-sm font-bold text-sky-700 mt-2">
        💰 最安料金目安：¥{h['min_price']}〜
      </div>
    </div>
  </div>
  <div class="pt-4 text-right">
    <a href="{h['url']}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-extrabold text-xs rounded-xl shadow transition">
      🏨 {h['name']}のプラン・空室を見る
    </a>
  </div>
</div>
"""
    return html

def main():
    print("Generating Okinawa Luxury Hotels data STRICTLY via Rakuten API...")
    try:
        hotels = fetch_okinawa_hotels_api()
    except Exception as e:
        print(f"Error fetching from API: {e}")
        return
    
    if not hotels:
        print("No hotels fetched.")
        return
        
    review_html = generate_review_html(hotels)
    main_image = hotels[0]['image']
        
    new_post = {
        "id": "okinawa-luxury-resorts-guide",
        "title": "【2026年最新】沖縄の絶景・高級リゾートホテル厳選ガイド",
        "hotel_name": "沖縄県 西海岸・恩納村周辺リゾート",
        "description": "楽天トラベルAPIから厳選した最新の料金・画像とともに、沖縄の美しい海を満喫できる極上の高級リゾートホテルをご紹介します。",
        "is_special_feature": True,
        "review": review_html,
        "image": main_image,
        "other_images": [h['image'] for h in hotels[1:4]] if len(hotels) > 4 else [],
        "affiliate_url": hotels[0]['url'],
        "prefecture": "沖縄県",
        "area": "九州・沖縄",
        "categories": ["特集・まとめ", "リゾート・絶景"],
        "price": None,
        "rating": None,
        "date": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(new_post, f, ensure_ascii=False, indent=2)
        
    print(f"Successfully added Okinawa hotels post to {OUTPUT_FILE}!")

if __name__ == "__main__":
    main()
