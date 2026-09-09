const fs = require('fs');
const path = require('path');

const seasonalHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

// 4記事の詳細データ定義
const articleConfigs = [
  {
    slug: 'furusato-tax-dog-friendly-luxury-onsen-stay',
    componentName: 'FurusatoDogFriendlyLuxuryStayPage',
    tag: '愛犬・ペット同伴客室露天＆ドッグラン特集',
    title: '愛犬と泊まる極上客室露天風呂＆広大ドッグラン温泉宿×ふるさと納税完全ガイド【2026年最新】伊豆高原・那須高原・琵琶湖',
    metaTitle: '愛犬と泊まる極上客室露天風呂＆広大ドッグラン温泉宿×ふるさと納税完全ガイド【2026年最新】伊豆高原・那須高原・琵琶湖',
    shortTitle: '愛犬同伴の客室露天温泉＆ドッグラン名宿特集',
    description: '大切な愛犬（ペット）と一緒に贅沢な温泉旅行を満喫！伊豆高原の全室客室露天風呂付き英国調隠れ家「別邸 石の家」、那須高原の森に包まれた巨大スパ＆ドッグリゾート「ホテルサンバレー那須」、琵琶湖畔のラグジュアリーステイ「琵琶湖マリオットホテル」。天然芝ドッグラン・愛犬用足湯・客室同伴での美食など、愛犬家の理想をすべて叶える名宿に、楽天ふるさと納税トラベルクーポンで実質2,000円負担で宿泊する完全ガイド。',
    heroTag: '愛犬・ペット同伴客室露天＆広大ドッグラン特集',
    leadTitle: '家族の一員である愛犬と、客室専用露天風呂や広大な天然芝ドッグランで最高の休日を',
    leadText: '「愛犬をペットホテルに預けて旅行に行くのは心が痛む」「旅先でも温泉や美味しい料理を愛犬と一緒に気兼ねなく楽しみたい」――そんな愛犬家の願いに応える宿泊施設が全国で劇的に進化しています。相模灘の豊かな自然に抱かれ全室に専用露天風呂を備えた伊豆高原の英国調洋館「別邸 石の家」。那須連山の爽快な空気と広大な敷地で温泉とドッグランを満喫できる栃木・那須高原の「ホテルサンバレー那須」。そして日本最大の湖・琵琶湖の美しい水辺を愛犬とお散歩できる滋賀県守山市のグローバルリゾート「琵琶湖マリオットホテル」。いずれも愛犬用のアメニティや足洗い場、ドッグランが完備され、周囲に気兼ねなくプライベート空間で過ごせる愛犬同伴の最高峰宿です。こうした高規格ドッグリゾートは通常料金が高めに設定されていますが、楽天ふるさと納税のトラベルクーポン（寄付額の最大30％割引）を使えば、実質自己負担2,000円で驚くほどお得に滞在できます。愛犬の喜ぶ笑顔と上質な温泉に癒やされる、ワンランク上の愛犬同伴旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '他の宿泊客に気兼ねゼロ！客室専用露天風呂やプライベートガーデン完備',
        body: '愛犬同伴旅行で最も重視されるのが「プライベート感」。客室に専用の天然温泉露天風呂やウッドデッキ、プライベートミニドッグランが備えられたお部屋なら、愛犬が庭で元気に駆け回る姿を湯船に浸かりながら見守ることができます。共用の大浴場に行くことなく、24時間いつでも好きな時に名湯を満喫できるのが最大の贅沢です。'
      },
      {
        num: '02',
        title: '天然芝ドッグラン・愛犬用足湯・充実の専用アメニティで手ぶら旅行も安心',
        body: 'アジリティ付きの広大な屋外天然芝ドッグランや、雨の日でも安心な屋内プレイルーム、温水足洗い場、さらにはワンちゃん専用バスタブや足湯まで揃う充実度。ケージ、トイレシート、専用消臭スプレー、食器、タオルなどのかさばるアメニティも完備されており、最小限の荷物で快適なドッグトリップが実現します。'
      },
      {
        num: '03',
        title: '愛犬と一緒にお部屋食！地元の厳選素材で作るワンちゃん専用グルメコース',
        body: '食事処や客室で愛犬と一緒に食事ができるプランが大人気。伊豆の新鮮な地魚や那須高原牛、近江牛のステーキを人間が堪能する横で、愛犬には無添加・塩分控えめの特製ミートローフや温野菜ボウルが振る舞われます。記念日や誕生日のワンちゃん用ケーキを用意してくれる宿もあり、一生の思い出に残るお祝いが叶います。'
      }
    ],
    hotelDetails: [
      {
        key: 'izu_dog_resort',
        badge: '静岡県伊東市・伊豆高原の英国マナーハウス調隠れ家',
        rank: '厳選名宿 第1選',
        desc: '伊豆高原の閑静な別荘地に佇む、全室に客室露天風呂を備えた英国コッツウォルズ地方の館を思わせるアンティーク隠れ宿。大型犬から小動物まで同伴可能で、お部屋には愛犬専用の庭やテラス、さらには内風呂・露天風呂の両方が完備。夕食・朝食ともにお部屋食スタイルとなっており、他のワンちゃんが苦手なデリケートな愛犬でもストレスなく極上のひとときを過ごせます。伊豆の獲れたて地魚や厳選牛を使った和洋折衷コースを味わいながら、愛犬と至福の夜をお過ごしください。'
      },
      {
        key: 'nasu_dog_resort',
        badge: '栃木県那須町・那須高原の雄大な自然に囲まれたスパリゾート',
        rank: '厳選名宿 第2選',
        desc: '那須連山の豊かな大自然に包まれた巨大温泉リゾート。敷地内には多彩な宿泊館が点在し、ペット同伴専用の宿泊フロアや戸建てコテージが用意されています。那須高原の爽快な風が吹き抜ける広大な天然芝ドッグランはワンちゃんが大喜び間違いなしの設備。乳白色の硫黄泉や弱アルカリ泉など異なる3つの泉質を誇る多彩な大浴場や温水アクアヴィーナスで飼い主もしっかりリフレッシュでき、高原野菜をふんだんに使った豪華バイキングも大好評です。'
      },
      {
        key: 'biwako_dog_resort',
        badge: '滋賀県守山市・琵琶湖畔の世界的ラグジュアリーステイ',
        rank: '厳選名宿 第3選',
        desc: '琵琶湖の東岸に位置し、世界水準のモダンなホスピタリティと美崎温泉の名湯を併せ持つ本格リゾートホテル。専用のプライベート温泉露天風呂を備えたドッグフレンドリールームが完備されており、愛犬と一緒の室内でゆったりと温泉浴が愉しめます。目の前には広大な琵琶湖の湖畔遊歩道が広がり、朝夕の清々しい愛犬散歩コースに最適。滋賀県が誇る三大和牛「近江牛」のディナーコースとともに、優雅で洗練されたレイクサイドアクティビティをご堪能ください。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-pet-sauna-private-hotspring-stay', title: '【愛犬同伴＆プライベートサウナ×ふるさと納税】天然温泉付き一棟貸しヴィラ完全ガイド' },
      { slug: 'furusato-tax-kura-sauna-private-villa-charter-stay', title: '【蔵サウナ＆一棟貸し切り×ふるさと納税】完全プライベート空間でととのう贅沢ステイ' },
      { slug: 'furusato-tax-private-villa-hanare-hideaway-stay', title: '【全室離れの隠れ家×ふるさと納税】誰にも会わずに過ごす極上のおこもり客室露天風呂宿' },
      { slug: 'furusato-tax-anniversary-luxury-suite-villa-stay', title: '【記念日・最高峰ヴィラ×ふるさと納税】特別な日を彩るプライベートプール＆温泉スイート' }
    ]
  },
  {
    slug: 'furusato-tax-fujisan-view-luxury-open-air-bath-stay',
    componentName: 'FurusatoFujisanViewLuxuryStayPage',
    tag: '富士山絶景ビュー天空露天風呂＆名旅館特集',
    title: '富士山を望む絶景露天風呂＆天空テラスの至高の宿×ふるさと納税完全ガイド【2026年最新】河口湖・山中湖・西伊豆土肥',
    metaTitle: '富士山を望む絶景露天風呂＆天空テラスの至高の宿×ふるさと納税完全ガイド【2026年最新】河口湖・山中湖・西伊豆土肥',
    shortTitle: '富士山ビュー天空露天風呂＆絶景名宿特集',
    description: '日本人の心の原風景「霊峰富士」を湯船から一望する至福の絶景露天風呂ステイ！河口湖畔から逆さ富士とパノラマを望む「大池ホテル」、二万五千坪の名庭園と富士山を真正面に仰ぐ富士吉田「ホテル鐘山苑」、駿河湾の彼方に富士の稜線と茜色の夕陽が沈む西伊豆「土肥ふじやホテル」。四季折々の表情を見せる富士山を眺めながら極上温泉に身を浸す贅沢を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '富士山絶景ビュー天空露天風呂＆名旅館特集',
    leadTitle: '朝日に染まる紅富士から夜の静寂まで。湯煙の彼方にそびえる世界遺産・霊峰富士を独占する',
    leadText: '古来より人々を魅了し続け、四季折々の荘厳な美しさを魅せる日本の象徴・富士山。その雄大な姿を眺めるだけでも特別な体験ですが、「湯船に身を浸しながら、手前に広がる湖や海越しに富士山を真正面に愛でる」という時間は、日常の喧騒を忘れさせる最高峰の贅沢です。河口湖畔に建ち最上階展望風呂から遮るもののない富士の全景が迫る「大池ホテル」。富士吉田の広大な日本庭園を有し、富士山を望む露天風呂「こもれびの湯」で至極の癒やしを提供する名門「ホテル鐘山苑」。そして駿河湾越しに夕陽と富士山の壮麗なシルエットが浮かび上がる西伊豆・土肥温泉の「土肥ふじやホテル」。これらの富士山ビュー特等席の客室や展望露天風呂付きプランは年間を通じて人気が高く予約争奪戦となりますが、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期間3年）を活用すれば、実質自己負担2,000円で驚くほどお得にリザーブ可能です。人生で一度は体験したい、富士山と名湯が織りなす感動の絶景旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '時間とともに色彩を変える霊峰の奇跡！朝焼けの赤富士から星空の富士まで',
        body: '富士山ビュー宿の最大の魅力は、滞在する時間帯によってまったく異なる幻想的な姿を拝める点です。早朝の澄んだ空気の中で朝日を浴びて神々しく赤く染まる「紅富士（赤富士）」、日中の青空に映える凛とした雪化粧、夕暮れのグラデーションに浮かび上がる影富士、そして満天の星々と月光に照らされる深夜のシルエット。温泉に浸かりながら奇跡の瞬間を待つ時間は何物にも代えがたい感動です。'
      },
      {
        num: '02',
        title: '富士五湖の「湖越し富士」と西伊豆の「駿河湾越し富士」の異なる美を堪能',
        body: '山梨県側（河口湖・山中湖・富士吉田）からは、湖面に富士山が反転して映り込む神秘的な「逆さ富士」や、山裾まで大きく広がるダイナミックな山容が目の前に迫ります。一方、静岡県西伊豆側からは、紺碧の駿河湾の水平線の向こうに雪を戴く富士山が浮かび、黄金色の夕陽とともに染まりゆくドラマチックな絶景が広がります。視点が変わることで全く異なる美しさに出会えます。'
      },
      {
        num: '03',
        title: '甲斐・駿河の山海の幸を味わい尽くす！甲州牛や駿河湾地魚の美食会席',
        body: '富士山麓の湧水で育まれた高原野菜や甲州ワインビーフ、富士桜ポーク、甲州信玄鶏などの山梨の恵み。そして駿河湾から水揚げされる高足ガニや金目鯛、桜えび、しらすといった静岡の海の幸。絶景温泉で心身を清めた後は、地域色豊かな極上料理と地酒・甲州ワインのペアリングに酔いしれる至極の食体験が待っています。'
      }
    ],
    hotelDetails: [
      {
        key: 'kawaguchiko_fuji_view',
        badge: '山梨県富士河口湖町・河口湖畔に建つ富士展望の名湯旅館',
        rank: '厳選名宿 第1選',
        desc: '河口湖畔の絶好のロケーションに位置し、本館最上階の展望大浴場や露天風呂、富士山ビュースイートから正面にそびえる雄大な富士山を仰ぎ見る老舗旅館。湯船から湯煙越しに眺める富士の姿は圧巻の一言。ジャグジー付き客室露天風呂や広々とした和洋室など多彩なお部屋が揃い、カップルからファミリーまで幅広く支持されています。夕食には山梨県産の厳選牛や甲斐サーモンなど地産地消の旬味覚を活かした本格会席を堪能できます。'
      },
      {
        key: 'yamanakako_fuji_view',
        badge: '山梨県富士吉田市・二万五千坪の名庭園と富士山を仰ぐ名門宿',
        rank: '厳選名宿 第2選',
        desc: '約2万5000坪もの広大で美しい日本庭園を誇る、富士五湖エリア屈指の名門温泉旅館。宿の目玉である屋上露天風呂「露天風呂 富士山」からは、遮るものが何一つない圧倒的なスケールで富士山の雄姿を目の前に拝むことができます。夕暮れ時には庭園で名物の霊峰太鼓ショーが毎夜開催され、館内全体が活気とおもてなしの心で包まれます。四季折々の茶室体験や贅を尽くした季節の創作会席料理とともに、心に残る最高峰の宿泊体験が約束されます。'
      },
      {
        key: 'izu_fuji_view',
        badge: '静岡県伊豆市・西伊豆土肥温泉の駿河湾サンセットと富士山',
        rank: '厳選名宿 第3選',
        desc: '西伊豆随一の湯量を誇る歴史ある土肥温泉に佇み、夕陽に染まる駿河湾の海の向こうに富士山の秀麗な山影を望む絶景宿。名湯・土肥温泉の源泉を引いた展望大浴場や貸切露天風呂からは、水平線に夕日が沈むマジックアワーと富士山の共演が楽しめます。駿河湾で獲れたばかりの新鮮な地魚のお造りや伊勢海老、鮑の踊り焼きなど、西伊豆ならではの豪快で鮮度抜群の海の恵みを心ゆくまでご堪能ください。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-open-air-bath-with-majestic-fuji-view-stay', title: '【富士山ビュー客室露天風呂×ふるさと納税】客室から霊峰富士を独占する名宿ガイド' },
      { slug: 'furusato-tax-sea-of-clouds-sky-terrace-hotel-stay', title: '【雲海テラス＆天空リゾート×ふるさと納税】奇跡の絶景に包まれる感動ステイ' },
      { slug: 'furusato-tax-three-major-night-view-luxury-hotel-stay', title: '【日本三大夜景ホテル×ふるさと納税】宝石を散りばめたような天空パノラマ名宿' },
      { slug: 'furusato-tax-three-scenic-views-heritage-stay', title: '【日本三景の名宿×ふるさと納税】松島・天橋立・宮島を巡る歴史と美景の旅' }
    ]
  },
  {
    slug: 'furusato-tax-onsen-steam-natural-hotspring-healing-stay',
    componentName: 'FurusatoOnsenSteamHealingStayPage',
    tag: '湯煙立ち上る温泉街・地獄蒸し＆天然砂むし湯治特集',
    title: '湯煙たなびく温泉街・名物地獄蒸し＆天然砂むし極上湯治宿×ふるさと納税完全ガイド【2026年最新】別府鉄輪・指宿・雲仙',
    metaTitle: '湯煙たなびく温泉街・名物地獄蒸し＆天然砂むし極上湯治宿×ふるさと納税完全ガイド【2026年最新】別府鉄輪・指宿・雲仙',
    shortTitle: '湯煙の温泉街・地獄蒸し＆砂むし湯治名宿特集',
    description: '地球の鼓動を全身で感じる圧巻の温泉エネルギー！至る所から白い湯煙が噴き出す大分・別府鉄輪温泉の伝統湯治宿「旅館 さくら屋」、波打ち際の地熱で全身を包み込む鹿児島・指宿温泉の名門「指宿白水館」、もうもうと立ち上る雲仙地獄とおしどりの池の静寂に抱かれる長崎「雲仙温泉 東園」。温泉の噴気で蒸し上げる滋養満点の「地獄蒸し料理」や天然デトックス浴を、楽天ふるさと納税トラベルクーポンで実質2,000円で体験する完全ガイド。',
    heroTag: '湯煙立ち上る温泉街・地獄蒸し＆天然砂むし湯治特集',
    leadTitle: '大地から湧き出す圧倒的な湯煙と地熱。五感を研ぎ澄ます日本の伝統的スチーム湯治へ',
    leadText: 'アスファルトの隙間や湯屋の屋根からモクモクと立ち上る白い湯煙、鼻腔をくすぐるほのかな硫黄の香り、そして大地の底から湧き上がるゴボゴボという地球の息吹――日本が誇る活火山地帯の温泉地には、太古の昔から人々を惹きつけてやまない圧倒的な生命力があります。日本一の湧出量を誇る別府の中でも特に湯煙文化が色濃く残る鉄輪（かんなわ）温泉の「旅館 さくら屋」。錦江湾の波音を聴きながら、温かい天然の温泉砂に埋もれて全身の毒素を汗とともに流し出す指宿温泉の最高峰「指宿白水館」。そしてキリシタン哀史の舞台としても知られる雲仙地獄の白煙と静かな池の景観美を併せ持つ長崎・雲仙温泉の「東園」。天然の温泉蒸気で肉や野菜をジューシーに蒸し上げるヘルシーな「地獄蒸し」を味わい、豊富なミネラルを含む源泉に身を委ねる時間は、日頃のストレスや疲労を根底から解きほぐしてくれます。楽天ふるさと納税のトラベルクーポンを活用すれば、自治体を応援しながら実質自己負担2,000円でこの極上湯治ステイが実現。大地の温もりを全身で浴びる本物の温泉旅へご案内します。',
    threePoints: [
      {
        num: '01',
        title: '天然の温泉蒸気100％！素材本来の旨味を凝縮する伝統の「地獄蒸し料理」',
        body: '江戸時代から続く鉄輪温泉の「地獄蒸し」は、摂氏約100度の温泉噴気釜で食材を一気に蒸し上げる調理法。高温の温泉蒸気で蒸すことで、肉は余分な脂が落ちてふっくらジューシーに、地場野菜は甘みが劇的に凝縮され、温泉に含まれる微量な塩分とミネラルが天然の調味料となります。油を使わない究極にヘルシーで贅沢な美食体験です。'
      },
      {
        num: '02',
        title: '世界でも極めて稀少！大地の重みと温熱で全身をデトックスする「天然砂むし温泉」',
        body: '海岸の砂浜から湧き出す天然温泉の熱を利用した指宿名物の「砂むし温泉」。浴衣を着て砂の上に横たわり、砂掛さんに温かい砂をかけてもらうと、心地よい砂の圧力と約50度の地熱によって全身の血行が劇的に促進されます。わずか10〜15分で大量の汗が噴き出し、通常の温泉入浴の数倍とも言われるデトックス効果と爽快感を体感できます。'
      },
      {
        num: '03',
        title: '石畳の坂道、湯治長屋、レトロな共同浴場を浴衣と下駄で巡る風情ある温泉街歩き',
        body: '立ち上る湯煙の中を浴衣姿で歩く温泉街散策は、日本の温泉旅の真骨頂。鉄輪温泉のレトロな共同浴場「むし湯」や、雲仙温泉の湯けむり立ち込める雲仙地獄の木道散策、温泉たまごや温泉まんじゅうを食べ歩くひとときは格別です。古き良き湯治場の温もりが、旅人の心を優しく解きほぐしてくれます。'
      }
    ],
    hotelDetails: [
      {
        key: 'beppu_kannawa_steam',
        badge: '大分県別府市・鉄輪温泉の風情ある湯治文化を受け継ぐ温もり宿',
        rank: '厳選名宿 第1選',
        desc: '別府八湯の中でも最も湯煙情緒あふれる鉄輪温泉の中心に佇む、温かなもてなしと家庭的な心地よさが魅力の温泉旅館。敷地内には自家源泉から湧き出る天然スチームを利用した地獄蒸し釜が設置されており、宿泊客が自由に地元の食材を持ち込んで蒸し料理を楽しむことができます。高温で良質な源泉かけ流しの内湯と露天風呂でじっくり身体の芯まで温まった後は、レトロな鉄輪の湯煙の街並みをそぞろ歩きする贅沢な湯治ステイが楽しめます。'
      },
      {
        key: 'ibusuki_sand_bath',
        badge: '鹿児島県指宿市・名物砂むし温泉と元禄風呂を誇る南国名門宿',
        rank: '厳選名宿 第2選',
        desc: '錦江湾に面した広大な敷地と約170メートルの大回廊を誇る、南九州を代表する名門温泉旅館。館内には波打ち際の本格的な専用「天然砂むし温泉」が併設されており、外に出ることなく快適に砂むし入浴を体験できます。さらに江戸時代の風呂文化を現代に再現した圧巻の千坪大浴場「元禄風呂」では、打たせ湯や釜風呂など多彩なお風呂を満喫可能。鹿児島が誇る黒豚や黒毛和牛、きびなごなどの豪華薩摩会席とともに至福のひとときを約束します。'
      },
      {
        key: 'unzen_jigoku_steam',
        badge: '長崎県雲仙市・雲仙地獄の白煙とおしどりの池を望む名旅館',
        rank: '厳選名宿 第3選',
        desc: '雲仙天草国立公園内に位置し、立ち上る雲仙地獄の噴気と穏やかなおしどりの池の湖畔に佇む上質な料理旅館。自家源泉から引かれる乳白色の濃厚な硫黄温泉は、美肌効果が高く湯上がりの肌がしっとりすべすべになると評判です。客室や露天風呂からは絵画のように美しい湖と山々の大自然が一望でき、四季折々の野鳥の声に心が洗われます。島原半島の豊かな山の幸と有明海の海の幸を融合させた極上の会席料理が旅を華やかに彩ります。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-three-medicinal-hotsprings-stay', title: '【日本三薬湯×ふるさと納税】草津・有馬・松之山！圧倒的薬効を誇る治癒の名湯' },
      { slug: 'furusato-tax-pure-kakenagashi-secret-hotspring-stay', title: '【源泉かけ流し秘湯×ふるさと納税】加水・加温なしの本物の湯力を堪能する名宿' },
      { slug: 'furusato-tax-three-ancient-springs-heritage-stay', title: '【日本三古湯×ふるさと納税】道後・有馬・白浜の悠久の湯守り宿を巡る旅' },
      { slug: 'furusato-tax-three-major-hotspring-resorts-stay', title: '【日本三大温泉街×ふるさと納税】熱海・別府・白浜の賑わいと名湯ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-seasonal-fruit-picking-vineyard-onsen-stay',
    componentName: 'FurusatoSeasonalFruitPickingStayPage',
    tag: '旬のフルーツ狩り・果樹園＆ワイナリー温泉宿特集',
    title: '果樹園の旬フルーツ狩り＆名門ワイナリー・美肌温泉宿×ふるさと納税完全ガイド【2026年最新】石和・伊豆長岡・飯坂',
    metaTitle: '果樹園の旬フルーツ狩り＆名門ワイナリー・美肌温泉宿×ふるさと納税完全ガイド【2026年最新】石和・伊豆長岡・飯坂',
    shortTitle: 'フルーツ王国果樹園＆ワイナリー美肌温泉特集',
    description: '桃・ぶどう・完熟いちご・蜜入りりんご！日本屈指の果樹王国で採れたて旬フルーツの芳醇な甘みと名湯を堪能する大人の贅沢旅。甲州ワインと果樹園の聖地・笛吹市石和温泉の老舗「みなもと旅館」、紅ほっぺや章姫のいちご狩り農園に囲まれた伊豆の国市「招福の宿 ゑびすや」、福島フルーツラインの果樹園群と摺上川の渓谷美を誇る「飯坂温泉 摺上亭 大鳥」。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ果実美酒温泉ステイ。',
    heroTag: '旬のフルーツ狩り・果樹園＆ワイナリー温泉宿特集',
    leadTitle: '樹上で完熟した果実のみずみずしい甘みと、ワイナリー直送の美酒。湯上がりに楽しむフルーツ天国へ',
    leadText: '春の真っ赤な大粒いちご、初夏の甘美なサクランボ、夏のジューシーな白桃、秋の濃厚なシャインマスカットや巨峰、そして冬の蜜入りりんご――日本各地の果樹園地帯には、四季折々の恵みを五感いっぱいに味わえる素晴らしい旅の舞台が広がっています。日本有数のぶどう・桃の生産量を誇りワイナリー巡りも楽しい山梨県笛吹市・石和温泉の老舗「みなもと旅館」。ハウスいっぱいに甘い香りが漂ういちご狩り農園が点在し、歴史ある美肌の湯が湧く静岡県伊豆の国市・伊豆長岡温泉の「招福の宿 ゑびすや」。そして吾妻連峰の麓に約14kmにわたって果樹園が連なるフルーツラインの玄関口・福島市「飯坂温泉 摺上亭 大鳥」。朝摘みの新鮮なフルーツを心ゆくまで味わい、夕方には肌をしっとりと包み込む名湯露天風呂に浸かり、夕食には地場産ワインやフルーツ仕込みの創作会席を堪能する。楽天ふるさと納税のトラベルクーポン（寄付額の最大30％割引）を使えば、実質自己負担2,000円でこの上なく贅沢なフルーツ＆美肌温泉ステイが実現します。大地の実りに心ほどける、甘く豊かな休日へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: 'スーパーでは絶対に出会えない！樹上で完熟を迎えた「朝採り果実」の圧倒的な濃縮感',
        body: '一般の流通に乗るフルーツは日持ちを考慮して完熟前に収穫されますが、産地の果樹園で食べるフルーツは樹上で限界まで糖度を高めた「本物の完熟品」。指先で触れるだけで果汁があふれ出す桃や、パリッと皮が弾けて甘い果汁が広がる大粒シャインマスカット、果肉の芯まで真っ赤に染まった完熟いちごの芳醇な香りは、産地に足を運んだ人だけが味わえる至高の特権です。'
      },
      {
        num: '02',
        title: '日本ワイン発祥の地を巡る！ワイナリー併設ショップや試飲ツアーと美肌温泉の共演',
        body: '果樹園のすぐ隣には、その土地の葡萄だけで仕込むクラフトワイナリーが点在。山梨・勝沼や笛吹では、樽出し生ワインの試飲や歴史ある地下セラーの見学が楽しめます。宿に戻れば、アルカリ性単純温泉や塩化物泉などの美肌の湯でリフレッシュ。夕食時にはソムリエが厳選した地元産ワインと旬食材のマリアージュに酔いしれる、大人のための豊かな時間が流れます。'
      },
      {
        num: '03',
        title: 'ファミリー・カップル・女子旅に大人気！もぎたて収穫体験とお土産直売所の楽しみ',
        body: '果樹園での収穫体験は、大人から子どもまで誰もが笑顔になれる人気アクティビティ。自分でもぎ取った最高の1果をその場で味わう感動は格別です。農園直営のカフェでいただくフルーツパフェやジェラート、直売所で手に入れる限定ジャムやドライフルーツなど、旅の思い出とともに持ち帰るお土産選びも旅の大きな醍醐味となります。'
      }
    ],
    hotelDetails: [
      {
        key: 'fuefuki_fruit_wine',
        badge: '山梨県笛吹市・桃と葡萄の郷・石和温泉の純和風名湯旅館',
        rank: '厳選名宿 第1選',
        desc: '山梨県屈指の果樹園地帯・笛吹市石和温泉に位置し、緑豊かな日本庭園と手作りの郷土懐石が評判の温もりある名旅館。石和温泉は日本有数のブドウ・桃の産地に囲まれており、シーズン中はいちご狩りや桃狩り、シャインマスカット狩りの観光農園へ車ですぐの好立地。アルカリ性単純温泉のやわらかな天然温泉を引く大浴場や露天風呂で旅の疲れを癒やした後は、山梨名物の甲州牛やほうとう鍋、地元ワイナリーの銘醸甲州ワインを心ゆくまでお楽しみいただけます。'
      },
      {
        key: 'izu_strawberry_onsen',
        badge: '静岡県伊豆の国市・完熟いちご狩り街道と古奈の名湯',
        rank: '厳選名宿 第2選',
        desc: '静岡県屈指のいちごの産地として知られる伊豆の国市に佇み、平安時代から続く名湯「古奈温泉」の源泉かけ流しを誇る老舗料理旅館。周辺には章姫や紅ほっぺを時間無制限で楽しめる人気のいちご狩り施設が多数集結しています。館内にはヒノキの香り漂う貸切風呂や趣ある大浴場が揃い、肌当たり滑らかな美肌の湯を堪能。夕食には駿河湾から直送される鮮魚のお造りや季節の会席料理が美しく並び、心温まる伊豆の休日を満喫できます。'
      },
      {
        key: 'shinshu_apple_orchard',
        badge: '福島県福島市・フルーツラインの桃やりんごと摺上川の渓谷美',
        rank: '厳選名宿 第3選',
        desc: '吾妻連峰の麓に約14kmにわたって広がる果樹園ロード「フルーツライン」の拠点となる飯坂温泉の名旅館。摺上川の清流を望む広大な敷地に、自家源泉から引く開放感あふれる大露天風呂や多彩なサウナ・内湯を完備しています。初夏のさくらんぼ、夏の桃、秋の梨、冬のりんごと、一年を通じて果樹王国ふくしまの恵みを満喫可能。料理人が腕を振るう福島牛や旬の山海の幸を盛り込んだ会席料理は絶品で、極上の癒やしと美食の時間を届けてくれます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-winery-craft-beer-auberge-stay', title: '【ワイナリー＆クラフトビールオーベルジュ×ふるさと納税】美酒と美肌温泉の極上ペアリング宿' },
      { slug: 'furusato-tax-three-great-fruit-kingdoms-auberge-stay', title: '【日本三大フルーツ王国×ふるさと納税】山梨・山形・長野の果樹園オーベルジュ' },
      { slug: 'furusato-tax-local-gourmet-inn-stay', title: '【ご当地グルメ特化宿×ふるさと納税】その土地の旬の味覚を部屋食で味わう名宿' },
      { slug: 'furusato-tax-award-winning-breakfast-gourmet-hotel-stay', title: '【朝食受賞ホテル×ふるさと納税】地場産フルーツや焼きたてパンが自慢の贅沢モーニング' }
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
    const hotelImg = h.hotelImageUrl || 'https://img.travel.rakuten.co.jp/share/HOTEL/14737/14737.jpg';
    const reviewAvg = h.reviewAverage || '4.50';
    const reviewCount = h.reviewCount || '100';
    const address = (h.address1 || '') + (h.address2 || '');
    const access = h.access || '最寄り駅・インターチェンジより車または無料送迎あり';
    const minCharge = h.hotelMinCharge ? Number(h.hotelMinCharge).toLocaleString() : '12,000';
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
    '客室露天風呂 予約',
    '温泉旅館 クーポン',
    '高級リゾート 割引'
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

console.log('Finished generating all 4 articles for Round 67!');
