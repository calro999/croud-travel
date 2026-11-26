import os
import sys
import json
import random
import time
import re
from datetime import datetime
import requests

# 最新対応Geminiモデル（Gemini 1.5系は完全廃止のため除外）
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

DATA_FILE = "src/data/monthly/monthly_features.json"
RAKUTEN_APP_ID = os.environ.get("RAKUTEN_APPLICATION_ID", "1a3cdfd9-2aec-4b42-8290-1c53603b0012")
RAKUTEN_ACCESS_KEY = os.environ.get("RAKUTEN_ACCESS_KEY", "pk_XkZ5h9MDKSsuVr6T5CnLnlVNvFg3hiR5vMDGrQ75cU5")
RAKUTEN_AFFILIATE_ID = os.environ.get("RAKUTEN_AFFILIATE_ID", "54d2a438.4bc4abc2.54d2a439.aa1be583")
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")

# 季節別・月次の4大ベーステーママスター定義
MONTHLY_THEME_TEMPLATES = {
    11: [
        {
            "id": "nov-furusato-luxury",
            "slug": "furusato-tax-november-luxury-retreat",
            "title": "【12月の駆け込み回避】11月こそ狙い目！楽天ふるさと納税で賢く泊まる憧れの高級宿",
            "subTitle": "年内駆け込みの争奪戦前にゆっくり選ぶ。実質2,000円で叶える露天風呂付き客室と最高峰のおもてなし",
            "lead": "12月末のふるさと納税駆け込み時期は人気日程の予約が即完売しがち。11月中にトラベルクーポンを確保し、憧れのハイクラス温泉旅館やリゾートホテルを先手必勝で押さえるのが大人の賢い旅スタイルです。評価★4.4以上の極上宿を厳選。",
            "heroImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["ふるさと納税", "高級宿", "温泉旅館", "楽天トラベル", "11月旅行", "客室露天風呂"],
            "searchQueries": ["ふるさと納税 温泉", "ふるさと納税 露天風呂", "ふるさと納税 高級", "ふるさと納税 旅館"]
        },
        {
            "id": "nov-star-infinity",
            "slug": "november-starry-sky-infinity-onsen",
            "title": "【初冬の絶景】空気が澄み渡る11月！星空撮影と天空インフィニティ露天風呂を満喫できる宿",
            "subTitle": "凛とした夜空に広がる天の川と、水面に溶け込む湯けむり。息をのむ大自然のパノラマビュー",
            "lead": "秋から冬へと移り変わる11月は、湿度が下がり一年で最も星空が鮮明に輝く天体観測のベストシーズン。視界を遮るもののない高台のインフィニティ温泉露天や高原リゾートで、満天の星と名湯に包まれる究極のリフレッシュ旅をお届けします。",
            "heroImage": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["星空温泉", "インフィニティ露天風呂", "絶景宿", "阿智村", "八ヶ岳", "初冬旅行"],
            "searchQueries": ["星空 リゾート", "星空 露天風呂", "星空 温泉", "八ヶ岳 星空"]
        },
        {
            "id": "nov-crab-gourmet",
            "slug": "november-brand-crab-onsen-gourmet",
            "title": "【11月解禁】冬の美食！ブランド蟹とこだわりの地酒を堪能する極上温泉宿",
            "subTitle": "越前蟹・松葉蟹・香住蟹が旬を迎える至福の季節。焼き・刺し・茹で・蟹すきと名湯三昧",
            "lead": "11月上旬のズワイガニ漁解禁とともに、北陸・山陰の温泉街は美食の熱気に包まれます。生簀から引き揚げて直前に捌く極上の活蟹料理と、歴史ある名湯で心身を解きほぐす、この時期だけの贅沢な美食紀行へご案内します。",
            "heroImage": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["解禁蟹", "越前蟹", "松葉蟹", "蟹会席", "城崎温泉", "あわら温泉", "冬の味覚"],
            "searchQueries": ["蟹 会席 温泉", "越前蟹 温泉", "香住蟹 温泉", "蟹 露天風呂"]
        },
        {
            "id": "nov-late-autumn-momiji",
            "slug": "november-late-autumn-leaves-secret-onsen",
            "title": "【晩秋の静寂】見頃ピークと散り紅葉の絨毯！錦秋に染まる渓谷と秘湯隠れ宿",
            "subTitle": "混雑を避けてゆったり愛でる紅葉露天風呂。ライトアップと旬の山海の幸",
            "lead": "11月中旬から下旬は、山々が燃え盛るような紅葉のクライマックス。水面に映る逆さ紅葉や落ち葉が浮かぶ風流な露天風呂、地元名産のきのこや地酒が楽しめる風情あふれる温泉宿をラインナップしました。",
            "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["紅葉温泉", "晩秋旅行", "秘湯", "露天風呂", "秋旅", "隠れ宿"],
            "searchQueries": ["紅葉 温泉", "紅葉 露天風呂", "紅葉 宿", "紅葉 ライトアップ 宿"]
        }
    ],
    12: [
        {
            "id": "dec-furusato-yearend-rush",
            "slug": "furusato-tax-december-yearend-rush-luxury-stay",
            "title": "【12月31日締切】年内枠を使い切る！楽天ふるさと納税で泊まる憧れの最高峰宿",
            "subTitle": "実質2,000円で賢く手に入れる最長3年有効の宿泊クーポン。客室露天風呂・離れヴィラ・名門老舗旅館",
            "lead": "年間控除枠のラストスパート！12月31日の寄付締め切りに向けて、失効しがちな控除枠を楽天トラベルの宿泊クーポン（寄付額の最大30%）に換えておく賢い旅スタイル。有効期限はたっぷり3年間あるため、来年の連休や記念日旅行にも使えます。評価★4.5以上の最高峰宿を厳選。",
            "heroImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["ふるさと納税", "年末駆け込み", "12月31日締切", "高級宿", "宿泊クーポン", "客室露天風呂"],
            "searchQueries": ["ふるさと納税 高級旅館", "ふるさと納税 露天風呂 客室", "ふるさと納税 温泉 旅館", "ふるさと納税 リゾート"]
        },
        {
            "id": "dec-winter-snow-onsen",
            "slug": "december-snow-view-onsen-retreat",
            "title": "【白銀の絶景】雪見露天風呂と暖炉に癒される至福の冬ごもり名宿",
            "subTitle": "しんしんと降る雪を眺めながら入るにごり湯。冬の贅沢を味わい尽くす",
            "lead": "12月に入ると本格的な冬が到来。銀世界を望む雪見露天や薪暖炉の温もりがあるラウンジで、日常を忘れて籠もれる名宿を厳選。",
            "heroImage": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["雪見露天", "冬ごもり", "にごり湯", "温泉宿", "12月旅行"],
            "searchQueries": ["雪見 露天風呂", "にごり湯 温泉", "暖炉 宿"]
        },
        {
            "id": "dec-christmas-anniversary",
            "slug": "december-christmas-luxury-anniversary-hotel",
            "title": "【聖夜を彩る】クリスマス＆年末を特別な人と過ごすドラマチックホテル",
            "subTitle": "煌めく夜景とイルミネーション、シェフ特製フレンチディナー",
            "lead": "クリスマスや年末のアニバーサリーにふさわしい、夜景が息をのむ高層ホテルや森に佇むオーベルジュ。",
            "heroImage": "https://images.unsplash.com/photo-1543258103-a62bdc069871?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["クリスマスホテル", "夜景ホテル", "記念日ディナー", "高級ホテル"],
            "searchQueries": ["夜景 ホテル", "イルミネーション ホテル", "夜景 露天風呂", "オーベルジュ"]
        },
        {
            "id": "dec-year-end-hotpot",
            "slug": "december-year-end-gourmet-hotpot-ryokan",
            "title": "【1年のご褒美】寒ブリ・ふぐ・地鶏鍋と名湯で温まる年末美食の旅",
            "subTitle": "冬の極上鍋と滋味あふれる郷土料理。心も体も芯から温まる温泉旅館",
            "lead": "1年頑張った自分へのご褒美に。氷見の寒ブリ、下関のとらふぐ、特選牛すき焼きなど、鍋料理の名店旅館を特集。",
            "heroImage": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["寒ブリ", "とらふぐ", "温泉鍋料理", "年末旅行", "美食旅館"],
            "searchQueries": ["ふぐ 温泉宿", "寒ブリ 温泉", "すき焼き 温泉宿", "あんこう鍋 温泉", "カニ 温泉宿", "鍋 露天風呂"]
        }
    ],
    1: [
        {
            "id": "jan-hatsumode-onsen",
            "slug": "january-hatsumode-onsen-retreat",
            "title": "【新春の癒やし】厳かな初詣と湯浴みで一年の福を呼ぶ名湯宿",
            "subTitle": "格式ある神社仏閣へお参りした後は、歴史息づく名湯で心身を清める新春ステイ",
            "lead": "新年の清々しい空気の中、ご利益のある名刹参拝と極上の温泉宿で一年のスタートを祝う旅。伝統の正月料理と名湯を堪能できます。",
            "heroImage": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["初詣温泉", "新春旅行", "正月温泉", "開運宿", "露天風呂"],
            "searchQueries": ["初詣 温泉", "正月 温泉宿", "開運 温泉"]
        },
        {
            "id": "jan-snow-viewing-onsen",
            "slug": "january-snow-view-onsen-guide",
            "title": "【真冬の銀世界】湯けむりと白銀の絶景！雪見露天風呂に浸かる至福の冬旅",
            "subTitle": "降り積もる純白の雪を眺めながら、熱めの源泉に身を委ねる極上の冬ごもり",
            "lead": "1月は最も美しい雪景色が広がる季節。深山幽谷の秘湯や渓谷沿いの露天風呂から望む白銀の世界はまさに圧巻です。",
            "heroImage": "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["雪見露天", "銀世界温泉", "冬ごもり宿", "秘湯", "源泉かけ流し"],
            "searchQueries": ["雪見 露天風呂", "にごり湯 雪見", "秘湯 雪見"]
        },
        {
            "id": "jan-winter-delicacies-hotpot",
            "slug": "january-winter-delicacies-hotpot-ryokan",
            "title": "【旬の贅沢鍋】氷見の寒ブリ・下関のとらふぐ！冬の極上味覚を味わい尽くす温泉旅館",
            "subTitle": "脂の乗った寒魚と滋味あふれる名物鍋。地酒とともに楽しむ美食の夜",
            "lead": "真冬に旬のピークを迎える寒ブリやとらふぐ、鴨鍋、あんこう鍋など、日本各地の冬の味覚を心ゆくまで堪能できる名門旅館を特集。",
            "heroImage": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["寒ブリ", "とらふぐ", "冬の味覚", "鍋料理 宿", "美食温泉"],
            "searchQueries": ["寒ブリ 温泉", "とらふぐ 温泉宿", "あんこう鍋 宿"]
        },
        {
            "id": "jan-sauna-onsen-retreat",
            "slug": "january-sauna-onsen-winter-retreat",
            "title": "【極上のととのい】冷気浴と天然温泉！冬こそ行きたい本格サウナリゾート",
            "subTitle": "氷点下の澄んだ外気と熱いサウナ、そして温かい名湯が織りなす究極のリフレッシュ",
            "lead": "冬のサウナは外気浴が最も心地よい季節。大自然に囲まれた薪サウナやバレルサウナ、天然温泉を備えた注目のスパリゾートを厳選。",
            "heroImage": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["サウナリゾート", "冬サウナ", "天然温泉サウナ", "外気浴", "温泉スパ"],
            "searchQueries": ["サウナ 温泉リゾート", "バレルサウナ 温泉", "露天風呂 サウナ"]
        }
    ],
    2: [
        {
            "id": "feb-hotspring-cure-toji",
            "slug": "february-hotspring-cure-toji-retreat",
            "title": "【寒さ深まる2月】名湯で心身をじんわり癒やす至福の湯治ステイ",
            "subTitle": "何もしない贅沢を味わう。何百年と愛され続ける古湯・名湯でじっくり温まる休日",
            "lead": "冬の寒さが一番厳しい2月こそ、泉質抜群の温泉に長湯して体の芯から解きほぐす湯治旅がおすすめ。歴史ある温泉街の風情とともに。",
            "heroImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["湯治温泉", "古湯", "源泉かけ流し", "冬ごもり", "2月温泉"],
            "searchQueries": ["湯治 温泉宿", "源泉かけ流し 温泉旅館", "秘湯 名湯"]
        },
        {
            "id": "feb-winter-crab-last-spurt",
            "slug": "february-winter-crab-last-spurt-guide",
            "title": "【シーズン終盤の極み】名残惜しい冬の味覚！松葉蟹と越前蟹を味わう美食温泉",
            "subTitle": "身がぎっしり詰まった冬の王様。カニ漁クライマックスに楽しむ贅沢尽くし",
            "lead": "冬の風物詩であるズワイガニ漁もいよいよ終盤。今だからこそ味わいたい甘みたっぷりの活蟹料理と名湯を満喫できる宿をご紹介。",
            "heroImage": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["松葉蟹", "越前蟹", "蟹会席", "2月旅行", "冬の味覚温泉"],
            "searchQueries": ["松葉蟹 温泉", "越前蟹 温泉", "蟹 会席 宿"]
        },
        {
            "id": "feb-early-spring-ume-onsen",
            "slug": "february-early-spring-ume-onsen-stay",
            "title": "【早春の息吹】梅のかおりと温暖な海辺！ひと足早い春を感じる温泉旅",
            "subTitle": "熱海・伊豆・南紀など温暖なエリアで、咲き誇る梅の花とオーシャンビュー温泉を満喫",
            "lead": "寒さの中に春の訪れを感じる2月。紅白の梅園散策や早咲きの桜、陽光あふれる海岸沿いの絶景露天風呂でひと足早い春旅へ。",
            "heroImage": "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["早春旅行", "梅園温泉", "熱海温泉", "伊豆温泉", "海辺露天風呂"],
            "searchQueries": ["梅園 温泉宿", "熱海 露天風呂", "伊豆 オーシャンビュー 温泉"]
        },
        {
            "id": "feb-valentine-luxury-hotel",
            "slug": "february-valentine-luxury-hotel-stay",
            "title": "【バレンタイン＆記念日】大切な人と過ごすロマンチックな隠れ家リゾート",
            "subTitle": "客室露天風呂やキャンドルディナー。静けさに包まれる大人のためのラグジュアリーステイ",
            "lead": "特別な日のご褒美に。二人だけの時間をゆったり過ごせる離れ宿や、夜景の美しいラグジュアリーホテルを厳選しました。",
            "heroImage": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["バレンタインホテル", "記念日宿", "離れ客室", "客室露天風呂", "高級ホテル"],
            "searchQueries": ["客室露天風呂 高級宿", "記念日 ディナー ホテル", "離れ 露天風呂 宿"]
        }
    ],
    3: [
        {
            "id": "mar-early-spring-sakura-onsen",
            "slug": "march-early-spring-sakura-onsen-guide",
            "title": "【春の訪れ】早咲き桜と菜の花！うららかな春風を感じる花見温泉宿",
            "subTitle": "河津桜やしだれ桜。ピンク色に染まる並木道を散策した後は、心地よい春の露天風呂へ",
            "lead": "3月は大地が目覚め、花々が咲き誇る季節。全国各地の花見スポットに近い名湯宿で、華やかな春の息吹をいち早く味わう旅。",
            "heroImage": "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["花見温泉", "桜 露天風呂", "春旅", "河津桜", "3月旅行"],
            "searchQueries": ["桜 温泉宿", "花見 露天風呂", "春 温泉旅行"]
        },
        {
            "id": "mar-graduation-girls-trip",
            "slug": "march-graduation-girls-trip-hotels",
            "title": "【卒業旅行＆女子旅】映える客室とおしゃれなラウンジ！思い出を彩る人気宿",
            "subTitle": "フリーフローやスイーツビュッフェ、温泉街の食べ歩きが楽しい人気エリアのホテル",
            "lead": "春の記念旅行にぴったり。写真映えする可愛いインテリアや、無料ラウンジサービスが充実したコスパ抜群のおしゃれ宿を特集。",
            "heroImage": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["卒業旅行", "女子旅 宿", "おしゃれホテル", "ラウンジ付きホテル", "温泉街散策"],
            "searchQueries": ["女子旅 温泉宿", "卒業旅行 ホテル", "オールインクルーシブ 温泉"]
        },
        {
            "id": "mar-spring-mountain-vegetables-gourmet",
            "slug": "march-spring-mountain-vegetables-gourmet-ryokan",
            "title": "【春の味覚】ふきのとう・タラの芽・山菜の天ぷらと地魚を味わう里山名宿",
            "subTitle": "ほろ苦い春の恵みと清流の川魚。採れたての旬食材を丁寧に仕立てた山里会席",
            "lead": "厳しい冬を越えて芽吹いた山菜は、春だけの特別な滋味。豊かな自然に囲まれた里山の温泉旅館で、春の恵みをいただく美食の旅。",
            "heroImage": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["山菜会席", "春の味覚", "里山宿", "秘湯", "郷土料理"],
            "searchQueries": ["山菜 温泉宿", "里山 温泉旅館", "郷土料理 温泉"]
        },
        {
            "id": "mar-refresh-retreat-spring",
            "slug": "march-refresh-retreat-spring-onsen",
            "title": "【新生活前のリフレッシュ】静寂の森と露天風呂でととのう大人の週末旅",
            "subTitle": "新年度を前に、静かな大自然の中で深呼吸。心と体をゼロに戻す癒やしの時間",
            "lead": "忙しい日常から少し離れて、森の澄んだ空気とやわらかな温泉に癒やされるリトリート旅。自分へのご褒美ステイに最適な隠れ宿。",
            "heroImage": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["リトリート宿", "森林浴温泉", "隠れ宿", "週末旅行", "癒やしの旅"],
            "searchQueries": ["隠れ家 温泉宿", "森林浴 露天風呂", "大人の隠れ宿"]
        }
    ],
    4: [
        {
            "id": "apr-cherry-blossom-luxury",
            "slug": "april-cherry-blossom-luxury-onsen-stay",
            "title": "【満開の桜景色】露天風呂から愛でる桜吹雪！春爛漫のお花見温泉旅館",
            "subTitle": "湯船に舞い散る花びらと春の香。この時期だけの贅沢なお花見露天風呂ステイ",
            "lead": "4月は日本全国が桜色に包まれる季節。客室露天風呂や大浴場から桜を望む絶景宿で、心洗われる贅沢な春の湯浴みを。",
            "heroImage": "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["桜露天風呂", "お花見温泉", "春の温泉旅館", "客室露天風呂", "4月旅行"],
            "searchQueries": ["桜 露天風呂 温泉", "花見 温泉宿", "桜 客室露天風呂"]
        },
        {
            "id": "apr-golden-week-early-bird",
            "slug": "april-golden-week-resort-hotels-guide",
            "title": "【GW先取り】新緑の高原とオーシャンビュー！爽やかな風を感じるリゾートホテル",
            "subTitle": "初夏の気配を感じる新緑ドライブと、開放感あふれるリゾートステイ",
            "lead": "大型連休を前に、混雑を避けてゆったり過ごす大人のリゾート旅。澄んだ空気の高原や青い海を望むリゾートを特集。",
            "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["GW旅行", "新緑リゾート", "高原ホテル", "オーシャンビュー", "4月旅行"],
            "searchQueries": ["新緑 温泉リゾート", "高原 リゾートホテル", "オーシャンビュー 温泉"]
        },
        {
            "id": "apr-spring-gourmet-seafood",
            "slug": "april-spring-gourmet-seafood-ryokan",
            "title": "【春の味覚】初鰹・桜鯛・白えび！旬の海の幸と美酒を味わう温泉旅館",
            "subTitle": "春の海が育む極上の幸。鮮度抜群の地魚と名湯で至福の美食ステイ",
            "lead": "富山湾の宝石「白えび」や鳴門の「桜鯛」、高知の「初鰹」など、春の訪れを告げる海の味覚を贅沢に味わう温泉旅。",
            "heroImage": "https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["桜鯛", "白えび", "初鰹", "春の味覚", "海鮮温泉旅館"],
            "searchQueries": ["白えび 温泉宿", "桜鯛 温泉", "初鰹 宿"]
        },
        {
            "id": "apr-spring-family-leisure",
            "slug": "april-spring-family-leisure-onsen-stay",
            "title": "【春の家族旅行】自然体験と温泉バイキング！子どもも大人も笑顔になる温泉宿",
            "subTitle": "いちご狩りや牧場体験の後は、広い温泉と美味しいビュッフェで楽しい家族の思い出作り",
            "lead": "気候が安定し、お出かけに最適な4月。ファミリー向けの充実した設備や貸切風呂、子どもが喜ぶ体験が揃った宿をピックアップ。",
            "heroImage": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["家族旅行 温泉", "子連れ旅行", "貸切風呂", "バイキング 温泉", "春休み旅行"],
            "searchQueries": ["子連れ 温泉宿", "家族旅行 温泉バイキング", "貸切風呂 家族 宿"]
        }
    ],
    5: [
        {
            "id": "may-fresh-green-retreat",
            "slug": "may-fresh-green-valley-onsen-retreat",
            "title": "【まばゆい新緑】薫風そよぐ渓谷美！マイナスイオンに癒やされる新緑露天風呂の宿",
            "subTitle": "生命力あふれる若葉のトンネル。清流のせせらぎを聞きながら入る絶景露天風呂",
            "lead": "一年で最も緑が美しい5月。鮮やかな若葉が包み込む渓谷沿いの露天風呂や山間の隠れ宿で、心洗われるリフレッシュ旅を。",
            "heroImage": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["新緑温泉", "渓谷露天風呂", "5月旅行", "マイナスイオン", "癒やしの宿"],
            "searchQueries": ["新緑 露天風呂", "渓流 温泉宿", "絶景 露天風呂 新緑"]
        },
        {
            "id": "may-luxury-glamping-nature",
            "slug": "may-luxury-glamping-nature-stay",
            "title": "【初夏のグランピング】満天の星と焚き火！自然と快適さを兼ね備えた極上アウトドアステイ",
            "subTitle": "贅沢なドームテントやヴィラで楽しむBBQ。アウトドア初心者も安心のハイクラス体験",
            "lead": "過ごしやすい気候の5月はアウトドアのベストシーズン。温泉付きグランピングや星空観察ができるラグジュアリーヴィラを特集。",
            "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["グランピング", "焚き火", "星空グランピング", "BBQホテル", "初夏旅行"],
            "searchQueries": ["温泉 グランピング", "ラグジュアリー グランピング", "星空 グランピング"]
        },
        {
            "id": "may-early-summer-seafood-hotspring",
            "slug": "may-early-summer-seafood-hotspring-ryokan",
            "title": "【初夏の美食】鮑・伊勢海老・生しらす！豊かな初夏の海鮮を堪能する名宿",
            "subTitle": "踊り焼きでいただく肉厚な鮑と、獲れたての地魚。初夏の陽光と心地よい潮風の温泉旅",
            "lead": "初夏の訪れとともに旨味を増す鮑やサザエ、伊勢海老、生しらす。海の絶景を望む温泉露天と贅沢な磯料理を堪能できる名宿をご紹介。",
            "heroImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["鮑の踊り焼き", "伊勢海老", "初夏の味覚", "オーシャンビュー温泉", "磯料理"],
            "searchQueries": ["鮑 温泉宿", "伊勢海老 露天風呂 宿", "海鮮 温泉旅館"]
        },
        {
            "id": "may-anniversary-private-villa",
            "slug": "may-anniversary-private-villa-stay",
            "title": "【プライベート空間】誰にも邪魔されない至福の時間！全室離れ・ヴィラの名宿",
            "subTitle": "専用露天風呂とプライベートガーデン。大切な記念日やご褒美にふさわしい贅沢な隠れ家",
            "lead": "プライベート感を重視する大人の旅に。専任バトラーや客室温泉を備えた独立ヴィラで、ゆったりと流れる上質な時間を。",
            "heroImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["一棟貸しヴィラ", "離れ客室", "客室温泉", "記念日ホテル", "高級ヴィラ"],
            "searchQueries": ["一棟貸し 温泉 ヴィラ", "全室離れ 温泉宿", "プライベートヴィラ 露天風呂"]
        }
    ],
    6: [
        {
            "id": "jun-hydrangea-rain-onsen",
            "slug": "june-hydrangea-rain-onsen-retreat",
            "title": "【雨に濡れる風情】色あざやかな紫陽花としっとり名湯！雨音に癒やされる梅雨の温泉旅",
            "subTitle": "雨の日こそ風情が増す苔庭と紫陽花。しっとりと落ち着いた大人時間を楽しむ温泉旅館",
            "lead": "6月の雨に濡れて輝く紫陽花とみずみずしい緑。静かな雨音を聴きながら湯船に身を委ねる、落ち着いた旅の魅力をお届けします。",
            "heroImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["紫陽花温泉", "梅雨の温泉旅", "苔庭の宿", "しっとり温泉", "6月旅行"],
            "searchQueries": ["紫陽花 温泉宿", "苔庭 温泉旅館", "雨 風情 温泉"]
        },
        {
            "id": "jun-firefly-night-stay",
            "slug": "june-firefly-night-stay-hotels",
            "title": "【幻想的な光の舞】清流に舞うホタル観賞！初夏の夜を彩るロマンチックな温泉宿",
            "subTitle": "清らかな水辺に揺らめく淡い光。初夏の夜だけに現れる神秘的なホタルの世界へ",
            "lead": "6月上旬から下旬にかけて見頃を迎えるホタル。温泉街の遊歩道や宿の敷地内でホタル観賞ができる風情豊かな宿を厳選。",
            "heroImage": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["ホタル観賞", "ホタル温泉", "清流の宿", "初夏旅行", "幻想的な宿"],
            "searchQueries": ["ホタル 温泉宿", "ホタル鑑賞 温泉旅館", "清流 露天風呂 宿"]
        },
        {
            "id": "jun-early-summer-ayu-sweetfish",
            "slug": "june-early-summer-ayu-sweetfish-ryokan",
            "title": "【解禁の初夏の味】香ばしい鮎の塩焼きと地酒！清流の恵みを堪能する味覚の旅",
            "subTitle": "初夏に解禁となる若鮎。炭火でじっくり焼き上げた鮎と滋味あふれる川魚料理",
            "lead": "6月の鮎漁解禁とともに始まる川魚のシーズン。清流を望む温泉旅館で、焼き立ての鮎と冷えた地酒を味わう粋な旅をご案内します。",
            "heroImage": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["鮎料理", "鮎の塩焼き", "清流温泉", "川魚会席", "6月の味覚"],
            "searchQueries": ["鮎 温泉宿", "鮎の塩焼き 温泉旅館", "清流 料理 宿"]
        },
        {
            "id": "jun-indoor-spa-all-inclusive",
            "slug": "june-indoor-spa-all-inclusive-stay",
            "title": "【雨の日も安心】おこもり温泉＆オールインクルーシブ！館内で一日中満喫できる上質宿",
            "subTitle": "ドリンクフリーフローやエステ、読書ラウンジ。天候に左右されず充実の滞在を満喫",
            "lead": "雨の多い時期だからこそ、チェックインからチェックアウトまで館内だけで優雅に過ごせるオールインクルーシブ宿が人気です。",
            "heroImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["オールインクルーシブ", "おこもり宿", "館内充実ホテル", "温泉スパ", "ラウンジ無料"],
            "searchQueries": ["オールインクルーシブ 温泉宿", "おこもり 温泉ホテル", "ラウンジ無料 宿"]
        }
    ],
    7: [
        {
            "id": "jul-summer-infinity-pool",
            "slug": "july-summer-infinity-pool-resort",
            "title": "【夏のリゾート】青空と海に溶け込むインフィニティプール！開放感抜群のサマーホテル",
            "subTitle": "水面と空がひとつになる絶景。プールサイドのデッキチェアでカクテルを片手に寛ぐ休日",
            "lead": "7月の陽光が眩しい季節。海や大自然と一体になれるインフィニティプールや天然温泉スパを備えた最高峰のリゾートホテルを厳選。",
            "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["インフィニティプール", "夏リゾート", "プール付きホテル", "オーシャンビュー", "7月旅行"],
            "searchQueries": ["インフィニティプール ホテル", "プール付き 温泉リゾート", "海辺 リゾートホテル"]
        },
        {
            "id": "jul-summer-highland-escape",
            "slug": "july-summer-highland-escape-stay",
            "title": "【涼を求めて高原へ】軽井沢・八ヶ岳・上高地！爽やかな風が吹き抜ける避暑地名宿",
            "subTitle": "都会の猛暑を忘れ去る標高1000mの別世界。木漏れ日の森と清らかな空気でリフレッシュ",
            "lead": "夏の暑さからエスケープして、爽涼な高原リゾートへ。白樺の森に佇むクラシックホテルや温泉オーベルジュで心地よい夏休みを。",
            "heroImage": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["避暑地ホテル", "高原リゾート", "軽井沢ホテル", "八ヶ岳リゾート", "涼しい旅"],
            "searchQueries": ["避暑地 温泉宿", "軽井沢 ホテル", "八ヶ岳 高原リゾート"]
        },
        {
            "id": "jul-summer-fireworks-view",
            "slug": "july-summer-fireworks-view-hotels",
            "title": "【夜空を焦がす大輪】客室や露天風呂から花火を特等席で！夏の風物詩を愛でる温泉宿",
            "subTitle": "人混みを避けて楽しむ大迫力の花火大会。温泉に浸かりながら夜空を見上げる贅沢な一夜",
            "lead": "熱海や洞爺湖など、夏に定期開催される花火を客室やバルコニーからゆったり眺められる特等席の宿を特集します。",
            "heroImage": "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["花火が見える宿", "客室から花火", "夏祭り温泉", "熱海花火", "洞爺湖花火"],
            "searchQueries": ["花火が見える 温泉宿", "花火 部屋食 宿", "熱海 花火が見える ホテル"]
        },
        {
            "id": "jul-summer-family-adventure",
            "slug": "july-summer-family-adventure-onsen",
            "title": "【夏休みの思い出】海水浴場やテーマパーク直結！家族みんなで楽しむ大型温泉リゾート",
            "subTitle": "目の前がプライベートビーチやキッズプール。アクティビティ満載の笑顔あふれる滞在",
            "lead": "夏休みの家族旅行に最適。海まで徒歩0分の立地や屋内プール、バイキング料理など、大人も子どもも大満足のサマーリゾート。",
            "heroImage": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["夏休み家族旅行", "海水浴 温泉宿", "プール付きホテル 子連れ", "家族旅行 リゾート"],
            "searchQueries": ["海水浴 近く 温泉宿", "子連れ プール 温泉ホテル", "夏休み ファミリー 宿"]
        }
    ],
    8: [
        {
            "id": "aug-summer-vacation-luxury",
            "slug": "august-summer-vacation-luxury-retreat",
            "title": "【お盆＆夏休み本番】最高峰のおもてなしと美食！夏の特別な思い出を作る高級旅館",
            "subTitle": "贅を尽くした夏の旬会席と極上のにごり湯。大切な家族やパートナーと過ごす上質な時間",
            "lead": "夏休みのクライマックスを彩る最高級の宿。広々とした離れ客室や静かな森のリゾートで、日常を忘れられる極上の休息をお届けします。",
            "heroImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["お盆旅行", "夏休み高級旅館", "ハイクラス温泉", "贅沢な休日", "客室露天風呂"],
            "searchQueries": ["お盆 温泉宿 高級", "ハイクラス 温泉旅館 夏", "高級 露天風呂 宿"]
        },
        {
            "id": "aug-cool-stream-valley-onsen",
            "slug": "august-cool-stream-valley-onsen-stay",
            "title": "【清涼な水辺】川床料理と渓流露天風呂！涼やかな川音に癒やされる避暑温泉",
            "subTitle": "京都貴船や箱根の川床。清らかな水面を吹き抜ける涼風と、旬の会席料理を味わう涼風旅",
            "lead": "真夏の風物詩である川床や渓流露天。天然のクーラーとも言える澄んだ水辺で、五感すべてで涼を感じる至福の温泉旅へ。",
            "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["川床料理", "渓流露天風呂", "避暑温泉", "涼感スポット", "8月旅行"],
            "searchQueries": ["川床 温泉宿", "渓流 露天風呂 涼しい", "川床料理 旅館"]
        },
        {
            "id": "aug-starry-night-highland",
            "slug": "august-starry-night-highland-resort",
            "title": "【ペルセウス座流星群】標高1500mの星空テラス！満天の天の川を見上げる高原ホテル",
            "subTitle": "街明かりの一切届かない暗闇。肉眼で天の川や流れ星が降り注ぐ感動の天体観測",
            "lead": "8月は夏の天の川と流星群が最も見事な季節。阿智村や八ヶ岳、美ヶ原など、日本屈指の星空を誇る高原リゾートで忘れられない夜を。",
            "heroImage": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["流星群", "星空ホテル", "阿智村", "高原天体観測", "星空テラス"],
            "searchQueries": ["星空 高原ホテル", "阿智村 星空 温泉", "天体観測 リゾート宿"]
        },
        {
            "id": "aug-summer-festival-tradition",
            "slug": "august-summer-festival-tradition-ryokan",
            "title": "【日本の祭り情緒】阿波踊り・ねぶた・伝統芸能！熱気と名湯に浸る夏旅",
            "subTitle": "浴衣に着替えて温泉街へ。太鼓の響きと提灯の灯りが彩るノスタルジックな夏の夜",
            "lead": "日本の夏を体感する伝統の祭り。歴史ある温泉街の情緒と、心躍る熱狂的な夏祭りの両方を満喫できるおすすめの温泉旅館。",
            "heroImage": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["夏祭り温泉", "伝統の宿", "浴衣で散策", "温泉街情緒", "8月イベント"],
            "searchQueries": ["夏祭り 温泉旅館", "温泉街 浴衣 散策 宿", "伝統 温泉宿"]
        }
    ],
    9: [
        {
            "id": "sep-early-autumn-retreat",
            "slug": "september-early-autumn-retreat-onsen",
            "title": "【初秋の澄んだ空気】秋風そよぐ露天風呂と実りの秋！混雑を避けて寛ぐシルバーウィーク名宿",
            "subTitle": "朝晩の心地よい涼しさと秋の虫の声。夏の疲れを温泉でリセットする癒やしの休日",
            "lead": "9月に入ると秋の気配が漂い始めます。連休を利用して、温泉と秋の味覚をいち早く楽しむ大人のプライベート旅を厳選。",
            "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["シルバーウィーク旅行", "初秋温泉", "秋の味覚", "連休旅行", "露天風呂"],
            "searchQueries": ["シルバーウィーク 温泉宿", "初秋 露天風呂 宿", "秋 温泉旅行"]
        },
        {
            "id": "sep-matsutake-autumn-gourmet",
            "slug": "september-matsutake-autumn-gourmet-ryokan",
            "title": "【松茸と秋の恵み】焼き松茸・土瓶蒸し・戻り鰹！香りと味わいに酔いしれる美食温泉",
            "subTitle": "贅沢に立ち上る松茸の芳醇な香り。信州や丹波など、本場の秋味覚を味わい尽くす",
            "lead": "秋の味覚の最高峰「松茸」がシーズンを迎える9月。香り高い土瓶蒸しや炭火焼きを名湯とともに堪能する至福のグルメ紀行。",
            "heroImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["松茸会席", "土瓶蒸し", "秋の味覚温泉", "戻り鰹", "グルメ旅館"],
            "searchQueries": ["松茸 温泉宿", "松茸会席 旅館", "秋の味覚 温泉旅館"]
        },
        {
            "id": "sep-early-momiji-highland",
            "slug": "september-early-momiji-highland-stay",
            "title": "【日本一早い紅葉】大雪山・八幡平！山頂から始まる錦秋のパノラマ温泉",
            "subTitle": "標高の高い山岳地帯から始まる紅葉前線。黄や赤に染まる大パノラマを望む山岳秘湯",
            "lead": "9月中旬から下旬にかけて、北海道や東北の山頂部から紅葉がスタート。誰よりも早く鮮やかな紅葉露天を体験できる温泉宿を特集。",
            "heroImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["日本一早い紅葉", "大雪山紅葉", "山岳秘湯", "紅葉露天風呂", "9月紅葉"],
            "searchQueries": ["紅葉 温泉宿 9月", "大雪山 温泉", "八幡平 露天風呂 紅葉"]
        },
        {
            "id": "sep-wellness-spa-sauna",
            "slug": "september-wellness-spa-sauna-retreat",
            "title": "【秋のウェルネス】温泉ヨガと本格サウナ！心身をリセットするウェルネスリゾート",
            "subTitle": "澄んだ空気の中で深呼吸。体に優しいマクロビ料理や源泉かけ流しで整う旅",
            "lead": "季節の変わり目のセルフケアに。健康と美をテーマにした極上のスパリゾートや温泉養生宿で、芯からリフレッシュする滞在を。",
            "heroImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["ウェルネス温泉", "ヨガリゾート", "サウナ温泉", "デトックス宿", "秋リフレッシュ"],
            "searchQueries": ["ウェルネス 温泉ホテル", "ファスティング 温泉", "スパ リゾート 温泉"]
        }
    ],
    10: [
        {
            "id": "oct-peak-autumn-leaves",
            "slug": "october-peak-autumn-leaves-onsen-guide",
            "title": "【紅葉最盛期】日光・八甲田・蔵王！燃え盛る山々と湯けむりの絶景露天風呂",
            "subTitle": "息をのむ大自然のグラデーション。名所散策と名湯を一度に味わう贅沢な紅葉旅",
            "lead": "10月は全国各地の高原や名所が紅葉のピークを迎えるベストシーズン。山々が美しく色づく絶景を露天風呂から愛でる宿をご案内。",
            "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["紅葉名所", "日光紅葉", "八甲田紅葉", "紅葉露天風呂", "10月旅行"],
            "searchQueries": ["紅葉 温泉宿 10月", "日光 露天風呂 紅葉", "絶景 紅葉 温泉"]
        },
        {
            "id": "oct-harvest-gourmet-wine",
            "slug": "october-harvest-gourmet-wine-stay",
            "title": "【収穫の秋】新米・新酒ワイン・甲州牛！ワイナリーを巡る大人のオーベルジュ",
            "subTitle": "実りの秋を五感で楽しむ。出来立ての新酒ワインと地元食材を活かした極上フレンチ",
            "lead": "ぶどうの収穫とワイン造りが本格化する10月。ブドウ畑を望むオーベルジュや、新米と極上和牛を堪能できる美食旅館を特集。",
            "heroImage": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["ワイナリーホテル", "新酒ワイン", "秋のオーベルジュ", "新米温泉", "美食の秋"],
            "searchQueries": ["ワイナリー 宿", "オーベルジュ 温泉", "甲州ワイン ホテル"]
        },
        {
            "id": "oct-cloud-sea-mountain-stay",
            "slug": "october-cloud-sea-mountain-stay-hotels",
            "title": "【神秘の雲海】標高2000mの特等席！朝の光に輝く雲海とパノラマ露天風呂",
            "subTitle": "雲の上の楽園に泊まる。早朝、眼下に広がる純白の雲海に包まれる感動の瞬間",
            "lead": "秋は寒暖差が生まれ、雲海の発生確率が最も高まる季節。テラスや露天風呂から雲海を一望できる山岳ホテルを厳選しました。",
            "heroImage": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["雲海が見えるホテル", "山岳リゾート", "美ヶ原雲海", "天空の露天風呂", "10月絶景"],
            "searchQueries": ["雲海が見える 宿", "天空の露天風呂 ホテル", "雲海 テラス 宿"]
        },
        {
            "id": "oct-onsen-hopping-hotspring-town",
            "slug": "october-onsen-hopping-hotspring-town-guide",
            "title": "【湯めぐりの秋】草津・黒川・道後！下駄を鳴らしてそぞろ歩く歴史ある温泉街",
            "subTitle": "涼しい夜風に吹かれながら外湯めぐり。食べ歩きとレトロな街並みが楽しい名湯の旅",
            "lead": "散策が心地よい10月は温泉街めぐりに最適な時期。名物の足湯や共同浴場、地元の甘味を楽しみながら旅情に浸れる名所をご紹介。",
            "heroImage": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["外湯めぐり", "温泉街散策", "草津温泉", "黒川温泉", "道後温泉"],
            "searchQueries": ["温泉街 散策 宿", "外湯めぐり 温泉旅館", "草津温泉 宿"]
        }
    ]
}

def call_gemini(prompt):
    """Gemini最新モデルをローテーションして呼び出し"""
    if not GEMINI_API_KEY:
        return None
    models = list(GEMINI_MODELS)
    random.shuffle(models)
    headers = {"Content-Type": "application/json"}
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"temperature": 0.8, "maxOutputTokens": 400}
    }
    for model in models:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={GEMINI_API_KEY.strip()}"
        try:
            r = requests.post(url, headers=headers, json=payload, timeout=12)
            if r.status_code == 200:
                res_json = r.json()
                cand = res_json.get("candidates", [])
                if cand:
                    parts = cand[0].get("content", {}).get("parts", [])
                    if parts and "text" in parts[0]:
                        return parts[0]["text"].strip()
        except Exception:
            continue
    return None

def fetch_rakuten_hotels(query, max_hits=8):
    """楽天トラベルAPIから指定キーワードで宿を取得"""
    url = "https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20170426"
    params = {
        "applicationId": RAKUTEN_APP_ID,
        "accessKey": RAKUTEN_ACCESS_KEY,
        "affiliateId": RAKUTEN_AFFILIATE_ID,
        "keyword": query,
        "format": "json",
        "hits": max_hits
    }
    try:
        res = requests.get(url, params=params, timeout=10)
        if res.status_code == 200:
            data = res.json()
            hotels = []
            for item in data.get("hotels", []):
                b = item["hotel"][0]["hotelBasicInfo"]
                rating_raw = b.get("reviewAverage")
                rating = float(rating_raw) if rating_raw and str(rating_raw).replace('.', '', 1).isdigit() else 0.0
                
                # 画像URLの確保
                img = b.get("hotelImageUrl") or b.get("hotelThumbnailUrl") or ""
                room_img = b.get("roomImageUrl") or ""
                
                # 最低料金
                min_charge = b.get("hotelMinCharge")
                
                hotels.append({
                    "hotelNo": b.get("hotelNo"),
                    "hotelName": b.get("hotelName"),
                    "rating": rating,
                    "minCharge": int(min_charge) if min_charge else None,
                    "address": f"{b.get('address1', '')} {b.get('address2', '')}".strip(),
                    "hotelImageUrl": img,
                    "roomImageUrl": room_img,
                    "affiliateUrl": b.get("hotelInformationUrl") or b.get("planListUrl") or "",
                    "hotelSpecial": b.get("hotelSpecial") or "",
                    "userReview": b.get("userReview") or ""
                })
            return hotels
    except Exception as e:
        print(f"Error fetching from Rakuten API ({query}):", e)
    return []

def sanitize_sentence(text):
    """句読点の重複（。。など）や連続スペースを除去し、完全な日本語文に整える"""
    if not text:
        return ""
    s = str(text)
    # 重複する句読点や記号の整理
    s = re.sub(r'。+', '。', s)
    s = re.sub(r'、+', '、', s)
    s = re.sub(r'！+', '！', s)
    s = re.sub(r'？+', '？', s)
    s = re.sub(r'[ 　]+', ' ', s)
    s = re.sub(r'([。！？])\s*([。！？])', r'\1', s)
    s = s.strip()
    return s

def extract_clean_catchcopy(text, fallback_name=""):
    """途中でぶつ切り・数字切れにならないよう、文の区切りで自然かつ完全なキャッチコピーを抽出"""
    if not text:
        return f"{fallback_name}で過ごす至福の滞在"
    # 不要な定型タグ除去
    cleaned = re.sub(r'【[^】]*】', '', str(text)).strip()
    # 句読点や記号で分割
    clauses = [c.strip() for c in re.split(r'[！!。．♪☆◆◇★｜|／/\n]+', cleaned) if len(c.strip()) >= 5]
    for c in clauses:
        # 末尾が助詞や半端な数字で終わらない完全な節を選択
        c_clean = c.strip(" ◆◇★☆・-～〜")
        if 8 <= len(c_clean) <= 45 and not re.search(r'[のへとでがをに連泊約全]$|\d+$', c_clean):
            return sanitize_sentence(c_clean)
    # 適切な節が見つからない場合は先頭のまとまりを使用
    if clauses:
        first = clauses[0].strip(" ◆◇★☆・-～〜")
        return sanitize_sentence(first[:40])
    return f"{fallback_name}で過ごす至福の滞在"

def curate_hotel_with_gemini(hotel_info, theme_title):
    """Gemini最新モデルをリトライして呼び出し、必ずGemini成功時のみデータを更新する"""
    special = hotel_info.get("specialHighlight") or hotel_info.get("hotelSpecial") or ""
    user_review = hotel_info.get("userReview") or ""
    hotel_name = hotel_info.get("hotelName", "")
    address = hotel_info.get("address", "")

    prompt = f"""あなたは旅の魅力を伝えるプロの旅行ライター・紀行作家です。
以下の宿情報をもとに、特集テーマ「{theme_title}」に合わせた魅力的な紹介文を作成してください。

【宿データ】
- 宿名: {hotel_name}
- 所在地: {address}
- 特徴・設備: {special}
- 宿泊者の声: {user_review[:250]}

【最重要・厳格生成ルール（違反厳禁）】
1. テンプレート文章・定型句は完全使用禁止！
   以下のような紋切り型の文章は1文字たりとも使用しないでください：
   ×「〜に佇む人気宿」「日常の喧騒を離れてリフレッシュできる特別な滞在が叶います」
   ×「〜はいかがでしょうか」「ご紹介します」「必見です」「特別な旅の時間を心ゆくまで堪能」
2. AI臭さを徹底排除し、旅行者がその場にいるかのような臨場感（木々のざわめき、湯煙の温度、香ばしい料理の湯気、窓から広がる星空や海、歴史の風情）を情緒豊かな表現で具体的に描写すること。
3. すべての記事・宿ごとに完全に独立した文章とすること。同じ構文や言い回しの使い回しは禁止。
4. 文末が途中で切れたり、句読点が連続する（「。。」等）ミスは絶対に無くし、完全な文で完結させること。
5. 以下のJSONフォーマットのみを出力してください（Markdownのバッククォート等も不要）：
{{
  "catchCopy": "宿固有の情景が目に浮かぶ完全な文としてのキャッチコピー（40文字以内）",
  "expertReview": "140〜200文字程度の情緒あふれる美しい解説文（句読点や語尾の完全な日本語文）",
  "planHighlights": ["宿固有の特徴タグ1", "宿固有の特徴タグ2", "宿固有の特徴タグ3"]
}}
"""
    # Geminiモデルを最大5回リトライ。5回とも失敗した場合はNoneを返し、何も処理せず終了・スキップする
    for attempt in range(1, 6):
        raw = call_gemini(prompt)
        if raw:
            try:
                cleaned = re.sub(r'^```json\s*', '', raw.strip())
                cleaned = re.sub(r'\s*```$', '', cleaned)
                parsed = json.loads(cleaned)
                catch = sanitize_sentence(parsed.get("catchCopy", ""))
                review = sanitize_sentence(parsed.get("expertReview", ""))
                tags = [t.strip() for t in parsed.get("planHighlights", []) if t.strip()]
                if catch and review and not re.search(r'[のへとでがをに]$|\d+$', catch):
                    return {
                        "catchCopy": catch,
                        "expertReview": review,
                        "planHighlights": tags
                    }
            except Exception:
                pass
        time.sleep(1.5)

    print(f"⚠️ Geminiの生成に失敗（5回リトライ上限到達）: {hotel_name}。何もせずにスキップします。")
    return None

def init_or_load_monthly_data():
    """月次JSONの読み込み、月が変わっていたら自動リセット＆新テーマ作成"""
    now = datetime.now()
    # 11月下旬（25日以降）からは12月スプリント・12月特集へ早期切り替え
    if now.month == 11 and now.day >= 25:
        current_m = 12
        month_key = f"{now.year}-12"
    else:
        current_m = now.month
        month_key = now.strftime("%Y-%m")

    data = None
    if os.path.exists(DATA_FILE):
        try:
            with open(DATA_FILE, "r", encoding="utf-8") as f:
                data = json.load(f)
        except Exception:
            data = None

    # 月が変わった、または新規作成の場合
    if not data or data.get("currentMonth") != month_key:
        print(f"[*] 月が切り替わりました。{month_key} の新特集テーマを初期化します。")
        templates = MONTHLY_THEME_TEMPLATES.get(current_m, MONTHLY_THEME_TEMPLATES[12])
        themes = []
        for t in templates:
            themes.append({
                "id": t["id"],
                "slug": t["slug"],
                "month": month_key,
                "monthLabel": f"{current_m}月",
                "title": t["title"],
                "subTitle": t["subTitle"],
                "lead": t["lead"],
                "heroImage": t["heroImage"],
                "keywords": t["keywords"],
                "searchQueries": t["searchQueries"],
                "updatedAt": now.strftime("%Y-%m-%d"),
                "hotels": []
            })
        data = {
            "currentMonth": month_key,
            "themes": themes
        }

    return data

def main():
    print("=== 月次特集 蓄積型自動生成＆ランキング更新スタート ===")
    data = init_or_load_monthly_data()
    now_str = datetime.now().strftime("%Y-%m-%d %H:%M")

    # 4テーマそれぞれについて、宿を収集して蓄積
    for theme in data["themes"]:
        theme_slug = theme["slug"]
        theme_title = theme["title"]
        existing_hotels = {h["hotelNo"]: h for h in theme.get("hotels", [])}
        print(f"\n--- 特集: {theme_title} (現在: {len(existing_hotels)}軒) ---")

        # 各テーマの検索クエリから宿を取得
        candidate_hotels = []
        for query in theme.get("searchQueries", []):
            fetched = fetch_rakuten_hotels(query, max_hits=8)
            for h in fetched:
                if h["hotelNo"] not in existing_hotels and h["rating"] > 0:
                    candidate_hotels.append(h)
            time.sleep(0.3)

        # 重複除外
        unique_candidates = {}
        for h in candidate_hotels:
            if h["hotelNo"] not in existing_hotels:
                unique_candidates[h["hotelNo"]] = h

        candidates_list = list(unique_candidates.values())
        print(f"新規候補宿数: {len(candidates_list)}軒")

        # 必要数（まずは各テーマ最低10〜12軒に到達するよう追加）
        target_add = max(0, 12 - len(existing_hotels))
        if target_add == 0 and candidates_list:
            target_add = 1  # 既存が10軒以上でも毎回1軒ずつ新着を追加してランキングを活性化

        added_count = 0
        for h in candidates_list[:target_add]:
            print(f"清書中: {h['hotelName']} (★{h['rating']})")
            curated = curate_hotel_with_gemini(h, theme_title)
            if not curated:
                print(f"⏭️ Geminiの完全生成が成功しなかったため、{h['hotelName']}の追加を見合わせます。")
                continue
            
            hotel_entry = {
                "hotelNo": h["hotelNo"],
                "hotelName": h["hotelName"],
                "rating": h["rating"],
                "minCharge": h["minCharge"],
                "address": h["address"],
                "hotelImageUrl": h["hotelImageUrl"],
                "roomImageUrl": h["roomImageUrl"],
                "affiliateUrl": h["affiliateUrl"],
                "catchCopy": curated.get("catchCopy", ""),
                "specialHighlight": h.get("hotelSpecial", ""),
                "expertReview": curated.get("expertReview", ""),
                "planHighlights": curated.get("planHighlights", []),
                "addedAt": now_str
            }
            existing_hotels[h["hotelNo"]] = hotel_entry
            added_count += 1

        # レート(rating)降順でソート（常にTOP10が自動で上位になる）
        all_hotels_list = list(existing_hotels.values())
        all_hotels_list.sort(key=lambda x: (x["rating"], x["minCharge"] or 0), reverse=True)

        theme["hotels"] = all_hotels_list
        theme["updatedAt"] = now_str
        print(f"[{theme_slug}] 更新完了: 合計 {len(all_hotels_list)} 軒 (今回追加: {added_count}軒)")

    # JSON保存
    os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"\n[SUCCESS] {DATA_FILE} に全4テーマの最新データを正常に保存しました！")

if __name__ == "__main__":
    main()
