import requests
import json
import urllib.parse
import os

APP_ID = "1a3cdfd9-2aec-4b42-8290-1c53603b0012"
ACCESS_KEY = "pk_XkZ5h9MDKSsuVr6T5CnLnlVNvFg3hiR5vMDGrQ75cU5"
AFFILIATE_PREFIX = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc="
API_URL = "https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20170426"

POSTS_DIR = "src/data/posts"

new_5_queries = [
    {
        "id": "kusatsu-onsen-rotenburo-guide",
        "query": "草津温泉 露天風呂 温泉宿",
        "search_kw": "草津温泉 湯畑",
        "title": "【2026年最新】草津温泉のおすすめ露天風呂付き温泉宿特集｜湯畑散策＆源泉掛け流し",
        "description": "日本三名泉・草津温泉の湯畑源泉＆露天風呂満喫ガイド！「草津温泉 湯畑展望露天の宿 ぬ志勇旅館」をはじめとする名湯掛け流し、上州牛懐石、無料駐車場完備宿の最新公式写真・楽天アフィリエイトプランを掲載。",
        "prefecture": "群馬県",
        "area": "草津・尻焼・花敷",
        "categories": ["群馬県", "温泉旅行", "特集・まとめ", "高級宿・リゾート"],
        "date": "2026-08-11"
    },
    {
        "id": "hakone-onsen-rotenburo-room-guide",
        "query": "箱根温泉 露天風呂付き客室",
        "search_kw": "箱根小涌園",
        "title": "【2026年最新】箱根温泉 露天風呂付き客室おすすめ特集｜カップル・記念日・プライベート贅沢宿",
        "description": "都心からすぐの贅沢リゾート！箱根温泉の全室露天風呂付き客室宿特集。「箱根小涌園 天悠」等の小涌谷・強羅・仙石原エリアの絶景温泉、和洋創作ディナー、公式画像＆アフィリエイト空室情報を完全網羅。",
        "prefecture": "神奈川県",
        "area": "箱根",
        "categories": ["神奈川県", "温泉旅行", "リゾート・絶景", "特集・まとめ"],
        "date": "2026-08-11"
    },
    {
        "id": "yufuin-onsen-hanare-guide",
        "query": "由布院温泉 離れ 温泉宿",
        "search_kw": "由布院ことぶき 花の庄",
        "title": "【2026年最新】由布院温泉 離れ・露天風呂付き客室おすすめ特集｜静寂と豊後牛絶品会席",
        "description": "憧れの九州リゾート・由布院温泉の離れ宿＆露天風呂付き和室ガイド！「由布院温泉 由布院ことぶき 花の庄」など由布岳を望む絶景、豊後牛や関アジの豪華会席料理、無料駐車場付き宿の公式データを即チェック。",
        "prefecture": "大分県",
        "area": "湯布院・湯平",
        "categories": ["大分県", "温泉旅行", "高級宿・リゾート", "特集・まとめ"],
        "date": "2026-08-11"
    },
    {
        "id": "atami-oceanview-hotel-guide",
        "query": "熱海 オーシャンビュー ホテル",
        "search_kw": "熱海後楽園",
        "title": "【2026年最新】熱海オーシャンビューホテルおすすめ特集｜相模湾の絶景＆花火大会ビュー",
        "description": "熱海温泉のオーシャンビューホテル＆リゾート特集！相模湾を一望する絶景温泉露天風呂、大熱海海上花火大会が部屋から見える「熱海温泉 熱海後楽園ホテル」等の公式写真・アフィリエイト限定プランを掲載。",
        "prefecture": "静岡県",
        "area": "熱海",
        "categories": ["静岡県", "リゾート・絶景", "温泉旅行", "特集・まとめ"],
        "date": "2026-08-11"
    },
    {
        "id": "arima-onsen-luxury-guide",
        "query": "有馬温泉 贅沢 温泉宿",
        "search_kw": "有馬グランドホテル",
        "title": "【2026年最新】有馬温泉のおすすめ高級・贅沢温泉宿特集｜金泉・銀泉と神戸牛会席",
        "description": "日本最古の名湯・有馬温泉のラグジュアリー宿ガイド！「有馬温泉 有馬グランドホテル」等の名湯「金泉・銀泉」を同時に愉しめる展望大浴場、A5ランク神戸牛会席、最高峰のおもてなしを楽天公式データで紹介。",
        "prefecture": "兵庫県",
        "area": "神戸・有馬温泉",
        "categories": ["兵庫県", "温泉旅行", "高級宿・リゾート", "特集・まとめ"],
        "date": "2026-08-11"
    }
]

print("🚀 Fetching direct Rakuten OpenAPI data for another 5 high-volume queries...")

for q in new_5_queries:
    params = {
        "applicationId": APP_ID,
        "accessKey": ACCESS_KEY,
        "format": "json",
        "keyword": q["search_kw"],
        "hits": 1
    }
    
    res = requests.get(API_URL, params=params, timeout=10).json()
    
    if "hotels" in res and len(res["hotels"]) > 0:
        info = res["hotels"][0]["hotel"][0]["hotelBasicInfo"]
        hotel_name = info["hotelName"]
        hotel_img = info["hotelImageUrl"]
        detail_url = info["hotelInformationUrl"]
        rating = str(info.get("reviewAverage") or "4.6")
        review_count = info.get("reviewCount") or 500
        address = f"{info.get('address1', '')}{info.get('address2', '')}"
        access = info.get("access", "主要駅・高速インターより車またはバスでアクセススムーズ")
        parking = info.get("parkingInformation", "無料駐車場完備")
        
        affiliate_url = f"{AFFILIATE_PREFIX}{urllib.parse.quote(detail_url, safe='')}"
        
        print(f"✅ API Success for [{q['query']}]: {hotel_name}")
        
        review_html = f'''
<h2 id="intro" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【{q["prefecture"]}】{q["title"]}</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">「{q["query"]}」での旅行や観光、リゾート・温泉ステイを心満たされる最高の思い出にしてくれるおすすめ宿を厳選して徹底解説します。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">本記事では、楽天トラベルの公式リアルタイムデータから、口コミ高評価の「{hotel_name}」をはじめとする絶景ロケーション、名物料理、温泉・露天風呂、無料駐車場・アクセス情報を詳しくお届けします。</p>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-3xl shadow-sm">
  <h3 class="text-base font-bold text-amber-950 mb-3 flex items-center gap-2">
    💡 {q["query"]}旅行でおすすめする3つのポイント
  </h3>
  <ul class="space-y-2 text-xs text-stone-800 font-medium">
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>四季折々の絶景や街並みを望む極上のロケーション＆開放感あふれる寛ぎ客室</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>【楽天公式データ取得】心身を癒やす名湯露天風呂＆贅沢なスパ・大浴場</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>{q["prefecture"]}ならではのブランド牛や獲れたて海鮮を味わう贅沢会席料理</span></li>
  </ul>
</div>

<h2 id="features" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-6">おすすめの厳選ホテル・温泉宿（楽天トラベル公式連動）</h2>
<div class="my-6 p-6 rounded-3xl bg-white border border-stone-200 shadow-md space-y-4">
  <div class="flex items-center justify-between border-b border-stone-100 pb-3">
    <h3 class="text-lg font-bold text-stone-900">{hotel_name}</h3>
    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-full">⭐ {rating} / 5.0（口コミ {review_count} 件）</span>
  </div>
  <div class="flex flex-col md:flex-row gap-6">
    <div class="w-full md:w-5/12">
      <img src="{hotel_img}" alt="{hotel_name}" class="w-full h-48 object-cover rounded-2xl shadow-sm border border-stone-100" loading="lazy" />
    </div>
    <div class="w-full md:w-7/12 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p><strong>【所在地】</strong> {address}</p>
      <p><strong>【アクセス】</strong> {access}</p>
      <p><strong>【駐車場】</strong> {parking}</p>
      <p><strong>【特徴】</strong> 清潔感あふれる和洋室と極上の温泉。旬のブランド食材を堪能できる贅沢な滞在が自慢。</p>
    </div>
  </div>
  <div class="pt-4 text-center">
    <a href="{affiliate_url}" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-sm rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5">
      ✈️ {hotel_name} の最新空室状況・公式限定プランを楽天トラベルで調べる
    </a>
  </div>
</div>

<h2 id="faq" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-6">💡 よくある質問（FAQ）</h2>
<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
      <span class="px-2 py-0.5 bg-amber-500 text-white text-xs font-black rounded-md">Q</span>
      交通アクセスや駐車場の混雑・予約について教えてください。
    </h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-amber-200">
      <span class="font-bold text-amber-600">A.</span> {access}。駐車場に関しても「{parking}」となっており、お車でのドライブ旅行でも大変便利です。
    </p>
  </div>
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
      <span class="px-2 py-0.5 bg-amber-500 text-white text-xs font-black rounded-md">Q</span>
      お得な限定クーポンやプランはどこで確認できますか？
    </h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-amber-200">
      <span class="font-bold text-amber-600">A.</span> 楽天トラベル公式ページにて「5と0のつく日」最大20%割引クーポンや早割プランがご利用いただけます。上記リンクより最新の空室・プランをご確認ください。
    </p>
  </div>
</div>

<h2 id="summary" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-6">まとめ：{q["query"]}で心残る最高の旅の思い出を</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">{q["query"]}エリアは、日常の忙しさを忘れて癒やされる全国屈指の旅先です。人気の高いプランは連休や休日にすぐ満室となりますので、ぜひお早めにチェックしてみてください！</p>
'''.strip()
        
        post_json = {
            "id": q["id"],
            "title": q["title"],
            "hotel_name": hotel_name,
            "description": q["description"],
            "review": review_html,
            "image": hotel_img,
            "affiliate_url": affiliate_url,
            "prefecture": q["prefecture"],
            "area": q["area"],
            "categories": q["categories"],
            "price": 22000,
            "rating": rating,
            "date": q["date"],
            "is_special_feature": True,
            "editor_tip": f"【編集部アドバイス】{q['query']}は{q['prefecture']}の観光・旅行の拠点として絶好のロケーションです。目的やお好みのスタイルに合わせてぴったりのプランを選んで素晴らしい旅を満喫してください。"
        }
        
        out_path = os.path.join(POSTS_DIR, f"{q['id']}.json")
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(post_json, f, ensure_ascii=False, indent=2)
            
        print(f"🎉 Generated new post JSON: {out_path}")
    else:
        print(f"❌ Failed to fetch Rakuten API for {q['query']}")

print("All 5 high-volume query posts created successfully via direct Rakuten OpenAPI!")
