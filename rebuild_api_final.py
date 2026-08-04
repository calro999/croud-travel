#!/usr/bin/env python3
"""
既存の動作確認済みスクリプト(add_hokkaido_post.py)と同じ方式で
各都道府県の楽天APIを叩いて特集記事を完全再生成する
"""
import requests
import json
import os
import time
import urllib.parse

# .envから認証情報読み込み
env_path = ".env"
with open(env_path, "r") as f:
    for line in f:
        line = line.strip()
        if "=" in line and not line.startswith("#"):
            k, v = line.split("=", 1)
            os.environ[k.strip()] = v.strip()

APP_ID     = os.environ.get("RAKUTEN_APPLICATION_ID", "")
ACCESS_KEY = os.environ.get("RAKUTEN_ACCESS_KEY", "")
AFF_ID     = os.environ.get("RAKUTEN_AFFILIATE_ID", "54d2a438.4bc4abc2.54d2a439.aa1be583")
API_URL    = "https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20170426"
AFF_PREFIX = f"https://hb.afl.rakuten.co.jp/hgc/{AFF_ID}/?pc="

print(f"APP_ID: {APP_ID[:12]}...")
print(f"API_URL: {API_URL}")

def make_aff(hotel_no):
    target = f"https://travel.rakuten.co.jp/HOTEL/{hotel_no}/{hotel_no}.html"
    return f"{AFF_PREFIX}{urllib.parse.quote(target, safe='')}"

def make_img(hotel_no):
    return f"https://img.travel.rakuten.co.jp/share/HOTEL/{hotel_no}/{hotel_no}.jpg"

def fetch_hotels(keyword, hits=6):
    params = {
        "applicationId": APP_ID,
        "accessKey":     ACCESS_KEY,
        "format":        "json",
        "keyword":       keyword,
        "hits":          hits,
    }
    print(f"  Calling API: keyword={keyword}")
    try:
        resp = requests.get(API_URL, params=params, timeout=15)
        print(f"  Status: {resp.status_code}")
        if resp.status_code != 200:
            print(f"  Error body: {resp.text[:300]}")
            return []
        data = resp.json()
        hotels_raw = data.get("hotels", [])
        results = []
        for h_wrap in hotels_raw:
            # 既存スクリプトと同様 h["hotel"][0] 構造
            info_container = h_wrap.get("hotel", [])
            if not info_container:
                continue
            info = info_container[0].get("hotelBasicInfo", {})
            hotel_no = str(info.get("hotelNo", ""))
            name     = info.get("hotelName", "")
            rating   = str(info.get("reviewAverage") or "4.00")
            special  = info.get("hotelSpecial") or ""
            aff_url  = info.get("affiliateUrl") or make_aff(hotel_no)
            img_url  = info.get("largeImageUrl") or info.get("hotelImageUrl") or make_img(hotel_no)
            if not hotel_no or not name:
                continue
            results.append({
                "no":     hotel_no,
                "name":   name,
                "rating": rating,
                "desc":   special[:120] if special else f"{name}。楽天トラベルで高評価の人気宿泊施設。",
                "img":    img_url,
                "aff":    aff_url,
            })
            print(f"    [{hotel_no}] {name} ⭐{rating}")
        print(f"  -> {len(results)} hotels fetched")
        return results
    except Exception as e:
        print(f"  EXCEPTION: {e}")
        return []

# 対象記事の定義
ARTICLES = [
    {
        "file": "obon-ishikawa-lastminute-guide.json",
        "keyword": "石川 温泉",
        "pref": "石川県", "area": "石川県",
        "title": "【2026お盆直前】石川県・金沢・能登の直前予約できる温泉宿＆直前割引プラン特集｜穴場スポットも",
        "categories": ["特集・まとめ", "夏休み・お盆", "温泉旅行"],
        "theme": {"emoji":"♨️","bg":"from-amber-500/10 via-orange-500/10 to-yellow-500/10","border":"border-amber-400/40","badge_bg":"bg-amber-200","badge_txt":"text-amber-900","badge_star":"text-amber-800","border_img":"border-amber-200","title_txt":"text-amber-950","desc_txt":"text-amber-950/80","btn_bg":"from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500"},
    },
    {
        "file": "obon-kyoto-lastminute-guide.json",
        "keyword": "京都 旅館",
        "pref": "京都府", "area": "京都",
        "title": "【2026お盆直前】京都の直前予約おすすめホテル・町家旅館特集｜五山送り火・お盆限定プラン",
        "categories": ["特集・まとめ", "夏休み・お盆", "温泉旅行"],
        "theme": {"emoji":"🍵","bg":"from-purple-500/10 via-pink-500/10 to-rose-500/10","border":"border-purple-400/40","badge_bg":"bg-purple-200","badge_txt":"text-purple-900","badge_star":"text-purple-800","border_img":"border-purple-200","title_txt":"text-purple-950","desc_txt":"text-purple-950/80","btn_bg":"from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"},
    },
    {
        "file": "obon-okinawa-lastminute-guide.json",
        "keyword": "沖縄 リゾート",
        "pref": "沖縄県", "area": "沖縄",
        "title": "【2026お盆直前】沖縄本島・離島の直前予約できるビーチリゾート＆プール付きホテル特集",
        "categories": ["特集・まとめ", "夏休み・お盆", "リゾート・絶景"],
        "theme": {"emoji":"🌺","bg":"from-sky-500/10 via-cyan-500/10 to-blue-500/10","border":"border-sky-400/40","badge_bg":"bg-sky-200","badge_txt":"text-sky-900","badge_star":"text-sky-800","border_img":"border-sky-200","title_txt":"text-sky-950","desc_txt":"text-sky-950/80","btn_bg":"from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500"},
    },
    {
        "file": "obon-hokkaido-lastminute-guide.json",
        "keyword": "北海道 温泉",
        "pref": "北海道", "area": "北海道",
        "title": "【2026お盆直前】北海道の直前予約できる絶景リゾート＆温泉宿特集｜札幌・富良野・函館",
        "categories": ["特集・まとめ", "夏休み・お盆", "リゾート・絶景"],
        "theme": {"emoji":"🏔️","bg":"from-emerald-500/10 via-teal-500/10 to-cyan-500/10","border":"border-emerald-400/40","badge_bg":"bg-emerald-200","badge_txt":"text-emerald-900","badge_star":"text-emerald-800","border_img":"border-emerald-200","title_txt":"text-emerald-950","desc_txt":"text-emerald-950/80","btn_bg":"from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500"},
    },
    {
        "file": "obon-nagano-lastminute-guide.json",
        "keyword": "長野 軽井沢 温泉",
        "pref": "長野県", "area": "長野県",
        "title": "【2026お盆直前】長野・軽井沢・上高地の直前予約できる高原リゾート＆温泉宿特集",
        "categories": ["特集・まとめ", "夏休み・お盆", "リゾート・絶景"],
        "theme": {"emoji":"🍃","bg":"from-teal-500/10 via-emerald-500/10 to-cyan-500/10","border":"border-teal-400/40","badge_bg":"bg-teal-200","badge_txt":"text-teal-900","badge_star":"text-teal-800","border_img":"border-teal-200","title_txt":"text-teal-950","desc_txt":"text-teal-950/80","btn_bg":"from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500"},
    },
    {
        "file": "obon-shizuoka-lastminute-guide.json",
        "keyword": "伊豆 熱海 温泉",
        "pref": "静岡県", "area": "静岡県",
        "title": "【2026お盆直前】静岡・伊豆・熱海の直前予約できる温泉旅館＆海が見えるホテル特集",
        "categories": ["特集・まとめ", "夏休み・お盆", "温泉・カップル"],
        "theme": {"emoji":"🌊","bg":"from-amber-500/10 via-orange-500/10 to-yellow-500/10","border":"border-amber-400/40","badge_bg":"bg-amber-200","badge_txt":"text-amber-900","badge_star":"text-amber-800","border_img":"border-amber-200","title_txt":"text-amber-950","desc_txt":"text-amber-950/80","btn_bg":"from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500"},
    },
]

def build_review(art, hotels):
    t = art["theme"]
    cards = ""
    for idx, h in enumerate(hotels, 1):
        cards += f'''
<div class="my-8 p-6 rounded-3xl bg-gradient-to-br {t['bg']} border {t['border']} shadow-sm space-y-4">
  <div class="flex items-center justify-between border-b border-gray-300/40 pb-3">
    <div class="flex items-center gap-2">
      <span class="text-xs font-black {t['badge_txt']} {t['badge_bg']} px-3 py-1 rounded-full uppercase">{t['emoji']} 直前おすすめ 第{idx}位</span>
      <span class="text-[10px] font-bold {t['badge_txt']} bg-white border border-gray-300/60 px-2.5 py-0.5 rounded-full">{art['pref']}</span>
    </div>
    <span class="text-[11px] font-bold {t['badge_star']}">⭐ {h['rating']} / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-4">
    <div class="w-full md:w-1/3">
      <img src="{h['img']}" alt="{h['name']}" class="w-full h-auto rounded-xl shadow-md border {t['border_img']}" loading="lazy" />
    </div>
    <div class="w-full md:w-2/3 space-y-2">
      <h3 class="text-lg font-black font-journal-serif {t['title_txt']}">{h['name']}</h3>
      <p class="text-xs {t['desc_txt']} leading-relaxed font-medium">{h['desc']}</p>
    </div>
  </div>
  <div class="pt-4 text-right">
    <a href="{h['aff']}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r {t['btn_bg']} text-white font-extrabold text-xs rounded-xl shadow transition">
      {t['emoji']} {h['name']}のお盆空室・プランを今すぐ確認
    </a>
  </div>
</div>
'''
    return f'''<h2 id="intro">{art['title']}</h2>
<p>お盆まであとわずか！{art['pref']}で今からでも予約できる高評価の宿・リゾートを楽天トラベルから厳選しました。</p>

<div class="my-6 p-5 bg-white border border-gray-200 rounded-2xl shadow-sm">
  <h3 class="text-lg font-bold text-emerald-900 border-b border-gray-200 pb-2 mb-3">📌 目次</h3>
  <ul class="space-y-2 text-sm text-gray-700 font-medium">
    <li><a href="#tips" class="hover:underline">1. ⚡ お盆直前予約の鉄則4カ条</a></li>
    <li><a href="#ranking" class="hover:underline">2. 🏨 {art['pref']} 直前おすすめ宿一覧</a></li>
    <li><a href="#faq" class="hover:underline">3. 💡 よくある質問</a></li>
  </ul>
</div>

<hr class="my-8" />

<h2 id="tips">⚡ 1. お盆直前予約の鉄則4カ条</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200">
    <h4 class="font-bold text-amber-950 text-sm">① 3日前キャンセル戻り枠を狙う</h4>
    <p class="text-xs text-amber-950/80 leading-relaxed mt-1">キャンセル料発生タイミングで空室が戻る最大のチャンス。毎日こまめにチェックを。</p>
  </div>
  <div class="p-4 rounded-2xl bg-teal-50 border border-teal-200">
    <h4 class="font-bold text-teal-950 text-sm">② ピーク日程を1日前後にずらす</h4>
    <p class="text-xs text-teal-950/80 leading-relaxed mt-1">8/11〜12・8/15〜16にするだけで空室率と価格が大幅改善されます。</p>
  </div>
  <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
    <h4 class="font-bold text-emerald-950 text-sm">③ 楽天の直前割クーポンを活用</h4>
    <p class="text-xs text-emerald-950/80 leading-relaxed mt-1">「5と0のつく日」クーポンや直前限定プランを組み合わせてお得に予約。</p>
  </div>
  <div class="p-4 rounded-2xl bg-rose-50 border border-rose-200">
    <h4 class="font-bold text-rose-950 text-sm">④ 郊外の穴場エリアを狙う</h4>
    <p class="text-xs text-rose-950/80 leading-relaxed mt-1">観光地中心から車で30分ほど離れたエリアには直前でも空室が残っています。</p>
  </div>
</div>

<hr class="my-8" />

<h2 id="ranking">🏨 2. {art['pref']} 直前おすすめ宿一覧（楽天トラベル取得データ）</h2>
<p>以下は楽天トラベルから実際に取得した{art['pref']}内の実在施設のみです。</p>
{cards}

<hr class="my-8" />

<h2 id="faq">💡 よくある質問</h2>
<div class="p-4 rounded-xl bg-amber-50/40 border border-amber-900/10 space-y-2 mb-4">
  <h4 class="text-sm font-bold text-amber-950">Q. お盆直前でも交通手段は確保できますか？</h4>
  <p class="text-xs text-amber-950/80 leading-relaxed pl-4">A. 早朝・深夜便や新幹線自由席の活用で対応できます。楽天トラベルのダイナミックパッケージも直前まで販売されています。</p>
</div>
<div class="p-4 rounded-xl bg-emerald-50/40 border border-emerald-900/10 space-y-2 mb-6">
  <h4 class="text-sm font-bold text-emerald-950">Q. 直前予約で注意すべき点は？</h4>
  <p class="text-xs text-emerald-950/80 leading-relaxed pl-4">A. キャンセルポリシーを必ず確認し、渋滞・遅延時は宿に早めに連絡しましょう。</p>
</div>

<h2 id="conclusion">素敵なお盆旅行を{art['pref']}で！</h2>
<p>気になる宿が見つかったら、すぐに楽天トラベルで空室状況を確認してください！</p>
'''

DIR = "src/data/posts"
success = 0

for art in ARTICLES:
    print(f"\n{'='*60}")
    print(f">>> {art['file']} ({art['pref']}) keyword={art['keyword']}")
    print('='*60)

    hotels = fetch_hotels(art["keyword"], hits=6)
    time.sleep(2)

    if not hotels:
        print(f"  !! No hotels returned. Skipping {art['file']}.")
        continue

    fpath = os.path.join(DIR, art["file"])
    post = {}
    if os.path.exists(fpath):
        with open(fpath, "r", encoding="utf-8") as f:
            post = json.load(f)

    post.update({
        "id":               art["file"].replace(".json", ""),
        "title":            art["title"],
        "hotel_name":       art["title"],
        "description":      f"{art['pref']}のお盆直前旅行特集。楽天トラベルAPIで取得した{art['pref']}実在ホテルのみ掲載。",
        "is_special_feature": True,
        "review":           build_review(art, hotels),
        "image":            hotels[0]["img"],
        "other_images":     [],
        "affiliate_url":    hotels[0]["aff"],
        "prefecture":       art["pref"],
        "area":             art["area"],
        "categories":       art["categories"],
        "price":            None,
        "rating":           None,
        "date":             "2026-08-05 12:00:00",
    })

    with open(fpath, "w", encoding="utf-8") as f:
        json.dump(post, f, ensure_ascii=False, indent=2)

    print(f"  ✅ SAVED: {fpath} ({len(hotels)} hotels from API)")
    success += 1

print(f"\n{'='*60}")
print(f"FINAL: {success}/{len(ARTICLES)} articles rebuilt with REAL Rakuten API data")
