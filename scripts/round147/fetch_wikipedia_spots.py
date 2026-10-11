import json
import os
import requests

HEADERS = {
    "User-Agent": "TravelGuideApp/1.0 (https://croud-travel.pages.dev; contact@travel.app)"
}

spots = [
    {
        "theme": "mie_ago_bay_luxury",
        "query": "横山展望台",
        "alt_queries": ["英虞湾", "志摩市"],
        "label": "英虞湾のパノラマを一望する天空テラス・横山展望台（リアス海岸の島々と真珠筏の美）",
        "description": "三重県志摩市阿児町鵜方にある標高203mの横山山頂付近に整備された展望テラス。伊勢志摩国立公園を代表するビュースポットで、眼下には大小60以上の島々が浮かぶ複雑なリアス海岸の英虞湾が一面に広がります。木造デッキのカフェテラスからは初冬の澄み渡る空気のもと、遠く熊野灘まで見渡す大パノラマが展開。夕暮れ時には水面と島影が黄金色に染まる息を呑む絶景を堪能できます。"
    },
    {
        "theme": "yamanashi_kawaguchiko_luxury",
        "query": "河口湖",
        "alt_queries": ["富士五湖", "富士河口湖町", "富士山"],
        "label": "富士五湖を代表する名勝・河口湖（逆さ富士と冬の澄んだ大気・富士北麓の景勝地）",
        "description": "山梨県南都留郡富士河口湖町にある富士五湖の一つ。富士山の北麓に位置し、富士箱根伊豆国立公園に指定されています。五湖の中で最も長い湖畔線を持ち、湖面に映り込むシンメトリーな『逆さ富士』の名所として古くから葛飾北斎ら多くの浮世絵師や写真家に愛されてきました。初冬の11月から12月にかけては大陸からの乾いた高気圧に覆われ、雪化粧をまとった神々しい冬富士の姿をくっきりと望む晴天率が最も高いベストシーズン。湖畔には美術館やワイナリー、洗練された高級リゾートが立ち並びます。"
    },
    {
        "theme": "kumamoto_kurokawa_senomoto_luxury",
        "query": "黒川温泉",
        "alt_queries": ["南小国町", "瀬の本高原"],
        "label": "渓谷沿いに木造宿が寄り添う秘湯・黒川温泉（街全体が一つの宿・杉の入湯手形と田の原川）",
        "description": "熊本県阿蘇郡南小国町にある全国屈指の人気温泉郷。田の原川の深い渓谷沿いに木造の落ち着いた和風旅館が立ち並び、『黒川温泉一帯が一つの旅館（宿は離れ、道は廊下、植木は庭）』という統一された景観美を誇ります。名物の杉の『入湯手形』を用いた露天風呂巡りで知られ、渓流沿いや竹林、洞窟など野趣あふれる湯船が点在。泉質も硫黄泉、炭酸水素塩泉、硫酸塩泉など多種多様。初冬には温泉街に竹灯籠が灯るライトアップ『湯あかり』が始まり、幽玄な冬の夜歩きが愉しめます。"
    },
    {
        "theme": "kyoto_tango_taizagani_luxury",
        "query": "伊根の舟屋",
        "alt_queries": ["丹後半島", "京丹後市"],
        "label": "日本海の海に浮かぶ重要伝統的建造物群・伊根の舟屋（丹後半島の伝統美と幻の間人ガニの海）",
        "description": "京都府与謝郡伊根町の伊根湾沿いに約230軒立ち並ぶ、1階が船のガレージ、2階が居室となった独特の木造建築群。国の重要伝統的建造物群保存地区に選定され、『日本で最も美しい村』の一つに数えられます。初冬の静まり返った湾内にはエメラルドグリーンの海水が満ち、海と一体となったノスタルジックな風景が旅人を魅了します。近隣の間人港で揚がる極上の間人ガニとともに、丹後半島ならではの唯一無二の風情を味わえます。"
    },
    {
        "theme": "kagoshima_kirishima_myoken_luxury",
        "query": "天降川",
        "alt_queries": ["犬飼滝", "霧島市"],
        "label": "霧島連山の清冽な水脈・天降川（妙見温泉の自噴炭酸泉を育む渓流と新婚旅行ゆかりの地）",
        "description": "鹿児島県霧島連山の新燃岳や韓国岳に源を発し、鹿児島湾（錦江湾）へと注ぐ清流・天降川（あもりがわ）。深い渓谷沿いには妙見温泉や安楽温泉が点在し、川底や岩肌から毎分良質な炭酸水素塩泉が自噴しています。坂本龍馬とお龍が日本初の新婚旅行で訪れて傷を癒やした歴史の地。初冬の澄み切った清流のせせらぎと、山々の自然に抱かれた露天風呂で過ごす時間は、極上の癒やしをもたらします。"
    }
]

output_data = {}

for s in spots:
    q = s["query"]
    print(f"Fetching Wikipedia info for: {q}...")
    
    page_title = q
    img_url = ""
    extract = s["description"]

    queries_to_try = [q] + s.get("alt_queries", [])
    found_page = False

    for attempt_query in queries_to_try:
        if found_page:
            break
        print(f"  Attempting query: {attempt_query}...")
        api_url = f"https://ja.wikipedia.org/api/rest_v1/page/summary/{requests.utils.quote(attempt_query)}"
        try:
            res = requests.get(api_url, headers=HEADERS, timeout=10)
            if res.status_code == 200:
                data = res.json()
                page_title = data.get("title", attempt_query)
                if data.get("thumbnail") and data["thumbnail"].get("source"):
                    raw_img = data["thumbnail"]["source"]
                    if "/thumb/" in raw_img:
                        parts = raw_img.split("/thumb/")
                        img_path = parts[1].rsplit("/", 1)[0]
                        img_url = f"https://thumb.wikimedia.org/wikipedia/commons/thumb/{img_path}/1280px-{img_path.split('/')[-1]}?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                    else:
                        img_url = raw_img
                    print(f"    ✓ Found image: {img_url}")
                if data.get("extract"):
                    extract = data["extract"]
                    print(f"    ✓ Found extract: {len(extract)} chars")
                found_page = True
            else:
                print(f"    Summary API returned status {res.status_code} for {attempt_query}")
        except Exception as e:
            print(f"    Error requesting {attempt_query}: {e}")

    output_data[s["theme"]] = {
        "title": page_title,
        "query": q,
        "label": s["label"],
        "imageUrl": img_url,
        "extract": extract,
        "detailHistory": s["description"]
    }

out_file = os.path.join(os.path.dirname(__file__), "round147_wikipedia_spots.json")
with open(out_file, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print(f"\n🎉 Successfully saved Round 147 Wikipedia spot data to: {out_file}")
