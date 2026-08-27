import json, os, glob

POSTS_DIR = os.path.join("src", "data", "posts")

# 1. 洞窟温泉・洞窟風呂・洞窟みたいな温泉 特化記事の肉付け
cave_file = os.path.join(POSTS_DIR, "cave-onsen-dokutsu-furo-japan-ranking-guide.json")
if os.path.exists(cave_file):
    with open(cave_file, "r", encoding="utf-8") as f:
        d = json.load(f)
    
    # 肉付け
    d["title"] = "【全国】洞窟温泉・洞窟風呂おすすめランキング7選！秘湯・絶景・東海や和歌山の名湯ガイド"
    d["description"] = "神秘的な岩肌と湯煙に包まれる全国の洞窟温泉・洞窟風呂特集！和歌山・勝浦の海蝕洞窟風呂「忘帰洞」、熊本・黒川の手彫り洞窟風呂、東海近郊の隠れ名湯まで。日帰り入浴から宿泊予約、泉質・効能を徹底比較。"
    d["keywords"] = list(set(d.get("keywords", []) + [
        "洞窟 温泉", "洞窟温泉", "洞窟風呂", "洞窟 風呂", "温泉 洞窟",
        "洞窟温泉 ランキング", "洞窟みたいな温泉", "洞窟温泉 東海",
        "勝浦温泉 忘帰洞", "黒川温泉 新明館 洞窟風呂", "秘湯 洞窟温泉"
    ]))
    d["review"] += """
<h3 class="text-lg font-bold text-stone-900 border-b border-amber-300 pb-1 mt-6 mb-3">🌊 東海・関西・九州の注目「洞窟温泉」比較</h3>
<div class="space-y-3 text-xs text-stone-700 my-4">
  <div class="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200">
    <h4 class="font-bold text-amber-950 text-sm mb-1">1. 和歌山県 南紀勝浦温泉「ホテル浦島（大洞窟風呂 忘帰洞）」</h4>
    <p>太平洋の荒波が打ち寄せる巨大な天然海蝕洞窟の中に湧く名湯。「帰るのを忘れるほど心地よい」と称された絶景風呂は圧巻の一言です。</p>
  </div>
  <div class="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200">
    <h4 class="font-bold text-amber-950 text-sm mb-1">2. 熊本県 黒川温泉「新明館（手掘り洞窟風呂）」</h4>
    <p>館主が10年の歳月をかけてノミとツルハシで掘り進めた全長30mの神秘的洞窟。ほの暗い灯りと心地よい湯音が非日常へと誘います。</p>
  </div>
  <div class="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200">
    <h4 class="font-bold text-amber-950 text-sm mb-1">3. 静岡県・伊豆／東海エリアの海浜洞窟温泉</h4>
    <p>伊豆半島の海岸線沿いにも、波の浸食によってできた洞窟露天風呂が点在。波音と硫黄の香りに包まれる極上リトリートです。</p>
  </div>
</div>
"""
    with open(cave_file, "w", encoding="utf-8") as f:
        json.dump(d, f, ensure_ascii=False, indent=2)
    print("Enriched cave-onsen")

# 2. ラルク Link ロケ地・金沢21世紀美術館 特化記事の作成
larc_file = os.path.join(POSTS_DIR, "larc-link-location-travel-guide.json")
larc_data = {
    "id": "larc-link-location-travel-guide",
    "slug": "larc-link-location-travel-guide",
    "title": "【聖地巡礼】ラルク「Link」PVロケ地は金沢21世紀美術館！アクセス＆周辺おすすめホテル",
    "description": "L'Arc〜en〜Cielの名曲『Link』のミュージックビデオ撮影ロケ地「金沢21世紀美術館」徹底ガイド！スイミング・プールなどPV登場シーンの解説、金沢駅からの行き方、周辺のおしゃれな温泉宿・人気ホテルを紹介。",
    "prefecture": "石川県",
    "area": "金沢・兼六園・加賀温泉",
    "hotel_name": "金沢21世紀美術館周辺おすすめホテル特集",
    "image": "https://img.travel.rakuten.co.jp/share/HOTEL/14742/14742.jpg",
    "other_images": [
        "https://img.travel.rakuten.co.jp/share/HOTEL/1660/1660.jpg"
    ],
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F",
    "price": 9800,
    "rating": 4.88,
    "date": "2026-08-26",
    "categories": ["聖地巡礼", "ラルク", "金沢", "美術館", "石川旅行", "楽天トラベル"],
    "keywords": [
        "ラルク link ロケ地",
        "21世紀美術館 ラルク",
        "ラルク 21世紀美術館",
        "金沢21世紀美術館 ロケ地 pv",
        "金沢 ホテル おすすめ",
        "金沢駅 温泉宿",
        "石川県 有名なもの",
        "石川県観光 スポット"
    ],
    "is_special_feature": True,
    "review": """<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">L'Arc〜en〜Ciel『Link』の象徴的な世界観！金沢21世紀美術館ロケ地巡礼</h2>
<p class="text-xs text-stone-700 leading-relaxed my-2">2005年リリースのラルクの名曲『Link』。爽快でエモーショナルなPVのメイン舞台となったのが、石川県金沢市にある世界的名所「金沢21世紀美術館」です。レアンドロ・エルリッヒ作の「スイミング・プール」を中心に、丸いガラス張りのモダン建築が映像美を引き立てています。</p>

<h3 class="text-lg font-bold text-stone-900 border-b border-amber-300 pb-1 mt-6 mb-3">🎨 PVロケ地巡りの見どころ＆撮影ポイント</h3>
<ul class="text-xs text-stone-700 space-y-2 list-disc list-inside bg-amber-50/50 p-4 rounded-xl border border-amber-200">
  <li><strong>スイミング・プール（地下・地上）：</strong>メンバーが佇んでいた象徴的なプール。地下部への入場は事前予約（ウェブ日時指定）が推奨されます。</li>
  <li><strong>光庭・ガラス張りの円形コリドー：</strong>自然光が降り注ぐ回廊は、PVの透明感あふれる光景そのもの。</li>
  <li><strong>周辺観光との組み合わせ：</strong>兼六園、金沢城公園、ひがし茶屋街へも徒歩・バスですぐの好立地。</li>
</ul>

<h3 class="text-lg font-bold text-stone-900 border-b border-amber-300 pb-1 mt-6 mb-3">🏨 金沢観光＆ロケ地巡りにおすすめの人気宿</h3>
<p class="text-xs text-stone-700 leading-relaxed my-2">金沢駅前には天然温泉大浴場付きのシティホテルが充実。また、美術館近くの香林坊・片町エリアなら夜の金沢グルメや地酒巡りにも抜群のアクセスです。</p>

<div class="pt-4 text-center">
  <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-white font-black text-xs rounded-2xl shadow-md hover:scale-105 transition transform">
    🎨 【楽天トラベル】金沢21世紀美術館周辺の人気ホテル＆お得なプランを見る
  </a>
</div>"""
}
with open(larc_file, "w", encoding="utf-8") as f:
    json.dump(larc_data, f, ensure_ascii=False, indent=2)
print("Created larc-link guide")

# 3. 能登空港・ポケモン・足湯・ポケふた 特化記事
noto_file = os.path.join(POSTS_DIR, "noto-airport-pokemon-footbath-guide.json")
noto_data = {
    "id": "noto-airport-pokemon-footbath-guide",
    "slug": "noto-airport-pokemon-footbath-guide",
    "title": "【能登空港】のと里山空港の足湯＆ポケモン（ポケふた）完全攻略ガイド！珠洲・輪島復興応援旅",
    "description": "のと里山空港（能登空港）の無料天然温泉足湯、石川県応援ポケモン（トゲピー・ミロカロス等）のポケふた設置場所、珠洲・能登の観光情報！空港アクセスやレンタカー、周辺の温泉旅館・復興応援宿泊プランを網羅。",
    "prefecture": "石川県",
    "area": "能登・輪島・珠洲",
    "hotel_name": "能登空港・能登半島復興応援宿泊特集",
    "image": "https://img.travel.rakuten.co.jp/share/HOTEL/1660/1660.jpg",
    "other_images": [
        "https://img.travel.rakuten.co.jp/share/HOTEL/14742/14742.jpg"
    ],
    "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F",
    "price": 8500,
    "rating": 4.85,
    "date": "2026-08-26",
    "categories": ["能登空港", "ポケモン", "足湯", "ポケふた", "石川旅行", "楽天トラベル"],
    "keywords": [
        "能登空港 足湯",
        "能登空港 ポケモン",
        "石川県ポケモン空港",
        "のともり ポケモン",
        "ポケモン 珠洲",
        "能登 ポケふた 回り 方",
        "能登 温泉",
        "のと里山空港 観光",
        "石川県 有名なもの"
    ],
    "is_special_feature": True,
    "review": """<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">のと里山空港の癒やしスポット！無料足湯とポケモンポケふた巡り</h2>
<p class="text-xs text-stone-700 leading-relaxed my-2">のと里山空港（能登空港）には、旅行者や地元の方に愛される天然温泉の「足湯」が併設されています。フライト前後のリフレッシュやドライブの休憩に最適なスポットです。また、石川県応援ポケモンのマンホール蓋（ポケふた）が能登各地・珠洲市・輪島市等に設置され、ポケモンファン必見の観光ルートとなっています。</p>

<h3 class="text-lg font-bold text-stone-900 border-b border-amber-300 pb-1 mt-6 mb-3">⚡ 能登・珠洲のポケふた＆観光ハイライト</h3>
<div class="space-y-3 text-xs text-stone-700 my-4">
  <div class="p-3 bg-white rounded-lg border border-amber-100 shadow-sm">
    <strong>のと里山空港足湯：</strong>屋外デッキ横に位置し、飛行機を眺めながら温かい源泉足湯に浸かれます（利用無料・タオル販売あり）。
  </div>
  <div class="p-3 bg-white rounded-lg border border-amber-100 shadow-sm">
    <strong>能登半島ポケふた巡り：</strong>珠洲市や能登町、志賀町などに設置されたオリジナルデザインのポケふたを探しながら能登路をドライブ。
  </div>
</div>

<div class="pt-4 text-center">
  <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-white font-black text-xs rounded-2xl shadow-md hover:scale-105 transition transform">
    🛫 【楽天トラベル】能登・金沢のおすすめ宿・レンタカー付プランを見る
  </a>
</div>"""
}
with open(noto_file, "w", encoding="utf-8") as f:
    json.dump(noto_data, f, ensure_ascii=False, indent=2)
print("Created noto-airport guide")

# 4. 下呂温泉 特化記事群の劇的肉付け（下呂温泉までの距離、電車、ランキング、老舗宿）
gero_master = os.path.join(POSTS_DIR, "gero-onsen-ranking-gourmet-hotels-guide.json")
if os.path.exists(gero_master):
    with open(gero_master, "r", encoding="utf-8") as f:
        gd = json.load(f)
    gd["title"] = "【2026年最新】下呂温泉おすすめ人気宿ランキング＆アクセスガイド！電車での行き方・グルメ・老舗旅館"
    gd["description"] = "日本三名泉・下呂温泉のおすすめホテル＆旅館ランキング！名古屋・高山からの電車・車での所要時間・距離、温泉街の食べ歩きグルメ（温玉ソフト・飛騨牛握り）、水明館や湯之島館など名門老舗宿から格安コスパ宿まで徹底紹介。"
    gd["keywords"] = list(set(gd.get("keywords", []) + [
        "下呂温泉", "下呂 温泉", "下呂温泉 旅行", "下呂温泉 旅館 おすすめ", "下呂温泉 ランキング",
        "下呂温泉 ホテル おすすめ", "下呂溫泉", "下呂 温泉 ランキング", "岐阜 下呂温泉",
        "下呂温泉 老舗旅館", "下呂温泉 人気ランキング", "下呂温泉 おすすめ", "下呂温泉 宿 おすすめ",
        "下呂 旅館 おすすめ", "下呂温泉人気宿", "下呂温泉おすすめ", "下呂温泉 旅館",
        "下呂温泉まで", "下呂温泉までの距離", "下呂温泉まで電車", "下呂温泉 宿泊 おすすめ",
        "下呂温泉おすすめ温泉", "下呂温泉 宿泊 ランキング", "下呂 温泉 旅行", "岐阜県 下呂温泉"
    ]))
    gd["review"] += """
<h3 class="text-lg font-bold text-stone-900 border-b border-amber-300 pb-1 mt-6 mb-3">🚆 下呂温泉へのアクセス・距離・電車での行き方</h3>
<div class="my-4 bg-amber-50/60 p-4 rounded-xl border border-amber-200 text-xs text-stone-700 space-y-2">
  <p><strong>【電車でのアクセス】：</strong>名古屋駅からJR特急「ひだ」（ワイドビューひだ）で直通約1時間40分。下呂駅下車すぐで温泉街に到着します。</p>
  <p><strong>【車でのアクセス・距離】：</strong>名古屋ICから中央自動車道・中津川IC経由で約2時間（約100km）。東海北陸道・富加関IC経由でもスムーズにアクセス可能です。</p>
  <p><strong>【高山からのアクセス】：</strong>JR特急ひだで約45分、車で約1時間（約45km）。飛騨高山観光との組み合わせモデルコースが大人気です。</p>
</div>
"""
    with open(gero_master, "w", encoding="utf-8") as f:
        json.dump(gd, f, ensure_ascii=False, indent=2)
    print("Enriched Gero Master Guide")

print("Enrichment script completed successfully.")
