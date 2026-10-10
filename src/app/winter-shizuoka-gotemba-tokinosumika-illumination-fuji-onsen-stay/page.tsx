import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Sparkles, 
  MapPin, 
  Star, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Compass, 
  Camera, 
  ChevronRight, 
  Heart, 
  Thermometer, 
  Eye,
  Beer,
  ShoppingBag,
  ShieldAlert,
  Info
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【御殿場・時之栖イルミネーション】ひかりのすみか550万球の光！名宿5選',
  description: '静岡・御殿場の冬を彩る日本屈指の光の祭典「時之栖イルミネーション ひかりのすみか」完全ガイド。全長300mの光のトンネル。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '御殿場, 時之栖, イルミネーション, ひかりのすみか, 御殿場高原ビール, 天然温泉 気楽坊, HOTEL CLAD, ドーミーインEXPRESS富士山御殿場, レンブラントプレミアム富士御殿場, 御殿場プレミアムアウトレット, 富士山 観光',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-shizuoka-gotemba-tokinosumika-illumination-fuji-onsen-stay',
  },
  openGraph: {
    title: '【御殿場・時之栖イルミネーション】ひかりのすみか550万球の光！名宿5選',
    description: '静岡・御殿場の冬を彩る日本屈指の光の祭典「時之栖イルミネーション ひかりのすみか」完全ガイド。全長300mの光のトンネル。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-shizuoka-gotemba-tokinosumika-illumination-fuji-onsen-stay',
    siteName: 'トラベルマップ - 日本の観光名所＆ホテル厳選ガイド',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/67487/67487.jpg',
        width: 1200,
        height: 630,
        alt: '冬の御殿場時之栖イルミネーションと富士山リゾート特集',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【御殿場・時之栖イルミネーション】ひかりのすみか550万球の光の回廊と白銀の富士山！クラフトビール＆天然温泉を満喫する冬の名宿5選',
    description: '静岡・御殿場の冬を彩る日本屈指の光の祭典「時之栖イルミネーション ひかりのすみか」完全ガイド。全長300mの光のトンネル、日本一の高さを誇る噴水レーザーショー、富士山伏流水の御殿場高原ビールとバイキング、天然温泉「気楽坊」の死海風呂。御殿場アウトレット至近の厳選ホテル・リゾート5選。',
    images: ['https://img.travel.rakuten.co.jp/share/HOTEL/67487/67487.jpg'],
  },
};

export default function GotembaTokinosumikaPage() {
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '【御殿場・時之栖イルミネーション】ひかりのすみか550万球の光の回廊と白銀の富士山！クラフトビール＆天然温泉を満喫する冬の名宿5選',
    description: '静岡・御殿場の冬を彩る日本屈指の光の祭典「時之栖イルミネーション ひかりのすみか」完全ガイド。全長300mの光のトンネル、日本一の高さを誇る噴水レーザーショー、富士山伏流水の御殿場高原ビールとバイキング、天然温泉「気楽坊」の死海風呂。御殿場アウトレット至近の厳選ホテル・リゾート5選。',
    image: 'https://img.travel.rakuten.co.jp/share/HOTEL/67487/67487.jpg',
    datePublished: 'T00:00:00+09:00',
    dateModified: 'T00:00:00+09:00',
    author: {
      '@type': 'Organization',
      name: 'トラベルマップ編集部',
      url: 'https://croud-travel.pages.dev',
    },
    publisher: {
      '@type': 'Organization',
      name: 'トラベルマップ',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.pages.dev/winter-shizuoka-gotemba-tokinosumika-illumination-fuji-onsen-stay',
    },
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://croud-travel.pages.dev',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '特集一覧',
        item: 'https://croud-travel.pages.dev/features',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '御殿場時之栖イルミネーション冬特集',
        item: 'https://croud-travel.pages.dev/winter-shizuoka-gotemba-tokinosumika-illumination-fuji-onsen-stay',
      },
    ],
  };

  const faqItems = [
    {
      q: '時之栖イルミネーション「ひかりのすみか」の開催期間・点灯時間・入場料は？',
      a: '例年10月上旬から翌年3月中旬頃まで長期間開催されます。点灯時間は日没後の16時30分〜17時頃から21時30分〜22時頃まで。無料エリア（全長300mの光のトンネルやツリー広場など）と有料エリア（最高到達点150mの噴水レーザーショー「ヴェルサイユの光」などが開催される王宮の丘エリア）に分かれており、有料エリアは大人1,000円〜1,200円程度で入場可能です。'
    },
    {
      q: '御殿場の冬の気温と寒さ対策・服装のアドバイスは？',
      a: '御殿場市は標高約400〜500mの高地に位置し、冬期は「富士おろし」と呼ばれる冷たく乾いた強風が吹き抜けるため、東京や横浜などの平野部に比べて体感温度が5〜7度ほど低くなります。夜間のイルミネーション観賞時は氷点下近くまで冷え込むため、厚手のロングダウンコート、マフラー、手袋、カイロを必ず準備してください。'
    },
    {
      q: '東京・名古屋方面からのアクセス方法や雪道の心配は？',
      a: '東名高速道路・御殿場ICや裾野ICから約10〜15分と高速アクセス抜群です。三島駅や御殿場駅から時之栖行きの無料シャトルバスも毎日運行されています。御殿場市街地は基本的に頻繁な積雪地域ではありませんが、真冬の強い寒波襲来時や箱根峠方面へ向かう場合は路面凍結のおそれがあるため、スタッドレスタイヤまたは滑り止めの携行を推奨します。'
    },
    {
      q: '御殿場プレミアム・アウトレットとセットで回るコツは？',
      a: '昼間は御殿場プレミアム・アウトレットで冬のセールやバーゲンショッピングを満喫し、夕方16時30分頃の点灯に合わせて時之栖へ移動するのが最も効率的な王道コースです。アウトレットから時之栖までは車で約15分。イルミネーション観賞後は時之栖内の「気楽坊」で温泉に入り、御殿場高原ビールレストランで夕食を楽しむのが最高の過ごし方です。'
    }
  ];

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
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

      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 text-xs sm:text-sm text-slate-600 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-blue-600 transition-colors">ホーム</Link>
          <span className="text-slate-400">/</span>
          <Link href="/features" className="hover:text-blue-600 transition-colors">特集一覧</Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-900 font-medium">御殿場時之栖イルミネーション冬特集</span>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <header className="relative bg-gradient-to-b from-slate-950 via-amber-950 to-slate-900 text-white py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs sm:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>11月・12月・1月 富士山麓・光とビールの祭典特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight sm:leading-tight mb-6">
            【御殿場・時之栖イルミネーション】<br className="hidden sm:inline" />
            ひかりのすみか550万球の回廊と白銀の富士山！<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-200 to-yellow-100">
              クラフトビール＆天然温泉を満喫する高原名宿5選
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
            富士山の裾野、澄み切った冷気の中で光り輝く日本屈指の光の祭典「時之栖イルミネーション ひかりのすみか」。全長300mを誇る黄金の光のトンネル、最高到達点150mの圧巻の噴水レーザーショー。富士山の伏流水が生む本場「御殿場高原ビール」と焼きたてステーキ、死海風呂や富士展望露天が揃う天然温泉「気楽坊」。冬のアウトレットショッピングと組み合わせる至高のステイをご提案します。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 点灯期間: 10月上旬〜翌年3月中旬</span>
            <span className="flex items-center gap-1.5"><Thermometer className="w-4 h-4 text-sky-400" /> 夜間気温: 0℃〜5℃（厚手防寒着必須）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-400" /> エリア: 静岡県御殿場市（東名御殿場IC・裾野IC）</span>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* リード文・見どころ詳細解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mb-6 flex items-center gap-2.5 border-b border-slate-100 pb-4">
            <Eye className="w-6 h-6 text-amber-600" />
            550万球が織りなす光の魔法！白銀の富士を望む高原のオアシス「時之栖」
          </h2>

          <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              霊峰・富士山の南東麓に広がる御殿場高原。冬の澄み渡る夜空の下、約550万球ものLEDが灯り、広大なリゾート全体が神秘的な光の街へと姿を変えるのが、静岡県を代表する冬の風物詩「時之栖イルミネーション ひかりのすみか」です。
            </p>
            <p>
              リゾートの象徴である「光のトンネル」は、全長約300メートルにわたって温かな光のアーチが続く圧巻の回廊。季節ごとのテーマに沿って繊細に装飾されたランタンやモニュメントが散りばめられ、歩みを進めるたびに幻想的な世界へと引き込まれます。そして、有料エリア「王宮の丘」で開催される噴水レーザーショー「ヴェルサイユの光」は、音楽に合わせて水柱が最高150メートルまでダイナミックに吹き上がり、光と水とレーザーが交錯する日本最高峰のスペクタクルを繰り広げます。
            </p>
            <p>
              冷たい夜風で冷えた身体を包み込んでくれるのが、敷地内に湧く天然温泉「気楽坊（きらくぼう）」です。日本屈指の浮遊体験ができる高濃度塩分のお風呂「死海風呂」をはじめ、炭酸泉や薬草湯、富士山を望む大露天風呂など、多彩な湯船が揃います。さらに、富士山の伏流水で丁寧に醸造される「御殿場高原ビール」は、フルーティーなヴァイツェンやキレのあるピルスナーなど本場仕込みのクラフトビールが揃い、地元のブランド肉や窯焼き料理とともに味わえば、冬の寒さも一気に幸福感へと変わります。
            </p>
            <p>
              昼は国内最大級の店舗数を誇る「御殿場プレミアム・アウトレット」で冬のファッションや生活雑貨のショッピングを楽しみ、夕暮れからは富士の裾野でイルミネーションと美食に浸る。都心から車や高速バスで約1時間半という抜群のアクセスも相まって、カップルのデートやファミリーの冬旅行にこれ以上ない充実度を誇ります。周辺には、空気が澄み渡る冬ならではの<Link href="/winter-clear-air-fuji-view-hotels" className="text-amber-600 hover:underline font-bold">富士山ビュー絶景温泉ホテル</Link>や、新春開運祈願で賑わう<Link href="/winter-shizuoka-fujinomiya-taisha-hatsumode-fujisan-view-stay" className="text-amber-600 hover:underline font-bold">富士山本宮浅間大社の初詣</Link>、さらには温暖な海岸線で楽しむ<Link href="/winter-atami-fireworks-ocean-view-stay" className="text-amber-600 hover:underline font-bold">熱海海上冬花火</Link>など、多彩な冬の旅先が揃っています。
            </p>
          </div>

          {/* 現地攻略インフォボックス */}
          <div className="mt-8 bg-amber-50/70 border border-amber-100 rounded-xl p-5 sm:p-6">
            <h3 className="text-base font-bold text-amber-950 mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-amber-600" />
              時之栖イルミネーション攻略：満足度を2倍にする3つのポイント
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-amber-900">
              <div className="bg-white p-3.5 rounded-lg border border-amber-100">
                <span className="font-bold text-amber-700 block mb-1">1. 無料エリアと有料エリアを使い分け</span>
                <p>300mの光のトンネルは入場無料！大迫力の噴水レーザーショーを鑑賞したい場合は、王宮の丘チケット（大人約1,000円〜）を購入して贅沢に楽しみましょう。</p>
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-amber-100">
                <span className="font-bold text-amber-700 block mb-1">2. 高原特有の「富士おろし」に注意</span>
                <p>夜間は風が強く体感温度が氷点下まで下がります。足元からの冷えを防ぐ厚手のソックスや風を通さない防風ダウンコートの着用を強く推奨します。</p>
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-amber-100">
                <span className="font-bold text-amber-700 block mb-1">3. ビールレストランは事前予約が吉</span>
                <p>人気の「麦畑」バイキングや「グランテーブル」は週末や12月のクリスマスシーズンに大混雑します。宿泊予約と合わせて夕食の事前予約を済ませておきましょう。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 厳選ホテルセクション */}
        <section className="mb-14">
          <div className="text-center mb-10">
            <span className="text-xs sm:text-sm font-extrabold text-amber-600 tracking-wider uppercase bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-100">
              Selected 5 Gotemba Accommodations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              時之栖・御殿場で富士山絶景と天然温泉を堪能する厳選ホテル5選
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl mx-auto">
              イルミネーション会場直結のリゾートホテルから、富士山大パノラマの隠れ家、アウトレット直結の天然温泉宿まで、冬の滞在に最適な宿を厳選しました。
            </p>
          </div>

          <div className="space-y-8">
            
            {/* ホテルカード 1 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    イルミネーション直結・高原リゾート本館
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.0</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 4,755件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67487%2F67487.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-600 transition-colors"
                  >
                    御殿場高原　時之栖(ときのすみか)
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>静岡県御殿場市神山719（ＪＲ御殿場線岩波駅から車で５分／新幹線三島駅より車で３5分◇三島駅⇔時之栖シャトルバス／御殿場駅⇔時之栖無料シャトルバス）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/67487/67487.jpg" 
                        alt="御殿場高原　時之栖(ときのすみか) 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>「ひかりのすみか」会場が目の前！点灯から消灯まで光の祭典を満喫</span></li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>天然温泉「気楽坊」直結！死海風呂や富士山展望露天で湯浴み三昧</span></li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>御殿場高原ビールレストラン「麦畑」でクラフトビール飲み放題ディナー</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥3,500〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  御殿場高原の広大な敷地に広がる一大レジャーリゾート「時之栖」の中心に位置するホテル。客室を一歩出れば、全長300mの光のトンネルや幻想的なイルミネーションが眼前に広がります。リゾート内の天然温泉「気楽坊」へは館内連絡通路で直結し、浮遊体験が楽しめる死海風呂や薬草湯、富士山を望む大露天風呂を滞在中何度でも楽しめます。夕食は本場ドイツ仕込みの御殿場高原ビールが常時飲み放題のバイキングレストラン「麦畑」で、窯焼きローストビーフやソーセージを堪能する最高の夜が過ごせます。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67487%2F67487.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
                  >
                    <span>楽天トラベルで空室・宿泊プランを見る</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
    

            {/* ホテルカード 2 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    2,000坪の優美な庭園・富士山展望リゾート
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.6</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 982件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128483%2F128483.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-600 transition-colors"
                  >
                    ホテルリゾート&amp;レストラン　マースガーデンウッド御殿場
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>静岡県御殿場市東田中1089（◇東名御殿場ICから徒歩5分◇ＪＲ御殿場駅から車で5分■東京国際空港から当館最寄りの御殿場ICまで高速バスで120分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/128483/128483.jpg" 
                        alt="ホテルリゾート&amp;レストラン　マースガーデンウッド御殿場 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>広大な敷地に広がる日本庭園と地下1,500mから汲み上げる天然温泉大浴場</span></li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>全室ゆとりの広さを誇る客室と富士山または庭園を望むプライベート空間</span></li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>本格鉄板焼・京会席・イタリアンから選べる贅を尽くしたディナーコース</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥13,300〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  東名御殿場ICから車でわずか数分、2,000坪もの美しい庭園を抱くラグジュアリーホテル。敷地内の自家源泉から湧出する天然温泉はアルカリ性単純温泉で、肌にしっとりと馴染む極上の湯触りです。噴水ショーが楽しめる庭園の散策路や、夜のライトアップはロマンチックそのもの。夕食は職人が目の前で焼き上げる特選和牛の鉄板焼きや、四季の恵みを映した繊細な京会席など、一流の美食家を唸らせるクオリティ。静かに上質な冬の休日を過ごしたい大人の旅に相応しい名邸です。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128483%2F128483.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
                  >
                    <span>楽天トラベルで空室・宿泊プランを見る</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
    

            {/* ホテルカード 3 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    全室富士山ビュー・標高500mの大パノラマ
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.6</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 581件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106186%2F106186.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-600 transition-colors"
                  >
                    レンブラントプレミアム富士御殿場
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>静岡県御殿場市深沢2571（御殿場駅より小田急箱根高速バス又はお車にて１０分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/106186/106186.jpg" 
                        alt="レンブラントプレミアム富士御殿場 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>すべての客室の窓から雪化粧した雄大な富士山を真正面に望む特等席</span></li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>富士山を眼前に望む展望大浴場と極上のサウナで心身を解き放つ整い体験</span></li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>駿河湾の海の幸と静岡の山の恵みを融合したフレンチジャポネの極致</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥7,560〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  御殿場市街を見下ろす丘陵地帯、標高約500mの高台に佇むモダンリゾート。最大の誇りは、客室やレストラン、大浴場など館内の至る所から裾野まで広がる富士山の雪景色をパノラマで一望できることです。夕暮れ時に赤く染まる紅富士の美しさは息を呑むほど。天然温泉の展望風呂で温まった後は、地元・静岡の厳選食材をフレンチの手法で昇華させた「フレンチジャポネ」のコース料理に舌鼓。ワインとのペアリングも秀逸で、特別な記念日旅行にも絶賛されています。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106186%2F106186.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
                  >
                    <span>楽天トラベルで空室・宿泊プランを見る</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
    

            {/* ホテルカード 4 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    屋上富士山展望テラス・セルフロウリュサウナ
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.6</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 800件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182462%2F182462.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-600 transition-colors"
                  >
                    天然温泉　富士桜の湯　ドーミーインＥＸＰＲＥＳＳ富士山御殿場（ドーミーイン・御宿野乃グループ）
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>静岡県御殿場市東田中1505-3（東名高速道路　御殿場ICから車で3分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/182462/182462.jpg" 
                        alt="天然温泉　富士桜の湯　ドーミーインＥＸＰＲＥＳＳ富士山御殿場（ドーミーイン・御宿野乃グループ） 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>屋上足湯テラス「富士見テラス」から望む遮るもののない大迫力の霊峰富士</span></li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>天然温泉「富士桜の湯」＆本格ドライサウナ・セルフロウリュ・強冷水風呂完備</span></li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>夜鳴きそばの無料サービスや御殿場名物「みくりやそば」が並ぶ豪華朝食</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥7,627〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  ドーミーインが誇るハイエンドブランド「EXPRESS」の御殿場拠点。天然温泉の大浴場には、サウナー垂涎のセルフロウリュ対応ドライサウナとキンと冷えた水風呂が完備され、冬の澄んだ空気の中で最高の外気浴を満喫できます。屋上の富士見テラスには足湯が設けられ、温まりながら雪富士を鑑賞できる贅沢な仕掛けも。名物の夜鳴きそばサービスはもちろん、朝食バイキングでは郷土の味・みくりやそばや富士山麓のブランド卵を使用した逸品が楽しめ、抜群のコストパフォーマンスを誇ります。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182462%2F182462.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
                  >
                    <span>楽天トラベルで空室・宿泊プランを見る</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
    

            {/* ホテルカード 5 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    御殿場プレミアム・アウトレット直結・木の花の湯
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.4</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 901件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176577%2F176577.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-600 transition-colors"
                  >
                    ＨＯＴＥＬ　ＣＬＡＤ
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>静岡県御殿場市深沢2839-1（東名高速道路「御殿場IC」から約2km。）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/176577/176577.jpg" 
                        alt="ＨＯＴＥＬ　ＣＬＡＤ 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>御殿場プレミアム・アウトレット敷地内！ショッピングと温泉を両立</span></li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>自家源泉の温浴施設「木の花の湯」を無料で利用できる圧倒的付加価値</span></li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>富士山側客室からはベッドにいながら圧倒的なスケールの霊峰富士を独占</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥13,970〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  国内最大級のアウトレット「御殿場プレミアム・アウトレット」の新エリアに位置し、冬のショッピングと極上の温泉ステイを同時に叶える大人気ホテル。宿泊者は併設の日帰り温泉施設「木の花の湯」を何度でも利用でき、富士山を望む大露天風呂や立湯、本場フィンランド式サウナを思う存分堪能できます。洗練された客室は和モダンの落ち着いた設えで、富士山側の部屋からは朝日に輝く白銀の山頂が目の前に迫ります。買い物で荷物が増えてもそのままお部屋へ直行できる快適さは唯一無二です。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176577%2F176577.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
                  >
                    <span>楽天トラベルで空室・宿泊プランを見る</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
    
          </div>
        </section>

        {/* 1泊2日モデルコース */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
            <Compass className="w-6 h-6 text-amber-600" />
            【1泊2日】アウトレット買い物＆時之栖イルミネーション満喫モデルコース
          </h2>

          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 sm:pl-6 relative">
              <span className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-white" />
              <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">1日目：午前〜昼過ぎ</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                東京・新宿発 ➔ 御殿場プレミアム・アウトレットで冬物ショッピング＆富士山鑑賞
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                東名高速道路または直行高速バスで御殿場プレミアム・アウトレットへ。冬のクリアな青空に映える富士山を眺めながら、国内外の人気ブランドで冬のバーゲンショッピングを満喫。ランチには静岡の銘柄牛ハンバーグや富士宮やきそばなど地元グルメを味わいます。
              </p>
            </div>

            <div className="border-l-2 border-orange-500 pl-4 sm:pl-6 relative">
              <span className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-orange-500 ring-4 ring-white" />
              <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">1日目：夕方〜夜</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                ホテルチェックイン ➔ 時之栖「ひかりのすみか」観賞＆御殿場高原ビールディナー
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ホテルへ移動しチェックイン後、17時の点灯とともに「ひかりのすみか」会場へ。全長300mの光のトンネルをくぐり、ヴェルサイユの光で圧巻の噴水レーザーショーを鑑賞。夕食は御殿場高原ビールレストランで、出来立てのクラフトビールとローストポークを心ゆくまで堪能。食後は天然温泉「気楽坊」で芯まで温まります。
              </p>
            </div>

            <div className="border-l-2 border-emerald-500 pl-4 sm:pl-6 relative">
              <span className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-white" />
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">2日目：午前〜午後</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                朝の富士山展望風呂 ➔ とらや工房＆東山旧岸邸で優雅な甘味タイム ➔ 帰路へ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                朝、白銀の富士山頂が朝日に照らされる「紅富士」を展望風呂から鑑賞。チェックアウト後は、竹林の静寂に包まれた和菓子の名店「とらや工房」へ立ち寄り、出来立てのどら焼きとお抹茶で一服。午後は東名御殿場ICからスムーズに帰路につきます。
              </p>
            </div>
          </div>
        </section>

        {/* よくある質問（FAQ） */}
        

        {/* 内部リンク・関連特集セクション */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-md">
          <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-400" />
            あわせて読みたい！冬の富士山・静岡温泉旅おすすめ特集
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            冬の静岡・富士山麓には、空気が澄み渡る絶景ビュースポットや熱海・伊豆の温暖な温泉郷など、多彩な魅力が詰まっています。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <Link 
              href="/winter-clear-air-fuji-view-hotels"
              className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-colors flex items-center justify-between"
            >
              <span>澄んだ冬空に輝く富士山！絶景ビュー温泉ホテル厳選ガイド</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
            <Link 
              href="/winter-shizuoka-fujinomiya-taisha-hatsumode-fujisan-view-stay"
              className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-colors flex items-center justify-between"
            >
              <span>富士山本宮浅間大社新春初詣＆富士宮やきそば・展望名宿</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
            <Link 
              href="/winter-shizuoka-hamamatsu-flowerpark-illumination-unagi-stay"
              className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-colors flex items-center justify-between"
            >
              <span>浜松フラワーパーク光の祭典＆本場浜名湖うなぎ・舘山寺温泉名宿</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
            <Link 
              href="/winter-atami-fireworks-ocean-view-stay"
              className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-colors flex items-center justify-between"
            >
              <span>熱海海上冬花火＆相模湾オーシャンビュー絶景温泉名宿</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
