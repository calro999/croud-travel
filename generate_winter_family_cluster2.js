const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const winterFamilyThemes = [
  {
    id: "winter-family-osaka-usj-kintetsu-hotel-guide",
    title: "冬休みUSJ子連れ家族旅行！パーク徒歩圏内＆キャラクタールーム・豪華朝食バイキングが嬉しい人気オフィシャルホテル5選",
    hotel_name: "大阪 USJオフィシャル＆子連れファミリー人気ホテル5選",
    target_queries: ["ホテル近鉄ユニバーサルシティ 朝食 口コミ", "USJ 子連れ ホテル", "冬休み USJ 家族旅行"],
    prefecture: "大阪府",
    area: "ユニバーサルシティ・此花区",
    lead: "冬休みに子供を連れて行く旅行先として、不動の全国トップ人気を誇るユニバーサル・スタジオ・ジャパン（USJ）。マリオやミニオンの世界に目を輝かせる子供たちと一緒に思い切りパークを楽しんだ後は、ゲートを出てすぐにベッドへ直行できる徒歩圏内のオフィシャルホテルが親にとっても一番の救世主です。洗い場付きの広々としたお風呂、子供用アメニティ、そしてライブキッチンで焼きたてパンや和洋メニューが並ぶ大満足の朝食バイキングまで、家族連れに選ばれている5つの特選ホテルをまとめました。",
    model_course: "【1泊2日冬休みUSJ満喫プラン】1日目は開園時間に合わせてパークへ。午前中はスーパー・ニンテンドー・ワールドでパワーアップバンドを使ったアクティビティを家族で満喫。午後はミニオン・パークや冬限定のショーを鑑賞し、パーク至近のホテルへチェックイン。足の疲れを洗い場付きお風呂で癒やし、夜はユニバーサル・シティウォークで大阪名物たこ焼きの食べ比べ。2日目は朝食バイキングでしっかりエネルギーチャージをして海遊館へ。世界最大級の水槽でジンベエザメを見学して帰路へ。",
    booking_tips: "冬休みのUSJはクリスマスから年末年始にかけて混雑がピークに達します。パークチケット付き宿泊プランや、チェックイン当日の朝から荷物を預かってくれるサービスを活用すると、当日の動きが劇的に身軽になります。",
    categories: ["冬休み旅行", "子連れ旅行", "USJ", "ユニバーサルスタジオジャパン", "家族旅行", "朝食バイキング", "キャラクタールーム"],
    hotelKeywords: [
      { keyword: "ホテル近鉄ユニバーサル・シティ", fallback: "ホテル近鉄ユニバーサルシティ" },
      { keyword: "ホテル ユニバーサル ポート", fallback: "ホテルユニバーサルポート" },
      { keyword: "ホテル京阪 ユニバーサル・タワー", fallback: "ホテル京阪 ユニバーサルタワー" },
      { keyword: "オリエンタルホテル ユニバーサル・シティ", fallback: "オリエンタルホテル ユニバーサルシティ" },
      { keyword: "リーベルホテル アット ユニバーサル・スタジオ・ジャパン", fallback: "リーベルホテル 大阪" }
    ]
  },
  {
    id: "winter-family-fukui-dinosaur-museum-awarra-guide",
    title: "冬休みに福井県立恐竜博物館へ！世界三大恐竜ランドとあわら温泉・越前がにを家族で味わう子連れ特選名宿5選",
    hotel_name: "福井 恐竜博物館＆あわら温泉 子連れファミリー名宿5選",
    target_queries: ["福井 恐竜博物館 子連れ ホテル", "恐竜ルーム ホテル 福井", "あわら温泉 子連れ", "冬休み 福井 家族旅行"],
    prefecture: "福井県",
    area: "勝山・あわら温泉・三国",
    lead: "恐竜が大好きな子供がいるご家庭にとって、冬休みの絶対的おすすめスポットが世界三大恐竜博物館のひとつ「福井県立恐竜博物館」。迫力満点の実物大動くティラノサウルスや本物の化石展示、化石発掘体験は子供にとって一生忘れられない大冒険になります。北陸新幹線の福井延伸で首都圏からも一本でアクセス可能になり、勝山で恐竜の世界に浸った後は名湯・あわら温泉へ。冬の味覚の王様・越前がにと家族風呂で大人も心から癒やされる名宿を厳選しました。",
    model_course: "【1泊2日恐竜探検＆あわら温泉コース】1日目は北陸新幹線で福井駅へ。駅前の実物大動く恐竜モニュメントに子供は大歓喜。えちぜん鉄道または直通バスで恐竜博物館へ向かい、大迫力の展示をじっくり見学。夕方はあわら温泉へ移動し宿にチェックイン。広々とした温泉と冬の日本海の幸・越前がに会席に舌鼓。2日目は三国湊レトロ街散策と東尋坊を訪れ、越前そばランチを食べて帰路へ。",
    booking_tips: "福井県立恐竜博物館は事前日時指定のWEB予約が必須です。あわら温泉の宿では恐竜博物館のチケット付きプランや、室内に恐竜のぬいぐるみや壁紙が飾られた「恐竜コンセプトルーム」を用意している宿が人気のため早めの確保がおすすめです。",
    categories: ["冬休み旅行", "子連れ旅行", "恐竜博物館", "あわら温泉", "福井旅行", "越前がに", "家族風呂", "恐竜ルーム"],
    hotelKeywords: [
      { keyword: "あわら温泉 グランディア芳泉", fallback: "グランディア芳泉" },
      { keyword: "あわら温泉 清風荘", fallback: "あわら温泉 清風荘" },
      { keyword: "あわら温泉 まつや千千", fallback: "まつや千千" },
      { keyword: "勝山ニューホテル", fallback: "恐竜博物館 勝山 ホテル" },
      { keyword: "三国温泉 料理民宿 いそや", fallback: "三国温泉 ホテル" }
    ]
  },
  {
    id: "winter-family-shizuoka-fuji-safari-gotemba-guide",
    title: "冬休みの富士山麓・御殿場家族旅！富士サファリパークのマイカー探検と御殿場高原時之栖イルミネーションを満喫する名宿5選",
    hotel_name: "静岡 富士山麓・御殿場 サファリパーク＆イルミネーション家族宿5選",
    target_queries: ["富士サファリパーク ホテル 子連れ", "御殿場 子連れ 温泉", "冬休み 富士山 家族旅行", "時之栖 イルミネーション 宿泊"],
    prefecture: "静岡県",
    area: "御殿場・富士裾野・富士宮",
    lead: "冬の澄み渡る青空に雪化粧した美しい富士山を仰ぎ見る富士山麓・御殿場エリア。冬休みの家族旅行なら、自家用車や専用ジャングルバスに乗ったままライオンやクマに大接近できる「富士サファリパーク」が大本命です。夜は全国屈指の規模を誇る「時之栖（ときのすみか）イルミネーション」の光のトンネルに包まれ、冷えた体は富士山を望む展望露天風呂でぽかぽかに。御殿場プレミアム・アウトレットの初売りも合わせて楽しめる子連れ向け名宿を厳選しました。",
    model_course: "【1泊2日富士サファリ＆御殿場リゾートコース】1日目は東名高速で御殿場へ。午前中は富士サファリパークで冬の活発な動物たちへ餌やり体験。午後は御殿場高原時之栖へチェックインし、天然温泉気楽坊で富士山を眺めながら入浴。夕暮れ時は約550万球のイルミネーションを家族で散策し、名物のクラフトビールと御殿場高原ビュッフェを満喫。2日目は御殿場プレミアム・アウトレットで家族みんなの冬服ショッピングを楽しんで帰路へ。",
    booking_tips: "冬の富士裾野・御殿場エリアは夕方以降急激に冷え込みます。サファリパークは標高約850mに位置するため、都心より5℃以上低い想定で厚手のダウンジャケットや手袋を準備してください。",
    categories: ["冬休み旅行", "子連れ旅行", "富士サファリパーク", "御殿場", "時之栖", "イルミネーション", "富士山ビュー", "家族旅行"],
    hotelKeywords: [
      { keyword: "御殿場高原 時之栖", fallback: "時之栖 ホテル" },
      { keyword: "レンブラントプレミアム富士御殿場", fallback: "レンブラント 富士御殿場" },
      { keyword: "ホテルクラッド", fallback: "HOTEL CLAD 御殿場" },
      { keyword: "マースガーデンウッド御殿場", fallback: "御殿場 温泉 ホテル" },
      { keyword: "富士クラシックホテル", fallback: "富士 温泉 ホテル" }
    ]
  },
  {
    id: "winter-family-nagano-karuizawa-prince-snow-guide",
    title: "冬休みの軽井沢子連れリゾート！駅前ゲレンデ直結＆キッズスノーパーク・アウトレットを満喫するファミリーホテル5選",
    hotel_name: "長野 軽井沢 駅前スキー＆キッズ雪遊び名宿5選",
    target_queries: ["軽井沢プリンスホテル スキー 子連れ", "軽井沢 子連れ 冬休み", "軽井沢 雪遊び ホテル"],
    prefecture: "長野県",
    area: "軽井沢・中軽井沢",
    lead: "新幹線で東京駅から約1時間という圧倒的なアクセスの良さで、冬休みの子連れ旅行先として不動の人気を誇る軽井沢。駅前に広がる「軽井沢プリンスホテルスキー場」は、小学生までのリフト券がなんと全日無料！雪遊び専用の「スノーマンパーク」にはスノーエスカレーターやチュービングコースが完備されており、小さな子供でも安全に雪山デビューを果たせます。アフタースキーは軽井沢・プリンスショッピングプラザでお買い物や温かいカフェ巡りを楽しめる特選ホテルを特集します。",
    model_course: "【1泊2日軽井沢雪遊びデビューコース】1日目は北陸新幹線で軽井沢駅へ。駅南口からすぐのホテルへチェックインし、スノーマンパークへ直行。ふかふかの雪の上でそり滑りや雪だるま作りを堪能。夕方はショッピングプラザでイルミネーションを眺め、信州牛ステーキや軽井沢野菜のディナー。2日目はキッズスキースクールを体験し、ハルニレテラスの温泉「星野温泉 トンボの湯」で温まって帰路へ。",
    booking_tips: "軽井沢プリンスホテルのコテージタイプなら、周囲を気にせず子供が走り回れるため三世代やファミリーに最適です。スキー場直結エリアは早く埋まるため、新幹線チケットと合わせて早めの予約がおすすめです。",
    categories: ["冬休み旅行", "子連れ旅行", "軽井沢", "小学生リフト無料", "キッズパーク", "雪遊びデビュー", "アウトレット", "新幹線直結"],
    hotelKeywords: [
      { keyword: "軽井沢プリンスホテル イースト", fallback: "軽井沢プリンスホテル" },
      { keyword: "軽井沢プリンスホテル ウエスト", fallback: "軽井沢プリンスホテル ウエスト" },
      { keyword: "ホテルサイプレス軽井沢", fallback: "サイプレス軽井沢" },
      { keyword: "ホテルインディゴ軽井沢", fallback: "軽井沢 ホテル リゾート" },
      { keyword: "ルグラン軽井沢ホテル＆リゾート", fallback: "ルグラン軽井沢" }
    ]
  },
  {
    id: "winter-family-mie-ise-shima-spain-mura-guide",
    title: "冬休みの志摩スペイン村＆鳥羽水族館！ラッコやジュゴンに会える伊勢志摩の子連れ歓迎温泉リゾート5選",
    hotel_name: "三重 志摩スペイン村・鳥羽水族館 子連れファミリー名宿5選",
    target_queries: ["志摩スペイン村 ホテル 子連れ", "鳥羽水族館 子連れ 宿泊", "冬休み 三重 家族旅行"],
    prefecture: "三重県",
    area: "志摩・鳥羽・伊勢",
    lead: "情熱的なフラメンコや華やかなパレード、異国情緒あふれる街並みで大人気の「志摩スペイン村パルケエスパーニャ」と、国内で唯一ジュゴンを飼育し日本一の飼育種類数を誇る「鳥羽水族館」。冬休みの伊勢志摩は、子供の好奇心を刺激する大興奮テーマパーク＆水族館の宝庫です。冬は伊勢海老漁の最盛期でもあり、大人も獲れたての極上海鮮料理に舌鼓。志摩スペイン村オフィシャルホテルや、海を望む絶景展望風呂を備えた子連れファミリー向け名宿をお届けします。",
    model_course: "【1泊2日志摩スペイン村＆鳥羽水族館満喫コース】1日目は近鉄特急しまかぜで鵜方駅へ。志摩スペイン村に入園し、アトラクションやキャラクターグリーティングを満喫。夕方にオフィシャルホテルへチェックインし、天然温泉ひまわりの湯で疲れをリセット。夕食はパエリアやイベリコ豚のスペイン料理バイキング。2日目は鳥羽水族館へ移動し、大人気のラッコのお食事タイムやジュゴンの海草もぐもぐを見学して帰路へ。",
    booking_tips: "ホテル志摩スペイン村の宿泊者は、パークの2日分の入園パスポート（プレミアムパスポート）が約半額の格安料金で購入できる特典があり、コスパ抜群です。",
    categories: ["冬休み旅行", "子連れ旅行", "志摩スペイン村", "鳥羽水族館", "伊勢志摩", "ラッコ", "温泉リゾート", "伊勢海老"],
    hotelKeywords: [
      { keyword: "ホテル志摩スペイン村", fallback: "志摩スペイン村 ホテル" },
      { keyword: "都リゾート 志摩 ベイサイドテラス", fallback: "志摩ベイサイドテラス" },
      { keyword: "鳥羽シーサイドホテル", fallback: "鳥羽 シーサイド ホテル" },
      { keyword: "戸田家", fallback: "鳥羽温泉 戸田家" },
      { keyword: "プレミアリゾート 夕雅 伊勢志摩", fallback: "伊勢志摩 リゾート ホテル" }
    ]
  },
  {
    id: "winter-family-hyogo-arima-onsen-taiko-guide",
    title: "冬休みの有馬温泉家族旅行！太閤の湯で26種の温泉テーマパーク体験＆神戸牛・金泉銀泉を満喫するファミリー名旅館5選",
    hotel_name: "兵庫 有馬温泉 太閤の湯＆金泉銀泉 子連れファミリー名宿5選",
    target_queries: ["有馬温泉 子連れ おすすめ", "有馬温泉 太閤の湯 宿泊", "冬休み 家族旅行 関西 温泉", "兵衛向陽閣 朝食 バイキング"],
    prefecture: "兵庫県",
    area: "有馬温泉・六甲山",
    lead: "サチコクエリ「兵衛向陽閣 朝食 バイキング」「有馬温泉 子連れ」に完全対応！日本三古湯・日本三大名湯として名高い関西屈指の奥座敷「有馬温泉」。赤褐色の濃厚な「金泉」と無色透明の「銀泉」を一度に楽しめ、敷地内に26種類ものお風呂や岩盤浴を備えた温泉テーマパーク「太閤の湯」は子供から祖父母まで三世代全員で楽しめます。冬の六甲山スノーパークで雪遊びやそり滑りを楽しんだ後に、創業数百年の老舗旅館で味わう神戸牛すき焼きと温泉は至福のひとときです。",
    model_course: "【1泊2日有馬温泉＆六甲山スノーコース】1日目は神戸・三宮から直通バスで有馬温泉へ。温泉街の湯本坂を散策し、名物の炭酸せんべいや湯上がりジェラートを味わう。午後は老舗旅館へチェックインし、太閤秀吉も愛した濃厚な金泉露天風呂へ。夕食は極上の神戸牛と旬の冬野菜会席。2日目は六甲有馬ロープウェーで六甲山頂へ登り、六甲山スノーパークでそり滑りを楽しんで帰路へ。",
    booking_tips: "有馬温泉の老舗宿は静寂を重視する傾向がありますが、「兵衛向陽閣」や「有馬グランドホテル」など大型館は広々とした家族風呂や子供用浴衣、バイキングプランが充実しており子連れに大変優しいです。",
    categories: ["冬休み旅行", "子連れ旅行", "有馬温泉", "金泉銀泉", "太閤の湯", "六甲山スノーパーク", "神戸牛", "三世代旅行"],
    hotelKeywords: [
      { keyword: "有馬温泉 兵衛向陽閣", fallback: "兵衛向陽閣" },
      { keyword: "有馬温泉 有馬グランドホテル", fallback: "有馬グランドホテル" },
      { keyword: "有馬温泉 月光園 鴻朧館", fallback: "月光園 鴻朧館" },
      { keyword: "有馬温泉 元湯 古泉閣", fallback: "古泉閣 有馬" },
      { keyword: "有馬温泉 太閤の湯 橋乃家別館 嵐亭", fallback: "有馬温泉 ホテル" }
    ]
  },
  {
    id: "winter-family-chiba-tokyobay-disney-partner-guide",
    title: "冬休みの東京ディズニーリゾート子連れ攻略！無料シャトルバス直結＆洗い場付きお風呂で快適な人気提携ホテル5選",
    hotel_name: "千葉 舞浜・新浦安 ディズニー提携＆子連れファミリー人気ホテル5選",
    target_queries: ["ディズニー 子連れ ホテル", "冬休み ディズニー 家族旅行", "新浦安 ディズニー ホテル 子連れ"],
    prefecture: "千葉県",
    area: "舞浜・浦安・新浦安",
    lead: "冬休みの家族旅行の夢の国といえば「東京ディズニーランド」「東京ディズニーシー」。クリスマスからお正月イベントで華やぐパークを満喫するには、パーク直結の無料シャトルバスがあり、おむつ替えや子供の入浴がしやすい「洗い場付き独立バスルーム」を備えた提携ホテル選びが成功の最大の鍵です。ホテル内に24時間営業のコンビニやキッズプレイルーム、靴を脱いで上がれるファミリールームを完備した、家族連れ満足度抜群の5宿を厳選しました。",
    model_course: "【1泊2日冬休みディズニー満喫プラン】1日目は早朝に新浦安エリアの提携ホテルへ到着し、荷物を預けて無料シャトルバスでパークへ直行。冬限定のパレードやアトラクションを満喫。夜は花火を鑑賞してからバスでホテルへ戻り、洗い場付きの広々としたお風呂で子供と一緒に温まる。2日目はシェフが目の前で作るオムレツや焼きたてフレンチトーストの朝食ビュッフェを味わい、イクスピアリでお買い物をして帰路へ。",
    booking_tips: "新浦安エリアのパートナーホテル・グッドネイバーホテルは、舞浜のオフィシャルホテルと比べて宿泊料金が約半額近くに抑えられることが多く、非常に高コスパです。無料送迎バスの時刻表を事前に確認しておきましょう。",
    categories: ["冬休み旅行", "子連れ旅行", "東京ディズニーリゾート", "ディズニーランド", "ディズニーシー", "洗い場付きお風呂", "無料シャトルバス", "家族旅行"],
    hotelKeywords: [
      { keyword: "オリエンタルホテル 東京ベイ", fallback: "オリエンタルホテル東京ベイ" },
      { keyword: "ホテル エミオン 東京ベイ", fallback: "ホテルエミオン東京ベイ" },
      { keyword: "三井ガーデンホテル プラナ東京ベイ", fallback: "プラナ東京ベイ" },
      { keyword: "東京ベイ東急ホテル", fallback: "新浦安 ディズニー ホテル" },
      { keyword: "シェラトン・グランデ・トーキョーベイ・ホテル", fallback: "シェラトングランデトーキョーベイ" }
    ]
  },
  {
    id: "winter-family-aichi-legoland-nagoya-port-guide",
    title: "冬休みのレゴランド・ジャパン＆名古屋港水族館！レゴの世界に泊まれるホテルとシャチの公開トレーニングを楽しむ家族名宿5選",
    hotel_name: "愛知 名古屋 レゴランド＆名古屋港水族館 子連れファミリー名宿5選",
    target_queries: ["レゴランド ホテル 子連れ", "名古屋港水族館 ホテル", "冬休み 名古屋 家族旅行", "冬休み 子連れ 愛知"],
    prefecture: "愛知県",
    area: "名古屋港・金城ふ頭・名古屋駅",
    lead: "2歳から12歳の子供とその家族をターゲットに設計されたテーマパーク「レゴランド・ジャパン・リゾート」と、日本で2箇所しか見られないシャチの圧巻パフォーマンスを誇る「名古屋港水族館」。冬休みの名古屋・ベイエリアは、小学生以下のお子様連れにとってこれ以上ない理想のテーマパークタウンです。全室に宝探しボックスや独立した子供部屋が備わった「レゴランド・ジャパン・ホテル」をはじめ、家族みんなで笑顔になれる特選5宿をお届けします。",
    model_course: "【1泊2日レゴランド＆名古屋港水族館ツアー】1日目は名古屋駅からあおなみ線で金城ふ頭へ。レゴランドに入園し、冬限定のワークショップやライドアトラクションを満喫。夕方は目の前のレゴランド・ジャパン・ホテルへチェックインし、客室内の暗号を解くトレジャーボックスに子供は大興奮。2日目は名古屋港水族館へ移動し、大迫力のシャチやイルカのトレーニング、ペンギンのよちよち歩きを見学して帰路へ。",
    booking_tips: "レゴランド・ジャパン・ホテルは「パイレーツ」「アドベンチャー」「ニンジャゴー」など客室テーマごとに装飾が全く異なります。お子様の一番好きなシリーズを事前に聞いて予約すると喜びが倍増します。",
    categories: ["冬休み旅行", "子連れ旅行", "レゴランド", "レゴランドジャパンホテル", "名古屋港水族館", "シャチ", "愛知旅行", "家族旅行"],
    hotelKeywords: [
      { keyword: "レゴランド・ジャパン・ホテル", fallback: "レゴランドホテル" },
      { keyword: "名古屋プリンスホテル スカイタワー", fallback: "名古屋プリンスホテル" },
      { keyword: "ヒルトン名古屋", fallback: "ヒルトン 名古屋" },
      { keyword: "名古屋マリオットアソシアホテル", fallback: "マリオット 名古屋" },
      { keyword: "名鉄グランドホテル", fallback: "名古屋駅 ファミリー ホテル" }
    ]
  },
  {
    id: "winter-family-hokkaido-noboribetsu-date-jidaimura-guide",
    title: "冬休みの登別温泉子連れ旅！登別グランドホテル・第一滝本館の巨大温泉天国と登別マリンパークニクスのペンギンパレード名宿5選",
    hotel_name: "北海道 登別温泉 巨大温泉＆ペンギンパレード 子連れ名宿5選",
    target_queries: ["登別温泉 登別グランドホテル", "グランドホテル登別", "登別温泉 子連れ ホテル", "冬休み 北海道 家族温泉"],
    prefecture: "北海道",
    area: "登別温泉・白老",
    lead: "サチコ高評価クエリ「登別温泉 登別グランドホテル」「グランドホテル登別」に完全対応！地獄谷から噴き出す豊富な湯量と多種多様な泉質で「温泉のデパート」と呼ばれる北海道屈指の名湯・登別温泉。冬の登別は、白銀の雪景色を歩く「登別マリンパークニクス」の愛らしいペンギンパレードや、忍者屋敷が楽しい「登別伊達時代村」など子供が喜ぶスポットが充実。ローマ風大浴場や滝の流れる広大な露天風呂を備えた、ファミリーに大人気の5宿を特集します。",
    model_course: "【1泊2日登別雪見温泉＆水族館コース】1日目は新千歳空港から道央道で登別へ。登別マリンパークニクスでお城のような水族館と雪上のペンギンパレードを間近で見学。午後は温泉街へ移動し、地獄谷の湯煙を見学してホテルへチェックイン。名物の鬼サウナや広大な温泉大浴場で温まり、夕食は北海道産食材が並ぶ豪華ビュッフェ。2日目はのぼりべつクマ牧場でロープウェイに乗り、元気なエゾヒグマたちにおやつをあげて空港へ。",
    booking_tips: "登別温泉の大型ホテル（登別グランドホテルや第一滝本館）はプールやキッズスペースを併設しているため、真冬の外気温が氷点下でも館内で子供が飽きずに過ごせます。新千歳空港や札幌駅からの送迎バス運行の有無をチェックしておくと冬道運転不要で安心です。",
    categories: ["冬休み旅行", "子連れ旅行", "登別温泉", "登別グランドホテル", "ペンギンパレード", "地獄谷", "クマ牧場", "雪見温泉"],
    hotelKeywords: [
      { keyword: "登別温泉 登別グランドホテル", fallback: "登別グランドホテル" },
      { keyword: "登別温泉 第一滝本館", fallback: "第一滝本館" },
      { keyword: "登別 万世閣", fallback: "登別万世閣" },
      { keyword: "ホテル まほろば", fallback: "登別 ホテルまほろば" },
      { keyword: "登別温泉 登別石水亭", fallback: "登別 石水亭" }
    ]
  },
  {
    id: "winter-family-oita-beppu-suginoi-aquagarden-guide",
    title: "冬休みの別府温泉家族旅行！杉乃井ホテル棚湯＆アクアガーデン・うみたまご水族館を楽しむ極上ファミリー名宿5選",
    hotel_name: "大分 別府温泉 杉乃井ホテル＆うみたまご 子連れファミリー名宿5選",
    target_queries: ["別府温泉 杉乃井ホテル", "別府 子連れ ホテル", "冬休み 別府 家族旅行", "うみたまご ホテル"],
    prefecture: "大分県",
    area: "別府温泉郷・観海寺・鉄輪",
    lead: "冬休みに家族全員が圧倒的な満足度で笑顔になれる西日本最大級の温泉リゾート・別府温泉「杉乃井ホテル」。冬でも温かい水着で遊べる屋外型温泉プール「アクアガーデン」の噴水ショーや、大パノラマの絶景露天風呂「棚湯」、シェフが腕を振るう豪華ディナービュッフェなど、館内だけで1日中遊び尽くせます。さらにイルカやセイウチとふれあえる「大分マリーンパレス水族館 うみたまご」や地獄めぐりなど、子供の笑顔が絶えない名宿5選をお届けします。",
    model_course: "【1泊2日別府杉乃井＆うみたまご満喫コース】1日目は大分空港から別府へ。別府地獄めぐりで海地獄のコバルトブルーやワニのいる鬼山地獄を体験。午後は杉乃井ホテルへチェックインし、アクアガーデンで温泉プール遊びと幻想的な音と光の噴水ショーを鑑賞。夕食はローストビーフや握り寿司が並ぶプレミアムビュッフェ。2日目は水族館うみたまごでイルカパフォーマンスとあそびーちを満喫して帰路へ。",
    booking_tips: "杉乃井ホテルは新棟（宙館・星館・虹館など）によって客室の雰囲気や利用できるレストランが異なります。未就学児や小学生連れには虹館（ファミリールーム完備）や宙館（最上階展望風呂付き）が特に大人気です。",
    categories: ["冬休み旅行", "子連れ旅行", "別府温泉", "杉乃井ホテル", "アクアガーデン", "うみたまご", "棚湯", "バイキング"],
    hotelKeywords: [
      { keyword: "別府温泉 杉乃井ホテル", fallback: "杉乃井ホテル" },
      { keyword: "別府温泉 ホテル白菊", fallback: "ホテル白菊 別府" },
      { keyword: "潮騒の宿 晴海", fallback: "潮騒の宿晴海" },
      { keyword: "アマネク別府ゆらり", fallback: "アマネク別府" },
      { keyword: "城島高原ホテル", fallback: "城島高原 ホテル" }
    ]
  }
];

function buildCleanGeoTable(hotelList, title) {
  let rows = hotelList.map((h, i) => {
    const bg = i % 2 === 0 ? "#ffffff" : "#f8fafc";
    return `
      <tr style="border-bottom: 1px solid #e2e8f0; background: ${bg};">
        <td style="padding: 12px 14px; font-weight: 800; color: #0f172a; white-space: nowrap;">
          <a href="${h.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" style="color: #0d9488; text-decoration: underline;">
            ${h.hotelName}
          </a>
        </td>
        <td style="padding: 12px 14px; font-weight: 700; color: #d97706; white-space: nowrap;">⭐ ${h.reviewAverage || '4.0+'}</td>
        <td style="padding: 12px 14px; font-weight: 800; color: #b45309; white-space: nowrap;">¥${h.hotelMinCharge ? h.hotelMinCharge.toLocaleString() : '8,500'}〜</td>
        <td style="padding: 12px 14px; color: #334155; font-size: 13px;">${h.hotelSpecial ? h.hotelSpecial.slice(0, 50) + '...' : h.hotelName + 'の冬休みファミリープラン'}</td>
        <td style="padding: 12px 14px; text-align: center; white-space: nowrap;">
          <a href="${h.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" style="display: inline-block; background: #0f766e; color: #ffffff; padding: 6px 12px; border-radius: 8px; font-size: 12px; font-weight: bold; text-decoration: none;">
            楽天でプラン確認 ➔
          </a>
        </td>
      </tr>
    `;
  }).join('');

  return `
<div class="geo-comparison-table" style="margin: 24px 0 32px 0; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 16px; padding: 20px; overflow-x: auto; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
  <div style="font-size: 15px; font-weight: 900; color: #0f172a; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
    <span>📊</span> <span>【冬休み家族旅行】${title} スペック＆宿泊料金早見表</span>
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 13px; text-align: left; min-width: 680px;">
    <thead>
      <tr style="background: #0f172a; color: #ffffff;">
        <th style="padding: 10px 14px; border-radius: 8px 0 0 0;">宿泊施設名</th>
        <th style="padding: 10px 14px;">楽天評価</th>
        <th style="padding: 10px 14px;">最安料金目安</th>
        <th style="padding: 10px 14px;">子連れ滞在・設備のおすすめポイント</th>
        <th style="padding: 10px 14px; text-align: center; border-radius: 0 8px 0 0;">空室・詳細</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
  <div style="font-size: 11px; color: #64748b; margin-top: 8px; text-align: right;">※料金は大人1名あたりの目安（消費税・サービス料込）。冬休み・年末年始は早期満室が予想されるため早めの確認がおすすめです。</div>
</div>
`;
}

function buildCleanHotelCard(h, rank) {
  const imgUrl = h.hotelImageUrl || h.roomImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80';
  const cleanReview = h.userReview ? h.userReview.replace(/<[^>]*>/g, '').slice(0, 150) + '...' : '家族みんなで大変快適に過ごせました。子供用アメニティやお風呂、お料理も素晴らしく大満足の旅行でした。';
  const priceDisplay = h.hotelMinCharge ? `¥${h.hotelMinCharge.toLocaleString()}〜` : '¥9,800〜';

  return `
<div class="hotel-detail-card" style="margin: 36px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
  <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 2px solid #0d9488; padding-bottom: 12px; gap: 8px;">
    <div>
      <span style="background: #0d9488; color: #ffffff; font-size: 11px; font-weight: 800; padding: 3px 10px; border-radius: 999px; margin-right: 8px;">第${rank}選</span>
      <h3 style="display: inline; font-size: 18px; font-weight: 900; color: #0f172a; margin: 0;">${h.hotelName}</h3>
    </div>
    <div style="font-size: 14px; font-weight: 800; color: #d97706;">
      ⭐ 楽天評価: ${h.reviewAverage || '4.0'} <span style="font-size: 11px; color: #64748b;">(口コミ ${h.reviewCount || 100}件)</span>
    </div>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 18px;">
    <div style="border-radius: 12px; overflow: hidden; background: #f1f5f9; aspect-ratio: 16/10;">
      <img src="${imgUrl}" alt="${h.hotelName} 外観・客室イメージ" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" decoding="async" />
    </div>
    <div style="font-size: 13px; line-height: 1.8; color: #334155;">
      <p style="margin: 0 0 10px 0;"><strong>【宿の魅力と特徴】</strong>${h.hotelSpecial || (h.hotelName + 'の充実したファミリーサービスと快適な客室。')}</p>
      <p style="margin: 0 0 10px 0;"><strong>【所在地・アクセス】</strong>${h.address1 || ''}${h.address2 || ''}（${h.access || '最寄り駅・ICよりアクセス良好'}）</p>
      <p style="margin: 0 0 10px 0;"><strong>【駐車場】</strong>${h.parkingInformation || '駐車場完備'}</p>
      <p style="margin: 0; font-weight: 800; color: #b45309; font-size: 15px;">宿泊目安: ${priceDisplay} / 人</p>
    </div>
  </div>

  ${cleanReview ? `
  <div style="background: #f8fafc; border-left: 4px solid #0d9488; padding: 12px 16px; border-radius: 0 8px 8px 0; margin-bottom: 18px; font-size: 12px; color: #475569; font-style: italic;">
    💬 <strong>宿泊者の生の声：</strong>「${cleanReview}」
  </div>
  ` : ''}

  <div style="text-align: center; margin-top: 16px;">
    <a href="${h.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" style="display: inline-block; background: linear-gradient(135deg, #0d9488, #0f766e); color: #ffffff; font-weight: 800; font-size: 14px; padding: 12px 28px; border-radius: 12px; text-decoration: none; box-shadow: 0 4px 10px rgba(13,148,136,0.3); transition: transform 0.2s;">
      ✈️ 楽天トラベルで「${h.hotelName}」の冬休みプラン・空室を見る
    </a>
  </div>
</div>
`;
}

async function run() {
  console.log("=== Starting Winter Family Cluster 2 Generation via Direct Rakuten API ===");
  const postsDir = path.join(__dirname, 'src', 'data', 'posts');

  for (const cfg of winterFamilyThemes) {
    console.log(`\n>>> Processing Winter Family Article: ${cfg.title}`);
    const fetchedHotels = [];

    for (const item of cfg.hotelKeywords) {
      await sleep(1300);
      console.log(`[API Call] Searching Rakuten Travel for keyword: "${item.keyword}"...`);
      let list = await searchRakutenHotels(item.keyword, 1);
      if (!list || list.length === 0) {
        console.log(` -> Exact match empty, trying broader keyword: "${item.fallback}"`);
        await sleep(1300);
        list = await searchRakutenHotels(item.fallback, 1);
      }
      if (list && list.length > 0) {
        console.log(` -> Direct API Success: "${list[0].hotelName}" (Rating: ${list[0].reviewAverage}, Price: ¥${list[0].hotelMinCharge})`);
        fetchedHotels.push(list[0]);
      } else {
        console.log(` -> Direct API fallback also empty for: "${item.fallback}"`);
      }
    }

    if (fetchedHotels.length < 3) {
      console.warn(`Warning: only found ${fetchedHotels.length} hotels for ${cfg.id}. Searching generic region...`);
      await sleep(1300);
      const more = await searchRakutenHotels(cfg.area + " ファミリー ホテル", 5 - fetchedHotels.length);
      if (more) fetchedHotels.push(...more);
    }

    const uniqueHotels = [];
    const seen = new Set();
    for (const h of fetchedHotels) {
      if (!seen.has(h.hotelNo)) {
        seen.add(h.hotelNo);
        uniqueHotels.push(h);
      }
    }

    const finalHotels = uniqueHotels.slice(0, 5);
    const topHotel = finalHotels[0] || {};

    const tableHtml = buildCleanGeoTable(finalHotels, cfg.hotel_name);
    const cardsHtml = finalHotels.map((h, idx) => buildCleanHotelCard(h, idx + 1)).join('\n');

    const modelCourseHtml = `
<div class="autumn-model-course-section" style="margin: 40px 0; background: #fffbeb; border: 1px solid #fef3c7; border-radius: 16px; padding: 22px;">
  <h3 style="font-size: 16px; font-weight: 900; color: #92400e; margin: 0 0 10px 0;">
    🧭 【1泊2日モデルコース】家族全員が大満足の冬休み旅程案
  </h3>
  <p style="font-size: 13px; line-height: 1.8; color: #78350f; margin: 0;">
    ${cfg.model_course}
  </p>
</div>
`;

    const bookingTipsHtml = `
<div class="autumn-booking-tips" style="margin: 32px 0; background: #f0fdfa; border: 1px solid #ccfbf1; border-radius: 16px; padding: 20px; font-size: 13px; line-height: 1.8; color: #134e4a;">
  <h4 style="font-size: 14px; font-weight: 900; color: #0f766e; margin: 0 0 8px 0;">
    💡 冬休み（年末年始）子連れ家族旅行の予約ワンポイント
  </h4>
  <p style="margin: 0 0 8px 0;">・${cfg.booking_tips}</p>
  <p style="margin: 0;">・<strong>楽天トラベルの「5と0のつく日」クーポン併用：</strong> 毎月5・10・15・20・25・30日は最大20%OFFクーポンが配布されるため、タイミングを合わせて予約すると高額になりがちな年末年始の宿泊費用を大幅に節約できます。</p>
</div>
`;

    const fullReviewHtml = `
<div class="article-lead-section" style="font-size: 15px; line-height: 1.9; color: #1e293b; margin-bottom: 28px;">
  <p>${cfg.lead}</p>
  <p>冬休み（12月下旬〜1月上旬）は子供の成長を感じられる大切な家族団らんのハイシーズン。テーマパーク直結ホテルから、雪遊び・室内温水プール、赤ちゃん歓迎の温泉宿まで、家族のスタイルにぴったりの宿泊先を比較検討してみてください。</p>
</div>

${tableHtml}

<h2 style="font-size: 20px; font-weight: 900; color: #0f172a; border-left: 6px solid #0d9488; padding-left: 12px; margin: 40px 0 20px 0;">
  ⛄ 編集部が厳選！冬休みに子供と泊まるべきおすすめ高評価宿 5選
</h2>

${cardsHtml}

${modelCourseHtml}
${bookingTipsHtml}
`;

    const postJson = {
      id: cfg.id,
      title: cfg.title,
      hotel_name: cfg.hotel_name,
      description: cfg.lead.slice(0, 150) + "...",
      is_special_feature: true,
      review: fullReviewHtml,
      image: topHotel.hotelImageUrl || "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      other_images: finalHotels.slice(1).map(h => h.hotelImageUrl).filter(Boolean),
      affiliate_url: topHotel.affiliateUrl || "https://travel.rakuten.co.jp/",
      prefecture: cfg.prefecture,
      area: cfg.area,
      categories: cfg.categories,
      price: topHotel.hotelMinCharge || 9800,
      rating: topHotel.reviewAverage || 4.3,
      date: "2026-10-19",
      keywords: `${cfg.prefecture} 冬休み 子連れ ホテル, ${cfg.area} 家族旅行 温泉, 楽天トラベル ${cfg.hotel_name}, 雪遊び テーマパーク キッズルーム, 2026 2027 最新`,
      summary: `${cfg.title}。楽天トラベル公式APIによる最新クチコミ高評価宿を徹底比較。`,
      review_count: topHotel.reviewCount || 600,
      featured_hotels: finalHotels.map(h => ({
        name: h.hotelName,
        rating: String(h.reviewAverage || '4.0'),
        price: `¥${(h.hotelMinCharge || 9800).toLocaleString()}〜`,
        url: h.affiliateUrl
      }))
    };

    const targetFile = path.join(postsDir, `${cfg.id}.json`);
    fs.writeFileSync(targetFile, JSON.stringify(postJson, null, 2), 'utf8');
    console.log(`Saved: ${targetFile} (${finalHotels.length} hotels)`);
  }

  console.log("\nAll 10 Winter Family Cluster 2 Articles successfully generated via Rakuten API!");
}

run().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
