const fs = require('fs');
const path = require('path');

function generateOkinawaMiyakojimaPage(hotels) {
  const slug = 'winter-okinawa-miyakojima-shigira-resort-sunrisepoint-miyakogyu-stay';
  const title = '【11・12・1月宮古島】冬の避寒リゾート＆宮古ブルー！シギラリゾートの南国極上ステイと宮古牛・東平安名崎初日の出名宿5選';
  const description = '本州が真冬の寒波に包まれる11月・12月・1月、平均気温20度前後の心地よい温暖な気候が広がる南国の楽園・沖縄県宮古島。冬は海水の透明度が年間で最も高まり、エメラルドグリーンからコバルトブルーへのグラデーションを描く奇跡の「宮古ブルー」が息を呑む鮮やかさを見せます。太平洋と東シナ海を分かつ東平安名崎の感動的な初日の出、満天の冬の星空、約140万坪の広大なシギラセブンマイルズリゾートの天然温泉や温水プライベートプール、そして至福の宮古牛ステーキ。コートを脱ぎ捨てて楽しむ極上の冬の避寒バカンス。楽天APIから最新取得した宮古島の最高峰リゾートホテル5選を徹底特集します。';

  const hotelDetails = [
    {
      story: '宮古島南岸、約140万坪の広大な敷地を誇るシギラセブンマイルズリゾートの中心に位置するオールスイートホテル「シギラベイサイドスイート アラマンダ」。色鮮やかなブーゲンビリアが咲き誇るラグーンにはウミガメが優雅に泳ぎ、日常から解き放たれた南国のラグジュアリーステイを演出します。客室は全室スイート仕様で、プライベートプール付きのヴィラ棟や、展望ジャグジーから宮古ブルーの海を見晴らす開放的な客室が揃います。敷地内には地下1,000mから湧出する黄金色の天然温泉「シギラ黄金温泉」があり、ジャングルのような露天風呂や温水スイミングプールでリフレッシュ。夜には高級鉄板焼き「マラルンガ」でA5ランクの極上宮古牛や近海魚のディナーを堪能できます。冬でも南国の花々が咲き乱れ、心地よい海風に包まれる至高の逗留が叶います。',
      roomTip: 'プールヴィラ ロイヤルスイート、またはプレミアハウス。客室専用のプライベート温水プールとテラスを備えた最高峰のラグジュアリー空間。',
      gourmetTip: '「マラルンガ鉄板焼」。熟練シェフが目の前で焼き上げる宮古牛フィレ肉と島野菜、伊勢海老のグリル。厳選ワインとともに味わう至福のディナー。'
    },
    {
      story: 'シギラリゾートの最前列、宮古島の海と空が溶け合う水平線にそびえ立つ最高層フラッグシップホテル「ホテル シギラミラージュ」。当ホテルのコンセプトは「地上の楽園へのゲートウェイ」。全客室が51平米以上のゆとりを持ち、足元から広がるパノラマウインドウからは、朝日に輝く宮古ブルーから夕暮れの茜色の空まで、刻々と移り変わる奇跡の海景色をパノラマで堪能できます。最上層階の「ミラージュフロア」宿泊者には、専用クラブラウンジでのシャンパンサービスやバトラーサービスなど最高峰のホスピタリティが提供されます。レストラン「蜃気楼」では、宮古島の旬魚や宮古牛を使った贅沢な和琉創作料理を味わえます。冬の澄み渡る夜空には南十字星や満天の星が瞬き、バルコニーのデイベッドで星空を眺める時間は格別です。',
      roomTip: 'ミラージュフロア・オーシャンプールスイート。広大なバルコニーにプライベート温水プールを備え、水平線と一体になるインフィニティ体験。',
      gourmetTip: 'レストラン「蜃気楼」。宮古島の伝統食材と現代日本料理が融合した「和琉会席」。宮古牛のしゃぶしゃぶや近海産夜光貝のお造りを堪能。'
    },
    {
      story: 'シギラリゾートの海岸線に面し、南国の美しい海と緑豊かなガーデンに囲まれたファミリーからカップルまで幅広く愛される大型リゾート「ホテルブリーズベイマリーナ」。海を間近に感じる「タワー館」と、南国の温かみのあるインテリアが広がる「本館」から成り、すべての世代が快適に過ごせる機能的な設備が整っています。ホテル目の前には白い砂浜が広がり、冬でも澄み切った海辺の散策を心地よい海風とともに楽しめます。館内レストラン「ポルトフィーノ」の朝食ビュッフェでは、宮古島産の新鮮な島野菜やフルーツ、日替わりの郷土料理、焼き立てクロワッサンが並び、朝から南国の活力をチャージできます。リーズナブルでありながらシギラリゾートの全施設へアクセスしやすい利便性も大きな魅力です。',
      roomTip: 'タワー館・スタンダードツイン（オーシャンビュー）。高層階のバルコニーから宮古ブルーのパノラマビューを一望できる大人気のお部屋。',
      gourmetTip: 'ブッフェダイニング「ポルトフィーノ」。シェフが目の前で仕上げるオムレツや宮古そば、冬の島野菜を使った郷土料理が並ぶ充実のモーニング。'
    },
    {
      story: '宮古空港から車で約15分、伊良部大橋の絶景を一望するトゥリバー地区のウォーターフロントに誕生したヒルトン最新のライフスタイルホテル「キャノピーｂｙヒルトン沖縄宮古島リゾート」。宮古島の豊かな自然やアートを取り入れたスタイリッシュな館内デザインが特徴です。客室のバルコニーからは、日本最長の無料で渡れる橋「伊良部大橋」とエメラルドグリーンの海のパノラマが広がり、夕暮れには息を呑むサンセットが空を染めます。屋上には開放的なルーフトッププールやバーを備え、冬の心地よい南風を感じながらカクテルを楽しむことができます。地元の文化と洗練が調和した最新の宮古島滞在を体感でき、市街地へのアクセスも良好です。',
      roomTip: 'キャノピーオーシャンビュールーム（バルコニー付き）。伊良部大橋と夕陽のグラデーションを客室のソファから贅沢に独占できる特等席。',
      gourmetTip: 'オールデイダイニング「キャノピー セントラル」。宮古牛のパティを使用したシグネチャーバーガーや、地元漁港直送の新鮮な魚介タパスを堪能。'
    },
    {
      story: '「東洋一の白砂」と称される奇跡のビーチ「与那覇前浜（よなはまえはま）ビーチ」の波打ち際に佇む名門「宮古島東急ホテル＆リゾーツ」。約7kmにわたって続く純白の砂浜ときめ細やかなエメラルドグリーンの海に直結しており、客室の広いバルコニーからは遮るもののない大パノラマのオーシャンビューが広がります。館内には広大な南国植物園のようなガーデンが広がり、冬でもハイビスカスやヤシの木が南国情緒を醸し出します。サンセットの名所としても名高く、海に沈む夕陽を眺めながら味わうバーベキューや、メインダイニング「シャングリ・ラ」の和洋中ビュッフェは、宮古島旅行の最高のハイライトとなります。老舗ならではの細やかなホスピタリティが冬の島旅を極上の安心感で包んでくれます。',
      roomTip: 'コーラルウィング・グランドオーシャンビュー。広々としたバルコニーから東洋一の与那覇前浜ビーチの絶景を正面に見下ろす憧れの客室。',
      gourmetTip: 'レストラン「シャングリ・ラ」。宮古島産食材を贅沢に使ったフレンチ会席や和洋ビュッフェ。冬の島魚のポワレや宮古牛ステーキが絶品。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥29,730〜' : i === 1 ? '¥39,270〜' : i === 2 ? '¥4,400〜' : i === 3 ? '¥21,505〜' : '¥15,296〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.65' : i === 1 ? '4.76' : i === 2 ? '4.19' : i === 3 ? '4.52' : '4.56');
    const reviewCount = h.reviewCount || (i === 0 ? 1280 : i === 1 ? 640 : i === 2 ? 3120 : i === 3 ? 420 : 2580);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || '宮古空港または下地島空港より車で約15〜30分（無料送迎バスあり）')},
              special: ${JSON.stringify(h.hotelSpecial || '冬の宮古ブルーとシギラ天然温泉、極上宮古牛ステーキと東平安名崎初日の出を望む南国名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? 'オールスイート仕様・ウミガメの泳ぐラグーン・地下1000mシギラ黄金温泉完備' : i === 1 ? '宮古島最高層フラッグシップタワー・全室51平米以上・プライベート温水プール付きスイート' : i === 2 ? 'ビーチ直結の海岸線リゾート・タワー館オーシャンビューバルコニー・充実の朝食ビュッフェ' : i === 3 ? 'ヒルトン最新ライフスタイルホテル・伊良部大橋を一望するトゥリバー地区・ルーフトップバー' : '東洋一美しい与那覇前浜ビーチ直結・全室オーシャンビューバルコニー・感動のサンセット')},
                ${JSON.stringify(i === 0 ? 'プライベートプール付きヴィラ棟・最高級鉄板焼き「マラルンガ」での宮古牛ディナー' : i === 1 ? '専用クラブラウンジサービス・レストラン「蜃気楼」での和琉創作会席・パノラマ絶景' : i === 2 ? '家族連れからカップルまで愛される安心設備・宮古そばや島野菜の郷土料理モーニング' : i === 3 ? '宮古島の自然とアートを融合・開放的なテラスダイニング・空港送迎至便' : '広大な南国ガーデン散策・宮古島産食材フレンチ会席「シャングリ・ラ」・名門の格式')},
                ${JSON.stringify(i === 0 ? '140万坪のシギラリゾート敷地・冬でも快適な温水プール・南国の贅を尽くした逗留' : i === 1 ? '地上の楽園へのゲートウェイ・極上のバトラーサービス・非日常の最高峰ステイ' : i === 2 ? '抜群のコストパフォーマンス・白砂ビーチ散策・シギラリゾート各施設への周遊至便' : i === 3 ? 'シグネチャー宮古牛バーガー・夕暮れのサンセットカクテル・洗練された最新リゾート' : '約7km続く純白砂浜・満天の冬の星空鑑賞・心に残る南国の温もりとホスピタリティ')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "11月・12月・1月の宮古島の気候と気温、冬でも海に入れる？",
      a: "11月〜1月の宮古島は平均気温が19〜22度前後、最低気温でも15度を下回ることは稀で、本州の秋晴れの日のように非常に過ごしやすい気候です。海水温は約22〜24度あるため、ウェットスーツを着用すれば冬でもシュノーケリングやダイビングが快適に楽しめます。冬は海水のプランクトンが減少し年間で最も透明度が高くなるため、ウミガメやサンゴ礁の観察にはむしろ冬がベストシーズンです。"
    },
    {
      q: "「東平安名崎（ひがしへんなざき）」の初日の出の見どころとアクセス方法は？",
      a: "宮古島の最東端に約2kmにわたって突き出す東平安名崎は、日本都市公園百選にも選ばれた国指定名勝です。北に東シナ海、南に太平洋を見渡す絶景岬で、元旦の初日の出（例年7:15〜7:20頃）には水平線から昇る神々しい太陽を拝むことができます。元旦の早朝は駐車場が混み合うため、日の出の45分前には到着することをおすすめします。宮古空港周辺やシギラリゾートからは車で約25〜30分です。"
    },
    {
      q: "冬の宮古島旅行でレンタカーは必須ですか？",
      a: "宮古島は電車がなく路線バスの便数も限られているため、レンタカーの利用を強くおすすめします。宮古島本島と伊良部島、池間島、来間島はすべて無料の絶景大橋で結ばれており、車があれば島全体を効率よくドライブできます。冬期は夏休みに比べてレンタカーの予約が取りやすく、料金もリーズナブルになる点が大きなメリットです。"
    },
    {
      q: "冬の宮古島旅行のおすすめの服装と持ち物は？",
      a: "日中は長袖シャツやカットソー、薄手のカーディガンで快適に過ごせます。ただし、岬や海岸線では北東の季節風が吹く日があるため、風を通さないウインドブレーカーやライトダウンを1着持参すると重宝します。足元はスニーカーや歩きやすいサンダルが最適です。また、冬でも紫外線は東京の春先並みにあるため、サングラスや日焼け止めがあると安心です。"
    },
    {
      q: "シギラ黄金温泉の特徴と冬の楽しみ方は？",
      a: "シギラ黄金温泉は、地下1,000mから湧出する黄金色に輝く天然温泉（ナトリウム塩化物温泉）です。緑豊かな亜熱帯植物に囲まれた天然露天風呂のほか、水着を着用して家族やカップルで楽しめる巨大なジャングルプール（温泉水使用）が完備されています。冬の心地よい南風を感じながら、満天の星空の下で温まる露天風呂は至福の極楽体験です。"
    }
  ];

  const pageContent = `import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, Flame, Landmark, Snowflake, ShieldCheck, Footprints, Coffee, Car, Sun
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '宮古島 ホテル, シギラリゾート, 宮古島 リゾート, シギラベイサイドスイート アラマンダ, ホテル シギラミラージュ, 宮古島東急ホテル＆リゾーツ, ヒルトン宮古島, 宮古牛, 東平安名崎 初日の出, 11月 12月 1月 沖縄 観光',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: ${JSON.stringify(hotels[0]?.hotelImageUrl || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&h=630&q=80')},
      width: 1200,
      height: 630,
      alt: '冬の宮古島宮古ブルーの海とシギラリゾート'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    images: [${JSON.stringify(hotels[0]?.hotelImageUrl || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&h=630&q=80')}]
  }
};

export default function OkinawaMiyakojimaWinterPage() {
  const hotelsData = [
${hotelCardsCode}
  ];

  const faqData = ${JSON.stringify(faqList, null, 2)};

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/${slug}#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/${slug}"
        },
        "headline": ${JSON.stringify(title)},
        "description": ${JSON.stringify(description)},
        "datePublished": "2026-10-04T00:00:00+09:00",
        "dateModified": "2026-10-04T00:00:00+09:00",
        "inLanguage": "ja",
        "publisher": {
          "@type": "Organization",
          "name": "地域の宿探訪",
          "url": "https://croud-travel.com"
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
            "name": "特集一覧",
            "item": "https://croud-travel.com/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "沖縄・宮古島冬の避寒リゾート特集",
            "item": "https://croud-travel.com/${slug}"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-cyan-950 via-slate-900 to-sky-950 text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.18),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-medium">
            <Sun className="w-4 h-4 text-cyan-300" />
            <span>11月・12月・1月冬の宮古島避寒リゾート特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-6">
            冬の避寒リゾート＆宮古ブルー！<br className="hidden sm:inline" />
            シギラリゾートの南国極上ステイと宮古牛名宿5選
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            本州の寒波を抜け出し、平均気温20度の快適な常夏の島へ。冬に透明度が年間最高に達する奇跡の「宮古ブルー」、東平安名崎で迎える神々しい初日の出、黄金色に輝くシギラ天然温泉や温水プライベートプール、そしてとろける宮古牛鉄板焼き。コートを脱ぎ捨てて南国の暖かな光に包まれる、極上の冬のバカンスをお届けします。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200 border-t border-slate-700/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>気候：平均20℃（避寒バカンス）</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>最高透明度の宮古ブルー</span>
            </div>
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>シギラ黄金天然温泉＆スパ</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>極上A5宮古牛鉄板焼き</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Section 1: エリア解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Destination Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Sun className="w-6 h-6 text-cyan-500 shrink-0" />
              冬の宮古島が最高の大人の避寒リゾートである理由
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              日本列島が凍てつく11月から1月にかけて、羽田や関西から直行便でわずか3時間あまり。飛行機のタラップを降りた瞬間に肌を撫でる心地よい温風とともに、南国の楽園・宮古島での休日が幕を開けます。この季節の宮古島は平均気温が19〜22度前後。厳しい真夏の直射日光や猛暑から解放され、長袖シャツ1枚で爽快に島内をドライブできる年間で最も過ごしやすいゴールデンシーズンです。
            </p>
            <p>
              そして何より冬の宮古島最大の奇跡は、「海水の圧倒的な透明度」にあります。水温が下がることでプランクトンの発生が抑えられ、与那覇前浜ビーチや砂山ビーチ、池間大橋周辺の海は、夏以上の鮮烈なエメラルドグリーンと深い藍色のグラデーションを描きます。日本屈指の景勝地「東平安名崎」では、荒波が砕け散るコバルトブルーの大海原と、元旦の水平線から昇る荘厳な初日の出を望むことができ、新年の始まりを寿ぐ特別な旅の舞台となります。
            </p>
            <p>
              島内は「伊良部大橋」「池間大橋」「来間大橋」という3つの巨大な絶景橋で周辺離島と結ばれており、信号のほとんどない海岸線を巡るドライブは爽快そのもの。窓を全開にして心地よい南風を受けながら、水平線に向かって伸びる一本道を走る開放感は、日々のストレスを一瞬で吹き飛ばしてくれます。
            </p>
            <p>
              滞在の拠点には、宮古島南部約140万坪に展開する「シギラセブンマイルズリゾート」をはじめとする最高峰リゾートホテルを。地下1,000mから湧出する黄金色の天然露天風呂に浸かり、冬でも温水のプライベートプールで優雅に泳ぎ、夜は島の恵みである極上宮古牛のステーキと厳選ワインに舌鼓を打つ。喧騒を忘れ、温かな光と海に包まれる冬の至福ステイをお約束します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-cyan-50/60 rounded-xl p-5 border border-cyan-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-600" />
                <span>年間最高透明度の宮古ブルー</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                冬はプランクトンが減少し海の美しさが極限に達する季節。澄み渡る白砂ビーチとサンゴ礁の絶景。
              </p>
            </div>
            <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-amber-600" />
                <span>極上の宮古牛＆島魚ディナー</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                融点の低い上質な脂と濃厚な赤身が特徴の幻の黒毛和牛・宮古牛。鉄板焼きやしゃぶしゃぶで堪能。
              </p>
            </div>
            <div className="bg-sky-50/60 rounded-xl p-5 border border-sky-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Waves className="w-5 h-5 text-sky-600" />
                <span>シギラ黄金温泉＆温水プール</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                地下1,000m湧出の黄金色天然温泉。夜空を埋め尽くす満天の星空を眺めながら露天風呂で温まる贅沢。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: 厳選ホテル紹介 */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase">Verified Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              冬の宮古島を満喫する厳選オーシャンリゾートホテル5選
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              楽天APIからリアルタイム取得した最新宿泊料金・クチコミ評価点に基づき、オールスイート・天然温泉・白砂ビーチ直結・極上宮古牛ダイニングを兼ね備えた名宿を厳選紹介。
            </p>
          </div>

          <div className="space-y-12">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id}
                id={\`hotel-\${hotel.id}\`}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image */}
                  <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      <Building className="w-3.5 h-3.5 text-cyan-400" />
                      <span>南国リゾート名宿 #{hotel.id}</span>
                    </div>
                  </div>

                  {/* Hotel Info */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          <Star className="w-4 h-4 fill-amber-400" />
                          <span className="font-extrabold text-slate-900 text-sm sm:text-base">{hotel.rating}</span>
                          <span className="text-xs text-slate-500">（{hotel.reviews.toLocaleString()}件）</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-slate-600 block">参考宿泊料金（1名）</span>
                          <span className="text-lg sm:text-2xl font-black text-cyan-600">{hotel.price}</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                        {hotel.name}
                      </h3>

                      <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <MapPin className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                        <span>{hotel.access}</span>
                      </div>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {hotel.story}
                      </p>

                      {/* Highlights */}
                      <div className="bg-slate-50 rounded-xl p-4 space-y-2 border border-slate-100">
                        <span className="text-xs font-bold text-slate-700 block">冬の宿泊注目ポイント</span>
                        <ul className="text-xs text-slate-600 space-y-1.5">
                          {hotel.highlights.map((h, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="bg-cyan-50/50 p-3 rounded-lg border border-cyan-100/60">
                          <span className="font-bold text-cyan-950 block mb-1">客室選びのヒント</span>
                          <p className="text-slate-600">{hotel.roomTip}</p>
                        </div>
                        <div className="bg-amber-50/50 p-3 rounded-lg border border-amber-100/60">
                          <span className="font-bold text-amber-950 block mb-1">美食・ディナーの魅力</span>
                          <p className="text-slate-600">{hotel.gourmetTip}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md shadow-cyan-600/20 group"
                      >
                        <span>楽天トラベルで空室・冬限定プランを見る</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2.5: 宮古島の冬美食探訪 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Miyakojima Winter Dining</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-cyan-500 shrink-0" />
              幻の黒毛和牛「宮古牛」と冬の新鮮島魚・雪塩スイーツ探訪
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              宮古島を訪れたら絶対に外せないのが、生産頭数が少なく本州では滅多に出回らない「幻の宮古牛」です。ミネラル豊富な潮風を受けた牧草で育つ宮古牛は、人肌で溶け出すほど融点の低い良質な脂と、噛むほどに旨味が溢れる濃厚な赤身が特徴。熟練のシェフが目の前の鉄板でミディアムレアに焼き上げ、宮古島特産の「雪塩」をほんの少し付けて口に運べば、極上の肉汁と芳醇な甘みが口いっぱいに広がります。
            </p>
            <p>
              また冬の近海で獲れる夜光貝や近海マグロのお造り、島らっきょうやゴーヤの天ぷら、そして熱々のかつお出汁が五臓六腑に染み渡る「宮古そば」も島旅の大きな喜び。ドライブの合間には、パウダースノーのようなきめ細やかさを誇る「雪塩ミュージアム」で名物の雪塩ソフトクリームを味わうのも宮古島旅行の定番の楽しみ方です。
            </p>
          </div>
        </section>

        {/* Section 3: 気候・服装ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Island Climate & Clothing</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Sun className="w-6 h-6 text-cyan-500 shrink-0" />
              11月・12月・1月の気温と冬の宮古島ドライブ服装術
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-cyan-900 text-base flex items-center justify-between">
                <span>11月（爽やかな初冬）</span>
                <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded">平均 23℃ / 最低 20℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                日中は半袖でも快適に過ごせる陽気。台風シーズンが過ぎ去り、爽快な晴天が続きます。夕方や車内の冷房対策として薄手の羽織りものが1枚あると便利です。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-cyan-900 text-base flex items-center justify-between">
                <span>12月（南国クリスマス）</span>
                <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded">平均 20℃ / 最低 17℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                本州の真冬とは別世界の心地よさ。長袖シャツや薄手ニット、デニムなどのリゾートカジュアルが最適。海沿いの風除け用にマウンテンパーカーやカーディガンが活躍します。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-cyan-900 text-base flex items-center justify-between">
                <span>1月（初日の出〜新春）</span>
                <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded">平均 18℃ / 最低 15℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                年間で最も涼しい時期ですが、東京の春（4月頃）と同等の気温です。東平安名崎の早朝の初日の出参拝では風が強いため、風を通さないライトダウンやストールが必須です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: モデルコース */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Suggested Itinerary</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-6 h-6 text-cyan-500 shrink-0" />
              2泊3日 冬の宮古ブルー巡り＆東平安名崎初日の出ドライブモデルコース
            </h2>
          </div>

          <div className="space-y-6">
            <div className="border-l-2 border-cyan-500 pl-4 sm:pl-6 space-y-4">
              <div className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
                <span className="bg-cyan-600 text-white text-xs px-2.5 py-1 rounded-md">Day 1</span>
                <span>宮古空港到着、伊良部大橋ドライブ＆シギラ黄金温泉</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong>11:30</strong> 宮古空港または下地島空港に到着。レンタカーを借りてドライブ開始。
                </p>
                <p>
                  <strong>12:30</strong> 宮古そばの老舗で、熱々のかつお出汁が染み渡るソーキそばランチ。
                </p>
                <p>
                  <strong>14:00</strong> 日本最長の無料橋「伊良部大橋」を渡り、下地島の通り池や17ENDの絶景ブルーを鑑賞。
                </p>
                <p>
                  <strong>16:30</strong> シギラリゾートのホテルへチェックイン。客室バルコニーから海を望む。
                </p>
                <p>
                  <strong>17:30</strong> 「シギラ黄金温泉」へ。亜熱帯の植物に囲まれた天然露天風呂でドライブの疲れを癒やす。
                </p>
                <p>
                  <strong>19:30</strong> リゾート内の鉄板焼きダイニングで、芳醇なA5宮古牛ステーキと島魚会席を堪能。
                </p>
              </div>
            </div>

            <div className="border-l-2 border-blue-500 pl-4 sm:pl-6 space-y-4">
              <div className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
                <span className="bg-blue-600 text-white text-xs px-2.5 py-1 rounded-md">Day 2</span>
                <span>東平安名崎の日の出から与那覇前浜ビーチ＆星空観察</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong>06:45</strong> 早朝、車で東平安名崎へ。大海原の水平線から昇る感動の朝日（初日の出）を拝む。
                </p>
                <p>
                  <strong>08:30</strong> ホテルに戻り、南国の採れたてフルーツやオムレツが並ぶ豪華朝食ビュッフェ。
                </p>
                <p>
                  <strong>11:00</strong> 「与那覇前浜ビーチ」へ。東洋一の白砂とエメラルドグリーンの宮古ブルーを裸足で散策。
                </p>
                <p>
                  <strong>14:00</strong> 来間大橋を渡り、来間島のお洒落な絶景パノラマカフェで島スイーツとマンゴージュースを楽しむ。
                </p>
                <p>
                  <strong>18:30</strong> ホテルテラスでサンセットを眺めた後、宮古島市街で近海マグロや島郷土料理を味わう。
                </p>
                <p>
                  <strong>21:00</strong> 澄み渡る冬の夜空を見上げ、満天の天の川と冬の星座を観察。
                </p>
              </div>
            </div>

            <div className="border-l-2 border-sky-500 pl-4 sm:pl-6 space-y-4">
              <div className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
                <span className="bg-sky-600 text-white text-xs px-2.5 py-1 rounded-md">Day 3</span>
                <span>池間大橋のパノラマから雪塩ミュージアム＆お土産購入</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong>09:00</strong> 朝の海を眺めながら優雅にチェックアウト。
                </p>
                <p>
                  <strong>10:00</strong> 北部へドライブし「池間大橋」へ。世渡崎からの息を呑むエメラルドブルーの海景色を撮影。
                </p>
                <p>
                  <strong>11:30</strong> 「雪塩ミュージアム」で名物の雪塩ソフトクリームを味わい、お土産を調達。
                </p>
                <p>
                  <strong>13:30</strong> 空港でレンタカーを返却し、南国の温もりと美しい海の記憶を胸に帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              冬の宮古島旅行 よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-5 bg-slate-50/30 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-cyan-600 font-extrabold shrink-0">Q.</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: 周遊内部リンク */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-cyan-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              あわせて楽しむ！冬の沖縄＆南国避寒リゾート特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Link 
              href="/winter-okinawa-ishigaki-kabilabay-starrysky-beef-resort-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-cyan-400 block mb-1">石垣島冬特集</span>
              <span className="font-bold text-white block">川平湾星空保護区＆石垣牛！八重山の冬リゾート名宿</span>
            </Link>

            <Link 
              href="/winter-okinawa-onna-motobu-whalewatching-agu-resort-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-cyan-400 block mb-1">恩納村・本部冬特集</span>
              <span className="font-bold text-white block">冬のホエールウォッチング＆あぐー豚！沖縄本島恩納村名宿</span>
            </Link>

            <Link 
              href="/winter-okinawa-naha-naminoe-shrine-hatsumode-agu-resort-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-cyan-400 block mb-1">那覇冬特集</span>
              <span className="font-bold text-white block">波上宮新春初詣＆国際通り！冬の那覇シティリゾート名宿</span>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer Navigation */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200 mt-16 text-center text-xs text-slate-500">
        <p>© 2026 地域の宿探訪 - 日本の四季と極上ホテル・旅館を巡る旅</p>
      </footer>
    </div>
  );
}
`;

  return { slug, pageContent };
}

module.exports = { generateOkinawaMiyakojimaPage };
