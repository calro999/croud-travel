const fs = require('fs');
const path = require('path');

const round102Hotels = JSON.parse(fs.readFileSync('round102_hotels.json', 'utf8'));

// Convert to lookup map
const allHotels = {};
for (const [slug, arr] of Object.entries(round102Hotels)) {
  allHotels[slug] = {};
  for (const item of arr) {
    allHotels[slug][item.key] = item.hotel;
  }
}

const articles = [
  {
    slug: 'furusato-tax-ibusuki-onsen-sand-bath-ocean-stay',
    title: '【指宿温泉×ふるさと納税】名物天然砂むし温泉＆錦江湾オーシャンビュー！絶景リゾート宿特集｜白水館・指宿ロイヤル・シーサイドホテル',
    desc: '世界唯一の天然砂むし温泉と薩摩富士・開聞岳を望む鹿児島県指宿温泉を楽天ふるさと納税でお得に贅沢ステイ！千坪の元禄風呂と砂むし温泉を誇る名門「指宿白水館」、絶景高台オーシャンビューの「指宿ロイヤルホテル」、波打ち際の砂むし温泉完備「指宿シーサイドホテル」を徹底比較。指宿市トラベルクーポン活用術を網羅。',
    keywords: '指宿温泉 ふるさと納税,指宿 砂むし温泉 ふるさと納税,指宿白水館 クーポン,指宿ロイヤルホテル 宿泊,指宿市 ふるさと納税 旅行',
    targetCity: '鹿児島県指宿市',
    leadTitle: '波打ち際で砂に埋もれる奇跡の温熱体験——錦江湾の絶景と薩摩の豊かな山海の幸を味わう南国温泉リゾート',
    leadP1: '鹿児島県薩摩半島の南端に位置する指宿（いぶすき）温泉。温暖な気候とヤシの並木が南国ムードを醸し出す、九州屈指の温泉保養地です。指宿の代名詞ともいえるのが、海岸の砂浜に自噴する高温の温泉を利用した世界唯一の「天然砂むし温泉（砂風呂）」。波の音を聞きながら温かい砂に包まれると、砂の重みと温泉の熱・圧力によって全身の血行が劇的に促進され、わずか10分〜15分で玉のような汗が噴き出します。医学的にも通常の温泉の数倍のデトックス効果があると実証されています。',
    leadP2: '砂むし温泉で汗を流した後は、広大な大浴場で美肌成分メタけい酸を豊富に含む塩化物泉に浸かり、錦江湾や薩摩富士「開聞岳」の雄姿を仰ぐ贅沢。夕食には鹿児島が世界に誇る「鹿児島黒豚」のしゃぶしゃぶや「鹿児島黒毛和牛」、近海で獲れたキビナゴのお造り、本場薩摩揚げ、そして極上の本格芋焼酎に舌鼓を打ちます。鹿児島県指宿市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの名門旅館へお得に宿泊でき、特別な南国リフレッシュ旅が叶います。',
    hotelsKey: 'furusato-tax-ibusuki-onsen-sand-bath-ocean-stay',
    hotelItems: [
      {
        key: 'ibusuki_hakusuikan',
        tagline: '創業以来の歴史を誇る指宿最高峰の名門！千坪の「元禄風呂」と館内専用砂むし温泉、薩摩伝承館',
        detailTitle: '鹿児島 砂むし温泉 指宿白水館 —— 日本の美と歴史が息づく迎賓館。圧巻の元禄風呂と錦江湾庭園の贅',
        features: [
          { title: '江戸時代の風呂文化を再現した千坪の巨大大浴場「元禄風呂」', desc: '浮世絵壁画や石橋、打たせ湯、樽風呂などが並ぶ圧巻の空間。館内に併設された専用の「砂むし温泉」と合わせて至極の湯巡りが叶います。' },
          { title: '敷地内に広がる広大な松の庭園と錦江湾のパノラマビュー', desc: '海沿いに広がる見事な日本庭園。敷地内の美術館「薩摩伝承館」では、西郷隆盛ゆかりの品や薩摩焼の至宝を鑑賞できます。' },
          { title: '鹿児島黒牛・黒豚や近海の新鮮魚介を極めた特選和食会席', desc: '料理人が腕を振るう華やかな本格会席。出汁の効いた黒豚しゃぶしゃぶや季節の造り、地元の名芋焼酎とともに味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.60点、口コミ3800件超。「元禄風呂の広さと砂むし温泉が最高」「庭園も美しく料理も接客もパーフェクトで感動した」と絶賛の嵐。'
      },
      {
        key: 'ibusuki_royal',
        tagline: '錦江湾と開聞岳を見晴らす高台の特等席！美と健康をテーマにしたオーシャンビュー絶景リゾートホテル',
        detailTitle: '指宿温泉 指宿ロイヤルホテル —— 太平洋を望む絶景ロケーション。タラソテラピーと地元食材の健康会席',
        features: [
          { title: '海と空が一体化する高台のオーシャンビュー露天風呂', desc: '錦江湾を行き交う船や朝日に輝く水平線を望む絶景露天風呂。海風を感じながら、肌にしっとり馴染む美肌の湯に浸かれます。' },
          { title: '女性やカップルに大人気のヨガ＆リラクゼーション体験', desc: '朝日を浴びながらのモーニングヨガや、エステサロン、海を望むテラスラウンジなど、心と身体をリセットするウェルネスプログラムが充実しています。' },
          { title: '鹿児島の旬の無農薬野菜と黒豚・黒牛を味わう創作美食', desc: '契約農家から届く新鮮野菜や、鹿児島黒豚のせいろ蒸しなど、美味しく身体に優しいディナーコースが高く評価されています。' }
        ],
        reviewPoints: '楽天トラベル評価4.56点、口コミ1400件超。「高台からの海の眺めが息を呑むほど綺麗」「スタッフの気配りが温かく、食事もヘルシーで大満足」と高評価。'
      },
      {
        key: 'ibusuki_seaside',
        tagline: '波打ち際に建つ全室オーシャンビュー！館内で体験できる名物砂むし温泉と海を望む展望大浴場',
        detailTitle: '指宿砂むし温泉 指宿シーサイドホテル —— 錦江湾の渚に佇む名門。潮騒を聞きながら砂むしと名湯を堪能',
        features: [
          { title: '雨天でも安心して体験できる館内直結の本格砂むし温泉', desc: '天候を気にせずいつでも砂むし温泉を体験可能。専任の砂かけスタッフが丁寧に砂をかけてくれ、体の芯からデトックスできます。' },
          { title: '錦江湾を一望する展望大浴場と海辺の絶好アクセス', desc: '広々とした大浴場の窓一面に広がる穏やかな海。海辺の遊歩道への散歩も気軽に楽しめます。' },
          { title: '黒豚しゃぶしゃぶやさつま揚げ、旬魚を味わう郷土会席料理', desc: '鹿児島の名物料理をふんだんに盛り込んだ夕食。気取らずに地元の美味しい郷土の味を堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.11点、口コミ2200件超。「館内で砂むし温泉に入れてとても便利だった」「部屋からのオーシャンビューが素晴らしく、黒豚も美味しかった」と好評です。'
      }
    ],
    areaGuide: {
      title: '指宿温泉・開聞岳＆砂むし会館「砂楽」観光ガイド',
      points: [
        { name: '砂むし会館「砂楽（さらく）」での海岸砂むし体験', text: '指宿温泉街の中心にある公営の砂むし施設。潮が引いている時間帯には波打ち際の砂浜で波の音を聞きながら砂むし温泉を楽しむことができます。' },
        { name: '薩摩富士「開聞岳」と長崎鼻（竜宮神社）', text: '標高924メートルの美しい円錐形の秀峰・開聞岳。薩摩半島最南端の岬「長崎鼻」からは、開聞岳と青い海の雄大なコントラストが広がり、浦島太郎伝説の竜宮神社もあります。' },
        { name: '池田湖と「イッシー」伝説、大うなぎ観察', text: '九州最大のカルデラ湖。春には菜の花畑が一面に咲き誇り、体長2メートル近くになる天然記念物の巨大オオウナギを観察できます。' }
      ]
    },
    furusatoStepTitle: '鹿児島県指宿市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「鹿児島県指宿市」クーポンを獲得', desc: '楽天ふるさと納税で指宿市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 鹿児島空港やJR観光特急「指宿のたまて箱」でアクセス', desc: '鹿児島中央駅から人気観光特急「指宿のたまて箱（いぶたま）」で約50分。3年間の有効期間内で、気候温暖な冬の避寒や夏の南国旅に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '指宿白水館、指宿ロイヤルホテル、指宿シーサイドホテルなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-nyuto-onsen-secret-milky-stay',
    title: '【乳頭温泉郷×ふるさと納税】日本屈指の乳白色秘湯＆田沢湖畔ステイ！湯治宿ガイド｜休暇村乳頭温泉郷・田沢湖レイクリゾート・駒ヶ岳温泉',
    desc: '十和田八幡平国立公園の深山に湧く日本屈指の秘湯・秋田県乳頭温泉郷＆田沢湖を楽天ふるさと納税でお得に巡る！二大名湯を引くブナの原生林宿「休暇村 乳頭温泉郷」、田沢湖畔の高原リゾート「田沢湖レイクリゾート」、清流貸切露天風呂と手打ち十割そばの「駒ヶ岳温泉」を徹底比較。山の芋鍋や仙北市トラベルクーポン活用術を網羅。',
    keywords: '乳頭温泉郷 ふるさと納税,乳頭温泉 秘湯 ふるさと納税,休暇村 乳頭温泉郷 クーポン,田沢湖レイクリゾート ふるさと納税,仙北市 ふるさと納税 宿泊',
    targetCity: '秋田県仙北市',
    leadTitle: 'ブナの原生林に煙る乳白色のにごり湯——先達川の清流と囲炉裏の炭火、秋田名物「山の芋鍋」に癒やされる秘湯旅',
    leadP1: '秋田県仙北市、十和田八幡平国立公園・乳頭山の山麓に点在する乳頭温泉郷（にゅうとうおんせんきょう）。鶴の湯、妙乃湯、大釜、蟹場、孫六、黒湯、休暇村の七つの宿がそれぞれ独自の源泉を持ち、「秘湯ファンの聖地」として日本全国のみならず世界中から旅人を引き寄せています。樹齢数百年のブナの原生林に囲まれた温泉地には、古き良き湯治文化の面影が色濃く残り、木造の湯小屋から立ち上る白い硫黄の湯けむりとせせらぎの音が、訪れる者を別世界へと誘います。',
    leadP2: '乳頭温泉の最大の醍醐味は、濃厚な湯の花が舞う乳白色の天然硫黄泉に浸かり、大自然の静寂に身を委ねること。湯上がりには、地元の契約農家で収穫された長芋をすりおろして団子にした秋田名物「山の芋鍋」や、炭火でじっくり焼いた岩魚の塩焼き、比内地鶏、きりたんぽ鍋など、滋味あふれる郷土料理を堪能できます。秋田県仙北市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの乳頭・田沢湖の名宿へお得に宿泊でき、心洗われる本物の秘湯体験が叶います。',
    hotelsKey: 'furusato-tax-nyuto-onsen-secret-milky-stay',
    hotelItems: [
      {
        key: 'nyuto_kyukamura',
        tagline: 'ブナの原生林に抱かれる乳頭温泉郷の拠点！「田沢湖高原の湯」と「乳頭の湯」の二大名湯掛け流しと秋田ビュッフェ',
        detailTitle: '休暇村 乳頭温泉郷 —— 深い森に溶け込む癒やしの宿。二つの泉質を愉しむ露天風呂とブナ林散策',
        features: [
          { title: '乳白色の硫黄泉「乳頭の湯」と茶褐色の重曹泉「田沢湖高原の湯」', desc: '一つの宿で異なる二つの自家源泉を引く贅沢。大浴場と森を望む露天風呂で、泉質の違いをじっくりと比較体験できます。' },
          { title: 'ブナの巨木が立ち並ぶ原生林ウォーキングロードに直結', desc: '宿の一歩外は手つかずの自然林。朝の澄み切った空気を吸い込みながらの森林浴や野鳥観察が楽しめます。' },
          { title: '秋田名物きりたんぽ鍋やハタハタ、稲庭うどんが並ぶ郷土ビュッフェ', desc: '地元の味覚をふんだんに取り入れたディナー。職人が目の前で焼き上げる料理や手作りスイーツも大人気です。' }
        ],
        reviewPoints: '楽天トラベル評価4.51点、口コミ1200件超。「二種類の温泉がどちらも最高で肌がすべすべになった」「森に囲まれた環境と秋田の郷土料理バイキングに大満足」と絶賛。'
      },
      {
        key: 'nyuto_plazatadawako',
        tagline: '田沢湖畔に佇む広大な高原リゾート！肌触り滑らかな天然温泉大浴場と秋田の旬魚・郷土料理バイキング',
        detailTitle: '天然温泉 田沢湖レイクリゾート —— 田沢湖観光の特等席。広々とした温泉大浴場と愛犬同伴客室も完備',
        features: [
          { title: '開放感あふれる広々とした天然温泉大浴場とサウナ', desc: '美肌効果の高い単純温泉に浸かり、手足を伸ばしてゆったりリフレッシュ。冷水風呂とサウナで「ととのい」も体験できます。' },
          { title: '日本一深い神秘の湖「田沢湖」への絶好のアクセス拠点', desc: 'たつこ像や御座石神社など田沢湖畔の名所巡りに最適。広大な敷地にはドッグランも完備され、ペット連れ旅行にも人気です。' },
          { title: '比内地鶏スープの鍋や秋田牛、地酒が揃う豪華ディナービュッフェ', desc: 'オープンキッチンで焼き上げる牛ステーキや、秋田の伝統料理が並ぶ満足度の高いバイキング料理です。' }
        ],
        reviewPoints: '楽天トラベル評価4.33点、口コミ1400件超。「お部屋が広くて清潔、お風呂も広々として気持ちよかった」「バイキングの品数が多く郷土料理が美味しかった」と好評。'
      },
      {
        key: 'nyuto_komagatake',
        tagline: '秋田駒ヶ岳の山麓に佇む木造りの温もり宿！渓流沿いの無料貸切野天風呂と手打ち十割そばの隠れ家',
        detailTitle: '駒ヶ岳温泉 —— 水車が回る静寂の一軒宿。渓流のせせらぎを聞く貸切露天風呂と乳頭温泉鶴の湯への夜間送迎',
        features: [
          { title: '先達川の渓流沿いに設えられた完全無料の貸切野天風呂', desc: '川のせせらぎと満天の星空を眺めながら入る貸切露天風呂。空いていれば何度でも自由に利用できる贅沢なプライベート温泉です。' },
          { title: '名湯「乳頭温泉 鶴の湯」への毎晩の無料送迎バスサービス', desc: '宿泊者限定で、夜の風情ある鶴の湯へ無料で送迎。提灯の明かりに照らされた白濁の大露天風呂での湯浴みを体験できます。' },
          { title: '店主が毎朝打つ本格十割そばと名物「山の芋鍋」会席', desc: '香り高い手打ちそばと、囲炉裏風の食事処でいただく秋田の山里会席。素朴で温かいもてなしが心に染み渡ります。' }
        ],
        reviewPoints: '楽天トラベル評価4.63点、口コミ700件超。「鶴の湯への送迎サービスが素晴らしく、宿のお風呂も料理も十割そばも最高」「静かで温かい最高の隠れ宿」と熱狂的なリピーター多数。'
      }
    ],
    areaGuide: {
      title: '乳頭温泉郷・田沢湖＆角館武家屋敷ガイド',
      points: [
        { name: '日本一深い神秘の湖「田沢湖」と黄金のたつこ像', text: '水深423.4メートルを誇る瑠璃色の湖。湖畔に佇むブロンズ像「たつこ像」や、湖鳥が遊ぶ透明度抜群の水面を遊覧船から楽しめます。' },
        { name: '乳頭温泉郷の「湯めぐり号」と湯めぐり帖', text: '七つの宿を結ぶ巡回バス「湯めぐり号」。宿泊者限定の「湯めぐり帖」を購入すれば、各宿の個性豊かな名湯露天風呂を1日中めぐることができます。' },
        { name: '「みちのくの小京都」角館武家屋敷通りの散策', text: '仙北市にある江戸時代の武家屋敷が立ち並ぶ重要伝統的建造物群保存地区。春のシダレザクラ、秋の紅葉、黒板塀が続く情緒ある町並みを散策できます。' }
      ]
    },
    furusatoStepTitle: '秋田県仙北市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「秋田県仙北市」クーポンを獲得', desc: '楽天ふるさと納税で仙北市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 秋田新幹線こまち号で田沢湖駅まで直通アクセス', desc: '東京駅から秋田新幹線「こまち」で田沢湖駅まで乗り換えなし約2時間50分。3年間の有効期間内で、新緑や紅葉、雪見風呂に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '休暇村乳頭温泉郷、田沢湖レイクリゾート、駒ヶ岳温泉などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-nasu-onsen-shikanoyu-resort-stay',
    title: '【那須温泉郷×ふるさと納税】開湯千三百年「鹿の湯」の白濁湯＆那須御用邸リゾート！名宿特集｜山楽・エピナール那須・サンバレー那須',
    desc: '開湯千三百年・那須連山の雄大な自然に抱かれる高原リゾート・栃木県那須温泉郷を楽天ふるさと納税でお得に贅沢ステイ！創業大正十二年の名門老舗「那須温泉 山楽」、那須高原の森にそびえる総合リゾート「ホテルエピナール那須」、多彩な湯巡りと温水プールの「ホテルサンバレー那須」を徹底比較。とちぎ和牛や那須町トラベルクーポン活用術を網羅。',
    keywords: '那須温泉 ふるさと納税,那須温泉 山楽 クーポン,エピナール那須 ふるさと納税,サンバレー那須 宿泊,那須町 ふるさと納税 旅行',
    targetCity: '栃木県那須町',
    leadTitle: '那須連山の噴煙と御用邸の気品——硫黄香る白濁名湯「鹿の湯」と極上とちぎ和牛を味わうロイヤルリゾートステイ',
    leadP1: '栃木県北部に位置する那須温泉郷（なすおんせんきょう）。飛鳥時代の舒明天皇2年（630年）、狩人に射られた白鹿が傷を癒やしているところを発見されたという開湯伝説を持つ「鹿の湯」をはじめ、大丸、弁天、北、八幡、高雄、三斗小屋など「那須七湯」と呼ばれる個性豊かな温泉が那須連山の山裾に広がります。皇室の静養地「那須御用邸」があることでも名高く、品格ある高原リゾートの雰囲気と、昔ながらの野趣あふれる湯治場の情緒が見事に調和しています。',
    leadP2: '那須温泉の魅力は、宿ごとに異なる源泉の多彩さと、首都圏から新幹線で約1時間15分という抜群のアクセス。濃厚な乳白色の硫黄泉や肌に優しい単純温泉に浸かり、夕食には豊かな自然が育んだ最高峰のブランド牛「とちぎ和牛」のステーキやすき焼き、高原の新鮮な乳製品や高原野菜をふんだんに取り入れた会席やビュッフェを堪能できます。栃木県那須町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの名門ホテルへお得に宿泊でき、特別な記念日や家族旅行が最高の思い出になります。',
    hotelsKey: 'furusato-tax-nasu-onsen-shikanoyu-resort-stay',
    hotelItems: [
      {
        key: 'nasu_sanraku',
        tagline: '創業大正十二年・歴代の皇族や文人が愛した那須最高峰の純和風旅館！三十畳の大露天風呂と源泉掛け流し',
        detailTitle: '那須温泉 山楽（さんらく） —— 御用邸の気品を受け継ぐ名門。四季の日本庭園と贅を尽くしたお部屋食会席',
        features: [
          { title: '自家源泉を惜しみなく注ぐ三十畳の広大な大露天風呂', desc: '緑豊かな自然林に囲まれた野趣あふれる大露天風呂。肌に優しい良質な単純温泉が掛け流され、日頃の疲れを芯から癒やしてくれます。' },
          { title: '数寄屋造りの贅沢な純和風客室と手入れの行き届いた日本庭園', desc: '回廊を歩くだけで心が落ち着く格式ある空間。手入れされた庭園を眺めながら、静かで贅沢な大人の休日を過ごせます。' },
          { title: '最高ランクA5等級とちぎ和牛を堪能するお部屋食会席料理', desc: '旬の食材を一品ずつ丹精込めて仕立てた極上和食。周囲を気にせずお部屋でゆっくりと美食を味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.67点、口コミ1300件超。「大露天風呂の開放感とお湯の良さが素晴らしく、お料理も芸術品のように美味しい」「接客が洗練されていて感動」と絶賛。'
      },
      {
        key: 'nasu_epinard',
        tagline: '那須高原の森にそびえる五つ星総合リゾート！大型露天風呂と温泉大浴場、口コミ絶賛の豪華バイキング',
        detailTitle: '那須温泉 ホテルエピナール那須 —— 家族三世代からカップルまで。充実のアクティビティとフレンチ＆ビュッフェ',
        features: [
          { title: '那須の自然林に抱かれた大型露天風呂と檜風呂・ジャグジー', desc: '広々とした温泉大浴場。緑の風を感じながら入る露天風呂や室内温水プール、サウナ完備で家族みんなでリフレッシュできます。' },
          { title: 'シェフが目の前で仕上げる豪華和洋中ディナーバイキング', desc: '那須の高原野菜や出来立てステーキ、天ぷら、握り寿司、スイーツがずらりと並ぶ人気レストラン「エルバージュ」。フレンチコースも選べます。' },
          { title: '展望ラウンジやエステ、陶芸体験など充実の館内施設', desc: '最上階のフレンチレストラン＆バーからの夜景や、森のアクティビティ、託児施設など、あらゆる旅行者に対応した万全のサービス。' }
        ],
        reviewPoints: '楽天トラベル評価4.56点、口コミ9200件超という圧倒的実績。「お風呂もプールもバイキングも大満足」「スタッフの子供への気配りが素晴らしく三世代旅行に最高」と大好評。'
      },
      {
        key: 'nasu_sunvalley',
        tagline: '敷地内に三つの異なる源泉とアトラクションプール！広大な敷地で湯巡りを愉しむ一大温泉リゾート',
        detailTitle: '那須温泉 ホテルサンバレー那須 —— 温泉天国の名門。硫黄泉・弱アルカリ泉・マグネシウム泉の湯巡り',
        features: [
          { title: '本館大浴場「湯遊天国」に湧く三種類の異なる天然温泉', desc: '乳白色の硫黄泉、滑らかな弱アルカリ泉、マグネシウム泉。それぞれ異なる効能を持つ湯船を館内でじっくり巡ることができます。' },
          { title: '水着で楽しむ屋外温泉ゾーン「アクアヴィーナス」', desc: 'ジャグジーや洞窟風呂、流れるプールなど多彩なスパゾーン。ファミリーやグループで一年中楽しめます。' },
          { title: '和食・洋食・中華から選べる専門レストランの豪華バイキング', desc: '本格中華バイキングや高原ビュッフェなど、宿泊館や好みに合わせて選べる充実のディナー。出来立ての美味しさを満喫できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.24点、口コミ5400件超。「お風呂の種類が多くて硫黄泉が本格的」「バイキングが美味しく子供もプールで大はしゃぎだった」とファミリーに大人気。'
      }
    ],
    areaGuide: {
      title: '那須温泉郷・殺生石＆那須高原展望台ガイド',
      points: [
        { name: '名湯「鹿の湯」での昔ながらの木造湯治体験', text: '千三百年前に開湯した那須温泉の元湯。41度から48度まで温度別に分かれた木造の湯船があり、かぶり湯をして濃厚な乳白色の硫黄泉に浸かる伝統入浴が体験できます。' },
        { name: '国指定名勝「殺生石（せっしょうせき）」と千体地蔵', text: '九尾の狐伝説が残る溶岩地帯。現在も硫黄ガスが噴出し、草木の生えない荒涼とした岩場に無数の千体地蔵が並ぶ独特の景観が広がります。' },
        { name: '那須高原展望台（恋人の聖地）からの関東平野パノラマビュー', text: '標高1,048メートルの高台に位置する展望台。晴れた日には那須甲子連山から遠く関東平野まで見渡せ、夜には満天の星と夜景が美しい名所です。' }
      ]
    },
    furusatoStepTitle: '栃木県那須町ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「栃木県那須町」クーポンを獲得', desc: '楽天ふるさと納税で那須町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 東北新幹線那須塩原駅や東北自動車道で都心から快適アクセス', desc: '東京駅から東北新幹線で那須塩原駅まで約1時間15分、駅から路線バスや無料送迎バスでアクセス。3年間の有効期間内で、新緑や紅葉、避暑旅に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '那須温泉山楽、ホテルエピナール那須、ホテルサンバレー那須などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-chuzenji-onsen-lake-kanaya-stay',
    title: '【中禅寺湖温泉×ふるさと納税】白濁硫黄露天風呂＆湖畔絶景クラシックリゾート！名宿特集｜中禅寺金谷ホテル・ホテル花庵・旅籠なごみ',
    desc: '男体山の麓・日本一標高の高い湖畔温泉・栃木県日光中禅寺湖温泉を楽天ふるさと納税でお得に満喫！森と湖に抱かれるクラシック名門「中禅寺金谷ホテル」、全室レイクビューと二つの美肌の湯「ホテル花庵」、源泉掛け流しと地酒を味わう「旅籠なごみ」を徹底比較。日光市トラベルクーポン活用術を網羅。',
    keywords: '中禅寺湖 温泉 ふるさと納税,中禅寺金谷ホテル クーポン,ホテル花庵 ふるさと納税,旅籠なごみ 中禅寺湖 宿泊,日光市 ふるさと納税 旅行',
    targetCity: '栃木県日光市',
    leadTitle: '男体山の雄姿と鏡のような中禅寺湖——奥日光湯元から引く白濁の硫黄泉とクラシカルな洋の美学に酔いしれる',
    leadP1: '栃木県日光市、標高1,269メートルという日本一標高の高い場所にある天然湖・中禅寺湖。明治から昭和初期にかけては、イギリスやイタリア、フランスなど各国の外交官たちが避暑のための大使館別荘を建て、「夏は外務省が日光に移る」と言われるほど国際的な避暑リゾートとして発展した歴史を持ちます。背後には標高2,486メートルの霊峰・男体山がそびえ、四季折々に色を変える豊かな森と青く澄み渡る湖面が織りなす風景は、まるで北欧のスイスを訪れたかのような気品に満ちています。',
    leadP2: '中禅寺湖温泉の大きな魅力は、約12km離れた奥日光湯元温泉からパイプで引き湯される濃厚な白濁の天然硫黄温泉。引き湯される間に湯揉みされ、角が取れたまろやかな肌触りとなって露天風呂に注がれます。夕食には金谷ホテル伝統の本格フランス料理や、日光名物の引き上げ湯波、ブランド牛「とちぎ和牛」の創作会席を堪能。栃木県日光市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの湖畔リゾート宿へお得に宿泊でき、特別な思い出が残る大人の休日が叶います。',
    hotelsKey: 'furusato-tax-chuzenji-onsen-lake-kanaya-stay',
    hotelItems: [
      {
        key: 'chuzenji_kanaya',
        tagline: '日本最古のリゾートホテルを受け継ぐ湖畔のクラシックリゾート！奥日光湯元から引く白濁の硫黄露天風呂「空ぶろ」',
        detailTitle: '日光中禅寺温泉 中禅寺金谷ホテル —— 森と湖に抱かれるカナディアンテイストの洋風建築。伝統のフレンチと名湯の贅',
        features: [
          { title: '満天の星空と森の息吹を感じる白濁の露天風呂「空ぶろ（そらぶろ）」', desc: '木漏れ日や星空を仰ぐ露天風呂。奥日光湯元から引く乳白色の濃厚な硫黄泉に浸かり、森林浴と名湯のダブルリラックス効果を味わえます。' },
          { title: '暖炉が灯る重厚なラウンジとウッドデッキのテラス席', desc: 'カナダ産の木材を贅沢に使ったロッジ風建築。大きな暖炉の炎を眺めながら珈琲やウイスキーを傾ける優雅な時間を過ごせます。' },
          { title: '金谷ホテル伝統のレシピを受け継ぐ本格フランス料理ディナー', desc: '名物「虹鱒のソテー金谷風」やとちぎ和牛のステーキなど、歴代の賓客を魅了してきた伝統のフレンチフルコースを堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.67点、口コミ1400件超。「露天風呂の硫黄泉が素晴らしく星空が最高に綺麗だった」「伝統のフレンチが絶品でスタッフの気配りも一流」と絶賛。'
      },
      {
        key: 'chuzenji_hananoki',
        tagline: '全二十二室すべてが中禅寺湖に面したレイクビュー！白濁の硫黄泉とアルカリ性単純泉の「二つの温泉」を堪能',
        detailTitle: '日光中禅寺湖温泉 ホテル花庵（はなあん） —— 湖を一望する大人のモダン宿。足袋を履いて寛ぐ畳敷きとお野菜中心の美食',
        features: [
          { title: '奥日光湯元の「にごり湯」と中禅寺温泉の「透明湯」の二つの泉質', desc: '大浴場には濃厚な白濁硫黄露天風呂と、肌触り滑らかな内湯。泉質の異なる名湯に一度に浸かれる贅沢な湯巡りが魅力です。' },
          { title: '全客室の大きな窓から中禅寺湖のパノラマ絶景を一望', desc: '穏やかな湖面と対岸の山並みを眺める静かな客室。朝日に輝く湖面や夕暮れの幻想的な景色をお部屋にいながら独り占めできます。' },
          { title: '地元契約農家から届く新鮮野菜ととちぎ和牛の創作会席料理', desc: '彩り豊かな二十種類以上の旬野菜をふんだんに使った身体に優しいディナー。出汁の味わいを極めた上品な料理が女性に大人気です。' }
        ],
        reviewPoints: '楽天トラベル評価4.60点、口コミ1200件超。「部屋からの湖の景色が絵画のよう」「二種類のお風呂がどちらも素晴らしく、野菜たっぷりの料理も美味しかった」と高評価。'
      },
      {
        key: 'chuzenji_hatago',
        tagline: '中禅寺湖の湖畔に佇む全室レイクビューの温もり宿！源泉掛け流しの濃厚硫黄泉とアットホームな滞在',
        detailTitle: '中禅寺温泉 旅籠なごみ —— 湖畔の心地よい風が通り抜ける宿。白濁のにごり湯と日光の地酒を味わう旅',
        features: [
          { title: '日光湯元から引湯する源泉掛け流し100％のにごり湯大浴場', desc: 'エメラルドグリーンから乳白色へと色を変える良質な硫黄泉。手足を伸ばしてゆったりと本格的な名湯に浸かることができます。' },
          { title: '中禅寺湖遊覧船乗り場や大鳥居まで徒歩すぐの絶好アクセス', desc: '中禅寺湖畔の散策や華厳の滝への観光に抜群のロケーション。夕暮れの湖畔散歩も気軽に楽しめます。' },
          { title: 'とちぎ霧降高原牛や日光湯波を取り入れた季節の和洋ハーフビュッフェ', desc: '厳選された肉料理と、日光名物の湯波や手作りのおばんざい。地元の地酒とともにアットホームに楽しめます。' }
        ],
        reviewPoints: '楽天トラベル評価4.33点、口コミ800件超。「お風呂の硫黄泉が本格的でとても気持ちよかった」「部屋から湖が見えて立地も良く、スタッフも親切だった」と評判です。'
      }
    ],
    areaGuide: {
      title: '中禅寺湖温泉・華厳の滝＆英国大使館別荘記念公園ガイド',
      points: [
        { name: '日本三大名瀑「華厳の滝」のエレベーター観瀑台', text: '中禅寺湖の水が落差97メートルの断崖を一気に流れ落ちる日本屈指の大滝。エレベーターで岩盤を一気に下りた観瀑台からは、轟音とともに爆進する大迫力の水しぶきを間近に体感できます。' },
        { name: '英国・イタリア大使館別荘記念公園での湖畔ティータイム', text: 'かつて各国の外交官たちが過ごした歴史的別荘。復元されたモダンな洋風建築の広縁カフェからは、中禅寺湖の静かな湖面を眺めながら本場のスコーンや紅茶を楽しめます。' },
        { name: '中禅寺湖機船（クルーズ船）での千手ヶ浜・菖蒲ヶ浜周遊', text: '湖上から男体山や大使館別荘を眺める遊覧クルーズ。初夏にはクリンソウが咲き誇る千手ヶ浜、秋には全山紅葉の八丁出島を巡るコースが大人気です。' }
      ]
    },
    furusatoStepTitle: '栃木県日光市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「栃木県日光市」クーポンを獲得', desc: '楽天ふるさと納税で日光市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 東武特急スペーシアX・日光号と東武バスでいろは坂を経由してアクセス', desc: '浅草や新宿から東武特急で東武日光駅まで約1時間50分、駅から路線バスでいろは坂を登り約45分。3年間の有効期間内で、新緑や秋の紅葉シーズンに合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '中禅寺金谷ホテル、ホテル花庵、旅籠なごみなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
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
    datePublished: '2026-09-10T17:15:00+09:00',
    dateModified: '2026-09-10T17:15:00+09:00',
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
                  <td className="p-3 text-stone-600">${idx === 0 ? '最高峰の歴史・名庭園ステイ' : idx === 1 ? '絶景の眺望・充実のリラクゼーション' : '観光散策・アットホームな寛ぎ'}</td>
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
              <Link href="/furusato-tax-toya-onsen-lake-view-fireworks-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 洞爺湖温泉 全室レイクビュー＆ロングラン花火特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-beppu-onsen-suginoi-jigoku-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 別府温泉 湧出量日本一・棚湯＆絶景リゾート特集
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
