const fs = require('fs');
const path = require('path');

const round100Hotels = JSON.parse(fs.readFileSync('round100_hotels.json', 'utf8'));

// Convert to lookup map
const allHotels = {};
for (const [slug, arr] of Object.entries(round100Hotels)) {
  allHotels[slug] = {};
  for (const item of arr) {
    allHotels[slug][item.key] = item.hotel;
  }
}

const articles = [
  {
    slug: 'furusato-tax-jozankei-onsen-keikoku-retreat-stay',
    title: '【定山渓温泉×ふるさと納税】札幌の奥座敷・豊平峡渓谷美＆源泉かけ流し！極上リゾート宿特集｜翠山亭・ゆらく草庵・森の謌',
    desc: '札幌市街から約1時間・支笏洞爺国立公園の渓谷美湯・定山渓温泉を楽天ふるさと納税でお得に贅沢ステイ！自家源泉三本をブレンドした名宿「定山渓第一寶亭留 翠山亭」、全室温泉風呂完備の和モダン「ゆらく草庵」、森の物語と美食ビュッフェの「定山渓 鶴雅リゾートスパ 森の謌」を徹底比較。札幌市トラベルクーポン活用術を網羅。',
    keywords: '定山渓温泉 ふるさと納税,定山渓 翠山亭 クーポン,ゆらく草庵 ふるさと納税 定山渓,森の謌 鶴雅 ふるさと納税,札幌市 ふるさと納税 宿泊',
    targetCity: '北海道札幌市',
    leadTitle: '原生林の渓谷美と滾々と湧き出る名湯——札幌の奥座敷・定山渓で体験する五感を解き放つリトリート',
    leadP1: '北海道札幌市南区、都心部から車や直行バスで約1時間という好立地にありながら、支笏洞爺国立公園の雄大な大自然に抱かれた定山渓（じょうざんけい）温泉。慶応2年に修験僧・美泉定山（みいずみじょうざん）がアイヌの人々の案内で泉源を発見し、私財を投じて開いた歴史を持ちます。豊平川の清流が削り出した深い渓谷沿いに温泉街が広がり、春の新緑、夏の爽涼、秋の燃えるような紅葉、冬の白銀の雪景色と、四季折々の圧倒的な渓谷美が訪れる者を包み込みます。',
    leadP2: '定山渓温泉の泉質は、無色透明でまろやかな塩化物泉。塩分が肌に付着して汗の蒸発を防ぐため保温効果が抜群で、「温まりの湯」として古くから湯治客に愛されてきました。近年は洗練された和モダン旅館や、森の癒やしをテーマにした極上リゾートホテルが次々と誕生。夕食には北海道産の黒毛和牛や近海の新鮮な魚介、採れたての道産野菜をふんだんに取り入れた会席やビュッフェが贅沢な夜を彩ります。北海道札幌市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの名門宿へお得に宿泊でき、特別な休日が叶います。',
    hotelsKey: 'furusato-tax-jozankei-onsen-keikoku-retreat-stay',
    hotelItems: [
      {
        key: 'jozankei_suizan',
        tagline: '創業から守り継ぐ自家源泉三本のブレンド湯！贅を尽くした客室展望風呂と職人技が光る炭火懐石',
        detailTitle: '定山渓第一寶亭留 翠山亭（すいざんてい） —— 渓谷の静寂に抱かれる名門。濃厚な源泉掛け流しと上質な大人の時間',
        features: [
          { title: '敷地内から自噴する三本の自家源泉をブレンドした濃厚な名湯', desc: '濃厚な温泉成分をそのまま楽しめる大浴場や露天風呂。源泉掛け流しの客室風呂を備えた特別室では、24時間好きな時に贅沢な湯浴みが叶います。' },
          { title: 'ラウンジでのフリードリンクと自家製スイーツのおもてなし', desc: '宿泊者専用ラウンジでは、こだわりの珈琲やお茶、パティシエ特製のお菓子、夜にはアルコールが提供され、優雅な寛ぎの時間を過ごせます。' },
          { title: '北海道の旬魚と道産牛を炭火で香ばしく焼き上げる炭火会席', desc: '専用の食事処で料理人が目の前で炭火で焼き上げる極上の魚介や肉料理。炭の芳ばしい香りと素材本来の旨味が五感を刺激します。' }
        ],
        reviewPoints: '楽天トラベル評価4.43点、口コミ2100件超。「お部屋の温泉露天風呂が広く泉質も最高」「スタッフの接客が行き届いており、お料理も一品一品が絶品だった」と高い信頼を獲得。'
      },
      {
        key: 'jozankei_mizuno',
        tagline: '全客室に天然温泉風呂を完備！豊平川の渓谷美を望む共立リゾート最高峰の純和風癒やしの宿',
        detailTitle: '定山渓 ゆらく草庵 —— 全室畳敷きの和の温もり。客室の檜温泉風呂と四つの無料貸切露天風呂の贅',
        features: [
          { title: '全客室の窓辺に配された天然温泉が注ぐ客室風呂', desc: '全室に天然温泉を楽しめる専用風呂を完備。渓谷の木々や雪景色を眺めながら、誰にも邪魔されないプライベートな湯浴みを満喫できます。' },
          { title: '予約不要・無料で何度でも利用できる趣異なる四つの貸切露天風呂', desc: '岩風呂や檜風呂など風情ある貸切風呂。大浴場の露天風呂とともに、館内だけで多彩な湯巡りを心ゆくまで楽しめます。' },
          { title: '北海道の山海の幸を彩り豊かに仕立てた和食会席ディナー', desc: '旬の味覚を散りばめた目にも鮮やかな会席料理。名物の「夜鳴きそば」サービスなど、共立リゾートならではの心憎いおもてなしも人気です。' }
        ],
        reviewPoints: '楽天トラベル評価4.48点、口コミ1100件超。「部屋のお風呂が檜造りで景色もよく最高」「貸切風呂が無料でたくさんあり、食事もボリューム満点で美味しかった」と大好評。'
      },
      {
        key: 'jozankei_shika',
        tagline: '森の物語を五感で楽しむリゾートスパ！大暖炉のラウンジと圧倒的クオリティを誇る森のビュッフェ',
        detailTitle: '定山渓 鶴雅リゾートスパ 森の謌（うた） —— 森に包まれるオアシス。巨大な樹木の暖炉と本格スパリゾート',
        features: [
          { title: '巨大な木のオブジェと暖炉が印象的な森のラウンジ', desc: '靴を脱いで寛ぐ絨毯敷きのラウンジ。暖炉の炎を眺めながらハープの生演奏に耳を傾け、日常のストレスを優しく解き放てます。' },
          { title: '緑豊かな森の空気を感じる露天風呂と本格サウナ・岩盤浴', desc: '自然林に囲まれた開放感抜群の露天風呂。清潔でモダンな大浴場やスパトリートメントで、極上の癒やしを体験できます。' },
          { title: '窯焼きピッツァやパティシエスイーツが並ぶ大人気ビュッフェ', desc: '鶴雅グループが誇るハイレベルなビュッフェダイニング。オープンキッチンで焼き上げる肉料理や焼き立てパン、華やかなデザートがずらりと並びます。' }
        ],
        reviewPoints: '楽天トラベル評価4.56点、口コミ2900件超。「ビュッフェの美味しさと種類の多さに感動」「館内全体がアロマの良い香りに包まれ、森の中で本当にリフレッシュできた」と絶賛。'
      }
    ],
    areaGuide: {
      title: '定山渓温泉・豊平峡ダム＆二見吊橋観光ガイド',
      points: [
        { name: '豊平峡（ほうへいきょう）ダムの紅葉と電気バスツアー', text: '「水源の森百選」にも選ばれる豊平峡。秋にはダム湖を取り囲む岸壁が一面赤や黄色に染まり、電気バスでトンネルを抜けた先に広がる大パノラマは北海道屈指の紅葉名所です。' },
        { name: '二見吊橋（ふたみつりばし）と定山渓ネイチャールミナリエ', text: '豊平川の渓谷に架かる赤い吊橋。夏から秋にかけては光と映像が自然林を幻想的に彩るナイトウォーク「定山渓ネイチャールミナリエ」が開催されます。' },
        { name: '定山源泉公園での足湯と「おんたま」作り体験', text: '美泉定山の生誕200年を記念して作られた公園。高温の源泉を利用して自分で温泉たまごを作ることができ、足湯に浸かりながら出来立てを味わえます。' }
      ]
    },
    furusatoStepTitle: '北海道札幌市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「北海道札幌市」クーポンを獲得', desc: '楽天ふるさと納税で札幌市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンが即時アカウントに付与されます。' },
      { step: 'Step 2: 新千歳空港やJR札幌駅から直行バス「かっぱライナー」でアクセス', desc: '札幌駅前バスターミナルから直行バスで約60分。3年間の有効期間内で、新緑の初夏や紅葉の秋、雪まつりシーズンに合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '翠山亭、ゆらく草庵、森の謌などの対象プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-shuzenji-onsen-bamboo-heritage-stay',
    title: '【修善寺温泉×ふるさと納税】伊豆最古の名湯・竹林の小径散策＆国の登録文化財！歴史名宿特集｜菊屋・新井旅館・宙SORA',
    desc: '弘法大師が開いた伊豆最古の名湯・静岡県修善寺温泉を楽天ふるさと納税でお得に満喫！創業四百年・夏目漱石ゆかりの「湯回廊 菊屋」、国の登録有形文化財十五棟を誇る「新井旅館」、一万五千坪の名庭園と展望風呂の「宙 SORA 渡月荘金龍」を徹底比較。伊豆牛会席や伊豆市トラベルクーポン活用術を網羅。',
    keywords: '修善寺温泉 ふるさと納税,湯回廊 菊屋 クーポン,新井旅館 修善寺 ふるさと納税,宙 SORA 渡月荘金龍 宿泊,伊豆市 ふるさと納税 旅行',
    targetCity: '静岡県伊豆市',
    leadTitle: '伊豆の小京都に流れる桂川のせせらぎ——竹林の小径と文人墨客が愛した名建築で過ごすタイムレスな休日',
    leadP1: '静岡県伊豆市、天城連峰の北麓に位置する修善寺温泉。平安時代初期の大同2年（807年）、弘法大師空海が桂川の河原で病気の実父の体を洗う少年を見て心を打たれ、独鈷杵（とっこしょ）で岩を砕いて温泉を湧出させた「独鈷の湯」がその起源と伝わる、千二百年余の歴史を誇る伊豆最古の名湯です。温泉街の中心を流れる桂川沿いには、青々とした竹が天に向かって伸びる「竹林の小径」や朱塗りの橋が架かり、「伊豆の小京都」と称される優美な情景が広がります。',
    leadP2: '修善寺温泉の魅力は、川端康成、芥川龍之介、夏目漱石ら多くの文豪が逗留し傑作を執筆した歴史ある木造建築美。手入れの行き届いた日本庭園を眺めながら良質なアルカリ性単純温泉に浸かり、夕食には天城の清流で育った本わさびをすり下ろして味わう伊豆牛ステーキや駿河湾の新鮮な地魚会席に舌鼓。静岡県伊豆市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの文化財名宿へお得に宿泊でき、特別な思い出が残る上質な温泉旅が叶います。',
    hotelsKey: 'furusato-tax-shuzenji-onsen-bamboo-heritage-stay',
    hotelItems: [
      {
        key: 'shuzenji_kikuya',
        tagline: '創業四百年・夏目漱石が静養した歴史宿！桂川を渡る渡り廊下と趣異なる四つの貸切露天風呂',
        detailTitle: '湯回廊 菊屋（共立リゾート） —— 桂川のせせらぎに包まれる回廊。時を忘れる湯巡りと漱石ゆかりの和モダン空間',
        features: [
          { title: '敷地内を流れる桂川を渡る風情豊かな「湯回廊」', desc: '時の流れを感じさせる美しい渡り廊下。清流のせせらぎを聞きながら、緑豊かな庭園や客室、大浴場へと続く回廊を歩く贅沢を味わえます。' },
          { title: '予約不要・無料で何度でも楽しめる四つの貸切風呂', desc: '趣の異なる露天風呂や内湯の貸切風呂。名湯修善寺の湯に身を浸しながら、プライベートな癒やしの時間をゆったりと過ごせます。' },
          { title: '選べる夕食スタイル「台の物」と旬の味覚を散りばめた月替わり会席', desc: '静岡の銘柄肉や駿河湾の魚介を活かした本格会席。夜には名物の「夜鳴きそば」や湯上がりドリンクサービスも楽しめます。' }
        ],
        reviewPoints: '楽天トラベル評価4.62点、口コミ2800件超。「回廊の雰囲気が素晴らしく風情満点」「お風呂の数が多く貸切風呂も無料で最高、食事も大変美味しかった」と絶大な人気。'
      },
      {
        key: 'shuzenji_araiya',
        tagline: '国の登録有形文化財十五棟を有する生きた建築博物館！横山大観が愛した名湯「天平大浴堂」',
        detailTitle: '修善寺温泉 国の登録文化財の宿 新井旅館 —— 明治・大正の宮大工の技が息づく最高峰。文化財の中で泊まる奇跡の体験',
        features: [
          { title: '総檜造りと伊豆石が織りなす国の登録文化財「天平大浴堂」', desc: '昭和9年に完成した名建築。高い吹き抜け天井と太い檜の柱、天平時代の寺院建築を模した荘厳な空間で、源泉掛け流しの名湯を堪能できます。' },
          { title: '桂川の清流と池の鯉を望む歴史ある木造客室', desc: '芥川龍之介や安田靫彦らが逗留した客室棟。職人の細やかな木彫りや欄間の意匠など、日本の伝統建築美に囲まれた滞在が叶います。' },
          { title: '天城山麓の採れたて本わさびと伊豆の山海の幸会席', desc: '清流で育った風味豊かな伊豆産わさびや、駿河湾の地魚、旬の野菜を熟練の板前が仕立てる本格和食会席。お部屋で優雅に味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.63点、口コミ1200件超。「建物自体が美術品のようで感動した」「天平大浴堂の素晴らしさは言葉にできない、スタッフのおもてなしも一流」と絶賛。'
      },
      {
        key: 'shuzenji_sora',
        tagline: '一万五千坪の日本庭園に抱かれるデザイナーズ旅館！光の露天風呂とドラマ撮影地としても名高い美空間',
        detailTitle: '修善寺温泉 宙 SORA 渡月荘金龍 —— 自然と光が織りなす別世界。円形露天風呂とモダンな日本庭園テラス',
        features: [
          { title: '山林の木々を見晴らす森の露天風呂「光の露天風呂」と「夕鶴」', desc: '夜には幻想的なライティングで照らし出される露天風呂。澄んだ星空と森の息吹を感じながら、心地よい名湯に浸かることができます。' },
          { title: '一万五千坪の広大な日本庭園とモダンな足湯ラウンジ', desc: 'ドラマのロケ地としても有名な美しい庭園。四季折々の花木や紅葉を眺めながら散策を楽しんだり、テラス席で寛ぐことができます。' },
          { title: '料理長厳選の伊豆牛や駿河湾の海の幸を味わう創作和会席', desc: '伝統の日本料理に現代のセンスを取り入れた華やかなディナー。盛り付けの美しさと繊細な出汁の味わいに心奪われます。' }
        ],
        reviewPoints: '楽天トラベル評価4.60点、口コミ1800件超。「お庭が息を呑むほど綺麗で散策が楽しかった」「お風呂からの景色と夜のライトアップが幻想的で、お料理も大満足」と高評価。'
      }
    ],
    areaGuide: {
      title: '修善寺温泉街・竹林の小径＆修禅寺めぐりガイド',
      points: [
        { name: '竹林の小径（ちくりんのこみち）と円形ベンチでの休息', text: '桂川沿いに続く石畳の散策路。天高く伸びる竹林の中央には竹製の大きな円形ベンチがあり、寝転がって竹の梢と青空を見上げる癒やしの時間を過ごせます。' },
        { name: '福地山 修禅寺（しゅぜんじ）への参拝', text: '温泉街の名の由来となった古刹。弘法大師空海が開創し、鎌倉幕府の源氏一族の悲劇の舞台としても知られる歴史の寺。秋の紅葉期には庭園の特別公開も行われます。' },
        { name: '恋の橋めぐり（桂川に架かる五つの橋）', text: '桂川に架かる「渡月橋」「虎渓橋」「桂橋」「楓橋」「滝下橋」。それぞれに恋にまつわる願いが込められており、すべて渡ると恋が実ると伝わる人気のパワースポットです。' }
      ]
    },
    furusatoStepTitle: '静岡県伊豆市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「静岡県伊豆市」クーポンを獲得', desc: '楽天ふるさと納税で伊豆市を寄付先に選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 特急踊り子号で東京駅から直通約2時間15分の好アクセス', desc: '東京駅からJR・伊豆箱根鉄道直通の特急「踊り子」で修善寺駅まで乗り換えなし。3年間の有効期間内で、新緑や紅葉、初春の梅まつりに合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '菊屋、新井旅館、宙SORAなどの対象宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-wakura-onsen-noto-ocean-stay',
    title: '【和倉温泉×ふるさと納税】七尾湾オーシャンビュー＆能登復興応援！海の恵み会席名宿特集｜のと楽・美湾荘・宝仙閣',
    desc: '開湯千二百年・七尾湾の波打ち際に湧く海の温泉・石川県和倉温泉を楽天ふるさと納税でお得に旅して応援！広大な庭園露天風呂を誇る「日本の宿 のと楽」、創業百二十年・海一望の「ゆけむりの宿 美湾荘」、総湯隣接の温もり宿「味な宿 宝仙閣」を徹底比較。能登牛や日本海旬魚会席、七尾市トラベルクーポン活用術を網羅。',
    keywords: '和倉温泉 ふるさと納税,和倉温泉 のと楽 クーポン,美湾荘 和倉 ふるさと納税,宝仙閣 和倉温泉 宿泊,七尾市 ふるさと納税 能登応援',
    targetCity: '石川県七尾市',
    leadTitle: '七尾湾を茜色に染める夕日と潮の香り——海から湧き出る奇跡の名湯と能登の豊かな山海の幸を味わう復興応援ステイ',
    leadP1: '石川県七尾市、能登半島の中央に位置する和倉（わくら）温泉。平安時代に一羽の傷ついた白鷺が海上で休んでいるところを地元の漁師が見つけ、海中から湧き出す温泉を発見したという開湯伝説を持つ「海の温泉」です。泉質は塩分とミネラルを極めて豊富に含んだ弱アルカリ性高温泉。殺菌効果や保湿効果が非常に高く、体の芯までしっかりと温まり肌を滑らかにしてくれます。目の前には穏やかな波が寄せる七尾湾が広がり、対岸の能登島を望む風光明媚な景色が旅人を魅了します。',
    leadP2: '能登の魅力は何と言っても、豊かな里山里海が育んだ日本屈指の食材の宝庫であること。きめ細やかな霜降りがとろける最高級の「能登牛」、七尾湾で獲れる新鮮なブリや牡蠣、幻の高級魚のどぐろ、そして能登の地酒。石川県七尾市へのふるさと納税を利用すれば、寄付額の30%相当の楽天トラベルクーポンにより名門旅館へお得に宿泊でき、旅を楽しむことが能登の観光復興と地域経済への力強い支援につながります。',
    hotelsKey: 'furusato-tax-wakura-onsen-noto-ocean-stay',
    hotelItems: [
      {
        key: 'wakura_notoraku',
        tagline: '七尾湾を一望する絶景庭園露天風呂と滝の流れるロビー！能登牛と能登の山海の旬味を味わう大型名旅館',
        detailTitle: '和倉温泉 日本の宿 のと楽 —— 海のパノラマと贅沢な湯巡り。多彩な露天風呂と能登の味覚三昧',
        features: [
          { title: '七尾湾の水平線を見晴らす大浴場と庭園露天風呂', desc: '海風が心地よく吹き抜ける開放的な露天風呂。波の音に耳を傾けながら、良質な和倉の塩化物泉にゆったりと浸かることができます。' },
          { title: '能登牛ステーキや旬の鮮魚を盛り込んだ贅沢な会席料理', desc: '厳選された能登牛の陶板焼きや、近海で水揚げされた魚介の姿造り。能登ならではの豊かな恵みを存分に味わえます。' },
          { title: 'ファミリーから三世代まで快適に過ごせる充実の館内設備', desc: '広々としたロビーラウンジやエステ、お土産処。快適な客室でプライベートな休日を満喫できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.33点、口コミ1500件超。「露天風呂からの七尾湾の景色が最高」「お料理がボリュームたっぷりで能登牛も魚もとても美味しかった」と好評です。'
      },
      {
        key: 'wakura_kaikan',
        tagline: '創業百二十年・海を真正面に望む特等席！七尾湾の潮騒と辻口博啓パティシエとのコラボスイーツ',
        detailTitle: '和倉温泉 ゆけむりの宿 美湾荘（びわんそう） —— 海に浮かぶような絶景。和の伝統と現代の寛ぎが調和する老舗',
        features: [
          { title: '七尾湾と能登島を一望する展望大浴場「真珠風呂」と露天風呂', desc: '海との一体感を味わえる開放的な湯船。朝焼けに染まる海や夕暮れの幻想的な景色を眺めながらの名湯入浴は至福のひとときです。' },
          { title: '辻口博啓氏プロデュース「ル ミュゼ ドゥ アッシュ」のスイーツ', desc: '七尾市出身の世界的パティシエ辻口氏のスイーツを館内で楽しめる贅沢。女性や甘党の旅行者にも大人気です。' },
          { title: '能登の四季の味覚を職人技で仕立てた本格季節会席', desc: '地元の契約漁港から届く新鮮魚介や能登野菜。目にも鮮やかな盛り付けと上品な出汁の味わいが光ります。' }
        ],
        reviewPoints: '楽天トラベル評価4.40点、口コミ1800件超。「部屋からもお風呂からも海が目の前に見えて感動」「スタッフの温かいおもてなしと美味しいご飯に癒やされた」とリピーター多数。'
      },
      {
        key: 'wakura_housen',
        tagline: '和倉温泉総湯のすぐ隣に位置する好立地！真心のこもったもてなしと料理長自慢の手作り料理',
        detailTitle: '和倉温泉 味な宿 宝仙閣（ほうせんかく） —— 総湯への散策に最適な温もり宿。掛け流しの名湯と能登の海の幸',
        features: [
          { title: '和倉温泉のシンボル「総湯」まで徒歩すぐの絶好アクセス', desc: '地元の人々にも愛される総湯へ気軽に立ち寄れる立地。温泉街の足湯や散策路へのアクセスも抜群です。' },
          { title: '檜の香る大浴場と和倉の良質な天然温泉', desc: '身体の芯から温まる塩分豊富な名湯。手足を伸ばしてゆったりと旅の疲れを解きほぐすことができます。' },
          { title: '旬の刺身や郷土料理が並ぶアットホームな手作り和食膳', desc: '料理長が腕を振るう心のこもった料理。温かいおもてなしとともに、能登の味覚を気兼ねなく堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.25点。「総湯がすぐ隣でとても便利だった」「接客がとても親切でお料理も家庭的で美味しかった」と温かい口コミが寄せられています。'
      }
    ],
    areaGuide: {
      title: '和倉温泉・能登島＆辻口博啓美術館観光ガイド',
      points: [
        { name: '能登島大橋ドライブと能登島水族館（のとじま水族館）', text: '和倉温泉と能登島を結ぶ全長1,050メートルの絶景大橋。島内にはジンベエザメが泳ぐパノラマ大水槽が人気の水族館やガラス美術館があり、ドライブに最適です。' },
        { name: 'ル ミュゼ ドゥ アッシュ（辻口博啓美術館）でのカフェタイム', text: '七尾湾を望む海沿いに建つ美術館＆パティスリー。能登の厳選食材を使った芸術的なケーキを、海を眺めながら味わえます。' },
        { name: '和倉温泉総湯と「湯元の広場」での温泉たまご作り', text: '温泉街の中心にある総湯。広場の源泉湧出口では、温泉水で約15分茹でてトロトロの温泉たまごを作る名物体験が楽しめます。' }
      ]
    },
    furusatoStepTitle: '石川県七尾市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「石川県七尾市」クーポンを獲得', desc: '楽天ふるさと納税で七尾市を寄付先に選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 北陸新幹線金沢駅経由・特急能登かがり火号でアクセス', desc: '金沢駅からJR七尾線特急「能登かがり火」で和倉温泉駅まで直通約60分。3年間の有効期間内で、能登の四季に合わせて旅行を計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: 'のと楽、美湾荘、宝仙閣などの対象宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-akan-onsen-marimo-heritage-stay',
    title: '【阿寒湖温泉×ふるさと納税】天然記念物マリモの湖＆阿寒連峰パノラマ！鶴雅リゾート特集｜遊久の里鶴雅・鶴雅別荘鄙の座・ニュー阿寒ホテル',
    desc: '道東の大自然とアイヌ文化が息づく阿寒摩周国立公園・北海道阿寒湖温泉を楽天ふるさと納税でお得に贅沢ステイ！最上階展望風呂と阿寒湖絶景を誇る「あかん遊久の里 鶴雅」、全室露天風呂付き・大人の至高オールインクルーシブ「あかん鶴雅別荘 鄙の座」、屋上インフィニティ温泉の「ニュー阿寒ホテル」を徹底比較。釧路市トラベルクーポン活用術を網羅。',
    keywords: '阿寒湖温泉 ふるさと納税,阿寒 鶴雅 ふるさと納税,あかん遊久の里 鶴雅 クーポン,鄙の座 阿寒湖 宿泊,釧路市 ふるさと納税 旅行',
    targetCity: '北海道釧路市',
    leadTitle: '神秘の湖畔に広がる太古の森とアイヌの魂——雄阿寒岳・雌阿寒岳の雄姿を望む名湯リゾートで過ごす至高の休日',
    leadP1: '北海道釧路市阿寒町、阿寒摩周国立公園の中心に位置する阿寒湖（あかんこ）温泉。特別天然記念物「マリモ」が生息する神秘のカルデラ湖の南岸に湧き出る名湯です。阿寒湖温泉の歴史は古く、1858年に松浦武四郎が調査した際、すでにアイヌの人々が温泉を利用していた記録が残されています。湖の向こうには雄大な円錐形の山容を誇る「雄阿寒岳」がそびえ、四季折々の針葉樹林と穏やかな湖面が織りなす大自然のパノラマは、息を呑むほどの美しさです。',
    leadP2: '阿寒湖温泉の大きな特徴は、北海道屈指の知名度と格式を誇る「鶴雅グループ」の洗練されたリゾート空間と、隣接する北海道最大の「阿寒湖アイヌコタン」で育まれる伝統文化に触れられる点。夕食には十勝牛や阿寒湖名物のワカサギ、ニジマス、道東の新鮮な海の幸を取り入れた創作会席や豪華ビュッフェが並びます。北海道釧路市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの高級リゾート宿へお得に宿泊でき、一生忘れられない北の大自然トリップが叶います。',
    hotelsKey: 'furusato-tax-akan-onsen-marimo-heritage-stay',
    hotelItems: [
      {
        key: 'akan_tsuruga',
        tagline: '最上階展望大浴場「天頂の湯」と阿寒湖一望の空中露天風呂！鶴雅グループのフラッグシップ名門リゾート',
        detailTitle: 'あかん遊久の里 鶴雅（つるが） —— 阿寒湖と連峰を見晴らす天空の湯。大自然と調和する圧倒的スケール',
        features: [
          { title: '阿寒湖と雄阿寒岳の絶景を眼下に望む展望大浴場「天頂の湯」', desc: '最上階に位置するパノラマ露天風呂。湖面を渡る清らかな風を感じながら、まるで空に浮かんでいるかのような極上の開放感を味わえます。' },
          { title: '阿寒湖の波打ち際に湧く一階大浴場「鹿泉の湯」の野天風呂', desc: '巨岩を配した野趣あふれる庭園露天風呂。丸太風呂や洞窟風呂など多彩な湯船で、阿寒の名湯を贅沢に満喫できます。' },
          { title: 'オープンキッチンで道東の山海の幸が並ぶ豪華ディナービュッフェ', desc: '目の前で焼き上げるステーキや新鮮な握り寿司、北海道スイーツがずらりと並ぶ人気ビュッフェ。個室料亭での本格和食会席も選べます。' }
        ],
        reviewPoints: '楽天トラベル評価4.43点、口コミ3400件超。「展望露天風呂からの阿寒湖の眺めが圧巻」「食事の種類が多くどれも絶品、スタッフの気配りも素晴らしかった」と絶賛の声。'
      },
      {
        key: 'akan_hanayuuka',
        tagline: '全二十五室すべてに温泉露天風呂を完備！十三歳未満お断りの大人のための至極のオールインクルーシブ宿',
        detailTitle: '阿寒湖温泉 あかん鶴雅別荘 鄙の座（ひなのざ） —— 故郷のような温もりと最高峰の贅。客室露天風呂と阿寒湖の静寂',
        features: [
          { title: '全客室に阿寒湖を望むプライベート温泉露天風呂を完備', desc: 'ゆったりとした広さの専用露天風呂。誰にも邪魔されず、静かな湖面と森を眺めながら贅沢な源泉掛け流し温泉を堪能できます。' },
          { title: 'バーラウンジや客室冷蔵庫のドリンクが無料のオールインクルーシブ', desc: '宿泊代金に飲食が含まれるストレスフリーなシステム。バーカウンターで阿寒湖の夜景を眺めながら銘酒を心ゆくまで味わえます。' },
          { title: '個室料亭でいただく道東の厳選素材を極めた創作茶懐石', desc: '料理長が一品一品に情熱を注ぎ込む芸術的な懐石料理。オホーツクの海鮮や十勝牛など、北海道の旬の旨味が凝縮されています。' }
        ],
        reviewPoints: '楽天トラベル評価4.83点という驚異的な超高スコア。「お部屋の露天風呂、バーの雰囲気、お料理すべてが人生で一番」「静かに大人の休日を過ごすには最高の宿」と絶賛されています。'
      },
      {
        key: 'akan_newakan',
        tagline: '阿寒湖と一体化する屋上インフィニティ温泉「天空ガーデンスパ」！パノラマ絶景と豪華リゾートバイキング',
        detailTitle: 'ニュー阿寒ホテル —— 屋上インフィニティスパからの絶景。阿寒湖畔に建つ大人気エンタメ温泉ホテル',
        features: [
          { title: '阿寒湖と空が一体化する屋上インフィニティ温泉「天空ガーデンスパ」', desc: '専用の湯浴み着を着て男女一緒に楽しめる屋上絶景スパ。阿寒湖の大パノラマと満天の星空を仰ぐ唯一無二の入浴体験が人気です。' },
          { title: '最上階展望大浴場「雲海」とガラス張りのサウナ', desc: '阿寒湖を見下ろす広々とした大浴場。セルフロウリュが楽しめる本格サウナと冷水風呂で、極上の「ととのい」を体験できます。' },
          { title: '北海道の食材をふんだんに取り入れた豪華和洋中リゾートバイキング', desc: '出来立ての鉄板焼きや握り寿司、北海道スイーツが並ぶ充実のディナー。家族連れやグループ旅行にも最適です。' }
        ],
        reviewPoints: '楽天トラベル評価4.24点、口コミ3800件超。「屋上のインフィニティスパが本当に素晴らしく夕日や星空が最高」「サウナもお風呂もバイキングも大満足」と高評価。'
      }
    ],
    areaGuide: {
      title: '阿寒湖温泉・アイヌコタン＆マリモ観光船ガイド',
      points: [
        { name: '阿寒湖アイヌコタンでの伝統芸能「古式舞踊」鑑賞と木彫り工芸', text: '約120名が暮らす北海道最大のアイヌの集落。アイヌシアター「イコロ」でのユネスコ無形文化遺産「アイヌ古式舞踊」や「ロストカムイ」の上演、民芸品店巡りが楽しめます。' },
        { name: '阿寒湖遊覧船でのマリモ観察（チュウルイ島）', text: '湖上を巡る定期遊覧船。途中で立ち寄るチュウルイ島のマリモ展示観察センターでは、巨大で美しい球状マリモを間近で見学できます。' },
        { name: 'ボッケ遊歩道（泥火山）の原生林散策', text: '温泉街のすぐ裏手に広がる遊歩道。地中の泥が熱いガスとともに湧き出る「ボッケ（泥火山）」や、エゾシカやエゾリスが生息する豊かな森の散歩を楽しめます。' }
      ]
    },
    furusatoStepTitle: '北海道釧路市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「北海道釧路市」クーポンを獲得', desc: '楽天ふるさと納税で釧路市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: たんちょう釧路空港または女満別空港経由で阿寒湖へアクセス', desc: 'たんちょう釧路空港から阿寒バスで約1時間15分。3年間の有効期間内で、新緑の夏や冬の凍結湖でのワカサギ釣り・冬華火に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '遊久の里鶴雅、鄙の座、ニュー阿寒ホテルなどの対象宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
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
    datePublished: '2026-09-10T17:00:00+09:00',
    dateModified: '2026-09-10T17:00:00+09:00',
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
                  <td className="p-3 text-stone-600">${idx === 0 ? '最高峰の歴史・大自然パノラマ' : idx === 1 ? '大人の洗練・極上プライベート' : 'パノラマ展望・充実のスパ体験'}</td>
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
              <Link href="/furusato-tax-tsukioka-onsen-emerald-bihada-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 月岡温泉 エメラルドグリーン硫黄泉＆極上越後会席
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-shima-onsen-retro-sekizenkan-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 四万温泉 レトロ重要文化財「元禄の湯」＆四万ブルー
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
