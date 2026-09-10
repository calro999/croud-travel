const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

// 超長文・徹底解説コンテンツを生成するための共通ビルダー
const articles = [
  {
    slug: 'furusato-tax-kinosaki-onsen-sotoyu-crab-stay',
    title: '【城崎温泉×ふるさと納税】七田外湯めぐり＆絶品松葉ガニ・但馬牛を味わう名旅館ステイ完全ガイド｜西村屋本館・三木屋・川口屋リバーサイドホテル',
    desc: '開湯1300年の歴史を誇る名湯・城崎温泉の極上旅を楽天ふるさと納税で最大お得に！七田外湯めぐりの風情、文豪・志賀直哉ゆかりの宿、冬の味覚の王様・津居山港産松葉ガニや但馬牛の会席料理を徹底解説。西村屋本館、三木屋、川口屋リバーサイドホテルの宿泊記とクーポン利用法を網羅。',
    keywords: '城崎温泉 ふるさと納税,城崎 外湯めぐり 浴衣 旅館,西村屋本館 楽天トラベル,城崎 松葉ガニ 温泉宿,豊岡市 ふるさと納税 旅行クーポン',
    targetCity: '兵庫県豊岡市',
    leadTitle: '大谿川の柳並木と下駄の音、冬の松葉ガニと文学の薫り——城崎温泉で叶える至高のふるさと納税旅',
    leadP1: '浴衣に下駄を鳴らし、柳揺れる大谿川沿いをそぞろ歩きながら七つの外湯を巡る——関西随一の情緒を誇る城崎温泉は、開湯1300年を超える由緒正しき湯の街です。街全体を一軒の大きな温泉宿に見立てる「街全体がひとつの宿」という伝統思想が今も息づいており、旅館で浴衣に着替えて街へ繰り出す外湯めぐり体験は、他のどの温泉地とも異なる唯一無二の旅情感を醸し出しています。駅は玄関、道路は廊下、旅館は客室、そして外湯は大浴場。この温かい共同体意識が、旅人を優しく迎え入れてくれます。',
    leadP2: 'さらに冬期には、近海・津居山港や柴山港で水揚げされた極上の「松葉ガニ」が解禁され、全国から食通が押し寄せる美食の聖地へと変貌します。幻のブランド牛「但馬牛」のすき焼きや炭火焼き会席とともに味わう旬の味覚は、一生に一度は味わいたい贅沢そのもの。楽天ふるさと納税のトラベルクーポンを活用すれば、豊岡市への寄付を通じて数万円単位の宿泊補助を受けられ、普段は敷居の高い憧れの最高級旅館や老舗文化財宿にお得に滞在できます。',
    hotelsKey: 'furusato-tax-kinosaki-onsen-sotoyu-crab-stay',
    hotelItems: [
      {
        key: 'kinosaki_nishimuraya',
        tagline: '創業百六十年の歴史が息づく山陰随一の純日本旅館！名匠・平田雅哉棟梁による数寄屋建築と松葉ガニ極上会席',
        detailTitle: '城崎温泉 西村屋本館 —— 枯山水の中庭を囲む奇跡の数寄屋建築と、細部まで磨き抜かれたおもてなしの神髄',
        features: [
          { title: '登録有形文化財指定の大広間と庭園美', desc: '安政年間の創業より160余年、城崎温泉の象徴として君臨する西村屋本館。昭和の名工・平田雅哉が手掛けた平田館をはじめ、各客室から眺める手入れの行き届いた日本庭園は息をのむ美しさです。伝統的な数寄屋造りの意匠と静謐な佇まいが、訪れる者を非日常の極みへと誘います。' },
          { title: '津居山港・柴山港から直仕入れの極上松葉ガニ', desc: '冬の西村屋を語る上で欠かせないのが、職人が厳選した最上級の活松葉ガニ。花咲くカニ刺し、炭火で香ばしく焼き上げる焼きガニ、濃厚なカニ味噌甲羅焼き、旨味が溶け出すカニ鍋から締めの雑炊まで、余すところなく堪能できます。' },
          { title: '吉の湯・福の湯・尚の湯の三つの館内名湯', desc: '外湯めぐりだけでなく、檜の芳香漂う大浴場「吉の湯」や中国の古瓦・青石をあしらったモダンな「福の湯」、プライベートな「尚の湯」など、館内でも自家源泉の滑らかな湯を心ゆくまで愉しめます。' }
        ],
        reviewPoints: '楽天トラベル評価5.0点満点を叩き出す究極の名門旅館。隅々まで行き届いた仲居さんの洗練された接客、歴史ある調度品、一品一品が美術品のような料理会席など、宿泊者のほぼ全員が「人生最高の滞在」と絶賛しています。'
      },
      {
        key: 'kinosaki_mikiya',
        tagline: '志賀直哉が名作「城の崎にて」を執筆した登録有形文化財の宿！三百坪の日本庭園と洗練の和モダンリノベーション',
        detailTitle: '城崎温泉 三木屋 —— 文豪の筆を走らせた静寂の木造建築と、現代の快適性が調和するブック＆ガーデンステイ',
        features: [
          { title: '昭和2年建築の登録有形文化財の風情', desc: '志賀直哉をはじめとする多くの文豪・墨客に愛されてきた三木屋。登録有形文化財に指定された木造3階建ての趣ある回廊や階段の手すり、ガラス窓の歪み一つひとつに大正・昭和初期の温もりが宿ります。志賀直哉が逗留した26号室は当時の姿のまま大切に保存されています。' },
          { title: '三百坪の四季折々の日本庭園を眺める時間', desc: '館内ロビーやラウンジ、多くの客室から望むのは手入れされた広大な日本庭園。春の新緑、夏の深緑、秋の紅葉、冬の雪景色と、移ろう季節を静かに眺めながら過ごす読書時間は格別の贅沢です。' },
          { title: '但馬牛と日本海の旬の幸を繊細な和会席で', desc: '地元・但馬牛を中心とした贅沢なコース仕立ての夕食。冬期には本場の松葉ガニプランも用意され、文豪の愛した特別な空間で滋味深い兵庫の美味を心ゆくまで堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.76点。「城の崎にて」の舞台となった26号室の特別感はもちろん、リノベーションされた清潔で洗練された館内、スタッフの温かな気配り、ライブラリーラウンジの居心地の良さに高評価が集中しています。'
      },
      {
        key: 'kinosaki_kawaguchiya',
        tagline: '大谿川沿いに佇む絶景眺望自慢の本格旅館！多彩な貸切露天風呂と但馬牛・香住ガニの美食饗宴',
        detailTitle: '城崎温泉 川口屋城崎リバーサイドホテル —— リバービューの絶好ロケーションと、贅沢なプライベート湯巡り',
        features: [
          { title: '大谿川を望むワイドな客室眺望と便利な立地', desc: '城崎温泉街の中心を流れる大谿川に面し、窓からは柳並木と川の流れを一望できます。駅や外湯街へのアクセスも至便で、外湯めぐりの拠点として抜群のロケーションを誇ります。' },
          { title: '風情溢れる趣の異なる貸切露天風呂', desc: 'プライベートな湯浴みを堪能できる貸切露天風呂が充実。家族連れやカップルで気兼ねなく温泉を満喫でき、夜風に吹かれながら星空と湯気を楽しむ贅沢なひとときを過ごせます。' },
          { title: '選べる但馬牛ステーキと旬魚舟盛り・カニ料理', desc: '但馬牛の鉄板焼きやしゃぶしゃぶ、そして日本海で獲れた新鮮な海の幸が並ぶ豪華会席。コストパフォーマンスに優れ、ふるさと納税クーポンを適用することで驚くほどリーズナブルに高級宿泊が叶います。' }
        ],
        reviewPoints: '楽天トラベル評価4.45点。スタッフの親しみやすい接客、浴衣の無料貸出サービス、駅からの送迎や外湯めぐりへのサポートなど、きめ細やかな配慮と充実した食事内容に多くのリピーターが支持を寄せています。'
      }
    ],
    areaGuide: {
      title: '城崎温泉 外湯めぐり＆街歩き完全攻略ガイド',
      points: [
        { name: '七田外湯めぐりの知っておくべき特徴', text: '城崎には「一の湯」「御所の湯」「曼陀羅湯」「さとの湯」「柳湯」「地蔵湯」「鴻の湯」という7つの外湯が存在します。旅館宿泊客に配布される「外湯めぐりデジタルパス（ゆめぱ）」を使えば、チェックインから翌日チェックアウトまで何回でも無料で入浴可能。野趣あふれる滝を望む露天風呂が人気の「御所の湯」や、合格祈願・開運の「一の湯」は必訪です。' },
        { name: '松葉ガニの旬（11月上旬〜3月下旬）の選び方', text: '冬の城崎の主役は、日本海で水揚げされるズワイガニの雄「松葉ガニ」。特に津居山港で揚がるカニには青いタグが付けられ、身の甘みとぎっしり詰まった味噌の濃厚さは全国屈指。ふるさと納税クーポンをカニ解禁シーズンに合わせることで、通常1泊7〜10万円を超える極上カニプランの自己負担を大幅に圧縮できます。' },
        { name: '大谿川沿いの柳並木と浴衣散策の楽しみ方', text: '城崎では、浴衣と下駄で街を歩くことが正装とされます。川沿いにはレトロなカフェ、地ビールスタンド、但馬牛メンチカツや温泉卵の食べ歩きスポットが並び、夜にはガス灯が川面を照らす幻想的な夜景を楽しめます。' }
      ]
    },
    furusatoStepTitle: '豊岡市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 豊岡市の返礼品「楽天トラベルクーポン」を獲得', desc: '楽天ふるさと納税で「兵庫県豊岡市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了後、即座に楽天会員アカウントへクーポンが付与されます。' },
      { step: 'Step 2: 寄付日から3年間の有効期間内に予約', desc: 'クーポンの有効期限はたっぷり3年間。冬の松葉ガニシーズンはもちろん、新緑の春や紅葉の秋など、自分の旅行スケジュールに合わせて宿泊日を自由に選べます。' },
      { step: 'Step 3: 楽天トラベルで対象ホテルを予約＆クーポン適用', desc: '予約確認画面で「ふるさと納税クーポン」を選択するだけで、宿泊代金から即座に寄付控除分が差し引かれます。予約済み後の「あとから適用」にも対応しているため安心です。' }
    ]
  },
  {
    slug: 'furusato-tax-dogo-onsen-historic-bath-stay',
    title: '【道後温泉×ふるさと納税】日本最古の湯・道後温泉本館と文学＆アートの街を旅する極上宿ガイド｜ふなや・大和屋本店・茶玻瑠',
    desc: '日本書紀にも登場する日本最古の名湯・道後温泉を楽天ふるさと納税でお得に満喫！保存修理工事を終えた道後温泉本館の全館営業再開、夏目漱石「坊っちゃん」ゆかりの歴史、飛鳥乃湯泉や道後商店街の散策まで徹底案内。老舗最高峰「ふなや」、能舞台を擁する「大和屋本店」、屋上絶景露天の「茶玻瑠」をご紹介。',
    keywords: '道後温泉 ふるさと納税,道後温泉本館 旅館,ふなや 道後温泉 クーポン,大和屋本店 ふるさと納税,松山市 楽天トラベル クーポン',
    targetCity: '愛媛県松山市',
    leadTitle: '三千年の歴史を誇る名湯、文学の息吹、飛鳥ロマン——道後温泉で過ごす上質な休日とふるさと納税活用術',
    leadP1: '聖徳太子や舒明天皇をはじめ、多くの皇族や文豪が訪れた記録が残る日本最古の温泉地・道後温泉。そのシンボルである木造三階建ての「道後温泉本館」は、長年の保存修理工事を終えて全館営業を再開し、明治の建築美と大浴場の風情が今ふたたび完全な姿で蘇りました。アルカリ性単純温泉の柔らかな湯は刺激が少なく、湯上がりの肌がしっとりと潤う「美人の湯」として古くから親しまれています。',
    leadP2: 'さらに現代の道後温泉は、歴史情緒だけでなく「道後オンセナート」に代表される最先端のアートが融合した知的な温泉街としても大人気。夏目漱石の小説『坊っちゃん』の舞台となった街並みを歩き、道後麦酒館で地ビールを味わい、伊予牛や瀬戸内の真鯛を堪能する滞在は最高の贅沢です。松山市へのふるさと納税を活用すれば、名門旅館の宿泊代金を大幅に抑えながら、ワンランク上の客室や会席プランを手に入れることができます。',
    hotelsKey: 'furusato-tax-dogo-onsen-historic-bath-stay',
    hotelItems: [
      {
        key: 'dogo_funaya',
        tagline: '寛永四年創業・道後随一の歴史を誇る名門老舗！皇族や夏目漱石が愛した千五百坪の日本庭園「詠風庭」と至高の湯',
        detailTitle: '道後温泉 ふなや —— 390有余年の伝統とおもてなし。渓流と緑が包む広大な庭園で味わう極上の非日常',
        features: [
          { title: '千五百坪の自然美が広がる庭園「詠風庭」', desc: '御手洗川の清流が流れ、四季折々の草花が咲き誇る広大な日本庭園。夏目漱石や正岡子規、高浜虚子ら文人墨客が憩った足跡が残り、川床テラス「足湯カフェ」でのんびりと憩うことができます。' },
          { title: '道後温泉の引き湯を満喫する檜と御影石の湯処', desc: '大浴場「檜湯」と「御影湯」には、肌に優しい道後の源泉がたっぷりと注がれます。サウナや打たせ湯も備え、静かな庭園の緑を眺めながら心身を芯から解きほぐすことができます。' },
          { title: '瀬戸内の天然真鯛と伊予牛を極める伝統会席', desc: '愛媛の豊かな海の幸・山の幸を知り尽くした料理長が紡ぐ四季会席。鯛の兜煮や鯛飯、肉質柔らかな伊予牛フィレステーキなど、歴史ある料亭旅館ならではの洗練された味わいが感動を呼びます。' }
        ],
        reviewPoints: '楽天トラベル評価4.74点、レビュー数2000件超えの名実ともに道後を代表する名館。庭園散策の素晴らしさ、スタッフ一人ひとりの品格ある所作、お部屋の快適さと料理の完成度に圧倒的な高評価が寄せられています。'
      },
      {
        key: 'dogo_yamatoya',
        tagline: '本格数寄屋造りの純和風旅館！能舞台「千寿殿」を望むロビーと、道後初のフリーフローラウンジで優雅な滞在',
        detailTitle: '道後温泉 大和屋本店 —— 能舞台の幽玄美と現代の粋。慶応四年創業の伝統が織りなす和モダン湯宿',
        features: [
          { title: '館内に鎮座する本格能舞台「千寿殿」', desc: 'ロビー正面に広がる檜造りの本格能舞台。定期的に能や狂言の解説付き公演や体験が催され、日本の伝統文化を身近に感じる唯一無二の滞在体験を提供しています。' },
          { title: '檜と岩の趣ある大浴場と充実の湯上がりサービス', desc: '道後温泉本館からほど近い立地にありながら、広々とした大浴場と緑を望む露天風呂を完備。湯上がりラウンジでは、冷たい愛媛の日本酒やビール、名物駄菓子などが振る舞われます。' },
          { title: '和食・洋食・中華の巨匠が腕を振るう美食体験', desc: '伝統的な日本料理会席はもちろん、瀬戸内フレンチや本格中国料理など、多彩なダイニングスタイルを選択可能。食のクオリティに対するこだわりは愛媛屈指と評されています。' }
        ],
        reviewPoints: '楽天トラベル評価4.62点、レビュー2200件超。道後温泉本館まで徒歩1分の好立地、能舞台の圧倒的な存在感、フリーフロースタイルのラウンジサービスと地酒の美味しさが特に高い支持を集めています。'
      },
      {
        key: 'dogo_chaharu',
        tagline: '道後温泉本館の真裏に佇むスタイリッシュリゾート！屋上露天風呂から松山城を遠望し、女性に愛される美食フレンチ＆和食',
        detailTitle: '道後温泉 茶玻瑠 —— アートと光が彩る現代湯宿。松山パノラマを望む屋上露天と四季のイングリッシュガーデン',
        features: [
          { title: '松山城と市街の夜景を見晴らす屋上露天風呂', desc: '最上階10階に位置する屋上露天風呂「月の湯」「星の湯」。道後温泉街を見下ろし、天気の良い日には遠く松山城のライトアップや瀬戸内の夕暮れパノラマを望む絶景入浴が叶います。' },
          { title: '世界的デザイナーによるイングリッシュガーデン', desc: '館内には世界的ガーデナーが手掛けた開放的なイングリッシュガーデンが広がり、温泉旅館の枠を超えたスタイリッシュで心地よいリゾート空間を演出しています。' },
          { title: '女性人気の高い創作フレンチ＆伊予の旬会席', desc: '地元愛媛の新鮮野菜や瀬戸内の魚介をふんだんに取り入れたオープンキッチン形式の創作料理。見た目にも美しいコース料理は、女子旅やカップル旅行に絶大な支持を得ています。' }
        ],
        reviewPoints: '楽天トラベル評価4.13点、2800件以上の口コミ。道後温泉本館から徒歩30秒という抜群の立地、屋上露天風呂の開放感、そして朝食ビュッフェの美味しさとデザイン性の高い館内が高く評価されています。'
      }
    ],
    areaGuide: {
      title: '道後温泉本館・別館飛鳥乃湯泉＆松山観光パーフェクトガイド',
      points: [
        { name: '道後温泉本館の全館再開と楽しみ方', text: '重要文化財でありながら公衆浴場として営業を続ける道後温泉本館。神の湯・霊の湯の2つの大浴場に加え、坊っちゃんの間や又新殿（日本唯一の皇族専用浴室）の観覧など、建築遺産としての見どころが満載。混雑が予想されるため、早朝（朝6時開館）の入浴や事前の整理券確認がおすすめです。' },
        { name: '飛鳥乃湯泉（あすかのゆ）と椿の湯の湯巡り', text: '本館から徒歩数分の場所にある「道後温泉別館 飛鳥乃湯泉」は、飛鳥時代の建築様式を取り入れた湯屋。愛媛の伝統工芸（砥部焼や大島石、今治タオルなど）と現代アートが融合した特別個室風呂は、プライベートな入浴を楽しみたい旅行者に大人気です。' },
        { name: '坊っちゃん列車・松山城・道後ハイカラ通りの散策', text: '道後温泉駅から伸びるアーケード商店街「道後ハイカラ通り」には、一六タルトや坊っちゃん団子、今治タオル専門店、愛媛みかんジュースの蛇口スタンドがずらり。レトロな「坊っちゃん列車」に乗って松山城の天守閣へ向かうショートトリップも定番のモデルコースです。' }
      ]
    },
    furusatoStepTitle: '松山市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 愛媛県松山市の返礼品クーポンを取得', desc: '楽天ふるさと納税で「愛媛県松山市」のトラベルクーポンを返礼品として選択・寄付します。寄付完了後、数分以内に自分の楽天アカウントへ自動付与されます。' },
      { step: 'Step 2: 3年間の有効期限内で旅行プランを決定', desc: 'クーポンの有効期限は発行からたっぷり3年間。道後温泉本館の予約や連休・週末の空室状況を見ながら、じっくりと旅行日程を組み立てられます。' },
      { step: 'Step 3: 楽天トラベル予約時にクーポンを選択・割引即時適用', desc: 'ふなや、大和屋本店、茶玻瑠など松山市内の対象宿を予約する際、決済画面でクーポンを適用。宿泊代金から30%相当額がダイレクトに値引きされます。' }
    ]
  },
  {
    slug: 'furusato-tax-unzen-onsen-jigoku-sulfur-stay',
    title: '【雲仙温泉×ふるさと納税】雲仙地獄の湯煙と濃厚白濁硫黄泉！名門クラシックホテル＆美食リゾート滞在ガイド｜雲仙宮崎旅館・雲仙観光ホテル・雲仙福田屋',
    desc: '日本最初の国立公園に佇む名湯・雲仙温泉を楽天ふるさと納税で満喫！立ち上る地獄谷の噴気と美肌の白濁硫黄泉、国の有形文化財に指定された雲仙観光ホテル、地獄を一望する雲仙宮崎旅館、民芸モダンが魅力の福田屋を徹底紹介。長崎和牛・島原の地魚・卓袱料理の美味とクーポン利用術を網羅。',
    keywords: '雲仙温泉 ふるさと納税,雲仙地獄 旅館,雲仙観光ホテル ふるさと納税,雲仙宮崎旅館 クーポン,長崎 温泉 ふるさと納税 旅行',
    targetCity: '長崎県雲仙市',
    leadTitle: '標高700mの雲上に広がる奇跡の白濁湯、異国情緒あふれるクラシックリゾート——雲仙温泉で味わう至高の湯治旅',
    leadP1: '長崎県・島原半島の中央にそびえる雲仙岳の山懐、標高約700メートルの高地に広がる雲仙温泉。大地のエネルギーが白い湯煙とともに轟音を立てて噴き出す「雲仙地獄」を中心に、明治から昭和初期にかけて外国人の避暑地として栄えた異国情緒豊かな温泉リゾートです。酸性の強い濃厚な白濁硫黄泉は、殺菌効果と美肌効果に優れ、「一度浸かれば肌が生まれ変わる」と称される名湯として知られています。',
    leadP2: '雲仙の魅力は温泉だけに留まりません。日本初の国立公園に指定された雄大な山岳風景、スイスの山岳ロッジを思わせるクラシックホテル建築、そして有明海と橘湾に囲まれた島原半島の豊かな山海の幸（長崎和牛、島原の手延べそうめん、新鮮な雲仙地魚）が旅人を魅了します。雲仙市へのふるさと納税を利用すれば、最高峰の伝統ホテルや隠れ家旅館に賢く宿泊でき、一生の思い出に残る上質な雲上ステイが実現します。',
    hotelsKey: 'furusato-tax-unzen-onsen-jigoku-sulfur-stay',
    hotelItems: [
      {
        key: 'unzen_miyazaki',
        tagline: '創業九十有余年・全館リニューアルで生まれ変わった極上宿！雲仙地獄を望む絶景テラスと源泉かけ流し美肌湯',
        detailTitle: '雲仙温泉 雲仙宮崎旅館 —— 地獄の息吹を間近に感じるパノラマビューと、四季の日本庭園に包まれるラグジュアリー',
        features: [
          { title: '地獄谷の湯煙と雄大な庭園を望む客室テラス', desc: '大改修を経て全室が広々としたテラス付き客室に一新。テラスの椅子に身を委ねれば、目の前に広がる雲仙地獄のダイナミックな噴気と澄んだ山の空気をプライベートに体感できます。' },
          { title: '地獄から湧き出る濃厚な源泉かけ流し白濁硫黄泉', desc: '大浴場や露天風呂には、一切の加水・加温を行わない新鮮な硫黄泉が注がれます。乳白色の湯に身を浸すと、立ち上る硫黄の香りと絹のような肌触りが深い安らぎをもたらします。' },
          { title: '長崎和牛と橘湾の鮮魚を堪能するプライベート会席', desc: '独立した個室ダイニングでいただく夕食。島原半島の新鮮な旬野菜、橘湾で獲れた地魚の造り、長崎和牛の炭火焼きなど、長崎の豊かな食文化を極上の仕立てで味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.91点という驚異的な高スコア。リニューアル後の清潔で洗練された館内空間、地獄を望むロケーションの素晴らしさ、隅々まで行き届いたホスピタリティが絶賛されています。'
      },
      {
        key: 'unzen_kanko',
        tagline: '昭和十年創業・国登録有形文化財のクラシックホテル！手斧削りの梁が重なるスイス風山岳建築と伝統の本格フレンチ',
        detailTitle: '雲仙観光ホテル —— 日本の高原リゾートの原点。重厚な木造建築美とタイムレスな優雅さに浸る滞在',
        features: [
          { title: '登録有形文化財に指定された美しい山岳建築', desc: '外国人の避暑地として誕生した昭和10年当時の面影を今に伝える本館。手斧削りの重厚な丸太梁、アール・デコ調のステンドグラス、ビリヤード室や図書室など、まるで中世ヨーロッパの別荘に迷い込んだかのような空間です。' },
          { title: 'アール・デコ調のステンドグラス輝くドーム温泉浴室', desc: 'ホテル内の温泉浴室は、ドーム型の高い天井とステンドグラスが印象的なモダンレトロ空間。硫黄の香る良質な雲仙の源泉を、クラシックホテルの美学の中で堪能できます。' },
          { title: '歴代シェフが守り継ぐ伝統の雲仙クラシックフレンチ', desc: '高い格天井が美しいメインダイニングで供されるディナーコース。地元の新鮮な食材を使い、伝統のフレンチ技法に現代の感性を重ねた至福のフルコースを味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.76点。唯一無二の歴史的建築美、静かで上質な空気感、ライブラリーでの読書時間、そしてスタッフの紳士的で温かなサービスに多くの旅人が心を奪われています。'
      },
      {
        key: 'unzen_fukudaya',
        tagline: '民芸の温もりに包まれるハイセンスな温泉宿！露天風呂やパノラマサウナ、島原郷土鍋と長崎牛の饗宴',
        detailTitle: '雲仙温泉 民芸モダンの宿 雲仙福田屋 —— 木と土の温かみを感じるモダン民芸空間と、多彩な湯巡りパラダイス',
        features: [
          { title: '4つの内湯・露天風呂と2つの貸切風呂による湯巡り', desc: '自家源泉から引く濃厚な白濁湯。露天風呂「せせらぎの湯」や内湯「普賢の湯」、プライベートな貸切風呂など、館内だけで多彩な湯浴みを楽しめます。' },
          { title: 'ハイセンスな民芸モダンデザインと最新サウナ', desc: '民芸家具と現代の快適性が融合した落ち着きある客室。近年新設されたパノラマサウナやリラクゼーションスペースも人気で、温泉とサウナの極上の「ととのい」を満喫できます。' },
          { title: '名物「雲仙鍋」と長崎牛・島原旬素材の会席', desc: '島原半島の豊かな旬の幸をふんだんに盛り込んだ創作郷土会席。出汁の効いた特製鍋料理や長崎牛のステーキなど、滋味あふれる料理が旅の夜を華やかに彩ります。' }
        ],
        reviewPoints: '楽天トラベル評価4.57点、口コミ870件超。お洒落な民芸調のインテリア、湯量豊富な掛け流し温泉、居心地の良いカフェバーやサウナ施設、コストパフォーマンスの高さが高く評価されています。'
      }
    ],
    areaGuide: {
      title: '雲仙地獄めぐり＆島原半島観光ハイライトガイド',
      points: [
        { name: '雲仙地獄の歩き方と名物「温泉卵」', text: '大叫喚地獄、お糸地獄、清七地獄など、約30の地獄から湯煙が立ち上る雲仙地獄。遊歩道が整備されており、足元から伝わる大地の熱気を感じながら散策できます。地獄の蒸気で蒸し上げた名物の「温泉たまご」は、食べると1年長生きすると言われる人気の味覚です。' },
        { name: '仁田峠循環道路と雲仙ロープウェイの絶景', text: '春のミヤマキリシマ、夏の深緑、秋の紅葉、冬の霧氷と、四季を通じて息をのむ絶景が広がる仁田峠。ロープウェイに乗って妙見岳山頂へ登れば、有明海や島原半島、遠く熊本の阿蘇連山まで見渡す大パノラマが広がります。' },
        { name: '島原城・武家屋敷と湧水群への立ち寄り', text: '雲仙温泉から車で約30分の島原城下町。美しい石垣が残る武家屋敷街や、街のいたるところから清らかな名水が湧き出す「湧水庭園 四明荘」など、長崎の歴史と涼やかな水景色を楽しめる絶好の観光ルートです。' }
      ]
    },
    furusatoStepTitle: '長崎県雲仙市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 雲仙市の返礼品「楽天トラベルクーポン」を申し込む', desc: '楽天ふるさと納税で「長崎県雲仙市」のトラベルクーポン（寄付額の30%相当補助）を選択して寄付。寄付完了と同時にアカウントへクーポンが付与されます。' },
      { step: 'Step 2: 3年間の有効期間を活用してベストシーズンを予約', desc: 'クーポンの有効期限は3年間。紅葉が山を染める秋や、避暑地として心地よい初夏など、希望の季節に合わせてゆっくり宿泊プランを選べます。' },
      { step: 'Step 3: 楽天トラベルで雲仙の宿を予約しクーポン割引を適用', desc: '予約内容確認画面でクーポンを選択すれば、宿泊代金から即座に割引が実行されます。現地での追加精算や面倒な手続きは一切不要です。' }
    ]
  },
  {
    slug: 'furusato-tax-ito-onsen-seafood-historic-stay',
    title: '【伊東温泉×ふるさと納税】相模湾の極上金目鯛＆豊富な自家源泉！東海館の風情薫る名湯宿ガイド｜青山やまと・ホテルラヴィエ川良・淘心庵米屋',
    desc: '毎分3万リットル以上の湯量を誇る伊豆屈指の名湯・伊東温泉を楽天ふるさと納税でお得に旅する！昭和初期の木造建築・東海館のレトロな風情、相模湾の獲れたて金目鯛の姿煮や伊勢海老の美食、自家源泉掛け流しの名旅館を徹底紹介。青山やまと、ホテルラヴィエ川良、淘心庵米屋の魅力とクーポン活用法を網羅。',
    keywords: '伊東温泉 ふるさと納税,伊東 金目鯛 旅館,青山やまと ふるさと納税,伊東温泉 クーポン 宿泊,伊東市 ふるさと納税 楽天トラベル',
    targetCity: '静岡県伊東市',
    leadTitle: '豊富な湯量を誇る名湯、相模湾が育む金目鯛の旨味、昭和レトロの川辺散歩——伊東温泉で過ごす贅沢ステイとふるさと納税ガイド',
    leadP1: '静岡県・伊豆半島の東海岸に位置する伊東温泉は、別府・熱海と並ぶ日本屈指の湯量を誇る名湯です。市内には数百本もの源泉が存在し、毎分3万リットルを超える豊富な温泉が街中を潤しています。松川沿いには大正から昭和初期にかけて建てられた木造三階建ての温泉旅館「東海館」をはじめとする歴史的建造物が残り、夜になると川沿いの遊歩道に竹あかりが灯り、ノスタルジックな温泉情緒を醸し出します。',
    leadP2: '伊東のもう一つの大きな醍醐味が、目の前に広がる相模湾の新鮮な海の幸です。特に脂ののった「金目鯛」の姿煮やしゃぶしゃぶ、伊勢海老、アワビなどの高級魚介は、全国の食通を唸らせる絶品。都心から特急踊り子号で約1時間40分というアクセスの良さも魅力です。静岡県伊東市へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより高級旅館への滞在がぐっと身近になり、贅を尽くした伊豆旅行をお得に満喫できます。',
    hotelsKey: 'furusato-tax-ito-onsen-seafood-historic-stay',
    hotelItems: [
      {
        key: 'ito_aoyama_yamato',
        tagline: '伊東の街と海を見下ろす丘の上の名門和風旅館！100％源泉掛け流しの展望露天風呂と金目鯛姿煮の極上会席',
        detailTitle: '伊東温泉 青山やまと —— 静寂の高台に佇む癒しの数寄屋宿。細やかなもてなしと絶景パノラマ温泉',
        features: [
          { title: '街並みと相模湾を一望する展望大浴場＆露天風呂', desc: '伊東市街を見下ろす高台に位置し、大浴場や露天風呂からは街の灯りと青い海が広がります。肌触り柔らかな弱アルカリ性単純泉がたっぷりと注がれ、朝夕で異なる絶景湯浴みを楽しめます。' },
          { title: '選べるメインと秘伝のタレで煮付けた名物金目鯛', desc: '夕食は伊豆の味覚が詰まった本格会席。丸ごと一尾じっくり煮付けた金目鯛の姿煮は、濃厚な甘辛タレとふっくら柔らかな白身の旨味が絶品で、多くの宿泊者を虜にしています。' },
          { title: '選べる浴衣とアロマサービス、上質なプライベート空間', desc: '女性用色浴衣の無料サービスやお部屋でのアロマ芳香器の用意など、女性や記念日旅行に嬉しいきめ細やかな配慮。バリアフリー設計の客室も備え、三世代旅行にも最適です。' }
        ],
        reviewPoints: '楽天トラベル評価4.58点。丘の上からの眺望の素晴らしさ、スタッフの洗練されたおもてなし、そして金目鯛をはじめとする料理の美味しさに絶賛の口コミが寄せられています。'
      },
      {
        key: 'ito_ravie_kawayoshi',
        tagline: '毎分660リットル・8本の自家源泉を贅沢に満喫！アワビや金目鯛が並ぶ豪華海鮮バイキングと湯量自慢の大型旅館',
        detailTitle: '伊東温泉 ホテルラヴィエ川良 —— 自家源泉の湯量とバイキングの贅沢。ファミリーやグループに愛される王道温泉ホテル',
        features: [
          { title: '8本の自家源泉から湧き出る毎分660リットルの名湯', desc: '館内大浴場や露天風呂、サウナはもちろん、全客室の蛇口やお風呂からも天然温泉が出る贅沢な湯量。湯量豊富な伊東温泉ならではの贅沢を体感できます。' },
          { title: 'アワビ・金目鯛・ステーキが食べ放題の豪華ディナーバイキング', desc: 'ライブキッチンで焼き上げる牛ステーキや新鮮な刺身、季節限定の豪華海鮮料理が並ぶ人気のバイキング。好きなものを心ゆくまで味わえる楽しさが宿泊者の満足度を高めています。' },
          { title: '伊東駅から徒歩約5分の好立地と充実の館内施設', desc: '伊東駅から徒歩圏内に位置し、観光や街歩きの拠点に最適。館内には室内温水プール（季節営業）やカラオケ、売店なども完備され、幅広い世代で楽しく過ごせます。' }
        ],
        reviewPoints: '楽天トラベル評価4.01点、レビュー約2000件。湯量豊富な温泉の心地よさ、バイキングの充実度、駅からのアクセスの良さで、家族旅行やグループ旅行から根強い人気を集めています。'
      },
      {
        key: 'ito_komeya',
        tagline: '竹林の小径に佇む全十七室の大人の隠れ家！全室源泉掛け流し客室露天風呂と本格会席料理を味わう美食料亭旅館',
        detailTitle: '淘心庵 米屋（共立リゾート） —— 竹林の静寂と優美な数寄屋建築。プライベートな湯浴みと四季折々の料亭懐石',
        features: [
          { title: '全室に源泉掛け流しの専用風呂を完備した贅沢空間', desc: '客室はわずか17室。すべての部屋に天然温泉を引いた客室露天風呂または半露天風呂が備えられ、竹林の揺れる音を聞きながら誰にも邪魔されない至極の入浴を楽しめます。' },
          { title: '旬の味覚を繊細に盛り付けた本格料亭会席', desc: '夕食は落ち着いた個室風のお食事処で提供。相模湾の新鮮な地魚や旬の野菜を熟練の料理人が一皿一皿丁寧に仕上げ、目と舌の両方で愉しむ贅沢なひとときを約束します。' },
          { title: '竹林を望む大浴場と共立リゾート名物の夜鳴きそば', desc: '大浴場や無料の貸切風呂も完備。湯上がり処でのアイスやドリンクサービス、夜食のあっさり醤油ラーメン「夜鳴きそば」など、嬉しいおもてなしが充実しています。' }
        ],
        reviewPoints: '楽天トラベル評価4.83点の高評価。全室客室風呂のプライベート感、竹林庭園の静けさ、スタッフの丁寧な接客、そして料理の完成度の高さが絶賛され、記念日ステイの定番宿として選ばれています。'
      }
    ],
    areaGuide: {
      title: '伊東温泉街・大室山＆城ヶ崎海岸観光モデルルート',
      points: [
        { name: '東海館の見学と松川遊歩道の川端散策', text: '伊東温泉の中心を流れる松川沿いに佇む「東海館」は、昭和3年に建てられた貴重な木造建築。職人が腕を競った銘木や欄間の彫刻、三階の展望楼から眺める街並みなど見応え抜群です。夜の竹あかりライトアップも幻想的です。' },
        { name: '大室山のリフトと城ヶ崎海岸の門脇吊橋', text: '伊東温泉から少し足を伸ばせば、すり鉢状の美しい山容を誇る「大室山」へ。リフトで山頂に登ると富士山や伊豆諸島を一望する360度パノラマが広がります。また、断崖絶壁に架かる「城ヶ崎海岸の門脇吊橋」のスリルと絶景も必見です。' },
        { name: '伊東マリンタウンと伊豆高原スイーツめぐり', text: '海沿いの道の駅「伊東マリンタウン」では、足湯に浸かりながらマリーナを眺めたり、海鮮丼や名物の干物をお土産に購入できます。伊豆高原エリアにはお洒落なカフェや美術館が点在し、女子旅やドライブにも最適です。' }
      ]
    },
    furusatoStepTitle: '静岡県伊東市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 伊東市の返礼品「楽天トラベルクーポン」を取得', desc: '楽天ふるさと納税で「静岡県伊東市」のトラベルクーポン（寄付額の30%相当補助）を申し込みます。寄付完了後、即座に楽天アカウントにクーポンが付与されます。' },
      { step: 'Step 2: 3年間の有効期間内で週末や連休の旅行を計画', desc: '有効期間が3年間あるため、金目鯛が最も脂の乗る冬期や、海が心地よい夏休み、連休のドライブ旅行など、自分の都合に合わせて予約できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポンを適用して即時値引き', desc: '青山やまと、ホテルラヴィエ川良、淘心庵米屋などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに割り引かれます。' }
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
              <Link href="/furusato-tax-gero-onsen-bihada-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 日本三名泉・下呂温泉 美肌の湯名宿ステイ特集
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
