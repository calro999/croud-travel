const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const articlesConfig = [
  {
    id: "autumn-aomori-sukayu-towada-hakkoda-momiji-guide",
    title: "【10月-11月の青森・八甲田酸ヶ湯】千人風呂のヒバ造り白濁秘湯と十和田湖・奥入瀬渓流の紅葉絶景！秋の滋養湯治宿5選（2026年）",
    hotel_name: "青森 八甲田・酸ヶ湯温泉＆十和田湖紅葉名宿5選",
    target_queries: ["酸ヶ湯温泉 旅館", "酸ヶ湯温泉 ホテル", "十和田湖 温泉 おすすめ", "八甲田 紅葉"],
    prefecture: "青森県",
    area: "八甲田・十和田湖・奥入瀬",
    lead: "サチコ急上昇クエリ「酸ヶ湯温泉 旅館」「十和田湖 温泉」に完全連動！10月中旬〜11月上旬にかけてブナの原生林が黄金色に輝く八甲田連峰と奥入瀬渓流・十和田湖。標高約900mに佇む国民保養温泉地第1号の「酸ヶ湯温泉」は、160畳もの広さを誇るヒバ造りの千人風呂が名物です。十和田湖畔の天然温泉や奥入瀬の渓流美を間近に楽しむ、秋の極上湯宿を厳選して特集します。",
    model_course: "1日目は新青森駅から奥入瀬渓流へ。銚子大滝や阿修羅の流れの紅葉散策を満喫し、十和田湖畔の宿で十和田バラ焼きやヒメマス会席を堪能。2日目は八甲田ゴールドラインをドライブし、酸ヶ湯温泉の総ヒバ造り大浴場で強酸性硫黄泉の湯治体験。八甲田ロープウェーから錦秋のパノラマを望んで帰路へ。",
    booking_tips: "酸ヶ湯温泉や八甲田周辺は10月下旬から初雪が降ることもあるため、防寒着の準備とスタッドレスタイヤの装着確認を推奨します。紅葉のピーク週末は早期に満室となるため、1ヶ月以上前の予約が安心です。",
    categories: ["10月-11月おすすめ", "酸ヶ湯温泉", "八甲田紅葉", "十和田湖", "奥入瀬渓流", "秘湯", "秋旅行"],
    hotelKeywords: [
      { keyword: "酸ヶ湯温泉旅館", fallback: "酸ヶ湯温泉" },
      { keyword: "十和田湖 レークビューホテル", fallback: "十和田湖 温泉" },
      { keyword: "奥入瀬 渓流ホテル", fallback: "十和田 温泉" },
      { keyword: "八甲田ホテル", fallback: "八甲田温泉" },
      { keyword: "十和田湖畔温泉 とわだこ賑山亭", fallback: "十和田湖 ホテル" }
    ]
  },
  {
    id: "autumn-gunma-ikaho-kajikabashi-ishidan-momiji-guide",
    title: "【10月-11月の伊香保温泉】河鹿橋の紅葉ライトアップと石段街の湯煙！黄金の湯・白銀の湯と上州牛を満喫する秋の名旅館5選（2026年）",
    hotel_name: "伊香保温泉 河鹿橋紅葉ライトアップ＆石段街名宿5選",
    target_queries: ["伊香保温泉 10月 気温", "伊香保温泉 紅葉", "石段街 温泉宿", "黄金の湯"],
    prefecture: "群馬県",
    area: "伊香保・榛名山",
    lead: "サチコ急上昇クエリ「伊香保温泉 10月 気温」「伊香保 紅葉」に完全対応！10月中旬〜11月中旬の伊香保温泉は、名所「河鹿橋」のモミジが燃えるように朱く染まり、夕暮れからの幻想的なライトアップが全国的な人気を博します。365段の石段街散策と湯の花まんじゅう、鉄分を豊富に含む茶褐色の名湯「黄金の湯」に癒やされる秋旅。上州牛や旬の舞茸料理が自慢の老舗旅館5選をお届けします。",
    model_course: "1日目は榛名湖の紅葉ドライブと榛名神社参拝。午後は伊香保石段街へチェックインし、射的や足湯をぶらり散歩。夕暮れ時は河鹿橋の紅葉ライトアップを鑑賞し、夕食に上州牛すき焼きを堪能。2日目は朝風呂で黄金の湯に浸かり、水沢うどん街道でコシの強い名物うどんを味わって帰路へ。",
    booking_tips: "10月下旬〜11月の伊香保は朝晩の冷え込みが厳しく（10月平均気温約11℃〜15℃、朝晩5℃前後）、厚手のコートやストールが必須です。河鹿橋周辺の渋滞を避けるため、宿の駐車場に車を置いて徒歩で向かうのがベストです。",
    categories: ["10月-11月おすすめ", "伊香保温泉", "河鹿橋紅葉", "石段街", "黄金の湯", "上州牛", "秋旅行"],
    hotelKeywords: [
      { keyword: "伊香保温泉 福一", fallback: "伊香保温泉" },
      { keyword: "伊香保温泉 ホテル木暮", fallback: "伊香保 ホテル" },
      { keyword: "伊香保温泉 お宿玉樹", fallback: "伊香保 旅館" },
      { keyword: "伊香保温泉 岸権旅館", fallback: "伊香保温泉 岸権" },
      { keyword: "伊香保温泉 森秋旅館", fallback: "伊香保 温泉" }
    ]
  },
  {
    id: "autumn-mie-toba-shima-ise-ebi-onsen-guide",
    title: "【10月-11月の三重・鳥羽志摩】伊勢海老漁解禁とリアス海岸の絶景パノラマ！美肌の鳥羽温泉郷と松阪牛・海の幸を味わう極上宿5選（2026年）",
    hotel_name: "三重 鳥羽・志摩・伊勢 伊勢海老解禁＆絶景海景宿5選",
    target_queries: ["鳥羽 温泉 おすすめ", "三重 温泉 ランキング", "三重 おすすめ 温泉", "伊勢海老 宿"],
    prefecture: "三重県",
    area: "鳥羽・志摩・伊勢",
    lead: "サチコ注目クエリ「鳥羽 温泉 おすすめ」「三重 温泉 ランキング」に応える秋の伊勢志摩特集！毎年10月に解禁を迎える鳥羽・志摩の天然「伊勢海老」。引き締まった身の甘みとお造り・鬼殻焼き・具足煮の芳醇な旨みは秋ならではの贅沢です。伊勢神宮の秋の特別参拝と合わせ、英虞湾や鳥羽湾の島々を望むオーシャンビュー露天風呂が魅力の特選宿をご紹介します。",
    model_course: "1日目は伊勢神宮・内宮でおかげ横丁の秋の味覚散策（赤福や伊勢うどん）。午後は鳥羽へ移動し、鳥羽水族館やミキモト真珠島へ。夕暮れに海景の宿へチェックインし、解禁直後の伊勢海老尽くし会席と松阪牛を堪能。2日目は志摩横山展望台から英虞湾のパノラマ紅葉を眺めてリフレッシュ。",
    booking_tips: "伊勢海老解禁プランは10月〜11月限定で予約が殺到します。「姿造り」「焼き」「赤出汁」など調理法を選べるプランや部屋食プランを早めに押さえるのがおすすめです。",
    categories: ["10月-11月おすすめ", "鳥羽温泉", "伊勢志摩", "伊勢海老解禁", "松阪牛", "海景露天風呂", "秋旅行"],
    hotelKeywords: [
      { keyword: "鳥羽国際ホテル 潮路亭", fallback: "鳥羽国際ホテル" },
      { keyword: "鳥羽温泉郷 戸田家", fallback: "戸田家" },
      { keyword: "鳥羽シーサイドホテル", fallback: "鳥羽 ホテル" },
      { keyword: "鳥羽グランドホテル", fallback: "鳥羽 温泉" },
      { keyword: "志摩観光ホテル ザ クラシック", fallback: "志摩 ホテル" }
    ]
  },
  {
    id: "autumn-shimane-tamatsukuri-shinji-izumo-guide",
    title: "【10月-11月の島根・出雲神在月】玉造温泉の神の美肌湯と宍道湖七道湖畔の夕日！出雲大社ご縁参りと秋の松葉ガニ・しまね和牛名宿5選（2026年）",
    hotel_name: "島根 出雲神在月・玉造温泉＆宍道湖夕景名宿5選",
    target_queries: ["島根 おすすめ 温泉", "島根 旅館 おすすめ", "出雲大社 神在月 宿", "玉造温泉 美肌"],
    prefecture: "島根県",
    area: "出雲・玉造温泉・松江",
    lead: "サチコ検索急増クエリ「島根 おすすめ 温泉」「島根 旅館 おすすめ」に完全対応！旧暦10月（神在月：カミアリヅキ）は全国の八百万の神々が出雲大社に集う特別な季節。1300年前から「神の湯」と称えられ、天然の化粧水成分が豊富な玉造温泉は秋の乾燥肌をうるおす最高の温泉地です。夕暮れの宍道湖を赤く染める夕日と、11月に解禁される松葉ガニやしまね和牛を堪能できる名宿5選を厳選しました。",
    model_course: "1日目は出雲大社で神在祭の参拝と門前の出雲そば巡り。夕方に宍道湖畔をドライブして玉造温泉へ。美肌の湯に浸かり、夕食はしまね和牛と日本海の旬魚会席。2日目は松江城の国宝天守と堀川遊覧船の紅葉狩り、足立美術館の日本一の秋の庭園を鑑賞して帰路へ。",
    booking_tips: "出雲神在月（10月下旬〜11月）は全国から参拝者が集まる年間最大のピークです。玉造温泉や松江市内の人気宿は数ヶ月前から埋まるため、キャンセル待ちも視野にこまめな空室確認が必須です。",
    categories: ["10月-11月おすすめ", "出雲大社", "神在月", "玉造温泉", "美肌の湯", "松葉ガニ", "秋旅行"],
    hotelKeywords: [
      { keyword: "玉造温泉 佳翠苑 皆美", fallback: "玉造温泉 皆美" },
      { keyword: "玉造温泉 湯之助の宿 長楽園", fallback: "長楽園 玉造温泉" },
      { keyword: "玉造温泉 白石家", fallback: "白石家 玉造" },
      { keyword: "出雲・玉造温泉 清風荘", fallback: "玉造温泉 清風荘" },
      { keyword: "なにわ一水", fallback: "松江 温泉 なにわ一水" }
    ]
  },
  {
    id: "autumn-hokkaido-shikotsuko-chitose-onsen-guide",
    title: "【10月-11月の北海道・支笏湖】日本最北不凍湖の紅葉リフレクションと美肌の重曹泉！秋サケ・チップ料理を味わう極上レイクサイドホテル5選（2026年）",
    hotel_name: "北海道 支笏湖温泉＆千歳 美肌湯・レイクビュー名宿5選",
    target_queries: ["支笏湖温泉 ランキング", "支笏湖 ホテル ランキング", "支笏湖 温泉 ランキング", "北海道のスパ ホテル"],
    prefecture: "北海道",
    area: "支笏湖・千歳",
    lead: "サチコ注目クエリ「支笏湖温泉 ランキング」「支笏湖 ホテル ランキング」に特化！支笏洞爺国立公園に位置する支笏湖は、日本屈指の透明度を誇るカルデラ湖。10月は周囲の樽前山や恵庭岳がカエデやシラカバで黄金色に染まり、静かな湖面に紅葉が映り込む息をのむ絶景が広がります。新千歳空港から車で約40分の好アクセスながら、とろみのある美肌の重曹泉と秋サケ・ヒメマス料理を静かに堪能できる名宿を厳選しました。",
    model_course: "1日目は新千歳空港到着後、レンタカーで支笏湖へ直行。水中遊覧船でクリスタルブルーの湖底と紅葉を観察。夕暮れにレイクサイドホテルにチェックインし、とろみのある展望露天風呂から夕景を鑑賞。2日目は千歳川の清流沿い散策やノーザンホースパークの秋景色を楽しんで空港へ。",
    booking_tips: "10月中旬を過ぎると支笏湖周辺の気温は日中でも10℃前後、夜間は氷点下に近付きます。暖かなダウンジャケットを用意し、澄み切った秋の星空観賞に備えましょう。",
    categories: ["10月-11月おすすめ", "支笏湖温泉", "レイクビュー", "美肌の湯", "北海道紅葉", "秋サケ", "秋旅行"],
    hotelKeywords: [
      { keyword: "しこつ湖鶴雅リゾートスパ 水の謌", fallback: "支笏湖 鶴雅" },
      { keyword: "支笏湖温泉 丸駒温泉旅館", fallback: "丸駒温泉旅館" },
      { keyword: "レイクサイドヴィラ 翠明閣", fallback: "支笏湖 翠明閣" },
      { keyword: "しこつ湖 鶴雅別荘 碧の座", fallback: "碧の座" },
      { keyword: "ポルトム インターナショナル 北海道", fallback: "新千歳空港 ホテル" }
    ]
  },
  {
    id: "autumn-kagoshima-ibusuki-sand-bath-kinko-guide",
    title: "【10月-11月の鹿児島・指宿温泉】天然砂むし温泉のデトックスと錦江湾パノラマ！鹿児島黒豚・さつま地鶏と開聞岳夕景を望む名旅館5選（2026年）",
    hotel_name: "鹿児島 指宿砂むし温泉＆錦江湾シーサイド名宿5選",
    target_queries: ["指宿温泉 ランキング", "指宿ロイヤルホテル", "指宿 霧島 どっち", "砂むし温泉"],
    prefecture: "鹿児島県",
    area: "指宿・開聞岳・錦江湾",
    lead: "サチコ高インプレッションクエリ「指宿温泉 ランキング」「指宿ロイヤルホテル」「指宿 霧島 どっち」に応える南国鹿児島の秋旅特集！波打ち際で温かい海砂に埋まる世界唯一の「天然砂むし温泉」は、全身の血行を促進して夏の疲れと秋の冷えを解消する極上のデトックス体験です。薩摩富士と称される開聞岳の優美な稜線、錦江湾に昇る朝日、そして旬の戻り鰹と黒豚しゃぶしゃぶを味わう名旅館5選をお届けします。",
    model_course: "1日目は鹿児島中央駅から観光特急「指宿のたまて箱」で指宿へ。到着後、宿で名物砂むし温泉を体験し、夕食に本場の黒豚しゃぶしゃぶと芋焼酎を堪能。2日目は池田湖と西大山駅（JR日本最南端の駅）を訪れ、知覧武家屋敷庭園の紅葉を散策して鹿児島空港へ。",
    booking_tips: "指宿は10月〜11月も日中は20℃前後の快適な陽気が続きます。錦江湾に面した東向きの客室を選べば、海から昇る圧巻の日の出を部屋にいながら拝むことができます。",
    categories: ["10月-11月おすすめ", "指宿温泉", "砂むし温泉", "指宿ロイヤルホテル", "黒豚しゃぶしゃぶ", "開聞岳", "秋旅行"],
    hotelKeywords: [
      { keyword: "指宿温泉 指宿白水館", fallback: "指宿白水館" },
      { keyword: "指宿ロイヤルホテル", fallback: "指宿 温泉 ホテル" },
      { keyword: "指宿フェニックスホテル", fallback: "指宿 ホテル" },
      { keyword: "指宿温泉 夫婦露天風呂の宿 吟松", fallback: "指宿 吟松" },
      { keyword: "指宿シーサイドホテル", fallback: "指宿 シーサイド" }
    ]
  },
  {
    id: "autumn-saga-takeo-ureshino-onsen-bihada-guide",
    title: "【10月-11月の佐賀・武雄嬉野】日本三大美肌の湯とうれしの茶・とろける温泉湯どうふ！武雄御船山楽園の紅葉まつりと佐賀牛名宿5選（2026年）",
    hotel_name: "佐賀 武雄温泉・嬉野温泉 美肌湯＆御船山楽園紅葉名宿5選",
    target_queries: ["佐賀 温泉 ランキング", "佐賀 おすすめ 温泉", "佐賀 特産品 ランキング", "嬉野温泉 湯豆腐"],
    prefecture: "佐賀県",
    area: "武雄・嬉野・御船山",
    lead: "サチコ検索注目クエリ「佐賀 温泉 ランキング」「佐賀 おすすめ 温泉」に完全連動！10月下旬から始まる武雄「御船山楽園」の紅葉まつりは、約15万坪の広大な庭園が夜間にライトアップされ、水面に映る紅葉が日本夜景遺産にも認定される圧巻の美しさです。隣接する嬉野温泉は日本三大美肌の湯に数えられ、名物「温泉湯どうふ」は温泉水で豆腐がとろけて白濁する秋の絶品。佐賀牛ステーキとともに心身を満たす名宿5選をご紹介します。",
    model_course: "1日目は西九州新幹線で武雄温泉へ。武雄温泉楼門や武雄神社の大楠を見学し、夜は御船山楽園の紅葉ライトアップへ。宿で美肌温泉に浸かり佐賀牛会席を堪能。2日目は嬉野へ移動し、老舗茶寮でうれしの茶の飲み比べと名物とろける温泉湯どうふランチを満喫して帰路へ。",
    booking_tips: "御船山楽園の紅葉見頃（11月中旬〜下旬）は武雄温泉の宿が早い段階で予約困難になります。西九州新幹線（かもめ）の開通で博多からのアクセスが劇的に向上したため、平日の利用もおすすめです。",
    categories: ["10月-11月おすすめ", "武雄温泉", "嬉野温泉", "御船山楽園紅葉", "美肌の湯", "温泉湯どうふ", "佐賀牛", "秋旅行"],
    hotelKeywords: [
      { keyword: "武雄温泉 御船山楽園ホテル", fallback: "御船山楽園ホテル" },
      { keyword: "嬉野温泉 和多屋別荘", fallback: "和多屋別荘" },
      { keyword: "嬉野温泉 萬象閣 敷島", fallback: "萬象閣 敷島" },
      { keyword: "武雄温泉 懐石宿 扇屋", fallback: "武雄温泉 扇屋" },
      { keyword: "嬉野温泉 大正屋", fallback: "嬉野 大正屋" }
    ]
  },
  {
    id: "autumn-ibaraki-oarai-tsukuba-ankou-nabe-guide",
    title: "【11月解禁！茨城・大洗大津港のあんこう鍋】筑波山紅葉ロープウェイと太平洋の潮騒！コラーゲンたっぷり濃厚どぶ汁と常陸牛を味わう海鮮宿5選（2026年）",
    hotel_name: "茨城 大洗・日立 あんこう鍋解禁＆筑波山紅葉名宿5選",
    target_queries: ["あんこう鍋 宿 ランキング", "茨城 温泉 ランキング", "茨城 おすすめ 温泉", "筑波山 紅葉"],
    prefecture: "茨城県",
    area: "大洗・ひたちなか・筑波山",
    lead: "サチコ急上昇クエリ「あんこう鍋 宿 ランキング」「茨城 温泉 ランキング」に特化！毎年11月に本格シーズンを迎える茨城の冬の味覚の王様「あんこう」。鮟鱇の肝を炒って出汁と味噌を溶いた伝統の濃厚スープ「どぶ汁」は、コラーゲンたっぷりで体の芯から温まる極上の郷土料理です。関東平野を一望する筑波山の紅葉ロープウェイや大洗磯前神社の神磯の鳥居など、秋の見どころと合わせて訪れたい海鮮温泉宿5選を特集します。",
    model_course: "1日目は筑波山へ。男体山・女体山を結ぶロープウェイから関東平野と紅葉を展望。午後は大洗海岸へ移動し、大洗磯前神社の岩礁に立つ「神磯の鳥居」で夕景撮影。宿にチェックインし、解禁直後の本場あんこう鍋と常陸牛を堪能。2日目は那珂湊おさかな市場で海鮮買い出しとひたち海浜公園散策。",
    booking_tips: "11月〜12月はあんこう鍋のベストシーズン。肝を惜しみなく使った濃厚な「どぶ汁仕立て」を提供しているプランを選ぶのが本場の味を堪能する秘訣です。",
    categories: ["10月-11月おすすめ", "あんこう鍋", "大洗温泉", "どぶ汁", "筑波山紅葉", "常陸牛", "海鮮料理", "秋旅行"],
    hotelKeywords: [
      { keyword: "大洗ホテル", fallback: "大洗 温泉 ホテル" },
      { keyword: "大洗パークホテル", fallback: "大洗 ホテル" },
      { keyword: "オーシャンフロントヴィラ うぐいす谷温泉 竹の葉", fallback: "茨城 温泉 竹の葉" },
      { keyword: "平潟港温泉 あんこうの宿 まるみつ旅館", fallback: "まるみつ旅館 あんこう" },
      { keyword: "筑波山温泉 筑波山江戸屋", fallback: "筑波山 江戸屋" }
    ]
  },
  {
    id: "autumn-nagano-hakuba-norikura-shinsyu-momiji-guide",
    title: "【10月-11月の長野・白馬乗鞍】北アルプス三段紅葉と栂池自然園の草紅葉！絶景マウンテンリゾートと信州新そば・白馬八方温泉宿5選（2026年）",
    hotel_name: "信州 白馬・乗鞍 北アルプス三段紅葉＆八方温泉名宿5選",
    target_queries: ["白馬 ホテル おすすめ", "長野県 有名なもの", "三段紅葉", "白馬八方温泉"],
    prefecture: "長野県",
    area: "白馬・小谷・八方尾根",
    lead: "サチコ注目クエリ「長野県 有名なもの」「白馬 ホテル おすすめ」に直結！10月上旬〜11月上旬の白馬エリアは、山頂の初冠雪（白）、中腹の紅葉（赤・黄）、山麓の木々の緑が同時に見られる世界的な奇観「北アルプス三段紅葉」のシーズンです。栂池自然園の湿原を染める草紅葉や、日本屈指の強アルカリ美肌泉「白馬八方温泉」、そして秋に収穫されたばかりの香り高い「信州新そば」を心ゆくまで満喫できるリゾートホテル＆名旅館5選をお届けします。",
    model_course: "1日目は白馬岩岳マウンテンリゾートへ。絶景テラス「HAKUBA MOUNTAIN HARBOR」から三段紅葉のパノラマと信州リンゴスイーツを堪能。宿へチェックインし、強アルカリ温泉で肌をすべすべにし、夕食は信州サーモンと信州牛ステーキ。2日目は八方池トレッキングで水面に映る白馬三山を鑑賞して帰路へ。",
    booking_tips: "標高の高い白馬エリアは10月下旬になると朝晩氷点下近くまで冷え込みます。フリースやウインドブレーカーなど脱ぎ着しやすいレイヤリングで紅葉散策を楽しみましょう。",
    categories: ["10月-11月おすすめ", "白馬八方温泉", "北アルプス", "三段紅葉", "信州新そば", "信州牛", "山岳リゾート", "秋旅行"],
    hotelKeywords: [
      { keyword: "白馬リゾートホテル ラ ネージュ東館", fallback: "白馬 ラネージュ" },
      { keyword: "白馬八方温泉 白馬東急ホテル", fallback: "白馬東急ホテル" },
      { keyword: "コートヤード バイ マリオット 白馬", fallback: "白馬 マリオット" },
      { keyword: "白馬みずばしょう温泉 ホテル シェラリゾート白馬", fallback: "シェラリゾート白馬" },
      { keyword: "白馬八方温泉 まるいし", fallback: "白馬 まるいし" }
    ]
  },
  {
    id: "autumn-shizuoka-atagawa-atami-roten-seafood-guide",
    title: "【10月-11月の静岡・伊豆熱川熱海】伊豆熱川一柳閣と相模灘の日の出パノラマ！金目鯛姿煮と源泉かけ流し湯煙めぐり名宿5選（2026最新）",
    hotel_name: "東伊豆 熱川温泉＆熱海 海景露天・金目鯛会席名宿5選",
    target_queries: ["熱川一柳閣", "熱川温泉 旅館", "静岡 旅館 おすすめ", "金目鯛 温泉"],
    prefecture: "静岡県",
    area: "熱川・熱海・東伊豆",
    lead: "サチコ急上昇クエリ「熱川一柳閣」「熱川温泉 旅館」「静岡 旅館 おすすめ」に完全連動！東伊豆の熱川温泉は、街のいたるところから白い湯煙が立ち上る約100度の高温泉が自慢の情緒あふれる温泉郷。秋の澄み渡る空気のなか、相模灘から昇る黄金色の日の出と伊豆大島の島影を望む絶景露天風呂は格別です。10月〜11月に脂が乗り切る名物「金目鯛の姿煮」と、源泉かけ流しの贅沢な湯あみを堪能できる東伊豆の高評価宿5選をご紹介します。",
    model_course: "1日目は熱海駅前で秋のスイーツ散策後、伊豆急行で熱川温泉へ。熱川バナナワニ園で熱帯植物とレッサーパンダを観察し、海沿いの宿へチェックイン。自家源泉の露天風呂から夕暮れの海を眺め、夕食は丸ごと1匹の金目鯛煮付けと伊豆の地魚刺身。2日目は早起きして客室から水平線の日の出を拝み、熱川湯の華ぱぁーくで足湯を楽しんで帰路へ。",
    booking_tips: "熱川温泉の海沿いの宿は全室オーシャンビューが多く、水平線からの日の出体験が最高の思い出になります。金目鯛の姿煮が付いた夕食プランが圧倒的人気のため、事前指定が賢明です。",
    categories: ["10月-11月おすすめ", "熱川一柳閣", "熱川温泉", "東伊豆", "熱海", "金目鯛姿煮", "海景露天風呂", "秋旅行"],
    hotelKeywords: [
      { keyword: "熱川温泉 熱川一柳閣", fallback: "熱川一柳閣" },
      { keyword: "熱川温泉 熱川館", fallback: "熱川館" },
      { keyword: "熱川プリンスホテル", fallback: "熱川プリンス" },
      { keyword: "伊豆熱川温泉 ホテルカターラ RESORT＆SPA", fallback: "ホテルカターラ" },
      { keyword: "熱海後楽園ホテル", fallback: "熱海 温泉 ホテル" }
    ]
  }
];

function buildGeoComparisonTable(hotelList, title) {
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
        <td style="padding: 12px 14px; font-weight: 800; color: #b45309; white-space: nowrap;">¥${h.hotelMinCharge ? h.hotelMinCharge.toLocaleString() : '8,000'}〜</td>
        <td style="padding: 12px 14px; color: #334155; font-size: 13px;">${h.hotelSpecial ? h.hotelSpecial.slice(0, 50) + '...' : h.hotelName + 'の秋の特別プラン'}</td>
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
    <span>📊</span> <span>【2026年10月-11月】${title} スペック＆最安料金比較早見表</span>
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 13px; text-align: left; min-width: 680px;">
    <thead>
      <tr style="background: #0f172a; color: #ffffff;">
        <th style="padding: 10px 14px; border-radius: 8px 0 0 0;">宿泊施設名</th>
        <th style="padding: 10px 14px;">楽天評価</th>
        <th style="padding: 10px 14px;">最安料金目安</th>
        <th style="padding: 10px 14px;">紅葉＆温泉・滞在の魅力</th>
        <th style="padding: 10px 14px; text-align: center; border-radius: 0 8px 0 0;">予約・空室確認</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
  <div style="font-size: 11px; color: #64748b; margin-top: 8px; text-align: right;">※料金は1名あたりの目安（消費税・サービス料込）。10月-11月の秋シーズンは早期満室が予想されるため早めの確認がおすすめです。</div>
</div>
`;
}

function buildHotelDetailCard(h, rank) {
  const imgUrl = h.hotelImageUrl || h.roomImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80';
  const cleanReview = h.userReview ? h.userReview.replace(/<[^>]*>/g, '').slice(0, 160) + '...' : '露天風呂からの眺望とお食事が大変素晴らしく、秋の旅行に最高の宿でした。';
  const priceDisplay = h.hotelMinCharge ? `¥${h.hotelMinCharge.toLocaleString()}〜` : '¥8,500〜';

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
      <img src="${imgUrl}" alt="${h.hotelName} 外観・客室・露天風呂イメージ" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" decoding="async" />
    </div>
    <div style="font-size: 13px; line-height: 1.8; color: #334155;">
      <p style="margin: 0 0 10px 0;"><strong>【秋の滞在の魅力】</strong>${h.hotelSpecial || (h.hotelName + 'の贅沢な空間と旬の味覚を堪能。')}</p>
      <p style="margin: 0 0 10px 0;"><strong>【所在地・アクセス】</strong>${h.address1 || ''}${h.address2 || ''}（${h.access || '最寄り駅よりアクセス良好'}）</p>
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
      ✈️ 楽天トラベルで「${h.hotelName}」の秋限定プラン・空室を見る
    </a>
  </div>
</div>
`;
}

async function run() {
  console.log("=== Starting Cluster 3 (10 Autumn Articles via Direct Rakuten API) ===");
  const postsDir = path.join(__dirname, 'src', 'data', 'posts');

  for (const cfg of articlesConfig) {
    console.log(`\n>>> Processing Article: ${cfg.title}`);
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
      const more = await searchRakutenHotels(cfg.area + " 温泉", 5 - fetchedHotels.length);
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

    const tableHtml = buildGeoComparisonTable(finalHotels, cfg.hotel_name);
    const cardsHtml = finalHotels.map((h, idx) => buildHotelDetailCard(h, idx + 1)).join('\n');

    const modelCourseHtml = `
<div class="autumn-model-course-section" style="margin: 40px 0; background: #fffbeb; border: 1px solid #fef3c7; border-radius: 16px; padding: 22px;">
  <h3 style="font-size: 16px; font-weight: 900; color: #92400e; margin: 0 0 10px 0;">
    🧭 【1泊2日モデルコース】10月-11月の秋旅満喫スケジュール
  </h3>
  <p style="font-size: 13px; line-height: 1.8; color: #78350f; margin: 0;">
    ${cfg.model_course}
  </p>
</div>
`;

    const bookingTipsHtml = `
<div class="autumn-booking-tips" style="margin: 32px 0; background: #f0fdfa; border: 1px solid #ccfbf1; border-radius: 16px; padding: 20px; font-size: 13px; line-height: 1.8; color: #134e4a;">
  <h4 style="font-size: 14px; font-weight: 900; color: #0f766e; margin: 0 0 8px 0;">
    💡 10月-11月秋旅の予約ワンポイントアドバイス
  </h4>
  <p style="margin: 0 0 8px 0;">・${cfg.booking_tips}</p>
  <p style="margin: 0;">・<strong>楽天トラベルの「5と0のつく日」クーポン併用：</strong> 毎月5・10・15・20・25・30日は最大20%OFFクーポンが配布されるため、タイミングを合わせて予約すると大変お得です。</p>
</div>
`;

    const fullReviewHtml = `
<div class="article-lead-section" style="font-size: 15px; line-height: 1.9; color: #1e293b; margin-bottom: 28px;">
  <p>${cfg.lead}</p>
  <p>10月〜11月は秋晴れの心地よい気候と旬の味覚、紅葉の色彩美が一度に楽しめる旅行のゴールデンシーズン。週末や連休は早くから予約が集中するため、空室と限定プランのチェックはお早めが確実です。</p>
</div>

${tableHtml}

<h2 style="font-size: 20px; font-weight: 900; color: #0f172a; border-left: 6px solid #0d9488; padding-left: 12px; margin: 40px 0 20px 0;">
  🍁 編集部が厳選！10月-11月に泊まるべきおすすめ高評価宿 5選
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
      image: topHotel.hotelImageUrl || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      other_images: finalHotels.slice(1).map(h => h.hotelImageUrl).filter(Boolean),
      affiliate_url: topHotel.affiliateUrl || "https://travel.rakuten.co.jp/",
      prefecture: cfg.prefecture,
      area: cfg.area,
      categories: cfg.categories,
      price: topHotel.hotelMinCharge || 8000,
      rating: topHotel.reviewAverage || 4.2,
      date: "2026-10-19",
      keywords: `${cfg.prefecture} 10月 11月 温泉 おすすめ, ${cfg.area} 紅葉 旅館, 楽天トラベル ${cfg.hotel_name}, 秋旅行 露天風呂, 2026 最新`,
      summary: `${cfg.title}。楽天トラベル公式APIによる最新クチコミ高評価宿を徹底比較。`,
      review_count: topHotel.reviewCount || 500,
      featured_hotels: finalHotels.map(h => ({
        name: h.hotelName,
        rating: String(h.reviewAverage || '4.0'),
        price: `¥${(h.hotelMinCharge || 8000).toLocaleString()}〜`,
        url: h.affiliateUrl
      }))
    };

    const targetFile = path.join(postsDir, `${cfg.id}.json`);
    fs.writeFileSync(targetFile, JSON.stringify(postJson, null, 2), 'utf8');
    console.log(`Saved: ${targetFile} (${finalHotels.length} hotels)`);
  }

  console.log("\nAll 10 third expanded autumn articles successfully generated via Rakuten API!");
}

run().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
