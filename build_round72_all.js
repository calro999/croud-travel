const fs = require('fs');
const path = require('path');

const seasonalHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

// 4記事の詳細データ定義 (Round 72)
const articleConfigs = [
  {
    slug: 'furusato-tax-sand-bath-sunamushi-detox-onsen-stay',
    componentName: 'FurusatoSandBathSunamushiStayPage',
    tag: '名物砂むし温泉＆極上デトックス湯治宿特集',
    title: '天然砂むし温泉＆海辺の名湯で極上デトックス！名門湯宿×ふるさと納税完全ガイド【2026年最新】指宿・別府',
    metaTitle: '天然砂むし温泉＆海辺の名湯で極上デトックス！名門湯宿×ふるさと納税完全ガイド【2026年最新】指宿・別府',
    shortTitle: '砂むし温泉＆極上デトックス湯治宿特集',
    description: '世界でも稀少な天然の地熱を活用した「砂むし温泉」で心身の老廃物をすっきりデトックス！元禄風呂と錦江湾の壮大な海景、館内砂むし温泉を誇る指宿の最高峰「指宿白水館」、別府湾沿いの上人ヶ浜天然砂湯に近接し全室海側露天風呂を備えたモダンリゾート「AMANE RESORT SEIKAI（潮騒の宿 晴海）」、錦江湾パノラマと館内砂蒸し・ヤシの木茂る南国情緒が魅力の「指宿フェニックスホテル」。温かい天然砂に全身を包まれる至極のリラクゼーションを、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '名物砂むし温泉＆極上デトックス湯治宿特集',
    leadTitle: 'ずっしりとした温かい砂の重み、ドクドクと巡る血液の脈動。全身の汗とともにストレスを洗い流す至高の湯治体験へ',
    leadText: '地熱の恵みによって温められた天然の砂に首まで埋もれる「砂むし温泉（砂湯）」。世界でも類を見ないこの伝統的な入浴法は、通常の温泉入浴と比較して心拍出量を高め、全身の血流を約3倍〜4倍に促進させると言われています。約10分〜15分横たわっているだけで、温かい砂の適度な圧力と心地よい熱気により、身体の深部から驚くほどの汗が噴き出し、日頃のデスクワークや冷えで凝り固まった筋肉と老廃物が一気にリフレッシュされます。日本を代表する砂むし温泉の聖地・鹿児島県指宿温泉で、広大な日本庭園と元禄風呂、館内専用の砂むし温泉施設を擁する屈指の名門旅館「指宿白水館」、別府湾を望む上人ヶ浜の天然海浜砂湯至近に佇み、全客室に掛け流し露天風呂を備える極上リゾート「AMANE RESORT SEIKAI（潮騒の宿 晴海）」、そして錦江湾の高台から絶景を望み館内砂蒸し温泉とヤシの木揺れる南国リゾートを満喫できる「指宿フェニックスホテル」。旅の疲れを根本から解きほぐす砂むしデトックス温泉宿を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期間3年）を活用して実質自己負担2,000円で賢く予約し、極上の再生（リボーン）旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '通常の温泉の数倍の血流促進効果！大量の発汗で全身が生まれ変わる極上デトックス',
        body: '砂の程よい重量感による指圧効果と地熱による温熱作用が重なり、全身の毛細血管が拡張。驚くほどの汗とともに体内の疲労物質や老廃物が排出され、上がった後の爽快感と身体の軽さは一度体験すると病みつきになる心地よさです。'
      },
      {
        num: '02',
        title: '波音を聴きながらの砂浴びから、絶景オーシャンビュー露天風呂への贅沢リレー',
        body: '砂むし温泉で心地よく汗を流した後は、砂をシャワーで落とし、そのまま海を望む広大な天然温泉露天風呂へ。潮風に吹かれながら肌触り豊かな名湯に浸かる贅沢な温冷・リフレッシュのコンビネーションが心身の自律神経を整えます。'
      },
      {
        num: '03',
        title: '黒豚、さつま揚げ、関アジ・関サバ！九州が誇る豊かな山海の恵みを味わう美食会席',
        body: '指宿では鹿児島名物の黒豚しゃぶしゃぶや薩摩地鶏、キビナゴや旬の地魚、別府では豊後水道の関アジ・関サバやおおいた和牛のステーキなど、滋味豊かな郷土の美食が並びます。温まった身体に染み渡る極上の晩餐をご堪能ください。'
      }
    ],
    hotelDetails: [
      {
        key: 'ibusuki_sunamushi',
        badge: '鹿児島県指宿市・元禄風呂と館内砂むし温泉を誇る日本屈指の老舗名門旅館',
        rank: '厳選名宿 第1選',
        desc: '錦江湾を望む広大な敷地に、松林と四季の草花が息づく日本庭園が広がる指宿温泉の象徴的名旅館。宿の最大の特徴は、敷地内に完備された本格的な「館内砂むし温泉」。天候や移動を気にすることなく専用の浴衣を着て砂むしを体験でき、そのまま江戸の風情を再現した圧巻の広さを誇る「元禄風呂」へと直行できます。松の緑と海の青が調和した格調高い和風客室や、鹿児島の旬の素材を贅沢に仕立てた薩摩会席料理、館内の薩摩伝承館など、日本の伝統美とおもてなしの真髄を五感で堪能できる至高の宿です。'
      },
      {
        key: 'beppu_sunamushi',
        badge: '大分県別府市・上人ヶ浜海浜砂湯至近！全室オーシャンビュー露天風呂付きモダン湯宿',
        rank: '厳選名宿 第2選',
        desc: '別府湾の穏やかな波打ち際に佇み、訪れる人々を洗練されたモダンラグジュアリーの空間で迎える人気リゾート「潮騒の宿 晴海」。宿のすぐ近くには名物の「別府海浜砂湯」があり、潮騒を間近に聴きながら天然砂湯を満喫できる絶好のロケーションです。館内すべての客室が海に面した源泉かけ流し露天風呂付きで、別府湾と水平線が一体化するインフィニティ温泉大浴場も完備。豊後水道の鮮魚を堪能できる日本料理やビストロフレンチなど選べる夕食も極上評価を獲得しており、大人の贅沢なデトックスステイに最適です。'
      },
      {
        key: 'yamakawa_sunamushi',
        badge: '鹿児島県指宿市・錦江湾を眼下に望む高台の南国リゾート＆館内砂蒸し温泉',
        rank: '厳選名宿 第3選',
        desc: '錦江湾と大隅半島を見渡す小高い丘の上に建ち、ヤシの木が揺れる開放的な南国情緒が漂う温泉リゾートホテル。天候に左右されずいつでも利用できる館内砂蒸し温泉を完備しており、じっくり温まった後は展望大浴場や露天風呂で青い海と空の絶景パノラマを楽しめます。全室オーシャンビューの明るい客室からは日の出や夕暮れの美しい海景色を一望。鹿児島黒豚の陶板焼きや新鮮な地魚の舟盛りなど地場産食材をふんだんに取り入れた郷土会席をリーズナブルに味わえる、コスパと癒やしを兼ね備えた名宿です。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-three-major-bihada-hotspring-stay', title: '【日本三大美肌の湯×ふるさと納税】嬉野・斐乃上・喜連川のとろとろ美肌宿' },
      { slug: 'furusato-tax-carbonated-spring-effervescent-onsen-stay', title: '【天然炭酸泉・泡の秘湯×ふるさと納税】長湯・白骨・有馬の血流促進名湯宿' },
      { slug: 'furusato-tax-all-inclusive-luxury-onsen-stay', title: '【オールインクルーシブ温泉宿×ふるさと納税】お酒もカフェも追加料金なしの贅沢ステイ' },
      { slug: 'furusato-tax-oceanfront-wave-sound-healing-stay', title: '【オーシャンフロント波音の宿×ふるさと納税】海と温泉が一体化する極上ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-brand-maguro-tuna-feast-luxury-inn-stay',
    componentName: 'FurusatoBrandMaguroTunaStayPage',
    tag: '本場黒マグロ＆生マグロ食べ尽くし会席宿特集',
    title: '本場黒マグロ・生マグロ尽くし会席＆絶景温泉宿×ふるさと納税完全ガイド【2026年最新】大間・那智勝浦・三崎港',
    metaTitle: '本場黒マグロ・生マグロ尽くし会席＆絶景温泉宿×ふるさと納税完全ガイド【2026年最新】大間・那智勝浦・三崎港',
    shortTitle: '本場黒マグロ＆生マグロ会席名宿特集',
    description: '海のダイヤと称される極上マグロを本場の港町名宿で味わい尽くす！津軽海峡の一本釣り大間マグロと下風呂の白濁硫黄泉を誇る「下風呂観光ホテル 三浦屋」、日本一の生マグロ水揚げ港で専用船で渡る孤島の秘境露天風呂「碧き島の宿 熊野別邸 中の島」、三浦三崎港のまぐろ食べ放題と東京湾オーシャンビュー温泉「マホロバ・マインズ三浦」。大トロ、中トロ、赤身の握りから兜焼き、ねぎま鍋まで、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '本場黒マグロ＆生マグロ食べ尽くし会席宿特集',
    leadTitle: '舌の上でとろける極上の脂、濃厚な赤身の深いコク。本場の港宿で味わう「本物のマグロ」感動の美食紀行',
    leadText: '寿司ネタの王様にして、日本人が最も愛する海の至宝「マグロ（鮪）」。荒波逆巻く津軽海峡で一本釣りされ、極上の脂乗りと引き締まった身質で世界最高峰の評価を受ける「大間まぐろ」。延縄漁船で生きたまま水揚げされ、一度も冷凍されることなく届けられるモチモチ食感と濃厚な旨味の和歌山県「那智勝浦の生マグロ」。そして遠洋マグロ漁の基地として全国から上質なマグロが集まる神奈川県「三崎港の三崎まぐろ」。極上マグロの本場に佇む温泉旅館では、大トロ・中トロ・赤身の美しいグラデーションのお造りから、香ばしく焼き上げたカマ焼きや希少部位の珍味、旨味出汁で味わうねぎま鍋まで、まさにマグロのすべてを食べ尽くす至福のフルコースが振る舞われます。津軽海峡を望む白濁硫黄泉の老舗「下風呂観光ホテル 三浦屋」、勝浦港から専用船で渡り海中露天風呂と生マグロ解体を堪能できる孤島のリゾート「碧き島の宿 熊野別邸 中の島」、そして三崎まぐろ尽くしビュッフェと広々客室が評判の「マホロバ・マインズ三浦」。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使って実質自己負担2,000円で賢く予約し、本物のマグロの旨さに酔いしれる贅沢旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '冷凍とは次元が違う！一度も凍らせない「本場生マグロ」のモチモチとした舌触り',
        body: '港町だからこそ味わえる未冷凍の生マグロは、ドリップが出ないため旨味成分が一切損なわれず、まるで吸い付くような弾力と深い赤身のコクが際立ちます。大トロのきめ細やかな霜降りは口に入れた瞬間に上質な脂の甘みへと昇華します。'
      },
      {
        num: '02',
        title: 'お造り・兜焼き・カマの塩焼き・ねぎま鍋！部位ごとの魅力を知り尽くした料理人の技',
        body: '大トロや中トロの刺身だけでなく、コラーゲンたっぷりの目玉煮付け、濃厚なカマ焼き、希少部位の頬肉ステーキや脳天の握りなど、一頭買いや市場直結だからこそ提供できる多彩なマグロ料理を心ゆくまで堪能できます。'
      },
      {
        num: '03',
        title: '海を望む名湯露天風呂と潮風！旅の情緒を高める絶景ロケーション',
        body: '津軽海峡越しに北海道の山並みを望む硫黄泉、専用船で渡る孤島の波打ち際露天風呂、三浦海岸を見下ろす高台温泉など、いずれの宿も唯一無二の絶景風呂を完備。温泉で心身を解きほぐした後に味わうマグロ会席は格別の幸福感をもたらします。'
      }
    ],
    hotelDetails: [
      {
        key: 'oma_maguro',
        badge: '青森県風間浦村・津軽海峡大間まぐろ尽くしと下風呂温泉の名湯白濁硫黄泉',
        rank: '厳選名宿 第1選',
        desc: '本州最北端・下北半島の津軽海峡沿いに位置する歴史ある下風呂温泉郷に佇み、名物の津軽海峡本マグロ（大間マグロ）と濃厚な硫黄泉を心ゆくまで堪能できる温泉旅館。夕食には大間産本マグロの大トロ・中トロ・赤身を惜しみなく盛り込んだお造りや、旬の海峡魚介、地元名物のイカ刺しが並び、魚好きを唸らせる圧巻の料理が評判です。源泉かけ流しの乳白色の硫黄泉は大浴場に豊富に注がれ、湯治場として栄えた確かな湯力を実感。津軽海峡の漁火を眺めながら静かな本州最果ての旅情に浸れます。'
      },
      {
        key: 'katsuura_maguro',
        badge: '和歌山県那智勝浦町・専用船で渡る孤島の秘境温泉！生マグロ会席と海中絶景露天',
        rank: '厳選名宿 第2選',
        desc: '南紀勝浦港から専用送迎船でわずか数分、波静かな勝浦湾に浮かぶ周囲数キロの島全体がひとつのリゾートとなっている非日常の宿。日本有数の生マグロ水揚げ港・勝浦ならではの、獲れたて生マグロを中心とした贅沢会席が自慢で、冷凍では絶対に味わえない極上の食感と脂の甘みを満喫できます。最大のハイライトは、潮の満ち引きで表情を変える海中露天風呂「紀州潮聞之湯」。打ち寄せる波の音を間近に聴きながら源泉かけ流しの美肌湯に浸かる時間は、まさに夢のような至福のひとときです。'
      },
      {
        key: 'misaki_maguro',
        badge: '神奈川県三浦市・三崎港直送まぐろ食べ放題と東京湾オーシャンビュー温泉リゾート',
        rank: '厳選名宿 第3選',
        desc: '都心から約1時間、三浦海岸駅より徒歩約6分の好立地に建ち、全室オーシャンビューの本館をはじめ広々とした客室を誇る人気温泉リゾート。夕食バイキングでは、三浦三崎港直送の上質なマグロを刺身やお寿司で心ゆくまで味わえる「まぐろ食べ放題」が大好評。自家源泉の天然温泉大浴場や露天風呂、屋内温水プールなど充実したウェルネス施設も魅力です。都心からのアクセスが抜群で、気軽に本場の三崎まぐろと温泉旅を両立させたいファミリーやカップルに圧倒的な支持を集めています。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-fresh-oyster-feast-luxury-gourmet-stay', title: '【名産地牡蠣尽くし会席×ふるさと納税】生牡蠣・焼き牡蠣と名湯の旅' },
      { slug: 'furusato-tax-winter-crab-gourmet-luxury-stay', title: '【冬の味覚・活蟹尽くし×ふるさと納税】越前蟹・松葉蟹・間人蟹の名宿' },
      { slug: 'furusato-tax-torafugu-kaiseki-luxury-gourmet-stay', title: '【天然とらふぐ会席×ふるさと納税】てっさ・てっちり・ひれ酒の贅沢宿' },
      { slug: 'furusato-tax-fresh-sushi-kaiseki-gourmet-inn-stay', title: '【極上寿司会席×ふるさと納税】港町直結の職人握りと名湯温泉宿' }
    ]
  },
  {
    slug: 'furusato-tax-setouchi-island-luxury-ocean-resort-stay',
    componentName: 'FurusatoSetouchiIslandResortStayPage',
    tag: '瀬戸内多島美＆絶景アイランドリゾート特集',
    title: '穏やかな海と多島美に癒やされる瀬戸内アイランドリゾート名宿×ふるさと納税完全ガイド【2026年最新】小豆島・鞆の浦・生口島',
    metaTitle: '穏やかな海と多島美に癒やされる瀬戸内アイランドリゾート名宿×ふるさと納税完全ガイド【2026年最新】小豆島・鞆の浦・生口島',
    shortTitle: '瀬戸内多島美アイランドリゾート特集',
    description: '鏡のように穏やかな青い海、点在する島々のシルエット、心地よい潮風。東洋のエーゲ海と称される瀬戸内海の極上リゾートを厳選！潮の満ち引きで現れるエンジェルロードが目の前の「小豆島国際ホテル」、仙酔島と弁天島を望む全室温泉露天風呂付き大人の隠れ家「鞆の浦温泉 汀邸 遠音近音」、しまなみ海道・生口島の豪商屋敷を再生した世界的ラグジュアリー旅館「Azumi Setoda」。オリーブ牛や鯛・タコなど瀬戸内の美食とともに、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '瀬戸内多島美＆絶景アイランドリゾート特集',
    leadTitle: '青い海に浮かぶ無数の緑の島々、夕陽が茜色に染め上げるマジックアワー。時間の流れが緩やかになる瀬戸内リトリートへ',
    leadText: '本州と四国に抱かれた瀬戸内海は、世界でも類を見ない穏やかな波と大小無数の島々が織りなす「多島美（たとうび）」の絶景エリア。温暖な気候と豊かなオリーブ畑、レモン畑が広がり、まるで地中海のリゾートを訪れたかのような心地よい開放感に満ちています。1日2回の干潮時にだけ海の中から砂の道が現れる奇跡の絶景「エンジェルロード」に隣接し全室オーシャンビューを誇る香川県「小豆島国際ホテル」、万葉の昔から潮待ちの港として栄え、坂本龍馬ゆかりの鞆の浦で仙酔島を望み全室露天風呂を備える広島県「汀邸 遠音近音」、そしてアマンの創業者エイドリアン・ゼッカ氏が手掛け、瀬戸田の製塩豪商・堀内家の旧邸宅を洗練された美意識で蘇らせた世界最高峰の宿「Azumi Setoda」。瀬戸内海の豊かな海の幸やオリーブ牛、柑橘類を味わいながら過ごす滞在は、日常の喧騒で疲れた心を優しく包み込んでくれます。人気の瀬戸内ラグジュアリー宿に、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期間3年）を使って実質2,000円で滞在し、心豊かな島時間を体験しましょう。',
    threePoints: [
      {
        num: '01',
        title: 'どこまでも穏やかな波音と多島美！刻一刻と表情を変える朝夕の海景グラデーション',
        body: '外洋のような荒々しい波がなく、水面が鏡のように光を反射する瀬戸内海。朝の清々しい青と白のコントラストから、夕暮れに空と海が黄金色や茜色に染まるマジックアワー、そして満月の夜に海面に現れる「月の道」まで、部屋にいながら感動の絶景を独占できます。'
      },
      {
        num: '02',
        title: '瀬戸内海の旬魚・小豆島オリーブ牛・採れたてレモン！豊かな気候が育む贅沢グルメ',
        body: '激しい潮流で身の引き締まった鯛（タイ）やタコ、オリーブの絞り果実を与えて育てた極上のオリーブ牛、国内屈指の生産量を誇る瀬戸田レモンや小豆島オリーブオイル。素材本来の爽やかな風味と旨味を活かした極上の会席や創作ディナーが旅を彩ります。'
      },
      {
        num: '03',
        title: 'しまなみサイクリング、アート巡り、古い町並み散策など多彩なアクティビティ',
        body: 'しまなみ海道の爽快なサイクリング、小豆島の二十四の瞳映画村や寒霞渓の渓谷美、鞆の浦の常夜燈と江戸情緒残る町並みなど、宿泊拠点の周囲には見どころが満載。アクティブにも静寂なリトリートにも自在にアレンジ可能です。'
      }
    ],
    hotelDetails: [
      {
        key: 'shodoshima_resort',
        badge: '香川県土庄町・エンジェルロードが目の前！全室オーシャンビューと小豆島温泉の名宿',
        rank: '厳選名宿 第1選',
        desc: '小豆島の象徴的な観光名所であり、「大切な人と手を繋いで渡ると願いが叶う」とされるエンジェルロードに最も近い全室オーシャンビューのリゾートホテル。客室の窓や海沿いの露天風呂からは、潮の満ち引きによって現れたり消えたりする砂の道を間近に見下ろすことができます。肌にしっとりと馴染む小豆島温泉の大浴場、小豆島名産のオリーブ牛や讃岐うどん、瀬戸内の新鮮な海の幸を贅沢に盛り込んだ会席料理も大好評。瀬戸内海の穏やかな潮風に吹かれながらロマンチックで贅沢な島時間を満喫できます。'
      },
      {
        key: 'sensuijima_resort',
        badge: '広島県福山市・鞆の浦の潮待ちの風情と仙酔島を望む全室温泉露天風呂付き隠れ家',
        rank: '厳選名宿 第2選',
        desc: '日本屈指の景勝地・鞆の浦の海岸線に佇み、江戸時代の面影を残す歴史情緒と現代の快適性が調和した大人のための全室温泉露天風呂付き名旅館。全客室のテラスに備えられた客室露天風呂からは、波静かな鞆の浦の海とパワースポットとして知られる仙酔島が一望できます。夕食には瀬戸内名物の小鯛や渡り蟹、アコウなど鞆の浦漁港で揚がった最高鮮度の魚介を職人が丁寧に仕立てる会席料理を提供。海を眺めながら静寂の中で温泉に浸かる、プライベート感あふれる極上の休日をお過ごしいただけます。'
      },
      {
        key: 'setoda_resort',
        badge: '広島県尾道市・しまなみ海道生口島にアマン創業者が創り上げた最高峰のラグジュアリー旅館',
        rank: '厳選名宿 第3選',
        desc: 'しまなみ海道のほぼ中央に位置するレモンの島・生口島瀬戸田のしおまち商店街に誕生した、アマン創業者エイドリアン・ゼッカ氏が手掛ける世界注目の旅館。築140年の製塩豪商・堀内家の旧邸宅を数寄屋大工の手で再生し、伝統的な日本建築の陰影と現代の洗練されたホスピタリティが融合しています。中庭の緑を望むヒノキ風呂付き客室、瀬戸内の契約農家や漁師から届く食材で構成される極上のダイニング、向かいにある銭湯「yubune」でのサウナ・温浴体験など、旅の本質を極めた至高の文化体験が叶います。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-remote-island-luxury-resort-stay', title: '【大人の隠れ家・極上の離島リゾート】日常を完全遮断する南国アイランドステイ' },
      { slug: 'furusato-tax-oceanfront-wave-sound-healing-stay', title: '【オーシャンフロント波音の宿×ふるさと納税】海と温泉が一体化する極上ステイ' },
      { slug: 'furusato-tax-cycling-shimanami-lake-resort-stay', title: '【しまなみ海道＆絶景サイクリング宿×ふるさと納税】風を感じるアクティブ旅' },
      { slug: 'furusato-tax-sunset-ocean-magic-hour-stay', title: '【夕陽百選・マジックアワー絶景宿×ふるさと納税】海に沈む夕日と極上露天' }
    ]
  },
  {
    slug: 'furusato-tax-strawberry-buffet-sweets-resort-hotel-stay',
    componentName: 'FurusatoStrawberryBuffetSweetsStayPage',
    tag: '旬のいちごスイーツビュッフェ＆優雅なリゾートホテル特集',
    title: '甘酸っぱい贅沢！いちごスイーツビュッフェ＆高級リゾートホテルステイ×ふるさと納税完全ガイド【2026年最新】那須・神戸・幕張',
    metaTitle: '甘酸っぱい贅沢！いちごスイーツビュッフェ＆高級リゾートホテルステイ×ふるさと納税完全ガイド【2026年最新】那須・神戸・幕張',
    shortTitle: 'いちごスイーツビュッフェ名門ホテル特集',
    description: '春の訪れを告げる真っ赤な宝石！全国屈指のパティシエが腕を振るう豪華ストロベリービュッフェを名門ホテルで堪能。とちおとめ＆スカイベリーの食べ比べと那須高原バイキングが圧巻の「ホテルエピナール那須」、天然温泉スパと優雅なストロベリーアフタヌーンティー・スイーツフェアが人気の「神戸ベイシェラトン ホテル＆タワーズ」、スーパーあまおうショートケーキで名高いホテルニューオータニ直営「ホテルニューオータニ幕張」。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '旬のいちごスイーツビュッフェ＆優雅なリゾートホテル特集',
    leadTitle: '宝石のように輝く真っ赤な苺、あふれる果汁と甘美なスイーツの競演。心ときめく甘い春のリゾート旅へ',
    leadText: '冬から春にかけて全国の高級ホテルが最も華やぐ季節のイベント「ストロベリービュッフェ＆いちごフェア」。みずみずしく大粒のブランド苺をそのまま食べ比べできるフレッシュコーナーをはじめ、しっとりとしたスポンジと最高級生クリームがとろけ合う名物ショートケーキ、サクサクのミルフィーユ、香ばしいタルト、華やかなパフェやチョコファウンテンまで、ホテル専属パティシエの技と美意識が詰まったスイーツたちがテーブルを彩ります。日本一のいちご王国・栃木県で「とちおとめ」や「スカイベリー」をふんだんに使った豪華スイーツバイキングと温泉を満喫できる那須高原の「ホテルエピナール那須」、自家源泉の天然温泉スパ「濱泉」と洗練されたシェラトンブランドのストロベリーフェアを優雅に味わう「神戸ベイシェラトン ホテル＆タワーズ」、そして「スーパーあまおうショートケーキ」をはじめとするホテルスイーツの最高峰をビュッフェスタイルで惜しみなく提供する「ホテルニューオータニ幕張」。大人も子どもも笑顔になれる魅惑のストロベリーステイを、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使って実質自己負担2,000円で賢く予約し、甘く優雅な非日常の休日をお楽しみください。',
    threePoints: [
      {
        num: '01',
        title: 'ブランド苺のフレッシュ食べ比べから名作ケーキまで！ホテルパティシエの本気スイーツ',
        body: 'あまおう、とちおとめ、スカイベリーなど名産地直送の完熟いちごのフレッシュな食べ比べはもちろん、一流パティシエが手掛けるショートケーキ、タルト、マカロン、パフェなど数十種類のストロベリースイーツを心ゆくまで味わえます。'
      },
      {
        num: '02',
        title: '天然温泉やプール、クラブラウンジで過ごすワンランク上の優雅なホテルライフ',
        body: 'スイーツビュッフェだけでなく、地下から湧き出る天然温泉大浴場や露天風呂、屋内温水プール、リラクゼーションサロン、眺望抜群の客室など、一流ホテルならではの上質な付帯設備で1日中贅沢なリフレッシュが叶います。'
      },
      {
        num: '03',
        title: 'ローストビーフや石窯ピッツァも充実！ランチやディナーとしても大満足のラインナップ',
        body: 'ホテルのストロベリービュッフェはスイーツだけでなく、じっくり焼き上げたジューシーなローストビーフ、シェフが目の前で仕上げるパスタ、新鮮なサラダバーなどセイボリー（食事メニュー）も超一流。食事としても大満足のクオリティです。'
      }
    ],
    hotelDetails: [
      {
        key: 'tochigi_strawberry',
        badge: '栃木県那須町・日本一のいちご王国！とちおとめ＆スカイベリー食べ放題と那須温泉リゾート',
        rank: '厳選名宿 第1選',
        desc: '那須高原の雄大な自然に囲まれた総合リゾートホテル。いちごの生産量日本一を誇る栃木県ならではの、地元契約農家から届くとちおとめやスカイベリーをふんだんに使用した大人気のストロベリーフェアを開催。ホテル名物のバイキングレストラン「エルバージュ」では、数十種類のいちごスイーツに加え、握り寿司や那須高原野菜、焼き立てステーキなど豪華な料理が並びます。敷地内から湧き出る天然温泉の大型大浴場や露天風呂、温水プール、キッズコーナーなども完備し、ファミリーからカップルまで圧倒的な満足度を誇る名宿です。'
      },
      {
        key: 'kobe_strawberry',
        badge: '兵庫県神戸市・六甲アイランドの洗練ホテル！天然温泉スパ濱泉＆極上ストロベリーフェア',
        rank: '厳選名宿 第2選',
        desc: '神戸の六甲アイランドに位置し、世界基準のラグジュアリーと和の温もりが融合する名門シェラトンホテル。春先には館内レストラン「ガーデンカフェ」で毎年大人気のストロベリースイーツビュッフェが開催され、華やかな苺スイーツやシェフ特製の本格料理が並びます。最大の魅力は、敷地内の地下1,600mから湧き出る本格的な自家源泉の天然温泉スパ「濱泉（はまいずみ）」。打たせ湯や露天風呂、サウナを完備した優雅な湯処でリフレッシュした後にいただく甘酸っぱいいちごスイーツは、至極の贅沢体験です。'
      },
      {
        key: 'chiba_strawberry',
        badge: '千葉県千葉市・スイーツの最高峰スーパーあまおうショートケーキを味わう伝統の名門ホテル',
        rank: '厳選名宿 第3選',
        desc: '東京湾を望む幕張新都心に位置し、ホテルニューオータニの伝統を受け継ぐ洗練されたホスピタリティを誇るシティ＆リゾートホテル。ホテルニューオータニの代名詞とも言える「博多あまおう」を贅沢に使った「スーパーあまおうショートケーキ」やロールケーキ、タルトなどがビュッフェ形式で惜しみなく提供されるストロベリーフェアは、全国から予約が殺到する伝説的イベント。緑豊かな日本庭園や開放的な客室、貝殻型プールなどを備え、都心からのアクセスも良好な都会のオアシスで至福のスイーツステイを堪能できます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-award-winning-breakfast-gourmet-hotel-stay', title: '【朝食受賞ホテル×ふるさと納税】いくら盛り放題＆焼きたてパンの贅沢宿' },
      { slug: 'furusato-tax-luxury-buffet-gourmet-resort-stay', title: '【豪華バイキングリゾート×ふるさと納税】ローストビーフ＆海鮮食べ放題名宿' },
      { slug: 'furusato-tax-sweets-cafe-wagashi-retro-onsen-stay', title: '【名物和菓子＆スイーツ巡り温泉宿×ふるさと納税】甘味と名湯のレトロ旅' },
      { slug: 'furusato-tax-seasonal-fruit-picking-vineyard-onsen-stay', title: '【季節のフルーツ狩り＆温泉宿×ふるさと納税】果樹園リゾート完全ガイド' }
    ]
  }
];

function generateFullPageCode(cfg) {
  const pageHotels = seasonalHotels[cfg.slug] || {};

  const threePointsHtml = cfg.threePoints.map(pt => `
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  ${pt.num}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  ${pt.title}
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                ${pt.body}
              </p>
            </div>
  `).join('\n');

  const hotelCardsHtml = cfg.hotelDetails.map((det, idx) => {
    const h = pageHotels[det.key] || {};
    const hotelName = h.hotelName || '提携名門ホテル・旅館';
    const hotelImg = h.hotelImageUrl || 'https://img.travel.rakuten.co.jp/share/HOTEL/18848/18848.jpg';
    const reviewAvg = h.reviewAverage || '4.50';
    const reviewCount = h.reviewCount || '100';
    const address = (h.address1 || '') + (h.address2 || '');
    const access = h.access || '最寄り駅・インターチェンジより車または無料送迎あり';
    const minCharge = h.hotelMinCharge ? Number(h.hotelMinCharge).toLocaleString() : '15,000';
    const planUrl = h.affiliateUrl || `https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F${h.hotelNo}%2F${h.hotelNo}.html`;

    const cleanText = (h.userReview || '')
      .replace(/<[^>]*>/g, '')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/[\\`$"{}]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    const userReview = cleanText
      ? ('「' + cleanText.slice(0, 120) + '…」')
      : '訪れるすべてのお客様に心安らぐ贅沢な寛ぎの時間を提供し、高い評価を獲得している極上宿です。';

    return `
            {/* ホテルカード ${idx + 1} */}
            <article className="bg-white rounded-3xl shadow-lg border border-stone-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src="${hotelImg}"
                  alt="${hotelName}"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  ${det.rank}
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ ${reviewAvg} (${reviewCount}件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    ${det.badge}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    ${hotelName}
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    ${det.desc}
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    ${userReview}
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> ${address}</div>
                    <div><strong>アクセス:</strong> ${access}</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約${minCharge}円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="${planUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-sm"
                  >
                    楽天トラベルで空室・プランを見る ➔
                  </a>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm transition"
                  >
                    ふるさと納税クーポンを使う
                  </a>
                </div>
              </div>
            </article>
    `;
  }).join('\n');

  const relatedListHtml = cfg.relatedArticles.map(rel => `
              <li key="${rel.slug}">
                <Link href="/${rel.slug}" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">${rel.title}</span>
                </Link>
              </li>
  `).join('\n');

  return `import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '${cfg.metaTitle}',
  description: '${cfg.description}',
  keywords: [
    '${cfg.heroTag}',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '温泉旅館 予約',
    '絶景露天風呂 クーポン',
    '旬の味覚 宿泊割引'
  ],
  alternates: { canonical: baseUrl + '/${cfg.slug}' },
  openGraph: {
    title: '${cfg.metaTitle}',
    description: '${cfg.description}',
    url: baseUrl + '/${cfg.slug}',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function ${cfg.componentName}() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '${cfg.shortTitle}', item: baseUrl + '/${cfg.slug}' },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <Link href="/travel-savings-guide" className="hover:text-stone-900 underline transition">旅行節約ハブ</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">${cfg.shortTitle}</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            ${cfg.heroTag}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            ${cfg.title}
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            ${cfg.leadText}
          </p>
          <div className="flex flex-wrap gap-4 pt-4 border-t border-amber-900/50 text-xs text-amber-200/90 font-medium">
            <span>✓ 寄付額の最大30％相当が宿泊クーポンに</span>
            <span>✓ クーポン有効期限は発行からゆとりの3年間</span>
            <span>✓ すでに予約済みの宿泊にも「あとから割引」可能</span>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-sm md:text-base border border-amber-400/30"
            >
              楽天ふるさと納税トラベルクーポンを獲得する →
            </a>
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-amber-200 font-bold px-5 py-3 rounded-2xl border border-amber-300/20 text-xs sm:text-sm transition"
            >
              📖 初めての方向け完全マニュアル
            </Link>
          </div>
        </header>

        {/* 3つの醍醐味セクション */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-6 flex items-center gap-3">
            <span className="text-amber-600 text-xl md:text-2xl">◆</span>
            この旅で体感したい3つの醍醐味
          </h2>
          <div className="grid gap-6">
${threePointsHtml}
          </div>
        </section>

        {/* 厳選名宿セクション */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-3 flex items-center gap-3">
              <span className="text-amber-600 text-xl md:text-2xl">◆</span>
              ふるさと納税で泊まる厳選名宿
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              楽天トラベルAPIから最新の実在宿データを取得。対象自治体のふるさと納税クーポンを利用して実質2,000円で泊まれる名宿です。
            </p>
          </div>

          <div className="space-y-8">
${hotelCardsHtml}
          </div>
        </section>

        {/* ふるさと納税クーポン使い方ステップ */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/80 shadow-sm mb-16">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-800 mb-6 text-center">
            ふるさと納税トラベルクーポンの簡単3ステップ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">1</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">旅行先自治体に寄付</h3>
              <p className="text-xs text-stone-600 leading-relaxed">楽天ふるさと納税で泊まりたい宿がある市町村のトラベルクーポンを選んで寄付します。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">2</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">クーポンが付与される</h3>
              <p className="text-xs text-stone-600 leading-relaxed">寄付完了後、楽天トラベルのマイクーポンに即時〜数日で付与（有効期間は3年間）。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">3</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">予約時に割引適用</h3>
              <p className="text-xs text-stone-600 leading-relaxed">宿泊予約画面でクーポンを選択。すでに予約済みの宿でも「あとから適用」が可能です。</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="text-amber-800 font-bold text-xs sm:text-sm hover:underline"
            >
              👉 詳しいお金の流れやワンストップ特例の手順はこちらの完全マニュアルへ
            </Link>
          </div>
        </section>

        {/* 関連特集クロスリンク */}
        <section className="bg-stone-50 rounded-3xl p-8 border border-stone-200/80 mb-16">
          <h2 className="text-lg md:text-xl font-bold font-serif text-stone-800 mb-4">
            あわせて読みたい関連特集
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2">
${relatedListHtml}
          </ul>
        </section>

        {/* ハブページへの誘導フッター */}
        <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-amber-900/40 text-center mb-12">
          <h2 className="text-xl sm:text-2xl font-bold font-serif mb-3 text-amber-50">
            もっとお得に旅を楽しむためのハブページへ
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
            全国のテーマ別宿特集や、旅行費を最大30％安くする裏ワザを網羅した総合ガイドを公開中。
          </p>
          <Link
            href="/travel-savings-guide"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition text-sm"
          >
            🏨 旅行節約総合ハブページを見る ➔
          </Link>
        </div>

        {/* フッター */}
        <footer className="text-center text-xs text-stone-400 pt-6 border-t border-stone-200">
          <p>※表示内容は2026年9月時点の情報です。最新の宿泊プラン・クーポン対象施設は楽天トラベルにてご確認ください。</p>
          <p className="mt-2">
            <Link href="/" className="text-stone-500 hover:text-stone-800 underline transition">旅宿クラウド トップページへ</Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
`;
}

// 4記事のファイルを書き出し
for (const cfg of articleConfigs) {
  const targetDir = path.join(__dirname, 'src/app', cfg.slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const code = generateFullPageCode(cfg);
  fs.writeFileSync(path.join(targetDir, 'page.tsx'), code, 'utf8');
  console.log(`Generated: ${cfg.slug}/page.tsx (Chars: ${code.length})`);
}

console.log('Finished generating all 4 articles for Round 72!');
