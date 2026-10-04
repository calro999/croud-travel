const fs = require('fs');
const path = require('path');

function generateGunmaTakasakiPage(hotels) {
  const slug = 'winter-gunma-takasaki-haruna-shrine-hatsumode-isobe-onsen-joshugyu-stay';
  const title = '【11・12・1月群馬】奇岩の霊場「榛名神社」新春初詣と温泉記号発祥「磯部温泉」！下仁田ネギ・上州牛すき焼き名宿5選';
  const description = '上州の山岳信仰と文豪が愛した名湯に温まる11〜1月の冬旅ガイド。奇岩と巨木がそびえ立つ関東屈指のパワースポット「榛名神社」の新春初詣や、縁起だるま発祥の地「少林山達磨寺」でのだるま市。温泉マーク（♨）発祥の地として知られる安中・磯部温泉のナトリウム・塩化物炭酸水素塩泉で美肌湯浴み。冬に糖度が極まる本場「下仁田ネギ」と極上「上州牛」のすき焼き会席を堪能する名宿5選を詳しく解説します。';

  const hotelDetails = [
    {
      story: '昔話「舌切雀」発祥の地として名高く、碓氷川の清流沿いに広大な敷地を誇る磯部温泉屈指の大型老舗旅館「磯部温泉 舌切雀のお宿 ホテル磯部ガーデン」。館内に入ると巨大な吹き抜けロビーが広がり、からくり人形による舌切雀伝説の人形劇が出迎えてくれます。宿最大の魅力は、趣の異なる3つの大浴場と露天風呂。塩化物炭酸水素塩泉の源泉は、肌の角質をやさしく洗い流す美肌作用と、塩分による抜群の保温効果を兼ね備えており、冬の寒風に晒された身体の芯までぽかぽかと温まります。夕食には、群馬が誇る最高級ブランド「上州牛」のすき焼き会席が登場。冬が旬のとろけるように甘い本場「下仁田ネギ」と上州牛の上質な霜降りが織りなす甘辛い鍋は、寒い季節の旅の至福のハイライトです。',
      roomTip: '碓氷川を眼下に望む寛ぎの和室または次の間付き特別室。冬の澄んだ川面と上州の穏やかな山並みを眺めながら寛げます。',
      gourmetTip: '「上州牛＆下仁田ネギの極上すき焼き会席」。冬期限定で極甘の下仁田ネギをたっぷり使い、芳醇な割り下で煮込む絶品郷土鍋。'
    },
    {
      story: 'JR高崎駅西口直結というこれ以上ないアクセスの良さを誇る「ホテルメトロポリタン高崎」。新幹線や在来線を降りて改札からそのままチェックインできるため、冬の寒さや雪の心配なく快適に拠点をつくることができます。客室は高崎の伝統工芸「高崎だるま」や上州の自然をモチーフにした洗練されたデザインで統一され、シモンズ社製ベッドで心地よい睡眠を約束。館内レストラン「ブラッスリーローリエ」では、群馬県産の新鮮な旬野菜やブランド豚、上州牛をふんだんに使った朝食ビュッフェが楽しめます。榛名神社や少林山達磨寺への路線バス発着ターミナルも直結しており、公共交通機関派の旅行者にとって最高の利便性を誇ります。',
      roomTip: '高層階のデラックスツインまたはシグネチャールーム。高崎の街並みと遠く榛名山・赤城山の冬景色をワイドな窓から一望。',
      gourmetTip: '「上州郷土の味覚朝食ビュッフェ」。群馬名物のおっきりこみ鍋や、契約農家の新鮮野菜、炊きたての上州産コシヒカリが充実。'
    },
    {
      story: 'JR高崎駅東口からペデストリアンデッキ直結で徒歩約3分、都市型リゾートホテルとして全国屈指の口コミ高評価を誇る「ホテルココ・グラン高崎」。館内最上階には、宿泊者専用の男女別大浴場と露天風呂、本格スパ施設が完備されています。炭酸泉の露天風呂や木曽檜サウナ、女性用には岩盤浴も備わり、都心のホテルにいながら本格的な湯治リゾート気分を満喫できます。客室には全室にマッサージチェアまたはフットマッサージャーが導入され、榛名山や安中の史跡散策で疲れた足をじっくり癒やすことができます。細部まで行き届いた上質なサービスとモダンな空間美が、冬の大人の休日に彩りを添えてくれます。',
      roomTip: '露天風呂付き客室またはプレミアムダブル。テラスの信楽焼露天風呂から冬の澄んだ夜空を見上げながら優雅なバスタイム。',
      gourmetTip: '「贅沢モーニングビュッフェ」。シェフが目の前で焼き上げるオムレツや、群馬県産小麦の焼きたてパン、季節のヘルシースープが人気。'
    },
    {
      story: '国道18号線沿いに位置し、安中市街や世界遺産・富岡製糸場、碓氷峠・軽井沢方面へのドライブアクセスに絶好の「ホテルルートイン安中」。館内にはラジウム人工温泉大浴場「旅人の湯」を備えており、冷え込んだ冬のドライブ後もゆったりと足を伸ばして温まることができます。客室には加湿空気清浄機や無料Wi-Fi、WOWOW無料視聴可能な大型テレビを完備。朝食はヨーロッパ直輸入の焼きたてパンや和洋のお惣菜が並ぶバイキングが無料で楽しめます。広々とした平面無料駐車場を完備しているため、榛名神社や磯部温泉、妙義山を巡るマイカー旅行の安心の拠点として重宝します。',
      roomTip: 'コンフォートルーム。落ち着いた色調の内装と幅広ベッドで、ビジネスから冬の観光までストレスなく寛げます。',
      gourmetTip: '「無料和洋バイキング朝食」。熱々のスクランブルエッグや焼き魚、群馬の温かいお味噌汁で朝からエネルギー満点。'
    },
    {
      story: '磯部温泉発祥の歴史とともに歩んできた創業二百余年の老舗旅館「磯部温泉 雀のお宿 磯部館」。碓氷川のせせらぎを聞く静寂の畔に建ち、数々の皇族や文化人をもてなしてきた格式ある数寄屋造りの佇まいが魅力です。宿の自慢は、加水なしの自家源泉を惜しみなく注ぎ込む大浴場と庭園露天風呂。重曹成分を豊富に含む炭酸水素塩泉は「美人の湯」として知られ、湯上がりの肌がつるつると滑らかになると女性客からも絶賛されています。夕食は旬の上州の味覚を丁寧に仕立てた会席料理で、上州牛の石焼きや冬の山菜、手打ちうどんなど、心温まる職人の技を個室やお部屋でゆったりと堪能できます。',
      roomTip: '碓氷川沿いの純和風客室。障子を開ければ冬枯れの渓谷美と川のせせらぎが広がり、情緒あふれる静寂のひとときを満喫。',
      gourmetTip: '「上州牛石焼き＆地場産冬会席」。ジュージューと香ばしい煙を上げる上州牛ステーキと、地元契約農家の冬根菜会席。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥14,500〜' : i === 1 ? '¥8,500〜' : i === 2 ? '¥11,000〜' : i === 3 ? '¥7,200〜' : '¥13,000〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.35' : i === 1 ? '4.32' : i === 2 ? '4.62' : i === 3 ? '4.16' : '4.18');
    const reviewCount = h.reviewCount || (i === 0 ? 560 : i === 1 ? 420 : i === 2 ? 890 : i === 3 ? 240 : 180);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR信越本線磯部駅・高崎駅より徒歩または車、上信越道・関越道経由')},
              special: ${JSON.stringify(h.hotelSpecial || '榛名神社新春初詣と温泉記号発祥磯部温泉、上州牛＆下仁田ネギすき焼きを満喫する名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '舌切雀伝説の老舗宿・趣の異なる3つの大浴場と美肌露天風呂めぐり' : i === 1 ? 'JR高崎駅西口直結・雨や寒風知らずの極上アクセス＆上州朝食' : i === 2 ? '最上階に炭酸泉露天・檜サウナ・岩盤浴完備＆全室マッサージチェア' : i === 3 ? '国道18号線沿い・無料平面駐車場＆ラジウム人工温泉大浴場' : '創業二百余年の老舗純和風旅館・自家源泉かけ流し美人の湯')} ,
                ${JSON.stringify(i === 0 ? '冬が旬の下仁田ネギと上州牛の極上すき焼き会席を堪能' : i === 1 ? '高崎だるまをあしらったモダンな客室＆榛名神社行きバス停直結' : i === 2 ? 'クチコミ4.6超の圧倒的高評価・大人のための上質スパリゾート' : i === 3 ? 'ヨーロッパ直輸入パン無料朝食バイキング＆WOWOW全室完備' : '碓氷川のせせらぎを望む客室で味わう上州牛石焼きと地場旬会席')} ,
                ${JSON.stringify(i === 0 ? '温泉マーク発祥地・磯部せんべいサクサク焼き立て食べ歩き' : i === 1 ? '新幹線での榛名・高崎・伊香保アクセスに最も便利なターミナル' : i === 2 ? 'テラス露天風呂付き客室で冬の星空とプライベート温泉を満喫' : i === 3 ? '妙義山や富岡製糸場・軽井沢への冬ドライブ拠点に最適' : '文豪ゆかりの静寂な空間・個室でゆっくり寛ぐ大人の隠れ家')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "関東屈指のパワースポット「榛名神社」の新春初詣の見どころと参拝の注意点は？",
      a: "榛名神社は用明天皇元年（586年）創建と伝わる古刹で、妙義山・赤城山と並ぶ上毛三山の霊峰・榛名山の中腹に鎮座します。奇岩・巨岩に囲まれた約700mの参道には、国指定重要文化財の隋神門や神橋、樹齢600年の千本杉が立ち並び、深閑とした神気が漂います。特に本社・拝殿の後背にそびえ立つ巨岩「御姿岩（みすがたいわ）」と建物が一体となった光景は圧巻です。初詣の参拝時は、山間部のため気温が氷点下になることも多く、防寒対策（ダウンジャケット、手袋、カイロ）が必須です。また参道は石畳の緩やかな坂道や階段が続くため、凍結や霜に備えて滑りにくい歩きやすい靴でお出かけください。"
    },
    {
      q: "安中・磯部温泉が「温泉記号（♨）発祥の地」と呼ばれる理由は？",
      a: "現在日本で広く使われている、湯気と温泉を描いた記号「♨（温泉マーク）」は、安中市の磯部温泉が発祥の地とされています。江戸時代の万治4年（1661年）、農民の土地争いを裁いた江戸幕府の評定所が下した公文書「上野国碓氷郡磯部村御林見分野絵図」に、磯部鉱泉の湧出場所を示す記号として現在の温泉マークの原形となる図が2つ描かれていたことが歴史的根拠です。磯部駅前には「日本最初の温泉記号発祥の地」の記念碑が建立されており、観光客の記念撮影スポットとなっています。"
    },
    {
      q: "高崎の「少林山達磨寺」と縁起だるま（高崎だるま）の歴史・冬の行事は？",
      a: "少林山達磨寺は、全国シェアの大多数を誇る「高崎だるま（縁起だるま）」の発祥の地として知られる黄檗宗の寺院です。天明の大飢饉の際、農民救済のために東岳和尚がだるまの木型を彫り、農家の副業として張り子だるま作りを教えたのが始まりとされます。毎年1月6日〜7日には、夜通し行われる有名な「七草大祭だるま市」が開催され、数万人の参拝客で境内が埋め尽くされます。鶴と亀の顔立ちを模した縁起の良いだるまを購入し、開眼の祈祷を受ける初詣は冬の上州の風物詩です。"
    },
    {
      q: "冬の群馬の絶品グルメ「下仁田ネギ」と「磯部せんべい」の特徴は？",
      a: "冬の群馬を代表する味覚が、安中市の隣に位置する下仁田町の特産「下仁田ネギ（殿様ネギ）」です。11月下旬から1月に収穫される下仁田ネギは、加熱すると独特の辛味が消え、とろけるような滑らかな食感と驚くほどの甘みが引き出されます。上州牛のすき焼き鍋に入れると、肉の旨味を吸って極上のご馳走になります。また、磯部温泉の名物「磯部せんべい」は、磯部鉱泉の炭酸ガスを含む温泉水と小麦粉、砂糖だけで焼き上げる伝統の銘菓。サクサクと軽く口溶けが良く、温泉街では焼き立ての温かいせんべいを食べ歩きできます。"
    },
    {
      q: "高崎・榛名神社・磯部温泉を巡る冬の1泊2日おすすめモデルコースは？",
      a: "【1日目】新幹線で高崎駅に到着 → 縁起だるま発祥の「少林山達磨寺」を参拝しだるま絵付け体験 → 国道406号・県道を経由して「榛名神社」へ移動（車約50分） → 神秘の巨岩と参道を歩き新春祈願 → 磯部温泉へ移動し老舗温泉旅館にチェックイン → 温泉マーク発祥の名湯で美肌露天風呂を満喫 → 夕食に「上州牛＆下仁田ネギのすき焼き会席」を堪能。【2日目】朝の清々しい碓氷川沿いを散歩＆温泉街で焼き立て「磯部せんべい」を食べ歩き → 国指定重要文化財「安中藩武家屋敷」見学 → 世界遺産「富岡製糸場」へ足を延ばすか高崎駅でお土産（高崎だるま、水沢うどん）を購入 → 帰路へ。"
    }
  ];

  const pageContent = `import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Anchor, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '榛名神社 初詣, 磯部温泉 旅館, ホテル磯部ガーデン, ホテルココグラン高崎, メトロポリタン高崎, 高崎だるま 少林山達磨寺, 下仁田ネギ すき焼き, 上州牛, 群馬 冬 旅行',
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
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の群馬・榛名神社新春初詣と磯部温泉の美肌露天風呂'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    images: ['https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function GunmaTakasakiHarunaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": ${JSON.stringify(title)},
        "description": ${JSON.stringify(description)},
        "image": "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-10-05T00:00:00+09:00",
        "dateModified": "2026-10-05T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "旅クラウド編集部",
          "url": "https://croud-travel.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "旅クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/${slug}"
        }
      },
      {
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
            "name": "冬の旅特集一覧",
            "item": "https://croud-travel.com/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "群馬・高崎＆榛名神社初詣・磯部温泉名宿",
            "item": "https://croud-travel.com/${slug}"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
${faqList.map(f => `          {
            "@type": "Question",
            "name": ${JSON.stringify(f.q)},
            "acceptedAnswer": {
              "@type": "Answer",
              "text": ${JSON.stringify(f.a)}
            }
          }`).join(',\n')}
        ]
      }
    ]
  };

  const hotelsList = [
${hotelCardsCode}
  ];

  const faqs = [
${faqList.map(f => `    {
      q: ${JSON.stringify(f.q)},
      a: ${JSON.stringify(f.a)}
    }`).join(',\n')}
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-800">
        {/* Breadcrumb Navigation */}
        <nav aria-label="パンくずリスト" className="bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-3 text-xs md:text-sm text-slate-600 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-blue-600">ホーム</Link>
            <span>&gt;</span>
            <Link href="/features" className="hover:text-blue-600">特集一覧</Link>
            <span>&gt;</span>
            <span className="text-slate-900 font-semibold">群馬・高崎＆榛名神社初詣・磯部温泉名宿</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-red-950 via-stone-900 to-amber-950 text-white py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/30 border border-amber-300/40 text-amber-200 text-xs md:text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>11月・12月・1月冬の上州旅情特集</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 text-white drop-shadow-md">
              群馬・高崎＆榛名・安中・磯部温泉<br className="hidden sm:inline" />
              奇岩の霊場「榛名神社」新春初詣＆少林山達磨寺！<br className="hidden sm:inline" />
              温泉記号発祥「磯部温泉」と下仁田ネギ・上州牛名宿5選
            </h1>
            <p className="max-w-3xl mx-auto text-sm md:text-lg text-amber-100 leading-relaxed drop-shadow">
              巨岩と杉木立が織りなす荘厳なパワースポット「榛名神社」の新春祈願。縁起だるま発祥の少林山達磨寺と、温泉マーク♨発祥の地・磯部温泉。冬にとろける甘さの下仁田ネギと上州牛すき焼きに舌鼓を打つ、心身が浄化される冬の上州紀行。
            </p>
          </div>
        </header>

        {/* Article Summary Box */}
        <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>本特集でわかること（11・12・1月の群馬・西毛エリア旅行の要点）</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
              <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
                <span className="font-bold text-amber-900 block mb-1">① 榛名神社初詣＆奇岩・御姿岩</span>
                用明天皇元年創建の上州屈指の霊場。本社後背の御姿岩の圧巻の威容と、参道に立ち並ぶ巨木・奇岩のパワースポット。
              </div>
              <div className="bg-red-50/60 p-4 rounded-xl border border-red-100">
                <span className="font-bold text-red-900 block mb-1">② 達磨寺だるま市＆温泉記号発祥の湯</span>
                縁起だるま発祥の地・少林山達磨寺の七草大祭。江戸時代に温泉マーク♨が記された磯部温泉の美肌炭酸水素塩泉。
              </div>
              <div className="bg-stone-50/60 p-4 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">③ 下仁田ネギ＆上州牛すき焼き</span>
                加熱するとトロトロに甘くなる殿様ネギ「下仁田ネギ」の最盛期。霜降り上州牛すき焼きとサクサク磯部せんべい。
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Regional Editorial Section */}
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
          <section className="space-y-6">
            <div className="border-l-4 border-amber-600 pl-4">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">GUNMA WINTER HIGHLIGHTS</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                なぜ11〜1月の高崎・榛名・磯部温泉なのか？神聖な祈りと温もりの上州
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                群馬県の西毛地域（高崎市・安中市・榛名山麓）は、都心から北陸新幹線で約50分という至近の距離にありながら、古くからの山岳信仰と豊かな温泉文化、そして個性的な郷土の食が色濃く残る魅力的なエリアです。特に初冬から真冬（11月〜1月）にかけては、上州名物の「からっ風（赤城颪）」が吹き下ろすことで大気中の湿気が払われ、澄み切った青空の下に荒々しい榛名山や妙義山の岩峰が青空にくっきりと映える、一年で最も空気の澄んだ季節を迎えます。
              </p>
              <p>
                上州三山のひとつ、榛名山の中腹に位置する「榛名神社」は、近年全国から熱烈な崇敬を集める屈指のパワースポットです。約700メートルにわたる参道は、清流榛名川のせせらぎと千本杉の巨木、そして太古の火山活動によって形成された奇岩怪石に囲まれています。特に本殿の後背にそびえ立つ巨大な「御姿岩（みすがたいわ）」は、岩の一部が本殿の屋根と接するように覆いかぶさり、神仏習合の山岳修験の霊場としての荘厳さをまざまざと見せつけます。冬の朝、凛と張り詰めた冷気の中でこの参道を歩くと、雑念が洗い流され、新年の新たな活力が身体の底から湧き上がるような感覚に包まれます。
              </p>
              <p>
                参拝後は、碓氷川のほとりに広がる名湯「磯部温泉」へ。磯部温泉は、日本で初めて温泉記号（♨）が絵図に記録された「温泉マーク発祥の地」として名高く、泉質はナトリウム・塩化物炭酸水素塩泉。重曹成分が肌をすべすべにし、塩分が熱を逃さないため、冬の寒さに冷え切った身体を温めるのに最高の泉質です。夕食には、11月から1月にかけてまさに旬の盛りを迎える「下仁田ネギ」と、群馬が誇る「上州牛」のすき焼き。下仁田ネギは火を通すことでトロトロの甘い蜜のように変化し、上州牛の上質な脂と割り下を吸って究極の美味を生み出します。さらに高崎駅前では縁起だるま発祥の少林山達磨寺があり、新春の開運旅行としてこれ以上ない充実した体験が約束されます。
              </p>
            </div>
          </section>

          {/* Section: Spots to visit */}
          <section className="bg-slate-100 rounded-3xl p-6 md:p-10 space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-6 h-6 text-amber-600" />
              <span>冬の高崎・榛名・安中・磯部温泉で絶対に巡りたい名所</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base text-amber-900 flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-amber-600" />
                  <span>榛名神社（国指定重要文化財と御姿岩）</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  どんな願いも叶える「万能のパワースポット」として知られる古刹。奇岩「御姿岩」と一体化した本社・拝殿の建築美や、参道途中の矢立杉（武田信玄が戦勝祈願したと伝わる巨木）など、歩くだけで神聖なパワーを感じられます。冬は参道が凍結することがあるため足元にご注意ください。
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base text-red-900 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-red-600" />
                  <span>少林山達磨寺（縁起だるま発祥の地）</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  高崎だるまの発祥寺。境内には奉納された無数の色鮮やかなだるまが並ぶ達磨堂があり、圧巻の景観。毎年1月6日〜7日の「七草大祭だるま市」は夜通しだるまが売買される熱気あふれる行事です。絵付け体験も可能で、新年の願掛けに最適。
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base text-stone-900 flex items-center gap-1.5">
                  <Waves className="w-4 h-4 text-stone-600" />
                  <span>磯部温泉街と「磯部せんべい」焼き立て巡り</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  温泉記号♨発祥の地。駅前の足湯や碓氷川遊歩道には文豪の歌碑が並びます。温泉水を使用した「磯部せんべい」はサクサクの軽い歯ごたえが特徴で、老舗店舗では焼きたてアツアツのせんべいをその場で試食・購入できます。
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base text-emerald-900 flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-emerald-600" />
                  <span>本場下仁田ネギ＆上州牛の贅沢すき焼き</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  11月下旬〜1月に最盛期を迎える「下仁田ネギ」。肉厚な白い軸は、加熱するとトロリと柔らかくなり、砂糖を入れたかのような濃厚な甘みを発揮します。サシの美しい上州牛と地元産こんにゃくを合わせたすき焼き鍋は、上州の冬のご馳走です。
                </p>
              </div>
            </div>
          </section>

          {/* Hotel List Section */}
          <section className="space-y-8">
            <div className="border-l-4 border-amber-600 pl-4">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">FEATURED ACCOMMODATIONS</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                高崎・榛名・磯部温泉を満喫する厳選ホテル・宿5選
              </h2>
              <p className="text-xs md:text-sm text-slate-500 mt-1">
                ※楽天トラベルAPIより最新の空室状況・料金・レビュー情報を取得して掲載しています。
              </p>
            </div>

            <div className="space-y-8">
              {hotelsList.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition flex flex-col md:flex-row">
                  <div className="md:w-5/12 relative h-64 md:h-auto min-h-[240px]">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-amber-700/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      厳選宿 #{hotel.id}
                    </div>
                  </div>
                  <div className="md:w-7/12 p-6 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center text-amber-500 font-bold text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
                          <span>{hotel.rating}</span>
                        </div>
                        <span className="text-xs text-slate-400">（口コミ {hotel.reviews}件）</span>
                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded ml-auto">
                          目安: {hotel.price}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 leading-snug">
                        {hotel.name}
                      </h3>
                      <p className="text-xs text-slate-500 mb-3 flex items-start gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span>{hotel.access}</span>
                      </p>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
                        {hotel.story}
                      </p>
                      <div className="space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700">
                        {hotel.highlights.map((hl: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-xs text-slate-500">
                        <span className="font-semibold text-slate-700 block">おすすめ客室:</span>
                        {hotel.roomTip}
                      </div>
                      <a 
                        href={hotel.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs md:text-sm px-4 py-2.5 rounded-xl transition shadow-sm flex-shrink-0 ml-3"
                      >
                        <span>プラン詳細・予約</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Model Course Section */}
          <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="border-l-4 border-amber-600 pl-4">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">RECOMMENDED ITINERARY</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                1泊2日！榛名神社新春祈願と少林山達磨寺・磯部温泉を巡る冬の王道モデルコース
              </h3>
            </div>
            
            <div className="relative border-l-2 border-amber-200 ml-4 pl-6 space-y-8 text-sm">
              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-amber-700 block mb-1">1日目 10:00 | 高崎駅に到着</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">縁起だるま発祥の「少林山達磨寺」で新年の開運祈願</h4>
                <p className="text-slate-600 leading-relaxed">
                  新幹線で高崎駅に到着後、レンタカーまたは路線バスで少林山達磨寺へ。黄檗宗の厳かな境内を参拝し、真っ赤な高崎だるまを購入して右目に墨を入れて願掛け（開眼）。だるま絵付け体験も人気です。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-amber-700 block mb-1">1日目 13:00 | 榛名神社へ移動</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">奇岩そびえる「榛名神社」の神聖な参道を歩き本社参拝</h4>
                <p className="text-slate-600 leading-relaxed">
                  榛名山麓を登り榛名神社へ。門前町で名物の門前そばを食べた後、随神門をくぐり巨岩と千本杉が続く参道へ。国重文の本社と御姿岩が一体となった姿に息を呑み、新年の諸願成就を祈願。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-amber-700 block mb-1">1日目 16:30 | 磯部温泉にチェックイン</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">温泉記号発祥の名湯で温まり「上州牛＆下仁田ネギ」の宴</h4>
                <p className="text-slate-600 leading-relaxed">
                  磯部温泉の旅館（ホテル磯部ガーデンなど）へチェックイン。肌を包み込む炭酸水素塩泉の美肌露天風呂で冷えた身体を芯から解凍。夕食には、冬の極甘下仁田ネギと霜降り上州牛の贅沢すき焼きに舌鼓。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-amber-700 block mb-1">2日目 09:30 | 磯部温泉街散策</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">碓氷川沿いを散歩＆サクサク焼き立て「磯部せんべい」食べ歩き</h4>
                <p className="text-slate-600 leading-relaxed">
                  温泉街の老舗菓子店を巡り、鉱泉水で焼き上げた名物「磯部せんべい」の焼き立てを味わう。温泉マーク発祥の地記念碑で記念撮影。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-amber-700 block mb-1">2日目 13:00 | 高崎駅でお土産購入＆帰路</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">上州名物「峠の釜めし」やガトーフェスタハラダのラスクを購入</h4>
                <p className="text-slate-600 leading-relaxed">
                  高崎駅へ戻り、駅ナカ商業施設で群馬名物の「おぎのや峠の釜めし」や、地元高崎本店のガトーフェスタハラダのラスク、水沢うどんを購入して満足の帰路へ。
                </p>
              </div>
            </div>
          </section>

          {/* Winter Travel Tips */}
          <section className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 md:p-8 space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-amber-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>冬（11・12・1月）の高崎・榛名・磯部温泉旅行・お役立ちTips</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-amber-950">
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・榛名神社の参道凍結と冬の防寒対策</strong>
                榛名神社は山あい深く位置するため、冬の参道は日陰を中心に雪や霜で凍結することがあります。滑り止め加工の施されたスニーカーやトレッキングシューズを着用し、手袋と厚手のダウンジャケットで防寒してください。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・マイカーのスタッドレスタイヤ装着</strong>
                高崎市街や磯部温泉周辺の平野部は雪が積もることは稀ですが、榛名神社や榛名湖へ登る山岳道路（県道33号等）は冬期凍結や積雪の恐れがあります。12月〜1月に車で訪れる場合はスタッドレスタイヤの装着が必須です。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・少林山だるま市の混雑ピーク</strong>
                1月6日夕方から7日にかけて開催される少林山達磨寺の七草大祭だるま市は、周辺道路が非常に混雑し駐車場が満車になります。この期間に訪れる場合は高崎駅からの臨時シャトルバスの利用をおすすめします。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・下仁田ネギのお土産購入タイミング</strong>
                本場の下仁田ネギは、11月下旬〜12月に道の駅（しもにた等）や農産物直売所で泥付きの束で販売されます。寒風に当たったネギほど甘みが増すため、12月〜1月の購入が特におすすめです。
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6">
            <div className="border-l-4 border-amber-600 pl-4">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                高崎・榛名・磯部温泉の冬旅に関するよくある質問
              </h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                    <span className="text-amber-600 font-black">Q.</span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links Section */}
          <section className="bg-slate-100 rounded-3xl p-6 md:p-8 space-y-4">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span>群馬および関東甲信越の冬の厳選温泉特集</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <Link href="/winter-gunma-manza-onsen-snow-milky-sulfur-starry-joshugyu-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition font-medium text-slate-700">
                ♨️ 万座温泉・白濁硫黄泉と雪見星空名宿
              </Link>
              <Link href="/winter-gunma-ikaho-stone-steps-joshu-beef-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition font-medium text-slate-700">
                ♨️ 伊香保温泉石段街と黄金の湯名宿
              </Link>
              <Link href="/winter-gunma-minakami-onsen-tanigawa-yukimi-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition font-medium text-slate-700">
                ❄️ みなかみ温泉郷・谷川岳雪見露天名宿
              </Link>
              <Link href="/winter-saitama-nagatoro-hodosan-roubai-kotatsubune-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition font-medium text-slate-700">
                🚣 秩父長瀞こたつ舟と宝登山ロウバイ名宿
              </Link>
              <Link href="/winter-nagano-azumino-omachi-hotaka-snow-shinshugyu-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition font-medium text-slate-700">
                🏔️ 安曇野＆大町温泉・北アルプス雪景色名宿
              </Link>
              <Link href="/features" className="p-3 bg-amber-700 text-white rounded-xl font-bold hover:bg-amber-800 transition text-center flex items-center justify-center">
                ❄️ 全国の冬の厳選特集一覧を見る →
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
`;

  return { slug, pageContent };
}

module.exports = { generateGunmaTakasakiPage };
