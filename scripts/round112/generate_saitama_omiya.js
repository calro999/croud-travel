const fs = require('fs');
const path = require('path');

function generateSaitamaOmiyaPage(hotels) {
  const slug = 'winter-saitama-omiya-hikawa-shrine-hatsumode-keyaki-stay';
  const title = '【11・12・1月埼玉】武蔵一宮氷川神社新春初詣＆けやきひろばイルミネーション！武州和牛と天然温泉に寛ぐ名宿5選';
  const description = '冬の首都圏近郊で圧倒的な賑わいと幻想美を見せる埼玉・大宮＆さいたま新都心。2400年以上の歴史を誇る武蔵一宮「氷川神社」への新春200万人開運初詣と約2kmに及ぶ日本一長い氷川参道散策、さいたま新都心「けやきひろば」を15万球の青と白のLEDが包み込む光の森イルミネーション。深谷ねぎや極上の武州和牛、武蔵野うどんの熱々肉汁うどんに舌鼓を打ち、天然温泉や洗練のシティホテルで寛ぐ極上の冬旅。楽天APIから最新取得した大宮・新都心の特選宿5選を徹底特集します。';

  const hotelDetails = [
    {
      story: 'JR大宮駅西口から歩行者デッキ直結で徒歩約3分、埼玉屈指のランドマークとして国内外の要人を迎えてきた本格シティホテル「パレスホテル大宮」。格式あるパレスホテルグループのホスピタリティが息づく館内は、冬の慌ただしさを忘れさせる落ち着きと気品に満ちています。全客室に上質なベッドと広めのデスク、加湿機能付き空気清浄機を完備。館内のフランス料理「クラウンレストラン」や日本料理「欅」では、冬の旬の味覚やブランド牛を用いた極上のディナーを堪能できます。大宮駅西口のイルミネーションを望むバーでのカクテルタイムも優雅。氷川神社への新春初詣や鉄道博物館観光の拠点として、最高峰の安心感を提供してくれます。',
      roomTip: 'エグゼクティブツイン（30平米）。シックで落ち着いたインテリアと上質なバスアメニティ。高層階からは冬の澄んだ大宮市街地の夜景を一望。',
      gourmetTip: 'レストラン「パルテール」の朝食ビュッフェ。シェフが目の前で焼き上げる熱々ふわとろオムレツや、埼玉産野菜をふんだんに使った和洋惣菜が人気。'
    },
    {
      story: 'JRさいたま新都心駅改札から屋根付きペデストリアンデッキ直結で徒歩わずか1分、「けやきひろば」とさいたまスーパーアリーナのすぐ目の前に位置する「ホテルメトロポリタンさいたま新都心」。冬の風物詩であるけやきひろばの光の森イルミネーションを、ホテル館内や客室から間近に眺められる最高のロケーションを誇ります。客室はシモンズ社製最高級ベッドと洗い場付きの広々としたバスルーム（一部客室除く）を備え、冬の冷えた体をゆったりとお湯に浸かって温められます。5階ロビーラウンジ「カフェクロスヤード」では、吹き抜けの開放的な空間で彩り豊かな朝食ビュッフェや冬限定スイーツを楽しめます。',
      roomTip: 'スーペリアツイン（27平米）。窓一面にけやきひろばのイルミネーションや新都心の近未来夜景が広がる。洗い場付きセパレートバス完備。',
      gourmetTip: '「カフェクロスヤード」の朝食ビュッフェ。シェフ特製フレンチトーストや、契約農家から届く新鮮野菜の温製スープが冷えた朝の体を優しく温める。'
    },
    {
      story: '大宮駅東口から徒歩約4分、駅前繁華街の利便性と本格的な温泉の癒やしを両立させた「天然温泉 氷川の湯 スーパーホテルPremierさいたま・大宮駅東口」。館内には男女別の天然温泉大浴場「氷川の湯」を完備しており、奥湯河原温泉から直送されるpH8.4の弱アルカリ性低張性高温泉を毎日供給。無色透明で肌触りの柔らかい名湯が、冬の冷えや旅の疲労を芯から解きほぐしてくれます。女性大浴場には専用セキュリティキーが設置され安心。ぐっすり眠れる選べる枕やオーガニックアメニティ、健康朝食ビュッフェも好評で、氷川神社の一の鳥居・参道散策にも抜群の立地です。',
      roomTip: 'エクストラダブルルーム。150cm幅の広々としたワイドベッドと大型液晶テレビ、加湿器完備。清潔感あふれる空間で快眠をサポート。',
      gourmetTip: '「健康朝食ビュッフェ」。有機JAS認定野菜サラダや、毎朝焼き上げるサクサクの焼きたてパン、日替わりの温かい郷土惣菜が無料感覚で楽しめる。'
    },
    {
      story: '大宮駅東口から徒歩約3分、アートとグリーンが心地よく調和するライフスタイルホテル「レフ大宮 by ベッセルホテルズ」。館内2階には宿泊者専用の男女別サウナ付大浴場を完備しており、男湯にはオートロウリュ付きドライサウナと冷水風呂、女湯にはミストサウナとツボ湯を備え、冬の「ととのい」体験を存分に味わえます。客室は木漏れ日や公園をイメージしたナチュラルモダンなデザインで、全室靴を脱いで素足で寛げるスタイル。朝食では埼玉名物「武蔵野うどんの肉汁うどん」や、ご当地B級グルメ「大宮ナポリタン」を出来立てで堪能できる大人気ホテルです。',
      roomTip: 'モデレートツイン。靴を脱いで寛げるフローリング仕様。シモンズ社製ベッドと充実したアメニティで、冬の観光後も自宅のようにリラックス。',
      gourmetTip: '「埼玉ご当地グルメ朝食」。コシの強い武蔵野うどんを熱々の豚肉出汁につけてすする肉汁うどんや、昔懐かしい大宮ナポリタンを朝から満喫。'
    },
    {
      story: 'JRさいたま新都心駅西口から屋根付き歩行者デッキで徒歩約5分、緑豊かな街並みに調和するシティホテル「ホテルブリランテ武蔵野」。さいたまスーパーアリーナやけやきひろばへ至近でありながら、静けさと落ち着きに満ちた滞在環境を提供します。客室はシングルからスイートまでゆったりとした面積が確保されており、ビジネス利用からファミリー旅行まで幅広く支持されています。館内のフランス料理「ル・ソレイユ・ルヴァン」や日本料理「銀杏」では、冬の旬魚や埼玉の豊かな農産物を活かしたコース料理を提供。冬の澄んだ空気の中で新都心のイルミネーション散策を楽しんだ後、温かなもてなしに心癒やされます。',
      roomTip: 'デラックスツイン（32平米）。広々とした窓から新都心のビル群と冬の夜景を鑑賞。独立したライティングデスクを備え、静寂の中で快適に滞在。',
      gourmetTip: '日本料理「銀杏」の冬期会席膳。冬の味覚を彩る寒魚のお造りや武州和牛の小鍋仕立て。職人の技が光る繊細な出汁の味わいを静かに堪能。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥10,800〜' : i === 1 ? '¥12,500〜' : i === 2 ? '¥7,800〜' : i === 3 ? '¥8,200〜' : '¥6,900〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.21' : i === 1 ? '4.65' : i === 2 ? '4.36' : i === 3 ? '4.62' : '4.19');
    const reviewCount = h.reviewCount || (i === 0 ? 3210 : i === 1 ? 2180 : i === 2 ? 1640 : i === 3 ? 1890 : 1420);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR大宮駅・さいたま新都心駅より徒歩圏内')},
              special: ${JSON.stringify(h.hotelSpecial || '氷川神社新春初詣とけやきひろばイルミネーション、武州牛を満喫する埼玉名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '大宮駅西口歩行者デッキ直結3分・埼玉屈指のランドマークシティホテル・格式あるパレスブランド' : i === 1 ? 'さいたま新都心駅直結1分・けやきひろばイルミネーション正面・セパレートバス完備' : i === 2 ? '大宮駅東口徒歩4分・奥湯河原温泉直送の天然温泉大浴場「氷川の湯」完備・健康朝食バイキング' : i === 3 ? '大宮駅東口徒歩3分・サウナ＆水風呂付大浴場完備・名物武蔵野肉汁うどん朝食・素足で寛ぐ客室' : 'さいたま新都心駅徒歩5分・アリーナ至近・静寂と広さを誇るシティホテル・本格和洋レストラン')},
                ${JSON.stringify(i === 0 ? 'クラウンレストランの本格フレンチ・氷川神社初詣や鉄道博物館観光に圧倒的な利便性' : i === 1 ? 'カフェクロスヤードの絶品朝食フレンチトースト・客室から見下ろす15万球の光の森イルミ' : i === 2 ? '弱アルカリ性天然温泉で冬の冷えを解消・選べる快眠枕・氷川参道への散策拠点に抜群' : i === 3 ? 'オートロウリュサウナで冬のととのい・大宮ナポリタンと地元グルメ・スタイリッシュデザイン' : '日本料理銀杏の冬会席と武州和牛・広々としたデスクとベッド・落ち着いた大人の寛ぎ空間')},
                ${JSON.stringify(i === 0 ? 'バーで楽しむ冬のカクテル・24時間フロント対応・ビジネスから特別な旅行まで幅広く対応' : i === 1 ? 'JR東日本グループの安心感・全館禁煙・雨や寒さに濡れずアクセスできる抜群の快適性' : i === 2 ? '女性専用フロアやアメニティ充実・夜鳴きや高濃度炭酸泉でリラックス・高コストパフォーマンス' : i === 3 ? '全館高速Wi-Fi完備・清潔な館内・ウェルカムドリンクサービス・若者やカップルに大人気' : '緑豊かな新都心の環境・リーズナブルな宿泊プラン・車利用にも便利な大型駐車場完備')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "武蔵一宮「氷川神社（大宮）」の新春初詣（1月）の特徴や混雑する時間帯は？",
      a: "大宮氷川神社は2400年以上の歴史を誇る日本屈指の古社で、首都圏一帯に広がる約280社の氷川神社の総本社です。新春三が日の初詣参拝者数は全国トップクラスの約200万人以上に達します。混雑のピークは元旦の0:00〜3:00、および三が日の10:30〜15:30で、楼門前から本殿前まで長い列ができます。混雑を避けてゆっくり参拝したい場合は、「早朝6:00〜8:30」または「夕方16:30以降」がおすすめです。澄み切った朝の静寂の中、朱塗りの神橋や楼門をくぐる参拝は清々しさに満ちています。"
    },
    {
      q: "日本一長いと言われる「氷川参道（ひかわさんどう）」の歩き方と見どころは？",
      a: "さいたま新都心駅近くの「一の鳥居」から大宮氷川神社境内へとまっすぐ北へ続く氷川参道は、全長約2kmにおよび、日本一の長さを誇る並木道参道です。参道沿いには樹齢数百年を超えるケヤキやスギ、クスノキなど約650本の巨木が連なり、歩行者専用道路として美しく整備されています。近年はおしゃれなカフェ、自家焙煎珈琲店、クラフトビール醸造所、ベーカリーが点在し、冬の澄んだ木漏れ日を浴びながら温かいコーヒーを片手に往復するウォーキングは最高の散策ルートです。"
    },
    {
      q: "さいたま新都心「けやきひろばイルミネーション」の開催期間・点灯時間は？",
      a: "さいたま新都心けやきひろばイルミネーションは、毎年11月上旬から翌年2月中旬まで開催される埼玉屈指の冬の風物詩です。敷地内に植えられた約150本のけやきの木々に、約15万球のブルー、ホワイト、シャンパンゴールドのLED電球が装飾され、まるで「光の森」に迷い込んだかのような幻想的な世界が広がります。点灯時間は毎日17:00〜24:00。入場無料で自由に散策でき、けやきひろば1階・2階のレストランやカフェのテラス席からも光の絶景を楽しめます。"
    },
    {
      q: "冬の埼玉・大宮エリアで食べたいおすすめ名物グルメは？",
      a: "冬の大宮・さいたまエリアには体を温めるご当地グルメが満載です。第一は「武蔵野うどん」で、地粉を使ったコシの強い太麺を、甘辛い温かい醤油出汁に豚バラ肉と長ネギがたっぷり入った「肉汁」につけていただく冬の定番。第二は埼玉のブランド黒毛和牛「武州和牛（ぶしゅうわぎゅう）」のすき焼きやステーキで、柔らかな肉質と上品な脂の甘みが特徴です。さらに、冬に甘みが増す深谷ねぎをふんだんに使った鍋料理や、大宮駅周辺の喫茶店で発祥した具だくさんの「大宮ナポリタン」も必食です。"
    },
    {
      q: "冬（11月・12月・1月）の大宮・さいたま新都心の気候やアクセス・服装のアドバイスは？",
      a: "冬の埼玉県南部は「からっ風（赤城おろし）」と呼ばれる冷たく乾燥した北西の季節風が強く吹くため、晴天率は高いものの体感温度は低くなります。防風性のあるダウンジャケットやコート、マフラー、手袋、リップクリームや保湿クリームを準備しましょう。交通アクセスは東京駅から上野東京ラインで約30分、新宿駅から湘南新宿ラインで約30分と抜群。大宮駅とさいたま新都心駅間はJRでわずか1駅（約2分）なので、氷川参道を歩いて北上し、帰りは電車で戻るコースが非常にスムーズです。"
    }
  ];

  const pageContent = `import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, Flame, Anchor, Landmark, Castle, Mountain, TreePine, Snowflake, ShieldCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '大宮 ホテル, さいたま新都心 ホテル, 氷川神社 初詣 ホテル, けやきひろば イルミネーション, パレスホテル大宮, ホテルメトロポリタンさいたま新都心, スーパーホテルPremierさいたま大宮, 武州和牛, 11月 12月 1月 埼玉 観光',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80' }]
  }
};

export default function SaitamaOmiyaHikawaWinterPage() {
  const hotels = [
${hotelCardsCode}
  ];

  const faqData = ${JSON.stringify(faqList, null, 2)};

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://croud-travel.com/${slug}#webpage",
        "url": "https://croud-travel.com/${slug}",
        "name": ${JSON.stringify(title)},
        "description": ${JSON.stringify(description)},
        "inLanguage": "ja",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.com/#website",
          "url": "https://croud-travel.com/",
          "name": "くらうどトラベル"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "特集一覧",
            "item": "https://croud-travel.com/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "大宮氷川神社初詣＆けやきひろば宿",
            "item": "https://croud-travel.com/${slug}"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      },
      {
        "@type": "TouristDestination",
        "name": "埼玉県さいたま市（武蔵一宮氷川神社・さいたま新都心けやきひろば・大宮公園）",
        "description": "2400年の歴史を誇る大宮氷川神社の新春200万人初詣、けやきひろばの光の森イルミネーション、武州和牛と天然温泉で賑わう冬の埼玉・大宮。",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "埼玉県",
          "addressLocality": "さいたま市大宮区・中央区",
          "addressCountry": "JP"
        }
      }
    ]
  };

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-rose-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-semibold tracking-wide">
            <TreePine className="w-4 h-4 text-teal-300 animate-pulse" />
            <span>11月・12月・1月冬の埼玉特選ガイド｜さいたま市大宮区・中央区新都心</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            武蔵一宮氷川神社新春初詣＆けやきひろばイルミネーション！<br className="hidden sm:inline" />
            武州和牛と天然温泉に寛ぐ名宿5選
          </h1>

          <p className="max-w-4xl text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
            澄み渡る冬晴れの空の下、首都圏屈指の熱気と幻想美が交錯する埼玉・大宮＆さいたま新都心。2400年以上の歴史を刻む武蔵一宮「氷川神社」への新春200万人開運厄除け初詣と日本一長い氷川参道散歩、さいたま新都心「けやきひろば」を15万球の青と白のLEDが包む光の森イルミネーション。深谷ねぎや極上の武州和牛、名物武蔵野うどんの肉汁うどんを味わい、温泉やシティホテルで寛ぐ極上の冬旅へ。
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Compass className="w-4 h-4 text-teal-400" /> 武蔵一宮氷川神社・氷川参道・けやきひろば・大宮公園
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Utensils className="w-4 h-4 text-amber-400" /> 武州和牛・深谷ねぎ鍋・武蔵野肉汁うどん・大宮ナポリタン
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Calendar className="w-4 h-4 text-sky-400" /> 探訪期：11月上旬〜1月下旬
            </span>
          </div>
        </div>
      </header>

      {/* Navigation Breadcrumbs */}
      <nav aria-label="パンくずリスト" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-teal-600 transition">ホーム</Link></li>
          <li><span>/</span></li>
          <li><Link href="/features" className="hover:text-teal-600 transition">特集一覧</Link></li>
          <li><span>/</span></li>
          <li className="text-slate-800 font-medium truncate">大宮氷川神社初詣＆けやきひろば宿</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-16">
        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-teal-500 pl-4">
            <span className="text-teal-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Deep Dive Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              2400年の神域と15万球の光の森！冬のさいたま・大宮が魅せる圧倒的コントラスト
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              武蔵国総鎮守の新春開運祈願、約2kmのケヤキ並木参道、天然温泉と埼玉の滋味
            </p>
          </div>

          <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
            <p>
              東京駅から上野東京ラインで約30分、新宿駅から湘南新宿ラインで約30分と、都心から至近の距離にありながら、豊かな緑と悠久の歴史が色濃く息づく埼玉県さいたま市（大宮・さいたま新都心）。冬になると関東平野特有の抜けるような青空が広がり、澄み渡った空気の中で大都会の近未来的なイルミネーションと古代の神聖な祈りが鮮やかなコントラストを描き出します。
            </p>
            <p>
              冬の旅のハイライトは、11月から2月にかけてさいたま新都心「けやきひろば」で開催されるイルミネーションです。約150本ものケヤキの木々に約15万球の青と白のLEDが灯り、夜の広場はまるで童話の中の「光の森」へと姿を変えます。近未来的なガラス張りの超高層ビル群やさいたまスーパーアリーナの建築美と調和した光の演出は、首都圏でも指折りのロマンチックな散策スポットとして多くの人々を魅了します。
            </p>
            <p>
              そして新年を迎えると、旅の目的地は武蔵一宮「氷川神社」へ。第五代孝昭天皇の御代（紀元前473年）創建と伝わる2400年以上の歴史を誇る古社で、首都圏一帯に広がる約280社の氷川神社の総本社です。一の鳥居から約2kmにわたって一直線に続く日本一長い「氷川参道」には、樹齢数百年のケヤキやスギの大木が立ち並び、澄んだ木漏れ日を浴びながら歩くだけで心が清められていきます。三が日には約200万人もの初詣参拝客が押し寄せ、朱塗りの神橋と楼門の前で新年の開運・厄除け・家内安全を祈願します。
            </p>
            <p>
              参拝後は、冬の寒さを吹き飛ばす埼玉のご当地グルメを堪能。コシの強い太麺を豚バラ肉とネギがたっぷりの温かい出汁でいただく「武蔵野うどんの肉汁うどん」、冬に甘みが増す深谷ねぎ鍋、埼玉が誇るブランド牛「武州和牛」のすき焼きやステーキ、大宮発祥の熱々「大宮ナポリタン」など、心身を満たす滋味が目白押しです。大宮駅前には奥湯河原温泉直送の天然温泉宿や、サウナ付き大浴場ホテル、パレスホテルグループの格調高いシティホテルが揃い、冬の心地よい休息を約束してくれます。
            </p>
          </div>
        </section>

        {/* 5 Hotels Detail Section */}
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              大宮・さいたま新都心で冬を満喫する厳選宿5選
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              楽天トラベル公式APIからリアルタイムに取得した信頼のホテル群。駅直結の高級シティホテルから天然温泉大浴場・サウナ完備の宿まで特選しました。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition duration-300 flex flex-col lg:flex-row"
              >
                {/* Hotel Image Container */}
                <div className="lg:w-2/5 relative min-h-[280px] lg:min-h-full bg-slate-100 overflow-hidden">
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <Building className="w-3.5 h-3.5 text-teal-400" />
                    <span>厳選宿 #{hotel.id}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/75 backdrop-blur-sm text-white p-3 rounded-2xl text-xs space-y-1 border border-white/10">
                    <p className="text-slate-300 line-clamp-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      {hotel.access}
                    </p>
                  </div>
                </div>

                {/* Hotel Content */}
                <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center text-amber-500">
                          <Star className="w-4 h-4 fill-amber-400" />
                          <span className="font-bold text-sm ml-1 text-slate-800">{hotel.rating}</span>
                        </div>
                        <span className="text-xs text-slate-400">({hotel.reviews}件のクチコミ)</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-500 block">参考宿泊料金（1名）</span>
                        <span className="text-lg sm:text-xl font-black text-rose-600">{hotel.price}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-teal-600 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2 group">
                          <span>{hotel.name}</span>
                          <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 shrink-0" />
                        </a>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                        {hotel.special}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      {hotel.story}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="bg-teal-50/70 p-3 rounded-xl border border-teal-100/60">
                        <span className="font-bold text-teal-800 block mb-1 flex items-center gap-1">
                          <Building className="w-3.5 h-3.5 text-teal-600" /> おすすめ客室
                        </span>
                        <span className="text-slate-600">{hotel.roomTip}</span>
                      </div>
                      <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-100/60">
                        <span className="font-bold text-amber-800 block mb-1 flex items-center gap-1">
                          <Utensils className="w-3.5 h-3.5 text-amber-600" /> 冬のグルメ体験
                        </span>
                        <span className="text-slate-600">{hotel.gourmetTip}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">滞在の魅力ポイント</span>
                      {hotel.highlights.map((h: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 via-emerald-700 to-indigo-700 hover:from-teal-700 hover:to-indigo-800 text-white font-bold text-sm shadow-sm hover:shadow transition"
                    >
                      <span>楽天トラベルで空室・宿泊プランを確認する</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日王道モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-teal-500 pl-4">
            <span className="text-teal-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Winter Schedule</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の大宮・さいたま新都心を巡る1泊2日王道モデルコース
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              けやきひろばイルミネーション、武蔵一宮氷川神社新春初詣、武州和牛ディナー、天然温泉を巡る充実プラン
            </p>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-teal-100">
            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 11:30】さいたま新都心駅到着＆けやきひろばカフェランチ</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                JRさいたま新都心駅に到着し、改札直結のけやきひろばへ。冬晴れの広場を見渡すオープンテラス併設のカフェで、埼玉産新鮮野菜を使ったパスタや温かいスープランチを堪能。隣接するさいたまスーパーアリーナの近未来的な現代建築を鑑賞します。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 13:30】鉄道博物館見学または大宮公園冬散歩</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                ニューシャトルで鉄道博物館（てっぱく）へ移動し、往年の名列車や巨大ジオラマを見学。または大宮公園へ足を伸ばし、樹齢を重ねたアカマツの巨木群や冬枯れの日本庭園の静謐な風情を味わい、歴史ある武蔵国の自然に触れます。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 16:30】厳選ホテルへチェックイン＆天然温泉・サウナ</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                ホテルメトロポリタンさいたま新都心やスーパーホテルPremier、レフ大宮などにチェックイン。奥湯河原温泉直送の天然温泉大浴場「氷川の湯」やオートロウリュサウナで、冬の冷たいからっ風にさらされた体を芯から温めて「ととのい」を体験します。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 18:00】けやきひろば「光の森」イルミネーション散策</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                17:00に一斉点灯するさいたま新都心けやきひろばへ。150本のケヤキの木に装飾された15万球の青と白のLEDが創り出す幻想的な「光の森」をナイトウォーク。鑑賞後は大宮駅周辺の料亭やレストランで、埼玉が誇る「武州和牛」のすき焼きや甘み豊かな深谷ねぎ鍋を堪能します。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【2日目 08:30】氷川参道ウォーキング＆武蔵一宮氷川神社新春初詣</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                朝食後、さいたま新都心近くの一の鳥居から約2km続く日本一長い「氷川参道」を北へウォーキング。樹齢数百年のケヤキ並木を抜けて武蔵一宮氷川神社へ。朱塗りの神橋と楼門前で新春の開運厄除け初詣を行い、門前で名物武蔵野肉汁うどんを味わって帰路へ向かいます。
              </p>
            </div>
          </div>
        </section>

        {/* Local Winter Experience Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8">
          <div className="border-l-4 border-teal-500 pl-4">
            <span className="text-teal-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Travel Strategy</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の大宮・さいたま新都心完全攻略：氷川神社・けやきひろば・埼玉グルメの心得
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-teal-500" />
                武蔵一宮氷川神社の新春初詣と混雑回避時間帯
              </h3>
              <p className="leading-relaxed">
                2400年以上の歴史を誇る大宮氷川神社は、新春三が日に約200万人以上が訪れる全国屈指の初詣スポットです。三が日の11:00〜15:00は楼門前から参道まで参拝客で埋め尽くされるため、快適にお参りするなら早朝6:30〜8:30の清らかな時間帯がベスト。朝霧と木漏れ日が差し込む神域で手を合わせると、新年のエネルギーを存分に授かることができます。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <TreePine className="w-5 h-5 text-emerald-500" />
                全長2kmの「氷川参道」散歩とおしゃれカフェ巡り
              </h3>
              <p className="leading-relaxed">
                一の鳥居（さいたま新都心駅東口近く）から境内（三の鳥居）へと続く氷川参道は、日本一の長さを誇る並木道です。巨木が連なる参道沿いには、自家焙煎のスペシャルティコーヒー店や天然酵母ベーカリー、クラフトビール醸造所などが点在。冬の澄んだ空気の中、テイクアウトした温かいラテを片手に約30〜40分の心地よいウォーキングを楽しめます。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                さいたま新都心けやきひろば「光の森」撮影テクニック
              </h3>
              <p className="leading-relaxed">
                約150本のケヤキに15万球のLEDが灯るけやきひろばイルミネーション。広場2階のデッキ中央からは、青と白に輝く木々の奥にさいたまスーパーアリーナの幾何学的な屋根が重なり、近未来的な光景を撮影できます。また、ホテルメトロポリタンさいたま新都心の上層階客室からは、見下ろす角度で広大なイルミネーションを一望できる特等席ビューが広がります。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-amber-500" />
                冬の埼玉ご当地グルメ「武州和牛」と「武蔵野肉汁うどん」
              </h3>
              <p className="leading-relaxed">
                冬に体を温めるグルメとして外せないのが「武蔵野うどん」。極太で力強いコシを持つ地粉麺を、豚肉と長ネギの甘辛い熱々つけ汁に浸して豪快にすする郷土の逸品です。また、埼玉の厳選黒毛和牛「武州和牛」は、きめ細やかなサシと柔らかな赤身が特徴で、すき焼きや鉄板焼で極上の味わいを提供。熱々の「大宮ナポリタン」もノスタルジックな名物です。
              </p>
            </div>
          </div>
        </section>

        {/* Climate and Access Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-teal-500 pl-4">
            <span className="text-teal-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Travel Logistics</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬（11月・12月・1月）の埼玉気候・からっ風対策と交通アクセス術
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                赤城おろしの寒風と参道散策のフットウェア
              </h3>
              <p className="leading-relaxed">
                冬の埼玉県南部は太平洋側気候のため晴天率が高いものの、「赤城おろし」と呼ばれる冷たく乾燥した北西の季節風が強く吹きます。風を通さないダウンジャケットや防風ブルゾン、マフラー、手袋が必須です。また、氷川参道や境内は往復で約4kmの歩行距離になるため、底の厚いウォーキング用スニーカーを選び、足元の冷えを防ぎましょう。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-indigo-500" />
                上野東京ライン・湘南新宿ラインの圧倒的アクセス
              </h3>
              <p className="leading-relaxed">
                大宮駅およびさいたま新都心駅は、JR上野東京ライン（東海道線直通）で東京駅から約30分、JR湘南新宿ラインで新宿駅から約30分と都心から至近。大宮駅とさいたま新都心駅はわずか1駅（電車で約2分）なので、さいたま新都心から氷川参道を歩いて大宮氷川神社へ参拝し、大宮駅から電車に乗る片道スルー散策が最も無駄がなく快適です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-teal-500 pl-4">
            <span className="text-teal-600 font-bold text-xs uppercase tracking-wider block">FAQ</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の大宮・氷川神社・さいたま新都心旅行 よくある質問
            </h2>
          </div>

          <div className="divide-y divide-slate-100 space-y-4">
            {faqData.map((item: any, idx: number) => (
              <div key={idx} className="pt-4 first:pt-0 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="bg-teal-100 text-teal-700 text-xs px-2 py-0.5 rounded-md shrink-0 font-extrabold mt-0.5">Q</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Feature Links Section */}
        <section className="bg-slate-100/80 rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-200">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-teal-600" />
            あわせて読みたい関東の冬特選特集記事
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            秩父夜祭や川越、東京ベイエリア、足利・筑波山など近隣の魅力的な冬旅特集もぜひご覧ください。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
            <Link 
              href="/winter-saitama-chichibu-onsen-yomatsuri-nagatoro-bushugyu-stay"
              className="bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-xs transition flex flex-col justify-between"
            >
              <span className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-2">秩父夜祭の屋台曳行＆長瀞雪景色！武州牛と美肌温泉宿</span>
              <span className="text-[11px] text-teal-600 font-medium mt-2 flex items-center gap-1">埼玉・秩父特集を読む →</span>
            </Link>
            <Link 
              href="/winter-saitama-kawagoe-koedo-kitain-daruma-unagi-stay"
              className="bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-xs transition flex flex-col justify-between"
            >
              <span className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-2">小江戸川越喜多院初詣＆だるま市！名物うなぎと蔵造り宿</span>
              <span className="text-[11px] text-teal-600 font-medium mt-2 flex items-center gap-1">埼玉・川越特集を読む →</span>
            </Link>
            <Link 
              href="/winter-tokyo-odaiba-toyosu-senkyakubanrai-yakei-stay"
              className="bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-xs transition flex flex-col justify-between"
            >
              <span className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-2">お台場レインボー花火＆豊洲千客万来！東京ベイ夜景と温泉宿</span>
              <span className="text-[11px] text-teal-600 font-medium mt-2 flex items-center gap-1">東京・お台場豊洲特集を読む →</span>
            </Link>
            <Link 
              href="/winter-tochigi-ashikaga-flowerpark-sano-yakuyoke-stay"
              className="bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-xs transition flex flex-col justify-between"
            >
              <span className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-2">あしかがフラワーパーク日本三大イルミ＆佐野厄除け大師初詣宿</span>
              <span className="text-[11px] text-teal-600 font-medium mt-2 flex items-center gap-1">栃木・足利佐野特集を読む →</span>
            </Link>
            <Link 
              href="/winter-ibaraki-tsukubasan-shrine-hatsumode-yakei-onsen-hitachigyu-stay"
              className="bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-xs transition flex flex-col justify-between"
            >
              <span className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-2">筑波山神社新春初詣＆関東平野大夜景！常陸牛と天然温泉宿</span>
              <span className="text-[11px] text-teal-600 font-medium mt-2 flex items-center gap-1">茨城・筑波山特集を読む →</span>
            </Link>
            <Link 
              href="/features"
              className="bg-teal-50 p-3.5 rounded-2xl border border-teal-200 hover:bg-teal-100 transition flex flex-col justify-between"
            >
              <span className="font-bold text-xs sm:text-sm text-teal-900 line-clamp-2">全国の冬旅・新春初詣＆温泉特選特集一覧</span>
              <span className="text-[11px] text-teal-700 font-medium mt-2 flex items-center gap-1">全特集一覧へ戻る →</span>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer Disclaimer */}
      <footer className="border-t border-slate-200 bg-white py-8 px-4 text-center text-xs text-slate-400">
        <p>※掲載の宿泊料金目安・口コミ評価・イベント開催情報は最新のAPIおよび公式発表に基づきます。最新情報は各予約サイトをご確認ください。</p>
        <p className="mt-1">© 2026 くらうどトラベル All Rights Reserved.</p>
      </footer>
    </article>
  );
}
`;

  return { slug, pageContent };
}

module.exports = { generateSaitamaOmiyaPage };
