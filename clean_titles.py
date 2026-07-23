import os
import json

POSTS_DIR = "src/data/posts"

def clean_titles():
    files = [f for f in os.listdir(POSTS_DIR) if f.endswith('.json')]
    for fname in files:
        fpath = os.path.join(POSTS_DIR, fname)
        with open(fpath, 'r', encoding='utf-8') as f:
            try:
                data = json.load(f)
            except Exception:
                continue

        h_name = data.get('hotel_name', '')
        if " 宿泊予約" in h_name:
            clean_name = h_name.replace(" 宿泊予約", "").strip()
            data['hotel_name'] = clean_name
            data['title'] = data['title'].replace(h_name, clean_name).replace(" 宿泊予約", "")
            data['description'] = data['description'].replace(h_name, clean_name).replace(" 宿泊予約", "")
            data['review'] = data['review'].replace(h_name, clean_name).replace(" 宿泊予約", "")

            with open(fpath, 'w', encoding='utf-8') as out:
                json.dump(data, out, ensure_ascii=False, indent=2)
            print(f"Cleaned: {clean_name}")

if __name__ == "__main__":
    clean_titles()
