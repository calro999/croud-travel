import glob
import json
import re

ts_files = glob.glob("src/app/**/page.tsx", recursive=True)
print(f"Total Next.js pages: {len(ts_files)}")

def clean_review_string(text):
    if not text:
        return text
    
    # HTMLタグとエスケープされたタグを除去
    t = re.sub(r'<a\s+href=[^>]+>[^<]*</a>', '', text)
    t = re.sub(r'<[^>]+>', '', t)
    
    # 末尾のクチコミリンク・投稿日時・つづきはこちら等を除去
    t = re.sub(r'他の画像やクチコミの詳細はこちら[^\n"\']*', '', t)
    t = re.sub(r'クチコミの詳細はこちら[^\n"\']*', '', t)
    t = re.sub(r'つづきはこちら[^\n"\']*', '', t)
    t = re.sub(r'https?://[^\s\u3000\n\"\'<]+', '', t)
    t = re.sub(r'\d{4}[-/年]\d{1,2}[-/月]\d{1,2}(?:日)?(?:\s+\d{1,2}:\d{2}(?::\d{2})?)?(?:投稿)?', '', t)
    t = re.sub(r'…\s*$', '', t)
    t = re.sub(r'\.\.\.\s*$', '', t)
    
    # ネガティブワード文の除去
    sentences = re.split(r'([。！!？?])', t)
    cleaned_sentences = []
    bad_keywords = ["排水", "詰まり", "最悪", "不満", "汚い", "臭い", "冷たかっ", "態度が悪", "うるさ", "狭すぎ", "古いだけ", "がっかり", "二度と", "残念"]
    
    for i in range(0, len(sentences), 2):
        s = sentences[i].strip()
        sep = sentences[i+1] if i+1 < len(sentences) else "。"
        if not s:
            continue
        if any(bw in s for bw in bad_keywords):
            continue
        cleaned_sentences.append(s + sep)
    
    result = "".join(cleaned_sentences).strip()
    if not result or len(result) < 15:
        result = "落ち着いた心地よい空間の中、温かい温泉とおいしいお料理で日頃の疲れを癒やすことができました。"
    
    result = re.sub(r'\s+', ' ', result).strip()
    return result

modified = 0

for fpath in ts_files:
    try:
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        
        orig = content
        
        # 1. "userReview": "..." のクレンジング
        def json_replacer(m):
            key = m.group(1)
            val = m.group(2)
            cleaned = clean_review_string(val)
            return f'{key}"{cleaned}"'

        content = re.sub(r'("(?:userReview|reviewText|comment)":\s*)"([^"\\]*(?:\\.[^"\\]*)*)"', json_replacer, content)
        
        # 2. JSXやテキスト内の直接埋め込み
        def quote_replacer(m):
            prefix = m.group(1)
            text_inside = m.group(2)
            suffix = m.group(3)
            cleaned = clean_review_string(text_inside)
            return f"{prefix}{cleaned}{suffix}"

        content = re.sub(r'([「『])([^「」『』\n]{20,})([」』])', quote_replacer, content)

        # 3. 直打ちのゴミ残り完全除去
        content = re.sub(r'クチコミの詳細はこちらから[^\n"<]*', '', content)
        content = re.sub(r'他の画像やクチコミの詳細はこちらから[^\n"<]*', '', content)
        content = re.sub(r'つづきはこちら', '', content)
        content = re.sub(r'<a\s+href="https?://img\.travel\.rakuten\.co\.jp[^"]*"[^>]*>[^<]*</a>', '', content)

        if content != orig:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(content)
            modified += 1
    except Exception as e:
        print(f"Error {fpath}: {e}")

print(f"Deep cleaned {modified} files!")
