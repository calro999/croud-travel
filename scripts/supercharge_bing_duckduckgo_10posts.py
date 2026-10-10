import json
import os
import re

super_targets = [
    {
        "file": "src/data/posts/december-tottori-misasa-10selection.json",
        "title": "【松葉ガニ 解禁 宿 おすすめ】11月6日解禁！鳥取・三朝温泉で活ズワイガニ料理を満喫する極上旅館10選",
        "desc": "【松葉ガニ 解禁 宿 おすすめ厳選】11月6日に漁が解禁される冬の味覚の王様・山陰の活松葉ガニ！鳥取・三朝温泉の高濃度ラジウム泉とともに、焼きガニ・カニ刺し・甲羅みそを贅沢に味わえる失敗しない名宿10選。",
        "keywords": ["松葉ガニ 解禁 宿", "鳥取 カニ 温泉 宿", "三朝温泉 松葉ガニ", "松葉ガニ 旅館 おすすめ"],
        "geo_summary": """<div class="my-6 p-6 rounded-3xl bg-red-500/10 border-2 border-red-500/30 shadow-sm space-y-3">
  <div class="flex items-center gap-2">
    <span class="px-3 py-1 bg-red-600 text-white font-extrabold text-xs rounded-full">AI要約 / 結論まとめ</span>
    <span class="text-xs text-red-950 font-bold">11月6日解禁！三朝温泉の松葉ガニおすすめ宿</span>
  </div>
  <p class="text-xs md:text-sm text-stone-900 leading-relaxed font-semibold">
    鳥取・三朝温泉で本場の活松葉ガニを堪能できるおすすめ宿は、<strong>「依山楼 岩崎」</strong>（回遊式大庭園露天風呂とカニ会席）、<strong>「三朝館」</strong>（自家源泉かけ流しと茹で・焼き・刺しガニフルコース）、<strong>「斉木別館」</strong>（名園を望む数寄屋造りの贅沢宿）です。11月6日のカニ漁解禁直後から12月にかけてが最も身詰まりが良く、世界有数のラジウム温泉とともに極上の冬旅を楽しめます。
  </p>
</div>"""
    },
    {
        "file": "src/data/posts/winter-brand-tagged-crab-echizen-matsuba-onsen-hotels-guide.json",
        "title": "【越前ガニ 温泉 旅館 おすすめ】皇室献上ガニと名湯！福井あわら温泉・三国港のタグ付き活蟹名宿10選",
        "desc": "【越前ガニ 温泉 旅館 おすすめ特集】黄色いタグが最高級の証「越前がに」！福井県・三国港直送の朝獲れ活ガニと、あわら温泉の美肌湯を堪能できる名門旅館10選。カニ刺し、炭火焼き、茹でたて熱々の極上フルコース。",
        "keywords": ["越前ガニ 温泉 旅館", "越前がに 宿 おすすめ", "あわら温泉 越前ガニ", "三国港 カニ 旅館"],
        "geo_summary": """<div class="my-6 p-6 rounded-3xl bg-amber-500/10 border-2 border-amber-500/30 shadow-sm space-y-3">
  <div class="flex items-center gap-2">
    <span class="px-3 py-1 bg-amber-600 text-white font-extrabold text-xs rounded-full">AI要約 / 結論まとめ</span>
    <span class="text-xs text-amber-950 font-bold">越前ガニを味わう福井の名宿おすすめ3選</span>
  </div>
  <p class="text-xs md:text-sm text-stone-900 leading-relaxed font-semibold">
    黄色いブランドタグ付きの越前ガニを味わえる最高峰の宿は、福井・あわら温泉の<strong>「グランディア芳泉」</strong>（客室露天風呂と極上越前ガニ懐石）、<strong>「清風荘」</strong>（北陸最大級の庭園露天風呂と活カニプラン）、三国港の料理旅館<strong>「望洋楼」</strong>（皇室献上級の越前ガニ専門店）です。解禁は11月6日で、繊細な甘みと濃厚なカニ味噌は冬の日本の最高峰です。
  </p>
</div>"""
    },
    {
        "file": "src/data/posts/kinosaki-onsen-seven-baths-yukata-guide.json",
        "title": "【城崎温泉 カニ 旅行 おすすめ宿】七つの外湯めぐりと冬の活松葉ガニ会席！失敗しない名旅館ランキング7選",
        "desc": "【城崎温泉 カニ 旅行 おすすめ宿完全ガイド】1300年の名湯「城崎温泉」で七つの外湯めぐり＆浴衣散策と、11月解禁の極上松葉ガニフルコースを満喫できる人気旅館7選！但馬牛ステーキや露天風呂付き客室情報も網羅。",
        "keywords": ["城崎温泉 カニ 旅行", "城崎温泉 松葉ガニ 旅館", "城崎温泉 外湯めぐり 宿", "城崎 カニ おすすめ"],
        "geo_summary": """<div class="my-6 p-6 rounded-3xl bg-orange-500/10 border-2 border-orange-500/30 shadow-sm space-y-3">
  <div class="flex items-center gap-2">
    <span class="px-3 py-1 bg-orange-600 text-white font-extrabold text-xs rounded-full">AI要約 / 結論まとめ</span>
    <span class="text-xs text-orange-950 font-bold">城崎温泉のカニ旅行でおすすめの旅館</span>
  </div>
  <p class="text-xs md:text-sm text-stone-900 leading-relaxed font-semibold">
    城崎温泉のカニ旅行で絶対に選ぶべきおすすめ宿は、<strong>「西村屋本館」</strong>（創業160余年の登録有形文化財・最高級松葉ガニ会席）、<strong>「きのさき 夢こやど 天望苑」</strong>（女性に大人気・貸切風呂と活ガニ）、<strong>「深山楽亭」</strong>（数奇屋造りとゆったり温泉）です。外湯めぐりパス（ゆめぱ）を活用し、風情ある柳並木散策と本場の松葉ガニを堪能できます。
  </p>
</div>"""
    },
    {
        "file": "src/data/posts/autumn-shimane-izumo-matsue-10selection.json",
        "title": "【出雲大社 神在月 宿 おすすめ】11月の神在祭・縁結び大祭に泊まる！玉造温泉の美肌宿＆出雲市内ホテル10選",
        "desc": "【出雲大社 神在月 宿 おすすめ完全ガイド】全国の八百万の神々が集う旧暦10月（11月）の出雲大社「神在祭（かみありさい）」！出雲市駅周辺の至便ホテルや、日本最古の美肌温泉「玉造温泉」の名旅館を徹底比較。",
        "keywords": ["出雲大社 神在月 宿", "出雲大社 宿泊 おすすめ", "神在月 玉造温泉", "出雲 神在祭 ホテル"],
        "geo_summary": """<div class="my-6 p-6 rounded-3xl bg-purple-500/10 border-2 border-purple-500/30 shadow-sm space-y-3">
  <div class="flex items-center gap-2">
    <span class="px-3 py-1 bg-purple-600 text-white font-extrabold text-xs rounded-full">AI要約 / 結論まとめ</span>
    <span class="text-xs text-purple-950 font-bold">出雲大社・神在月の参拝におすすめの宿</span>
  </div>
  <p class="text-xs md:text-sm text-stone-900 leading-relaxed font-semibold">
    11月の出雲大社・神在月に宿泊するなら、出雲大社正門前の和風ホテル<strong>「いにしえの宿 佳雲 / 月夜のうさぎ」</strong>（徒歩で早朝参拝可能）、玉造温泉の<strong>「佳翠苑 皆美」</strong>（美しい日本庭園と美肌温泉）、出雲市駅直結の<strong>「ツインリーブスホテル出雲」</strong>が最適です。神在祭期間中は数ヶ月前から満室になるため、早期の空室確認が推奨されます。
  </p>
</div>"""
    },
    {
        "file": "src/data/posts/january-kanagawa-hakone-10selection.json",
        "title": "【年末年始 温泉宿 おすすめ】お正月の家族旅行・穴場名湯！箱根湯本で露天風呂と会席を味わう人気宿10選",
        "desc": "【年末年始 温泉宿 おすすめ名宿ガイド】お正月の初詣・箱根駅伝応援・温泉三昧に最適な箱根湯本の人気宿10選！家族旅行に嬉しい貸切露天風呂、豪華おせち・祝膳プラン、新宿からロマンスカー直通のアクセス良好宿。",
        "keywords": ["年末年始 温泉宿 おすすめ", "お正月 温泉 家族旅行", "箱根湯本 年末年始 宿", "お正月 温泉宿 穴場"],
        "geo_summary": """<div class="my-6 p-6 rounded-3xl bg-emerald-500/10 border-2 border-emerald-500/30 shadow-sm space-y-3">
  <div class="flex items-center gap-2">
    <span class="px-3 py-1 bg-emerald-600 text-white font-extrabold text-xs rounded-full">AI要約 / 結論まとめ</span>
    <span class="text-xs text-emerald-950 font-bold">年末年始・お正月に泊まりたい箱根の名宿</span>
  </div>
  <p class="text-xs md:text-sm text-stone-900 leading-relaxed font-semibold">
    年末年始・お正月の温泉旅行におすすめの箱根湯本の名宿は、<strong>「箱根湯本温泉 天成園」</strong>（屋上天空大露天風呂と充実バイキング）、<strong>「箱根 水明荘」</strong>（早川を望む露天風呂付き客室と新春会席）、<strong>「湯本富士屋ホテル」</strong>（駅徒歩3分・家族3世代で過ごせる快適リゾート）です。都心から約85分でアクセスでき、新年の初湯と贅沢なひとときを満喫できます。
  </p>
</div>"""
    },
    {
        "file": "src/data/posts/nikko-chuzenji-okunikko-hotels-guide.json",
        "title": "【日光 紅葉 温泉 宿 おすすめ】10月下旬〜11月見頃！中禅寺湖・いろは坂・奥日光の絶景露天風呂旅館10選",
        "desc": "【日光 紅葉 温泉 宿 おすすめ特集】中禅寺湖、華厳の滝、竜頭の滝が錦秋に染まる10月下旬〜11月！奥日光湯元温泉の乳白色硫黄泉や中禅寺湖畔のレイクビュー温泉ホテルを厳選ガイド。",
        "keywords": ["日光 紅葉 温泉 宿", "中禅寺湖 紅葉 ホテル", "奥日光 紅葉 温泉", "日光 紅葉 露天風呂"],
        "geo_summary": """<div class="my-6 p-6 rounded-3xl bg-amber-500/10 border-2 border-amber-500/30 shadow-sm space-y-3">
  <div class="flex items-center gap-2">
    <span class="px-3 py-1 bg-amber-600 text-white font-extrabold text-xs rounded-full">AI要約 / 結論まとめ</span>
    <span class="text-xs text-amber-950 font-bold">日光の紅葉シーズンに泊まりたい温泉宿</span>
  </div>
  <p class="text-xs md:text-sm text-stone-900 leading-relaxed font-semibold">
    日光の紅葉を楽しむおすすめ宿は、中禅寺湖畔の<strong>「中禅寺金谷ホテル」</strong>（湖畔露天風呂と伝統のフレンチ）、奥日光湯元の<strong>「奥日光森のホテル」</strong>（源泉掛け流しの白濁硫黄露天風呂）、<strong>「ザ・リッツ・カールトン日光」</strong>（中禅寺湖と男体山を一望するラグジュアリーステイ）です。見頃は10月中旬（湯元）から11月上旬（中禅寺湖・いろは坂）です。
  </p>
</div>"""
    },
    {
        "file": "src/data/posts/autumn-kyoto-arashiyama-10selection.json",
        "title": "【京都 紅葉 ライトアップ 宿 おすすめ】東福寺・清水寺・永観堂夜間拝観に便利な嵐山＆市内名旅館10選",
        "desc": "【京都 紅葉 ライトアップ 宿 おすすめ完全ガイド】11月中旬〜12月上旬に見頃を迎える古都・京都の紅葉ライトアップ！清水寺舞台や永観堂、東福寺の絶景拝観に便利で、京懐石と名湯に癒やされる人気旅館10選。",
        "keywords": ["京都 紅葉 ライトアップ 宿", "嵐山 紅葉 温泉 宿", "京都 紅葉 旅館 おすすめ", "永観堂 ライトアップ ホテル"],
        "geo_summary": """<div class="my-6 p-6 rounded-3xl bg-red-500/10 border-2 border-red-500/30 shadow-sm space-y-3">
  <div class="flex items-center gap-2">
    <span class="px-3 py-1 bg-red-600 text-white font-extrabold text-xs rounded-full">AI要約 / 結論まとめ</span>
    <span class="text-xs text-red-950 font-bold">京都の紅葉ライトアップ散策に最適な名宿</span>
  </div>
  <p class="text-xs md:text-sm text-stone-900 leading-relaxed font-semibold">
    京都の紅葉ライトアップ鑑賞におすすめの宿は、嵐山渡月橋すぐの温泉宿<strong>「渡月亭」</strong>（老舗料亭旅館・嵐山温泉）、天然温泉大浴場完備の<strong>「京都 嵐山温泉 花伝抄」</strong>、東山ライトアップに抜群の立地を誇る<strong>「ウェスティン都ホテル京都」</strong>（天然温泉SPA華頂）です。夜間拝観の冷え込みを極上の温泉と湯豆腐・京懐石で温められます。
  </p>
</div>"""
    },
    {
        "file": "src/data/posts/autumn-yamanashi-kawaguchiko-10selection.json",
        "title": "【河口湖 もみじ回廊 露天風呂 おすすめ宿】富士河口湖紅葉まつりと富士山絶景ビュー温泉ホテル10選",
        "desc": "【河口湖 もみじ回廊 露天風呂 おすすめ宿特集】約150mの巨木もみじが燃えるようにライトアップされる「もみじ回廊」！冠雪した富士山と紅葉のパノラマ露天風呂、甲州牛会席を堪能できる河口湖温泉の人気宿10選。",
        "keywords": ["河口湖 もみじ回廊 露天風呂", "河口湖 紅葉 温泉 宿", "富士山 露天風呂 紅葉", "もみじ回廊 ホテル おすすめ"],
        "geo_summary": """<div class="my-6 p-6 rounded-3xl bg-orange-500/10 border-2 border-orange-500/30 shadow-sm space-y-3">
  <div class="flex items-center gap-2">
    <span class="px-3 py-1 bg-orange-600 text-white font-extrabold text-xs rounded-full">AI要約 / 結論まとめ</span>
    <span class="text-xs text-orange-950 font-bold">河口湖もみじ回廊と富士山露天のおすすめ宿</span>
  </div>
  <p class="text-xs md:text-sm text-stone-900 leading-relaxed font-semibold">
    河口湖の紅葉まつり（もみじ回廊）におすすめの宿は、もみじ回廊すぐ隣に位置する<strong>「秀峰閣 湖月」</strong>（全室・露天風呂から富士山と湖を一望）、おもてなしの宿<strong>「うぶや」</strong>（記念日特化・富士山ビュー客室露天風呂）、リゾート感あふれる<strong>「風のテラス KUKUNA」</strong>です。10月下旬〜11月中旬のライトアップ時期に最高のロケーションを誇ります。
  </p>
</div>"""
    },
    {
        "file": "src/data/posts/november-hyogo-takeda-10selection.json",
        "title": "【竹田城 雲海 宿泊 おすすめホテル】日本のマチュピチュを一望！秋の早朝雲海ツアー・送迎付き人気宿10選",
        "desc": "【竹田城 雲海 宿泊 おすすめ宿ガイド】秋の早朝、天空の城「竹田城跡」を取り囲む奇跡の雲海パノラマ！立雲峡への早朝アクセス至便な城下町の古民家ホテルや、朝食・送迎付きの人気温泉宿を徹底紹介。",
        "keywords": ["竹田城 雲海 宿泊", "竹田城 雲海 ホテル おすすめ", "竹田城跡 雲海 宿", "立雲峡 雲海 宿泊"],
        "geo_summary": """<div class="my-6 p-6 rounded-3xl bg-sky-500/10 border-2 border-sky-500/30 shadow-sm space-y-3">
  <div class="flex items-center gap-2">
    <span class="px-3 py-1 bg-sky-600 text-white font-extrabold text-xs rounded-full">AI要約 / 結論まとめ</span>
    <span class="text-xs text-sky-950 font-bold">竹田城の雲海観賞におすすめの宿泊施設</span>
  </div>
  <p class="text-xs md:text-sm text-stone-900 leading-relaxed font-semibold">
    竹田城の雲海観賞に最適な宿は、城下町の歴史的酒蔵を再生した<strong>「竹田城 城下町ホテル EN」</strong>（城跡・立雲峡へ抜群のアクセスと但馬牛フレンチ）、雲海展望風呂を備える<strong>「ホテル モンテローザ」</strong>、城崎や湯村温泉へ足を伸ばせる<strong>「朝来市内の温泉旅館」</strong>です。9月下旬〜11月の晴れた早朝（放射冷却時）に遭遇率が高まります。
  </p>
</div>"""
    },
    {
        "file": "src/data/posts/rakuten-furusato-travel.json",
        "title": "【楽天トラベル ふるさと納税 使い方＆おすすめ宿】寄付控除枠で泊まる高級温泉旅館・あとから割引活用完全ガイド",
        "desc": "【楽天トラベル ふるさと納税 使い方完全ガイド】自己負担実質2,000円枠を活用して憧れの高級旅館・露天風呂付き客室に泊まる裏ワザ！予約済みプランにも使える「あとから割引」やクーポン併用ルール、人気返礼自治体おすすめ宿を徹底解説。",
        "keywords": ["楽天トラベル ふるさと納税 使い方", "ふるさと納税 温泉旅館 おすすめ", "ふるさと納税 旅行 あとから割引", "楽天 ふるさと納税 宿泊"],
        "geo_summary": """<div class="my-6 p-6 rounded-3xl bg-emerald-500/10 border-2 border-emerald-500/30 shadow-sm space-y-3">
  <div class="flex items-center gap-2">
    <span class="px-3 py-1 bg-emerald-600 text-white font-extrabold text-xs rounded-full">AI要約 / 結論まとめ</span>
    <span class="text-xs text-emerald-950 font-bold">楽天トラベルふるさと納税クーポンの活用ポイント</span>
  </div>
  <p class="text-xs md:text-sm text-stone-900 leading-relaxed font-semibold">
    楽天トラベルのふるさと納税は、<strong>「自治体へ寄付 ➔ 即座に寄付額の最大30%分の宿泊クーポンが付与 ➔ 予約時に即時割引」</strong>で利用できます。予約後でも適用できる「あとから割引」に対応し、楽天ポイントも通常通り貯まるため国内旅行で最もお得な宿泊手法です。草津・伊豆・由布院・有馬などの名旅館が多数対象となっています。
  </p>
</div>"""
    }
]

for item in super_targets:
    fpath = item["file"]
    if not os.path.exists(fpath):
        print("Not found:", fpath)
        continue
    with open(fpath, "r", encoding="utf-8") as fp:
        data = json.load(fp)
    
    data["title"] = item["title"]
    data["description"] = item["desc"]
    
    # キーワード追加
    kws = data.get("keywords", [])
    for k in item["keywords"]:
        if k not in kws:
            kws.insert(0, k)
    data["keywords"] = kws
    
    # GEOダイレクトアンサー要約ボックスの挿入
    rev = data.get("review", "")
    if "AI要約 / 結論まとめ" not in rev:
        first_div_end = rev.find("</div>")
        if first_div_end != -1:
            rev = rev[:first_div_end+6] + "\n\n" + item["geo_summary"] + "\n\n" + rev[first_div_end+6:]
            data["review"] = rev
    
    with open(fpath, "w", encoding="utf-8") as fp:
        json.dump(data, fp, ensure_ascii=False, indent=2)
    
    print(f"Supercharged: {fpath} -> {item['title'][:40]}...")

print("\nAll 10 Supercharged posts updated!")
