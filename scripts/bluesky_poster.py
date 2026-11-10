import os
import sys
import json
import random
import time
import re
from datetime import datetime, timezone
import requests
from atproto import Client, client_utils

# 観光地画像取得モジュール
try:
    from scripts.tourist_image_fetcher import fetch_tourist_spot_image
except ImportError:
    from tourist_image_fetcher import fetch_tourist_spot_image

POSTS_DIR = "src/data/posts"
BLUESKY_HISTORY_FILE = "bluesky_post_history.txt"
ENGAGEMENT_HISTORY_FILE = "bluesky_engagement_history.txt"
SITE_BASE_URL = "https://croud-travel.pages.dev"

# アカウント情報
BLUESKY_HANDLE = os.environ.get("BLUESKY_HANDLE", "travel-cloud.bsky.social")
APP_PASSWORD = os.environ.get("BLUESKY_APP_PASSWORD", "mxll-k37n-tgyx-usol")
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")

# 利用可能・最新Gemini対応モデル一覧（Gemini 1.5系は完全廃止済みのため除外）
GEMINI_MODELS = [
    "gemini-2.5-flash",
    "gemini-2.5-flash-lite",
    "gemini-2.0-flash",
    "gemini-2.0-flash-lite",
    "gemini-3.7-flash",
    "gemini-3.6-flash",
    "gemini-3.5-flash",
    "gemini-3.5-flash-lite",
    "gemini-3.1-pro",
    "gemini-3.1-flash-lite",
    "gemini-3-flash",
    "gemini-2.5-pro"
]

# 47都道府県完全網羅 地域魅力マスター
PREFECTURES_SHOWCASE = [
    {"code": "hokkaido", "name": "北海道", "area": "北海道", "catch": "雄大な大自然パノラマと北の大地の極上グルメ", "spots": ["富良野・美瑛の丘", "小樽運河の夜景", "函館山からの100万ドル夜景", "知床世界自然遺産", "定山渓・登別温泉"], "gourmet": "海鮮丼、ジンギスカン、札幌味噌ラーメン、スープカレー、夕張メロン"},
    {"code": "aomori", "name": "青森県", "area": "東北", "catch": "神秘の奥入瀬渓流と白神山地・ねぶたの熱気", "spots": ["奥入瀬渓流（苔とせせらぎ）", "十和田湖", "弘前城（桜と天守）", "白神山地・青池", "酸ヶ湯温泉（ヒバ千人風呂）"], "gourmet": "大間のマグロ、青森りんごスイーツ、せんべい汁、いちご煮、十三湖しじみラーメン"},
    {"code": "iwate", "name": "岩手県", "area": "東北", "catch": "世界遺産平泉と三陸の海岸美、名峰岩手山", "spots": ["中尊寺金色堂（世界遺産）", "厳美渓・猊鼻渓（舟下り）", "浄土ヶ浜（三陸海岸）", "小岩井農場", "花巻温泉郷"], "gourmet": "わんこそば、盛岡冷麺、盛岡じゃじゃ麺、前沢牛、三陸ウニ・アワビ"},
    {"code": "miyagi", "name": "宮城県", "area": "東北", "catch": "杜の都・仙台の緑と日本三景・松島の美景", "spots": ["日本三景・松島湾クルーズ", "仙台城跡（伊達政宗公騎馬像）", "秋保温泉・鳴子温泉峡", "蔵王の御釜（エメラルド湖）", "瑞鳳殿"], "gourmet": "仙台牛たん焼き、ずんだ餅、三陸海鮮丼、笹かまぼこ、せり鍋"},
    {"code": "akita", "name": "秋田県", "area": "東北", "catch": "乳頭温泉郷の秘湯美と角館の武家屋敷", "spots": ["角館武家屋敷通り", "田沢湖（辰子像）", "乳頭温泉郷（秘湯の鶴の湯）", "男鹿半島・なまはげ館", "八幡平ドラゴンアイ"], "gourmet": "きりたんぽ鍋、比内地鶏、稲庭うどん、横手やきそば、いぶりがっこ"},
    {"code": "yamagata", "name": "山形県", "area": "東北", "catch": "白銀の蔵王樹氷と山寺の静寂、銀山温泉の大正浪漫", "spots": ["銀山温泉（ガス灯と木造旅館）", "蔵王樹氷・ロープウェイ", "山寺（立石寺）", "最上川舟下り", "加茂水族館（クラゲドリーム館）"], "gourmet": "米沢牛、山形牛、芋煮、板そば、さくらんぼ"},
    {"code": "fukushima", "name": "福島県", "area": "東北", "catch": "会津若松の歴史ロマンと裏磐梯の神秘の五色沼", "spots": ["大内宿（茅葺き屋根の宿場町）", "鶴ヶ城（若松城）", "裏磐梯・五色沼", "会津東山温泉", "スパリゾートハワイアンズ"], "gourmet": "喜多方ラーメン、会津ソースカツ丼、ねぎそば、白河ラーメン、円盤餃子"},
    {"code": "ibaraki", "name": "茨城県", "area": "関東", "catch": "四季の花咲く海浜公園と日本三名瀑・袋田の滝", "spots": ["国営ひたち海浜公園（ネモフィラ・コキア）", "袋田の滝", "日本三名園・偕楽園", "筑波山（関東平野展望）", "大洗磯前神社（神磯の鳥居）"], "gourmet": "常陸牛、水戸納豆料理、アンコウ鍋、干し芋、奥久慈軍鶏"},
    {"code": "tochigi", "name": "栃木県", "area": "関東", "catch": "世界遺産・日光の社寺と関東屈指の鬼怒川・那須温泉", "spots": ["日光東照宮（陽明門）", "華厳の滝＆中禅寺湖", "鬼怒川温泉", "那須高原（リゾート＆牧場）", "あしかがフラワーパーク"], "gourmet": "宇都宮餃子、とちおとめスイーツ、湯波料理、佐野ラーメン、那須和牛"},
    {"code": "gunma", "name": "群馬県", "area": "関東", "catch": "草津・伊香保・四万の名湯めぐりと上毛三山の雄姿", "spots": ["草津温泉（湯畑・湯もみ）", "伊香保温泉（365段の石段街）", "四万温泉（積善館）", "吹割の滝（東洋のナイアガラ）", "富岡製糸場（世界遺産）"], "gourmet": "上州牛、水沢うどん、おっきりこみ、焼きまんじゅう、下仁田ねぎ料理"},
    {"code": "saitama", "name": "埼玉県", "area": "関東", "catch": "小江戸川越の蔵造りの街並みと秩父・長瀞の渓谷美", "spots": ["川越一番街・時の鐘", "長瀞ライン下り＆岩畳", "三峯神社（天空のパワースポット）", "羊山公園（芝桜の丘）", "鉄道博物館"], "gourmet": "川越うな重、秩父みそ豚丼、草加せんべい、武蔵野うどん、長瀞天然かき氷"},
    {"code": "chiba", "name": "千葉県", "area": "関東", "catch": "房総半島の潮風と絶景海岸、成田の祈りの地", "spots": ["成田山新勝寺", "鋸山（地獄のぞき）", "鴨川シーワールド", "養老渓谷（粟又の滝）", "房総南無谷海岸・白浜温泉"], "gourmet": "勝浦タンタンメン、房総伊勢海老、なめろう、さんが焼き、落花生スイーツ"},
    {"code": "tokyo", "name": "東京都", "area": "関東", "catch": "伝統と最先端が交差する世界都市と奥多摩の自然", "spots": ["浅草寺＆東京スカイツリー", "明治神宮＆原宿・表参道", "東京タワー＆麻布台ヒルズ", "皇居外苑＆銀座", "奥多摩湖＆秋川渓谷"], "gourmet": "江戸前寿司、もんじゃ焼き、深川めし、東京軍鶏、老舗天ぷら"},
    {"code": "kanagawa", "name": "神奈川県", "area": "関東", "catch": "武家の古都・鎌倉と異国情緒の横浜、箱根温泉郷", "spots": ["鶴岡八幡宮＆高徳院鎌倉大仏", "箱根芦ノ湖＆大涌谷", "江の島＆湘南海岸", "横浜みなとみらい・赤レンガ倉庫", "横浜中華街"], "gourmet": "生しらす丼、中華街点心、葉山牛、箱根湯葉料理、崎陽軒シウマイ"},
    {"code": "niigata", "name": "新潟県", "area": "甲信越", "catch": "米どころ酒どころと日本海の絶景・越後湯沢温泉", "spots": ["越後湯沢温泉郷", "清津峡渓谷トンネル（鏡池アート）", "佐渡島（金山・たらい舟）", "弥彦神社", "星峠の棚田"], "gourmet": "魚沼産コシヒカリ、のどぐろ、へぎそば、タレかつ丼、地酒銘酒"},
    {"code": "toyama", "name": "富山県", "area": "北陸", "catch": "立山黒部アルペンルートと富山湾の天然の生簀", "spots": ["立山黒部アルペンルート（雪の大谷）", "黒部峡谷トロッコ電車", "雨晴海岸（女岩越しの立山連峰）", "五箇山合掌造り集落", "宇奈月温泉"], "gourmet": "白えび、富山湾の寒ブリ、ホタルイカ、富山ブラックラーメン、ます寿司"},
    {"code": "ishikawa", "name": "石川県", "area": "北陸", "catch": "情緒あふれる城下町と日本海の至高の幸", "spots": ["兼六園（雪吊りと名庭園）", "ひがし茶屋街（町並み散策＆金箔）", "金沢21世紀美術館（現代アート）", "近江町市場（極上海鮮丼）", "加賀温泉郷・山中温泉"], "gourmet": "のどぐろ、加賀料理、金沢おでん、治部煮、能登牛"},
    {"code": "fukui", "name": "福井県", "area": "北陸", "catch": "断崖絶壁の東尋坊と永平寺の禅の心、越前ガニの聖地", "spots": ["東尋坊（柱状節理の絶景）", "大本山永平寺", "福井県立恐竜博物館", "三方五湖（レインボーライン）", "あわら温泉"], "gourmet": "越前がに、越前おろしそば、ソースカツ丼、焼き鯖寿司、若狭ふぐ"},
    {"code": "yamanashi", "name": "山梨県", "area": "甲信越", "catch": "霊峰富士の絶景と八ヶ岳・日本屈指の果実とワイン", "spots": ["富士五湖（河口湖・山中湖）", "新倉山浅間公園（富士山と五重塔）", "忍野八海", "昇仙峡", "石和温泉"], "gourmet": "甲州ほうとう、甲州ワイン、甲州牛、信玄餅、ぶどう・桃"},
    {"code": "nagano", "name": "長野県", "area": "甲信越", "catch": "日本の屋根・雄大な北アルプスと名湯・善光寺", "spots": ["上高地（河童橋と大正池）", "地獄谷野猿公苑（スノーモンキー）", "国宝松本城", "善光寺", "白馬・志賀高原スノーリゾート"], "gourmet": "信州そば、信州牛、おやき、馬刺し、信州リンゴ"},
    {"code": "gifu", "name": "岐阜県", "area": "東海", "catch": "世界遺産白川郷と飛騨高山の古い町並み、下呂温泉", "spots": ["白川郷合掌造り集落（世界遺産）", "飛騨高山・古い町並み", "下呂温泉（日本三名泉）", "郡上八幡（水の城下町）", "奥飛騨温泉郷・新穂高ロープウェイ"], "gourmet": "飛騨牛ステーキ・握り、高山ラーメン、朴葉味噌、鮎料理、栗きんとん"},
    {"code": "shizuoka", "name": "静岡県", "area": "東海", "catch": "富士山を仰ぐ絶景パノラマと伊豆・駿河湾の恵み", "spots": ["三島スカイウォーク（富士山展望）", "修善寺温泉・竹林の小径", "熱海サンビーチ", "白糸の滝", "夢の吊橋（寸又峡）"], "gourmet": "駿河湾の桜えび・生しらす、浜松餃子、富士宮やきそば、金目鯛、静岡茶"},
    {"code": "aichi", "name": "愛知県", "area": "東海", "catch": "尾張徳川の歴史と名古屋めし、常滑焼と知多半島", "spots": ["名古屋城（本丸御殿）", "熱田神宮", "国宝犬山城", "ジブリパーク", "蒲郡・三谷温泉"], "gourmet": "ひつまぶし、手羽先唐揚げ、味噌カツ、名古屋コーチン、台湾ラーメン"},
    {"code": "mie", "name": "三重県", "area": "近畿", "catch": "日本人の心のふるさと伊勢神宮とリアス式海岸の鳥羽・志摩", "spots": ["伊勢神宮（内宮・外宮・おかげ横丁）", "鳥羽水族館", "志摩地中海村", "熊野古道（世界遺産）", "湯の山温泉・御在所ロープウェイ"], "gourmet": "松阪牛、伊勢海老、あわび、伊勢うどん、赤福餅"},
    {"code": "shiga", "name": "滋賀県", "area": "近畿", "catch": "日本最大の湖・琵琶湖と国宝彦根城、歴史の宿場町", "spots": ["国宝彦根城", "琵琶湖テラス（びわ湖バレイ）", "比叡山延暦寺（世界遺産）", "近江八幡（八幡堀めぐり）", "おごと温泉"], "gourmet": "近江牛しゃぶしゃぶ、鮒寿司、近江ちゃんぽん、赤こんにゃく、バームクーヘン"},
    {"code": "kyoto", "name": "京都府", "area": "近畿", "catch": "千年の歴史が息づく古都の美と四季の彩り", "spots": ["清水寺（舞台からの絶景）", "嵐山・渡月橋（竹林の小径）", "伏見稲荷大社（千本鳥居）", "金閣寺・銀閣寺", "祇園・先斗町の路地"], "gourmet": "湯豆腐、京懐石、宇治抹茶スイーツ、おばんざい、にしんそば"},
    {"code": "osaka", "name": "大阪府", "area": "近畿", "catch": "天下の台所・食い倒れの街と歴史薫る太閤の城", "spots": ["大阪城天守閣", "道頓堀（戎橋・グリコサイン）", "通天閣＆新世界", "ユニバーサル・スタジオ・ジャパン", "梅田スカイビル空中庭園"], "gourmet": "たこ焼き、お好み焼き、串カツ、てっちり（ふぐ鍋）、肉吸い"},
    {"code": "hyogo", "name": "兵庫県", "area": "近畿", "catch": "港町神戸のおしゃれな街並みと日本屈指の名湯", "spots": ["城崎温泉（七湯外湯めぐり）", "有馬温泉（日本三古湯）", "姫路城（世界遺産白鷺城）", "神戸北野異人館街", "淡路島（明石海峡大橋）"], "gourmet": "神戸牛、明石焼き、日本海松葉ガニ、丹波黒豆、灘の銘酒"},
    {"code": "nara", "name": "奈良県", "area": "近畿", "catch": "悠久の時を刻む古都・大仏と鹿が迎える癒やしの里", "spots": ["東大寺大仏殿＆奈良公園の鹿", "春日大社", "法隆寺（世界最古の木造建築）", "吉野山（千本桜）", "ならまちの町家散策"], "gourmet": "柿の葉寿司、三輪そうめん、大和茶、葛きり、飛鳥鍋"},
    {"code": "wakayama", "name": "和歌山県", "area": "近畿", "catch": "聖地高野山・熊野三山と白浜の絶景リゾート", "spots": ["総本山金剛峯寺・高野山奥之院", "熊野那智大社＆那智の滝", "白良浜（白砂ビーチ）", "アドベンチャーワールド", "南紀白浜温泉"], "gourmet": "紀州南高梅、クエ鍋、勝浦マグロ、和歌山ラーメン、めはり寿司"},
    {"code": "tottori", "name": "鳥取県", "area": "中国", "catch": "雄大な鳥取砂丘と伯耆富士・大山、名湯三朝温泉", "spots": ["鳥取砂丘＆砂の美術館", "名峰大山（だいせん）", "三朝温泉（世界屈指のラジウム泉）", "水木しげるロード", "白兎海岸"], "gourmet": "松葉ガニ、鳥取和牛、二十世紀梨、ばばあ汁、牛骨ラーメン"},
    {"code": "shimane", "name": "島根県", "area": "中国", "catch": "神々の集う出雲大社と日本一の庭園・足立美術館", "spots": ["出雲大社（縁結びの聖地）", "足立美術館（日本一の庭園）", "松江城（国宝天守と堀川遊覧）", "玉造温泉（美肌の湯）", "石見銀山（世界遺産）"], "gourmet": "出雲そば、宍道湖七珍（シジミ汁）、しまね和牛、赤てん、のどぐろ"},
    {"code": "okayama", "name": "岡山県", "area": "中国", "catch": "晴れの国の倉敷美観地区と名園・後楽園", "spots": ["倉敷美観地区（白壁の町並み）", "日本三名園・岡山後楽園", "岡山城（烏城）", "瀬戸大橋展望（鷲羽山）", "湯原温泉（砂湯）"], "gourmet": "清水白桃・マスカット、岡山ばら寿司、ひるぜん焼そば、デミカツ丼、津山ホルモンうどん"},
    {"code": "hiroshima", "name": "広島県", "area": "中国", "catch": "宮島・厳島神社の神秘と瀬戸内海の多島美", "spots": ["宮島・厳島神社（海に浮かぶ大鳥居）", "しまなみ海道（絶景サイクリング）", "尾道（坂の街と千光寺）", "原爆ドーム＆平和記念公園", "鞆の浦"], "gourmet": "広島お好み焼き、獲れたて牡蠣、尾道ラーメン、もみじ饅頭、穴子飯"},
    {"code": "yamaguchi", "name": "山口県", "area": "中国", "catch": "角島大橋のエメラルド海と元乃隅神社の赤鳥居", "spots": ["角島大橋（絶景シーサイドドライブ）", "元乃隅神社（123基の鳥居と海）", "秋吉台・秋芳洞（日本屈指の鍾乳洞）", "萩城下町（松下村塾）", "長門湯本温泉"], "gourmet": "下関ふぐ料理、瓦そば、岩国寿司、長州黒かしわ、獺祭（地酒）"},
    {"code": "tokushima", "name": "徳島県", "area": "四国", "catch": "世界最大級の鳴門の渦潮と秘境祖谷のかずら橋", "spots": ["鳴門の渦潮（大鳴門橋遊歩道）", "祖谷のかずら橋（秘境の吊り橋）", "大塚国際美術館", "大歩危・小歩危峡谷", "眉山（阿波おどりの街）"], "gourmet": "徳島ラーメン、阿波尾鶏、鳴門鯛、すだち料理、鳴門金時スイーツ"},
    {"code": "kagawa", "name": "香川県", "area": "四国", "catch": "讃岐うどんの聖地と金刀比羅宮、栗林公園の美", "spots": ["金刀比羅宮（こんぴらさん）", "特別名勝・栗林公園", "小豆島（オリーブ公園・エンジェルロード）", "父母ヶ浜（日本のウユニ塩湖）", "直島（現代アートの島）"], "gourmet": "讃岐うどん、骨付鳥、オリーブ牛、しょうゆ豆、和三盆菓子"},
    {"code": "ehime", "name": "愛媛県", "area": "四国", "catch": "日本最古の道後温泉本館と松山城・瀬戸内の柑橘", "spots": ["道後温泉本館（日本三古湯）", "松山城（現存12天守）", "しまなみ海道（来島海峡大橋）", "内子・大洲の町並み", "別子銅山（東洋のマチュピチュ）"], "gourmet": "宇和島鯛めし、松山鯛めし、今治焼き鳥、みかんスイーツ、一六タルト"},
    {"code": "kochi", "name": "高知県", "area": "四国", "catch": "坂本龍馬の桂浜と最後の清流・四万十川の絶景", "spots": ["桂浜（坂本龍馬像と太平洋）", "四万十川（沈下橋めぐり）", "高知城（追手門と天守）", "ひろめ市場（屋台グルメ）", "柏島（エメラルドグリーンの海）"], "gourmet": "鰹のタタキ（藁焼き塩タタキ）、土佐あかうし、ウツボ料理、四万十天然鮎、文旦"},
    {"code": "fukuoka", "name": "福岡県", "area": "九州", "catch": "アジアの活気あふれる美食の街と歴史の港", "spots": ["太宰府天満宮", "糸島（絶景ビーチ＆おしゃれカフェ）", "中洲・天神の屋台街", "門司港レトロ", "福岡タワー＆百道浜"], "gourmet": "博多もつ鍋、水炊き、豚骨ラーメン、明太子、一口餃子"},
    {"code": "saga", "name": "佐賀県", "area": "九州", "catch": "美肌の嬉野・武雄温泉と有田焼の窯元めぐり", "spots": ["嬉野温泉（日本三大美肌の湯）", "武雄温泉楼門＆武雄市図書館", "吉野ヶ里歴史公園", "有田ポーセリンパーク＆窯元通り", "呼子（波戸岬）"], "gourmet": "呼子のイカ活き造り、佐賀牛、嬉野温泉湯豆腐、シシリアンライス、小城羊羹"},
    {"code": "nagasaki", "name": "長崎県", "area": "九州", "catch": "異国情緒のグラバー園と軍艦島、世界新三大夜景", "spots": ["稲佐山（世界新三大夜景）", "グラバー園＆大浦天主堂", "軍艦島（端島炭坑クルーズ）", "ハウステンボス", "雲仙温泉・地獄めぐり"], "gourmet": "長崎ちゃんぽん、皿うどん、長崎カステラ、佐世保バーガー、卓袱料理"},
    {"code": "kumamoto", "name": "熊本県", "area": "九州", "catch": "天下の名城・熊本城と雄大な阿蘇カルデラ・黒川温泉", "spots": ["熊本城天守閣", "阿蘇大観峰＆阿蘇中岳火口", "黒川温泉（露天風呂めぐり入湯手形）", "草千里ヶ浜", "天草五橋＆イルカウォッチング"], "gourmet": "馬刺し、あか牛丼、熊本ラーメン、からし蓮根、いきなり団子"},
    {"code": "oita", "name": "大分県", "area": "九州", "catch": "日本一の温泉湧出量！おんせん県のおもてなしと自然", "spots": ["別府地獄めぐり", "由布院・金鱗湖（朝霧の幻想美）", "九重“夢”大吊橋", "耶馬渓", "宇佐神宮"], "gourmet": "とり天、別府冷麺、豊後牛、関あじ・関さば、中津からあげ"},
    {"code": "miyazaki", "name": "宮崎県", "area": "九州", "catch": "神話の里・高千穂峡と日南海岸の南国リゾート", "spots": ["高千穂峡（真名井の滝ボート）", "日南海岸モアイ像（サンメッセ日南）", "鵜戸神宮（洞窟の社殿）", "青島（鬼の洗濯板）", "高千穂神社"], "gourmet": "宮崎牛ステーキ、チキン南蛮、地鶏炭火焼き、完熟マンゴー、冷や汁"},
    {"code": "kagoshima", "name": "鹿児島県", "area": "九州", "catch": "桜島の雄姿を望む南国の情熱と天然砂むし温泉", "spots": ["仙巌園からの桜島ビュー", "指宿温泉・砂むし会館", "霧島神宮", "屋久島（白谷雲水峡・縄文杉）", "知覧武家屋敷庭園"], "gourmet": "黒豚しゃぶしゃぶ、さつま揚げ、白熊かき氷、鶏飯、本格芋焼酎"},
    {"code": "okinawa", "name": "沖縄県", "area": "沖縄", "catch": "エメラルドグリーンの海と琉球文化の楽園リゾート", "spots": ["美ら海水族館", "古宇利大橋（絶景ドライブ）", "万座毛", "首里城公園", "宮古島・石垣島の白砂ビーチ"], "gourmet": "沖縄そば、ゴーヤーチャンプルー、あぐー豚、海ぶどう、ブルーシールアイス"}
]

def load_posted_history():
    """過去にBlueskyで投稿した記事IDを読み込む"""
    if os.path.exists(BLUESKY_HISTORY_FILE):
        with open(BLUESKY_HISTORY_FILE, "r", encoding="utf-8") as f:
            return [line.strip() for line in f if line.strip()]
    return []

def record_posted_history(post_id):
    """投稿したIDを履歴に記録する"""
    with open(BLUESKY_HISTORY_FILE, "a", encoding="utf-8") as f:
        f.write(f"{post_id}\n")

def decide_post_mode(history_list):
    """
    交互投稿モード判定:
    偶数回: 🏨 厳選ホテル・特集ポスト（アフィリンク付き）
    奇数回: 🌸 地域魅力・観光スポット紹介ポスト（純コンテンツ / アフィなし・フォロワー獲得特化）
    """
    count = len(history_list)
    return "showcase" if count % 2 == 1 else "hotel"

def optimize_image_bytes(raw_bytes, max_bytes=900000):
    """
    BlueskyのBlobサイズ上限（2MB、推奨1MB未満）に合わせて画像を軽量化する
    """
    if len(raw_bytes) <= max_bytes:
        return raw_bytes

    try:
        from PIL import Image
        import io
        img = Image.open(io.BytesIO(raw_bytes))
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")

        max_dim = 1600
        if max(img.size) > max_dim:
            img.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)

        quality = 85
        while quality >= 40:
            out_io = io.BytesIO()
            img.save(out_io, format="JPEG", quality=quality, optimize=True)
            res = out_io.getvalue()
            if len(res) <= max_bytes:
                return res
            quality -= 15
        return res
    except Exception as e:
        print(f"[WARN] Failed to optimize image: {e}")
        return raw_bytes[:max_bytes] if len(raw_bytes) > 2000000 else raw_bytes

# ==========================================
# 1. 🏨 ホテル・特集ポスト関連（アフィリンク付）
# ==========================================
def select_best_hotel_post(history_set):
    """
    秋冬シーズン（11月〜冬）に最も検索・予約需要が高い記事を最優先選定
    スコアリング要素:
    - 季節トレンド（冬、雪、露天、温泉、カニ、クリスマス、年末年始、ふるさと納税等）
    - 特集記事（10選、完全攻略など高バリュー記事）
    - 楽天評価★4.2以上
    """
    if not os.path.isdir(POSTS_DIR):
        return None

    all_files = [f for f in os.listdir(POSTS_DIR) if f.endswith(".json")]
    # 7大メガキラー記事スラッグ（最優先プール）
    MEGA_KILLER_IDS = [
        "japan-onsen-ranking-best-hotels-guide",
        "all-inclusive-onsen-resort-ranking-japan-hotels-guide",
        "sauna-resort-hotels-ranking-japan-guide",
        "newyear-hatsumode-sunrise-ryokan-ranking-japan-hotels-guide",
        "furusato-tax-luxury-ryokan-ranking-japan-hotels-guide",
        "winter-snow-onsen-roten-ranking-japan-hotels-guide",
        "winter-crab-onsen-hotels-ranking-matuba-echizen-guide"
    ]

    winter_keywords = [
        "冬", "雪", "露天", "温泉", "カニ", "蟹", "イルミネーション",
        "クリスマス", "年末年始", "初詣", "初日の出", "ふるさと納税", "サウナ", "オールインクルーシブ", "winter", "autumn", "紅葉", "湯けむり"
    ]

    scored_candidates = []
    fallback_candidates = []

    for f in all_files:
        post_path = os.path.join(POSTS_DIR, f)
        try:
            with open(post_path, "r", encoding="utf-8") as fp:
                data = json.load(fp)
                post_id = str(data.get("id", ""))
                if not post_id or not data.get("title") or not data.get("image"):
                    continue

                is_special = bool(data.get("is_special_feature"))
                rating = float(data.get("rating") or 0)
                title = data.get("title", "")
                desc = data.get("description", "")

                score = 0
                if post_id in MEGA_KILLER_IDS:
                    score += 60  # 7大キラー記事を最優先でローテーション
                if is_special:
                    score += 15
                if rating >= 4.5:
                    score += 12
                elif rating >= 4.2:
                    score += 6

                for kw in winter_keywords:
                    if kw in title:
                        score += 8
                    if kw in desc:
                        score += 3

                # 未投稿を最優先
                if post_id not in history_set:
                    # スコア＋微小なランダム値で上位プールから柔軟に選定
                    scored_candidates.append((score + random.uniform(0, 5), data))
                else:
                    fallback_candidates.append((score, data))
        except Exception:
            continue

    if scored_candidates:
        scored_candidates.sort(key=lambda x: x[0], reverse=True)
        # 上位20件の超高需要・高評価記事からランダム選定
        top_pool = scored_candidates[:min(20, len(scored_candidates))]
        return random.choice(top_pool)[1]
    elif fallback_candidates:
        fallback_candidates.sort(key=lambda x: x[0], reverse=True)
        top_pool = fallback_candidates[:min(30, len(fallback_candidates))]
        return random.choice(top_pool)[1]
    return None

def generate_hotel_text_with_gemini(post_data, api_key):
    """
    Gemini最新モデル（1.5系除外）を使用して情緒あふれる共感型マイクロコピーを生成
    """
    hotel_name = post_data.get("hotel_name", "")
    pref = post_data.get("prefecture", "")
    title = post_data.get("title", "")
    desc = (post_data.get("description") or post_data.get("review") or "")[:400]
    rating = post_data.get("rating")
    is_special = post_data.get("is_special_feature")

    prompt = f"""あなたは旅の魅力と感動を伝えるリアルな旅インフルエンサーです。
Blueskyで旅行好きのフォロワーが思わず「ここ絶対行きたい！」「今すぐ保存しなきゃ」と共感・ブックマーク（保存）したくなるような、情緒あふれるリアルな投稿文（日本語）を1つ作成してください。

【対象スポット/宿情報】
- 施設/特集名: {hotel_name} ({pref})
- 特徴・概要: {desc}
- 評価: ★{rating}
- タイトル: {title}
- 特集記事かどうか: {"はい（複数名宿・エリア特集）" if is_special else "いいえ（厳選宿）"}

【執筆ルール】
1. 文字数: 日本語110〜160文字程度（短縮URLやハッシュタグは別途システムで付与するため、ここにはURLやハッシュタグを一切含めないでください）。
2. AI特有の硬い敬語や「〜はいかがでしょうか」「魅力をご紹介します」「必見です」といったテンプレ・定型句は絶対に使わないこと。
3. 旅人が実際に訪れて心から感動したような、リアルで生々しい語り口（例：「〜がたまらない…」「冬のボーナスで真っ先に行きたい」「湯けむりと〜の組み合わせは反則すぎる」など）にすること。
4. 1行目は思わず手が止まるインパクトあるフック（一行共感）にすること。
5. 出力は生成した本文テキストのみ（引用符や前置き・解説は一切不要）。
"""

    headers = {"Content-Type": "application/json"}
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "temperature": 0.85,
            "maxOutputTokens": 300,
        }
    }

    # モデルローテーション（Gemini 1.5は完全除外）
    models_to_try = list(GEMINI_MODELS)
    random.shuffle(models_to_try)

    for model in models_to_try:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"
        try:
            res = requests.post(url, headers=headers, json=payload, timeout=8)
            if res.status_code == 200:
                data = res.json()
                text = data["candidates"][0]["content"]["parts"][0]["text"].strip()
                # 引用符や余計なマークダウン記号を除去
                clean_text = re.sub(r'^["「『]|["」』]$', '', text).strip()
                if clean_text and len(clean_text) >= 50:
                    return clean_text
        except Exception:
            continue
    return None

def build_hotel_post_content(post_data):
    post_id = str(post_data.get("id"))
    affiliate_url = post_data.get("affiliate_url", "")
    article_url = f"{SITE_BASE_URL}/posts/{post_id}/"
    hotel_name = post_data.get("hotel_name", "")
    pref = post_data.get("prefecture", "")
    is_special = post_data.get("is_special_feature")
    rating = post_data.get("rating")
    rating_text = f"（評価★{rating}）" if rating else ""

    # 1. Gemini APIによる共感型テキストの動的生成を試行
    generated_body = None
    if GEMINI_API_KEY:
        try:
            generated_body = generate_hotel_text_with_gemini(post_data, GEMINI_API_KEY)
        except Exception as e:
            print(f"[WARN] Gemini text generation failed: {e}")

    # 2. 生成できなかった場合の高品質情緒的フォールバック
    if not generated_body:
        if is_special:
            hooks = [
                f"冬のご褒美旅で絶対に失敗したくない人へ…！{pref}で本気で泊まりたい名宿まとめ♨️",
                f"一度は泊まってみたい憧れの宿ばかり…！{pref}の極上露天と絶景ステイ特集✨",
                f"湯けむりと旬の美食がたまらない…！{pref}の保存必須な厳選温泉宿ガイド🌿"
            ]
            hook = random.choice(hooks)
            generated_body = f"{hook}\n\n【{hotel_name}】{rating_text}\n雪見露天や客室からの絶景、地元食材を贅沢に使ったお料理まで、心からリフレッシュできる癒やしの滞在プランを徹底比較。"
        else:
            hooks = [
                f"{pref}で泊まるなら絶対ここ推したい…！一度訪れたら忘れられない名宿🏨✨",
                f"お部屋からの景色も温泉もお料理も反則級のクオリティ…🌿",
                f"週末や連休のご褒美ステイに全力でおすすめしたい至福の宿♨️"
            ]
            hook = random.choice(hooks)
            generated_body = f"{hook}\n\n{pref}の「{hotel_name}」{rating_text}。静寂に包まれる空間と極上の湯、心温まるおもてなしで日頃の疲れがすーっと溶けていくような滞在が叶います。"

    # 文字数ガード（最大180文字に収める）
    if len(generated_body) > 180:
        generated_body = generated_body[:175] + "…"

    tb = client_utils.TextBuilder()
    tb.text(generated_body.strip() + "\n\n")

    tb.text("📖 詳しい宿泊ルポ: ")
    tb.link("記事を読む", article_url)
    tb.text("\n")

    if affiliate_url:
        tb.text("✈️ 楽天トラベル: ")
        tb.link("空室・プランを見る", affiliate_url)
        tb.text("\n\n")
    else:
        tb.text("\n")

    # ハッシュタグ選定
    tags = ["国内旅行"]
    if pref and pref != "全国":
        p_clean = pref.split("・")[0].replace("都", "").replace("府", "").replace("県", "")
        tags.append(f"{p_clean}旅行")
    if "温泉" in hotel_name or (post_data.get("categories") and "温泉旅行" in post_data.get("categories")):
        tags.append("温泉宿")
    else:
        tags.append("ホテルステイ")
    tags.append("旅行好きな人と繋がりたい")

    for i, t in enumerate(tags[:4]):
        tb.tag(f"#{t}", t)
        if i < len(tags[:4]) - 1:
            tb.text(" ")

    return tb

def collect_hotel_images(post_data):
    urls = []
    if post_data.get("image"):
        urls.append(post_data.get("image"))
    for img in (post_data.get("other_images") or []):
        if img and img not in urls:
            urls.append(img)
        if len(urls) >= 4:
            break

    image_bytes_list = []
    alts = []
    hotel_name = post_data.get("hotel_name") or "厳選ホテル"
    headers = {"User-Agent": "Mozilla/5.0"}

    for idx, u in enumerate(urls[:4]):
        try:
            res = requests.get(u, headers=headers, timeout=12)
            if res.status_code == 200 and len(res.content) > 1000:
                image_bytes_list.append(optimize_image_bytes(res.content))
                alts.append(f"{hotel_name} 写真 {idx + 1}")
        except Exception as e:
            print(f"[WARN] Failed to fetch image: {e}")
    return image_bytes_list, alts

# ==========================================
# 2. 🌸 地域魅力・観光スポットポスト（純コンテンツ）
# ==========================================
def select_showcase_pref(history_set):
    """まだ投稿していない地域を優先し、47都道府県からバランスよく選定"""
    unposted = [p for p in PREFECTURES_SHOWCASE if f"showcase_{p['code']}" not in history_set]
    if unposted:
        return random.choice(unposted)
    return random.choice(PREFECTURES_SHOWCASE)

def generate_showcase_text_with_gemini(pref_info, api_key):
    """
    Gemini最新モデルによる観光地紹介マイクロコピーの動的生成
    """
    pref_name = pref_info["name"]
    catch = pref_info["catch"]
    spots = "、".join(pref_info["spots"][:4])
    gourmet = pref_info["gourmet"]

    prompt = f"""あなたは日本全国の魅力を知り尽くした旅のエキスパートです。
Blueskyで「{pref_name}」の純粋な観光名所・ご当地グルメの魅力を伝える、保存（ブックマーク）したくなる投稿文（日本語）を1つ作成してください。

【地域情報】
- 都道府県: {pref_name}（{catch}）
- 代表的な名所: {spots}
- 必食グルメ: {gourmet}

【執筆ルール】
1. 文字数: 日本語110〜150文字程度（URLやハッシュタグはシステムが付与するので含めないでください）。
2. アフィリエイトや宣伝臭さを一切排除し、純粋に「ここに行きたくなる！」「週末や次の連休に旅立ちたくなる」情緒的で引き込まれる文章にすること。
3. 1行目は目を引く魅力的な一言フック（例：「一生に一度は見たい絶景がここに…」「冬の〜が本気で美しすぎる」など）。
4. 出力は本文テキストのみ。
"""

    headers = {"Content-Type": "application/json"}
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "temperature": 0.85,
            "maxOutputTokens": 300,
        }
    }

    models_to_try = list(GEMINI_MODELS)
    random.shuffle(models_to_try)

    for model in models_to_try:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"
        try:
            res = requests.post(url, headers=headers, json=payload, timeout=8)
            if res.status_code == 200:
                data = res.json()
                text = data["candidates"][0]["content"]["parts"][0]["text"].strip()
                clean_text = re.sub(r'^["「『]|["」』]$', '', text).strip()
                if clean_text and len(clean_text) >= 50:
                    return clean_text
        except Exception:
            continue
    return None

def build_showcase_post_content(pref_info):
    """
    フォロワー増加に特化した純観光コンテンツポスト
    アフィリンクなし！共感・保存・リポストを最大化する構成
    """
    pref_name = pref_info["name"]
    code = pref_info["code"]
    catch = pref_info["catch"]
    spots = pref_info["spots"][:4]
    gourmet = pref_info["gourmet"]
    pref_url = f"{SITE_BASE_URL}/prefectures/{code}/"

    generated_body = None
    if GEMINI_API_KEY:
        try:
            generated_body = generate_showcase_text_with_gemini(pref_info, GEMINI_API_KEY)
        except Exception as e:
            print(f"[WARN] Gemini showcase text generation failed: {e}")

    if not generated_body:
        hooks = [
            f"一生に一度は行きたい…！{pref_name}の魅力が詰まった見どころまとめ✨",
            f"次の旅行先に全力でおすすめしたい…！{pref_name}の絶景＆名所4選🌸",
            f"週末や連休に行きたい！{pref_name}（{catch}）の保存必須スポット🌿"
        ]
        hook = random.choice(hooks)
        spots_text = "\n".join([f"📍 {s}" for s in spots])
        generated_body = f"""{hook}

{spots_text}

🍴 必食ご当地グルメ:
{gourmet}

四季折々の絶景と美食が待つ{pref_name}。旅行の計画・宿探しの参考にぜひ保存（ブックマーク）してご活用ください！"""

    if len(generated_body) > 200:
        generated_body = generated_body[:195] + "…"

    tb = client_utils.TextBuilder()
    tb.text(generated_body.strip() + "\n\n")

    tb.text(f"🗺️ {pref_name}観光完全ガイド: ")
    tb.link("特集ページを見る", pref_url)
    tb.text("\n\n")

    pref_short = pref_name.replace("都", "").replace("府", "").replace("県", "")
    tb.tag(f"#{pref_short}旅行", f"{pref_short}旅行")
    tb.text(" ")
    tb.tag(f"#{pref_short}観光", f"{pref_short}観光")
    tb.text(" ")
    tb.tag("#国内旅行", "国内旅行")
    tb.text(" ")
    tb.tag("#旅行好きな人と繋がりたい", "旅行好きな人と繋がりたい")

    return tb

def collect_pref_showcase_images(pref_info):
    """
    その都道府県の代表的な観光地・名所の実写画像を優先取得（最大4枚）。
    観光地画像が不足する場合は既存記事の宿画像で安全にフォールバック。
    """
    pref_name = pref_info["name"]
    spots = pref_info.get("spots", [])
    headers = {"User-Agent": "Mozilla/5.0"}

    image_bytes_list = []
    alts = []

    # 1. 観光スポット名からWikipedia/Wikimediaの実写横長画像を取得
    print(f"[IMAGES] Fetching tourist spot images for {pref_name}...")
    for spot in spots:
        if len(image_bytes_list) >= 4:
            break
        try:
            spot_img_info = fetch_tourist_spot_image(spot, min_width=600)
            if spot_img_info and spot_img_info.get("url"):
                u = spot_img_info["url"]
                res = requests.get(u, headers=headers, timeout=10)
                if res.status_code == 200 and len(res.content) > 2000:
                    optimized = optimize_image_bytes(res.content)
                    image_bytes_list.append(optimized)
                    alts.append(f"{pref_name}・{spot_img_info.get('title', spot)}")
                    print(f"  [SPOT-IMG] Added: {spot} ({spot_img_info['title']}) [{spot_img_info['width']}x{spot_img_info['height']}]")
        except Exception as e:
            print(f"  [WARN] Failed to fetch spot image for {spot}: {e}")

    # 2. 4枚に満たない場合、該当都道府県の記事から宿画像を補完
    if len(image_bytes_list) < 4 and os.path.isdir(POSTS_DIR):
        all_files = [f for f in os.listdir(POSTS_DIR) if f.endswith(".json")]
        matched_images = []
        for f in all_files:
            p_path = os.path.join(POSTS_DIR, f)
            try:
                with open(p_path, "r", encoding="utf-8") as fp:
                    d = json.load(fp)
                    if d.get("prefecture") == pref_name and d.get("image"):
                        if d.get("image") not in matched_images:
                            matched_images.append(d.get("image"))
                    for o in (d.get("other_images") or []):
                        if o and o not in matched_images:
                            matched_images.append(o)
                    if len(matched_images) >= 6:
                        break
            except Exception:
                continue

        for u in matched_images:
            if len(image_bytes_list) >= 4:
                break
            try:
                res = requests.get(u, headers=headers, timeout=10)
                if res.status_code == 200 and len(res.content) > 1000:
                    image_bytes_list.append(optimize_image_bytes(res.content))
                    alts.append(f"{pref_name}の魅力的な宿泊施設・風景")
            except Exception:
                continue

    return image_bytes_list, alts

# ==========================================
# 3. 🎯 エンゲージメント・インターバル管理
# ==========================================
DAILY_POST_LIMIT = 12 # 2時間ごとなので1日最大12回
STRICT_INTERVAL_HOURS = 2.0 # 厳密な2時間間隔（120分）
MIN_TOLERANCE_HOURS = 1.85 # わずかな時刻ブレ（111分）を許容

def load_engagement_history():
    if os.path.exists(ENGAGEMENT_HISTORY_FILE):
        with open(ENGAGEMENT_HISTORY_FILE, "r", encoding="utf-8") as f:
            return set(line.strip() for line in f if line.strip())
    return set()

def record_engagement_history(identifier):
    with open(ENGAGEMENT_HISTORY_FILE, "a", encoding="utf-8") as f:
        f.write(f"{identifier}\n")

def get_latest_post_time(client):
    """自身のアカウントの最新投稿時刻(UTC datetime)を取得する"""
    try:
        author_feed = client.get_author_feed(actor=client.me.did, limit=10)
        for item in author_feed.feed:
            post = item.post
            if post.indexed_at:
                return datetime.fromisoformat(post.indexed_at.replace("Z", "+00:00"))
    except Exception as e:
        print(f"[WARN] Failed to fetch latest post time: {e}")
    return None

def wait_until_ready_for_next_post(client, max_wait_seconds=600):
    """
    スキップを禁止し、前回の投稿から2時間（MIN_TOLERANCE_HOURS）経過するまで
    最大max_wait_seconds（例: 10分）まで粘り強くリトライ待機する。
    待機時間がmax_wait_secondsを超える（まだ間隔が短すぎる）場合のみFalseを返す。
    """
    now_utc = datetime.now(timezone.utc)
    latest_time = get_latest_post_time(client)

    if not latest_time:
        print("[INTERVAL-CHECK] No previous posts found. Ready to post immediately.")
        return True

    elapsed_seconds = (now_utc - latest_time).total_seconds()
    required_seconds = MIN_TOLERANCE_HOURS * 3600
    remaining_seconds = required_seconds - elapsed_seconds

    if remaining_seconds <= 0:
        print(f"[INTERVAL-CHECK] Elapsed {elapsed_seconds / 3600:.2f}h >= {MIN_TOLERANCE_HOURS}h. Ready to post immediately.")
        return True

    # 待機すれば2時間に達する場合（最大待機リトライ時間以内）
    if remaining_seconds <= max_wait_seconds:
        print(f"[INTERVAL-RETRY] Previous post was {elapsed_seconds / 3600:.2f}h ago. Waiting {int(remaining_seconds)}s to fulfill 2-hour interval...")
        time.sleep(remaining_seconds + 3)
        print("[INTERVAL-READY] Wait complete! Ready to post.")
        return True

    print(f"[INTERVAL-WAIT] Post interval too short ({elapsed_seconds / 3600:.2f}h elapsed, need {MIN_TOLERANCE_HOURS}h). Need to wait {remaining_seconds / 60:.1f}m. Skipping post this turn.")
    return False

def run_engagement_cycle(client):
    """
    旅行に関心のあるアクティブユーザーの最新ポストを検索し、
    自然なインターバルでいいね（5〜8件）とフォロー（1〜2件）を実施してエンゲージメントを高める
    """
    print("[ENGAGE] Running safe engagement cycle (Likes & Follows)...")
    search_queries = [
        "旅行行きたい",
        "温泉行きたい",
        "旅行計画",
        "温泉行ってきた",
        "国内旅行行きたい",
        "ホテルステイしたい",
        "京都行きたい",
        "北海道行きたい",
        "沖縄行きたい",
        "家族旅行計画",
        "週末旅行",
        "ご褒美旅行",
        "一人旅したい",
        "旅館予約した",
        "カニ食べたい",
        "雪見風呂行きたい"
    ]
    random.shuffle(search_queries)
    engaged_history = load_engagement_history()

    target_likes = random.randint(5, 8)
    target_follows = random.randint(1, 2)

    likes_done = 0
    follows_done = 0

    for query in search_queries[:3]:
        if likes_done >= target_likes and follows_done >= target_follows:
            break
        try:
            res = client.app.bsky.feed.search_posts(params={"q": query, "limit": 25})
            posts = res.posts or []
            random.shuffle(posts)

            for p in posts:
                author_did = p.author.did
                post_uri = p.uri
                post_cid = p.cid

                # 自分自身やBot、すでにリアクション済みの相手をスキップ
                if author_did == client.me.did or post_uri in engaged_history:
                    continue

                # いいね処理
                if likes_done < target_likes:
                    try:
                        time.sleep(random.uniform(1.2, 2.8))
                        client.like(uri=post_uri, cid=post_cid)
                        record_engagement_history(post_uri)
                        likes_done += 1
                        print(f"[ENGAGE-LIKE] Liked post ({likes_done}/{target_likes}) from @{p.author.handle}: {p.record.text[:30].replace(chr(10), ' ')}")
                    except Exception as e:
                        print(f"[ENGAGE-WARN] Like failed: {e}")

                # フォロー処理
                if follows_done < target_follows and author_did not in engaged_history:
                    try:
                        time.sleep(random.uniform(1.5, 3.2))
                        client.follow(subject=author_did)
                        record_engagement_history(author_did)
                        follows_done += 1
                        print(f"[ENGAGE-FOLLOW] Followed travel enthusiast ({follows_done}/{target_follows}): @{p.author.handle}")
                    except Exception as e:
                        print(f"[ENGAGE-WARN] Follow failed: {e}")

                if likes_done >= target_likes and follows_done >= target_follows:
                    break
        except Exception as e:
            print(f"[ENGAGE-WARN] Search query '{query}' failed: {e}")
            continue

    print(f"[ENGAGE-SUMMARY] Completed: {likes_done} likes, {follows_done} follows.")
    return True


# ==========================================
# メイン実行処理
# ==========================================
def post_to_bluesky():
    print(f"[{datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')}] Starting Bluesky auto-post task...")

    history_list = load_posted_history()
    history_set = set(history_list)
    mode = decide_post_mode(history_list)
    print(f"[MODE] Current post mode: {mode.upper()} (Total past posts: {len(history_list)})")

    client = Client()
    try:
        client.login(BLUESKY_HANDLE, APP_PASSWORD)
        print(f"[AUTH] Logged in to Bluesky as {BLUESKY_HANDLE}")
    except Exception as e:
        print(f"[ERROR] Failed to login to Bluesky: {e}")
        return False

    # 1. 投稿インターバル判定（スキップ禁止：2時間間隔に達するまで最大10分リトライ待機）
    should_post_now = wait_until_ready_for_next_post(client, max_wait_seconds=600)

    # 待機してもまだ間隔が短すぎる場合（直近に投稿したばかり）はエンゲージメント（いいね・フォロー）のみ実施
    if not should_post_now:
        print("[POST-DEFER] Interval not reached yet. Running engagement cycle while waiting for next 30m slot.")
        run_engagement_cycle(client)
        print("[COMPLETE] Safe engagement finished. Exiting safely.")
        return True

    # 2. 新規投稿処理
    if mode == "showcase":
        pref_info = select_showcase_pref(history_set)
        print(f"[SELECT] Selected Prefecture Showcase: {pref_info['name']}")
        tb = build_showcase_post_content(pref_info)
        images, alts = collect_pref_showcase_images(pref_info)
        record_id = f"showcase_{pref_info['code']}"
    else:
        post_data = select_best_hotel_post(history_set)
        if not post_data:
            print("[ERROR] No hotel post data found.")
            return False
        print(f"[SELECT] Selected Hotel Post: {post_data.get('title')} (ID: {post_data.get('id')})")
        tb = build_hotel_post_content(post_data)
        images, alts = collect_hotel_images(post_data)
        record_id = str(post_data.get("id"))

    try:
        if len(images) > 1:
            response = client.send_images(
                text=tb,
                images=images,
                image_alts=alts
            )
            print(f"[SUCCESS] Posted with {len(images)} images! URI: {response.uri}")
        elif len(images) == 1:
            response = client.send_image(
                text=tb,
                image=images[0],
                image_alt=alts[0]
            )
            print(f"[SUCCESS] Posted with 1 image! URI: {response.uri}")
        else:
            response = client.send_post(text=tb)
            print(f"[SUCCESS] Posted text only! URI: {response.uri}")

        record_posted_history(record_id)

        # 投稿後に自然なペースでエンゲージメントを実施
        time.sleep(random.uniform(3.0, 6.0))
        run_engagement_cycle(client)
        return True
    except Exception as e:
        print(f"[ERROR] Failed to send post to Bluesky: {e}")
        return False

if __name__ == "__main__":
    success = post_to_bluesky()
    if not success:
        sys.exit(1)
