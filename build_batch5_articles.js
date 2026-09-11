const fs = require('fs');
const path = require('path');

const hotelsData = JSON.parse(fs.readFileSync('batch5_hotels.json', 'utf8'));

const articles = [
  {
    slug: 'niigata-solo-business-sake-seafood-stay',
    categoryName: '新潟・出張＆日本酒・日本海美食特集',
    title: '【新潟出張＆地酒ひとり旅】信濃川パノラマ・天然温泉サウナ・ぽんしゅ館利き酒！日本海美食を堪能する極上宿 厳選3選',
    desc: '上越新幹線で東京から最短約1時間29分！日本一の米どころ・酒どころである新潟。「信濃川と日本海を見下ろす地上140mのランドマーク」を誇る「ホテル日航新潟」、新潟駅万代口徒歩すぐで天然温泉大浴場と夜鳴きそば完備の「ドーミーイン新潟」、新幹線直結の好アクセスを誇る「アートホテル新潟駅前」を徹底特集。',
    keywords: '新潟 出張 ホテル 温泉,新潟 一人旅 ホテル おすすめ,ホテル日航新潟 宿泊,ドーミーイン新潟 温泉,ぽんしゅ館 新潟駅 ホテル',
    targetAudience: '出張で訪れるビジネスパーソン・日本酒や日本海鮮魚（のどぐろ・南蛮エビ）を味わいたい大人のソロトラベラー',
    leadTitle: '悠然と流れる信濃川の水面と、八海山や久保田を注ぐ猪口のぬくもり——米どころ・酒どころで五感を満たす「新潟プレミアム出張」',
    leadP1: '日本最長の大河・信濃川が日本海へと注ぎ、豊かな越後平野の恵みが集まる港町・新潟。上越新幹線の終着駅であり、本州日本海側最大の都市として官公庁や企業支店がひしめく重要拠点です。日中の商談や現場視察を終えた後の夜の楽しみは、何と言っても新潟駅構内「ぽんしゅ館」での越後銘酒の唎き酒体験や、古町（ふるまち）・万代の花街情緒が残る割烹でのどぐろ塩焼き、南蛮エビ、タレかつを味わうひととき。',
    leadP2: 'そんな新潟での滞在を特別な時間に変えてくれるのが、水辺のダイナミックな景観を望む高層シティホテルや、疲れをリセットする天然温泉大浴場を備えた宿です。魚沼産コシヒカリの炊きたてご飯と郷土料理「のっぺ」が並ぶ朝食で活力を得て、翌朝の仕事や旅へ出発する。今回は出張とソロ呑みを完璧に満たす新潟の厳選3宿をご紹介します。',
    hotelItems: [
      {
        idx: 0,
        tagline: '朱鷺メッセ直結！地上31階・日本海側最高層ビルから信濃川河口と日本海・佐渡島を一望するランドマーク',
        detailTitle: 'ホテル日航新潟 —— 空と海が溶け合うスカイビュー。全室22階以上の高層階とシェフが目の前で炊く極上魚沼産コシヒカリ',
        features: [
          { title: '全客室が22階〜29階の高層階！窓から広がる雄大な信濃川と日本海の絶景', desc: '夜には萬代橋のライトアップや新潟市街の夜景、遠く佐渡島に沈む夕日を部屋から独り占めできます。' },
          { title: '大型コンベンション施設「朱鷺メッセ」直結で展示会・学会出張に最強の立地', desc: 'ビジネスの移動ストレスがゼロ。信濃川沿いの水上バス乗り場も近く、爽やかな川風散歩も楽しめます。' },
          { title: '新潟県産コシヒカリの炊きたてご飯と日本海の海の幸が並ぶ自慢の朝食', desc: '名物タレかつや栃尾の油揚げ、焼き魚など。米どころ新潟ならではの最高の朝の贅沢を味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.58点。「お部屋からの夜景が息をのむ美しさで、朝食のお米の美味しさは別格でした」「朱鷺メッセ直結で出張利用に最高峰のホテル」と絶賛。'
      },
      {
        idx: 1,
        tagline: 'JR新潟駅万代口徒歩約8分！男女別天然温泉大浴場＆高温サウナ・名物夜鳴きそば完備',
        detailTitle: '天然温泉 多宝の湯 ドーミーイン新潟 —— 万代シテイ近く。天然温泉とサウナでととのい、地酒横丁へ繰り出す安心拠点',
        features: [
          { title: '最上階10階に広がる天然温泉大浴場「多宝の湯」＆水風呂・外気浴スペース', desc: '弱アルカリ性の柔らかなお湯が身体の芯まで温めます。サウナで汗を流して出張の疲れを完全リフレッシュ。' },
          { title: '名物「夜鳴きそば」や湯上がりアイス、乳酸菌飲料の無料サービス', desc: '古町や駅前で地酒を飲んだ後のシメに最適。一人旅でも温かく迎えてくれる定番の安心感です。' },
          { title: 'タレかつやのっぺ、新潟名物が並ぶ豪華な和洋朝食バイキング', desc: '朝からご当地グルメを満喫。エネルギーをフル充電して一日をスタートできます。' }
        ],
        reviewPoints: '楽天トラベル評価4.26点。「新潟駅周辺で温泉とサウナに入れるのがありがたい」「万代シテイにも近くて飲食店が多く、一人でも過ごしやすかった」と定評。'
      },
      {
        idx: 2,
        tagline: 'JR新潟駅南口直結！新幹線改札から雨や雪に濡れずにチェックインできる抜群の機動力',
        detailTitle: 'アートホテル新潟駅前 —— 新潟駅東側連絡通路直結。モダンで広々とした客室と魚沼産コシヒカリ食べ比べ朝食',
        features: [
          { title: '新幹線改札から連絡通路で直結！冬の雪や雨の日でも傘なしでスムーズ', desc: '荷物が多い出張でも移動が極めて楽。駅構内の「ぽんしゅ館」へも徒歩ですぐに向かえます。' },
          { title: '機能的なワークデスクとシモンズ社製ベッドを完備した快適空間', desc: '高速Wi-Fi完備で客室でのテレワークも快適。静音性に優れ、出張の夜をぐっすり熟睡できます。' },
          { title: '南魚沼産コシヒカリと佐渡産コシヒカリの贅沢な「利き米」朝食ビュッフェ', desc: '産地によるお米の甘みや粘りの違いを食べ比べ。新潟の豊かな米文化を朝から体感できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.28点。「新幹線を降りてすぐチェックインできて本当に便利」「朝食のお米食べ比べが楽しく、お部屋も広くて清潔でした」とビジネス客に人気。'
      }
    ],
    areaGuide: {
      title: '新潟駅「ぽんしゅ館」と古町花街を一人で巡る大人の利き酒ガイド',
      points: [
        { name: '1. 新潟駅「ぽんしゅ館」でコイン5枚（500円〜）のガチャ利き酒体験', text: '新潟県内全酒蔵の代表銘柄約100種が並ぶ自動試飲マシン。きき酒師おすすめの純米酒やお好みの酒蔵を少量ずつ飲み比べできます。' },
        { name: '2. 国の重要文化財「萬代橋」を夕暮れ時に散策', text: '6連の美しい石造アーチ橋。信濃川の水面に映る夕日と街の明かりを眺めながら、萬代橋を渡って古町方面へ歩く時間は最高のリフレッシュです。' },
        { name: '3. 古町の小料理屋でのどぐろ塩焼きと郷土料理「のっぺ」', text: '江戸時代からの花街情緒が残る古町通り。カウンター席で割烹の職人が焼き上げる脂の乗ったのどぐろを地酒と味わう至福。' }
      ]
    },
    faqList: [
      { q: '冬の時期は雪で新潟市内の移動が大変ですか？', a: '新潟市内中心部（新潟駅〜万代〜古町）は消雪パイプや地下道、アーケードが整備されており、豪雪地帯の山間部と比べると積雪路面でも歩きやすく対策されています。' },
      { q: '一人で入りやすい海鮮居酒屋や寿司屋はありますか？', a: '新潟駅周辺や万代には回転寿司の最高峰「弁慶」や、カウンター完備の老舗寿司店・居酒屋が多数あり、一人客が気兼ねなく地魚と日本酒を注文できます。' }
    ]
  },
  {
    slug: 'toyama-solo-business-tateyama-sauna-stay',
    categoryName: '富山・出張＆立山連峰・白えびサウナ特集',
    title: '【富山出張＆立山連峰ビュー】富山駅近・天然温泉サウナ・白えび美食！「天然の生簀」富山湾を味わう極上宿 厳選3選',
    desc: '北陸新幹線で東京から約2時間8分！富山湾の神秘と雄大な立山連峰が抱く街・富山。「全館畳敷きで天然温泉大浴場と海鮮いくら朝食」を誇る「御宿 野乃富山」、展望大浴場サウナと立山連峰パノラマビューが自慢の老舗「富山マンテンホテル」、富山駅前至近の「ホテルグランテラス富山」を徹底特集。',
    keywords: '富山 出張 ホテル サウナ,富山 一人旅 ホテル おすすめ,御宿野乃富山 朝食,富山マンテンホテル 大浴場,富山駅 温泉 ホテル',
    targetAudience: '出張で訪れるビジネスパーソン・富山湾の白えび・ホタルイカや立山連峰の絶景を楽しみたいソロトラベラー',
    leadTitle: '雪を戴く立山連峰の神々しい峰々と、富山湾の宝石「白えび」の透き通る甘み——名水と名湯に癒やされる「富山プレミアム出張」',
    leadP1: '北陸新幹線「かがやき」で一直線。薬産業をはじめとするものづくり企業やアルミニウム産業が集結する日本海側の産業拠点・富山。北アルプス・立山連峰の雪解け水がもたらすミネラル豊富な地下水と、「天然の生簀」と呼ばれる富山湾の豊かな漁場が育んだ食文化は日本屈指のクオリティを誇ります。名物の白えび、紅ズワイガニ、寒ブリ、ホタルイカなど、季節ごとに旬の海の幸が旅人を迎えます。',
    leadP2: 'そんな富山ステイの魅力は、移動の疲れを極限まで洗い流す「サウナー御用達の大浴場」や「全館畳敷きの温泉旅館」が中心街に揃っていること。立山連峰を見渡すスカイスパや高温ドライサウナでととのい、夜は富山駅前や総曲輪（そうがわ）の居酒屋で地酒「満寿泉」「立山」に酔いしれる。今回は出張・ひとり旅に最適な富山の厳選3宿をご紹介します。',
    hotelItems: [
      {
        idx: 0,
        tagline: '総曲輪通りすぐ！全館畳敷きの和の温もりと自家源泉の天然温泉「剱の湯」・海鮮丼朝食バイキング',
        detailTitle: '天然温泉 剱の湯 御宿 野乃富山 —— ドーミーイン和風プレミアムブランド。素足で寛ぐ贅沢と本格ドライサウナ完備',
        features: [
          { title: '玄関で靴を脱ぎ、館内全域を素足や足袋でリラックスして歩ける全館畳敷き', desc: '日本旅館の落ち着きと最新ホテルの機能性が融合。出張の靴を脱いだ瞬間に極上の解放感を味わえます。' },
          { title: 'ヒノキ香る天然温泉大浴場「剱の湯」＆高温ドライサウナ・しっかり冷えた水風呂', desc: '保温効果の高い本格天然温泉。サウナシュラン仕様のととのいスペースで心身をリセットできます。' },
          { title: 'いくら盛り放題の海鮮丼や富山名物「白えびごはん」が並ぶ豪華朝食', desc: '朝から富山湾の恵みを心ゆくまで堪能。夜には名物あっさり醤油「夜鳴きそば」も無料提供されます。' }
        ],
        reviewPoints: '楽天トラベル評価4.49点。「全館畳敷きが本当に気持ちよく、温泉とサウナのクオリティが別格でした」「朝食の海鮮丼が美味しく、富山出張の際は必ず泊まっています」とリピーター多数。'
      },
      {
        idx: 1,
        tagline: '富山駅徒歩約10分・路面電車すぐ！最上階11階の展望大浴場と立山連峰パノラマ・本格サウナ',
        detailTitle: '富山マンテンホテル —— 北陸を代表する老舗ビジホ。手足を伸ばせる大浴場と富山の味覚を味わう朝食',
        features: [
          { title: '最上階11階に位置する男性・女性展望大浴場＆高温サウナ・水風呂', desc: '白山連峰や富山市街を一望。手足を伸ばして浸かる広い湯船が出張の疲れをすっきりと癒やします。' },
          { title: '富山湾の海の幸を取り入れた選べる和朝食・洋朝食と郷土小鉢バイキング', desc: '富山米のコシヒカリやホタルイカ沖漬けなど。栄養バランスに優れた健康朝食で一日をスタートできます。' },
          { title: 'ホテル内に居酒屋や日本料理店、カフェを備えた充実のファシリティ', desc: '外に出ることなくホテル内で富山の地酒と郷土料理を堪能可能。雨や雪の日も快適です。' }
        ],
        reviewPoints: '楽天トラベル評価4.14点。「大浴場とサウナが広くて快適、露天スペースからの風が気持ちよかった」「路面電車の電停が目の前で市内観光や食事にも便利」と定評。'
      },
      {
        idx: 2,
        tagline: 'JR富山駅南口から徒歩約5分！桜橋通りに面した落ち着いたシティホテル＆無料マッサージチェア',
        detailTitle: 'ホテルグランテラス富山桜橋通り —— 駅近の好立地。機能的な客室と充実した無料サービスが嬉しい快適ステイ',
        features: [
          { title: '富山駅前から徒歩5分のアクセスで、新幹線改札からスムーズにチェックイン', desc: '富山地方鉄道や路面電車の乗り場も近く、市内各所の商談先へアクセス良好です。' },
          { title: 'ウェルカムドリンク（コーヒー等）や客室での快適なテレワーク環境', desc: '高速Wi-Fi完備でデスクワークが快適。静かな客室で出張の夜を落ち着いて過ごせます。' },
          { title: '富山名産を取り入れた和洋バイキング朝食と広々としたレストラン空間', desc: '朝からゆったりとした気分で美味しい朝ごはん。出張のパフォーマンスをしっかりと支えます。' }
        ],
        reviewPoints: '楽天トラベル評価3.89点。「駅から近くてわかりやすく、スタッフの対応も親切でした」「コスパが良く、出張の定宿として使い勝手が良い」と好評。'
      }
    ],
    areaGuide: {
      title: '富山の美景と海の幸をひとり旅で満喫するスマートガイド',
      points: [
        { name: '1. 富山市役所展望塔（無料）から3000m級の立山連峰パノラマを仰ぐ', text: '地上70mの無料展望台。晴れた日には富山市街の背後にそびえ立つ雪山の大パノラマが広がり、息をのむ絶景に出会えます。' },
        { name: '2. 富山駅前「きときと市場 とやマルシェ」で白えび天丼と地酒', text: '新幹線に乗る前にも立ち寄れるグルメゾーン。「白えび亭」で揚げるサクサクの白えび天ぷら丼は富山名物の白眉です。' },
        { name: '3. 富山港線ライトレールに乗って岩瀬の古い廻船問屋町へ小旅行', text: '富山駅から次世代型路面電車（LRT）で約25分。明治の廻船問屋の町家が残る岩瀬通りで、酒蔵「満寿泉」直営ショップやクラフトビールを楽しめます。' }
      ]
    },
    faqList: [
      { q: '富山市内の移動は路面電車（トラム）が便利ですか？', a: '富山駅を中心に環状線や富山港線など最新の低床路面電車が数分間隔で走っており、SuicaやICOCA等の交通系ICカードで市内観光や会食へスムーズに移動できます。' },
      { q: '一人で富山湾の地魚寿司を食べられるお店はありますか？', a: '富山駅周辺や総曲輪エリアには「すし玉」などの有名廻転寿司店やカウンター寿司店が多く、一人客でも気兼ねなく富山湾鮨（10貫セット等）を注文できます。' }
    ]
  },
  {
    slug: 'matsumoto-solo-retreat-mingei-onsen-stay',
    categoryName: '松本・城下町＆信州民芸・美肌湯特集',
    title: '【松本ひとり旅・民芸おこもり】国宝松本城・民芸家具クラシック・美ヶ原温泉！北アルプスの麓で心を整える名宿 厳選3選',
    desc: '特急あずさ・しなの直結！北アルプスの山々に抱かれた信州の学都・長野県松本市。「国宝松本城徒歩すぐ・松本民芸家具に囲まれる名門クラシックホテル」を誇る「松本ホテル花月」、美ヶ原温泉の高台から北アルプスと松本市街を一望する「信州松本 美ヶ原温泉 翔峰」、駅前で天然温泉とサウナ・名物蕎麦朝食が嬉しい「ドーミーイン松本」を徹底特集。',
    keywords: '松本 一人旅 ホテル おすすめ,松本ホテル花月 宿泊,美ヶ原温泉 翔峰 一人,松本城 ひとり旅 宿,ドーミーイン松本 温泉',
    targetAudience: '国宝松本城や民芸・クラフト・湧水巡りを楽しみたい大人のソロトラベラー・避暑リトリート層',
    leadTitle: '黒漆喰と白漆喰が織りなす松本城の凛とした佇まい、街角に湧き出る清らかな井戸水——民芸のぬくもりと名湯に包まれる「松本大人のリトリート」',
    leadP1: '新宿から特急あずさで約2時間半、名古屋から特急しなので約2時間。現存十二天守の一つであり国宝に指定されている「松本城」をシンボルとする松本は、柳宗悦が提唱した「民芸運動」の精神が今なお息づく文化都市です。中町通りの白壁土蔵、なわて通りのカエル横丁、草間彌生作品を常設展示する「松本市美術館」、そして街中随所に湧き出る北アルプスの清らかな名水「まつもと城下町湧水群」など、ひとり歩きにふさわしい静けさと美意識に満ちています。',
    leadP2: 'そんな松本でのソロステイを深みあるものにしてくれるのが、松本民芸家具が彩るクラシックホテルや、郊外の美ヶ原温泉から北アルプスを望む絶景名宿、そして駅前の天然温泉宿です。信州蕎麦や山賊焼き、信州サーモン、地酒「大信州」「真澄」を味わいながら過ごす豊かな休日。今回は松本の厳選3宿をご紹介します。',
    hotelItems: [
      {
        idx: 0,
        tagline: '創業明治20年！松本民芸家具が彩るクラシックホテル・松本城へ徒歩5分の閑静なロケーション',
        detailTitle: '松本ホテル花月 —— 「民芸フィロソフィー」が息づく上質空間。湧水の大浴場とノスタルジックな喫茶室「八十六温館」',
        features: [
          { title: '館内随所に配された落ち着きある「松本民芸家具」とステンドグラス', desc: '木肌の温もりと職人の技が光る設え。大人のひとり旅を優雅に包み込むノスタルジックな美しさです。' },
          { title: '松本城へ徒歩5分・湧水がこんこんと湧く井戸が立つホテル前広場', desc: '早朝の澄んだ空気の中での松本城散歩に最適。名水を味わいながら静かな城下町の風情を堪能できます。' },
          { title: '名水で淹れる本格ネルドリップ珈琲が自慢のレトロ喫茶「八十六温館」', desc: '木漏れ日が差し込むクラシカルな空間。文庫本を片手に至福の読書時間を過ごせます。' }
        ],
        reviewPoints: '楽天トラベル評価4.46点。「民芸家具が醸し出す雰囲気が最高で、一人で本を読みながらのんびり過ごせました」「松本城もすぐで朝の散歩が気持ちよかった」と文化系ソロ旅から絶賛。'
      },
      {
        idx: 1,
        tagline: '美ヶ原温泉の高台から北アルプスと松本市街を一望！5つ星の宿認定の本格温泉旅館',
        detailTitle: '信州松本 美ヶ原温泉 翔峰 —— 圧倒的なパノラマビュー。開放感あふれる展望露天風呂と信州の味覚を味わう会席料理',
        features: [
          { title: '西側に北アルプスの山並みと松本盆地の夜景を見渡すパノラマ露天風呂', desc: '弱アルカリ性の柔らかい温泉。夕暮れに赤く染まる山々と街の明かりを眺めながらの入浴は格別です。' },
          { title: '一人旅プランも充実！信州牛や山菜、川魚を盛り込んだ本格和会席', desc: '地元の旬の恵みを丁寧な技で仕上げた料理。誰にも邪魔されず信州の地酒とともに優雅に味わえます。' },
          { title: '松本駅前からの無料送迎バス運行でアクセスもスムーズ', desc: '城下町の観光を満喫した後は、郊外の静かな温泉宿へチェックイン。贅沢なおこもりステイが叶います。' }
        ],
        reviewPoints: '楽天トラベル評価4.63点。「露天風呂からの北アルプスの眺めが圧巻！お料理も美味しくスタッフの接客も完璧でした」「自分への最高のご褒美旅行になりました」と高評価。'
      },
      {
        idx: 2,
        tagline: 'JR松本駅アルプス口徒歩3分！自家源泉の天然温泉大浴場＆高温サウナ・名物「信州蕎麦」朝食',
        detailTitle: '天然温泉 梓の湯 ドーミーイン松本 —— 駅近の温泉オアシス。水風呂サウナと夜鳴きそば完備の王道ビジホ',
        features: [
          { title: '天然温泉大浴場「梓の湯」＆ドライサウナ・しっかり冷えた水風呂完備', desc: '無色透明の天然温泉が旅の疲れを心地よく解きほぐします。サウナでしっかりととのって熟睡できます。' },
          { title: '信州蕎麦やわさびご飯、信州の郷土料理が並ぶ人気の朝食バイキング', desc: '朝から打ち立ての香り高い信州蕎麦を堪能。観光の一日を元気にスタートできます。' },
          { title: '松本駅アルプス口からすぐの好立地でアルピコ交通バスターミナルも徒歩圏内', desc: '上高地や安曇野方面へのアクセス拠点としても最適。チェックイン前後の荷物預けもスムーズです。' }
        ],
        reviewPoints: '楽天トラベル評価4.45点。「松本駅近で天然温泉とサウナに入れて最高」「朝食の信州蕎麦が美味しく、夜鳴きそばのサービスも嬉しかった」と安定の人気。'
      }
    ],
    areaGuide: {
      title: '松本の城下町と湧水・クラフトを一人で巡るモデル散策コース',
      points: [
        { name: '1. 国宝松本城の内堀と天守閣を朝イチ（8:30開門）でじっくり見学', text: '五重六階の現存最古の天守。急な階段を登り切った最上階からは、北アルプスと松本の街並みが一望できます。' },
        { name: '2. 中町通りの蔵造りカフェと松本民芸家具ショップ巡り', text: '白と黒のなまこ壁が美しい通り。木工クラフト店や器ギャラリーで、自分だけのお気に入りのお土産探し。' },
        { name: '3. まつもと城下町湧水群（源智の井戸等）で清らかな名水を汲む', text: '環境省の名水百選に選ばれる名水。持参した水筒やタンブラーに冷たい湧水を汲んで街歩きのお供にするのが松本流です。' }
      ]
    },
    faqList: [
      { q: '松本駅から美ヶ原温泉や上高地への移動はどうですか？', a: '美ヶ原温泉へは松本駅前バスターミナルから路線バスで約20分（翔峰等の無料送迎あり）。上高地へは松本電鉄上高地線とシャトルバスで約1時間半でアクセスできます。' },
      { q: '一人で入りやすい信州蕎麦や居酒屋はありますか？', a: '駅前や中町通り、なわて通り周辺の蕎麦店（野麦、弁天、みよ田など）は一人客が非常に多く、カウンター席で気軽に手打ち蕎麦や蕎麦前を楽しめます。' }
    ]
  },
  {
    slug: 'takamatsu-solo-business-udon-art-stay',
    categoryName: '高松・出張＆讃岐うどん・瀬戸内アート特集',
    title: '【高松出張＆讃岐うどんひとり旅】高松港・サンポートビュー・天然温泉・名物うどん朝食！瀬戸内の風を感じる快適宿 厳選3選',
    desc: '本州と四国を結ぶ海の玄関口・香川県高松市！「高松駅＆高松港直結・瀬戸内海の島々を見渡す最高峰シティホテル」を誇る「JRホテルクレメント高松」、全室ライブラリーラウンジ付きで上質な滞在を約束する「ロイヤルパークホテル高松」、瓦町駅近くで自家源泉天然温泉と夜鳴きそば完備の「さぬきの湯 ドーミーイン高松」を徹底比較。',
    keywords: '高松 出張 ホテル おすすめ,高松 一人旅 ホテル,JRホテルクレメント高松 宿泊,ロイヤルパークホテル高松 ラウンジ,ドーミーイン高松 温泉',
    targetAudience: '出張で訪れるビジネスパーソン・本場の讃岐うどん巡りや直島・小豆島アートを楽しみたい大人の一人旅',
    leadTitle: '穏やかな瀬戸内海の島影と波のきらめき、茹でたての讃岐うどんの力強いコシ——四国の玄関口で仕事と癒やしを極める「高松スマートステイ」',
    leadP1: '瀬戸大橋を渡るJR快速マリンライナーで岡山から約55分。四国の経済・行政の中枢であり、四国各県へのハブとして多くのビジネスパーソンが訪れる香川県高松市。そして直島・豊島・小豆島といった世界的な現代アートの島々へのフェリーが発着するサンポート高松は、国内外のアートファンやひとり旅の旅行者で常に賑わっています。名物の讃岐うどん店巡りや、骨付鳥、オリーブ牛など、四国屈指の美食が揃っています。',
    leadP2: 'そんな高松での滞在を最高のものにしてくれるのが、駅・港直結のオーシャンビューホテルや、全室ラウンジアクセス付きの上質ホテル、そして街の真ん中で手足を伸ばせる天然温泉宿です。朝から名物うどんをツルッとすすり、夜は瀬戸内の地魚と讃岐の地酒「金陵」「川鶴」を味わう。今回は出張・ひとり旅に最適な高松の厳選3宿をご紹介します。',
    hotelItems: [
      {
        idx: 0,
        tagline: 'JR高松駅・高松港フェリー乗り場すぐ！瀬戸内海と屋島を一望する四国屈指のランドマークホテル',
        detailTitle: 'JRホテルクレメント高松 —— 海と街が交差する特等席。オーシャンビュー客室と一流シェフが腕を振るう多彩なダイニング',
        features: [
          { title: '全客室から瀬戸内海の多島美または高松市街の夜景を一望', desc: '海を行き交うフェリーや夕暮れのサンセットを客室から満喫。ゆとりある広さで優雅なひとり時間を過ごせます。' },
          { title: 'JR高松駅徒歩1分・高松港フェリーターミナル徒歩1分の最強アクセス', desc: '新幹線接続のマリンライナーや各県特急に直結。直島や小豆島へのアイランドホッピングにも最高の拠点です。' },
          { title: '讃岐うどんの実演コーナーや地元食材を取り入れた贅沢な朝食ビュッフェ', desc: '朝から茹でたての本場讃岐うどんを堪能。出張の一日を最高のエネルギーでスタートできます。' }
        ],
        reviewPoints: '楽天トラベル評価4.48点。「駅からも港からもすぐで立地が完璧。お部屋からの瀬戸内海の景色が素晴らしかった」「スタッフの対応も一流で、高松出張の定宿です」と絶賛。'
      },
      {
        idx: 1,
        tagline: '全客室の宿泊者が専用プレミアムラウンジを利用可能！アール・デコ調の気品あふれる大人の隠れ家ホテル',
        detailTitle: 'ロイヤルパークホテル高松 —— 瓦町エリアのシティリゾート。ライブラリーラウンジでのカクテルタイムと充実の朝食',
        features: [
          { title: '宿泊者全員が利用できる「ライブラリーラウンジ」（ティータイム・カクテルタイム）', desc: '夕方にはアルコールやオードブルを無料提供。静かなラウンジで贅沢な読書やPCワークが可能です。' },
          { title: 'アール・デコ様式を取り入れた重厚で上質な客室インテリア', desc: 'シモンズ製特注ベッドと遮音性に優れた空間。出張の疲れを忘れて上質なプライベートタイムに浸れます。' },
          { title: '高松最大の繁華街「瓦町・鍛冶屋町」至近で飲食やショッピングに最適', desc: '骨付鳥の人気店や地元居酒屋へ徒歩すぐ。夜遅くまで高松グルメを満喫しても歩いて安全に帰還できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.38点。「ラウンジでお酒をいただきながらゆっくり本を読めて最高でした」「お部屋の内装がとてもお洒落で、朝食の和定食も美味しかったです」と大好評。'
      },
      {
        idx: 2,
        tagline: 'ことでん瓦町駅徒歩約5分！自家源泉の天然温泉大浴場「さぬきの湯」＆高温サウナ・夜鳴きそば完備',
        detailTitle: 'さぬきの湯 ドーミーイン高松 —— 繁華街至近の温泉ビジホ。手足を伸ばせる大浴場と讃岐うどん付き朝食バイキング',
        features: [
          { title: '最上階に位置する自家源泉の天然温泉大浴場「さぬきの湯」＆水風呂付きサウナ', desc: 'ナトリウム塩化物泉の温まりの湯。サウナでしっかりととのって出張の疲れを洗い流せます。' },
          { title: '名物「夜鳴きそば」や湯上がりアイス、乳酸菌飲料の無料サービス', desc: '骨付鳥と地酒を楽しんだ後のシメに最適。一人旅でも温かく迎えてくれる定番の安心感です。' },
          { title: 'セルフで茹でてトッピングを楽しめる「讃岐うどん」や郷土小鉢朝食', desc: '朝から本場のうどん出汁の香りに包まれる至福。活力をチャージして出発できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.39点。「繁華街に近くて温泉とサウナに入れるのがありがたい」「朝食で自分で作る讃岐うどんが美味しく、夜鳴きそばも安定の味でした」と好評。'
      }
    ],
    areaGuide: {
      title: '高松の「讃岐うどん＆骨付鳥」を一人旅で制覇する攻略法',
      points: [
        { name: '1. 朝うどん（早朝6:00〜8:00オープンの名店へ）', text: '「さか枝」や「手打十段 うどんバカ一代」など朝から営業する名店へ。釜バターうどんやかけうどんに揚げたてちくわ天を乗せるのが王道です。' },
        { name: '2. 国の特別名勝「栗林公園（りつりんこうえん）」の一歩一景散歩', text: 'ミシュラン・グリーンガイドで三つ星を獲得した名園。掬月亭（きくげつてい）で南湖を眺めながらいただく抹茶と和菓子は至高のひととき。' },
        { name: '3. 夜は香川の二大ソウルフード「骨付鳥（おや・ひな）」とビール', text: 'スパイシーなニンニクと胡椒が効いた骨付鳥。柔らかくジューシーな「ひな」か、噛むほどに旨味が出る「おや」か、お好みで。' }
      ]
    },
    faqList: [
      { q: '高松空港から高松駅や市内ホテルへのアクセスはどうですか？', a: '高松空港から市内行きリムジンバスが飛行機の発着に合わせて運行しており、JR高松駅や瓦町駅まで約35〜45分で直行できます。' },
      { q: '直島や小豆島へのフェリーは予約なしでも乗れますか？', a: '旅客のみ（車なしの一人旅）であれば、フェリーは予約不要で当日高松港フェリーターミナルで切符を購入してそのまま乗船できます。' }
    ]
  },
  {
    slug: 'beppu-solo-retreat-kakenagashi-jigoku-stay',
    categoryName: '別府温泉・源泉掛け流し＆地獄めぐり特集',
    title: '【別府温泉ひとり旅・湯治おこもり】別府湾パノラマ・源泉掛け流し客室露天・名物地獄蒸し！湧出量日本一の温泉都で癒やされる名宿 厳選3選',
    desc: '日本一の湧出量と泉種を誇るおんせん県おおいたの象徴・別府！「別府湾を一望する大展望露天風呂・棚湯と圧巻のエンタメ温泉リゾート」の「杉乃井ホテル」、全室客室露天風呂付きで海と一体化する波打ち際の最高峰「AMANE RESORT SEIKAI（潮騒の宿 晴海）」、庭園露天風呂と関アジ関サバ会席が自慢の老舗「ホテル白菊」を徹底特集。',
    keywords: '別府温泉 一人旅 宿,別府 温泉 おこもり 一人,杉乃井ホテル 宿泊,潮騒の宿 晴海 客室露天,別府 ひとり旅 部屋食',
    targetAudience: '日本屈指の温泉力で心身を再生させたい大人・地獄めぐりや湯治を満喫したいソロトラベラー',
    leadTitle: '湯煙たなびく鉄輪の町並みと、海と空が溶け合う別府湾の水平線——日本一の源泉力に身を委ねて魂をととのえる「別府温泉ひとり湯治」',
    leadP1: '毎分8万リットルを超える圧倒的な湧出量と、世界にある11の泉質のうち10種類が揃う奇跡の温泉都・大分県別府温泉。街のあちこちから立ち上る真っ白な湯煙、コバルトブルーや血の池のような色彩を放つ「地獄めぐり」、温泉の蒸気熱で野菜や魚介を蒸し上げる伝統の「地獄蒸し料理」、そして歴史ある市営の共同浴場巡りなど、温泉好きにとって生涯一度は訪れるべき聖地です。',
    leadP2: 'そんな別府でのソロステイを極上のものにしてくれるのが、別府湾の水平線と一つになる絶景展望露天風呂や、客室にいながら源泉掛け流しを独り占めできる大人の隠れ宿です。誰にも気を使わず、好きな時に好きなだけ名湯に身を沈め、大分名物の関アジ・関サバや豊後牛に舌鼓を打つ至福。今回は別府の厳選3宿をご紹介します。',
    hotelItems: [
      {
        idx: 0,
        tagline: '観海寺温泉の高台に君臨する巨大温泉リゾート！別府湾と街並みを見下ろす大展望露天風呂「棚湯」',
        detailTitle: '別府温泉 杉乃井ホテル —— 圧倒的なスケールと進化を続ける新館。海抜約250mの天空露天風呂と豪華ワールドビュッフェ',
        features: [
          { title: '別府湾と夜景を一望する5段の棚田状大展望露天風呂「棚湯」', desc: '空と海が広がる圧倒的な開放感。朝陽が水平線から昇る瞬間や、街の明かりが煌めく夜景風呂は圧巻です。' },
          { title: '2023年オープンの最新フラッグシップ棟「宙館（そらかん）」の洗練客室', desc: '最上階の宿泊者専用展望露天風呂「宙湯」や、オープンキッチンの贅沢ビュッフェ「TERRACE & DINING SORA」を堪能できます。' },
          { title: 'JR別府駅西口から無料シャトルバスが15分間隔で運行', desc: 'アクセスも極めてスムーズ。一人でも広大な館内で温泉プールやアクティビティを心ゆくまで楽しめます。' }
        ],
        reviewPoints: '楽天トラベル評価4.63点。「宙館に宿泊しましたが、最上階のお風呂からの眺望とお食事が感動的でした」「一人旅でも広大なリゾートをマイペースに楽しめました」と絶賛。'
      },
      {
        idx: 1,
        tagline: '全客室が源泉掛け流しの露天風呂付きオーシャンビュー！海と波の音に包まれる上質な海辺のリゾート',
        detailTitle: 'AMANE RESORT SEIKAI（潮騒の宿 晴海） —— 海抜0メートルのインフィニティ温泉。波打ち際のテラスとモダンデザイン',
        features: [
          { title: '全客室に別府湾を望むプライベートな源泉掛け流し露天風呂を完備', desc: 'いつでも好きな時に客室の露天風呂へ。波の音をBGMに誰にも邪魔されない至極の湯浴みが叶います。' },
          { title: '海に浸かっているかのような感覚を味わえる1階大浴場「潮騒の湯」', desc: '波打ち際に位置する開放的な露天風呂。水平線を眺めながら心身の緊張をすべて解き放つことができます。' },
          { title: '海鮮料理、フレンチ、日本料理から選べる洗練された館内レストラン', desc: '関アジ・関サバをはじめ豊後水道の極上の海の幸。一人でも優雅にコース料理を堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.61点。「部屋の露天風呂から見る朝日の美しさに言葉を失いました」「スタッフのホスピタリティも素晴らしく、一人で贅沢な休日を過ごすのに最高」と大人気。'
      },
      {
        idx: 2,
        tagline: '別府駅西口徒歩8分の閑静な高台！樹齢200年の楠が茂る庭園露天風呂と名物会席料理',
        detailTitle: '別府温泉 ホテル白菊 —— 伝統とモダンが美しく調和する老舗宿。美肌の天然温泉と豊後牛・関アジ美食',
        features: [
          { title: '天然檜をふんだんに使った「楠湯殿」や御影石の庭園露天風呂', desc: '美肌成分を豊富に含む炭酸水素塩泉の自家源泉。肌をしっとりと包み込む柔らかな湯ざわりです。' },
          { title: '別府駅徒歩圏内ながら緑に囲まれた静寂な大人のリトリート環境', desc: '街の喧騒から離れた落ち着いた佇まい。庭園を眺めながら静かな時間を過ごせます。' },
          { title: '料理旅館の伝統を受け継ぐ豊後会席とお部屋食プランの充実', desc: '大分の山海の幸を丁寧に仕上げた会席料理。おひとりさまでも気兼ねなくお部屋で贅沢な夕餉を味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.52点。「スタッフの皆さんの温かいおもてなしとお風呂の泉質に癒やされました」「お料理が一品一品とても美味しく、一人でも安心して泊まれました」と定評。'
      }
    ],
    areaGuide: {
      title: '別府温泉の「地獄めぐり＆共同浴場」を一人で味わい尽くす散策術',
      points: [
        { name: '1. 鉄輪（かんなわ）温泉エリアの「地獄蒸し工房 鉄輪」で自炊体験', text: '温泉の蒸気釜を使って、持参または購入した卵、さつまいも、豚肉を蒸し上げる名物体験。塩分を含んだ温泉蒸気の自然な味付けが絶品です。' },
        { name: '2. 国指定名勝「海地獄」のコバルトブルーと極楽温室', text: '神秘的な青い湯面から立ち上る白い湯煙。温泉熱を利用した大鬼蓮（オオオニバス）の池など、ダイナミックな地球の息吹を体感できます。' },
        { name: '3. 竹瓦温泉（たけがわらおんせん）の唐破風建築と砂湯体験', text: '明治12年創設の別府のシンボル。温かい温泉砂を全身にかけてもらう「砂湯」でじっくり汗を流せば、老廃物が一気にデトックスされます。' }
      ]
    },
    faqList: [
      { q: '大分空港から別府市内ホテルへのアクセスはどうですか？', a: '大分空港から空港特急バス「エアライナー」が運行しており、別府駅前や別府北浜まで約45〜50分で直行できます。' },
      { q: '車がなくても別府の地獄めぐりは回れますか？', a: '別府駅から亀の井バスの路線バスが頻発しており、鉄輪エリアや海地獄・血の池地獄へ簡単にアクセスできます。定期観光バス「別府地獄めぐりコース」を利用するのも便利です。' }
    ]
  }
];

function generatePageTsx(art) {
  const currentHotels = hotelsData[art.slug];

  return `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${art.title.replace(/'/g, "\\'")}',
  description: '${art.desc.replace(/'/g, "\\'")}',
  keywords: '${art.keywords.replace(/'/g, "\\'")}',
  openGraph: {
    title: '${art.title.replace(/'/g, "\\'")}',
    description: '${art.desc.replace(/'/g, "\\'")}',
    url: 'https://croud-travel.pages.dev/${art.slug}',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '${art.title.replace(/'/g, "\\'")}',
    description: '${art.desc.replace(/'/g, "\\'")}',
    author: {
      '@type': 'Organization',
      name: 'クラウドトラベル ひとり旅・出張調査班',
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
    datePublished: '2026-09-11T03:30:00+09:00',
    dateModified: '2026-09-11T03:30:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/${art.slug}',
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 antialiased font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>/</span>
        <span className="text-stone-700 font-medium">${art.categoryName}</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">${art.title}</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>${art.categoryName}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          ${art.title}
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          ${art.desc}
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            ${art.leadTitle}
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ${art.leadP1}
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ${art.leadP2}
          </p>
        </section>

        {/* 厳選ホテルリスト */}
        <div className="space-y-10">
          <div className="border-l-4 border-amber-800 pl-4 py-1">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
              編集部が厳選！おすすめの極上宿・ホテル詳細
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              楽天トラベルの最新APIデータを反映。口コミ高評価＆こだわり設備を徹底チェック
            </p>
          </div>

          ${art.hotelItems.map((item, idx) => {
            const h = currentHotels[item.idx];
            return `
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <div className="relative h-64 sm:h-80 w-full bg-stone-100 overflow-hidden">
              <Image
                src="${h.hotelImageUrl}"
                alt="${h.hotelName}"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第${idx + 1}選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ ${h.reviewAverage} 点（${h.reviewCount}件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  ${item.tagline}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ${item.detailTitle}
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  ${item.features.map(f => `
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">${f.title}</p>
                    <p className="text-xs text-stone-600 leading-relaxed">${f.desc}</p>
                  </div>
                  `).join('')}
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">${item.reviewPoints}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 ${h.address1}${h.address2}</p>
                  <p>🚆 ${h.access}</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="${h.affiliateUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-200"
                  >
                    楽天トラベルで空室・プランを見る →
                  </a>
                </div>
              </div>
            </div>
          </article>
            `;
          }).join('')}
        </div>

        {/* ガイド・ノウハウセクション */}
        <section className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <div className="inline-block bg-amber-500 text-stone-950 font-bold text-xs px-2.5 py-1 rounded-md">
              TIPS & GUIDE
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
              ${art.areaGuide.title}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            ${art.areaGuide.points.map(p => `
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                ${p.name}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                ${p.text}
              </p>
            </div>
            `).join('')}
          </div>
        </section>

        {/* よくある質問 FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-6">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-stone-900 border-b border-stone-200 pb-3">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            ${art.faqList.map(faq => `
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>${faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                ${faq.a}
              </p>
            </div>
            `).join('')}
          </div>
        </section>

        {/* 関連リンク・ナビゲーション */}
        <div className="text-center pt-8 border-t border-stone-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 font-medium transition-colors"
          >
            ← クラウドトラベル トップページへ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
`;
}

function run() {
  for (const art of articles) {
    const targetDir = path.join(__dirname, 'src/app', art.slug);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const pagePath = path.join(targetDir, 'page.tsx');
    const content = generatePageTsx(art);
    fs.writeFileSync(pagePath, content, 'utf8');
    console.log(`Generated page: ${pagePath}`);
  }
  console.log('\nAll 5 batch5 article pages created successfully!');
}

run();
