const fs = require('fs');
const path = require('path');

const round99Hotels = JSON.parse(fs.readFileSync('round99_hotels.json', 'utf8'));

// Convert to lookup map
const allHotels = {};
for (const [slug, arr] of Object.entries(round99Hotels)) {
  allHotels[slug] = {};
  for (const item of arr) {
    allHotels[slug][item.key] = item.hotel;
  }
}

const articles = [
  {
    slug: 'furusato-tax-tsukioka-onsen-emerald-bihada-stay',
    title: '【月岡温泉×ふるさと納税】国内随一のエメラルドグリーン硫黄泉＆極上越後会席！名門宿特集｜白玉の湯華鳳・白玉の湯泉慶・風鈴屋',
    desc: '日本有数の硫黄含有量を誇る美肌の湯・新潟県月岡温泉を楽天ふるさと納税でお得に贅沢ステイ！六千坪の大庭園と展望露天風呂を誇る最高峰「白玉の湯 華鳳」、岩露天風呂とのどぐろ料理が自慢の「白玉の湯 泉慶」、大庭園と地酒バイキングの「風鈴屋」を徹底比較。新発田市トラベルクーポン活用術を網羅。',
    keywords: '月岡温泉 ふるさと納税,月岡温泉 華鳳 クーポン,白玉の湯 泉慶 ふるさと納税,風鈴屋 月岡温泉 宿泊,新発田市 ふるさと納税 旅行',
    targetCity: '新潟県新発田市',
    leadTitle: 'エメラルドグリーンに輝く奇跡の白玉の湯——国内屈指の濃厚な硫黄泉と米どころ越後の美食に酔いしれる',
    leadP1: '新潟県新発田市に位置する月岡温泉は、大正時代に石油採掘中に湧出したと伝えられる全国的にも珍しい名湯です。月岡温泉の最大の特徴は、美しいエメラルドグリーンに輝く弱アルカリ性の含硫黄ナトリウム塩化物温泉。硫黄含有量は全国第2位を誇り、入浴した瞬間に肌がツルツルになることから「もっと美人になれる温泉」「不老長寿の湯」として絶大な人気を集めています。湯上がり後も体が芯からポカポカと温まり、しっとりとした潤いが長く続きます。',
    leadP2: '温泉と並び月岡旅行の大きな魅力が、日本一の米どころ越後ならではの美食と地酒です。日本海で水揚げされる高級魚「のどぐろ」の塩焼き、新潟の銘柄牛「にいがた和牛」、炊き立ての南魚沼産・岩船産コシヒカリ、そして新潟が世界に誇る銘酒の数々。新潟県新発田市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより全国トップクラスの評価を誇る高級旅館へお得に宿泊でき、心身ともに満たされる最高の贅沢旅が叶います。',
    hotelsKey: 'furusato-tax-tsukioka-onsen-emerald-bihada-stay',
    hotelItems: [
      {
        key: 'tsukioka_shiradama',
        tagline: 'プロが選ぶ日本のホテル旅館100選で全国総合第3位！六千坪の広大な日本庭園とエメラルドグリーンの大露天風呂',
        detailTitle: '月岡温泉 白玉の湯 華鳳（かほう） —— 全国屈指の最高峰名門旅館。小高い丘から越後平野を見晴らす贅沢空間',
        features: [
          { title: '小高い丘から越後平野の田園風景を一望する回遊式大庭園露天風呂', desc: '木造回廊が美しい広大な露天風呂。敷地内から自噴する自家源泉「白玉の湯」のエメラルドグリーンのお湯に浸かりながら、開放感あふれる絶景を満喫できます。' },
          { title: '六千坪の広大な日本庭園と美術品が飾られた美術館のような館内', desc: '手入れの行き届いた池泉回遊式庭園の散策や、ラウンジでのフリードリンクサービス、温水プールなど、最高級リゾートにふさわしい充実の設備が整っています。' },
          { title: '日本海の高級魚「のどぐろ」や村上牛を味わう至高の越後会席', desc: '料理人が腕によりをかけて仕立てる月替わりの本格日本料理。脂の乗ったのどぐろやA5ランク新潟和牛、地元新発田の旬野菜を贅沢に堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.77点という圧倒的な最高峰スコア。「お風呂のお湯が本当にエメラルドグリーンで肌がつるつるになった」「スタッフの接客もお料理も建物もすべてが一流で感動」と絶賛されています。'
      },
      {
        key: 'tsukioka_senkei',
        tagline: '白玉の湯グループの原点にして姉妹館！大岩を配した野趣あふれる露天風呂と真心のこもったもてなし',
        detailTitle: '月岡温泉 白玉の湯 泉慶（せんけい） —— 華鳳の伝統を受け継ぐ名館。美肌の自家源泉と美食割烹の饗宴',
        features: [
          { title: '巨岩と檜の湯船が並ぶ大浴場「月鏡」と「花鏡」の自家源泉露天', desc: '華鳳と同じく自家源泉「白玉の湯」を引く贅沢な大浴場。濃厚な硫黄の香りと絹のような肌触りの湯に浸かり、日頃の疲れを解きほぐせます。' },
          { title: '館内随所に飾られた越後の伝統工芸と温かみあふれる和の風情', desc: '広々としたロビーラウンジやアトリウム。スタッフの親しみやすく細やかな接客が、訪れる旅人に心地よい安心感を与えてくれます。' },
          { title: 'お食事処や個室料亭でいただく新潟の山海の幸会席', desc: '日本海の新鮮な刺身盛り合わせや旬の煮物、コシヒカリの釜飯など、新潟の食の豊かさを存分に実感できる充実のコース料理です。' }
        ],
        reviewPoints: '楽天トラベル評価4.65点、口コミ2500件超。「お湯が素晴らしく肌がしっとりすべすべになった」「お料理の品数と味が素晴らしく、また必ず泊まりたい」と高いリピート率。'
      },
      {
        key: 'tsukioka_seifuen',
        tagline: '四季の彩りを感じる日本庭園と露天風呂！越後の美酒と旬菜バイキング・会席が人気の和モダンホテル',
        detailTitle: '月岡温泉 風鈴屋 —— 庭園を望むやすらぎの宿。良質な月岡の湯とアットホームな滞在',
        features: [
          { title: '豊かな緑と風情ある岩組みが調和する庭園露天風呂', desc: '月岡の名湯に身を浸しながら、そよぐ木々の葉音と温泉の心地よい温もりを堪能。手足を伸ばしてゆったりと寛げます。' },
          { title: '新潟名物と季節の旬菜をカジュアルに楽しむお食事スタイル', desc: '越後の郷土料理や地元の新鮮食材をふんだんに取り入れた料理。ファミリーやグループでも気兼ねなく美味しい食事を満喫できます。' },
          { title: '温泉街の散策に便利な立地と落ち着いた和の客室', desc: '月岡温泉街のメインストリートにも近く、足湯「湯足美」や地酒の試飲処「蔵」への散策拠点として抜群のロケーションです。' }
        ],
        reviewPoints: '楽天トラベル評価4.11点、口コミ1200件超。「露天風呂のお湯が本格的でとても気持ちよかった」「コスパが良く温泉街の散策にも便利だった」と好評です。'
      }
    ],
    areaGuide: {
      title: '月岡温泉街・歩いて楽しむ温泉街めぐりガイド',
      points: [
        { name: '新潟全蔵元の地酒を試飲できる「蔵（KURA）」', text: '月岡温泉街にある人気スポット。新潟県内にある全酒蔵のプレミアムな銘酒が揃い、お猪口片手にコイン式で多彩な日本酒の飲み比べ体験が楽しめます。' },
        { name: 'あしゆ「湯足美（ゆたび）」と演舞場', text: '温泉街の中心にある無料の足湯施設。手湯や足湯を楽しみながら、夜にはライトアップされた和傘のオブジェやイベント演舞を鑑賞できます。' },
        { name: '新潟米を使った手焼きせんべい体験「田（DEN）」', text: '新潟名物の特大せんべいを自分で炭火で焼き、醤油や七味で味付けして絵を描ける体験処。旅の記念やお土産にぴったりです。' }
      ]
    },
    furusatoStepTitle: '新潟県新発田市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「新潟県新発田市」クーポンを獲得', desc: '楽天ふるさと納税で新発田市を選び、寄付額の30%相当となるトラベルクーポンを返礼品として申し込みます。楽天ポイントの還元も通常通り受けられます。' },
      { step: 'Step 2: 上越新幹線・特急いなほや新潟駅直行バスで快適アクセス', desc: '東京駅から上越新幹線で新潟駅まで約2時間、新潟駅から月岡温泉直行バスで約45分。3年間の有効期間内で、冬の雪見風呂や秋の味覚シーズンに合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '華鳳、泉慶、風鈴屋などの対象プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-shima-onsen-retro-sekizenkan-stay',
    title: '【四万温泉×ふるさと納税】昭和レトロな重要文化財「元禄の湯」＆清流四万川！渓谷美湯宿ガイド｜積善館・やまぐち館・四万たむら',
    desc: '「四万の病を癒やす」と伝わる群馬県四万温泉を楽天ふるさと納税でお得に贅沢ステイ！日本最古の木造湯治宿・登録有形文化財の「積善館 佳松亭・山荘」、四万川沿いの巨大露天風呂「四万やまぐち館」、創業五百年の源泉宿「四万たむら」を徹底比較。上州牛会席や中之条町トラベルクーポン活用術を網羅。',
    keywords: '四万温泉 ふるさと納税,積善館 クーポン ふるさと納税,四万やまぐち館 宿泊,四万たむら ふるさと納税,中之条町 ふるさと納税 宿泊',
    targetCity: '群馬県中之条町',
    leadTitle: '四万の病を癒やす伝説の霊泉——清流四万川のエメラルドブルーと歴史ある木造建築が誘うタイムトリップ',
    leadP1: '群馬県吾妻郡中之条町、上信越高原国立公園の山あいにひっそりと佇む四万（しま）温泉。「四万（よんまん）の病を治す霊泉」という伝説からその名が付けられ、昭和29年には青森の酸ヶ湯、栃木の日光湯元とともに「国民保養温泉地」の第1号指定を受けた名湯です。温泉街の傍らを流れる四万川は、光の加減によって神秘的なエメラルドグリーンからコバルトブルーに輝く「四万ブルー」として知られ、せせらぎの音とともに深い安らぎを与えてくれます。',
    leadP2: '四万温泉の大きな特徴は、飲めば胃腸に良く、浸かれば肌が潤うナトリウム・カルシウム塩化物硫酸塩泉のまろやかな湯。そして、現存する日本最古の木造湯治建築として国の登録有形文化財に指定された「積善館」をはじめ、古き良き日本の湯治文化を今に伝える宿が数多く残されている点です。群馬県中之条町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより名門温泉旅館へお得に宿泊でき、喧騒を離れて心身をリセットする最高の休日が叶います。',
    hotelsKey: 'furusato-tax-shima-onsen-retro-sekizenkan-stay',
    hotelItems: [
      {
        key: 'shima_sekizenkan',
        tagline: '元禄四年創業・日本最古の木造湯治宿！大正ロマンあふれる登録有形文化財「元禄の湯」と山荘の贅',
        detailTitle: '四万温泉 積善館 佳松亭・山荘 —— アニメ映画の舞台としても名高い歴史の聖地。自然林に囲まれた大人の隠れ家',
        features: [
          { title: 'アーチ窓から光が差し込む大正モダン建築の傑作「元禄の湯」', desc: '昭和5年に建てられた登録有形文化財の浴室。タイル張りの床に五つの湯船が並び、蒸し風呂や自然光が織りなす空間で奇跡の湯浴みを体験できます。' },
          { title: '国の登録有形文化財「山荘」と松林を見下ろす高台の「佳松亭」', desc: '歴史ある宮大工の組子障子が見事な山荘客室や、専用露天風呂を備えた佳松亭。静寂な森に包まれながら上質な時間を過ごせます。' },
          { title: '二十四節気を表現した滋味豊かな季節の懐石料理', desc: '上州牛や群馬の清流魚、旬の高原野菜をふんだんに取り入れ、目と舌で季節の移ろいを感じられる洗練された夕食を味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.62点、口コミ1100件超。「元禄の湯の雰囲気が素晴らしくタイムスリップした感動」「歴史ある建物と佳松亭の静かなお部屋、お料理の美味しさに大満足」と絶賛。'
      },
      {
        key: 'shima_kashiwaya',
        tagline: '四万川の清流を真下に見下ろす源泉湯宿！三十帖の巨大露天風呂「お題目大露天風呂」と名物女将の紙芝居',
        detailTitle: '渓谷に佇む源泉湯宿 四万やまぐち館 —— 渓流のせせらぎがBGM。川風を感じる野趣あふれる二大露天風呂',
        features: [
          { title: '四万川の渓流にせり出す大迫力の「お題目大露天風呂」と「四万川の湯」', desc: '川のせせらぎを間近に聞きながら入る広大な露天風呂。毎分自然湧出する良質な源泉が惜しみなく注がれ、自然との一体感を味わえます。' },
          { title: '毎日開催される名物女将による紙芝居と心温まるおもてなし', desc: '四万温泉の民話や歴史を伝える名物イベント。アットホームで温かい接客が、家族連れや年配の方まで幅広い世代に愛されています。' },
          { title: '上州麦豚や地元採れたての清流食材を使った彩り会席', desc: '柔らかい上州豚の陶板焼きや手作りこんにゃく、岩魚の塩焼きなど、群馬の自然の恵みをぎゅっと詰め込んだ料理を楽しめます。' }
        ],
        reviewPoints: '楽天トラベル評価4.43点、口コミ2400件超。「川沿いのお風呂がとにかく最高でずっと入っていたかった」「女将さんの紙芝居も楽しく、お料理も美味しかった」と高評価。'
      },
      {
        key: 'shima_tamura',
        tagline: '室町時代創業・五百年の歴史を誇る老舗！七つの自家源泉から湧く毎分千六百リットルの湯巡り',
        detailTitle: '四万温泉 温泉三昧の宿 四万たむら —— 広大な敷地に点在する七つの温泉。森の野天風呂と本格会席料理',
        features: [
          { title: '敷地内から自噴する七つの自家源泉を引く多彩な湯船', desc: '森の中に佇む野天風呂「森のこだま」、茅葺き屋根の風情ある露天風呂、檜風呂など、館内だけで贅沢な湯巡りを心ゆくまで満喫できます。' },
          { title: '数寄屋造りの気品ある佇まいと広大な敷地の散策路', desc: '創業五百年の歴史を物語る格式高い建築と、清流が流れる緑豊かな庭園。四季折々の自然の息吹を感じながら静かに寛げます。' },
          { title: '伝統の出汁と旬の素材が織りなす山里会席ディナー', desc: '料理人が手間ひまかけて仕立てる月替わりの本格会席。上州牛やすき焼きなど、厳選された素材本来の美味しさを堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.34点、口コミ2100件超。「七つのお風呂がどれも個性的で温泉好きにはたまらない」「森の中の露天風呂が静かで最高に癒やされた」と評判です。'
      }
    ],
    areaGuide: {
      title: '四万温泉・四万ブルーと奥四万湖アクティビティガイド',
      points: [
        { name: '奥四万湖（四万川ダム）の「四万ブルー」カヌー体験', text: '四万温泉の最奥部にある奥四万湖。吸い込まれそうなエメラルドグリーンの湖面をカヌーやSUPで進むアクティビティは、息を呑む絶景体験として大人気です。' },
        { name: '四万の甌穴（おうけつ）群の自然散策', text: '四万川の清流が数万年の歳月をかけて川底の岩を削り出して作った巨大な穴（ポットホール）。群馬県の天然記念物に指定されており、青く澄んだ水流の迫力を間近に観察できます。' },
        { name: '落合通りと昭和レトロなスマートボール「柳屋遊技場」', text: '昔ながらの温泉街の風情が残る落合通り。手動で玉を弾く木製のスマートボールや射的が楽しめる遊技場があり、湯上がりのノスタルジックなひとときを過ごせます。' }
      ]
    },
    furusatoStepTitle: '群馬県中之条町ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「群馬県中之条町」クーポンを獲得', desc: '楽天ふるさと納税で中之条町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 東京駅から直通高速バス「四万温泉号」または特急草津でアクセス', desc: '東京駅八重洲口から四万温泉直通の高速バスで約3時間半、またはJR特急で中之条駅経由。3年間の有効期間内で、新緑や紅葉、雪景色に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '積善館、やまぐち館、四万たむらなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-kaike-onsen-ocean-crab-stay',
    title: '【皆生温泉×ふるさと納税】日本海の絶景オーシャンビュー＆境港直送松葉ガニ！米子名門宿ガイド｜皆生つるや・華水亭・白扇',
    desc: '日本海と白砂青松の弓ヶ浜を望む山陰屈指の美肌リゾート・鳥取県皆生温泉を楽天ふるさと納税でお得に満喫！数寄屋造りの名門老舗「皆生つるや」、全室海一望のパノラマ露天風呂「華水亭」、全室展望ジャグジー付き「湯喜望 白扇」を徹底比較。松葉ガニや鳥取和牛会席、米子市トラベルクーポン活用術を網羅。',
    keywords: '皆生温泉 ふるさと納税,皆生温泉 松葉ガニ ふるさと納税,皆生つるや クーポン,華水亭 皆生温泉 宿泊,米子市 ふるさと納税 旅行',
    targetCity: '鳥取県米子市',
    leadTitle: '海から湧き出る塩類泉と大山・日本海の絶景——境港直送の活松葉ガニと鳥取和牛を味わい尽くす山陰のリゾート',
    leadP1: '鳥取県米子市、弓ヶ浜半島の日本海に面した皆生（かいけ）温泉。明治33年に地元の漁師が海中に湧き出す温泉を発見したことから始まった「海から湧く温泉」です。泉質はナトリウム・カルシウム塩化物泉で、豊富な塩分が肌に薄いヴェールを作り出し、入浴後の保温・保湿効果が極めて高いことから「塩の美肌湯」として全国に名を馳せています。客室や露天風呂からは、青く広がる日本海と白砂青松の海岸線、そして背後には名峰・大山（だいせん）の雄姿を望むことができます。',
    leadP2: '皆生温泉の最大の魅力は、隣接する日本有数の漁港「境港」から毎日直送される新鮮な海の幸。冬には身がぎっしりと詰まった本場「松葉ガニ」のフルコース、春から夏には脂の乗ったノドグロや幻のモサエビ、そして肉質日本一に輝いた「鳥取和牛」のステーキなど、山陰屈指の美食が揃います。鳥取県米子市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンによりオーシャンビューの名門宿へお得に宿泊でき、特別な記念日や家族旅行が最高の思い出になります。',
    hotelsKey: 'furusato-tax-kaike-onsen-ocean-crab-stay',
    hotelItems: [
      {
        key: 'kaike_toukouen',
        tagline: '創業から受け継ぐ数寄屋建築の美と名庭園！日本海を望む大浴場と境港の松葉ガニ・鳥取和牛会席',
        detailTitle: '皆生温泉 皆生つるや 四季を奏でるさらさの宿 —— 伝統と格式の老舗旅館。真心のこもったもてなしと山陰の旬味',
        features: [
          { title: '優美な数寄屋造りの建築と四季折々の草花が彩る館内', desc: '日本旅館の落ち着きと品格が漂う館内。手入れの行き届いた日本庭園や生花が飾られ、静かで上質な大人の寛ぎを提供します。' },
          { title: '海風を感じながら入る名湯皆生の塩化物泉大浴場と露天風呂', desc: '体の芯までぽかぽかと温まる良質な皆生の湯。露天風呂や広々とした内湯で、旅の疲れを心地よく癒やすことができます。' },
          { title: '境港水揚げの松葉ガニや鳥取和牛を盛り込んだ本格会席', desc: '鮮度抜群の日本海の魚介や、ブランド牛「鳥取和牛」を贅沢に使用。出汁の風味豊かな会席料理をお部屋や個室食事処で味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.60点、口コミ1300件超。「スタッフのおもてなしが素晴らしく料理も一つひとつ丁寧で美味しい」「お風呂のお湯が良くてぐっすり眠れた」と大好評。'
      },
      {
        key: 'kaike_kasuitei',
        tagline: '全室オーシャンビューの絶景名門リゾート！日本海と弓ヶ浜の水平線を望む展望露天風呂と贅沢スパ',
        detailTitle: '皆生温泉 華水亭（かすいてい） —— 海の気品漂うラグジュアリーホテル。波の音を聞く展望露天と極上ダイニング',
        features: [
          { title: '窓一面に広がる日本海と弓ヶ浜の雄大なオーシャンビュー', desc: 'すべての客室が海に面した贅沢な設計。朝日に輝く水面や夕暮れの茜空、夜の漁火（いさりび）など、時間とともに移ろう海の表情を独り占めできます。' },
          { title: '水平線と一体化する展望大浴場と波打ち際の露天風呂', desc: '潮騒に包まれながら楽しむ名湯の湯浴み。自家源泉を引く良質な温泉とサウナで、極上のリラクゼーションを体験できます。' },
          { title: '松葉ガニや鮑、鳥取和牛を五感で味わう季節の特選会席', desc: '料理長が選び抜いた山陰の最高級食材。彩り鮮やかな器に盛り付けられた芸術的な料理が、特別な夜を優雅に演出します。' }
        ],
        reviewPoints: '楽天トラベル評価4.66点、口コミ1500件超。「部屋からの海の眺めが息を呑むほど美しく、お風呂も最高」「お料理もサービスも一流で大満足の滞在だった」と高評価。'
      },
      {
        key: 'kaike_shikian',
        tagline: '全室に展望ジャグジーまたは露天風呂を完備！白砂青松の海岸線を望む畳敷きの和モダンリゾート',
        detailTitle: '皆生温泉 湯喜望 白扇（はくせん） —— 素足で過ごす全館畳敷きの温もり。海を一望する客室展望風呂の贅',
        features: [
          { title: '全室から日本海を一望できる展望風呂・ジャグジー付き客室', desc: 'お部屋にいながら波の音を聞き、水平線を眺めて入浴できる贅沢なプライベートバス。誰にも気兼ねなく温泉タイムを楽しめます。' },
          { title: '玄関から全館畳敷きの心地よい空間と海を望む大浴場', desc: 'スリッパなしで歩ける畳敷きの館内は足触りが良くリラックス効果抜群。海を真正面に望む大浴場や露天風呂も完備しています。' },
          { title: '境港直送の新鮮なカニ料理や山陰の山海の恵み会席', desc: '日本海の旬魚のお造りやカニ料理、鳥取和牛など、山陰ならではの味覚をプライベートなお部屋食または個室でゆっくり味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.52点、口コミ1100件超。「全館畳敷きがとても気持ちよく、部屋のお風呂からの海の景色が最高」「お料理がボリューム満点で美味しかった」と評判です。'
      }
    ],
    areaGuide: {
      title: '皆生温泉・境港水木しげるロード＆名峰大山ドライブガイド',
      points: [
        { name: '境港「水木しげるロード」と海鮮市場での買い物', text: '皆生温泉から車で約20分。170体以上のブロンズ像が並ぶ水木しげるロードの散策や、境港水産物直売センターで獲れたての松葉ガニや干物を購入できます。' },
        { name: '名峰・大山（伯耆富士）のドライブと大山まきばみるくの里', text: '標高1,729メートルの中国地方最高峰・大山。放牧された牛たちを眺めながら濃厚なソフトクリームを味わえる「大山まきばみるくの里」や大山寺の参拝が人気です。' },
        { name: '皆生海岸遊歩道での朝の散歩と日本の夕陽百選', text: '温泉街の目の前に広がる海岸遊歩道。白砂青松の海岸線と日本海に沈む夕日は「日本の夕陽百選」にも選ばれる絶景スポットです。' }
      ]
    },
    furusatoStepTitle: '鳥取県米子市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「鳥取県米子市」クーポンを獲得', desc: '楽天ふるさと納税で米子市を寄付先に選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 米子鬼太郎空港や山陰道・JR米子駅経由で快適アクセス', desc: '米子鬼太郎空港からタクシーやバスで約20分、米子駅からも約15分の好立地。3年間の有効期間内で、冬のカニシーズンや夏の海レジャーに合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '皆生つるや、華水亭、白扇などのオーシャンビュー客室プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-takeo-onsen-romon-pottery-stay',
    title: '【武雄温泉×ふるさと納税】国重文・武雄温泉楼門＆美肌とろとろ湯！焼き物の里宿特集｜京都屋・春慶屋・なかます旅館',
    desc: '千三百年余の歴史を誇る佐賀の名湯・武雄温泉を楽天ふるさと納税でお得に贅沢旅！大正ロマンのアンティーク宿「京都屋」、展望露天風呂と佐賀牛の「ホテル春慶屋」、楼門徒歩1分の老舗「なかます旅館」を徹底比較。有田焼・波佐見焼巡りや武雄市トラベルクーポン活用術を網羅。',
    keywords: '武雄温泉 ふるさと納税,武雄温泉 旅館 ふるさと納税,武雄温泉 京都屋 クーポン,春慶屋 武雄 宿泊,武雄市 ふるさと納税 旅行',
    targetCity: '佐賀県武雄市',
    leadTitle: '竜宮城を思わせる朱塗りの楼門と弱アルカリ性美肌の湯——有田焼・波佐見焼の器と極上佐賀牛を愛でる旅',
    leadP1: '佐賀県武雄市、西九州新幹線の開通でアクセスが飛躍的に向上した武雄（たけお）温泉。開湯は千三百年以上前の神話の時代と伝わり、宮本武蔵やシーボルト、伊達政宗など歴史上の偉人たちが湯治に訪れた記録が残されています。武雄温泉のシンボルである朱塗りの「武雄温泉楼門」は、東京駅の設計で知られる唐津出身の建築家・辰野金吾が手がけた国の重要文化財。釘を一本も使わずに建てられた竜宮城のような楼門をくぐると、歴史ある大衆浴場「元湯」や「武雄温泉新館」が立ち並び、タイムスリップしたような情緒が漂います。',
    leadP2: '武雄温泉のお湯は、透明で肌触りが非常に滑らかな弱アルカリ性単純温泉。抜群の保湿力と疲労回復効果から「美人の湯」として古くから親しまれています。周辺には有田焼・伊万里焼・波佐見焼といった日本を代表する陶磁器の産地が広がり、夕食には美しい陶器に盛り付けられた最高級ブランド牛「佐賀牛」のステーキやすき焼き、名物「温泉湯豆腐」を堪能できます。佐賀県武雄市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより風情ある名宿へお得に宿泊でき、九州の豊かな文化と温泉を満喫する最高の旅が叶います。',
    hotelsKey: 'furusato-tax-takeo-onsen-romon-pottery-stay',
    hotelItems: [
      {
        key: 'takeo_kyotoya',
        tagline: '創業百十余年・大正ロマンの香るクラシック旅館！蓄音機やアンティーク家具が彩る空間と自家源泉美肌の湯',
        detailTitle: '武雄温泉 大正浪漫の宿 京都屋 —— クラシカルな気品と温もり。クラシックカーでの送迎と自家源泉の掛け流し',
        features: [
          { title: '大正浪漫のアンティーク家具や蓄音機が並ぶレトロモダンな館内', desc: '一歩足を踏み入れると大正時代のサロンのような優雅な空間。珈琲の香りが漂う喫茶去や、クラシックカーでの駅送迎など特別な演出が魅力です。' },
          { title: '自家源泉から湧き出る武雄温泉掛け流しの大浴場と露天風呂', desc: '敷地内から湧く良質な弱アルカリ性温泉。とろりとした肌触りの名湯に浸かりながら、心身ともに解きほぐされる湯浴みを堪能できます。' },
          { title: 'A5等級佐賀牛や若楠ポーク、有田鶏を味わう特選和食会席', desc: '佐賀の恵まれた大自然が育んだ極上牛。陶板焼きやしゃぶしゃぶなど、素材の旨味を最大限に引き出した料理を味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.39点、口コミ1200件超。「レトロなアンティークの雰囲気が最高で珈琲も美味しい」「お風呂のお湯がトロトロで接客も温かかった」と大人気です。'
      },
      {
        key: 'takeo_shunkei',
        tagline: '創業六百余年の歴史を誇る老舗！武雄の街並みと御船山を一望する最上階展望露天風呂と佐賀牛会席',
        detailTitle: '武雄温泉 ホテル春慶屋（しゅんけいや） —— 展望露天風呂から望む絶景。掛け流しの名湯と本格会席料理の宿',
        features: [
          { title: '最上階から武雄の山並みと街並みを見晴らす展望露天風呂', desc: '開放感抜群の屋上展望露天風呂。澄み切った風を感じながら、掛け流しの美肌の湯に浸かり至福のリフレッシュを味わえます。' },
          { title: '源泉掛け流し100％の贅沢な天然温泉', desc: '一切加水・循環なしの純生温泉。肌にしっとりと馴染む武雄ならではの極上のお湯を心ゆくまで満喫できます。' },
          { title: '佐賀牛の陶板焼きや名物温泉湯豆腐を味わう季節の会席', desc: 'とろけるような食感の佐賀牛や、温泉水で炊き上げる名物温泉湯豆腐。山海の幸をバランスよく盛り込んだ会席料理が好評です。' }
        ],
        reviewPoints: '楽天トラベル評価4.42点、口コミ1100件超。「最上階のお風呂からの眺めが素晴らしくお湯も最高」「お料理の佐賀牛がとても美味しくスタッフも親切だった」と評判。'
      },
      {
        key: 'takeo_nakamasu',
        tagline: '武雄温泉楼門まで徒歩わずか1分の好立地！アットホームな老舗旅館で味わう名湯と家庭的な郷土料理',
        detailTitle: '武雄温泉 なかます旅館 —— 楼門のすぐそばに佇む素朴なやすらぎ。元湯への湯巡りと心のこもったもてなし',
        features: [
          { title: '国指定重要文化財「武雄温泉楼門・元湯」まで徒歩1分の絶好アクセス', desc: '歴史ある楼門や元湯、立ち寄り湯へいつでも気軽に出かけられるロケーション。朝風呂や夜のライトアップ散策にも最適です。' },
          { title: '武雄の良質な天然温泉を引く落ち着いた浴室', desc: '滑らかな肌触りの弱アルカリ性単純温泉。混雑を気にせず、静かにゆったりとお湯の良さを実感できます。' },
          { title: '地元佐賀の食材を活かした温かい手作り和食膳', desc: '旬の魚や地元野菜をふんだんに取り入れた家庭的な料理。気取らない温かいおもてなしが旅の疲れを優しく癒やしてくれます。' }
        ],
        reviewPoints: '楽天トラベル評価4.33点。「楼門が目の前で観光に最高のロケーション」「女将さんの接客が温かく、お風呂もお湯が良くてとても落ち着けた」と好評です。'
      }
    ],
    areaGuide: {
      title: '武雄温泉・御船山楽園＆武雄市図書館観光ガイド',
      points: [
        { name: '御船山楽園（みふねやまらくえん）の四季の花々とチームラボ展示', text: '武雄鍋島家が造営した十五万坪の大庭園。春のツツジや秋の紅葉ライトアップ、そしてチームラボによる廃墟や庭園を使った大規模アート展が世界中から注目されています。' },
        { name: '武雄温泉楼門と新館の見学', text: '辰野金吾設計の国の重要文化財。楼門の天井には干支の四つの彫刻が施されており、東京駅ドーム天井の八つの干支と合わせると十二支が完成するという歴史ミステリーも魅力です。' },
        { name: '武雄市図書館でのモダンな読書＆カフェ体験', text: '蔦屋書店とスターバックスが併設された話題の公立図書館。吹き抜けの洗練された空間で珈琲を片手に本を探す心地よい時間を過ごせます。' }
      ]
    },
    furusatoStepTitle: '佐賀県武雄市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「佐賀県武雄市」クーポンを獲得', desc: '楽天ふるさと納税で武雄市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 西九州新幹線やJR特急リレーかもめで博多から約1時間', desc: '博多駅から特急と西九州新幹線を乗り継ぎ約1時間と抜群のアクセス。3年間の有効期間内で、陶器市シーズンや紅葉ライトアップに合わせて旅行を計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '京都屋、ホテル春慶屋、なかます旅館などの対象宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  }
];

function generateArticlePage(art) {
  const hotelObj = allHotels[art.hotelsKey] || {};

  const hotelCardsCode = art.hotelItems.map((h, idx) => {
    const data = hotelObj[h.key] || {};
    const hotelName = data.hotelName || '名門温泉旅館';
    const imgUrl = data.hotelImageUrl || 'https://placehold.co/800x500/e2e8f0/1e293b?text=Hotel+Photo';
    const rating = data.reviewAverage || 4.5;
    const revCount = data.reviewCount || 100;
    const chargeStr = data.hotelMinCharge ? ('¥' + Number(data.hotelMinCharge).toLocaleString() + '〜') : '要問い合わせ';
    const address = (data.address1 || '') + ' ' + (data.address2 || '');
    const affiliateUrl = data.hotelInformationUrl || 'https://travel.rakuten.co.jp/';
    const hotelNo = data.hotelNo || '';

    const featuresCode = h.features.map(f => {
      return `
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ${f.title}
                    </h5>
                    <p className="text-stone-600 leading-relaxed">${f.desc}</p>
                  </div>`;
    }).join('');

    return `
          {/* ホテル ${idx + 1} */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="${imgUrl}"
                alt="${hotelName}"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第${idx + 1}選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ ${rating}（口コミ ${revCount}件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">${art.targetCity}</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ${hotelName}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  ${h.tagline}
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ${h.detailTitle}
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  ${featuresCode}
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">${h.reviewPoints}</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>${address}</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>${chargeStr} /人</div>
                ${hotelNo ? `<div><span className="font-semibold text-stone-700">楽天施設ID：</span>${hotelNo}</div>` : ''}
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="${affiliateUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】${hotelName} の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>`;
  }).join('\n');

  const areaPointsCode = art.areaGuide.points.map((pt, idx) => {
    return `
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">${idx + 1}</span>
                ${pt.name}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                ${pt.text}
              </p>
            </div>`;
  }).join('');

  const stepsCode = art.furusatoSteps.map((st, idx) => {
    return `
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                ${st.step}
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                ${st.desc}
              </p>
            </div>`;
  }).join('');

  return `import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${art.title.replace(/'/g, "\\'")}',
  description: '${art.desc.replace(/'/g, "\\'")}',
  keywords: '${art.keywords.replace(/'/g, "\\'")}',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/${art.slug}',
  },
  openGraph: {
    title: '${art.title.replace(/'/g, "\\'")}',
    description: '${art.desc.replace(/'/g, "\\'")}',
    url: 'https://croud-travel.pages.dev/${art.slug}',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '${art.title.replace(/'/g, "\\'")}',
    description: '${art.desc.replace(/'/g, "\\'")}',
    author: {
      '@type': 'Organization',
      name: 'クラウドトラベル 観光・ふるさと納税調査班',
      url: 'https://croud-travel.pages.dev/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラウドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png',
      },
    },
    datePublished: '2026-09-10T16:48:00+09:00',
    dateModified: '2026-09-10T16:48:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/${art.slug}',
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 antialiased font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-1.5">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>/</span>
        <Link href="/travel-savings-guide" className="hover:underline">ふるさと納税旅行ガイド</Link>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">${art.title}</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>${art.targetCity} ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          ${art.title}
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          ${art.desc}
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            ${art.leadTitle}
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ${art.leadP1}
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ${art.leadP2}
          </p>
        </section>

        {/* 比較サマリー表 */}
        <section className="bg-amber-50/50 rounded-3xl p-6 sm:p-8 border border-amber-100/80 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            今回ご紹介する厳選3名宿の比較サマリー
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white rounded-xl shadow-xs">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-700">
                  <th className="p-3 font-bold">宿名</th>
                  <th className="p-3 font-bold">評価</th>
                  <th className="p-3 font-bold">最大の特徴</th>
                  <th className="p-3 font-bold">おすすめの過ごし方</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                ${art.hotelItems.map((h, idx) => {
                  const data = hotelObj[h.key] || {};
                  const hotelName = data.hotelName || '名門温泉旅館';
                  const rating = data.reviewAverage || 4.5;
                  return `
                <tr>
                  <td className="p-3 font-bold text-amber-900">${hotelName}</td>
                  <td className="p-3 font-bold">★ ${rating}</td>
                  <td className="p-3 text-stone-600">${h.tagline}</td>
                  <td className="p-3 text-stone-600">${idx === 0 ? '最高峰の歴史・名庭園ステイ' : idx === 1 ? '絶景の眺望・美食の饗宴' : 'アットホーム・快適な温泉街散歩'}</td>
                </tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>
        </section>

        {/* ホテル詳細カード一覧 */}
        <section className="space-y-8">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🏆</span> 厳選3宿の詳細レビュー＆ふるさと納税活用ガイド
          </h2>
${hotelCardsCode}
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> ${art.areaGuide.title}
          </h2>
          <div className="grid gap-4">
${areaPointsCode}
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              ${art.furusatoStepTitle}
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">
${stepsCode}
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-amber-500 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg hover:opacity-95 transition"
            >
              <span>楽天ふるさと納税トラベルクーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* 内部リンク・ハブ導線 */}
        <section className="border-t border-stone-200 pt-8 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            関連するふるさと納税トラベル特集
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-600">
            <li>
              <Link href="/travel-savings-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> ふるさと納税×旅行 完全攻略ハブページトップ
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-after-booking-discount-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 予約済みでも間に合う！楽天トラベル「あとから適用」ガイド
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-kusatsu-onsen-yubatake-heritage-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 草津温泉 湯畑徒歩圏内の老舗名宿特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-arima-onsen-gold-silver-kobe-beef-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 有馬温泉 金泉・銀泉＆極上神戸牛ステイ特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
`;
}

for (const art of articles) {
  const dir = path.join(__dirname, 'src/app', art.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const content = generateArticlePage(art);
  const filePath = path.join(dir, 'page.tsx');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Generated: ${filePath} (${content.length} chars)`);
}
