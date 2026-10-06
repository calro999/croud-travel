import os
import sys
import json
import random
import time
from datetime import datetime, timezone
import requests
from atproto import Client, client_utils

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

def load_posted_history():
    """過去にBlueskyで投稿した記事IDを読み込む"""
    if os.path.exists(BLUESKY_HISTORY_FILE):
        with open(BLUESKY_HISTORY_FILE, "r", encoding="utf-8") as f:
            return set(line.strip() for line in f if line.strip())
    return set()

def record_posted_history(post_id):
    """投稿した記事IDを履歴に記録する"""
    with open(BLUESKY_HISTORY_FILE, "a", encoding="utf-8") as f:
        f.write(f"{post_id}\n")

def select_best_post():
    """
    フォロワー増加に最も適した高品質記事を選定する。
    - 特集記事（10選・厳選まとめ等）または高評価宿（★4.3以上）
    - 未投稿のものを最優先
    """
    if not os.path.isdir(POSTS_DIR):
        print(f"[ERROR] Directory not found: {POSTS_DIR}")
        return None

    history = load_posted_history()
    all_files = [f for f in os.listdir(POSTS_DIR) if f.endswith(".json")]

    candidates = []
    fallback_candidates = []

    for f in all_files:
        post_path = os.path.join(POSTS_DIR, f)
        try:
            with open(post_path, "r", encoding="utf-8") as fp:
                data = json.load(fp)
                post_id = str(data.get("id", ""))
                if not post_id or not data.get("title"):
                    continue

                is_special = bool(data.get("is_special_feature"))
                rating = float(data.get("rating") or 0)
                image = data.get("image")

                # 画像があるものを対象とする
                if not image:
                    continue

                if is_special or rating >= 4.25:
                    if post_id not in history:
                        priority = 2 if is_special else 1
                        candidates.append((priority, data))
                    else:
                        fallback_candidates.append(data)
        except Exception:
            continue

    if candidates:
        candidates.sort(key=lambda x: (x[0], random.random()), reverse=True)
        sample_pool = candidates[:min(25, len(candidates))]
        selected = random.choice(sample_pool)[1]
        print(f"[SELECT] Selected unposted high-quality post: {selected.get('title')} (ID: {selected.get('id')})")
        return selected
    elif fallback_candidates:
        selected = random.choice(fallback_candidates)
        print(f"[SELECT] Re-promoting popular post: {selected.get('title')} (ID: {selected.get('id')})")
        return selected

    return None

def generate_post_caption_with_gemini(post_data):
    """
    Gemini API（最新モデル群をローテーション）を使って
    タイムラインでスクロールの手が止まる感情フック付きの投稿文を生成する
    """
    gemini_key = os.environ.get("GEMINI_API_KEY", "").strip()
    if not gemini_key:
        return None

    title = post_data.get("title", "")
    hotel_name = post_data.get("hotel_name", "")
    pref = post_data.get("prefecture", "")
    area = post_data.get("area", "")
    desc = post_data.get("description", "")
    rating = post_data.get("rating")
    rating_str = f"★{rating}" if rating else ""
    is_special = post_data.get("is_special_feature")

    system_prompt = (
        "あなたはBlueskyやXで万単位のフォロワーを持つ大人気トラベルインフルエンサーです。\n"
        "タイムラインを流し見している人が思わずスクロールの手を止め、「行きたい！」「今すぐ保存したい！」とフォローしたくなる素晴らしいポスト文を作成してください。\n"
        "【絶対厳守ルール】\n"
        "- 全体の文字数は110〜140文字程度（URLやハッシュタグはシステムが後から自動付与するため含めないでください）\n"
        "- 1行目は【感情が動く共感フック】（例:「〇〇に行くなら絶対ここ泊まってほしい…」「客室露天風呂が最高すぎた…」「朝食ビュッフェのクオリティが凄すぎる…」など）\n"
        "- 2行目以降で、具体的な【ホテル名/エリア名】と【泊まりたくなる具体的理由（グルメ、立地、温泉、絶景など）】を感情豊かに書く\n"
        "- ブログのタイトル直貼り感や「〜はいかがでしょうか」「魅力をご紹介」「徹底取材」といったAI・宣伝臭い表現は完全禁止\n"
        "- まとめ記事の場合は「独自調査」「厳選比較」のトーンとし、読者が得られるメリット（失敗しない宿選びなど）を伝える\n"
        "- URLやハッシュタグは出力せず、純粋な本文テキストのみを出力してください。"
    )

    user_prompt = f"""以下の旅行宿/特集を紹介するSNSポストを作成してください。

ホテル名/特集名: {hotel_name}
都道府県・エリア: {pref}（{area}）
クチコミ評価: {rating_str}
記事タイトル: {title}
宿の特徴・概要: {desc}
特集形式: {'厳選まとめ・比較特集' if is_special else '個別ホテルの詳細ルポ'}
"""

    models = random.sample(GEMINI_MODELS, len(GEMINI_MODELS))
    for model in models:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={gemini_key}"
        payload = {
            "contents": [{"parts": [{"text": f"{system_prompt}\n\n{user_prompt}"}]}],
            "generationConfig": {"temperature": 0.8, "maxOutputTokens": 300}
        }
        try:
            res = requests.post(url, json=payload, headers={"Content-Type": "application/json"}, timeout=20)
            if res.status_code == 200:
                data = res.json()
                candidates = data.get("candidates", [])
                if candidates:
                    parts = candidates[0].get("content", {}).get("parts", [])
                    if parts:
                        text = parts[0].get("text", "").strip()
                        if 70 <= len(text) <= 180:
                            print(f"[GEMINI] Generated engaging caption using {model}")
                            return text
        except Exception:
            continue
    return None

def build_fallback_caption(post_data):
    """
    Gemini未設定または失敗時の感情フック付きフォールバックキャプション
    """
    hotel_name = post_data.get("hotel_name", "")
    pref = post_data.get("prefecture", "")
    is_special = post_data.get("is_special_feature")
    rating = post_data.get("rating")
    rating_text = f"（評価★{rating}）" if rating else ""

    if is_special:
        hooks = [
            f"{pref}旅行で宿選びに迷ったら絶対ここ見てほしい…！✨",
            f"次の連休に行きたい…！{pref}の絶景＆美食宿を厳選比較🍁",
            f"失敗したくない人へ！{pref}で本気でおすすめしたい名宿まとめ♨️"
        ]
        hook = random.choice(hooks)
        body = f"エリア内の人気宿を独自調査＆徹底比較。ご当地グルメや温泉、アクセスなど旅の目的に合わせて選べる保存必須のガイドです！"
        return f"{hook}\n\n{hotel_name}。\n{body}"
    else:
        hooks = [
            f"{pref}で泊まるなら絶対ここ推したい…！🏨✨",
            f"お部屋の居心地もお風呂も最高すぎた…🌿",
            f"週末のご褒美旅に全力でおすすめしたい名宿♨️"
        ]
        hook = random.choice(hooks)
        body = f"{pref}の「{hotel_name}」{rating_text}。観光やグルメ巡りの拠点にも抜群で、心からリフレッシュできる癒やしの滞在が叶います。"
        return f"{hook}\n\n{body}"

def select_targeted_hashtags(post_data):
    """
    宿のタイプや立地に合わせて適切なターゲット層に届くハッシュタグを選定する
    """
    title = post_data.get("title", "")
    hotel_name = post_data.get("hotel_name", "")
    pref = post_data.get("prefecture", "")
    categories = post_data.get("categories", [])
    cat_str = " ".join(categories)

    tags = ["国内旅行"]

    # 1. 地域タグ（都道府県・主要都市）
    if pref and pref != "全国":
        pref_short = pref.replace("都", "").replace("府", "").replace("県", "")
        tags.append(f"{pref_short}旅行")

    # 主要都市名や駅名があれば特化タグを追加
    combined_name = f"{title} {hotel_name}"
    for spot in ["博多", "天神", "札幌", "函館", "小樽", "仙台", "浅草", "新宿", "銀座", "横浜", "鎌倉", "箱根", "熱海", "軽井沢", "金沢", "京都", "嵐山", "大阪", "難波", "神戸", "奈良", "道後", "別府", "由布院", "那覇", "宮古島", "石垣島", "伊豆"]:
        if spot in combined_name and f"{spot}旅行" not in tags:
            tags.append(f"{spot}ホテル" if "ホテル" in combined_name else f"{spot}旅行")
            break

    # 2. テーマ・宿泊スタイルに合わせたタグ
    if "温泉" in combined_name or "温泉旅行" in cat_str:
        tags.append("温泉宿" if len(tags) >= 3 else "温泉旅行")
    elif "子連れ" in combined_name or "ファミリー" in cat_str:
        tags.append("子連れ旅行")
    elif "グルメ" in combined_name or "肉" in combined_name or "カニ" in combined_name:
        tags.append("ご当地グルメ")
    else:
        tags.append("ホテルステイ")

    tags.append("旅行好きな人と繋がりたい")

    # 重複除去して最大4個
    seen = set()
    result = []
    for t in tags:
        if t not in seen:
            seen.add(t)
            result.append(t)
        if len(result) >= 4:
            break
    return result

def build_post_content(post_data):
    """
    Bluesky投稿用のTextBuilderを構築する
    """
    post_id = str(post_data.get("id"))
    affiliate_url = post_data.get("affiliate_url", "")
    article_url = f"{SITE_BASE_URL}/posts/{post_id}"

    # 1. キャプション取得（Geminiまたはフック付きフォールバック）
    caption = generate_post_caption_with_gemini(post_data)
    if not caption:
        caption = build_fallback_caption(post_data)

    tb = client_utils.TextBuilder()
    tb.text(caption.strip() + "\n\n")

    # 記事リンク
    tb.text("📖 詳しい宿泊ルポ: ")
    tb.link("記事を読む", article_url)
    tb.text("\n")

    # 楽天アフィリエイトリンク
    if affiliate_url:
        tb.text("✈️ 楽天トラベル: ")
        tb.link("空室・宿泊プランを見る", affiliate_url)
        tb.text("\n\n")
    else:
        tb.text("\n")

    # ターゲットを絞ったハッシュタグ
    tags = select_targeted_hashtags(post_data)
    for i, t in enumerate(tags):
        tb.tag(f"#{t}", t)
        if i < len(tags) - 1:
            tb.text(" ")

    return tb

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

        # 長辺を最大1600pxにリサイズ
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

def collect_post_images(post_data):
    """
    外観・客室・風呂・料理など複数画像（最大4枚）を取得・軽量化する
    """
    urls = []
    main_image = post_data.get("image")
    if main_image:
        urls.append(main_image)

    other_images = post_data.get("other_images") or []
    for img in other_images:
        if img and img not in urls:
            urls.append(img)
        if len(urls) >= 4:
            break

    image_bytes_list = []
    alts = []
    hotel_name = post_data.get("hotel_name") or post_data.get("title", "旅行宿")

    headers = {"User-Agent": "Mozilla/5.0"}
    for idx, u in enumerate(urls[:4]):
        try:
            res = requests.get(u, headers=headers, timeout=12)
            if res.status_code == 200 and len(res.content) > 1000:
                opt_bytes = optimize_image_bytes(res.content)
                image_bytes_list.append(opt_bytes)
                alts.append(f"{hotel_name} 写真 {idx + 1}")
        except Exception as e:
            print(f"[WARN] Failed to fetch image {u}: {e}")

    return image_bytes_list, alts

def post_to_bluesky():
    print(f"[{datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')}] Starting Bluesky auto-post task...")

    post_data = select_best_post()
    if not post_data:
        print("[ERROR] No post data selected. Exiting.")
        return False

    client = Client()
    try:
        client.login(BLUESKY_HANDLE, APP_PASSWORD)
        print(f"[AUTH] Logged in to Bluesky as {BLUESKY_HANDLE}")
    except Exception as e:
        print(f"[ERROR] Failed to login to Bluesky: {e}")
        return False

    tb = build_post_content(post_data)
    images, alts = collect_post_images(post_data)

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

        record_posted_history(str(post_data.get("id")))
        return True
    except Exception as e:
        print(f"[ERROR] Failed to send post to Bluesky: {e}")
        return False

if __name__ == "__main__":
    success = post_to_bluesky()
    if not success:
        sys.exit(1)
