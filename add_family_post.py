import requests
import json
import datetime
import os

API_URL = "https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20170426"
OUTPUT_FILE = "/Users/calro/Downloads/croud-travel/src/data/posts/family-welcome-baby-guide.json"

def fetch_family_hotels_api():
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
        "keyword": "ウェルカムベビー",
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
    html = """<h2 id="intro">【パパママ必見】子連れ・赤ちゃん歓迎！家族旅行におすすめのホテル・温泉宿特集</h2>
<p>「子どもを連れての初めての旅行、周りに迷惑をかけないか心配…」「離乳食やキッズスペースがある宿を探したい！」</p>
<p>そんなご家族の悩みを解決する、キッズフレンドリーでパパママも安心してくつろげる「ウェルカムベビーのお宿」や子連れ歓迎のホテルを厳選しました。</p>
<p>本記事では、楽天トラベルAPIの最新データに基づく高評価宿の中から、家族みんなが笑顔になれる極上の宿泊施設をご紹介します！</p>

<div class="my-6 p-5 bg-white border border-rose-950/20 rounded-2xl shadow-sm">
  <h3 class="text-lg font-bold text-rose-900 border-b border-rose-950/10 pb-2 mb-3">📌 目次</h3>
  <ul class="space-y-2 text-sm text-rose-950/80 font-medium">
    <li><a href="#about" class="hover:text-rose-600 hover:underline">1. 🍼 子連れ旅行でのホテル選びの重要ポイント</a></li>
    <li><a href="#ranking" class="hover:text-rose-600 hover:underline">2. 👨‍👩‍👧‍👦 楽天トラベル厳選！子連れ歓迎のおすすめ宿一覧</a></li>
  </ul>
</div>

<hr class="my-8 border-rose-950/10" />

<h2 id="about">🍼 1. 子連れ旅行でのホテル選びの重要ポイント</h2>
<p>小さなお子様連れの旅行では、「キッズルームの有無」「貸切風呂や部屋食の対応」「子ども向けアメニティ（ベビーベッド・離乳食など）の充実度」が最重要ポイントです。「ウェルカムベビー」認定の宿なら、万全のサポート体制で安心して過ごせます。</p>

<h2 id="ranking">👨‍👩‍👧‍👦 2. 楽天トラベル厳選！子連れ歓迎のおすすめ宿一覧</h2>
<p>実際の口コミ評価が高く、家族の最高の思い出作りにぴったりのお宿をピックアップしました！</p>
"""

    for i, h in enumerate(hotels):
        rank = i + 1
        html += f"""
<div class="my-8 p-6 rounded-3xl bg-gradient-to-br from-rose-500/10 via-pink-500/10 to-red-500/10 border border-rose-400/40 shadow-sm space-y-4">
  <div class="flex items-center justify-between border-b border-rose-300/40 pb-3">
    <span class="text-xs font-black text-rose-900 bg-rose-200 px-3 py-1 rounded-full uppercase">👑 おすすめ 第{rank}位</span>
    <span class="text-[11px] font-bold text-rose-800">⭐ {h['review_avg']} / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-4">
    <div class="w-full md:w-1/3">
      <img src="{h['image']}" alt="{h['name']}" class="w-full h-auto rounded-xl shadow-md border border-rose-200" loading="lazy" />
    </div>
    <div class="w-full md:w-2/3 space-y-2">
      <h3 class="text-lg font-black font-journal-serif text-rose-950">{h['name']}</h3>
      <p class="text-xs text-rose-950/80 leading-relaxed font-medium">
        {h['special']}
      </p>
      <div class="text-sm font-bold text-rose-700 mt-2">
        💰 最安料金目安：¥{h['min_price']}〜
      </div>
    </div>
  </div>
  <div class="pt-4 text-right">
    <a href="{h['url']}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-extrabold text-xs rounded-xl shadow transition">
      🏨 {h['name']}の詳細・空室を見る
    </a>
  </div>
</div>
"""
    return html

def main():
    print("Generating Family Hotels data STRICTLY via Rakuten API...")
    try:
        hotels = fetch_family_hotels_api()
    except Exception as e:
        print(f"Error fetching from API: {e}")
        return
    
    if not hotels:
        print("No hotels fetched.")
        return
        
    review_html = generate_review_html(hotels)
    main_image = hotels[0]['image']
        
    new_post = {
        "id": "family-welcome-baby-guide",
        "title": "【家族旅行】子連れ・赤ちゃん歓迎！パパママ安心のおすすめホテル・温泉宿",
        "hotel_name": "全国 子連れ歓迎・ウェルカムベビーのお宿",
        "description": "「子どもと一緒に旅行を楽しみたい！」そんなご家族の願いを叶える、キッズルーム完備や離乳食対応などサポート充実の「子連れ歓迎」のお宿を厳選してご紹介します。",
        "is_special_feature": True,
        "review": review_html,
        "image": main_image,
        "other_images": [h['image'] for h in hotels[1:4]] if len(hotels) > 4 else [],
        "affiliate_url": hotels[0]['url'],
        "prefecture": "全国",
        "area": "全国",
        "categories": ["特集・まとめ", "ファミリー・女子旅"],
        "price": None,
        "rating": None,
        "date": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(new_post, f, ensure_ascii=False, indent=2)
        
    print(f"Successfully added Family hotels post to {OUTPUT_FILE}!")

if __name__ == "__main__":
    main()
