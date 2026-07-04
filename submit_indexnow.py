import os
import glob
import json
import requests

def main():
    host = "croud-travel.pages.dev"
    # IndexNow用の適当な32桁の16進数キー
    key = "f1a2b3c4d5e64f7a8b9c0d1e2f3a4b5c"
    
    # 1. キーファイルの作成 (public/配下)
    public_dir = "public"
    os.makedirs(public_dir, exist_ok=True)
    key_file_path = os.path.join(public_dir, f"{key}.txt")
    with open(key_file_path, "w", encoding="utf-8") as f:
        f.write(key)
    print(f"Created IndexNow key file: {key_file_path}")

    # 2. 記事IDのリストをスキャンしてURL一覧を作成
    posts_dir = "src/data/posts"
    post_files = glob.glob(os.path.join(posts_dir, "*.json"))
    
    urls = [f"https://{host}/"]
    for pf in post_files:
        post_id = os.path.splitext(os.path.basename(pf))[0]
        urls.append(f"https://{host}/posts/{post_id}")
    
    print(f"Total URLs to submit: {len(urls)}")
    for url in urls[:5]:
        print(f" - {url}")
    if len(urls) > 5:
        print(" ... and more")

    # 3. IndexNow APIへの送信
    indexnow_url = "https://www.bing.com/indexnow"
    payload = {
        "host": host,
        "key": key,
        "keyLocation": f"https://{host}/{key}.txt",
        "urlList": urls
    }
    
    headers = {
        "Content-Type": "application/json; charset=utf-8"
    }
    
    print(f"Submitting to {indexnow_url}...")
    try:
        response = requests.post(indexnow_url, json=payload, headers=headers, timeout=30)
        print(f"Response Status Code: {response.status_code}")
        if response.status_code == 200:
            print("Successfully submitted URLs to Bing via IndexNow!")
        elif response.status_code == 202:
            print("Accepted (202): URLs successfully queued for indexing.")
        else:
            print(f"Failed to submit: {response.text}")
    except Exception as e:
        print(f"Error during submission: {e}")

if __name__ == "__main__":
    main()
