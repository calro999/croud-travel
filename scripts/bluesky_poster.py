import os
import sys
import json
import random
import time
from datetime import datetime, timezone
import requests
from atproto import Client, client_utils

# 観光地画像取得モジュール
try:
    from scripts.tourist_image_fetcher import fetch_tourist_spot_image
except ImportError:
    from tourist_image_fetcher import fetch_tourist_spot_image

POSTS_DIR = "src/data/posts"
BLUESKY_HISTORY_FILE = "bluesky_post_history.txt"
SITE_BASE_URL = "https://croud-travel.pages.dev"

# アカウント情報
BLUESKY_HANDLE = os.environ.get("BLUESKY_HANDLE", "travel-cloud.bsky.social")
APP_PASSWORD = os.environ.get("BLUESKY_APP_PASSWORD", "mxll-k37n-tgyx-usol")

# 最新Gemini対応モデル一覧（Gemini 1.5は完全廃止済みのため除外）
GEMINI_MODELS = [
    "gemini-3.7-flash",
    "gemini-3.6-flash",
    "gemini-3.5-flash",
    "gemini-3.5-flash-lite",
    "gemini-3.1-pro",
    "gemini-3.1-flash-lite",
    "gemini-3-flash",
    "gemini-2.5-pro",
    "gemini-2.5-flash",
    "gemini-2.5-flash-lite",
    "gemini-2.0-flash",
    "gemini-2.0-flash-lite"
]

# 47都道府県の地域魅力マスター
PREFECTURES_SHOWCASE = [
    {
        "code": "ishikawa", "name": "石川県", "area": "北陸",
        "catch": "情緒あふれる城下町と日本海の至高の幸",
        "spots": ["兼六園（雪吊りと名庭園）", "ひがし茶屋街（町並み散策＆金箔）", "金沢21世紀美術館（現代アート）", "近江町市場（極上海鮮丼）", "加賀温泉郷・山中温泉"],
        "gourmet": "のどぐろ、加賀料理、金沢おでん、治部煮、能登牛"
    },
    {
        "code": "kyoto", "name": "京都府", "area": "近畿",
        "catch": "千年の歴史が息づく古都の美と四季の彩り",
        "spots": ["清水寺（舞台からの絶景）", "嵐山・渡月橋（竹林の小径）", "伏見稲荷大社（千本鳥居）", "金閣寺・銀閣寺", "祇園・先斗町の路地"],
        "gourmet": "湯豆腐、京懐石、宇治抹茶スイーツ、おばんざい、にしんそば"
    },
    {
        "code": "hokkaido", "name": "北海道", "area": "北海道",
        "catch": "雄大な大自然パノラマと北の大地の極上グルメ",
        "spots": ["富良野・美瑛の丘", "小樽運河の夜景", "函館山からの100万ドル夜景", "知床世界自然遺産", "定山渓・登別温泉"],
        "gourmet": "海鮮丼、ジンギスカン、札幌味噌ラーメン、スープカレー、夕張メロン"
    },
    {
        "code": "fukuoka", "name": "福岡県", "area": "九州",
        "catch": "アジアの活気あふれる美食の街と歴史の港",
        "spots": ["太宰府天満宮", "糸島（絶景ビーチ＆おしゃれカフェ）", "中洲・天神の屋台街", "門司港レトロ", "福岡タワー＆百道浜"],
        "gourmet": "博多もつ鍋、水炊き、豚骨ラーメン、明太子、一口餃子"
    },
    {
        "code": "okinawa", "name": "沖縄県", "area": "沖縄",
        "catch": "エメラルドグリーンの海と琉球文化の楽園リゾート",
        "spots": ["美ら海水族館", "古宇利大橋（絶景ドライブ）", "万座毛", "首里城公園", "宮古島・石垣島の白砂ビーチ"],
        "gourmet": "沖縄そば、ゴーヤーチャンプルー、あぐー豚、海ぶどう、ブルーシールアイス"
    },
    {
        "code": "nagano", "name": "長野県", "area": "甲信越",
        "catch": "日本の屋根・雄大な北アルプスと名湯・善光寺",
        "spots": ["上高地（河童橋と大正池）", "地獄谷野猿公苑（スノーモンキー）", "国宝松本城", "善光寺", "白馬・志賀高原スノーリゾート"],
        "gourmet": "信州そば、信州牛、おやき、馬刺し、信州リンゴ"
    },
    {
        "code": "shizuoka", "name": "静岡県", "area": "東海",
        "catch": "富士山を仰ぐ絶景パノラマと伊豆・駿河湾の恵み",
        "spots": ["三島スカイウォーク（富士山展望）", "修善寺温泉・竹林の小径", "熱海サンビーチ", "白糸の滝", "夢の吊橋（寸又峡）"],
        "gourmet": "駿河湾の桜えび・生しらす、浜松餃子、富士宮やきそば、金目鯛、静岡茶"
    },
    {
        "code": "kanagawa", "name": "神奈川県", "area": "関東",
        "catch": "武家の古都・鎌倉と異国情緒の横浜、箱根温泉郷",
        "spots": ["鶴岡八幡宮＆高徳院鎌倉大仏", "箱根芦ノ湖＆大涌谷", "江の島＆湘南海岸", "横浜みなとみらい・赤レンガ倉庫", "横浜中華街"],
        "gourmet": "生しらす丼、中華街点心、葉山牛、箱根湯葉料理、崎陽軒シウマイ"
    },
    {
        "code": "hyogo", "name": "兵庫県", "area": "近畿",
        "catch": "港町神戸のおしゃれな街並みと日本屈指の名湯",
        "spots": ["城崎温泉（七田外湯めぐり）", "有馬温泉（日本三古湯）", "姫路城（世界遺産白鷺城）", "神戸北野異人館街", "淡路島（明石海峡大橋）"],
        "gourmet": "神戸牛、明石焼き、日本海松葉ガニ、丹波黒豆、灘の銘酒"
    },
    {
        "code": "nara", "name": "奈良県", "area": "近畿",
        "catch": "悠久の時を刻む古都・大仏と鹿が迎える癒やしの里",
        "spots": ["東大寺大仏殿＆奈良公園の鹿", "春日大社", "法隆寺（世界最古の木造建築）", "吉野山（千本桜）", "ならまちの町家散策"],
        "gourmet": "柿の葉寿司、三輪そうめん、大和茶、葛きり、飛鳥鍋"
    },
    {
        "code": "hiroshima", "name": "広島県", "area": "中国",
        "catch": "宮島・厳島神社の神秘と瀬戸内海の多島美",
        "spots": ["宮島・厳島神社（海に浮かぶ大鳥居）", "しまなみ海道（絶景サイクリング）", "尾道（坂の街と千光寺）", "原爆ドーム＆平和記念公園", "鞆の浦"],
        "gourmet": "広島お好み焼き、獲れたて牡蠣、尾道ラーメン、もみじ饅頭、穴子飯"
    },
    {
        "code": "oita", "name": "大分県", "area": "九州",
        "catch": "日本一の温泉湧出量！おんせん県のおもてなしと自然",
        "spots": ["別府地獄めぐり", "由布院・金鱗湖（朝霧の幻想美）", "九重“夢”大吊橋", "耶馬渓", "宇佐神宮"],
        "gourmet": "とり天、別府冷麺、豊後牛、関あじ・関さば、中津からあげ"
    },
    {
        "code": "kagoshima", "name": "鹿児島県", "area": "九州",
        "catch": "桜島の雄姿を望む南国の情熱と天然砂むし温泉",
        "spots": ["仙巌園からの桜島ビュー", "指宿温泉・砂むし会館", "霧島神宮", "屋久島（白谷雲水峡・縄文杉）", "知覧武家屋敷庭園"],
        "gourmet": "黒豚しゃぶしゃぶ、さつま揚げ、白熊かき氷、鶏飯、本格芋焼酎"
    },
    {
        "code": "miyagi", "name": "宮城県", "area": "東北",
        "catch": "杜の都・仙台の緑と日本三景・松島の美景",
        "spots": ["日本三景・松島湾クルーズ", "仙台城跡（伊達政宗公騎馬像）", "秋保温泉・鳴子温泉峡", "蔵王の御釜（エメラルド湖）", "瑞鳳殿"],
        "gourmet": "仙台牛たん焼き、ずんだ餅、三陸海鮮丼、笹かまぼこ、せり鍋"
    },
    {
        "code": "aomori", "name": "青森県", "area": "東北",
        "catch": "神秘の奥入瀬渓流と白神山地・ねぶたの熱気",
        "spots": ["奥入瀬渓流（苔とせせらぎ）", "十和田湖", "弘前城（桜と天守）", "白神山地・青池", "酸ヶ湯温泉（ヒバ千人風呂）"],
        "gourmet": "大間のマグロ、青森りんごスイーツ、せんべい汁、いちご煮、十三湖しじみラーメン"
    }
]

def load_posted_history():
    """過去にBlueskyで投稿した記事IDを読み込む"""
    if os.path.exists(BLUESKY_HISTORY_FILE):
        with open(BLUESKY_HISTORY_FILE, "r", encoding="utf-8") as f:
            return [line.strip() for line in f if line.strip()]
    return []

def record_posted_history(post_id):
    """投稿したIDを履歴に記録する"""
    with open(BLUESKY_HISTORY_FILE, "a", encoding="utf-8") as f:
        f.write(f"{post_id}\n")

def decide_post_mode(history_list):
    """
    交互投稿モード判定:
    偶数回: 🏨 厳選ホテル・特集ポスト（アフィリンク付き）
    奇数回: 🌸 地域魅力・観光スポット紹介ポスト（純コンテンツ / アフィなし・フォロワー獲得特化）
    """
    count = len(history_list)
    return "showcase" if count % 2 == 1 else "hotel"

def optimize_image_bytes(raw_bytes, max_bytes=900000):
    """
    BlueskyのBlobサイズ上限（2MB、推奨1MB未満）に合わせて画像を軽量化する
    """
    if len(raw_bytes) <= max_bytes:
        return raw_bytes

    try:
        from PIL import Image
        import io
        img = Image.open(io.BytesIO(raw_bytes))
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")

        max_dim = 1600
        if max(img.size) > max_dim:
            img.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)

        quality = 85
        while quality >= 40:
            out_io = io.BytesIO()
            img.save(out_io, format="JPEG", quality=quality, optimize=True)
            res = out_io.getvalue()
            if len(res) <= max_bytes:
                return res
            quality -= 15
        return res
    except Exception as e:
        print(f"[WARN] Failed to optimize image: {e}")
        return raw_bytes[:max_bytes] if len(raw_bytes) > 2000000 else raw_bytes

# ==========================================
# 1. 🏨 ホテル・特集ポスト関連（アフィリンク付）
# ==========================================
def select_best_hotel_post(history_set):
    if not os.path.isdir(POSTS_DIR):
        return None

    all_files = [f for f in os.listdir(POSTS_DIR) if f.endswith(".json")]
    candidates = []
    fallback_candidates = []

    for f in all_files:
        post_path = os.path.join(POSTS_DIR, f)
        try:
            with open(post_path, "r", encoding="utf-8") as fp:
                data = json.load(fp)
                post_id = str(data.get("id", ""))
                if not post_id or not data.get("title") or not data.get("image"):
                    continue

                is_special = bool(data.get("is_special_feature"))
                rating = float(data.get("rating") or 0)

                if is_special or rating >= 4.25:
                    if post_id not in history_set:
                        priority = 2 if is_special else 1
                        candidates.append((priority, data))
                    else:
                        fallback_candidates.append(data)
        except Exception:
            continue

    if candidates:
        candidates.sort(key=lambda x: (x[0], random.random()), reverse=True)
        return random.choice(candidates[:min(25, len(candidates))])[1]
    elif fallback_candidates:
        return random.choice(fallback_candidates)
    return None

def build_hotel_post_content(post_data):
    post_id = str(post_data.get("id"))
    affiliate_url = post_data.get("affiliate_url", "")
    article_url = f"{SITE_BASE_URL}/posts/{post_id}"
    hotel_name = post_data.get("hotel_name", "")
    pref = post_data.get("prefecture", "")
    is_special = post_data.get("is_special_feature")
    rating = post_data.get("rating")
    rating_text = f"（評価★{rating}）" if rating else ""

    # 共感フックと本文
    if is_special:
        hooks = [
            f"{pref}旅行で宿選びに迷ったら絶対ここ見てほしい…！✨",
            f"次の連休に行きたい…！{pref}の絶景＆美食宿を厳選比較🍁",
            f"失敗したくない人へ！{pref}で本気でおすすめしたい名宿まとめ♨️"
        ]
        hook = random.choice(hooks)
        body = f"{hook}\n\n【{hotel_name}】\nエリア内の人気宿を独自調査＆徹底比較。ご当地グルメや温泉、アクセスなど旅の目的に合わせて選べる保存必須のガイドです！"
    else:
        hooks = [
            f"{pref}で泊まるなら絶対ここ推したい…！🏨✨",
            f"お部屋の居心地もお風呂も最高すぎた…🌿",
            f"週末のご褒美旅に全力でおすすめしたい名宿♨️"
        ]
        hook = random.choice(hooks)
        body = f"{hook}\n\n{pref}の「{hotel_name}」{rating_text}。観光やグルメ巡りの拠点にも抜群で、心からリフレッシュできる癒やしの滞在が叶います。"

    tb = client_utils.TextBuilder()
    tb.text(body.strip() + "\n\n")

    tb.text("📖 詳しい宿泊ルポ: ")
    tb.link("記事を読む", article_url)
    tb.text("\n")

    if affiliate_url:
        tb.text("✈️ 楽天トラベル: ")
        tb.link("空室・宿泊プランを見る", affiliate_url)
        tb.text("\n\n")
    else:
        tb.text("\n")

    # タグ
    tags = ["国内旅行"]
    if pref and pref != "全国":
        tags.append(pref.replace("都", "").replace("府", "").replace("県", "") + "旅行")
    if "温泉" in hotel_name or (post_data.get("categories") and "温泉旅行" in post_data.get("categories")):
        tags.append("温泉宿")
    else:
        tags.append("ホテルステイ")
    tags.append("旅行好きな人と繋がりたい")

    for i, t in enumerate(tags[:4]):
        tb.tag(f"#{t}", t)
        if i < len(tags[:4]) - 1:
            tb.text(" ")

    return tb

def collect_hotel_images(post_data):
    urls = []
    if post_data.get("image"):
        urls.append(post_data.get("image"))
    for img in (post_data.get("other_images") or []):
        if img and img not in urls:
            urls.append(img)
        if len(urls) >= 4:
            break

    image_bytes_list = []
    alts = []
    hotel_name = post_data.get("hotel_name") or "厳選ホテル"
    headers = {"User-Agent": "Mozilla/5.0"}

    for idx, u in enumerate(urls[:4]):
        try:
            res = requests.get(u, headers=headers, timeout=12)
            if res.status_code == 200 and len(res.content) > 1000:
                image_bytes_list.append(optimize_image_bytes(res.content))
                alts.append(f"{hotel_name} 写真 {idx + 1}")
        except Exception as e:
            print(f"[WARN] Failed to fetch image: {e}")
    return image_bytes_list, alts

# ==========================================
# 2. 🌸 地域魅力・観光スポットポスト（純コンテンツ）
# ==========================================
def select_showcase_pref(history_set):
    """まだ投稿していない地域、またはランダムで地域を選択"""
    unposted = [p for p in PREFECTURES_SHOWCASE if f"showcase_{p['code']}" not in history_set]
    if unposted:
        return random.choice(unposted)
    return random.choice(PREFECTURES_SHOWCASE)

def collect_pref_showcase_images(pref_info):
    """
    その都道府県の代表的な観光地・名所の実写画像を優先取得（最大4枚）。
    観光地画像が不足する場合は既存記事の宿画像で安全にフォールバック。
    """
    pref_name = pref_info["name"]
    spots = pref_info.get("spots", [])
    headers = {"User-Agent": "Mozilla/5.0"}

    image_bytes_list = []
    alts = []

    # 1. 観光スポット名からWikipedia/Wikimediaの実写横長画像を取得
    print(f"[IMAGES] Fetching tourist spot images for {pref_name}...")
    for spot in spots:
        if len(image_bytes_list) >= 4:
            break
        try:
            spot_img_info = fetch_tourist_spot_image(spot, min_width=600)
            if spot_img_info and spot_img_info.get("url"):
                u = spot_img_info["url"]
                res = requests.get(u, headers=headers, timeout=10)
                if res.status_code == 200 and len(res.content) > 2000:
                    optimized = optimize_image_bytes(res.content)
                    image_bytes_list.append(optimized)
                    alts.append(f"{pref_name}・{spot_img_info.get('title', spot)}")
                    print(f"  [SPOT-IMG] Added: {spot} ({spot_img_info['title']}) [{spot_img_info['width']}x{spot_img_info['height']}]")
        except Exception as e:
            print(f"  [WARN] Failed to fetch spot image for {spot}: {e}")

    # 2. 4枚に満たない場合、該当都道府県の記事から宿画像を補完
    if len(image_bytes_list) < 4 and os.path.isdir(POSTS_DIR):
        all_files = [f for f in os.listdir(POSTS_DIR) if f.endswith(".json")]
        matched_images = []
        for f in all_files:
            p_path = os.path.join(POSTS_DIR, f)
            try:
                with open(p_path, "r", encoding="utf-8") as fp:
                    d = json.load(fp)
                    if d.get("prefecture") == pref_name and d.get("image"):
                        if d.get("image") not in matched_images:
                            matched_images.append(d.get("image"))
                    for o in (d.get("other_images") or []):
                        if o and o not in matched_images:
                            matched_images.append(o)
                    if len(matched_images) >= 6:
                        break
            except Exception:
                continue

        for u in matched_images:
            if len(image_bytes_list) >= 4:
                break
            try:
                res = requests.get(u, headers=headers, timeout=10)
                if res.status_code == 200 and len(res.content) > 1000:
                    image_bytes_list.append(optimize_image_bytes(res.content))
                    alts.append(f"{pref_name}の魅力的な宿泊施設・風景")
            except Exception:
                continue

    return image_bytes_list, alts

def build_showcase_post_content(pref_info):
    """
    フォロワー増加に特化した純観光コンテンツポスト
    アフィリンクなし！共感・保存・リポストを最大化する構成
    """
    pref_name = pref_info["name"]
    code = pref_info["code"]
    catch = pref_info["catch"]
    spots = pref_info["spots"][:4]
    gourmet = pref_info["gourmet"]
    pref_url = f"{SITE_BASE_URL}/prefectures/{code}"

    hooks = [
        f"一生に一度は行きたい…！{pref_name}の魅力が詰まった見どころまとめ✨",
        f"次の旅行先に全力でおすすめしたい…！{pref_name}の絶景＆名所4選🌸",
        f"週末や連休に行きたい！{pref_name}（{catch}）の保存必須スポット🌿"
    ]
    hook = random.choice(hooks)

    spots_text = "\n".join([f"📍 {s}" for s in spots])

    body = f"""{hook}

{spots_text}

🍴 必食ご当地グルメ:
{gourmet}

四季折々の絶景と美食が待つ{pref_name}。旅行の計画・宿探しの参考にぜひ保存（ブックマーク）してご活用ください！"""

    tb = client_utils.TextBuilder()
    tb.text(body.strip() + "\n\n")

    tb.text(f"🗺️ {pref_name}観光完全ガイド: ")
    tb.link("特集ページを見る", pref_url)
    tb.text("\n\n")

    pref_short = pref_name.replace("都", "").replace("府", "").replace("県", "")
    tb.tag(f"#{pref_short}旅行", f"{pref_short}旅行")
    tb.text(" ")
    tb.tag(f"#{pref_short}観光", f"{pref_short}観光")
    tb.text(" ")
    tb.tag("#国内旅行", "国内旅行")
    tb.text(" ")
    tb.tag("#旅行好きな人と繋がりたい", "旅行好きな人と繋がりたい")

    return tb

ENGAGEMENT_HISTORY_FILE = "bluesky_engagement_history.txt"
DAILY_POST_LIMIT = 4 # 1日の最大新規投稿数（初期アカウントのスパム判定を確実に防ぐ）

def load_engagement_history():
    if os.path.exists(ENGAGEMENT_HISTORY_FILE):
        with open(ENGAGEMENT_HISTORY_FILE, "r", encoding="utf-8") as f:
            return set(line.strip() for line in f if line.strip())
    return set()

def record_engagement_history(identifier):
    with open(ENGAGEMENT_HISTORY_FILE, "a", encoding="utf-8") as f:
        f.write(f"{identifier}\n")

def check_today_posts_count(client):
    """
    当日の投稿数（UTC/JST）をチェックし、1日の上限に達しているか判定する
    """
    try:
        author_feed = client.get_author_feed(actor=client.me.did, limit=20)
        today_str = datetime.now(timezone.utc).strftime("%Y-%m-%d")
        today_posts = 0
        for item in author_feed.feed:
            post = item.post
            if post.indexed_at and post.indexed_at.startswith(today_str):
                today_posts += 1
        return today_posts
    except Exception as e:
        print(f"[WARN] Failed to fetch author feed: {e}")
        return 0

def run_engagement_cycle(client):
    """
    旅行に行きたそうな一般ユーザーのポストを検索し、自然にいいね・フォローを行う
    - いいね: 2〜3件
    - フォロー: 1件
    """
    print("[ENGAGE] Running safe engagement cycle (Likes & Follows)...")
    search_queries = [
        "旅行行きたい",
        "温泉行きたい",
        "旅行計画",
        "温泉行ってきた",
        "国内旅行行きたい",
        "ホテルステイしたい",
        "京都行きたい",
        "北海道行きたい",
        "沖縄行きたい"
    ]
    query = random.choice(search_queries)
    engaged_history = load_engagement_history()

    try:
        res = client.app.bsky.feed.search_posts(params={"q": query, "limit": 15})
        posts = res.posts or []
        random.shuffle(posts)

        likes_done = 0
        follows_done = 0

        for p in posts:
            author_did = p.author.did
            post_uri = p.uri
            post_cid = p.cid

            # 自分自身やBotっぽい相手、すでにリアクション済みの相手をスキップ
            if author_did == client.me.did or post_uri in engaged_history:
                continue

            # いいね処理（最大2件）
            if likes_done < 2:
                try:
                    time.sleep(random.uniform(1.5, 3.5))
                    client.like(uri=post_uri, cid=post_cid)
                    record_engagement_history(post_uri)
                    likes_done += 1
                    print(f"[ENGAGE-LIKE] Liked post from @{p.author.handle}: {p.record.text[:30].replace(chr(10), ' ')}")
                except Exception as e:
                    print(f"[ENGAGE-WARN] Like failed: {e}")

            # フォロー処理（最大1人）
            if follows_done < 1 and author_did not in engaged_history:
                try:
                    time.sleep(random.uniform(2.0, 4.0))
                    client.follow(subject=author_did)
                    record_engagement_history(author_did)
                    follows_done += 1
                    print(f"[ENGAGE-FOLLOW] Followed travel enthusiast: @{p.author.handle}")
                except Exception as e:
                    print(f"[ENGAGE-WARN] Follow failed: {e}")

            if likes_done >= 2 and follows_done >= 1:
                break

        print(f"[ENGAGE-SUMMARY] Completed: {likes_done} likes, {follows_done} follows.")
        return True
    except Exception as e:
        print(f"[ENGAGE-ERROR] Search or engagement failed: {e}")
        return False

# ==========================================
# メイン実行処理
# ==========================================
def post_to_bluesky():
    print(f"[{datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')}] Starting Bluesky auto-post task...")

    history_list = load_posted_history()
    history_set = set(history_list)
    mode = decide_post_mode(history_list)
    print(f"[MODE] Current post mode: {mode.upper()} (Total past posts: {len(history_list)})")

    client = Client()
    try:
        client.login(BLUESKY_HANDLE, APP_PASSWORD)
        print(f"[AUTH] Logged in to Bluesky as {BLUESKY_HANDLE}")
    except Exception as e:
        print(f"[ERROR] Failed to login to Bluesky: {e}")
        return False

    # 1. 今日の投稿数上限チェック（初日・初期アカウントのスパム判定防止）
    today_count = check_today_posts_count(client)
    print(f"[RATE-CHECK] Today's posts so far: {today_count} (Limit: {DAILY_POST_LIMIT})")

    # 本日の投稿上限に達している場合は、新規ポストをスキップしてエンゲージメント（いいね・フォロー）のみ実施
    if today_count >= DAILY_POST_LIMIT:
        print(f"[RATE-LIMIT] Daily post limit reached ({today_count}/{DAILY_POST_LIMIT}). Skipping new post to protect account reputation.")
        run_engagement_cycle(client)
        print("[COMPLETE] Safe engagement finished. Exiting safely.")
        return True

    # 2. 新規投稿処理
    if mode == "showcase":
        pref_info = select_showcase_pref(history_set)
        print(f"[SELECT] Selected Prefecture Showcase: {pref_info['name']}")
        tb = build_showcase_post_content(pref_info)
        images, alts = collect_pref_showcase_images(pref_info)
        record_id = f"showcase_{pref_info['code']}"
    else:
        post_data = select_best_hotel_post(history_set)
        if not post_data:
            print("[ERROR] No hotel post data found.")
            return False
        print(f"[SELECT] Selected Hotel Post: {post_data.get('title')} (ID: {post_data.get('id')})")
        tb = build_hotel_post_content(post_data)
        images, alts = collect_hotel_images(post_data)
        record_id = str(post_data.get("id"))

    try:
        if len(images) > 1:
            response = client.send_images(
                text=tb,
                images=images,
                image_alts=alts
            )
            print(f"[SUCCESS] Posted with {len(images)} images! URI: {response.uri}")
        elif len(images) == 1:
            response = client.send_image(
                text=tb,
                image=images[0],
                image_alt=alts[0]
            )
            print(f"[SUCCESS] Posted with 1 image! URI: {response.uri}")
        else:
            response = client.send_post(text=tb)
            print(f"[SUCCESS] Posted text only! URI: {response.uri}")

        record_posted_history(record_id)

        # 投稿後に自然なペースでエンゲージメントを実施
        time.sleep(random.uniform(3.0, 6.0))
        run_engagement_cycle(client)
        return True
    except Exception as e:
        print(f"[ERROR] Failed to send post to Bluesky: {e}")
        return False

if __name__ == "__main__":
    success = post_to_bluesky()
    if not success:
        sys.exit(1)
