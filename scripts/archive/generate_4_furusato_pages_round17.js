const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-caldera-blue-lake-resort-stay',
    title: '神秘のコバルトブルー・カルデラ湖畔ホテル×ふるさと納税完全ガイド【2026年最新】支笏湖・屈斜路湖・田沢湖の美景',
    desc: '日本屈指の透明度を誇るカルデラ湖！北海道支笏湖の神秘の青「支笏湖ブルー」、道東屈斜路湖・摩周湖の霧と砂湯露天、秋田田沢湖の日本一深い瑠璃色湖水と乳頭温泉郷。湖畔の静寂と上質な温泉リゾートを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '神秘のコバルトブルー・カルデラ湖畔ホテル×ふるさと納税ガイド',
    badge: 'カルデラ湖・レイクサイドリゾート特集',
    leadTitle: '鏡のように澄み渡る瑠璃色の湖水。水と森の静寂に抱かれる究極のレイクサイドリトリート',
    leadDesc: '火山の噴火によって形成された雄大なカルデラ湖。どこまでも透き通る青のグラデーション、湖面に映り込む四季折々の山影、そして朝霧が立ち込める幻想的な水辺。観光客の喧騒から離れたカルデラ湖畔には、湖を一望する絶景客室や、天然温泉の展望露天風呂を備えた隠れ家リゾートホテルが佇んでいます。カヌーやSUPで湖上散歩を楽しんだ後は、地元の旬食材を使ったディナーに舌鼓を打つ――そんな贅沢な休日を楽天ふるさと納税でお得に叶えましょう。',
    merits: [
      {
        title: '湖を一望するレイクビュー客室＆水辺のパノラマ温泉露天',
        desc: '部屋の窓一面に広がる穏やかなカルデラ湖の青。時間とともに茜色から宵闇へと移ろう美しい湖水の表情を独占できます。'
      },
      {
        title: 'ヒメマス（チップ）や八幡平ポークなど湖畔ならではの清流グルメ',
        desc: '清らかな湖水で育ったヒメマスの塩焼きやお造り、地元の大地が育んだブランド肉と旬野菜の創作会席を堪能できます。'
      },
      {
        title: '湖上カヌーやSUP、湖畔サイクリングなど充実のアクティビティ',
        desc: '透明度抜群の湖水へ漕ぎ出す爽快なアクティビティ。大自然と調和する感動体験をふるさと納税でお得に楽しめます。'
      }
    ],
    items: [
      {
        key: 'shikotsu_lake',
        themeTitle: '北海道千歳市ふるさと納税：水質日本一の支笏湖・「支笏湖ブルー」を望む極上温泉リゾート',
        themeDesc: '環境省の水質測定で何度も日本一に輝く支笏湖。吸い込まれそうなエメラルドグリーンの湖水と風不死岳のシルエットを望み、とろりとした美肌温泉と北海道の大地が育むフレンチ・会席に癒やされます。'
      },
      {
        key: 'kussharo_lake',
        themeTitle: '北海道弟子屈町ふるさと納税：日本最大のカルデラ屈斜路湖＆神秘の摩周湖・砂湯露天リゾート',
        themeDesc: '阿寒摩周国立公園に位置する屈斜路湖と摩周湖。湖畔の砂を掘ると温泉が湧き出す砂湯や、深い藍色をたたえる摩周ブルーの美観を堪能し、オホーツクの海の幸と野趣あふれる露天風呂を満喫できます。'
      },
      {
        key: 'tazawa_lake',
        themeTitle: '秋田県仙北市ふるさと納税：水深423m日本最深の田沢湖・瑠璃色の湖水と乳頭温泉郷秘湯ステイ',
        themeDesc: '辰子姫伝説が残る神秘の田沢湖。金色のたつこ像とコバルトブルーの水面を巡り、車で30分ほどの秘湯・乳頭温泉郷の白濁した名湯と秋田名物きりたんぽ鍋に舌鼓を打つ極上の東北旅です。'
      }
    ],
    crossLinks: [
      { title: '清流アクティビティ＆リバービュー温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-river-activity-canoe-fishing-resort-stay', desc: '長良川・四万十川・保津川の舟旅。' },
      { title: '絶景サイクリング＆海沿いサイクリスト温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-cycling-shimanami-lake-resort-stay', desc: 'しまなみ海道・尾道・琵琶湖ビワイチの絶景リゾート。' },
      { title: '日本アルプス＆高山トレッキング山岳リゾート宿×ふるさと納税完全ガイド', url: '/furusato-tax-alps-trekking-mountain-resort-stay', desc: '上高地・白馬・立山の雲上ホテル。' }
    ]
  },
  {
    slug: 'furusato-tax-brand-pork-shabu-gourmet-stay',
    title: '銘柄豚・極上しゃぶしゃぶ料理の名湯宿×ふるさと納税完全ガイド【2026年最新】鹿児島黒豚・平田牧場金華豚・那須高原豚の美食旅',
    desc: 'とろける脂の甘みと極上の旨味！本場鹿児島黒豚の出汁しゃぶ会席と砂むし温泉、山形庄内「平田牧場金華豚」の幻の豚肉とあつみ温泉、栃木那須高原三元豚のブランド肉づくしステイ。肉好き必見の極上ポークディナーを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '銘柄豚・極上しゃぶしゃぶ料理の名湯宿×ふるさと納税ガイド',
    badge: '銘柄豚・極上しゃぶしゃぶ特集',
    leadTitle: 'きめ細やかな肉質と甘くとろける上質な脂身。日本最高峰のブランド豚肉を名湯とともに味わい尽くす',
    leadDesc: '牛肉とはひと味違う、軽やかで奥深いコクとジューシーな旨味。サツマイモを食べて育った鹿児島の「かごしま黒豚」、世界三大ハムにも使われる幻の最高峰「平田牧場金華豚」、そして澄んだ高原の空気と水で育まれた「那須三元豚」。職人が極薄にスライスしたブランド豚肉を特製出汁にくぐらせ、たっぷりの白ネギや地場野菜とともに味わう贅沢。温泉で身体をほぐした後の至福のディナーを、楽天ふるさと納税でお得に体験しましょう。',
    merits: [
      {
        title: '口の中でサッと溶ける融点の低い上質な白身（脂）の甘み',
        desc: '銘柄豚ならではの上品な脂身は、しつこさが一切なく、噛むほどに芳醇な甘みと旨味が口いっぱいに広がります。'
      },
      {
        title: '特製出汁しゃぶ・せいろ蒸し・とんかつなど多彩な調理法で満喫',
        desc: '出汁にくぐらせるしゃぶしゃぶはもちろん、旨味を閉じ込めたせいろ蒸しやジューシーな炭火焼きなど、宿自慢のコースを堪能できます。'
      },
      {
        title: 'ふるさと納税クーポンで高級ブランド豚会席プランをスマートに予約',
        desc: '最大30%オフのトラベルクーポンを活用し、通常よりもワンランク上のしゃぶしゃぶ食べ比べプランや露天付き客室を選べます。'
      }
    ],
    items: [
      {
        key: 'kurobuta_pork',
        themeTitle: '鹿児島県霧島・指宿ふるさと納税：本場「かごしま黒豚」の極上黒豚しゃぶ会席と天然美肌砂むし温泉',
        themeDesc: '約400年の歴史を誇る鹿児島の至宝「かごしま黒豚」。きめ細やかな赤身と甘みのある脂身を特製そばつゆやポン酢でいただき、霧島の硫黄泉や指宿の天然砂むし温泉で心身を解きほぐします。'
      },
      {
        key: 'kinka_pork',
        themeTitle: '山形県鶴岡市ふるさと納税：幻の最高品種「平田牧場金華豚」と開湯千年のあつみ温泉名宿',
        themeDesc: '「豚肉の芸術品」と称される平田牧場の金華豚。繊維が細かく驚くほど柔らかい肉質を出汁しゃぶで堪能し、清流温海川のせせらぎを聞きながら名湯あつみ温泉に憩う至高のグルメステイです。'
      },
      {
        key: 'nasu_pork',
        themeTitle: '栃木県那須町ふるさと納税：那須高原三元豚・郡司豚のジューシーしゃぶしゃぶと開湯1300年那須温泉',
        themeDesc: '豊かな自然と清らかな伏流水で丹精込めて育てられた那須の銘柄豚。高原野菜とともに楽しむポークしゃぶしゃぶ会席と、硫黄の香る那須温泉「鹿の湯」源泉で芯から温まる高原リゾートです。'
      }
    ],
    crossLinks: [
      { title: 'ブランド地鶏・水炊き・軍鶏料理の名湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-brand-jidori-mizutaki-gourmet-stay', desc: '比内地鶏・土佐ジロー・黒さつま鶏の美食宿。' },
      { title: '高原リゾート＆美食フレンチオーベルジュ×ふるさと納税完全ガイド', url: '/furusato-tax-highland-resort-french-auberge-stay', desc: '那須・清里・裏磐梯の森の休日。' },
      { title: '日本酒ペアリング＆酒蔵直結名宿×ふるさと納税完全ガイド', url: '/furusato-tax-sake-brewery-pairing-onsen-stay', desc: '越後湯沢・諏訪・会津の名酒と温泉旅。' }
    ]
  },
  {
    slug: 'furusato-tax-three-major-forest-therapy-retreat-stay',
    title: '日本三大美林＆巨樹・森林セラピー癒やしの宿×ふるさと納税完全ガイド【2026年最新】屋久島・木曽ヒノキ・青森ヒバの森',
    desc: '深い森の息吹で深呼吸！世界自然遺産鹿児島屋久島の屋久杉原生林リゾート、長野木曽谷の樹齢300年木曽ヒノキ露天風呂宿、青森十和田・奥入瀬渓流を包む青森ヒバの名湯。フィトンチッド満ちる原生林の力で心身を再生する森林リトリートを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大美林＆巨樹・森林セラピー癒やしの宿×ふるさと納税ガイド',
    badge: '日本三大美林・森林セラピー特集',
    leadTitle: '樹齢数百年の巨樹が放つ神聖なアロマ。深い静寂とフィトンチッドに満たされる森林浴ステイ',
    leadDesc: '一歩足を踏み入れれば、木漏れ日と苔の緑、そして鼻腔をくすぐる清々しい樹木の香り。木曽ヒノキ（長野）、青森ヒバ（青森）、そして屋久杉（鹿児島）など、日本が世界に誇る原生林や美林地帯には、日常のストレスを解き放つ不思議な生命力が満ちています。ヒノキ風呂やヒバ風呂に身を委ね、窓の外に広がる深い森のパノラマを眺めながら過ごす時間は、まさに究極の癒やし。楽天ふるさと納税でお得に森のリゾートへ旅立ちましょう。',
    merits: [
      {
        title: 'ヒノキ・ヒバの芳醇な天然アロマ香る極上露天風呂で心身浄化',
        desc: '抗菌効果やリラクゼーション効果の高い天然ヒバ・ヒノキ造りの浴槽。湯気に混ざる木の香りが深い安らぎをもたらします。'
      },
      {
        title: '認定森林セラピーロードや世界遺産の巨樹トレッキング直結',
        desc: 'ガイド付きの森林浴ツアーや原生林ハイキングへスムーズに出発できる好立地。朝の澄んだ空気の中で行う森林浴は格別です。'
      },
      {
        title: '森の恵みを取り入れた薬膳料理やジビエ・山里プレミアム会席',
        desc: '山菜やきのこ、清流の川魚、ジビエなど、森の生態系がもたらす生命力あふれる滋味深いディナーを味わえます。'
      }
    ],
    items: [
      {
        key: 'yakushima_forest',
        themeTitle: '鹿児島県屋久島町ふるさと納税：世界自然遺産・樹齢数千年の屋久杉原生林と太平洋オーシャンリゾート',
        themeDesc: '苔むす森（白谷雲水峡）や縄文杉が息づく洋上のアルプス・屋久島。深い森の息吹を感じながら、島で獲れたトビウオや首折れサバの会席と、海と森が交差する絶景スパを堪能できます。'
      },
      {
        key: 'kiso_forest',
        themeTitle: '長野県木曽町ふるさと納税：日本三大美林・伊勢神宮御神木の故郷「木曽ヒノキ」と中山道宿場町温泉',
        themeDesc: '木曽五木に数えられる最高級木材・木曽ヒノキの森。清々しいヒノキ風呂に浸かり、名物の木曽牛やすんき料理、開田高原の手打ち蕎麦を味わう歴史と美林の静寂ステイです。'
      },
      {
        key: 'oirase_forest',
        themeTitle: '青森県十和田市・八甲田ふるさと納税：日本三大美林「青森ヒバ」の香る名湯と奥入瀬渓流ネイチャー宿',
        themeDesc: 'ヒノキチオールを豊富に含む青森ヒバの大浴場。八甲田連峰のブナ原生林や奥入瀬渓流のせせらぎに包まれ、青森の地酒とともに十和田牛や短角牛のステーキを味わう癒やしの宿です。'
      }
    ],
    crossLinks: [
      { title: '日本アルプス＆高山トレッキング山岳リゾート宿×ふるさと納税完全ガイド', url: '/furusato-tax-alps-trekking-mountain-resort-stay', desc: '上高地・白馬・立山の雲上ホテル。' },
      { title: '清流渓谷＆名瀑ヒーリング温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-waterfall-river-gorge-healing-onsen-stay', desc: '奥入瀬渓流・天城湯ヶ島・作並温泉の滝見露天宿。' },
      { title: '高原リゾート＆美食フレンチオーベルジュ×ふるさと納税完全ガイド', url: '/furusato-tax-highland-resort-french-auberge-stay', desc: '那須・清里・裏磐梯の森の休日。' }
    ]
  },
  {
    slug: 'furusato-tax-distillery-whisky-pairing-stay',
    title: '国産ウイスキー蒸溜所＆銘酒ペアリング宿×ふるさと納税完全ガイド【2026年最新】余市・白州・秩父のモルト旅',
    desc: '世界を魅了するジャパニーズ・ウイスキーの故郷へ！北海道ニッカウヰスキー余市蒸溜所と小樽クラシックホテル、山梨サントリー白州蒸溜所の南アルプス天然水フォレストリゾート、埼玉イチローズモルトの秩父蒸溜所と美肌温泉宿。希少なヴィンテージモルトと極上ディナーを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '国産ウイスキー蒸溜所＆銘酒ペアリング宿×ふるさと納税ガイド',
    badge: 'ジャパニーズウイスキー・蒸溜所特集',
    leadTitle: 'ピート香る琥珀色の雫と樽の記憶。世界最高峰ジャパニーズ・ウイスキーの聖地を巡る大人の旅',
    leadDesc: '冷涼な気候、澄み切った清流、そして職人の情熱が生み出すジャパニーズ・ウイスキー。国際的なウイスキー品評会で世界最高賞を総なめにする日本の蒸溜所は、まさに自然の恵みとクラフトマンシップの結晶です。蒸溜所見学で樽熟成の香りに包まれた後は、バーラウンジで希少なシングルモルトをテイスティングし、地元の旬食材を使ったペアリングディナーに酔いしれる――そんな極上の夜を楽天ふるさと納税の宿泊クーポンでお得に実現しましょう。',
    merits: [
      {
        title: '蒸溜所直営バーや宿のメインバーで希少な限定モルトを味わう',
        desc: '一般の酒販店では入手困難な原酒や限定ボトル、蒸溜所限定シングルカスクなどを、専属バーテンダーの解説とともに堪能できます。'
      },
      {
        title: 'ウイスキーの仕込み水と同じ清冽な名水を使った料理と温泉',
        desc: '南アルプスや秩父、余市の名水で育った地元野菜や和牛、海の幸との至高のマリアージュ。天然温泉でゆったりとくつろげます。'
      },
      {
        title: 'ふるさと納税クーポンで宿泊とプレミアムバータイムを優雅に両立',
        desc: '宿泊代を賢くセーブし、浮いた予算でプレミアムウイスキーの有料試飲やボトル購入を贅沢に楽しめます。'
      }
    ],
    items: [
      {
        key: 'yoichi_whisky',
        themeTitle: '北海道余市町・小樽ふるさと納税：日本のウイスキーの父・竹鶴政孝が拓いたニッカ余市蒸溜所と小樽レトロホテル',
        themeDesc: '石炭直火蒸溜を今も守り続けるニッカウヰスキー余市蒸溜所。重厚で力強いピート香の余市シングルモルトを味わい、小樽運河沿いの歴史的建造物ホテルで日本海の海の幸ディナーを堪能できます。'
      },
      {
        key: 'hakushu_whisky',
        themeTitle: '山梨県北杜市ふるさと納税：南アルプス甲斐駒ヶ岳の森に佇むサントリー白州蒸溜所と八ヶ岳高原オーベルジュ',
        themeDesc: '広大な森に包まれた「森の蒸溜所」白州。すっきりと爽やかなスモーキーフレーバーを誇る白州をハイボールで愉しみ、八ヶ岳の新鮮な高原野菜や甲州牛のフレンチに舌鼓を打つ極上の滞在です。'
      },
      {
        key: 'chichibu_whisky',
        themeTitle: '埼玉県秩父市ふるさと納税：世界が熱狂する「イチローズモルト」のベンチャーウイスキー秩父蒸溜所と奥秩父温泉',
        themeDesc: 'ウイスキー界の世界的レジェンド、肥土伊知郎氏が創業した秩父蒸溜所。寒暖差のある秩父盆地で熟成された極上のモルトを味わい、秩父の山並みを望む展望露天風呂で温まる大人の休日です。'
      }
    ],
    crossLinks: [
      { title: '銘酒ワイナリー＆葡萄畑オーベルジュ×ふるさと納税完全ガイド', url: '/furusato-tax-winery-vineyard-auberge-stay', desc: '勝沼・余市・十勝のワインペアリング旅。' },
      { title: 'クラフトビール＆ご当地ブルワリーホテル×ふるさと納税完全ガイド', url: '/furusato-tax-craft-beer-brewery-hotel-stay', desc: '軽井沢・修善寺・小樽の出来立て生ビールと美食ステイ。' },
      { title: '日本酒ペアリング＆酒蔵直結名宿×ふるさと納税完全ガイド', url: '/furusato-tax-sake-brewery-pairing-onsen-stay', desc: '越後湯沢・諏訪・会津の名酒と温泉旅。' }
    ]
  }
];

function generatePageCode(config) {
  const pageData = allHotels[config.slug] || {};

  return `import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${config.title}',
  description: '${config.desc}',
  keywords: [
    '楽天ふるさと納税',
    'ふるさと納税 宿泊クーポン',
    '楽天トラベル ふるさと納税',
    '高級温泉旅館',
    '露天風呂付き客室',
    '2026年旅行'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/${config.slug}'
  },
  openGraph: {
    title: '${config.title}',
    description: '${config.desc}',
    url: 'https://croud-travel.pages.dev/${config.slug}',
    type: 'article',
    siteName: '旅宿クラウド'
  }
};

export default function FurusatoFeaturePage() {
  const officialFurusatoAffUrl = '${officialFurusatoAffUrl}';

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      {/* ヒーローヘッダー */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-900 border-b border-stone-800">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-6">
            <span>✨</span>
            <span>${config.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            ${config.h1}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            ${config.leadDesc}
          </p>

          {/* 公式キャンペーンCTA */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-transparent border border-amber-500/30 backdrop-blur max-w-2xl mx-auto">
            <h2 className="text-lg sm:text-xl font-bold text-amber-200 mb-2">
              楽天ふるさと納税なら寄附額の最大30%が宿泊クーポンに！
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mb-4 leading-relaxed">
              寄附翌日には楽天トラベルで使えるクーポンが付与。有効期限はたっぷり3年間あるため、次の大型連休や記念日旅行にも安心して活用いただけます。
            </p>
            <a
              href={officialFurusatoAffUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-base shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>楽天ふるさと納税 宿泊クーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* メリット3選 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-stone-800">
        <h2 className="text-2xl sm:text-3xl font-black text-amber-100 text-center mb-10">
          ${config.leadTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${config.merits.map((m, idx) => `
          <div key="${idx}" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              0${idx + 1}
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              ${m.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              ${m.desc}
            </p>
          </div>
          `).join('')}
        </div>
      </section>

      {/* エリア別 厳選ホテルリスト */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-16">
          ${config.items.map((item) => {
            const data = pageData[item.key] || { hotels: [] };
            return `
          <div key="${item.key}" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                ${item.themeTitle}
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                ${item.themeDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              ${(data.hotels || []).map((hotel, hIdx) => `
              <div
                key="${hotel.hotelNo || hIdx}"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="${hotel.hotelImageUrl || 'https://placehold.co/600x450/222/aaa?text=Rakuten+Hotel'}"
                    alt="${hotel.hotelName}"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ ${hotel.reviewAverage || '4.0'} (${hotel.reviewCount || 0}件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    ${hotel.address1 || ''}${hotel.address2 || ''}
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    ${hotel.hotelName}
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    ${hotel.hotelSpecial || hotel.access || '名湯と極上の美食を満喫できる人気宿泊施設です。'}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ${hotel.hotelMinCharge ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : 'プラン参照'}
                      </span>
                    </div>
                    <a
                      href="${hotel.affiliateUrl || hotel.hotelInformationUrl}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              `).join('')}
            </div>
          </div>
            `;
          }).join('')}
        </div>
      </section>

      {/* 下部CTAバナー */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-600/30 via-orange-600/20 to-stone-900 border border-amber-500/40 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-black text-amber-100 mb-4">
              ふるさと納税の宿泊クーポンでお得に極上の旅へ
            </h2>
            <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto mb-6 leading-relaxed">
              寄附上限額の範囲内なら、実質自己負担2,000円で憧れの特等席宿やリゾートに宿泊可能。楽天ポイント還元も併用して、賢く贅沢なひとときをお過ごしください。
            </p>
            <a
              href={officialFurusatoAffUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-base shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>楽天ふるさと納税 宿泊クーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 関連記事 内部リンク */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-stone-800">
        <h2 className="text-xl sm:text-2xl font-bold text-amber-200 mb-6">
          あわせて読みたい！テーマ別ふるさと納税トラベルガイド
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${config.crossLinks.map((link, idx) => `
          <Link
            key="${idx}"
            href="${link.url}"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                ${link.title}
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                ${link.desc}
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 mt-4 block">記事を読む →</span>
          </Link>
          `).join('')}
        </div>
      </section>
    </div>
  );
}
`;
}

for (const p of pagesConfig) {
  const dirPath = path.join(__dirname, 'src/app', p.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  const code = generatePageCode(p);
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), code, 'utf8');
  console.log(`Generated page: ${dirPath}/page.tsx`);
}

console.log('All 4 Round 17 pages successfully generated!');
