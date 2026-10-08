import json
import os
import requests

HEADERS = {
    "User-Agent": "TravelGuideApp/1.0 (https://croud-travel.pages.dev; contact@travel.app)"
}

spots = [
    {
        "theme": "fukuoka_fukutsu_miyajidake",
        "query": "宮地嶽神社",
        "label": "開運の巨刹・宮地嶽神社（日本一の大注連縄と夕日絶景「光の道」）",
        "description": "福岡県福津市に鎮座する由緒ある古社で、息長足姫命（神功皇后）を主祭神として祀る。日本一の大きさを誇る直径2.6メートル・長さ11メートル・重さ3トンの大注連縄をはじめ、日本一の大太鼓・大銅鈴の「三つの日本一」で知られる。毎年10月下旬と2月下旬には神社から玄界灘・相島へと一直線に伸びる参道を夕日が黄金色に照らす「光の道」が出現し、全国的に脚光を浴びた。新春初詣には九州各地から200万人以上の参拝者が訪れる。"
    },
    {
        "theme": "yamagata_tendo_yamadera_snow",
        "query": "立石寺",
        "label": "奇岩霊山・宝珠山立石寺（山寺・冬の白銀水墨画パノラマ）",
        "description": "山形県山形市山寺にある天台宗の古刹で、通称「山寺（やまでら）」として親しまれる。貞観2年（860年）に慈覚大師円仁が開山した霊場で、松尾芭蕉が「閑さや岩にしみ入る蝉の声」の名句を詠んだ地としても著名。標高差約160m、千余段の石段を登った先にある断崖の五大堂からは、冬になると白銀に雪化粧した山寺渓谷と山並みが一望でき、まるで息を呑む一幅の水墨画のような荘厳な冬景色が広がる。"
    },
    {
        "theme": "ibaraki_kashima_jingu_hatsumode",
        "query": "鹿島神宮",
        "label": "東国三社筆頭・常陸国一宮 鹿島神宮（武甕槌大神の霊場と御手洗池）",
        "description": "茨城県鹿嶋市に鎮座する日本全国の鹿島神社の総本社。神武天皇元年（紀元前660年）創建と伝わる関東最古の神社であり、武神・武甕槌大神を祀る「すべての始まり・武運・開運の聖地」。東国三社（鹿島神宮・香取神宮・息栖神社）の筆頭として知られ、広大な鎮守の杜に佇む国宝・重要文化財の社殿群や、1日数十万リットルの清水が湧き出る神秘の「御手洗池（みたらしいけ）」など、厳かな新春の気が満ちる名社。"
    },
    {
        "theme": "niigata_teradomari_yomogihira",
        "query": "寺泊町",
        "label": "日本海魚のアメ横・寺泊海岸通り（冬のズワイガニと寒ブリ市場）",
        "description": "新潟県長岡市（旧三島郡寺泊町）の日本海に面した港町。寺泊海岸通り沿いに軒を連ねる「魚のアメ横（寺泊魚の市場通り）」は日本海屈指の海鮮市場として知られ、11月から1月の冬期には本ズワイガニや紅ズワイガニ、日本海の荒波で育った寒ブリ、南蛮エビなどが店頭に所狭しと並び、浜焼きの香ばしい煙と活気ある呼び込みが冬の風物詩となっている。奥座敷の蓬平温泉や商売繁盛の高龍神社とともに新潟の冬を彩る。"
    },
    {
        "theme": "nara_shigisan_chogosonshiji",
        "query": "朝護孫子寺",
        "label": "毘沙門天王総本山・信貴山朝護孫子寺（世界一の福寅と登録有形文化財開運橋）",
        "description": "奈良県生駒郡平群町の霊峰・信貴山（標高437m）に位置する寺院。聖徳太子が物部守屋討伐の戦勝祈願をした際、寅の年・寅の日・寅の刻に毘沙門天王が出現したことに由来し、毘沙門天王を祀る総本山として信仰を集める。境内入口には世界一の大きさを誇る巨大な「世界一福寅（張子の寅）」が鎮座し、冬の新春初詣には金運・招福・開運を願う参拝者で賑わう。信貴山に架かる日本最古のカンチレバー橋「開運橋」からの雪景色も圧巻。"
    }
]

output_data = {}

for s in spots:
    q = s["query"]
    print(f"Fetching Wikipedia info for: {q}...")
    
    # 1. 検索
    s_url = f"https://ja.wikipedia.org/w/api.php?action=query&list=search&srsearch={requests.utils.quote(q)}&srlimit=3&format=json"
    s_res = requests.get(s_url, headers=HEADERS, timeout=8).json()
    search_items = s_res.get('query', {}).get('search', [])
    page_title = search_items[0]['title'] if search_items else q

    # 2. サムネイル画像取得
    p_url = f"https://ja.wikipedia.org/w/api.php?action=query&titles={requests.utils.quote(page_title)}&prop=pageimages|extracts&exintro=true&explaintext=true&pithumbsize=1280&format=json"
    p_res = requests.get(p_url, headers=HEADERS, timeout=8).json()
    pages = p_res.get('query', {}).get('pages', {})

    img_url = ""
    extract = s["description"]

    for pid, p in pages.items():
        thumb = p.get('thumbnail')
        if thumb:
            img_url = thumb.get('source', '')
        ex = p.get('extract')
        if ex and len(ex) > 40:
            extract = ex.replace('\n', ' ').strip()
            if len(extract) > 250:
                extract = extract[:240] + "…"

    # 画像が取れなかった場合のフォールバック（Wikimedia Commons検索）
    if not img_url:
        print(f"  Fallback image search for {q}...")
        img_search_url = f"https://ja.wikipedia.org/w/api.php?action=query&titles={requests.utils.quote(page_title)}&generator=images&gimlimit=10&prop=imageinfo&iiprop=url|size|mime&format=json"
        img_res = requests.get(img_search_url, headers=HEADERS, timeout=8).json()
        for _, ip in img_res.get('query', {}).get('pages', {}).items():
            info = ip.get('imageinfo', [{}])[0]
            u = info.get('url', '')
            if any(ext in u.lower() for ext in ['.jpg', '.jpeg', '.png']) and 'logo' not in u.lower() and 'icon' not in u.lower() and 'flag' not in u.lower():
                img_url = u
                break

    output_data[s["theme"]] = {
        "spotLabel": s["label"],
        "query": q,
        "pageTitle": page_title,
        "imageUrl": img_url,
        "description": extract
    }
    print(f"  -> {s['label']}: Image = {img_url[:60]}... | Text = {extract[:40]}...")

out_file = "scripts/round137/round137_wikipedia_spots.json"
with open(out_file, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print(f"\nSaved Wikipedia spot info to {out_file}")
