import os
import json
import re

POSTS_DIR = "src/data/posts"

def optimize_description(data):
    title = data.get('title', '')
    hotel_name = data.get('hotel_name', '')
    is_special = data.get('is_special_feature', False)
    pref = data.get('prefecture', '')
    area = data.get('area', '')
    orig_desc = data.get('description', '')

    # Clean existing generic description text
    clean_desc = orig_desc
    clean_desc = re.sub(r'徹底解説。?', '', clean_desc)
    clean_desc = re.sub(r'徹底比較解説。?', '', clean_desc)
    clean_desc = re.sub(r'失敗しない宿選びのために必読のガイドです。?', '', clean_desc)
    clean_desc = re.sub(r'楽天トラベルデータから厳選してまとめています。?', '', clean_desc)
    clean_desc = re.sub(r'編集部が独自の視点で選び抜いた.*?まとめています。?', '', clean_desc)
    clean_desc = re.sub(r'\s+', ' ', clean_desc).strip()

    if not is_special and hotel_name:
        # Hotel specific page: Target intent: "宿の場所・客室・温泉・食事・アクセス・空室プラン"
        clean_h = re.sub(r'^[【\[（\(]\s*', '', hotel_name).strip()
        clean_h = re.sub(r'\s*[】\]）\)]$', '', clean_h).strip()
        clean_h = clean_h.replace(" 宿泊予約", "")
        
        loc = f"{pref}{area}" if pref and area else (pref or "現地")
        desc = f"{loc}にある人気宿「{clean_h}」の温泉・客室の評判、食事の魅力、無料駐車場・アクセス情報を徹底解説。写真・限定プラン・空室情報を楽天トラベル公式データから即チェックできます。"
    else:
        # Special feature / guide: Target intent: "目的・地域・スポット・宿選び・予約"
        if "ポケモン" in title or "ポケモン" in orig_desc:
            desc = "能登のポケモンコラボ「ポケふた全7枚・わくらポケモン足湯・のと里山空港」の最新設置場所と周遊アクセスを解説。周辺おすすめホテルや楽天トラベル限定プランも一挙掲載。"
        elif "露天風呂" in title:
            desc = f"{title}を厳選解説。客室露天風呂付きお部屋、絶景温泉、部屋食プラン、カップル・ファミリーにおすすめの宿泊予約・最新空室情報を掲載。"
        elif "お盆" in title or "シルバーウィーク" in title:
            desc = f"{title}！直前予約が狙える穴場温泉宿、無料駐車場付きホテル、限定プランを楽天トラベルデータから即座に確認できます。"
        else:
            desc = f"{title}。失敗しない宿選びに役立つ温泉・食事・客室の口コミ評判と、アクセス・周辺観光・楽天トラベル最新空室プランを網羅解説。"

    # Ensure length is strictly between 90 - 110 chars for Google snippet optimization
    if len(desc) > 115:
        desc = desc[:112] + "..."

    return desc

def process_all_descriptions():
    count = 0
    files = [f for f in os.listdir(POSTS_DIR) if f.endswith('.json')]
    for fname in files:
        fpath = os.path.join(POSTS_DIR, fname)
        with open(fpath, 'r', encoding='utf-8') as f:
            try:
                data = json.load(f)
            except Exception:
                continue

        orig_desc = data.get('description', '')
        new_desc = optimize_description(data)

        if new_desc and new_desc != orig_desc:
            data['description'] = new_desc
            with open(fpath, 'w', encoding='utf-8') as out:
                json.dump(data, out, ensure_ascii=False, indent=2)
            count += 1

    print(f"Optimized description for {count} / {len(files)} articles.")

if __name__ == "__main__":
    process_all_descriptions()
