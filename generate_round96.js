const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

const articles = [
  {
    slug: 'furusato-tax-yamashiro-onsen-kaga-million-gourmet-stay',
    title: '【山代温泉×ふるさと納税】加賀百万石の湯の曲輪＆北大路魯山人ゆかりの美食！名門温泉旅館完全ガイド｜ゆのくに天祥・葉渡莉・たちばな四季亭',
    desc: '北陸新幹線でアクセス抜群！開湯1300年の名湯・加賀山代温泉を楽天ふるさと納税でお得に旅する。自家源泉一薬三湯と十八趣の湯巡りが自慢の「ゆのくに天祥」、木の温もりあふれる和モダン宿「葉渡莉」、明治元年創業・全館生花が彩る料亭旅館「たちばな四季亭」を徹底比較。のどぐろ・加賀橋立港のズワイガニ美食と加賀市クーポン活用術を網羅。',
    keywords: '山代温泉 ふるさと納税,ゆのくに天祥 ふるさと納税,葉渡莉 山代温泉 クーポン,たちばな四季亭 宿泊,加賀市 ふるさと納税 楽天トラベル',
    targetCity: '石川県加賀市',
    leadTitle: '紅殻格子の「湯の曲輪」、魯山人が愛した器と料理の美学——加賀山代温泉で叶える上質な北陸美食ステイ',
    leadP1: '霊峰白山を望む石川県加賀市に位置し、行基菩薩が傷を癒やすカラスを見て発見したと伝わる開湯1300年の名湯・山代温泉。温泉街の中心には、共同浴場「総湯」と明治時代の姿を復元した「古総湯」を宿が取り囲む「湯の曲輪（ゆのがわ）」と呼ばれる独特の町並みが今も美しく息づいています。九谷焼の鮮やかなステンドグラスが光を反射する古総湯で湯浴みし、紅殻格子の街並みを歩く時間は、加賀百万石の雅な文化を肌で感じさせてくれます。',
    leadP2: '美食家として名高い北大路魯山人が逗留し、陶芸と料理の腕を磨いた山代温泉は、北陸随一の美食郷でもあります。日本海の高級魚「のどぐろ」の塩焼き、橋立港で水揚げされた極上の「加賀ずわい蟹」、そして豊かな加賀野菜を職人の技で仕立てた会席料理は感動の極み。石川県加賀市へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより名門温泉宿へ驚くほどお得に滞在でき、贅を尽くした北陸の休日を満喫できます。',
    hotelsKey: 'furusato-tax-yamashiro-onsen-kaga-million-gourmet-stay',
    hotelItems: [
      {
        key: 'yamashiro_yunokuni',
        tagline: '自家源泉100％の「一薬三湯」！趣異なる三つの大浴場と十八趣の湯巡りを誇る加賀屈指の人気宿',
        detailTitle: '山代温泉 ゆのくに天祥 —— 豊富な湯量と充実の温泉エンターテインメント。のどぐろと蟹の贅沢会席',
        features: [
          { title: '敷地内から自噴する良質な自家源泉を引く三つの大浴場', desc: '「滝見の湯屋」「悠久の湯」「九谷の湯処」と趣の異なる三つの大浴場を時間帯ごとの男女入れ替えで巡る「一薬三湯」。館内だけで18種類もの湯船を贅沢に愉しめます。' },
          { title: '橋立港の旬魚・のどぐろ・加賀カニを味わう豪華ディナー', desc: '脂ののったのどぐろの塩焼きや、冬の味覚の王様・ズワイガニ、能登牛の陶板焼きなど、北陸の味覚をふんだんに盛り込んだ贅沢な会席料理が宿泊客を魅了します。' },
          { title: '自家製温泉たまご手作り体験や多彩な館内イベント', desc: '敷地内の源泉で作る温泉たまご体験や、伝統工芸村「ゆのくにの森」との連携など、ファミリーからシニアまで一日中楽しく過ごせるおもてなしが充実しています。' }
        ],
        reviewPoints: '楽天トラベル評価4.49点、口コミ3700件超。「お風呂の種類が多くて館内湯巡りだけで大満足」「温泉たまご作り体験が楽しく、食事も美味しかった」と圧倒的なリピート率を誇ります。'
      },
      {
        key: 'yamashiro_takarazuka',
        tagline: '人と自然に優しい木の温もり！総檜造りの名湯大浴場と加賀野菜・地酒を味わう和モダン旅館',
        detailTitle: '山代温泉 葉渡莉（はとり） —— 木漏れ日揺れる和のやすらぎ。手作りの温かみと古総湯への絶好アクセス',
        features: [
          { title: '檜の香りに包まれる総檜大浴場「九月九日」', desc: '天然檜を贅沢に使った大浴場と石造りの露天風呂。肌触りの滑らかな山代の湯に身を浸しながら、木の温もりと森林浴のようなリラックス効果を味わえます。' },
          { title: '湯の曲輪・古総湯まで徒歩1分の温泉街散策に最適な立地', desc: '山代温泉の中心街に位置し、古総湯や総湯、九谷焼のギャラリー散策に抜群のロケーション。夕暮れの温泉街のそぞろ歩きも気軽に楽しめます。' },
          { title: '契約農家から届く加賀野菜と地元食材の月替わり会席', desc: '加賀蓮根や金時草などの伝統野菜、日本海直送の旬魚を取り入れた身体に優しい創作料理。地酒との相性も抜群です。' }
        ],
        reviewPoints: '楽天トラベル評価4.40点、口コミ1000件超。「木造の館内が落ち着きスタッフの接客も温かい」「古総湯がすぐ目の前で山代の風情を満喫できた」と高い評価を得ています。'
      },
      {
        key: 'yamashiro_tachibana',
        tagline: '明治元年創業・桐工芸と加賀友禅の美学！全館生花が彩る全二十室の大人の隠れ家料亭旅館',
        detailTitle: '山代温泉 たちばな四季亭 —— 創業百五十余年の伝統と美意識。お部屋食で極める加賀懐石の至宝',
        features: [
          { title: '全客室・館内を華やかに彩る四季折々の生花', desc: '一歩足を踏み入れると香る花の匂いと磨き上げられた桐の床。全館に生花が贅沢にいけられ、静寂と気品に満ちた特別な大人の空間が広がります。' },
          { title: '朝夕ともにゆったりと味わう完全お部屋食スタイル', desc: '伝統の料亭旅館ならではの細やかな配慮。周りを気にせずプライベートな客室で、のどぐろや能登牛、四季の加賀懐石を一品ずつ出来立てで味わえます。' },
          { title: '源泉掛け流しの展望大浴場と露天風呂付き客室', desc: '山代の良質な名湯を引く清潔な大浴場。プライベート露天風呂を備えた客室タイプでは、誰にも邪魔されない至極の入浴が叶います。' }
        ],
        reviewPoints: '楽天トラベル評価4.70点の最高峰スコア。「生花が美しくお部屋食の料理が芸術品レベルで美味しい」「仲居さんの心配りが素晴らしく人生最高の宿」と絶賛されています。'
      }
    ],
    areaGuide: {
      title: '山代温泉・湯の曲輪散策＆加賀伝統工芸体験ガイド',
      points: [
        { name: '古総湯（こそうゆ）での明治の入浴体験', text: '明治時代の総湯を忠実に復元した「古総湯」。浴室の床や壁には九谷焼のタイルの絵付けが施され、ステンドグラスから差し込む光の中で、洗い場のない昔ながらの入浴スタイルを体験できます。' },
        { name: '北大路魯山人寓居跡「いろは草庵」の見学', text: '魯山人が大正4年に逗留した旧宿坊を公開。文人墨客が集った茶室や庭園、魯山人が削った木彫りの看板など、食と美の巨人の足跡を肌で感じられます。' },
        { name: '加賀伝統工芸村「ゆのくにの森」と九谷焼絵付け', text: '茅葺き屋根の古民家が点在する広大な工芸村。九谷焼の絵付けやろくろ体験、山中漆器の沈金、金箔貼りなど、北陸の豊かなものづくり文化を体験できます。' }
      ]
    },
    furusatoStepTitle: '石川県加賀市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「石川県加賀市」のクーポンを獲得', desc: '楽天ふるさと納税で「加賀市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。' },
      { step: 'Step 2: 3年間の有効期間内で北陸新幹線の旅を計画', desc: 'クーポンの有効期限は発行から3年間。冬のズワイガニシーズンはもちろん、春の桜や初夏の新緑、秋の味覚シーズンなど希望に合わせて予約できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用', desc: 'ゆのくに天祥、葉渡莉、たちばな四季亭などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。' }
    ]
  },
  {
    slug: 'furusato-tax-misasa-onsen-radon-immunity-stay',
    title: '【三朝温泉×ふるさと納税】世界屈指の高濃度ラドン温泉＆三徳山投入堂！免疫力向上湯治宿完全ガイド｜依山楼岩崎・三朝館・万翆楼',
    desc: '「三たび朝を迎えると元気になる」と伝わる世界屈指のラジウム名湯・鳥取県三朝温泉を楽天ふるさと納税でお得に旅する！文豪が愛した十二の庭園風呂「依山楼 岩崎」、千坪の日本庭園露天風呂を誇る「三朝館」、自家源泉掛け流しの名門「万翆楼」を徹底比較。鳥取和牛や松葉ガニ会席、三朝町トラベルクーポン活用術を網羅。',
    keywords: '三朝温泉 ふるさと納税,三朝温泉 ラドン 旅館,依山楼岩崎 ふるさと納税,三朝館 クーポン,三朝町 ふるさと納税 宿泊',
    targetCity: '鳥取県三朝町',
    leadTitle: '浸かって良し、飲んで良し、吸って良し——世界屈指のラドン温泉・三朝温泉で体験する心身再生の湯治ステイ',
    leadP1: '平安時代末期、源義朝の家来・大久保左馬之祐が白狼の命を救ったことから湧き出たと伝わる鳥取県・三朝（みささ）温泉。高濃度のラドンを含有する世界屈指の放射能泉（ラジウム温泉）として世界的に有名で、微量の放射線が細胞を活性化し免疫力や自然治癒力を高める「ホルミシス効果」が科学的にも注目されています。温泉街の中央を流れる三徳川の清流、木造旅館が立ち並ぶノスタルジックな石畳の路地、そして河原に湧く開放感抜群の無料露天風呂「河原風呂」が、訪れる者を優しく迎えます。',
    leadP2: '三朝の湯の真骨頂は、温泉に浸かる「入浴」だけでなく、ラドンガスを肺から取り込む「吸入」、そして胃腸の調子を整える「飲泉」と、三位一体で健康を取り戻せること。さらに近海で獲れた新鮮な松葉ガニやモサエビ、鳥取和牛の贅沢会席が心と体を満たします。鳥取県三朝町へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより名門旅館へお得に宿泊でき、本物の癒やしを実感できる湯治旅が叶います。',
    hotelsKey: 'furusato-tax-misasa-onsen-radon-immunity-stay',
    hotelItems: [
      {
        key: 'misasa_izanro',
        tagline: '創業大正九年・島崎藤村や野口雨情ら文豪が愛した名門！十二の湯船が並ぶ回遊式大庭園風呂「山の湯」',
        detailTitle: '三朝温泉 依山楼 岩崎 —— 三朝随一の歴史を誇る老舗旅館。名取の川風を感じる回遊式庭園露天風呂',
        features: [
          { title: '趣の異なる十二の湯船をめぐる回遊式大庭園風呂「山の湯」', desc: '左の湯・右の湯に分かれ、洞窟風呂、ラドン蒸気風呂、寝湯など多彩な湯処を完備。朝夕で男女入れ替えとなり、館内だけで世界屈指のラドン温泉を徹底的に堪能できます。' },
          { title: '三徳川を見晴らす伝統の和室と文豪ゆかりの客室', desc: '川のせせらぎが心地よい落ち着いた空間。歴史ある調度品が飾られたロビーラウンジや手入れの行き届いた日本庭園が、優雅な滞在を演出します。' },
          { title: '鳥取和牛や日本海の鮮魚・冬の松葉ガニ会席', desc: '地元の旬の恵みを熟練の技で仕上げた会席料理。冬期には本場の松葉ガニを贅沢に使ったフルコースプランも用意され、食の満足度も抜群です。' }
        ],
        reviewPoints: '楽天トラベル評価4.43点、口コミ2100件超。「お風呂の種類が豊富でラドン温泉の効能を実感した」「川沿いの静かなロケーションと丁寧な接客に癒やされた」と絶賛されています。'
      },
      {
        key: 'misasa_misasakan',
        tagline: '自家源泉から湧き出る毎分数百リットルの名湯！千坪の日本庭園露天風呂と女性に大人気のバラ風呂',
        detailTitle: '三朝温泉 三朝館 —— 圧倒的な庭園美と湯量の贅沢。自家源泉のラジウム温泉と鳥取の美食饗宴',
        features: [
          { title: '千坪の広大な日本庭園に広がる名物露天風呂「庭の湯」「滝の湯」', desc: '滝が流れる日本庭園を眺めながら入浴できる大露天風呂。夕暮れ時にはライトアップされ、四季の草木と湯気が織りなす幻想的な景色の中で湯浴みを楽しめます。' },
          { title: '毎日15時から女性限定で開催される華やかな「バラ風呂」', desc: '約200輪の生花バラが湯船一面に浮かぶ優雅なお風呂。華やかな香りに包まれながら、極上のリラックスタイムを過ごせます。' },
          { title: '鳥取県産和牛オレイン55と季節の海鮮会席', desc: '口溶けの良い脂が特徴のブランド牛「鳥取和牛オレイン55」の陶板焼きや、近海で揚がる旬魚のお造りなど、地産地消の贅沢な夕食を提供しています。' }
        ],
        reviewPoints: '楽天トラベル評価4.45点、口コミ2200件超。「庭園露天風呂の広さと雰囲気が最高」「バラ風呂がとても優雅で料理も美味しかった」と女性客やカップルから大人気です。'
      },
      {
        key: 'misasa_saika',
        tagline: '自家源泉掛け流しの贅沢な湯宿！三徳川のせせらぎを聞く落ち着いた空間と熟練職人による本格会席',
        detailTitle: '三朝薬師の湯 万翆楼 —— 木造美と現代の快適性が調和。上質な湯治を叶える大人の隠れ宿',
        features: [
          { title: '一切の加水・循環を行わない自家源泉100％掛け流し', desc: '三朝温泉でも希少な自家源泉掛け流しの湯船。湧き出たばかりの新鮮なラドン温泉が注がれ、湯上がりの肌が驚くほど潤う本物の名湯を実感できます。' },
          { title: '三徳川沿いに佇む静かなロケーションと和モダン客室', desc: '全客室が落ち着いた和の設え。窓からは三徳川の流れや三朝の山並みを望み、鳥のさえずりと川の音を聞きながら静寂の時間を過ごせます。' },
          { title: '器と盛り付けにこだわった極上の四季創作会席', desc: '料理長が一皿一皿に真心を込めた会席ディナー。鳥取のブランド食材を繊細な味わいで仕立て、特別な記念日の夜を華やかに彩ります。' }
        ],
        reviewPoints: '楽天トラベル評価4.40点。「掛け流しの温泉の泉質が素晴らしく体が軽くなった」「お料理がとても繊細で美しく、スタッフの心遣いに感謝」と高評価です。'
      }
    ],
    areaGuide: {
      title: '三朝温泉街のレトロ散歩＆日本遺産・三徳山投入堂観光ガイド',
      points: [
        { name: '日本一危険な国宝「三徳山三仏寺 投入堂」の参拝登山', text: '標高約900mの断崖絶壁に忽然と建つ国宝「投入堂」。役行者が法力で投げ入れたと伝わる奇跡の木造建築で、険しい山道を登った者だけが出会える神秘の聖地です。' },
        { name: '温泉本通りのレトロ遊技場（射的・スマートボール）と足湯めぐり', text: '昭和レトロな街並みが残る温泉本通り。昔懐かしい射的場やスマートボール屋で遊び、名物の「栃餅」を味わいながら「株湯」や「薬師の湯」などの足湯・飲泉場を巡るのが定番です。' },
        { name: '三徳川の「河原風呂」と夜のホタル観賞', text: '三徳川の河川敷にある無料の混浴露天風呂「河原風呂」。川のせせらぎを間近に感じる開放感満点の入浴が名物です。初夏には三徳川沿いに無数のホタルが舞う幻想的な光景が広がります。' }
      ]
    },
    furusatoStepTitle: '鳥取県三朝町ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「鳥取県三朝町」のクーポンを獲得', desc: '楽天ふるさと納税で「三朝町」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。' },
      { step: 'Step 2: 3年間の有効期間内で湯治・健康旅行をじっくり計画', desc: 'クーポンの有効期限は発行から3年間。冬の松葉ガニシーズンや春の新緑、秋の三徳山登山など、希望の季節に合わせて自由に予約できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用', desc: '依山楼岩崎、三朝館、万翆楼などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。' }
    ]
  },
  {
    slug: 'furusato-tax-ureshino-onsen-bihada-tofu-stay',
    title: '【嬉野温泉×ふるさと納税】日本三大美肌の湯＆名物とろける温泉湯豆腐！茶香る歴史宿完全ガイド｜和多屋別荘・大正屋・茶心の宿和楽園',
    desc: '日本三大美肌の湯として名高い佐賀県・嬉野温泉を楽天ふるさと納税でお得に旅する！二万坪の広大な敷地を誇る「和多屋別荘」、吉村順三設計の美学が光る大正十四年創業の名門「大正屋」、日本初のお茶風呂を愉しむ「茶心の宿 和楽園」を徹底比較。とろける温泉湯豆腐・佐賀牛会席・嬉野市トラベルクーポン活用術を網羅。',
    keywords: '嬉野温泉 ふるさと納税,嬉野温泉 美肌 旅館,和多屋別荘 ふるさと納税,大正屋 嬉野 クーポン,嬉野市 ふるさと納税 宿泊',
    targetCity: '佐賀県嬉野市',
    leadTitle: '化粧水に浸かるようなトロトロの湯ざわり、朝食名物「温泉湯豆腐」の感動——嬉野温泉で叶える至高の美肌リトリート',
    leadP1: '島根の斐乃上温泉、栃木の喜連川温泉とともに「日本三大美肌の湯」と称される佐賀県・嬉野温泉。ナトリウム炭酸水素塩・塩化物泉の泉質は、皮膚の余分な角質をやさしく洗い流し、水分をたっぷり補給してしっとりすべすべに仕上げる天然の美容液そのものです。嬉野川を挟んで広がる温泉街には、お茶の産地ならではの茶畑の緑が広がり、温泉の香りと香ばしい嬉野茶の香りが漂う穏やかな空気に包まれています。',
    leadP2: '嬉野温泉の朝のハイライトといえば、名物「温泉湯豆腐」。アルカリ性の温泉水で豆腐をコトコト煮込むことで、豆腐の角が溶け出し、スープが白濁してトロトロの口当たりに変化する奇跡の郷土料理です。さらに夕食には、全国トップクラスの肉質を誇るブランド牛「佐賀牛」のすき焼きやステーキ。佐賀県嬉野市へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより名門温泉旅館へお得に滞在でき、心もお肌も潤う贅沢な休日が実現します。',
    hotelsKey: 'furusato-tax-ureshino-onsen-bihada-tofu-stay',
    hotelItems: [
      {
        key: 'ureshino_wataya',
        tagline: '嬉野川沿い二万坪の壮大な日本庭園！世界的建築家・黒川紀章設計のタワー棟と三光の湯で愉しむ極上リゾート',
        detailTitle: '嬉野温泉 和多屋別荘 —— 二万坪の大空間に広がるカルチャーと美肌湯。アートと伝統が交差する大型名宿',
        features: [
          { title: '嬉野川のせせらぎを望む大浴場「御影殿」と露天風呂', desc: '美肌の湯が贅沢に注がれる広大な大浴場。御影石と檜をふんだんに使った湯処で、トロトロとした至極の泉質を全身で堪能できます。' },
          { title: '二万坪の敷地に点在する足湯ラウンジやブックカフェ', desc: '「BOOKS & TEA 三服」をはじめ、嬉野茶を味わいながら読書を楽しめる洗練されたラウンジ。川沿いのテラス足湯でのんびりと憩えます。' },
          { title: '佐賀牛のステーキや伝統会席を味わう選べるダイニング', desc: 'ミシュラン掲載の日本料理店や佐賀牛専門レストランなど、多彩な食のスタイル。素材本来の旨味を極限まで引き出したディナーが楽しめます。' }
        ],
        reviewPoints: '楽天トラベル評価4.14点、口コミ1300件超。「広大な館内の雰囲気が素晴らしい」「お湯が本当に化粧水のようで、お茶のカフェラウンジも居心地最高だった」と高い満足度を獲得しています。'
      },
      {
        key: 'ureshino_taishoya',
        tagline: '大正十四年創業・名建築家・吉村順三が手掛けた美の殿堂！四季の庭園と滝の湯・元祖とろける温泉湯豆腐',
        detailTitle: '嬉野温泉 大正屋 —— 皇族も逗留した嬉野最高峰の老舗。手入れの行き届いた日本庭園と洗練のおもてなし',
        features: [
          { title: '名建築家・吉村順三が設計した光と木が調和する空間', desc: '昭和から平成にかけて増改築を重ねた美しい和風モダン建築。自然の緑を巧みに取り入れた窓や廊下の意匠が、静謐で上質な時間を紡ぎ出します。' },
          { title: '庭園の滝を眺めながら入浴する大浴場「四季の湯」「滝の湯」', desc: '吹き抜けの高い天井とガラス張りの大浴場。目の前に流れる滝と手入れされた庭園を眺めながら、極上の美肌温泉に浸かる贅沢な時間が流れます。' },
          { title: '元祖「大正屋特製どうふ」の朝食と最高級佐賀牛会席', desc: '専用工場で作られる自慢の豆腐を温泉水で煮込んだ朝の温泉湯豆腐。夕食にはA5ランク佐賀牛や有明海の海の幸を取り入れた正統派日本料理を味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.46点、口コミ1200件超。「建物の美しさと清潔感、スタッフの洗練された所作に感動した」「朝の湯豆腐の美味しさは一生忘れられない」と絶賛されています。'
      },
      {
        key: 'ureshino_chagokoro',
        tagline: '日本初！特産うれしの茶を贅沢に浮かべた名物「緑茶風呂」！お茶の香りと美肌温泉の至福コラボレーション',
        detailTitle: '嬉野温泉 茶心の宿 和楽園 —— お茶をテーマにした癒しの宿。緑茶露天風呂とお茶すり体験・特選佐賀牛会席',
        features: [
          { title: '大きな茶つぼからお茶のエキスが注ぐ名物「緑茶風呂」', desc: '嬉野特産の高級緑茶を温泉に浸したユニークなお風呂。カテキンの殺菌作用とビタミンCの美白効果が美肌温泉と合わさり、極上の肌触りを実現しています。' },
          { title: 'お茶パックで全身をパッティングする贅沢な湯浴み', desc: '湯船の脇に用意された特製のお茶パック。顔や体に優しく当てることで、豊かなお茶の香りに包まれながらリフレッシュできます。' },
          { title: 'うれしの茶を使った創作料理と佐賀牛のしゃぶしゃぶ', desc: 'お茶の葉を天ぷらや出汁に活用した独自の創作会席。柔らかくとろける佐賀牛とともに、嬉野ならではの食の魅力を満喫できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.33点。「お茶風呂の香りがとても良く肌がツルツルになった」「お茶の演出が随所にあり料理も美味しく大満足」と女性やカップルから大好評です。'
      }
    ],
    areaGuide: {
      title: '嬉野温泉街の足湯散歩＆茶畑・肥前吉田焼観光ガイド',
      points: [
        { name: 'シーボルトの湯と湯宿広場の「足湯・足蒸し湯」', text: '大正ロマンを感じさせる洋館風の共同浴場「シーボルトの湯」。温泉街中心の「湯宿広場」では、全国的にも珍しい温泉蒸気を使った「足蒸し湯」を無料で体験できます。' },
        { name: '嬉野茶畑の茶空間「茶室テラス」での絶景ティータイム', text: '緑豊かな茶畑の中に設けられたプライベートな屋外茶室テラス「茶空間」。専属の茶農家が淹れる最高級の嬉野茶を、絶景を眺めながら味わう非日常の体験が人気です。' },
        { name: '肥前吉田焼の窯元めぐりと有田焼への立ち寄り', text: '嬉野温泉から車で約10分の「肥前吉田焼」の窯元群。素朴でモダンな器を探す陶器市やショップ巡りが楽しめます。日本屈指の陶磁器の街・有田や伊万里へのドライブにも最適です。' }
      ]
    },
    furusatoStepTitle: '佐賀県嬉野市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「佐賀県嬉野市」のクーポンを獲得', desc: '楽天ふるさと納税で「嬉野市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。' },
      { step: 'Step 2: 3年間の有効期間内で美肌温泉旅行をじっくり計画', desc: 'クーポンの有効期限は発行から3年間。新茶が香る春や、温泉が恋しい冬、秋の味覚シーズンなど、希望の日程に合わせて自由に予約できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用', desc: '和多屋別荘、大正屋、和楽園などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。' }
    ]
  },
  {
    slug: 'furusato-tax-atami-onsen-fireworks-ocean-stay',
    title: '【熱海温泉×ふるさと納税】相模湾オーシャンビュー＆熱海海上花火大会特等席！名門老舗＆絶景リゾート完全ガイド｜熱海後楽園ホテル・古屋旅館・秀花園湯の花膳',
    desc: '都心から新幹線で約45分！年中開催の海上花火大会と相模湾の絶景を誇る日本屈指の温泉リゾート「熱海温泉」を楽天ふるさと納税でお得に満喫！海一望のパノラマと大型スパ併設の「熱海後楽園ホテル」、創業百八十余年・熱海最古の名湯を誇る「古屋旅館」、花火と夜景を屋上露天から見晴らす「秀花園 湯の花膳」を徹底紹介。金目鯛会席や熱海市クーポン活用術を網羅。',
    keywords: '熱海温泉 ふるさと納税,熱海 花火大会 見える 宿 ふるさと納税,熱海後楽園ホテル クーポン,古屋旅館 熱海 宿泊,熱海市 ふるさと納税 楽天トラベル',
    targetCity: '静岡県熱海市',
    leadTitle: '青く広がる相模湾、夜空を彩る大迫力の海上花火、歴史ある源泉の温もり——熱海温泉で叶える最高の贅沢ステイ',
    leadP1: '東京駅から東海道新幹線でわずか約45分。相模灘に面した温暖な気候と、徳川家康公が逗留し江戸城まで温泉を運ばせたことで名高い熱海温泉。日本三大温泉の一つに数えられ、毎分約17,000リットルもの豊富な湯量を誇ります。近年は昭和レトロな温泉街の風情と、最新のお洒落なスイーツ店やカフェ、オーシャンビューリゾートが融合し、若者からファミリー、シニア世代まで絶大な人気を集めています。',
    leadP2: '熱海の最大の目玉は、年間を通じて10回以上開催される名物「熱海海上花火大会」。すり鉢状の地形のため花火の音が反響し、スタジアムのような迫力満点の轟音と光のスペクタクルが夜の海を彩ります。客室や露天風呂から花火を特等席で眺め、夕食には相模湾の金目鯛の姿煮や伊勢海老、アワビを堪能する滞在は至高の贅沢。静岡県熱海市へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより憧れの高級宿へお得に宿泊でき、特別な記念日旅行が最高のものになります。',
    hotelsKey: 'furusato-tax-atami-onsen-fireworks-ocean-stay',
    hotelItems: [
      {
        key: 'atami_korakuen',
        tagline: '全室オーシャンビュー＆熱海海上花火大会の特等席！巨大日帰り温泉施設「オーシャンスパ Fuua」併設の大型リゾート',
        detailTitle: '熱海後楽園ホテル —— 相模灘を見晴らす抜群のパノラマ。花火観賞と極上のインフィニティ露天風呂',
        features: [
          { title: '客室バルコニーから見下ろす相模灘と花火のダイナミックパノラマ', desc: 'タワー館や新館AQUA SQUAREの全客室から海を一望。花火大会開催日には、目の前の海上から打ち上がる大迫力のスターマインを特等席で鑑賞できます。' },
          { title: '日本最大級の露天立ち湯を備えた「オーシャンスパ Fuua」', desc: '海と湯船が一体化するインフィニティ温泉「露天立ち湯」。海風を感じながら、まるで海に浮かんでいるかのような極上の開放感を味わえます。' },
          { title: '伊豆の山海の幸が並ぶ豪華ディナービュッフェ＆和食レストラン', desc: 'ライブキッチンで仕上げるグリル料理や新鮮な刺身、伊豆特産の食材を取り入れた多彩なビュッフェ。ファミリーからカップルまで幅広く楽しめます。' }
        ],
        reviewPoints: '楽天トラベル評価4.40点、口コミ3100件超。「部屋からの海の景色と花火の迫力が最高」「Fuuaの立ち湯露天風呂が開放感抜群で何時間でもいられた」と大絶賛されています。'
      },
      {
        key: 'atami_furuya',
        tagline: '創業百八十余年・熱海最古の源泉「清左衛門の湯」を守る名門！全室お部屋食と名物金目鯛の本格日本料理',
        detailTitle: '熱海温泉 古屋旅館 —— 熱海の歴史と格式を今に伝える最高峰老舗。100％源泉掛け流しと至福の部屋食懐石',
        features: [
          { title: '熱海七湯の一つ「清左衛門の湯」を引く純度100％の掛け流し', desc: '江戸時代から枯れることなく湧き続ける奇跡の名湯。加水・加温・循環一切なしの本物の源泉掛け流し温泉を大浴場や露天風呂付き客室で満喫できます。' },
          { title: '朝夕ともにゆったりと味わえる完全お部屋食スタイル', desc: '熟練の仲居さんが一品ずつ丁寧に配膳。周りを気にすることなく、大切な人と優雅に名門旅館の味を堪能できます。' },
          { title: '秘伝のタレで煮付けた金目鯛の姿煮と旬の京風懐石', desc: '料理長が選び抜いた上質な海の幸。伊豆名物の金目鯛の煮付けや黒毛和牛など、繊細な出汁と職人技が光る贅沢なディナーを堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.86点という驚異的な高スコア。「お湯の質、お部屋食の料理、接客のすべてが完璧」「熱海で一番の宿だと確信した」と熱狂的な支持を集めています。'
      },
      {
        key: 'atami_mikaduki',
        tagline: '熱海港と市街の夜景・花火を見下ろす屋上展望露天風呂「月下美人」！料理口コミ高評価の割烹温泉旅館',
        detailTitle: '熱海温泉 秀花園 湯の花膳 —— 海と夜景を抱く特等席。屋上露天風呂からの花火観賞と美食割烹の饗宴',
        features: [
          { title: '屋上展望露天風呂「月下美人」からの絶景パノラマビュー', desc: '熱海港の堤防のすぐ目の前に位置し、海と市街地の煌めく夜景を一望。花火大会の日には、頭上に広がる大輪の花火を露天風呂から仰ぎ見ることができます。' },
          { title: '料理長が腕を振るう目にも鮮やかな本格割烹会席', desc: '相模湾で獲れた地魚の姿造りや、アワビの踊り焼き、金目鯛の煮付けなど、魚介本来の甘みと旨味を最大限に引き出した料理が高く評価されています。' },
          { title: '全室海側の落ち着いた純和風客室と細やかなもてなし', desc: '窓一面に広がる穏やかな海景色。波の音を聞きながら、日常の疲れを解きほぐす穏やかな時間を過ごせます。' }
        ],
        reviewPoints: '楽天トラベル評価4.61点、口コミ1400件超。「屋上露天風呂からの景色が最高」「お料理がどれも美味しく、花火を部屋から見られて感動した」と高い人気を誇ります。'
      }
    ],
    areaGuide: {
      title: '熱海温泉街・熱海海上花火大会＆ACAO FOREST観光ガイド',
      points: [
        { name: '熱海海上花火大会の歴史と観賞のポイント', text: '昭和27年から続く熱海名物の海上花火大会。夏だけでなく春・秋・冬と年間を通じて定期開催。海上に浮かぶ台船から打ち上げられ、フィナーレの「大空中ナイアガラ」は夜空一面を白銀の光で埋め尽くします。' },
        { name: 'ACAO FOREST（旧アカオハーブ＆ローズガーデン）での絶景カフェ', text: '相模灘を見下ろす広大な丘陵地に13のテーマガーデンが広がる名所。建築家・隈研吾氏設計の絶景カフェ「COEDA HOUSE」や、空飛ぶブランコなどフォトジェニックな体験が人気です。' },
        { name: '熱海銀座商店街でのレトロ食べ歩きと熱海プリン', text: '昭和レトロな看板が残る「熱海銀座商店街」。大行列ができる「熱海プリン」や、熱海ばたーあん、クラフトビールなど、湯上がりの散策にぴったりのグルメが満載です。' }
      ]
    },
    furusatoStepTitle: '静岡県熱海市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「静岡県熱海市」のクーポンを獲得', desc: '楽天ふるさと納税で「熱海市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。' },
      { step: 'Step 2: 3年間の有効期間内で花火大会開催日や週末旅行を計画', desc: 'クーポンの有効期限は発行から3年間。熱海海上花火大会の開催日程や連休、週末の温泉旅行など、希望の日程に合わせて自由に予約できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用', desc: '熱海後楽園ホテル、古屋旅館、秀花園湯の花膳などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。' }
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
    const affiliateUrl = data.affiliateUrl || 'https://travel.rakuten.co.jp/';
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
                <div>住所: ${address}</div>
                <div>最寄り駅・アクセス: ${data.access || data.nearestStation || '最寄り駅より送迎あり'}</div>
                <div>参考料金: <span className="font-bold text-stone-800">${chargeStr}</span></div>
                <div>ホテル番号: No.${hotelNo}</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="${affiliateUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>`;
  }).join('\n');

  const areaPointsCode = art.areaGuide.points.map(pt => {
    return `
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> ${pt.name}
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">${pt.text}</p>
            </div>`;
  }).join('\n');

  const stepsCode = art.furusatoSteps.map(st => {
    return `
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">${st.step}</div>
              <p className="text-stone-200 leading-relaxed">${st.desc}</p>
            </div>`;
  }).join('\n');

  return `import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${art.title}',
  description: '${art.desc}',
  keywords: '${art.keywords}',
  openGraph: {
    title: '${art.title}',
    description: '${art.desc}',
    type: 'article',
    url: 'https://croud-travel.pages.dev/${art.slug}',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/${art.slug}',
  },
};

export default function FurusatoTaxArticle() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 leading-relaxed font-sans">
      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-amber-50 py-16 px-4 md:px-8 border-b border-amber-900/50 shadow-2xl">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30 mb-2">
            <span>楽天ふるさと納税 宿泊クーポン完全攻略</span>
            <span>•</span>
            <span>自治体公認 宿泊割引</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white font-serif leading-tight">
            ${art.title}
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            ${art.desc}
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">${art.targetCity}</strong></span>
            <span>•</span>
            <span>還元率: 寄付額の最大30%</span>
            <span>•</span>
            <span>有効期限: クーポン獲得から3年間</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            ${art.leadTitle}
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ${art.leadP1}
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ${art.leadP2}
          </p>
          <div className="bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-200/80 text-amber-950 text-xs sm:text-sm space-y-2">
            <h3 className="font-bold text-amber-900 flex items-center gap-2">
              <span>💡</span> この記事でわかること
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-stone-800 list-disc list-inside">
              <li>ふるさと納税で泊まれる名門宿のリアルな魅力と特徴</li>
              <li>楽天トラベルクーポンを使った最大割引予約の手順</li>
              <li>失敗しない現地観光モデルルート＆名物グルメ</li>
              <li>予約済みでも間に合う「クーポンあとから適用」のやり方</li>
            </ul>
          </div>
        </section>

        {/* 楽天トラベル クーポン獲得バナー導線 */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest font-bold text-amber-200">Rakuten Travel Furusato Tax</p>
            <h3 className="text-lg sm:text-xl font-bold font-serif">${art.targetCity}のふるさと納税クーポンをチェック</h3>
            <p className="text-xs text-rose-100">寄付額の最大30%オフ！3年間有効・予約済み日程にも適用可能</p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-rose-700 font-extrabold px-6 py-3 rounded-xl shadow hover:bg-stone-100 transition text-sm flex items-center gap-1.5"
          >
            <span>クーポン一覧を見る</span>
            <span>→</span>
          </a>
        </div>

        {/* 厳選ホテル徹底解剖 */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              ふるさと納税で泊まる厳選名宿3選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              実際に楽天トラベルで圧倒的な高評価を獲得している名門ホテル・老舗旅館をピックアップ
            </p>
          </div>

${hotelCardsCode}
        </section>

        {/* 周辺観光・グルメガイド */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            ${art.areaGuide.title}
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
              <Link href="/furusato-tax-hakone-sengokuhara-pampas-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 箱根仙石原温泉 すすき草原＆美肌にごり湯特集
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
