import json
import urllib.parse
import os
import re

POSTS_DIR = "src/data/posts"
affiliate_prefix = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc="

fname = "akiu-sakan-guide.json"
fpath = os.path.join(POSTS_DIR, fname)
hotel_no = "8881"
hotel_name = "秋保温泉　伝承の宿　佐かん"
hotel_img = "https://img.travel.rakuten.co.jp/share/HOTEL/8881/8881.jpg"
detail_url = f"https://travel.rakuten.co.jp/HOTEL/{hotel_no}/{hotel_no}.html"
affiliate_url = f"{affiliate_prefix}{urllib.parse.quote(detail_url, safe='')}"

with open(fpath, "r", encoding="utf-8") as f:
    pdata = json.load(f)

pdata["hotel_name"] = hotel_name
pdata["image"] = hotel_img
pdata["affiliate_url"] = affiliate_url

review = pdata.get("review", "")
review = re.sub(r'href="https://hb\.afl\.rakuten\.co\.jp/[^"]+"', f'href="{affiliate_url}"', review)
review = re.sub(r'src="https://img\.travel\.rakuten\.co\.jp/[^"]+"', f'src="{hotel_img}"', review)
pdata["review"] = review

with open(fpath, "w", encoding="utf-8") as f:
    json.dump(pdata, f, ensure_ascii=False, indent=2)

print(f"🎉 秋保温泉 佐かん（HotelNo: {hotel_no}）データバインド完了！")
