const fs = require('fs');
const path = require('path');

const seasonalHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

const round89Configs = [
  {
    slug: 'furusato-tax-ikaho-onsen-stone-steps-luxury-stay',
    componentName: 'FurusatoIkahoOnsenStoneStepsStayPage',
    tag: '伊香保温泉 365段石段街＆二大名湯宿特集',
    title: '365段の石段街と情緒あふれる湯滝！伊香保温泉の「黄金の湯」「白銀の湯」名門旅館＆上州牛会席×ふるさと納税完全攻略ガイド【2026年最新】福一・岸権・木暮',
    metaTitle: '365段の石段街と情緒あふれる湯滝！伊香保温泉の「黄金の湯」「白銀の湯」名門旅館＆上州牛会席×ふるさと納税完全攻略ガイド【2026年最新】福一・岸権・木暮',
    shortTitle: '伊香保温泉 石段街＆黄金の湯宿特集',
    description: '万葉集にも詠まれた名湯・群馬県伊香保温泉！365段の石段街と湯の花まんじゅう。「福一」「岸権旅館」「ホテル木暮」を、群馬県渋川市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。創業四百四十年最上位の格式、黄金の湯かけ流し、北関東最大級大浴場、上州牛ステーキを満喫。',
    heroTag: '365段の石段街と二大名湯！群馬県伊香保温泉特集',
    leadTitle: 'カランコロンと鳴る下駄の音、石段を流れる茶褐色の湯滝。黄金の湯と白銀の湯に包まれる伊香保のノスタルジックな休日へ',
    leadText: '榛名山の中腹、標高約700メートルの高地に広がる関東屈指の古湯「伊香保温泉（いかほおんせん）」。中心に伸びる「365段の石段街」は、温泉街のシンボルとして全国的な知名度を誇り、石段を挟んで立ち並ぶ射的場やお土産屋、温泉まんじゅう発祥の店、そして石段の真ん中を流れるガラス張りの「湯樋（ゆどい）」など、歩くだけで大正・昭和のレトロな温泉情緒に浸ることができます。伊香保温泉の最大の魅力は、歴史ある二大名湯「黄金の湯（こがねのゆ）」と「白銀の湯（しろがねのゆ）」。鉄分を豊富に含み空気に触れると独特の茶褐色に変化する「黄金の湯」は、体を芯から温めて血行を促進し、古くから「子宝の湯」として親しまれてきました。一方、近年湧出した無色透明の「白銀の湯」は、メタけい酸を多く含み肌をやさしく潤す美肌の湯。この2つの泉質を贅沢に引き湯する一流旅館での湯浴みは、至福のリラクゼーションをもたらします。さらに夕食は、上州の大自然が育んだブランド黒毛和牛「上州牛」の霜降りステーキやすき焼き、地元群馬の名産である下仁田ねぎや旬の舞茸、手打ちの上州うどんなど、滋味豊かな郷土会席が食卓を彩ります。本特集では、創業四百四十年を誇り石段街の最上位19階に直結する名門「福一」、創業天正四年・石段街に面し希少な黄金の湯を100％完全かけ流しで注ぐ「岸権旅館」、そして伊香保随一の湯量を誇り北関東最大級の大浴場「子の湯千両」を持つ老舗「ホテル木暮」の3宿を厳選。群馬県渋川市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの伊香保温泉ステイをお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '365段の石段街を浴衣で散策！大正ロマンの風情漂う射的や温泉まんじゅう巡り',
        body: '石段の頂上にある伊香保神社や河鹿橋の紅葉ライトアップなど見どころ満載。浴衣と下駄で歩く温泉情緒は格別です。'
      },
      {
        num: '02',
        title: '茶褐色の「黄金の湯」と透明な「白銀の湯」！伊香保が誇る二大名湯の贅沢な湯巡り',
        body: '体を芯から温める鉄分豊富な黄金の湯と、肌を潤す白銀の湯。宿にいながら泉質の違いをじっくりと体感できます。'
      },
      {
        num: '03',
        title: '渋川市ふるさと納税で最大30％OFF！3年間有効クーポンで週末や紅葉シーズンに予約',
        body: '都心からバスや特急でアクセスの良い伊香保もふるさと納税なら実質2,000円。寄付から3年間有効なので、気軽な週末旅行に最適です。'
      }
    ],
    hotelDetails: [
      {
        key: 'ikaho_fukuichi',
        badge: '群馬県渋川市・創業四百四十年！石段街最上位に佇む歴史的名門「黄金の湯」「白銀の湯」二大名湯を同時堪能（口コミ1,700件超）',
        rank: '厳選名宿 第1選',
        desc: '伊香保温泉のシンボルである365段の石段街の最上位、伊香保神社に隣接する最高のロケーションに位置する創業四百四十余年の老舗旅館。館内最上階から専用通路を通って直接石段街へ出られる抜群の利便性を誇ります。大浴場「大峰」「福の湯」では、茶褐色の「黄金の湯」と透明な「白銀の湯」の両方を引き湯しており、伊香保の二大名湯を一度に贅沢に満喫可能。客室は数寄屋造りの「萬葉館」やモダンな「千樹館」など格式高い設え。夕食は群馬が誇る上州牛ステーキや地元契約農家の採れたて野菜、旬の清流魚を取り入れた華やかな創作会席料理をお部屋や個室食事処でゆったりと味わえます。'
      },
      {
        key: 'ikaho_kishigon',
        badge: '群馬県渋川市・創業天正四年！石段街に面した抜群の立地＆希少な「黄金の湯」完全100％源泉掛け流しと上州牛会席',
        rank: '厳選名宿 第2選',
        desc: '戦国時代の天正4年（1576年）創業、石段街の中段に威風堂々と佇む歴史ある名門宿。宿最大の自慢は、伊香保でも貴重な「黄金の湯」の総湧出量の約1割を引く圧倒的な湯量。大浴場「又左衛門の湯」や石段街を望む展望露天風呂「六左衛門の湯」には、加水・加温・循環一切なしの完全100％源泉掛け流しで注がれ、黄金色の濃厚な湯花が舞う本物の名湯を心ゆくまで堪能できます。客室からは榛名山系や赤城山の雄大な山並みを一望。夕食は上州牛のすき焼きや陶板焼きをメインに、地元の山の幸を活かした温かな本格和会席で、歴史と温泉愛に満ちた心地よい滞在を提供します。'
      },
      {
        key: 'ikaho_moraki',
        badge: '群馬県渋川市・伊香保随一の豊富な湯量！北関東最大級の大浴場「子の湯千両」＆口コミ総合4.7超の最高峰大型温泉ホテル',
        rank: '厳選名宿 第3選',
        desc: '伊香保温泉の源泉「黄金の湯」の総湧出量のなんと4分の1以上（毎分千リットル超）を保有する、伊香保屈指の湯量を誇る高級大型温泉ホテル。男女合わせて千坪を超える北関東最大級の湯処「子の湯千両」には、広大な庭園露天風呂をはじめ、立ち湯、寝湯、深湯、炭酸風呂など多彩な湯船がずらりと並び、まるで温泉のテーマパークのような圧倒的スケールを誇ります。客室はモダンな和洋室や展望客室が揃い、シニアからファミリーまで快適。夕食は上州牛の鉄板焼きやローストビーフ、旬の山海の幸を盛り込んだ洗練された会席料理で、接客・施設・食事すべてにおいて最高峰の満足度を誇ります。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-kusatsu-onsen-yubatake-walk-luxury-stay', title: '【草津温泉 湯畑散策＆名湯名門旅館×ふるさと納税】櫻井・一井・奈良屋' },
      { slug: 'furusato-tax-kinugawa-onsen-valley-view-luxury-stay', title: '【鬼怒川温泉 渓谷美＆名門旅館×ふるさと納税】あさや・金谷ホテル・ホテル三日月' },
      { slug: 'furusato-tax-chichibu-nagatoro-nature-onsen-stay', title: '【秩父・長瀞 名勝岩畳＆美肌温泉宿×ふるさと納税】和どう・新木鉱泉・長生館' },
      { slug: 'furusato-tax-hakone-onsen-open-air-bath-stay', title: '【箱根温泉 客室露天風呂＆名門旅館×ふるさと納税】富士屋ホテル・天成園・はつはな' }
    ]
  },
  {
    slug: 'furusato-tax-hida-takayama-old-town-luxury-stay',
    componentName: 'FurusatoHidaTakayamaStayPage',
    tag: '飛騨高山 古い町並み＆極上飛騨牛宿特集',
    title: '出格子の町家と宮川朝市！飛騨高山の古い町並み徒歩圏＆とろとろ美肌温泉・最高峰飛騨牛会席名宿×ふるさと納税完全攻略ガイド【2026年最新】花兆庵・花扇・光風館',
    metaTitle: '出格子の町家と宮川朝市！飛騨高山の古い町並み徒歩圏＆とろとろ美肌温泉・最高峰飛騨牛会席名宿×ふるさと納税完全攻略ガイド【2026年最新】花兆庵・花扇・光風館',
    shortTitle: '飛騨高山 古い町並み＆飛騨牛宿特集',
    description: 'ミシュラン三ツ星の小京都・岐阜県飛騨高山！出格子の古い町並み、赤い中橋、宮川朝市。「本陣平野屋 花兆庵」「飛騨亭 花扇」「本陣平野屋 光風館」を、岐阜県高山市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。古い町並み徒歩1分、神代欅の木造美、A5ランク飛騨牛づくし会席を満喫。',
    heroTag: '飛騨の匠の技とミシュラン三ツ星の町！岐阜県高山市特集',
    leadTitle: '出格子の連なる商家、宮川に架かる赤い中橋。飛騨の匠が遺した小京都・高山で過ごす雅な休日へ',
    leadText: '北アルプスの山々に抱かれ、江戸時代の城下町・商人町の面影を色濃く残す岐阜県「飛騨高山（ひだたかやま）」。世界的な観光ガイドブックで最高評価の三ツ星を獲得した「古い町並み（上三之町・上二之町）」には、黒い出格子が美しい商家が連なり、造り酒屋の杉玉や宮川沿いに立つ「宮川朝市」など、歩くだけで日本の伝統文化の粋に触れることができます。高山観光の拠点は、古い町並みや陣屋へ徒歩で行ける中心街、あるいは高台の静寂な温泉旅館。飛騨高山温泉は、肌にまとわりつくようなとろみのある美容液のような美肌泉質が自慢で、散策で歩き疲れた体を芯からやさしく包み込んでくれます。さらに高山を語る上で欠かせないのが、全国にその名を轟かせるブランド黒毛和牛の最高峰「飛騨牛（ひだぎゅう）」。きめ細やかな霜降りと芳醇な香りを誇る最高ランクA5飛騨牛を、名物朴葉味噌（ほおばみそ）焼き、炭火ステーキ、しゃぶしゃぶ、にぎり寿司で味わう歓びはまさに至福の極みです。本特集では、古い町並みまで徒歩1分の好立地で楽天トラベル口コミ総合4.9超を誇る最高峰旅館「飛騨高山 本陣平野屋 花兆庵」、樹齢数百年の神代欅を贅沢に配した木造美と自家源泉のトロトロ温泉が人気の「飛騨亭 花扇」、そして中橋のたもとに位置し最上階展望大浴場から町並みを一望できる「飛騨高山 本陣平野屋 光風館」の3大名宿を厳選。岐阜県高山市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの飛騨高山ステイをお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '古い町並みや中橋、宮川朝市へ徒歩すぐ！飛騨高山の風情を余すところなく堪能',
        body: '早朝の静かな古い町並み散歩や朝市での地元の人との交流。宿泊者だからこそ味わえる高山の本物の魅力を体感できます。'
      },
      {
        num: '02',
        title: '最高ランクA5「飛騨牛」の極上会席！朴葉味噌焼きや炭火ステーキの贅沢な饗宴',
        body: 'とろけるような柔らかさと豊かな旨味を誇る飛騨牛を贅沢に使用。飛騨の地酒とともに味わう美食ディナーを満喫できます。'
      },
      {
        num: '03',
        title: '高山市ふるさと納税で最大30％OFF！3年間有効クーポンで高山祭や秋の紅葉に予約',
        body: '国内外から大人気の飛騨高山の格式宿もふるさと納税なら実質2,000円。寄付から3年間有効なので、春・秋の高山祭や冬の白川郷観光にも最適です。'
      }
    ],
    hotelDetails: [
      {
        key: 'takayama_honjin',
        badge: '岐阜県高山市・古い町並み＆高山陣屋へ徒歩1分！口コミ評価4.9超・飛騨随一の格式とおもてなしを誇る最高峰料亭旅館（本陣平野屋 花兆庵）',
        rank: '厳選名宿 第1選',
        desc: '高山の中心部、宮川にかかる赤い中橋のたもとに位置し、楽天トラベル口コミ総合4.9点以上という驚異的な高評価を誇る最高峰旅館。古い町並みや高山陣屋まで歩いてすぐという絶好の立地にありながら、館内は静寂と和の気品に満ちています。女性専用のりらっくす蔵風呂や姉妹館の大浴場も自由に利用可能。宿最大の自慢は、飛騨の匠の技を器と料理に映し出した本格日本料理会席。最高ランクA5等級の極上飛騨牛を炭火焼きやしゃぶしゃぶで味わえるほか、専任の客室係による温かく細やかなおもてなしは一生の思い出に残る滞在を約束してくれます。'
      },
      {
        key: 'takayama_ouka',
        badge: '岐阜県高山市・樹齢数百年の神代欅が香る木の温もり！自家源泉100％の「とろとろ美肌温泉」と個室飛騨牛料理（飛騨亭 花扇）',
        rank: '厳選名宿 第2選',
        desc: '高山市街から少し離れた静かな高台に佇み、神代杉や神代欅、吉野杉など銘木を贅沢に使った木造建築美が光る高級温泉旅館。館内に一歩足を踏み入れると、木の芳醇な香りと畳敷きの回廊が旅人を優しく迎えます。宿の最大の誇りは、敷地内の地下1,200mから湧出する自家源泉。重曹泉のとろりとした美容液のようなお湯は「美肌の湯」として名高く、庭園露天風呂や客室露天風呂で贅沢な掛け流しの湯浴みが楽しめます。夕食は全席個室食事処にて、極上の飛騨牛ステーキや飛騨の郷土の味覚を職人が丁寧に仕立てた京風会席をゆったりと堪能できます。'
      },
      {
        key: 'takayama_miyagawa',
        badge: '岐阜県高山市・赤い中橋目前！最上階展望大浴場から古い町並みと北アルプスを一望＆女性専用りらっくす蔵（本陣平野屋 光風館）',
        rank: '厳選名宿 第3選',
        desc: '宮川と赤い中橋のたもとに建ち、観光散策の拠点としてこれ以上ない抜群のロケーションを誇る名門温泉旅館（旧別館）。最上階にある展望大浴場からは、高山の町並みと遠く連なる北アルプスの山並みが広がり、朝夕で異なる絶景パノラマを楽しめます。江戸時代の土蔵を改装した女性専用の「りらっくす蔵」では、白壁と木造の風情ある空間で癒やしの湯浴みが大好評。夕食は個室食事処で提供される旬の飛騨牛会席で、香ばしい朴葉味噌焼きや季節の炊き込みご飯など、飛騨高山ならではの温もりあふれる美食を心ゆくまで味わえます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-traditional-hearth-irori-charcoal-stay', title: '【古民家囲炉裏炭火会席＆奇跡の湯×ふるさと納税】白川郷・法師・祖谷' },
      { slug: 'furusato-tax-kamikochi-japan-alps-resort-stay', title: '【上高地 穂高連峰絶景＆山岳名宿×ふるさと納税】ルミエスタ・大正池ホテル・上高地温泉ホテル' },
      { slug: 'furusato-tax-echigo-yuzawa-onsen-sake-stay', title: '【越後湯沢温泉 雪国名湯＆魚沼コシヒカリ宿×ふるさと納税】双葉・NASPAニューオータニ・いなもと' },
      { slug: 'furusato-tax-three-great-wagyu-beef-gourmet-stay', title: '【日本三大和牛・神戸牛＆松阪牛×ふるさと納税】最高峰ステーキ名宿' }
    ]
  },
  {
    slug: 'furusato-tax-kurobe-unazuki-onsen-gorge-stay',
    componentName: 'FurusatoKurobeUnazukiStayPage',
    tag: '黒部峡谷・宇奈月温泉 トロッコ列車＆富山湾の幸特集',
    title: '黒部峡谷トロッコ列車とエメラルドの清流！宇奈月温泉の断崖絶景露天風呂＆富山湾キトキト海の幸名宿×ふるさと納税完全攻略ガイド【2026年最新】延対寺荘・やまのは・延楽',
    metaTitle: '黒部峡谷トロッコ列車とエメラルドの清流！宇奈月温泉の断崖絶景露天風呂＆富山湾キトキト海の幸名宿×ふるさと納税完全攻略ガイド【2026年最新】延対寺荘・やまのは・延楽',
    shortTitle: '宇奈月温泉 黒部峡谷＆名門宿特集',
    description: '日本一のV字峡・黒部峡谷の玄関口！エメラルドグリーンの黒部川とトロッコ列車。「延対寺荘」「黒部・宇奈月温泉 やまのは」「宇奈月温泉 延楽」を、富山県黒部市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。渓谷露天風呂、展望棚湯、富山湾の白えび・紅ズワイガニ会席を満喫。',
    heroTag: '日本一のV字峡と名湯の競演！富山県黒部市宇奈月温泉特集',
    leadTitle: '黒部川のエメラルドグリーンの奔流、峡谷を走るトロッコ列車。大自然の絶壁に抱かれる宇奈月温泉の極上旅へ',
    leadText: '北アルプスの険しい山々を削り込んで生まれた日本一深いV字峡「黒部峡谷（くろべきょうこく）」。その玄関口に位置し、トロッコ列車の起点として栄える富山県随一の名湯が「宇奈月温泉（うなづきおんせん）」です。黒部川の清流沿いに広がる温泉街は、春の新緑、夏の爽涼、秋の全山紅葉、そして冬の墨絵のような雪景色と、四季折々に息を呑むダイナミックな景観を展開。黒部川上流の黒薙温泉から引湯される湯は、日本屈指の透明度を誇る弱アルカリ性単純温泉。「つべつべ美肌の湯」として親しまれ、無色澄み切った柔らかなお湯が肌をつるつるに磨き上げます。断崖絶壁にせり出すように作られた露天風呂に浸かれば、眼下を流れるエメラルドの川音と風が心地よく吹き抜け、大自然と一体化する非日常の開放感を味わえます。さらに宇奈月温泉のもう一つの主役は、天然の生け簀と呼ばれる富山湾の恵み「キトキト（新鮮）な海の幸」。富山湾の宝石「白えび」のお造りや唐揚げ、冬の味覚の王様「紅ズワイガニ」や「本ズワイガニ」、脂がのった極上の「寒ブリ」、名水ポークなど、富山ならではの贅沢な美食が食卓を埋め尽くします。本特集では、明治三十三年創業・竹久夢二や与謝野晶子ら文人が愛した黒部川絶壁露天の老舗「延対寺荘」、黒部峡谷を一望する棚田状展望露天風呂「棚湯」と富山湾バイキングが大人気の「黒部・宇奈月温泉 やまのは」、そして全室黒部峡谷ビューと樹齢数百年の檜露天風呂・名匠の料理が光る最高峰「宇奈月温泉 延楽」の3宿を厳選。富山県黒部市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で宇奈月温泉の絶景峡谷旅をお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '黒部川の断崖絶壁にせり出す絶景露天風呂！エメラルドグリーンの清流美',
        body: '峡谷を縫うように走るトロッコ列車や赤い山彦橋を一望。日本一の透明度を誇る「つべつべ美肌の湯」を心ゆくまで堪能できます。'
      },
      {
        num: '02',
        title: '富山湾の宝石「白えび」と本場「紅ズワイガニ」！キトキト海の幸の美食会席',
        body: '天然の生け簀・富山湾から毎朝直送される鮮魚。白えびや寒ブリ、名水黒部ポークなど、富山の大自然が育んだ美味に舌鼓を打てます。'
      },
      {
        num: '03',
        title: '黒部市ふるさと納税で最大30％OFF！3年間有効クーポンでトロッコ列車の旅に最適',
        body: '黒部峡谷トロッコ列車観光や紅葉シーズンの旅行もふるさと納税なら実質2,000円。寄付から3年間有効なので計画的に利用可能です。'
      }
    ],
    hotelDetails: [
      {
        key: 'unazuki_entaijiso',
        badge: '富山県黒部市・創業明治三十三年！竹久夢二・川端康成ら文人墨客逗留の格式＆黒部川の清流を真下に見下ろす絶壁露天風呂（延対寺荘）',
        rank: '厳選名宿 第1選',
        desc: '黒部川の断崖に寄り添うように建ち、創業百二十余年の歴史を誇る宇奈月を代表する老舗旅館。与謝野晶子や川端康成など名だたる文人墨客が定宿とした格式高い宿で、客室の窓からはエメラルドグリーンに輝く黒部川の清流と対岸の切り立つ峡谷美を大迫力で見下ろせます。大浴場や露天風呂はまさに絶壁の特等席。川のせせらぎと澄み渡る風に包まれながら、名湯「つべつべ美肌の湯」を堪能できます。夕食は富山湾の旬の魚介をふんだんに盛り込んだ本格会席。富山湾の宝石・白えびの刺身や天ぷら、紅ズワイガニ、名水百選の水で育った黒部ポークの陶板焼きなど、伝統の職人技が光る美食を心ゆくまで味わえます。'
      },
      {
        key: 'unazuki_grand',
        badge: '富山県黒部市・黒部峡谷と赤い山彦橋を一望！棚田状展望露天風呂「棚湯」＆富山湾の幸が並ぶ豪華バイキング（やまのは・口コミ4,100件超）',
        rank: '厳選名宿 第2選',
        desc: '宇奈月温泉街の中心、黒部川にかかる名所「山彦橋」やトロッコ列車を望む絶景ロケーションに建つ大型リゾートホテル。最大の魅力は、棚田のように段状に広がる大展望露天風呂「棚湯」。遮るもののない大パノラマで黒部峡谷の雄大な山並みと清流を見渡しながら、開放感抜群の湯浴みが楽しめます。食事はオープンキッチンのダイニング「Seeds」にて、富山湾の朝獲れ地魚のお刺身や揚げたて天ぷら、握り寿司、富山ブラックラーメンなど約80種類の料理が並ぶ豪華バイキング。ファミリーや三世代旅行からカップルまで圧倒的な人気を誇るエンターテインメント宿です。'
      },
      {
        key: 'unazuki_togen',
        badge: '富山県黒部市・全客室が黒部峡谷に面した特等席！樹齢数百年の古代檜大露天風呂＆料理人の技が光る最高峰料理旅館（延楽）',
        rank: '厳選名宿 第3選',
        desc: '黒部峡谷の絶景を真正面に望む、宇奈月温泉随一のハイグレード料理旅館。全客室が峡谷に面して設計されており、対岸の木々の移ろいやエメラルドの川面を絵画のように楽しめます。大浴場には、樹齢数百年の銘木を使った「古代檜露天風呂」や、宮大工の技が息づく露天風呂「華の湯」があり、大自然の静寂の中で極上の安らぎを提供。宿最大の誇りは、富山湾のキトキト海の幸を贅を尽くして仕上げる本格会席料理。活け紅ズワイガニや富山湾の白えび、寒ブリ、氷見牛など、料理長が毎朝買い付ける厳選食材を使った料理は、全国の食通を唸らせる最高水準の美味を誇ります。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-tateyama-kurobe-alpen-route-resort-stay', title: '【立山黒部アルペンルート 雲上の星空＆高原リゾート×ふるさと納税】弥陀ヶ原・立山高原・森の風' },
      { slug: 'furusato-tax-kinugawa-onsen-valley-view-luxury-stay', title: '【鬼怒川温泉 渓谷美＆名門旅館×ふるさと納税】あさや・金谷ホテル・ホテル三日月' },
      { slug: 'furusato-tax-scenic-open-air-trolley-train-resort-stay', title: '【絶景トロッコ列車＆秘境温泉宿×ふるさと納税】大自然パノラマ' },
      { slug: 'furusato-tax-hida-takayama-old-town-luxury-stay', title: '【飛騨高山 古い町並み＆飛騨牛宿×ふるさと納税】花兆庵・花扇・光風館' }
    ]
  },
  {
    slug: 'furusato-tax-tateyama-kurobe-alpen-route-resort-stay',
    componentName: 'FurusatoTateyamaAlpenRouteStayPage',
    tag: '立山黒部アルペンルート 雲上リゾート＆大自然特集',
    title: '標高2000m超の雲上リゾート！立山黒部アルペンルートの夕日・満天の星と高山植物トレッキング名宿×ふるさと納税完全攻略ガイド【2026年最新】弥陀ヶ原・立山高原・森の風',
    metaTitle: '標高2000m超の雲上リゾート！立山黒部アルペンルートの夕日・満天の星と高山植物トレッキング名宿×ふるさと納税完全攻略ガイド【2026年最新】弥陀ヶ原・立山高原・森の風',
    shortTitle: '立山黒部 雲上リゾート＆アルペン名宿特集',
    description: '世界有数の山岳観光ルート・立山黒部アルペンルート！雪の大谷、みくりが池、大パノラマの雲海。「弥陀ヶ原ホテル」「立山高原ホテル」「立山連峰の宿 ホテル森の風立山」を、富山県立山町・富山市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。標高1900m雲上の露天風呂、富山湾の海の幸、星空ツアーを満喫。',
    heroTag: '雪の大谷と雲上の星空！立山黒部アルペンルート特集',
    leadTitle: '見渡す限りの雲海に沈む夕日、手に届きそうな満天の星。標高2000メートルの大自然に抱かれる立山黒部の極上ホリデーへ',
    leadText: '富山県と長野県を標高3,000メートル級の北アルプスを貫いて結ぶ、世界屈指の山岳観光ルート「立山黒部アルペンルート」。春の風物詩である高さ20メートルにも迫る雪の壁「雪の大谷」をはじめ、コバルトブルーの水面に立山連峰を映す神秘の「みくりが池」、ラムサール条約湿地に登録された「弥陀ヶ原（みだがはら）」の高山植物群落、そして毎秒10トン以上の水煙を上げる「黒部ダム」の大放水など、地球の息吹を肌で感じる大迫力のパノラマが広がります。立山黒部アルペンルートの醍醐味は、一般車両が入れない標高2,000メートル前後の高地に位置する雲上のリゾートホテルへの宿泊。日中の喧騒が静まり返った夕暮れ、眼下一面に広がる大雲海を黄金色に染めながら沈みゆく夕日や、遮るもののない漆黒の夜空を埋め尽くす満天の天の川は、宿泊者だけが出会える奇跡の絶景です。さらに山麓エリアには良質な美肌温泉が湧出しており、山歩きの疲れを優雅に癒やしてくれます。ディナーは、標高の高い山岳ホテルでありながら富山湾から直送される新鮮な海の幸（白えび、寒ブリ、ホタルイカ）や、富山県産黒毛和牛、名水ポークなどを贅沢に取り入れた本格フレンチフルコースや和食会席。本特集では、標高1,930mの高原湿原に佇み雲海と星空観察会が名物の「弥陀ヶ原ホテル」、標高2,300m天狗平に位置し大日連峰の稜線を望む「立山高原ホテル」、そして立山山麓の美肌温泉と壮大な吹き抜けロビーを誇る「立山連峰の宿 ホテル森の風立山」の3宿を厳選。富山県立山町・富山市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で一生に一度は体験したい立山黒部の雲上旅をお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '標高2000mの雲海とプラネタリウムのような満天の星！宿泊者だけの特別な感動体験',
        body: '夕暮れの大雲海や、頭上に降るような天の川。ホテルの星空観察会や早朝散策で、大自然の神秘を肌で体感できます。'
      },
      {
        num: '02',
        title: '雪の大谷やみくりが池トレッキングの拠点！混雑を避けて優雅に巡るアルペンルート',
        body: '朝一番の空いている時間帯に観光スポットへ直行可能。体力に合わせて高山植物や雄大な山岳パノラマを堪能できます。'
      },
      {
        num: '03',
        title: '立山町ふるさと納税で最大30％OFF！3年間有効クーポンで春の雪の大谷や秋の紅葉に予約',
        body: '宿泊予約が集中するアルペンルートのホテルもふるさと納税なら実質2,000円。寄付から3年間有効なので安心して旅行を計画できます。'
      }
    ],
    hotelDetails: [
      {
        key: 'tateyama_midagahara',
        badge: '富山県立山町・標高1930m雲上の高原湿原！大パノラマの夕日と満天の星空観察会＆本格フレンチディナー（弥陀ヶ原ホテル・口コミ4.7超）',
        rank: '厳選名宿 第1選',
        desc: 'ラムサール条約湿地に登録された広大な弥陀ヶ原湿原の目の前に佇む、雲上のネイチャーリゾートホテル。客室の大きな窓からは、見渡す限りの緑の湿原や大雲海、遠く富山湾の海岸線まで見渡すことができます。夕暮れ時にはラウンジやテラスで雲海に沈む神々しい夕日を眺め、夜にはホテル専属スタッフによる星空観察会やスライド上映会を開催。大浴場からは高原の清々しい景色を眺めながらゆったりと入浴できます。食事は山の上とは思えないクオリティを誇る本格フレンチフルコースまたは和食会席で、富山湾の新鮮な海の幸や地元食材を活かした極上のディナーを堪能できます。'
      },
      {
        key: 'tateyama_hotel',
        badge: '富山県立山町・標高2300m天狗平！大日連峰を望む絶景ロケーション＆室堂やみくりが池へのアクセス抜群（立山高原ホテル）',
        rank: '厳選名宿 第2選',
        desc: 'アルペンルートの中心地・室堂のすぐ手前、標高2,300メートルの天狗平に位置する山岳高原ホテル。大日連峰の荒々しい岩峰と剱岳の雄姿を間近に仰ぐ圧倒的なロケーションが魅力です。春にはホテル周辺が巨大な雪壁に囲まれ、夏にはチングルマなどの高山植物が咲き乱れます。館内には展望大浴場やサウナを完備し、トレッキングの後の疲れた体を温かくリフレッシュ。夕食は富山の味覚を散りばめた季節の和食会席膳で、富山湾の白えびや新鮮な魚介、温かな鍋料理など、山岳ホテルならではの温もりあふれるおもてなしで心洗われる時間を過ごせます。'
      },
      {
        key: 'tateyama_morinosuiseki',
        badge: '富山県富山市・立山山麓に佇む北欧風リゾート！つるつる美肌の天然温泉＆壮大な吹き抜けロビーと富山湾の旬魚会席（森の風立山）',
        rank: '厳選名宿 第3選',
        desc: '立山黒部アルペンルートの富山側玄関口・立山駅近くの山麓に佇むハイグレード温泉リゾートホテル。館内に入ると、ガラス張りの壮大な吹き抜けロビーと暖炉が旅人を温かく迎え入れます。最大の自慢は、重曹成分を豊富に含み、入浴した瞬間に肌が滑らかになるアルカリ性単純温泉の大浴場。広々とした露天風呂やサウナ、箱蒸し風呂など多彩な温浴設備で名湯をじっくり満喫できます。夕食は富山湾の旬の魚介（白えび、寒ブリ、バイ貝）や地元産黒毛和牛を使った贅沢な創作和食会席で、翌日のアルペンルート観光に向けた最高の拠点となります。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-kurobe-unazuki-onsen-gorge-stay', title: '【宇奈月温泉 黒部峡谷＆名門宿×ふるさと納税】延対寺荘・やまのは・延楽' },
      { slug: 'furusato-tax-kamikochi-japan-alps-resort-stay', title: '【上高地 穂高連峰絶景＆山岳名宿×ふるさと納税】ルミエスタ・大正池ホテル・上高地温泉ホテル' },
      { slug: 'furusato-tax-furano-biei-lavender-nature-stay', title: '【富良野・美瑛 ラベンダー＆青い池絶景宿×ふるさと納税】新富良野プリンス・オリカ・白金温泉ゆゆ' },
      { slug: 'furusato-tax-karuizawa-luxury-resort-villa-stay', title: '【軽井沢 高原リゾート＆名門ホテル×ふるさと納税】マリオット・プリンスイースト・音羽ノ森' }
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

for (const cfg of round89Configs) {
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
    '絶景露天風呂',
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
          <time dateTime="2026-09-10">2026年9月10日公開</time>
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
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">${cfg.shortTitle}が選ばれる3つの理由</a></li>
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
          <span>🌟</span> ${cfg.shortTitle}が選ばれる3つの理由
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
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ${sanitizeString(h1.hotelSpecial || '歴史ある名湯とおもてなしの心で極上の温泉旅をお届けします。')}
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “${sanitizeString(h1.userReview || '温泉もお料理も本当に素晴らしく、大満足の滞在でした。')}”
            </blockquote>
          </div>
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
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ ${h2.reviewAverage || '4.4'}</span> (${h2.reviewCount || 0}件)</div>
            <div><strong>参考価格:</strong> 1名あたり約${(h2.hotelMinCharge || 16000).toLocaleString()}円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">${h2Desc}</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ${sanitizeString(h2.hotelSpecial || '豊かな温泉と贅沢な地元料理で心と体を芯から癒やします。')}
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “${sanitizeString(h2.userReview || '露天風呂からの景色が最高で、お料理もとても美味しかったです。')}”
            </blockquote>
          </div>
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
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ ${h3.reviewAverage || '4.5'}</span> (${h3.reviewCount || 0}件)</div>
            <div><strong>参考価格:</strong> 1名あたり約${(h3.hotelMinCharge || 19000).toLocaleString()}円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">${h3Desc}</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ${sanitizeString(h3.hotelSpecial || '特別な記念日やご家族での滞在にふさわしい上質な時間をご提供します。')}
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “${sanitizeString(h3.userReview || '温かなおもてなしに感動しました。家族全員が大満足です。')}”
            </blockquote>
          </div>
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
              <p className="text-xs md:text-sm text-gray-600">訪れたい温泉宿のある自治体へ寄付。寄付額の最大30％相当の楽天トラベルクーポンが数日以内にマイクーポンへ自動付与されます。</p>
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
              <p className="text-xs md:text-sm text-gray-600">翌年の住民税・所得税から控除され、実質負担は年間2,000円のみ！浮いた予算で旅行をさらにアップグレードできます。</p>
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
              はい！楽天トラベルの「あとからクーポン適用」機能に対応している施設であれば、予約後でもマイページから自治体クーポンを適用して割引を受けられます。
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>トラベルクーポンの有効期限はどれくらいですか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              楽天ふるさと納税トラベルクーポンの有効期限は「寄付完了日の翌々年同月末まで（実質約3年間）」となっています。旅行予定に合わせてじっくり使えます。
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>ハイシーズンや週末でも利用できますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、対象ホテルの空室があれば、年末年始やゴールデンウィーク、お盆や紅葉・雪見シーズンのハイシーズンでも除外日なくクーポンをご利用いただけます。
            </p>
          </details>
        </div>
      </section>

      {/* 関連記事リンク */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>🔗</span> あわせて読みたい注目のふるさと納税特集
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

console.log('\nAll 4 Round 89 pages successfully written!');
