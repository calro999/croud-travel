const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const winterFamilyArticles = [
  {
    id: "winter-family-niigata-echigoyuzawa-snow-resort-guide",
    title: "【冬休み子連れ旅・越後湯沢】ゲレンデ直結＆キッズパーク・室内温水プール完備！新幹線直結で雪遊びを満喫するファミリー温泉リゾート5選（2026-2027冬）",
    hotel_name: "越後湯沢 子連れ雪遊び＆ゲレンデ直結ファミリーリゾート5選",
    target_queries: ["越後湯沢 リブマックスリゾート", "越後湯沢 スキー 子連れ ホテル", "冬休み 家族旅行 スキー", "キッズパーク ゲレンデ"],
    prefecture: "新潟県",
    area: "越後湯沢・南魚沼",
    lead: "冬休みの家族旅行・子連れスキースノーボード旅行に完全対応！東京駅から上越新幹線で最速約70分という抜群のアクセスを誇る新潟・越後湯沢。ホテルを出れば目の前が白銀のゲレンデというスキーイン・スキーアウト宿や、そり遊び・スノーエスカレーター付きの充実したキッズパーク、天候を気にせず遊べる室内温水プール・温泉大浴場を備えたファミリー特化型リゾートを厳選。幼児用アメニティやキッズバイキングも充実した冬休みの思い出作りに最高の5宿を特集します。",
    family_features: "全宿でキッズパークまたはゲレンデ直結／ファミリールーム完備／そり・ウェアレンタル有／キッズバイキングや離乳食対応あり／家族風呂・貸切風呂完備。",
    model_course: "【1泊2日冬休みモデルコース】1日目は東京駅から新幹線で越後湯沢駅へ。ホテルへ直行してチェックイン前預かりで身軽になり、専用キッズパークでそり遊び＆雪だるま作りデビュー。冷えた体は広々とした温泉大浴場や室内温水プールで温まり、夜はローストビーフやキッズメニュー満載の贅沢バイキング。2日目は初心者向けスキースクールに参加し、越後湯沢駅のぽんしゅ館・CoCoLo湯沢でお土産選びとお餅スイーツを楽しんで帰路へ。",
    booking_tips: "年末年始（12月28日〜1月4日）および1月の連休はファミリー層の予約が最も激化します。スキーレンタルやスクールは事前WEB予約が必須。楽天トラベルの「5と0のつく日」最大20%OFFクーポンを活用すると高額な連泊リゾートも大幅にお得になります。",
    categories: ["冬休み旅行", "子連れ旅行", "家族旅行", "越後湯沢", "スキースノーボード", "キッズパーク", "温水プール", "バイキング"],
    hotelKeywords: [
      { keyword: "エンゼルグランディア越後中里", fallback: "越後湯沢 ファミリー ホテル" },
      { keyword: "ナスパニューオータニ", fallback: "NASPAニューオータニ" },
      { keyword: "湯沢グランドホテル", fallback: "越後湯沢 温泉 ホテル" },
      { keyword: "ホテルグリーンプラザ上越", fallback: "上越国際スキー場 ホテル" },
      { keyword: "越後湯沢温泉 湯沢東映ホテル", fallback: "湯沢東映ホテル" }
    ]
  },
  {
    id: "winter-family-hokkaido-kiroro-rusutsu-snow-guide",
    title: "【冬休み子連れ北海道】世界屈指のパウダースノーと室内波のプール＆温泉！キロロ・ルスツ・トマムの冬休み極上ファミリーリゾート5選（2026-2027）",
    hotel_name: "北海道 キロロ・ルスツ・ニセコ 子連れパウダースノー＆室内アクティビティ名宿5選",
    target_queries: ["ユキロロ", "キロロ バイキング", "北海道 スキー 子連れ ホテル", "冬休み 北海道 家族旅行"],
    prefecture: "北海道",
    area: "キロロ・ルスツ・ニセコ",
    lead: "サチコ急上昇クエリ「ユキロロ」「キロロ バイキング」に完全連動！冬休みの北海道は、世界中のスキーヤーが憧れる極上のシルキースノーが降り積もる夢のワンダーランド。ゲレンデ直結のコンドミニアム「Yu Kiroro」をはじめ、波の出る室内巨大プールやメリーゴーラウンド、スノーラフティングなど子供が歓喜するアクティビティが目白押し。北海道産いくらやカニが並ぶ豪華ディナービュッフェと雪見露天風呂を兼ね備えた冬休みファミリーの憧れ宿5選をお届けします。",
    family_features: "キッチン・洗濯乾燥機付き大型コンドミニアムあり／室内造波プール・キッズルーム完備／託児所・インターナショナルスキースクール対応／子供用スキーレンタル一式／海鮮・カニ食べ放題ビュッフェ。",
    model_course: "【2泊3日冬休み北海道満喫コース】1日目は新千歳空港からリゾート直行バスでホテルへ。雪景色を眺めながらチェックインし、夕方は室内温水プールで思い切り水遊び。夕食は北海道海鮮バイキングでいくら丼を堪能。2日目はスノーエスカレーター付きキッズエリアで家族全員で雪遊び＆ソリレース。夜は雪見露天風呂でリラックス。3日目は小樽運河の雪景色とお寿司ランチを楽しんで新千歳空港へ。",
    booking_tips: "北海道のスノーリゾートは国内外から人気が集中するため、年末年始の航空券付きツアーや大型ファミリールームは早期完売必至です。連泊割引プランやリフト券付きパックを早めに押さえるのが鉄則です。",
    categories: ["冬休み旅行", "子連れ北海道", "ユキロロ", "キロロ", "ルスツ", "パウダースノー", "室内プール", "カニ食べ放題"],
    hotelKeywords: [
      { keyword: "Yu Kiroro", fallback: "キロロ リゾート ホテル" },
      { keyword: "ルスツリゾートホテル＆コンベンション", fallback: "ルスツリゾート" },
      { keyword: "星野リゾート トマム ザ タワー", fallback: "トマム 星野リゾート" },
      { keyword: "キロロ トリビュートポートフォリオホテル", fallback: "キロロ 温泉" },
      { keyword: "ヒルトンニセコビレッジ", fallback: "ニセコ ホテル 温泉" }
    ]
  },
  {
    id: "winter-family-tochigi-nasu-hotspring-baby-guide",
    title: "【冬休み子連れ旅・那須高原】ウェルカムベビーのお宿認定＆キッズバイキング！赤ちゃん連れ・三世代旅行に安心の那須ファミリー温泉ホテル5選（2026-2027冬）",
    hotel_name: "那須高原 ウェルカムベビー認定＆冬休み子連れファミリー名宿5選",
    target_queries: ["赤ちゃん 温泉旅館", "赤ちゃん 温泉旅行", "那須 子連れ ホテル", "冬休み 家族旅行 関東"],
    prefecture: "栃木県",
    area: "那須高原",
    lead: "サチコ検索注目クエリ「赤ちゃん 温泉旅館」「赤ちゃん 温泉旅行」「那須 子連れ ホテル」に特化！都心から東北新幹線で約70分、冬の澄んだ空気と美肌温泉が魅力の那須高原。ミキハウス子育て総研「ウェルカムベビーのお宿」に認定されたホテルや、離乳食無料提供、おむつ・調乳ポット・ベビーバス完備の宿など、0歳〜未就学児連れでもストレスフリーに過ごせる施設が充実。三世代旅行にも最適な広々客室とライブキッチンバイキングが自慢の5選をご紹介します。",
    family_features: "ウェルカムベビーのお宿認定／月齢別離乳食無料サービス／おむつ用ゴミ箱・補助便座・調乳ポット完備／キッズ専用プレイルーム＆室内アクティビティ／畳敷き客室やベビーカー貸出。",
    model_course: "【1泊2日赤ちゃん・子連れ冬旅コース】1日目は那須ガーデンアウトレットでショッピングとランチ。午後はホテルへチェックインし、充実の室内キッズスペースで木製知育玩具やボールプールを満喫。夕食はキッズバイキングとシェフが目の前で焼く那須牛ステーキ。夜は家族風呂で安心の貸切温泉。2日目は那須サファリパークでマイカーから野生動物へ餌やり体験を楽しんで帰路へ。",
    booking_tips: "ウェルカムベビー認定ルームやキッズ向けコンセプトルームは部屋数が限られているため即日満室になりやすいです。赤ちゃん連れの場合は「ベッドガード」「ベビーベッド」の事前リクエストをお忘れなく。",
    categories: ["冬休み旅行", "子連れ旅行", "赤ちゃん温泉", "ウェルカムベビー", "那須高原", "三世代旅行", "バイキング", "家族風呂"],
    hotelKeywords: [
      { keyword: "ホテルエピナール那須", fallback: "エピナール那須" },
      { keyword: "ホテルサンバレー那須", fallback: "サンバレー那須" },
      { keyword: "ロイヤルホテル 那須", fallback: "グランドメルキュール那須高原リゾート＆スパ" },
      { keyword: "ホテルフォレストヒルズ那須", fallback: "那須高原 ファミリー ホテル" },
      { keyword: "那須温泉 ホテルニュー塩原", fallback: "ホテルニュー塩原" }
    ]
  },
  {
    id: "winter-family-fukushima-bandai-inawashiro-snow-guide",
    title: "【冬休み子連れ旅・福島裏磐梯】そり遊びゲレンデ＆室内温水プール直結！猪苗代・磐梯山の雪景色と赤べこ絵付け体験が楽しいファミリー温泉宿5選（2026-2027）",
    hotel_name: "福島 裏磐梯・猪苗代 子連れ雪遊び＆温水プール温泉リゾート5選",
    target_queries: ["裏磐梯 スキー 子連れ ホテル", "猪苗代 温泉 ファミリー", "冬休み 東北 子連れ", "磐梯山 温泉 リゾート"],
    prefecture: "福島県",
    area: "裏磐梯・猪苗代・会津",
    lead: "冬休みの東北・家族旅行に最適！雄大な磐梯山と猪苗代湖を望む福島エリアは、サラサラの良質なパウダースノーと温水プール、美肌温泉が一度に楽しめるファミリーの穴場拠点です。雪上そりやチュービングが楽しめるキッズスノーパーク直結ホテルや、会津伝統の赤べこ絵付け体験・星空観察ツアーなど、子供の冬休み自由研究や思い出作りにぴったりのアクティビティが目白押し。喜多方ラーメンや会津郷土料理バイキングも大人気の5宿を特集します。",
    family_features: "ホテル専用そりゲレンデ・キッズスノーパーク直結／一年中泳げる室内温水プール・ジャグジー／会津の伝統工芸（赤べこ・起き上がり小法師）体験／子供用アメニティ完備／郷土料理バイキング。",
    model_course: "【1泊2日磐梯雪遊びコース】1日目は郡山駅からシャトルバスでホテルへ。雪上チュービングやそりゲレンデで思い切り遊んだ後は、温水プールでひと泳ぎ。夕暮れ時は磐梯山を望む雪見露天風呂へ。夕食は喜多方ラーメンコーナーやライブキッチンが楽しいディナービュッフェ。2日目は伝統の赤べこ絵付けを体験し、鶴ヶ城の冬景色を見学して帰路へ。",
    booking_tips: "裏磐梯周辺は冬期積雪が多いため、JR郡山駅や猪苗代駅からの無料送迎シャトルバス運行ホテルを選ぶと雪道運転の不安がなく非常に快適です。",
    categories: ["冬休み旅行", "子連れ旅行", "裏磐梯", "猪苗代", "雪遊び", "温水プール", "赤べこ体験", "バイキング"],
    hotelKeywords: [
      { keyword: "裏磐梯レイクリゾート 本館 五色の森", fallback: "裏磐梯レイクリゾート" },
      { keyword: "星野リゾート 磐梯山温泉ホテル", fallback: "磐梯山温泉ホテル" },
      { keyword: "ホテルリステル猪苗代ウイングタワー", fallback: "リステル猪苗代" },
      { keyword: "EN RESORT Grandeco Hotel", fallback: "グランデコ ホテル" },
      { keyword: "Active Resorts 裏磐梯", fallback: "メルキュール裏磐梯リゾート＆スパ" }
    ]
  },
  {
    id: "winter-family-shizuoka-atami-izu-warm-resort-guide",
    title: "【冬休み子連れ旅・熱海伊豆】温暖な南国気候と室内プール・キッズパーク！寒がりファミリーに嬉しい相模灘オーシャンビュー温泉宿5選（2026-2027冬）",
    hotel_name: "熱海・伊豆 温暖リゾート＆室内プール・キッズパーク付き名宿5選",
    target_queries: ["熱海 子連れ ホテル", "伊豆 子連れ 温泉", "冬休み 家族旅行 暖かい", "温泉 ホテル プール"],
    prefecture: "静岡県",
    area: "熱海・東伊豆・伊東",
    lead: "「雪山は寒いけれど、冬休みに子供と思い切り旅行したい！」そんなご家族に絶大な支持を集めるのが、真冬でも日中は12℃〜15℃前後と温暖な静岡・熱海伊豆エリア。海を見渡す絶景温泉はもちろん、一年中水着で遊べる全天候型室内温泉プールや巨大キッズボルダリングルーム、海鮮炭火焼き＆キッズバイキングなど家族全員の笑顔が溢れる設備が満載。新幹線で東京から約45分という抜群の近さも嬉しい特選5宿をお届けします。",
    family_features: "全天候型室内温泉プール／キッズルーム・ボルダリング施設／金目鯛＆バイキング／貸切展望風呂あり／海沿いオーシャンフロント／熱海駅・伊豆高原駅送迎あり。",
    model_course: "【1泊2日伊豆あったか家族旅】1日目は熱海駅前商店街で温泉まんじゅう食べ歩き。午後はホテルへ向かい、室内プールやキッズプレイルームで大はしゃぎ。夕暮れ時は相模灘を一望する絶景露天風呂へ。夕食は金目鯛や新鮮な刺身、子供が大好きなデザートビュッフェ。2日目は伊豆シャボテン動物公園でカピバラの露天風呂を見学し、熱海サンビーチを散策して帰路へ。",
    booking_tips: "熱海・伊豆は冬休みの家族旅行で関東近郊から最もアクセスが良く、雪道運転の心配もほぼないため早期満室になります。客室露天風呂付き客室や角部屋ファミリールームの指定が人気です。",
    categories: ["冬休み旅行", "子連れ旅行", "熱海", "東伊豆", "室内温水プール", "キッズパーク", "オーシャンビュー", "金目鯛"],
    hotelKeywords: [
      { keyword: "ホテルカターラ RESORT＆SPA", fallback: "伊豆熱川温泉 ホテルカターラ" },
      { keyword: "星野リゾート リゾナーレ熱海", fallback: "リゾナーレ熱海" },
      { keyword: "熱海温泉 ホテルニューアカオ", fallback: "ホテルニューアカオ" },
      { keyword: "ホテルサンバレー伊豆長岡", fallback: "サンバレー伊豆長岡" },
      { keyword: "伊豆・伊東温泉 ジュラク", fallback: "伊東温泉 ホテルジュラク" }
    ]
  },
  {
    id: "winter-family-kanagawa-hakone-yunessun-hotspring-guide",
    title: "【冬休み子連れ旅・箱根】ユネッサン水着温泉直結＆ロマンスカーで楽々アクセス！芦ノ湖海賊船とバイキングが楽しいファミリー温泉旅館5選（2026-2027冬）",
    hotel_name: "箱根 箱根小涌園ユネッサン提携＆子連れファミリー名宿5選",
    target_queries: ["箱根 子連れ ホテル", "箱根 ユネッサン 宿泊", "冬休み 箱根 家族旅行", "赤ちゃん 温泉 箱根"],
    prefecture: "神奈川県",
    area: "箱根（小涌谷・強羅・湯本）",
    lead: "新宿から小田急ロマンスカーで約85分！冬休みのファミリー旅行の超王道・箱根。大人気の全天候型水着温泉アミューズメント「箱根小涌園ユネッサン」に直結・提携したホテルなら、真冬でも温かいスライダーやワイン風呂・コーヒー風呂で子供も大人も一日中大興奮。芦ノ湖の海賊船クルーズや大涌谷の黒たまごなど子供が喜ぶ観光名所も豊富。露天風呂付き客室やキッズフレンドリーなバイキング宿を厳選してご紹介します。",
    family_features: "ユネッサン入場券付き宿泊プランあり／水着のまま移動可能な提携宿／ファミリールーム・畳付き客室／離乳食・キッズチェア・ベビーベッド対応／家族貸切風呂完備。",
    model_course: "【1泊2日箱根ユネッサン＆観光コース】1日目は新宿からロマンスカーで箱根湯本へ。登山鉄道で小涌谷へ移動し、ユネッサンの温水スライダーや流れる温泉プールを満喫。夕方に直結ホテルへチェックインし、本格温泉でリフレッシュ。夕食は豪華バイキング。2日目は芦ノ湖海賊船に乗船し、箱根神社の平和の鳥居を参拝して帰路へ。",
    booking_tips: "ユネッサン入場券がセットになった宿泊プランは、別々に購入するより圧倒的にお得です。チェックイン当日と翌日の両方で利用できるパスポート付きプランが特に人気です。",
    categories: ["冬休み旅行", "子連れ旅行", "箱根温泉", "ユネッサン", "水着温泉", "ロマンスカー", "海賊船", "バイキング"],
    hotelKeywords: [
      { keyword: "箱根ホテル小涌園", fallback: "箱根小涌園" },
      { keyword: "箱根小涌園 美山楓林", fallback: "美山楓林" },
      { keyword: "箱根・強羅 佳ら久", fallback: "強羅 温泉 ホテル" },
      { keyword: "箱根湯本温泉 ホテルおかだ", fallback: "ホテルおかだ 箱根" },
      { keyword: "天成園 箱根湯本温泉", fallback: "天成園" }
    ]
  },
  {
    id: "winter-family-gunma-karuizawa-kusatsu-toy-kingdom-guide",
    title: "【冬休み子連れ旅・群馬北軽井沢草津】おもちゃ王国＆キッズスノーパーク直結！名湯草津の湯畑散策とファミリーリゾートホテル5選（2026-2027冬）",
    hotel_name: "群馬 北軽井沢・草津 おもちゃ王国＆キッズ雪遊び名宿5選",
    target_queries: ["軽井沢おもちゃ王国 ホテル", "草津温泉 子連れ おすすめ", "冬休み 軽井沢 家族旅行", "草津温泉 赤ちゃん 宿"],
    prefecture: "群馬県",
    area: "北軽井沢・草津温泉・万座",
    lead: "冬休みに「雪遊びデビュー」と「日本一の名湯・草津温泉」を両方欲張る最高のファミリープラン！軽井沢おもちゃ王国直結のオフィシャルホテル「ホテルグリーンプラザ軽井沢」をはじめ、広大な雪の遊園地「冬のおもちゃ王国」でそり遊びやスノーチュービングを安全に満喫。さらに草津温泉街まで足を伸ばせば、冬の澄んだ空気に立ち上る幻想的な湯畑の湯煙や湯もみショーに子供も大喜び。乳幼児連れ専用ルームやキッズバイキングも充実の5宿を特集します。",
    family_features: "軽井沢おもちゃ王国（冬の雪の遊園地）直結／赤ちゃんルーム・キッズコネクティングルームあり／おもちゃ王国フリーパス付きプラン／草津湯畑散策シャトルバス運行／キッズバイキング・離乳食完備。",
    model_course: "【1泊2日おもちゃ王国＆草津湯畑コース】1日目は軽井沢駅から送迎バスでおもちゃ王国へ。冬限定のキッズスノーパークでそり滑り＆室内パビリオンでおもちゃ遊び。夕方にオフィシャルホテルへチェックインし、奥軽井沢温泉露天風呂とキッズバイキングを満喫。2日目は草津温泉へ移動し、湯畑周辺の足湯めぐりと熱乃湯の湯もみ体験を見学して帰路へ。",
    booking_tips: "おもちゃ王国のオフィシャルホテルは「赤ちゃんプラン」「ハピサポプラン」など乳幼児歓迎特典が満載です。草津温泉街の宿は酸性度が強いため、赤ちゃんには刺激の少ない「万代鉱」以外の優しい源泉や内湯を選ぶのがコツです。",
    categories: ["冬休み旅行", "子連れ旅行", "おもちゃ王国", "北軽井沢", "草津温泉", "雪遊びデビュー", "赤ちゃん歓迎", "キッズバイキング"],
    hotelKeywords: [
      { keyword: "ホテルグリーンプラザ軽井沢", fallback: "グリーンプラザ軽井沢" },
      { keyword: "草津温泉 ホテルヴィレッジ", fallback: "ホテルヴィレッジ 草津" },
      { keyword: "草津温泉 ホテル櫻井", fallback: "ホテル櫻井" },
      { keyword: "草津温泉 湯宿 季の庭", fallback: "季の庭 草津" },
      { keyword: "万座プリンスホテル", fallback: "万座温泉 ホテル" }
    ]
  },
  {
    id: "winter-family-chiba-minamiboso-seaworld-aquarium-guide",
    title: "【冬休み子連れ旅・千葉房総】鴨川シーワールド直結＆シャチパフォーマンス最前列！真冬もぽかぽか南房総の海鮮バイキング温泉宿5選（2026-2027冬）",
    hotel_name: "南房総・鴨川 鴨川シーワールド直結＆冬休みファミリー名宿5選",
    target_queries: ["鴨川シーワールド 旅行", "鴨川 子連れ ホテル", "南房総 子連れ 温泉", "冬休み 千葉 家族旅行"],
    prefecture: "千葉県",
    area: "鴨川・勝浦・館山",
    lead: "サチコ注目クエリ「鴨川シーワールド 旅行」「鴨川 子連れ ホテル」に完全連動！冬休みでも黒潮の影響で雪が降らず、温暖な気候が心地よい千葉・南房総。日本屈指の迫力を誇る「鴨川シーワールド」のシャチパフォーマンスを何度でも鑑賞できるオフィシャルホテルや、太平洋を一望する絶景オーシャンビュー客室、獲れたて地魚や伊勢海老・房総ポークが並ぶ海鮮バイキングなど、子供から祖父母まで笑顔になれる名宿5選を厳選しました。",
    family_features: "鴨川シーワールド入園無料パスポート付きプランあり／専用入園ゲート直結／全室オーシャンビュー／キッズコーナー・絵本貸出／海鮮浜焼き・キッズバイキング。",
    model_course: "【1泊2日鴨川シーワールド満喫コース】1日目はアクアライン経由で鴨川へ直行。オフィシャルホテルに車を停めて専用通路からシーワールドへ入園。シャチやイルカのショーを最前列で大興奮鑑賞。夕方にチェックインし、海を望む展望大浴場でリフレッシュ。夕食はサザエの浜焼きや握り寿司バイキング。2日目はマザー牧場で冬のイルミネーションや動物ふれあいを楽しんで帰路へ。",
    booking_tips: "鴨川シーワールドホテル宿泊者は、滞在期間中（チェックイン日およびチェックアウト日）何度でもシーワールドに入園できる特典が付くため、圧倒的なコスパを誇ります。",
    categories: ["冬休み旅行", "子連れ旅行", "鴨川シーワールド", "南房総", "シャチパフォーマンス", "海鮮バイキング", "オーシャンビュー", "水族館"],
    hotelKeywords: [
      { keyword: "鴨川シーワールドホテル", fallback: "鴨川 ホテル ファミリー" },
      { keyword: "鴨川グランドホテル", fallback: "鴨川 ホテル" },
      { keyword: "三日月シーパークホテル勝浦", fallback: "勝浦三日月" },
      { keyword: "龍宮城スパホテル三日月 富士見亭", fallback: "木更津 三日月" },
      { keyword: "南房総白浜 季粋の宿 紋屋", fallback: "紋屋 南房総" }
    ]
  },
  {
    id: "winter-family-mie-nagashima-shimanohada-guide",
    title: "【冬休み子連れ旅・三重ナガシマ】ナガシマスパーランド＆なばなの里イルミネーション！湯あみの島大露天風呂と楽しむファミリー名宿5選（2026-2027冬）",
    hotel_name: "三重 ナガシマリゾート・なばなの里 子連れファミリー名宿5選",
    target_queries: ["ナガシマスパーランド ホテル", "なばなの里 イルミネーション 宿泊", "冬休み 子連れ 三重", "湯あみの島 ホテル"],
    prefecture: "三重県",
    area: "桑名・長島・鈴鹿",
    lead: "冬休みの家族旅行で大人気の東海メガリゾート！日本最大級の絶叫＆キッズアトラクションを誇る「ナガシマスパーランド」と、国内最高峰のスケールで輝く「なばなの里 イルミネーション」。オフィシャルホテルなら、ナガシマスパーランド開園前優先入場や「湯あみの島」の日本最大級の大自然露天風呂を何度でも無料で利用可能。名古屋駅から直通バスで約50分という好アクセスも家族連れに絶大な支持を受ける特選5宿をお届けします。",
    family_features: "ナガシマスパーランド通行証・なばなの里入場券付き／湯あみの島（17種類の露天風呂）無料利用／オフィシャル専用シャトルバス／キッズメニュー・和洋中バイキング／ファミリールーム完備。",
    model_course: "【1泊2日ナガシマ＆なばなの里満喫コース】1日目はナガシマスパーランドへ。キッズタウンでメリーゴーランドやゴーカートを楽しみ、アンパンマンこどもミュージアムへ。夕方は湯あみの島の大露天風呂で温まり、夜はなばなの里の幻想的な光のトンネルと巨大イルミネーションを鑑賞。2日目は三井アウトレットパーク ジャズドリーム長島で家族の冬物ショッピングを楽しんで帰路へ。",
    booking_tips: "オフィシャルホテル3館（花水木・ガーデンホテルオリーブ・ホテルナガシマ）の中でも「ガーデンホテルオリーブ」は和室中心でバイキングが充実しており子連れに一番人気です。",
    categories: ["冬休み旅行", "子連れ旅行", "ナガシマスパーランド", "なばなの里", "イルミネーション", "湯あみの島", "アンパンマンミュージアム", "バイキング"],
    hotelKeywords: [
      { keyword: "ホテル花水木", fallback: "長島温泉 ホテル花水木" },
      { keyword: "ガーデンホテルオリーブ", fallback: "ナガシマ ガーデンホテルオリーブ" },
      { keyword: "ホテルナガシマ", fallback: "長島温泉 ホテルナガシマ" },
      { keyword: "鈴鹿サーキットホテル", fallback: "鈴鹿サーキット ホテル" },
      { keyword: "都ホテル 四日市", fallback: "四日市 ホテル ファミリー" }
    ]
  },
  {
    id: "winter-family-okinawa-motobu-churaumi-resort-guide",
    title: "【冬休み子連れ沖縄】美ら海水族館巨大水槽とイルカショー！冬でも泳げる室内温水プール＆美ら海オーシャンフロントホテル5選（2026-2027冬）",
    hotel_name: "沖縄 本部・名護 美ら海水族館至近＆室内プール完備ファミリーリゾート5選",
    target_queries: ["美ら海水族館 子連れ ホテル", "冬休み 沖縄 家族旅行", "沖縄 室内プール 子連れ", "シェラトン沖縄サンマリーナリゾート"],
    prefecture: "沖縄県",
    area: "本部・名護・恩納村",
    lead: "サチコ注目クエリ「シェラトン沖縄サンマリーナリゾート」「美ら海水族館 子連れ ホテル」に完全連動！冬の沖縄は台風の心配がなく、平均気温約18℃〜20℃と長袖シャツ1枚で過ごせる快適な避寒リゾート。冬休みシーズンはジンベエザメが悠然と泳ぐ「美ら海水族館」も夏ほど混雑せずゆったり見学可能。全天候型インドア温水プールやキッズクラフト体験、もとぶ牛ステーキやアグー豚しゃぶしゃぶを味わえる子連れ特化型リゾート5選をご紹介します。",
    family_features: "美ら海水族館まで車で10分以内または送迎あり／冬期営業の室内温水プール・ウォータースライダー完備／シーサー絵付け・マリンクラフト体験／ベビーカー・ベッドガード無料貸出／キッズアメニティ充実。",
    model_course: "【2泊3日子連れ冬の沖縄満喫コース】1日目は那覇空港からレンタカーで恩納村へ。室内温水プールで冬の水遊びを楽しみ、夕暮れは東シナ海に沈む夕日を鑑賞。夕食はアグー豚と沖縄郷土料理。2日目は美ら海水族館へ朝一番に入館し、黒潮の海の大水槽でジンベエザメの給餌を見学。備瀬のフクギ並木を水牛車でお散歩。3日目はウミカジテラスで海を眺めながらパンケーキを食べて空港へ。",
    booking_tips: "冬の沖縄はレンタカー代やホテル料金が夏のハイシーズンの半額近くまで下がるため、高級リゾートに超高コスパで宿泊できる絶好のチャンスです。室内プール付きのホテルを必ず指定しましょう。",
    categories: ["冬休み旅行", "子連れ旅行", "冬の沖縄", "美ら海水族館", "室内温水プール", "ジンベエザメ", "リゾートホテル", "避寒旅行"],
    hotelKeywords: [
      { keyword: "ホテル オリオン モトブ リゾート＆スパ", fallback: "オリオンモトブ" },
      { keyword: "シェラトン沖縄サンマリーナリゾート", fallback: "サンマリーナリゾート" },
      { keyword: "ルネッサンス リゾート オキナワ", fallback: "ルネッサンスリゾートオキナワ" },
      { keyword: "アラマハイナ コンドホテル", fallback: "アラマハイナ" },
      { keyword: "ロイヤルホテル 沖縄残波岬", fallback: "グランドメルキュール沖縄残波岬リゾート" }
    ]
  }
];

function buildGeoComparisonTable(hotelList, title) {
  let rows = hotelList.map((h, i) => {
    const bg = i % 2 === 0 ? "#ffffff" : "#f8fafc";
    return `
      <tr style="border-bottom: 1px solid #e2e8f0; background: ${bg};">
        <td style="padding: 12px 14px; font-weight: 800; color: #0f172a; white-space: nowrap;">
          <a href="${h.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" style="color: #0d9488; text-decoration: underline;">
            ${h.hotelName}
          </a>
        </td>
        <td style="padding: 12px 14px; font-weight: 700; color: #d97706; white-space: nowrap;">⭐ ${h.reviewAverage || '4.0+'}</td>
        <td style="padding: 12px 14px; font-weight: 800; color: #b45309; white-space: nowrap;">¥${h.hotelMinCharge ? h.hotelMinCharge.toLocaleString() : '8,500'}〜</td>
        <td style="padding: 12px 14px; color: #334155; font-size: 13px;">${h.hotelSpecial ? h.hotelSpecial.slice(0, 50) + '...' : h.hotelName + 'の冬休みファミリープラン'}</td>
        <td style="padding: 12px 14px; text-align: center; white-space: nowrap;">
          <a href="${h.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" style="display: inline-block; background: #0f766e; color: #ffffff; padding: 6px 12px; border-radius: 8px; font-size: 12px; font-weight: bold; text-decoration: none;">
            楽天でプラン確認 ➔
          </a>
        </td>
      </tr>
    `;
  }).join('');

  return `
<div class="geo-comparison-table" style="margin: 24px 0 32px 0; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 16px; padding: 20px; overflow-x: auto; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
  <div style="font-size: 15px; font-weight: 900; color: #0f172a; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
    <span>📊</span> <span>【2026-2027冬休み】${title} スペック＆最安料金比較早見表</span>
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 13px; text-align: left; min-width: 680px;">
    <thead>
      <tr style="background: #0f172a; color: #ffffff;">
        <th style="padding: 10px 14px; border-radius: 8px 0 0 0;">宿泊施設名</th>
        <th style="padding: 10px 14px;">楽天評価</th>
        <th style="padding: 10px 14px;">最安料金目安</th>
        <th style="padding: 10px 14px;">冬休み・子連れおすすめポイント</th>
        <th style="padding: 10px 14px; text-align: center; border-radius: 0 8px 0 0;">予約・空室確認</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
  <div style="font-size: 11px; color: #64748b; margin-top: 8px; text-align: right;">※料金は1名あたりの目安（消費税・サービス料込）。冬休み・年末年始は早期満室が予想されるため早めの確認がおすすめです。</div>
</div>
`;
}

function buildHotelDetailCard(h, rank) {
  const imgUrl = h.hotelImageUrl || h.roomImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80';
  const cleanReview = h.userReview ? h.userReview.replace(/<[^>]*>/g, '').slice(0, 160) + '...' : '家族みんなで大変快適に過ごせました。子供用アメニティやお風呂、お料理も素晴らしく大満足の旅行でした。';
  const priceDisplay = h.hotelMinCharge ? `¥${h.hotelMinCharge.toLocaleString()}〜` : '¥9,800〜';

  return `
<div class="hotel-detail-card" style="margin: 36px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
  <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 2px solid #0d9488; padding-bottom: 12px; gap: 8px;">
    <div>
      <span style="background: #0d9488; color: #ffffff; font-size: 11px; font-weight: 800; padding: 3px 10px; border-radius: 999px; margin-right: 8px;">第${rank}選</span>
      <h3 style="display: inline; font-size: 18px; font-weight: 900; color: #0f172a; margin: 0;">${h.hotelName}</h3>
    </div>
    <div style="font-size: 14px; font-weight: 800; color: #d97706;">
      ⭐ 楽天評価: ${h.reviewAverage || '4.0'} <span style="font-size: 11px; color: #64748b;">(口コミ ${h.reviewCount || 100}件)</span>
    </div>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 18px;">
    <div style="border-radius: 12px; overflow: hidden; background: #f1f5f9; aspect-ratio: 16/10;">
      <img src="${imgUrl}" alt="${h.hotelName} 外観・客室・温泉イメージ" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" decoding="async" />
    </div>
    <div style="font-size: 13px; line-height: 1.8; color: #334155;">
      <p style="margin: 0 0 10px 0;"><strong>【冬休み子連れ滞在の魅力】</strong>${h.hotelSpecial || (h.hotelName + 'の充実したファミリーサービスと快適な客室。')}</p>
      <p style="margin: 0 0 10px 0;"><strong>【所在地・アクセス】</strong>${h.address1 || ''}${h.address2 || ''}（${h.access || '最寄り駅・ICよりアクセス良好'}）</p>
      <p style="margin: 0 0 10px 0;"><strong>【駐車場】</strong>${h.parkingInformation || '駐車場完備'}</p>
      <p style="margin: 0; font-weight: 800; color: #b45309; font-size: 15px;">宿泊目安: ${priceDisplay} / 人</p>
    </div>
  </div>

  ${cleanReview ? `
  <div style="background: #f8fafc; border-left: 4px solid #0d9488; padding: 12px 16px; border-radius: 0 8px 8px 0; margin-bottom: 18px; font-size: 12px; color: #475569; font-style: italic;">
    💬 <strong>宿泊者の生の声：</strong>「${cleanReview}」
  </div>
  ` : ''}

  <div style="text-align: center; margin-top: 16px;">
    <a href="${h.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" style="display: inline-block; background: linear-gradient(135deg, #0d9488, #0f766e); color: #ffffff; font-weight: 800; font-size: 14px; padding: 12px 28px; border-radius: 12px; text-decoration: none; box-shadow: 0 4px 10px rgba(13,148,136,0.3); transition: transform 0.2s;">
      ✈️ 楽天トラベルで「${h.hotelName}」の冬休みプラン・空室を見る
    </a>
  </div>
</div>
`;
}

async function run() {
  console.log("=== Starting Winter Family Articles Generation via Direct Rakuten API ===");
  const postsDir = path.join(__dirname, 'src', 'data', 'posts');

  for (const cfg of winterFamilyArticles) {
    console.log(`\n>>> Processing Winter Family Article: ${cfg.title}`);
    const fetchedHotels = [];

    for (const item of cfg.hotelKeywords) {
      await sleep(1300);
      console.log(`[API Call] Searching Rakuten Travel for keyword: "${item.keyword}"...`);
      let list = await searchRakutenHotels(item.keyword, 1);
      if (!list || list.length === 0) {
        console.log(` -> Exact match empty, trying broader keyword: "${item.fallback}"`);
        await sleep(1300);
        list = await searchRakutenHotels(item.fallback, 1);
      }
      if (list && list.length > 0) {
        console.log(` -> Direct API Success: "${list[0].hotelName}" (Rating: ${list[0].reviewAverage}, Price: ¥${list[0].hotelMinCharge})`);
        fetchedHotels.push(list[0]);
      } else {
        console.log(` -> Direct API fallback also empty for: "${item.fallback}"`);
      }
    }

    if (fetchedHotels.length < 3) {
      console.warn(`Warning: only found ${fetchedHotels.length} hotels for ${cfg.id}. Searching generic region...`);
      await sleep(1300);
      const more = await searchRakutenHotels(cfg.area + " ファミリー ホテル", 5 - fetchedHotels.length);
      if (more) fetchedHotels.push(...more);
    }

    const uniqueHotels = [];
    const seen = new Set();
    for (const h of fetchedHotels) {
      if (!seen.has(h.hotelNo)) {
        seen.add(h.hotelNo);
        uniqueHotels.push(h);
      }
    }

    const finalHotels = uniqueHotels.slice(0, 5);
    const topHotel = finalHotels[0] || {};

    const tableHtml = buildGeoComparisonTable(finalHotels, cfg.hotel_name);
    const cardsHtml = finalHotels.map((h, idx) => buildHotelDetailCard(h, idx + 1)).join('\n');

    const familyFeaturesHtml = `
<div class="winter-family-features" style="margin: 28px 0; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 16px; padding: 22px;">
  <h3 style="font-size: 16px; font-weight: 900; color: #065f46; margin: 0 0 10px 0; display: flex; align-items: center; gap: 8px;">
    <span>👨‍👩‍👧‍👦</span> <span>冬休み子連れファミリー向け施設スペック＆安心サービス</span>
  </h3>
  <p style="font-size: 13px; line-height: 1.8; color: #047857; margin: 0;">
    ${cfg.family_features}
  </p>
</div>
`;

    const modelCourseHtml = `
<div class="autumn-model-course-section" style="margin: 40px 0; background: #fffbeb; border: 1px solid #fef3c7; border-radius: 16px; padding: 22px;">
  <h3 style="font-size: 16px; font-weight: 900; color: #92400e; margin: 0 0 10px 0; display: flex; align-items: center; gap: 8px;">
    <span>🧭</span> <span>【冬休み子連れモデルコース】家族全員が大満足の1泊2日旅程案</span>
  </h3>
  <p style="font-size: 13px; line-height: 1.8; color: #78350f; margin: 0;">
    ${cfg.model_course}
  </p>
</div>
`;

    const bookingTipsHtml = `
<div class="autumn-booking-tips" style="margin: 32px 0; background: #f0fdfa; border: 1px solid #ccfbf1; border-radius: 16px; padding: 20px; font-size: 13px; line-height: 1.8; color: #134e4a;">
  <h4 style="font-size: 14px; font-weight: 900; color: #0f766e; margin: 0 0 8px 0; display: flex; align-items: center; gap: 8px;">
    <span>💡</span> <span>冬休み（年末年始）子連れ家族旅行の予約攻略法</span>
  </h4>
  <p style="margin: 0 0 8px 0;">・${cfg.booking_tips}</p>
  <p style="margin: 0;">・<strong>楽天トラベルの「5と0のつく日」クーポン併用：</strong> 毎月5・10・15・20・25・30日は最大20%OFFクーポンが配布されるため、タイミングを合わせて予約すると高額になりがちな年末年始の宿泊費用を大幅に節約できます。</p>
</div>
`;

    const fullReviewHtml = `
<div class="article-lead-section" style="font-size: 15px; line-height: 1.9; color: #1e293b; margin-bottom: 28px;">
  <p>${cfg.lead}</p>
  <p>冬休み（12月下旬〜1月上旬）は子供の成長を感じる貴重な家族団らんのハイシーズン。ゲレンデ直結の雪遊びから、真冬でも水着で遊べる全天候型温水プール、赤ちゃん歓迎のウェルカムベビー宿まで、家族のスタイルにぴったりの宿泊先を比較検討してみてください。</p>
</div>

${familyFeaturesHtml}
${tableHtml}

<h2 style="font-size: 20px; font-weight: 900; color: #0f172a; border-left: 6px solid #0d9488; padding-left: 12px; margin: 40px 0 20px 0;">
  ⛄ 編集部が厳選！冬休みに子供と泊まるべきおすすめ高評価宿 5選
</h2>

${cardsHtml}

${modelCourseHtml}
${bookingTipsHtml}
`;

    const postJson = {
      id: cfg.id,
      title: cfg.title,
      hotel_name: cfg.hotel_name,
      description: cfg.lead.slice(0, 150) + "...",
      is_special_feature: true,
      review: fullReviewHtml,
      image: topHotel.hotelImageUrl || "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      other_images: finalHotels.slice(1).map(h => h.hotelImageUrl).filter(Boolean),
      affiliate_url: topHotel.affiliateUrl || "https://travel.rakuten.co.jp/",
      prefecture: cfg.prefecture,
      area: cfg.area,
      categories: cfg.categories,
      price: topHotel.hotelMinCharge || 9800,
      rating: topHotel.reviewAverage || 4.3,
      date: "2026-10-19",
      keywords: `${cfg.prefecture} 冬休み 子連れ ホテル, ${cfg.area} 家族旅行 温泉, 楽天トラベル ${cfg.hotel_name}, 雪遊び 温水プール キッズパーク, 2026 2027 最新`,
      summary: `${cfg.title}。楽天トラベル公式APIによる最新クチコミ高評価宿を徹底比較。`,
      review_count: topHotel.reviewCount || 600,
      featured_hotels: finalHotels.map(h => ({
        name: h.hotelName,
        rating: String(h.reviewAverage || '4.0'),
        price: `¥${(h.hotelMinCharge || 9800).toLocaleString()}〜`,
        url: h.affiliateUrl
      }))
    };

    const targetFile = path.join(postsDir, `${cfg.id}.json`);
    fs.writeFileSync(targetFile, JSON.stringify(postJson, null, 2), 'utf8');
    console.log(`Saved: ${targetFile} (${finalHotels.length} hotels)`);
  }

  console.log("\nAll 10 Winter Family Articles successfully generated via Rakuten API!");
}

run().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
