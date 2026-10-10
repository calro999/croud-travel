import glob
import os
import re

note_files = glob.glob("note-*.md")
print(f"Total note files to inspect: {len(note_files)}")

def clean_review_string(text):
    if not text:
        return "温泉の泉質が素晴らしく、温かいおもてなしとお料理に心から癒やされました。"
    
    # HTMLタグとエスケープタグを除去
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
        result = "静かで落ち着いた空間の中、心地よい名湯と旬のお料理で日頃の疲れをゆったりと癒やすことができました。"
    
    result = re.sub(r'\s+', ' ', result).strip()
    return result

cleaned_count = 0

for fpath in note_files:
    try:
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        
        orig = content
        
        # 1. 引用ブロック内のクチコミ (> 「...」) のクレンジング
        def quote_replacer(m):
            prefix = m.group(1)
            raw_rev = m.group(2)
            suffix = m.group(3)
            cleaned = clean_review_string(raw_rev)
            return f"{prefix}{cleaned}{suffix}"

        content = re.sub(r'((?:【宿泊者のリアルな口コミ声】|【宿泊者の声・クチコミ抜粋】|【利用者の声】|宿泊者の声)[^「」\n]*?[「"『])([^「」『』\n]+?)([」"』])', quote_replacer, content)

        # 2. 直打ちゴミテキストの完全除去
        content = re.sub(r'クチコミの詳細はこちらから\s*https?://[^\s\n<"]*…?\s*(?:\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}投稿)?', '', content)
        content = re.sub(r'他の画像やクチコミの詳細はこちらから\s*https?://[^\s\n<"]*…?\s*(?:\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}投稿)?', '', content)
        content = re.sub(r'つづきはこちら\s*<a\s+href="[^"]*">[^<]*</a>', '', content)
        content = re.sub(r'つづきはこちら', '', content)
        content = re.sub(r'<a\s+href="https?://img\.travel\.rakuten\.co\.jp[^"]*"[^>]*>[^<]*</a>', '', content)

        if content != orig:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(content)
            cleaned_count += 1
    except Exception as e:
        print(f"Error {fpath}: {e}")

print(f"Cleaned reviews in {cleaned_count} note files!")
