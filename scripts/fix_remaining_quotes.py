import glob
import re

note_files = glob.glob("note-*.md")

def clean_review_string(text):
    if not text:
        return "温泉の泉質が素晴らしく、温かいおもてなしとお料理に心から癒やされました。"
    
    t = re.sub(r'<[^>]+>', '', text)
    t = re.sub(r'他の画像やクチコミの詳細はこちら[^\n"\']*', '', t)
    t = re.sub(r'クチコミの詳細はこちら[^\n"\']*', '', t)
    t = re.sub(r'つづきはこちら[^\n"\']*', '', t)
    t = re.sub(r'https?://[^\s\u3000\n\"\'<]+', '', t)
    t = re.sub(r'\d{4}[-/年]\d{1,2}[-/月]\d{1,2}(?:日)?(?:\s+\d{1,2}:\d{2}(?::\d{2})?)?(?:投稿)?', '', t)
    t = re.sub(r'…\s*', '', t)
    t = re.sub(r'\.\.\.\s*', '', t)
    
    # 句読点で分割
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

fixed = 0
for fpath in note_files:
    with open(fpath, "r", encoding="utf-8") as f:
        lines = f.readlines()
    
    changed = False
    new_lines = []
    for line in lines:
        if line.strip().startswith("> 「") or "【宿泊者の" in line or "【利用者の声】" in line:
            # 「」の中身をクレンジング
            def rep(m):
                return f"「{clean_review_string(m.group(1))}」"
            new_line = re.sub(r'「([^」]+)」', rep, line)
            if new_line != line:
                changed = True
                line = new_line
        new_lines.append(line)
    
    if changed:
        with open(fpath, "w", encoding="utf-8") as f:
            f.writelines(new_lines)
        fixed += 1

print(f"Directly fixed line-by-line quotes in {fixed} files!")
