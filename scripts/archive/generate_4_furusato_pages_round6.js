const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
const allHotels = JSON.parse(fs.readFileSync(p, 'utf8'));

const pages = [
  {
    slug: 'furusato-tax-infinity-onsen-sky-ocean-view-stay',
    title: '【絶景インフィニティ温泉×ふるさと納税】水平線と空に溶け込む天空露天風呂＆インフィニティプール宿完全ガイド',
    description: '湯船と海・湖の境界線が消える奇跡の絶景。静岡・稲取、北海道・洞爺湖、沖縄・恩納村のインフィニティ温泉＆天空プールリゾートを厳選。SNSでも話題の圧倒的パノラマステイを楽天ふるさと納税で賢く予約。',
    heroTag: 'ふるさと納税×絶景インフィニティ温泉・天空露天',
    leadTitle: '青い海と湯面が一体化するインフィニティの絶景。地球の丸さを肌で感じる究極の解放感へ',
    leadText: '視界を遮るフェンスや手すりがなく、湯船の縁からあふれるお湯がそのまま海や湖へと繋がっているかのように錯覚する「インフィニティ露天風呂」。水平線から昇る神々しい朝日、茜色に染まる夕暮れのマジックアワー、そして夜には満天の星が水面に映り込む――その圧倒的なビジュアルと開放感は、現代のリゾートステイにおける最高峰の贅沢です。相模灘の青い海を眼下に望む伊豆・稲取、羊蹄山と穏やかなカルデラ湖に抱かれる北海道・洞爺湖、そして東シナ海を見下ろす沖縄・恩納村の天空インフィニティプールリゾート。こうした最新のラグジュアリー設備を持つ施設は宿泊単価が高めですが、楽天ふるさと納税のトラベルクーポン（30％割引）を使えば実質自己負担2,000円で驚くほどお得に滞在可能。息を呑む絶景と名湯に身を委ねる、至極のインフィニティステイへご案内します。',
    points: [
      {
        title: 'ポイント①：1泊5万〜10万円超の「絶景インフィニティ客室」をお得にリザーブ',
        desc: '海や湖を一望できる最前列のテラス付き客室や、専用インフィニティ温泉を備えたスイートルーム。高価格帯の客室こそ、寄付額に応じた30％割引クーポンの恩恵が最大化されます。'
      },
      {
        title: 'ポイント②：SNS映え・記念写真の美しさが圧倒的！忘れられない思い出に',
        desc: '海と空に溶け込むようなシルエット写真は、旅の最高の思い出の1枚に。カップルの記念日旅行や女子旅、自分へのご褒美ステイとして圧倒的な満足度を誇ります。'
      },
      {
        title: 'ポイント③：温泉とプールの両方を愉しめるオールシーズン対応リゾート',
        desc: '夏は開放的なインフィニティプール、冬は湯気立ち上るインフィニティ温泉露天風呂。季節を問わず大自然のパノラマを全身で浴びるラグジュアリーな休日が過ごせます。'
      }
    ],
    sections: [
      {
        key: 'inatori_infinity_onsen',
        badge: '静岡県東伊豆町・相模灘の水平線に浮かぶ天空の湯',
        title: '東伊豆町ふるさと納税で泊まる、稲取温泉の海と一体化するオーシャンインフィニティ露天風呂宿',
        intro: '伊豆半島東海岸から相模灘へ突き出た岬に位置する稲取温泉。海沿いに建つ宿の露天風呂に浸かると、目の前には視界270度の遮るもののない大パノラマが広がり、まるで海の上に浮かんでいるかのような錯覚に包まれます。東伊豆町のふるさと納税トラベルクーポンを使えば、伊豆大島を正面に望む展望インフィニティ温泉宿や、名物の「稲取金目鯛の姿煮」を部屋食で味わえる名旅館にお得にステイ。波の音をBGMに水平線から昇る朝日を全身に浴びる、至福の目覚めをご体験ください。'
      },
      {
        key: 'toya_infinity_onsen',
        badge: '北海道洞爺湖町・静穏なカルデラ湖と羊蹄山のパノラマ',
        title: '洞爺湖町ふるさと納税で泊まる、湖面に浮かぶような最上階インフィニティ天空露天風呂ホテル',
        intro: '支笏洞爺国立公園内に位置し、青く澄んだカルデラ湖と蝦夷富士・羊蹄山が織りなす北海道屈指の景勝地・洞爺湖。湖畔に佇むリゾートホテルの最上階に設けられたインフィニティ露天風呂では、浴槽の縁が湖面とシームレスに重なり合い、大自然の中に溶けていくような深いリラクゼーションが味わえます。洞爺湖町のふるさと納税クーポンを活用すれば、ロングラン花火大会を客室や露天風呂から独占できる特等席ホテルにお得に宿泊可能。北海道の旬食材バイキングとともに、北の大地の雄大さを心ゆくまで満喫できます。'
      },
      {
        key: 'onna_infinity_pool',
        badge: '沖縄県恩納村・東シナ海を見下ろす南国リゾート',
        title: '恩納村ふるさと納税で泊まる、エメラルドグリーンの海と空を独占する天空インフィニティプール',
        intro: '沖縄本島屈指の西海岸ビーチリゾート・恩納村。小高い丘の上や海岸線に佇むラグジュアリーホテルでは、プールサイドから東シナ海へと視線が抜ける天空インフィニティプールがリゾート気分を最高潮に高めてくれます。恩納村のふるさと納税クーポンを使えば、夕暮れ時にサンセットカクテルを片手にプールサイドで寛ぎ、夜は星空を仰ぐ極上のリゾートステイがお得に実現。沖縄県産和牛や近海魚のグリルディナーに舌鼓を打ち、日常を完全に忘れる南国ステイをご堪能ください。'
      }
    ],
    faq: [
      {
        q: 'インフィニティ露天風呂は天候が悪くても楽しめますか？',
        a: '晴れの日の水平線は格別ですが、曇りや雨の日でも霧が立ち込める幻想的な海・湖の風景が楽しめます。また、多くの施設ではガラス張りの展望内湯も併設されているため、風の強い日でも快適に入浴できます。'
      },
      {
        q: 'インフィニティプールは年中利用できますか？',
        a: '沖縄や本州のハイクラスリゾートの多くでは、春〜秋の通常営業に加え、冬期は温水プールとして通年営業を行っているところが増えています。予約時に各ホテルのプール温水対応状況を確認しておくと安心です。'
      },
      {
        q: '写真撮影は自由にできますか？',
        a: '客室専用のインフィニティ露天風呂やプールであれば24時間自由に撮影可能です。共用の大浴場露天風呂はプライバシー保護のため撮影禁止となっている施設が多いため、客室露天風呂付きプランの予約が最もおすすめです。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-anniversary-luxury-suite-villa-stay',
        title: '【憧れの最高峰宿】記念日・プロポーズの極上スイート＆ヴィラ',
        desc: 'インフィニティ風呂とともに楽しむ！箱根・京都・沖縄のプライベートプール付きスイート特集。'
      },
      {
        slug: 'furusato-tax-remote-island-luxury-resort-stay',
        title: '【大人の隠れ家・極上の離島リゾート】日常を完全遮断する南国ステイ',
        desc: '絶景オーシャンビューを離島で独占！屋久島・奄美・石垣島のラグジュアリーヴィラ特集。'
      },
      {
        slug: 'furusato-tax-luxury-hotspring-ryokan-stay',
        title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド',
        desc: '草津・有馬・伊豆の名湯宿。自己負担実質2,000円で泊まるふるさと納税の基礎知識と攻略法。'
      }
    ]
  },
  {
    slug: 'furusato-tax-private-villa-hanare-hideaway-stay',
    title: '【全室離れの隠れ家×ふるさと納税】誰にも会わずに過ごす極上のおこもり客室露天風呂宿完全ガイド',
    description: 'エグゼクティブやお忍び旅行に選ばれる「全室離れ」のおこもり宿。大分・由布院、静岡・修善寺、神奈川・湯河原の源泉かけ流し客室露天風呂付き宿を厳選。誰にも邪魔されない至高のプライベート時間をふるさと納税で。',
    heroTag: 'ふるさと納税×全室離れ・おこもり温泉宿',
    leadTitle: '宿の玄関から客室へ直行。他のお客と顔を合わせず、2人だけのプライベートな静寂に浸る',
    leadText: '誰にも邪魔されず、プライベートな時間を最優先したい大人の休日。ロビーでの混雑や大浴場での他人の視線から完全に解放され、専用の門をくぐった一戸建ての「離れ客室」でチェックインからチェックアウトまでを完結させる――そんな究極のプライベートステイが今、感度の高い旅行者から絶大な支持を集めています。由布岳の裾野に点在するプライベートガーデン付きヴィラ、伊豆修善寺の竹林に隠れる築100年の数寄屋離れ、そして万葉集にも詠まれた湯河原の渓流沿い料亭旅館。客室専用の源泉かけ流し露天風呂に好きな時に浸かり、夕食は専任仲居が運ぶ部屋食やお食事専用個室で一品出しの懐石をいただく贅沢。こうした全室離れの宿は1泊1人5万〜15万円クラスが中心ですが、楽天ふるさと納税のトラベルクーポン（30％補助）を使えば実質自己負担2,000円で無理なくアップグレード可能。大切な人とおこもりを満喫する最高峰のプライベート温泉旅へご案内します。',
    points: [
      {
        title: 'ポイント①：チェックインからチェックアウトまで「他のお客と一切会わない」安心感',
        desc: '客室専用の玄関やテラス、インルームチェックイン、完全個室またはお部屋食の徹底により、他人の気配を感じることなく二人だけの静寂を保てます。'
      },
      {
        title: 'ポイント②：24時間いつでも生まれたての源泉を独り占めできる客室専用風呂',
        desc: '部屋を出ることなく、数歩で客室露天風呂の湯船へ。早朝の朝霧、夕暮れの茜空、深夜の星空を眺めながら、何度でも好きなだけ名湯に浸かる至福が手に入ります。'
      },
      {
        title: 'ポイント③：高額な離れ客室の宿泊費用をふるさと納税で賢く大幅値引き',
        desc: '一般的な和室プランと比べて設備や専任スタッフのコストがかかる離れ客室。30％補助クーポンを適用することで、手出しの費用を大きく抑えて憧れの宿を実現できます。'
      }
    ],
    sections: [
      {
        key: 'yufuin_hanare_onsen',
        badge: '大分県由布市・由布岳の自然美に抱かれる名リゾート',
        title: '由布市ふるさと納税で泊まる、由布院温泉の雑木林に点在する戸建て離れ客室露天風呂宿',
        intro: '全国屈指の温泉湧出量を誇り、洗練された大人のリゾートとして愛される由布院温泉。金鱗湖周辺や鳥越地区の深い雑木林の中に佇む宿では、広大な敷地にわずか数棟から十数棟の「戸建て離れ」が贅沢に配置されています。由布市のふるさと納税トラベルクーポンを使えば、名峰・由布岳を望むテラス付き離れや、内湯と露天の両方に自家源泉を引く極上宿にお得にステイ。豊後牛のサーロインや地鶏炭火焼きを個室で味わい、鳥のさえずりを聞きながら湯浴みする大人の贅沢が叶います。'
      },
      {
        key: 'shuzenji_hanare_onsen',
        badge: '静岡県伊豆市・弘法大師ゆかりの小京都',
        title: '伊豆市ふるさと納税で泊まる、修善寺の竹林の小径近くに佇む数寄屋造り離れ旅館',
        intro: '桂川のせせらぎ沿いに竹林の小径が伸び、朱塗りの橋が風情を添える伊豆最古の温泉地・修善寺。文豪や名工たちが愛した歴史ある温泉街の奥に、全室離れ形式の隠れ家旅館がひっそりと佇んでいます。伊豆市のふるさと納税クーポンを活用すれば、宮大工の意匠が光る数寄屋建築の離れや、専用の日本庭園を持つ客室露天風呂宿にお得に宿泊可能。伊豆の天城軍鶏や生わさび、旬の地魚会席を静寂の部屋で味わう、時を忘れるおこもり時間をどうぞ。'
      },
      {
        key: 'yugawara_hanare_onsen',
        badge: '神奈川県湯河原町・都心から近い文豪の奥座敷',
        title: '湯河原町ふるさと納税で泊まる、千歳川の渓流沿いに隠れる料理自慢の料亭離れ宿',
        intro: '夏目漱石や芥川龍之介、谷崎潤一郎など日本を代表する文豪たちが原稿用紙片手に逗留した湯河原温泉。千歳川のせせらぎと緑深い山あいに佇む宿では、日常の喧騒から隔絶された静謐な空間が守られています。湯河原町のふるさと納税クーポンを使えば、清流を眼下に望む客室専用露天風呂付き離れや、ミシュラン星獲得料理長が腕を振るう料亭旅館にお得にリザーブ。相模湾の獲れたて鮮魚と季節の懐石料理を堪能する、都心からすぐの至高の隠れ家ステイが待っています。'
      }
    ],
    faq: [
      {
        q: '「離れ」と通常の客室では具体的に何が違いますか？',
        a: '離れは本館から渡り廊下や庭園の小径を通った別棟に位置しており、隣接する部屋の物音や廊下の足音が一切届かない完全な独立構造になっています。客室専用の露天風呂やテラス、庭園が備えられているのが一般的です。'
      },
      {
        q: 'お食事は完全にお部屋食になりますか？',
        a: '宿によって「客室内の座敷・ダイニングでの部屋食」または「宿泊者ごとに完全に仕切られた個室食事処」のいずれかになります。どちらの形式でも他のお客さんと相席になることはなく、プライベートな食事空間が確保されます。'
      },
      {
        q: '記念日のサプライズ対応やケーキの持ち込みは可能ですか？',
        a: '離れの宿は記念日利用のお客さんが非常に多いため、花束の手配やアニバーサリーケーキ、シャンパンの事前準備などを柔軟に相談できます。予約後に宿へ希望を伝えておくのがおすすめです。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-anniversary-luxury-suite-villa-stay',
        title: '【憧れの最高峰宿】記念日・プロポーズの極上スイート＆ヴィラ',
        desc: '一生の思い出を刻むハイクラスステイ。箱根・京都・沖縄のプライベートヴィラ特集。'
      },
      {
        slug: 'furusato-tax-solo-retreat-private-onsen-stay',
        title: '【おひとり様贅沢ステイ】客室露天風呂で心身をリセットするソロ温泉旅',
        desc: '離れの静寂を一人で独占！誰にも気兼ねせず心身を整える大人のソロリトリート。'
      },
      {
        slug: 'furusato-tax-luxury-hotspring-ryokan-stay',
        title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド',
        desc: '草津・有馬・伊豆の名湯宿。自己負担実質2,000円で泊まるふるさと納税の基礎知識と攻略法。'
      }
    ]
  },
  {
    slug: 'furusato-tax-cherry-blossom-spring-hanami-onsen-stay',
    title: '【全国の桜名所×ふるさと納税】客室から夜桜を愛でるお花見露天風呂＆桜の絶景宿完全ガイド',
    description: '春限定の絶景！静岡・河津桜、奈良・吉野山の一目千本桜、青森・弘前公園の桜の絨毯。春のお花見シーズンに客室や露天風呂から満開の桜を独占できる名宿を厳選。早期満室の桜宿をふるさと納税で賢く予約。',
    heroTag: 'ふるさと納税×桜名所・お花見温泉宿',
    leadTitle: '花びらが舞い散る露天風呂で盃を傾ける。年に一度、春だけに出会える日本最高の美しき休日へ',
    leadText: '日本人の心を揺さぶり続ける「春の桜」。2月から早咲きの濃いピンク色に染まる伊豆・河津桜並木、山全体が下千本から奥千本まで3万本の山桜で埋め尽くされる世界遺産・奈良吉野山、そしてお濠一面がピンクの花びらで埋まる花筏（はないかだ）で名高い青森・弘前公園。人混みの中で見上げるお花見も良いものですが、最も贅沢なのは「客室のテラスや露天風呂に浸かりながら、満開の桜を二人きりで愛でる」プライベートなお花見ステイです。しかし桜のトップシーズンは全国から予約が殺到し、半年以上前から満室になることも日常茶飯事。そこで絶対に知っておきたいのが、有効期間3年の楽天ふるさと納税トラベルクーポンです。年末の駆け込み期にクーポンを確保しておき、桜の開花情報に合わせて先行予約を入れることで、実質30％割引で特等席の桜宿をリザーブ可能。春の訪れを五感で祝う、極上のお花見温泉旅へ出かけましょう。',
    points: [
      {
        title: 'ポイント①：争奪戦の「お花見特等席客室」をふるさと納税クーポンでお得に確保',
        desc: '桜が見える客室露天風呂付きプランは春の最高価格帯になりがち。ふるさと納税クーポンを使えば、割高なハイシーズン料金でも宿泊費の30％が補助され、実質自己負担2,000円で泊まれます。'
      },
      {
        title: 'ポイント②：混雑知らず！ライトアップされた「夜桜」や「早朝の桜」を独占',
        desc: '名所の宿に泊まる最大のメリットは、日帰り観光客が帰った後の幻想的な夜桜ライトアップや、朝露に輝く静寂の桜並木をゆったりと散策できることです。'
      },
      {
        title: 'ポイント③：早咲き（2月）から遅咲き（5月）まで日本全国を縦断して楽しめる',
        desc: '2月の河津桜から、4月の吉野山、4月下旬〜5月上旬の弘前城まで、日本の桜前線は3ヶ月にわたって北上します。3年有効クーポンなら、行きたい名所の満開時期に合わせて自由に旅行計画を組めます。'
      }
    ],
    sections: [
      {
        key: 'kawazu_sakura_onsen',
        badge: '静岡県河津町・早春を告げる濃いピンクの桜並木',
        title: '河津町ふるさと納税で泊まる、河津川沿いの桜並木を望むお花見露天風呂の宿',
        intro: '例年2月上旬から開花し、約1ヶ月にわたって見頃が続く早咲きの「河津桜」。河津川沿い約4kmにわたって約850本もの桜並木が続き、足元に咲く黄色い菜の花との鮮やかなコントラストは春の訪れを告げる絶景です。河津町のふるさと納税トラベルクーポンを使えば、川沿いの桜並木へ徒歩すぐの温泉旅館や、客室露天風呂からライトアップされた夜桜を望む名宿をお得に予約可能。伊豆の新鮮な海の幸と金目鯛を味わいながら、一足早い春のぬくもりに包まれる旅が叶います。'
      },
      {
        key: 'yoshino_sakura_onsen',
        badge: '奈良県吉野町・山を染め上げる三万本の一目千本桜',
        title: '吉野町ふるさと納税で泊まる、世界遺産吉野山の桜絵巻をテラスから望む山岳旅館',
        intro: '神木として古くから大切に保護され、下千本・中千本・上千本・奥千本と山麓から山頂へと順に咲き上がっていく世界遺産・吉野山。視界いっぱいに広がる約3万本の白山桜のスケールは「一目に千本見える豪華さ」から一目千本と称えられます。吉野町のふるさと納税クーポンを活用すれば、吉野山の尾根沿いに建つ老舗旅館や絶景テラスを持つ山宿にお得にステイ。早朝の山霧に浮かぶ幻想的な桜の海を眺め、名物の吉野葛料理や柿の葉寿司を味わう、日本屈指の歴史あるお花見ステイをご体験ください。'
      },
      {
        key: 'hirosaki_sakura_onsen',
        badge: '青森県弘前市・お濠を埋め尽くす奇跡の花筏',
        title: '弘前市ふるさと納税で泊まる、弘前城の桜の絨毯と名湯津軽の春を満喫する名宿',
        intro: '日本三大桜名所のひとつとして知られる青森県・弘前公園。約2,600本もの桜が一斉に咲き誇り、散り始めるとお濠の水面がピンクの花びらで完全に覆われる「花筏（はないかだ）」は、一生に一度は見たい奇跡の春の絶景です。弘前市のふるさと納税クーポンを使えば、弘前城公園へ徒歩圏内のシティホテルや、近隣の津軽名湯温泉旅館をお得にリザーブ。津軽三味線の生演奏や地元の嶽きみ・津軽リンゴ料理を堪能しながら、みちのくの遅い春の感動に包まれる旅へ出かけましょう。'
      }
    ],
    faq: [
      {
        q: '桜の満開時期が年によってズレた場合、日程変更はできますか？',
        a: '宿泊施設が定めるキャンセル規定・日程変更期限内であれば、楽天トラベルの予約画面から日程の変更が可能です。また、万が一予約を取り直す場合でもクーポンはアカウントに戻るため、別の空室日へ再予約できます。'
      },
      {
        q: '桜が見える客室を確実に予約するにはどうすればいいですか？',
        a: '宿泊プラン名に「桜側客室確約」「お花見ビュールーム」「庭園桜ビュースイート」と明記されている専用プランを選ぶのが確実です。予約時に備考欄で希望を伝えておくのも有効です。'
      },
      {
        q: 'お花見期間中の混雑や交通規制を避けるコツはありますか？',
        a: '河津桜や吉野山、弘前公園周辺は日中大変混雑します。宿に前泊して「早朝6時〜8時台」に散策するか、宿の客室からライトアップを鑑賞するのが混雑を避ける最高の裏ワザです。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-luxury-hotspring-ryokan-stay',
        title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド',
        desc: '春の温泉旅行にも最適！草津・有馬・伊豆の老舗宿をふるさと納税で予約するテクニック。'
      },
      {
        slug: 'furusato-tax-travel-after-booking-discount-guide',
        title: '【予約済みでも間に合う】「あとから割引」完全攻略ガイド',
        desc: '人気の桜宿をすでに予約していても大丈夫！チェックイン前日までにクーポンをあとから適用する方法。'
      },
      {
        slug: 'furusato-tax-scenic-train-trolley-onsen-stay',
        title: '【絶景観光列車×ふるさと納税】トロッコ列車＆ローカル線途中下車の旅',
        desc: '桜並木を走り抜けるローカル列車の旅！車窓のお花見と温泉を楽しむ絶景鉄道紀行。'
      }
    ]
  },
  {
    slug: 'furusato-tax-kominka-heritage-townhouse-auberge-stay',
    title: '【古民家再生・町家オーベルジュ×ふるさと納税】築100年の土蔵・重伝建商家に泊まる文化財ステイ完全ガイド',
    description: '町全体がホテル！兵庫・丹波篠山、長野・木曽路奈良井宿、岐阜・飛騨高山の国選定重要伝統的建造物群保存地区に泊まる。築100年の商家・土蔵をリノベーションした分散型古民家ホテルをふるさと納税で賢く予約。',
    heroTag: 'ふるさと納税×古民家再生・分散型町家ステイ',
    leadTitle: '歴史の風格漂う梁や柱に包まれ、地域の旬食材を使った本格創作フレンチに酔いしれる',
    leadText: '江戸・明治・大正期に建てられた重厚な土蔵や格式ある商家、武家屋敷を、現代の快適性を備えた極上リゾートとして蘇らせた「古民家再生ホテル（分散型ホテル）」。町全体をひとつのホテルに見立て、点在する歴史的建造物に宿泊しながら、石畳の小路を歩き、地元の商店や工房を巡る体験は、日本の本物の文化と人々の暮らしに深く触れる旅として熱い注目を集めています。黒豆や丹波栗で名高い兵庫・丹波篠山、木曽十一宿の風情が色濃く残る長野・奈良井宿、そして飛騨の匠の技が息づく岐阜・飛騨高山。太い梁や格天井、職人が手掛けた漆喰壁の温もりに包まれ、夕食にはその土地のテロワールを凝縮した創作フレンチや和モダン会席を堪能する――歴史的建造物の維持管理には多くの支援が必要ですが、楽天ふるさと納税のトラベルクーポンを活用すれば、自治体の町並み保存を応援しつつ実質30％割引で宿泊可能。時を超えて受け継がれる日本の美意識に泊まる、特別な文化財ステイへご案内します。',
    points: [
      {
        title: 'ポイント①：国選定の「重要伝統的建造物群保存地区」の保護に寄付で貢献',
        desc: '歴史的町並みを後世に残す古民家再生プロジェクト。ふるさと納税を通じた寄付は、伝統的建造物の改修や景観保全に直接役立てられ、旅人としても文化の継承に誇らしく貢献できます。'
      },
      {
        title: 'ポイント②：1棟貸し切りやわずか数室限定の「圧倒的なプライベート感」',
        desc: '大型ホテルとは異なり、1日1組限定の蔵宿やわずか数室の小規模ホテルが中心。誰にも邪魔されず、我が家のように落ち着いて歴史建築の風合いを楽しめます。'
      },
      {
        title: 'ポイント③：ヒノキ風呂・最新エアコン・高級マットレス完備で快適性も抜群',
        desc: '歴史の趣を残しつつ、水回りや空調設備は最新式にフルリノベーション済み。総ヒノキ造りの浴槽やシモンズ製ベッドが完備されており、極めて上質で心地よい眠りが約束されます。'
      }
    ],
    sections: [
      {
        key: 'sasayama_kominka_stay',
        badge: '兵庫県丹波篠山市・丹波篠山城下町の重伝建地区',
        title: '丹波篠山市ふるさと納税で泊まる、丹波篠山城下町に点在する古民家ホテルNIPPONIA',
        intro: '江戸時代の町割りが今なお美しく残り、国の重要伝統的建造物群保存地区に選定されている丹波篠山城下町。町中に点在する元銀行や商家、長屋を再生した分散型ホテルでは、町全体がひとつの宿としてゲストを迎えます。丹波篠山市のふるさと納税トラベルクーポンを使えば、築100年以上の歴史を宿す木造建築にスタイリッシュに宿泊可能。名物の丹波黒枝豆や丹波栗、極上の猪肉（ぼたん鍋）、但馬牛を贅沢に使ったフレンチディナーを味わい、城下町の情緒を五感で楽しむ旅が叶います。'
      },
      {
        key: 'narai_kominka_stay',
        badge: '長野県塩尻市・中山道木曽十一宿「奈良井千軒」',
        title: '塩尻市ふるさと納税で泊まる、中山道木曽路・奈良井宿の築200年名門町家リゾート',
        intro: '中山道六十九次の中で最も賑わい、「奈良井千軒」と謳われた宿場町・奈良井宿。約1kmにわたって出格子や千本格子の町家が連なる景観は、まるで江戸時代にタイムスリップしたかのような錯覚を覚えます。塩尻市のふるさと納税クーポンを活用すれば、200年の歴史を持つ元酒蔵や塗師の屋敷を改装したハイクラス町家ホテルにお得にステイ。木曽ヒノキの香りに包まれるお風呂や、信州の山の幸と地酒のペアリングディナーを堪能しながら、静寂の宿場町ナイトを満喫できます。'
      },
      {
        key: 'takayama_kominka_stay',
        badge: '岐阜県高山市・白川村・飛騨の匠の技が光る町並み',
        title: '高山市ふるさと納税で泊まる、飛騨高山の出格子の町家宿と白川郷合掌造りゆかりの古民家',
        intro: '宮大工や家具職人など「飛騨の匠」の高度な木工技術が息づく城下町・飛騨高山。三町伝統的建造物群保存地区の出格子や用水路の風情は世界中の旅人を魅了しています。高山市のふるさと納税クーポンを使えば、豪壮な梁組が美しい飛騨町家の一棟貸し宿や、合掌造りの美意識を受け継ぐ古民家オーベルジュにお得にリザーブ。最高峰ブランド「飛騨牛」の朴葉味噌焼きやステーキ、地元の蔵元が醸す銘酒とともに、木の温もりに包まれる豊かな休日をお過ごしください。'
      }
    ],
    faq: [
      {
        q: '古民家は冬寒かったり、防音性や隙間風が心配ですが大丈夫ですか？',
        a: '現代の古民家再生ホテルは、壁や床下に最新の高気密・高断熱材を施工し、床暖房や二重サッシ、高性能エアコンを完備しています。真冬の雪景色でも室内は暖かく快適に過ごせるよう設計されています。'
      },
      {
        q: '分散型ホテルでの食事やチェックインはどのように行いますか？',
        a: '通常、町の中心部にあるフロント棟（レセプション）でチェックインを行い、スタッフの案内で宿泊する町家棟へ向かいます。お食事は併設のレストラン棟で提供されるか、または客室へ届けてもらうスタイルが一般的です。'
      },
      {
        q: '街歩きや地元の工房体験などの案内はありますか？',
        a: '分散型ホテルのコンシェルジュは地域の歴史や文化に精通しており、おすすめの酒蔵巡りルートや、木工・陶芸の職人工房での体験予約などを親身にコーディネートしてくれます。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-castle-town-heritage-onsen-stay',
        title: '【国宝名城めぐり】天守望む露天風呂＆歴史ある城下町の名宿',
        desc: '城下町の歴史文化と合わせて楽しむ！姫路・松本・彦根の格式ある名宿特集。'
      },
      {
        slug: 'furusato-tax-secret-hotspring-lamp-retreat-stay',
        title: '【秘湯・ランプの宿】電波の届かぬ渓谷野天風呂でデジタルデトックス',
        desc: '日本の原風景と木の温もりに癒やされる。法師温泉や祖谷温泉の文化財湯治宿。'
      },
      {
        slug: 'furusato-tax-luxury-hotspring-ryokan-stay',
        title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド',
        desc: '草津・有馬・伊豆の名湯宿。自己負担実質2,000円で泊まるふるさと納税の基礎知識と攻略法。'
      }
    ]
  }
];

function generatePage(page) {
  const dir = path.join(__dirname, 'src/app', page.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const pointsCode = page.points.map((pt, idx) => `
          <div className="bg-gradient-to-br from-amber-50/80 to-stone-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 flex items-start gap-3 font-serif">
              <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-sans font-black shrink-0">
                ${idx + 1}
              </span>
              <span>${pt.title}</span>
            </h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-11">
              ${pt.desc}
            </p>
          </div>
  `).join('\n');

  const sectionsCode = page.sections.map(sec => {
    return `
        {/* セクション: ${sec.key} */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300/60 rounded-full text-xs font-bold tracking-wider">
              ${sec.badge}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            ${sec.title}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            ${sec.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['${sec.key}']?.hotels && secData['${sec.key}'].hotels.length > 0 ? (
              secData['${sec.key}'].hotels.map((hotel: any) => (
                <div
                  key={hotel.hotelNo}
                  className="group bg-stone-50/70 border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-stone-200">
                    <img
                      src={hotel.hotelImageUrl || hotel.roomImageUrl || '/images/no-image.jpg'}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-stone-900/85 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-full shadow">
                      ★ {hotel.reviewAverage ? hotel.reviewAverage.toFixed(1) : '好評'}
                    </div>
                    {hotel.reviewCount > 0 && (
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-stone-800 text-[11px] font-medium px-2.5 py-0.5 rounded shadow">
                        クチコミ {hotel.reviewCount}件
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-stone-900 text-lg md:text-xl mb-2 line-clamp-2 font-serif group-hover:text-amber-800 transition">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-stone-600 text-xs mb-3 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-amber-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{hotel.address1}{hotel.address2}</span>
                      </p>
                      <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {hotel.hotelSpecial || hotel.userReview || '息を呑む絶景と心尽くしのおもてなしを堪能できる、ふるさと納税トラベルクーポン対象宿です。'}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between gap-2">
                      <div className="text-xs text-stone-500">
                        {hotel.hotelMinCharge ? (
                          <div>
                            <span className="text-[11px] text-stone-400 block">参考宿泊目安</span>
                            <span className="text-stone-900 text-base font-bold">{hotel.hotelMinCharge.toLocaleString()}</span>円〜
                          </div>
                        ) : (
                          <span className="text-stone-500 font-medium">プラン一覧で確認</span>
                        )}
                      </div>
                      <a
                        href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold transition shadow-sm hover:shadow"
                      >
                        ふるさと納税対象プラン
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-8 bg-stone-100 rounded-2xl text-center text-stone-600 text-sm">
                現在、該当自治体のおすすめ宿泊施設データを更新中です。
              </div>
            )}
          </div>
        </section>`;
  }).join('\n');

  const faqsCode = page.faq.map(f => {
    return `
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/80">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2.5">
                <span className="text-amber-700 font-serif font-black text-xl">Q.</span>
                <span>${f.q}</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-7">
                ${f.a}
              </p>
            </div>`;
  }).join('\n');

  const relatedLinksCode = page.relatedLinks.map(rel => `
            <Link
              href="/${rel.slug}"
              className="group block bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-400 hover:shadow-md transition duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                  あわせて読みたい
                </span>
                <span className="text-xs text-stone-400 group-hover:text-amber-700 transition">記事を読む →</span>
              </div>
              <h4 className="font-bold text-stone-900 text-base md:text-lg mb-2 group-hover:text-amber-800 transition font-serif">
                ${rel.title}
              </h4>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                ${rel.desc}
              </p>
            </Link>
  `).join('\n');

  const content = `import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import seasonalData from '@/data/all_seasonal_rakuten_hotels.json';

export const metadata: Metadata = {
  title: '${page.title} | クラウドトラベル',
  description: '${page.description}',
  openGraph: {
    title: '${page.title} | クラウドトラベル',
    description: '${page.description}',
    type: 'article',
  },
};

export default function Page() {
  const secData = (seasonalData as any)['${page.slug}'] || {};

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">${page.heroTag}</span>
        </nav>

        {/* ヘッダーバナー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            ${page.heroTag}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            ${page.title}
          </h1>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
            ${page.leadText}
          </p>
          <div className="flex flex-wrap gap-4 pt-4 border-t border-amber-900/50 text-xs text-amber-200/90 font-medium">
            <span>✓ 寄付額の最大30％相当を宿泊クーポン還元</span>
            <span>✓ クーポンの有効期限はゆとりの3年間</span>
            <span>✓ 予約済みでも「あとから割引」対応</span>
          </div>
        </header>

        {/* 制度解説・攻略ポイントセクション */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="mb-8">
            <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
              STRATEGY GUIDE
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mt-3 font-serif">
              ${page.leadTitle}
            </h2>
          </div>
          <div className="space-y-6">
            ${pointsCode}
          </div>
        </section>

        {/* メインコンテンツセクション */}
        ${sectionsCode}

        {/* よくある質問 FAQ */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6 font-serif flex items-center gap-2">
            <span className="w-2.5 h-7 bg-amber-700 rounded-full inline-block"></span>
            よくある質問・ふるさと納税トラベルクーポンの疑問を解消
          </h2>
          <div className="space-y-4">
            ${faqsCode}
          </div>
        </section>

        {/* 相互回遊リンク */}
        <section className="bg-stone-200/80 rounded-3xl p-6 md:p-10 border border-stone-300">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-stone-600 bg-white/70 px-3 py-1 rounded-full uppercase tracking-wider">
              RELATED GUIDES
            </span>
            <h3 className="text-2xl font-bold text-stone-900 mt-2 mb-3 font-serif">
              ふるさと納税トラベルをもっと使いこなす
            </h3>
            <p className="text-stone-600 text-sm">
              お得な「あとから割引」の裏ワザから、ご当地グルメ特化宿、愛犬同伴・個室サウナ宿まで、旅のスタイルに合わせた完全ガイドをチェック！
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${relatedLinksCode}
          </div>
        </section>
      </div>
    </main>
  );
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), content, 'utf8');
  console.log(`Generated page: ${page.slug}/page.tsx`);
}

for (const p of pages) {
  generatePage(p);
}
console.log('All 4 round 6 furusato pages generated successfully!');
