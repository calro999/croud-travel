import os
import json
import requests
import re

POSTS_DIR = "src/data/posts"

# 楽天トラベル個別ページから本当の宿名を直接取得
def fix_posts():
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }

    files = [f for f in os.listdir(POSTS_DIR) if f.endswith('.json')]
    for fname in files:
        post_id = fname.replace('.json', '')
        fpath = os.path.join(POSTS_DIR, fname)
        
        with open(fpath, 'r', encoding='utf-8') as f:
            data = json.load(f)

        # もし宿名が「もっと見る」などになっていた場合、楽天個別ページからスクレイピング補正
        if data.get('hotel_name') in ["もっと見る", ""] or "もっと見る" in data.get('title', ''):
            hotel_url = f"https://travel.rakuten.co.jp/HOTEL/{post_id}/{post_id}.html"
            try:
                r = requests.get(hotel_url, headers=headers, timeout=5)
                if r.status_code == 200:
                    r.encoding = r.apparent_encoding
                    m = re.search(r'<title>([^<]+)</title>', r.text)
                    if m:
                        raw_title = m.group(1)
                        # 「宿名 宿泊予約【楽天トラベル】」のような文字列から宿名を安全抽出
                        real_name = raw_title.split(' 宿泊予約')[0].split('【楽天トラベル】')[0].strip()
                        data['hotel_name'] = real_name
                        data['title'] = f"【{data.get('area', 'おすすめ')}】{real_name}の魅力と見どころ取材"
                        data['description'] = f"{data.get('area', 'おすすめ')}の人気宿「{real_name}」。充実の設備と心地よいおもてなしで最高のご滞在を提供します。"
                        
                        # 本文の見出しも宿名に補正
                        data['review'] = re.sub(r'<h2>もっと見るをおすすめする3つの理由</h2>', f'<h2>{real_name}をおすすめする3つの理由</h2>', data['review'])
                        data['review'] = re.sub(r'<p>もっと見るは', f'<p>{real_name}は', data['review'])

                        with open(fpath, 'w', encoding='utf-8') as out_f:
                            json.dump(data, out_f, ensure_ascii=False, indent=2)
                        print(f"Fixed post {post_id} -> {real_name}")
            except Exception as e:
                print(f"Error fixing {post_id}: {e}")

if __name__ == "__main__":
    fix_posts()
