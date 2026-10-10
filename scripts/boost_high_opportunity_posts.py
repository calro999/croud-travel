import json
import os
import re

updates = [
    {
        "file": "src/data/posts/autumn-gifu-gero-10selection.json",
        "new_title": "【下呂温泉 旅館 おすすめ】日本三名泉の美肌湯＆極上飛騨牛会席！秋・冬に泊まりたい人気宿ランキング10選",
        "new_desc": "【下呂温泉 旅館 おすすめ厳選】有馬・草津と並ぶ日本三名泉「下呂温泉」で絶対に失敗しない人気宿10選！とろとろの美肌湯、贅沢な飛騨牛会席、貸切露天風呂、湯めぐり手形の楽しみ方まで楽天トラベル公式連携データで徹底ガイド。",
        "keywords_add": ["下呂温泉 旅館 おすすめ", "下呂温泉 ホテル おすすめ", "下呂温泉 飛騨牛", "下呂温泉 露天風呂"]
    },
    {
        "file": "src/data/posts/cave-bath-geothermal-secret-onsen-hotels-guide.json",
        "new_title": "【洞窟温泉・洞窟風呂 おすすめ】波音と岩肌に包まれる神秘の秘湯！日本全国の絶景洞窟露天風呂名宿ガイド",
        "new_desc": "【洞窟温泉・洞窟風呂 おすすめ名宿】南紀勝浦の忘帰洞をはじめ、自然の岩肌や地熱の温もりに包まれる日本全国の神秘的な洞窟温泉を厳選！波打ち際の絶景露天や秘境の湯浴みを満喫できる宿泊ガイド。",
        "keywords_add": ["洞窟温泉", "洞窟風呂", "洞窟 温泉", "洞窟露天風呂 おすすめ"]
    },
    {
        "file": "src/data/posts/yukiroro.json",
        "new_title": "【ユキロロ（Yu Kiroro）ブログ宿泊記】北海道最高峰スノーリゾート！客室・スキーインアウト・温泉の完全レビュー",
        "new_desc": "【ユキロロ（Yu Kiroro）宿泊記ブログ】世界屈指のパウダースノーを誇る北海道キロロリゾートの高級コンドミニアム「ユキロロ」。ゲレンデ直結のスキーイン・スキーアウト、天然温泉、豪華キッチンの全貌を徹底解説。",
        "keywords_add": ["ユキロロ", "yu kiroro", "キロロ ホテル", "キロロ スキー場 宿泊"]
    },
    {
        "file": "src/data/posts/livemax-resort-echigo-yuzawa-blog-guide.json",
        "new_title": "【リブマックスリゾート越後湯沢 ブログ宿泊記】客室露天風呂・バイキング・立地の本音口コミ＆徹底レビュー",
        "new_desc": "【リブマックスリゾート越後湯沢 ブログ宿泊記】源泉掛け流しの客室半露天風呂、充実の和洋中バイキング、越後湯沢駅からのアクセスとコスパを旅のプロが本音レビュー！お得に泊まる予約術も網羅。",
        "keywords_add": ["リブマックスリゾート越後湯沢 ブログ", "リブマックス 越後湯沢 口コミ", "越後湯沢 温泉 ブログ"]
    },
    {
        "file": "src/data/posts/unkai-view-hotel-resort-japan-ranking.json",
        "new_title": "【雲海が見える宿・ホテルランキング】秋の絶景！テラスや客室露天から雲海パノラマを望む極上リゾート10選",
        "new_desc": "【雲海が見える宿・ホテル特集】秋から初冬に奇跡の絶景が広がる雲海リゾート！トマム雲海テラス、竹田城跡、長野・山形・九州の雲海展望ホテルまで、発生しやすい気候条件とおすすめ宿泊プランを徹底ガイド。",
        "keywords_add": ["雲海 ホテル", "雲海が見える宿", "雲海テラス 宿泊", "竹田城 雲海 ホテル"]
    },
    {
        "file": "src/data/posts/japan-nationwide-gotochi-special-feature-guide.json",
        "new_title": "【日本全国ご当地特集 2026-2027年最新】47都道府県の絶景・名湯・旬グルメを完全網羅！失敗しない国内旅行ガイド",
        "new_desc": "【日本全国ご当地特集 最新版】北は北海道から南は沖縄まで、47都道府県のご当地グルメ、名湯温泉、季節の絶景スポットをプロが総力特集！旅行計画や宿選びに役立つ国内旅行の決定版ガイド。",
        "keywords_add": ["日本全国ご当地特集", "全国ご当地特集", "47都道府県 ご当地グルメ", "国内旅行 おすすめ 特集"]
    },
    {
        "file": "src/data/posts/famous-spots-and-souvenirs-japan-prefecture-guide.json",
        "new_title": "【全国の有名観光地＆ご当地名物・お土産ガイド】47都道府県の人気スポット・銘菓・名物グルメ完全総まとめ",
        "new_desc": "【47都道府県 ご当地名物・お土産ガイド】熊本・鹿児島をはじめ日本全国の必食名物グルメや絶品お土産、定番観光スポットを網羅！旅行のお土産選びやご当地巡りに最適な完全保存版。",
        "keywords_add": ["熊本 名物", "鹿児島 名物", "全国 お土産 おすすめ", "都道府県 名物"]
    },
    {
        "file": "src/data/posts/yamanashi-onsen-ranking-hotels-guide.json",
        "new_title": "【山梨 旅館 おすすめ】富士山絶景露天風呂＆甲州牛・ワインに酔いしれる人気温泉宿ランキング",
        "new_desc": "【山梨 旅館 おすすめ特集】河口湖・石和温泉・八ヶ岳など山梨県を代表する人気温泉旅館を厳選！富士山を望む絶景露天風呂、極上甲州牛会席、甲州ワインが楽しめる名宿ガイド。",
        "keywords_add": ["山梨 旅館 おすすめ", "山梨 温泉 ホテル おすすめ", "河口湖 旅館 おすすめ"]
    },
    {
        "file": "src/data/posts/hyogo-onsen-ranking-hotels-guide.json",
        "new_title": "【兵庫 温泉宿 おすすめ】有馬の金泉・城崎の冬ガニ・淡路島洲本温泉！贅沢ステイの人気宿ランキング",
        "new_desc": "【兵庫 温泉宿 おすすめ厳選】有馬温泉の金泉銀泉、城崎温泉の松葉ガニと外湯めぐり、淡路島洲本温泉のオーシャンビューまで、兵庫県を代表する名湯と美食旅館を徹底比較！",
        "keywords_add": ["兵庫 温泉宿 おすすめ", "洲本温泉 ホテル おすすめ", "有馬温泉 旅館 おすすめ"]
    }
]

for up in updates:
    fpath = up["file"]
    if not os.path.exists(fpath):
        print("Not found:", fpath)
        continue
    with open(fpath, "r", encoding="utf-8") as fp:
        data = json.load(fp)
    
    data["title"] = up["new_title"]
    data["description"] = up["new_desc"]
    
    # キーワードの補強
    kw_list = data.get("keywords", [])
    for kw in up["keywords_add"]:
        if kw not in kw_list:
            kw_list.insert(0, kw)
    data["keywords"] = kw_list
    
    with open(fpath, "w", encoding="utf-8") as fp:
        json.dump(data, fp, ensure_ascii=False, indent=2)
    
    print(f"Successfully boosted SEO for: {fpath}")

print("\nAll high-opportunity GSC target posts boosted successfully!")
