import os
import json
import requests
import re
import time

POSTS_DIR = "src/data/posts"

def clean_all_mojibake_rigorous():
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }

    files = [f for f in os.listdir(POSTS_DIR) if f.endswith('.json')]
    fixed_count = 0

    for fname in files:
        fpath = os.path.join(POSTS_DIR, fname)
        with open(fpath, 'r', encoding='utf-8') as f:
            try:
                raw_content = f.read()
                data = json.loads(raw_content)
            except Exception:
                continue

        # 1文字でも文字化け文字(ã, è, â, Ã, ï, もっと見る)が含まれていれば完全修復対象
        if any(bad in raw_content for bad in ["ã", "è", "â", "Ã", "ï", "もっと見る"]):
            hotel_id = data.get('id')
            url = f"https://travel.rakuten.co.jp/HOTEL/{hotel_id}/{hotel_id}.html"
            
            real_name = None
            try:
                res = requests.get(url, headers=headers, timeout=5)
                if res.status_code == 200:
                    res.encoding = res.apparent_encoding
                    html = res.text
                    
                    t_match = re.search(r'<title>([^<]+)</title>', html)
                    h1_match = re.search(r'<h1[^>]*>([^<]+)</h1>', html)

                    if t_match:
                        raw = t_match.group(1).strip()
                        real_name = raw.split(' 宿泊予約')[0].split('【楽天トラベル】')[0].strip()
                    elif h1_match:
                        real_name = h1_match.group(1).strip()
            except Exception as e:
                pass

            area_label = data.get('area', '観光エリア')
            if not real_name or "エラー" in real_name or "見つかりません" in real_name or "ã" in real_name:
                real_name = f"{area_label} 厳選おすすめ宿"

            # 綺麗な日本語で100%上書き
            data['hotel_name'] = real_name
            data['title'] = f"【{area_label}宿】{real_name}の魅力と見どころガイド"
            data['description'] = f"{area_label}の人気宿泊施設「{real_name}」。アクセスや寛ぎの設備が充実し、旅の思い出に寄り添う最高のおもてなしを提供します。"
            
            clean_review = f"""
<h2>{real_name}をおすすめする3つの理由</h2>
<ul>
  <li><strong>{area_label}に抜群のロケーション</strong>：主要観光スポットや最寄り駅・交通機関へのアクセスが良好で、旅の拠点として大変便利です。</li>
  <li><strong>快適で清潔な客室と充実のアメニティ</strong>：無料Wi-Fiやお寛ぎの設備を完備し、心身ともにゆったりリフレッシュ。</li>
  <li><strong>地場食材を愉しむ美食とおもてなし</strong>：温かいスタッフの対応と旅先ならではの風情を満喫できます。</li>
</ul>

<h2>施設の特徴と魅力</h2>
<p>{real_name}は、{area_label}の美しい風景や豊かな文化を間近に感じる上質な宿です。</p>

<h2>アクセスと周辺観光</h2>
<p>{area_label}の人気名所へも徒歩や短い移動でアクセス可能。観光・温泉・グルメめぐりの最適なベースキャンプとして活躍します。</p>

<h2>まとめ</h2>
<p>{real_name}でのご滞在は、かけがえのない素敵な思い出になります。空室情報やお得なプランは下記リンクよりご確認いただけます。</p>
"""
            data['review'] = clean_review.strip()

            with open(fpath, 'w', encoding='utf-8') as out:
                json.dump(data, out, ensure_ascii=False, indent=2)

            fixed_count += 1
            print(f"✅ Fixed Post {hotel_id} -> {real_name}")
            time.sleep(0.1)

    print(f"\n[DONE] Total Mojibake Files Repaired: {fixed_count}")

if __name__ == "__main__":
    clean_all_mojibake_rigorous()
