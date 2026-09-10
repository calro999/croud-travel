const fs = require('fs');
const path = require('path');

const round98Hotels = JSON.parse(fs.readFileSync('round98_hotels.json', 'utf8'));

// Convert to lookup map
const allHotels = {};
for (const [slug, arr] of Object.entries(round98Hotels)) {
  allHotels[slug] = {};
  for (const item of arr) {
    allHotels[slug][item.key] = item.hotel;
  }
}

const articles = [
  {
    slug: 'furusato-tax-kusatsu-onsen-yubatake-heritage-stay',
    title: '【草津温泉×ふるさと納税】湯畑徒歩圏内の老舗名宿特集！源泉かけ流しと名湯巡り完全ガイド｜望雲・ホテル一井・奈良屋',
    desc: '日本三名泉の筆頭・群馬県草津温泉を楽天ふるさと納税でお得に贅沢ステイ！創業慶長四年・二つの源泉を引く「望雲」、湯畑が目の前の絶景老舗「ホテル一井」、湯守が丹精込めて仕込む極上の白旗源泉「奈良屋」を徹底比較。草津町トラベルクーポンの賢い活用法を完全網羅。',
    keywords: '草津温泉 ふるさと納税,草津温泉 湯畑 宿 ふるさと納税,草津温泉 望雲 クーポン,ホテル一井 草津 ふるさと納税,奈良屋 草津町 宿泊',
    targetCity: '群馬県草津町',
    leadTitle: '毎分三万リットルの湧出量を誇る日本一の名湯——湯畑の湯けむりと老舗旅館で味わう至高の湯治ステイ',
    leadP1: '群馬県吾妻郡草津町、標高1,200メートルの高原に位置する草津温泉。自然湧出量日本一を誇り、古くから「恋の病以外ならどんな病も治す」と称えられてきた日本屈指の名湯です。温泉街の中心に位置する「湯畑」からは、エメラルドグリーンのお湯が滾々と湧き出し、立ち上る白い湯けむりと心地よい硫黄の香りが旅人を非日常の世界へと誘います。強酸性の泉質は極めて高い殺菌力を持ち、日々の疲労を根底から解きほぐしてくれます。',
    leadP2: '草津温泉の醍醐味は、湯畑周辺の風情ある路地散策と、宿ごとに異なる源泉の引き湯を堪能すること。「万代鉱源泉」「西の河原源泉」「白旗源泉」など、源泉ごとの個性を肌で感じながら、夜にはライトアップされた幻想的な湯畑をそぞろ歩く贅沢。夕食には上州牛のすき焼きや旬の上州野菜をふんだんに取り入れた会席料理に舌鼓。群馬県草津町へのふるさと納税で獲得できる楽天トラベルクーポンを使えば、寄付額の30%相当が宿泊代金から割引され、憧れの老舗宿への滞在がお得に実現します。',
    hotelsKey: 'furusato-tax-kusatsu-onsen-yubatake-heritage-stay',
    hotelItems: [
      {
        key: 'kusatsu_boun',
        tagline: '創業慶長四年・十返舎一九ゆかりの歴史宿！「西の河原」「万代鉱」の二大源泉を六つの湯船で満喫',
        detailTitle: '草津温泉 望雲（ぼううん） —— 歴史を刻む名門老舗。新緑と紅葉が彩る日本庭園と贅沢な掛け流しの湯',
        features: [
          { title: '「西の河原源泉」と「万代鉱源泉」を引く六つの名湯風呂', desc: '敷地内に引き込まれた二つの貴重な天然源泉。露天風呂付き大浴場「遊山の湯」「万代の湯」「西の湯」など趣の異なる湯船で贅沢な源泉かけ流し湯巡りが楽しめます。' },
          { title: '四季の草花が咲き誇る美しい日本庭園と洗練された館内', desc: '湯畑から徒歩約3分の高台に位置しながら静寂に包まれた宿。春のシャクナゲや秋の紅葉など、手入れの行き届いた庭園が旅情を深めてくれます。' },
          { title: 'お部屋または個室料亭でいただく上州名物の本格会席', desc: '上州牛のしゃぶしゃぶや陶板焼き、地元の採れたて山菜や川魚を取り入れた季節感あふれる和食会席。周囲を気にせず優雅に美食を味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.67点、口コミ2400件超。「お風呂の泉質が素晴らしく肌がツルツルになった」「湯畑にも近く静かで、スタッフのおもてなしとお料理が最高」と大絶賛されています。'
      },
      {
        key: 'kusatsu_ichii',
        tagline: '創業三百余年・湯畑の目の前に建つ草津の象徴！一番街の眺望と貴重な白旗源泉・万代鉱源泉',
        detailTitle: '草津温泉 ホテル一井 —— 湯畑を眼下に見晴らす特等席。白濁の湯と湯畑ビュー客室で過ごす特別な夜',
        features: [
          { title: '客室の窓から湯畑を一望できる希少な「本館・湯畑側客室」', desc: '昼の活気ある湯畑から、夜の幻想的なイルミネーションまで、お部屋にいながら草津のシンボル風景を独り占めできる唯一無二のロケーションです。' },
          { title: '貴重な「白旗源泉」を引く大浴場と「万代鉱源泉」の露天風呂', desc: '源頼朝が発見したと伝わる乳白色の「白旗源泉」の内湯と、湯量豊富な「万代鉱源泉」の庭園露天風呂。泉質の違いをじっくりと体感できます。' },
          { title: 'ビュッフェダイニングまたはお部屋食で味わう旬の味覚', desc: '上州の郷土料理やライブキッチンが楽しいビュッフェスタイル、または落ち着いたお部屋食・お食事処会席から旅行スタイルに合わせて選べます。' }
        ],
        reviewPoints: '楽天トラベル評価4.39点、口コミ4700件超。「湯畑が本当に目の前で観光に最高」「大浴場の白濁したお湯が本格的で、湯畑の夜景にも感動した」と圧倒的な人気を誇ります。'
      },
      {
        key: 'kusatsu_naraya',
        tagline: '明治十年創業・専任の「湯守」が湯を仕込む最高峰旅館！白旗源泉のまろやかな湯と格式の和モダン空間',
        detailTitle: '草津温泉 奈良屋 —— 伝統の湯守文化を受け継ぐ名門。研ぎ澄まされた美意識とおもてなしの極み',
        features: [
          { title: '湯守が気温や天候に合わせて手作業で湯温を調整する名湯「御汲上の湯」', desc: '草津最古の白旗源泉を直接引き、湯守が一晩かけて湯をもみ、空気を含ませてまろやかな肌触りに仕立て上げた極上の湯浴み体験を提供します。' },
          { title: '歴史ある梁を活かした重厚な数寄屋造りとモダンな喫茶去', desc: '帳場の温かい灯り、畳敷きの心地よさ、そしてサイフォン珈琲が薫るカフェバー。古き良き伝統と現代の寛ぎが見事に調和しています。' },
          { title: '職人の繊細な技が光る個室食事処での本格旬会席', desc: '厳選された上州牛や全国から届く選りすぐりの旬素材。出汁の旨味を極めた一皿一皿が目と舌を喜ばせてくれます。' }
        ],
        reviewPoints: '楽天トラベル評価4.61点、口コミ1200件超。「お湯が本当に柔らかく、これまで入った草津の湯で一番」「宿全体の雰囲気が洗練されており素晴らしい滞在だった」と熱烈な支持。'
      }
    ],
    areaGuide: {
      title: '草津温泉街・湯畑周辺の散策＆名所めぐりガイド',
      points: [
        { name: '熱乃湯での伝統芸能「湯もみと踊り」ショー鑑賞', text: '高温の草津の湯を水で薄めず冷ますために考案された伝統技法「湯もみ」。「草津よいとこ一度はおいで」の唄に合わせて大きな板でお湯をかき混ぜる迫力のショーを間近で見学できます。' },
        { name: '西の河原公園の広大な露天風呂と湯の川散歩', text: '河原のいたるところから温泉が湧き出し、湯の川となって流れる西の河原公園。最奥部には男女合わせて500平方メートルの大自然に囲まれた日本屈指の大露天風呂があります。' },
        { name: '湯畑まわりの温泉街グルメと足湯「湯けむり亭」', text: '湯畑のすぐ脇にある総檜造りの足湯「湯けむり亭」。温泉まんじゅうの食べ歩きや名物の焼き鳥、温泉たまごを味わいながら足湯で一休みするのが定番の楽しみ方です。' }
      ]
    },
    furusatoStepTitle: '群馬県草津町ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「群馬県草津町」クーポンを獲得', desc: '楽天ふるさと納税で草津町を寄付先に指定し、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンが即時付与されます。' },
      { step: 'Step 2: 3年間の有効期間内で温泉旅行の日程をじっくり計画', desc: 'クーポンの有効期限は発行からたっぷり3年間。秋の紅葉シーズンや冬の幻想的な雪見風呂、爽やかな夏の高原避暑など、好みの時期に合わせて予約できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポンを適用して予約完了', desc: '望雲、ホテル一井、奈良屋などの対象宿の宿泊プランを選び、予約決済画面でクーポンを選択。宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-arima-onsen-gold-silver-kobe-beef-stay',
    title: '【有馬温泉×ふるさと納税】金泉・銀泉のダブル湯巡り＆極上神戸牛！老舗名門宿特集｜兵衛向陽閣・欽山・中の坊瑞苑',
    desc: '日本三古湯・三名泉の誉れ高き名湯・兵庫県有馬温泉を楽天ふるさと納税でお得に贅沢ステイ！創業七百年の伝統を誇る「兵衛向陽閣」、ミシュラン掲載の大人の料亭旅館「欽山」、十三歳未満お断りの至高のおこもり宿「中の坊 瑞苑」を徹底比較。神戸牛会席や神戸市トラベルクーポン活用術を網羅。',
    keywords: '有馬温泉 ふるさと納税,有馬温泉 金泉 銀泉 ふるさと納税,兵衛向陽閣 クーポン,欽山 有馬温泉 ふるさと納税,中の坊瑞苑 神戸市 宿泊',
    targetCity: '兵庫県神戸市',
    leadTitle: '太閤秀吉が愛した日本最古の名湯——赤褐色の金泉と無色透明の銀泉、そして極上の神戸牛を味わい尽くす',
    leadP1: '兵庫県神戸市北区、六甲山の北麓に湧き出る有馬温泉。神代の昔、大己貴命（おおなむちのみこと）と少彦名命（すくなひこなのみこと）が発見したと伝わる日本最古の名湯であり、飛鳥時代の舒明天皇、そして戦国時代の太閤豊臣秀吉が幾度も湯治に訪れたことで広く知られています。有馬の温泉はプレート境界から直接立ち上る奇跡の深層熱水であり、鉄分と塩分を豊富に含み空気に触れると赤褐色に濁る「金泉（含鉄強塩泉）」と、炭酸ガスやラドンを含む無色透明の「銀泉（炭酸泉・放射能泉）」という、全く性質の異なる二大名湯を同時に愉しめる世界有数の温泉地です。',
    leadP2: '金泉の濃厚な温まりと保湿効果、そして銀泉の清涼感あふれる血行促進効果。この贅沢な湯巡りを味わった後は、世界に誇る名銘柄「神戸牛（但馬牛）」をすき焼きや炭火焼きステーキで堪能する、これ以上ない美食の宴が待っています。兵庫県神戸市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより名門旅館へお得に宿泊でき、特別な記念日やご褒美にふさわしい至極の休日が叶います。',
    hotelsKey: 'furusato-tax-arima-onsen-gold-silver-kobe-beef-stay',
    hotelItems: [
      {
        key: 'arima_hyoe',
        tagline: '創業七百年・太閤秀吉から名を授かった名門老舗！三つの個性豊かな大浴場で愉しむ金泉の湯巡り',
        detailTitle: '有馬温泉 兵衛向陽閣（ひょうえこうようかく） —— 歴史を紡ぐ有馬のシンボル。広大な三つの大浴場と老舗のもてなし',
        features: [
          { title: '「一の湯」「二の湯」「三の湯」と趣異なる三つの大浴場', desc: '和風情の「一の湯」、ローマ風の「二の湯」、開放感あふれる湯治場風の「三の湯」。それぞれに名湯金泉の露天風呂を備え、館内だけで贅沢な湯巡りを堪能できます。' },
          { title: '創業七百年の伝統を受け継ぐ細やかなおもてなしと風格', desc: '秀吉公より「兵衛」の名を賜った由緒ある歴史。広大な館内には日本庭園やラウンジ、エステ施設が充実し、あらゆる世代が快適に過ごせます。' },
          { title: '厳選された神戸牛や季節の味覚を味わう会席料理・ビュッフェ', desc: '炭火焼き会席や季節の創作会席のほか、ライブキッチンで焼き上げる神戸牛が人気のプレミアムビュッフェなど多彩な美食スタイルが選べます。' }
        ],
        reviewPoints: '楽天トラベル評価4.46点、口コミ4700件超。「三つのお風呂がどれも素晴らしく金泉を満喫できた」「お料理が美味しくスタッフの接客も丁寧で大満足」と高い信頼を獲得しています。'
      },
      {
        key: 'arima_kinzan',
        tagline: 'ミシュランガイド掲載の最高峰料亭旅館！静寂を守る大人の隠れ家で極める金泉と本格京風懐石',
        detailTitle: '有馬温泉 欽山（きんざん） —— 有馬随一の格式を誇る美食の館。茶室風の数寄屋建築と洗練された大人の休日',
        features: [
          { title: '伝統的な数寄屋造りの美学と手入れの行き届いた名庭園', desc: '小学生以下のお子様お断りの静寂な大人の空間。数寄屋建築の気品と、四季折々に表情を変える日本庭園が優雅な非日常を演出します。' },
          { title: '丹精込めて引き込まれた有馬の名湯「金泉」の大浴場と露天風呂', desc: '肌にしっとりと馴染む良質な金泉。静かな木立に囲まれた露天風呂で、心ゆくまで名湯の温もりに浸ることができます。' },
          { title: '最高ランクの神戸牛と瀬戸内の旬魚を極めた本格京風創作懐石', desc: '「料理の欽山」と称される芸術的な懐石料理。お部屋で一皿一皿最高のタイミングで供される料理は、記念日や慶事の席に最高峰の華を添えます。' }
        ],
        reviewPoints: '楽天トラベル評価4.73点という圧倒的高スコア。「お料理が芸術品のように美味しく感動した」「静かで落ち着いた雰囲気とおもてなしの素晴らしさはさすが名門」と絶賛されています。'
      },
      {
        key: 'arima_nakanobo',
        tagline: '十三歳未満お断りの大人のための隠れ宿！金泉・銀泉のダブル名湯と贅を尽くしたパーソナルサービス',
        detailTitle: '有馬温泉 中の坊 瑞苑（ずいえん） —— 心の贅沢を叶える最上級リゾート。金泉と銀泉を同時に味わう特別な滞在',
        features: [
          { title: '名湯「金泉」と「銀泉」の両方を引き込んだ贅沢な大浴場', desc: '有馬でも希少な金泉と銀泉の両方の湯船を完備。露天風呂や貸切風呂で、二つの異なる名湯の効能をじっくりと比較体験できます。' },
          { title: 'きめ細やかなバトラーサービスと大人のための静謐空間', desc: '十三歳未満の宿泊を制限することで保たれる上質な静寂。客室専任スタッフによる丁寧なおもてなしが、至福のプライベート時間を支えます。' },
          { title: 'お部屋食または個室ダイニングで味わう神戸牛と旬の特選会席', desc: '神戸ビーフの鉄板焼きやしゃぶしゃぶをはじめ、厳選食材の旨味を引き出した極上の和会席。器の選定から盛り付けまで細部にこだわりが宿ります。' }
        ],
        reviewPoints: '楽天トラベル評価4.75点の最高峰評価。「金泉と銀泉の両方に入ることができて最高」「おもてなしのレベルが高く、静かにゆったりと過ごせる最高の宿」と熱い支持。'
      }
    ],
    areaGuide: {
      title: '有馬温泉街・湯本坂散策＆六甲山アクティビティガイド',
      points: [
        { name: '湯本坂のレトロな街並みと「金の湯・銀の湯」外湯めぐり', text: '格子戸の民家や風情ある店舗が軒を連ねる湯本坂。温泉街のシンボル外湯「金の湯（足湯あり）」や「銀の湯」、炭酸泉源公園など、歴史ある散策スポットが点在します。' },
        { name: '六甲有馬ロープウェーでの空中散歩と六甲山夜景', text: '有馬温泉と六甲山頂を約12分で結ぶロープウェー。四季折々の山肌を見下ろしながら登る絶景ルートで、山頂の展望台からは「1000万ドルの夜景」と称される大パノラマが楽しめます。' },
        { name: '有馬名物「炭酸せんべい」と「有馬サイダー」の食べ歩き', text: '有馬の炭酸泉を使って作られた薄焼きの炭酸せんべい。焼きたての柔らかい数秒間だけ味わえる「生炭酸せんべい」や、強炭酸の「有馬サイダー」は散策のお供に必食です。' }
      ]
    },
    furusatoStepTitle: '兵庫県神戸市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「兵庫県神戸市」クーポンを獲得', desc: '楽天ふるさと納税で神戸市を選び、寄付額の30%相当となるトラベルクーポンを返礼品として申し込みます。楽天ポイントも通常通り付与されます。' },
      { step: 'Step 2: 新幹線新神戸駅や大阪・神戸空港からの快適アクセス', desc: '新神戸駅から高速バスや電車で約30分、大阪駅からも直通バスで約60分の好立地。3年間の有効期間内で記念日や週末旅行に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '兵衛向陽閣、欽山、中の坊瑞苑などの宿泊プランを選択し、決済画面でクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-yufuin-onsen-hanare-private-stay',
    title: '【由布院温泉×ふるさと納税】全室離れ・客室露天風呂の極上リゾート！静寂の大人ステイ完全ガイド｜梅園・なな川・由布院別邸樹',
    desc: '憧れの温泉リゾート・大分県由布院温泉を楽天ふるさと納税でお得に旅する！一万坪の庭園と由布岳絶景を誇る「梅園 GARDEN RESORT」、金鱗湖徒歩1分・全室露天付き離れ宿「由布院 寛ぎの宿 なな川」、多彩な和モダンデザイン離れが魅力の「由布院別邸 樹」を徹底比較。由布市トラベルクーポン活用術を網羅。',
    keywords: '由布院 離れ ふるさと納税,由布院温泉 ふるさと納税 宿泊,由布院 梅園 クーポン,なな川 由布院 ふるさと納税,由布院別邸 樹 宿泊',
    targetCity: '大分県由布市',
    leadTitle: '由布岳の秀峰を仰ぎ、朝霧漂う金鱗湖を愛でる——全室離れのプライベート空間で過ごす極上の休日',
    leadP1: '大分県由布市湯布院町、豊後富士と称される優美な「由布岳」の麓に広がる由布院温泉。全国第2位の湧出量を誇りながら、大規模な歓楽街を作らず、田園風景と自然美、そして洗練されたアートやカフェ文化を守り続けてきた日本屈指の憧れ温泉リゾートです。早朝には湖底から温泉と清水が湧き出る「金鱗湖」から立ち上る幻想的な朝霧が温泉街を包み込み、訪れる人々に静寂と癒やしをもたらします。',
    leadP2: '由布院の滞在スタイルとして近年最も愛されているのが、母屋から離れた「離れ客室」や専用露天風呂を備えた隠れ家宿です。鳥のさえずりと風の音しか聞こえない完全なプライベート空間で、柔らかな単純温泉に好きなだけ浸かる贅沢。夕食には大分が誇るブランド牛「豊後牛（おおいた和牛）」の炭火焼きや関アジ、旬の高原野菜をふんだんに取り入れた創作懐石を堪能できます。大分県由布市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの離れ名宿へお得に宿泊でき、特別な思い出が残る旅が叶います。',
    hotelsKey: 'furusato-tax-yufuin-onsen-hanare-private-stay',
    hotelItems: [
      {
        key: 'yufuin_baian',
        tagline: '一万坪の広大な敷地に咲く四季の花々！由布岳を一望する大露天風呂と趣異なる離れ客室',
        detailTitle: '由布院 梅園 GARDEN RESORT —— 自然の息吹に包まれるリゾート。由布岳の雄姿を望む名湯露天とお庭の散策',
        features: [
          { title: '一万坪の広大な日本庭園と四季折々の自然美', desc: '春の桜やミヤマキリシマ、初夏のホタル、秋の鮮やかな紅葉など、散策路が巡る広大な庭園。自然林の中に点在する離れ客室で極上の静寂を味わえます。' },
          { title: '由布岳のパノラマを仰ぐ名物大露天風呂と無料貸切風呂', desc: '遮るもののない雄大な由布岳の山並みを眺めながら入る大露天風呂。空いていれば自由に利用できる二つの貸切家族風呂も人気です。' },
          { title: '豊後牛や地元旬菜を彩り豊かに仕立てた創作和食会席', desc: '大分の大自然が育んだ上質な食材。一皿ごとに季節の彩りと職人の技が感じられる料理が、贅沢な夜を演出します。' }
        ],
        reviewPoints: '楽天トラベル評価4.43点、口コミ1200件超。「広い庭園が素晴らしく由布岳の眺めも最高」「お風呂からの景色と美味しいお料理に癒やされた」と絶大な人気。'
      },
      {
        key: 'yufuin_sanso',
        tagline: '金鱗湖まで徒歩1分の最高立地！全室に源泉掛け流し内湯と露天風呂を備えた全五室の隠れ家離れ',
        detailTitle: '由布院 寛ぎの宿 なな川 —— 金鱗湖畔の静寂に佇む大人の隠れ宿。メゾネット離れと専用露天風呂の贅',
        features: [
          { title: '全客室に温泉内湯と専用露天風呂を完備した贅沢なメゾネット離れ', desc: '一階にリビングと専用露天風呂・内湯、二階にベッドルームを配したメゾネット構造。24時間いつでも好きな時にプライベートな源泉掛け流し温泉を満喫できます。' },
          { title: '朝霧に煙る金鱗湖の幻想的な風景まで歩いてすぐの特等席', desc: '観光の目玉・金鱗湖まで徒歩わずか1分。早朝の澄んだ空気の中、湖面から立ち上る奇跡の朝霧散歩を気軽に楽しめます。' },
          { title: '特選豊後牛や旬の山海の恵みを味わう個室お食事処での会席', desc: '料理長が選び抜いた豊後牛ステーキや新鮮な旬魚。プライベートな個室食事処で、一品ずつ出来立ての味をゆっくりと堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.69点という非常に高いスコア。「お部屋の内湯と露天風呂が最高で何度も入った」「金鱗湖が目の前で朝の散歩が素晴らしく、お料理も感動的」と絶賛されています。'
      },
      {
        key: 'yufuin_kaze',
        tagline: '全室完全独立の離れ・専用風呂付き！モダンなデザインと豊かな樹々に囲まれた癒やしのリゾート',
        detailTitle: '由布院別邸 樹（いつき） —— 異なるコンセプトを持つ十室の離れ。現代の感性が息づくスタイリッシュなおこもり宿',
        features: [
          { title: '一棟ごとに異なる趣を持つ個性豊かなデザイナーズ離れ', desc: '和モダン、アジアン、北欧調など各客室ごとに洗練された意匠。全室に専用の温泉風呂を備え、プライベート感あふれる別荘のような滞在が叶います。' },
          { title: '庭の木々を眺めながらプライベートに愉しむ温泉風呂', desc: '各部屋専用の半露天風呂や岩風呂に注がれる柔らかな由布院の湯。時間を気にせず、誰にも邪魔されない至福のリラクゼーションに浸れます。' },
          { title: '料理宿の伝統を受け継ぐダイニング「十樹」での創作日本料理', desc: '地元由布院の契約農家から届く高原野菜や豊後牛。器や盛り付けにもセンスが光る上質な創作料理を堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.60点、口コミ700件超。「部屋のデザインがとてもお洒落でお風呂も広い」「スタッフの距離感が絶妙で、静かに贅沢な休日を過ごせた」と高評価。'
      }
    ],
    areaGuide: {
      title: '由布院温泉・湯の坪街道散策＆金鱗湖ガイド',
      points: [
        { name: '金鱗湖の朝霧と湖畔散策', text: '湖底から清水と温泉が湧き出ているため冬場や早朝には水面から湯気が立ち上り、幻想的な「朝霧」が発生する名所。湖畔のカフェで朝のティータイムを過ごすのもおすすめです。' },
        { name: '湯の坪街道のスイーツ＆クラフトショップ巡り', text: '由布院駅から金鱗湖へと続く約1kmの目抜き通り。名物のロールケーキ「B-speak」や金賞コロッケ、地元の木工芸品や陶器ギャラリーが立ち並び、そぞろ歩きに最適です。' },
        { name: '由布岳登山口と雨乞岳からの眺望ドライブ', text: '標高1,583メートルの由布岳。車で高原道路を抜ける爽快なドライブコースからは、緑の草原と山並みが織りなす圧倒的な大パノラマを満喫できます。' }
      ]
    },
    furusatoStepTitle: '大分県由布市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「大分県由布市」クーポンを獲得', desc: '楽天ふるさと納税で由布市を寄付先に選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 大分空港やJR特急「ゆふいんの森」での旅を計画', desc: '博多駅からクラシックな観光列車「ゆふいんの森」で約2時間15分。3年間の有効期間内で、季節の花や紅葉に合わせてゆったり旅行を計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '梅園、なな川、由布院別邸樹などの離れ客室プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-ikaho-onsen-ishidan-golden-bath-stay',
    title: '【伊香保温泉×ふるさと納税】石段街の風情＆名湯「黄金の湯・白銀の湯」！老舗温泉宿特集｜福一・森秋旅館・千明仁泉亭',
    desc: '365段の石段街が有名な名湯・群馬県伊香保温泉を楽天ふるさと納税でお得に満喫！創業440年の最高峰老舗「福一」、石段街徒歩1分・黄金の湯掛け流しの「森秋旅館」、文豪徳富蘆花ゆかりの源泉宿「千明仁泉亭」を徹底比較。上州牛会席や渋川市トラベルクーポン活用術を網羅。',
    keywords: '伊香保温泉 ふるさと納税,伊香保温泉 石段街 宿 ふるさと納税,伊香保 福一 クーポン,森秋旅館 ふるさと納税,千明仁泉亭 宿泊',
    targetCity: '群馬県渋川市',
    leadTitle: '万葉集にも詠まれた歴史の石段街——茶褐色の「黄金の湯」と透明な「白銀の湯」で巡る心潤す温泉旅',
    leadP1: '群馬県渋川市伊香保町、榛名山の中腹標高約700メートルに広がる伊香保温泉。万葉集や古今和歌集にもその名が詠まれ、戦国時代には武田勝頼の命により長篠の戦いで傷ついた武士たちの湯治場として整備された歴史を持ちます。伊香保の象徴である「365段の石段街」は、温泉街の中心を貫く石段の両側に射的場やお土産屋、足湯、温泉まんじゅう店が連なり、浴衣と下駄で歩けばまるでタイムスリップしたかのようなノスタルジーに浸ることができます。',
    leadP2: '伊香保温泉には二つの異なる名湯が存在します。鉄分を豊富に含み空気に触れると独特の茶褐色に濁る、身体を芯から温める伝統の「黄金（こがね）の湯」。そして近年湧出が確認された、疲労回復や健康増進に優れた無色透明のメタけい酸泉「白銀（しろがね）の湯」。この二大源泉の贅沢な湯比べと、地元群馬の上州牛や上州麦豚、清らかな水で打たれた日本三大うどん「水沢うどん」を味わう旅は格別です。群馬県渋川市へのふるさと納税で獲得できる楽天トラベルクーポンを使えば、寄付額の30%相当が割引され、名門旅館へお得に宿泊できます。',
    hotelsKey: 'furusato-tax-ikaho-onsen-ishidan-golden-bath-stay',
    hotelItems: [
      {
        key: 'ikaho_fukuichi',
        tagline: '創業四百四十年・石段街最上段に佇む伊香保随一の名門！「黄金の湯」と「白銀の湯」の二大名湯を完備',
        detailTitle: '伊香保温泉 福一（ふくいち） —— 歴史と格式を今に伝える最高峰。石段街直結のロケーションと至福の二大名湯',
        features: [
          { title: '伊香保で希少な「黄金の湯」と「白銀の湯」の両方を引く大浴場', desc: '茶褐色の黄金の湯と透明な白銀の湯の二つの湯船を備えた大浴場。泉質の違いを入り比べながら、歴史ある名湯の恵みを全身で享受できます。' },
          { title: '石段街の最上段（19段目）に直結する抜群の散策ロケーション', desc: '宿のエレベーターから直接石段街へ出られる便利な連絡口を完備。伊香保神社や石段街の散策をストレスなく気軽に楽しめます。' },
          { title: '上州の厳選素材を匠の技で仕立てた本格季節会席料理', desc: '上州牛のサーロインステーキや陶板焼き、群馬の新鮮野菜を取り入れた月替わりの会席。優雅なお食事処で上質な時間を過ごせます。' }
        ],
        reviewPoints: '楽天トラベル評価4.56点、口コミ1900件超。「石段街直結で観光に便利、お風呂も二種類の源泉に入れて最高」「スタッフの接客が洗練されていてお料理も大変美味しかった」と名門ならではの高評価。'
      },
      {
        key: 'ikaho_moriaki',
        tagline: '創業明治元年・石段街まで徒歩1分の好立地！茶褐色の「黄金の湯」を掛け流しで愉しむ風情宿',
        detailTitle: '伊香保温泉 森秋旅館（もりあき） —— 石段街の賑わいと源泉のぬくもり。湯口から注がれる本物の掛け流し黄金の湯',
        features: [
          { title: '伊香保本来の茶褐色に濁る「黄金の湯」を惜しみなく掛け流し', desc: '引湯口から直接引き込まれる良質な黄金の湯。大浴場「名竹の湯」や露天風呂「雨情の湯」で、鉄分豊富な天然温泉の温もりを堪能できます。' },
          { title: '石段街のほぼ中央まで徒歩わずか1分の絶好アクセス', desc: '温泉街の活気を感じながら、夜の石段街のライトアップや射的遊び、朝の散策にいつでも気軽に出かけられる立地が魅力です。' },
          { title: '上州牛と地元採れたて食材を盛り込んだ手作り和食膳', desc: '上州牛のすき焼きや旬の鍋料理、群馬名物の手作り料理が並ぶ満足度の高い夕食。落ち着いた雰囲気の中で美味を味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.40点、口コミ2100件超。「石段街がすぐそこで便利、お湯が正真正銘の茶褐色の黄金の湯で最高だった」「接客が親切で居心地が良かった」と好評です。'
      },
      {
        key: 'ikaho_chigira',
        tagline: '文豪徳富蘆花ゆかりの老舗！黄金の湯を贅沢に100％源泉掛け流しで注ぐ名物大浴場と貸切風呂',
        detailTitle: '伊香保温泉 千明仁泉亭（ちぎらじんせんてい） —— 文学の薫る歴史宿。滝のように注ぐ黄金の湯と四つの無料貸切風呂',
        features: [
          { title: '伊香保屈指の湯量を誇る「黄金の湯」完全掛け流し', desc: '伊香保の源泉湧出量の主要な権利を持つ宿。大浴場「仁乃湯」では、湯口からドバドバと滝のように注がれる新鮮な黄金の湯を贅沢に味わえます。' },
          { title: '空いていれば予約不要・無料で何度でも入れる四つの貸切風呂', desc: 'プライベートに源泉を満喫できる四つの貸切露天風呂・家族風呂を完備。ご夫婦やカップル、ファミリーで気兼ねなく湯浴みを楽しめます。' },
          { title: '名作『不如帰』の舞台となった歴史と落ち着いた和モダン空間', desc: '徳富蘆花が滞在し名作を執筆した由緒ある宿。木の温もりを大切にしたリノベーション客室で、静かな時の流れに浸ることができます。' }
        ],
        reviewPoints: '楽天トラベル評価4.60点、口コミ1100件超。「黄金の湯の湯量が桁違いで最高のお湯」「無料の貸切風呂がたくさんあり、石段街も近くて最高だった」と熱心な温泉ファンから支持。'
      }
    ],
    areaGuide: {
      title: '伊香保温泉街・石段街散策＆水沢うどん街ガイド',
      points: [
        { name: '365段の石段街散策と伊香保神社への参拝', text: '「温泉街が1年365日にぎわうように」との願いが込められた365段の石段。登りきった最上段には縁結びや子宝の神様として知られる「伊香保神社」があり、街を見下ろす絶景が広がります。' },
        { name: '河鹿橋の紅葉と源泉湧出地の散策', text: '伊香保神社の奥、湯元付近にある朱塗りの太鼓橋「河鹿橋」。春の新緑、秋の鮮やかなモミジの紅葉ライトアップは息を呑む美しさです。隣接する飲泉所で鉄分を含む温泉の試飲もできます。' },
        { name: '水沢うどん街道での日本三大うどんランチ', text: '伊香保温泉から車で約10分の場所にある水沢うどん街道。400年以上の歴史を持ち、讃岐・稲庭と並ぶ日本三大うどんの一つ。コシのある透き通った麺と胡麻ダレの組み合わせが絶品です。' }
      ]
    },
    furusatoStepTitle: '群馬県渋川市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「群馬県渋川市」クーポンを獲得', desc: '楽天ふるさと納税で渋川市を選び、寄付額の30%相当のトラベルクーポンを返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。' },
      { step: 'Step 2: 関越道やJR上越線・特急草津・四万号で快適アクセス', desc: '上野駅から特急草津・四万号で渋川駅まで約1時間40分、そこから路線バスで約25分。3年間の有効期間内で、石段街の祭りや紅葉シーズンに合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '福一、森秋旅館、千明仁泉亭などの対象宿プランを選び、決済確認画面でクーポンを選択すれば宿泊料金から大幅な値引きが適用されます。' }
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
    datePublished: '2026-09-10T16:35:00+09:00',
    dateModified: '2026-09-10T16:35:00+09:00',
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
                  <td className="p-3 text-stone-600">${idx === 0 ? '由緒ある歴史・贅沢な湯巡り' : idx === 1 ? '抜群の好立地・絶景の眺望' : '大人の静寂・上質なおこもり'}</td>
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
              <Link href="/furusato-tax-travel-beginners-complete-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 超初心者向け ふるさと納税で旅行に安く泊まるマニュアル
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-gora-onsen-private-roten-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 箱根強羅温泉 全室客室露天風呂付き極上宿特集
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
