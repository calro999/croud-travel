const fs = require('fs');
const path = require('path');

const round105Hotels = JSON.parse(fs.readFileSync('round105_hotels.json', 'utf8'));

// Format hotel lookup map
const allHotels = round105Hotels;

const articles = [
  {
    slug: 'furusato-tax-hakone-yumoto-gateway-luxury-stay',
    title: '【箱根湯本温泉×ふるさと納税】玄関口の極上湯浴み＆老舗名宿特集！小田急ロマンスカーで行く名湯旅｜はつはな・吉池旅館・湯本富士屋ホテル',
    desc: '都心からロマンスカー直通約85分！箱根十七湯の玄関口・神奈川県箱根町「箱根湯本温泉」を楽天ふるさと納税でお得に贅沢ステイ。全客室露天風呂付きの極上スパリゾート「はつはな」、一万坪の名園と六本の自家源泉かけ流しを誇る「吉池旅館」、駅徒歩3分の名門「箱根湯本温泉 湯本富士屋ホテル」を徹底比較。箱根町トラベルクーポン活用術を網羅。',
    keywords: '箱根湯本温泉 ふるさと納税,はつはな クーポン 箱根,吉池旅館 ふるさと納税,湯本富士屋ホテル 宿泊,箱根町 ふるさと納税 旅行',
    targetCity: '神奈川県箱根町（箱根湯本）',
    leadTitle: '早川のせせらぎと箱根山麓の豊かな自然——開湯千二百年の名湯と美食に心癒やされる至福の箱根湯本ステイ',
    leadP1: '神奈川県足柄下郡箱根町、箱根連山の東麓に位置する箱根湯本（はこねゆもと）温泉。奈良時代の天平十年（738年）、泰澄の弟子・浄定坊によって発見されたと伝わる「箱根十七湯」の中で最も古い歴史を誇る名湯です。新宿駅から小田急ロマンスカーで乗り換えなし約85分という抜群のアクセスを誇り、駅前には寄木細工の民芸品店や温泉まんじゅう、焼き蒲鉾などの食べ歩きが楽しい賑やかな商店街が広がっています。',
    leadP2: '箱根湯本の大きな魅力は、早川や須雲川の清流沿いに佇む風情ある旅館群と、肌に優しいアルカリ性単純温泉の柔らかな湯ざわり。夕食には相模湾の新鮮な地魚や小田原の旬魚、相州牛、四季折々の京風懐石が膳を彩ります。神奈川県箱根町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの名門ホテルや高級旅館へお得に宿泊でき、特別な記念日や週末のリフレッシュ旅が最高の思い出になります。',
    hotelsKey: 'furusato-tax-hakone-yumoto-gateway-luxury-stay',
    hotelItems: [
      {
        key: 'hakone_hatsuhana',
        tagline: '全客室に自家源泉露天風呂を完備！須雲川の渓谷美と４つの貸切風呂・女性に優しい極上スパリゾート',
        detailTitle: 'はつはな —— 須雲川のせせらぎに包まれる現代の湯治宿。全室露天風呂付き客室と五感を満たすモダン懐石',
        features: [
          { title: '全室に自家源泉の露天風呂を備えた贅沢なプライベート空間', desc: '須雲川の渓谷の緑や紅葉を望む専用露天風呂。誰にも邪魔されず、好きな時に何度でも箱根の名湯を堪能できます。' },
          { title: '趣の異なる4つの貸切風呂と2つの大浴場で湯めぐり三昧', desc: '岩風呂や竹林を望む展望風呂など個性豊かな貸切風呂。美肌の湯として名高い自家源泉を心ゆくまで巡れます。' },
          { title: '神奈川の旬の恵みとモダンな感性が融合した特選創作懐石', desc: '相模湾の海の幸や厳選牛、彩り豊かな季節の野菜を繊細に仕立てたディナー。器や盛り付けの美しさも秀逸です。' }
        ],
        reviewPoints: '楽天トラベル評価4.86点、口コミ極めて高評価。「全室露天付きでお湯も素晴らしく、モダン懐石の美味しさに感動」「ラウンジや貸切風呂のクオリティが別格」と大絶賛。'
      },
      {
        key: 'hakone_yoshiike',
        tagline: '旧岩崎家別邸の歴史を受け継ぐ一万坪の名園！六本の自家源泉から毎分最大720L湧出する完全掛け流し',
        detailTitle: '箱根湯本温泉 吉池旅館 —— 国登録有形文化財の庭園と湧出量豊富な名湯。自家源泉かけ流しの贅沢と山海の美味',
        features: [
          { title: '国の登録有形文化財に指定された一万坪の池泉回遊式日本庭園「山月園」', desc: '四季折々の花木や鯉が泳ぐ清らかな池。朝夕の散策で、都会の喧騒を忘れさせる静寂の美に出会えます。' },
          { title: '敷地内にある6本の自家源泉から湧き出る豊富な天然温泉', desc: '加水・加温・循環一切なしの本物の源泉掛け流し。広大な庭園露天風呂や大浴場、貸切風呂で贅沢な湯浴みが叶います。' },
          { title: '相模湾の新鮮魚介や旬の山の幸を贅沢に盛り込んだ会席料理', desc: '板前が丹精込めて仕立てる本格和食会席。庭園の借景とともに、季節の味覚を五感でゆったりと味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.42点、口コミ3000件超。「一万坪の庭園の素晴らしさと、源泉掛け流しのお風呂の湯量に圧倒された」「料理も美味しく、箱根湯本駅から歩いて行けるのも便利」と高評価。'
      },
      {
        key: 'hakone_yumotofujiya',
        tagline: '箱根湯本駅から徒歩3分の好立地！早川のほとりに佇む老舗名門リゾートと本格和洋中ダイニング',
        detailTitle: '箱根湯本温泉 湯本富士屋ホテル —— 駅近の利便性と豊かな自然。名門富士屋ホテルのおもてなしと多彩な温泉施設',
        features: [
          { title: '箱根湯本駅（あじさい橋）から徒歩わずか3分の抜群のロケーション', desc: '荷物を預けてすぐに箱根観光へ出発可能。駅前商店街での買い物や食べ歩きにも最高の拠点です。' },
          { title: '広々とした大浴場と緑に囲まれた開放感あふれる露天風呂', desc: '男女別の大浴場、露天風呂、サウナ、家族風呂を完備。柔らかな単純温泉が旅の疲れを心地よく解きほぐします。' },
          { title: '日本料理・フランス料理・中国料理から選べる伝統のディナー', desc: '富士屋ホテル伝統のフレンチ、季節の会席料理、本格広東料理と多彩な選択肢。三世代旅行や記念日にもぴったりです。' }
        ],
        reviewPoints: '楽天トラベル評価4.34点、口コミ3500件超。「駅から近くてアクセス最高、お風呂も広くて気持ちいい」「フレンチや和食のクオリティが高く、スタッフの対応も素晴らしい」とファミリー・シニアに大人気。'
      }
    ],
    areaGuide: {
      title: '箱根湯本駅前商店街・早川渓谷＆芦ノ湖・彫刻の森観光ガイド',
      points: [
        { name: '箱根湯本駅前商店街での食べ歩き＆寄木細工ショッピング', text: '焼き立ての「箱根まんじゅう」や籠清のかまぼこ、ジェラートなどのグルメが充実。伝統工芸品「箱根寄木細工」の体験工房やお土産探しも楽しめます。' },
        { name: '早川渓谷のあじさい橋散策と須雲川遊歩道', text: '朱塗りの欄干が美しい「あじさい橋」。早川の清流を眺めながら川沿いの遊歩道を散歩すれば、初夏の紫陽花や秋の紅葉など豊かな四季を満喫できます。' },
        { name: '箱根登山電車で行く彫刻の森美術館＆強羅・芦ノ湖', text: 'スイッチバックで急勾配を登る日本有数の山岳鉄道「箱根登山電車」。彫刻の森美術館や大涌谷の黒たまご、芦ノ湖の海賊船へと続く黄金ルートの起点です。' }
      ]
    },
    furusatoStepTitle: '神奈川県箱根町ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「神奈川県箱根町」クーポンを獲得', desc: '楽天ふるさと納税で箱根町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに即時付与されます。' },
      { step: 'Step 2: 小田急ロマンスカー等で箱根湯本へ快適アクセス', desc: '新宿駅から小田急特急ロマンスカーで約85分、新幹線利用なら小田原経由で約1時間。3年間の有効期間内で、春夏秋冬のお好みの季節に合わせて旅行計画を立てられます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: 'はつはな、吉池旅館、湯本富士屋ホテルなどの対象プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-yugawara-onsen-ryotei-kaiseki-stay',
    title: '【湯河原温泉×ふるさと納税】文豪が愛した名湯＆極上料亭懐石！奥湯河原の隠れ宿特集｜海石榴・山翠楼・ふきや',
    desc: '万葉集にも詠まれた古湯・神奈川県湯河原町「湯河原温泉（奥湯河原）」を楽天ふるさと納税でお得に極上ステイ！奥湯河原の清流に抱かれる名門料亭旅館「海石榴（つばき）」、展望露天風呂と自家製湯葉懐石の「山翠楼 SANSUIROU」、数寄屋建築と貸切露天風呂の「湯河原温泉 ふきや」を徹底比較。湯河原町トラベルクーポン活用術を網羅。',
    keywords: '湯河原温泉 ふるさと納税,海石榴 クーポン 湯河原,山翠楼 ふるさと納税,湯河原温泉 ふきや 宿泊,湯河原町 ふるさと納税 旅行',
    targetCity: '神奈川県湯河原町（奥湯河原）',
    leadTitle: '藤木川の渓谷に響くせせらぎと千年のいで湯——夏目漱石や芥川龍之介が愛した文豪の隠れ里で味わう至高の懐石美禄',
    leadP1: '神奈川県最南端、相模湾と箱根連山に挟まれた山間に湧く湯河原（ゆがわら）温泉。万葉集に「足柄の土肥の河内に出づる湯の…」と詠まれた東日本唯一の万葉古湯であり、明治から大正にかけては夏目漱石が絶筆『明暗』を執筆し、芥川龍之介、国木田独歩、島崎藤村ら名だたる文豪が逗留して創作に耽った日本を代表する文学の街です。特に温泉街の最奥部に位置する「奥湯河原」は、深い緑の渓谷と静寂に包まれた極上の大人の隠れ家エリアとして知られています。',
    leadP2: '湯河原温泉の魅力は、弱食塩泉・弱アルカリ性のまろやかな泉質と、日本屈指の料理旅館が競い合う最高峰の美食体験。相模湾で水揚げされる地魚や伊勢海老、アワビ、朝採れの柑橘類、そして熟練の料理人が出汁からこだわり抜いた本格京風懐石が楽しめます。神奈川県湯河原町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの老舗料亭旅館へお得に宿泊でき、喧騒を離れた贅沢な休日が叶います。',
    hotelsKey: 'furusato-tax-yugawara-onsen-ryotei-kaiseki-stay',
    hotelItems: [
      {
        key: 'yugawara_tsubaki',
        tagline: '奥湯河原の豊かな自然に包まれた名門料亭旅館！四季を彩る極上の懐石料理と数寄屋造りの美',
        detailTitle: '海石榴 つばき —— 藤木川の清流沿いに佇む最高峰の和風旅館。日本の美意識が息づく静寂と至高の料理美禄',
        features: [
          { title: '四季の野花と椿が咲き誇る山間に佇む数寄屋建築の館', desc: '手入れの行き届いた庭園と清流のせせらぎ。日本の伝統美と現代の快適性が調和した静寂の空間です。' },
          { title: '奥湯河原の豊かな大自然を望む大浴場と露天風呂', desc: '無色透明で肌に優しい名湯。湯船から眺める新緑や紅葉、雪景色が日々の疲れを優しく解き放ちます。' },
          { title: '「料亭旅館」の名に恥じない最高峰の四季折々京風懐石料理', desc: '吟味された食材と職人の技が織りなす芸術的な料理。お部屋や個室食事処でゆったりと至福の時間を過ごせます。' }
        ],
        reviewPoints: '楽天トラベル評価4.48点。「奥湯河原の自然と数寄屋の佇まいに癒やされた」「お料理が一口ごとに感動する美味しさで、サービスも完璧」と記念日利用に大絶賛。'
      },
      {
        key: 'yugawara_sansuirou',
        tagline: '奥湯河原の山並みを一望する展望露天風呂「大空」！名物自家製湯葉と本格懐石料理を堪能する名宿',
        detailTitle: '山翠楼 SANSUIROU —— 聚楽壁と銘木が薫る本格料亭旅館。奥湯河原の絶景風呂と湯葉料理が織りなす美食ステイ',
        features: [
          { title: '屋上に設けられた展望露天風呂「大空」からの360度大自然パノラマ', desc: '山並みと空に溶け込むような開放感。満天の星空や朝の清々しい山霧を眺めながらの入浴は格別の体験です。' },
          { title: '厳選された国産大豆と天然水で作る名物「自家製引き上げ湯葉」', desc: '毎朝手作りされる新鮮な湯葉料理。できたてのまろやかなコクと上品な甘みが口いっぱいに広がります。' },
          { title: '旬の食材を贅沢に取り入れた月替わりの本格会席コース', desc: '相模湾の新鮮魚介や黒毛和牛、季節の野菜を組み合わせた端正な料理。料理長の確かな技が光ります。' }
        ],
        reviewPoints: '楽天トラベル評価4.31点、口コミ1400件超。「展望露天風呂からの景色が最高でお湯も肌に優しい」「名物の湯葉料理が絶品で、接客も温かく素晴らしい宿」とリピーター多数。'
      },
      {
        key: 'yugawara_fukiya',
        tagline: '屋上に３つの貸切露天風呂を完備！数寄屋造りの上質空間と月替わりの繊細な日本料理',
        detailTitle: '湯河原温泉 ふきや —— 現代に生きる日本の美意識。屋上貸切風呂湯めぐりと旬を愛でる繊細な懐石',
        features: [
          { title: '屋上と大浴場に設えられた計7つの個性豊かな湯船と貸切風呂', desc: '湯河原の山並みを望む展望貸切露天風呂や檜風呂。予約不要で空いていれば何度でも自由に利用できます。' },
          { title: '伝統的な数寄屋大工の技が息づく落ち着いた純和風客室', desc: '無垢材や畳の香りが心地よいプライベート空間。静けさの中で日常の喧騒を忘れ、ゆったりと寛げます。' },
          { title: '全国から厳選した旬の素材を活かしたこだわりの日本料理', desc: '出汁の引き方から器の選定まで徹底的に美を追求した会席。お部屋で気兼ねなく味わえる贅沢が魅力です。' }
        ],
        reviewPoints: '楽天トラベル評価4.46点。「貸切露天風呂からの景色が素晴らしく、お風呂巡りが楽しかった」「お部屋食の懐石料理がどれも美味しく、細やかな心遣いに感動した」と高い満足度。'
      }
    ],
    areaGuide: {
      title: '万葉公園・玄関テラス・不動滝＆幕山公園観光ガイド',
      points: [
        { name: 'リニューアルした万葉公園「湯河原惣湯 Books and Retreat」', text: '渓流沿いの森林浴と源泉掛け流し足湯、カフェが融合した人気スポット。木漏れ日の中で読書やカフェタイムを優雅に楽しめます。' },
        { name: '落差15mの名瀑「不動滝」と茶屋の甘味', text: '竹林に囲まれた清涼感あふれる名瀑。滝の左側には身代わり不動、右側には出世大黒尊が祀られ、パワースポットとしても知られています。' },
        { name: '幕山公園の湯河原梅林（2月〜3月）とハイキングコース', text: '幕山の山肌を約4,000本の紅白梅が埋め尽くす「梅の宴」。山頂からは相模湾や真鶴半島を一望する絶景トレッキングが楽しめます。' }
      ]
    },
    furusatoStepTitle: '神奈川県湯河原町ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「神奈川県湯河原町」クーポンを獲得', desc: '楽天ふるさと納税で湯河原町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 東京駅からJR東海道線特急踊り子号で直通約75分', desc: '東京駅から特急踊り子で湯河原駅まで直通約75分、快速アクティーや普通列車でも約90分。3年間の有効期間内で、梅の季節や新緑・紅葉に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '海石榴、山翠楼、ふきやなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-minakami-onsen-tanigawadake-stay',
    title: '【水上温泉郷×ふるさと納税】谷川岳の絶景＆利根川渓流露天！上州牛と名湯満喫特集｜別邸仙寿庵・松乃井・坐山みなかみ',
    desc: '利根川源流の大自然と谷川岳の秀峰に抱かれる群馬県みなかみ町「水上温泉郷」を楽天ふるさと納税でお得に贅沢ステイ！世界最高峰ルレ・エ・シャトー加盟の「別邸 仙寿庵」、四つの自家源泉と豪華バイキングの「大江戸温泉物語Premium 松乃井」、利根川を望む十六の湯船を誇る「坐山 みなかみ（旧水上館）」を徹底比較。みなかみ町トラベルクーポン活用術を網羅。',
    keywords: '水上温泉 ふるさと納税,別邸仙寿庵 クーポン みなかみ,松乃井 水上温泉 ふるさと納税,坐山みなかみ 宿泊,みなかみ町 ふるさと納税 旅行',
    targetCity: '群馬県みなかみ町（水上温泉郷）',
    leadTitle: '谷川岳の雄姿と利根川の清らかな渓流——豊富な自家源泉が湧く奥利根の名湯郷で味わう上州牛と山の恵み',
    leadP1: '群馬県利根郡みなかみ町、三国山脈と名峰・谷川岳（たにがわだけ）の南麓に広がる水上（みなかみ）温泉郷。利根川の最上流部に位置し、水上温泉を中心に谷川温泉、宝川温泉、法師温泉など個性豊かな湯が点在する「みなかみ十八湯」の総称です。上越新幹線の開通により東京駅から最速約66分で上毛高原駅へアクセスできる利便性を持ちながら、一歩足を踏み入れれば手付かずの大自然とダイナミックな渓谷美が広がっています。',
    leadP2: '水上温泉郷の大きな魅力は、利根川の渓流を眼下に見下ろす野趣あふれる露天風呂と、四季折々のアウトドア体験（ラフティング・キャニオニング・スキー・トレッキング）。夕食には群馬県が誇るブランド牛「上州牛」のすき焼きやステーキ、清流が育む岩魚や山女魚、採れたての舞茸や高原野菜など、山里の豊かな味覚を堪能できます。群馬県みなかみ町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの最高級旅館へお得に宿泊でき、心洗われる大自然のリトリートが叶います。',
    hotelsKey: 'furusato-tax-minakami-onsen-tanigawadake-stay',
    hotelItems: [
      {
        key: 'minakami_senjuan',
        tagline: 'ルレ・エ・シャトー加盟の世界が認めた至高宿！全室に谷川岳を望む源泉かけ流し露天風呂を完備',
        detailTitle: '谷川温泉 別邸 仙寿庵 —— 建築美と名峰の借景。全室露天風呂付き客室で過ごす究極のプライベートステイ',
        features: [
          { title: 'すべての客室に谷川岳のパノラマを望む源泉掛け流し露天風呂', desc: '名峰・谷川岳を正面に望む特等席。木や石を贅沢に使った広々とした客室で、静かに名湯に浸かる至福を味わえます。' },
          { title: '美術館のように美しい曲面廊下と伝統工芸「組子」の現代建築美', desc: '高さ8mのガラス張り曲面廊下から眺める庭園。随所に職人技が光るスタイリッシュな和モダンリゾートです。' },
          { title: '上州牛や日本海の鮮魚を取り入れた極上の山里創作懐石', desc: '素材本来の旨味を最大限に引き出した料理。美しい器と洗練された盛り付けに五感が満たされます。' }
        ],
        reviewPoints: '楽天トラベル評価4.50点、国内外の賞を多数受賞。「谷川岳を望むお部屋の露天風呂と建築の美しさが別格」「接客、お料理、アメニティすべてが一流の最高峰旅館」と絶賛。'
      },
      {
        key: 'minakami_matsunoi',
        tagline: '四つの自家源泉と約三万坪の広大な日本庭園！充実の湯めぐりと豪華ライブキッチンバイキング',
        detailTitle: '大江戸温泉物語Premium 松乃井 —— 利根川沿いの一大温泉リゾート。四つの自家源泉かけ流しと贅沢グルメ',
        features: [
          { title: '敷地内から自噴する良質な4つの自家源泉を引く湯船の数々', desc: '「螢の湯」「草津の湯」「火里の湯」など個性豊かな露天風呂と大浴場。肌触りの優しい単純温泉を満喫できます。' },
          { title: '四季折々の花木や清流が彩る約三万坪の壮大な日本庭園', desc: '広大な敷地内をゆったり散策。夜にはライトアップされた幻想的な庭園風景を楽しめます。' },
          { title: 'シェフが目の前で焼き上げるステーキや新鮮握り寿司バイキング', desc: '地元の旬食材や出来立て料理が並ぶ豪華ビュッフェ。家族連れからカップルまで誰もが大満足の食のエンターテインメントです。' }
        ],
        reviewPoints: '楽天トラベル評価4.09点、口コミ4700件超。「四つの源泉掛け流しのお風呂が最高で庭園も広い」「リニューアルしてプレミアムになり、バイキングもお部屋も大満足」と高評価。'
      },
      {
        key: 'minakami_zazan',
        tagline: '利根川渓流の絶景を望む十六の多彩な湯船！大自然のいで湯と上州牛会席を味わう老舗宿',
        detailTitle: '坐山 みなかみ —— 利根川の瀬音に耳を傾ける渓流の宿。十六の湯船をめぐる湯三昧と四季の上州美味',
        features: [
          { title: '利根川渓流に面した大浴場や露天風呂など多彩な16の湯船', desc: '「牧水の湯」「水晶の湯」「奥利根八景の湯」など湯めぐりを満喫。川風を感じながらの渓流露天風呂は格別です。' },
          { title: '全客室から利根川の渓谷美や奥利根の山並みを一望', desc: '四季折々に色づく渓谷のパノラマ。窓を開ければ心地よい川のせせらぎが部屋いっぱいに響き渡ります。' },
          { title: '上州牛の陶板焼きや地場産の採れたてきのこ・山菜会席', desc: '群馬の豊かな大地の恵みをふんだんに取り入れた郷土会席。素材の旨味を活かした温かい料理が評判です。' }
        ],
        reviewPoints: '楽天トラベル評価4.08点、口コミ2500件超。「利根川のすぐそばにある露天風呂が開放感抜群」「館内のお風呂がとにかくたくさんあって飽きない」と温泉好きに人気。'
      }
    ],
    areaGuide: {
      title: '谷川岳ロープウェイ・一ノ倉沢・諏訪峡＆アウトドアアクティビティ観光ガイド',
      points: [
        { name: '谷川岳ロープウェイ＆天神峠展望台からの大パノラマ', text: '標高1,319mの天神平まで約15分の空中散歩。さらにリフトで天神峠へ登れば、谷川岳連峰の岩壁と雲海のダイナミックな景観が広がります。' },
        { name: '利根川の渓谷美を巡る「諏訪峡遊歩道」と笹笛橋', text: '奇岩や巨岩が連なる水上温泉街随一の名勝。笹笛橋からの谷川岳の眺望や、紅葉シーズンの渓谷トレッキングが格別です。' },
        { name: '利根川源流ラフティング＆キャニオニング（グリーンシーズン）', text: '日本屈指の激流ラフティングスポット。春の雪解け大増水ラフティングから夏のファミリーキャニオニングまで、大自然のアドベンチャーを体感できます。' }
      ]
    },
    furusatoStepTitle: '群馬県みなかみ町ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「群馬県みなかみ町」クーポンを獲得', desc: '楽天ふるさと納税でみなかみ町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 上越新幹線上毛高原駅またはJR上越線水上駅へアクセス', desc: '東京駅から上越新幹線で上毛高原駅まで最速約66分、駅から路線バスや無料送迎で約20分。3年間の有効期間内で、スキーや紅葉、新緑に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '別邸仙寿庵、松乃井、坐山みなかみなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-fukuoka-hakata-luxury-gourmet-stay',
    title: '【福岡・博多×ふるさと納税】駅直結ラグジュアリー＆天然温泉スパ！もつ鍋・水炊き美食特集｜都ホテル博多・グランドハイアット・ヒルトンシーホーク',
    desc: 'アジアのリーダー都市・九州最大の美食シティ福岡県福岡市を楽天ふるさと納税でお得に贅沢ステイ！JR博多駅直結・屋上温泉スパ＆アウトドアプールの「都ホテル 博多」、キャナルシティ直結の国際的ラグジュアリー「グランドハイアット福岡」、博多湾オーシャンビューの「ヒルトン福岡シーホーク」を徹底比較。福岡市トラベルクーポン活用術を網羅。',
    keywords: '福岡 ふるさと納税,都ホテル博多 クーポン,グランドハイアット福岡 ふるさと納税,ヒルトン福岡シーホーク 宿泊,福岡市 ふるさと納税 旅行',
    targetCity: '福岡県福岡市（博多・天神）',
    leadTitle: '活気あふれる屋台と玄界灘の豊かな海の幸——極上のアーバンリゾートホテルと本場博多グルメを満喫する九州の休日',
    leadP1: '九州の政治・経済・文化の中心地であり、アジアの玄関口として発展を続ける福岡県福岡市。福岡空港から博多駅まで地下鉄でわずか5分という世界屈指の都市利便性を誇り、中洲・天神の活気ある屋台街や、キャナルシティ博多、大濠公園、歴史ある櫛田神社など多彩な見どころが集結しています。街中を歩けば、豚骨ラーメン、もつ鍋、水炊き、ごまさば、鉄鍋餃子など、日本一とも称される豊かな食文化が旅人を魅了します。',
    leadP2: '福岡滞在をさらに贅沢にするのが、博多駅直結の最新スパホテルや海沿いのアーバンリゾートホテル。屋上の天然温泉スパでリフレッシュし、夜は活気あふれる博多の街で美食を堪能する大人のシティエスケープが人気を集めています。福岡県福岡市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れのハイクラスホテルへお得に宿泊でき、観光・出張・記念日旅行を最高にお得にアップグレードできます。',
    hotelsKey: 'furusato-tax-fukuoka-hakata-luxury-gourmet-stay',
    hotelItems: [
      {
        key: 'fukuoka_miyakohotel',
        tagline: 'JR博多駅筑紫口直結！最上階に天然温泉スパ＆アウトドアプールを備えた都会のオアシス',
        detailTitle: '都ホテル 博多 —— 博多駅直結の最高峰ラグジュアリー。屋上温泉スパプールとガラスファサードの美しいホテル',
        features: [
          { title: 'JR博多駅筑紫口から地下直結徒歩1分の圧倒的アクセス', desc: '雨の日も濡れずにチェックイン。新幹線や地下鉄、空港への移動がスムーズで、福岡観光やビジネスに最高の立地です。' },
          { title: '最上階13階に広がるアウトドア温泉スパ＆内湯・サウナ', desc: '敷地内から湧出する天然温泉を利用した屋外温泉プールとジャグジー。博多の夜空を眺めながら贅沢なスパ体験を楽しめます。' },
          { title: '全室30㎡以上のゆとりある客室と上質なアメニティ', desc: '大きな窓から光が差し込むスタイリッシュな客室。全室バストイレ別で、独立洗面台や高級ベッドが快適な眠りを誘います。' }
        ],
        reviewPoints: '楽天トラベル評価4.62点、口コミ1400件超。「駅直結で立地最高、屋上の温泉スパプールが素晴らしかった」「お部屋も綺麗で広く、朝食もとても美味しかった」と絶賛。'
      },
      {
        key: 'fukuoka_grandhyatt',
        tagline: 'キャナルシティ博多直結の国際的ラグジュアリーホテル！伝統と革新が息づく上質のおもてなし',
        detailTitle: 'グランドハイアット福岡 —— 噴水ショーを望む洗練の空間。ハイアットブランドの気品と天神・中洲へ徒歩すぐの好立地',
        features: [
          { title: 'エンターテインメント複合施設「キャナルシティ博多」直結', desc: 'ショッピングや劇場、映画館、噴水ショーをホテル直結で満喫。天神や中洲の歓楽街へも徒歩圏内のベストロケーションです。' },
          { title: 'クラシカルで洗練された広々とした客室と大理石バスルーム', desc: '全客室に独立したシャワーブース付きバスタブを完備。高い防音性と上質なリネンが極上の寛ぎを約束します。' },
          { title: '一流シェフが手掛けるインターナショナルレストラン＆バー', desc: 'オープンキッチンのグリルレストラン「THE MARKET F」での極上ディナー。バーラウンジからはキャナルシティの噴水を一望できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.48点、口コミ2000件超。「スタッフのホスピタリティが一流で安心感がある」「お部屋のバスタブが大きくて快適、中洲の屋台へも歩いて行けて最高」と高評価。'
      },
      {
        key: 'fukuoka_hilton',
        tagline: '博多湾オーシャンビューの巨大アーバンリゾート！地上100m超から望む福岡の夜景と大浴場',
        detailTitle: 'ヒルトン福岡シーホーク —— みずほPayPayドーム隣接。全室オーシャンビューと地上35階スカイビューの絶景',
        features: [
          { title: '博多湾を一望する1,000室超の全室オーシャンビュー客室', desc: '客室の窓から広がる青い海と福岡タワー、夜には煌めく都市夜景のパノラマ。リゾート感あふれる滞在を楽しめます。' },
          { title: 'みずほPayPayドーム福岡に隣接する抜群のロケーション', desc: '野球観戦やコンサート、ライブ遠征に最適。隣接する商業施設「マークイズ福岡ももち」での買い物も便利です。' },
          { title: '高さ40mのアトリウム空間「ブラッセリー＆ラウンジ シアラ」', desc: '開放感あふれるガラス張りの巨大空間で味わう豪華ビュッフェ。地元九州の厳選食材を取り入れた朝食が評判です。' }
        ],
        reviewPoints: '楽天トラベル評価4.16点、口コミ11,000件超。「部屋からの博多湾と夜景の眺めが素晴らしい」「ドーム直結でライブ遠征に最高、アトリウムの朝食も種類豊富で大満足」と大人気。'
      }
    ],
    areaGuide: {
      title: '博多駅・中洲屋台・太宰府天満宮＆大濠公園観光ガイド',
      points: [
        { name: '中洲・天神の屋台街めぐり（ラーメン・焼き鳥・おでん）', text: '夕暮れとともに那珂川沿いや天神の歩道に並ぶ屋台。地元の人や観光客と肩を並べ、出来立ての博多ラーメンや明太子料理を味わうのが名物です。' },
        { name: '学問の神様「太宰府天満宮」参拝と名物「梅ヶ枝餅」', text: '菅原道真公を祀る全国天満宮の総本宮。太鼓橋や心字池、隈研吾氏設計のスターバックス、焼き立ての梅ヶ枝餅の食べ歩きが人気です。' },
        { name: '福岡タワーとシーサイドももち海浜公園のサンセット', text: '全長234mの日本一高い海浜タワー。展望室からの360度パノラマと、人工ビーチ沿いに広がる海辺のレストランでの夕暮れ散策が楽しめます。' }
      ]
    },
    furusatoStepTitle: '福岡県福岡市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「福岡県福岡市」クーポンを獲得', desc: '楽天ふるさと納税で福岡市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 福岡空港または山陽新幹線・九州新幹線で博多へアクセス', desc: '福岡空港から博多駅まで地下鉄で約5分、新大阪駅から山陽新幹線で約2時間半。3年間の有効期間内で、グルメ旅行やライブ遠征に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '都ホテル博多、グランドハイアット福岡、ヒルトン福岡シーホークなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
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
    datePublished: '2026-09-11T00:10:00+09:00',
    dateModified: '2026-09-11T00:10:00+09:00',
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
                  <td className="p-3 text-stone-600">${idx === 0 ? '最高峰の格式・贅沢ステイ' : idx === 1 ? '抜群の立地・名湯満喫' : '温もり空間・アットホーム旅'}</td>
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
              <Link href="/furusato-tax-niseko-luxury-resort-powder-snow-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> ニセコ 世界最高峰パウダースノー＆羊蹄山ビュー特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-kamakura-shonan-ocean-history-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 鎌倉・湘南 七里ヶ浜オーシャンビュー＆古都の歴史特集
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
