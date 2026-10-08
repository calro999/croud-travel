import json
import os
import requests

HEADERS = {
    "User-Agent": "TravelGuideApp/1.0 (https://croud-travel.pages.dev; contact@travel.app)"
}

spots = [
    {
        "theme": "saitama_menuma_fukaya_negi",
        "query": "歓喜院 (熊谷市)",
        "alt_queries": ["妻沼聖天山", "歓喜院"],
        "label": "国宝・妻沼聖天山歓喜院（埼玉の日光東照宮・精緻な彫刻美と新春縁結び開運）",
        "description": "埼玉県熊谷市妻沼に鎮座する高野山真言宗の古刹で、日本三大聖天の一角に数えられる名刹。治承3年（1179年）に武蔵坊弁慶の叔父とも伝わる武将・斎藤別当実盛が開創した。宝暦10年（1760年）に再建された本殿「歓喜院聖天堂」は日光東照宮の流れを汲む極彩色の精巧な彫刻が壁面全体に施されており、2012年に国宝に指定された。冬の新春初詣には家内安全・商売繁盛・良縁成就を願う参拝者で賑わい、名物の「妻沼寿司（いなり寿司）」とともに親しまれる。"
    },
    {
        "theme": "kanagawa_kawasaki_daishi_hatsumode",
        "query": "平間寺",
        "alt_queries": ["川崎大師"],
        "label": "厄除弘法大師・金剛山金乗院平間寺（川崎大師・新春初詣300万人の大本山）",
        "description": "神奈川県川崎市川崎区大師町に位置する真言宗智山派の大本山。通称「川崎大師（かわさきだいし）」として親しまれ、成田山新勝寺・高尾山薬王院とともに真言宗智山派の関東三大本山のひとつに数えられる。大治3年（1128年）の開創と伝わり、強力な厄除けのご利益で名高く、初詣には正月三が日だけで全国有数の約300万人もの参拝客が訪れる。仲見世通りの名物「とんとこ飴」や「久寿餅（くずもち）」の活気あふれる風情も冬の風物詩。"
    },
    {
        "theme": "saga_yoshinogari_saga_castle",
        "query": "吉野ヶ里遺跡",
        "alt_queries": ["吉野ヶ里歴史公園"],
        "label": "国指定特別史跡・吉野ヶ里歴史公園（弥生の大集落と冬の幻想祭典「光の響」）",
        "description": "佐賀県神埼郡吉野ヶ里町および神埼市にまたがる弥生時代最大級の環濠集落遺跡。国の特別史跡に指定され、広大な敷地内には主祭殿や物見櫓、高床住居などが忠実に復元されている。毎年12月中旬〜下旬の週末には冬の特別イベント「吉野ヶ里・光の響（ひかりのひびき）」が開催され、数千個のキャンドルの灯籠や熱気球の夜間係留（バーナーの炎で夜空に気球が輝くナイトグロー）が古代の集落を幻想的に照らし出す。"
    },
    {
        "theme": "osaka_sumiyoshi_taisha_hatsumode",
        "query": "住吉大社",
        "alt_queries": ["反橋"],
        "label": "摂津国一宮・住吉大社（国宝四棟本殿・渡るだけでお祓いになる反橋太鼓橋）",
        "description": "大阪府大阪市住吉区に鎮座する、全国約2,300社ある住吉神社の総本社。神功皇后摂政11年（211年）創建と伝わる摂津国一之宮で、海の神・航海安全・和歌・農耕の神として古くから信仰される。国宝に指定されている四棟の本殿は日本最古の神社建築様式のひとつ「住吉造」を今に伝える。最大傾斜約48度を誇る象徴的な「反橋（太鼓橋）」は渡るだけで罪や穢れが祓い清められるとされ、冬の新春初詣には200万人以上の参拝者で大いに賑わう。"
    },
    {
        "theme": "mie_futamiura_meotoiwa_vison",
        "query": "二見興玉神社",
        "alt_queries": ["夫婦岩"],
        "label": "禊の聖地・二見興玉神社（伊勢湾の夫婦岩と冬の清らかな初日の出・満月）",
        "description": "三重県伊勢市二見町江に鎮座する古社で、猿田彦大神と宇迦御魂神を祭神とする。古来より伊勢神宮へ参拝する前に二見浦の海水で心身を清める「浜参宮（禊）」の聖地として知られる。海岸から約700m沖合に沈む霊石「興玉神石」と日の神を拝する鳥居の役割を果たすのが、大注連縄で結ばれた二つの岩「夫婦岩（めおといわ）」。11月から1月の冬期は空気が澄み渡り、夫婦岩の間から昇る荘厳な初日の出や、冬の夜空に浮かぶ満月が岩の間に沈む幻想的な絶景が拝める。"
    }
]

output_data = {}

for s in spots:
    q = s["query"]
    print(f"Fetching Wikipedia info for: {q}...")
    
    page_title = q
    img_url = ""
    extract = s["description"]

    # 1. 検索
    queries_to_try = [q] + s.get("alt_queries", [])
    found_page = False

    for test_q in queries_to_try:
        s_url = f"https://ja.wikipedia.org/w/api.php?action=query&list=search&srsearch={requests.utils.quote(test_q)}&srlimit=3&format=json"
        try:
            s_res = requests.get(s_url, headers=HEADERS, timeout=8).json()
            search_items = s_res.get('query', {}).get('search', [])
            if search_items:
                page_title = search_items[0]['title']
                found_page = True
                break
        except Exception as e:
            print(f"  Search error for {test_q}: {e}")

    # 2. ページ情報とサムネイル
    p_url = f"https://ja.wikipedia.org/w/api.php?action=query&titles={requests.utils.quote(page_title)}&prop=pageimages|extracts&exintro=true&explaintext=true&pithumbsize=1280&format=json"
    try:
        p_res = requests.get(p_url, headers=HEADERS, timeout=8).json()
        pages = p_res.get('query', {}).get('pages', {})
        for pid, p in pages.items():
            thumb = p.get('thumbnail')
            if thumb:
                img_url = thumb.get('source', '')
            ex = p.get('extract')
            if ex and len(ex) > 40:
                extract = ex.replace('\n', ' ').strip()
                if len(extract) > 280:
                    extract = extract[:270] + "…"
    except Exception as e:
        print(f"  Page info error: {e}")

    # 3. フォールバック画像取得
    if not img_url:
        print(f"  Fallback image search for {page_title}...")
        img_search_url = f"https://ja.wikipedia.org/w/api.php?action=query&titles={requests.utils.quote(page_title)}&generator=images&gimlimit=10&prop=imageinfo&iiprop=url|size|mime&format=json"
        try:
            img_res = requests.get(img_search_url, headers=HEADERS, timeout=8).json()
            for _, ip in img_res.get('query', {}).get('pages', {}).items():
                info = ip.get('imageinfo', [{}])[0]
                u = info.get('url', '')
                if any(ext in u.lower() for ext in ['.jpg', '.jpeg', '.png']) and 'logo' not in u.lower() and 'icon' not in u.lower() and 'flag' not in u.lower():
                    img_url = u
                    break
        except Exception as e:
            print(f"  Image search error: {e}")

    output_data[s["theme"]] = {
        "spotLabel": s["label"],
        "query": q,
        "pageTitle": page_title,
        "imageUrl": img_url,
        "description": extract
    }
    print(f"  -> [{s['theme']}] {s['label']}: Image = {img_url[:60]}... | Text = {extract[:40]}...")

out_file = "scripts/round138/round138_wikipedia_spots.json"
with open(out_file, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print(f"\nSaved Wikipedia spot info to {out_file}")
