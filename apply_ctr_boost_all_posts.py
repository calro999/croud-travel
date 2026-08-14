import os
import json

POSTS_DIR = "src/data/posts"

def update_post(filename, updater):
    filepath = os.path.join(POSTS_DIR, filename)
    if not os.path.exists(filepath):
        print(f"⚠️ ファイル未検出: {filename}")
        return
    with open(filepath, "r", encoding="utf-8") as f:
        data = json.load(f)
    data = updater(data)
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"✅ CTR爆上げ更新完了: {filename}")

# 1. リブマックスリゾート越後湯沢 (197415.json)
def enhance_197415(d):
    d["title"] = "【本音ブログ】リブマックスリゾート越後湯沢の口コミ評判！客室露天風呂とバイキングを徹底検証"
    d["description"] = "実際に泊まったブログ体験談！リブマックスリゾート越後湯沢の全室源泉かけ流し露天風呂、豪華朝夕バイキング、子連れ・カップルでのリアルな満足度、無料駐車場・アクセスの注意点まで本音でレビュー。"
    return d

update_post("197415.json", enhance_197415)

# 2. ホテル リガーレ春日野 (18909.json)
def enhance_18909(d):
    d["title"] = "【奈良公園すぐ】ホテル リガーレ春日野の口コミ・大和牛会席と無料駐車場の評判"
    d["description"] = "奈良観光・東大寺へ好アクセス！「ホテル リガーレ春日野（ホテルリガーレ）」のリアルな宿泊記。大型無料駐車場80台、広々和室・大浴場、絶品大和牛すき焼き＆茶粥朝食の魅力を徹底解説。"
    return d

update_post("18909.json", enhance_18909)

# 3. スーパーホテル鹿嶋 (158566.json)
def enhance_158566(d):
    d["title"] = "【無料夕食＆天然温泉】スーパーホテル鹿嶋の口コミ評判！「千両の湯」と駐車場ガイド"
    d["description"] = "茨城・鹿嶋神宮近く！「天然温泉 千両の湯 スーパーホテル鹿嶋」の満足度が高い理由。奥湯河原直送の天然温泉、日替わり無料夕食カレー＆焼き立てパン朝食、平面無料駐車場100台の利便性を紹介。"
    return d

update_post("158566.json", enhance_158566)

# 4. YU KIRORO (yukiroro.json)
def enhance_yukiroro(d):
    d["title"] = "【キロロ直結】YU KIRORO（ユーキロロ）の口コミ体験記！ゲレンデ＆天然温泉の高級滞在"
    d["description"] = "北海道赤井川村の最高級リゾート「YU KIRORO（yu kiroro）」の滞在レビュー。目の前がゲレンデの完全スキーイン・スキーアウト、天然温泉露天風呂、豪華キッチン付き客室で過ごす至福の休日。"
    return d

update_post("yukiroro.json", enhance_yukiroro)

# 5. 出湯温泉 大石屋旅館 (107863.json)
def enhance_107863(d):
    d["title"] = "【秘湯ラジウム温泉】出湯温泉 大石屋旅館の口コミ！開湯1200年の湯とおもてなし"
    d["description"] = "新潟・五頭温泉郷「出湯温泉 大石屋旅館」のリアルな口コミ。弘法大師ゆかりの天然ラジウム温泉（源泉かけ流し）、自家菜園野菜と新潟の味覚を詰めた手作り会席、無料駐車場を徹底ガイド。"
    return d

update_post("107863.json", enhance_107863)

# 6. 城のホテル甲府 (992.json)
def enhance_992(d):
    d["title"] = "【甲府駅徒歩1分】城のホテル甲府の口コミ！最上階富士山ビュー天然温泉と朝食バイキング"
    d["description"] = "甲府城跡に隣接する「城のホテル甲府」の宿泊レビュー！最上階13階の富士山を望む天然温泉露天風呂・サウナ、山梨名物ほうとうや甲州ワインが楽しめる地産地消朝食ブッフェを解説。"
    return d

update_post("992.json", enhance_992)

# 7. センティアホテル内藤 (centia-hotel-naito.json)
def enhance_centia(d):
    d["title"] = "【甲府繁華街すぐ】センティアホテル内藤の口コミ評判！お得な朝食バイキングと駐車場"
    d["description"] = "山梨・甲府中心部の好立地「センティアホテル内藤（centia hotel naito）」のリアルな評判！甲府駅・平和通りへ至近、手作りほうとう朝食ブッフェ、敷地内駐車場、スパランド内藤提携特典。"
    return d

update_post("centia-hotel-naito.json", enhance_centia)

# 8. 湯元さぬき瀬戸大橋温泉 せとうちそう (8175.json)
def enhance_8175(d):
    d["title"] = "【瀬戸大橋の絶景】せとうちそう（湯元さぬき瀬戸大橋温泉）の口コミ！自家源泉と瀬戸内海鮮"
    d["description"] = "香川県坂出市「湯元さぬき瀬戸大橋温泉 せとうちそう」の魅力を紹介！瀬戸内海の旬魚・オリーブ牛会席、広々自家源泉天然温泉大浴場、讃岐うどん巡りに最適な無料駐車場完備。"
    return d

update_post("8175.json", enhance_8175)

# 9. シェラトン沖縄サンマリーナリゾート (sheraton_okinawa.json)
def enhance_sheraton_okinawa(d):
    d["title"] = "【絶景メガジップ】シェラトン沖縄サンマリーナリゾートの口コミ！プール・ビーチ完全ガイド"
    d["description"] = "沖縄恩納村の最高峰リゾート「シェラトン沖縄サンマリーナリゾート」のリアルな口コミ！海越えメガジップ、屋外・屋内プール、全室オーシャンビュー、キッズエリア、大浴場サウナを徹底解剖。"
    return d

update_post("sheraton_okinawa.json", enhance_sheraton_okinawa)

# 10. 洞川温泉 いろは旅館＜奈良県＞ (9362.json)
def enhance_9362(d):
    d["title"] = "【ぼたん鍋＆名水豆腐】洞川温泉 いろは旅館＜奈良県＞の口コミ！ノスタルジックな温泉宿"
    d["description"] = "奈良・吉野の奥座敷「洞川温泉 いろは旅館＜奈良県＞」の絶品名物ぼたん鍋と名水大峯豆腐！ノスタルジックな温泉街の風情、心温まる天然温泉、無料駐車場アクセスを分かりやすく紹介。"
    return d

update_post("9362.json", enhance_9362)

# 11. 湯の児温泉 松原荘＜熊本県＞ (30938.json)
def enhance_30938(d):
    d["title"] = "【不知火海のパノラマ】湯の児温泉 松原荘＜熊本県＞の口コミ！源泉掛け流しと採れたて海鮮"
    d["description"] = "熊本県水俣「湯の児温泉 松原荘（旅館 松原荘）」の宿泊記。波の音を聴く源泉掛け流し露天風呂、天草・不知火海の新鮮お造り会席、静かな海沿いの無料駐車場付き穴場宿。"
    return d

update_post("30938.json", enhance_30938)

# 12. 犀北館ホテル (7382.json)
def enhance_7382(d):
    d["title"] = "【信州の老舗名門】犀北館ホテルの口コミ評判！クラシックホテルでの上質な滞在とレストラン"
    d["description"] = "長野市・老舗クラシックホテル「犀北館ホテル（THE SAIHOKUKAN HOTEL）」の口コミ！格式ある客室、絶品中華・洋食レストラン、善光寺参りに抜群のアクセスと無料駐車場。"
    return d

update_post("7382.json", enhance_7382)

# 13. 脇田温泉 楠水閣 (14607.json)
def enhance_14607(d):
    d["title"] = "【福岡の奥座敷】脇田温泉 楠水閣の口コミ！湯巡り露天風呂と季節の会席料理"
    d["description"] = "博多・小倉から車で約45分！「脇田温泉 楠水閣（なんすいかく）」の宿泊口コミ。犬鳴川の自然に囲まれた10種以上の露天風呂巡り、山海の幸を味わう会席料理、無料駐車場を徹底比較。"
    return d

update_post("14607.json", enhance_14607)

# 14. 湯野浜温泉 湯の浜亀や (135575.json)
def enhance_135575(d):
    d["title"] = "【日本海の絶景夕日】湯野浜温泉 亀屋ホテルの口コミ！波打ち際の温泉露天と極上庄内グルメ"
    d["description"] = "山形県鶴岡市・湯野浜温泉「亀屋ホテル（湯の浜亀や）」のリアルな満足度！客室や大浴場から望む日本海の沈む夕日、庄内牛や旬の海鮮を味わう味覚会席、無料駐車場・アクセス情報。"
    return d

update_post("135575.json", enhance_135575)

# 15. プール特集 (pool-resort-hotel-guide.json)
def enhance_pool_guide(d):
    d["title"] = "【2026最新】インフィニティプール＆夏休みプール付きホテルおすすめ人気リゾート"
    d["description"] = "空と海と繋がる絶景インフィニティプール＆夏休みに子供と楽しめるナイトプール・温水プール付リゾートホテル！沖縄・箱根・熱海・関西のおすすめ宿と失敗しない選び方。"
    return d

update_post("pool-resort-hotel-guide.json", enhance_pool_guide)

# 16. 楽天トラベルお得ガイド (rakuten-travel-guide.json)
def enhance_rakuten_guide(d):
    d["title"] = "【2026最新】楽天トラベル セール・5と0のつく日＆お得クーポンの使い方徹底解説"
    d["description"] = "楽天トラベルで一番安く予約する裏技！5と0のつく日（最大20%OFF）、スーパーSALE、得旅キャンペーン、クーポン重ね掛け＆ふるさと納税併用技を完全攻略。"
    return d

update_post("rakuten-travel-guide.json", enhance_rakuten_guide)

# 17. お盆旅行ガイド (obon-travel-guide.json)
def enhance_obon_guide(d):
    d["title"] = "【2026最新】お盆休み今から間に合う宿予約！駆け込み温泉旅行と穴場リゾート"
    d["description"] = "お盆休み・8月11日（山の日）の直前予約！直前キャンセル枠の狙い目時間帯、今から予約できる穴場温泉宿・カップル＆子連れファミリー向けおすすめスポットを公開。"
    return d

update_post("obon-travel-guide.json", enhance_obon_guide)

# 18. 島根グルメ・観光ガイド (autumn-chugoku-matsutake-shimane-guide.json)
def enhance_shimane_guide(d):
    d["title"] = "【2026最新】島根県おすすめ観光名所＆名物グルメ・美肌温泉宿完全ガイド"
    d["description"] = "出雲大社、玉造温泉、松江城、石見銀山！島根県の有名なもの（出雲そば、松葉ガニ、島根和牛）と口コミ評価の高い絶景温泉旅館・おすすめ観光ルートを完全紹介。"
    return d

update_post("autumn-chugoku-matsutake-shimane-guide.json", enhance_shimane_guide)

print("✨ 全記事のCTR爆上げタイトル＆ディスクリプション更新が正常に完了しました！")
