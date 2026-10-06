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

                # 画像とアフィリンクまたはサイトURLがあるものを対象とする
                if not image:
                    continue

                # 特集記事または評価4.25以上の高品質コンテンツ
                if is_special or rating >= 4.25:
                    if post_id not in history:
                        # 未投稿を優先
                        priority = 2 if is_special else 1
                        candidates.append((priority, data))
                    else:
                        fallback_candidates.append(data)
        except Exception:
            continue

    if candidates:
        # 優先度（特集記事をやや多めに、高評価宿も混ぜる）
        candidates.sort(key=lambda x: (x[0], random.random()), reverse=True)
        # 上位候補からランダムにピックアップして均一化を防ぐ
        sample_pool = candidates[:min(20, len(candidates))]
        selected = random.choice(sample_pool)[1]
        print(f"[SELECT] Selected unposted high-quality post: {selected.get('title')} (ID: {selected.get('id')})")
        return selected
    elif fallback_candidates:
        # 全て投稿済みの場合は過去の高評価からランダム
        selected = random.choice(fallback_candidates)
        print(f"[SELECT] Re-promoting popular post: {selected.get('title')} (ID: {selected.get('id')})")
        return selected

    return None

def generate_post_caption_with_gemini(post_data):
    """
    Gemini API（最新モデル群をローテーション）を使って
    フォロワーが増える魅力的で共感を呼ぶBlueskyポスト文面を生成する
    """
    gemini_key = os.environ.get("GEMINI_API_KEY", "").strip()
    if not gemini_key:
        return None

    title = post_data.get("title", "")
    hotel_name = post_data.get("hotel_name", "")
    pref = post_data.get("prefecture", "")
    desc = post_data.get("description", "")
    rating = post_data.get("rating")
    rating_str = f"★{rating}" if rating else ""
    is_special = post_data.get("is_special_feature")

    system_prompt = (
        "あなたはSNS（Bluesky/X）で10万フォロワーを持つ人気の旅インフルエンサー・観光ライターです。\n"
        "タイムラインで目を引き、「行きたい！」「今すぐ保存したい！」とフォロワーが増える魅力的な投稿文を作成してください。\n"
        "【厳守ルール】\n"
        "- 文字数は110〜150文字程度（URLやハッシュタグは後から自動付与するため含めないでください）\n"
        "- 1行目は目を惹くキャッチーな見出し（絵文字付き）\n"
        "- 2行目以降は具体的な情景やおすすめポイント（温泉、絶景、ご当地グルメ、居心地など）を生き生きと伝える\n"
        "- 「〜はいかがでしょうか」といった機械的・AI的な表現は絶対に使わず、旅行好きに響く熱量の高い生きた言葉で書く\n"
        "- URLやハッシュタグは一切出力しないでください。純粋な紹介文面のみを出力してください。"
    )

    user_prompt = f"""以下の旅行記事を紹介するSNS投稿文（110〜150文字程度）を作成してください。

タイトル: {title}
対象施設/テーマ: {hotel_name}
都道府県: {pref}
評価: {rating_str}
概要: {desc}
特集区分: {'厳選特集まとめ' if is_special else '個別宿ルポ'}
"""

    models = random.sample(GEMINI_MODELS, len(GEMINI_MODELS))
    for model in models:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={gemini_key}"
        payload = {
            "contents": [{"parts": [{"text": f"{system_prompt}\n\n{user_prompt}"}]}],
            "generationConfig": {"temperature": 0.75, "maxOutputTokens": 300}
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
                        if 80 <= len(text) <= 200:
                            print(f"[GEMINI] Generated post text using {model}")
                            return text
        except Exception as e:
            continue
    return None

def build_post_content(post_data):
    """
    Bluesky投稿用のTextBuilderとメタ情報を構築する
    """
    post_id = str(post_data.get("id"))
    title = post_data.get("title", "")
    hotel_name = post_data.get("hotel_name", "")
    pref = post_data.get("prefecture", "")
    affiliate_url = post_data.get("affiliate_url", "")
    article_url = f"{SITE_BASE_URL}/posts/{post_id}"
    is_special = post_data.get("is_special_feature")

    # 1. Geminiによる高品質キャプション（利用可能な場合）
    caption = generate_post_caption_with_gemini(post_data)

    # 2. フォールバック（Gemini未設定時またはエラー時も高クオリティな文面）
    if not caption:
        if is_special:
            caption = f"✨【{pref}・厳選旅ガイド】\n{title[:65]}\n\n失敗しない宿選びや見どころの比較ポイントを徹底取材！次の旅行計画にぜひ保存してお役立てください。"
        else:
            rating = post_data.get("rating")
            rating_text = f"（評価★{rating}）" if rating else ""
            caption = f"🌿【{pref}のおすすめ宿】{hotel_name}{rating_text}\n{title[:55]}\n\n旅の疲れを解きほぐす空間と温かいおもてなし。週末旅行やご褒美ステイにおすすめの一軒です。"

    # ハッシュタグの選定
    tags = ["国内旅行", "旅行好きな人と繋がりたい"]
    if pref and pref != "全国":
        tags.append(pref.replace("都", "").replace("府", "").replace("県", "") + "旅行")
    if "温泉" in title or "温泉" in hotel_name:
        tags.append("温泉旅行")
    elif "ホテル" in title or "ホテル" in hotel_name:
        tags.append("ホテルステイ")

    tb = client_utils.TextBuilder()
    tb.text(caption.strip() + "\n\n")

    # 記事リンク
    tb.text("📖 詳しい旅行ルポ: ")
    tb.link("記事を読む", article_url)
    tb.text("\n")

    # 楽天アフィリエイトリンク（空室・公式プラン）
    if affiliate_url:
        tb.text("✈️ 楽天トラベル: ")
        tb.link("宿泊プラン・空室を見る", affiliate_url)
        tb.text("\n\n")
    else:
        tb.text("\n")

    # ハッシュタグ付与
    for i, t in enumerate(tags[:4]):
        tb.tag(f"#{t}", t)
        if i < len(tags[:4]) - 1:
            tb.text(" ")

    return tb

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
    image_url = post_data.get("image")
    alt_text = post_data.get("hotel_name") or post_data.get("title", "")

    # 画像取得
    image_bytes = None
    if image_url:
        try:
            res = requests.get(image_url, headers={"User-Agent": "Mozilla/5.0"}, timeout=15)
            if res.status_code == 200 and len(res.content) > 1000:
                image_bytes = res.content
        except Exception as e:
            print(f"[WARN] Failed to fetch image: {e}")

    try:
        if image_bytes:
            response = client.send_image(
                text=tb,
                image=image_bytes,
                image_alt=alt_text[:200]
            )
            print(f"[SUCCESS] Posted with image! URI: {response.uri}")
        else:
            response = client.send_post(text=tb)
            print(f"[SUCCESS] Posted text! URI: {response.uri}")

        record_posted_history(str(post_data.get("id")))
        return True
    except Exception as e:
        print(f"[ERROR] Failed to send post to Bluesky: {e}")
        return False

if __name__ == "__main__":
    success = post_to_bluesky()
    if not success:
        sys.exit(1)
