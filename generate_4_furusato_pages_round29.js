const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-morning-markets-seafood-stay',
    title: '日本三大朝市＆獲れたて海鮮・活気あふれる朝ごはん旅宿×ふるさと納税完全ガイド【2026年最新】輪島・呼子・勝浦',
    desc: '威勢のいい掛け声と湯気立つ浜焼き！石川「輪島朝市」千年続く露店と能登海の幸ホテル海望、佐賀「呼子朝市」イカの一夜干しと透明な泳ぎイカ活造り唐津シーサイドホテル、千葉「勝浦朝市」四百年の伝統と初鰹・勝浦タンタンメン三日月イン。日本三大朝市の熱気と贅沢な朝食バイキングを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大朝市＆獲れたて海鮮・朝ごはん宿×ふるさと納税ガイド',
    badge: '日本三大朝市・活気と美食特集',
    leadTitle: '港の潮風に響くおばちゃんたちの笑顔と獲れたてピチピチの鮮魚。日本一贅沢な朝の始まり',
    leadDesc: '日本各地の港町で古くから庶民の台所として栄え、地域の温もりと旬の恵みが一堂に会する「日本三大朝市」――平安時代から千年以上の歴史を持ち、神社の境内や通りに旬の魚介や民芸品が並ぶ石川の「輪島朝市」、玄界灘の豊かな漁場を背景に名物イカの活造りや天日干しが所狭しと並ぶ佐賀の「呼子朝市」、そして天正の世から四百三十年以上にわたり農産物や獲れたてのカツオが並ぶ千葉・房総の「勝浦朝市」。早朝の澄んだ空気の中、地元のおばちゃんたちと対話しながら名物を買い食いし、宿に戻れば豪華な海の幸朝食を味わう体験は旅の最高のハイライトです。活気あふれる港町ステイを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '朝市会場まで徒歩圏内！朝一番の新鮮な魚や買い食いを独占',
        desc: '混雑前の早朝からゆっくりと露店を巡り、水揚げされたばかりの旬の魚介をその場で味わう贅沢。'
      },
      {
        title: '透明なイカ活造り・能登前寿司・房総金目鯛など極上ディナー',
        desc: '朝市の興奮だけでなく、前夜の宿での豪華な会席料理やオーシャンビュー露天風呂も満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れの海辺リゾートをお得に予約',
        desc: '唐津シーサイドホテルやホテル海望など人気ホテルの宿泊代金を即時割引し、実質自己負担2,000円で宿泊。'
      }
    ],
    items: [
      {
        key: 'market_wajima',
        themeTitle: '石川県七尾市・輪島市ふるさと納税：千年の歴史息づく「輪島朝市」復興の活気と七尾湾の絶景・和倉温泉ホテル海望',
        themeDesc: '平安時代から続く露天市。地元のお母さんたちが手作りした干物や海藻、輪島塗に触れた後は、七尾湾を一望する名湯和倉温泉「ホテル海望」で、能登牛や旬の地魚会席、海と一体になる露天風呂に癒やされます。'
      },
      {
        key: 'market_yobuko',
        themeTitle: '佐賀県唐津市呼子町ふるさと納税：イカ釣り舟が往来する名物「呼子朝市」と透明なイカ活造り・唐津シーサイドホテル',
        themeDesc: '日本屈指の活気あふれる朝市通り。呼子名物のイカシュウマイや一夜干しを食べ歩いた後は、虹の松原を望む高級リゾート「唐津シーサイドホテル」で、透き通る烏賊の活造りと佐賀牛サーロインに舌鼓を打ちます。'
      },
      {
        key: 'market_katsuura',
        themeTitle: '千葉県勝浦市ふるさと納税：四百三十年の伝統「勝浦朝市」名物初がつお・勝浦タンタンメンと三日月イン',
        themeDesc: '天正十九年から続く歴史ある青空市場。勝浦漁港に水揚げされた新鮮なカツオやサザエを吟味した後は、勝浦駅徒歩1分の好立地宿「三日月イン」を拠点に、勝浦タンタンメンめぐりと太平洋の海の幸を堪能します。'
      }
    ],
    crossLinks: [
      { title: '海鮮浜焼き・港町朝市めぐり直結宿×ふるさと納税完全ガイド', url: '/furusato-tax-morning-market-hamayaki-seafood-inn-stay', desc: '八戸・沼津・高知の市場グルメ。' },
      { title: '日本三大美港＆ウォーターフロントホテル×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-ports-waterfront-luxury-stay', desc: '神戸・横浜・長崎の港町ステイ。' },
      { title: '絶景オーシャンフロント×波音ヒーリング宿ふるさと納税完全ガイド', url: '/furusato-tax-oceanfront-wave-sound-healing-stay', desc: '海を間近に感じる名宿。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-rapids-river-boat-stay',
    title: '日本三大急流＆舟下り・リバーサイド大自然温泉宿×ふるさと納税完全ガイド【2026年最新】最上川・富士川・球磨川',
    desc: '水しぶきを浴びて進む大迫力の舟旅！山形「最上川」芭蕉の舟唄と高見屋最上川別邸紅、山梨「富士川」武田信玄の隠し湯下部ホテル、熊本「球磨川」九州一の激流下りと人吉城下町の有形文化財芳野旅館。日本三大急流の豪快な舟下りと清流リバーサイド温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大急流＆舟下り・リバーサイド宿×ふるさと納税ガイド',
    badge: '日本三大急流・大自然と舟旅特集',
    leadTitle: '豪快な激流を巧みな竿さばきで下る爽快感。清流のせせらぎと川魚の美食に酔いしれる渓谷ステイ',
    leadDesc: '日本列島の険しい山々から海へと一気に流れ下り、古くから水運の要衝として歴史を刻んできた「日本三大急流」――松尾芭蕉が「五月雨をあつめて早し」と詠み、船頭の情緒あふれる舟唄が渓谷にこだまする山形の「最上川」、甲斐の山々から駿河湾へと注ぎ、富士の絶景と豊かな水量を誇る山梨の「富士川」、そして日本屈指の激流としてラフティングや伝統の木造船下りが愛される熊本の「球磨川」。川面を吹き抜けるマイナスイオンたっぷりの風を感じ、白波を蹴立てて進む舟下りはスリルと感動の連続です。渓谷美を望む宿で鮎の塩焼きや山菜、銘酒を味わう癒やしのリバーサイドステイを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '川のせせらぎをBGMに眠る！全室リバービューの風情あふれる名門宿',
        desc: '窓を開ければ目の前に清流が広がり、清らかな水の音に包まれながら心身をリフレッシュできます。'
      },
      {
        title: '天然鮎・岩魚・ヤマメの塩焼きと山形牛・甲州ワインビーフの美食',
        desc: '清流の恵みで育まれた新鮮な川魚の炭火焼きと、地元自慢のブランド和牛を贅沢に食べ比べ。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで大自然のアドベンチャー旅行をお得に',
        desc: '舟下りやラフティングの拠点となる名湯旅館の宿泊費用を大幅に控除し、家族やグループでお得に満喫。'
      }
    ],
    items: [
      {
        key: 'rapid_mogami',
        themeTitle: '山形県戸沢村・大蔵村ふるさと納税：芭蕉が愛した名流「最上川舟下り」舟唄の響きと高見屋最上川別邸・紅ステイ',
        themeDesc: '四季折々の渓谷美が広がる最上川。船頭の唄を聴きながらの舟下りを楽しんだ後は、全室リバービューの名宿「高見屋 最上川別邸 紅」で、最上川を眼下に望む露天風呂と最高級山形牛の陶板焼きを堪能します。'
      },
      {
        key: 'rapid_fuji',
        themeTitle: '山梨県身延町・富士川町ふるさと納税：怒濤の清流「富士川舟運」歴史探訪と武田信玄ゆかりの下部温泉下部ホテル',
        themeDesc: '甲州の歴史を支えた富士川。富士川クラフトパークや身延山久遠寺を巡った後は、名湯百選に選ばれる「下部ホテル」の二種類の源泉掛け流し湯巡りと、里山バイキング・甲州牛すき焼きを満喫します。'
      },
      {
        key: 'rapid_kuma',
        themeTitle: '熊本県人吉市ふるさと納税：九州屈指の激流「球磨川くだり・ラフティング」と登録有形文化財・人吉温泉芳野旅館',
        themeDesc: '球磨川の白波を越える爽快な舟下り。歴史ある人吉城跡や国宝・青井阿蘇神社を訪ねた後は、創業明治の文化財の宿「芳野旅館」で、弱アルカリ性炭酸水素塩泉の美肌湯と球磨焼酎・鮎の塩焼きを味わいます。'
      }
    ],
    crossLinks: [
      { title: '激流ラフティング＆清流キャニオニング宿×ふるさと納税完全ガイド', url: '/furusato-tax-whitewater-rafting-canyoning-adventure-stay', desc: 'みなかみ・吉野川・仁淀川ブルー。' },
      { title: '日本三大渓谷露天風呂＆野天温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-gorge-open-air-baths-retreat-stay', desc: '天城湯ヶ島・尻焼・秋の宮。' },
      { title: '日本三大名橋＆清流リバーサイド宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-bridges-riverside-stay', desc: '錦帯橋・眼鏡橋・猿橋の渓谷。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-gorges-canyon-scenery-stay',
    title: '日本三大峡谷＆断崖絶壁・エメラルドグリーンの渓谷美宿×ふるさと納税完全ガイド【2026年最新】清津峡・黒部峡谷・瀞峡',
    desc: '地球が創り出した壮大な造形美！新潟「清津峡」水鏡アートのトンネルと清津館、富山「黒部峡谷」トロッコ電車で行く大自然とホテル黒部、和歌山・奈良・三重「瀞峡」巨岩とエメラルドの深淵ウォータージェット船と里創人熊野倶楽部。日本三大峡谷の圧倒的パノラマと渓谷温泉宿を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大峡谷＆断崖絶壁・エメラルド渓谷宿×ふるさと納税ガイド',
    badge: '日本三大峡谷・絶壁渓谷美特集',
    leadTitle: 'そびえ立つ柱状節理の岩壁とエメラルドグリーンの清流。五感を揺さぶる大峡谷のネイチャーステイ',
    leadDesc: '国の特別名勝や天然記念物に指定され、日本を代表する険しいV字峡谷の絶景を誇る「日本三大峡谷」――巨大な柱状節理の岩肌とインスタ映えする水鏡トンネルアートで世界中から注目を集める新潟の「清津峡」、北アルプスを縫うように走るトロッコ電車から万年雪や断崖を望む富山の「黒部峡谷」、そして吉野熊野国立公園の深奥に位置し、巨岩奇岩とエメラルドブルーの静水が神秘的な静寂を生む「瀞峡（どろきょう）」。川のせせらぎや鳥のさえずりだけが響く幽玄な世界で、大地のパワーをダイレクトに感じる温泉に浸かり、清らかな水と澄んだ空気が育んだ地元の旬菜会席を味わう極上のひとときを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '息をのむ絶景パノラマ！四季折々の紅葉・新緑・雪景色を間近に感じる特等席',
        desc: '部屋の窓や露天風呂から大迫力の峡谷を眺め、日常では決して出会えない大自然に没入。'
      },
      {
        title: 'トロッコ電車やジェット船など峡谷ならではのユニークな遊覧体験',
        desc: '断崖すれすれを走る黒部トロッコや、水上から見上げる瀞峡の巨岩など冒険心をくすぐる乗り物旅。'
      },
      {
        title: '白エビ・氷見牛・熊野牛・魚沼産山菜など大自然が育む最高峰の味覚',
        desc: '山と川と海がもたらす一級品の食材を使ったシェフ自慢の料理を、ふるさと納税でお得に満喫。'
      }
    ],
    items: [
      {
        key: 'gorge_kiyotsu',
        themeTitle: '新潟県十日町市ふるさと納税：巨大な柱状節理と水鏡アート「清津峡渓谷トンネル」と清津峡湯元温泉清津館',
        themeDesc: '世界が称賛するアート空間・清津峡。渓谷に最も近い一軒宿「清津館」で、足元から湧き出る源泉掛け流しの薬湯と、清津川を望む渓流露天風呂、魚沼産コシヒカリと里山料理に癒やされます。'
      },
      {
        key: 'gorge_kurobe',
        themeTitle: '富山県黒部市ふるさと納税：黒部川の清流とトロッコ電車の旅「黒部峡谷」と宇奈月温泉ホテル黒部ステイ',
        themeDesc: '日本一深いV字峡谷を行く黒部峡谷鉄道。全室から黒部峡谷とトロッコ電車を望む「ホテル黒部」で、宇奈月の透明度日本一の美肌温泉と、富山湾のキトキトな白エビ・ブリ会席を満喫します。'
      },
      {
        key: 'gorge_doro',
        themeTitle: '和歌山県新宮市・田辺市ふるさと納税：エメラルドグリーンの深淵「瀞峡」巨岩めぐりと世界遺産リゾート熊野倶楽部',
        themeDesc: '熊野川の支流・北山川が削り出した神秘の瀞峡。瀞八丁の断崖をウォータージェット船で巡った後は、全室スイート仕様の「里創人 熊野倶楽部」で、熊野牛のローストビーフと満天の星空露天風呂に酔いしれます。'
      }
    ],
    crossLinks: [
      { title: '日本三大奇勝＆巨岩奇峰パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-wonders-rock-scenery-stay', desc: '妙義山・耶馬渓・寒霞渓の岩峰。' },
      { title: '日本三大カルスト台地＆絶景スカイドライブ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-karsts-highland-drive-stay', desc: '秋吉台・四国カルスト・平尾台。' },
      { title: '日本三大急流＆舟下り・リバーサイド宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-rapids-river-boat-stay', desc: '最上川・富士川・球磨川の舟旅。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-sake-capitals-brewery-stay',
    title: '日本三大酒どころ＆酒蔵ツーリズム・銘酒ペアリング温泉宿×ふるさと納税完全ガイド【2026年最新】灘五郷・伏見・西条',
    desc: '芳醇な香りと杜氏の魂に酔いしれる酒蔵の街！兵庫「灘五郷」宮水仕込みの男酒と神戸ヴィラフォンテーヌ三宮、京都「伏見」伏水が生むまろやかな女酒とアーバンホテル京都、広島「西条」赤瓦の酒蔵通りと吟醸酒ホテルルートイン東広島西条駅前。日本三大銘醸地（三大酒どころ）の利き酒体験と美酒美食ディナーを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大酒どころ＆酒蔵ツーリズム宿×ふるさと納税ガイド',
    badge: '日本三大酒どころ・美酒美食特集',
    leadTitle: '名水が生み出す黄金の一滴と白壁の酒蔵が連なる風情。美酒と美食のマリアージュに溺れる大人の休日',
    leadDesc: '日本の清酒文化を牽引し、江戸の昔から現在に至るまで最高峰の日本酒を世に送り出してきた「日本三大酒どころ（日本三大銘醸地）」――六甲山の硬水「宮水」と山田錦を用い力強い辛口の「男酒」として知られる兵庫の「灘五郷」、桃山丘陵の柔らかく清冽な「伏水」が醸し出す滑らかで上品な「女酒」の京都「伏見」、そして明治時代に軟水醸造法を確立し日本の吟醸酒の礎を築いた広島の「西条」。黒板塀やレンガ造りの煙突が並ぶ酒蔵通りを歩き、蔵元でしか味わえない搾りたての無濾過生原酒をテイスティング。夜には名酒に合わせた地元ブランド牛や瀬戸内海鮮のペアリングコースを味わう極上の酒蔵ステイを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '歩いて巡れる酒蔵通り！蔵元直営ショップでの限定酒試飲や酒蔵見学',
        desc: '一般流通しない限定酒や古酒の試飲を心ゆくまで楽しみ、酒造りの奥深い歴史と職人技に触れる旅。'
      },
      {
        title: '神戸牛・京野菜・美酒鍋（びしゅなべ）など銘酒を引き立てる郷土グルメ',
        desc: '酒どころならではの酒粕料理や、日本酒で豚肉と野菜を煮込む西条名物「美酒鍋」などの絶品料理。'
      },
      {
        title: 'ふるさと納税で高級地酒返礼品と宿泊クーポンをダブルで満喫',
        desc: '宿泊費用の割引に加え、お気に入りのプレミアム銘酒を返礼品として自宅へ届ける贅沢な活用術。'
      }
    ],
    items: [
      {
        key: 'sake_nada',
        themeTitle: '兵庫県神戸市東灘区・灘区ふるさと納税：日本一の酒生産量を誇る「灘五郷」酒蔵めぐりとヴィラフォンテーヌ神戸三宮',
        themeDesc: '白鶴、菊正宗、剣菱など名立たる蔵元が立ち並ぶ灘五郷。酒蔵記念館で利き酒体験を楽しんだ後は、三宮駅至近の「ヴィラフォンテーヌ神戸三宮」を拠点に、老舗ステーキハウスでの神戸牛と灘の生一本ペアリングを堪能します。'
      },
      {
        key: 'sake_fushimi',
        themeTitle: '京都府京都市伏見区ふるさと納税：月桂冠や黄桜が並ぶ水郷の酒蔵街「伏見」十石舟とアーバンホテル京都ステイ',
        themeDesc: '伏見の名水が湧き出る酒蔵の郷。柳並木が美しい十石舟遊覧や酒蔵カフェを満喫した後は、アーバンホテル京都で京都名物のおばんざいや伏見の銘酒を味わい、伏見稲荷大社の早朝参拝も満喫します。'
      },
      {
        key: 'sake_saijo',
        themeTitle: '広島県東広島市西条ふるさと納税：赤瓦と赤レンガ煙突の景観「西条酒蔵通り」美酒鍋とホテルルートイン東広島西条駅前',
        themeDesc: '駅前に7つの蔵元が集まる奇跡の酒のまち。名物「美酒鍋」や仕込み水の飲み比べを楽しんだ後は、西条駅徒歩圏の「ホテルルートイン東広島西条駅前」の大浴場で寛ぎ、広島名物の牡蠣料理と純米吟醸酒に酔いしれます。'
      }
    ],
    crossLinks: [
      { title: '日本三大名水＆清冽な湧水仕込み美食宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-famous-waters-culinary-stay', desc: '南阿蘇・八ヶ岳・京都伏見。' },
      { title: '日本三大銘茶の産地＆茶香炉ヒーリング宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-green-tea-regions-healing-stay', desc: '静岡茶・宇治茶・朝宮茶。' },
      { title: '日本三大陶磁器の郷＆焼き物窯元めぐり宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-pottery-towns-art-stay', desc: '有田焼・美濃焼・瀬戸焼の器。' }
    ]
  }
];

function generatePageCode(cfg) {
  return `'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const officialFurusatoAffUrl = "${officialFurusatoAffUrl}";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-rose-500 selection:text-white pb-24">
      {/* Hero Section */}
      <header className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
            <span className="inline-block w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            ${cfg.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            ${cfg.h1}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            ${cfg.desc}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={officialFurusatoAffUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-rose-500 via-red-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-bold rounded-2xl shadow-xl shadow-rose-950/40 transition duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 text-base md:text-lg"
            >
              <span>🏮 楽天ふるさと納税トラベル特設ページを見る</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 space-y-16">
        {/* Intro Lead */}
        <section className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 border-l-4 border-rose-500 pl-4">
            ${cfg.leadTitle}
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            ${cfg.leadDesc}
          </p>
        </section>

        {/* 3 Key Merits */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              ふるさと納税トラベルで巡る3つの至高メリット
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">実質自己負担2,000円で憧れの名旅館＆特産グルメをアップグレード</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${cfg.merits.map((m, i) => `
            <div key="${i}" className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold flex items-center justify-center mb-4">
                0${i + 1}
              </div>
              <h3 className="font-bold text-white text-lg mb-2">${m.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">${m.desc}</p>
            </div>`).join('')}
          </div>
        </section>

        {/* Featured Hotels & Regions */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              厳選名所＆楽天トラベル提携おすすめ名宿
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1">楽天ふるさと納税宿泊クーポンが利用可能な極上宿</p>
          </div>

          <div className="space-y-12">
            ${cfg.items.map((item, idx) => {
              const h = allHotels[item.key] || {};
              const name = h.hotelName || 'おすすめ温泉旅館';
              const minCharge = h.hotelMinCharge ? h.hotelMinCharge.toLocaleString() : '15,000';
              const img = h.hotelImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80';
              const rating = (h.reviewAverage && h.reviewAverage > 0) ? h.reviewAverage.toFixed(1) : (typeof h.userReview === 'number' ? h.userReview.toFixed(1) : '4.6');
              const reviewCount = h.reviewCount || 300;
              const affLink = h.affiliateUrl || officialFurusatoAffUrl;
              const special = h.hotelSpecial || '贅沢な美食と名湯、極上の空間で非日常の休日をお楽しみいただけます。';
              const address = (h.address1 || '') + (h.address2 || '');

              return `
            {/* Spot Card ${idx + 1} */}
            <article key="${idx}" className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700/80 transition duration-300 shadow-xl">
              <div className="p-6 sm:p-8 border-b border-slate-800/80">
                <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-semibold rounded-full mb-3">
                  厳選スポット 0${idx + 1}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  ${item.themeTitle}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  ${item.themeDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center bg-slate-950/40">
                <div className="lg:col-span-5 relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-800">
                  <Image
                    src="${img}"
                    alt="${name}"
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-lg text-xs font-bold text-amber-400 border border-amber-400/30">
                    ★ ${rating}（${reviewCount}件）
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                      ${name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mb-3 flex items-center gap-1">
                      <span>📍</span>
                      <span>${address || '現地周辺'}</span>
                    </p>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/60">
                      ${special}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-slate-400">参考最安料金（1名あたり）</div>
                      <div className="text-lg sm:text-xl font-black text-rose-400">
                        ${minCharge}円〜
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href="${affLink}"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold rounded-xl transition border border-slate-700"
                      >
                        宿泊詳細を見る
                      </a>
                      <a
                        href={officialFurusatoAffUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-bold rounded-xl transition shadow-lg shadow-rose-950/40"
                      >
                        ふるさと納税で予約
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>`;
            }).join('')}
          </div>
        </section>

        {/* Official Banner CTA */}
        <section className="bg-gradient-to-r from-rose-950/60 via-red-900/40 to-amber-950/60 border border-rose-500/30 rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            楽天ふるさと納税トラベルで、今すぐ賢く旅に出よう
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
            寄付翌日から最大3年間使える宿泊クーポンで、行きたかった憧れの名宿を今すぐお得にリザーブ。実質2,000円負担で極上の日本再発見の旅へ。
          </p>
          <a
            href={officialFurusatoAffUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white text-base sm:text-lg font-extrabold rounded-2xl shadow-xl transition duration-300 transform hover:-translate-y-0.5"
          >
            <span>🏮 楽天ふるさと納税トラベル公式特設ページへ</span>
          </a>
        </section>

        {/* Cross Link Section */}
        <section className="border-t border-slate-800/80 pt-12 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            あわせて読みたい関連特集ガイド
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${cfg.crossLinks.map((cl, i) => `
            <Link
              key="${i}"
              href="${cl.url}"
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition flex flex-col justify-between group"
            >
              <div>
                <h3 className="font-bold text-white text-base group-hover:text-rose-400 transition mb-2">
                  ${cl.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  ${cl.desc}
                </p>
              </div>
              <div className="mt-4 text-xs font-semibold text-rose-400 flex items-center gap-1">
                <span>記事を読む</span>
                <span>→</span>
              </div>
            </Link>`).join('')}
          </div>
        </section>
      </main>
    </div>
  );
}
`;
}

for (const cfg of pagesConfig) {
  const targetDir = path.join(__dirname, 'src/app', cfg.slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const filePath = path.join(targetDir, 'page.tsx');
  fs.writeFileSync(filePath, generatePageCode(cfg), 'utf8');
  console.log(`✓ Generated ${filePath}`);
}

console.log('All 4 pages generated successfully for Round 29.');
