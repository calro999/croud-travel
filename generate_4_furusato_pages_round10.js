const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-sunset-ocean-magic-hour-stay',
    title: '絶景夕日・サンセット特等席の海宿×ふるさと納税完全ガイド【2026年最新】堂ヶ島・由良・白浜の茜色マジックアワー温泉',
    desc: '日本一の夕陽を誇る西伊豆堂ヶ島、日本海に沈む夕日の由良海岸、円月島の夕景パノラマ白浜温泉！海一望露天風呂や特等席テラスから茜色の空と海に包まれる絶景温泉宿を楽天ふるさと納税宿泊クーポンでお得に予約する極上サンセット旅。',
    h1: '絶景夕日・サンセット特等席の海宿×ふるさと納税ガイド',
    badge: '夕日サンセット・マジックアワー特集',
    leadTitle: '空と海が茜色に染まるマジックアワー。波音と夕暮れグラデーションに抱かれる至福の湯',
    leadDesc: '水平線の彼方へと太陽がゆっくりと沈み、空が黄金色から茜色、そして深い紫へと移ろうマジックアワー。波打ち際の露天風呂やオーシャンビュー客室のバルコニーは、一瞬ごとに表情を変える自然のドラマを独り占めできる特等席です。楽天ふるさと納税を活用すれば、寄付額の最大30%が宿泊割引クーポンとして還元され、プレミアムな夕日ビュールームや特別会席付きプランをお得に満喫できます。',
    merits: [
      {
        title: '夕景日本一を誇る景勝地で客室や露天風呂から夕日を独り占め',
        desc: '堂ヶ島の奇岩群を黄金色に染め上げる夕陽や、日本海の水平線に吸い込まれる夕日。人混みを離れ、宿の湯船やテラスから落ち着いて眺める感動は格別です。'
      },
      {
        title: '伊勢海老・アワビ・地魚の舟盛りなど夕暮れを彩る海鮮美食',
        desc: '夕景を眺めながらいただく駿河湾・日本海・南紀の獲れたて魚介会席。絶景とともに味わう海の幸とお酒は、旅の記憶に深く刻まれます。'
      },
      {
        title: 'ふるさと納税で高額な海側露天風呂付き客室も実質2,000円で予約',
        desc: '夕日が見える向きの客室は人気が高く価格設定も上がりがちですが、返礼クーポンを充当すれば自己負担実質2,000円でワンランク上の滞在が可能です。'
      }
    ],
    items: [
      {
        key: 'nishiizu_sunset',
        themeTitle: '静岡県西伊豆町ふるさと納税：夕陽日本一宣言の堂ヶ島・茜色の海と海岸露天風呂',
        themeDesc: '町を挙げて「夕陽日本一」を誇る西伊豆。海に沈む夕陽が三四郎島や堂ヶ島の奇岩をシルエットとして浮かび上がらせる絶景を、源泉かけ流しの露天風呂から堪能できます。'
      },
      {
        key: 'yura_sunset',
        themeTitle: '山形県鶴岡市ふるさと納税：由良海岸・「東北の江の島」白山島と日本海の壮大な落日',
        themeDesc: '庄内砂丘に面した由良海岸。赤い橋で繋がる白山島と日本海に沈む真っ赤な夕陽のコントラストは息を呑む美しさ。庄内浜の新鮮な地魚料理とともに名湯を味わえます。'
      },
      {
        key: 'shirahama_sunset',
        themeTitle: '和歌山県白浜町ふるさと納税：南紀白浜・円月島の海蝕洞に沈む夕陽と美肌の湯',
        themeDesc: '国の名勝・円月島の中央の穴に夕陽が重なる奇跡の瞬間が有名な白浜温泉。太平洋を一望する展望露天風呂で波音に耳を傾けながら、名湯白浜の湯で心身を解きほぐせます。'
      }
    ],
    crossLinks: [
      { title: '絶景オーシャンフロント×波音ヒーリングの海宿ふるさと納税完全ガイド', url: '/furusato-tax-oceanfront-wave-sound-healing-stay', desc: '稲取・南房総・読谷村の全室オーシャンビューと潮騒露天風呂。' },
      { title: '絶景インフィニティ温泉×海空一体パノラマ露天宿', url: '/furusato-tax-infinity-onsen-sky-ocean-view-stay', desc: '海と空、そして湯面が一体化する開放感抜群のインフィニティ湯宿。' },
      { title: '海鮮浜焼き・港町朝市めぐり直結宿×ふるさと納税完全ガイド', url: '/furusato-tax-morning-market-hamayaki-seafood-inn-stay', desc: '八戸岸壁朝市・沼津港・高知ひろめ市場の朝獲れ市場グルメ。' }
    ]
  },
  {
    slug: 'furusato-tax-sake-brewery-pairing-onsen-stay',
    title: '日本酒ペアリング＆酒蔵直結名宿×ふるさと納税完全ガイド【2026年最新】越後湯沢・諏訪・会津の名酒と温泉旅',
    desc: '米どころ新潟の地酒利き酒と酒風呂、信州諏訪五蔵めぐり、福島会津の金賞蔵ペアリング会席！厳選された地酒と郷土料理のマリアージュを味わう大人の日本酒温泉旅館を楽天ふるさと納税宿泊クーポンでお得に予約する酒旅ガイド。',
    h1: '日本酒ペアリング＆酒蔵直結名宿×ふるさと納税ガイド',
    badge: '日本酒ペアリング・名酒宿特集',
    leadTitle: '銘酒の故郷に泊まる贅沢。酒蔵仕込みの美酒と天然温泉のマリアージュ',
    leadDesc: '日本有数の酒どころに足を運び、蔵元が丹精込めて醸した搾りたての純米大吟醸や限定酒を、その土地の郷土料理とともに味わう至福。お酒をたっぷり入れた「酒風呂」で温まる温泉宿や、利き酒師がセレクトするペアリングコースを備えた宿なら、移動の心配なく心ゆくまで美酒を堪能できます。楽天ふるさと納税クーポンを活用して、大人の舌と心を潤すプレミアムな日本酒旅を叶えましょう。',
    merits: [
      {
        title: '利き酒師が提案する料理一皿ごとの地酒ペアリング',
        desc: '前菜からメイン、デザートに至るまで、温度帯（冷酒・常温・ぬる燗）や酒質を完璧に合わせたペアリングコースで、食とお酒の相乗効果を極限まで体感できます。'
      },
      {
        title: '天然温泉に本物の日本酒を注ぐ「酒風呂」で血行促進＆美肌効果',
        desc: 'アミノ酸やミネラルを豊富に含む日本酒を湯船に入れた名物「酒風呂」。身体の芯から温まり、湯上がりは肌がつるつるすべすべになる贅沢な湯浴みです。'
      },
      {
        title: '近隣の老舗酒蔵めぐりや限定酒のお土産特典付きプランも',
        desc: '普段は一般非公開の蔵見学や、市販されていない限定ボトルのプレゼント付きプランも多数。ふるさと納税で地域の酒文化継承を応援できます。'
      }
    ],
    items: [
      {
        key: 'echigoyuzawa_sake',
        themeTitle: '新潟県湯沢町ふるさと納税：米どころ越後湯沢・ぽんしゅ館の利き酒と酒風呂温泉ステイ',
        themeDesc: '越後三山を望む雪国・湯沢。新潟県内全蔵元の日本酒が試飲できる越後湯沢駅のぽんしゅ館とともに、天然温泉に地酒を贅沢に注いだ酒風呂や、魚沼産コシヒカリと新潟清酒を堪能できます。'
      },
      {
        key: 'suwa_sake',
        themeTitle: '長野県諏訪市ふるさと納税：諏訪湖畔・諏訪五蔵（真澄・横笛・本金・麗人・舞姫）街道の名湯',
        themeDesc: '甲州街道沿いのわずか数百メートルに名門5蔵が立ち並ぶ諏訪。霧ヶ峰の伏流水で仕込まれた銘酒を味わい、諏訪湖を一望する自家源泉露天風呂で寛ぐ上質な休日です。'
      },
      {
        key: 'aizu_sake',
        themeTitle: '福島県会津若松市ふるさと納税：会津若松・全国新酒鑑評会金賞蔵の里＆東山温泉の囲炉裏会席',
        themeDesc: '全国最多の金賞受賞歴を誇る銘酒王国・会津。東山温泉の老舗旅館で、炭火の囲炉裏端でいただく郷土料理や馬刺しとともに、会津の厳選地酒を心ゆくまで酌み交わせます。'
      }
    ],
    crossLinks: [
      { title: 'クラフトビール＆ご当地ブルワリーホテル×ふるさと納税完全ガイド', url: '/furusato-tax-craft-beer-brewery-hotel-stay', desc: '軽井沢・修善寺・小樽の出来立て生ビールと美食ステイ。' },
      { title: 'ワイン＆地ビール×醸造オーベルジュ旅ガイド', url: '/furusato-tax-winery-craft-beer-auberge-stay', desc: '勝沼・富良野・余市のワイナリーホテル＆オーベルジュ。' },
      { title: 'ご当地グルメ宿を堪能する美食旅特集', url: '/furusato-tax-local-gourmet-inn-stay', desc: '高千穂牛・天然あなご・伊勢海老を味わう返礼クーポン旅。' }
    ]
  },
  {
    slug: 'furusato-tax-sea-of-clouds-sky-terrace-hotel-stay',
    title: '雲海テラス＆天空パノラマリゾート×ふるさと納税完全ガイド【2026年最新】トマム・志賀高原・蔵王の雲上絶景ホテル',
    desc: '早朝、目の前を埋め尽くす幻想的な白銀の雲海！北海道トマムの雲海テラス、標高2,307m志賀高原渋峠、山形蔵王連峰の天空ホテルを楽天ふるさと納税宿泊クーポンでお得に予約する非日常ステイ。',
    h1: '雲海テラス＆天空パノラマリゾート×ふるさと納税ガイド',
    badge: '雲海テラス・天空リゾート特集',
    leadTitle: '雲を見下ろす圧倒的なスケール。朝の光が照らす幻想的な「雲の海」へ',
    leadDesc: '気象条件が揃った朝にだけ現れる奇跡の絶景・雲海。足元一面にどこまでも広がる白い絨毯と、遠くの山々が島のように浮かぶ景色は、息を呑むほどの神々しさです。山頂テラス直結のホテルや標高の高い高原リゾートに宿泊すれば、早朝の混雑や長距離移動なくベストな瞬間に巡り合えます。楽天ふるさと納税を活用して、天空のリゾートで過ごす一生忘れられない雲上体験へ出かけましょう。',
    merits: [
      {
        title: '宿泊者限定のアーリーエントリーで誰もいない雲海テラスへ',
        desc: '一般営業前の静寂の時間に山頂デッキへアクセスできる宿泊者優先パス。朝の澄んだ空気の中、特等席のカフェラウンジで温かいコーヒーを飲みながら雲海を鑑賞できます。'
      },
      {
        title: '標高1,000m〜2,000m超の高地で楽しむ満天の星空と天然温泉',
        desc: '雲海が現れる高地は夜の星空観測にも最適な環境。澄み渡る夜空の天然プラネタリウムと、肌を包む名湯温泉が旅の満足度をさらに引き上げます。'
      },
      {
        title: '3年間有効の返礼クーポンで気候の安定したシーズンを狙い撃ち',
        desc: '雲海の発生率が高い春や秋のベストシーズンに合わせて旅行時期を柔軟に選べる3年間有効の楽天ふるさと納税クーポン。最大30%オフでお得に予約可能です。'
      }
    ],
    items: [
      {
        key: 'tomamu_clouds',
        themeTitle: '北海道占冠村ふるさと納税：星野リゾート トマム・ダイナミックな太平洋産雲海テラス',
        themeDesc: '日高山脈を越えて流れ込むダイナミックな太平洋産雲海が有名なトマム。雲の上にせり出すデッキ「クラウドウォーク」や雲の形をしたハンモックなど、五感で雲海を楽しむエンターテインメントが満載です。'
      },
      {
        key: 'shigakogen_clouds',
        themeTitle: '長野県山ノ内町ふるさと納税：志賀高原横手山・渋峠・日本最高地点の国道と天空パノラマ',
        themeDesc: '標高2,307mの横手山山頂付近に位置する高原宿。雲海発生率が高く、夕方から早朝にかけて北アルプスや富士山を遠望しながら雲の上で過ごす特別な滞在が叶います。'
      },
      {
        key: 'zao_clouds',
        themeTitle: '山形県山形市ふるさと納税：山形蔵王温泉・蔵王連峰の雄大な山容と雲上露天風呂',
        themeDesc: '高地に湧く開湯1900年の強酸性硫黄泉・蔵王温泉。山麓を見下ろす絶景ホテルで、朝霧や雲海を眺めながら入る白濁の露天風呂はまさに極楽の心地よさです。'
      }
    ],
    crossLinks: [
      { title: '日本三大星空・天体観測リゾート×ふるさと納税完全ガイド', url: '/furusato-tax-starry-sky-astronomy-retreat-stay', desc: '阿智村・八ヶ岳清里・鳥取大山の満天星空リゾート。' },
      { title: '絶景富士山ビュー露天風呂宿×ふるさと納税完全ガイド', url: '/furusato-tax-fuji-view-onsen-resort-stay', desc: '河口湖・山中湖・日本平の霊峰一望リゾート。' },
      { title: '高原リゾート＆美食フレンチオーベルジュ×ふるさと納税完全ガイド', url: '/furusato-tax-highland-resort-french-auberge-stay', desc: '那須・清里・裏磐梯の森の休日。' }
    ]
  },
  {
    slug: 'furusato-tax-temple-shukubo-shojin-mindfulness-stay',
    title: '古刹宿坊＆本格精進料理ステイ×ふるさと納税完全ガイド【2026年最新】高野山・善光寺・京都寺院のマインドフルネス旅',
    desc: '朝のお勤め、写経、瞑想体験、そして伝統の美と健康を支える精進料理！世界遺産高野山や信州善光寺、京都の寺院宿坊を楽天ふるさと納税宿泊クーポンでお得に予約する心洗われるリトリートガイド。',
    h1: '古刹宿坊＆本格精進料理ステイ×ふるさと納税ガイド',
    badge: '宿坊・精進料理リトリート特集',
    leadTitle: '1200年の祈りと歴史が息づく寺院で、心と身体を整える静寂のひととき',
    leadDesc: '早朝の静まり返った境内に響く読経の声、立ち上る清浄な線香の香り、凛とした朝の空気。寺院に宿泊する「宿坊」体験は、観光地を巡る旅とは一線を画す深い精神的リフレッシュをもたらしてくれます。動物性食材を使わずに旬の野菜や豆腐、乾物で彩られた本格精進料理は、身体に優しく滋養たっぷり。楽天ふるさと納税を活用して、日々の忙しさを手放し自分自身と静かに向き合う極上の宿坊ステイへ。',
    merits: [
      {
        title: '朝のお勤め・護摩焚き・阿字観瞑想・写経など非日常の仏教体験',
        desc: '宿泊者だけが参加できる早朝の勤行や、僧侶による法話、炎が立ち上る迫力の護摩祈祷など、普段の旅行では味わえない貴重な文化体験がセットになっています。'
      },
      {
        title: '胡麻豆腐や季節の山菜・大豆肉を彩り豊かに味わう本格精進料理',
        desc: '高野山名物の生胡麻豆腐や京都の生麩、職人技が光る繊細な包丁細工の精進料理。身体の内側からデトックスされ、食への感謝が深まります。'
      },
      {
        title: '歴史的庭園や重要文化財に囲まれた格式ある和室で過ごす贅沢',
        desc: '小堀遠州作庭の名園を望む客室や、襖絵が彩る重厚な広間など、歴史ある寺院ならではの趣ある空間でゆったりとくつろげます。'
      }
    ],
    items: [
      {
        key: 'koyasan_shukubo',
        themeTitle: '和歌山県高野町ふるさと納税：世界遺産高野山・弘法大師開創の霊場に佇む歴史ある名刹宿坊',
        themeDesc: '117ヶ寺が集まる天空の宗教都市・高野山。50以上の宿坊寺院があり、重厚な門構えと美しい日本庭園、毎朝の勤行体験、そして高野豆腐やごま豆腐を贅沢に使った本場精進料理を堪能できます。'
      },
      {
        key: 'zenkoji_shukubo',
        themeTitle: '長野県長野市ふるさと納税：信州善光寺・「お朝事」と「お数珠頂戴」を体験する門前宿坊',
        themeDesc: '「一生に一度は善光寺参り」と称される信州の名刹。本堂で行われる毎朝の法要「お朝事」への参列や、住職によるお数珠頂戴を受け、信州の恵みを活かした精進料理に舌鼓を打ちます。'
      },
      {
        key: 'kyoto_shukubo',
        themeTitle: '京都府京都市ふるさと納税：京都・古都の歴史的寺院や門前に泊まる静寂の朝時間',
        themeDesc: '観光客で賑わう前の早朝の京都寺院を静かに拝観できる特別な宿泊体験。枯山水の庭園を眺めながらの坐禅体験や、京料理の美意識が息づく精進料理で心身を清めます。'
      }
    ],
    crossLinks: [
      { title: 'お伊勢参り＆熊野古道×聖地巡礼・門前宿ガイド', url: '/furusato-tax-ise-kumano-sacred-power-spot-stay', desc: '伊勢神宮・熊野三山・出雲大社の祈願ステイ。' },
      { title: '秘湯・ランプの宿×デジタルデトックス温泉旅', url: '/furusato-tax-secret-hotspring-lamp-retreat-stay', desc: '法師・祖谷・酸ヶ湯の渓谷野天風呂。' },
      { title: '登録有形文化財・宮大工名建築旅館×ふるさと納税完全ガイド', url: '/furusato-tax-tangible-cultural-property-architectural-ryokan-stay', desc: '修善寺新井旅館・渋温泉金具屋・箱根環翠楼の歴史宿。' }
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

console.log('All 4 Round 10 pages successfully created!');
