# -*- coding: utf-8 -*-
import re

targets = [
    {
        "file": "src/app/winter-mie-ago-bay-luxury-basara-shimanokaze-matsusaka-stay/page.tsx",
        "old_title": "【英虞湾の夕景リアス美と全室離れ露天風呂スイート】2026-2027年11-12月の三重・志摩賢島！「汀渚 ばさら邸」＆ベイスイート・冬の伊勢志摩天然伊勢海老・極上松阪牛名宿5選",
        "new_title": "【志摩賢島・高級宿5選】英虞湾の夕景美と伊勢海老・松阪牛を味わう離れ露天リトリート",
        "old_intro_h2": "初冬の静寂が織りなす最高峰の贅沢リトリート",
        "catch": "伊勢志摩国立公園の南端、リアス海岸の島々が夕日に染まる英虞湾。冬の味覚の王様・天然伊勢海老と松阪牛を堪能する、大人の記念日・ご褒美ステイへ。",
        "p1_title": "🌅 英虞湾リアス海岸の夕景美",
        "p1_desc": "大気が凛と澄み渡る初冬は、穏やかな水面が茜色から黄金色へと染まる年間で最も美しいサンセットシーズンです。",
        "p2_title": "♨️ 全室離れ・客室露天のプライベート感",
        "p2_desc": "広大な敷地にわずかな客室のみを配した「ばさら邸」など、都会の喧騒と完全に隔絶された上質な空間が広がります。",
        "food_title": "🍴 解禁された天然伊勢海老＆最高峰松阪牛",
        "food_desc": "冬に甘みと弾力を増す活伊勢海老のお造りや炭火焼き、芳醇な香りと旨味がとろける最高級A5松阪牛ステーキの極上会席を満喫。"
    },
    {
        "file": "src/app/winter-yamanashi-kawaguchiko-luxury-fufu-konansou-fuji-stay/page.tsx",
        "old_title": "【雄大な冬富士と全室富士山ビュー客室露天風呂】2026-2027年11-12月初冬の山梨・富士河口湖！「ふふ 河口湖」＆「うぶや」・澄み渡る冠雪富士と甲州牛懐石名宿5選",
        "new_title": "【河口湖・富士山ビュー高級宿5選】全室客室露天から望む冠雪富士＆甲州牛懐石ステイ",
        "old_intro_h2": "初冬の静寂が織りなす最高峰の贅沢リトリート",
        "catch": "富士五湖の中心、雪化粧をまとった霊峰富士が最も鮮やかに湖面に映える冬の河口湖。凛とした大気の中で冠雪富士を客室露天から眺める至高の休日をご提案。",
        "p1_title": "🗻 澄み切った大気に映える冠雪富士",
        "p1_desc": "湿度が下がり空気が澄み渡る冬は、富士山の山肌の陰影や純白の雪景色が1年で最もクリアに美しく望めます。",
        "p2_title": "♨️ 逆さ富士を望む客室専用露天風呂",
        "p2_desc": "「ふふ 河口湖」や「うぶや」など、湯船に浸かりながら神々しい富士山パノラマを独り占めできる名宿が揃います。",
        "food_title": "🍴 厳選甲州牛懐石と山梨ワインのペアリング",
        "food_desc": "きめ細やかなサシが入った甲州牛の炭火焼きや富士の伏流水で育まれた川魚、旬の冬野菜を地元ワイナリーの銘酒と共にご堪能。"
    },
    {
        "file": "src/app/winter-kumamoto-kurokawa-luxury-takefue-hoshinoya-akaushi-stay/page.tsx",
        "old_title": "【阿蘇の静寂と湯煙に抱かれる極上隠れ宿離れ】2026-2027年11-12月初冬の熊本・黒川温泉＆瀬の本！「深山山荘」＆「山あいの宿 山みず木」・初冬の静寂と阿蘇あか牛懐石名宿5選",
        "new_title": "【黒川温泉・瀬の本高級離れ宿5選】阿蘇の自然美と客室露天＆幻のあか牛を味わう旅",
        "old_intro_h2": "初冬の静寂が織りなす最高峰の贅沢リトリート",
        "catch": "阿蘇外輪山の山懐、幽玄な渓谷に湯煙が立ちのぼる黒川温泉と瀬の本高原。凛とした冬枯れの静寂と満天の星に包まれる大人の温泉リトリートへ。",
        "p1_title": "🎋 湯煙と竹林が織りなす冬の情緒",
        "p1_desc": "冬の風物詩である竹灯籠「湯あかり」が温泉街の川沿いを温かく照らし、幻想的で心温まる和の空間が広がります。",
        "p2_title": "♨️ 渓流を望む極上の自家源泉露天",
        "p2_desc": "「深山山荘」や「山みず木」など、大自然のせせらぎを聞きながら入る源泉掛け流しの湯船が心と身体をじんわり癒やします。",
        "food_title": "🍴 幻の阿蘇あか牛炭火焼きと肥後郷土会席",
        "food_desc": "赤身本来の豊かな旨味と上品な脂が特徴の熊本名物「あか牛」のステーキや炭火焼き、新鮮な馬刺しや山菜の恵みを贅沢に味わえます。"
    },
    {
        "file": "src/app/winter-kyoto-tango-taizagani-luxury-sumihei-amadori-matsuba-stay/page.tsx",
        "old_title": "【幻のブランド蟹・間人ガニと日本海の荒波を望む名旅館】2026-2027年11-12月初冬の京都・丹後間人＆京丹後！創業明治「間人温泉 炭平」＆全室海一望露天スイート・極上活松葉ガニ名宿5選",
        "new_title": "【丹後間人・活松葉ガニ高級宿5選】幻の間人ガニフルコース＆日本海絶景露天ステイ",
        "old_intro_h2": "初冬の静寂が織りなす最高峰の贅沢リトリート",
        "catch": "京都府北部、日本海の断崖に抱かれる丹後半島・間人。数隻の小型船のみが水揚げする冬の最高峰ブランド「間人ガニ（たいざがに）」を味わい尽くす美食旅。",
        "p1_title": "🦀 幻の最高峰ブランド「間人ガニ」",
        "p1_desc": "日帰り漁だからこそ実現する抜群の鮮度。透き通る花咲くカニ刺し、香ばしい炭火焼き、濃厚な甲羅みそは冬の究極の贅沢です。",
        "p2_title": "♨️ 日本海を一望する絶景インフィニティ温泉",
        "p2_desc": "創業明治の「間人温泉 炭平」をはじめ、荒波の日本海と茜色に染まる夕景を望む露天風呂付き客室で優雅なひととき。",
        "food_title": "🍴 活蟹フルコースと丹後の地酒ペアリング",
        "food_desc": "目の前で捌かれる生きた松葉ガニの甘みと旨味を、丹後杜氏が醸す地元の銘酒とともに心ゆくまでご堪能いただけます。"
    },
    {
        "file": "src/app/winter-kagoshima-kirishima-myoken-luxury-gajin-ishiharaso-kurobuta-stay/page.tsx",
        "old_title": "【天孫降臨の地・霧島連山と天降川渓流の極上源泉離れ宿】2026-2027年11-12月の鹿児島・霧島＆妙見温泉！「妙見石原荘」＆「忘れの里 雅叙苑」・自噴かけ流し温泉と黒毛和牛・黒豚名宿5選",
        "new_title": "【霧島・妙見温泉の高級宿5選】天降川渓流沿いの自噴温泉＆極上かごしま黒豚会席",
        "old_intro_h2": "初冬の静寂が織りなす最高峰の贅沢リトリート",
        "catch": "天孫降臨の神話が息づく霧島連山の麓、清流・天降川の渓流沿いに湧く名湯・妙見温泉。足元から自噴する本物の名湯と南国の大自然に癒やされる特別な隠れ家へ。",
        "p1_title": "♨️ 地球の息吹！足元自噴の奇跡の温泉",
        "p1_desc": "「妙見石原荘」をはじめ、一切空気に触れさせず浴槽底から直接湧き出す極上の炭酸水素塩泉を堪能できます。",
        "p2_title": "🌿 天降川渓流に溶け込む茅葺き離れ",
        "p2_desc": "日本初の温泉水着陸認定を受けた「雅叙苑」など、日本の原風景が広がる茅葺き屋根の離れで穏やかな時を過ごせます。",
        "food_title": "🍴 鹿児島黒豚しゃぶしゃぶ＆黒毛和牛ステーキ",
        "food_desc": "甘み際立つかごしま黒豚やA5黒毛和牛、地元採れたての地鶏や有機野菜を、本場鹿児島の本格芋焼酎と合わせて味わう至福。"
    },
    {
        "file": "src/app/winter-shizuoka-izu-shuzenji-luxury-asaba-sora-onsen-stay/page.tsx",
        "old_title": "【竹林の小径の静寂と数寄屋露天離れ】2026-2027年11-1月冬の静岡・伊豆修善寺温泉！「柳生の庄」＆「宙 SORA 渡月荘金龍」・天城軍鶏と伊豆伊勢海老・名門美食宿5選",
        "new_title": "【修善寺温泉・名門高級宿5選】竹林の小径と数寄屋露天離れ＆伊豆の旬を味わう冬旅",
        "old_intro_h2": "冬の中伊豆・修善寺・天城湯ヶ島で過ごす至福のひととき",
        "catch": "開湯1200年の歴史を誇る伊豆の小京都・修善寺。桂川のせせらぎと竹林の小径に包まれた数寄屋造りの名門旅館で、冬の静寂と極上の懐石料理を堪能。",
        "p1_title": "🎋 竹林の小径と桂川の情緒あふれる冬景色",
        "p1_desc": "秋の紅葉から冬の凛とした静寂へと移り変わる修善寺。朱塗りの橋と竹林を望む散策は大人の旅にふさわしい落ち着きを与えてくれます。",
        "p2_title": "♨️ 日本の美意識息づく数寄屋露天風呂",
        "p2_desc": "「柳生の庄」や「宙 SORA」など、四季の庭園を望む客室専用露天風呂で弘法大師ゆかりの名湯を心ゆくまで満喫。",
        "food_title": "🍴 旨味あふれる天城軍鶏と伊豆地金目鯛・伊勢海老",
        "food_desc": "天城山麓で育まれた滋味豊かな天城軍鶏の鍋や炭火焼き、駿河湾の地金目鯛の姿煮など、伊豆の自然の恵みを本格割烹で賞味。"
    },
    {
        "file": "src/app/winter-hyogo-kinosaki-luxury-nishimuraya-mikiya-tsuiyamagani-stay/page.tsx",
        "old_title": "【雪の柳並木と最高峰・青タグ津居山ガニ解禁】2026-2027年11-1月冬の兵庫・城崎温泉！創業160年「西村屋本館」＆「三木屋」・活松葉ガニフルコースと外湯めぐり名宿5選",
        "new_title": "【城崎温泉・極上松葉ガニ宿5選】雪の柳並木と創業160年名門・津居山ガニ解禁ステイ",
        "old_intro_h2": "冬の城崎・津居山・円山川で過ごす至福のひととき",
        "catch": "大谿川沿いに柳並木と太鼓橋が続く情緒豊かな城崎温泉。青タグの最高峰・津居山ガニ（活松葉ガニ）が解禁される冬、創業160年の名門宿で味わう至高の温泉旅。",
        "p1_title": "🦀 最寄港・津居山直送の活松葉ガニ",
        "p1_desc": "青いタグが目印の津居山ガニ。花咲くお造りや炭火の香ばしい焼きガニ、濃厚な蟹みそ甲羅焼きなど本場ならではの贅を堪能。",
        "p2_title": "♨️ 雪舞う柳並木の外湯めぐりと名門庭園風呂",
        "p2_desc": "浴衣に下駄を鳴らして巡る七つの外湯と、「西村屋本館」や登録有形文化財「三木屋」の静謐な日本庭園に憩う極上の冬時間。",
        "food_title": "🍴 但馬牛ステーキと冬の味覚の饗宴",
        "food_desc": "神戸牛や松阪牛の素牛となる最高級ブランド「但馬牛」のステーキと松葉ガニの豪華競演。山陰の冬の恵みを五感で味わえます。"
    },
    {
        "file": "src/app/winter-fukushima-aizu-ashinomaki-higashiyama-luxury-ookawaso-mukaitaki-snow-stay/page.tsx",
        "old_title": "【幻想の浮き舞台雪景色と文化財雪見ろうそく】2026-2027年12-1月真冬の福島・会津芦ノ牧＆東山温泉！「大川荘」＆登録有形文化財「向瀧」・渓谷雪見露天と極上会津馬刺し名宿5選",
        "new_title": "【会津・東山＆芦ノ牧温泉高級宿5選】渓谷雪見露天風呂と会津馬刺し・文化財名宿旅",
        "old_intro_h2": "冬の会津若松・東山温泉・芦ノ牧温泉で過ごす至福のひととき",
        "catch": "名城・鶴ヶ城の城下町会津若松の奥座敷、湯川と大川の渓谷に佇む東山温泉・芦ノ牧温泉。白銀に輝く渓谷美と文化財の木造建築、極上の雪見風呂へ。",
        "p1_title": "❄️ 幻想的な浮き舞台と雪見ろうそく",
        "p1_desc": "「大川荘」の三味線が響く浮き舞台や、登録有形文化財「向瀧」の中庭に灯る雪見ろうそく。幽玄で息を呑む冬の絶景が迎えます。",
        "p2_title": "♨️ 渓谷を眼下に望む雪見絶景露天風呂",
        "p2_desc": "阿賀川の雪化粧した断崖を見下ろす段々露天風呂「四季舞台たな田」など、大自然のパノラマと豊かな自家源泉に癒やされます。",
        "food_title": "🍴 会津極上赤身馬刺しと会津地鶏・郷土料理",
        "food_desc": "辛子味噌でいただく新鮮な極上桜肉（馬刺し）や会津地鶏の鍋、会津の清らかな伏流水で醸された全国新酒鑑評会金賞の日本酒を堪能。"
    },
    {
        "file": "src/app/winter-tottori-misasa-kaike-luxury-matsubagani-ryokan-ohashi-yugetsu-stay/page.tsx",
        "old_title": "【奇跡の自噴ラジウム温泉と日本海インフィニティ露天】2026-2027年11-1月冬の鳥取・三朝＆皆生温泉！国登録有形文化財「旅館 大橋」＆「皆生 游月」・鳥取松葉ガニと鳥取和牛名宿5選",
        "new_title": "【鳥取・三朝＆皆生温泉高級宿5選】奇跡の自噴ラジウム温泉と冬の鳥取松葉ガニステイ",
        "old_intro_h2": "冬の三朝温泉・倉吉・皆生温泉・米子で過ごす至福のひととき",
        "catch": "世界屈指のラジウム含有量を誇る三朝温泉と、日本海を一望する海辺の皆生温泉。山陰の冬の至宝「鳥取松葉ガニ」と奇跡の名湯に包まれる上質な大人旅。",
        "p1_title": "♨️ 世界屈指の高濃度ラドン温泉＆海露天",
        "p1_desc": "国登録有形文化財「旅館 大橋」の足元自噴巌窟風呂や、「皆生 游月」の日本海インフィニティ露天風呂など、名湯の魅力を満喫。",
        "p2_title": "🦀 冬の山陰を代表する味覚「鳥取松葉ガニ」",
        "p2_desc": "境港から水揚げされる新鮮な松葉ガニ。引き締まった身の甘みと濃厚な蟹みそを、刺し・焼き・茹で・鍋のフルコースで堪能。",
        "food_title": "🍴 肉質日本一に輝いた鳥取和牛オレイン55",
        "food_desc": "口溶けの良い脂と芳醇な赤身が絶品の「鳥取和牛」のステーキやすき焼き。松葉ガニとの豪華な会席料理で特別な夜を演出します。"
    }
]

for t in targets:
    fpath = t["file"]
    with open(fpath, "r", encoding="utf-8") as fp:
        c = fp.read()
    
    # 1. Title replace
    c = c.replace(t["old_title"], t["new_title"])

    # 2. Section overhaul
    pattern = re.compile(r"<section className=[\"'](?:bg-white p-6 md:p-10 rounded-2xl border border-slate-200/80 shadow-md|bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 (?:space-y-4|leading-relaxed text-slate-700))[\"']>.*?<h2[^>]*>" + re.escape(t["old_intro_h2"]) + r"</h2>\s*<p[^>]*>.*?</p>\s*</section>", re.DOTALL)
    
    new_sec = f"""<section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6 text-slate-700">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 border-b-2 border-amber-500 pb-3 mb-4">
                {t["old_intro_h2"]}
              </h2>
              <p className="text-base md:text-lg leading-relaxed font-medium text-slate-800">
                {t["catch"]}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5 mb-2">
                  <span className="text-amber-600">{t["p1_title"]}</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {t["p1_desc"]}
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5 mb-2">
                  <span className="text-amber-600">{t["p2_title"]}</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {t["p2_desc"]}
                </p>
              </div>
            </div>

            <div className="bg-amber-50/70 p-4 md:p-5 rounded-xl border border-amber-200/80 text-sm text-slate-700 leading-relaxed">
              <p className="font-bold text-amber-950 mb-1">{t["food_title"]}</p>
              {t["food_desc"]}
            </div>
          </section>"""
    
    if pattern.search(c):
        c = pattern.sub(new_sec, c)
        with open(fpath, "w", encoding="utf-8") as fp:
            fp.write(c)
        print(f"Successfully overhauled {fpath}")
    else:
        print(f"Pattern match failed for {fpath}")
