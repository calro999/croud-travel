import os
import json
import re

POSTS_DIR = "src/data/posts"

def clean_title_text(t, hotel_name, is_special):
    if not t:
        return ""
    
    # 1. Clean brackets and leading symbols
    t = re.sub(r'^[【\[（\(「]\s*', '', t)
    t = re.sub(r'\s*[】\]）\)」]$', '', t)
    t = t.replace('】', ' ').replace('【', ' ')
    
    # 2. Remove common SEO buzzwords / prefixes that don't add query value
    buzzwords = [
        r'\d{4}年?最新', r'最新', r'完全ガイド', r'現地フォト付きルポ', 
        r'永久保存版', r'徹底解説', r'完全解説', r'徹底紹介', r'徹底比較',
        r'厳選まとめ', r'特別企画', r'限定クーポン', r'穴場', r'おすすめ宿\d+選',
        r'おすすめホテル\d+選', r'おすすめ温泉宿\d+選', r'\d+選'
    ]
    for bw in buzzwords:
        t = re.sub(bw, '', t)
    
    # 3. Clean symbols
    t = t.replace('！', ' ').replace('!', ' ')
    t = re.sub(r'\s+', ' ', t).strip(' ・｜|-')

    # 4. Handle Single Hotel vs Special Feature
    if not is_special and hotel_name:
        clean_h = re.sub(r'^[【\[（\(]\s*', '', hotel_name).strip()
        clean_h = re.sub(r'\s*[】\]）\)]$', '', clean_h).strip()
        clean_h = clean_h.replace(" 宿泊予約", "")
        t = f"{clean_h}の温泉・客室口コミと宿泊予約"
    
    # 5. Ensure length is strictly <= 32 chars
    if len(t) > 32:
        parts = re.split(r'[・｜|-]', t)
        res = ""
        for p in parts:
            p = p.strip()
            if not p:
                continue
            if len(res) + len(p) + 1 <= 30:
                res = f"{res}・{p}" if res else p
            else:
                break
        if len(res) >= 10:
            t = res
        else:
            t = t[:30]

    return t

def process_all_posts():
    count = 0
    files = [f for f in os.listdir(POSTS_DIR) if f.endswith('.json')]
    for fname in files:
        fpath = os.path.join(POSTS_DIR, fname)
        with open(fpath, 'r', encoding='utf-8') as f:
            try:
                data = json.load(f)
            except Exception:
                continue

        orig_title = data.get('title', '')
        hotel_name = data.get('hotel_name', '')
        is_special = data.get('is_special_feature', False)

        new_title = clean_title_text(orig_title, hotel_name, is_special)

        if new_title and new_title != orig_title:
            data['title'] = new_title
            with open(fpath, 'w', encoding='utf-8') as out:
                json.dump(data, out, ensure_ascii=False, indent=2)
            count += 1

    print(f"Perfectly cleaned {count} / {len(files)} article titles.")

if __name__ == "__main__":
    process_all_posts()
