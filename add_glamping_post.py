import requests
import json
import datetime
import os

API_URL = "https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20170426"
OUTPUT_FILE = "/Users/calro/Downloads/croud-travel/src/data/posts/glamping-guide.json"

def fetch_glamping_hotels_api():
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
        "keyword": "グランピング",
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
    html = """<h2 id="intro">【大自然とラグジュアリーの融合】大人気のグランピング施設・ホテル大特集</h2>
<p>「キャンプには憧れるけど、テントの設営や食事の準備が大変…」「ホテルのような快適なベッドで寝たい！」</p>
<p>そんな願いを叶えるのが、手ぶらで大自然を満喫できる「グランピング（グラマラス＋キャンピング）」です。近年、カップルからファミリーまで爆発的な人気を集めており、予約困難な施設も続出しています。</p>
<p>本記事では、楽天トラベルAPIの最新データから、絶景と快適空間を兼ね備えた話題のグランピング施設を厳選してお届けします！</p>

<div class="my-6 p-5 bg-white border border-stone-950/20 rounded-2xl shadow-sm">
  <h3 class="text-lg font-bold text-stone-900 border-b border-stone-950/10 pb-2 mb-3">📌 目次</h3>
  <ul class="space-y-2 text-sm text-stone-950/80 font-medium">
    <li><a href="#about" class="hover:text-stone-600 hover:underline">1. ⛺ グランピング施設選びのポイント</a></li>
    <li><a href="#ranking" class="hover:text-stone-600 hover:underline">2. 🏕️ 楽天トラベル厳選！極上グランピング施設一覧</a></li>
  </ul>
</div>

<hr class="my-8 border-stone-950/10" />

<h2 id="about">⛺ 1. グランピング施設選びのポイント</h2>
<p>グランピングを楽しむためのポイントは、「テントのタイプ（ドーム型・キャビン型など）」「BBQ等の食事の豪華さ」「冷暖房・専用トイレ・シャワーの有無」です。特に専用設備が整っている施設は、アウトドア初心者や女性でも安心して楽しむことができます。</p>

<h2 id="ranking">🏕️ 2. 楽天トラベル厳選！極上グランピング施設一覧</h2>
<p>SNS映え間違いなしの絶景と、ホテル並みの快適さを提供するおすすめのグランピング施設をピックアップしました！</p>
"""

    for i, h in enumerate(hotels):
        rank = i + 1
        html += f"""
<div class="my-8 p-6 rounded-3xl bg-gradient-to-br from-stone-500/10 via-orange-500/10 to-amber-500/10 border border-stone-400/40 shadow-sm space-y-4">
  <div class="flex items-center justify-between border-b border-stone-300/40 pb-3">
    <span class="text-xs font-black text-stone-900 bg-stone-200 px-3 py-1 rounded-full uppercase">👑 おすすめ 第{rank}位</span>
    <span class="text-[11px] font-bold text-stone-800">⭐ {h['review_avg']} / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-4">
    <div class="w-full md:w-1/3">
      <img src="{h['image']}" alt="{h['name']}" class="w-full h-auto rounded-xl shadow-md border border-stone-200" loading="lazy" />
    </div>
    <div class="w-full md:w-2/3 space-y-2">
      <h3 class="text-lg font-black font-journal-serif text-stone-950">{h['name']}</h3>
      <p class="text-xs text-stone-950/80 leading-relaxed font-medium">
        {h['special']}
      </p>
      <div class="text-sm font-bold text-stone-700 mt-2">
        💰 最安料金目安：¥{h['min_price']}〜
      </div>
    </div>
  </div>
  <div class="pt-4 text-right">
    <a href="{h['url']}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-stone-600 to-orange-600 hover:from-stone-500 hover:to-orange-500 text-white font-extrabold text-xs rounded-xl shadow transition">
      🏨 {h['name']}の詳細・空室を見る
    </a>
  </div>
</div>
"""
    return html

def main():
    print("Generating Glamping Hotels data STRICTLY via Rakuten API...")
    try:
        hotels = fetch_glamping_hotels_api()
    except Exception as e:
        print(f"Error fetching from API: {e}")
        return
    
    if not hotels:
        print("No hotels fetched.")
        return
        
    review_html = generate_review_html(hotels)
    main_image = hotels[0]['image']
        
    new_post = {
        "id": "glamping-guide",
        "title": "【大自然×贅沢】手ぶらで極上体験！おすすめグランピング施設・ホテル大特集",
        "hotel_name": "全国 グランピング・アウトドアリゾート",
        "description": "「キャンプには憧れるけど準備が大変…」という方必見！ホテル並みの快適空間で大自然を満喫できる、大人気のグランピング施設を楽天トラベルAPIから厳選してご紹介します。",
        "is_special_feature": True,
        "review": review_html,
        "image": main_image,
        "other_images": [h['image'] for h in hotels[1:4]] if len(hotels) > 4 else [],
        "affiliate_url": hotels[0]['url'],
        "prefecture": "全国",
        "area": "全国",
        "categories": ["特集・まとめ", "グランピング", "アウトドア"],
        "price": None,
        "rating": None,
        "date": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(new_post, f, ensure_ascii=False, indent=2)
        
    print(f"Successfully added Glamping hotels post to {OUTPUT_FILE}!")

if __name__ == "__main__":
    main()
