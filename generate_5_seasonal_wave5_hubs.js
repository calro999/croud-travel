const fs = require('fs');
const path = require('path');

const wave5Configs = [
  {
    slug: 'winter-oyster-seafood-gourmet',
    badge: 'WINTER OYSTER & SEAFOOD',
    title: '【冬の海のミルク】極上牡蠣＆冬海鮮づくし温泉旅館 完全ガイド',
    metaDesc: '冬に旨味が最高潮を迎える牡蠣！広島・宮島（焼き牡蠣＆牡蠣土手鍋）、宮城・松島（松島湾ぷりぷり牡蠣）、三重・鳥羽的矢湾（ブランド的矢かき会席）、兵庫・赤穂（坂越牡蠣）など、絶品牡蠣料理と温泉を堪能できる名宿を徹底解説。',
    heroDesc: 'ぷりぷりと大粒でクリーミーな冬の牡蠣。炭火で香ばしく焼き上げる殻付き焼き牡蠣、熱々のカキフライ、濃厚な牡蠣鍋や牡蠣ご飯。海の恵みと極上の温泉に癒やされる冬の美食ステイへ。',
    categoryKey: 'winter-oyster-seafood-gourmet',
    areaGuides: [
      {
        key: 'hiroshima_oyster',
        title: '1. 広島・宮島＆厳島神社（世界遺産の島で味わう焼き牡蠣＆牡蠣土手鍋）',
        timing: '旬の時期：11月〜2月（大粒で濃厚な最高期）',
        desc: '日本一の牡蠣の生産地・広島。宮島表参道商店街で立ち上る香ばしい焼き牡蠣の煙を楽しみ、厳島神社の大鳥居を望む温泉宿で牡蠣の土手鍋や牡蠣釜飯会席を贅沢に味わえます。',
        spots: '厳島神社（大鳥居・廻廊）、宮島表参道商店街、弥山ロープウェイ、宮島水族館',
        access: 'JR山陽本線「宮島口駅」よりフェリーで約10分（宮島桟橋着）。広島駅から約30分。',
        tip: '夕暮れ時の宮島ライトアップ鑑賞後、宿で広島地酒（雨後の月・賀茂金秀など）とともにいただく牡蠣料理が絶品です。'
      },
      {
        key: 'matsushima_oyster',
        title: '2. 宮城・日本三景松島（松島湾のぷりぷり牡蠣小屋と絶景オーシャンビュー温泉）',
        timing: '旬の時期：10月下旬〜3月中旬',
        desc: 'リアス海岸の豊かな森のミネラルが注ぐ松島湾の牡蠣。名物「牡蠣小屋」での蒸し焼き牡蠣食べ放題や、松島温泉の展望露天風呂から日本三景の島々を眺めるパノラマステイ。',
        spots: '松島観光協会かき小屋、松島遊覧船、円通院、瑞巌寺、五大堂',
        access: 'JR仙石線「松島海岸駅」下車徒歩約5分。仙台駅からJRで約30〜40分。',
        tip: '松島温泉はとろみのある美肌の湯。冷えた体を芯から温めてくれます。'
      },
      {
        key: 'mie_matoya_oyster',
        title: '3. 三重・鳥羽＆的矢湾（紫外線殺菌の元祖清浄生牡蠣「的矢かき」フルコース）',
        timing: '旬の時期：11月〜3月',
        desc: '波静かな的矢湾で育てられるブランド牡蠣「的矢（まとや）かき」。甘みが強くエグみのない極上の生牡蠣、焼き牡蠣、牡蠣グラタンなど多彩な料理を、鳥羽温泉郷の絶景海景色宿で満喫。',
        spots: '的矢湾、鳥羽水族館、ミキモト真珠島、志摩スペイン村、鳥羽展望台',
        access: '近鉄特急で近鉄名古屋駅から鳥羽駅まで約1時間40分、大阪難波駅から約2時間。',
        tip: '伊勢海老やアワビ、的矢かきが勢揃いする冬限定の「伊勢志摩三大味覚プラン」が最も満足度が高いです。'
      },
      {
        key: 'hyogo_aioi_oyster',
        title: '4. 兵庫・播磨赤穂＆坂越湾（火を通しても縮まない！濃厚坂越牡蠣と赤穂温泉）',
        timing: '旬の時期：11月下旬〜3月',
        desc: '名水千種川が注ぐ坂越（さこし）湾で育つ「坂越牡蠣」は、大粒でクセがなくぷりぷり。播磨灘を一望する赤穂御崎温泉の絶景インフィニティ露天風呂と牡蠣会席を堪能できます。',
        spots: '坂越の古い町並み（大道通り）、赤穂御崎遊歩道、赤穂城跡、きらきら坂',
        access: 'JR赤穂線「播州赤穂駅」下車。山陽新幹線相生駅接続。姫路駅からJR約30分。',
        tip: '「きらきら坂」の海沿いカフェ散策と、赤穂御崎からの夕日鑑賞を組み合わせたドライブが人気です。'
      }
    ]
  },
  {
    slug: 'autumn-winter-train-scenery-station',
    badge: 'SCENIC TRAIN JOURNEY',
    title: '【車窓の旅】紅葉＆雪景色！絶景観光列車と駅近温泉旅館 完全ガイド',
    metaDesc: '車窓を流れる息をのむ紅葉と銀世界！京都嵯峨野トロッコ列車、福島奥会津只見線、富山黒部峡谷トロッコ、青森津軽鉄道ストーブ列車など、日本屈指の絶景ローカル線と温泉宿を徹底解説。',
    heroDesc: 'ガタゴトと揺れる列車に身を委ね、窓の外に広がる山々の錦秋や白銀の雪景色を眺める贅沢。名物駅弁を広げ、終着駅や沿線の名湯に降り立つ、心温まる鉄道旅へ。',
    categoryKey: 'autumn-winter-train-scenery-station',
    areaGuides: [
      {
        key: 'sagano_train',
        title: '1. 京都・嵯峨野トロッコ列車＆嵐山温泉（保津川渓谷の燃えるような紅葉美）',
        timing: '紅葉シーズン：11月中旬〜12月上旬',
        desc: '嵯峨野から亀岡まで保津川渓谷に沿って走る観光トロッコ列車。窓ガラスのないオープン車両「リッチ号」で秋風と紅葉のシャワーを浴び、嵐山温泉の老舗旅館で湯豆腐と京会席を堪能。',
        spots: '嵯峨野トロッコ列車（トロッコ嵯峨駅〜トロッコ亀岡駅）、保津川下り、渡月橋、天龍寺、竹林の小径',
        access: 'JR嵯峨野線「嵯峨嵐山駅」隣接。京都駅からJR快速で約16分。',
        tip: '紅葉期のトロッコ列車は乗車1ヶ月前の予約開始直後に完売するため、宿泊と乗車券がセットになったプランが便利です。'
      },
      {
        key: 'tadami_train',
        title: '2. 福島・奥会津只見線＆会津柳津温泉（世界が絶賛する雪景色の一枚絵）',
        timing: '絶景シーズン：10月下旬（紅葉）／12月〜2月（雪景色）',
        desc: '只見川の渓谷美を縫うように走るJR只見線。第一只見川橋梁展望台から眺める雪景色の列車風景は世界的絶景として有名。沿線の会津柳津温泉や早戸温泉つるの湯で湯治情緒を満喫。',
        spots: '第一只見川橋梁ビューポイント、道の駅みしま宿、円蔵寺（粟饅頭）、早戸温泉つるの湯',
        access: 'JR只見線「会津柳津駅」「会津宮下駅」。JR会津若松駅より接続。',
        tip: '早戸温泉「つるの湯」の露天風呂は只見川の川面が目の前に迫り、雪見風呂の聖地として絶大な人気を誇ります。'
      },
      {
        key: 'kurobe_gorge_train',
        title: '3. 富山・黒部峡谷トロッコ電車＆宇奈月温泉（大峡谷を染める錦秋の紅葉トンネル）',
        timing: '紅葉シーズン：10月下旬〜11月中旬（冬期運休前）',
        desc: '宇奈月駅から欅平駅まで、黒部川の深いV字峡を駆け抜けるトロッコ電車。鮮やかな赤や黄に染まる断崖絶壁とエメラルドグリーンの湖水。宇奈月温泉の無色透明・つべつべ美肌湯で癒やされます。',
        spots: '黒部峡谷トロッコ電車、宇奈月ダム、やまびこ遊歩道、黒薙温泉（秘湯）',
        access: '北陸新幹線「黒部宇奈月温泉駅」より富山地方鉄道に乗り換え宇奈月温泉駅まで約25分。',
        tip: 'トロッコ電車の「鐘釣駅」周辺の万年雪や、宇奈月温泉街の足湯めぐりが散策の定番です。'
      },
      {
        key: 'tsugaru_stove_train',
        title: '4. 青森・津軽鉄道ストーブ列車＆弘前（石炭ストーブでスルメを焼く冬の風物詩）',
        timing: '運行期間：12月1日〜翌年3月31日',
        desc: '客車内に設置された昔ながらの「だるまストーブ」。車内で車掌さんが焼いてくれる香ばしいスルメをつまみに地酒を味わい、津軽平野の吹雪と岩木山を車窓から眺めるノスタルジックな旅。',
        spots: '津軽鉄道ストーブ列車（津軽五所川原〜津軽中里）、斜陽館（太宰治生家）、弘前城雪燈籠まつり',
        access: 'JR奥羽本線・五能線「五所川原駅」隣接の津軽五所川原駅。弘前駅からJR約40分。',
        tip: '弘前市内の洋館建築巡りや名物アップルパイの食べ比べとセットで巡るのがおすすめです。'
      }
    ]
  },
  {
    slug: 'autumn-winter-fireplace-cafe-resort',
    badge: 'CLASSIC & FIREPLACE',
    title: '【暖炉と珈琲】パチパチ薪が燃える！大人の隠れ家クラシックホテル 完全ガイド',
    metaDesc: '静かな冬の読書と美食。長野・軽井沢、栃木・日光金谷ホテル、神奈川・箱根宮ノ下富士屋ホテル、長野・松本民芸の宿など、本物の暖炉ラウンジと歴史的建築美を誇るクラシックリゾートを徹底解説。',
    heroDesc: '外の寒さを忘れさせるパチパチと薪が爆ぜる暖炉の温もり。芳しい挽きたて珈琲やウイスキーを片手に、お気に入りの本を開く贅沢な冬の時間。時を重ねたクラシックホテルで過ごす大人の隠れ家ステイ。',
    categoryKey: 'autumn-winter-fireplace-cafe-resort',
    areaGuides: [
      {
        key: 'karuizawa_fireplace',
        title: '1. 長野・軽井沢＆中軽井沢（薪暖炉のある重厚なラウンジと森のリゾート）',
        timing: '通年（秋の黄葉・冬の静寂シーズンが至高）',
        desc: '別荘文化が息づく軽井沢。暖炉の火が揺らめくライブラリーラウンジやバーを備えたクラシックホテルで、信州食材を使ったフレンチとワインに舌鼓。観光客が少なくなる冬こそ軽井沢の真骨頂です。',
        spots: '軽井沢高原教会、ハルニレテラス、雲場池（雪景色）、旧三笠ホテル',
        access: '北陸新幹線「軽井沢駅」下車。東京駅から新幹線で約65分。',
        tip: '軽井沢高原教会の「星降る森のクリスマス（キャンドルナイト）」と暖炉ホテルの組み合わせは冬デートの最高峰です。'
      },
      {
        key: 'nikko_classic',
        title: '2. 栃木・日光中禅寺湖＆日光金谷ホテル（日本最古のリゾートクラシックホテル）',
        timing: '通年（秋の奥日光紅葉・冬の雪景色）',
        desc: '明治6年創業、アインシュタインやヘレン・ケラーも滞在した「日光金谷ホテル」。アール・デコ調のダイニングで伝統の百年ライスカレーや虹鱒のソテーを味わい、中禅寺湖の静かな自然に浸ります。',
        spots: '日光東照宮、中禅寺湖、華厳の滝、日光田母沢御用邸記念公園',
        access: '東武特急スペーシアで浅草・新宿から東武日光駅まで約1時間50分。日光駅から送迎・路線バス。',
        tip: '金谷ホテルのバー「デイサイト」で暖炉の灯りを眺めながらいただくオリジナルカクテルが旅の夜を演出します。'
      },
      {
        key: 'hakone_fujiya',
        title: '3. 神奈川・箱根宮ノ下（登録有形文化財！富士屋ホテルの歴史美と天然温泉）',
        timing: '通年（秋の宮ノ下散策・冬の温泉ステイ）',
        desc: '明治11年創業、和洋折衷の美しい建築が目を引く宮ノ下「富士屋ホテル」。全館に引かれた天然温泉と、メインダイニング「ザ・フジヤ」の格天井に描かれた高山植物の絵画など、文化財に泊まる感動体験。',
        spots: '箱根登山鉄道（宮ノ下駅）、彫刻の森美術館、堂ヶ島渓谷遊歩道、渡邊ベーカリー',
        access: '箱根湯本駅より箱根登山電車で宮ノ下駅まで約25分。',
        tip: '歴史ある敷地内庭園の散策や、名物ベーカリー「PICOT」のクラシックカレーパンをお土産にするのが定番です。'
      },
      {
        key: 'kamikochi_imperial',
        title: '4. 長野・松本浅間温泉＆民芸宿（松本民芸家具と薪ストーブの温もり）',
        timing: '通年（秋のクラフトフェア・冬の城下町）',
        desc: '国宝松本城の城下町と、手仕事の美が宿る松本民芸家具。浅間温泉や松本市内の老舗宿では、重厚な民芸家具と薪ストーブが置かれた空間で、信州牛や十割蕎麦、名湯をゆっくり堪能できます。',
        spots: '国宝松本城、松本市美術館（草間彌生展示）、縄手通り、中町通り（蔵造りの街並み）',
        access: 'JR中央本線特急「あずさ」で新宿から松本駅まで約2時間30分。長野道松本IC。',
        tip: '中町通りのカフェで自家焙煎珈琲を味わい、夜は浅間温泉の源泉掛け流し湯で温まるプランが人気です。'
      }
    ]
  },
  {
    slug: 'winter-snow-festival-illumination',
    badge: 'SNOW FESTIVAL & ICE WORLD',
    title: '【白銀の祭典】冬の雪まつり＆巨大かまくら温泉旅館 完全ガイド',
    metaDesc: '幻想的な氷と雪のエンターテインメント！北海道さっぽろ雪まつり、秋田横手のかまくら、栃木奥日光湯西川温泉かまくら祭、青森十和田湖冬物語など、冬限定の雪まつりイベントと名湯宿を徹底解説。',
    heroDesc: '暗闇の中にぽうっと灯る数千個のミニかまくらのろうそく、大迫力の巨大雪像や氷の彫刻。厳しい寒さだからこそ生まれる幻想的な白銀のフェスティバルと、湯けむり立ち上る雪見温泉の旅へ。',
    categoryKey: 'winter-snow-festival-illumination',
    areaGuides: [
      {
        key: 'sapporo_snow_fest',
        title: '1. 北海道・札幌（世界中が熱狂！さっぽろ雪まつり大雪像＆すすきの氷彫刻）',
        timing: '開催期間：2月上旬（約1週間の開催）',
        desc: '大通公園の1丁目から11丁目にわたって巨大雪像が並ぶ日本最大の雪の祭典。夜にはプロジェクションマッピングで雪像が鮮やかに彩られます。札幌市内の大浴場付きホテルやすすきのグルメを満喫。',
        spots: '大通公園（大通会場）、すすきの（すすきの会場・氷の祭典）、つどーむ会場、もいわ山夜景',
        access: 'JR札幌駅・地下鉄大通駅周辺。新千歳空港から快速エアポートで約37分。',
        tip: '夜のライトアップ鑑賞後は、札幌名物「味噌ラーメン」や「スープカレー」「夜パフェ（シメパフェ）」で温まるのが王道です。'
      },
      {
        key: 'yokote_kamakura',
        title: '2. 秋田・横手（約450年の伝統！ミニかまくらの灯りと雪景色）',
        timing: '開催期間：2月中旬（横手の雪まつり・かまくら）',
        desc: '雪で作られた本物のかまくらの中で子供たちが甘酒やお餅を振る舞う伝統行事。蛇の崎川原に並ぶ無数のミニかまくらに灯るろうそくの光は息をのむ美しさ。横手焼きそばや秋田温泉旅館で温まります。',
        spots: '横手公園（横手城とかまくら）、蛇の崎川原（ミニかまくら群）、かまくら館、横手市ふれあいセンター',
        access: 'JR奥羽本線・北上線「横手駅」下車。秋田新幹線大曲駅より奥羽本線約20分。',
        tip: '「かまくら館」ではマイナス10度の体験室に本物のかまくらが通年保存されており、いつでも見学可能です。'
      },
      {
        key: 'yunishigawa_kamakura',
        title: '3. 栃木・日光湯西川温泉（平家落人の里！日本夜景遺産・かまくら祭）',
        timing: '開催期間：1月下旬〜2月下旬（湯西川温泉かまくら祭）',
        desc: '河川敷に並ぶ数百個のミニかまくらにろうそくが灯る「沢口河川敷ミニかまくら」は日本夜景遺産認定。囲炉裏を囲んでジビエや川魚を炭火で焼く「平家落人料理」と美肌の露天風呂を堪能。',
        spots: '湯西川温泉沢口河川敷、平家の里、湯西川水の郷、湯西川ダム',
        access: '野岩鉄道「湯西川温泉駅」より日光交通バスで約25分。東武浅草・新宿から直通特急あり。',
        tip: '「平家の里」会場では、昼間に大きなかまくらの中でBBQ（かまくらバーベキュー）を楽しむ特別プランも人気です。'
      },
      {
        key: 'towada_winter_fest',
        title: '4. 青森・十和田湖＆奥入瀬渓流（十和田湖冬物語＆奥入瀬氷瀑ライトアップ）',
        timing: '開催期間：1月下旬〜2月下旬',
        desc: '十和田湖畔で開催される「十和田湖冬物語」。雪上に打ち上がる冬花火や雪あかりの小径、奥入瀬渓流が完全凍結する「氷瀑（ひょうばく）ライトアップツアー」と十和田湖温泉郷の秘湯ステイ。',
        spots: '十和田湖畔休屋、乙女の像、奥入瀬渓流（冬の氷瀑ツアー）、十和田神社',
        access: 'JR八戸駅・新青森駅より冬期シャトルバス・路線バス運行。星野リゾート奥入瀬渓流ホテル等。',
        tip: '夜間に運行される「奥入瀬渓流氷瀑ライトアップツアー（専用バス）」に参加すると、青く照らされた巨大な氷柱を間近で観察できます。'
      }
    ]
  },
  {
    slug: 'autumn-winter-scenic-drive-pass',
    badge: 'SCENIC PANORAMA DRIVE',
    title: '【絶景ロード】紅葉＆白銀パノラマ！ドライブウェイ展望温泉宿 完全ガイド',
    metaDesc: '車窓を染める圧巻の紅葉パノラマ！伊豆スカイライン（富士山ビュー）、福島磐梯吾妻スカイライン、長野霧ヶ峰ビーナスライン、広島しまなみ海道など、日本を代表する絶景ドライブルートと展望温泉宿を徹底解説。',
    heroDesc: '心地よいエンジン音とともに、標高とともに移り変わる木々のグラデーションを駆け抜ける爽快ドライブ。展望台から見渡す雲海や富士山、夕暮れに染まる水平線。愛車で巡る極上のパノラマ温泉旅。',
    categoryKey: 'autumn-winter-scenic-drive-pass',
    areaGuides: [
      {
        key: 'izu_skyline_drive',
        title: '1. 静岡・伊豆スカイライン＆伊豆高原（富士山と相模湾・駿河湾を両手に望む天空ロード）',
        timing: '通年（秋の紅葉・冬の富士山冠雪が最もクリア）',
        desc: '熱海峠から天城高原まで伊豆半島の稜線を走る約40kmの絶景有料道路。滝知山展望台や巣雲山から望む富士山と駿河湾の夕景。伊豆高原の客室露天風呂付き宿で金目鯛ディナーを満喫。',
        spots: '伊豆スカイライン展望台（玄岳・滝知山）、十国峠パノラマケーブルカー、大室山、城ヶ崎海岸',
        access: '東名高速沼津IC・新東名長泉沼津ICより伊豆縦貫道経由約30分。',
        tip: '早朝にスカイラインを走ると、相模湾から昇る朝日と朝日に照らされる赤富士の両方を堪能できます。'
      },
      {
        key: 'bandai_azuma_drive',
        title: '2. 福島・磐梯吾妻スカイライン＆高湯温泉（日本のグランドキャニオン！荒涼たる火山美と紅葉）',
        timing: '紅葉シーズン：9月下旬〜10月下旬（11月中旬より冬期通行止）',
        desc: '吾妻連峰を縫う山岳道路。「日本の道100選」に選ばれ、浄土平周辺の荒々しい火山地形と燃えるような紅葉の対比は圧巻。白濁の名湯・高湯温泉や裏磐梯五色沼リゾートに宿泊。',
        spots: '浄土平（吾妻小富士お鉢巡り・湿原木道）、つばくろ谷（不動沢橋）、五色沼湖沼群、高湯温泉',
        access: '東北自動車道福島西ICより車で約30分。郡山駅よりレンタカー利用。',
        tip: '高湯温泉は全国でも屈指の高濃度硫黄泉。ドライブの疲れを一瞬で癒やしてくれる名湯です。'
      },
      {
        key: 'venus_line_drive',
        title: '3. 長野・霧ヶ峰ビーナスライン＆白樺湖（標高1,700m！ススキと白樺の高原クルージング）',
        timing: '紅葉シーズン：9月下旬〜11月上旬',
        desc: '茅野市から美ヶ原高原まで続く日本最高峰の高原ドライブルート。秋には黄金色に輝くススキの海と白樺林を抜け、富士山や八ヶ岳、北アルプスを一望。白樺湖・蓼科温泉のリゾートホテルでリフレッシュ。',
        spots: '美ヶ原高原美術館、車山高原展望リフト、霧ヶ峰富士見台、白樺湖、蓼科大滝',
        access: '中央自動車道諏訪ICより約30〜40分。JR茅野駅よりレンタカー・路線バス。',
        tip: '車山肩のカフェ「ころぼっくるひゅって」のテラス席でいただく名物ボルシチと珈琲がドライブの定番です。'
      },
      {
        key: 'shimanami_drive',
        title: '4. 広島・尾道＆しまなみ海道（瀬戸内海の多島美を結ぶ大橋梁アイランドドライブ）',
        timing: '通年（秋・冬の澄んだ瀬戸内夕景が最高）',
        desc: '尾道と今治を6つの島と橋で結ぶ「しまなみ海道」。因島、生口島、大三島などを巡り、亀老山展望公園から来島海峡大橋に沈む夕日を鑑賞。尾道水道を望む坂の街ホテルや島内温泉宿にステイ。',
        spots: '亀老山展望公園（隈研吾設計展望台）、千光寺公園（尾道水道パノラマ）、未来心の丘（生口島）、大山祇神社',
        access: '山陽自動車道福山西IC・尾道ICより直結。山陽新幹線新尾道駅接続。',
        tip: '生口島の耕三寺「未来心の丘（大理石の庭園）」はエーゲ海のような絶景フォトスポットとして人気です。'
      }
    ]
  }
];

function generatePageTsx(config) {
  return `import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "${config.title} ｜ 日本全国・旅宿クラウド",
  description: "${config.metaDesc}",
  keywords: ["${config.slug}", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["${config.categoryKey}"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for ${config.categoryKey}", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = ${JSON.stringify(config.areaGuides, null, 2)};

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ${config.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            ${config.title}
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            ${config.heroDesc}
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-emerald-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 観光・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめ見どころ・スポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 満足度を高める滞在のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-950/5">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
                              ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                            </span>
                          )}
                        </div>

                        <div className="p-4 space-y-2">
                          {hotel.reviewAverage > 0 && (
                            <div className="flex items-center justify-between text-[9px] font-bold text-amber-600">
                              <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount}件）</span>
                            </div>
                          )}
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-emerald-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-emerald-950/70 line-clamp-2 font-medium">
                              {hotel.hotelSpecial}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="p-4 pt-0">
                        <a
                          href={hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで宿泊プラン・空室を見る
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 47都道府県トップへのリンク */}
      <div className="text-center pt-8">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
`;
}

for (const cfg of wave5Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated seasonal hub page: /${cfg.slug}`);
}
