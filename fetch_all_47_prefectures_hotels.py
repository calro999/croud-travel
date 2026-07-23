import os
import requests
import json
import re
import time

POSTS_DIR = "src/data/posts"
AFFILIATE_PREFIX = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc="

# 全47都道府県の代表的細分化エリア＆楽天トラベル検索URL定義
ALL_47_PREFECTURE_AREAS = [
    # 北海道・東北
    {"pref": "北海道", "subSlug": "hakodate", "area": "函館・湯の川温泉", "url": "https://travel.rakuten.co.jp/yado/hokkaido/hakodate.html"},
    {"pref": "青森県", "subSlug": "aomori-hirosaki", "area": "青森・弘前周辺", "url": "https://travel.rakuten.co.jp/yado/aomori/hirosaki.html"},
    {"pref": "岩手県", "subSlug": "morioka-hanamaki", "area": "盛岡・花巻温泉周辺", "url": "https://travel.rakuten.co.jp/yado/iwate/hanamaki.html"},
    {"pref": "宮城県", "subSlug": "sendai-matsushima", "area": "仙台・松島・秋保温泉", "url": "https://travel.rakuten.co.jp/yado/miyagi/sendai.html"},
    {"pref": "秋田県", "subSlug": "akita-kakunodate", "area": "秋田・角館・乳頭温泉", "url": "https://travel.rakuten.co.jp/yado/akita/tazawako.html"},
    {"pref": "山形県", "subSlug": "yamagata-zao", "area": "山形・蔵王温泉・銀山温泉", "url": "https://travel.rakuten.co.jp/yado/yamagata/zao.html"},
    {"pref": "福島県", "subSlug": "aizu-bandai", "area": "会津若松・裏磐梯・東山温泉", "url": "https://travel.rakuten.co.jp/yado/fukushima/aizu.html"},

    # 関東
    {"pref": "茨城県", "subSlug": "mito-oarai", "area": "水戸・大洗・ひたちなか", "url": "https://travel.rakuten.co.jp/yado/ibaraki/mito.html"},
    {"pref": "栃木県", "subSlug": "nikko-kinugawa", "area": "日光・鬼怒川温泉", "url": "https://travel.rakuten.co.jp/yado/tochigi/nikko.html"},
    {"pref": "群馬県", "subSlug": "kusatsu-ikaho", "area": "草津温泉・伊香保温泉", "url": "https://travel.rakuten.co.jp/yado/gunma/kusatsu.html"},
    {"pref": "埼玉県", "subSlug": "kawagoe-chichibu", "area": "川越・秩父・長瀞", "url": "https://travel.rakuten.co.jp/yado/saitama/chichibu.html"},
    {"pref": "千葉県", "subSlug": "urayasu-boso", "area": "浦安・舞浜・南房総", "url": "https://travel.rakuten.co.jp/yado/chiba/maihama.html"},
    {"pref": "東京都", "subSlug": "shinjuku-ginza", "area": "新宿・銀座・東京駅", "url": "https://travel.rakuten.co.jp/yado/tokyo/tokyo.html"},
    {"pref": "神奈川県", "subSlug": "hakone-kamakura", "area": "箱根温泉・鎌倉・横浜", "url": "https://travel.rakuten.co.jp/yado/kanagawa/hakone.html"},

    # 甲信越・北陸
    {"pref": "新潟県", "subSlug": "echigo-yuzawa", "area": "越後湯沢・苗場・佐渡", "url": "https://travel.rakuten.co.jp/yado/niigata/yuzawa.html"},
    {"pref": "富山県", "subSlug": "toyama-unazuki", "area": "富山・立山黒部・宇奈月温泉", "url": "https://travel.rakuten.co.jp/yado/toyama/unazuki.html"},
    {"pref": "福井県", "subSlug": "awara-tsuruga", "area": "あわら温泉・敦賀・若狭", "url": "https://travel.rakuten.co.jp/yado/fukui/awara.html"},
    {"pref": "山梨県", "subSlug": "fujigoko-isawa", "area": "富士五湖・河口湖・石和温泉", "url": "https://travel.rakuten.co.jp/yado/yamanashi/kawaguchiko.html"},
    {"pref": "長野県", "subSlug": "karuizawa-kamikochi", "area": "軽井沢・上高地・白馬", "url": "https://travel.rakuten.co.jp/yado/nagano/karuizawa.html"},

    # 東海
    {"pref": "岐阜県", "subSlug": "takayama-shirakawa", "area": "飛騨高山・白川郷・下呂温泉", "url": "https://travel.rakuten.co.jp/yado/gifu/takayama.html"},
    {"pref": "静岡県", "subSlug": "atami-ito", "area": "熱海・伊東・伊豆高原", "url": "https://travel.rakuten.co.jp/yado/shizuoka/atami.html"},
    {"pref": "愛知県", "subSlug": "nagoya-chita", "area": "名古屋・知多半島", "url": "https://travel.rakuten.co.jp/yado/aichi/nagoya.html"},
    {"pref": "三重県", "subSlug": "ise-shima", "area": "伊勢神宮・志摩・鳥羽", "url": "https://travel.rakuten.co.jp/yado/mie/toba.html"},

    # 近畿
    {"pref": "滋賀県", "subSlug": "biwako-hikone", "area": "琵琶湖・彦根・長浜", "url": "https://travel.rakuten.co.jp/yado/shiga/otsu.html"},
    {"pref": "京都府", "subSlug": "arashiyama-uji", "area": "嵐山・宇治・天橋立", "url": "https://travel.rakuten.co.jp/yado/kyoto/kyoto.html"},
    {"pref": "大阪府", "subSlug": "namba-umeda", "area": "難波・梅田・ベイエリア", "url": "https://travel.rakuten.co.jp/yado/osaka/osaka.html"},
    {"pref": "兵庫県", "subSlug": "arima-kinosaki", "area": "有馬温泉・城崎温泉・神戸", "url": "https://travel.rakuten.co.jp/yado/hyogo/arima.html"},
    {"pref": "奈良県", "subSlug": "nara-yoshino", "area": "奈良公園・吉野山", "url": "https://travel.rakuten.co.jp/yado/nara/nara.html"},
    {"pref": "和歌山県", "subSlug": "shirahama-katsuura", "area": "白浜温泉・勝浦・高野山", "url": "https://travel.rakuten.co.jp/yado/wakayama/shirahama.html"},

    # 中国・四国
    {"pref": "鳥取県", "subSlug": "sakaiminato-misasa", "area": "鳥取砂丘・皆生温泉・三朝温泉", "url": "https://travel.rakuten.co.jp/yado/tottori/kaike.html"},
    {"pref": "島根県", "subSlug": "izumo-matsue", "area": "出雲大社・松江・玉造温泉", "url": "https://travel.rakuten.co.jp/yado/shimane/tamatsukuri.html"},
    {"pref": "岡山県", "subSlug": "kurashiki-korakuen", "area": "倉敷美観地区・後楽園", "url": "https://travel.rakuten.co.jp/yado/okayama/kurashiki.html"},
    {"pref": "広島県", "subSlug": "miyajima-onomichi", "area": "宮島・厳島神社・尾道", "url": "https://travel.rakuten.co.jp/yado/hiroshima/miyajima.html"},
    {"pref": "山口県", "subSlug": "tsunoshima-hagi", "area": "角島・萩・長門湯本温泉", "url": "https://travel.rakuten.co.jp/yado/yamaguchi/hagi.html"},
    {"pref": "徳島県", "subSlug": "naruto-iya", "area": "鳴門・祖谷渓温泉", "url": "https://travel.rakuten.co.jp/yado/tokushima/naruto.html"},
    {"pref": "香川県", "subSlug": "kotohira-shodoshima", "area": "琴平・金刀比羅宮・小豆島", "url": "https://travel.rakuten.co.jp/yado/kagawa/kotohira.html"},
    {"pref": "愛媛県", "subSlug": "dogo-shimanami", "area": "道後温泉・しまなみ海道", "url": "https://travel.rakuten.co.jp/yado/ehime/dogo.html"},
    {"pref": "高知県", "subSlug": "katsurahama-shimanto", "area": "桂浜・四万十川", "url": "https://travel.rakuten.co.jp/yado/kochi/kochi.html"},

    # 九州・沖縄
    {"pref": "福岡県", "subSlug": "dazaifu-itoishima", "area": "太宰府・糸島・柳川", "url": "https://travel.rakuten.co.jp/yado/fukuoka/fukuoka.html"},
    {"pref": "佐賀県", "subSlug": "ureseno-karatsu", "area": "嬉野温泉・武雄・唐津", "url": "https://travel.rakuten.co.jp/yado/saga/ureshino.html"},
    {"pref": "長崎県", "subSlug": "huistenbosch-unzen", "area": "ハウステンボス・雲仙温泉", "url": "https://travel.rakuten.co.jp/yado/nagasaki/sasebo.html"},
    {"pref": "熊本県", "subSlug": "kurokawa-aso", "area": "黒川温泉・阿蘇山", "url": "https://travel.rakuten.co.jp/yado/kumamoto/kurokawa.html"},
    {"pref": "大分県", "subSlug": "beppu-yufuin", "area": "別府温泉・由布院温泉", "url": "https://travel.rakuten.co.jp/yado/oita/yufuin.html"},
    {"pref": "宮崎県", "subSlug": "takachiho-aoshima", "area": "高千穂・青島・日南", "url": "https://travel.rakuten.co.jp/yado/miyazaki/miyazaki.html"},
    {"pref": "鹿児島県", "subSlug": "ibusuki-kirishima", "area": "指宿温泉・霧島温泉・屋久島", "url": "https://travel.rakuten.co.jp/yado/kagoshima/ibusuki.html"},
    {"pref": "沖縄県", "subSlug": "ishigaki-miyako", "area": "石垣島・宮古島・恩納村", "url": "https://travel.rakuten.co.jp/yado/okinawa/ishigaki.html"}
]

def fetch_and_generate_all():
    os.makedirs(POSTS_DIR, exist_ok=True)
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }

    all_fetched_mapping = {}

    for item in ALL_47_PREFECTURE_AREAS:
        pref = item["pref"]
        subSlug = item["subSlug"]
        area_label = item["area"]
        url = item["url"]

        print(f"Fetching 47-Prefecture Real Hotel for [{pref} - {area_label}] ...")
        try:
            res = requests.get(url, headers=headers, timeout=8)
            if res.status_code == 200:
                html = res.text
                matches = re.findall(r'travel\.rakuten\.co\.jp/HOTEL/([0-9]+)/', html)
                unique_hotel_nos = list(dict.fromkeys(matches))[:3]

                created_info_list = []
                for hotel_no in unique_hotel_nos:
                    # 宿名抽出
                    name_match = re.search(rf'HOTEL/{hotel_no}/[^">]*">([^<]+)</a>', html)
                    raw_name = name_match.group(1).strip() if name_match else f"{area_label}の厳選宿"
                    real_name = raw_name.replace(" 宿泊予約", "").strip()

                    image_url = f"https://img.travel.rakuten.co.jp/share/HOTEL/{hotel_no}/{hotel_no}.jpg"
                    rakuten_hotel_url = f"https://travel.rakuten.co.jp/HOTEL/{hotel_no}/{hotel_no}.html"
                    affiliate_url = f"{AFFILIATE_PREFIX}{requests.utils.quote(rakuten_hotel_url)}"

                    # 個別記事JSONを作成・保存
                    post_data = {
                        "id": hotel_no,
                        "title": f"【{area_label}厳選宿】{real_name}の魅力と見どころガイド",
                        "hotel_name": real_name,
                        "description": f"{area_label}の人気宿泊施設「{real_name}」。素晴らしいアクセスと温かいおもてなしで最高のご滞在を提供します。",
                        "review": f"""
<h2>{real_name}をおすすめする3つの理由</h2>
<ul>
  <li><strong>{area_label}に抜群のロケーション</strong>：主要観光スポットや最寄り駅・バス停へのアクセスが非常に良好です。</li>
  <li><strong>清潔で心寛げる客室空間と充実設備</strong>：無料Wi-Fiやお寛ぎのアメニティを完備。</li>
  <li><strong>地元食材を活かした絶品料理とおもてなし</strong>：スタッフの温かい対応と旅の醍醐味である美食を満喫。</li>
</ul>

<h2>施設の特徴と魅力</h2>
<p>{real_name}は、{area_label}ならではの自然美や歴史・情緒を心ゆくまで堪能できる極上の宿です。</p>

<h2>アクセスと周辺観光</h2>
<p>{area_label}の人気名所へも徒歩や短い移動でアクセス可能。観光・温泉・グルメめぐりの最高のアクティブ拠点です。</p>

<h2>まとめ</h2>
<p>{real_name}での滞在は旅をより最高なものにしてくれます。空室プラン詳細は下記公式リンクよりご覧ください。</p>
""".strip(),
                        "image": image_url,
                        "other_images": [image_url],
                        "affiliate_url": affiliate_url,
                        "prefecture": pref,
                        "area": area_label,
                        "categories": ["厳選ホテル・旅館", "人気おすすめ宿"],
                        "price": 13500,
                        "rating": 4.6,
                        "date": time.strftime("%Y-%m-%d %H:%M:%S")
                    }

                    post_path = os.path.join(POSTS_DIR, f"{hotel_no}.json")
                    with open(post_path, "w", encoding="utf-8") as f:
                        json.dump(post_data, f, ensure_ascii=False, indent=2)

                    created_info_list.append({
                        "hotelName": real_name,
                        "areaName": area_label,
                        "postId": hotel_no,
                        "image": image_url,
                        "price": 13500,
                        "rating": 4.6,
                        "affiliateUrl": affiliate_url
                    })

                all_fetched_mapping[subSlug] = created_info_list
                print(f"  -> Successfully generated {len(created_info_list)} real posts for [{area_label}]")
            else:
                print(f"Status {res.status_code} for {url}")
        except Exception as e:
            print(f"Error fetching [{pref}]: {e}")

        time.sleep(0.5)

    with open("all_47_prefectures_hotels_mapping.json", "w", encoding="utf-8") as f:
        json.dump(all_fetched_mapping, f, ensure_ascii=False, indent=2)

    print("Completed batch creation for all 47 prefectures!")

if __name__ == "__main__":
    fetch_and_generate_all()
