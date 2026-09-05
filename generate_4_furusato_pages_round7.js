const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const pagesConfig = [
  {
    slug: 'furusato-tax-themepark-aquarium-family-hotel-stay',
    title: '水族館・テーマパーク直結ホテル×ふるさと納税活用ガイド【2026年最新】鴨川・白浜・富士急のパスポート付き宿泊パック',
    desc: '鴨川シーワールドやアドベンチャーワールド、富士急ハイランドなど人気テーマパーク・水族館直結ホテルのふるさと納税活用術！最大30%OFFクーポンで家族旅行の入園付きプランをお得に予約する方法とおすすめ宿を徹底解説。',
    h1: '水族館・テーマパーク直結ホテル×ふるさと納税宿泊ガイド',
    badge: '家族旅行・テーマパーク直結特集',
    leadTitle: 'パスポート付き宿泊やオフィシャル特典を楽天ふるさと納税で賢くお得に！',
    leadDesc: '子どもが大喜びする水族館や巨大テーマパークへの家族旅行は、チケット代や宿泊費がかさみがち。楽天ふるさと納税の「トラベルクーポン」なら、寄付額の最大30%が即座に割引クーポンとして付与され、テーマパーク直結ホテルやオフィシャルホテルのパスポート付きプラン・プレミアム宿泊に直接充当できます。家族みんなの笑顔と思い出を最大化する極上ステイを厳選紹介します。',
    merits: [
      {
        title: 'パスポート代も宿泊費も一括で実質2,000円に！',
        desc: '通常なら家族4人で数万円かかるテーマパークチケットや連泊費用も、自治体ふるさと納税クーポンを適用すれば自己負担実質2,000円の枠内で大幅に節約可能。浮いた予算で園内の限定グッズや特別ディナーを満喫できます。'
      },
      {
        title: 'オフィシャルホテルならではの優先入園＆専用通路',
        desc: '開園前のアーリーエントリーやホテル専用ゲートからの直結入場、疲れたらいつでも部屋に戻ってお昼寝できる圧倒的な利便性は直結宿だけの特権。小さな子ども連れのファミリーもストレスフリーで過ごせます。'
      },
      {
        title: 'あとから適用OK！予約済み旅行にも即時割引チャージ',
        desc: '「すでに家族旅行の日程を押さえてしまった」という場合でも安心。楽天トラベルふるさと納税クーポンなら、予約後でもマイページから返礼クーポンを後から適用して即座に割引差額を精算できます。'
      }
    ],
    items: [
      {
        key: 'kamogawa_seaworld',
        themeTitle: '千葉県鴨川市ふるさと納税：鴨川シーワールド直結＆シャチパフォーマンス最前席',
        themeDesc: 'シャチのダイナミックなジャンプで全国的な人気を誇る鴨川シーワールド。専用通路でパーク直結のオフィシャルホテルなら、滞在中は何度でも入園無料で再入場自由。夜の夜間水族館探検など宿泊者限定プログラムも充実しています。'
      },
      {
        key: 'shirahama_adventure',
        themeTitle: '和歌山県白浜町ふるさと納税：アドベンチャーワールド＆白良浜温泉リゾート',
        themeDesc: 'ジャイアントパンダやサファリワールドが人気の白浜アドベンチャーワールド。白浜温泉の名門リゾートホテルと組み合わせれば、昼は動物たちと触れ合い、夜は太平洋を望む展望大浴場でゆったり癒やされる贅沢な家族旅行が実現します。'
      },
      {
        key: 'fujikyu_highland',
        themeTitle: '山梨県富士吉田市ふるさと納税：富士急ハイランド優先入園＆雄大な富士山ビュー',
        themeDesc: '世界屈指の絶叫アトラクションとトーマスランドで三世代に愛される富士急ハイランド。優先入園特典や富士山を一望する極上スパ・展望露天風呂を備えたホテルステイで、アクティブな休日と至福のリラクゼーションを両立できます。'
      }
    ],
    crossLinks: [
      { title: '赤ちゃん・未就学児連れ安心ウェルカムベビー宿', url: '/furusato-tax-welcome-baby-family-kids-stay', desc: '離乳食対応やベビーグッズ完備、部屋食・貸切風呂付きの家族向け名宿。' },
      { title: '3世代家族旅行×高額枠一括消化ガイド', url: '/furusato-tax-three-generation-family-luxury-stay', desc: '祖父母も子どもも大満足！露天風呂付き離れスイートで祝う記念日旅行。' },
      { title: '豪華グランピング×星空ドームテント完全ガイド', url: '/furusato-tax-luxury-glamping-bbq-dome-stay', desc: '手ぶらBBQと大自然のテント泊！アウトドア体験を返礼クーポンでお得に。' }
    ]
  },
  {
    slug: 'furusato-tax-starry-sky-astronomy-retreat-stay',
    title: '日本三大星空・天体観測リゾート×ふるさと納税完全ガイド【2026年最新】阿智村・八ヶ岳・大山の満天星空宿',
    desc: '環境省認定の日本一の星空・長野県阿智村や八ヶ岳清里、鳥取大山のスターウォッチングホテルをふるさと納税でお得に予約！天体望遠鏡テラスや星空露天風呂を備えた名宿と返礼クーポン活用術を詳しくご紹介。',
    h1: '日本三大星空・天体観測リゾート×ふるさと納税ガイド',
    badge: '星空・天体観測リゾート特集',
    leadTitle: '都会では見られない天の川と無数の星々を、返礼クーポンで泊まる絶景宿で',
    leadDesc: '澄み切った夜空に広がる無数の星、肉眼でくっきりと捉えられる天の川。光害の少ない高原や山麓のリゾートホテルでは、専任ガイドによる天体観測ツアーや大型望遠鏡を備えた専用ドーム、星空を仰ぐ露天風呂など、非日常の感動体験が待っています。楽天ふるさと納税を活用して、天空のパノラマと天然温泉に包まれる極上リトリートを叶えましょう。',
    merits: [
      {
        title: '満天の星空ナイトツアーや天体望遠鏡プログラム付き',
        desc: 'ゴンドラで標高1,400mの山頂へ向かうナイトツアーや、ホテル屋上テラスでの星空解説会など、宿泊者ならではのプレミアムな観測体験がセットになったプランをふるさと納税で賢く手配できます。'
      },
      {
        title: '星空を映すインフィニティ露天風呂と清涼な高原空気',
        desc: '湯面に星々が反射する幻想的な露天風呂や、心地よい夜風を感じるウッドデッキテラス。日常の喧騒から完全に解放され、心身が深くほどけていくリラクゼーションを味わえます。'
      },
      {
        title: '3年間有効！新月期や流星群のベストシーズンを逃さず予約',
        desc: '楽天トラベルふるさと納税クーポンは獲得から最大3年間利用可能。ペルセウス座流星群やふたご座流星群、月明かりのない新月の日など、天体観測のベストコンディションを狙って柔軟に旅程を組むことができます。'
      }
    ],
    items: [
      {
        key: 'achi_starry_sky',
        themeTitle: '長野県阿智村ふるさと納税：環境省認定「日本一の星空」ナイトツアー＆美肌温泉',
        themeDesc: '「日本一星空が美しい村」として全国に名を馳せる南信州・阿智村。ヘブンスそのはらの天空の楽園ナイトツアーと、pH9.7を誇る全国屈指の「美肌の湯・昼神温泉」が融合した贅沢な湯宿ステイが楽しめます。'
      },
      {
        key: 'kiyosato_starry_sky',
        themeTitle: '山梨県北杜市ふるさと納税：八ヶ岳南麓・清里高原の星空テラス＆本格天体望遠鏡',
        themeDesc: '標高1,000mを超える八ヶ岳南麓は、空気が澄み渡り晴天率も日本トップクラス。ホテル専用の天文台やウッドデッキテラスから、天の川や四季の星座をじっくり観察できる極上の高原リゾートです。'
      },
      {
        key: 'daisen_starry_sky',
        themeTitle: '鳥取県伯耆町ふるさと納税：「星取県」大山山麓のダイナミックな星空＆名峰温泉',
        themeDesc: 'どの市町村からも天の川が見えることから「星取県」を宣言した鳥取県。名峰・大山の山懐に抱かれたリゾートホテルで、大山山麓の豊かな自然と夜空を埋め尽くす無数の星々、そして良質な天然温泉に癒やされます。'
      }
    ],
    crossLinks: [
      { title: '絶景インフィニティ温泉×海空一体パノラマ露天宿', url: '/furusato-tax-infinity-onsen-sky-ocean-view-stay', desc: '海と空、そして湯面が一体化する開放感抜群のインフィニティ湯宿。' },
      { title: '秘湯・ランプの宿×デジタルデトックス温泉旅', url: '/furusato-tax-secret-hotspring-lamp-retreat-stay', desc: '電気の通わない山奥の宿でランプの灯火と満天の星に癒やされる静寂旅。' },
      { title: 'おひとり様贅沢ソロ温泉ワーケーション旅', url: '/furusato-tax-solo-retreat-private-onsen-stay', desc: '客室露天風呂とおこもり空間で誰にも邪魔されない至福のリトリート。' }
    ]
  },
  {
    slug: 'furusato-tax-award-winning-breakfast-gourmet-hotel-stay',
    title: '朝食日本一受賞・究極の朝ごはんホテル×ふるさと納税完全ガイド【2026年最新】函館・神戸・金沢の美食宿',
    desc: 'いくら盛り放題の海鮮丼や焼き立てクロワッサン、地産地消の絶品ビュッフェ！楽天トラベル朝ごはんフェスティバルや全国ランキングで日本一に輝いた名門ホテルの朝食を、ふるさと納税クーポンでお得に堪能する極上美食ステイ。',
    h1: '朝食日本一・究極の朝ごはんホテル×ふるさと納税ガイド',
    badge: '究極の朝ごはん・美食ホテル特集',
    leadTitle: '旅のメインディッシュは「朝食」！日本一に輝く至高の朝ごはんを返礼クーポンで',
    leadDesc: '朝起きて暖簾をくぐると、目の前に広がる宝石のようないくら、職人が目の前で焼き上げる旬魚やオムレツ、焼き立ての芳醇なパンの香り。朝食に徹底的にこだわり抜いた名門ホテルは、今やそれ自体が旅の最大の目的地となっています。楽天ふるさと納税を活用すれば、プレミアム朝食付きの上質な宿泊プランを実質自己負担2,000円で贅沢に満喫できます。',
    merits: [
      {
        title: 'いくら盛り放題や地元名物・職人握りの朝食を朝から満喫',
        desc: '函館の朝獲れ海鮮丼や神戸の洋食ビュッフェ、金沢のじわもん郷土料理など、各地の食文化を朝一番から余すことなく味わい尽くす贅沢。一日の始まりが最高の幸福感で満たされます。'
      },
      {
        title: '天然温泉大浴場や展望サウナとセットで朝からととのう',
        desc: '多くの朝食名門ホテルは、最上階の展望露天風呂や本格サウナを完備。朝風呂で身体を目覚めさせた後にいただく至高の朝ごはんは、まさに人生最高のご褒美体験です。'
      },
      {
        title: '観光・出張・女子旅など幅広いシーンで高コスパに消化',
        desc: '高級旅館だけでなく都市型プレミアムホテルも対象。出張に少し贅沢をプラスしたい時や、気軽な週末の女子旅・ひとり旅でも返礼クーポンを使いやすく、満足度の極めて高いふるさと納税活用が可能です。'
      }
    ],
    items: [
      {
        key: 'hakodate_breakfast',
        themeTitle: '北海道函館市ふるさと納税：ラビスタ函館ベイ・朝食日本一いくら盛り放題の聖地',
        themeDesc: '全国の朝食ランキングで殿堂入りを果たした伝説のホテル。名物の「海鮮セルフ丼」ではいくらや甘海老、イカを好きなだけ盛り付け可能。赤レンガ倉庫群を望む最上階の展望天然温泉とともに函館の美を五感で味わえます。'
      },
      {
        key: 'kobe_breakfast',
        themeTitle: '兵庫県神戸市ふるさと納税：神戸ベイシェラトン・地産地消ビュッフェ＆自家源泉温泉',
        themeDesc: '六甲山と瀬戸内海の恵みが集う神戸屈指のインターナショナルホテル。地元契約農家の新鮮野菜や焼き立てパン、兵庫の郷土料理をビュッフェ形式で堪能。敷地内から湧出する自家源泉天然温泉「濱泉」も絶品です。'
      },
      {
        key: 'kanazawa_breakfast',
        themeTitle: '石川県金沢市ふるさと納税：金沢白鳥路ホテル山楽・加賀じわもん朝食＆大正ロマン',
        themeDesc: '金沢城公園に隣接し、兼六園まで徒歩5分のクラシックホテル。金沢の伝統野菜「じわもん」や治部煮、のどぐろの一夜干しなど加賀百万石の美味を凝縮した朝食御膳と、市内でも希少な天然美肌温泉が旅人を迎えます。'
      }
    ],
    crossLinks: [
      { title: 'ご当地グルメ宿を堪能する美食旅特集', url: '/furusato-tax-local-gourmet-inn-stay', desc: '高千穂牛・天然あなご・伊勢海老を味わう返礼クーポン旅。' },
      { title: '冬の味覚の王様×活蟹尽くし極上温泉宿ガイド', url: '/furusato-tax-winter-crab-gourmet-luxury-stay', desc: '城崎・三国・皆生のタグ付き松葉ガニ＆越前ガニ会席を堪能。' },
      { title: 'ワイン＆地ビール×醸造オーベルジュ旅ガイド', url: '/furusato-tax-winery-craft-beer-auberge-stay', desc: '勝沼・富良野・余市のワイナリー直営美食ホテル。' }
    ]
  },
  {
    slug: 'furusato-tax-waterfall-river-gorge-healing-onsen-stay',
    title: '清流渓谷＆名瀑ヒーリング温泉宿×ふるさと納税完全ガイド【2026年最新】奥入瀬・天城湯ヶ島・作並の滝見露天',
    desc: '落差ある名瀑や激流のせせらぎを間近に望む絶景露天風呂！奥入瀬渓流、天城湯ヶ島、仙台作並温泉などマイナスイオン溢れる清流峡谷の名宿を、楽天ふるさと納税トラベルクーポンでお得に予約する自然治癒・温泉旅ガイド。',
    h1: '清流渓谷＆名瀑ヒーリング温泉宿×ふるさと納税ガイド',
    badge: '渓谷・名瀑ヒーリング温泉特集',
    leadTitle: '轟く滝の音と清らかなせせらぎに包まれる、自然共生の絶景露天風呂へ',
    leadDesc: '窓を開ければ目の前を流れる清流、露天風呂に身を沈めれば視線の先に雄大な滝と生い茂る原生林。渓谷沿いに佇む温泉宿は、大自然のマイナスイオンと源泉かけ流しの湯力で日常のストレスを洗い流してくれる究極のヒーリング空間です。楽天ふるさと納税を活用して、四季折々の渓谷美と名湯に浸る贅沢な休日を賢く叶えましょう。',
    merits: [
      {
        title: '滝見風呂や渓流が目線の高さに迫る野天風呂の圧倒的爽快感',
        desc: '川床や岩場にせり出すように造られた露天風呂は、まるで自然の懐に抱かれているかのような一体感。春の新緑、夏の清涼、秋の紅葉、冬の雪景色と、四季を通じて移ろう渓谷パノラマに息を呑みます。'
      },
      {
        title: '清流で育まれた川魚や山菜、旬の滋味を味わう山里会席',
        desc: '清流がもたらす岩魚や山女魚の塩焼き、山の恵みである山菜やきのこ、地元ブランド牛など、その土地の風土に根ざした身体に優しい美食ディナーを堪能できます。'
      },
      {
        title: '楽天ふるさと納税で高額な特別室・離れ客室も大幅割引',
        desc: '渓谷ビューのテラス付き客室やプライベート客室露天風呂付き離れなど、ワンランク上の人気プランも返礼クーポンで最大30%オフ。自分へのご褒美や大切な人との記念旅行に最適です。'
      }
    ],
    items: [
      {
        key: 'oirase_gorge_onsen',
        themeTitle: '青森県十和田市ふるさと納税：星野リゾート 奥入瀬渓流ホテル・名瀑と苔むす森の特等席',
        themeDesc: '国指定の特別名勝・奥入瀬渓流の畔に唯一佇むリゾートホテル。渓流を望む露天風呂「渓流露天風呂」や岡本太郎作の大暖炉、苔さんぽやスノーシューなど大自然の美しさを体感するアクティビティが揃っています。'
      },
      {
        key: 'amagiyugashima_gorge_onsen',
        themeTitle: '静岡県伊豆市ふるさと納税：天城湯ヶ島温泉 白壁・狩野川渓流と巨石露天風呂の古民家宿',
        themeDesc: '川端康成や梶井基次郎など多くの文豪に愛された天城の清流。重量53トンの巨石をくり抜いた野趣あふれる露天風呂や溶岩風呂で名湯を浴び、名物の天城ワサビや猪鍋会席に舌鼓を打つ大人の隠れ家です。'
      },
      {
        key: 'sakunami_gorge_onsen',
        themeTitle: '宮城県仙台市ふるさと納税：作並温泉・広瀬川渓流沿いの絶景露天風呂と名湯治',
        themeDesc: '仙台の奥座敷として開湯200余年の歴史を誇る作並温泉。広瀬川の清流が間近に迫る天然岩風呂をはじめ多彩な湯舟が点在。渓流の心地よいせせらぎを聴きながら、肌に優しい弱アルカリ性の名湯を心ゆくまで堪能できます。'
      }
    ],
    crossLinks: [
      { title: '奇跡の名湯×強炭酸泉・泥湯・美肌温泉リトリート', url: '/furusato-tax-bihada-medicinal-springs-retreat-stay', desc: '長湯・霧島・嬉野の本格薬湯治と自家源泉かけ流しステイ。' },
      { title: '絶景観光列車×途中下車の名湯温泉旅館ガイド', url: '/furusato-tax-scenic-train-trolley-onsen-stay', desc: '黒部トロッコやわたらせ渓谷鐵道で巡る清流と秘湯の旅。' },
      { title: '古民家再生・歴史的町家オーベルジュ×文化財ホテル滞在記', url: '/furusato-tax-kominka-heritage-townhouse-auberge-stay', desc: '篠山・飛騨高山の歴史情緒と地産馳走を味わう極上滞在。' }
    ]
  }
];

function generateCode(config) {
  const currentCategoryData = allHotels[config.slug] || {};

  return `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${config.title}',
  description: '${config.desc}',
  keywords: ['ふるさと納税', '楽天トラベル', '宿泊クーポン', '${config.badge}', '温泉旅館', 'ホテル予約', '2026年最新'],
  openGraph: {
    title: '${config.title}',
    description: '${config.desc}',
    url: 'https://croud-travel.pages.dev/${config.slug}',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoTaxPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-white">
      {/* パンくずリスト */}
      <nav className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur px-4 py-3 text-xs text-slate-400">
        <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-amber-400 transition">ホーム</Link>
          <span>/</span>
          <Link href="/posts" className="hover:text-amber-400 transition">宿泊ガイド一覧</Link>
          <span>/</span>
          <span className="text-slate-200">${config.badge}</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-black bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 mb-5 shadow-lg shadow-amber-500/20">
            ${config.badge}
          </span>
          <h1 className="text-2xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            ${config.h1}
          </h1>
          <p className="text-sm md:text-lg text-slate-300 leading-relaxed font-medium">
            ${config.desc}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://event.travel.rakuten.co.jp/special/furusato/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-sm md:text-base border border-amber-400/30"
            >
              <span>🎟️ 楽天ふるさと納税 宿泊クーポンを獲得する</span>
              <span className="text-xs bg-black/20 px-2 py-0.5 rounded">公式</span>
            </a>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {/* リード文ブロック */}
        <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -z-10" />
          <h2 className="text-xl md:text-2xl font-black text-amber-400 mb-4 flex items-center gap-2">
            <span>💡</span>
            <span>${config.leadTitle}</span>
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base font-normal">
            ${config.leadDesc}
          </p>
        </section>

        {/* メリット3選 */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-xl md:text-3xl font-black text-white">
              楽天ふるさと納税トラベルクーポンが圧倒的にお得な3つの理由
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-2">
              予約前の獲得はもちろん、予約後の「あとから適用」も可能な最高峰の使い勝手
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${config.merits.map((m, idx) => `
              <div key="${idx}" className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition rounded-2xl p-6 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-black text-lg mb-4">
                    0${idx + 1}
                  </div>
                  <h3 className="font-bold text-white text-base md:text-lg mb-3">
                    ${m.title}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    ${m.desc}
                  </p>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        {/* 自治体＆厳選宿セクション */}
        <section className="space-y-12">
          <div className="border-l-4 border-amber-500 pl-4">
            <h2 className="text-2xl md:text-3xl font-black text-white">
              ふるさと納税対象・厳選おすすめ宿泊施設
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-1">
              楽天トラベルAPIより最新の料金・宿泊プラン・空室情報をリアルタイム反映中
            </p>
          </div>

          <div className="space-y-12">
            ${config.items.map(item => {
              const target = currentCategoryData[item.key] || { hotels: [] };
              const hotels = target.hotels || [];
              return `
                <div key="${item.key}" className="bg-slate-900/50 border border-slate-800/90 rounded-3xl p-6 md:p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-black text-amber-300 flex items-center gap-2">
                      <span>📍</span>
                      <span>${item.themeTitle}</span>
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      ${item.themeDesc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    ${hotels.map(h => `
                      <div key="${h.hotelNo}" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            ${h.hotelImageUrl ? `
                              <Image
                                src="${h.hotelImageUrl}"
                                alt="${h.hotelName}"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition duration-500"
                              />
                            ` : `
                              <div className="w-full h-full flex items-center justify-center text-slate-600 text-xs font-mono">
                                NO IMAGE
                              </div>
                            `}
                            ${h.reviewAverage > 0 ? `
                              <div className="absolute top-2 right-2 bg-slate-950/90 border border-amber-400/40 text-amber-300 px-2.5 py-1 rounded-lg text-xs font-black shadow-lg flex items-center gap-1">
                                <span>★</span>
                                <span>${h.reviewAverage.toFixed(1)}</span>
                              </div>
                            ` : ''}
                          </div>
                          <div className="p-4 space-y-2">
                            <h4 className="font-bold text-white text-sm line-clamp-2 group-hover:text-amber-300 transition">
                              ${h.hotelName}
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              ${(h.hotelSpecial || h.userReview || '').replace(/[\r\n\t]/g, ' ').slice(0, 100)}
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">${h.address1}${h.address2}</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ${h.hotelMinCharge > 0 ? `¥${h.hotelMinCharge.toLocaleString()}〜` : 'プラン参照'}
                            </span>
                          </div>
                          <a
                            href="${h.affiliateUrl}"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition shadow-md flex items-center gap-1"
                          >
                            <span>詳細・予約</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </section>

        {/* 関連・相互リンク集 */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
          <div className="border-l-4 border-amber-500 pl-3">
            <h3 className="text-lg md:text-xl font-black text-white">あわせて読みたいふるさと納税トラベル特集</h3>
            <p className="text-slate-400 text-xs mt-1">目的や同伴者に合わせて最適な宿泊クーポンを活用しよう</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${config.crossLinks.map((cl, i) => `
              <Link
                key="${i}"
                href="${cl.url}"
                className="block p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/50 transition group"
              >
                <div className="font-bold text-amber-400 group-hover:text-amber-300 transition text-sm mb-1 line-clamp-1">
                  ${cl.title}
                </div>
                <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  ${cl.desc}
                </div>
              </Link>
            `).join('')}
          </div>
        </section>

        {/* クーポン獲得CTA */}
        <section className="bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-900 border border-amber-500/30 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <span className="text-3xl">🎫</span>
          <h2 className="text-xl md:text-3xl font-black text-white">
            楽天トラベルふるさと納税クーポンで、一生の思い出に残るプレミアムステイへ
          </h2>
          <p className="text-slate-300 text-xs md:text-base max-w-2xl mx-auto leading-relaxed">
            返礼品クーポンは寄付手続き完了後、数分で楽天トラベルのアカウントに即時付与されます。今年の寄付上限枠を賢く使って、家族みんなの最高の笑顔とくつろぎを手に入れましょう。
          </p>
          <div>
            <a
              href="https://event.travel.rakuten.co.jp/special/furusato/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-8 py-4 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-base border border-amber-400/40"
            >
              <span>🎟️ 楽天ふるさと納税 宿泊クーポンを獲得する</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
`;
}

for (const p of pagesConfig) {
  const dir = path.join(__dirname, 'src/app', p.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const filePath = path.join(dir, 'page.tsx');
  fs.writeFileSync(filePath, generateCode(p), 'utf8');
  console.log(`Generated page at: ${filePath}`);
}

console.log('All 4 Round 7 pages successfully created!');
