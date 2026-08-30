const fs = require('fs');
const path = require('path');

const microWave15Configs = [
  {
    slug: 'shizuoka-hamanako-kanzanji-unagi-stay',
    badge: 'HAMANAKO & KANZANJI GUIDE',
    title: '【静岡・浜名湖＆舘山寺温泉】湖畔パノラマ・ロープウェイ＆浜名湖うなぎ宿 完全ガイド',
    metaDesc: '汽水湖の恵みと湖上パノラマ・静岡浜名湖＆舘山寺温泉エリア完全特化！日本唯一の湖上かんざんじロープウェイ、浜名湖遊覧船、はままつフラワーパーク、名物「浜名湖うなぎ蒲焼き・ひつまぶし宿」を徹底解説。',
    heroDesc: '海と淡水が交わる豊かな汽水湖「浜名湖」と、湖畔に湧く名湯「舘山寺（かんざんじ）温泉」。日本唯一の湖上ロープウェイから見下ろす360度大パノラマ。香ばしい煙を上げる本場の「浜名湖うなぎ」と浜松餃子を味わう旅。',
    categoryKey: 'shizuoka-hamanako-kanzanji-unagi-stay',
    areaGuides: [
      {
        key: 'kanzanji_lake_view_onsen',
        title: '1. 舘山寺温泉〜浜名湖畔（ダイナミックな夕陽とナトリウム・カルシウム強塩温泉）',
        timing: '通年（浜名湖に沈む夕陽パノラマが美しい黄昏時）',
        desc: '昭和33年開湯、浜名湖の東北岸に突き出た庄内半島に位置する「舘山寺温泉」。弘法大師ゆかりの舘山寺や愛宕神社が鎮座する舘山遊歩道散策。塩分濃度が高く保温効果に優れた美肌の湯に浸かりながら望む湖面のきらめき。',
        spots: '舘山寺（聖観世音菩薩・舘山遊歩道）、舘山寺サンビーチ、浜名湖遊覧船乗り場、足湯「水神の松」',
        access: 'JR東海道新幹線・東海道本線「浜松駅」より路線バスで約45分。東名高速「舘山寺スマートIC」より約5分。',
        tip: '舘山寺温泉街の遊歩道「舘山」山頂の展望台からは、浜名湖の複雑な入り江と東名高速道路の浜名湖橋を一望できます。'
      },
      {
        key: 'hamanako_ropeway_resort_stay',
        title: '2. かんざんじロープウェイ〜大草山・フラワーパーク（日本唯一の湖上横断空中散歩）',
        timing: '通年（春のはままつフラワーパーク桜＆チューリップまつりは圧巻）',
        desc: '浜名湖パルパルから大草山展望台まで湖上を渡る「かんざんじロープウェイ」。360度ガラス張りのゴンドラから見下ろす湖上景観。四季折々の花が咲き誇る「はままつフラワーパーク」や「はままつフルーツパーク時之栖」。',
        spots: 'かんざんじロープウェイ、大草山展望台（浜名湖オルゴールミュージアム）、はままつフラワーパーク、うなぎパイファクトリー',
        access: 'かんざんじ温泉エリア。',
        tip: '「うなぎパイファクトリー」は入場無料で見学でき、工場直売の限定スイーツやうなぎパイのお土産が手に入ります。'
      },
      {
        key: 'hamanako_unagi_gyoza_gourmet',
        title: '3. 本場「浜名湖うなぎ」＆浜松餃子（100年以上の養殖歴史を誇る極上の香ばしさ）',
        timing: '通年（夏バテ防止の夏・脂が乗る秋〜冬）',
        desc: '浜名湖のミネラル豊富な地下水で育てられる肉厚でふっくらした「浜名湖うなぎ」。秘伝のタレで香ばしく焼き上げる蒲焼き・白焼き・ひつまぶし。キャベツの甘みと豚肉の旨味が詰まった円形焼きの「浜松餃子（もやし添え）」。',
        spots: '浜名湖うなぎ専門店、浜松餃子学会認定店、弁天島海浜公園（赤鳥居）',
        access: '浜松・浜名湖周辺。',
        tip: '浜松餃子は円形に焼いて中央に茹でもやしを添えるのが伝統で、箸休めのもやしと一緒に食べると何個でも食べられます。'
      }
    ]
  },
  {
    slug: 'aichi-chita-minamichita-himakajima-stay',
    badge: 'CHITA & HIMAKAJIMA GUIDE',
    title: '【愛知・知多半島＆南知多温泉郷】内海千鳥ヶ浜・日間賀島タコふぐ＆知多牛宿 完全ガイド',
    metaDesc: '伊勢湾と三河湾に囲まれた海の楽園・愛知知多半島＆南知多温泉郷エリア完全特化！日本の渚百選「内海千鳥ヶ浜」、タコとフグの島「日間賀島」、野間灯台の夕陽、源泉かけ流し南知多温泉、知多牛＆伊勢湾活魚宿を徹底解説。',
    heroDesc: '名古屋から約50分、伊勢湾の潮風が心地よい海の特等席「知多半島＆南知多温泉郷」。日本の渚百選「内海千鳥ヶ浜」の白砂青松。高速船で渡るタコの島「日間賀島」。名物たこ飯・冬のとらふぐ、銘柄牛「知多牛」を味わう海辺の旅。',
    categoryKey: 'aichi-chita-minamichita-himakajima-stay',
    areaGuides: [
      {
        key: 'minamichita_seaside_onsen_stay',
        title: '1. 内海千鳥ヶ浜〜野間埼灯台（白砂のビーチと伊勢湾に沈む黄金の夕陽）',
        timing: '通年（夏の海水浴・春〜秋のシーサイドドライブ）',
        desc: 'きめ細やかな白砂が美しい日本の渚百選「内海千鳥ヶ浜」。大正10年設置、愛知県最古の洋式灯台「野間埼灯台（のまとうだい）」に沈む感動的な夕陽。伊勢湾を行き交う大型船を眺めながら浸かる南知多温泉郷の名湯。',
        spots: '内海千鳥ヶ浜海水浴場、野間埼灯台（絆の鐘・南京錠）、つぶて浦（鳥居）、魚太郎（海鮮市場・浜焼きBBQ）',
        access: '名鉄知多新線「内海駅」下車。名古屋市内より車で知多半島道路経由約50分。',
        tip: '「魚太郎 本店」では、目の前の伊勢湾で水揚げされたばかりの新鮮な魚介をその場で選んで海沿いテラスで浜焼きBBQが楽しめます。'
      },
      {
        key: 'himakajima_tako_fugu_stay',
        title: '2. 日間賀島〜篠島（高速船でわずか10分！タコとフグとシラスの島巡り）',
        timing: '通年（冬期10月〜3月は日間賀島ふぐまつり）',
        desc: '師崎港や河和港から高速船で約10分の離島「日間賀島（ひまかじま）」。島の名物「多幸（タコ）」のモニュメントや名物タコの丸茹で。冬には下関に匹敵する極上の「日間賀島とらふぐ」。お隣の篠島（しのじま）の絶品生シラス丼。',
        spots: '日間賀島（西港タコモニュメント・ハイジのブランコ・サンライズビーチ）、篠島（サンサンビーチ・神宮干鯛）',
        access: '師崎港より名鉄海上観光船（高速船）で約10分。',
        tip: '日間賀島は外周約5.5kmの小さな島で、港前のレンタサイクルで爽快な潮風を感じながら1〜2時間で一周できます。'
      },
      {
        key: 'chita_beef_isewan_fish_stay',
        title: '3. ブランド「知多牛」＆伊勢湾活魚（黒毛和種とホルスタインの上質な旨味）',
        timing: '通年（柔らかい赤身と甘みのあるサシ）',
        desc: '知多半島の温暖な気候と清らかな水で育てられるブランド牛「知多牛（響・花乃牛）」。伊勢湾・三河湾で獲れる新鮮なアワビの踊り焼き、伊勢海老のお造り、大アサリの炭火焼き。海の恵みと大地の美味の競演。',
        spots: '知多牛ステーキ処、南知多活魚料理旅館、えびせんべいの里（工場見学・試食）',
        access: '南知多・美浜・常滑エリア。',
        tip: '「えびせんべいの里 美浜本店」では、数十種類のえびせんべいを無料で試食しながらお気に入りの味を見つけることができます。'
      }
    ]
  },
  {
    slug: 'hyogo-awaji-north-sumoto-onsen-stay',
    badge: 'AWAJI NORTH & SUMOTO GUIDE',
    title: '【兵庫・淡路島北部＆洲本温泉】明石海峡大橋・花さじき＆淡路牛・玉ねぎ宿 完全ガイド',
    metaDesc: '御食国の豊かな食とオーシャンビュー・淡路島北部＆洲本温泉エリア完全特化！明石海峡大橋ライトアップ、あわじ花さじき、淡路島国営明石海峡公園、洲本温泉の三名泉、最高級「淡路牛・淡路島玉ねぎ・由良ウニ宿」を徹底解説。',
    heroDesc: '神戸から明石海峡大橋を渡ってすぐのアイランドリゾート「淡路島」。四季の花々が海に向かって咲き誇る「あわじ花さじき」。紀淡海峡を望む老舗名湯「洲本温泉」。甘みたっぷりの淡路島玉ねぎと極上の淡路牛ステーキを堪能する旅。',
    categoryKey: 'hyogo-awaji-north-sumoto-onsen-stay',
    areaGuides: [
      {
        key: 'sumoto_onsen_ocean_luxury',
        title: '1. 洲本温泉〜三熊山・洲本城跡（紀淡海峡の水平線から昇る朝日と名湯）',
        timing: '通年（三河湾・紀淡海峡を一望するオーシャンビュー）',
        desc: '淡路島最大の温泉街「洲本温泉」。三熊山山頂にそびえる洲本城跡（国の史跡）から見下ろす洲本市街と大阪湾のパノラマ。アルカリ性単純温泉のやわらかな湯と、水平線から昇る朝日に包まれる海辺の名門旅館群。',
        spots: '洲本城跡（模擬天守・展望台）、大浜海水浴場（千本松原）、洲本レトロこみち、淡路島モンキーセンター',
        access: '神戸三宮・新神戸駅より高速バスで「洲本高速バスセンター」まで約80分。',
        tip: '洲本温泉の海岸沿いホテルでは、海に面したオープンテラス足湯やインフィニティ温泉露天風呂から絶景の朝焼けが楽しめます。'
      },
      {
        key: 'awaji_north_flower_resort',
        title: '2. 淡路島北部〜あわじ花さじき・ニジゲンノモリ（海と花のパノラマとアニメパーク）',
        timing: '通年（春の菜の花・夏のひまわり・秋のコスモス）',
        desc: '標高298mの丘陵地から大阪湾に向かって広がる15ヘクタールの花の大パノラマ「あわじ花さじき」。兵庫県立淡路島公園内の大人気アニメパーク「ニジゲンノモリ」。「淡路ハイウェイオアシス」から望む明石海峡大橋。',
        spots: 'あわじ花さじき、ニジゲンノモリ（ドラゴンクエスト・NARUTO・ゴジラ）、淡路サービスエリア（大観覧車・恋人の聖地）',
        access: '淡路ICより車で約10〜15分。',
        tip: '「あわじ花さじき」の展望デッキからは、眼下に広がる広大な花畑と青い海が一体となった絵画のような写真が撮影できます。'
      },
      {
        key: 'awaji_beef_onion_gourmet',
        title: '3. ブランド「淡路牛」＆淡路島たまねぎ（古代から朝廷に食材を納めた御食国の恵み）',
        timing: '通年（5月〜の「新玉ねぎ」は驚くほど甘くみずみずしい）',
        desc: '神戸ビーフや松阪牛の素牛となる最高品質の「淡路牛」。日照時間が長く糖度の高い名物「淡路島たまねぎ」の丸ごとローストやすき焼き。幻のウニと称される由良港水揚げの「由良の赤ウニ」、春の「淡路島サクラマス」。',
        spots: '淡路島うずの丘 大鳴門橋記念館（おっ玉葱モニュメント）、淡路牛専門店、道の駅あわじ',
        access: '淡路島全域。',
        tip: '春に収穫される淡路島の新玉ねぎは、辛味がほとんどなくフルーツ並みの糖度があるため、生のオニオンスライスで食べるのが一番の贅沢です。'
      }
    ]
  },
  {
    slug: 'saga-karatsu-yobuko-squid-stay',
    badge: 'KARATSU & YOBUKO GUIDE',
    title: '【佐賀・唐津＆呼子】唐津城・虹の松原＆呼子活イカ姿造り・佐賀牛宿 完全ガイド',
    metaDesc: '玄界灘の絶景と日本一のイカの聖地・佐賀唐津＆呼子エリア完全特化！唐津城（舞鶴城）のパノラマ、日本三大松原「虹の松原」、呼子朝市、透き通る芸術品「呼子の活イカ姿造り」、唐津焼窯元めぐり宿を徹底解説。',
    heroDesc: '玄界灘の青い海に松林が連なる風光明媚な城下町「唐津」と、日本一のイカの聖地「呼子（よぶこ）」。透き通る美しさとコリコリした食感の「呼子活イカ姿造り」。国の特別名勝「虹の松原」と、伝統の唐津焼の器で味わう佐賀牛会席へ。',
    categoryKey: 'saga-karatsu-yobuko-squid-stay',
    areaGuides: [
      {
        key: 'karatsu_castle_matsubara_stay',
        title: '1. 唐津城〜虹の松原・鏡山（鶴が翼を広げたような舞鶴城と100万本の松林）',
        timing: '通年（春の唐津城藤棚ライトアップ・鏡山のツツジと桜）',
        desc: '唐津湾に突き出た満島山に建つ「唐津城（舞鶴城）」。天守閣展望所から見下ろす長さ約4.5km、100万本の黒松が続く日本三大松原「虹の松原」。標高284mの「鏡山展望台」から望む唐津湾に浮かぶ高島・神集島の絶景。',
        spots: '唐津城（天守閣・藤棚）、虹の松原（からつバーガー・松原ドライブ）、鏡山展望テラス、旧唐津銀行（辰野金吾監修）',
        access: 'JR筑肥線・唐津線「唐津駅」下車。福岡空港・博多駅より地下鉄・JR直通約80分。',
        tip: '虹の松原の中にある「からつバーガー（松原本店）」は、特製デミグラスソースとサクサクのバンズが絶品の超人気ご当地バーガーです。'
      },
      {
        key: 'yobuko_squid_fresh_stay',
        title: '2. 呼子港〜呼子朝市・七ツ釜（透き通る活イカの姿造りと日本三大朝市）',
        timing: '通年（ケンサキイカ：春〜秋、アオリイカ：秋〜冬、ヤリイカ：冬〜春）',
        desc: '大正時代から続く日本三大朝市の一つ「呼子朝市」。朝獲れの干物やウニ、イカしゅうまいを売り歩くおばちゃんたちの活気。玄武岩の柱状節理が海に削られた国の天然記念物「七ツ釜」をめぐる遊覧船イカ丸クルーズ。',
        spots: '呼子朝市通り、呼子大橋・風の見える丘公園、七ツ釜（遊覧船イカ丸）、波戸岬（ハート岬・サザエのつぼ焼き）',
        access: '唐津市内より車・路線バスで約30分。',
        tip: '波戸岬（はどみさき）は「ハート岬」の愛称で恋人の聖地に認定されており、名物の香ばしいサザエのつぼ焼き小屋が並びます。'
      },
      {
        key: 'karatsu_saga_beef_pottery_stay',
        title: '3. 名物「呼子活イカ」＆唐津焼の器（まだ動いている透明なイカと後造り天ぷら）',
        timing: '通年（注文が入ってから生簀から網ですくい上げる極上鮮度）',
        desc: '生簀から揚げて数分で捌かれる「呼子の活イカ姿造り」。透き通る身のコリコリした甘み。刺身を食べた後のゲソとミミは「塩焼き」または「サクサクの天ぷら」にする「後造り」。400年の伝統を持つ「唐津焼」の器で楽しむ佐賀牛。',
        spots: '呼子活イカ料理専門店（河太郎・萬坊海中レストラン）、唐津焼窯元通り',
        access: '呼子・唐津市街。',
        tip: 'イカの後造り天ぷらは、揚げたて熱々に天つゆや抹茶塩をつけて食べると、お刺身とは全く異なるふんわり柔らかな甘みが楽しめます。'
      }
    ]
  },
  {
    slug: 'kagoshima-kirishima-jingu-onsen-stay',
    badge: 'KIRISHIMA & MYTH ONEN GUIDE',
    title: '【鹿児島・霧島温泉郷＆霧島神宮】天孫降臨・国宝霧島神宮＆泥湯・黒豚しゃぶ宿 完全ガイド',
    metaDesc: '神話の里とダイナミックな火山温泉・鹿児島霧島エリア完全特化！国宝指定「霧島神宮」、坂本龍馬の新婚旅行の地、霧島温泉郷（泥湯・硫黄泉）、霧島連山のトレッキング、本場かごしま黒豚しゃぶしゃぶ宿を徹底解説。',
    heroDesc: 'ニニギノミコトが天孫降臨した神話の聖地「霧島」。朱塗りの極彩色が美しい国宝「霧島神宮」。坂本龍馬と妻おりょうが日本最初の新婚旅行で訪れた名湯「霧島温泉郷」。湯けむり立ち上る露天風呂と、極上かごしま黒豚を堪能する旅。',
    categoryKey: 'kagoshima-kirishima-jingu-onsen-stay',
    areaGuides: [
      {
        key: 'kirishima_jingu_heritage_onsen',
        title: '1. 国宝・霧島神宮〜神話の森（朱塗りの社殿と樹齢800年の御神木杉）',
        timing: '通年（春の桜・秋の紅葉・元旦の初詣・パワースポット参拝）',
        desc: '令和4年に本殿・幣殿・拝殿が国宝に指定された「霧島神宮」。「西の日光」とも称される極彩色の彫刻美。境内奥にそびえる樹齢800年の御神木杉や「さざれ石」。「霧島神宮温泉郷」の静寂と、霧島山麓の大自然。',
        spots: '国宝霧島神宮（本殿・神楽殿・展望所）、霧島民芸村、神話の里公園（ポッポ鉄道・スーパースライダー）',
        access: 'JR日豊本線「霧島神宮駅」より路線バスで約15分。鹿児島空港より車で約35分。',
        tip: '霧島神宮の境内展望所からは、晴れた日には遠く錦江湾と桜島のシルエットを一望する絶景が広がります。'
      },
      {
        key: 'kirishima_mud_sulfur_onsen',
        title: '2. 霧島温泉郷〜丸尾温泉・硫黄谷（坂本龍馬新婚旅行の地と湯けむりの山里）',
        timing: '通年（温泉街至る所から噴気が上がる圧巻の景観）',
        desc: '霧島連山の中腹に点在する丸尾温泉・硫黄谷温泉・林田温泉・新川温泉などの総称「霧島温泉郷」。慶応2年（1866年）坂本龍馬とおりょうが滞在した塩浸温泉龍馬公園。天然クレイを塗る泥パック温泉「さくらさくら温泉」。',
        spots: '丸尾滝（温泉が流れる滝）、霧島温泉市場（足湯・温泉蒸し卵）、塩浸温泉龍馬公園、高千穂河原（古宮址）',
        access: '鹿児島空港より霧島温泉郷行きバス約30分。',
        tip: '「霧島温泉市場」の広場では、温泉の蒸気で蒸し上げた熱々の温泉卵やさつまいも、豚まんが販売されており食べ歩きに最適です。'
      },
      {
        key: 'kurobuta_shabu_kagoshima_stay',
        title: '3. 本場「かごしま黒豚」＆鹿児島黒牛（白身と呼ばれる脂の甘みと旨味）',
        timing: '通年（サツマイモを食べて育つキメ細やかな肉質）',
        desc: '純粋バークシャー種のみに許される「かごしま黒豚」。筋繊維が細かく歯切れの良い肉質。特製鰹出汁にくぐらせてポン酢やそばつゆで食べる「黒豚しゃぶしゃぶ」。全国和牛能力共進会で日本一に輝いた「鹿児島黒牛」ステーキ。',
        spots: '黒豚しゃぶしゃぶ専門店、霧島黒豚農場直営レストラン、黒酢レストラン（福山町）',
        access: '霧島市・霧島温泉郷。',
        tip: '黒豚しゃぶしゃぶは、ポン酢だけでなく「温かい特製鰹出汁＋刻みネギ＋柚子胡椒」でいただく鹿児島スタイルが絶品です。'
      }
    ]
  }
];

function generatePageTsx(config) {
  return `import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "${config.title} ｜ 日本全国・旅宿クラウド",
  description: "${config.metaDesc}",
  keywords: ["${config.slug}", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["${config.categoryKey}"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for ${config.categoryKey}", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = ${JSON.stringify(config.areaGuides, null, 2)};

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ${config.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            ${config.title}
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            ${config.heroDesc}
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-emerald-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 観光・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめ見どころ・スポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 満足度を高める滞在のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-950/5">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
                              ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                            </span>
                          )}
                        </div>

                        <div className="p-4 space-y-2">
                          {hotel.reviewAverage > 0 && (
                            <div className="flex items-center justify-between text-[9px] font-bold text-amber-600">
                              <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount}件）</span>
                            </div>
                          )}
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-emerald-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-emerald-950/70 line-clamp-2 font-medium">
                              {hotel.hotelSpecial}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="p-4 pt-0">
                        <a
                          href={hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで宿泊プラン・空室を見る
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 47都道府県トップへのリンク */}
      <div className="text-center pt-8">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
`;
}

for (const cfg of microWave15Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated micro tourist hub page: /${cfg.slug}`);
}
