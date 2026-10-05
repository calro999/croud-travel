const fs = require('fs');
const path = require('path');

function generateHokkaidoKushiroPage(hotels) {
  const slug = 'winter-hokkaido-kushiro-tancho-crane-snow-nusamaibashi-sunset-robata-stay';
  const title = '【11・12・1月北海道】雪原に舞う特別天然記念物「丹頂鶴」と世界三大夕日「幣舞橋」！炭火炉端焼き・冬の真だち＆釧路天然温泉名宿5選';
  const description = '道東の冬が織りなす白銀の詩情・釧路の11〜1月冬紀行。純白の雪原に優美な翼を広げる特別天然記念物「タンチョウ（丹頂鶴）」の求愛ダンス、世界三大夕日と称賛される幣舞橋のドラマチックな真紅の黄昏。氷点下の静寂に包まれる釧路湿原の霧氷パノラマ。北の海が育む冬の至宝「真だち（タラの白子）」や脂ののったメンメ（キンキ）、炭火の煙が立ち上る元祖「釧路炉端焼き」、和商市場の名物勝手丼。冷えた身体を包み込む展望天然温泉と極上名宿5選を徹底紹介。';

  const hotelDetails = [
    {
      story: '世界三大夕日の名所「幣舞橋」のたもとに位置し、最上階の天然温泉展望大浴場から釧路川と夕日・夜景を一望できる「天然温泉 幣舞の湯 ドーミーインＰＲＥＭＩＵＭ釧路（旧：天然温泉 幣舞の湯 ラビスタ釧路川）」。最上階13階の露天風呂は自家源泉の茶褐色天然温泉で、真冬の氷点下の冷気を浴びながら星空と釧路港の灯りを望む至福の温まりを提供します。名物の朝食バイキングでは、いくらかけ放題をはじめ、サーモンやホタテ、甘エビなど豪快な海鮮勝手丼が朝から食べ放題。夜鳴きそばの無料サービスも冬の滞在に嬉しいポイントです。',
      roomTip: 'リバービュー和洋室またはダブル。窓から釧路川の流れと幣舞橋のライトアップ、行き交う漁船のシルエットを望む絶景ルーム。',
      gourmetTip: '「名物いくらかけ放題海鮮朝食」。自家製醤油漬けいくらを熱々ご飯に山盛りにし、旬の海鮮をたっぷりのせた究極の朝丼。'
    },
    {
      story: 'JR釧路駅のバスターミナル隣接という抜群のアクセス性を誇り、鶴居村の丹頂鶴見学や釧路湿原観光の起点として最適な「天然温泉 白鳥の湯 スーパーホテル釧路駅前」。館内には無色透明で保温効果の高い天然温泉「白鳥の湯」を完備し、長距離移動や冬の雪原散策で冷え切った身体を手足を伸ばして癒やすことができます。毎朝焼き上げるサクサクのクロワッサンや地産地消の健康和洋朝食ビュッフェが無料で提供され、清潔で合理的な客室設計と快眠枕の選定サービスが冬のアクティブな旅を力強くサポートします。',
      roomTip: 'エクストラダブルまたはスーパールーム。防音性と断熱性に優れた静かな空間で、冬の厳しい寒さを忘れて深い安眠を得られます。',
      gourmetTip: '「無料健康朝食バイキング＆駅前炉端」。朝は焼きたてパンと温かいスープ、夜は駅前や末広町の炉端焼き店で炭火焼き魚を満喫。'
    },
    {
      story: '釧路川河畔、フィッシャーマンズワーフMOOに隣接し、道東随一の国際的格式とハイグレードなホスピタリティで迎える「ＡＮＡクラウンプラザホテル釧路 ｂｙ ＩＨＧ」。釧路のランドマークとして優美な外観を誇り、広々とした客室からは冬の釧路港や太平洋の広大な水平線、夕暮れ時には世界三大夕日のパノラマを一望できます。館内レストランでは、釧路港直送のメンメ（キンキ）や冬の真だち、道東産黒毛和牛など最高峰の食材を取り入れた和食・洋食のディナーコースを提供。大切な記念日や上質な大人の冬旅に選ばれ続けています。',
      roomTip: 'プレミアムハーバービューツイン。夕暮れ時には部屋にいながらにして世界三大夕日の劇的な茜色のグラデーションを鑑賞できます。',
      gourmetTip: '「冬の道東ガストロノミー」。脂ののったメンメの煮付けや真だちのポワレ、北海道産牛フィレ肉など贅を尽くしたディナー。'
    },
    {
      story: '繁華街・末広町の中心に位置し、最上階に釧路市街を一望する天然温泉展望大浴場と開放的な露天風呂を誇る「ホテルグローバルビュー釧路 天然温泉 天空の湯（旧天然温泉 ホテルパコ釧路）」。自家源泉から湧き出る強塩泉の天然温泉は、身体の芯まで熱が染み渡り湯冷めしにくいと評判です。サウナや水風呂、ラウンジも完備され、冬の旅の疲れを完璧にリフレッシュ。周辺には釧路名物の炉端焼き発祥の店や老舗居酒屋が徒歩数分圏内にひしめき、夜の釧路グルメ巡りを存分に堪能できる最高の拠点です。',
      roomTip: 'プレミアムダブルまたはツイン。落ち着いたシックなインテリアと大型ベッドで、冬の夜長をゆったり寛ぐことができます。',
      gourmetTip: '「天空の湯＆末広町老舗炉端」。湯上がりに徒歩数分の炉端焼き店へ。炭火のパチパチとはぜる音とともに味わう熱々の魚介と地酒「福司」。'
    },
    {
      story: 'JR釧路駅から徒歩わずか2分、駅前大通に面した好立地に位置するスタイリッシュホテル「コンフォートホテル釧路」。全室完全禁煙のクリーンな館内には、快眠を追求したチョイスピローや加湿空気清浄機を完備。冬の乾燥した空気から喉と肌を守り、快適な睡眠環境を提供します。無料の朝食ビュッフェでは、季節のスープやスムージー、温かいピラフなどが揃い、早朝から鶴居村へ丹頂鶴の撮影に出かける旅行者にも大好評。手頃な料金と安定したクオリティで一人旅や冬の撮影旅行に絶大な人気を誇ります。',
      roomTip: 'ダブルエコノミーまたはツインエコノミー。機能的なワイドデスクと高速Wi-Fiを備え、撮影データの整理や旅の記録にも最適。',
      gourmetTip: '「無料カラダ想い朝食」。冬の朝に嬉しい熱々ミネストローネや日替わりピラフ、挽きたてコーヒーで活力満点のスタート。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥10,500〜' : i === 1 ? '¥6,200〜' : i === 2 ? '¥13,500〜' : i === 3 ? '¥7,800〜' : '¥5,500〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.42' : i === 1 ? '4.14' : i === 2 ? '4.08' : i === 3 ? '4.25' : '3.98');
    const reviewCount = h.reviewCount || (i === 0 ? 3200 : i === 1 ? 1450 : i === 2 ? 1860 : i === 3 ? 2100 : 980);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR根室本線釧路駅より徒歩約2〜15分、たんちょう釧路空港より連絡バスで約45〜55分、道東自動車道阿寒ICより約35分')},
              special: ${JSON.stringify(h.hotelSpecial || '雪原の丹頂鶴と世界三大夕日・幣舞橋、元祖炉端焼きと冬の真だち・天然温泉を堪能する名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '幣舞橋のたもと・最上階13階の天然温泉展望露天風呂と朝食いくらかけ放題の贅沢ステイ' : i === 1 ? 'JR釧路駅バスターミナル直結・天然温泉「白鳥の湯」と焼き立てパン無料健康朝食' : i === 2 ? '釧路港を一望するハイグレードホテル・世界三大夕日を望む客室と道東ガストロノミー' : i === 3 ? '繁華街末広町の中心・最上階天然温泉「天空の湯」と老舗炉端焼き店巡りの最高の拠点' : 'JR釧路駅徒歩2分・快眠設計客室と無料朝食ビュッフェで丹頂鶴撮影の拠点に最適')} ,
                ${JSON.stringify(i === 0 ? '茶褐色の自家源泉天然温泉・氷点下の外気を感じながら釧路港の夜景を望む極上の湯浴み' : i === 1 ? '鶴居村や釧路湿原へのアクセス抜群・防音性と断熱性に優れた快適な睡眠環境' : i === 2 ? 'フィッシャーマンズワーフMOO隣接・特別な記念日や夫婦旅に選ばれる洗練のおもてなし' : i === 3 ? '強塩泉の身体が芯から温まる美肌湯・サウナ完備で真冬の冷えた身体を完全リセット' : '加湿空気清浄機完備・冬の乾燥対策も万全でコストパフォーマンス抜群の安心ステイ')} ,
                ${JSON.stringify(i === 0 ? '名物夜鳴きそば無料・和商市場の勝手丼や炉端焼き名店へも徒歩圏内の抜群の立地' : i === 1 ? '焼き立てクロワッサンと地産和洋惣菜・朝早くから出発する冬のアクティブ旅を応援' : i === 2 ? 'バーラウンジから望む釧路川の夕暮れ・最高級メンメ（キンキ）や道東黒毛和牛ディナー' : i === 3 ? '炭火炉端焼き発祥の地・パチパチとはぜる音と煙に包まれる昭和レトロな夜を満喫' : 'ワイドデスク＆高速Wi-Fi・冬の道東一人旅やフォトツーリズムにも強い味方')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "冬（11・12・1月）の特別天然記念物「丹頂鶴（タンチョウ）」の撮影・見学ポイントと見頃は？",
      a: "タンチョウはアイヌ語で「サルルンカムイ（湿原の神）」と呼ばれる日本の特別天然記念物です。11月から1月にかけては、越冬のため釧路湿原周辺の給餌場に集まる時期で、純白の雪原に赤い頭頂と黒い尾羽が鮮やかに映えるベストシーズンを迎えます。代表的な観察スポットは鶴居村の「鶴見台」や「伊藤サンクチュアリ」、阿寒町の「阿寒国際ツルセンター【グルス】」です。特に求愛ダンスが見られる1月は羽を大きく広げて跳びはねる優美な姿が観察できます。早朝はマイナス15度以下になるため、極寒地用の完全防寒具（厚手ダウン、防寒靴、ニット帽、カイロ、カメラ予備バッテリー）をご用意ください。"
    },
    {
      q: "「世界三大夕日」と称賛される釧路「幣舞橋（ぬさまいばし）」の冬の魅力は？",
      a: "釧路港の夕日は、バリ島、マニラ湾と並び「世界三大夕日」の一つとして世界中の船乗りたちに讃えられてきました。春から夏は海霧（じり）が発生しやすい釧路ですが、11月〜1月の冬期は空気が極限まで澄み渡り、夕日の晴天率が最も高くなります。釧路川の河口に架かる幣舞橋の欄干には、佐藤忠良ら日本を代表する彫刻家が手掛けた「四季の像」が佇み、広大な太平洋の水平線へと沈みゆく巨大な真紅の夕日とブロンズ像のシルエットは、息をのむほどドラマチックな光景を創り出します。"
    },
    {
      q: "冬の釧路が誇る名物グルメ「炉端焼き」「真だち」「勝手丼」の美味しさの秘密は？",
      a: "釧路は日本の「炉端焼き」発祥の地です。昭和初期に始まった炉端焼きは、囲炉裏の炭火で熟練の焼き手がメンメ（キンキ）、八角、本ししゃも、ホッケなどの極上魚介を絶妙な火加減で焼き上げ、遠赤外線で皮はパリッと身はふっくらジューシーに仕上がります。また冬の釧路の真骨頂が「真だち（スケトウダラの白子）」。獲れたての鮮度抜群の真だちは臭みが一切なく、湯引きポン酢や天ぷら、お味噌汁で味わうと濃厚でクリーミーな旨味が口いっぱいに広がります。和商市場では、白米の丼を持って市場内の各店舗を巡り、好みの刺身を一切れずつ乗せて作る「勝手丼」が朝食の定番です。"
    },
    {
      q: "釧路市街に湧く「天然温泉」の泉質と冬の楽しみ方は？",
      a: "釧路駅周辺や釧路川沿いの宿泊施設には自家源泉を持つ天然温泉大浴場が点在しています。泉質はナトリウム・カルシウム-塩化物泉（強塩泉）が多く、茶褐色の濁り湯や透明な湯など施設ごとに特徴があります。塩分を多量に含むため保温効果が極めて高く、氷点下の冷気にさらされた身体の芯まで熱が届き、湯上がりのポカポカ感が長く持続します。最上階の展望露天風呂から冬の満天の星空や釧路港の夜景を眺める湯浴みは、道東の冬の最高の癒やしです。"
    },
    {
      q: "札幌・東京から釧路への冬のアクセスと冬道運転の注意点は？",
      a: "東京（羽田）からは「たんちょう釧路空港」まで飛行機で直行約1時間35分。空港から釧路市内（釧路駅・幣舞橋）までは連絡バスで約45〜55分と非常に快適です。札幌からはJR特急「おおぞら」で約4時間〜4時間20分です。冬の道東は雪雲が山脈に遮られるため比較的晴天が多いですが、気温が氷点下10度〜20度近くまで冷え込むため、路面は圧雪やブラックアイスバーン（凍結）状態になります。車を運転する場合はスタッドレスタイヤ必須で、急ブレーキ・急ハンドルを避け、スピードを落とした慎重な運転を心がけてください。"
    }
  ];

  const pageContent = `import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '丹頂鶴 冬, 鶴居村 タンチョウ, 幣舞橋 夕日, 釧路 炉端焼き, 真だち 白子, ラビスタ釧路川, ドーミーイン釧路, 釧路 天然温泉, 勝手丼 和商市場, 道東 冬旅行',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '雪原に舞う特別天然記念物丹頂鶴と世界三大夕日の幣舞橋'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    images: ['https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export const dynamic = 'force-static';

export default function HokkaidoKushiroWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": ${JSON.stringify(title)},
    "description": ${JSON.stringify(description)},
    "image": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&h=630&q=80",
    "datePublished": "2026-10-05T18:00:00+09:00",
    "dateModified": "2026-10-05T18:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "旅宿クラウド 編集部",
      "url": "https://croud-travel.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.com/${slug}"
    }
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://croud-travel.com"
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
        "name": "北海道・釧路＆鶴居 冬特集",
        "item": "https://croud-travel.com/${slug}"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
${faqList.map(item => `      {
        "@type": "Question",
        "name": ${JSON.stringify(item.q)},
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ${JSON.stringify(item.a)}
        }
      }`).join(',\n')}
    ]
  };

  const hotelsData = [
${hotelCardsCode}
  ];

  const faqsData = [
${faqList.map(item => `    {
      q: ${JSON.stringify(item.q)},
      a: ${JSON.stringify(item.a)}
    }`).join(",\n")}
  ];

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-sky-950 via-slate-900 to-slate-800 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-sky-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Snowflake className="w-4 h-4 text-sky-300" />
            <span>北海道・道東 釧路湿原 冬の特別紀行（11月・12月・1月）</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 font-journal-serif">
            雪原に舞う特別天然記念物「丹頂鶴」と世界三大夕日「幣舞橋」<br className="hidden md:inline" />
            炭火炉端焼き・冬の真だち＆釧路天然温泉名宿5選
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mb-6">
            氷点下の澄み切った空気が広大な釧路湿原を包み込む11〜1月の道東紀行。純白の雪原に優美な翼を広げて舞う特別天然記念物「タンチョウ（丹頂鶴）」の求愛ダンス、太平洋と釧路川の境を真紅に染め上げる世界三大夕日・幣舞橋のドラマチックな黄昏。北の海が育む冬の至宝「真だち（タラの白子）」や脂ののったメンメ（キンキ）、炭火の香ばしい煙が立ち上る元祖「釧路炉端焼き」、和商市場の勝手丼。冷え切った身体を温もりで満たす最上階の展望天然温泉と厳選名宿へご案内します。
          </p>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-slate-200">
            <span className="bg-sky-900/60 border border-sky-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Snowflake className="w-4 h-4 text-sky-400" /> 丹頂鶴（特別天然記念物・雪原の求愛ダンス）
            </span>
            <span className="bg-sky-900/60 border border-sky-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Sunrise className="w-4 h-4 text-sky-400" /> 幣舞橋（世界三大夕日・真紅のドラマチック黄昏）
            </span>
            <span className="bg-sky-900/60 border border-sky-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-sky-400" /> 元祖炭火炉端焼き＆冬の濃厚真だち・天然温泉
            </span>
          </div>
        </div>
      </header>

      {/* Summary Box */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-sky-600" />
            11・12・1月の釧路・道東 冬旅ハイライト
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div className="space-y-2 border-l-2 border-sky-500 pl-4">
              <h3 className="font-bold text-slate-900">雪原に舞う丹頂鶴の気品</h3>
              <p className="text-xs md:text-sm leading-relaxed">
                鶴居村や阿寒町の給餌場に集うタンチョウ。白銀の雪景色を背景に、頭頂の鮮烈な赤と黒い尾羽を揺らして求愛ダンスを踊る姿は、息をのむほど優美で神聖な冬の風物詩です。
              </p>
            </div>
            <div className="space-y-2 border-l-2 border-sky-500 pl-4">
              <h3 className="font-bold text-slate-900">世界三大夕日・幣舞橋の奇跡</h3>
              <p className="text-xs md:text-sm leading-relaxed">
                バリ島、マニラ湾と並び称される幣舞橋の夕日。冬は海霧が消えて晴天率が最も高まり、釧路川と太平洋の水平線が茜色から深紅へと移ろう奇跡のグラデーションを見せてくれます。
              </p>
            </div>
            <div className="space-y-2 border-l-2 border-sky-500 pl-4">
              <h3 className="font-bold text-slate-900">元祖炉端焼きと濃厚な真だち</h3>
              <p className="text-xs md:text-sm leading-relaxed">
                炭火の遠赤外線で焼き上げるメンメ（キンキ）や肉厚ホッケ、冬限定のクリーミーな真だち（タラの白子）。最上階展望風呂の天然温泉で冷えた身体を芯から癒やす至福の冬夜。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">

        {/* Section 1: Deep Regional Culture & Geography */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-sky-100 text-sky-800 rounded-xl">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest block">NATURAL MONUMENT & HARBOR HERITAGE</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                湿原の神サルルンカムイと港町の黄昏：雪原のタンチョウと幣舞橋の詩情
              </h2>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm md:text-base space-y-4">
            <p>
              北海道東部に位置する釧路は、日本最大の湿原「釧路湿原国立公園」と太平洋の豊かな好漁場を抱く道東最大の港湾都市です。冬の道東は日本海側のような大雪に見舞われることが少なく、シベリア高気圧に覆われて澄み渡る「冬晴れ」の日が多いのが大きな特徴です。その乾いた冷気と強い放射冷却によって、早朝には気温がマイナス15度から20度まで下がり、湿原を流れる川には霧氷が咲き乱れます。
            </p>
            <p>
              この白銀の氷雪の世界で命の輝きを見せてくれるのが、特別天然記念物の「タンチョウ（丹頂鶴）」です。アイヌ民族から「サルルンカムイ（湿原の神）」として敬われてきたタンチョウは、明治時代には乱獲によって一度は絶滅したと考えられていました。しかし大正時代に釧路湿原の奥地で十数羽が奇跡的に再発見され、地元住民の献身的な冬の給餌活動によって現在では千数百羽にまで回復しました。11月から1月にかけては、越冬のために鶴居村の「鶴見台」や「伊藤サンクチュアリ」、阿寒町の給餌場に集結します。雪原の上で2羽が息を合わせて首を伸ばし、鳴き交わしながら羽を広げて跳びはねる求愛ダンスは、大自然の神秘そのものです。
            </p>
            <p>
              そして夕暮れ時、釧路市街地の釧路川河口に架かる「幣舞橋」には、世界中の旅人を惹きつけてやまない光景が訪れます。かつて北洋漁業の拠点として繁栄した釧路港は、インドネシアのバリ島、フィリピンのマニラ湾と並び「世界三大夕日」と称賛されてきました。冬の乾いた空気の中、太平洋の水平線へと沈みゆく太陽は巨大な真紅の火の玉となり、幣舞橋の欄干に佇む四季の乙女のブロンズ像をシルエットとして浮かび上がらせます。川面に映る茜色の光の帯と、港の灯台の光が交差する瞬間は、訪れた者の心に一生消えない感動を刻み込みます。
            </p>
          </div>
        </section>

        {/* Section 2: Winter Food & Onsen */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-sky-100 text-sky-800 rounded-xl">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest block">GOURMET & THERMAL SPRINGS</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                炭火の煙が香る元祖「釧路炉端焼き」と冬の真だち、最上階の展望天然温泉
              </h2>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm md:text-base space-y-4">
            <p>
              氷点下の寒さの中で散策した後に味わう釧路の夜は、全国屈指の食の熱気に満ちています。釧路は日本の「炉端焼き」の発祥の地。昭和30年代、北洋の荒海から帰港した漁師たちが冷えた身体を温めるために囲炉裏の炭火で魚を焼いたのが始まりとされています。中央の大きな炭火台で熟練のおばあちゃんや職人が大きなしゃもじを使って提供するスタイルは釧路ならでは。高級魚メンメ（キンキ）の脂滴る焼き魚、肉厚の真ほっけ、釧路近海で獲れた本ししゃも、プリプリの焼き牡蠣が、香ばしい煙とともに最高の焼き加減で届けられます。
            </p>
            <p>
              さらに11月から1月にかけての冬限定の至高の味覚が「真だち（スケトウダラの白子）」です。釧路港に水揚げされる新鮮な真だちは、透き通るような白さと弾力を誇り、臭みは皆無。さっと湯引きした「たちポン」は口に入れた瞬間に濃厚でクリーミーな旨味がとろけ出し、サクッと揚げた「たちの天ぷら」や温かい「たち汁」は冬の贅沢の極致です。また朝には「和商市場」でどんぶりご飯を片手に市場内を歩き、いくら、ウニ、カニ、マグロ、サーモンを自由に盛り付ける名物「勝手丼」が至福の目覚めを約束します。
            </p>
            <p>
              冷えた身体を芯から解きほぐすのが、釧路市街のホテルに引かれた「天然温泉」です。ナトリウム・カルシウム-塩化物泉を中心とする源泉は保温力に富み、身体の芯まで熱を届けて長時間湯冷めを防ぎます。最上階の展望露天風呂に浸かりながら、夜空に舞う微かなダイヤモンドダストや、釧路港を行き交う船の灯りを眺めるひとときは、北国ならではの極上の贅沢です。
            </p>
          </div>
        </section>

        {/* Section 3: Verified 5 Hotels */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-900 rounded-full text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              HOTEL SELECTION BY RAKUTEN API
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 font-journal-serif">
              丹頂鶴見学と幣舞橋夕日・炉端焼きを満喫する厳選名宿5選
            </h2>
            <p className="text-slate-600 text-xs md:text-sm max-w-2xl mx-auto">
              楽天トラベルAPIより最新の空室状況・宿泊評価・公式写真を取得。天然温泉大浴場、幣舞橋や駅へのアクセス、極上海鮮朝食に優れた屈指の宿を厳選しました。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-5/12 relative aspect-[4/3] md:aspect-auto">
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-md">
                    第{hotel.id}位
                  </div>
                </div>

                <div className="md:w-7/12 p-6 md:p-8 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200">
                        {hotel.access}
                      </span>
                      <div className="flex items-center gap-1 text-sky-600 text-sm font-black">
                        <Star className="w-4 h-4 fill-sky-500 text-sky-500" />
                        <span>{hotel.rating}</span>
                        <span className="text-slate-400 text-xs font-normal">({hotel.reviews}件)</span>
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-black text-slate-900 leading-snug mb-2 font-journal-serif">
                      {hotel.name}
                    </h3>
                    <p className="text-xs text-slate-500 mb-3 line-clamp-2">
                      {hotel.special}
                    </p>

                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
                      {hotel.story}
                    </p>

                    <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 space-y-2 mb-4 text-xs">
                      <div>
                        <strong className="text-sky-900 font-bold">客室のこだわり：</strong>
                        <span className="text-slate-600 ml-1">{hotel.roomTip}</span>
                      </div>
                      <div>
                        <strong className="text-sky-900 font-bold">美食の極意：</strong>
                        <span className="text-slate-600 ml-1">{hotel.gourmetTip}</span>
                      </div>
                    </div>

                    <ul className="space-y-1.5 mb-4 text-xs text-slate-600">
                      {hotel.highlights.map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <span className="text-xs text-slate-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base md:text-lg font-black text-sky-700">{hotel.price}</span>
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-bold text-xs md:text-sm rounded-xl shadow-sm transition"
                    >
                      <span>楽天トラベルでプランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 2 Days 1 Night Model Course */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-sky-100 text-sky-800 rounded-xl">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest block">SUGGESTED ITINERARY</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                1泊2日 鶴居村タンチョウ撮影＆幣舞橋世界三大夕日・炉端焼き堪能モデルコース
              </h2>
            </div>
          </div>

          <div className="space-y-6 text-xs md:text-sm">
            {/* Day 1 */}
            <div className="border-l-2 border-sky-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-sky-600 text-white px-2 py-0.5 rounded text-xs">1日目</span>
                たんちょう釧路空港到着、鶴居村でタンチョウ観察と幣舞橋の劇的夕日
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>10:30 たんちょう釧路空港に到着、レンタカーで鶴居村へ</strong><br />
                羽田からわずか95分で到着。空港でレンタカーを借り、雪道の景観を楽しみながら鶴居村へ向かう（車で約35分）。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>11:30 鶴居村「鶴見台」＆「伊藤サンクチュアリ」でタンチョウ観察</strong><br />
                白銀の雪原に優雅に降り立つ丹頂鶴の群れを鑑賞。優美な求愛ダンスや、澄んだ空へ羽ばたく白と黒のコントラストを撮影。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>15:30 釧路市街地へ戻り「幣舞橋」へ、世界三大夕日の黄昏を鑑賞</strong><br />
                幣舞橋のたもとへ。四季の乙女の像越しに、太平洋と釧路川の水平線へと沈みゆく巨大な真紅の夕日を見送る感動の時間。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>17:00 釧路天然温泉ホテルにチェックイン、末広町で元祖「炉端焼き」ディナー</strong><br />
                最上階の展望風呂で冷えた身体を芯から温める。夜は繁華街・末広町の老舗炉端焼きへ。炭火で焼くメンメや真だちポン酢、地酒「福司」に舌鼓。
              </p>
            </div>

            {/* Day 2 */}
            <div className="border-l-2 border-emerald-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-xs">2日目</span>
                和商市場の朝食「勝手丼」と釧路湿原細岡展望台、冬の湿原号
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>08:00 宿のいくら朝食、または「和商市場」で名物「勝手丼」朝食</strong><br />
                市場の店舗を巡り、新鮮ないくらやウニ、タラの白子、サーモンをご飯にのせて自分だけのオリジナル勝手丼を完成させて堪能。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>10:00 釧路湿原「細岡展望台」へ、冬の霧氷パノラマと蛇行する釧路川</strong><br />
                細岡展望台から広大な湿原を見渡す。冬枯れした湿原を大きく蛇行する釧路川と、遠くに冠雪した阿寒連峰を望む絶景パノラマ。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>12:30 フィッシャーマンズワーフMOOでお土産調達＆釧路ラーメンランチ</strong><br />
                MOOで名産の昆布製品や海鮮乾物、地酒を購入。細縮れ麺と魚介出汁が効いた熱々の釧路ラーメンで身体を温める。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>15:00 たんちょう釧路空港より羽田・各地へ帰路</strong><br />
                白銀の雪原に舞う鶴の美しさと、心まで温まる道東の美味の余韻を胸に、充実の冬旅を締めくくる。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-sky-100 text-sky-800 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                北海道・釧路＆鶴居 冬の旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div key={idx} className="border border-slate-100 rounded-xl p-4 md:p-5 bg-slate-50/50">
                <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 flex items-start gap-2">
                  <span className="text-sky-600 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Internal Links / Related Winter Guides */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-sky-100 text-sky-800 rounded-xl">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest block">RELATED WINTER FEATURES</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                あわせて読みたい！北海道・北日本の厳選「冬の雪景色＆海鮮グルメ・温泉特集」
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
            <Link 
              href="/winter-hokkaido-tokachigawa-onsen-moor-swan-tokachi-beef-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-sky-400 hover:bg-sky-50/30 transition block space-y-1"
            >
              <span className="font-bold text-sky-950 block">【北海道】十勝川温泉植物性モール泉と白鳥飛来・十勝牛名宿</span>
              <span className="text-slate-500 text-xs">世界でも希少な琥珀色の美人の湯と十勝平野のパウダースノー。</span>
            </Link>

            <Link 
              href="/winter-hokkaido-hakodate-yunokawa-onsen-isaribi-seafood-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-sky-400 hover:bg-sky-50/30 transition block space-y-1"
            >
              <span className="font-bold text-sky-950 block">【北海道】函館湯の川温泉と冬の津軽海峡漁火・海鮮バイキング名宿</span>
              <span className="text-slate-500 text-xs">函館山100万ドルの冬夜景と五稜郭の雪景色、名湯湯の川温泉。</span>
            </Link>

            <Link 
              href="/winter-aomori-hachinohe-kabushima-ginsaba-senbeijiru-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-sky-400 hover:bg-sky-50/30 transition block space-y-1"
            >
              <span className="font-bold text-sky-950 block">【青森】八戸蕪島神社初詣と八食センター・銀鯖名宿</span>
              <span className="text-slate-500 text-xs">冬の館鼻岸壁朝市と八戸せんべい汁、三陸の海の幸を炭火七輪で味わう。</span>
            </Link>

            <Link 
              href="/winter-miyagi-matsushima-shiogama-shrine-hatsumode-sanriku-oyster-higashimono-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-sky-400 hover:bg-sky-50/30 transition block space-y-1"
            >
              <span className="font-bold text-sky-950 block">【宮城】鹽竈神社初詣と松島雪景色・三陸牡蠣名宿</span>
              <span className="text-slate-500 text-xs">陸奥総鎮守の初詣と日本三景松島の冬景色、塩竈ひがしもの極上鮪。</span>
            </Link>
          </div>
        </section>

        {/* Internal Link CTA */}
        <section className="bg-gradient-to-r from-sky-950 to-slate-900 text-white rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-black font-journal-serif">
            冬の日本全国・厳選特集をチェック
          </h2>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto">
            11月・12月・1月が旬の温泉郷、新春初詣、冬の味覚、雪景色を特集したオリジナル旅行ガイドを多数公開中。次の旅の目的地を見つけてください。
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link 
              href="/features" 
              className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-black text-xs md:text-sm rounded-xl shadow transition"
            >
              特集記事一覧を見る
            </Link>
            <Link 
              href="/" 
              className="px-6 py-3 bg-sky-800 hover:bg-sky-700 text-white font-black text-xs md:text-sm rounded-xl border border-sky-600 transition"
            >
              トップページへ戻る
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 text-center text-xs border-t border-slate-800 mt-16">
        <p>© 2026 旅宿クラウド (croud-travel.com). All rights reserved.</p>
        <p className="mt-2 text-slate-500">掲載の宿泊料金や施設情報は楽天トラベルAPIより取得した参考データです。最新のプラン内容は各宿泊施設ページをご確認ください。</p>
      </footer>
    </article>
  );
}
`;

  return { slug, pageContent };
}

module.exports = { generateHokkaidoKushiroPage };
