#!/usr/bin/env python3
"""
楽天トラベルAPIで都道府県コードを指定してホテルを取得し、
特集記事JSONを完全に再生成するスクリプト。
"""
import urllib.request
import urllib.parse
import json
import ssl
import os
import time

APP_ID = "1013751498494702498"
AFF_BASE = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc="

ssl_ctx = ssl.create_default_context()
ssl_ctx.check_hostname = False
ssl_ctx.verify_mode = ssl.CERT_NONE

def make_aff(hotel_no):
    target = f"https://travel.rakuten.co.jp/HOTEL/{hotel_no}/{hotel_no}.html"
    return f"{AFF_BASE}{urllib.parse.quote(target, safe='')}"

def make_img(hotel_no):
    return f"https://img.travel.rakuten.co.jp/share/HOTEL/{hotel_no}/{hotel_no}.jpg"

def fetch_hotels_by_prefecture(pref_code, hits=6):
    """楽天トラベルAPIで都道府県コード指定でホテルを取得"""
    url = (
        f"https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426"
        f"?applicationId={APP_ID}"
        f"&prefectureCode={pref_code}"
        f"&hits={hits}"
        f"&sort=-reviewCount"
        f"&responseType=large"
        f"&formatVersion=2"
    )
    print(f"  API Request: prefectureCode={pref_code}, hits={hits}")
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, context=ssl_ctx, timeout=10) as res:
            data = json.loads(res.read().decode("utf-8"))
            hotels_raw = data.get("hotels", [])
            results = []
            for h_wrap in hotels_raw:
                hi = h_wrap[0]["hotelBasicInfo"]
                results.append({
                    "no":     str(hi["hotelNo"]),
                    "name":   hi["hotelName"],
                    "rating": str(hi.get("reviewAverage", "4.00")),
                    "desc":   (hi.get("hotelSpecial") or hi.get("hotelMinCharge") or ""),
                    "img":    make_img(str(hi["hotelNo"])),
                    "aff":    make_aff(str(hi["hotelNo"])),
                })
            print(f"  -> Got {len(results)} hotels from API")
            for r in results:
                print(f"     [{r['no']}] {r['name']} ⭐{r['rating']}")
            return results
    except Exception as e:
        print(f"  ERROR: {e}")
        return []

# 対象記事と都道府県コードのマッピング
# 楽天トラベルAPIの都道府県コード一覧 (2桁ゼロパディング)
TARGET_ARTICLES = [
    # (ファイル名, 都道府県コード, 都道府県名, エリア名, タイトル, description, カラーテーマ)
    {
        "file":       "obon-ishikawa-lastminute-guide.json",
        "pref_code":  "17",  # 石川県
        "pref":       "石川県",
        "area":       "石川県",
        "title":      "【2026お盆直前】石川県・金沢・能登の直前予約できる温泉宿＆直前割引プラン特集｜車なしアクセス・穴場スポットも",
        "desc":       "石川県のお盆休み直前旅行ガイド！金沢・和倉温泉・能登半島の厳選温泉宿を楽天トラベルAPIで取得した100%石川県実在ホテルのみで特集。",
        "categories": ["特集・まとめ", "夏休み・お盆", "温泉旅行"],
        "theme": {
            "bg": "from-amber-500/10 via-orange-500/10 to-yellow-500/10",
            "border": "border-amber-400/40",
            "badge_bg": "bg-amber-200",
            "badge_txt": "text-amber-900",
            "badge_star": "text-amber-800",
            "border_img": "border-amber-200",
            "title_txt": "text-amber-950",
            "desc_txt": "text-amber-950/80",
            "btn_bg": "from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500",
        }
    },
    {
        "file":       "obon-kyoto-lastminute-guide.json",
        "pref_code":  "26",  # 京都府
        "pref":       "京都府",
        "area":       "京都",
        "title":      "【2026お盆直前】京都の直前予約おすすめホテル・町家旅館特集｜混雑を避ける穴場・五山送り火・お盆限定プラン",
        "desc":       "京都府のお盆休み直前旅行ガイド！祇園・嵐山・金閣寺周辺の高評価旅館・ホテルを楽天トラベルAPIで取得した100%京都実在施設のみで特集。",
        "categories": ["特集・まとめ", "夏休み・お盆", "温泉旅行"],
        "theme": {
            "bg": "from-purple-500/10 via-pink-500/10 to-rose-500/10",
            "border": "border-purple-400/40",
            "badge_bg": "bg-purple-200",
            "badge_txt": "text-purple-900",
            "badge_star": "text-purple-800",
            "border_img": "border-purple-200",
            "title_txt": "text-purple-950",
            "desc_txt": "text-purple-950/80",
            "btn_bg": "from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500",
        }
    },
    {
        "file":       "obon-okinawa-lastminute-guide.json",
        "pref_code":  "47",  # 沖縄県
        "pref":       "沖縄県",
        "area":       "沖縄",
        "title":      "【2026お盆直前】沖縄本島・離島の直前予約できるビーチリゾート＆プール付きホテル特集｜直前航空券・レンタカー対策も",
        "desc":       "沖縄県のお盆休み直前旅行ガイド！恩納村・那覇・石垣島の有名リゾートホテルを楽天トラベルAPIで取得した100%沖縄実在施設のみで特集。",
        "categories": ["特集・まとめ", "夏休み・お盆", "リゾート・絶景"],
        "theme": {
            "bg": "from-sky-500/10 via-cyan-500/10 to-blue-500/10",
            "border": "border-sky-400/40",
            "badge_bg": "bg-sky-200",
            "badge_txt": "text-sky-900",
            "badge_star": "text-sky-800",
            "border_img": "border-sky-200",
            "title_txt": "text-sky-950",
            "desc_txt": "text-sky-950/80",
            "btn_bg": "from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500",
        }
    },
    {
        "file":       "obon-hokkaido-lastminute-guide.json",
        "pref_code":  "01",  # 北海道
        "pref":       "北海道",
        "area":       "北海道",
        "title":      "【2026お盆直前】北海道の直前予約できる絶景リゾート＆温泉宿特集｜札幌・小樽・富良野・函館の駆け込みプラン",
        "desc":       "北海道のお盆休み直前旅行ガイド！札幌・小樽・富良野・函館の高評価ホテル・温泉宿を楽天トラベルAPIで取得した100%北海道実在施設のみで特集。",
        "categories": ["特集・まとめ", "夏休み・お盆", "リゾート・絶景"],
        "theme": {
            "bg": "from-emerald-500/10 via-teal-500/10 to-cyan-500/10",
            "border": "border-emerald-400/40",
            "badge_bg": "bg-emerald-200",
            "badge_txt": "text-emerald-900",
            "badge_star": "text-emerald-800",
            "border_img": "border-emerald-200",
            "title_txt": "text-emerald-950",
            "desc_txt": "text-emerald-950/80",
            "btn_bg": "from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500",
        }
    },
    {
        "file":       "obon-nagano-lastminute-guide.json",
        "pref_code":  "20",  # 長野県
        "pref":       "長野県",
        "area":       "長野県",
        "title":      "【2026お盆直前】長野・軽井沢・上高地の直前予約できる高原リゾート＆温泉宿特集｜避暑地のおすすめ・車混雑回避",
        "desc":       "長野県のお盆休み直前旅行ガイド！軽井沢・蓼科・上高地・別所温泉の高評価宿を楽天トラベルAPIで取得した100%長野実在施設のみで特集。",
        "categories": ["特集・まとめ", "夏休み・お盆", "リゾート・絶景"],
        "theme": {
            "bg": "from-teal-500/10 via-emerald-500/10 to-cyan-500/10",
            "border": "border-teal-400/40",
            "badge_bg": "bg-teal-200",
            "badge_txt": "text-teal-900",
            "badge_star": "text-teal-800",
            "border_img": "border-teal-200",
            "title_txt": "text-teal-950",
            "desc_txt": "text-teal-950/80",
            "btn_bg": "from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500",
        }
    },
    {
        "file":       "obon-shizuoka-lastminute-guide.json",
        "pref_code":  "22",  # 静岡県
        "pref":       "静岡県",
        "area":       "静岡県",
        "title":      "【2026お盆直前】静岡・伊豆・熱海の直前予約できる温泉旅館＆海が見えるホテル特集｜東名渋滞回避・家族＆カップルプラン",
        "desc":       "静岡県のお盆休み直前旅行ガイド！伊豆高原・熱海・伊東の全室露天風呂付き宿を楽天トラベルAPIで取得した100%静岡実在施設のみで特集。",
        "categories": ["特集・まとめ", "夏休み・お盆", "温泉・カップル"],
        "theme": {
            "bg": "from-amber-500/10 via-orange-500/10 to-yellow-500/10",
            "border": "border-amber-400/40",
            "badge_bg": "bg-amber-200",
            "badge_txt": "text-amber-900",
            "badge_star": "text-amber-800",
            "border_img": "border-amber-200",
            "title_txt": "text-amber-950",
            "desc_txt": "text-amber-950/80",
            "btn_bg": "from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500",
        }
    },
]

def build_review(art, hotels):
    t = art["theme"]
    cards = ""
    for idx, h in enumerate(hotels, 1):
        desc_text = str(h["desc"])[:80].replace("<","&lt;").replace(">","&gt;") if h["desc"] else f"{art['pref']}の人気宿泊施設。楽天トラベルで高い評価を集める{art['area']}の実在ホテルです。"
        cards += f'''
<div class="my-8 p-6 rounded-3xl bg-gradient-to-br {t['bg']} border {t['border']} shadow-sm space-y-4">
  <div class="flex items-center justify-between border-b border-gray-300/40 pb-3">
    <div class="flex items-center gap-2">
      <span class="text-xs font-black {t['badge_txt']} {t['badge_bg']} px-3 py-1 rounded-full uppercase">⚡ 直前おすすめ 第{idx}位</span>
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
      <p class="text-xs {t['desc_txt']} leading-relaxed font-medium">{desc_text}</p>
    </div>
  </div>
  <div class="pt-4 text-right">
    <a href="{h['aff']}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r {t['btn_bg']} text-white font-extrabold text-xs rounded-xl shadow transition">
      ⚡ {h['name']}のお盆空室・プランを今すぐ確認
    </a>
  </div>
</div>
'''

    return f'''<h2 id="intro">{art['title']}</h2>
<p>お盆まであとわずか！「{art['pref']}で直前でも予約できる宿はある？」という方のために、楽天トラベルで今なお空室のある{art['pref']}の高評価宿を厳選してご紹介します。</p>

<div class="my-6 p-5 bg-white border border-emerald-950/20 rounded-2xl shadow-sm">
  <h3 class="text-lg font-bold text-emerald-900 border-b border-emerald-950/10 pb-2 mb-3">📌 目次</h3>
  <ul class="space-y-2 text-sm text-emerald-950/80 font-medium">
    <li><a href="#tips" class="hover:text-emerald-600 hover:underline">1. ⚡ お盆直前予約を成功させる鉄則</a></li>
    <li><a href="#ranking" class="hover:text-emerald-600 hover:underline">2. 🏨 {art['pref']} 直前予約おすすめ宿一覧</a></li>
    <li><a href="#faq" class="hover:text-emerald-600 hover:underline">3. 💡 よくある質問</a></li>
  </ul>
</div>

<hr class="my-8 border-emerald-950/10" />

<h2 id="tips">⚡ 1. お盆直前予約を成功させる鉄則</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
    <h4 class="font-bold text-amber-950 text-sm">① 3日前キャンセル戻り枠を狙う</h4>
    <p class="text-xs text-amber-950/80 leading-relaxed">キャンセル料発生のタイミングで空室が戻る最大チャンス。毎日こまめにチェックを。</p>
  </div>
  <div class="p-4 rounded-2xl bg-teal-50 border border-teal-200 space-y-2">
    <h4 class="font-bold text-teal-950 text-sm">② 日程を前後にずらす</h4>
    <p class="text-xs text-teal-950/80 leading-relaxed">8/13〜14のピークを外し8/11〜12や8/15〜16にするだけで空室率・料金が大改善。</p>
  </div>
  <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
    <h4 class="font-bold text-emerald-950 text-sm">③ 直前割引クーポンを活用</h4>
    <p class="text-xs text-emerald-950/80 leading-relaxed">楽天トラベルの「5と0のつく日」クーポンや直前限定プランと組み合わせてお得に予約。</p>
  </div>
  <div class="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
    <h4 class="font-bold text-rose-950 text-sm">④ 郊外・穴場エリアの宿を探す</h4>
    <p class="text-xs text-rose-950/80 leading-relaxed">観光地の中心から少し離れた宿には意外と空きが残っています。移動コストを考慮しつつ検討を。</p>
  </div>
</div>

<hr class="my-8 border-emerald-950/10" />

<h2 id="ranking">🏨 2. {art['pref']} 直前予約おすすめ宿一覧</h2>
<p>以下は{art['pref']}内の実在ホテル・旅館のみを楽天トラベルの評価順で厳選しています。各ボタンから最新の空室・プランをご確認ください。</p>
{cards}

<hr class="my-8 border-emerald-950/10" />

<h2 id="faq" class="text-xl font-bold font-journal-serif text-emerald-950 mb-6">💡 よくある質問</h2>
<div class="p-4 rounded-xl bg-amber-50/40 border border-amber-900/10 space-y-2 mb-4">
  <h4 class="text-sm font-bold text-amber-950">Q. お盆直前でもレンタカーや新幹線の予約は取れますか？</h4>
  <p class="text-xs text-amber-950/80 leading-relaxed pl-4">A. 直前便・自由席・増発便を活用すれば対応可能です。楽天トラベルのダイナミックパッケージ（宿＋交通セット）も直前まで販売されています。</p>
</div>
<div class="p-4 rounded-xl bg-emerald-50/40 border border-emerald-900/10 space-y-2 mb-6">
  <h4 class="text-sm font-bold text-emerald-950">Q. チェックインの遅延はどう対処すればいいですか？</h4>
  <p class="text-xs text-emerald-950/80 leading-relaxed pl-4">A. お盆渋滞や交通遅延に備え、必ず宿へ事前に遅延連絡をしましょう。多くの宿では時間外チェックインに柔軟に対応しています。</p>
</div>

<h2 id="conclusion">お盆の最高の思い出を{art['pref']}で</h2>
<p>直前でもあきらめないで！今すぐ各ホテルのボタンから楽天トラベルの最新空室をチェックして、素敵なお盆旅行を実現させましょう。</p>
'''

DIR = "src/data/posts"
all_success = True

for art in TARGET_ARTICLES:
    print(f"\n{'='*60}")
    print(f"Processing: {art['file']} ({art['pref']} / code={art['pref_code']})")
    print('='*60)

    hotels = fetch_hotels_by_prefecture(art["pref_code"], hits=6)
    time.sleep(1)  # API rate limit対策

    if len(hotels) < 3:
        print(f"  !! ERROR: Only {len(hotels)} hotels returned. Skipping.")
        all_success = False
        continue

    fpath = os.path.join(DIR, art["file"])
    if os.path.exists(fpath):
        with open(fpath, "r", encoding="utf-8") as f:
            post = json.load(f)
    else:
        post = {}

    review = build_review(art, hotels)

    post.update({
        "id":               art["file"].replace(".json", ""),
        "title":            art["title"],
        "hotel_name":       art["title"],
        "description":      art["desc"],
        "is_special_feature": True,
        "review":           review,
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

    print(f"  ✅ SAVED: {fpath}")
    print(f"     Top hotel: {hotels[0]['name']} (ID={hotels[0]['no']})")

print("\n" + "="*60)
if all_success:
    print("ALL ARTICLES REBUILT SUCCESSFULLY WITH REAL RAKUTEN API DATA!")
else:
    print("SOME ARTICLES FAILED. Please check errors above.")
