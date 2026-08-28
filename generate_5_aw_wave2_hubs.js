const fs = require('fs');
const path = require('path');

const awWave2Configs = [
  {
    slug: 'winter-hot-pot-gourmet',
    badge: 'WINTER HOT POT',
    title: '【冬のご馳走】あったかご当地鍋＆極上温泉旅館 完全ガイド',
    metaDesc: '冬の寒さを吹き飛ばす至福の鍋料理！秋田の比内地鶏きりたんぽ鍋、博多の濃厚水炊き＆もつ鍋、茨城大洗の濃厚あんこう鍋、山口下関のとらふぐちり鍋など、全国の絶品鍋と名湯宿を徹底解説。',
    heroDesc: '湯気が立ち上る土鍋を囲み、旬の地場食材と秘伝の出汁を味わう至福のひととき。熱々の鍋料理でお腹を満たし、体の芯から温まる温泉旅館で極上の冬籠りステイを。',
    categoryKey: 'winter-hot-pot-gourmet',
    areaGuides: [
      {
        key: 'akita_kiritanpo',
        title: '1. 秋田・大館＆乳頭温泉（本場比内地鶏の出汁香るきりたんぽ鍋）',
        timing: '旬の時期：10月下旬〜3月',
        desc: '新米のあきたこまちを香ばしく焼き上げた「きりたんぽ」と、日本三大美味鶏・比内地鶏の濃厚な鶏ガラスープ。舞茸やセリの根の香りが食欲をそそる秋田の冬の風物詩。乳頭温泉郷の雪見露天とともに味わえます。',
        spots: '乳頭温泉郷、角館武家屋敷（雪景色）、田沢湖、大館樹海ドーム',
        access: '秋田新幹線「田沢湖駅」より路線バスで約50分。大館能代空港よりリムジンバス約40分。',
        tip: '秋田の地酒（新政・高清水・雪の茅舎など）とのペアリングが最高。セリのシャキシャキ感と比内地鶏の弾力ある旨味を堪能してください。'
      },
      {
        key: 'fukuoka_mizutaki',
        title: '2. 福岡・博多＆中洲（コラーゲンたっぷり濃厚鶏水炊き＆極上牛もつ鍋）',
        timing: '通年（特に秋〜冬の夜が最高）',
        desc: '九州産銘柄鶏を骨ごとじっくり煮込んだ白濁スープの「博多水炊き」と、プリプリの国産牛小腸を使ったスタミナ抜群の「博多もつ鍋」。屋台めぐりや中洲の夜景を楽しんだ後は、天然温泉付きホテルで快適ステイ。',
        spots: '中洲屋台街、キャナルシティ博多、櫛田神社、太宰府天満宮（電車で約30分）',
        access: 'JR博多駅・福岡空港から地下鉄で天神・中洲川端まで直通5〜10分。',
        tip: '水炊きはまずスープを湯呑みで味わい、鶏肉、野菜の順にいただき、最後に旨味が凝縮したスープで作る雑炊が絶品です。'
      },
      {
        key: 'ibaraki_anko',
        title: '3. 茨城・大洗＆大津港（冬の日本海名物・濃厚あん肝どぶ汁あんこう鍋）',
        timing: '旬の時期：11月中旬〜翌年3月',
        desc: '「西のフグ、東のアンコウ」と称される冬の高級魚。大洗や北茨城の老舗旅館では、炒ったあん肝を味噌に溶かし込んだ濃厚な「どぶ汁仕立て」のあんこう鍋を提供。コラーゲンたっぷりの身と皮が美肌効果抜群です。',
        spots: '大洗磯前神社（神磯の鳥居ご来光）、アクアワールド大洗水族館、那珂湊おさかな市場',
        access: 'JR常磐線特急「ひたち」で上野・東京から水戸駅まで約70分、鹿島臨海鉄道で大洗駅へ約15分。',
        tip: '神磯の鳥居から昇る冬の朝日は絶景。那珂湊おさかな市場で海鮮土産を買って帰るドライブコースが人気です。'
      },
      {
        key: 'yamaguchi_fugu',
        title: '4. 山口・下関＆長門湯本温泉（本場下関のとらふぐフルコース＆名湯）',
        timing: '旬の時期：10月〜3月（秋の彼岸から春の彼岸まで）',
        desc: '全国のふぐが集まる本場・下関。職人の技が光る芸術的な「ふく刺し（てっさ）」、熱々の「ふくちり鍋」、香ばしい「ひれ酒」、〆の雑炊までふぐ尽くし。長門湯本温泉の星野リゾート界や老舗宿で優雅に過ごせます。',
        spots: '唐戸市場、角島大橋、元乃隅神社、長門湯本温泉街（音信川遊歩道）',
        access: '山陽新幹線「新下関駅」または「厚狭駅」より車・バスで各温泉街へ。山口宇部空港利用。',
        tip: '唐戸市場での週末「活きいき馬関街（寿司バトル）」を楽しんだ後、夜は温泉旅館で落ち着いてふぐ懐石を味わうのが王道です。'
      }
    ]
  },
  {
    slug: 'autumn-winter-sea-of-clouds',
    badge: 'SEA OF CLOUDS',
    title: '【天空の絶景】雲海テラス＆展望露天風呂の宿 完全ガイド',
    metaDesc: '足元に広がる雲の大海原！兵庫・竹田城跡、埼玉・秩父三峯、長野・竜王SORA terrace、熊本・阿蘇外輪山など、秋・冬の早朝に息をのむ雲海を望む絶景ホテル＆温泉旅館を徹底解説。',
    heroDesc: '冷え込んだ秋から初冬の早朝、限られた気象条件でのみ現れる幻想的な「雲海」。山頂テラスや客室のバルコニー、展望露天風呂から見下ろす白銀の雲海は、息をのむほどの感動をもたらします。',
    categoryKey: 'autumn-winter-sea-of-clouds',
    areaGuides: [
      {
        key: 'takeda_castle',
        title: '1. 兵庫・朝来＆竹田城跡（天空の城が雲海に浮かぶ奇跡の光景）',
        timing: '雲海シーズン：9月下旬〜12月上旬（特に早朝6時〜7時半）',
        desc: '雲海に浮かぶ石垣が「日本のマチュピチュ」と称される国史跡・竹田城跡。対岸の立雲峡から城跡全体を望む展望台や、城下町の古民家ホテル・温泉旅館に宿泊すれば、早朝の雲海アタックに最適です。',
        spots: '竹田城跡、立雲峡展望台、竹田城下町（寺町通り）、生野銀山',
        access: 'JR播但線「竹田駅」下車。北近畿豊岡自動車道和田山ICより車で約10分。',
        tip: '前日の昼と当日の早朝の寒暖差が大きく、風が穏やかな晴天の朝に発生確率が跳ね上がります。防寒具と懐中電灯を持参しましょう。'
      },
      {
        key: 'chichibu_clouds',
        title: '2. 埼玉・秩父＆三峯神社（都心から最短！秩父盆地を覆う大雲海）',
        timing: '雲海シーズン：10月〜11月、4月（年間発生率約100日）',
        desc: '秩父ミューズパーク展望台や美の山公園から見下ろす、秩父市街地をすっぽり包む雲海。パワースポット三峯神社への参拝や、秩父名物の豚みそ丼・名湯露天風呂と合わせて首都圏から気軽に絶景旅が楽しめます。',
        spots: '秩父ミューズパーク展望台、三峯神社、美の山公園、羊山公園、長瀞岩畳',
        access: '西武池袋線特急ラビューで池袋駅から西武秩父駅まで最速77分。関越道花園ICより車約40分。',
        tip: '早朝の雲海鑑賞後は、長瀞の紅葉ライン下りや秩父神社周辺のレトロカフェ巡りがおすすめです。'
      },
      {
        key: 'shigakogen_clouds',
        title: '3. 長野・竜王SORA terrace＆渋温泉（標高1,770mの雲海テラスカフェ）',
        timing: '雲海シーズン：6月〜11月上旬（雲海発生率60%以上）',
        desc: '世界最大級166人乗りロープウェイで一気に雲の上へ。SORA terraceのソファ席から夕日と雲海が赤く染まるマジックアワーを鑑賞し、夜は石畳が美しい湯田中渋温泉郷で九湯めぐりを満喫できます。',
        spots: '竜王マウンテンリゾートSORA terrace、渋温泉街（金具屋など）、地獄谷野猿公苑（スノーモンキー）',
        access: '北陸新幹線「長野駅」より長野電鉄特急で湯田中駅まで約45分。湯田中駅から無料シャトルバスあり。',
        tip: '夕方のサンセット雲海が特にドラマチック。渋温泉の浴衣と下駄で温泉街の射的や地酒バーを楽しむのが最高です。'
      },
      {
        key: 'aso_clouds',
        title: '4. 熊本・阿蘇大観峰＆カルデラ（世界屈指の大カルデラに広がる大雲海）',
        timing: '雲海シーズン：9月〜12月（寒暖差の大きい早朝）',
        desc: '阿蘇外輪山の大観峰やラピュタの道周辺から見下ろす、阿蘇谷を真っ白に埋め尽くす大雲海。阿蘇五岳がお釈迦様の寝姿（涅槃像）のように雲海の上に浮かび上がる神秘的な絶景に包まれます。',
        spots: '大観峰展望所、草千里ヶ浜、阿蘇中岳火口、白川水源、黒川温泉',
        access: '熊本空港よりレンタカーで約50分。JR豊肥本線「阿蘇駅」より車・路線バス。',
        tip: '阿蘇内牧温泉の展望露天風呂付き宿に泊まると、早朝大観峰へのアクセスが車で約20分とスムーズです。'
      }
    ]
  },
  {
    slug: 'winter-onsen-town-yukata-walk',
    badge: 'ONSEN TOWN WALK',
    title: '【風情満点】冬の温泉街・浴衣で湯巡り＆街歩き宿 完全ガイド',
    metaDesc: '石畳に響く下駄の音と立ち上る湯けむり。長野・渋温泉、愛媛・道後温泉、群馬・伊香保温泉、熊本・黒川温泉など、浴衣と丹前を羽織って湯巡りや射的・スイーツ食べ歩きを楽しめる名湯街を徹底解説。',
    heroDesc: 'どこか懐かしい木造旅館、川沿いの柳並木、夜を照らすガス灯や行燈。冬の冷たい空気の中、温かい温泉に何度も浸かり、温泉街の酒蔵やレトロな甘味処を巡る情緒あふれる大人の温泉旅へ。',
    categoryKey: 'winter-onsen-town-yukata-walk',
    areaGuides: [
      {
        key: 'shibu_onsen',
        title: '1. 長野・信州渋温泉（石畳の小路と宿泊者限定「厄除九湯めぐり」）',
        timing: '通年（冬の雪景色と外湯めぐりが最高）',
        desc: '千と千尋の神隠しのモデルとも言われる木造多層建築「金具屋」が有名な渋温泉。宿泊者専用の鍵（マスターキー）を受け取り、一番湯「初湯」から九番湯「渋大湯」まで巡る「外湯めぐり」が名物です。',
        spots: '渋温泉外湯九湯、金具屋（国登録有形文化財）、地獄谷野猿公苑、渋高薬師',
        access: '長野駅から長野電鉄特急で湯田中駅まで約45分、バス・タクシーで約5分。',
        tip: '手ぬぐいにスタンプを押しながら巡る九湯めぐり。すべての湯を巡って渋高薬師に参拝すると「九（苦）労を流し、満願成就」のご利益があります。'
      },
      {
        key: 'dogo_walk',
        title: '2. 愛媛・松山道後温泉（日本最古の名湯・道後温泉本館とハイカラ通り）',
        timing: '通年（冬の足湯めぐりとみかんスイーツ）',
        desc: '約3000年の歴史を誇る道後温泉。2024年に全館営業再開した「道後温泉本館」や、飛鳥乃湯泉・椿の湯を湯巡りし、商店街「道後ハイカラ通り」で坊っちゃん団子やみかんジュースの蛇口を楽しめます。',
        spots: '道後温泉本館、道後温泉別館 飛鳥乃湯泉、道後ハイカラ通り、坊っちゃんカラクリ時計、松山城',
        access: '松山空港から空港リムジンバスで道後温泉まで直行約40分。JR松山駅から市内電車で約25分。',
        tip: '本館前の足湯や空の散歩道からの本館ライトアップ鑑賞がおすすめ。鯛めし（東予の炊き込み・南予の生鯛）の食べ比べも人気です。'
      },
      {
        key: 'ikaho_steps',
        title: '3. 群馬・伊香保温泉（365段の石段街と情緒あふれる黄金の湯・白銀の湯）',
        timing: '通年（秋の河鹿橋紅葉〜冬の石段イルミ）',
        desc: '温泉街の中心を貫く365段の石段街。石段の両脇に射的場やお土産屋、温泉まんじゅう発祥の店が並びます。茶褐色の名湯「黄金の湯（こがねのゆ）」と透明な「白銀の湯（しろがねのゆ）」を堪能。',
        spots: '伊香保石段街、河鹿橋、伊香保神社、水沢うどん街、竹久夢二伊香保記念館',
        access: 'JR高崎駅または渋川駅より関越交通バスで伊香保温泉へ約25〜40分。関越道渋川伊香保ICより車約20分。',
        tip: '日本三大うどんの一つ「水沢うどん」をランチに味わい、石段街の足湯「岸権 辰の湯」でひと休みするのが王道コースです。'
      },
      {
        key: 'kurokawa_walk',
        title: '4. 熊本・黒川温泉（入湯手形で巡る渓流沿いの露天風呂と冬の湯あかり）',
        timing: '通年（冬期は竹灯籠イベント「湯あかり」開催）',
        desc: '山あいの渓流沿いに落ち着いた木造旅館が立ち並ぶ黒川温泉。1枚の「入湯手形」で28箇所の露天風呂から好きな3箇所に入浴可能。冬の夜には川沿いに数千個の竹灯籠が灯る「湯あかり」が幻想的です。',
        spots: '黒川温泉川端通り、湯あかり（12月〜3月開催）、べっちん館（手形販売所）、夫婦滝',
        access: '熊本空港から車で約80分。博多駅・熊本駅から直行高速バスあり。',
        tip: '各旅館で泉質や浴槽の趣（洞窟風呂、立ち湯、滝見風呂など）が全く異なるため、手形を使ってじっくりお気に入りを探すのが醍醐味です。'
      }
    ]
  },
  {
    slug: 'autumn-winter-solo-travel-retreat',
    badge: 'SOLO RETREAT',
    title: '【おひとり様歓迎】秋・冬の気ままな一人旅温泉宿 完全ガイド',
    metaDesc: '誰にも気兼ねしない自由な時間。箱根、熱海、草津温泉、京都など、1名宿泊プランが充実し、露天風呂付き客室や部屋食、大浴場＆サウナで自分を癒やす秋・冬の一人旅宿を徹底解説。',
    heroDesc: '思い立った時にふらりと出かける一人旅。読書に没頭したり、気の向くままに名湯に浸かったり、美味しい地酒と料理を味わったり。ひとり旅に優しい安心の厳選宿をご紹介します。',
    categoryKey: 'autumn-winter-solo-travel-retreat',
    areaGuides: [
      {
        key: 'hakone_solo',
        title: '1. 神奈川・箱根温泉（新宿からロマンスカー直行＆静寂の隠れ宿）',
        timing: '通年（秋の美術館巡り・冬の雪見風呂）',
        desc: '都心から85分でアクセスできる箱根は一人旅のメッカ。ポーラ美術館や彫刻の森美術館でアートに浸り、客室露天風呂や静かなラウンジを備えた大人専用宿で気ままな時間を過ごせます。',
        spots: 'ポーラ美術館、箱根美術館、箱根湯本商店街、芦ノ湖スカイライン',
        access: '新宿駅から小田急ロマンスカーで箱根湯本駅まで直通約85分。',
        tip: 'チェックイン後は宿のライブラリーカフェで珈琲を片手に読書。夕食をお部屋食やハーフビュッフェで気兼ねなく楽しめるプランが人気です。'
      },
      {
        key: 'atami_solo',
        title: '2. 静岡・熱海温泉（新幹線45分！海を眺めてワーケーション＆温泉リトリート）',
        timing: '通年（秋〜冬の海鮮グルメと温泉街）',
        desc: '東京から新幹線でわずか45分。相模湾を見下ろすオーシャンビューのシングルルームや、Wi-Fi・コワーキングスペース完備のモダン温泉ホテルが多く、海辺の散策と温泉を両立できます。',
        spots: 'ACAO FOREST、来宮神社（大楠パワースポット）、熱海サンビーチ、起雲閣',
        access: '東海道新幹線で東京駅から熱海駅まで直通約45分。',
        tip: '熱海駅前平和通り商店街で温泉まんじゅうや磯揚げを食べ歩き、夜は地魚寿司を堪能するのが一人旅の楽しみ方です。'
      },
      {
        key: 'kusatsu_solo',
        title: '3. 群馬・草津温泉（日本一の名湯を心ゆくまで満喫する湯治ステイ）',
        timing: '通年（冬の白煙上がる湯畑散策）',
        desc: '圧倒的な湧出量を誇る草津温泉。湯畑周辺の宿では、一人旅向けのお得な素泊まりプランや1泊朝食付きプランが充実。共同浴場めぐりやご当地居酒屋での一杯など、自由気ままな滞在が叶います。',
        spots: '湯畑、西の河原公園、大滝乃湯（合わせ湯）、御座之湯、草津熱帯圏',
        access: '特急「草津・四万」で上野駅から長野原草津口駅まで約2時間20分、接続バス約25分。',
        tip: '「大滝乃湯」で温度の異なる浴槽を順に巡る「合わせ湯」を体験するのがおすすめ。湯上がりは湯畑前のカフェでクラフトビールを。'
      },
      {
        key: 'kyoto_solo',
        title: '4. 京都・烏丸四条＆東山（大浴場付きデザイナーズホテルで古都ひとり歩き）',
        timing: '通年（秋の紅葉ライトアップ・冬の特別寺院公開）',
        desc: '地下鉄四条駅・烏丸御池駅周辺には、大浴場やサウナを備えたスタイリッシュなホテルが多数。一人でも気兼ねなく入れるおばんざい割烹や町家カフェを巡り、夜は静かに旅の計画を立てられます。',
        spots: '錦市場、建仁寺（風神雷神図）、南禅寺水路閣、京都国立博物館、鴨川遊歩道',
        access: 'JR京都駅から地下鉄烏丸線で四条駅・烏丸御池駅まで約3〜5分。',
        tip: '朝7時前の人通りが少ない八坂神社や二年坂・三年坂を散歩できるのは、市内中心部に宿泊する一人旅ならではの贅沢です。'
      }
    ]
  },
  {
    slug: 'autumn-winter-sauna-retreat',
    badge: 'SAUNA & ONSON',
    title: '【ととのう極上旅】絶景サウナ＆天然水風呂の温泉宿 完全ガイド',
    metaDesc: '秋・冬の外気浴が最高に気持ちいい！長野・野尻湖The Sauna、山梨・富士山ビューサウナ、静岡・天然水風呂宿、北海道・十勝アヴァントサウナなど、本格フィンランド式サウナと温泉を兼ね備えた名宿を徹底解説。',
    heroDesc: '澄み渡る秋風やキリリと冷えた冬の空気の中で行う「外気浴」は、サウナ愛好家にとって至高の体験。薪ストーブの芳しい香り、天然地下水かけ流しの水風呂、富士山や湖を望む絶景サウナリゾートへ。',
    categoryKey: 'autumn-winter-sauna-retreat',
    areaGuides: [
      {
        key: 'lake_sauna',
        title: '1. 長野・野尻湖＆信濃町（日本サウナの聖地・ログハウス薪サウナ）',
        timing: '通年（特に秋の紅葉外気浴・冬の雪ダイブが至高）',
        desc: '大自然に囲まれたフィンランド式薪サウナの聖地「The Sauna」。手作りのログサウナ小屋でセルフロウリュを愉しみ、黒姫山の天然湧水水風呂や野尻湖へダイブ。秋は紅葉、冬はパウダースノーにダイブする極上体験を。',
        spots: '野尻湖、黒姫高原、戸隠神社（奥社杉並木）、斑尾高原',
        access: '北陸新幹線「長野駅」よりしなの鉄道で黒姫駅まで約35分。上信越道信濃町ICより車約10分。',
        tip: '完全予約制のサウナ付き宿泊プランを早めに確保。サウナ後の名物ラム肉ハンバーガーや薬膳カレー（サウナ飯）は絶品です。'
      },
      {
        key: 'fuji_sauna',
        title: '2. 山梨・富士吉田＆河口湖（雄大な富士山を真正面に望むパノラマサウナ）',
        timing: '通年（秋・冬は空気が澄んで富士山が最も綺麗）',
        desc: 'サウナ室の窓から雪化粧をまとった富士山をダイナミックに一望。富士山の伏流水（バナジウム天然水）を掛け流した極上の水風呂と、澄んだ秋空・星空の下でのインフィニティ外気浴で深く「ととのう」ことができます。',
        spots: '新倉山浅間公園、河口湖もみじ回廊、富士急ハイランド、山中湖パノラマ台',
        access: '新宿駅からJR特急「富士回遊」で直通約1時間55分。中央道河口湖ICより車約10分。',
        tip: '早朝サウナで朝焼けに赤く染まる「赤富士」を眺めながらの外気浴は感動的。サウナ後は山梨名物ほうとうで温まりましょう。'
      },
      {
        key: 'shizuoka_sauna',
        title: '3. 静岡・静岡市用宗＆大井川（富士山・南アルプスの伏流水が注ぐ奇跡の水風呂）',
        timing: '通年（冬のサウナ旅の定番）',
        desc: '「サウナしきじ」をはじめ全国のサウナーを魅了する静岡の水。駿河湾を望む用宗みなと温泉や大井川沿いのサウナリゾートでは、ミネラル豊富な天然水風呂と海風を感じる外気浴、駿河湾の新鮮生しらすを味わえます。',
        spots: '用宗海岸・みなと横丁、久能山東照宮、三保松原、寸又峡夢の吊橋',
        access: '東海道新幹線「静岡駅」よりJR東海道線で用宗駅まで約6分。東名静岡ICより車約15分。',
        tip: '用宗漁港で水揚げされたばかりの生しらす丼をサウナ飯（サ飯）としていただくのが地元通の楽しみ方です。'
      },
      {
        key: 'hokkaido_sauna',
        title: '4. 北海道・十勝＆洞爺湖（十勝アヴァント＆モール温泉セルフロウリュ）',
        timing: '通年（冬は凍結した川・湖に入るアヴァント体験）',
        desc: '植物性美肌成分を含む「モール温泉」でロウリュを行う十勝サウナ。冬には凍結した川の氷に穴を開けて水風呂にする本場北欧さながらの「アヴァント」や、白銀の白樺林に囲まれたテントサウナが人気を博しています。',
        spots: '十勝川温泉、白樺並木（十勝牧場）、真鍋庭園、洞爺湖温泉（冬の花火大会）',
        access: 'とかち帯広空港より車で約30分。JR特急おおぞら・とかちで札幌から帯広駅まで約2時間30分。',
        tip: '十勝名物の豚丼やラクレットチーズ、濃厚ソフトクリームなど北海道ならではの絶品サウナ飯を満喫できます。'
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

for (const cfg of awWave2Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated seasonal hub page: /${cfg.slug}`);
}
