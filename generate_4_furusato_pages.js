const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
const allHotels = JSON.parse(fs.readFileSync(p, 'utf8'));

// 4記事の設定データ（各記事は完全に独立したオリジナルな文章・切り口で執筆）
const pages = [
  {
    slug: 'furusato-tax-luxury-hotspring-ryokan-stay',
    title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿をふるさと納税で予約する完全ガイド',
    description: '年末の控除枠やご褒美旅行に最適！草津・伊豆・有馬の名旅館に楽天ふるさと納税トラベルクーポンで泊まる方法を徹底解説。有効期限3年の安心設計と実質2,000円負担の上手な活用術。',
    heroTag: 'ふるさと納税×名湯・高級温泉旅館',
    leadTitle: '控除上限枠をフル活用！普段は手が届きにくい憧れの露天風呂付き客室や老舗料亭旅館へ',
    leadText: '毎年「年末に慌ててお肉やお米を頼んで冷凍庫がパンクしてしまう」という方にこそ知ってほしいのが、楽天ふるさと納税のトラベルクーポンです。寄付額の最大30％が宿泊補助クーポンとして戻り、実質2,000円の自己負担で全国の名湯宿に泊まることができます。しかもクーポンの有効期限はたっぷり「3年間」。焦って旅行日を決めなくても、来年や再来年の記念日旅行に向けてじっくり計画を温められます。名湯中の名湯・草津温泉の湯畑を望む宿から、伊豆の全室オーシャンビュー旅館、有馬温泉の歴史ある金泉宿まで、大人の贅沢旅にふさわしい厳選旅館をご紹介します。',
    points: [
      {
        title: 'ポイント①：自己負担実質2,000円で高級旅館の宿泊費を大幅カット',
        desc: '年収や家族構成に応じた控除上限額内であれば、寄付総額から2,000円を引いた全額が住民税や所得税から控除されます。例えば10万円の寄付なら3万円分、20万円の寄付なら6万円分の宿泊クーポンが手に入り、普段はちょっと贅沢に感じるハイクラス宿の露天風呂付き客室がぐっと身近になります。'
      },
      {
        title: 'ポイント②：有効期限はゆとりの「3年間」！今寄付して来年泊まれる',
        desc: '食品や果物と違い、楽天トラベルクーポンは発行から3年間有効です。「年末に寄付枠が余っているけれど、直近は忙しくて旅行に行けない」という場合でも、先にクーポンだけ手に入れておき、ゴールデンウィークや秋の紅葉シーズンにゆっくり予約することができます。'
      },
      {
        title: 'ポイント③：楽天ポイント還元もダブルで獲得できる',
        desc: 'お買い物マラソンや「0と5のつく日」などのキャンペーン中に楽天ふるさと納税で寄付すれば、通常の楽天市場と同じ高倍率ポイントが付与されます。寄付でポイントを稼ぎ、旅行でクーポンを使い、さらに宿泊利用でトラベルポイントも貯まる圧倒的にお得な三重取りが可能です。'
      }
    ],
    sections: [
      {
        key: 'kusatsu_luxury_furusato',
        badge: '群馬県草津町・天下の名湯',
        title: '草津町へのふるさと納税で泊まる、白根山系の強酸性名湯と老舗湯宿',
        intro: '日本三名泉の筆頭として名高い群馬県草津温泉。毎分3万2,000リットル以上という圧倒的な自然湧出量を誇り、古くから多くの文人墨客や湯治客を癒やしてきました。草津町のふるさと納税トラベルクーポンを使えば、草津温泉街の中心に佇む格式ある湯宿や、効能豊かな源泉を客室専用の露天風呂でかけ流しにする贅沢な滞在が叶います。夜の湯畑ライトアップ散策や湯もみショーなど、温泉情緒をまるごと味わい尽くす旅に最適です。'
      },
      {
        key: 'kawazu_imaiso_furusato',
        badge: '静岡県河津町・海辺のオールインクルーシブ',
        title: '河津町へのふるさと納税で泊まる、海まで0分の絶景と伊豆の味覚',
        intro: '早咲きの河津桜で全国に知られる伊豆・河津町。今井浜海岸の波打ち際に佇む宿では、相模灘を一望する抜群のロケーションと、2024年夏にフルリニューアルしたオールインクルーシブの上質な滞在が楽しめます。河津町の返礼クーポンを充当することで、伊豆の伊勢海老や地魚の舟盛り、水平線から昇る朝日を露天風呂から眺める至福の休日が驚くほど身近になります。首都圏から特急踊り子号で直通アクセスできる利便性も魅力です。'
      },
      {
        key: 'arima_luxury_furusato',
        badge: '兵庫県神戸市・日本最古の歴史湯',
        title: '神戸市へのふるさと納税で泊まる、有馬の赤湯「金泉」と極上の懐石',
        intro: '神話の時代から続く日本最古の温泉地・有馬温泉。太閤秀吉がこよなく愛した赤褐色の含鉄強塩泉「金泉」と、無色透明のラジウム泉「銀泉」という異なる泉質を一箇所で堪能できる世界的にも稀有な名湯です。神戸市のふるさと納税クーポンを活用すれば、歴史ある純和風旅館や六甲山麓の緑に囲まれたラグジュアリーリゾートで、名物の三田牛や明石の海の幸を取り入れた本格懐石を味わいながら、格調高い大人の休息を過ごせます。'
      }
    ],
    faq: [
      {
        q: '楽天ふるさと納税トラベルクーポンはどうやって使うのですか？',
        a: 'まずは楽天ふるさと納税で泊まりたい宿のある自治体（例：群馬県草津町、兵庫県神戸市など）の「楽天トラベルクーポン」を選んで寄付します。寄付完了後、通常翌日〜翌々日を目途に楽天IDへクーポンが付与されます。あとは楽天トラベルで対象宿の予約を進める際、予約入力画面でクーポンを選択するだけで自動的に宿泊代金から割引されます。'
      },
      {
        q: '1回の宿泊で使えるクーポン枚数や金額に制限はありますか？',
        a: '楽天トラベルでは原則として1予約（1部屋）につき利用できるふるさと納税クーポンは1枚です。ただし、他の楽天トラベルキャンペーンクーポン（宿独自クーポンや5と0のつく日クーポンなど）と併用できる場合が多く、さらにお得に宿泊できるケースがあります。'
      },
      {
        q: '自分の寄付上限額が分からないのですが、どう調べれば良いですか？',
        a: '楽天ふるさと納税のサイト内にある「かんたんシミュレーター」や「詳細シミュレーター」を使えば、年収・家族構成・住宅ローン控除などを入力するだけで数分で上限目安が算出できます。上限額の範囲内であれば、自己負担2,000円のみで宿泊クーポンを獲得できます。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-travel-after-booking-discount-guide',
        title: '【予約済みでも間に合う】「あとから割引」完全攻略ガイド',
        desc: 'すでに楽天トラベルで予約してしまった宿でも大丈夫！チェックイン前日23:59までなら後からクーポンを適用できる神ワザを解説。'
      },
      {
        slug: 'furusato-tax-local-gourmet-inn-stay',
        title: '【舌鼓を打つ美食旅】高千穂牛・あなご・伊勢海老！ご当地グルメ宿特集',
        desc: '旅の主役はやっぱり美味しいご飯！現地でしか食べられない幻の和牛や獲れたて魚介を返礼クーポンで味わう美食ステイ。'
      },
      {
        slug: 'furusato-tax-pet-sauna-private-hotspring-stay',
        title: '【愛犬同伴＆プライベートサウナ】贅沢な休日をご褒美ステイ！',
        desc: 'ワンちゃんと一緒に泊まれる温泉宿や、自分だけの完全貸切サウナ付きロッジをふるさと納税で賢くアップグレード。'
      }
    ]
  },
  {
    slug: 'furusato-tax-travel-after-booking-discount-guide',
    title: '【予約済みでも間に合う】楽天トラベル「ふるさと納税クーポンあとから適用」完全攻略ガイド',
    description: '「もう旅行を予約しちゃったから使えない…」は間違い！楽天トラベルなら予約完了後でもチェックイン前日までふるさと納税クーポンを適用可能。箱根・富士河口湖・京都の実例とともに分かりやすく解説。',
    heroTag: '旅行後悔ゼロ！あとから割引完全マニュアル',
    leadTitle: '既存の予約をキャンセルせずに値引き！知らなきゃ損する楽天トラベル独自の救済ワザ',
    leadText: '「来月の家族旅行、もう楽天トラベルで宿を押さえちゃった…」「今から予約を取り直すと希望の部屋が埋まったり料金が上がったりしそうで怖い」。そう思っている方に朗報です。楽天トラベルのふるさと納税クーポンには、業界屈指の便利機能である【あとから適用】が用意されています。予約を取り直す必要は一切なく、現行の予約詳細画面からふるさと納税クーポンをポチッと選択するだけで、差額が宿泊代金から即座に差し引かれます。チェックイン前日の23:59まで手続きできるため、急遽思い立って寄付しても十分に間に合います。首都圏から気軽に行ける箱根、富士山を望む河口湖、風情あふれる京都など、人気観光地の名宿を例にあとから割引の実践テクニックを徹底解説します。',
    points: [
      {
        title: 'ポイント①：予約の取り直し不要！部屋やプランの条件をそのままキープ',
        desc: '通常、クーポンの使い忘れは一度キャンセルして取り直す必要がありますが、満室の人気宿では再予約時に部屋が取れなくなるリスクがあります。「あとから適用」なら既存の予約を維持したまま割引だけを適用できるため、ハイシーズンでも安心です。'
      },
      {
        title: 'ポイント②：タイムリミットは「チェックイン前日の23:59」まで',
        desc: '寄付してからクーポンが付与されるまでには通常翌日〜翌々日程度かかります。そのため、宿泊日の3〜4日前に楽天ふるさと納税で寄付を完了させておけば、前日夜の締め切りまでにしっかりクーポンを反映させることができます。'
      },
      {
        title: 'ポイント③：現地決済・事前カード決済のどちらでも差額が返金・調整される',
        desc: '現地決済の場合は当日フロントで支払う金額がクーポンの額面分安くなります。楽天カード等の事前カード決済で支払済みの場合でも、後日クレジットカードの請求金額から割引分が自動でマイナス調整（または返金）されるため損がありません。'
      }
    ],
    sections: [
      {
        key: 'hakone_after_discount',
        badge: '神奈川県箱根町・首都圏の奥座敷',
        title: '箱根町のふるさと納税クーポンを、すでに予約している箱根名宿にあとから適用',
        intro: '週末旅行の王道・箱根。宮ノ下、強羅、仙石原、芦ノ湖など個性豊かな温泉場が連なり、高級旅館からリゾートホテルまで多彩な宿が集まります。箱根町の宿は人気が高く、数ヶ月前から予約を押さえるケースが多いですが、「予約した後にふるさと納税の枠が余っていることに気づいた」という場合でも箱根町のトラベルクーポンをあとから適用すれば数万円単位の割引が即座に成立します。客室露天風呂で箱根連山を眺める贅沢な時間を、驚きの高コスパで実現しましょう。'
      },
      {
        key: 'kawaguchiko_after_discount',
        badge: '山梨県富士河口湖町・霊峰富士と湖畔の休日',
        title: '富士河口湖町のふるさと納税クーポンで、予約済みのレイクビュー温泉ホテルを割引',
        intro: '富士山と穏やかな湖面が織りなす絶景リゾート・富士河口湖町。四季折々の自然美や富士急ハイランドなどアクティビティも充実し、家族旅行やカップルの記念日ステイ先として絶大な人気を誇ります。富士河口湖町にふるさと納税を行えば、湖畔沿いの露天風呂自慢の旅館や高級ホテルにクーポンをあとから適用可能。部屋の窓いっぱいに広がる富士山を眺めながら味わう甲州ワインと山梨の郷土会席が、より満足感あふれるものに変わります。'
      },
      {
        key: 'kyoto_after_discount',
        badge: '京都府京都市・千年の美意識と風情',
        title: '京都市のふるさと納税クーポンを、予約済みの嵐山・祇園の伝統宿にあとから適用',
        intro: '世界中から旅行者が集まる古都・京都。嵐山の渡月橋を望む数寄屋造りの老舗旅館や、鴨川沿いの情緒ある宿、伝統的な町家ホテルなど、泊まること自体が特別な文化体験となります。宿泊料金が高騰しやすい京都エリアだからこそ、京都市へのふるさと納税で手に入れたクーポンをあとから適用するメリットは絶大です。季節の京会席に舌鼓を打ち、静寂に包まれた朝の寺社仏閣を散策する贅沢な京都時間を賢く満喫してください。'
      }
    ],
    faq: [
      {
        q: '「あとから適用」の具体的な操作手順はどうすればいいですか？',
        a: '楽天トラベルのトップページ右上にある「予約確認・変更」を開き、該当の宿泊予約詳細を表示します。画面内に「ふるさと納税クーポンの利用」または「クーポンの変更」ボタンが表示されているので、そこから獲得済みのクーポンを選択して決定するだけで完了します。'
      },
      {
        q: '寄付した自治体と宿泊するホテルの場所が違う場合でも使えますか？',
        a: 'いいえ、クーポンが利用できるのは「寄付をした自治体内に所在する対象宿泊施設」に限られます。例えば箱根町の宿に泊まる場合は神奈川県箱根町への寄付が必要です。予約している宿の所在地（市区町村）を事前に確認してから寄付を行いましょう。'
      },
      {
        q: 'あとから適用できる回数や期限を過ぎてしまった場合はどうなりますか？',
        a: 'チェックイン前日の23:59を過ぎてしまうと、システム上あとからクーポンを適用することはできなくなります。また、クーポン付与には1〜2日程度かかる場合があるため、宿泊の3〜4日前までには楽天ふるさと納税で寄付手続きを完了させておくのが鉄則です。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-luxury-hotspring-ryokan-stay',
        title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド',
        desc: '草津・伊豆・有馬など、日本を代表する名湯の高級旅館をふるさと納税で予約するテクニックと実質2,000円の仕組みを解説。'
      },
      {
        slug: 'furusato-tax-local-gourmet-inn-stay',
        title: '【舌鼓を打つ美食旅】高千穂牛・あなご・伊勢海老！ご当地グルメ宿特集',
        desc: '予約したグルメ宿もあとから割引できる！現地の旬食材を味わい尽くすご当地美食宿のふるさと納税活用術。'
      },
      {
        slug: 'furusato-tax-pet-sauna-private-hotspring-stay',
        title: '【愛犬同伴＆プライベートサウナ】贅沢な休日をご褒美ステイ！',
        desc: 'サウナ付きコテージや愛犬同伴リゾートなど、こだわり宿の宿泊費をふるさと納税で賢く抑えるスマート旅。'
      }
    ]
  },
  {
    slug: 'furusato-tax-local-gourmet-inn-stay',
    title: '【舌鼓を打つ美食旅】高千穂牛・あなご・伊勢海老！ご当地グルメ宿をふるさと納税で堪能する旅',
    description: '旅の醍醐味は現地の味覚！宮崎の高千穂牛、岡山の名物あなご料理、三重・鳥羽の伊勢海老＆鮑尽くしなど、料理が評判の名宿を楽天ふるさと納税クーポンでお得に楽しむ美食トリップ完全ガイド。',
    heroTag: 'ふるさと納税×ご当地グルメ特化宿',
    leadTitle: '現地に行かなければ味わえない本物の味。地域の旬食材を誇る料理自慢の宿へ',
    leadText: '「旅先での一番の楽しみは、その土地ならではの美味しい料理」。そんな食通トラベラーにこそ強くおすすめしたいのが、地方の食材や郷土の味を極めた料理自慢の宿へのふるさと納税ステイです。楽天ふるさと納税で自治体に寄付し、返礼品として手に入れたトラベルクーポンを使えば、地元でしか出回らない希少なブランド牛や、港町で揚がったばかりの天然あなご、獲れたての伊勢海老・鮑を贅沢に使った特別会席が実質負担を抑えて楽しめます。自治体の生産者や料理人の情熱が詰まったごちそうを宿で心ゆくまで味わい、そのまま温かいお風呂に入って眠りにつく――これ以上ない贅沢な美食の旅をご紹介します。',
    points: [
      {
        title: 'ポイント①：ふるさと納税本来の「地方応援」と「現地の食」が完璧に合致',
        desc: 'ふるさと納税で届くお取り寄せグルメも魅力的ですが、一番おいしいのは「獲れたて・捌きたてを産地で食べること」。自治体への寄付を通じて地域を応援し、その土地の宿泊施設で直接地産地消の恵みを堪能する体験は、満足度が段違いです。'
      },
      {
        title: 'ポイント②：普段なら躊躇する「最上位料理アップグレードプラン」を選べる',
        desc: '通常プランにプラス1〜2万円かかる「特選ブランド牛食べ比べ」や「伊勢海老・鮑の姿造り付き会席」。ふるさと納税クーポンで宿泊費の30％が補助されるため、普段よりワンランク・ツーランク上の豪華料理プランを気兼ねなく選択できます。'
      },
      {
        title: 'ポイント③：お酒好きにも嬉しい！地酒や地ワインのペアリングも満喫',
        desc: '宿泊費そのものをクーポンで大幅に圧縮できるため、夕食時に宿のソムリエや利き酒師が勧める希少な限定地酒・地ワインのペアリングセットを思い切り楽しむ余裕が生まれます。'
      }
    ],
    sections: [
      {
        key: 'takachiho_beef_gourmet',
        badge: '宮崎県高千穂町・神話の里の幻のブランド牛',
        title: '高千穂町への寄付で味わう、最高峰A5ランク高千穂牛と神楽宿の温もり会席',
        intro: '神話と伝説が息づく宮崎県高千穂町。厳しい山間の気候と澄んだ名水で育まれた「高千穂牛」は、和牛のオリンピックとも称される全国和牛能力共進会で日本一に輝いた実績を持つ幻の最高級黒毛和牛です。融点が低く口の中でとろける上質な霜降りと芳醇な赤身の旨味は感動もの。高千穂町のふるさと納税トラベルクーポンを使って、夜には伝統の夜神楽が舞われる郷土情緒あふれる宿に泊まり、地元野菜とともに味わう高千穂牛会席に酔いしれる特別な夜をお過ごしください。'
      },
      {
        key: 'ushimado_anago_gourmet',
        badge: '岡山県瀬戸内市・日本のエーゲ海とあなご尽くし',
        title: '瀬戸内市への寄付で味わう、牛窓港の天然あなご料理専門店が誇る名物会席',
        intro: '「日本のエーゲ海」と称される穏やかな瀬戸内海を望む岡山県瀬戸内市牛窓町。この港町で食通たちを唸らせているのが、全国的にも珍しいあなご料理専門の民宿です。瀬戸内の豊かな潮流で育った肉厚で脂乗りの良いあなごを、お造り・天ぷら・香ばしい蒲焼き・あなご飯など多彩な調理法で余すところなく供する「あなご尽くし会席」は圧巻のひと言。瀬戸内市のふるさと納税クーポンを活用して、獲れたての海の恵みを存分に味わう港町ステイを堪能しましょう。'
      },
      {
        key: 'toba_seafood_gourmet',
        badge: '三重県鳥羽市・海女と真珠の海が育む海鮮天国',
        title: '鳥羽市への寄付で味わう、豪快な伊勢海老・鮑の姿造りと名湯オーシャンビュー',
        intro: 'リアス海岸の豊かな漁場が広がる三重県鳥羽市。古くから海女漁が受け継がれ、伊勢湾と太平洋の栄養をたっぷり蓄えた伊勢海老や鮑（アワビ）の本場として知られます。鳥羽市のふるさと納税クーポンを使えば、生簀から揚げたばかりの活き伊勢海老のお造りや香ばしい炭火焼き、柔らかく蒸し上げた鮑ステーキなど、息を呑むような豪華海鮮会席を提供する名宿をお得に予約できます。潮風を感じる絶景露天風呂とともに、心ゆくまで海の幸に満たされる旅が待っています。'
      }
    ],
    faq: [
      {
        q: '料理のグレードアッププランでもふるさと納税クーポンは使えますか？',
        a: 'はい、楽天トラベル上で販売されているプランであれば、夕食が豪華会席やブランド牛食べ比べなどのアップグレードプランであってもクーポン割引の対象となります。宿泊代金の総額からクーポンの金額分がそのまま差し引かれます。'
      },
      {
        q: '寄付してからクーポンが使えるようになるまで何日かかりますか？',
        a: '楽天ふるさと納税で寄付が完了してから、通常翌日〜翌々日の間にクーポンが自動付与されます。旅行の計画を立てたら、早めに寄付手続きを済ませておくのがおすすめです。'
      },
      {
        q: 'グルメ旅で人気の季節（旬の時期）に合わせて寄付すべきですか？',
        a: 'クーポンの有効期限は「3年間」と非常に長いため、必ずしも旬の時期に寄付する必要はありません。例えば年末に寄付してクーポンを確保しておき、春のあなご、秋の伊勢海老解禁、冬のジビエや和牛など、お目当ての食材のベストシーズンに合わせてゆっくり予約・宿泊できます。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-luxury-hotspring-ryokan-stay',
        title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド',
        desc: '美味しい料理とともに極上の温泉も譲れない方に。草津や有馬の老舗名湯宿をふるさと納税でお得に楽しむ方法。'
      },
      {
        slug: 'furusato-tax-travel-after-booking-discount-guide',
        title: '【予約済みでも間に合う】「あとから割引」完全攻略ガイド',
        desc: 'お目当てのグルメ宿をすでに予約していても大丈夫！チェックイン前日までにクーポンをあとから適用する手順を解説。'
      },
      {
        slug: 'furusato-tax-pet-sauna-private-hotspring-stay',
        title: '【愛犬同伴＆プライベートサウナ】贅沢な休日をご褒美ステイ！',
        desc: '美食とサウナ、愛犬同伴を組み合わせたハイグレードな休日ステイをふるさと納税で叶えるノウハウ。'
      }
    ]
  },
  {
    slug: 'furusato-tax-pet-sauna-private-hotspring-stay',
    title: '【愛犬同伴＆プライベートサウナ】贅沢な休日をご褒美ステイ！ふるさと納税クーポンのスマート活用術',
    description: 'ペット宿泊料金やサウナ付き客室の追加費用もふるさと納税クーポンでスマートに解決！裏磐梯の愛犬ペンション、伊豆高原の客室露天風呂宿、白馬の本格サウナロッジなど、自分へのご褒美旅を特集。',
    heroTag: 'ふるさと納税×愛犬同伴・個室サウナ宿',
    leadTitle: 'こだわり派の宿選びだからこそ効いてくる、30％宿泊補助クーポンの圧倒的メリット',
    leadText: '「大切な愛犬を留守番させずに一緒に泊まりたい」「誰にも邪魔されないプライベートサウナや客室露天風呂で心身を整えたい」。そんな特別な滞在ニーズを満たす宿は、充実した設備やきめ細やかなサービスゆえに、一般的な宿泊プランよりも料金が高めに設定されていることが少なくありません。そこで最大限に威力を発揮するのが楽天ふるさと納税のトラベルクーポンです。宿泊代金の最大30％が補助されるため、愛犬用の追加チャージや客室アップグレード費用を丸ごとカバー。福島・裏磐梯の大自然に囲まれたペンションから、伊豆高原のドッグラン付き離れ宿、北アルプス白馬の本格サウナリゾートまで、こだわりの休日をお得に叶える厳選施設をご紹介します。',
    points: [
      {
        title: 'ポイント①：高単価になりがちな「ペット設備」「客室サウナ」の費用負担を軽減',
        desc: '専用ドッグランやケアルーム、完全貸切フィンランドサウナなどを備えた宿は1泊2食で3万〜5万円以上になることも珍しくありません。ふるさと納税クーポンを使えば、例えば10万円の寄付で3万円分の割引が適用され、負担感を大幅に抑えられます。'
      },
      {
        title: 'ポイント②：愛犬の誕生日や記念日などの「特別なイベント」と相性抜群',
        desc: '「今年のうちのワンちゃんの誕生日はちょっといい宿でお祝いしたい」「日頃の激務を癒やすために極上のととのい旅をしたい」といった明確な目的に対し、3年間の有効期間を持つクーポンは最高のプレゼントになります。'
      },
      {
        title: 'ポイント③：大自然に囲まれた自治体ならではの広大な敷地と開放感',
        desc: '裏磐梯や白馬村、伊豆高原など、アウトドアや高原リゾートとして名高い自治体はふるさと納税の受け入れにも非常に積極的。都会の喧騒を離れ、愛犬ものびのび走り回れる豊かな自然環境が待っています。'
      }
    ],
    sections: [
      {
        key: 'urabandai_pet_sauna',
        badge: '福島県北塩原村・裏磐梯高原の大自然',
        title: '北塩原村への寄付で泊まる、愛犬歓迎ペンションと大浴場サウナの高原休日',
        intro: '磐梯山や五色沼など息を呑む大自然が広がる福島県裏磐梯（北塩原村）。標高800mの爽やかな高原に佇む宿では、家族同然の愛犬と一緒に客室で寛げるアットホームな滞在が魅力です。高原散策やトレッキングで心地よい汗を流した後は、大浴場に併設されたサウナでじんわりと身体を温め、澄んだ空気の中で外気浴。北塩原村のふるさと納税クーポンを使えば、家族全員とワンちゃんで過ごす温もりあふれる高原ステイが驚くほどリーズナブルに実現します。'
      },
      {
        key: 'izukogen_pet_luxury',
        badge: '静岡県伊東市・愛犬と泊まる温泉リゾート',
        title: '伊東市への寄付で泊まる、伊豆高原の客室露天風呂付き愛犬同伴プレミアム宿',
        intro: '愛犬家に優しい観光地として全国屈指の知名度を誇る静岡県伊豆高原（伊東市）。広大な芝生ドッグランやワンちゃん専用温泉プール、愛犬と一緒に食事ができる個室ダイニングを備えたハイグレード旅館が点在しています。伊東市のふるさと納税クーポンを活用すれば、客室にいながら24時間いつでも名湯を愉しめる専用露天風呂付きのお部屋へお得にステイ。相模湾の新鮮な海の幸を味わいながら、愛犬とともに至福の癒やし時間を堪能できます。'
      },
      {
        key: 'hakuba_sauna_retreat',
        badge: '長野県白馬村・北アルプスの大自然サウナ',
        title: '白馬村への寄付で泊まる、本格フィンランドサウナと貸切コテージリトリート',
        intro: '雄大な北アルプスの山麓に広がる長野県白馬村。近年は冬のスキーだけでなく、四季を通じて本格的なバレルサウナや薪ストーブサウナ、天然の雪解け水風呂を楽しめる「サウナの聖地」としてサウナーたちの熱い注目を集めています。白馬村のふるさと納税クーポンを使えば、森の中に佇むプライベートコテージや温泉サウナリゾートをスマートに予約可能。大自然のフィトンチッドを胸いっぱいに吸い込みながらの極上の「ととのい」をご体験ください。'
      }
    ],
    faq: [
      {
        q: 'ペットの同伴料金や施設使用料にもふるさと納税クーポンは充当できますか？',
        a: '宿泊プランの基本代金に含まれているペット同伴料金であれば、クーポン割引の対象となります。ただし、現地で追加清算するペットの食事代やトリミング代などは対象外となる場合があるため、「ペット料金込みプラン」を楽天トラベル上で予約するのがおすすめです。'
      },
      {
        q: 'サウナ付き客室や貸切サウナの利用料金はクーポンに含まれますか？',
        a: '「サウナ付き客室プラン」や「貸切サウナ利用特典付きプラン」として楽天トラベルで販売されているものであれば、プラン料金全体に対してクーポンが適用されます。事前予約プランを賢く選ぶことで、サウナ利用代も含めて最大30％オフの恩恵を受けられます。'
      },
      {
        q: '愛犬の狂犬病予防接種証明書などは事前に必要ですか？',
        a: '多くのペット同伴宿では、狂犬病および混合ワクチンの接種証明書（1年以内のもの）の提示が宿泊条件となっています。予約時に宿の公式案内や宿泊規約を必ず確認しておきましょう。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-luxury-hotspring-ryokan-stay',
        title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド',
        desc: '草津や有馬など日本を代表する名湯の高級旅館を、ふるさと納税クーポンで実質2,000円で泊まる方法を詳しく解説。'
      },
      {
        slug: 'furusato-tax-travel-after-booking-discount-guide',
        title: '【予約済みでも間に合う】「あとから割引」完全攻略ガイド',
        desc: 'すでに押さえてあるサウナ宿やペット宿も諦めない！チェックイン前日までにあとからクーポンを適用するテクニック。'
      },
      {
        slug: 'furusato-tax-local-gourmet-inn-stay',
        title: '【舌鼓を打つ美食旅】高千穂牛・あなご・伊勢海老！ご当地グルメ宿特集',
        desc: '地元のブランド食材を心ゆくまで味わう美食の旅。現地ならではの贅沢な食体験をふるさと納税で実現。'
      }
    ]
  }
];

function generatePage(page) {
  const dir = path.join(__dirname, 'src/app', page.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // ポイント解説セクション
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

  // メインの宿セクション
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
                        {hotel.hotelSpecial || hotel.userReview || '風情ある名湯と旬の味覚を心ゆくまで満喫できる、ふるさと納税クーポン対象の特別な宿です。'}
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

  // FAQ
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

  // 相互リンクカード
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

        {/* 相互回遊リンク（記事1〜4の循環導線） */}
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
console.log('All 4 furusato pages generated successfully!');
