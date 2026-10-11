import json
import os
import requests

HEADERS = {
    "User-Agent": "TravelGuideApp/1.0 (https://croud-travel.pages.dev; contact@travel.app)"
}

spots = [
    {
        "theme": "kanagawa_hakone_sengokuhara_luxury",
        "query": "仙石原",
        "alt_queries": ["大涌谷", "箱根町", "芦ノ湖"],
        "label": "初冬の静寂と黄金色の名所・箱根仙石原（広大なすすき草原と大涌谷白濁硫黄泉の源泉地）",
        "description": "神奈川県足柄下郡箱根町北部にある標高約650〜700mの高原地帯。台ヶ岳北西麓に広がる『仙石原すすき草原』は「かながわの景勝50選」に選定された箱根屈指の景勝地で、初冬には一面の銀波・金波が柔らかな冬の陽射しを浴びて幻想的な光景を描き出します。近隣には大涌谷の噴煙から引湯する濃厚な白濁の酸性・含硫黄硫酸塩温泉が湧出。箱根ガラスの森美術館やポーラ美術館など洗練されたアート施設が点在し、大人の知的好奇心を刺激する上質なリゾートエリアとして国内外から高い人気を誇ります。"
    },
    {
        "theme": "shizuoka_izukogen_luxury_hanare",
        "query": "城ヶ崎海岸",
        "alt_queries": ["伊豆高原", "大室山 (静岡県)", "伊東市"],
        "label": "相模湾の断崖絶壁と門脇吊橋・城ヶ崎海岸（大室山の溶岩が造り出した雄大な海岸美と太平洋パノラマ）",
        "description": "静岡県伊東市南東部にある約9kmにわたるリアス式海岸。約4000年前に大室山が噴火した際に海へ流れ出した溶岩が、海の浸食作用によって削られて形成された荒々しい断崖絶壁が連なります。高さ約23m、長さ約48mの『門脇吊橋』からは足元に打ち寄せる白波と青く澄み渡る太平洋・相模湾を一望でき、初冬の澄んだ大気のもとでは伊豆大島をはじめとする伊豆諸島の島影がくっきりと浮かび上がります。海沿いには原生林の遊歩道が整備され、冬の心地よい潮風を感じる絶景散策が楽しめます。"
    },
    {
        "theme": "hyogo_arima_onsen_luxury",
        "query": "有馬温泉",
        "alt_queries": ["六甲山", "神戸市北区"],
        "label": "日本三古湯・太閤秀吉が愛した天下の名湯・有馬温泉（鉄分と塩分の金泉とラドン炭酸の銀泉）",
        "description": "兵庫県神戸市北区にある開湯千数百年の歴史を誇る名湯。『日本書紀』にも登場し、道後温泉・白浜温泉と並ぶ日本三古湯、また草津温泉・下呂温泉と並ぶ日本三名泉の一つ。戦国時代の天下人・豊臣秀吉が戦の傷と疲れを癒やすために幾度も湯治に訪れ、茶人・千利休とともに茶会を催した歴史を持ちます。大地の深部から湧き出る鉄分と超高濃度の塩分を含んだ赤褐色の『金泉』と、無色透明で清冽な炭酸泉・ラジウム泉の『銀泉』という全く異なる泉質を同時に堪能できる奇跡の温泉地です。"
    },
    {
        "theme": "nagano_tobira_onsen_myojinkan",
        "query": "美ヶ原",
        "alt_queries": ["松本市", "浅間温泉", "扉温泉"],
        "label": "標高2000mの大パノラマ・美ヶ原高原（北アルプス・富士山を一望する天空の台地と山峡の秘湯）",
        "description": "長野県松本市、上田市、小県郡長和町にまたがる八ヶ岳中信高原国定公園の北東端に位置する溶岩台地。最高峰の王ヶ頭（標高2034m）からは、初雪をまとった北アルプス連峰、中央アルプス、南アルプス、そして富士山まで360度遮るもののない大パノラマが広がります。初冬の澄み渡る空気のもとでは、朝焼けに染まる雲海や霧氷の神秘的な造形美が息を呑む美しさ。山麓の渓谷沿いには開湯数百年の扉温泉や浅間温泉が湧き、手つかずの自然に抱かれた静寂の湯治リトリートが叶います。"
    },
    {
        "theme": "kumamoto_kurokawa_shirakawa_luxury",
        "query": "黒川温泉 (熊本県)",
        "alt_queries": ["黒川温泉", "南小国町", "阿蘇山"],
        "label": "「街全体が一つの宿」緑豊かな渓谷の秘湯・黒川温泉（入湯手形と田の原川のせせらぎ・竹林の美）",
        "description": "熊本県阿蘇郡南小国町にある全国屈指の人気温泉郷。田の原川の深い渓谷沿いに木造の落ち着いた和風旅館が立ち並び、『黒川温泉一帯が一つの旅館（宿は離れ、道は廊下、植木は庭）』という統一された景観美を誇ります。名物の杉の『入湯手形』を用いた露天風呂巡りで知られ、渓流沿いや竹林、洞窟など野趣あふれる湯船が点在。泉質も硫黄泉、炭酸水素塩泉、硫酸塩泉など多種多様。初冬には温泉街に竹灯籠が灯るライトアップ『湯あかり』が始まり、幽玄な冬の夜歩きが愉しめます。"
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
        try:
            search_url = f"https://ja.wikipedia.org/w/api.php?action=query&list=search&srsearch={requests.utils.quote(attempt_query)}&format=json&utf8=1"
            res = requests.get(search_url, headers=HEADERS, timeout=10).json()
            search_results = res.get("query", {}).get("search", [])
            if not search_results:
                continue

            for item in search_results[:3]:
                title = item["title"]
                info_url = f"https://ja.wikipedia.org/w/api.php?action=query&titles={requests.utils.quote(title)}&prop=pageimages|extracts&pithumbsize=1000&exintro=1&explaintext=1&format=json&utf8=1"
                info_res = requests.get(info_url, headers=HEADERS, timeout=10).json()
                pages = info_res.get("query", {}).get("pages", {})
                for pid, pdata in pages.items():
                    if pid == "-1":
                        continue
                    if "thumbnail" in pdata:
                        img_url = pdata["thumbnail"]["source"]
                        page_title = title
                        wiki_extract = pdata.get("extract", "")
                        if wiki_extract and len(wiki_extract.strip()) > 50:
                            extract = wiki_extract.strip()[:600] + "..."
                        found_page = True
                        print(f"  ✓ Found with image: {title} -> {img_url}")
                        break
                if found_page:
                    break
        except Exception as e:
            print(f"  ✗ Error on {attempt_query}: {e}")

    output_data[s["theme"]] = {
        "query": q,
        "page_title": page_title,
        "label": s["label"],
        "image_url": img_url,
        "description": s["description"],
        "extract": extract
    }

out_file = os.path.join(os.path.dirname(__file__), "round145_wikipedia_spots.json")
with open(out_file, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print(f"\nSuccessfully wrote Wikipedia spot data to {out_file}!")
