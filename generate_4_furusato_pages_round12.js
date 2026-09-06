const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-autumn-foliage-gorge-onsen-stay',
    title: '紅葉渓谷＆錦秋の絶景露天風呂宿×ふるさと納税完全ガイド【2026年最新】定山渓・奥日光・京都嵐山の秋色名宿',
    desc: '日本屈指の紅葉名所！北海道定山渓豊平峡、栃木奥日光中禅寺湖、京都嵐山保津川の渓谷美を愛でる秋の特等席宿。赤や黄金色に染まる山々を客室や露天風呂から眺める錦秋ステイを楽天ふるさと納税宿泊クーポンでお得に予約する完全ガイド。',
    h1: '紅葉渓谷＆錦秋の絶景露天風呂宿×ふるさと納税ガイド',
    badge: '紅葉渓谷・錦秋露天風呂特集',
    leadTitle: '燃えるような赤と黄金のパノラマ。湯けむりに包まれて愛でる秋の最高峰リトリート',
    leadDesc: '渓谷全体が赤や黄色、橙色のグラデーションに染まる日本の秋。湯船に身を沈めながら見上げる紅葉のトンネル、水面に浮かぶもみじ葉、そして澄み渡る秋空。季節限定の絶景露天風呂は、日本人の美意識を最も刺激する極上の癒やしです。楽天ふるさと納税を活用すれば、ハイシーズンで予約困難な名門紅葉宿も最大30%オフのトラベルクーポンで実質2,000円の自己負担で優雅に滞在できます。',
    merits: [
      {
        title: '紅葉シーズン最盛期の渓谷ビュー客室や露天風呂を優先確保',
        desc: '1年で最も予約が集中する10月〜11月の紅葉期。ふるさと納税クーポンなら3年間有効なため、早期予約や連泊のアップグレードにも柔軟に活用できます。'
      },
      {
        title: '松茸・新米・戻り鰹・秋の味覚を味わい尽くす山里会席',
        desc: '香り高い焼き松茸や土瓶蒸し、獲れたての秋サケやイクラ、実りの秋のブランド新米など、食欲の秋にふさわしい贅を尽くしたディナーを堪能できます。'
      },
      {
        title: '冷え込む秋の身体を芯から温める良質な源泉かけ流し温泉',
        desc: '朝晩の冷え込みが心地よい秋だからこそ、濃厚な硫黄泉や塩化物泉の温もりが身体に染み渡ります。湯冷めしにくい極上の泉質で美肌と免疫力を高めましょう。'
      }
    ],
    items: [
      {
        key: 'jozankei_foliage',
        themeTitle: '北海道札幌市ふるさと納税：定山渓温泉・豊平川の渓谷紅葉と支笏洞爺国立公園の森宿',
        themeDesc: '「札幌の奥座敷」定山渓。豊平峡ダム周辺の燃えるような紅葉パノラマと、ナトリウム塩化物泉の温まりの湯。北海道の豊かな大地の恵みを取り入れた贅沢な会席料理を楽しめます。'
      },
      {
        key: 'nikko_foliage',
        themeTitle: '栃木県日光市ふるさと納税：奥日光中禅寺湖・男体山を映す錦秋の湖畔と乳白色硫黄泉',
        themeDesc: '標高1,200mを超える高冷地・奥日光。いろは坂の絶景ドライブを経てたどり着く中禅寺湖畔では、カエデやナナカマドの鮮やかな紅葉と、美肌効果抜群のにごり湯硫黄泉が旅人を癒やします。'
      },
      {
        key: 'arashiyama_foliage',
        themeTitle: '京都府京都市ふるさと納税：京都嵐山・渡月橋と保津川渓谷の紅葉絵巻に抱かれる老舗料理旅館',
        themeDesc: '平安の貴族たちが愛した嵐山の紅葉。嵐峡の山肌が茜色に染まる絶景を望みながら、繊細な京料理と嵐山温泉の肌に優しい湯を味わう、日本最高峰の雅な秋ステイです。'
      }
    ],
    crossLinks: [
      { title: '清流渓谷＆名瀑ヒーリング温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-waterfall-river-gorge-healing-onsen-stay', desc: '奥入瀬渓流・天城湯ヶ島・作並温泉の滝見露天宿。' },
      { title: '全国桜名所お花見温泉×春爛漫の桜花露天風呂ガイド', url: '/furusato-tax-cherry-blossom-spring-hanami-onsen-stay', desc: '弘前・伊豆河津・吉野山の桜と温泉巡り旅。' },
      { title: '絶景富士山ビュー露天風呂宿×ふるさと納税完全ガイド', url: '/furusato-tax-fuji-view-onsen-resort-stay', desc: '河口湖・山中湖・日本平の霊峰一望リゾート。' }
    ]
  },
  {
    slug: 'furusato-tax-brand-jidori-mizutaki-gourmet-stay',
    title: 'ブランド地鶏・水炊き・軍鶏料理の名湯宿×ふるさと納税完全ガイド【2026年最新】比内地鶏・土佐ジロー・黒さつま鶏の美食旅',
    desc: '日本三大美味鶏の比内地鶏きりたんぽ鍋、高知の土佐ジロー軍鶏鍋、鹿児島黒さつま鶏の炭火焼き！噛むほどに旨味が溢れる銘柄地鶏と極上温泉旅館を楽天ふるさと納税宿泊クーポンでお得に予約する肉食・郷土美食ガイド。',
    h1: 'ブランド地鶏・水炊き・軍鶏料理の名湯宿×ふるさと納税ガイド',
    badge: 'ブランド地鶏・軍鶏水炊き特集',
    leadTitle: '弾力ある肉質と濃厚なコク。炭火の香ばしさと地鶏出汁が染み渡る美食の極み',
    leadDesc: '放し飼いや平飼いでじっくりと時間をかけて育てられた全国の最高峰ブランド地鶏。噛み締めるたびに溢れ出す濃厚な旨味、澄んだ黄金色の鶏ガラスープ、そして炭火でカリッと香ばしく焼き上げた地鶏もも肉。温泉地ならではの清らかな水と職人の技が融合した地鶏会席は、肉料理愛好家にとって忘れられない体験です。楽天ふるさと納税を活用して、本場でしか味わえない至高の鳥料理ステイをお得に堪能しましょう。',
    merits: [
      {
        title: '産地直送だからこそ実現する圧倒的な鮮度の地鶏刺身や炭火焼き',
        desc: '鮮度抜群の地鶏タタキやレバー、炭火の煙を纏った黒焼きなど、都市部ではなかなか口にできない本場ならではの調理法で地鶏本来の力強い風味を味わえます。'
      },
      {
        title: '旨味が凝縮した濃厚地鶏スープでいただく名物水炊き・きりたんぽ鍋',
        desc: '鶏ガラを何時間も煮込んで抽出したコラーゲンたっぷりの濃厚スープ。旬の地元野菜とともにいただく鍋料理は、身体の芯から滋養を与えてくれます。'
      },
      {
        title: 'ふるさと納税返礼クーポンで郷土の食文化と銘柄鶏の保存を応援',
        desc: '伝統的な血統と飼育方法を守り続ける地鶏農家や自治体を寄付で支えながら、自己負担実質2,000円で贅沢な美食プランを楽しめます。'
      }
    ],
    items: [
      {
        key: 'hinai_jidori',
        themeTitle: '秋田県大館市ふるさと納税：比内地鶏の本場・本場大館きりたんぽ鍋と名湯大湯温泉',
        themeDesc: '薩摩地鶏・名古屋コーチンと並ぶ日本三大美味鶏・比内地鶏。炭火で焼いた手作りきりたんぽと比内地鶏の濃厚な出汁が絡み合う本場の味を、十和田湖南麓の古湯で味わえます。'
      },
      {
        key: 'tosa_jidori',
        themeTitle: '高知県ふるさと納税：土佐ジロー＆軍鶏・坂本龍馬も愛した軍鶏鍋と南国温泉ステイ',
        themeDesc: '野性味あふれる肉質と濃厚な黄身が特徴の土佐ジロー。幕末の志士たちが好んだ軍鶏鍋や高知名物のカツオの藁焼きタタキとともに、南国土佐の温泉宿で豪快に食します。'
      },
      {
        key: 'satsuma_jidori',
        themeTitle: '鹿児島県霧島市ふるさと納税：黒さつま鶏・「黒の奇跡」炭火焼き会席と全室露天風呂付き離れ',
        themeDesc: '黒豚・黒牛に続く鹿児島の新たなブランド「黒さつま鶏」。旨味成分のイノシン酸が多くジューシーな肉質を炭火焼きで堪能し、霧島連山を望む客室露天風呂でととのう極上ステイです。'
      }
    ],
    crossLinks: [
      { title: 'ご当地グルメ宿を堪能する美食旅特集', url: '/furusato-tax-local-gourmet-inn-stay', desc: '高千穂牛・天然あなご・伊勢海老を味わう返礼クーポン旅。' },
      { title: '日本酒ペアリング＆酒蔵直結名宿×ふるさと納税完全ガイド', url: '/furusato-tax-sake-brewery-pairing-onsen-stay', desc: '越後湯沢・諏訪・会津の名酒と温泉旅。' },
      { title: '朝食日本一受賞・究極の朝ごはんホテル×ふるさと納税完全ガイド', url: '/furusato-tax-award-winning-breakfast-gourmet-hotel-stay', desc: '函館・神戸・金沢のいくら盛り放題＆美食ビュッフェ。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-gardens-heritage-stay',
    title: '日本三名園＆大名庭園を望む老舗旅館×ふるさと納税完全ガイド【2026年最新】兼六園・後楽園・偕楽園の歴史宿',
    desc: '日本三名園（金沢兼六園、岡山後楽園、水戸偕楽園）至近の名門旅館！大名文化の粋を集めた池泉回遊式庭園の散策と、加賀料理・瀬戸内海鮮・常陸牛の美食を楽天ふるさと納税宿泊クーポンでお得に予約する歴史文化の旅。',
    h1: '日本三名園＆大名庭園を望む老舗旅館×ふるさと納税ガイド',
    badge: '日本三名園・大名庭園宿特集',
    leadTitle: '四季折々の雅を映す名園の静寂。江戸の大名が愛した庭園美と伝統のおもてなし',
    leadDesc: '雪吊りが美しい金沢・兼六園、岡山城を借景とする岡山・後楽園、梅の名所として名高い水戸・偕楽園。江戸時代の大名たちが美の極致を追求して作庭した日本三名園の周辺には、格式高い老舗旅館や上質なシティホテルが息づいています。早朝の開園直後、観光客のいない静まり返った庭園を散策できるのは近隣宿の特権。楽天ふるさと納税を活用して、日本庭園の美意識と伝統会席に酔いしれる優雅な旅へ。',
    merits: [
      {
        title: '開園直後の早朝散策で誰もいない名園の静寂と朝露を独占',
        desc: '名園に隣接・至近の宿なら、朝食前の清々しい時間帯に庭園をゆっくり散策可能。鳥のさえずりと水音だけが響く静寂の美を心ゆくまで堪能できます。'
      },
      {
        title: '加賀百万石・備前・水戸徳川家の歴史と結びついた伝統会席料理',
        desc: '治部煮をはじめとする繊細な加賀料理、瀬戸内の新鮮魚介や備前ばら寿司、常陸牛など、各藩の豊かな食文化を現代に受け継ぐ名店の味を楽しめます。'
      },
      {
        title: 'ふるさと納税で文化財庭園の保全と地域観光をダブルで支援',
        desc: '世界に誇る日本庭園の維持管理に取り組む自治体に寄付しながら、最大30%オフのトラベルクーポンでお得に格式ある宿に宿泊できます。'
      }
    ],
    items: [
      {
        key: 'kenrokuen_garden',
        themeTitle: '石川県金沢市ふるさと納税：加賀百万石・兼六園至近の料理旅館金沢茶屋＆大正ロマンホテル',
        themeDesc: '徽軫灯籠や雪吊りで世界的に知られる兼六園。加賀友禅や九谷焼が彩る名宿で、日本海のノドグロやズワイガニ、金沢じわもん野菜を使った極上会席と名湯を満喫できます。'
      },
      {
        key: 'korakuen_garden',
        themeTitle: '岡山県岡山市ふるさと納税：岡山後楽園・旭川の清流と岡山城烏城を借景とする名園リゾート',
        themeDesc: '元禄文化を今に伝える回遊式庭園・後楽園。広大な芝生と延養亭を散策した後は、瀬戸内の鰆やままかり、千屋牛を味わい、快適なホテルでリラクゼーションに浸れます。'
      },
      {
        key: 'kairakuen_garden',
        themeTitle: '茨城県水戸市ふるさと納税：水戸偕楽園・千波湖の自然と徳川斉昭公ゆかりの梅林名宿',
        themeDesc: '約3,000本の梅が咲き誇る偕楽園。好文亭から千波湖を見晴らし、夜は茨城の誇る極上肉・常陸牛のステーキやすき焼きを老舗温泉宿で堪能する知的な歴史旅です。'
      }
    ],
    crossLinks: [
      { title: '国宝名城めぐり×城下町老舗名宿ガイド', url: '/furusato-tax-castle-town-heritage-onsen-stay', desc: '姫路・松本・彦根の天守展望露天風呂宿。' },
      { title: '古民家再生・歴史的町家オーベルジュ×文化財ホテル滞在記', url: '/furusato-tax-kominka-heritage-townhouse-auberge-stay', desc: '篠山・飛騨高山・竹田城下の歴史情緒と地産馳走ステイ。' },
      { title: '登録有形文化財・宮大工名建築旅館×ふるさと納税完全ガイド', url: '/furusato-tax-tangible-cultural-property-architectural-ryokan-stay', desc: '修善寺新井旅館・渋温泉金具屋・箱根環翠楼の歴史宿。' }
    ]
  },
  {
    slug: 'furusato-tax-cycling-shimanami-lake-resort-stay',
    title: '絶景サイクリング＆海沿いサイクリスト温泉宿×ふるさと納税完全ガイド【2026年最新】しまなみ海道・尾道・琵琶湖の爽快旅',
    desc: 'サイクリストの聖地・瀬戸内しまなみ海道、尾道水道、琵琶湖一周ビワイチ！愛車を客室に持ち込める専用バイクラック付きホテルや海沿い展望温泉リゾートを楽天ふるさと納税宿泊クーポンでお得に予約するアクティブリゾート完全ガイド。',
    h1: '絶景サイクリング＆海沿いサイクリスト温泉宿×ふるさと納税ガイド',
    badge: '絶景サイクリング・温泉リゾート特集',
    leadTitle: '海風を切り、湖畔を駆け抜ける爽快感。愛車とともに泊まるサイクリストの楽園',
    leadDesc: '青い海の上に架かる巨大な斜張橋を自転車で渡る「しまなみ海道」や、どこまでも続く湖岸道路を走る「ビワイチ（琵琶湖一周）」。サイクリングで心地よい汗を流した後は、絶景の天然温泉大浴場で筋肉をほぐし、地元の海鮮や近江牛でエネルギーをチャージ。客室に愛車をそのまま持ち込める専用バイクラックやメンテナンス工具、コインランドリー完備のサイクリストフレンドリー宿が充実しています。楽天ふるさと納税を活用して、アクティブで贅沢な休日を賢くお得に実現しましょう。',
    merits: [
      {
        title: '愛車を客室内に安全に持ち込める専用バイクラック＆スタンド完備',
        desc: '大切なロードバイクやクロスバイクを部屋の中で保管できる安心感。メンテナンススペースや空気入れ・工具の貸出などサイクリスト目線の設備が整っています。'
      },
      {
        title: 'ライド後の疲労を優しく癒やす展望露天風呂とサウナ',
        desc: '瀬戸内海や琵琶湖を一望する展望大浴場で、ペダルを漕ぎ続けた脚と身体をじっくりリフレッシュ。水風呂と外気浴で心身ともに完璧にととのいます。'
      },
      {
        title: 'ふるさと納税返礼クーポンでサイクリングツアーや連泊をお得に',
        desc: '1日では走りきれないロングライドも、発着地と中間地点の宿でクーポンを活用すれば予算を気にせず快適な2泊3日ステージツアーが組めます。'
      }
    ],
    items: [
      {
        key: 'shimanami_cycling',
        themeTitle: '愛媛県今治市ふるさと納税：しまなみ海道四国側拠点・来島海峡大橋を望む絶景展望温泉ホテル',
        themeDesc: '世界中のサイクリストが憧れるしまなみ海道。今治側の起点に位置し、大迫力の来島海峡大橋と瀬戸内の多島美を一望。名物の来島鯛めしや瀬戸内レモン風呂を満喫できます。'
      },
      {
        key: 'onomichi_cycling',
        themeTitle: '広島県尾道市ふるさと納税：本州側起点尾道・レトロな尾道水道と倉庫リノベーションホテル',
        themeDesc: '坂の街・尾道の港町情緒が広がるサイクリング拠点。海沿いの遊歩道や尾道ラーメン、瀬戸内の小魚料理を楽しみ、自転車とともにチェックインできる洗練された空間でくつろげます。'
      },
      {
        key: 'biwako_cycling',
        themeTitle: '滋賀県守山市・長浜市ふるさと納税：琵琶湖ビワイチ・湖畔のサイクリストフレンドリー温泉リゾート',
        themeDesc: '日本最大の湖を一周する約200kmのビワイチ。湖岸直結の大型リゾートホテルで、雄大なびわ湖を眺める大浴場と近江牛ディナーを味わい、翌日のライドへの活力を養えます。'
      }
    ],
    crossLinks: [
      { title: '絶景オーシャンフロント×波音ヒーリングの海宿ふるさと納税完全ガイド', url: '/furusato-tax-oceanfront-wave-sound-healing-stay', desc: '稲取・南房総・読谷村の全室オーシャンビューと潮騒露天風呂。' },
      { title: '名門ゴルフ×ふるさと納税宿泊パック完全ガイド', url: '/furusato-tax-golf-resort-hotspring-stay', desc: '川奈・軽井沢・宮古島の温泉ゴルフリゾート。' },
      { title: '豪華グランピング×星空ドームテント完全ガイド', url: '/furusato-tax-luxury-glamping-bbq-dome-stay', desc: '河口湖・琵琶湖・淡路島の手ぶら焚き火BBQ。' }
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
              href="${officialFurusatoAffUrl}"
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
              href="${officialFurusatoAffUrl}"
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

console.log('All 4 Round 12 pages successfully created!');
