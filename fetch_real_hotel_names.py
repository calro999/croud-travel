import os
import json
import requests
import re
import time

POSTS_DIR = "src/data/posts"

def fetch_and_fix():
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }

    files = [f for f in os.listdir(POSTS_DIR) if f.endswith('.json')]
    for fname in files:
        fpath = os.path.join(POSTS_DIR, fname)
        with open(fpath, 'r', encoding='utf-8') as f:
            try:
                data = json.load(f)
            except Exception:
                continue

        h_name = data.get('hotel_name', '')
        if not h_name or "ã" in h_name or "もっと見る" in h_name:
            hotel_id = data.get('id')
            url = f"https://travel.rakuten.co.jp/HOTEL/{hotel_id}/{hotel_id}.html"
            try:
                res = requests.get(url, headers=headers, timeout=5)
                if res.status_code == 200:
                    # 文字コードShift_JIS / UTF-8自動判定
                    res.encoding = res.apparent_encoding
                    html = res.text
                    # <h1> 宿名 </h1> または <title> 宿名 宿泊予約 </title>
                    h1_match = re.search(r'<h1[^>]*>([^<]+)</h1>', html)
                    title_match = re.search(r'<title>([^<]+)</title>', html)
                    
                    real_name = None
                    if h1_match and len(h1_match.group(1).strip()) > 2:
                        real_name = h1_match.group(1).strip()
                    elif title_match:
                        raw_title = title_match.group(1).strip()
                        real_name = raw_title.split(' 宿泊予約')[0].split('【楽天トラベル】')[0].strip()

                    if real_name and not "エラー" in real_name and not "ページが見つかりません" in real_name:
                        area = data.get('area', 'おすすめエリア')
                        data['hotel_name'] = real_name
                        data['title'] = f"【{area}宿】{real_name}の魅力と見どころガイド"
                        data['description'] = f"{area}の人気宿泊施設「{real_name}」。アクセスや寛ぎの設備が充実し、旅の思い出に寄り添う最高のおもてなしを提供します。"
                        
                        review = f"""
<h2>{real_name}をおすすめする3つの理由</h2>
<ul>
  <li><strong>{area}に抜群のロケーション</strong>：観光名所や最寄り駅・交通機関へのアクセスが良好で、旅の拠点として大変便利です。</li>
  <li><strong>快適で清潔な客室と充実のアメニティ</strong>：無料Wi-Fiやお寛ぎの設備を完備し、心身ともにゆったりリフレッシュ。</li>
  <li><strong>地場食材を愉しむ美食とおもてなし</strong>：温かいスタッフの対応と旅先ならではの風情を満喫できます。</li>
</ul>

<h2>施設の特徴と魅力</h2>
<p>{real_name}は、{area}の美しい風景や豊かな文化を間近に感じる上質な宿です。</p>

<h2>アクセスと周辺観光</h2>
<p>{area}の主要スポットへもスムーズにアクセス可能。観光・グルメ・お買い物・名湯めぐりの最適なベースキャンプとして活躍します。</p>

<h2>まとめ</h2>
<p>{real_name}でのご滞在は、かけがえのない素敵な思い出になります。空室情報やお得なプランは下記リンクよりご確認いただけます。</p>
"""
                        data['review'] = review.strip()

                        with open(fpath, 'w', encoding='utf-8') as out:
                            json.dump(data, out, ensure_ascii=False, indent=2)
                        print(f"✅ Fixed Post {hotel_id} -> {real_name}")
            except Exception as e:
                print(f"Error {hotel_id}: {e}")
            
            time.sleep(0.3)

if __name__ == "__main__":
    fetch_and_fix()
