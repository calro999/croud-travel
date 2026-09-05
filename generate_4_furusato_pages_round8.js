const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const pagesConfig = [
  {
    slug: 'furusato-tax-craft-beer-brewery-hotel-stay',
    title: 'クラフトビール＆ご当地ブルワリーホテル×ふるさと納税完全ガイド【2026年最新】出来立て生ビールと美食ステイ',
    desc: '軽井沢、修善寺、小樽など全国の名門クラフトビール醸造所直結ホテルやタップルーム付きの宿をふるさと納税でお得に予約！出来立ての限定生ビール飲み比べやペアリングディナーを満喫する大人の旅ガイド。',
    h1: 'クラフトビール＆ブルワリーホテル×ふるさと納税ガイド',
    badge: 'クラフトビール・ブルワリー特集',
    leadTitle: 'できたての芳醇な生ビールを片手に、非日常の温泉＆リゾートで乾杯！',
    leadDesc: 'ホップの華やかな香り、麦芽の深いコク、その土地の清らかな仕込み水が生み出すクラフトビール。醸造所併設のブルワリーホテルやタップルームを備えた温泉宿なら、移動を気にせず心ゆくまで極上の生ビールを飲み比べできます。楽天ふるさと納税を活用すれば、寄付額の最大30%が宿泊クーポンとして還元され、ビール愛好家垂涎のペアリングプランや限定テイスティングをお得に堪能できます。',
    merits: [
      {
        title: '限定クラフト生ビールのタップルーム直結＆飲み放題プラン',
        desc: '市販されていない醸造所限定のIPAや限定スタウト、季節限定ビールをその場でサーバーから注ぎたてで味わえる至福。客室へのグラウラーテイクアウトが可能な宿も多数。'
      },
      {
        title: 'ビールが進む地産地消グリル料理とペアリングディナー',
        desc: '信州牛のステーキ、駿河湾の魚介フリット、北海道産ソーセージなど、クラフトビールの特性に合わせてシェフが考案した最高のペアリングコースを堪能できます。'
      },
      {
        title: '温泉やサウナ後の「最高の一杯」をふるさと納税でお得に',
        desc: '天然温泉や本格ロウリュサウナでととのった直後に、キンと冷えたブルワリー直送ビールを喉に流し込む格別の快感。返礼クーポンで実質2,000円の自己負担で贅沢旅が叶います。'
      }
    ],
    items: [
      {
        key: 'karuizawa_beer',
        themeTitle: '長野県軽井沢町ふるさと納税：軽井沢高原ビール＆ヤッホーブルーイングの聖地ステイ',
        themeDesc: '浅間山の清涼な伏流水で仕込まれるクラフトビールのメッカ軽井沢。星野エリアのハルニレテラスや高原リゾートホテルで、森のマイナスイオンを浴びながら個性豊かなクラフトビールを飲み比べる優雅な休日が過ごせます。'
      },
      {
        key: 'shuzenji_beer',
        themeTitle: '静岡県伊豆市ふるさと納税：修善寺ブルワリーガーデン＆狩野川沿いの名湯',
        themeDesc: '世界的評価を受けるベアードビールの本拠地・伊豆修善寺。狩野川の清流沿いに広がる自然豊かな環境で、出来立ての無濾過クラフト生ビールと老舗修善寺温泉の美肌湯をダブルで満喫できます。'
      },
      {
        key: 'otaru_beer',
        themeTitle: '北海道小樽市ふるさと納税：小樽運河沿いの醸造パブ＆歴史的クラシックホテル',
        themeDesc: 'ドイツの伝統製法にこだわった小樽ビールが有名な港町小樽。レンガ造りの運河倉庫街を散策した後は、醸造所直営パブでピルスナーやドンケルを豪快に味わい、上質なホテルでくつろげます。'
      }
    ],
    crossLinks: [
      { title: 'ワイン＆地ビール×醸造オーベルジュ旅ガイド', url: '/furusato-tax-winery-craft-beer-auberge-stay', desc: '勝沼・富良野・余市のワイナリーホテル＆オーベルジュ。' },
      { title: 'ご当地グルメ宿を堪能する美食旅特集', url: '/furusato-tax-local-gourmet-inn-stay', desc: '高千穂牛・天然あなご・伊勢海老を味わう返礼クーポン旅。' },
      { title: '朝食日本一受賞・究極の朝ごはんホテル×ふるさと納税完全ガイド', url: '/furusato-tax-award-winning-breakfast-gourmet-hotel-stay', desc: '函館・神戸・金沢のいくら盛り放題＆美食ビュッフェ。' }
    ]
  },
  {
    slug: 'furusato-tax-tangible-cultural-property-architectural-ryokan-stay',
    title: '登録有形文化財・宮大工名建築旅館×ふるさと納税完全ガイド【2026年最新】修善寺・渋温泉・箱根の歴史的名宿',
    desc: '国の登録有形文化財に指定された総檜・数寄屋造りの老舗旅館！修善寺・新井旅館や渋温泉・金具屋、箱根・環翠楼など、名工の技と歴史ロマン息づく名宿をふるさと納税宿泊クーポンでお得に予約する保存・体験の旅。',
    h1: '登録有形文化財・宮大工建築旅館×ふるさと納税ガイド',
    badge: '文化財建築・歴史的名宿特集',
    leadTitle: '釘を使わない宮大工の神技と幾年月を重ねた木の温もりに包まれる奇跡の宿泊',
    leadDesc: '幾多の文豪や墨客が筆を執り、昭和初期や明治の匠たちが贅を尽くして建てた木造建築。国の登録有形文化財に指定された名旅館は、もはや宿そのものが生きた美術館です。楽天ふるさと納税を活用すれば、文化財保護や地域振興に寄付しながら、最大30%オフのトラベルクーポンで歴史的空間の特別客室や源泉風呂に贅沢に宿泊できます。',
    merits: [
      {
        title: '国の有形文化財に指定された職人技の粋・数寄屋建築に泊まる',
        desc: '銘木をふんだんに用いた床の間、組子細工の欄間、波打つ手吹き大正ガラスなど、現代では再現不可能な至高の意匠に囲まれて過ごす、唯一無二の滞在体験。'
      },
      {
        title: '文豪たちが名作を執筆した当時の空気感と専用館内ツアー',
        desc: '芥川龍之介、夏目漱石、島崎藤村など文豪ゆかりの客室や資料館を併設。当主や支配人による文化財解説ツアーが開催されている宿も多く、知的好奇心を満たしてくれます。'
      },
      {
        title: 'ふるさと納税で文化財の維持保存を応援しながらお得に滞在',
        desc: '歴史的建築物を後世に残すための支援としての意義も大きいふるさと納税。寄付控除を受けつつ、一生に一度は泊まりたい名建築への宿泊を格安で実現できます。'
      }
    ],
    items: [
      {
        key: 'shuzenji_arai',
        themeTitle: '静岡県伊豆市ふるさと納税：修善寺温泉 新井旅館・15棟が国登録有形文化財の生きた名建築',
        themeDesc: '桂川の清流沿いに広がる回遊式庭園と、安田靫彦画伯が設計に携わった名建築群。登録有形文化財の天平大浴堂での入浴や、池を望む数寄屋造りの客室で伊豆の旬の会席を味わう極上の休日です。'
      },
      {
        key: 'shibu_kanaguya',
        themeTitle: '長野県山ノ内町ふるさと納税：渋温泉 歴史の宿 金具屋・昭和初期木造四階建て「斉月楼」',
        themeDesc: '宮大工が遊び心を凝らして造り上げた木造四階建ての斉月楼と大広間。ライトアップされた夜の幻想的な佇まいは圧巻で、4つの自家源泉から引く8つの名湯巡りとともに歴史のロマンに浸れます。'
      },
      {
        key: 'hakone_kansuirou',
        themeTitle: '神奈川県箱根町ふるさと納税：塔ノ沢温泉 元湯 環翠楼・伊藤博文が名付けた渓谷老舗旅館',
        themeDesc: '大正時代の精緻な木造建築が早川渓谷の自然と美しく調和する老舗宿。皇族や要人が愛した由緒正しい客室、敷地内から湧くアルカリ性単純温泉の自家源泉を心ゆくまで堪能できます。'
      }
    ],
    crossLinks: [
      { title: '古民家再生・歴史的町家オーベルジュ×文化財ホテル滞在記', url: '/furusato-tax-kominka-heritage-townhouse-auberge-stay', desc: '篠山・飛騨高山の歴史情緒と地産馳走を味わう極上滞在。' },
      { title: '秘湯・ランプの宿×デジタルデトックス温泉旅', url: '/furusato-tax-secret-hotspring-lamp-retreat-stay', desc: '電気の通わない山奥の宿でランプの灯火と満天の星に癒やされる静寂旅。' },
      { title: '国宝名城めぐり×城下町老舗名宿ガイド', url: '/furusato-tax-castle-town-heritage-onsen-stay', desc: '姫路・松本・彦根の天守展望露天風呂宿。' }
    ]
  },
  {
    slug: 'furusato-tax-morning-market-hamayaki-seafood-inn-stay',
    title: '海鮮浜焼き・港町朝市めぐり直結宿×ふるさと納税完全ガイド【2026年最新】八戸・沼津・高知の獲れたて市場グルメ',
    desc: '館鼻岸壁朝市、沼津港、ひろめ市場など全国屈指の活気あふれる市場直結・徒歩圏内宿をふるさと納税でお得に予約！名物浜焼きや朝獲れ刺身、市場食べ歩きと温泉を満喫する港町グルメ宿泊ガイド。',
    h1: '海鮮浜焼き・港町朝市めぐり直結宿×ふるさと納税ガイド',
    badge: '朝市・海鮮浜焼き市場特集',
    leadTitle: '朝一番の水揚げをその場で頬張る贅沢！港町の活気と市場グルメに溺れる旅',
    leadDesc: '港の朝は早く、活気に満ち溢れています。水揚げされたばかりのイカやウニ、ホタテやサザエの浜焼きの香ばしい匂い、威勢のいい市場の掛け声。朝市や魚市場まで徒歩圏内の宿なら、早朝の混雑前に一番乗りの絶品グルメを堪能できます。楽天ふるさと納税クーポンを使えば、港町ならではの高鮮度海鮮会席が付いた宿泊プランも最大30%OFFで楽しめます。',
    merits: [
      {
        title: '朝市や巨大魚市場まで徒歩圏内！早起きして一番乗りグルメ',
        desc: '巨大な八戸岸壁朝市や沼津魚市場など、人気市場のすぐ近くに泊まることで、車移動の駐車場渋滞や行列を避けて朝獲れの海の幸をベストな鮮度で味わえます。'
      },
      {
        title: '炭火で香ばしく焼き上げる貝類・干物・伊勢海老の浜焼き',
        desc: '炭火の網の上でパチパチと音を立てるサザエやホタテ、溢れ出る磯の旨味出汁。夕食でも朝食でも港町ならではの豪快な浜焼き料理を満喫できます。'
      },
      {
        title: '市場で使えるクーポン券付きプランもふるさと納税対象',
        desc: '市場直結ホテルでは、朝市利用券や場内飲食店で使えるミールクーポンがセットになったプランが人気。宿泊代金と一緒にまとめてふるさと納税枠で精算可能です。'
      }
    ],
    items: [
      {
        key: 'hachinohe_market',
        themeTitle: '青森県八戸市ふるさと納税：館鼻岸壁朝市・毎週日曜日に出現する日本最大級の巨大朝市',
        themeDesc: '全長数百メートルにわたって約300店が立ち並ぶ日本屈指のメガ朝市。八戸前沖サバの塩焼きや名物せんべい汁、新鮮なイカ刺しを早朝の潮風とともに楽しむ圧巻の港町体験です。'
      },
      {
        key: 'numazu_market',
        themeTitle: '静岡県沼津市ふるさと納税：沼津港市場直結・駿河湾深海魚とアジ干物浜焼きステイ',
        themeDesc: '富士山と駿河湾を望む沼津港。名物のアジの干物や生しらす・生桜えび、そして深海魚料理を提供する市場食堂街へ徒歩でアクセスできる快適ホテルで、海の恵みを堪能できます。'
      },
      {
        key: 'kochi_market',
        themeTitle: '高知県高知市ふるさと納税：ひろめ市場徒歩圏内・本場藁焼きカツオのタタキと土佐の酒',
        themeDesc: '高知の食文化が集結する「ひろめ市場」。職人が炎を上げて焼き上げる香ばしい藁焼きカツオの塩タタキや地酒を屋台スタイルで味わい、高知城近くの名宿でゆったりとくつろげます。'
      }
    ],
    crossLinks: [
      { title: '冬の味覚の王様×活蟹尽くし極上温泉宿ガイド', url: '/furusato-tax-winter-crab-gourmet-luxury-stay', desc: '城崎・三国・皆生のタグ付き松葉ガニ＆越前ガニ会席。' },
      { title: '朝食日本一受賞・究極の朝ごはんホテル×ふるさと納税完全ガイド', url: '/furusato-tax-award-winning-breakfast-gourmet-hotel-stay', desc: '函館・神戸・金沢のいくら盛り放題＆美食ビュッフェ。' },
      { title: 'ご当地グルメ宿を堪能する美食旅特集', url: '/furusato-tax-local-gourmet-inn-stay', desc: '高千穂牛・天然あなご・伊勢海老を味わう返礼クーポン旅。' }
    ]
  },
  {
    slug: 'furusato-tax-oceanfront-wave-sound-healing-stay',
    title: '絶景オーシャンフロント×波音ヒーリングの海宿ふるさと納税完全ガイド【2026年最新】全室オーシャンビューと潮騒露天風呂',
    desc: '窓一面に広がる青い海と夜空、寄せては返す波の音に癒やされる絶景オーシャンフロント宿！伊豆稲取、南房総白浜、沖縄読谷村など波打ち際の名門リゾートをふるさと納税宿泊クーポンでお得に予約する極上シーサイドステイ。',
    h1: '絶景オーシャンフロント×波音ヒーリングの海宿ふるさと納税ガイド',
    badge: 'オーシャンフロント・波音宿特集',
    leadTitle: '視界一面の水平線と心地よい潮騒のリズム。心身を深く浄化する海の特等席',
    leadDesc: '日常のノイズを忘れ、ただ波の音に耳を傾ける贅沢。海岸線沿いに建てられたオーシャンフロントの宿では、客室のテラスや露天風呂から水平線から昇る朝日や夕日、そして夜の月明かりが海面に描く「月の道」を眺めることができます。楽天ふるさと納税を活用すれば、プレミアムなオーシャンビュー客室や露天風呂付き客室も最大30%OFFで優雅に予約可能です。',
    merits: [
      {
        title: '全室オーシャンビュー＆窓を開ければ波音がBGMの癒やし空間',
        desc: '部屋に入った瞬間に広がるパノラマの海景色。ベッドに横たわりながら波音を聴いて眠りにつく「波音ヒーリング」は、都会の疲労を完全にリセットしてくれます。'
      },
      {
        title: '海と湯面が一体化する海岸沿いの露天風呂とミネラル豊富な美肌湯',
        desc: '波しぶきが届きそうなほど海に近い野天風呂や、海風が心地よい展望露天風呂。塩分を含んだ温泉は保温・保湿効果が高く、湯冷めしにくい極上の泉質です。'
      },
      {
        title: '伊勢海老やアワビ、金目鯛など海の幸を贅沢に味わう海鮮会席',
        desc: '水揚げされたばかりの金目鯛の姿煮や伊勢海老のお造り、踊り焼きアワビなど、海の最前線だからこそ味わえる圧倒的な鮮度の海鮮ディナーを堪能できます。'
      }
    ],
    items: [
      {
        key: 'inatori_ocean',
        themeTitle: '静岡県東伊豆町ふるさと納税：稲取温泉・相模灘の水平線を望む海岸露天風呂＆金目鯛',
        themeDesc: '伊豆七島を一望する東伊豆の名湯・稲取温泉。海沿いに建つ旅館では、客室から海原を一望でき、波打ち際の露天風呂や稲取名物の脂が乗った金目鯛の煮付けを存分に味わえます。'
      },
      {
        key: 'minamiboso_ocean',
        themeTitle: '千葉県南房総市ふるさと納税：南房総白浜・房総半島最南端の太平洋パノラマ＆潮騒リゾート',
        themeDesc: 'さえぎるもののない太平洋の大海原が目の前に広がる南房総白浜。白亜の野島埼灯台を望みながら、心地よい潮風を感じる温泉と地元房総の新鮮な魚介バイキングを満喫できます。'
      },
      {
        key: 'yomitan_ocean',
        themeTitle: '沖縄県読谷村ふるさと納税：読谷村・残波岬のコバルトブルー東シナ海一望ラグジュアリー',
        themeDesc: 'サトウキビ畑と美しい天然ビーチが広がる沖縄本島中部の読谷村。スペインコロニアル風の美しいリゾートホテルで、波音を聴きながら東シナ海に沈むサンセットを望む優雅な南国ステイが楽しめます。'
      }
    ],
    crossLinks: [
      { title: '絶景インフィニティ温泉×海空一体パノラマ露天宿', url: '/furusato-tax-infinity-onsen-sky-ocean-view-stay', desc: '海と空、そして湯面が一体化する開放感抜群のインフィニティ湯宿。' },
      { title: '大人の隠れ家・極上の離島リゾートステイ', url: '/furusato-tax-remote-island-luxury-resort-stay', desc: '屋久島・奄美大島・石垣島の自然遺産ヴィラ。' },
      { title: '冬の味覚の王様×活蟹尽くし極上温泉宿ガイド', url: '/furusato-tax-winter-crab-gourmet-luxury-stay', desc: '城崎・三国・皆生のタグ付き松葉ガニ＆越前ガニ会席。' }
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

console.log('All 4 Round 8 pages successfully created!');
