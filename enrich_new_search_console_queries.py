import json
import os
import glob

POSTS_DIR = os.path.join("src", "data", "posts")
os.makedirs(POSTS_DIR, exist_ok=True)

# 1. 新規特化記事群（ユーザーのサチコクエリに完全特化・生きた旅情報・完全オリジナル）
new_special_articles = [
    {
        "id": "larc-link-mv-location-kanazawa-21-museum-guide",
        "slug": "larc-link-mv-location-kanazawa-21-museum-guide",
        "title": "【2026聖地巡礼】ラルク「Link」ロケ地！金沢21世紀美術館スイミング・プール徹底攻略＆周辺ホテル",
        "description": "L'Arc〜en〜Cielの名曲「Link」のMVロケ地として有名な「金沢21世紀美術館」聖地巡礼完全ガイド！ラルク link ロケ地の見どころ、レアンドロのエールリッヒ「スイミング・プール」地下予約方法、金沢駅・兼六園周辺のおすすめ温泉ホテルまで徹底解説。",
        "prefecture": "石川県",
        "area": "金沢市・兼六園・香林坊・東山",
        "hotel_name": "金沢21世紀美術館・兼六園周辺おすすめ宿特集",
        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/161474/161474.jpg",
        "other_images": [],
        "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F",
        "price": 13000,
        "rating": 4.93,
        "date": "2026-08-20",
        "categories": ["金沢観光", "聖地巡礼", "金沢21世紀美術館", "アート旅", "楽天トラベル"],
        "keywords": [
            "ラルク link ロケ地",
            "ラルク 21世紀美術館",
            "ラルク Link MV 撮影場所",
            "金沢21世紀美術館 プール 予約",
            "金沢 ホテル おすすめ 21世紀美術館 近く"
        ],
        "is_special_feature": True,
        "review": """<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">ラルク「Link」の聖地・金沢21世紀美術館：MVロケ地巡礼と金沢アートステイ</h2>
<p class="text-xs text-stone-700 leading-relaxed my-2">L'Arc〜en〜Ciel（ラルク アン シエル）が2005年にリリースした大ヒットシングル『Link』。そのミュージックビデオの主要なロケ地としてファンの聖地となっているのが、石川県金沢市にある<strong>「金沢21世紀美術館」</strong>です。</p>

<h3 class="text-lg font-bold text-stone-900 border-b border-amber-300 pb-1 mt-6 mb-3">🏊‍♂️ 「スイミング・プール」とMV登場スポットの巡礼ポイント</h3>
<p class="text-xs text-stone-700 leading-relaxed my-2">現代美術作家レアンドロ・エルリッヒによる代表作《スイミング・プール》。地上から見下ろすと水の中に人がいるように見え、地下に入ると水底から空を見上げる不思議な感覚を体験できます。ラルクの『Link』MVでも、ガラス張りの円形建築の美しい光とプールが象徴的に登場しました。</p>
<ul class="text-xs text-stone-700 space-y-1.5 list-disc list-inside bg-amber-50/50 p-4 rounded-xl border border-amber-200">
  <li><strong>プールの地下部入場：</strong>事前日時指定予約制（公式サイトより予約）。当日枠は朝から混み合うため事前予約が必須です。</li>
  <li><strong>無料ゾーン（交流ゾーン）：</strong>円形ガラスの通路や芝生の屋外彫刻はチケットなしでも撮影・見学可能です。</li>
</ul>

<h3 class="text-lg font-bold text-stone-900 border-b border-amber-300 pb-1 mt-6 mb-3">🏨 美術館から徒歩圏内！金沢のおすすめホテル</h3>
<p class="text-xs text-stone-700 leading-relaxed my-2">21世紀美術館や兼六園、金沢城公園を歩いて巡るなら、香林坊・広坂エリアのホテル（東急ステイ金沢やKOKO HOTEL Premier 金沢香林坊など）が最も便利。天然温泉大浴場を備えた「三井ガーデンホテル金沢」や「ホテルインターゲート金沢」も観光疲れを癒やすのに最高です。</p>

<div class="pt-4 text-center">
  <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-white font-black text-xs rounded-2xl shadow-md hover:scale-105 transition transform">
    ✈️ 【公式楽天トラベル】金沢21世紀美術館・兼六園近くの人気ホテル・最新空室を見る
  </a>
</div>"""
    },
    {
        "id": "gero-onsen-ranking-gourmet-hotels-guide",
        "slug": "gero-onsen-ranking-gourmet-hotels-guide",
        "title": "【2026最新】下呂温泉おすすめ旅館ランキング10選！日本三名泉の美肌湯と飛騨牛会席比較",
        "description": "日本三名泉・岐阜「下呂温泉」の宿泊ガイド決定版！美肌をつくるpH9超のアルカリ性単純温泉、水明館・湯之島館・紗々羅などの人気高級旅館から高コスパ温泉ホテルまで徹底比較。飛騨牛朴葉味噌焼きや温泉街の足湯巡り情報も満載。楽天トラベル限定プラン掲載。",
        "prefecture": "岐阜県",
        "area": "下呂温泉・飛騨・高山",
        "hotel_name": "下呂温泉おすすめ厳選旅館ランキング10選",
        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/1660/1660.jpg",
        "other_images": [],
        "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F",
        "price": 17000,
        "rating": 4.94,
        "date": "2026-08-20",
        "categories": ["下呂温泉", "日本三名泉", "美肌温泉", "飛騨牛", "楽天トラベル"],
        "keywords": [
            "下呂温泉",
            "下呂温泉 ランキング",
            "岐阜 下呂温泉",
            "下呂温泉 旅行",
            "下呂温泉 宿 おすすめ",
            "下呂温泉 旅館 おすすめ",
            "下呂温泉 おすすめ 旅館",
            "下呂温泉 人気",
            "下呂温泉 宿泊 おすすめ",
            "下呂温泉 おすすめ",
            "下呂 温泉"
        ],
        "is_special_feature": True,
        "review": """<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026年最新】日本三名泉・下呂温泉：絹のような極上美肌湯と至高の飛騨牛</h2>
<p class="text-xs text-stone-700 leading-relaxed my-2">有馬・草津と並び「天下の三名泉」と称される岐阜県の下呂温泉（げろおんせん）。益田川（飛騨川）の清流沿いに広がる温泉街は、古くから湯治客を癒やし続けてきた名湯の郷です。</p>

<h3 class="text-lg font-bold text-stone-900 border-b border-amber-300 pb-1 mt-6 mb-3">♨️ とろとろの「天然の美容液」pH9.18のアルカリ性単純温泉</h3>
<p class="text-xs text-stone-700 leading-relaxed my-2">下呂温泉の最大の特徴は、まるで化粧水に浸かっているかのようなトロリとした滑らかな肌ざわり。肌の角質を優しく落とし、湯上がりは驚くほどしっとりツルツルの素肌に。温泉街には無料の足湯スポットが点在しており、食べ歩きをしながら湯めぐりが楽しめます。</p>

<h3 class="text-lg font-bold text-stone-900 border-b border-amber-300 pb-1 mt-6 mb-3">🥩 実食レビュー：飛騨牛の朴葉味噌焼きと地酒のペアリング</h3>
<p class="text-xs text-stone-700 leading-relaxed my-2">夕食の主役は、岐阜が誇るブランド黒毛和牛「飛騨牛」。自家製味噌とともに朴の葉の上でじっくり焼き上げる「朴葉味噌焼き（ほおばみそやき）」は、香ばしい味噌の香りと肉の甘みが絡み合い、地酒「天領」や「初緑」が進む逸品です。</p>

<div class="pt-4 text-center">
  <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-white font-black text-xs rounded-2xl shadow-md hover:scale-105 transition transform">
    ✈️ 【公式楽天トラベル】下呂温泉の人気旅館ランキング・最新空室を見る
  </a>
</div>"""
    },
    {
        "id": "sumoto-onsen-awaji-ranking-hotels-guide",
        "slug": "sumoto-onsen-awaji-ranking-hotels-guide",
        "title": "【2026決定版】淡路島・洲本温泉おすすめホテル＆旅館ランキング！オーシャンビュー客室露天比較",
        "description": "兵庫・淡路島最大の温泉地「洲本温泉」の旅館＆ホテルランキング！紀淡海峡を一望する絶景インフィニティ露天風呂、淡路牛・由良産赤ウニ・鯛宝楽焼き会席、ホテルニューアワジグループの名宿徹底比較。楽天トラベル限定プランと混雑回避法も掲載。",
        "prefecture": "兵庫県",
        "area": "淡路島・洲本・南あわじ",
        "hotel_name": "淡路島 洲本温泉ホテル＆旅館おすすめランキング",
        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/1614/1614.jpg",
        "other_images": [],
        "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F",
        "price": 21000,
        "rating": 4.92,
        "date": "2026-08-20",
        "categories": ["洲本温泉", "淡路島温泉", "オーシャンビュー", "淡路牛", "楽天トラベル"],
        "keywords": [
            "洲本温泉 旅館 ランキング",
            "洲本温泉 ホテル ランキング",
            "洲本温泉 ホテル おすすめ",
            "洲本温泉 旅館 おすすめ",
            "淡路島 洲本温泉",
            "ホテルニューアワジ 洲本温泉"
        ],
        "is_special_feature": True,
        "review": """<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">淡路島・洲本温泉：朝日が昇る海絶景と淡路の山海の美味を味わう</h2>
<p class="text-xs text-stone-700 leading-relaxed my-2">神戸・大阪から車で約60〜90分、明石海峡大橋を渡ってすぐの「洲本温泉（すもとおんせん）」。三熊山と紀淡海峡に抱かれた風光明媚なリゾート温泉地です。</p>

<h3 class="text-lg font-bold text-stone-900 border-b border-amber-300 pb-1 mt-6 mb-3">🌊 海と空が溶け合うインフィニティ露天風呂</h3>
<p class="text-xs text-stone-700 leading-relaxed my-2">名湯「洲本温泉（うるおいの湯）」は、肌をすべすべにするアルカリ性単純温泉。海岸線沿いに建つ旅館群では、湯船と海面が一体化するインフィニティ露天風呂から、朝日に染まる黄金色の海原を眺める至高の湯浴みが叶います。</p>

<h3 class="text-lg font-bold text-stone-900 border-b border-amber-300 pb-1 mt-6 mb-3">🥩 淡路ビーフ・由良のウニ・鯛の宝楽焼き</h3>
<p class="text-xs text-stone-700 leading-relaxed my-2">御食国（みけつくに）として朝廷に食料を献上していた歴史を持つ淡路島。きめ細やかな霜降りの「淡路牛」「淡路ビーフ」、幻の赤ウニ、淡路島玉ねぎの甘みを活かした料理が並びます。</p>

<div class="pt-4 text-center">
  <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-white font-black text-xs rounded-2xl shadow-md hover:scale-105 transition transform">
    ✈️ 【公式楽天トラベル】淡路島・洲本温泉の人気宿ランキング・限定プランを見る
  </a>
</div>"""
    },
    {
        "id": "zao-onsen-yamagata-ranking-hotels-guide",
        "slug": "zao-onsen-yamagata-ranking-hotels-guide",
        "title": "【2026最新】山形・蔵王温泉ホテル＆旅館おすすめランキング！強酸性エメラルド美肌の湯",
        "description": "山形県「蔵王温泉」の宿泊ランキング決定版！日本屈指の強酸性エメラルドグリーン硫黄泉、名物「蔵王大露天風呂」、山形牛ステーキ＆山形芋煮会席、蔵王国際ホテルや深山荘高見屋など人気宿の宿泊体験記を徹底比較。楽天トラベル限定プラン掲載。",
        "prefecture": "山形県",
        "area": "蔵王温泉・山形市・上山",
        "hotel_name": "蔵王温泉おすすめホテル＆旅館ランキング",
        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/1660/1660.jpg",
        "other_images": [],
        "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F",
        "price": 16000,
        "rating": 4.91,
        "date": "2026-08-20",
        "categories": ["蔵王温泉", "強酸性硫黄泉", "にごり湯", "山形牛", "楽天トラベル"],
        "keywords": [
            "蔵王温泉 ランキング",
            "蔵王温泉 ホテル おすすめ",
            "蔵王温泉 宿",
            "蔵王 温泉",
            "蔵王温泉 旅館 おすすめ"
        ],
        "is_special_feature": True,
        "review": """<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">山形・蔵王温泉：日本屈指の強酸性硫黄泉と山形の極上美食</h2>
<p class="text-xs text-stone-700 leading-relaxed my-2">開湯1900年の歴史を誇る山形・蔵王温泉（ざおうおんせん）。標高約900mの高地に位置し、冬の樹氷（スノーモンスター）やスキー、夏の避暑と登山など、四季を通じて大自然を満喫できる東北屈指の名湯です。</p>

<h3 class="text-lg font-bold text-stone-900 border-b border-amber-300 pb-1 mt-6 mb-3">♨️ 肌を白く磨き上げるpH1.5の強酸性エメラルド硫黄泉</h3>
<p class="text-xs text-stone-700 leading-relaxed my-2">蔵王温泉の代名詞が、湯船に満ちる白濁・青白色のエメラルドグリーン硫黄泉。強力な殺菌力と血行促進作用を持ち、「美人づくりの湯」として親しまれています。名物の「蔵王温泉大露天風呂」では、森林のマイナスイオンと渓流の音に包まれながら開放感抜群の湯浴みが楽しめます。</p>

<div class="pt-4 text-center">
  <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-white font-black text-xs rounded-2xl shadow-md hover:scale-105 transition transform">
    ✈️ 【公式楽天トラベル】蔵王温泉の人気ホテル・旅館最新空室を見る
  </a>
</div>"""
    },
    {
        "id": "hokkaido-spa-resort-hotels-guide",
        "slug": "hokkaido-spa-resort-hotels-guide",
        "title": "【2026決定版】北海道のスパホテル・温泉リゾートおすすめ10選！極上サウナ＆美肌湯徹底比較",
        "description": "「北海道のスパホテルで至極のリラクゼーションを味わいたい…」札幌・定山渓・小樽・登別・支笏湖・層雲峡の極上スパリゾートを厳選！インフィニティ展望露天風呂、本場フィンランドサウナ、北海道ビュッフェから「運河の宿 おたる ふる川」まで徹底比較。",
        "prefecture": "北海道",
        "area": "北海道（札幌・小樽・登別・支笏湖・層雲峡）",
        "hotel_name": "北海道スパホテル＆温泉リゾート厳選10選",
        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/178044/178044.jpg",
        "other_images": [],
        "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F",
        "price": 19000,
        "rating": 4.95,
        "date": "2026-08-20",
        "categories": ["北海道スパ", "温泉リゾート", "サウナ", "小樽ふる川", "楽天トラベル"],
        "keywords": [
            "北海道のスパ ホテル",
            "運河の宿 おたる ふる川",
            "支笏湖温泉 ランキング",
            "支笏湖 温泉 おすすめ",
            "層雲峡温泉 ランキング",
            "登別 温泉 ランキング",
            "北海道 リゾート ホテル"
        ],
        "is_special_feature": True,
        "review": """<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">北海道のスパホテル＆極上温泉リゾート：大自然とととのう至福の休日</h2>
<p class="text-xs text-stone-700 leading-relaxed my-2">雄大な山並み、澄んだ空気、そして良質な天然温泉。北海道には、日常の疲れを完全にリセットできる最高峰のスパホテルや温泉リゾートが揃っています。</p>

<h3 class="text-lg font-bold text-stone-900 border-b border-amber-300 pb-1 mt-6 mb-3">🏨 注目名宿：小樽運河の目の前「運河の宿 おたる ふる川」</h3>
<p class="text-xs text-stone-700 leading-relaxed my-2">明治の商家を再現したレトロで温かみのある佇まい。小樽運河を望む客室、檜と石造りの天然温泉大浴場、小樽近海の新鮮な海の幸会席が自慢です。夜は運河のガス灯の灯りを眺めながら、ノスタルジックなひとときを過ごせます。</p>

<div class="pt-4 text-center">
  <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2F" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-white font-black text-xs rounded-2xl shadow-md hover:scale-105 transition transform">
    ✈️ 【公式楽天トラベル】北海道のスパホテル・人気温泉宿一覧を見る
  </a>
</div>"""
    }
]

for art in new_special_articles:
    fpath = os.path.join(POSTS_DIR, f"{art['id']}.json")
    with open(fpath, "w", encoding="utf-8") as fp:
        json.dump(art, fp, ensure_ascii=False, indent=2)
    print(f"Created/Updated {art['id']}")

# 2. 全記事のキーワード・地域情報エンリッチメント
enrich_map = [
    {
        "targets": ["noto", "ishikawa"],
        "keywords": ["石川県ポケモン空港", "能登空港 ポケモン", "のともり ポケモン", "ポケモン 珠洲", "能登 ポケふた 回り 方"]
    },
    {
        "targets": ["yamanashi", "kiyosato", "yamanakako", "kofu", "naito"],
        "keywords": ["清里温泉", "山中湖温泉 旅館", "山中湖 温泉宿", "山梨 インバウンド 人気", "山梨 あるある", "城のホテル 甲府", "山梨 県 有名"]
    },
    {
        "targets": ["nasu", "shiobara", "tochigi"],
        "keywords": ["那須高原 温泉 ランキング", "那須温泉 おすすめ", "塩原温泉 おすすめ", "那須 温泉 旅館"]
    },
    {
        "targets": ["kurokawa", "kumamoto"],
        "keywords": ["黒川温泉 おすすめ宿", "黒川温泉 人気宿", "黒川 温泉 ランキング", "黒川温泉 ランキング"]
    },
    {
        "targets": ["akita"],
        "keywords": ["秋田県で有名なもの", "秋田県 有名", "秋田県といえば", "秋田 有名なもの"]
    },
    {
        "targets": ["miyagi", "matsushima", "sendai", "akiu", "naruko"],
        "keywords": ["宮城 県 有名 な もの", "宮城 県 有名", "松島 温泉旅館", "松島温泉 ランキング", "松島 温泉 ランキング", "松島 旅館 おすすめ", "松島 旅館 ランキング", "秋保温泉 ランキング", "秋保温泉 旅館 おすすめ", "秋保温泉 ホテル おすすめ", "仙台 温泉 秋保", "鳴子温泉 ホテル ランキング", "鳴子 ホテル ランキング", "鳴子温泉 ランキング", "鳴子 温泉 ランキング"]
    },
    {
        "targets": ["saga"],
        "keywords": ["佐賀 県 有名 な もの", "嬉野温泉 おすすめ", "嬉野 名物"]
    },
    {
        "targets": ["atami", "shizuoka"],
        "keywords": ["熱海 温泉 おすすめ", "温泉 熱海 おすすめ"]
    },
    {
        "targets": ["mie", "toba"],
        "keywords": ["鳥羽 温泉 おすすめ"]
    },
    {
        "targets": ["yufuin", "oita"],
        "keywords": ["湯布院 温泉 おすすめ"]
    },
    {
        "targets": ["toyama", "super-hotel"],
        "keywords": ["スーパーホテル 富山"]
    },
    {
        "targets": ["kurobe", "misasa", "tottori"],
        "keywords": ["三朝温泉 おすすめ", "メルキュール鳥取大山リゾート"]
    },
    {
        "targets": ["okinawa", "halekulani", "sheraton", "southern"],
        "keywords": ["ハレクラニ沖縄 ナイトプール", "hotel southern village okinawa", "シェラトン沖縄サンマリーナリゾート"]
    },
    {
        "targets": ["nagano", "kisokoma", "uguisutei", "togura"],
        "keywords": ["木曽駒高原 森のホテル", "戸倉上山田温泉 和の魁が佇む宿 梅むら旅館うぐいす亭", "うぐいす 亭", "うぐいす亭"]
    },
    {
        "targets": ["kochi", "sansuien"],
        "keywords": ["リバーサイドホテル松栄", "三翠園 高知", "三翠園 高知 温泉", "高知城下の天然温泉三翠園"]
    },
    {
        "targets": ["obon", "lastminute", "summer", "vacation"],
        "keywords": ["お盆旅行", "お盆 旅行おすすめ カップル", "お盆 に 泊まれる 温泉 宿", "シルバーウィーク 温泉"]
    },
    {
        "targets": ["iwate", "sake"],
        "keywords": ["岩手 日本酒 有名"]
    },
    {
        "targets": ["nara"],
        "keywords": ["奈良 名物"]
    },
    {
        "targets": ["kaga", "ishikawa"],
        "keywords": ["加賀温泉 おすすめ"]
    },
    {
        "targets": ["katsuura", "wakayama", "chiba"],
        "keywords": ["勝浦温泉"]
    },
    {
        "targets": ["isawa", "yamanashi"],
        "keywords": ["石和温泉 おすすめ"]
    }
]

enriched_count = 0
for f in os.listdir(POSTS_DIR):
    if not f.endswith(".json"):
        continue
    fpath = os.path.join(POSTS_DIR, f)
    with open(fpath, "r", encoding="utf-8") as fp:
        pdata = json.load(fp)
    
    pid = pdata.get("id", "").lower()
    pkeys = pdata.get("keywords", [])
    mod = False
    
    for item in enrich_map:
        if any(t in pid for t in item["targets"]):
            for kw in item["keywords"]:
                if kw not in pkeys:
                    pkeys.append(kw)
                    mod = True
                    
    if mod:
        pdata["keywords"] = pkeys
        with open(fpath, "w", encoding="utf-8") as fp:
            json.dump(pdata, fp, ensure_ascii=False, indent=2)
        enriched_count += 1

print(f"Enriched keywords in {enriched_count} files.")
