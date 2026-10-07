"""
観光スポット画像取得モジュール (tourist_image_fetcher.py)
Wikipedia / Wikimedia Commons 公式APIを活用し、
観光地・名所の実写かつ横長（比率1.20〜2.2、高解像度）の画像を自動取得します。
"""

import re
import requests

HEADERS = {
    "User-Agent": "TravelGuideApp/1.0 (https://croud-travel.web.app; contact@travel.app)"
}

EXCLUDE_TITLES = [
    "曖昧さ回避", "小説", "映画", "アルバム", "戦い", "事件", "の一覧", "カテゴリ"
]

NOISE_KEYWORDS = [
    "logo", "icon", "flag", "map", "commons-logo", "jaza", "symbol",
    "coat_of_arms", "diagram", "chart", "route", "marker"
]

def clean_spot_query(raw_spot: str) -> list[str]:
    """スポット文字列から検索候補キーワードを複数生成する"""
    if not raw_spot:
        return []
    base = re.sub(r'（[^）]*）', '', raw_spot)
    base = re.sub(r'\([^)]*\)', '', base).strip()
    
    candidates = [base]
    if '・' in base:
        parts = [p.strip() for p in base.split('・') if p.strip()]
        candidates.extend(parts)
    if '＆' in base:
        parts = [p.strip() for p in base.split('＆') if p.strip()]
        candidates.extend(parts)
    if ' ' in base:
        parts = [p.strip() for p in base.split(' ') if p.strip()]
        candidates.extend(parts)

    extra = []
    for c in list(candidates):
        if '宮島' in c:
            extra.append('厳島神社')
        if '松島' in c:
            extra.append('松島')
        if '金閣寺' in c:
            extra.append('鹿苑寺')
        if '茶屋街' in c:
            extra.append('東山ひがし')
            
    candidates.extend(extra)
    return list(dict.fromkeys([c for c in candidates if len(c) >= 2]))


def fetch_tourist_spot_image(spot_name: str, min_width: int = 600) -> dict | None:
    """
    指定された観光スポット名から、実写かつ横長の画像（URL, サイズ, アスペクト比）を取得する。
    
    Returns:
        dict: {
            "spot": spot_name,
            "title": wikipedia_article_title,
            "url": image_url,
            "width": width,
            "height": height,
            "aspect": aspect_ratio
        } または None
    """
    candidates = clean_spot_query(spot_name)
    if not candidates:
        return None

    for candidate in candidates:
        # 1. 検索APIで関連記事タイトルを取得
        search_titles = [candidate]
        try:
            s_url = f"https://ja.wikipedia.org/w/api.php?action=query&list=search&srsearch={requests.utils.quote(candidate)}&srlimit=4&format=json"
            s_res = requests.get(s_url, headers=HEADERS, timeout=7).json()
            found = [item['title'] for item in s_res.get('query', {}).get('search', [])]
            for f in found:
                if f not in search_titles:
                    search_titles.append(f)
        except Exception:
            pass

        # 曖昧さ回避や無関係タイトルを除外
        filtered_titles = [
            t for t in search_titles 
            if not any(k in t for k in EXCLUDE_TITLES)
        ]

        # 2. pageimages（アイキャッチ）をチェック
        for t in filtered_titles:
            try:
                p_url = f"https://ja.wikipedia.org/w/api.php?action=query&titles={requests.utils.quote(t)}&prop=pageimages&format=json&pithumbsize=1200"
                p_res = requests.get(p_url, headers=HEADERS, timeout=7).json()
                pages = p_res.get('query', {}).get('pages', {})
                for _, p in pages.items():
                    thumb = p.get('thumbnail')
                    if thumb:
                        src = thumb.get('source', '')
                        w, h = thumb.get('width', 0), thumb.get('height', 0)
                        aspect = round(w / h, 2) if h > 0 else 0
                        lower_src = src.lower()
                        is_noise = any(k in lower_src for k in NOISE_KEYWORDS) or lower_src.endswith('.svg') or lower_src.endswith('.svg.png')
                        
                        # 横長（1.20〜2.20）かつ十分な解像度
                        if not is_noise and 1.20 <= aspect <= 2.20 and w >= min_width:
                            return {
                                "spot": spot_name,
                                "title": t,
                                "url": src,
                                "width": w,
                                "height": h,
                                "aspect": aspect
                            }
            except Exception:
                continue

        # 3. pageimagesがロゴや無効だった場合、記事内の本文画像をgenerator=imagesで探す
        for t in filtered_titles[:2]:
            try:
                img_url = f"https://ja.wikipedia.org/w/api.php?action=query&titles={requests.utils.quote(t)}&generator=images&gimlimit=12&prop=imageinfo&iiprop=url|size|mime&format=json"
                img_res = requests.get(img_url, headers=HEADERS, timeout=7).json()
                pages = img_res.get('query', {}).get('pages', {})
                for _, page in pages.items():
                    info = page.get('imageinfo', [{}])[0]
                    mime = info.get('mime', '')
                    if mime in ['image/jpeg', 'image/png']:
                        w, h = info.get('width', 0), info.get('height', 0)
                        aspect = round(w / h, 2) if h > 0 else 0
                        src = info.get('url', '')
                        lower_src = src.lower()
                        is_noise = any(k in lower_src for k in NOISE_KEYWORDS)
                        if not is_noise and 1.20 <= aspect <= 2.20 and w >= min_width:
                            return {
                                "spot": spot_name,
                                "title": t,
                                "url": src,
                                "width": w,
                                "height": h,
                                "aspect": aspect
                            }
            except Exception:
                continue

    return None
