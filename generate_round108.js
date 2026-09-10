const fs = require('fs');
const path = require('path');

const round108Hotels = JSON.parse(fs.readFileSync('round108_hotels.json', 'utf8'));

// Format hotel lookup map
const allHotels = round108Hotels;

const articles = [
  {
    slug: 'furusato-tax-kanazawa-kenrokuen-gourmet-stay',
    title: '【金沢×ふるさと納税】兼六園の美景＆近江町市場の海の幸！加賀百万石の名門ホテル特集｜ホテル日航金沢・白鳥路山楽・THE HOTEL SANRAKU',
    desc: '北陸新幹線で東京から最速約2時間15分！加賀百万石の城下町・石川県金沢市を楽天ふるさと納税でお得に贅沢ステイ。金沢駅東口直結のランドマーク「ホテル日航金沢」、兼六園すぐ隣で天然温泉が湧くクラシック宿「金沢白鳥路 ホテル山楽」、近江町市場徒歩すぐの中庭庭園ホテル「THE HOTEL SANRAKU KANAZAWA」を徹底比較。金沢市トラベルクーポン活用術を網羅。',
    keywords: '金沢 ホテル ふるさと納税,ホテル日航金沢 ふるさと納税,金沢白鳥路ホテル山楽 クーポン,THE HOTEL SANRAKU KANAZAWA 宿泊,金沢市 ふるさと納税 旅行',
    targetCity: '石川県金沢市（兼六園・ひがし茶屋街）',
    leadTitle: '雪吊りの兼六園と紅殻格子の茶屋街——加賀百万石の美意識と日本海の極上鮮魚を味わう雅な古都ステイ',
    leadP1: '石川県の中央部に位置し、前田家加賀百万石の栄華を今に伝える城下町・金沢。国の特別名勝「兼六園」では春の桜、初夏のかきつばた、秋の紅葉、そして冬の風物詩「雪吊り」と四季を通じて日本庭園の最高峰の景観が広がります。金沢城公園の壮麗な菱櫓・五十間長屋や、石畳に格子戸が連なる「ひがし茶屋街」「主計町茶屋街」、現代アートの発信地「金沢21世紀美術館」など、伝統とモダンが美しく共存する日本有数の文化都市です。',
    leadP2: '金沢滞在の大きな楽しみは、「金沢の台所」近江町市場から届く新鮮なのどぐろ、加能ガニ、甘エビ、香箱ガニ、ブリなどの日本海の幸と、伝統の加賀野菜を取り入れた治部煮などの本格加賀料理。石川県金沢市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れのハイクラスホテルへお得に宿泊でき、観光・グルメ・文化体験を最高に贅沢にアップグレードできます。',
    hotelsKey: 'furusato-tax-kanazawa-kenrokuen-gourmet-stay',
    hotelItems: [
      {
        key: 'kanazawa_nikko',
        tagline: 'JR金沢駅東口地下直結・地上30階の超高層ランドマーク！金沢の街並みを一望するスカイビューと朝食日本一クラスの美食',
        detailTitle: 'ホテル日航金沢 —— 北陸随一の高層ホテル。地上130mからのパノラマと一流シェフが織りなす極上ダイニング',
        features: [
          { title: 'JR金沢駅東口から地下道直結で徒歩わずか3分の圧倒的利便性', desc: '新幹線改札から雨や雪に濡れずにチェックイン。金沢駅バスターミナルも目の前で、市内観光の拠点として最高峰です。' },
          { title: '全客室が17階以上の高層階に位置する贅沢なパノラマビュー', desc: '客室の大きな窓から金沢市街や日本海、白山連峰を一望。夜には宝石箱のような夜景が広がります。' },
          { title: '楽天トラベル朝食フェスティバル上位の豪華朝食バイキング', desc: '名物の車麩フレンチトーストや近江町市場直送の刺身、郷土料理治部煮など、贅を尽くした朝の食体験が評判です。' }
        ],
        reviewPoints: '楽天トラベル評価4.70点、口コミ7000件超。「駅直結で立地最高、お部屋からの眺望と朝食の美味しさが異次元」「スタッフのサービスが洗練されていて金沢ならここ一択」と絶賛。'
      },
      {
        key: 'kanazawa_sanraku_hakuchoro',
        tagline: '兼六園・金沢城公園へ徒歩約3分！大正ロマンのステンドグラスと金沢市内屈指の美肌天然温泉',
        detailTitle: '金沢白鳥路 ホテル山楽 —— 金沢城の麓に佇むクラシックホテル。自家源泉の琥珀色天然温泉と加賀会席',
        features: [
          { title: '金沢城公園に隣接し兼六園や21世紀美術館へも徒歩すぐの好立地', desc: '早朝の無料開園時の兼六園散歩に最適。緑豊かな白鳥路の遊歩道に面し、静寂な大人の時間を過ごせます。' },
          { title: '敷地内から湧出する炭酸水素塩泉の自家源泉「美肌の湯」', desc: '金沢市街地では希少な本格天然温泉。とろりとした琥珀色のお湯が旅の疲れを優しく解きほぐします。' },
          { title: '大正ロマン薫るステンドグラスのロビーと伝統の加賀会席料理', desc: '九谷焼や金箔をあしらった気品ある空間。のどぐろや能登牛、加賀野菜を贅沢に使った料理を堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.55点、口コミ3400件超。「兼六園がすぐ隣で観光に最高、天然温泉がお肌すべすべになった」「クラシカルなステンドグラスが美しくお料理も絶品」と大好評。'
      },
      {
        key: 'kanazawa_sanraku_new',
        tagline: '近江町市場まで徒歩1分！四季を映す中庭日本庭園の滝と贅を尽くした全室クラシックスイート仕様',
        detailTitle: 'THE HOTEL SANRAKU KANAZAWA —— 伝統とモダンが美しく融合。中庭の滝を眺めるクラブラウンジと美食',
        features: [
          { title: 'ホテル中央に広がる約120坪の中庭日本庭園と流れる滝の借景', desc: '客室やロビーから眺める四季折々の庭園風景。夜のライトアップされた水と緑のコントラストが幻想的です。' },
          { title: '近江町市場まで徒歩わずか1分・ひがし茶屋街も徒歩圏内', desc: '市場での海鮮丼の朝食や食べ歩き、夜の割烹巡りにも抜群の立地。金沢の食文化を間近に体感できます。' },
          { title: '専任スタッフがもてなす優雅なプレミアクラブラウンジ', desc: 'クラブフロア宿泊者限定のラウンジ。金沢銘菓や地酒、カクテルタイムのオードブルを心ゆくまで楽しめます。' }
        ],
        reviewPoints: '楽天トラベル評価4.70点、口コミ極めて高評価。「近江町市場の目の前で便利、中庭の滝を見ながら過ごすラウンジが最高」「お部屋の内装が豪華でスタッフも親切」とリピーター続出。'
      }
    ],
    areaGuide: {
      title: '兼六園・金沢城公園＆ひがし茶屋街・近江町市場観光ガイド',
      points: [
        { name: '特別名勝「兼六園」の六勝（宏大・幽邃・人力・蒼古・水泉・眺望）', text: '徽軫灯籠（ことじとうろう）や霞ヶ池。冬の雪吊りや初夏のかきつばた、秋の紅葉など、どの季節に訪れても息をのむ名園の美に出会えます。' },
        { name: 'ひがし茶屋街の紅殻格子（ベンガラ）と金箔ソフトクリーム', text: '江戸時代の茶屋建築が美しく残る重要伝統的建造物群保存地区。金箔貼り体験や、お茶屋美術館の見学、町家カフェ巡りが人気です。' },
        { name: '「金沢市民の台所」近江町市場での日本海海鮮グルメ食べ歩き', text: '約170店舗がひしめく活気あふれる市場。新鮮なウニや牡蠣の立ち食い、豪華海鮮丼、のどぐろの塩焼きを心ゆくまで堪能できます。' }
      ]
    },
    furusatoStepTitle: '石川県金沢市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「石川県金沢市」クーポンを獲得', desc: '楽天ふるさと納税で金沢市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 北陸新幹線で東京駅から約2時間15分、敦賀経由で関西からも快適', desc: '北陸新幹線「かがやき」で一直線。3年間の有効期間内で、冬のカニシーズンや春の兼六園桜、秋の紅葉に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: 'ホテル日航金沢、白鳥路ホテル山楽、THE HOTEL SANRAKUなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-okinawa-naha-kokusaidori-luxury-stay',
    title: '【沖縄・那覇×ふるさと納税】国際通りの活気＆屋外プールリゾート！天然温泉スパ特集｜ハイアット那覇・コレクティブ・ロワジールスパタワー',
    desc: '那覇空港からゆいレールで約10〜15分！沖縄の玄関口・沖縄県那覇市を楽天ふるさと納税でお得に贅沢ステイ。国際通り徒歩3分のハイエンド「ハイアット リージェンシー 那覇 沖縄」、国際通りのど真ん中に誕生したフルスペックリゾート「ホテル コレクティブ」、地下から湧出する天然温泉「ロワジール スパタワー 那覇」を徹底比較。那覇市トラベルクーポン活用術を網羅。',
    keywords: '那覇 ホテル ふるさと納税,ハイアット那覇 クーポン,ホテルコレクティブ ふるさと納税,ロワジールスパタワー那覇 宿泊,那覇市 ふるさと納税 旅行',
    targetCity: '沖縄県那覇市（国際通り・首里）',
    leadTitle: 'ガジュマルの木陰と国際通りの熱気、首里城の朱色の祈り——都会の洗練と南国の極上オアシスに浸る那覇ステイ',
    leadP1: '沖縄県の政治・経済・交通の中枢であり、琉球王国の歴史が息づく街・那覇。約1.6kmにわたって土産物店や沖縄料理店、カフェが立ち並ぶ「国際通り（奇跡の1マイル）」や、色鮮やかな魚や南国フルーツが並ぶ「第一牧志公設市場」、石畳の坂道が風情ある「首里城公園」など、沖縄文化の熱気と魅力が凝縮しています。那覇空港からゆいレール（モノレール）で中心街へ直結する世界屈指の都市アクセスの良さも誇ります。',
    leadP2: '那覇のシティリゾート滞在の大きな魅力は、昼間は観光やビーチへ出かけ、夕暮れからはホテルの屋外プールやクラブラウンジで夕日を眺め、夜は国際通りの民謡居酒屋やステーキハウスへ繰り出せる最高の利便性。さらに地下深くから湧出する含ヨウ素天然温泉でリフレッシュする極上の時間も待っています。沖縄県那覇市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れのハイクラスホテルへお得に宿泊でき、観光やワーケーションが一段と贅沢になります。',
    hotelsKey: 'furusato-tax-okinawa-naha-kokusaidori-luxury-stay',
    hotelItems: [
      {
        key: 'naha_hyatt',
        tagline: '国際通りまで徒歩3分の好立地！屋外プール＆最上階18階クラブラウンジを備えた最高峰シティホテル',
        detailTitle: 'ハイアット リージェンシー 那覇 沖縄 —— 都会の真ん中に広がる洗練のオアシス。開放感あふれるプールと最上階ダイニング',
        features: [
          { title: '国際通りの喧騒から少し離れた閑静で上質なロケーション', desc: '壺屋やちむん通りへも徒歩すぐ。観光やショッピングに最高の立地でありながら、館内は静寂と品格に満ちています。' },
          { title: '開放的な屋外ジェットバス付きプールとフィットネスセンター', desc: '那覇の心地よい風を感じる屋外プール（季節営業）。都会にいながら本格的なリゾート気分を味わえます。' },
          { title: '最上階18階「MILANO｜GRILL」での本格イタリアンディナー', desc: '那覇の煌めく夜景を見下ろす特等席。ローストビーフや厳選牛、近海魚のグリルをワインとともに優雅に堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.44点、口コミ2000件超。「国際通りが近くて便利、最上階のラウンジからの景色が最高」「スタッフの気配りが素晴らしく、お部屋のベッドも快適」と絶賛。'
      },
      {
        key: 'naha_collective',
        tagline: '国際通りのど真ん中に誕生したフルスペックリゾート！屋外プール・サウナ付き大浴場完備',
        detailTitle: 'ホテル コレクティブ —— 国際通りを眼下に見下ろす最新鋭のオアシス。広々客室と充実のウェルネス施設',
        features: [
          { title: '国際通りの中心に位置し雨の日でも買い物・食事へ直行可能', desc: 'ショッピングや食べ歩きにこれ以上ない立地。ホテルを出ればすぐに賑やかな国際通りの活気にアクセスできます。' },
          { title: '那覇の市街地を一望する25m屋外プールとサウナ・大浴場', desc: '屋外プールやスチームサウナ、ジェットバスを完備。街の真ん中で優雅にととのう極上のリラクゼーションです。' },
          { title: '全室30㎡以上のゆとりある客室と最新のスマート設備', desc: '洗練されたモダンインテリアに大型バスタブと独立洗面台。高い防音性で外の喧騒を感じさせない快適な空間です。' }
        ],
        reviewPoints: '楽天トラベル評価4.64点、口コミ高評価。「国際通り直結で立地が最強、大浴場やプールもあって最高だった」「お部屋が広くて綺麗、朝食ビュッフェのレベルが高い」と大人気。'
      },
      {
        key: 'naha_loisir',
        tagline: '那覇市内では希少な地下約8,000万年前の化石海水天然温泉！全室バルコニー付きのベイサイドリゾート',
        detailTitle: 'ロワジール スパタワー 那覇 —— 空港から車で7分の極上温泉リゾート。天然温泉「三重城温泉」と充実のスパ',
        features: [
          { title: '地下深くから湧き出す本格的な含ヨウ素ナトリウム塩化物泉', desc: '保温・美肌効果抜群の本格天然温泉。タラソテラピーを取り入れた贅沢なスパ施設で心身ともにリフレッシュできます。' },
          { title: '那覇港のベイビューと夕暮れのサンセットを望むバルコニー', desc: '客室のプライベートバルコニーから眺める海と船の往来。リゾート感あふれる開放的な滞在を楽しめます。' },
          { title: '那覇空港から車でわずか約7分の抜群のアクセス環境', desc: '到着日や帰国日の宿泊にも最適。ホテル内には屋内温水プールや多彩なレストランが揃っています。' }
        ],
        reviewPoints: '楽天トラベル評価4.33点、口コミ高評価。「那覇で本格的な天然温泉に入れるのが素晴らしい」「空港から近くて移動が楽、お部屋も広くてくつろげた」とシニア・家族連れに人気。'
      }
    ],
    areaGuide: {
      title: '国際通り・第一牧志公設市場＆首里城公園・やちむん通り観光ガイド',
      points: [
        { name: '国際通り散策＆第一牧志公設市場の「持ち上げ（持ち込み調理）」', text: '色鮮やかなイラブチャーや夜光貝、石垣牛。市場の1階で購入した新鮮食材を2階の食堂ですぐに調理して味わう名物体験が人気です。' },
        { name: '世界遺産「首里城跡」と守礼門・金城町石畳道', text: '琉球王国の栄華を伝える歴史の舞台。復興が進む首里城正殿や、樹齢数百年の大アカギが立つ風情豊かな石畳の散策が楽しめます。' },
        { name: '壺屋やちむん通り（沖縄の伝統陶器工房めぐり）', text: '赤瓦の屋敷や登り窯が残る石畳の通り。個性豊かな陶芸作家の工房やショップが並び、自分だけのお気に入りの器探しに最適です。' }
      ]
    },
    furusatoStepTitle: '沖縄県那覇市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「沖縄県那覇市」クーポンを獲得', desc: '楽天ふるさと納税で那覇市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 那覇空港からゆいレールやタクシーですぐのアクセス', desc: '羽田・成田・関西など全国主要空港から直行便多数。3年間の有効期間内で、夏休みや冬のプロ野球キャンプ、春の海開きに合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: 'ハイアット那覇、ホテルコレクティブ、ロワジールスパタワーなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-tokyo-ginza-luxury-shopping-stay',
    title: '【東京・銀座×ふるさと納税】歌舞伎座・ショッピング＆極上スカイビュー！大人の銀座ステイ特集｜三井ガーデン銀座プレミア・ミレニアム・モントレ',
    desc: '日本一の格式とハイブランドが輝く街・東京都中央区「銀座」を楽天ふるさと納税でお得に贅沢ステイ！銀座随一の高層眺望とビューバスを誇る「三井ガーデンホテル銀座プレミア」、銀座四丁目交差点・歌舞伎座徒歩すぐの「ミレニアム 三井ガーデンホテル 東京」、パリのアパルトマン風「ホテルモントレ銀座」を徹底比較。中央区ふるさと納税トラベルクーポン活用術を網羅。',
    keywords: '銀座 ホテル ふるさと納税,三井ガーデンホテル銀座プレミア クーポン,ミレニアム銀座 ふるさと納税,ホテルモントレ銀座 宿泊,中央区 ふるさと納税 旅行',
    targetCity: '東京都中央区（銀座・築地）',
    leadTitle: '銀座四丁目交差点の賑わいと柳の揺れる並木道、洗練のハイブランド街——日本の最高峰で味わう優雅なショッピングと極上ナイトビュー',
    leadP1: '東京都中央区、明治のガス灯の時代から日本の最先端トレンドと文化を発信し続けてきた街「銀座」。銀座通り（中央通り）には世界的な高級ブランドの旗艦店や老舗百貨店が建ち並び、週末の「歩行者天国」は世界中の人々で賑わいます。伝統芸能の殿堂「歌舞伎座」や、新旧のカルチャーが交差する「GINZA SIX」、活気あふれる築地場外市場も徒歩圏内に位置し、美食と文化の最高峰が集結しています。',
    leadP2: '銀座に泊まる最大の魅力は、ショッピングや観劇、銀座の名店でのディナーを時間を気にせず心ゆくまで満喫できる大人の贅沢。客室の窓やビューバスから東京タワーや汐留の夜景を見下ろしながら過ごす時間は格別の非日常です。東京都中央区へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れのデザインホテルや高層ホテルへお得に宿泊でき、特別な記念日やご褒美ステイが最高にエレガントになります。',
    hotelsKey: 'furusato-tax-tokyo-ginza-luxury-shopping-stay',
    hotelItems: [
      {
        key: 'ginza_mitsuipremier',
        tagline: '銀座随一の高層階ホテル！客室ビューバスから東京タワーやベイエリアの煌めく夜景を一望',
        detailTitle: '三井ガーデンホテル銀座プレミア —— 地上16階ロビーからの息をのむパノラマ。東京タワーを望む天空のステイ',
        features: [
          { title: '全客室が17階以上の高層階に位置する銀座唯一のタワーホテル', desc: '大きなピクチャーウィンドウから広がる東京タワーや汐留の摩天楼。都会の煌めく夜景を独り占めできます。' },
          { title: '夜景を眺めながらバスタブに浸かれる人気の「ビューバス」客室', desc: '開放感あふれるガラス張りのバスルーム。ゆったりとお湯に浸かりながら贅沢なバスタイムを楽しめます。' },
          { title: '16階「RISTORANTE E\'VOLTA il Cielo」での極上イタリアン', desc: '厳選された日本の食材と本場イタリアの技法が融合したコース。東京の夜景を眺めながら優雅なディナーを味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.45点、口コミ3800件超。「ビューバスから見える東京タワーの夜景が最高にロマンチック」「銀座の買い物にも便利でスタッフの接客も洗練されている」とカップル・記念日に大人気。'
      },
      {
        key: 'ginza_millennium',
        tagline: '銀座四丁目交差点・歌舞伎座まで徒歩2分！三越や松屋でのショッピングに最高の好立地ホテル',
        detailTitle: 'ミレニアム 三井ガーデンホテル 東京 —— 銀座の中心に暮らすような滞在。洗練されたモダンデザインと快適空間',
        features: [
          { title: '銀座駅や東銀座駅から徒歩1〜2分の圧倒的なアクセスの良さ', desc: 'ショッピングや歌舞伎鑑賞の合間に荷物を置きに戻れる便利さ。雨の日も地下鉄出口からすぐです。' },
          { title: '全室バストイレ別の独立設計と上質なインテリア', desc: '機能性と美しさを両立した落ち着きある客室。快適なシモンズ製ベッドが旅の疲れを心地よく癒やします。' },
          { title: '地下1階レストランでの彩り豊かな朝食ビュッフェ', desc: '新鮮な野菜や焼きたてパン、体に優しい和洋メニューが充実。清々しい朝のスタートを迎えることができます。' }
        ],
        reviewPoints: '楽天トラベル評価3.83点、利便性抜群。「歌舞伎座のすぐそばで観劇に最高だった」「銀座の真ん中でどこに行くにも便利、お部屋も清潔で快適」と好評。'
      },
      {
        key: 'ginza_monterey',
        tagline: '銀座の柳通りに面した欧州クラシカルホテル！パリのアパルトマンを思わせるアンティークな空間',
        detailTitle: 'ホテルモントレ銀座 —— 喧騒を離れた落ち着きの隠れ家。ヨーロッパの気品と本格フレンチレストラン',
        features: [
          { title: 'ヨーロッパのクラシックホテルをイメージしたお洒落な外観と内装', desc: '木製家具や wrought iron の装飾が美しい館内。異国情緒あふれる優雅な雰囲気が大人の滞在を彩ります。' },
          { title: '銀座一丁目駅から徒歩1分・有楽町や東京駅も徒歩圏内', desc: '静かな通りに面しながら主要駅へ好アクセス。銀座の隠れ家レストランやバー巡りにも最適です。' },
          { title: '本格フランス料理「エスカーレ」での伝統のディナーコース', desc: '旬の食材を活かした繊細なフレンチと厳選ワイン。落ち着いたレストラン空間で至福のひとときを過ごせます。' }
        ],
        reviewPoints: '楽天トラベル評価4.12点、口コミ2900件超。「クラシカルなヨーロッパ調の内装が可愛くて落ち着く」「銀座駅からも近くて静かでコスパも良い」と女子旅やビジネスに好評。'
      }
    ],
    areaGuide: {
      title: '銀座中央通り・GINZA SIX＆歌舞伎座・築地場外市場観光ガイド',
      points: [
        { name: '銀座通り（中央通り）でのショッピング＆歩行者天国（土日祝）', text: '国内外のトップブランドが並ぶメインストリート。休日の歩行者天国では、オープンカフェでくつろぎながら優雅な銀ぶらを楽しめます。' },
        { name: '伝統芸能の最高峰「歌舞伎座」での観劇と木挽町広場', text: '桃山様式の壮麗な殿堂。一幕見席での手軽な観劇や、地下の木挽町広場での歌舞伎グッズ・銘菓のお土産探しが人気です。' },
        { name: '築地場外市場での朝獲れ海鮮丼＆玉子焼き食べ歩き', text: '銀座から徒歩圏内のグルメタウン。名物の甘い焼き立て玉子焼きや、新鮮なマグロ丼、海鮮串焼きの食べ歩きが楽しめます。' }
      ]
    },
    furusatoStepTitle: '東京都中央区ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「東京都中央区」クーポンを獲得', desc: '楽天ふるさと納税で中央区を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 東京メトロ銀座線・日比谷線・有楽町線でアクセス', desc: '東京駅から丸ノ内線で1駅、羽田空港からも都営浅草線直通でスムーズ。3年間の有効期間内で、記念日や観劇、ショッピングに合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '三井ガーデンホテル銀座プレミア、ミレニアム銀座、ホテルモントレ銀座などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-osaka-umeda-luxury-skyview-stay',
    title: '【大阪・梅田×ふるさと納税】JR大阪駅直結＆地上摩天楼夜景！天下の台所美食特集｜リッツカールトン大阪・インターコンチネンタル・ヒルトン',
    desc: '西日本最大のメガターミナル・大阪府大阪市北区「梅田（キタ）」を楽天ふるさと納税でお得に贅沢ステイ！18世紀英国貴族の邸宅の風格「ザ・リッツ・カールトン大阪」、グランフロント大阪直結のスタイリッシュ「インターコンチネンタルホテル大阪」、駅前ランドマーク「ヒルトン大阪」を徹底比較。大阪市ふるさと納税トラベルクーポン活用術を網羅。',
    keywords: '大阪 ホテル ふるさと納税,リッツカールトン大阪 ふるさと納税,インターコンチネンタル大阪 クーポン,ヒルトン大阪 宿泊,大阪市 ふるさと納税 旅行',
    targetCity: '大阪府大阪市（梅田・キタ）',
    leadTitle: '地上数十階から見渡す大阪の摩天楼と活気あふれる浪速の街——世界最高峰のブランドホテルで味わう極上のホスピタリティと美食の饗宴',
    leadP1: '西日本最大の交通・商業の要衝である大阪・梅田（キタ）。JR大阪駅を中心に阪急・阪神・地下鉄が結節し、グランフロント大阪やルクア大阪、阪急うめだ本店など最先端のショッピングモールが林立しています。うめきたエリアの再開発によって広大な都市公園「うめきた公園」が誕生し、都心の活気と緑豊かな憩いが融合した国際都市へと劇的な進化を続けています。',
    leadP2: '梅田エリアのホテル滞在の醍醐味は、新大阪駅からJRでわずか約4分という抜群のアクセスと、世界最高峰のホテルブランドが競演するラグジュアリーな空間。高層階のクラブラウンジから広がるパノラマ夜景を眺めながら、極上のアフタヌーンティーや一流シェフのフレンチ・鉄板焼きを堪能できます。大阪府大阪市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの最高級ホテルへお得に宿泊でき、特別な記念日や大阪観光が最高の思い出になります。',
    hotelsKey: 'furusato-tax-osaka-umeda-luxury-skyview-stay',
    hotelItems: [
      {
        key: 'osaka_ritzcarlton',
        tagline: '日本初のザ・リッツ・カールトン！18世紀英国貴族の邸宅のような至高の空間と世界が認めたクレドのおもてなし',
        detailTitle: 'ザ・リッツ・カールトン大阪 —— 伝統の風格と温もり。アンティーク絵画に囲まれるクラシックラグジュアリーの頂点',
        features: [
          { title: '英国ジョージアン様式を取り入れた美術館のように重厚な館内', desc: '暖炉やシャンデリア、約450点もの美術品が彩る空間。一歩足を踏み入れればヨーロッパの古城に迷い込んだような非日常が広がります。' },
          { title: '全室高層階に位置する広々とした客室と贅沢な大理石バスルーム', desc: 'イタリア製大理石のバスルームと最高級リネン。窓からは煌めく大阪市街や神戸方面の夜景を一望できます。' },
          { title: 'ミシュラン星付きフレンチ「ラ・ベ」や伝統のクラブラウンジ', desc: '専任コンシェルジュによる1日5回のフードプレゼンテーション。至極のシャンパンとともに優雅な時間を満喫できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.80点、口コミ絶賛の最高峰。「スタッフのホスピタリティが完璧で別世界、一生の思い出になった」「クラブラウンジのクオリティとお部屋の重厚感が別格」と感動の声多数。'
      },
      {
        key: 'osaka_intercontinental',
        tagline: 'グランフロント大阪直結！洗練の現代デザインと高層階から見下ろすパノラマ夜景',
        detailTitle: 'インターコンチネンタルホテル大阪 —— 都市と自然が響き合うスタイリッシュホテル。広々客室と本格スパ＆プール',
        features: [
          { title: 'グランフロント大阪北館直結・JR大阪駅から屋根付きデッキで直結', desc: 'ショッピングやグルメゾーンに直結する抜群の利便性。雨の日でもスムーズにホテルへアクセスできます。' },
          { title: '全室50㎡以上の広さを誇り、日本の伝統色を配したモダン客室', desc: '大きな窓から光が差し込む開放的な空間。独立したシャワーブースや深めのバスタブが心地よい寛ぎを約束します。' },
          { title: 'ミシュラン一つ星フレンチ「ピエール」と最上階クラブラウンジ', desc: '日本の旬食材とフランスの技法を融合させた現代料理。開放的なオープンキッチンから届く美食が特別な夜を彩ります。' }
        ],
        reviewPoints: '楽天トラベル評価4.50点、口コミ高評価。「駅直結で立地最高、お部屋が広くて洗練されている」「クラブラウンジからの景色が美しく、スタッフの気配りも素晴らしい」と大好評。'
      },
      {
        key: 'osaka_hilton',
        tagline: 'JR大阪駅の正面にそびえるランドマーク！ヒルトンブランドの伝統と多彩な直営レストラン',
        detailTitle: 'ヒルトン大阪 —— 梅田の中心に佇むグローバルスタンダード。エグゼクティブラウンジと快適なシティステイ',
        features: [
          { title: 'JR大阪駅桜橋口から徒歩2分・各線梅田駅へ地下街直結', desc: '空港リムジンバスの発着所も目の前。観光、ビジネス、ショッピングにこれ以上ないベストロケーションです。' },
          { title: '和の趣を取り入れたスタイリッシュで快適なリニューアル客室', desc: '障子や襖をイメージしたモダン和風の設え。上質なベッドと大型ワークデスクが快適な滞在をサポートします。' },
          { title: '「Folk Kitchen」での豪華ビュッフェや多彩な専門ダイニング', desc: 'ライブ感あふれるオープンキッチンビュッフェや、鉄板焼き、本格懐石など、多彩な食の選択肢が揃っています。' }
        ],
        reviewPoints: '楽天トラベル評価3.50点、口コミ7000件超。「駅の目の前でアクセス抜群、リムジンバスも直結で便利」「朝食バイキングが種類豊富でとても美味しかった」と定評。'
      }
    ],
    areaGuide: {
      title: 'グランフロント大阪・うめきた公園＆梅田スカイビル・空中庭園展望台観光ガイド',
      points: [
        { name: '最新の都市緑地「うめきた公園」とグランフロント大阪散策', text: '大阪駅直結の大規模都市公園。水と緑が広がる芝生広場や、注目の最新カフェ・ショップを巡るアーバンウォーキングが楽しめます。' },
        { name: '地上173mの連結超高層ビル「梅田スカイビル 空中庭園展望台」', text: '世界の建築トップ20に選出された名建築。360度オープントップの屋上回廊「ルミ・スカイ・ウォーク」から望む夕日や夜景は圧巻の絶景です。' },
        { name: '阪急うめだ本店・デパ地下スイーツ巡りと北新地グルメ', text: '日本屈指の売上と品揃えを誇るデパ地下スイーツ。夜には大人の歓楽街「北新地」での名店割烹や隠れ家バー巡りもおすすめです。' }
      ]
    },
    furusatoStepTitle: '大阪府大阪市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「大阪府大阪市」クーポンを獲得', desc: '楽天ふるさと納税で大阪市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: JR大阪駅・新大阪駅・各線梅田駅へアクセス', desc: '東海道新幹線新大阪駅からJR京都線で1駅（約4分）。3年間の有効期間内で、USJ観光や舞台観劇、記念日ディナーに合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: 'ザ・リッツ・カールトン大阪、インターコンチネンタルホテル大阪、ヒルトン大阪などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
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
    datePublished: '2026-09-11T01:10:00+09:00',
    dateModified: '2026-09-11T01:10:00+09:00',
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
              <Link href="/furusato-tax-kyoto-station-luxury-convenience-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 京都駅直結 新幹線直結＆抜群のアクセス名門ホテル特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-tokyo-station-marunouchi-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 東京駅・丸の内 重要文化財駅舎＆皇居ビュー名門ホテル特集
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
