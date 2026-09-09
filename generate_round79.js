const fs = require('fs');
const path = require('path');

const seasonalHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

const round79Configs = [
  {
    slug: 'furusato-tax-steam-locomotive-sl-train-view-stay',
    componentName: 'FurusatoSteamLocomotiveSLTrainStayPage',
    tag: 'SL・蒸気機関車ビューステイ特集',
    title: '黒煙と汽笛が旅情を揺さぶる！大井川鐵道・秩父鉄道・磐越西線のSL・蒸気機関車ビューステイ×ふるさと納税完全ガイド【2026年最新】島田・秩父・会津若松',
    metaTitle: '黒煙と汽笛が旅情を揺さぶる！大井川鐵道・秩父鉄道・磐越西線のSL・蒸気機関車ビューステイ×ふるさと納税完全ガイド【2026年最新】島田・秩父・会津若松',
    shortTitle: 'SL・蒸気機関車ビューステイ名宿特集',
    description: '力強い汽笛と真っ白な蒸気、レトロな客車が郷愁を誘う蒸気機関車（SL）の旅！大井川鐵道のSL列車が目の前を横切る絶好のビュースポット「川根温泉ホテル」、秩父路を駆けるSLパレオエクスプレスの旅情と竹酒・名湯に酔いしれる「秩父小鹿野温泉旅館 梁山泊」、SLばんえつ物語が走る会津若松の奥座敷で名勝伏見ヶ滝を望む「会津東山温泉 庄助の宿 瀧の湯」。鉄道ファンから家族連れ、大人の休日までを魅了するSL温泉旅を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '全国屈指のSL・蒸気機関車ビューステイ特集',
    leadTitle: '響き渡る汽笛と大迫力の煙！郷愁とロマン溢れる蒸気機関車（SL）を間近に感じる至極の温泉旅へ',
    leadText: '日本の近代化を支え、今なお力強い鼓動とレトロなノスタルジーで人々を魅了してやまない蒸気機関車（SL）。真っ白な蒸気を吹き上げ、大井川の清流や秩父の山並み、会津の田園風景を駆け抜けるその姿は、乗る者だけでなく眺める者の心をも強く揺さぶります。客室のテラスや露天風呂、ホテルの専用展望デッキからSLの雄姿と轟く汽笛を体感できる旅は、世代を超えて感動を分かち合える最高の休日体験です。本特集では、日本で唯一ほぼ毎日SLが運行される大井川鐵道の鉄橋を目の前に望み、天然温泉掛け流しと静岡美食バイキングが絶賛される「川根温泉ホテル」、秩父鉄道のSLパレオエクスプレス運行路線近くに位置し、名物のかっぽ酒と美肌の湯で知られる名宿「秩父小鹿野温泉旅館 梁山泊」、そしてSLばんえつ物語の玄関口・会津若松の湯川渓谷沿いに建ち、名勝・伏見ヶ滝と会津郷土料理を堪能できる「会津東山温泉 庄助の宿 瀧の湯」の3宿を厳選。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で一生モノのSL鉄道温泉旅を叶えましょう。',
    threePoints: [
      {
        num: '01',
        title: 'テラスや露天風呂から間近に迫るSL！響く汽笛と白煙のドラマチックな臨場感',
        body: '山あいの渓谷や鉄橋を渡る蒸気機関車を、お部屋や展望ラウンジ、露天風呂から至近距離で鑑賞。轟く汽笛と車輪の重低音、立ち上る煙の香りが五感を刺激し、日常を忘れさせる非日常の鉄道ステイが叶います。'
      },
      {
        num: '02',
        title: '沿線の歴史と名湯を堪能！美肌温泉と地元厳選の旬の味覚会席',
        body: 'SLの感動とともに味わえるのは、大井川の川根茶や鮎、秩父のいのしし鍋や地酒・竹酒、会津の馬刺しやこづゆなど、その土地に根ざした豊かな郷土グルメと名湯。鉄道の旅情と極上の美食が一つに結実します。'
      },
      {
        num: '03',
        title: '楽天ふるさと納税で最大30％OFF！3年間有効クーポンで運行ダイヤに合わせて予約',
        body: 'SLの季節運行日や観光シーズンの予約に合わせて柔軟に利用可能。寄付日の3年後まで有効期限があるため、SLの指定席やトロッコ列車の運行スケジュールに合わせて計画的でお得な旅行が実現します。'
      }
    ],
    hotelDetails: [
      {
        key: 'oigawa_sl',
        badge: '静岡県島田市・大井川鐵道のSL列車が鉄橋を渡る絶景ビュースポット！源泉掛け流しと静岡美味バイキング',
        rank: '厳選名宿 第1選',
        desc: '大井川鐵道・笹間渡駅至近に位置し、大井川を渡るSL列車を客室やラウンジ、専用テラスからダイナミックに一望できる鉄道ファン・家族連れ憧れの温泉ホテル。SLが通過する時間には館内アナウンスが流れ、乗客と手を振り合う心温まる交流が楽しめます。敷地内には豊富な湧出量を誇る良質な炭酸水素塩温泉が湧き、源泉掛け流しの内湯や露天風呂で旅の疲れを芯から癒やせます。夕食には静岡の銘柄豚や新鮮な海の幸、地元の川根茶をふんだんに使った豪華バイキングが振る舞われ、総合評価4.6超の圧倒的人気を誇る名宿です。'
      },
      {
        key: 'chichibu_sl',
        badge: '埼玉県小鹿野町・SLパレオエクスプレスが走る秩父路の名湯！竹酒の振る舞いと里山会席が自慢の宿',
        rank: '厳選名宿 第2選',
        desc: '秩父鉄道を走る「SLパレオエクスプレス」の乗車拠点・三峰口や長瀞へのアクセスに優れ、奥秩父・小鹿野の静閑な山里に佇むおもてなしの温泉旅館。都心から気軽に行けるSLの旅として人気が高く、宿では毎夕、青竹の香りが清々しい名物「かっぽ酒」や地元ワインの無料振る舞いサービスが行われています。pHの高いトロリとした美肌温泉露天風呂は貸切利用も可能。夕食には奥秩父の清流魚や地元野菜、上質な肉料理を織り交ぜた里山会席膳が楽しめ、温かな接客に心癒される滞在を満喫できます。'
      },
      {
        key: 'aizu_sl',
        badge: '福島県会津若松市・「SLばんえつ物語」の玄関口！名勝伏見ヶ滝を望む絶景露天風呂と会津郷土料理の名門',
        rank: '厳選名宿 第3選',
        desc: '新津と会津若松を結ぶ貴婦人「SLばんえつ物語」の終着点・会津東山温泉を代表する名旅館。名勝「伏見ヶ滝」が眼前に流れ落ちる絶景露天風呂「瀧美の湯」では、清流の轟きとマイナスイオンを全身に浴びながら開湯1300年の名湯を堪能できます。客室からも四季折々の渓谷美が広がり、夜には幻想的な滝のライトアップが水面を照らします。夕食には会津伝統の郷土料理「こづゆ」をはじめ、新鮮な会津馬刺しや福島牛の陶板焼きなど滋味豊かな極上会席が並び、鉄道旅の風情を最高峰の贅沢とともに締めくくれます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-scenic-tourist-train-onsen-trip-stay', title: '【観光列車・絶景トロッコ列車旅×ふるさと納税】車窓と温泉旅館の贅沢旅' },
      { slug: 'furusato-tax-station-walk-car-free-onsen-stay', title: '【駅徒歩圏内・車なし電車で行ける温泉宿×ふるさと納税】アクセス抜群の名宿' },
      { slug: 'furusato-tax-river-stream-canyon-view-onsen-stay', title: '【清流・渓谷美を望む絶景露天風呂×ふるさと納税】水音と自然に包まれる旅' },
      { slug: 'furusato-tax-heritage-cultural-property-ryokan-stay', title: '【登録有形文化財・歴史的名建築宿×ふるさと納税】昭和レトロと美の宿' }
    ]
  },
  {
    slug: 'furusato-tax-cave-bath-natural-grotto-onsen-stay',
    componentName: 'FurusatoCaveBathNaturalGrottoStayPage',
    tag: '天然洞窟風呂・海食洞窟温泉宿特集',
    title: '荒波迫る海食洞窟と神秘の巨岩風呂！全国の天然洞窟温泉＆名湯旅館×ふるさと納税完全ガイド【2026年最新】南紀勝浦・湯の峰・上諏訪',
    metaTitle: '荒波迫る海食洞窟と神秘の巨岩風呂！全国の天然洞窟温泉＆名湯旅館×ふるさと納税完全ガイド【2026年最新】南紀勝浦・湯の峰・上諏訪',
    shortTitle: '天然洞窟温泉＆名湯旅館特集',
    description: '打ち寄せる太平洋の怒濤を間近に望む大洞窟風呂から、太古の巨岩に囲まれた神秘の湯処まで！那智勝浦の巨大海食洞窟温泉「忘帰洞」「玄武洞」を擁する「ホテル浦島」、世界遺産・湯の峰温泉で槇風呂と天然蒸し風呂・洞窟の情緒を伝える「旅館あづまや」、諏訪湖畔で神秘の自家源泉と畳風呂の癒しを提供する「上諏訪温泉 しんゆ」。地球の息吹を肌で感じるワイルドで神秘的な名湯体験を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '全国屈指の天然洞窟風呂・巨岩名湯宿特集',
    leadTitle: '打ち寄せる波音と太古の岩肌。大自然が創り出した天然洞窟の湯船で、野生の感動と神秘に浸る',
    leadText: '数千年から数十万年もの歳月をかけて波や地殻変動が創り出した「天然洞窟風呂」。ごつごつとした岩肌に覆われた空間に身を浸すと、日常の喧騒から完全に切り離され、まるで母なる地球の胎内に抱かれているかのような深い安らぎと神秘的な高揚感に包まれます。洞窟の開口部から見上げる青空や夕暮れの海、洞内に反響する波や湧き水のせせらぎ、ほのかに立ちこめる湯気と硫黄の香りは、人工の温泉では決して味わえない唯一無二の魅力です。本特集では、太平洋の荒波が間近に迫る巨大な海食洞窟の中に乳白色の源泉が湧き出す日本屈指の名湯「南紀勝浦温泉 ホテル浦島」、開湯1800年・世界遺産「つぼ湯」のすぐそばに佇み、江戸時代からの風情を残す槇風呂や天然蒸し風呂で知られる「湯の峰温泉 旅館あづまや」、そして諏訪湖の神秘的な情景と美肌の自家源泉を畳敷きの大浴場や癒しの空間で味わう名宿「上諏訪温泉 しんゆ」の3宿を厳選。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で一生記憶に残る洞窟名湯の旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '自然の造形美が織りなす非日常！荒波を間近に感じる巨大海食洞窟と神秘の岩肌',
        body: '潮風と波音を全身で浴びながら浸かる海食洞窟風呂は、地球のダイナミズムを直感できる圧倒的な迫力。薄暗い洞内に差し込む光と湯気が織りなす陰影は、息をのむほど幻想的な美しさを放ちます。'
      },
      {
        num: '02',
        title: '地球深部から湧き出る濃厚な源泉！圧倒的な湯量と美肌・疲労回復の効能',
        body: '岩盤の間から自噴する濃厚な硫黄泉や塩化物泉はミネラル成分が極めて豊富。洞窟内に留まる温泉蒸気を吸引することで気道や肺からも成分を取り込み、湯上がり後も芯からポカポカが持続します。'
      },
      {
        num: '03',
        title: '勝浦の生マグロや熊野牛、信州サーモン！海と山の極上ごちそうを堪能',
        body: '南紀勝浦漁港直送の新鮮な生マグロの解体ショーや熊野牛のステーキ、信州の恵みを活かした美しい創作料理など、温泉のインパクトに負けない贅沢なご当地グルメがお腹と心を満たします。'
      }
    ],
    hotelDetails: [
      {
        key: 'katsuura_cave',
        badge: '和歌山県那智勝浦町・太平洋の怒濤が間近に迫る大洞窟温泉「忘帰洞」「玄武洞」！圧倒的スケールの温泉リゾート',
        rank: '厳選名宿 第1選',
        desc: '専用の送迎船で海を渡って訪れる、紀伊半島の狼煙半島全体を敷地とする巨大温泉ホテル。「帰るのを忘れるほど心地よい」と紀州藩主・徳川頼倫公が名付けた国宝級の天然海食洞窟温泉「忘帰洞」と、奇岩が連なる「玄武洞」は圧巻。洞窟の開口部越しに太平洋の怒濤と水平線を眺めながら、乳白色やエメラルドグリーンに色を変える自家源泉掛け流しの湯を堪能できます。館内には6つもの湯巡り処があり、夕食には勝浦港水揚げの新鮮な生まぐろをふんだんに使った豪華ディナーバイキングや会席を満喫できます。'
      },
      {
        key: 'yunomine_cave',
        badge: '和歌山県田辺市・開湯1800年日本最古の温泉街！世界遺産「つぼ湯」至近の木造名門旅館と天然温泉蒸し風呂',
        rank: '厳選名宿 第2選',
        desc: '熊野古道の山深き谷あいに位置し、参詣道の一部として世界遺産に登録された天然岩風呂「つぼ湯」のすぐそばに佇む江戸時代創業の老舗名宿。樹齢数百年の槇の木で組まれた重厚な大浴場や、源泉の蒸気をそのまま利用した天然温泉蒸し風呂（薬湯洞窟サウナのような情緒）があり、濃厚な硫黄の香りと湯の花に包まれた本物の湯治体験が叶います。夕食には名物の温泉粥をはじめ、熊野牛や山菜、鮎など滋味溢れる熊野の郷土会席をお部屋や個室でじっくりと堪能できます。'
      },
      {
        key: 'kamisuwa_cave',
        badge: '長野県諏訪市・諏訪湖を一望する神秘と癒しの宿！足元に優しい畳風呂とミネラル豊富な自家源泉美肌の湯',
        rank: '厳選名宿 第3選',
        desc: '諏訪大社のお膝元・諏訪湖畔に佇み、神秘の情景と現代のホスピタリティが融合したハイクラス宿。大浴場は全面畳敷きとなっており、滑りにくく温かみのある空間で、敷地内から自噴する効能豊かな弱アルカリ性自家源泉をゆったりと楽しめます。諏訪湖の夕暮れや花火を望む客室露天風呂も人気。夕食には信州サーモンや信州プレミアム牛、諏訪の地酒など、二十四節気に基づいた身体に優しい創作和会席「美 badge 会席」が振る舞われ、五感すべてが癒やされる大人のリトリートを体験できます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-ocean-view-infinity-bath-luxury-stay', title: '【海一望インフィニティ温泉×ふるさと納税】波打ち際と水平線に溶け込む宿' },
      { slug: 'furusato-tax-pure-100-percent-kakenagashi-onsen-stay', title: '【源泉かけ流し100％名湯×ふるさと納税】加水加温なしの本物の温泉宿' },
      { slug: 'furusato-tax-radium-radon-hotspring-healing-stay', title: '【ラジウム・ラドン名湯温泉湯治×ふるさと納税】三朝・猿投・村杉の名宿' },
      { slug: 'furusato-tax-world-heritage-historic-site-luxury-stay', title: '【世界遺産と名所を巡る名門宿×ふるさと納税】熊野・白川郷・日光の旅' }
    ]
  },
  {
    slug: 'furusato-tax-traditional-hearth-irori-charcoal-stay',
    componentName: 'FurusatoTraditionalHearthIroriStayPage',
    tag: '囲炉裏炭火料理・古民家名湯宿特集',
    title: '赤々と燃える炭火と香ばしい煙！囲炉裏料理＆歴史ある古民家名湯宿×ふるさと納税完全ガイド【2026年最新】白川郷・群馬法師・徳島祖谷',
    metaTitle: '赤々と燃える炭火と香ばしい煙！囲炉裏料理＆歴史ある古民家名湯宿×ふるさと納税完全ガイド【2026年最新】白川郷・群馬法師・徳島祖谷',
    shortTitle: '囲炉裏料理＆古民家名湯宿特集',
    description: 'パチパチとはぜる炭の音、串に刺した川魚の塩焼きと香ばしい地鶏・特選牛の炭火焼き！世界遺産白川郷の玄関口に佇む合掌造りの宿「御宿 結の庄」、足元湧出の奇跡の温泉と囲炉裏の風情が残る国登録有形文化財「法師温泉 長寿館」、日本三大秘境の渓谷断崖に建ち囲炉裏炭火会席とケーブルカーで行く谷底露天風呂を誇る「和の宿 ホテル祖谷温泉」。日本の原風景に抱かれ温もりに浸る至福の囲炉裏ステイを、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '全国屈指の囲炉裏炭火料理＆古民家名宿特集',
    leadTitle: 'じっくりと炙られる岩魚と郷土牛。赤々と灯る囲炉裏の火を囲み、懐かしき日本の温もりに帰る旅',
    leadText: '現代の慌ただしい日常から離れ、どこか懐かしく温かい日本の原風景へと誘ってくれる「囲炉裏（いろり）のある温泉旅館」。自在鉤から吊るされた鉄瓶、赤々と燃える炭火の柔らかな遠赤外線、香ばしい煙の匂い、そしてパチッと小さくはぜる炭の音——。囲炉裏を囲んで過ごす時間は、人と人との距離を自然と縮め、忘れかけていた心のゆとりを取り戻させてくれます。炭火でじっくりと時間をかけて焼き上げる川魚の塩焼きは外はパリッと中は驚くほどふっくら。郷土のブランド牛や地野菜、焼きたての五平餅や朴葉味噌の香ばしさは、ガスや電気の調理では絶対に再現できない極上のごちそうです。本特集では、世界遺産・白川郷の合掌造り文化をモダンに昇華し、囲炉裏ラウンジと飛騨牛炭火焼き会席が絶賛される「御宿 結の庄」、明治8年築の国登録有形文化財の木造建築と囲炉裏のある本館、そして足元から自噴する奇跡の「法師乃湯」を誇る「法師温泉 長寿館」、そして日本三大秘境・祖谷渓の断崖に佇み、専用ケーブルカーで降りる谷底露天風呂と囲炉裏鮎塩焼き・祖谷そばを味わう「和の宿 ホテル祖谷温泉」の3宿を厳選。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で心に灯がともる囲炉裏温泉旅に出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '遠赤外線で旨味を凝縮！炭火でじっくり焼き上げる川魚・ブランド牛・郷土味噌',
        body: '囲炉裏の炭火は表面をカリッと香ばしく、内側をジューシーにふっくら焼き上げる魔法の熱源。鮎や岩魚の串焼き、飛騨牛や阿波牛、朴葉味噌やジビエなど、極上の炭火料理をご堪能いただけます。'
      },
      {
        num: '02',
        title: '太い梁と格子戸が醸し出す重厚美！文化財建築や合掌造りの趣ある空間',
        body: '何代にもわたって受け継がれてきた黒光りする太い大黒柱や萱葺き屋根、障子越しの柔らかな光。古民家ならではの風情と現代の快適な寝具が融合し、極上の安らぎをもたらします。'
      },
      {
        num: '03',
        title: '足元湧出泉や秘境の谷底露天風呂！大自然のパワーを肌で感じる名湯',
        body: '浴槽の底の砂利の間から自噴する奇跡の純生温泉や、渓谷の底深くへケーブルカーで降りて浸かる清流露天風呂など、温泉そのものの泉質とロケーションも全国最高峰レベルです。'
      }
    ],
    hotelDetails: [
      {
        key: 'shirakawago_irori',
        badge: '岐阜県白川村・世界遺産「白川郷」の玄関口！合掌造りを模した大屋根と囲炉裏ラウンジ、贅を尽くした飛騨牛会席',
        rank: '厳選名宿 第1選',
        desc: '世界遺産・白川郷の合掌造り集落へと続く庄川のほとりに佇む共立リゾートの名宿。日本の伝統美と現代リゾートの快適性が融合し、館内に入ると吹き抜けの囲炉裏ラウンジが出迎えてくれます。夕暮れ時には囲炉裏でお団子や甘酒の振る舞いがあり、旅情を盛り上げます。客室は全館畳敷きで和モダンローベッドを配した寛ぎ設計。天然温泉の大浴場や趣の異なる2つの無料貸切風呂で湯浴みを楽しんだ後は、メインダイニングで特選飛騨牛の炭火焼きやすき焼き、山菜や川魚を取り入れた豪華会席料理を満喫できます。'
      },
      {
        key: 'minakami_irori',
        badge: '群馬県みなかみ町・国登録有形文化財第1号！明治時代の囲炉裏本館と足元湧出の奇跡の湯「法師乃湯」',
        rank: '厳選名宿 第2選',
        desc: '三国峠のふもと、上信越高原国立公園の原生林に抱かれた一軒宿。明治8年築の鹿鳴館風洋風建築を取り入れた木造湯屋「法師乃湯」は、浴槽の底に敷き詰められた玉石の間からポコポコと純度100%の源泉が自然自噴する日本屈指の文化財温泉。客室本館には昔ながらの重厚な囲炉裏の間があり、炭火の温もりと静寂が訪れる人を包み込みます。夕食にはみなかみの清らかな雪解け水で育った川魚の塩焼きや、上州牛・上州麦豚、地場産きのこや山菜をふんだんに盛り込んだ素朴で滋味あふれる里山料理を味わえます。'
      },
      {
        key: 'iya_irori',
        badge: '徳島県三好市・日本三大秘境「祖谷渓」の断崖絶壁！ケーブルカーで行く谷底露天風呂と囲炉裏炭火鮎会席',
        rank: '厳選名宿 第3選',
        desc: '四国山地の奥深く、切り立った祖谷渓谷の断崖絶壁にせり出すように建つ隠れ家温泉旅館。宿から傾斜角42度の専用ケーブルカーに乗り、約170m下の谷底へ5分間かけて降りていく露天風呂「渓谷の湯」は、エメラルドグリーンの祖谷川の激流を目前にする感動の絶景湯。湯上がりの夕食では、囲炉裏の炭火でじっくりと焼き上げられた鮎の塩焼きや、祖谷名物の岩豆腐「でこまわし」、祖谷そば、阿波牛の炭火焼きを堪能でき、秘境ならではの贅沢と温もりに心酔できます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-tangible-cultural-property-sukiya-carpenter-ryokan-stay', title: '【登録有形文化財・宮大工数寄屋造り旅館×ふるさと納税】木造建築美の宿' },
      { slug: 'furusato-tax-secret-hot-spring-secluded-onsen-stay', title: '【秘湯を守る会・ランプの宿×ふるさと納税】山奥の隠れ家温泉リトリート' },
      { slug: 'furusato-tax-local-brand-wagyu-beef-gourmet-stay', title: '【ブランド和牛食べ比べ温泉宿×ふるさと納税】飛騨牛・米沢牛・阿波牛' },
      { slug: 'furusato-tax-fire-fireplace-woodstove-autumn-winter-stay', title: '【暖炉・薪ストーブのある極上リゾート×ふるさと納税】揺らぐ炎と冬の温泉' }
    ]
  },
  {
    slug: 'furusato-tax-waterfall-view-sound-stream-onsen-stay',
    componentName: 'FurusatoWaterfallViewStreamStayPage',
    tag: '清流滝ビュー・せせらぎ露天風呂宿特集',
    title: '滝の轟きとマイナスイオンに包まれる！名瀑・清流を望む絶景露天風呂旅館×ふるさと納税完全ガイド【2026年最新】伊豆天城・那須板室・熊本黒川',
    metaTitle: '滝の轟きとマイナスイオンに包まれる！名瀑・清流を望む絶景露天風呂旅館×ふるさと納税完全ガイド【2026年最新】伊豆天城・那須板室・熊本黒川',
    shortTitle: '名瀑・清流滝ビュー露天風呂宿特集',
    description: '眼前に流れ落ちる名瀑の水しぶきと清流の心地よいせせらぎ、豊かな森林のマイナスイオン！伊豆天城の清流と巨石・巨木露天風呂・名物わさび鍋を味わう「天城湯ヶ島温泉 白壁」、那珂川の源流と滝の響きに抱かれ保養と現代アートを融合させた「板室温泉 大黒屋」、黒川の奥座敷・田の原川のせせらぎと滝を望む静寂の離れ宿「風がささやく離れの宿 山あかり」。水音に五感が研ぎ澄まされる極上の滝ビュー温泉ステイを、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '全国屈指の名瀑・清流滝ビュー温泉宿特集',
    leadTitle: '白く泡立つ滝のマイナスイオンと清流の水音。大自然の波動に全身を浸す、奇跡のせせらぎリトリートへ',
    leadText: '絶え間なく流れ落ちる滝のダイナミックな姿と、心地よいリズムを刻む清流のせせらぎ。古来より「水音」には脳をリラックスさせ自律神経を整える1/fゆらぎの効果があると言われ、滝壺から広がる豊富なマイナスイオンは心身に溜まった疲労を清々しく洗い流してくれます。露天風呂に浸かりながら間近に滝を眺め、湯上がりには窓を開けて川音を聞きながら眠りにつく贅沢は、まさに究極の癒やし体験。本特集では、文豪たちに愛された伊豆天城の清流沿いに建ち、日本一と称される53トンの巨石露天風呂や日本一の巨木露天風呂、名物わさび鍋を堪能できる「天城湯ヶ島温泉 白壁」、那須連山の奥深く、那珂川の清流と滝の音に包まれながら創業470年の名湯と現代アート・滋味豊かな食を味わう「板室温泉 大黒屋」、そして熊本・黒川温泉の中心部から離れた隠れ里で、田の原川の清流と満天の星、全室専用温泉付き離れ客室を誇る「風がささやく離れの宿 山あかり」の3宿を厳選。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で大自然の清流美に癒やされる温泉旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '滝と清流のダイナミックな景観！湯船から見渡す名瀑とマイナスイオンの清涼感',
        body: '露天風呂に身を沈めれば、目の前で勢いよくしぶきを上げる滝の迫力。森の緑と澄んだ水のコントラスト、心地よい水しぶきが五感を解き放ち、圧倒的なリフレッシュをもたらします。'
      },
      {
        num: '02',
        title: '1/fゆらぎの水音が運ぶ安らぎ！夜通し川のせせらぎに包まれる上質な眠り',
        body: '客室の窓辺やテラス、寝室からも絶え間なく届く穏やかなせせらぎの水音。自然のホワイトノイズが雑音を遮断し、脳の緊張を和らげ、かつてないほど深い快眠へと誘います。'
      },
      {
        num: '03',
        title: '清らかな源流水が育む絶品グルメ！清流魚・地場野菜・名水豆腐の美味',
        body: '天城の清流が育む本わさびや鮎・アマゴ、那須の高原野菜や黒毛和牛、熊本の馬刺しや肥後牛など、澄んだ名水があるからこそ生まれる旬の山川の恵みを極上会席で堪能できます。'
      }
    ],
    hotelDetails: [
      {
        key: 'amagi_waterfall',
        badge: '静岡県伊東市・川端康成や梶井基次郎ゆかりの天城湯ヶ島！53トンの巨石露天風呂と清流の滝、名物わさび鍋',
        rank: '厳選名宿 第1選',
        desc: '伊豆半島の真ん中、天城連峰の原生林と狩野川の源流に抱かれた老舗温泉旅館。重厚な古民家様式の数寄屋建築とモダンなデザインが調和した館内には、日本一の重さ53トンを誇る巨石をくり抜いた露天風呂や、樹齢数千年の巨木風呂が備わり、清流の滝とせせらぎを間近に望みながら源泉掛け流しの湯を堪能できます。夕食には天城の清流で育った新鮮な生わさびをたっぷりすり下ろしていただく名物「わさび鍋」や天城軍鶏、伊豆牛、駿河湾の海の幸を取り入れた極上料理が振る舞われ、口コミ4.7超の高い満足度を誇ります。'
      },
      {
        key: 'nasu_waterfall',
        badge: '栃木県那須塩原市・開湯四百七十年の下野の薬湯！那珂川の清流と滝の音に包まれるアートと保養の温泉旅館',
        rank: '厳選名宿 第2選',
        desc: '那須連山の奥深く、那珂川の渓流沿いに佇む「下野の薬湯」として名高い板室温泉の最高峰宿。客室や庭園からは清らかな川の流れと滝の心地よい水音が絶え間なく響き、広大な敷地内には世界的現代アーティストの作品が調和して展示されています。ぬるめのアルカリ性単純温泉にじっくりと浸かることで自律神経が整い、自然治癒力が高まります。夕食には契約農家から届く有機野菜や栃木の滋味を活かした滋味あふれる会席料理が提供され、心身を清浄にリセットする大人のリトリートに最適です。'
      },
      {
        key: 'kurokawa_waterfall',
        badge: '熊本県南小国町・黒川温泉の奥座敷！田の原川の清流と滝を望む全室温泉付き離れ宿と満天の星',
        rank: '厳選名宿 第3選',
        desc: '黒川温泉街の喧騒から少し離れた静寂の里山に佇む、全室離れ形式の隠れ家温泉旅館。客室のテラスや専用半露天風呂からは田の原川の清流と小さな滝、木々のざわめきを一望でき、夜には川音を聞きながら満天の星を眺める極上のプライベートステイが叶います。温泉は良質なナトリウム・硫酸塩・塩化物泉で美肌効果も抜群。夕食は熊本名物の新鮮な極上馬刺しや肥後牛のステーキ、阿蘇の山菜や清流川魚など地元の旬の恵みを個室でゆったりと味わえます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-river-stream-canyon-view-onsen-stay', title: '【清流・渓谷美を望む絶景露天風呂×ふるさと納税】水音と自然に包まれる旅' },
      { slug: 'furusato-tax-forest-therapy-healing-resort-stay', title: '【森林浴＆森林セラピー温泉リゾート×ふるさと納税】木漏れ日と癒しの宿' },
      { slug: 'furusato-tax-open-air-bath-spectacular-view-stay', title: '【絶景露天風呂名門宿×ふるさと納税】大パノラマと至高の温泉体験' },
      { slug: 'furusato-tax-private-villa-hanare-hideaway-stay', title: '【大人の隠れ家・離れ客室×ふるさと納税】静寂とプライベート重視の名宿' }
    ]
  }
];

function sanitizeString(str) {
  if (!str) return '';
  return str
    .replace(/<[^>]*>/g, '')
    .replace(/[`${}\\]/g, '')
    .replace(/"/g, '“')
    .replace(/'/g, '’')
    .trim();
}

for (const cfg of round79Configs) {
  const pageHotels = seasonalHotels[cfg.slug] || {};
  const targetDir = path.join(__dirname, 'src/app', cfg.slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const h1 = pageHotels[cfg.hotelDetails[0].key] || {};
  const h2 = pageHotels[cfg.hotelDetails[1].key] || {};
  const h3 = pageHotels[cfg.hotelDetails[2].key] || {};

  const h1Desc = cfg.hotelDetails[0].desc;
  const h2Desc = cfg.hotelDetails[1].desc;
  const h3Desc = cfg.hotelDetails[2].desc;

  const h1Badge = cfg.hotelDetails[0].badge;
  const h2Badge = cfg.hotelDetails[1].badge;
  const h3Badge = cfg.hotelDetails[2].badge;

  const p1 = cfg.threePoints[0];
  const p2 = cfg.threePoints[1];
  const p3 = cfg.threePoints[2];

  const content = `import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${cfg.metaTitle}',
  description: '${cfg.description}',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '${cfg.shortTitle}',
    '楽天ふるさと納税 トラベル',
    '${sanitizeString(h1.hotelName || '')}',
    '${sanitizeString(h2.hotelName || '')}',
    '${sanitizeString(h3.hotelName || '')}',
    '高級温泉旅館',
    '露天風呂付き客室',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/${cfg.slug}',
  },
  openGraph: {
    title: '${cfg.metaTitle}',
    description: '${cfg.description}',
    url: 'https://croud-travel.pages.dev/${cfg.slug}',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ${cfg.componentName}() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">${cfg.shortTitle}</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          ${cfg.heroTag}
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          ${cfg.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500">
          <time dateTime="2026-09-09">2026年9月9日公開</time>
          <span>•</span>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium">楽天トラベル公式API連携</span>
          <span>•</span>
          <span className="bg-green-100 text-green-900 px-2 py-0.5 rounded font-medium">実質負担2,000円対象</span>
        </div>
      </header>

      {/* リード文ブロック */}
      <section className="bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-yellow-50/60 p-6 md:p-8 rounded-2xl border border-amber-200/80 mb-12 shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-amber-950 mb-4 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          ${cfg.leadTitle}
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          ${cfg.leadText}
        </p>
        <div className="bg-white/90 rounded-xl p-4 md:p-5 border border-amber-300 shadow-sm">
          <h3 className="font-bold text-amber-900 text-sm md:text-base mb-2 flex items-center gap-1.5">
            <span>📌</span> なぜ「ふるさと納税×楽天トラベル」が選ばれているのか？
          </h3>
          <ul className="text-xs md:text-sm text-gray-700 space-y-1.5">
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span><strong>寄付額の最大30％が宿泊クーポンとして即時付与</strong>され、楽天ポイントも二重に貯まる</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span><strong>有効期限はたっぷり3年間！</strong>寄付後に旅行時期や部屋タイプをじっくり選べる安心設計</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span>予約済み日程への<strong>「あとからクーポン適用」</strong>にも対応（※条件あり）で直前でも安心</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 目次 */}
      <section className="bg-gray-50 rounded-xl p-5 mb-12 border border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span>📑</span> 目次
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">${cfg.shortTitle}が旅人を惹きつけてやまない3つの魅力</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】${sanitizeString(h1.hotelName || '厳選名宿 第1選')}</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】${sanitizeString(h2.hotelName || '厳選名宿 第2選')}</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】${sanitizeString(h3.hotelName || '厳選名宿 第3選')}</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> ${cfg.shortTitle}が旅人を惹きつけてやまない3つの魅力
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">${p1.num}</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">${p1.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">${p1.body}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">${p2.num}</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">${p2.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">${p2.body}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">${p3.num}</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">${p3.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">${p3.body}</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            ${sanitizeString(h1.hotelName || '')}
          </h2>
          <p className="text-xs md:text-sm text-amber-100">${h1Badge}</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> ${sanitizeString(h1.address1 || '')}${sanitizeString(h1.address2 || '')}</div>
            <div><strong>アクセス:</strong> ${sanitizeString(h1.access || '')}</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ ${h1.reviewAverage || '4.5'}</span> (${h1.reviewCount || 0}件)</div>
            <div><strong>参考価格:</strong> 1名あたり約${(h1.hotelMinCharge || 18000).toLocaleString()}円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">${h1Desc}</p>
          {h1.hotelSpecial && (
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ${sanitizeString(h1.hotelSpecial)}
            </div>
          )}
          {h1.userReview && (
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “${sanitizeString(h1.userReview)}”
            </blockquote>
          )}
          <div className="pt-2">
            <a
              href="${h1.planListUrl || h1.affiliateUrl || 'https://travel.rakuten.co.jp'}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* 宿紹介 2 */}
      <section id="hotel-2" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第2選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            ${sanitizeString(h2.hotelName || '')}
          </h2>
          <p className="text-xs md:text-sm text-amber-100">${h2Badge}</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> ${sanitizeString(h2.address1 || '')}${sanitizeString(h2.address2 || '')}</div>
            <div><strong>アクセス:</strong> ${sanitizeString(h2.access || '')}</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ ${h2.reviewAverage || '4.3'}</span> (${h2.reviewCount || 0}件)</div>
            <div><strong>参考価格:</strong> 1名あたり約${(h2.hotelMinCharge || 16000).toLocaleString()}円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">${h2Desc}</p>
          {h2.hotelSpecial && (
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ${sanitizeString(h2.hotelSpecial)}
            </div>
          )}
          {h2.userReview && (
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “${sanitizeString(h2.userReview)}”
            </blockquote>
          )}
          <div className="pt-2">
            <a
              href="${h2.planListUrl || h2.affiliateUrl || 'https://travel.rakuten.co.jp'}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* 宿紹介 3 */}
      <section id="hotel-3" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第3選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            ${sanitizeString(h3.hotelName || '')}
          </h2>
          <p className="text-xs md:text-sm text-amber-100">${h3Badge}</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> ${sanitizeString(h3.address1 || '')}${sanitizeString(h3.address2 || '')}</div>
            <div><strong>アクセス:</strong> ${sanitizeString(h3.access || '')}</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ ${h3.reviewAverage || '4.4'}</span> (${h3.reviewCount || 0}件)</div>
            <div><strong>参考価格:</strong> 1名あたり約${(h3.hotelMinCharge || 19000).toLocaleString()}円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">${h3Desc}</p>
          {h3.hotelSpecial && (
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ${sanitizeString(h3.hotelSpecial)}
            </div>
          )}
          {h3.userReview && (
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “${sanitizeString(h3.userReview)}”
            </blockquote>
          )}
          <div className="pt-2">
            <a
              href="${h3.planListUrl || h3.affiliateUrl || 'https://travel.rakuten.co.jp'}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* ふるさと納税手順 */}
      <section id="furusato-step" className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 md:p-8 rounded-2xl border border-amber-200 mb-16 shadow-sm">
        <h2 className="text-xl md:text-3xl font-extrabold text-amber-950 mb-6 flex items-center gap-2">
          <span>💡</span> 楽天ふるさと納税トラベルクーポンで実質2,000円予約する4ステップ
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">控除限度額をチェック</h3>
              <p className="text-xs md:text-sm text-gray-600">年収や家族構成によって自己負担2,000円で利用できる上限額が決まります。まずは楽天ふるさと納税のシミュレーターで上限を確認しましょう。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">自治体を選んでトラベルクーポンを寄付</h3>
              <p className="text-xs md:text-sm text-gray-600">訪れたい温泉宿のある自治体（市町村）へ寄付。寄付額の最大30％相当の楽天トラベルクーポンが数日以内にマイクーポンへ自動付与されます。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">楽天トラベルで宿泊予約＆クーポン適用</h3>
              <p className="text-xs md:text-sm text-gray-600">有効期限は3年間。宿泊日や部屋タイプを決め、予約画面で取得したトラベルクーポンを選択すると宿泊代金から即時値引きされます。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ワンストップ特例または確定申告で完了</h3>
              <p className="text-xs md:text-sm text-gray-600">翌年の住民税・所得税から控除され、実質負担は年間2,000円のみ！浮いた予算で客室のアップグレードや別注料理を満喫できます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>❓</span> よくある質問（Q&A）
        </h2>
        <div className="space-y-4">
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>すでに予約している宿泊プランにもふるさと納税クーポンは使えますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい！楽天トラベルの「あとからクーポン適用」機能に対応している施設であれば、予約後でもマイページから自治体クーポンを適用して割引を受けられます。旅行直前でも諦めずに確認することをおすすめします。
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>トラベルクーポンの有効期限はどれくらいですか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              楽天ふるさと納税トラベルクーポンの有効期限は「寄付完了日の翌々年同月末まで（実質約3年間）」となっています。年末の駆け込み寄付でクーポンを確保しておき、翌年以降の記念日や旅行シーズンにゆっくり利用できます。
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>現地での追加飲料代やマッサージ代にも使えますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              トラベルクーポンは楽天トラベル上の「宿泊プラン代金（事前決済または現地決済の宿泊費）」に対して適用されます。現地での追加注文をお得にしたい場合は、夕食時のドリンクインクルーシブプランやエステ付き宿泊プランをあらかじめ選んで予約するのが賢い方法です。
            </p>
          </details>
        </div>
      </section>

      {/* 関連記事リンク */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>🔗</span> あわせて読みたい注目のふるさと納税温泉特集
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          ${cfg.relatedArticles.map(rel => `
          <Link
            href="/${rel.slug}"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ ${rel.title}
          </Link>`).join('')}
        </div>
      </section>
    </article>
  );
}
`;

  const targetFile = path.join(targetDir, 'page.tsx');
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log(`Successfully generated: ${cfg.slug}/page.tsx`);
}

console.log('\nAll 4 Round 79 pages successfully written!');
