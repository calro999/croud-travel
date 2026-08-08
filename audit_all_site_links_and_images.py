import os
import json
import re
import requests

posts_dir = "src/data/posts"
json_files = [os.path.join(posts_dir, f) for f in os.listdir(posts_dir) if f.endswith(".json")]

print(f"=== AUDITING ALL {len(json_files)} POSTS IN SITE ===")

invalid_affiliate_urls = []
invalid_images = []
missing_hotel_names = []

affiliate_prefix = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc="

for filepath in json_files:
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)

        post_id = data.get("id", os.path.basename(filepath))
        hotel_name = data.get("hotel_name", "")
        aff_url = data.get("affiliate_url", "")
        image_url = data.get("image", "")

        # 1. 宿名のチェック
        if not hotel_name or hotel_name.strip() == "":
            missing_hotel_names.append(filepath)

        # 2. アフィリエイトURLの形式チェック
        if not aff_url or not aff_url.startswith("https://hb.afl.rakuten.co.jp/"):
            invalid_affiliate_urls.append({"file": filepath, "url": aff_url})

        # 3. 画像URLのチェック
        if not image_url or (not image_url.startswith("http://") and not image_url.startswith("https://") and not image_url.startswith("/")):
            invalid_images.append({"file": filepath, "image": image_url})

    except Exception as e:
        print(f"Error reading {filepath}: {e}")

print(f"✅ Total Posts Scanned     : {len(json_files)}")
print(f"⚠️ Invalid Affiliate URLs : {len(invalid_affiliate_urls)}")
print(f"⚠️ Invalid Image URLs     : {len(invalid_images)}")
print(f"⚠️ Missing Hotel Names    : {len(missing_hotel_names)}")

if len(invalid_affiliate_urls) > 0:
    print("\n--- Invalid Affiliate URLs Sample ---")
    for item in invalid_affiliate_urls[:10]:
        print(item)

if len(invalid_images) > 0:
    print("\n--- Invalid Image URLs Sample ---")
    for item in invalid_images[:10]:
        print(item)

print("=== SITE AUDIT COMPLETED ===")
