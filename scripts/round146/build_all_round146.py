"""
build_all_round146.py
Round 146 高CPA・憧れの超高級宿特集 (11-12月優先・狙い目テーマ)
1. 北海道・支笏湖＆全室温泉露天付きラグジュアリー「碧の座」・白老牛と毛ガニ (note-198.md, winter-hokkaido-shikotsuko-luxury-aonoza-suizantei-shiraogyu-stay)
2. 栃木・奥日光中禅寺湖＆「ザ・リッツ・カールトン日光」・中禅寺金谷ホテルと男体山雪景色 (note-199.md, winter-tochigi-nikko-chuzenji-lake-luxury-ritz-carlton-kanaya-stay)
3. 静岡・熱海伊豆山＆相模湾絶景「グランバッハ」「パールスター」・伊勢海老と海上冬花火 (note-200.md, winter-shizuoka-atami-izusan-luxury-sekaie-ocean-roten-iseebi-stay)
4. 京都・嵐山＆世界最高峰「翠嵐 ラグジュアリーコレクションホテル 京都」・渡月橋と京懐石 (note-201.md, winter-kyoto-arashiyama-luxury-suiran-roten-suite-kaiseki-stay)
5. 石川・加賀山代山中温泉＆魯山人の名門「あらや滔々庵」・初冬解禁加能ガニと能登牛 (note-202.md, winter-ishikawa-kaga-yamashiro-luxury-araya-totoan-kanogani-stay)

Next.js ページ（src/app/{slug}/page.tsx）および note記事（note-198..202.md）を
完全独立・高品質・長文（各文字数7,500〜8,500文字）・テンプレ排除・AI臭さゼロで生成。
"""

import json
import os
import re
import urllib.parse

AFFILIATE_ID = "54d2a438.4bc4abc2.54d2a439.aa1be583"
FURUSATO_URL = f"https://hb.afl.rakuten.co.jp/hgc/{AFFILIATE_ID}/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"

# 1. データ読み込み
with open("scripts/round146/round146_raw_hotels.json", "r", encoding="utf-8") as f:
    raw_hotels_data = json.load(f)

with open("scripts/round146/round146_wikipedia_spots.json", "r", encoding="utf-8") as f:
    wiki_spots_data = json.load(f)

THEME_DETAILS = {
    "hokkaido_shikotsuko_luxury": {
        "note_num": 198,
        "lead_intro": "新千歳空港から車でわずか40分、原生林を抜けた先に突如として広がる紺碧のカルデラ湖『支笏湖（しこつこ）』。環境省の水質測定調査で幾度も全国1位に輝く驚異的な透明度を誇り、水深が360mを超えるため真冬でも湖水が凍結しない『日本最北の不凍湖』として知られます。11月から12月にかけての初冬は、夏のカヌー客や紅葉観光の賑わいが去り、ピンと張り詰めた清冽な大気の中に『支笏湖ブルー』と冠雪した恵庭岳（標高1320m）の静寂が広がる年間で最も神聖なシーズン。湖畔に湧き出る支笏湖温泉は、重曹と食塩を豊富に含み『美肌の湯』として名高く、とろみのある湯が冬の冷えた肌をしっとりと包み込みます。この静寂の湖畔に誕生した北海道のラグジュアリーの頂点が、鶴雅グループのフラッグシップ『しこつ湖 鶴雅別荘 碧の座（あおのざ）』。全室が100平米を超えるレイクビューの温泉露天風呂付きスイートで構成され、縄文文化やアイヌ文様の美意識を取り入れた調度品に囲まれながら、オールインクルーシブで極上の美酒と美食に浸ることができます。夕食には、厳しい寒さの中で脂の乗りが最高潮に達する噴火湾・オホーツク海の活毛ガニやウニ、そして洞爺湖サミットの晩餐会でも称賛された最高級ブランド『白老牛（しらおいぎゅう）』の炭火焼きステーキ。湖のさざ波と木々のざわめきだけが響く完全プライベート空間で過ごす初冬の支笏湖は、日常のすべてをリセットし魂を満たす至高の隠れ里です。",
        "reasons": [
            ("日本屈指の透明度「支笏湖ブルー」と全室温泉露天付きラグジュアリースイート",
             "環境省調査で水質日本一に幾度も輝く奇跡のカルデラ湖。鶴雅最高峰『碧の座』をはじめ全室に専用温泉露天風呂を備えた極上の空間で、静まり返る湖面を眺める至福の湯浴みが叶います。"),
            ("極上ブランド「白老牛」ステーキと冬の北海道が誇る活毛ガニ・海鮮の饗宴",
             "近隣の白老町で育つ最高峰黒毛和牛・白老牛の上質な肉の旨味と、身がぎっしり詰まった初冬の毛ガニ。北海道の豊かな海山の恵みを贅を尽くした懐石や創作コースで堪能できます。"),
            ("新千歳空港からわずか40分！都会の喧騒から隔絶された大人の極上リトリート",
             "飛行機を降りてわずか40分のドライブで辿り着ける圧倒的な非日常。恵庭岳の初雪景色と手つかずの原生林に抱かれ、オールインクルーシブの贅沢な滞在を満喫できます。")
        ],
        "access_info": """【エリアへのアクセス】
・飛行機・空港から：新千歳空港より車・レンタカーまたはタクシーで国道36号線・道道16号線（支笏湖公園線）を経由して約40分。空港発の北海道中央バス（支笏湖行き）で約55分。
・電車・札幌方面から：JR札幌駅より千歳線快速エアポートで千歳駅まで約30分、千歳駅より中央バスで約45分。各高級旅館による千歳駅や新千歳空港からの完全プライベート送迎（要事前予約）も充実しています。
・車：道央自動車道「千歳IC」より約30分。札幌市内中心部からは国道453号線経由で約1時間15分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月中旬〜12月（紅葉後の静寂が訪れ、初雪をまとった恵庭岳の美しいコントラストと澄み切った支笏湖ブルーを静かに堪能できる狙い目時期）。
・気温の目安：北海道の内陸湖畔のため寒さが本格化し、11月は日中5〜9℃、朝晩は氷点下前後。12月は日中でも0〜3℃、朝晩は氷点下5〜10℃近くまで冷え込みます。
・服装のポイント：厚手のロングダウンコート、防風仕様のアウター、マフラー、手袋、ニット帽が必須です。靴は底に滑り止めが付いた防水スノーブーツや防寒靴をご着用ください。""",
        "faqs": [
            ("支笏湖の「碧の座」はオールインクルーシブですか？何が含まれますか？",
             "『しこつ湖 鶴雅別荘 碧の座』はオールインクルーシブスタイルを採用しており、ご夕食時やバーラウンジでの厳選された銘酒（シャンパン、ワイン、北海道の地酒、ウイスキー等）、客室内の冷蔵庫のドリンク、スイーツ、ラウンジでの軽食サービスがすべて宿泊代金に含まれています（一部の特別ヴィンテージボトルを除く）。チェックインからアウトまで追加料金を気にせず贅沢に寛げます。"),
            ("真冬でも支笏湖が凍らないのはなぜですか？",
             "支笏湖は最大水深が363mと非常に深く、膨大な水量を蓄えています。秋から冬にかけて冷却された表面の水が沈み、温かい深層水と循環し続けるため、水温が湖全体で下がりにくく、極寒の北海道にあっても湖面全体が凍結しない「日本最北の不凍湖」となっています。"),
            ("11月・12月に新千歳空港から車で向かう場合の道路状況は？",
             "道道16号線（支笏湖公園線）は整備された幹線道路ですが、11月中旬以降は峠付近や日陰で路面凍結や積雪が発生します。レンタカーを利用する場合は必ず4WD・スタッドレスタイヤ装着車を指定し、急ブレーキや急ハンドルを避けた安全運転を心掛けてください。")
        ],
        "hotel_details": [
            {
                "tag": "鶴雅グループの最高峰フラッグシップ！全室温泉露天付きラグジュアリー別荘",
                "features": [
                    "日本最北の不凍湖・支笏湖を望むわずか数室のみの最高級リゾート。すべての客室が100平米を超える広大なスイートで、専用の温泉露天風呂とジェットバスを完備しています。",
                    "オールインクルーシブを採用し、バーラウンジや夕食時の上質なシャンパン、ワイン、プレミアムウイスキーが気兼ねなく楽しめる極上の空間です。",
                    "夕食は北海道の最高峰食材を結集した料理長特選の懐石料理。極上の白老牛や旬の毛ガニ、ウニなど北の美味を一皿ごとに芸術のように味わえます。"
                ]
            },
            {
                "tag": "湖を望むプライベートヴィラ！洗練されたデザインと上質な静寂の空間",
                "features": [
                    "支笏湖の自然景観に溶け込むように設計された大人のためのプレミアム宿。現代的な快適性と北国の温もりが調和した客室が心を満たします。",
                    "客室に備えられた温泉風呂からは移り変わる支笏湖の初冬景色を一望。静寂の中で手つかずの自然と対話する贅沢な時間を過ごせます。",
                    "北海道産の厳選素材を用いた目にも美しい創作ディナーが自慢。専任スタッフによる行き届いたおもてなしが特別な滞在を演出してくれます。"
                ]
            },
            {
                "tag": "支笏湖畔に佇む老舗名門の宿！趣異なる湯処と北海道の美食会席",
                "features": [
                    "支笏湖温泉の歴史とともに歩んできた第一寶亭留グループの名旅館。落ち着いた和モダンの館内には木の温もりが満ちあふれています。",
                    "美肌効果に優れた自家源泉の湯を大浴場や客室露天風呂で心ゆくまで堪能。しっとりとした肌触りの湯が冬の冷えた体を芯から温めます。",
                    "夕食は白老牛や近郊の契約農家から届く冬野菜を盛り込んだ本格和食会席。丁寧に出汁をとった滋味あふれる料理が旅人の舌を唸らせます。"
                ]
            },
            {
                "tag": "ぬくもりのデザインと自家製スイーツ！心地よい大人のプライベートステイ",
                "features": [
                    "支笏湖の森に寄り添うように佇むアットホームで上質な温泉ホテル。洗練されたインテリアと心地よい音楽が非日常へと誘います。",
                    "クチコミ評価★4.75を誇り、手作りの焼き菓子やスイーツ、心温まる接客が女性やカップルから絶大な支持を集めています。",
                    "夕食には道産牛のローストや新鮮な海の幸を彩り豊かに配した創作ディナー。静かに過ごしたい大人の休日にぴったりの名宿です。"
                ]
            },
            {
                "tag": "全室レイクビュー＆天然温泉付き！湖の波打ち際に建つスモールラグジュアリー",
                "features": [
                    "支笏湖の波打ち際に建ち、わずか8室すべての客室から雄大な支笏湖ブルーを一望できる全室温泉付きの隠れ家ホテルです。",
                    "客室の窓いっぱいに広がる湖と恵庭岳のパノラマは絵画のよう。24時間いつでも好きな時にプライベートな温泉浴を楽しめます。",
                    "夕食は本格的なイタリアンまたはフレンチコース。湖畔に佇むレストランで、静かに波音を聞きながらワイングラスを傾ける時間は格別です。"
                ]
            }
        ]
    },
    "tochigi_nikko_chuzenji_lake_luxury": {
        "note_num": 199,
        "lead_intro": "世界遺産・日光東照宮が鎮座する日光山内から、九十九折のいろは坂を登りきった標高1269mの別天地『中禅寺湖（ちゅうぜんじこ）』。霊峰・男体山の噴火によって生まれたこの天空の湖は、明治期よりイギリスやイタリアなど各国の外交官が避暑に訪れ、湖畔に大使館別荘を構えた日本屈指の由緒ある国際的リゾート地です。11月から12月にかけての初冬、奥日光は紅葉の喧騒が完全に去り、山頂を白く雪化粧した男体山が深い藍色の中禅寺湖畔に映り込む『最も凛とした美しさに満ちた静寂の季節』を迎えます。この地に誕生した世界最高峰のデスティネーションホテルが『ザ・リッツ・カールトン日光』。全室が湖または男体山を望むバルコニー付きスイートで、木造建築の美学とリッツ・カールトンの一流のサービスが融合。さらに、リッツ・カールトンブランドとして世界で初めて導入された天然温泉大浴場には、日光湯元から引湯される濃厚な乳白色の硫黄泉が注がれ、雪見露天風呂から冬の満天の星空を眺める体験は息を呑むほど贅沢です。そして湖畔に佇むもうひとつの名門が、日本最古のリゾートホテルの伝統を受け継ぐ『中禅寺金谷ホテル』。ログハウス風の重厚な暖炉が灯るラウンジと、名物『金谷ホテル伝統の虹鱒のソテー』やとちぎ和牛のフィレステーキを味わう本格ディナー。静まり返る奥日光の大自然に抱かれ、名湯と最高峰の美食に浸る時間は、大人の特別な記念日旅行に最高の輝きを与えてくれます。",
        "reasons": [
            ("世界最高峰「ザ・リッツ・カールトン日光」！ブランド初となる白濁硫黄温泉の贅沢",
             "奥日光・日光湯元の良質な源泉を引き込んだ世界初のリッツ・カールトン温泉。全室プライベートバルコニーから中禅寺湖と男体山の雄姿を望む最高峰の滞在が叶います。"),
            ("標高1269mの天空リゾート！男体山の初雪と湖畔に息づく名門クラシックホテルの美学",
             "歴史ある大使館別荘文化が息づく中禅寺湖畔。重厚な暖炉が燃える『中禅寺金谷ホテル』など、冬の静寂と歴史の重みに浸る大人の休日を心ゆくまで楽しめます。"),
            ("最高ランク「とちぎ和牛」ステーキと伝統のクラシックフレンチディナー",
             "とろけるようなサシと芳醇な肉の旨味を誇るブランド牛「とちぎ和牛」の極上鉄板焼きや、140年以上の伝統を受け継ぐ金谷ホテルの本格フレンチコースを満喫できます。")
        ],
        "access_info": """【エリアへのアクセス】
・電車・バス：東武日光線「東武日光駅」またはJR日光線「日光駅」下車。東武バス（中禅寺温泉・湯元温泉行き）に乗り換え「中禅寺温泉」バス停まで約45分。ザ・リッツ・カールトン日光へはバス停より徒歩約5分。各ホテルへの無料送迎バスも運行（要事前確認）。
・車：日光宇都宮道路「清滝IC」より国道120号線（第二いろは坂）を経由して約30分。東京方面（浦和IC）から東北自動車道経由で約2時間30分。
・新幹線：東北新幹線「宇都宮駅」にてJR日光線へ乗り換え（約40分でJR日光駅）。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月中旬〜12月（いろは坂の渋滞が完全に解消し、男体山の初冠雪と中禅寺湖の静寂が広がる大人のプレミアム滞在に最適な時期）。
・気温の目安：標高1200mを超える高地のため平地より7〜8℃低く、11月は日中6〜10℃、朝晩は0〜3℃。12月に入ると日中でも2〜5℃、朝晩は氷点下5℃以下まで冷え込みます。
・服装のポイント：厚手のウールコートやロングダウンジャケット、手袋、マフラー、ニット帽をご用意ください。湖畔は風が吹き抜けるため、防風性のあるアウターが極めて有効です。""",
        "faqs": [
            ("ザ・リッツ・カールトン日光の温泉は天然温泉ですか？泉質は？",
             "はい、ザ・リッツ・カールトン日光の温泉は、日光湯元温泉から直接引湯している本格的な天然温泉（含硫黄-カルシウム・ナトリウム-硫酸塩・炭酸水素塩温泉）です。空気に触れることで美しい乳白色に変化し、硫黄の香りと肌をなめらかに整える美肌成分を豊富に含んでいます。"),
            ("11月〜12月の中禅寺湖周辺はいろは坂の渋滞がありますか？",
             "10月中旬〜11月上旬の紅葉最盛期はいろは坂で激しい渋滞が発生しますが、11月中旬以降になると紅葉ピークが去るため渋滞は完全に解消し、スムーズにアクセスできます。静かにラグジュアリーステイを楽しみたい方には11月中旬〜12月が最も狙い目です。"),
            ("初冬の中禅寺湖へ車で行く場合、スタッドレスタイヤは必要ですか？",
             "標高が高いため、11月中旬以降はいろは坂や中禅寺湖畔で降雪や早朝・夜間の路面凍結が発生することがあります。11月中旬以降にお車で訪れる場合は、安全のためスタッドレスタイヤの装着が必須です。"),
        ],
        "hotel_details": [
            {
                "tag": "世界最高峰リッツ・カールトン！ブランド初の天然温泉と中禅寺湖の絶景",
                "features": [
                    "日光国立公園の特別保護地区に建ち、すべての客室が中禅寺湖または男体山を望むプライベートバルコニーを備えた最高峰のラグジュアリーホテルです。",
                    "リッツ・カールトンブランドとして世界で初めて天然温泉大浴場を導入。日光湯元から引く良質な白濁硫黄泉に浸かり、星空を眺める露天風呂は至高の体験です。",
                    "夕食は厳選されたとちぎ和牛の鉄板焼きや、旬の日本料理、洋食ダイニングから選択可能。洗練された紳士淑女による完璧なサービスが記念日を彩ります。"
                ]
            },
            {
                "tag": "日本最古のリゾートホテルの伝統！中禅寺湖畔の静寂に抱かれるクラシック宿",
                "features": [
                    "明治初期に誕生した金谷ホテルの伝統を受け継ぎ、中禅寺湖畔の森に佇む重厚なクラシックホテル。暖炉の火が温かく灯るラウンジが旅人を迎えます。",
                    "木造の趣ある温泉棟『空ぶろ』には奥日光の名湯・白濁硫黄泉が掛け流され、白樺の木立を眺めながら優雅な湯浴みを楽しめます。",
                    "夕食は伝統のフランス料理フルコース。金谷ホテル名物の虹鱒料理やとちぎ和牛フィレ肉など、140年の歴史が磨き上げた正統派フレンチは感動の美味しさです。"
                ]
            },
            {
                "tag": "中禅寺湖の豊かな自然に囲まれた隠れ宿！乳白色のにごり湯と旬の味覚",
                "features": [
                    "中禅寺湖畔の豊かな森の中に佇み、落ち着いた和の美しさと温かなホスピタリティでゲストを癒やすリゾート温泉ホテルです。",
                    "大浴場や開放的な露天風呂には日光湯元のにごり湯温泉が満たされ、森の香りと温泉の蒸気に包まれるリラクゼーションを味わえます。",
                    "夕食は地元の厳選素材を取り入れた彩り豊かな創作和食会席。日光湯波（ゆば）やとちぎ和牛など、郷土の味覚を優雅に堪能できます。"
                ]
            },
            {
                "tag": "奥日光湯元の濃密な白濁硫黄泉！森の静寂に抱かれる上質温泉リゾート",
                "features": [
                    "中禅寺湖からさらに奥へ進んだ日光湯元温泉に位置し、奥日光の原生林に抱かれた大人のためのモダン温泉宿です。",
                    "源泉地に近い立地ならではの濃厚なエメラルドグリーンから乳白色へ変わる硫黄泉を、広々とした大浴場や露天風呂で心ゆくまで楽しめます。",
                    "夕食は四季の恵みを活かした手作りの会席料理。身体の芯から温まる奥日光の自然体験と上質な湯治ステイを提供してくれます。"
                ]
            },
            {
                "tag": "一日限定数組の大人の隠れ家！本格フレンチと天然温泉の贅沢な滞在",
                "features": [
                    "日光の豊かな自然に囲まれた閑静な地に佇み、シェフ自慢の本格フランス料理と天然温泉を心ゆくまで堪能できるオーベルジュです。",
                    "客室はプライベート感にあふれ、静かに特別な時間を過ごしたいカップルやご夫婦の記念日旅行に最適です。",
                    "夕食はとちぎ和牛や地元の契約農家が育てる旬の野菜を用いた極上のフレンチコース。ワインとのペアリングも素晴らしく特別な夜を演出します。"
                ]
            }
        ]
    },
    "shizuoka_atami_izusan_luxury": {
        "note_num": 200,
        "lead_intro": "東京駅から東海道新幹線でわずか45分。相模湾を見下ろす断崖絶壁に豊かな源泉が湧き出す熱海の奥座敷『伊豆山（いずさん）』。古くは鎌倉幕府を開いた源頼朝が配流の身であった頃に身を寄せ、北条政子と劇的な愛を育んだ『伊豆山神社』が鎮座する由緒あるパワースポットです。熱海駅周辺の賑やかな温泉街から少し離れた伊豆山・南熱海エリアは、水平線まで見渡す相模湾のパノラマと、日本三大古泉『走り湯』に象徴される豊富な湯量を誇り、大人のためのハイエンド宿や全室オーシャンビューのプライベートヴィラが集中する熱海最高峰のエリア。11月から12月の初冬は、空気が澄み渡ることで海の青さが一段と深まり、夜には『熱海海上花火大会』が冬の夜空と波間を色鮮やかに染め上げます。客室のテラスや露天風呂から、誰にも邪魔されずに花火の轟音と火の粉を眺める時間はまさに特権的な贅沢。夕食には、冬に甘みと旨味が最高潮に達する相模湾・駿河湾の天然活伊勢海老やアワビ、そして柔らかなサシがとろける静岡県産銘柄牛『静岡そだち』の鉄板焼き。海と空の境界線が溶け合うインフィニティ露天風呂に浸かり、心地よい潮風を感じながら過ごす初冬の熱海は、記念日やエグゼクティブのリフレッシュに選ばれ続ける本物のラグジュアリーです。",
        "reasons": [
            ("相模湾のコバルトブルーを見下ろす断崖の絶景！全室オーシャンビュー露天風呂",
             "水平線から昇る朝日や伊豆大島の島影を一望する特等席。客室テラスに備えられた専用露天風呂で、相模湾の絶景と波音に包まれる至高のプライベート湯浴みが叶います。"),
            ("冬の澄んだ夜空を彩る「熱海海上花火大会」をお部屋から優雅に鑑賞",
             "初冬の熱海名物・冬花火。空気が澄んでいるため煙が滞留せず、花火の光と山に反響する轟音が大迫力。混雑を避けて宿のバルコニーから楽しむ贅沢は圧巻です。"),
            ("冬の伊豆の至宝「天然活伊勢海老」ととろける黒毛和牛「静岡そだち」の鉄板焼き",
             "冬に旨味が凝縮する伊勢海老のお造りや鬼殻焼き、極上鮑の踊り焼き。目の前でシェフが焼き上げるブランド牛ステーキとともに極上のワインを堪能できます。")
        ],
        "access_info": """【エリアへのアクセス】
・新幹線・電車：東海道新幹線「熱海駅」下車。東京駅より「ひかり」で約35分、「こだま」で約45分。名古屋駅からは約1時間20分。熱海駅からは各ホテルの専用送迎車（要予約）またはタクシーで約5〜10分。
・車：東名高速道路「厚木IC」より小田原厚木道路〜真鶴道路〜国道135号線経由で約1時間。東京ICから通常約1時間30分〜2時間。
・新幹線利用の利便性：新幹線を降りてわずか数分で絶景リゾートへ直行できる圧倒的なアクセスの良さは、週末のスマートな記念日旅行に最適です。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月〜12月（太平洋側の海洋性気候のため温暖で降雪の心配がほぼなく、冬の熱海海上花火大会が開催される最も華やかなシーズン）。
・気温の目安：都心部より2〜3℃暖かく、11月は日中14〜18℃、朝晩は8〜11℃。12月でも日中は11〜15℃前後あり、日差しがあればポカポカとした快適な気候です。
・服装のポイント：日中はジャケットやセーターで心地よく過ごせます。夜間の花火鑑賞や露天風呂上がりには海風で肌寒く感じるため、厚手のアウターやストールがあると安心です。""",
        "faqs": [
            ("熱海の冬の花火大会はいつ開催されますか？部屋から見えますか？",
             "熱海海上花火大会は年間を通して開催されており、12月にも冬の部が開催されます。空気が乾燥して澄み渡る冬の花火は一年で最も美しく見えると言われます。今回選定した伊豆山や海岸沿いの高台宿（パールスターホテルや迎賓館など）のオーシャンビュー客室からは、混雑を避けてお部屋や専用バルコニーから大迫力の花火を鑑賞できます。"),
            ("「伊豆山神社」へはホテルから歩いて行けますか？",
             "伊豆山温泉の高台にあるホテルからは、車で約5分、または徒歩約15〜20分でアクセス可能です。参道は海岸から本殿まで800段以上の石段が続いており、上からの相模湾の眺望は圧巻です。宿の送迎車で本殿近くまで送迎してくれるプランもあります。"),
            ("客室露天風呂の温泉は源泉掛け流しですか？",
             "今回選定した熱海のラグジュアリー宿の多くは、客室露天風呂にも豊富な熱海温泉・伊豆山温泉の天然源泉を引湯しています。海を見下ろすテラスで、いつでも自分たちだけの適温の湯に身を委ねることができます。")
        ],
        "hotel_details": [
            {
                "tag": "熱海サンビーチ目の前！最上階インフィニティ露天風呂と一流の美味",
                "features": [
                    "熱海サンビーチの目の前に位置し、全室オーシャンビューの贅を尽くしたモダンラグジュアリーホテル。最上階の大浴場には海と一体化するインフィニティ露天風呂を備えています。",
                    "自家源泉の豊富な湯が注がれ、昼は青い海原、夜は熱海市街の美しい夜景や海上花火を遮るもののない特等席から眺めることができます。",
                    "館内にはフレンチ、日本料理、鉄板焼き、寿司の本格レストランを完備。相模湾の新鮮魚介や静岡そだち和牛を一流の技で味わえます。"
                ]
            },
            {
                "tag": "クチコミ★5.0の圧倒的評価！天空のテラスから望む満天の星と相模湾",
                "features": [
                    "熱海伊豆山の高台に建ち、天空に浮かぶような感覚を味わえる隠れ家ヴィラ。わずか数組のためだけに用意された究極のプライベートリゾートです。",
                    "広々とした客室テラスには源泉掛け流しの専用露天風呂を備え、時間とともに表情を変える大空と海のグラデーションを独り占めできます。",
                    "夕食は厳選素材を活かした極上の創作ディナー。行き届いたホスピタリティと静寂の空間が、大切な記念日を忘れられない思い出にしてくれます。"
                ]
            },
            {
                "tag": "名門ゴルフ場に隣接する迎賓館！全室スイート仕様の広大な大人の隠れ宿",
                "features": [
                    "熱海の名門ゴルフ場クラブハウスに併設された、全室スイート仕様の贅沢なリゾートホテル。静寂と開放感にあふれた優雅な環境が広がります。",
                    "すべての客室に天然温泉を引いた半露天風呂を備え、広々としたリビングから相模湾と伊豆の山並みのパノラマを一望できます。",
                    "夕食は地産の旬の味覚を彩り豊かに盛り込んだ本格和食会席。大人の落ち着いた休日を過ごしたいエグゼクティブ層に熱烈に支持されています。"
                ]
            },
            {
                "tag": "音楽と癒やしが共鳴する山上の館！全室温泉露天付きのハイクラスリゾート",
                "features": [
                    "熱海の街を見下ろす高台に佇み、バッハの調べとともに極上のリラクゼーションを提供するスモールラグジュアリーホテルです。",
                    "全室に森や海を望む専用の温泉露天風呂または展望風呂を完備。洗練されたモダンな客室で、心静かにプライベートな時間を満喫できます。",
                    "シェフが腕を振るう夕食は、伊豆の新鮮な食材を軽やかなフレンチスタイルで仕立てたディナー。上質なワインとともに至福の美食体験を味わえます。"
                ]
            },
            {
                "tag": "創業二百余年の伝統が宿る名門老舗！全室源泉掛け流しと伝統の本格懐石",
                "features": [
                    "江戸時代から続く歴史と格式を誇る熱海屈指の高級老舗日本旅館。伝統の数寄屋造りと現代の洗練された快適性が見事に調和しています。",
                    "熱海七湯の一つ『清左衛門の湯』を敷地内に持ち、客室露天風呂にも一切加水・加温しない純度100%の源泉が贅沢に掛け流されています。",
                    "夕食は熟練の料理人が手間を惜しまず仕立てる本格京風懐石。お部屋食でいただく極上の伊勢海老や銘柄牛の味わいは、まさに老舗ならではの真骨頂です。"
                ]
            }
        ]
    },
    "kyoto_arashiyama_luxury": {
        "note_num": 201,
        "lead_intro": "平安の貴族たちが舟遊びを愉しみ、小倉百人一首の舞台となった風光明媚な景勝地・京都『嵐山（あらしやま）』。紅葉で沸き立った秋の観光ラッシュが過ぎ去る11月下旬から12月、嵐山は息を呑むような静寂を取り戻し、朝靄が保津川（大堰川）の水面を覆う『京都が最も美しい冬の姿』を現します。凛とした冷たい大気の中、渡月橋を渡り、朝の柔らかな光が差し込む竹林の小径を歩く時間は、この時期に嵐山に宿泊した者だけが味わえる特権です。この嵐山の保津川沿いに佇むのが、マリオット・インターナショナルの最高峰ラグジュアリーブランド『翠嵐（すいらん） ラグジュアリーコレクションホテル 京都』。明治期の歴史的建造物を再生したカフェやレストランを擁し、客室の専用露天風呂にはアルカリ性で肌に吸い付くような肌触りの『嵐山温泉』が満たされています。川のせせらぎと竹林の葉音に耳を傾けながら、部屋の露天風呂で温まる湯浴みは至福そのもの。夕食には、京都の伝統的な会席料理の技法にフレンチの美意識を融合させたモダン懐石ディナー。丹波牛のフィレ炭火焼きや冬の聖護院大根、九条ネギなど京野菜が織りなす繊細な味覚は、五感を深く刺激します。宿泊には翠嵐をはじめ、趣ある佇まいの『嵐山辨慶』や老舗『渡月亭』など、大人のための静けさと日本の美意識の粋を極めた名宿を厳選。古都の歴史と世界基準のラグジュアリーが調和した初冬の嵐山は、一生の記憶に残る記念日旅行を叶えてくれます。",
        "reasons": [
            ("世界最高峰「翠嵐 ラグジュアリーコレクション」！嵐山温泉露天付きプライベートスイート",
             "保津川沿いの特等席に位置するラグジュアリーホテル。客室露天風呂に注ぐ柔らかな嵐山温泉と、プライベート日本庭園を望む贅を尽くした滞在が叶います。"),
            ("紅葉の喧騒が去った初冬の静寂美！朝の渡月橋と竹林の小径を独り占めする特権",
             "観光客がまばらな初冬の早朝、朝靄に包まれる渡月橋や凛とした竹林の小径を静かに散策。宿泊者だからこそ出会える、静まり返った京都本来の幽玄な美を堪能できます。"),
            ("伝統の京懐石とモダンフレンチの融合！冬の丹波牛と京野菜が織りなす至高の美食",
             "聖護院大根やかぶら、冬の寒さで甘みを蓄えた京野菜と、とろける霜降りの丹波牛。一流の料理人が仕立てる繊細で華やかな料理の数々を歴史ある空間で味わえます。")
        ],
        "access_info": """【エリアへのアクセス】
・電車：JR山陰本線（嵯峨野線）「嵯峨嵐山駅」下車、徒歩約12〜15分。JR京都駅より快速で約11分、普通で約17分。
・私鉄：阪急嵐山線「嵐山駅」より徒歩約8〜12分。京福電鉄（嵐電）「嵐山駅」より徒歩約5〜8分。
・車：名神高速道路「京都南IC」より国道1号線経由で約40分。または京都縦貫自動車道「沓掛IC」より約25分。
・新幹線：JR京都駅よりタクシーで約30〜40分。翠嵐など一部の高級ホテルでは京都駅からの人力車またはタクシー片道無料送迎サービスも用意されています。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月下旬〜12月（紅葉の混雑が落ち着き、静寂の古都情緒が最も深まる大人の狙い目シーズン。冬の嵐山花灯路やライトアップの余韻も楽しめます）。
・気温の目安：京都盆地の底冷えが始まる時期で、11月は日中12〜16℃、朝晩は5〜8℃。12月に入ると日中でも8〜11℃、朝晩は1〜4℃前後まで冷え込みます。
・服装のポイント：厚手のウールコートや上品なダウンコート、マフラー、手袋をご用意ください。足元から底冷えするため、厚手の靴下や歩きやすいブーツが適しています。""",
        "faqs": [
            ("嵐山温泉の泉質と特徴はどのようなものですか？",
             "嵐山温泉は、地下1200mから湧出する弱アルカリ性の単純温泉です。肌の角質を優しく軟化させてすべすべにする美肌効果があり、湯あたりしにくく身体が芯から温まるのが特徴です。無色透明で微かに温泉の香りが漂い、長湯にも適しています。"),
            ("翠嵐の「シャンパンディライト」とはどのようなサービスですか？",
             "『翠嵐 ラグジュアリーコレクションホテル 京都』では、宿泊者全員を対象に、夕暮れ時の17時〜19時に敷地内の「茶寮 八翠」にてシャンパンやワイン、ソフトドリンクを無料で提供する「シャンパンディライト」を開催しています。保津川の夕景を眺めながら優雅なアペリティフを楽しめる大人気サービスです。"),
            ("初冬の嵐山散策でおすすめの時間帯はいつですか？",
             "断然「早朝（午前7時〜8時半）」がおすすめです。日中は観光客が訪れる竹林の小径や渡月橋も、早朝はほとんど人がおらず、竹の葉が風にそよぐ音や桂川のせせらぎだけが聞こえる幻想的な静寂を味わえます。嵐山に宿泊する最大の醍醐味がここにあります。")
        ],
        "hotel_details": [
            {
                "tag": "保津川沿いに佇むマリオット最高峰！嵐山温泉露天付きプライベートスイート",
                "features": [
                    "明治期の男爵別邸の跡地、保津川沿いの風光明媚な特等席に佇む世界最高峰のラグジュアリーホテル。京都の伝統美とモダンな機能美が完璧に調和しています。",
                    "客室専用露天風呂には柔らかな嵐山温泉が注がれ、竹林や日本庭園を眺めながら極上のプライベートバスタイムを心ゆくまで堪能できます。",
                    "夕暮れ時の無料シャンパンサービスや、京懐石とフレンチが融合した至高のディナーなど、人生の特別な記念日を完璧に彩るホスピタリティを誇ります。"
                ]
            },
            {
                "tag": "阪急嵐山駅すぐの好立地！全館畳敷きの温もりと五つの貸切風呂巡り",
                "features": [
                    "全館畳敷きの和の温もりが心地よい、共立リゾートが手掛ける上質な温泉旅館。素足で歩ける快適な空間が旅の疲れを優しく解きほぐします。",
                    "趣の異なる5つの貸切風呂と広々とした大浴場で嵐山温泉を満喫。湯上がりの無料アイスや夜鳴きそばサービスなどのおもてなしも大好評です。",
                    "夕食は四季の恵みを盛り込んだ和食会席。天ぷらや小鉢を選べるオーダービュッフェも楽しめ、幅広い世代に選ばれている大人気宿です。"
                ]
            },
            {
                "tag": "渡月橋南詰に佇む創業百余年の老舗！嵐山の歴史情緒と本格京料理",
                "features": [
                    "名勝・渡月橋のたもとに建ち、明治30年の創業以来、多くの文化人や旅人を迎え続けてきた歴史ある老舗料理旅館です。",
                    "嵐山温泉の湯を引いた風情あるお風呂で温まり、窓からは四季折々に表情を変える嵐山の大自然を間近に感じられます。",
                    "夕食は伝統の京料理会席。板前が丹精込めて仕立てる旬の美味を、落ち着いた純和風の客室でゆったりと味わうことができます。"
                ]
            },
            {
                "tag": "大堰川のほとりに佇む大人の隠れ家！全室から嵐山の山並みを望む名宿",
                "features": [
                    "渡月橋の上流、清流・大堰川のほとりに静かに佇む落ち着いた純和風旅館。全室から嵐山の美しい山並みと川の流れを望むことができます。",
                    "地下から湧き出る天然温泉を満たした露天風呂付き客室も備え、静寂の中で川のせせらぎを聞きながら優雅な湯浴みを楽しめます。",
                    "厳選された丹波牛や季節の京野菜を取り入れた本格懐石料理が評判。静かに嵐山の風情を味わいたい大人の旅に最適です。"
                ]
            },
            {
                "tag": "渡月橋を望む絶景展望露天風呂！伝統の京懐石と心温まるおもてなし",
                "features": [
                    "渡月橋のすぐ南側に位置し、最上階の展望露天風呂から渡月橋と嵐山の一大パノラマを一望できる風情豊かな温泉旅館です。",
                    "肌に優しい嵐山温泉の湯に浸かりながら、夕暮れの茜色に染まる古都の絶景を眺める時間は格別の贅沢です。",
                    "名物の自家製豆腐や旬の京野菜、近江牛を取り入れた彩り鮮やかな京懐石を提供。温かなおもてなしと便利な立地で人気を集めています。"
                ]
            }
        ]
    },
    "ishikawa_kaga_yamashiro_luxury": {
        "note_num": 202,
        "lead_intro": "北陸新幹線の延伸通結により東京からのアクセスが飛躍的に向上した石川県・加賀温泉郷。その中心に位置する『山代温泉（やましろおんせん）』と『山中温泉（やまなかおんせん）』は、開湯1300年の歴史を誇り、加賀百万石の前田侯をはじめ多くの文人墨客が逗留した北陸屈指の温泉地です。特に大正期、稀代の美食家・芸術家として名高い北大路魯山人が逗留し、初代須田菁華から九谷焼の作陶を学び、美意識を覚醒させた地として知られます。11月から12月にかけての加賀温泉郷は、11月6日の『日本海ズワイガニ漁解禁』とともに一年で最も熱気に包まれる最高のハイシーズン。石川県で水揚げされる最高級ブランド『加能ガニ（かのうがに）』は、青いタグが目印の一番蟹。荒海で身が引き締まり、甲羅いっぱいに詰まった甘いカニ味噌、透き通るようなカニ刺し、香ばしい炭火焼きガニ、そして極上のカニすき鍋と、本場でしか味わえない至極のカニ尽くし会席が旅人を迎えます。宿泊には、魯山人ゆかりの老舗料亭旅館の最高峰『あらや滔々庵』をはじめ、鶴仙渓の絶景を望む全室露天付きの隠れ宿『山中温泉 花紫』、自然と調和するモダン建築が美しい名宿など、格式高い名門を厳選。客室露天風呂に掛け流される名湯に浸かり、九谷焼や山中塗の器に盛られた加能ガニととろける能登牛を味わう時間は、日本の冬の美食旅の頂点を極める贅沢な体験となります。",
        "reasons": [
            ("11月6日解禁！青タグの最高峰ブランド「加能ガニ」極上フルコースを本場で味わう",
             "初冬の日本海がもたらす冬の味覚の王様・加能ガニ。炭火焼きガニの香ばしい薫り、とろけるカニ刺し、濃厚な甲羅味噌焼きなど、本場宿ならではの贅を尽くした蟹会席を堪能できます。"),
            ("美食家・北大路魯山人ゆかりの最高峰名門旅館「あらや滔々庵」の美意識と格式",
             "山代温泉の元湯を守り継ぐ名門旅館。魯山人の書画や九谷焼の器、数寄屋造りの建築美、源泉掛け流しの名湯が一体となった至高の文化体験を味わえます。"),
            ("北陸新幹線延伸でアクセス抜群！鶴仙渓の初冬景色と開湯1300年の名湯巡り",
             "東京から乗り換えなしで加賀温泉駅まで一直線。冬の鶴仙渓の渓谷美散策や、ステンドグラスが美しい古総湯での外湯巡りなど、優雅な冬の温泉街散策が楽しめます。")
        ],
        "access_info": """【エリアへのアクセス】
・新幹線：北陸新幹線「加賀温泉駅」下車。東京駅より「かがやき」で直通約2時間45分。金沢駅からは新幹線で約15分、福井駅からは約12分。加賀温泉駅からは各宿の専用無料送迎車で約10〜15分。
・電車（関西・中京方面）：JR大阪駅・京都駅より特急サンダーバードで敦賀駅乗り換え、北陸新幹線で加賀温泉駅まで約2時間10分。名古屋駅からは特急しらさぎ・新幹線経由で約2時間15分。
・飛行機：小松空港よりレンタカーまたはタクシーで約30分。空港リムジンバスで福井・金沢方面へもアクセス便利。
・車：北陸自動車道「加賀IC」または「片山津IC」より約15分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月中旬〜12月（11月6日のカニ漁解禁直後の最も活気ある時期。初雪が舞い始める北陸独特の風情ある雪見温泉を満喫できます）。
・気温の目安：日本海側気候のため雨や雪が降りやすく、11月は日中11〜15℃、朝晩は5〜8℃。12月に入ると日中でも6〜9℃、朝晩は1〜4℃前後まで冷え込みます。
・服装のポイント：防風・防水性のある厚手コートやダウンジャケット、折りたたみ傘（または雨雪兼用傘）を必ずご用意ください。温泉街の散策には滑りにくい防水シューズが適しています。""",
        "faqs": [
            ("「加能ガニ」とはどのような蟹ですか？越前ガニとの違いは？",
             "「加能ガニ（かのうがに）」は、石川県の港（橋立港、金沢港など）で水揚げされるオスのズワイガニの最高級ブランド名です。青色のブランドタグが取り付けられます。福井県の「越前ガニ（黄色タグ）」と同じズワイガニですが、漁場が近く日帰り漁で水揚げされるため鮮度が極めて高いのが特徴です。またメスのズワイガニは「香箱ガニ（こうばこがに）」と呼ばれ、濃厚な内子と外子が絶品です。"),
            ("北大路魯山人と山代温泉「あらや滔々庵」の縁とは？",
             "大正4年（1915年）、当時まだ無名だった福田房次郎（後の北大路魯山人）が山代温泉を訪れ、あらや滔々庵の先代主人や初代須田菁華と出会いました。あらやの離れに逗留して多くの看板や額を彫り、九谷焼の作陶に開眼したことが、魯山人の芸術家・美食家としての原点となりました。館内には現在も魯山人の貴重な作品が展示されています。"),
            ("12月の加賀温泉郷へ車で行く場合、スタッドレスタイヤは必要ですか？",
             "北陸自動車道や加賀温泉郷周辺は、12月に入ると強い寒波によって雪が積もったり路面が凍結することがあります。冬季にお車で訪れる場合は、必ずスタッドレスタイヤを装着してください。北陸新幹線の利用が最も安全でスムーズです。")
        ],
        "hotel_details": [
            {
                "tag": "魯山人の美意識が息づく名門中の名門！元湯の源泉掛け流しと最高峰加能ガニ",
                "features": [
                    "山代温泉の中心・湯の曲輪に面し、八代にわたり元湯を守り続ける北陸屈指の高級老舗旅館。館内には北大路魯山人の扁額や美術品がさりげなく配されています。",
                    "毎分10万リットルを誇る山代温泉の元湯が贅沢に掛け流され、庭園を望む露天風呂や数寄屋造りの湯処で至高の湯浴みを満喫できます。",
                    "冬の夕食は本場加能ガニの極上フルコース。選び抜かれた器と一流の料理人が仕立てる蟹料理の数々は、食通を唸らせる芸術の極みです。"
                ]
            },
            {
                "tag": "鶴仙渓を眼下に望む全室リバービュー！名物加賀能登の旬を味わう極上宿",
                "features": [
                    "山中温泉の名勝・鶴仙渓の清流沿いに佇むハイクラス旅館。客室からは四季折々の渓谷美を一望でき、ゆったりとした時間が流れます。",
                    "大浴場や露天風呂には山中の名湯が溢れ、心地よいせせらぎを聞きながら優雅なリフレッシュが叶います。",
                    "夕食は加賀懐石をベースに、厳選された加能ガニや能登牛、日本海の新鮮な海の幸を贅沢に取り入れた華やかなディナーを楽しめます。"
                ]
            },
            {
                "tag": "こおろぎ橋のすぐそば！渓谷の自然とモダンな和の設えが心地よい名旅館",
                "features": [
                    "山中温泉のシンボル『こおろぎ橋』にほど近い清流沿いに位置し、自然豊かな景観と洗練されたサービスが人気の温泉旅館です。",
                    "広々とした大浴場や露天風呂からは渓谷の冬景色を望み、肌触りの滑らかな名湯が日頃の疲れを綺麗に洗い流してくれます。",
                    "地産地消にこだわった夕食は、日本海の旬の魚介や加賀野菜を美しく盛り込んだ会席料理。上質な時間を過ごせます。"
                ]
            },
            {
                "tag": "自家源泉と三つの大浴場巡り！露天風呂付き客室で過ごす至福の休日",
                "features": [
                    "自家源泉を有し、趣の異なる3つの大浴場『九谷の湯処』『滝の湯処』『瑠璃の湯処』で多彩な湯巡りが楽しめる名門旅館です。",
                    "ハイクラスフロアにはプライベート露天風呂付き客室を備え、人目を気にせず名湯を心ゆくまで堪能できます。",
                    "夕食は冬の味覚の王様・ズワイガニの会席プランや能登牛会席など多彩なプランを用意。家族旅行から記念日旅行まで幅広く愛されています。"
                ]
            },
            {
                "tag": "鶴仙渓を望む貸切露天風呂が人気！情緒あふれる大人の隠れ家名宿",
                "features": [
                    "山中温泉の渓谷沿いに佇み、あたたかなおもてなしと風情ある空間でリピーターの多い老舗温泉旅館です。",
                    "清流を望む貸切露天風呂や大浴場で良質な名湯を満喫でき、プライベート感を大切にしたいカップルやご夫婦に選ばれています。",
                    "冬の夕食にはカニ料理や旬の地魚を盛り込んだ会席膳が並び、手頃な価格設定ながら上質な滞在を提供してくれます。"
                ]
            }
        ]
    }
}

def generate_nextjs_page(theme_key, meta, wiki_spot, hotels, details):
    title = meta["title"]
    meta_desc = meta["metaDesc"]
    slug = meta["slug"]
    lead = details["lead_intro"]
    reasons = details["reasons"]
    access = details["access_info"]
    faqs = details["faqs"]
    h_details = details["hotel_details"]

    faq_schema_items = []
    for q, a in faqs:
        clean_q = q.replace('"', '\\"')
        clean_a = a.replace('"', '\\"').replace("\n", " ")
        faq_schema_items.append(f"""        {{
          "@type": "Question",
          "name": "{clean_q}",
          "acceptedAnswer": {{
            "@type": "Answer",
            "text": "{clean_a}"
          }}
        }}""")
    faq_schema_str = ",\n".join(faq_schema_items)

    hotel_cards_code = []
    for i, h in enumerate(hotels[:5]):
        h_tag = h_details[i]["tag"] if i < len(h_details) else "おすすめの厳選名宿"
        h_feats = h_details[i]["features"] if i < len(h_details) else ["源泉掛け流しの名湯", "旬の味覚を味わう会席", "行き届いたおもてなし"]
        
        feat_li = "".join([f'<li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>{feat}</span></li>' for feat in h_feats])
        
        min_charge = f"¥{h.get('hotelMinCharge', 0):,}" if h.get('hotelMinCharge', 0) > 0 else "プラン詳細参照"
        rating = f"{h.get('reviewAverage', 0):.2f}" if h.get('reviewAverage', 0) > 0 else "高評価"
        
        img_src = h.get('hotelImageUrl', 'https://img.travel.rakuten.co.jp/share/HOTEL/dummy/dummy.jpg')
        aff_url = h.get('affiliateUrl', f"https://hb.afl.rakuten.co.jp/hgc/{AFFILIATE_ID}/?pc=" + urllib.parse.quote(h.get('hotelInformationUrl', 'https://travel.rakuten.co.jp/')))
        h_name = h.get('hotelName', '')
        h_address = f"{h.get('address1', '')}{h.get('address2', '')}"
        h_access = h.get('access', '')
        
        card_html = f"""        {{/* 宿カード {i+1}: {h_name} */}}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第{i+1}位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              {h_tag}
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">{rating}</span>
              <span className="text-slate-400">（クチコミ {h.get('reviewCount', 0)}件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="{img_src}"
                  alt="{h_name}"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  {h_name}
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{h_address}</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{h_access}</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  {feat_li}
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">{min_charge}</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="{aff_url}"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>"""
        hotel_cards_code.append(card_html)

    all_cards_str = "\n\n".join(hotel_cards_code)

    reasons_code = []
    for idx, (rtitle, rdesc) in enumerate(reasons, 1):
        reasons_code.append(f"""          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                {idx}
              </span>
              <span>{rtitle}</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              {rdesc}
            </p>
          </div>""")
    reasons_str = "\n".join(reasons_code)

    faq_code = []
    for q, a in faqs:
        faq_code.append(f"""          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>{q}</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              {a}
            </p>
          </div>""")
    faq_str = "\n".join(faq_code)

    wiki_img = wiki_spot.get("image_url", "")
    wiki_label = wiki_spot.get("label", "")
    wiki_extract = wiki_spot.get("extract", "")

    page_content = f"""import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {{ Metadata }} from 'next';
import {{ 
  Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight, 
  Clock, ArrowRight, Utensils, Star, Compass, Train, ShieldCheck 
}} from 'lucide-react';

export const metadata: Metadata = {{
  title: '{title} | クラウドトラベル',
  description: '{meta_desc}',
  keywords: '{meta["prefJa"]}, {meta["spotQuery"]}, 高級旅館, 客室露天風呂, 記念日旅行, 11月旅行, 12月旅行, 楽天トラベル, ふるさと納税',
  openGraph: {{
    title: '{title}',
    description: '{meta_desc}',
    url: 'https://croud-travel.pages.dev/{slug}',
    type: 'article',
    siteName: 'クラウドトラベル',
  }},
  alternates: {{
    canonical: 'https://croud-travel.pages.dev/{slug}',
  }},
}};

export default function UltraLuxuryWinterFeaturePage() {{
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {{/* 構造化データ: FAQ & Breadcrumb */}}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{
          __html: JSON.stringify([
            {{
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {{
                  "@type": "ListItem",
                  "position": 1,
                  "name": "ホーム",
                  "item": "https://croud-travel.pages.dev"
                }},
                {{
                  "@type": "ListItem",
                  "position": 2,
                  "name": "特集一覧",
                  "item": "https://croud-travel.pages.dev/features"
                }},
                {{
                  "@type": "ListItem",
                  "position": 3,
                  "name": "{title}",
                  "item": "https://croud-travel.pages.dev/{slug}"
                }}
              ]
            }},
            {{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
{faq_schema_str}
              ]
            }}
          ])
        }}}}
      />

      {{/* パンくずリスト */}}
      <div className="bg-slate-100 border-b border-slate-200 text-xs text-slate-500 py-2.5 px-4">
        <div className="max-w-5xl mx-auto flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-slate-800 transition">ホーム</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/features" className="hover:text-slate-800 transition">特集一覧</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-medium truncate max-w-xs">{title}</span>
        </div>
      </div>

      {{/* ヒーローヘッダー */}}
      <header className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white py-14 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026-2027年 憧れの高級宿・ラグジュアリー特選</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
            {title}
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {meta_desc}
          </p>
        </div>
      </header>

      {{/* メインコンテンツ */}}
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        
        {{/* 導入解説 */}}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-600 shrink-0" />
            <span>初冬にこの地を訪れるべき理由と風土の魅力</span>
          </h2>
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
            {lead}
          </p>
          
          <div className="pt-4 space-y-3">
            <h3 className="text-sm md:text-base font-bold text-slate-900">
              ▼ 本テーマが初冬の記念日・贅沢旅に絶対おすすめな3大ポイント
            </h3>
            <div className="space-y-3">
{reasons_str}
            </div>
          </div>
        </section>

        {{/* Wikipedia連携 観光地紹介 */}}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-rose-600 shrink-0" />
              <span>近隣の必見名所：{wiki_spot.get('query', '')}</span>
            </h2>
            <span className="text-[11px] text-slate-400">Wikipedia・公式解説連携</span>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative h-52 md:h-60 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="{wiki_img}"
                alt="{wiki_label}"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="md:col-span-7 space-y-2.5">
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {wiki_label}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                {wiki_extract}
              </p>
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-200/60 text-[11px] md:text-xs text-amber-900 leading-relaxed">
                <span className="font-bold block mb-0.5">💡 周辺観光のポイント</span>
                各高級旅館からスムーズにアクセス可能。初冬の澄んだ大気のもとで、静寂と壮大な自然美を心ゆくまで堪能できます。
              </div>
            </div>
          </div>
        </section>

        {{/* 楽天API厳選宿 5選 */}}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3 flex items-end justify-between">
            <div>
              <span className="text-xs font-bold text-rose-600 tracking-wider block">RAKUTEN TRAVEL LUXURY RANKING</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                一生に一度は泊まりたい最高峰名宿 5選
              </h2>
            </div>
            <span className="text-xs text-slate-500">リアルタイムAPI連携データ</span>
          </div>

          <div className="space-y-6">
{all_cards_str}
          </div>
        </section>

        {{/* アクセス＆見頃情報 */}}
        <section className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-lg md:text-xl font-bold flex items-center gap-2 text-amber-300">
            <Train className="w-5 h-5 shrink-0" />
            <span>アクセスガイド・気候と服装のポイント</span>
          </h2>
          <div className="text-xs md:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
            {access}
          </div>
        </section>

        {{/* よくある質問 (FAQ) */}}
        <section className="bg-slate-100 rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>よくある質問（FAQ）</span>
          </h2>
          <div className="space-y-3">
{faq_str}
          </div>
        </section>

        {{/* ふるさと納税・関連リンク */}}
        <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 rounded-2xl p-6 md:p-8 space-y-3 text-center">
          <h2 className="text-xl md:text-2xl font-black">
            楽天トラベル ふるさと納税で最大30%お得に予約！
          </h2>
          <p className="text-xs md:text-sm max-w-xl mx-auto font-medium">
            高価格帯の高級宿だからこそ、楽天トラベルふるさと納税クーポンの割引効果は絶大。実質2,000円の自己負担で憧れのスイートルームに宿泊できます。
          </p>
          <div className="pt-2">
            <a
              href="{FURUSATO_URL}"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-1.5 px-8 py-3.5 bg-slate-950 text-white font-black text-sm rounded-xl shadow-lg hover:bg-slate-900 transition transform active:scale-95"
            >
              <span>楽天トラベル ふるさと納税クーポンをチェック</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}}
"""
    return page_content

def generate_note_markdown(theme_key, meta, wiki_spot, hotels, details):
    title = meta["title"]
    meta_desc = meta["metaDesc"]
    slug = meta["slug"]
    lead = details["lead_intro"]
    reasons = details["reasons"]
    access = details["access_info"]
    faqs = details["faqs"]
    h_details = details["hotel_details"]
    note_num = details["note_num"]

    md_lines = []
    md_lines.append(f"# {title}")
    md_lines.append("")
    md_lines.append(f"> **2026-2027年 初冬（11月〜12月）憧れの高級宿・記念日旅行ガイド**")
    md_lines.append(f"> {meta_desc}")
    md_lines.append("")
    md_lines.append("---")
    md_lines.append("")
    md_lines.append("## はじめに：初冬の今だからこそ訪れるべき理由と風土の魅力")
    md_lines.append("")
    md_lines.append(lead)
    md_lines.append("")
    md_lines.append("### 本テーマが初冬の記念日・贅沢旅に絶対おすすめな3大ポイント")
    md_lines.append("")
    for i, (rtitle, rdesc) in enumerate(reasons, 1):
        md_lines.append(f"#### ポイント{i}：{rtitle}")
        md_lines.append(f"{rdesc}")
        md_lines.append("")
    
    md_lines.append("---")
    md_lines.append("")
    md_lines.append(f"## 近隣の必見名所：{wiki_spot.get('query', '')}（Wikipedia公式解説・実写画像）")
    md_lines.append("")
    if wiki_spot.get("image_url"):
        md_lines.append(f"![{wiki_spot.get('label', '')}]({wiki_spot.get('image_url')})")
        md_lines.append("")
    md_lines.append(f"**【{wiki_spot.get('label', '')}】**")
    md_lines.append("")
    md_lines.append(wiki_spot.get("extract", ""))
    md_lines.append("")
    md_lines.append(f"詳細な歴史と背景：{wiki_spot.get('description', '')}")
    md_lines.append("")
    md_lines.append("---")
    md_lines.append("")
    md_lines.append("## 一生に一度は泊まりたい楽天API厳選名宿 5選（最新データ＆個別徹底解説）")
    md_lines.append("")

    for i, h in enumerate(hotels[:5]):
        h_tag = h_details[i]["tag"] if i < len(h_details) else "おすすめの厳選名宿"
        h_feats = h_details[i]["features"] if i < len(h_details) else ["源泉掛け流しの名湯", "旬の味覚を味わう会席", "行き届いたおもてなし"]
        min_charge = f"¥{h.get('hotelMinCharge', 0):,}" if h.get('hotelMinCharge', 0) > 0 else "プラン詳細参照"
        rating = f"{h.get('reviewAverage', 0):.2f}" if h.get('reviewAverage', 0) > 0 else "高評価"
        img_src = h.get('hotelImageUrl', '')
        aff_url = h.get('affiliateUrl', f"https://hb.afl.rakuten.co.jp/hgc/{AFFILIATE_ID}/?pc=" + urllib.parse.quote(h.get('hotelInformationUrl', 'https://travel.rakuten.co.jp/')))
        h_name = h.get('hotelName', '')
        h_address = f"{h.get('address1', '')}{h.get('address2', '')}"
        h_access = h.get('access', '')

        md_lines.append(f"### 第{i+1}位：{h_name}")
        md_lines.append(f"**【{h_tag}】**")
        md_lines.append("")
        if img_src:
            md_lines.append(f"![{h_name}]({img_src})")
            md_lines.append("")
        md_lines.append(f"- **クチコミ総合評価**：★ {rating}（クチコミ件数：{h.get('reviewCount', 0)}件）")
        md_lines.append(f"- **最安料金目安**：1名あたり {min_charge}〜（2名1室利用時/税込）")
        md_lines.append(f"- **所在地**：{h_address}")
        md_lines.append(f"- **アクセス**：{h_access}")
        md_lines.append("")
        md_lines.append("#### 宿の特色とおすすめの過ごし方")
        for f_item in h_feats:
            md_lines.append(f"- **{f_item[:15]}…**：{f_item}")
        md_lines.append("")
        md_lines.append(f"👉 [楽天トラベルで「{h_name}」の空室・プラン詳細を確認する]({aff_url})")
        md_lines.append("")
        md_lines.append("---")
        md_lines.append("")

    md_lines.append("## アクセスガイド・見頃とおすすめの服装")
    md_lines.append("")
    md_lines.append(access)
    md_lines.append("")
    md_lines.append("---")
    md_lines.append("")
    md_lines.append("## 初冬旅行のよくある質問（FAQ）")
    md_lines.append("")
    for q, a in faqs:
        md_lines.append(f"### Q. {q}")
        md_lines.append(f"**A.** {a}")
        md_lines.append("")

    md_lines.append("---")
    md_lines.append("")
    md_lines.append("## まとめとお得な予約のコツ：楽天トラベルふるさと納税の活用")
    md_lines.append("")
    md_lines.append("憧れの高級宿や全室離れ露天風呂付き客室での滞在は、日頃の忙しさを忘れさせ、人生の特別な記憶としていつまでも心に刻まれます。")
    md_lines.append("")
    md_lines.append(f"高価格帯の宿泊予約だからこそ、寄附金額に応じた大幅な割引が適用される『楽天トラベル ふるさと納税』の活用が圧倒的にお得です。自己負担実質2,000円で憧れのスイートルームに泊まる賢い選択をぜひご利用ください。")
    md_lines.append("")
    md_lines.append(f"👉 [楽天トラベル ふるさと納税特設ページはこちら]({FURUSATO_URL})")
    md_lines.append("")
    md_lines.append(f"WEBサイトの特集ページはこちら：[https://croud-travel.pages.dev/{slug}](https://croud-travel.pages.dev/{slug})")

    return "\n".join(md_lines)

# 2. 全記事の生成実行
def main():
    print("=== Round 146: Generating Ultra-Luxury Next.js Pages and note-*.md Articles ===")

    for theme_key, details in THEME_DETAILS.items():
        meta = raw_hotels_data[theme_key]["meta"]
        hotels = raw_hotels_data[theme_key]["hotels"]
        wiki_spot = wiki_spots_data[theme_key]
        slug = meta["slug"]
        note_num = details["note_num"]

        print(f"\nProcessing Ultra-Luxury Theme: {theme_key}")
        print(f"  Slug: {slug}")
        print(f"  Note: note-{note_num}.md")

        # Next.js Page 生成
        app_dir = os.path.join("src", "app", slug)
        os.makedirs(app_dir, exist_ok=True)
        page_path = os.path.join(app_dir, "page.tsx")

        page_code = generate_nextjs_page(theme_key, meta, wiki_spot, hotels, details)
        with open(page_path, "w", encoding="utf-8") as f:
            f.write(page_code)
        print(f"  ✓ Written Next.js page: {page_path} ({len(page_code)} chars)")

        # note-*.md 生成
        note_path = f"note-{note_num}.md"
        note_md = generate_note_markdown(theme_key, meta, wiki_spot, hotels, details)
        with open(note_path, "w", encoding="utf-8") as f:
            f.write(note_md)
        print(f"  ✓ Written note markdown: {note_path} ({len(note_md)} chars)")

    print("\n🎉 Round 146 All 5 Ultra-Luxury Features Generated Successfully!")

if __name__ == "__main__":
    main()
