const fs = require('fs');
const path = require('path');

function generateTdrHalloweenPage(hotels) {
  const slug = 'autumn-tokyo-disney-resort-halloween-maihama-hotels-stay';
  const title = '【秋の東京ディズニーリゾート・ハロウィーン】ディズニー・ハロウィーン＆ヴィランズの饗宴！仮装・限定パレード・秋のグルメ＆舞浜オフィシャル・パートナー厳選名宿5選';
  const description = '秋の東京ディズニーリゾート（TDR）が熱狂と怪しい魅力に包まれる一大イベント「ディズニー・ハロウィーン」。東京ディズニーランドでは妖しくも魅惑的なヴィランズたちが主役となるパレード「ザ・ヴィランズ・ハロウィーン “Into the Frenzy”」やハロウィーン限定スペシャルまん・チュロスが登場。東京ディズニーシーではアメリカンウォーターフロントの華やかなデコレーションやトリックオアトリート体験が満喫できます。全身仮装のルールや人気アトラクション「ホーンテッドマンション “ホリデーナイトメアー”」の攻略法、そしてパークの余韻に浸りながらゆったり寛げる舞浜オフィシャルホテル＆新浦安パートナーホテル厳選5選を徹底特集。';

  const hotelDetails = [
    {
      story: '東京ディズニーリゾート・オフィシャルホテルの中でも屈指の広さを誇る国内最大級の9階吹き抜けアトリウムロビーが圧巻の「グランドニッコー東京ベイ 舞浜」。全室44平米以上というゆとりの広さを誇り、パークで1日中歩き回った家族連れや仮装グッズ・大きなお土産を抱えたゲストも開放感抜群に寛げます。ピンク色を基調とした南欧リゾート風の外観と、夜には優しいライティングに包まれる館内は非日常感満点。ベイサイド・ステーションや舞浜駅へのアクセスも抜群で、朝夕の移動もスムーズ。朝食ブッフェではシェフが目の前で作る特製オムレツや名物ハンバーガーなど100種類以上の贅沢メニューが楽しめます。',
      roomTip: 'レインボーフロアまたはニッコーフロアのスーペリアルーム。44平米の広々バルコニーから東京湾の夜景やパークの花火を望む特等席。',
      gourmetTip: 'オールデイダイニング「ル・ジャルダン」の秋の味覚プレミアムモーニング。目の前で焼き上げるクロッフルやパフォーマンスキッチン特製料理。'
    },
    {
      story: '東京ディズニーランドに最も近いオフィシャルホテルとして絶大な人気を誇る「東京ベイ舞浜ホテル ファーストリゾート」。ウエスタン、キャッスル、大型客船など多彩なテーマコンセプトルームを備え、パークからホテルに戻った後も夢の国の冒険が途切れることなく続きます。JR舞浜駅およびディズニーランドへの無料シャトルバスが頻発運行しており、重い荷物や小さなお子様連れでも安心。ハロウィーン期間中は館内も秋らしい装飾で彩られ、リーズナブルな価格設定と利便性を両立した賢いリゾート滞在が叶います。',
      roomTip: 'お城の雰囲気を再現した「キャッスルスタイル」または西部開拓時代を思わせる「ウエスタンスタイル」。子供から大人までワクワクが止まらない体験型ルーム。',
      gourmetTip: 'オールデイダイニングでの秋限定バイキング。シェフ特製のローストビーフやパンプキンスープ、ハロウィーンスイーツプレート。'
    },
    {
      story: '新浦安エリアに位置する東京ディズニーリゾート・パートナーホテル「ホテルエミオン東京ベイ」。最大の魅力は、敷地内の地下1500mから湧き出る天然温泉大浴場「ほほえみの湯」（ナトリウム・塩化物強塩温泉）。パークで朝から晩までハロウィーンパレードやアトラクションを満喫した後の疲れた身体を、芯からじんわりと解きほぐしてくれます。パーク直通の無料シャトルバスは約15分で快適にアクセス可能。客室は全室洗い場付きお風呂を完備し、ファミリーやグループ旅行に最適な和洋室やコネクティングルームも充実しています。',
      roomTip: 'エミオンタワーまたはエミオンスクエアの和洋室・リラックステラスルーム。素足で寛げる畳スペースと独立した洗い場付きバスルームが快適。',
      gourmetTip: 'レストラン「ララ イタリアーナ」の本格イタリアンディナー。秋のポルチーニ茸パスタや石窯焼きピッツァ、充実の和洋朝食ブッフェ。'
    },
    {
      story: 'JR新浦安駅北口にペデストリアンデッキで直結し、雨の日でも濡れずにチェックインできる好立地を誇る「オリエンタルホテル東京ベイ」。緑あふれる開放的なロビーでは、宿泊者専用のウェルカムラウンジにて生ビールやスパークリングワイン、季節のスイーツ、ドリンクが無料で楽しめる極上のサービスを提供。ウェルカムベビーのお宿認定第1号ホテルとしても名高く、ベビーズスイート・キディーズスイートなど乳幼児連れのファミリーに優しい細やかな設備とサービスが揃っています。パークへは無料シャトルバスで約15分です。',
      roomTip: '「ベビーズスイート」または「グランデ6」。コルクタイル床や角の丸い家具など安心設計が施され、家族3世代やグループでのびのび過ごせる空間。',
      gourmetTip: 'レストラン「グランサンク」の秋のインターナショナルバイキング。焼きたてステーキや秋の味覚天ぷら、充実のキッズステーション。'
    },
    {
      story: '新浦安駅直結、上質なシティリゾートの品格とおもてなしで高評価を集める「浦安ブライトンホテル東京ベイ」。全室42平米以上のゆったりとした客室は、カップル向けのラグジュアリーなルームから家族向けのプレミアムルームまで洗練されたデザインが光ります。洗い場付きの広々としたバスルームには足を伸ばせるバスタブを備え、バスタイムも極上のリフレッシュタイムに。館内には本格的な日本料理、中国料理、鉄板焼、メインバーが揃い、ハロウィーンの興奮を落ち着いた大人の空間で優雅に振り返ることができます。',
      roomTip: 'プレミアムドアーズ「ルーム・水の手」または「Danran〜だんらん〜」。円形ジェットバス付きルームや靴を脱いで寛げるフローリング客室。',
      gourmetTip: 'ロビーラウンジ「シルフ」のハロウィーン限定アフタヌーンティー。秋の栗やかぼちゃ、紫芋を使った繊細で美しいスイーツコレクション。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥6,750〜' : i === 1 ? '¥5,418〜' : i === 2 ? '¥5,200〜' : i === 3 ? '¥7,120〜' : '¥7,240〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.62' : i === 1 ? '4.32' : i === 2 ? '4.63' : i === 3 ? '4.42' : '4.56');
    const reviewCount = h.reviewCount || (i === 0 ? 7400 : i === 1 ? 14600 : i === 2 ? 12000 : i === 3 ? 9500 : 7800);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR舞浜駅・新浦安駅より無料シャトルバス運行、またはディズニーリゾートライン利用')},
              special: ${JSON.stringify(h.hotelSpecial || '秋のディズニー・ハロウィーン満喫に最適！仮装準備やパーク直通アクセス・天然温泉やウェルカムラウンジ完備の厳選宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '全室44平米以上の開放感・9階吹き抜けアトリウムと100種朝食ブッフェ' : i === 1 ? 'ディズニーランド最寄りオフィシャル・ウエスタンやキャッスルの体験型客室' : i === 2 ? '敷地内地下1500mから湧く天然温泉大浴場・全室洗い場付きバスルーム完備' : i === 3 ? '新浦安駅直結・宿泊者専用ラウンジで生ビールやスイーツが無料飲み放題' : '新浦安駅直結ラグジュアリー・全室42平米以上＆本格美食レストラン充実')} ,
                ${JSON.stringify(i === 0 ? 'ベイサイド・ステーション徒歩4分＆舞浜駅行き無料送迎バス運行' : i === 1 ? 'パーク直通シャトルバス頻発運行・ハロウィーン限定ディナーバイキング' : i === 2 ? 'パートナーホテル無料シャトル約15分・畳敷き和洋室で家族・グループも安心' : i === 3 ? 'ウェルカムベビーのお宿認定・乳幼児連れや3世代旅行に手厚いホスピタリティ' : '足を伸ばせる広々バスタブ＆円形ジェットバス客室・大人のハロウィーンステイ')} ,
                ${JSON.stringify(i === 0 ? 'バルコニーから海と花火を展望・南欧リゾートの優雅な非日常感' : i === 1 ? '抜群のコストパフォーマンス・夜遅くまでのパーク滞在でも移動ストレスなし' : i === 2 ? '強塩泉の温泉でパーク歩きの筋肉疲労を即日解消・コンビニ館内併設' : i === 3 ? '駅直結で雨の日も濡れずに快適・焼きたてステーキと季節のビュッフェ' : '上質なインテリアと静謐な空間・洗練されたアメニティとコンシェルジュ対応')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "東京ディズニーリゾートのハロウィーン期間における「全身仮装」のルールと注意点は？",
      a: "ディズニー・ハロウィーン期間中は毎日大人も全身仮装で入園可能ですが、厳格な仮装ルールが定められています。仮装対象はディズニー映画・番組・ゲーム等に登場する指定キャラクターに限られ、過度な露出、顔が確認できないフルフェイスマスクや特殊メイク、危険物（尖った杖や模造刀）、裾を引きずる長いドレス等は入園不可となります。また、パーク内外のトイレでの着替えやメイクは禁止されており、自宅や予約したホテル客室、または指定の有料着替えスペースを利用する必要があります。オフィシャルホテルやパートナーホテルの客室を確保しておくと、衣装の着用やメイクが落ち着いて行えるため大変便利です。"
    },
    {
      q: "ハロウィーン限定の人気アトラクション「ホーンテッドマンション “ホリデーナイトメアー”」の待ち時間と効率的な体験方法は？",
      a: "東京ディズニーランドの「ホーンテッドマンション “ホリデーナイトメアー”」は、映画『ティム・バートンのナイトメアー・ビフォア・クリスマス』をモチーフにした特別プログラムで、秋から冬にかけての超人気アトラクションです。日中は60分〜120分以上の待ち時間になることが多いため、東京ディズニーリゾート・アプリを活用し、入園直後に「東京ディズニーリゾート40周年記念プライオリティパス（無償）」を取得するか、パレード公演中や夜の閉園前（エレクトリカルパレード終了後など）の空いている時間帯を狙うのが効果的です。"
    },
    {
      q: "秋のディズニー・ハロウィーン期間のパーク混雑ピークとチケット購入のコツは？",
      a: "ハロウィーンイベント開催中の10月は、年間でも1・2を争う混雑シーズンとなります。特に10月の週末、スポーツの日前後の3連休、そして10月31日当日はチケットが早期に完売することが日常茶飯事です。入園日が決まり次第、約2ヶ月前からの販売開始直後にオンラインで購入するか、オフィシャルホテルの「パスポート付き宿泊プラン」や宿泊者限定のホテル内パークチケット購入権利を活用するのが最も確実です。"
    },
    {
      q: "ディズニー・ハロウィーン限定のパレード鑑賞エリアやDPA（ディズニー・プレミアアクセス）の取得は必要？",
      a: "東京ディズニーランドのパレード「ザ・ヴィランズ・ハロウィーン “Into the Frenzy”」は、停止位置でのパフォーマンスやヴィランズたちの豪華な演出が魅力で、鑑賞エリアの競争率が極めて高くなります。良席（シンデレラ城前やプラザ前）でしっかり鑑賞したい場合は、入園直後にディズニー・プレミアアクセス（有料指定席：DPA）を取得するのがおすすめです。自由鑑賞エリアで観る場合も、公演開始の1時間〜1時間半前には場所取りを開始し、レジャーシートや折りたたみクッションを準備しておくと快適です。"
    },
    {
      q: "秋（9・10月）の舞浜エリアの気候と、夜間鑑賞・パレード待ちの服装アドバイスは？",
      a: "秋の舞浜は東京湾に面した海沿いにあるため、日中は20度前後の過ごしやすい気温でも、日没後は海風が吹き込み体感温度が急激に下がります。特に夜のパレード待ちや花火鑑賞時は10度近くまで冷え込むことがあります。薄手のダウンジャケット、大判ストール、風を通さないウィンドブレーカーなどの防寒具をバッグに入れておくのが必須です。仮装をされる方も、衣装の下に着用できる保温インナーやカイロを用意しておくと安心です。"
    }
  ];

  const pageContent = `import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Footprints, Flame, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye, Ghost, PartyPopper
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: 'ディズニー ハロウィーン, ディズニー ハロウィン 2026, 舞浜 ホテル ハロウィン, グランドニッコー東京ベイ舞浜, ホテルエミオン東京ベイ, オリエンタルホテル東京ベイ, ディズニーランド 仮装, ホーンテッドマンション ホリデーナイトメアー',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    siteName: 'クラドトラベル',
    type: 'article',
    locale: 'ja_JP',
    images: [{
      url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
      width: 1200,
      height: 630,
      alt: '秋の東京ディズニーリゾート ハロウィーン装飾と舞浜の夜景'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    images: ['https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function TdrHalloweenFeaturePage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": ${JSON.stringify(title)},
    "description": ${JSON.stringify(description)},
    "image": "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "2026-10-06T10:00:00+09:00",
    "dateModified": "2026-10-06T10:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "クラドトラベル編集部 テーマパーク・リゾートホテル取材班"
    },
    "publisher": {
      "@type": "Organization",
      "name": "クラドトラベル",
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

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
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
        "name": "東京ディズニーリゾート・ハロウィーン特集",
        "item": "https://croud-travel.com/${slug}"
      }
    ]
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
${faqList.map(f => `      {
        "@type": "Question",
        "name": ${JSON.stringify(f.q)},
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ${JSON.stringify(f.a)}
        }
      }`).join(',\n')}
    ]
  };

  const hotels = [
${hotelCardsCode}
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-600 selection:text-white">
        {/* Breadcrumb Bar */}
        <nav aria-label="パンくずリスト" className="bg-white border-b border-stone-200 text-xs text-stone-500 py-3 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto flex items-center space-x-2">
            <Link href="/" className="hover:text-amber-600 transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:text-amber-600 transition">特集一覧</Link>
            <span>/</span>
            <Link href="/prefectures/chiba" className="hover:text-amber-600 transition">千葉県</Link>
            <span>/</span>
            <span className="text-stone-800 font-medium">東京ディズニーリゾート・ハロウィーン特集</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-b from-purple-950 via-stone-900 to-purple-950 text-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30 text-xs sm:text-sm font-semibold mb-6">
              <Ghost className="w-4 h-4 text-orange-400" />
              9月・10月秋のハロウィーンシーズン特別企画
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              【秋の東京ディズニーリゾート】<br className="hidden sm:inline" />
              怪しくも華やかな「ディズニー・ハロウィーン」とヴィランズの饗宴！<br />
              仮装・限定パレード・絶品秋グルメ＆舞浜オフィシャル・パートナー名宿5選
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              秋の東京ディズニーリゾートは、1年の中で最も熱気とサプライズに満ちたハロウィーンの世界へと変貌を遂げます。ディズニーの悪役（ヴィランズ）たちが主役となる魅惑の新パレード、カボチャやゴーストが彩るフォトジェニックなデコレーション、そして秋の味覚を凝縮した限定スイーツ＆フード。憧れのキャラクターになりきる全身仮装の醍醐味と、閉園後の余韻に浸りながら天然温泉や上質な客室でリフレッシュできる舞浜・新浦安の厳選ホテルを徹底解説します。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-stone-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-orange-400" /> 開催期間: 9月中旬〜10月31日
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-orange-400" /> エリア: 千葉県浦安市舞浜・新浦安
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-orange-400" /> 見どころ: ヴィランズパレード・ホリデーナイトメアー・大人仮装
              </span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          
          {/* Section 1: ハロウィーンの見どころ＆パレード */}
          <section className="mb-16">
            <div className="border-l-4 border-orange-500 pl-4 mb-6">
              <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">Halloween Parade & Atmosphere</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                ヴィランズが主役！熱狂の「ザ・ヴィランズ・ハロウィーン “Into the Frenzy”」と秋のパーク演出
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                東京ディズニーランドの秋を彩る最大のハイライトが、ヴィランズ（悪役たち）が主催する魅惑のハロウィーンパーティーをテーマにしたパレード「ザ・ヴィランズ・ハロウィーン “Into the Frenzy”」です。マレフィセント、ジャファー、アースラ、フック船長といったお馴染みのヴィランズたちが、それぞれの美学と妖しさを表現した華麗なフロートに乗って登場。ミッキーマウスをはじめとするディズニーの仲間たちも、ハロウィーンならではのクールでミステリアスな特別な衣装を身にまとって登場します。
              </p>
              <p>
                パレードの見どころは、音楽が最高潮に達する停止時のダンスパフォーマンス。ゲストも一緒に振付を合わせて参加することで、パーク全体が一体となった熱狂に包まれます。フロートから吹き上がるスモークや炎の演出、そしてダイナミックな音楽がシンデレラ城前を別世界へと染め上げます。
              </p>
              <p>
                一方、東京ディズニーシーでは、異国情緒あふれるメディテレーニアンハーバーやアメリカンウォーターフロントが秋色のフラワーやカボチャで彩られます。キャストに「トリック・オア・トリート！」と声をかけるとオリジナルのキャンディーがもらえるグリーティングや、夜になると仄暗いランタンの光が水面に揺らめくロマンチックな散策が楽しめます。
              </p>
            </div>
          </section>

          {/* Section 2: 全身仮装とホリデーナイトメアー */}
          <section className="mb-16">
            <div className="border-l-4 border-purple-600 pl-4 mb-6">
              <span className="text-xs font-bold text-purple-600 tracking-wider uppercase">Costume & Special Attraction</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                大人の全身仮装ルール＆期間限定「ホーンテッドマンション “ホリデーナイトメアー”」徹底攻略
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                ディズニー・ハロウィーン期間中は、大人のゲストもお気に入りのディズニーキャラクターになりきって入園できる「全身仮装」が解禁されます。シンデレラ城前やトゥーンタウンには、精巧なプリンセスドレスやヒーロー、ヴィランズのコスチュームに身を包んだゲストが集い、パーク全体がまるで実写映画のセットのような華やかさに満たされます。
              </p>
              <p>
                快適に仮装を楽しむための鉄則は、事前ルールの徹底確認です。過度な露出や特殊メイク（傷メイクや顔全体を覆うペイント）、床に引きずる長い裾、棒状の小道具などは安全管理上禁止されています。また、更衣室としてパーク内の公衆トイレを使用することは固く禁じられているため、舞浜・新浦安エリアのホテルを拠点にして客室でゆっくりメイク・着替えを行うのが最もスマートで安心な選択です。
              </p>
              <p>
                ファンタジーランドで毎年絶大な人気を誇るのが、映画『ティム・バートンのナイトメアー・ビフォア・クリスマス』をテーマにした特別プログラム「ホーンテッドマンション “ホリデーナイトメアー”」です。主人公ジャック・スケリントンがサンディ・クローズとなって屋敷を飾り付け、ハロウィーンとクリスマスが融合した奇妙でユーモラスな世界へと変貌。巨大なカボチャのツリーやゴーストたちのパーティーなど、この時期だけの特別演出は必見です。
              </p>
            </div>
          </section>

          {/* Section 3: 限定グルメ＆スイーツ */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Autumn Limited Gourmet</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                パンプキン＆紫芋の絶品スイーツ！ハロウィーン限定まん＆スペシャルチュロス食べ歩き
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                ハロウィーンシーズンのもう一つの大きな楽しみが、秋の収穫祭をテーマにした限定フード＆スイーツの数々です。カボチャの形をしたオレンジ色の皮に濃厚な具材が詰まった特製まんや、メイプルパンプキン味のサクサクチュロス、紫芋のソフトクリームをトッピングしたスペシャルサンデーなど、写真映え抜群のメニューが各レストランやワゴンに並びます。
              </p>
              <p>
                ディズニーホテルのレストランやオフィシャルホテルのラウンジでも、ハロウィーンをテーマにした本格的なアフタヌーンティーやディナービュッフェが展開されます。コウモリやクロネコ、ゴーストをかたどった繊細なショコラやモンブランは、舌だけでなく目も楽しませてくれる贅沢な逸品です。
              </p>
            </div>
          </section>

          {/* Section 4: 厳選ホテル5選 */}
          <section className="mb-16">
            <div className="border-l-4 border-orange-500 pl-4 mb-8">
              <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">Verified Hotels via Rakuten API</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【楽天トラベル実データ連携】舞浜オフィシャル＆新浦安パートナー厳選ホテル5選
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                ※公式リアルタイムAPIから取得した宿泊料金目安・レビュー評価・アクセス情報を掲載しています。
              </p>
            </div>

            <div className="space-y-8">
              {hotels.map((h) => (
                <div key={h.id} className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="p-5 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded bg-orange-50 text-orange-700 border border-orange-200">
                        厳選第{h.id}位
                      </span>
                      <div className="flex items-center gap-3 text-xs sm:text-sm">
                        <span className="flex items-center text-amber-500 font-bold">
                          <Star className="w-4 h-4 fill-amber-400 stroke-amber-400 mr-1" />
                          {h.rating}
                        </span>
                        <span className="text-stone-400">({h.reviews.toLocaleString()}件)</span>
                        <span className="text-orange-600 font-black text-sm sm:text-base">
                          {h.price}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                      {h.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span>{h.access}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                      {h.story}
                    </p>

                    <div className="bg-stone-50 rounded-lg p-3.5 space-y-2 mb-5 text-xs text-stone-600">
                      <div>
                        <strong className="text-stone-800 font-semibold mr-1">客室の魅力:</strong>
                        {h.roomTip}
                      </div>
                      <div>
                        <strong className="text-stone-800 font-semibold mr-1">秋の味覚＆ディナー:</strong>
                        {h.gourmetTip}
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                        宿泊ポイント・魅力
                      </h4>
                      <ul className="grid grid-cols-1 gap-1.5">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-sm transition"
                      >
                        <span>楽天トラベルでプラン・空室を確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: 1泊2日モデルコース */}
          <section className="mb-16">
            <div className="border-l-4 border-orange-500 pl-4 mb-6">
              <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">Halloween Itinerary</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【1泊2日モデルコース】ディズニー・ハロウィーン満喫＆ホテルリゾートステイ
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs font-bold">1</span>
                  1日目：仮装準備・ランド入園とヴィランズパレード＆夜のホーンテッドマンション
                </h3>
                <ol className="relative border-l border-stone-200 ml-3 space-y-4 text-xs sm:text-sm text-stone-600">
                  <li className="pl-4">
                    <strong className="text-stone-800">08:00 ホテルに荷物を預け・または客室で仮装メイク準備</strong><br />
                    舞浜オフィシャルホテルや新浦安パートナーホテルに到着。荷物を預け身軽になってパークへ。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">09:00 東京ディズニーランド入園＆DPA・プライオリティパス取得</strong><br />
                    入園直後に公式アプリでパレードDPAとホーンテッドマンションのプライオリティパスを確保。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">11:30 シンデレラ城前で仮装記念撮影＆限定スイーツ食べ歩き</strong><br />
                    秋晴れのシンデレラ城をバックに写真撮影。メイプルパンプキンチュロスで小腹を満たす。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">14:00 「ザ・ヴィランズ・ハロウィーン “Into the Frenzy”」パレード鑑賞</strong><br />
                    停止位置での迫力あるダンスとヴィランズたちの豪華パフォーマンスに大熱狂。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">18:00 「ホーンテッドマンション “ホリデーナイトメアー”」体験</strong><br />
                    夜の妖しい光に包まれた屋敷でジャック・スケリントンの奇妙なハロウィーンパーティーへ。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">21:30 ホテルへ戻り天然温泉やウェルカムラウンジで乾杯</strong><br />
                    ホテルエミオンの天然温泉やオリエンタルホテルのラウンジで歩き疲れた身体を癒やす。
                  </li>
                </ol>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs font-bold">2</span>
                  2日目：贅沢朝食ビュッフェ・東京ディズニーシー散策＆秋のハーバーショー
                </h3>
                <ol className="relative border-l border-stone-200 ml-3 space-y-4 text-xs sm:text-sm text-stone-600">
                  <li className="pl-4">
                    <strong className="text-stone-800">07:30 ホテルのシェフ特製モーニングビュッフェを満喫</strong><br />
                    焼きたてオムレツやクロッフル、和洋の充実メニューで1日のエネルギーをしっかりチャージ。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">09:30 東京ディズニーシー入園＆秋のアメリカンウォーターフロント散策</strong><br />
                    クラシカルな街並みに施されたハロウィーンデコレーションを巡り「トリック・オア・トリート」体験。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">12:30 S.S.コロンビア号周辺で秋のスペシャルランチコース</strong><br />
                    豪華客船の優雅なダイニングで季節の食材を活かしたフレンチディナー風ランチに舌鼓。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">15:30 メディテレーニアンハーバーのグリーティングショー鑑賞</strong><br />
                    水上を巡るミッキーと仲間たちの秋限定コスチュームに手を振り、笑顔あふれるフィナーレへ。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">18:00 ボン・ヴォヤージュやホテルショップでお土産購入＆帰路へ</strong><br />
                    ハロウィーン限定のお菓子やグッズをたっぷり買い込み、充実した思い出とともに帰路へ。
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 6: 旅行の注意点 */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-500 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Important Travel Tips</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                ハロウィーン期間のパーク訪問で後悔しないための注意点
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  着替え場所と仮装マナーの厳守
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  パーク内外のトイレでの着替えやメイクは厳禁です。必ず宿泊ホテルの客室または事前予約制の専用着替えスペースを利用しましょう。武器小道具の持ち込み制限にも要注意です。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  週末チケットの早期完売対策
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  10月の連休や週末はパークチケットが数週間前に売り切れます。ホテル宿泊者専用のチケット購入権利付きプランや、チケット確約オフィシャルプランの早期予約が推奨されます。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Sunrise className="w-4 h-4 text-purple-500" />
                  海風による夜間の冷え込み対策
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  舞浜は東京湾直結のため、秋の夜は海風で急激に気温が下がります。薄手のダウンやストール、ヒートインナー、カイロを準備してパレード待ちでの体温低下を防ぎましょう。
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: FAQセクション */}
          <section className="mb-16">
            <div className="border-l-4 border-orange-500 pl-4 mb-6">
              <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                ディズニー・ハロウィーン よくある質問（FAQ）
              </h2>
            </div>

            <div className="space-y-4">
              {faqList.map((f, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                  <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                    <span className="text-orange-600 font-black">Q.</span>
                    <span>{f.q}</span>
                  </h3>
                  <div className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5 border-l-2 border-orange-100 mt-2">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: まとめ＆内部リンク */}
          <section className="border-t border-stone-200 pt-10 text-center">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-4">
              秋の魔法にかけられたディズニーリゾートで、心躍るハロウィーンの思い出を
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
              ヴィランズが織りなす妖艶なパレード、心に残るキャラクター全身仮装、そして天然温泉や快適なベッドが待つ舞浜・新浦安の名宿。年に一度のスペシャルな秋の冒険へ、今すぐ旅立ちましょう。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              <Link href="/features" className="px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition">
                ← 特集一覧に戻る
              </Link>
              <Link href="/prefectures/chiba" className="px-4 py-2 rounded-full bg-orange-50 hover:bg-orange-100 text-orange-700 font-semibold transition">
                千葉県の旅行ガイド・ホテル一覧
              </Link>
              <Link href="/winter-chiba-minamiboso-kyonan-suisen-road-awa-shrine-hatsumode-iseebi-stay" className="px-4 py-2 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-700 font-semibold transition">
                南房総水仙ロード＆安房神社特集
              </Link>
              <Link href="/" className="px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition">
                クラドトラベル トップページ
              </Link>
            </div>
          </section>

        </main>
      </article>
    </>
  );
}
`;

  const outDir = path.join(__dirname, '../../src/app', slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'page.tsx'), pageContent, 'utf8');
  console.log(`[Generated] ${slug}/page.tsx`);
}

module.exports = { generateTdrHalloweenPage };
