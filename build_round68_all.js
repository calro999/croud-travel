const fs = require('fs');
const path = require('path');

const seasonalHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

// 4記事の詳細データ定義
const articleConfigs = [
  {
    slug: 'furusato-tax-private-room-sauna-totonoi-villa-stay',
    componentName: 'FurusatoPrivateRoomSaunaTotonoiStayPage',
    tag: '客室専用サウナ＆天然温泉ととのいヴィラ特集',
    title: '客室専用プライベートサウナ＆天然水風呂・露天風呂付きヴィラ宿×ふるさと納税完全ガイド【2026年最新】熱海・河口湖・霧島',
    metaTitle: '客室専用プライベートサウナ＆天然水風呂・露天風呂付きヴィラ宿×ふるさと納税完全ガイド【2026年最新】熱海・河口湖・霧島',
    shortTitle: '客室専用サウナ＆露天風呂ヴィラ名宿特集',
    description: '好きな時に好きなだけセルフロウリュを満喫！相模湾の絶景を望む客室本格サウナ付きスイート「ＩＳＨＩＮＯＹＡ熱海」、富士山を仰ぐ完全独立型グランピングヴィラ「天空の温泉ヴィラ紬 河口湖」、美肌源泉かけ流しと専用バレルサウナで極上のととのいへ導く「こしかの温泉」。他人の目を気にせず水風呂と外気浴を独占できるプライベートサウナ宿に、楽天ふるさと納税トラベルクーポンで実質2,000円負担で泊まる完全ガイド。',
    heroTag: '客室専用サウナ＆天然温泉ととのいヴィラ特集',
    leadTitle: 'セルフロウリュの芳醇な蒸気、キンキンの水風呂、そして大自然の風に抱かれる至高の外気浴へ',
    leadText: '空前のサウナブームが定着する中、今最もサウナーたちの憧れの的となっているのが「客室に本格サウナと水風呂、外気浴デッキが完備されたプライベートサウナ宿」です。大浴場のサウナでは叶わないアロマ水での思いのままのセルフロウリュ、好きな温度での水風呂ダイブ、そして水着のままテラスのリクライニングチェアに身を投げ出して深呼吸する時間――他人の視線や混雑のストレスから完全に解放され、自分たちだけのペースで「極上のととのい」を追求できます。相模湾を見下ろす高台に佇みプライベートサウナと温泉露天風呂を備えた「ＩＳＨＩＮＯＹＡ熱海」、正面に富士山を望む絶景テラスとフィンランド式サウナを誇る「天空の温泉ヴィラ紬 河口湖」、そして美肌の湯として名高い天然温泉とバレルサウナが融合した鹿児島・霧島の「こしかの温泉」。こうした最新サウナ付きスイートや一棟貸しヴィラは高価格帯ですが、楽天ふるさと納税のトラベルクーポン（寄付額の最大30％割引・有効期間3年）を使えば、実質自己負担2,000円で夢のサウナ合宿ステイが叶います。心と身体を芯から解き放つ、最高峰のプライベートととのい旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '時間も人目も気にしない！何度でも自由自在なセルフロウリュと好みの温度設定',
        body: '客室専用サウナ最大の特権は、白樺やヒノキなど好みの天然アロマ水を使ったセルフロウリュが24時間いつでも気兼ねなく楽しめること。熱い蒸気が一気に立ち上り、サウナストーンの弾ける音と心地よい香りに包まれます。カップルや夫婦、サウナ仲間同士で会話を楽しみながら、誰にも邪魔されない完全プライベートなサウナタイムを満喫できます。'
      },
      {
        num: '02',
        title: '天然地下水掛け流しの水風呂＆絶景を望む特等席「インフィニティチェア」',
        body: 'サウナ室のすぐ目の前には、富士山の湧水や霧島の天然地下水を掛け流しにした専用水風呂を完備。火照った身体をしっかり冷やした後は、海風や高原の澄んだ空気が吹き抜ける屋外ウッドデッキに設置されたインフィニティチェアへ。視界いっぱいに広がる星空や大自然を眺めながらのディープリラックスは、日頃の脳疲労を劇的にリセットしてくれます。'
      },
      {
        num: '03',
        title: 'サウナ上がりの「サ飯」が絶品！地元厳選牛のBBQや本格会席料理に舌鼓',
        body: 'しっかりととのった後は、味覚が研ぎ澄まされた状態でいただく至高の「サ飯（サウナ飯）」が待っています。プライベートテラスで楽しむ地元ブランド牛の本格BBQや、料理人が腕を振るう旬の創作会席料理、冷えたクラフトビールやオロポ。プライベート空間だからこそ、バスローブや部屋着のままリラックスして美食に酔いしれることができます。'
      }
    ],
    hotelDetails: [
      {
        key: 'atami_room_sauna',
        badge: '静岡県熱海市・相模湾を見下ろす高台のプライベートサウナスイート',
        rank: '厳選名宿 第1選',
        desc: '熱海の高台に建ち、相模湾の青い海と初島を望むラグジュアリーホテル。客室専用の本格サウナを備えたスイートルームでは、ヒノキの香り漂うサウナ室でのセルフロウリュ、専用水風呂、そして海風が心地よいテラスでの外気浴という完璧な導線が実現。源泉かけ流しの天然温泉露天風呂も完備されており、サウナと名湯を交互に愉しむ贅沢を独占できます。夕食には伊豆の新鮮な海の幸と厳選和牛を取り入れた和モダン会席をご堪能ください。'
      },
      {
        key: 'kawaguchiko_sauna_villa',
        badge: '山梨県富士河口湖町・富士山を望む天空のサウナ＆露天風呂ヴィラ',
        rank: '厳選名宿 第2選',
        desc: '河口湖を見下ろす絶好のロケーションに誕生した、全棟に富士山ビュー天然温泉露天風呂とプライベートサウナを完備した完全独立型ヴィラ。テラスからは雄大な富士山のパノラマが広がり、サウナ後の外気浴はまさに天空に浮かんでいるかのような爽快感。広々としたリビングや最新キッチン、プライベートBBQ設備が整い、別荘感覚で贅沢なおこもりステイが楽しめます。富士山麓の澄んだ空気と星空に包まれる感動体験がここにあります。'
      },
      {
        key: 'koshikano_sauna_onsen',
        badge: '鹿児島県霧島市・美肌源泉かけ流しと客室バレルサウナの極上温泉宿',
        rank: '厳選名宿 第3選',
        desc: '湯量豊富な美肌の名湯として名高い霧島・こしかの温泉。全室に源泉かけ流し天然温泉風呂と専用の本格バレルサウナが設置されており、誰にも邪魔されないプライベート空間で極上の温冷交代浴が楽しめます。霧島の清らかな天然水を使った水風呂と緑豊かな中庭での外気浴は格別。グランピングスタイルや本館和室など好みに合わせた滞在ができ、鹿児島黒豚や黒毛和牛を使った絶品サ飯ディナーが旅の満足度を最高潮に高めてくれます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-kura-sauna-private-villa-charter-stay', title: '【蔵サウナ＆一棟貸し切り×ふるさと納税】完全プライベート空間でととのう贅沢ステイ' },
      { slug: 'furusato-tax-pet-sauna-private-hotspring-stay', title: '【愛犬同伴＆プライベートサウナ×ふるさと納税】天然温泉付き一棟貸しヴィラ完全ガイド' },
      { slug: 'furusato-tax-private-villa-hanare-hideaway-stay', title: '【全室離れの隠れ家×ふるさと納税】誰にも会わずに過ごす極上のおこもり客室露天風呂宿' },
      { slug: 'furusato-tax-pure-kakenagashi-secret-hotspring-stay', title: '【源泉かけ流し秘湯×ふるさと納税】加水・加温なしの本物の湯力を堪能する名宿' }
    ]
  },
  {
    slug: 'furusato-tax-kanreki-celebration-oyakoukou-onsen-stay',
    componentName: 'FurusatoKanrekiCelebrationStayPage',
    tag: '還暦・古希長寿祝い＆親孝行温泉旅特集',
    title: '還暦・古希・長寿祝い＆親孝行温泉旅に選ぶ極上名旅館×ふるさと納税完全ガイド【2026年最新】有馬・金沢湯涌・淡路島',
    metaTitle: '還暦・古希・長寿祝い＆親孝行温泉旅に選ぶ極上名旅館×ふるさと納税完全ガイド【2026年最新】有馬・金沢湯涌・淡路島',
    shortTitle: '還暦祝い＆親孝行温泉名旅館特集',
    description: 'ご両親への感謝を込めた最高の親孝行！還暦・古希・傘寿など長寿のお祝い旅行にふさわしい名門温泉宿を厳選。日本最古の名湯・有馬温泉で金泉銀泉と贅を尽くした花懐石を味わう「御幸荘 花結び」、加賀百万石の奥座敷・金沢湯涌温泉で数寄屋造りの静寂に浸る「湯の出旅館」、全室オーシャンビューとバリアフリー対応の安心リゾート「淡路インターナショナルホテル ザ・サンプラザ」。ちゃんちゃんこ貸出や記念写真・個室食などおもてなしの宿に、楽天ふるさと納税トラベルクーポンで実質2,000円負担で宿泊する完全ガイド。',
    heroTag: '還暦・古希長寿祝い＆親孝行温泉旅特集',
    leadTitle: '「いつもありがとう」を形に。ご両親の節目を彩る名門旅館のおもてなしと極上の名湯へ',
    leadText: '人生の大きな節目である還暦（60歳）、古希（70歳）、喜寿（77歳）、傘寿（80歳）の長寿祝い。「これまで育ててくれた両親に、記憶に残る特別な旅行をプレゼントしたい」という親孝行の想いを叶えるには、細やかな配慮と上質なおもてなしを兼ね備えた温泉旅館選びが欠かせません。段差の少ないバリアフリー客室、家族水入らずで気兼ねなく会話が弾む個室食や部屋食、身体の負担を和らげる客室露天風呂、そして赤や紫のちゃんちゃんこ貸出や記念写真サービス。古来より皇族や文人に愛された名湯・有馬温泉の「御幸荘 花結び」、加賀百万石の美意識と料理人の技が息づく金沢湯涌温泉の「湯の出旅館」、そして波穏やかな紀淡海峡を一望する淡路島の絶景宿「ザ・サンプラザ」。家族みんなで集まる特別なお祝い旅行は宿泊費がまとまった額になりますが、楽天ふるさと納税のトラベルクーポン（寄付額の最大30％割引）を使えば、実質自己負担2,000円で驚くほどお得に最高の親孝行ステイが実現します。かけがえのない家族の笑顔と思い出を紡ぐ、至福の長寿祝い温泉旅行へご案内します。',
    threePoints: [
      {
        num: '01',
        title: '家族水入らずで語り合える「部屋食・個室食事処」＆長寿祝い特典が充実',
        body: '親孝行旅行では周囲の目を気にせずリラックスして団らんできるお部屋食や完全個室の料亭プランが一番人気。乾杯用のお祝い酒や鯛の姿造り、赤・紫・黄色のちゃんちゃんこ無料貸出、家族記念写真の台紙プレゼントなど、宿ならではの心温まる長寿祝い専用サービスが旅行の雰囲気を華やかに盛り上げてくれます。'
      },
      {
        num: '02',
        title: 'シニア世代の身体に優しい！バリアフリー設計・手すり付き客室露天風呂',
        body: '高齢のご両親を連れた旅行で安心なのが、段差を最小限に抑えたユニバーサルデザイン客室や、ベッド完備の和洋室。大浴場まで長い廊下を歩くことなく、お部屋のテラスに備えられた手すり付きの温泉露天風呂でいつでもゆったりと湯浴みを楽しめる環境は、ご両親にとっても大きな安心感と寛ぎをもたらします。'
      },
      {
        num: '03',
        title: '金泉銀泉・加賀料理・淡路島海の幸！五感で満喫する本物の名湯と郷土美食',
        body: '万病に効くとされる有馬温泉の濃厚な「金泉」や、湯涌温泉のやわらかな美肌湯。そして加賀野菜やのどぐろ、淡路牛や由良産の天然鯛など、熟練の料理人が真心を込めて仕立てる旬の会席料理。身体の内外から健康と活力を取り戻す至高のひとときは、ご両親にとって生涯忘れられない最高の贈り物になります。'
      }
    ],
    hotelDetails: [
      {
        key: 'arima_oyakoukou_onsen',
        badge: '兵庫県神戸市・有馬温泉の高台に佇む四季の花と金泉の名旅館',
        rank: '厳選名宿 第1選',
        desc: '日本三古湯・有馬温泉の温泉街を見下ろす高台に位置し、「花」をテーマにした心温まるおもてなしが評判の名門宿。名湯「金泉」を湛えた大浴場や展望露天風呂に加え、バリアフリー対応の客室露天風呂付きプランも充実。還暦や古希など長寿祝い向けのプランでは、特製お祝い会席やお祝いちゃんちゃんこの貸出、記念写真など手厚いサポートが揃っています。神戸牛や旬の山海の恵みをふんだんに盛り込んだ彩り豊かな花懐石をお部屋食で気兼ねなくお楽しみいただけます。'
      },
      {
        key: 'kanazawa_oyakoukou_onsen',
        badge: '石川県金沢市・金沢の奥座敷・湯涌温泉に佇む数寄屋造りの名門宿',
        rank: '厳選名宿 第2選',
        desc: '金沢駅から車で約20分、文豪や画家たちに愛された閑静な湯涌温泉に佇む料理自慢の老舗旅館。伝統的な数寄屋造りの館内は落ち着いた和の風情に満ち、静かに時を過ごしたい親孝行旅行に最適です。客室専用の露天風呂や広々とした内湯で名湯を堪能した後は、輪島塗や九谷焼の器に美しく盛り付けられた加賀会席を堪能。日本海で獲れたてのどぐろや能登牛、加賀野菜など北陸の極上素材を熟練の職人技で味わう至福の夕食が、ご両親の特別な記念日を華やかに彩ります。'
      },
      {
        key: 'awaji_oyakoukou_onsen',
        badge: '兵庫県洲本市・紀淡海峡の海景と全世代に優しい絶景スパリゾート',
        rank: '厳選名宿 第3選',
        desc: '淡路島・洲本温泉の海沿いに建ち、全室オーシャンビューを誇る総合リゾートホテル。館内はバリアフリー対応が進んでおり、車椅子の貸出やフラット設計の客室など三世代やシニア連れの旅行でもストレスなく快適に過ごせます。目の前に広がる穏やかな海の景色を眺めながらの名湯・洲本温泉入浴は開放感抜群。夕食には名物の淡路牛ステーキや鯛の宝楽焼きなど、淡路島の豊かな御食国（みけつくに）の美味を存分に堪能できるお祝いの宴が叶います。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-three-generation-family-luxury-stay', title: '【3世代家族旅行×高額枠一括消化】親孝行＆孫と泊まる客室露天風呂・離れ宿完全ガイド' },
      { slug: 'furusato-tax-anniversary-luxury-suite-villa-stay', title: '【記念日・最高峰ヴィラ×ふるさと納税】特別な日を彩るプライベートプール＆温泉スイート' },
      { slug: 'furusato-tax-luxury-hotspring-ryokan-stay', title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド' },
      { slug: 'furusato-tax-travel-beginners-complete-guide', title: '【超初心者向け完全マニュアル】ふるさと納税で旅行・ホテルに安く泊まる仕組みと使い方' }
    ]
  },
  {
    slug: 'furusato-tax-private-pool-luxury-suite-villa-stay',
    componentName: 'FurusatoPrivatePoolLuxuryStayPage',
    tag: 'プライベートプール＆ヴィラスイート特集',
    title: '客室専用プライベートプール＆温水ジャグジー付き極上ヴィラ宿×ふるさと納税完全ガイド【2026年最新】沖縄・宮古島・千葉鴨川',
    metaTitle: '客室専用プライベートプール＆温水ジャグジー付き極上ヴィラ宿×ふるさと納税完全ガイド【2026年最新】沖縄・宮古島・千葉鴨川',
    shortTitle: '専用プール付きヴィラスイート名宿特集',
    description: '誰の目も気にせず青空と水辺を独占！沖縄本島やんばるの海を望む独立型ヴィラ「プライベートプールヴィラもとぶ」、都心から気軽に行けるプライベートプール＆本格サウナ完備「Rakuten STAY VILLA 鴨川」、宮古ブルーの海が目前に広がる南国最高峰リゾート「プライベートプールヴィラ イムギャーリゾート」。恋人とのリゾートバカンスや家族旅行に最高の贅沢を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: 'プライベートプール＆ヴィラスイート特集',
    leadTitle: 'きらめく水面、プールサイドのデッキチェア。日常を忘れるプライベートプールスイートへ',
    leadText: '海外リゾートの邸宅のように、客室のテラスに専用のプールが備えられた「プライベートプール付きヴィラ」。他の宿泊客との共用プールとは異なり、水着に着替えてテラスの扉を開ければ、そこは自分たちだけの青いオアシス。朝目覚めてすぐにプールサイドでコーヒーを味わい、日中は太陽の光を浴びて水遊びや読書、夜にはライトアップされた水面を眺めながら満天の星空の下でカクテルを傾ける――そんな映画のワンシーンのような極上リゾートステイが日本国内でも体験できます。美ら海水族館にも近くやんばるの大自然に抱かれる沖縄「プライベートプールヴィラもとぶ」、首都圏から車でアクセスできプール＆サウナが両方楽しめる千葉・外房「Rakuten STAY VILLA 鴨川」、そして東洋一美しいと称される宮古ブルーの海が広がる「プライベートプールヴィラ イムギャーリゾート」。こうした超高級プールヴィラは宿泊単価が高額ですが、楽天ふるさと納税のトラベルクーポン（寄付額の最大30％割引）を活用すれば、実質自己負担2,000円で驚くほどお得に予約可能。人生最高の非日常感を味わう、ラグジュアリープールステイへ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '混雑ゼロ＆写真撮影も自由自在！完全プライベートな水上リラクゼーション',
        body: '共用ホテルのプールのような混雑や場所取りのストレスは一切なし。子どもたちが水しぶきをあげて大はしゃぎしても周囲に気兼ねする必要がなく、ファミリー旅行でも安心です。また、SNS映えする浮き輪を使った写真や、水面に映るサンセットのシルエット写真など、周囲の目を気にせず思い出に残る素敵な写真を心ゆくまで撮影できます。'
      },
      {
        num: '02',
        title: '温水プール＆屋外ジャグジー併設なら春〜秋・冬のナイトプールも快適',
        body: '温水対応のプライベートプールや温水ジャグジーが備わったヴィラなら、真夏のシーズンだけでなく春や秋の涼しい季節、さらには夜の静寂の中で温まりながら星空を見上げるナイトプールまでオールシーズン快適に楽しめます。プールから上がってすぐに温かいシャワーやリビングへ移動できる動線の良さも魅力です。'
      },
      {
        num: '03',
        title: 'プールサイドでの本格BBQやシェフ出張ディナーで優雅なリゾートナイト',
        body: '夕食はプールサイドのテラスで潮風を感じながら、地元ブランド牛や新鮮な海の幸を焼き上げるプライベートBBQが定番。専属シェフが出張して目の前で腕を振るってくれるプレミアムプランを用意しているヴィラもあり、記念日やプロポーズ、家族の大切なお祝いにふさわしい華やかなディナータイムを演出してくれます。'
      }
    ],
    hotelDetails: [
      {
        key: 'motobu_pool_villa',
        badge: '沖縄県本部町・やんばるの豊かな森とエメラルドの海を望む専用プールヴィラ',
        rank: '厳選名宿 第1選',
        desc: '沖縄本島北部・本部町の緑豊かな高台に位置し、美ら海水族館や備瀬のフクギ並木へもアクセス抜群の完全プライベートヴィラ。各棟のテラスには専用の広々としたプライベートプールが設置されており、やんばるの森を抜ける心地よい海風を感じながら開放感あふれるスイミングを楽しめます。室内にはアイランドキッチンや大型冷蔵庫、洗濯乾燥機が完備され、別荘感覚の長期滞在にも最適。暮らすように旅する贅沢な沖縄リゾートライフが叶います。'
      },
      {
        key: 'kamogawa_pool_villa',
        badge: '千葉県鴨川市・都心から行けるプライベートプール＆本格サウナ付き大型ヴィラ',
        rank: '厳選名宿 第2選',
        desc: '東京湾アクアラインを利用して都心から約90分、千葉県外房の美しい海岸近くに誕生した話題のラグジュアリーヴィラ。全棟に専用の大型プライベートプールと本格フィンランド式サウナ、水風呂、外気浴テラスを完備した贅沢極まりない設計です。人工温泉の内風呂や広々としたリビング、最新家電が揃い、最大定員も多いため家族やグループでの旅行に大人気。テラスでの千葉県産銘柄肉BBQとともに最高峰のバカンスをお楽しみいただけます。'
      },
      {
        key: 'miyakojima_pool_villa',
        badge: '沖縄県宮古島市・宮古ブルーの海とサンゴ礁に抱かれるプライベートプールスイート',
        rank: '厳選名宿 第3選',
        desc: '透明度抜群の天然の入り江「イムギャーマリンガーデン」を目前に望む、宮古島屈指のハイクラスプライベートプールヴィラ。全室のテラスに宮古ブルーの海と空に溶け込む専用プライベートプールが備えられ、デッキチェアに寝そべりながら波の音と潮風に包まれる時間は至福そのもの。シュノーケリングで色鮮やかな熱帯魚やウミガメと出逢った後は、お部屋のプールでゆったりとクールダウン。満天の天の川を仰ぐ南国の夜をご堪能ください。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-infinity-onsen-sky-ocean-view-stay', title: '【絶景インフィニティ温泉×ふるさと納税】水平線と空に溶け込む天空露天風呂＆プール宿' },
      { slug: 'furusato-tax-remote-island-luxury-resort-stay', title: '【大人の隠れ家・極上の離島リゾート】日常を完全遮断する南国アイランドふるさと納税ステイ' },
      { slug: 'furusato-tax-anniversary-luxury-suite-villa-stay', title: '【記念日・最高峰ヴィラ×ふるさと納税】特別な日を彩るプライベートプール＆温泉スイート' },
      { slug: 'furusato-tax-diving-ocean-resort-stay', title: '【海中展望＆ダイビング直結リゾート×ふるさと納税】透き通る海とサンゴ礁に出逢う旅' }
    ]
  },
  {
    slug: 'furusato-tax-fresh-sushi-kaiseki-gourmet-inn-stay',
    componentName: 'FurusatoFreshSushiKaisekiStayPage',
    tag: '港町市場直送・極上寿司会席＆名湯宿特集',
    title: '漁港直送の極上寿司会席＆職人握りを味わう名湯温泉宿×ふるさと納税完全ガイド【2026年最新】石川加賀・東伊豆熱川・伊東',
    metaTitle: '漁港直送の極上寿司会席＆職人握りを味わう名湯温泉宿×ふるさと納税完全ガイド【2026年最新】石川加賀・東伊豆熱川・伊東',
    shortTitle: '漁港直送寿司会席＆名湯温泉宿特集',
    description: '海の幸の宝庫・日本海の新鮮魚介や相模灘の朝獲れ地魚を職人が目の前で握る！名勝鶴仙渓の絶景と加賀・能登の極上握りを味わう「山中温泉 かがり吉祥亭」、6つの自家源泉貸切風呂と伊豆の鮮魚寿司会席が自慢の「ふたりの湯宿 湯花満開」、伊東港直送の地魚握りと相模湾パノラマ露天風呂を誇る「伊東温泉 横浜藤よし伊豆店」。旬の地魚寿司と極上温泉を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で堪能する美食旅ガイド。',
    heroTag: '港町市場直送・極上寿司会席＆名湯宿特集',
    leadTitle: '朝獲れの天然地魚、シャリのほどける絶妙な握り技。温泉宿で味わう至高の寿司会席へ',
    leadText: '日本全国の旅先で「最も食べたいご当地グルメ」として常に上位に君臨するお寿司。特に有名な漁港や市場を擁する温泉地では、水揚げされたばかりの鮮度抜群な天然地魚を熟練の寿司職人が目の前で握ってくれる「寿司自慢の料理旅館」が食通たちの心を掴んで離しません。金沢・能登の豊かな海から直送されるのどぐろ、寒鰤、甘海老、加能ガニを贅沢に握る石川・加賀温泉郷の「かがり吉祥亭」。相模灘から揚がる金目鯛、アジ、伊勢海老を六つの源泉かけ流し貸切風呂とともに愉しめる伊豆熱川温泉の「ふたりの湯宿 湯花満開」。そして伊東港の朝獲れ地魚握りと高台からの絶景オーシャンビュー露天風呂が評判の「伊東温泉 横浜藤よし伊豆店」。一般的な会席料理とは一線を画す、海の恵みをダイレクトに味わう極上寿司コースと名湯の組み合わせは、まさに日本人の五感を満たす最高の贅沢です。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使えば、実質自己負担2,000円で憧れの寿司オーベルジュに宿泊可能。旬の旨味が口いっぱいに広がる、贅沢な美食温泉紀行へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '市場や競りから直行！鮮度抜群の「朝獲れ地魚」と季節のプレミアム高級魚',
        body: '寿司会席宿の醍醐味は、一般的な流通では出回らない地元の珍しい地魚や、その日一番の旬魚を最高の鮮度で味わえること。北陸の「白身のトロ」と称されるのどぐろの炙りや肉厚な甘海老、伊豆の脂が乗った地金目鯛の握りなど、産地だからこそ実現できる究極の魚の旨味と甘みを存分に堪能できます。'
      },
      {
        num: '02',
        title: 'カウンター席で職人の技を間近に！五感で楽しむライブ感あふれる寿司ダイニング',
        body: '宿によっては、オープンキッチンの寿司カウンターで職人が一貫一貫丁寧に握りたてを提供してくれるライブ演出が大好評。シャリの温度、煮切り醤油の塗り具合、海苔のパリッとした食感まで計算し尽くされた握りを、板前との粋な会話とともに楽しむ時間は温泉旅の最高のハイライトになります。'
      },
      {
        num: '03',
        title: '地元の銘酒・地酒ペアリングと、湯量豊富な源泉かけ流し露天風呂の極上癒やし',
        body: '新鮮な寿司の美味しさをさらに引き立てるのが、石川の手取川や黒帯、静岡の磯自慢や初亀といった全国屈指の銘酒たち。芳醇な日本酒と極上寿司のマリアージュに酔いしれた後は、渓谷や海を望む名湯露天風呂に浸かって心身をリフレッシュ。美食と温泉が織りなす完璧な休日は明日への活力をもたらしてくれます。'
      }
    ],
    hotelDetails: [
      {
        key: 'noto_sushi_ryokan',
        badge: '石川県加賀市・名勝鶴仙渓を望む渓流露天風呂と加賀能登寿司会席',
        rank: '厳選名宿 第1選',
        desc: '山中温泉の名勝「鶴仙渓」の渓谷沿いに佇み、美しい自然と伝統芸能の加賀太鼓ショーが楽しめる人気の温泉旅館。夕食では北陸の豊かな海で獲れた新鮮な魚介を惜しみなく使った会席料理が振る舞われ、揚げたての天ぷら食べ放題や地魚の握り寿司など美食の数々がテーブルを彩ります。鶴仙渓のせせらぎを聞きながら浸かる開放的な立ち湯露天風呂やヒノキ風呂で身体を芯まで温め、加賀の美食と名湯に癒やされる優雅なひとときをお過ごしください。'
      },
      {
        key: 'atagawa_sushi_ryokan',
        badge: '静岡県東伊豆町・六つの源泉かけ流し貸切風呂と伊豆地魚寿司会席',
        rank: '厳選名宿 第2選',
        desc: '伊豆熱川温泉の海沿いに位置し、敷地内に湧き出る良質な自家源泉を六つもの個性的な貸切風呂で何度でも無料で湯めぐりできる大人の隠れ宿。夕食には相模湾で獲れた新鮮な地魚の握り寿司や金目鯛の姿煮、伊勢海老のお造りなど伊豆の海の幸が贅沢に並ぶ極上会席をご用意。全館畳敷きの温もりある空間で、大切な人と二人きりで温泉三昧と獲れたての寿司美食を心ゆくまで満喫できる至極の温泉ステイが叶います。'
      },
      {
        key: 'ito_sushi_ryokan',
        badge: '静岡県伊東市・伊東港直送の新鮮地魚握りと相模灘パノラマ絶景湯',
        rank: '厳選名宿 第3選',
        desc: '伊東温泉の高台から相模灘の広大な水平線を見下ろす、料理自慢の隠れ家温泉旅館。毎朝伊東港で水揚げされるピチピチの地魚を厳選し、熟練の板前が握る本格寿司会席はリピーターからも絶賛される逸品です。海を一望する絶景の源泉かけ流し露天風呂や貸切風呂で名湯を浴びた後は、窓一面に広がる海景色を眺めながら旬の握りと地酒に舌鼓。伊豆の海の恵みを五感で味わう至福の休日が約束されます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-winter-crab-gourmet-luxury-stay', title: '【冬の味覚・活蟹尽くし×ふるさと納税】越前蟹・松葉蟹・間人蟹を堪能する極上宿' },
      { slug: 'furusato-tax-rias-coast-ise-ebi-abalone-ocean-stay', title: '【夕映えリアス式海岸×ふるさと納税】伊勢海老・鮑料理とオーシャンビュー海宿' },
      { slug: 'furusato-tax-local-gourmet-inn-stay', title: '【ご当地グルメ特化宿×ふるさと納税】その土地の旬の味覚を部屋食で味わう名宿' },
      { slug: 'furusato-tax-three-great-wagyu-beef-gourmet-stay', title: '【日本三大和牛×ふるさと納税】松阪牛・神戸牛・近江牛を味わう美食温泉宿' }
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
    const hotelImg = h.hotelImageUrl || 'https://img.travel.rakuten.co.jp/share/HOTEL/179717/179717.jpg';
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

console.log('Finished generating all 4 articles for Round 68!');
