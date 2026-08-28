const fs = require('fs');
const path = require('path');

const awConfigs = [
  {
    slug: 'winter-ski-snowboard-resort',
    badge: 'SKI & SNOWBOARD RESORT',
    title: '【冬のスキー・スノボ】ゲレンデ直結＆極上温泉リゾート 完全ガイド',
    metaDesc: 'パウダースノーと極上温泉！北海道ニセコ、長野白馬八方尾根、新潟越後湯沢、山形蔵王温泉など、ゲレンデ直結・スキーインスキーアウト対応の人気ホテル＆温泉宿を徹底解説。',
    heroDesc: '世界中からスキーヤーが集まる極上のパウダースノー。スキーやスノーボードを1日中満喫した後は、冷えた体を温める源泉かけ流し温泉と温かいご当地鍋料理で至福のステイを。',
    categoryKey: 'winter-ski-snowboard-resort',
    areaGuides: [
      {
        key: 'niseko_ski',
        title: '1. 北海道・ニセコ（世界が称賛するJAPOWパウダースノー聖地）',
        timing: 'シーズン：12月上旬〜4月上旬',
        desc: 'ニセコアンヌプリ国際、グラン・ヒラフ、ニセコHANAZONO、ビレッジの4大スキー場が連なる日本屈指のスノーリゾート。ゲレンデ直結ホテルや温泉付き高級コンドミニアムが充実しています。',
        spots: 'ニセコ全山（グラン・ヒラフ／HANAZONO／ビレッジ／アンヌプリ）、羊蹄山絶景ビュー、倶知安グルメ',
        access: '新千歳空港・札幌からスキースノーボード直行バス「リゾートライナー」で約2時間30分〜3時間。',
        tip: 'スキーロッカーからゲレンデへ直通できる「スキーイン・スキーアウト」対応のホテルを選ぶと、重い板を運ぶ手間がなく快適度が段違いです。'
      },
      {
        key: 'hakuba_ski',
        title: '2. 長野・白馬八方尾根＆白馬バレー（北アルプスの大迫力パノラマゲレンデ）',
        timing: 'シーズン：12月上旬〜4月下旬',
        desc: '長野オリンピックの舞台となった八方尾根をはじめ、エイブル白馬五竜、Hakuba47など多彩なコースが広がる白馬バレー。北アルプスの白銀連峰を一望する露天風呂付きリゾートホテルが人気です。',
        spots: '白馬八方尾根スキー場、白馬五竜＆Hakuba47、白馬岩岳マウンテンリゾート（HAKUBA MOUNTAIN HARBOR）',
        access: '北陸新幹線「長野駅」より特急バス「白馬・長野線」で約75分。安曇野IC・長野ICから車で約60分。',
        tip: '白馬岩岳の絶景テラスで楽しむホットドリンクやベーカリーが大人気。筋肉痛を和らげる強アルカリ性の白馬八方温泉の大浴場は必須です。'
      },
      {
        key: 'yuzawa_ski',
        title: '3. 新潟・越後湯沢＆苗場（新幹線駅直結＆都心から70分の好アクセス）',
        timing: 'シーズン：12月中旬〜3月下旬',
        desc: '東京駅から上越新幹線でわずか約70分！駅直結の「GALA湯沢」や広大な苗場スキー場など、初心者から上級者、ファミリーまで手軽に本格スノーアクティビティを楽しめる一大スノーエリアです。',
        spots: 'GALA湯沢スキー場、苗場スキー場、神立スノーリゾート、湯沢高原スキー場、ぽんしゅ館（日本酒利き酒）',
        access: '上越新幹線「越後湯沢駅」直結・下車すぐ。関越自動車道湯沢ICより各スキー場へ5〜15分。',
        tip: '越後湯沢駅構内の「ぽんしゅ館」で新潟全蔵の地酒利き酒や爆弾おにぎりを味わうのがアフタースキーの定番の楽しみ方です。'
      },
      {
        key: 'zao_ski',
        title: '4. 山形・蔵王温泉スキー場（神秘の樹氷原を滑走＆名湯硫黄泉）',
        timing: 'シーズン：12月下旬〜3月下旬',
        desc: 'スノーモンスターと称される巨大な樹氷群の間を滑り抜ける唯一無二のロングコース。滑り終わった後は、強酸性硫黄泉の白濁した温泉で体を温め、名物の玉こんにゃくやジンギスカンを堪能できます。',
        spots: '蔵王樹氷原（ザンゲ坂コース）、蔵王ロープウェイ、蔵王温泉街、鴫の谷地沼',
        access: '山形新幹線「山形駅」より直行路線バスで約45分。山形自動車道山形蔵王ICより約30分。',
        tip: '夜の樹氷ライトアップ鑑賞ナイトツアー付き宿泊プランがおすすめ。標高が高く冷え込むため、防寒対策を万全にしましょう。'
      }
    ]
  },
  {
    slug: 'autumn-gourmet-matsutake-wagyu',
    badge: 'AUTUMN GOURMET',
    title: '【秋の美食】松茸＆ブランド和牛づくし極上温泉旅館 完全ガイド',
    metaDesc: '秋の贅沢味覚！信州別所温泉の松茸づくし、京都亀岡の丹波松茸＆丹波牛会席、岐阜飛騨高山のA5飛騨牛、滋賀おごと温泉の近江牛懐石など、秋限定の極上美食温泉宿を徹底解説。',
    heroDesc: '香り高い旬の松茸と、とろけるようなブランド和牛のすき焼き・炭火焼き。秋の味覚を極めた豪華会席料理と美肌温泉で心もお腹も満たされる、大人の贅沢ご褒美ステイ。',
    categoryKey: 'autumn-gourmet-matsutake-wagyu',
    areaGuides: [
      {
        key: 'shinshu_matsutake',
        title: '1. 長野・信州上田＆別所温泉（本場信州の松茸小屋と極上松茸会席）',
        timing: '旬の時期：9月中旬〜11月上旬',
        desc: '全国有数の松茸の産地として名高い信州・上田周辺。信州最古の温泉地・別所温泉の老舗旅館では、焼き松茸、松茸土瓶蒸し、松茸ご飯、信州プレミアム牛とのすき焼きなど贅を尽くした料理を堪能できます。',
        spots: '別所温泉（北向観音・安楽寺八角三重塔）、上田城跡公園、美ヶ原高原',
        access: '北陸新幹線「上田駅」より上田電鉄別所線で約30分（終点別所温泉駅下車）。上信越道上田菅平ICより車約30分。',
        tip: '秋限定の「松茸小屋（マツタケ専門小屋）」での食事と別所温泉宿泊を組み合わせたグルメツアーが非常に人気です。'
      },
      {
        key: 'kyoto_tanba_beef',
        title: '2. 京都・亀岡＆湯の花温泉（丹波松茸と幻の丹波牛が彩る京懐石）',
        timing: '旬の時期：9月下旬〜11月中旬',
        desc: '京の奥座敷・湯の花温泉。最高峰の香りを誇る「丹波松茸」と、きめ細やかな霜降りが特徴の「丹波牛」を、伝統の技が光る京懐石で贅沢に味わえます。静寂に包まれた山あいの温泉で大人の休日を。',
        spots: '保津川下り、嵯峨野トロッコ列車（亀岡駅）、出雲大神宮、丹波篠山城下町',
        access: 'JR京都駅から嵯峨野線で亀岡駅まで約20分。亀岡駅より各旅館の無料送迎バス約15分。',
        tip: '嵐山から嵯峨野トロッコ列車に乗って亀岡に入り、湯の花温泉に宿泊。翌日は保津川下りで嵐山へ戻る王道周遊ルートがおすすめです。'
      },
      {
        key: 'hida_wagyu',
        title: '3. 岐阜・飛騨高山＆下呂温泉（とろける最高級A5等級飛騨牛と美肌の名湯）',
        timing: '通年（特に秋〜冬のすき焼き・しゃぶしゃぶが絶品）',
        desc: '古い町並みが残る飛騨高山と、日本三名泉の美肌湯・下呂温泉。美しいサシが入ったA5ランク飛騨牛のサーロインステーキ、朴葉味噌焼き、すき焼き会席を客室や個室でゆっくり味わえます。',
        spots: '飛騨高山古い町並み（さんまち通り）、宮川朝市、下呂温泉合掌村、白川郷（車で約50分）',
        access: 'JR特急「ひだ」で名古屋駅から高山駅まで約2時間20分、下呂駅まで約1時間40分。',
        tip: '高山名物の食べ歩き（飛騨牛にぎり寿司や飛騨牛串焼き）を楽しんだ後、夜は温泉旅館でフルコースの飛騨牛会席をいただくのが至福です。'
      },
      {
        key: 'omi_wagyu',
        title: '4. 滋賀・びわ湖おごと温泉（日本三大和牛・近江牛懐石と琵琶湖絶景）',
        timing: '通年（秋の近江牛×松茸すき焼きプランが人気）',
        desc: '比叡山の麓、琵琶湖の西岸に位置する名湯・おごと温泉。日本最古のブランド牛とされる「近江牛」の極上ロース肉を、秋の味覚とともに味わい、琵琶湖の朝焼けを望む露天風呂で癒やされます。',
        spots: '比叡山延暦寺、びわ湖バレイ（びわ湖テラス）、浮御堂（満月寺）、近江八幡水郷めぐり',
        access: 'JR京都駅から湖西線で「おごと温泉駅」までわずか約20分。名神高速京都東ICより車約20分。',
        tip: '京都駅から電車で20分という抜群のアクセス。秋の京都観光で日中の紅葉を楽しんだ後、夜はおごと温泉で近江牛を堪能するプランが人気です。'
      }
    ]
  },
  {
    slug: 'winter-illumination-hotels',
    badge: 'WINTER ILLUMINATION',
    title: '【冬の夜景】イルミネーション＆クリスマス絶景ホテル 完全ガイド',
    metaDesc: '光り輝く冬の絶景！丸の内・六本木（東京）、ハウステンボス光の王国（長崎）、中之島・御堂筋（大阪）、あしかがフラワーパーク（栃木）など、幻想的なイルミネーションを満喫できる人気ホテルを徹底解説。',
    heroDesc: '街中が幻想的な光に包まれる冬。クリスマスデートや家族での特別な旅行に、ホテルのお部屋やレストランからイルミネーションを一望できる極上の夜景ステイをご紹介します。',
    categoryKey: 'winter-illumination-hotels',
    areaGuides: [
      {
        key: 'tokyo_illumination',
        title: '1. 東京・丸の内・大手町＆六本木（シャンパンゴールドの街並みと摩天楼夜景）',
        timing: '開催期間：11月中旬〜2月中旬',
        desc: '丸の内仲通りを彩る約120万球のシャンパンゴールドLEDや、六本木けやき坂の青白い光の並木道。東京駅周辺や六本木のラグジュアリーホテルでは、高層階の客室からきらめく都心のパノラマ夜景を楽しめます。',
        spots: '丸の内仲通りイルミネーション、東京ミッドタウン（六本木）、恵比寿ガーデンプレイス、東京タワー',
        access: 'JR東京駅・有楽町駅、地下鉄六本木駅直結・徒歩圏内。羽田空港から約30分。',
        tip: '客室から東京タワーやイルミネーション通りが見える部屋タイプ（東京タワービュー・シティビュー）を確約して予約するのがポイントです。'
      },
      {
        key: 'huistenbosch_winter',
        title: '2. 長崎・ハウステンボス（世界最大級1,300万球！光の王国ステイ）',
        timing: '開催期間：11月上旬〜翌年5月上旬（通年開催・冬が最高峰）',
        desc: '日本一のイルミネーションとして名高いハウステンボス「光の王国」。園内の直営ホテルに宿泊すれば、運河を流れる光のパレードや白銀の世界を閉園時間を気にせず夜遅くまで堪能できます。',
        spots: 'ハウステンボス（光の滝・アンブレラストリート・アートガーデン）、佐世保バーガー、九十九島',
        access: '博多駅から特急「ハウステンボス号」で約1時間45分。長崎空港から高速船で直行約50分。',
        tip: 'オフィシャルホテル宿泊者限定の「翌日1Dayパスポート特典」や先行入場を活用すると、連休でもアトラクションを効率よく楽しめます。'
      },
      {
        key: 'osaka_illumination',
        title: '3. 大阪・中之島＆御堂筋（OSAKA光の饗宴・プロジェクションマッピング）',
        timing: '開催期間：11月上旬〜12月下旬（OSAKA光のルネサンス）',
        desc: '梅田からなんばまで約4kmにわたって光が連なる「御堂筋イルミネーション」と、中之島中央公会堂を彩る圧巻のプロジェクションマッピング。水都大阪の夜景を望むリバーサイドホテルが人気です。',
        spots: '大阪市中央公会堂（光のルネサンス）、御堂筋イルミネーション、グランフロント大阪、梅田スカイビル',
        access: 'JR大阪駅・北新地駅、地下鉄淀屋橋駅・肥後橋駅周辺。新大阪駅から約10分。',
        tip: '中之島リバークルーズ（光の水都ルネサンスクルーズ）に乗船すると、水上から煌びやかな光の演出をパノラマで楽しめます。'
      },
      {
        key: 'ashikaga_hotel',
        title: '4. 栃木・あしかがフラワーパーク（日本三大イルミネーション「光の花の庭」）',
        timing: '開催期間：10月中旬〜2月中旬',
        desc: '全国イルミネーションランキング第1位を誇る奇跡の光の庭。樹齢160年におよぶ大藤を再現した「奇蹟の大藤」や光のスイレンなど500万球以上の光の芸術。近隣の佐野・足利温泉ホテルが観光拠点に最適です。',
        spots: 'あしかがフラワーパーク、佐野プレミアム・アウトレット、足利学校、鑁阿寺（ばんなじ）',
        access: 'JR両毛線「あしかがフラワーパーク駅」より徒歩3分。東北自動車道佐野藤岡ICより約18分。',
        tip: '日暮れ直後の16:30〜17:30は入場門が大変混雑するため、15時台の早め入園がおすすめ。夜は佐野ラーメンや名物ポテト入り焼きそばを。'
      }
    ]
  },
  {
    slug: 'new-year-hatsumode-onsen',
    badge: 'NEW YEAR RETREAT',
    title: '【年末年始・お正月】初詣＆初日の出ご来光温泉旅館 完全ガイド',
    metaDesc: '新しい年の幕開け！伊勢神宮（三重）、鶴岡八幡宮（鎌倉）、成田山新勝寺（千葉）、犬吠埼温泉（本州最速初日の出）など、初詣と温泉おせち料理を堪能できる年末年始の人気宿を徹底解説。',
    heroDesc: '厳かな新年の祈りと、太平洋から昇るまばゆい初日の出。豪華なおせち料理やお雑煮、初湯に浸かるお正月旅行。年末年始に訪れたい開運・初詣の温泉旅館を厳選紹介。',
    categoryKey: 'new-year-hatsumode-onsen',
    areaGuides: [
      {
        key: 'ise_hatsumode',
        title: '1. 三重・伊勢神宮＆鳥羽志摩（日本人の心のふるさとでお伊勢参り初詣）',
        timing: '年末年始・お正月（終夜参拝あり）',
        desc: '内宮・外宮の両参りで新年の多幸を祈願するお伊勢参り。伊勢志摩の温泉旅館では、伊勢海老やアワビを贅沢に使ったお祝い会席とおせち料理が振る舞われ、朝熊山展望台からは感動的な初日の出を拝めます。',
        spots: '伊勢神宮（内宮・外宮）、おかげ横丁・おはらい町、夫婦岩（二見興玉神社）、朝熊山頂展望足湯',
        access: '近鉄特急で名古屋から伊勢市駅・宇治山田駅まで約80分、大阪難波駅から約100分。',
        tip: '元旦の早朝参拝（朝5時〜6時台）は比較的混雑が穏やかで、宇治橋から昇る朝日が神々しくおすすめです。'
      },
      {
        key: 'kamakura_hatsumode',
        title: '2. 神奈川・古都鎌倉＆湘南（鶴岡八幡宮初詣と相模湾・富士夕景）',
        timing: '年末年始・お正月',
        desc: '源頼朝ゆかりの鶴岡八幡宮や長谷寺での初詣。由比ヶ浜や七里ヶ浜沿いのオーシャンビューホテルに泊まれば、相模湾越しに望む富士山と初夕日の絶景、鎌倉野菜や相模湾の地魚会席を満喫できます。',
        spots: '鶴岡八幡宮、鎌倉大仏（高徳院）、長谷寺、江の島（江島神社・シーキャンドル）、小町通り',
        access: 'JR横須賀線・湘南新宿ラインで東京・新宿から鎌倉駅まで約55分。江ノ電接続。',
        tip: '小町通りの食べ歩きや初詣後は、江ノ電で江の島へ足を伸ばし、夕暮れの江の島シーキャンドルライトアップを鑑賞するのが人気です。'
      },
      {
        key: 'narita_hatsumode',
        title: '3. 千葉・成田山新勝寺（初詣参拝客全国屈指！名物うなぎと温泉）',
        timing: '年末年始・お正月（1月中ずっと賑わう初詣）',
        desc: '年間300万人以上の初詣客が訪れる大本山成田山新勝寺。表参道に立ち並ぶ老舗うなぎ店で香ばしい蒲焼きを味わい、成田空港周辺の天然温泉付きホテルでゆったりと新年を迎えるステイが人気です。',
        spots: '成田山新勝寺（大本堂・平和大塔）、成田山表参道（駿河屋・川豊うなぎ）、成田山公園',
        access: '京成特急スカイライナーまたはJR成田線で京成成田駅・成田駅下車。上野・日暮里から約40分。',
        tip: '成田山表参道の名店うなぎは整理券制になることが多いため、午前中の早めに整理券を受け取ってから参拝に向かうのがスムーズです。'
      },
      {
        key: 'choshu_goraiko',
        title: '4. 千葉・銚子＆犬吠埼温泉（本州の平地で一番早い初日の出と太平洋パノラマ）',
        timing: '元旦ご来光（例年6時46分頃）',
        desc: '本州の平地で最も早く初日の出が見られる犬吠埼（いぬぼうさき）。太平洋を一望する海岸沿いの温泉露天風呂から、水平線から昇る黄金色の初日の出を望む体験は圧倒的な感動をもたらします。',
        spots: '犬吠埼灯台、犬吠テラステラス、銚子ポートタワー、屏風ヶ浦、銚子電鉄',
        access: 'JR特急「しおさい」で東京駅から銚子駅まで約1時間50分、銚子電鉄で犬吠駅まで約20分。',
        tip: '元旦の朝は客室テラスや展望露天風呂から初日の出を直接拝めるオーシャンビュー客室の予約が必須です。'
      }
    ]
  },
  {
    slug: 'autumn-wine-fruit-hunting',
    badge: 'AUTUMN HARVEST',
    title: '【秋の味覚狩り】ワイナリー巡り＆フルーツ温泉リゾート 完全ガイド',
    metaDesc: '収穫の秋を満喫！山梨勝沼・石和温泉（新酒ワインとぶどう狩り）、信州千曲川ワインバレー、北海道余市、岡山果実郷など、秋のワイナリーツアーとフルーツ狩り・温泉を満喫できる人気宿を徹底解説。',
    heroDesc: 'もぎたてのシャインマスカットや巨峰、樽出しの出来立て新酒ワイン。心地よい秋風が吹くぶどう畑を巡り、夜は美肌の温泉とご当地マリアージュディナーに舌鼓を打つ大人の収穫祭ステイ。',
    categoryKey: 'autumn-wine-fruit-hunting',
    areaGuides: [
      {
        key: 'katsunuma_wine',
        title: '1. 山梨・勝沼ぶどう郷＆石和温泉（日本ワインの聖地で新酒とシャインマスカット）',
        timing: '収穫シーズン：8月下旬〜11月上旬（山梨ヌーボー解禁は11月3日）',
        desc: '約30軒ものワイナリーが密集する日本一のワイン産地・甲州市勝沼。ぶどう畑を見下ろすワイナリーレストランでテイスティングを楽しんだ後は、美肌の湯として名高い石和温泉の露天風呂と甲州ワインビーフディナーを満喫。',
        spots: '勝沼ぶどうの丘（地下ワインカーヴ）、ルミエールワイナリー、シャトー・メルシャン勝沼ワイナリー、ほったらかし温泉',
        access: 'JR中央本線特急「あずさ・かいじ」で新宿駅から石和温泉駅・山梨市駅まで約90分。中央道勝沼ICより約10分。',
        tip: '「ぶどうの丘」の地下ワインカーヴでは、タートヴァン（試飲皿）を使って約200種類のワインを自由に試飲できます。'
      },
      {
        key: 'nagano_wine',
        title: '2. 長野・小布施＆千曲川ワインバレー（秋の栗菓子・ワイン・りんご狩り）',
        timing: '収穫シーズン：9月中旬〜11月下旬',
        desc: '栗と北斎の町・小布施や、新進気鋭のワイナリーが集まる千曲川ワインバレー。名物の小布施栗のモンブランやりんご狩りを楽しんだ後は、北信州の山あいに湧く名湯露天風呂で秋の恵みを味わえます。',
        spots: '小布施堂・竹風堂（小布施栗スイーツ）、北斎館、サンクゼール・ワイナリー（飯綱町）、湯田中渋温泉郷',
        access: '北陸新幹線「長野駅」より長野電鉄特急で小布施駅・湯田中駅まで約20〜45分。上信越道信州中野ICより車約10分。',
        tip: '秋限定の「小布施堂・朱雀（生栗のペースト）」を味わうなら朝の整理券確保が必須。宿泊先で手配可能なプランも人気です。'
      },
      {
        key: 'yoichi_wine',
        title: '3. 北海道・余市＆小樽（世界が注目する余市ワインと日本海の秋海鮮）',
        timing: '収穫シーズン：9月上旬〜10月下旬',
        desc: 'ピノ・ノワールなど世界水準のワインを生み出す余市町。ニッカウヰスキー余市蒸溜所や個性豊かなワイナリーを巡り、小樽運河沿いのクラシックホテルや温泉宿で、秋サケやイクラ、ウニと北海道産ワインのマリアージュを堪能。',
        spots: 'ニッカウヰスキー余市蒸溜所、登醸造・ドメーヌタカヒコ周辺ぶどう畑、小樽運河、余市フルーツ街道',
        access: 'JR函館本線で札幌駅から小樽駅まで快速約32分、余市駅まで約60分。新千歳空港から快速エアポート直通あり。',
        tip: '秋は旬を迎える「秋サケの筋子・生イクラ丼」と余市ワインのペアリングが最高。小樽の夜景とともに味わえます。'
      },
      {
        key: 'okayama_fruit',
        title: '4. 岡山・倉敷＆湯郷温泉（フルーツ王国でシャインマスカット＆白桃パフェ）',
        timing: '収穫シーズン：7月〜10月下旬',
        desc: '晴れの国・岡山が誇る最高品質のシャインマスカットやピオーネ。美観地区の白壁の町並みでフルーツパフェを味わい、美作三湯の一つ・湯郷温泉の美肌湯と岡山千屋牛会席をゆったり愉しめます。',
        spots: '倉敷美観地区（くらしき桃子パフェ）、岡山後楽園、湯郷温泉（鷺の湯）、農園フルーツ狩り',
        access: '山陽新幹線「岡山駅」よりJR山陽本線で倉敷駅まで約15分。湯郷温泉へは岡山駅より直行バス約80分。',
        tip: '倉敷美観地区の「くらしき桃子」では、旬のシャインマスカットを惜しみなく使った贅沢パフェが連日大人気です。'
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

for (const cfg of awConfigs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated seasonal hub page: /${cfg.slug}`);
}
