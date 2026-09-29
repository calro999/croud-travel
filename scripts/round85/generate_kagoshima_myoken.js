const fs = require('fs');
const path = require('path');

function generateKagoshimaMyokenPage(hotels) {
  const slug = 'winter-kagoshima-myoken-onsen-amorigawa-black-pork-stay';
  const title = '【11・12月鹿児島・妙見温泉】天降川渓流の自噴炭酸泉露天と初冬の静寂・極上鹿児島黒豚しゃぶしゃぶと黒毛和牛を堪能する名宿5選';
  const description = '11月から12月にかけて、霧島連山の麓を流れる清流・天降川（あもりがわ）沿いに湯けむりを上げる「妙見温泉」は、南国・鹿児島ならではの穏やかな小春日和と澄み渡る初冬の静けさに包まれます。地中深くから炭酸ガスとともに轟音を響かせて自噴する妙見の湯は、ナトリウム・カルシウム・マグネシウム-炭酸水素塩泉。肌にまとわりつく細やかな気泡と豊富なメタケイ酸が古い角質を落とし、まるで美容液に浸かっているかのような驚異的な美肌効果をもたらします。渓流の瀬音と一体化する野天風呂に身を委ねれば、日常の喧騒が嘘のように洗い流されていきます。夕餉には、サツマイモを飼料に育った本物の「かごしま黒豚」の極上しゃぶしゃぶやすき焼き、日本一の栄冠に輝く「鹿児島黒牛」のステーキ、天降川の鮎、新鮮なきびなごのお造りなど、薩摩が誇る冬の美食が集結。初冬の鹿児島で心身を解き放つ厳選名宿5選を詳しく紹介します。';

  const hotelDetails = [
    {
      story: '天降川の渓流沿いに広大な敷地を有し、日本屈指の温泉文化と洗練されたもてなしで全国の湯巡り愛好家を惹きつける名門旅館「妙見石原荘」。宿の最大の誇りは、地中から加水・加温・空気に触れさせることなく湯船へと直接注ぎ込まれる驚異の「生きた源泉」。川面とほぼ同じ目線で湯浴みを楽しめる名物露天風呂「椋の木露天風呂」や野天風呂「七実の湯」では、清流のせせらぎと川風を感じながら、炭酸ガスを微細に含んだフレッシュな炭酸水素塩泉に浸かる至福が味わえます。肌に触れる湯のまろやかさと、湯上がり後のしっとりとした潤いは唯一無二。食事は鹿児島の旬の味覚を極限まで高めた本格懐石。サツマイモを食べて育った本物のかごしま黒豚のしゃぶしゃぶや、とろけるような鹿児島黒牛の炭火焼き、天降川の清流で育った鮎の塩焼きなど、一品一品が芸術品のように美しく仕上げられています。初冬の澄んだ空気の中で、日本の宿文化の最高峰に浸る贅沢な滞在が叶います。',
      roomTip: '天降川の渓流を眼下に望む露天風呂付き客室または本館和モダン室。窓を開けると心地よい川のせせらぎが室内に響き渡り、日常から隔絶された静寂を独占できます。',
      gourmetTip: '「かごしま黒豚出汁しゃぶ＆鹿児島黒牛炭火焼き懐石」。特製鰹出汁にくぐらせる黒豚ロース、炭火で香ばしく仕上げる鹿児島黒牛フィレ、旬のきびなごのお造り、厳選プレミアム芋焼酎。'
    },
    {
      story: '霧島連山の深い原生林に囲まれた丘陵地に佇み、全客室がわずか5棟の離れで構成された大人のための極上リゾート「霧島温泉郷 鳥遊ぶ森の宿 ふたり静」。古民家の古材を用いた落ち着きある客室には、すべて専用の内湯と開放感あふれる庭園露天風呂が完備されています。注がれる温泉は、霧島山麓から湧き出るミネラル豊富な天然温泉。初冬の澄み渡る夜空に輝く満天の星を仰ぎながら、誰にも気兼ねすることなく何度でも名湯に浸かることができます。夕食は母屋の個室食事処でいただく独創的な「モダン懐石」。鹿児島県産黒毛和牛の溶岩焼きをはじめ、かごしま黒豚の角煮、地場産の旬野菜を使った美しい前菜の数々など、伝統的な日本料理にフレンチのエッセンスを融合させた華やかなコースが展開されます。夫婦やカップルで静かに語らい、初冬の森の息吹を感じながら過ごす特別な休日に最適です。',
      roomTip: '古民家風の離れ客室（全室源泉掛け流しの内湯・露天風呂付き）。冬の澄んだ森の静けさの中で、小鳥のさえずりと風の音に包まれて過ごす贅沢なプライベート空間です。',
      gourmetTip: '「創作モダン懐石＆鹿児島黒牛溶岩焼き」。鹿児島黒牛サーロインの桜島溶岩プレート焼き、黒豚のやわらか煮、季節の地魚お造り盛り合わせ、霧島の天然水で炊いたご飯。'
    },
    {
      story: '天降川沿いに位置し、昔ながらの湯治宿の情緒と飾らない温かなもてなしで湯治ファンから絶大な信頼を寄せられている「妙見温泉 きらく温泉」。宿の最大の魅力は、敷地内から滾々と自噴する豊富な天然温泉をそのまま掛け流す多彩な浴槽群です。大浴場はもちろん、川風が吹き抜ける露天風呂や昔ながらの蒸し風呂、家族風呂などがあり、炭酸水素塩泉の優れた美肌効果と疲労回復効果を心ゆくまで満喫できます。入浴すると肌がすべすべになり、入浴後も身体の芯に温もりがじんわりと残ります。夕食は素朴ながらもボリューム満点の家庭的な郷土膳。鹿児島名物の黒豚と地場野菜を使った陶板焼きや、天降川の川魚の塩焼き、薩摩揚げなど、どこか懐かしく温もりのあるもてなしが旅人の心を解きほぐします。リーズナブルな宿泊料金で本物の源泉に浸かりたい一人旅や長期湯治にも最適です。',
      roomTip: '川のせせらぎが心地よい落ち着いた純和風客室。自炊設備を備えた湯治棟もあり、予算や滞在スタイルに合わせて自由に過ごせます。',
      gourmetTip: '「黒豚陶板焼き＆薩摩郷土料理膳」。ジューシーなかごしま黒豚の陶板焼き、揚げたての自家製薩摩揚げ、季節野菜の煮物小鉢、鹿児島県産米の炊き立てご飯。'
    },
    {
      story: '天降川の河畔に佇み、開湯明治時代から続く歴史と本物の湯治文化を今に伝える名門湯治宿「妙見温泉 田島本館」。宿には「胃腸の湯」「神経痛の湯」「傷湯」と呼ばれる泉質の異なる3つの自家源泉があり、昔から湯治客がそれぞれの身体の不調に合わせて湯船を使い分けてきました。特に炭酸ガスと鉄分、カルシウムが豊富に含まれた湯は、湯口に析出物が幾重にも結晶化し、大地のエネルギーをダイレクトに物語っています。初冬の冷気の中で湯船に浸かれば、細かい気泡が肌を包み込み、毛細血管が拡張して全身の血行が劇的に促されます。夕食は昔ながらの湯治宿らしい滋味あふれる手作り会席。天降川の清流で育った鮎の塩焼きや、鹿児島黒豚の豚骨煮、地元の採れたて山菜や根菜を使った身体に優しい品々が並びます。本物の温泉力で心身のデトックスを図りたい旅人に強くおすすめします。',
      roomTip: '清流天降川に面した風情ある和室。窓のすぐ下を流れる川のせせらぎを聞きながら、時が止まったかのような静寂の中でゆったり寛げます。',
      gourmetTip: '「湯治の里 伝統の薩摩郷土膳」。清流鮎の塩焼き、鹿児島伝統の黒豚豚骨煮、地場冬野菜の炊き合わせ、さつま芋の天ぷら、地元酒蔵の本格芋焼酎。'
    },
    {
      story: '天降川のほとり、木立に囲まれた静かなロケーションに佇み、モダンな和の空間と丁寧なおもてなしで心地よい滞在を提供する「妙見温泉 ねむ」。館内は清掃が行き届き、落ち着いた雰囲気が漂います。大浴場と露天風呂には妙見温泉の炭酸水素塩泉が惜しみなく掛け流されており、弱アルカリ性の柔らかな湯触りが初冬の乾燥肌をしっとりと包み込みます。露天風呂からは天降川の清らかな流れと冬枯れの木立を望むことができ、せせらぎを聞きながらのんびりと長湯を楽しむことができます。夕食は鹿児島が誇るブランド食材を贅沢に散りばめた創作和食会席。旨味たっぷりの鹿児島黒豚のしゃぶしゃぶ鍋や、厳選黒毛和牛のステーキ、近海で獲れた新鮮な魚介のお造りなど、見た目にも美しい料理が並びます。夫婦や家族でのんびりと温泉ステイを満喫したい方に最適な上質宿です。',
      roomTip: '天降川の緑とせせらぎを望むモダン和室。清潔で明るい室内には座り心地の良い椅子が配され、窓の外の自然を眺めながら静かな時間を過ごせます。',
      gourmetTip: '「鹿児島黒豚しゃぶしゃぶ＆黒毛和牛ステーキ会席」。きめ細やかな肉質の黒豚しゃぶしゃぶ小鍋、鹿児島黒牛の陶板ステーキ、旬のお造り盛り合わせ、手作りデザート。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥40,000〜' : i === 1 ? '¥37,405〜' : i === 2 ? '¥3,080〜' : i === 3 ? '¥8,800〜' : '¥13,000〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.67' : i === 1 ? '4.81' : i === 2 ? '4.23' : i === 3 ? '4.67' : '4.25');
    const reviewCount = h.reviewCount || (i === 0 ? 590 : i === 1 ? 320 : i === 2 ? 480 : i === 3 ? 380 : 220);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR日豊本線 隼人駅より車・路線バスで約15分。鹿児島空港より車・タクシーで約15〜20分。九州自動車道 溝辺鹿児島空港ICより約15分')},
              special: ${JSON.stringify(h.hotelSpecial || '天降川渓流の自噴炭酸泉露天と極上鹿児島黒豚しゃぶしゃぶ・黒毛和牛を味わう名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '天降川の川面と一体化する椋の木露天風呂＆極上かごしま黒豚と鹿児島黒牛懐石' : i === 1 ? '全室離れ露天風呂付き客室の隠れ家リゾート＆モダン懐石と黒牛溶岩焼き' : i === 2 ? '豊富な自噴源泉の掛け流しと露天風呂＆黒豚陶板焼きと家庭的なもてなし' : i === 3 ? '明治開湯の歴史を誇る3つの自家源泉＆析出物輝く名湯と伝統の薩摩郷土膳' : '天降川のせせらぎ望む露天風呂＆黒豚しゃぶしゃぶと黒毛和牛ステーキ会席')},
                ${JSON.stringify(i === 0 ? '空気に触れさせない完全直下自噴の生きた名湯＆日本の宿文化の最高峰' : i === 1 ? '古民家古材を用いた重厚なプライベート空間＆満天の冬星を仰ぐ湯浴み' : i === 2 ? '蒸し風呂や家族風呂など多彩な浴槽＆一人旅や湯治にも心強い価格設定' : i === 3 ? '胃腸病や神経痛に効く本物の薬湯治＆清流鮎の塩焼きと名物豚骨煮' : '清潔感あふれる和モダン客室＆弱アルカリ性炭酸水素塩泉の美肌効果')},
                ${JSON.stringify(i === 0 ? '鹿児島空港から車でわずか15分の奇跡の秘境＆洗練された大人の隠れ宿' : i === 1 ? 'わずか5棟限定のプライベートステイ＆記念日や特別な冬旅に最適' : i === 2 ? '天降川沿いの静かなロケーション＆昔ながらの温かい湯治文化を体験' : i === 3 ? '歴史ある木造建築の情緒＆大地のエネルギーをダイレクトに感じる滞在' : '家族旅や夫婦旅に嬉しい快適設計＆霧島・鹿児島周遊ドライブの好拠点')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "妙見温泉の泉質の特徴や、炭酸水素塩泉の美肌効果について教えてください。",
      a: "妙見温泉は天降川沿いに多数の源泉が自噴しており、主な泉質はナトリウム・カルシウム・マグネシウム-炭酸水素塩泉（中性〜弱アルカリ性）です。微細な炭酸ガスと豊富なメタケイ酸を含んでおり、「清涼の湯」「美肌の湯」として知られます。古い角質を優しく落とすクレンジング作用と、炭酸ガスによる血行促進作用が同時に得られるため、入浴後は肌が驚くほど滑らかになり、湯上がり後も身体の芯までポカポカとした温もりが長く持続します。"
    },
    {
      q: "11月・12月の妙見温泉の気候や気温、服装の注意点は？",
      a: "鹿児島県は南国に位置するため、11月の日中は16〜20℃前後と穏やかな小春日和となる日が多いですが、朝晩は天降川沿いの渓谷特有の冷気により5〜8℃前後まで冷え込みます。12月に入ると最高気温も10〜14℃程度となり、朝晩は冷え込みが強まります。基本的には秋〜初冬用のコートやジャケット、セーターを用意すれば快適に過ごせます。豪雪地帯ではないため通常期に雪道運転の心配はほぼありませんが、霧島山高千穂峰方面へ標高を上げる場合は念のため朝晩の凍結に注意してください。"
    },
    {
      q: "初冬の妙見温泉・霧島エリアで絶対に味わうべき鹿児島名物グルメは？",
      a: "何と言っても全国にその名を轟かせる「かごしま黒豚」は必食です。サツマイモを与えて丹念に育てられた黒豚は、白身（脂身）の旨味と甘みが抜群で、特製出汁にくぐらせるしゃぶしゃぶやすき焼きは絶品。さらに「和牛能力共進会」で日本一に輝いた「鹿児島黒牛」のステーキや溶岩焼き、天降川の清流で育った鮎の塩焼き、鮮度抜群のきびなごのお造り、本場薩摩揚げ、そして芳醇な香りの本格芋焼酎とのマリアージュは旅の最高の醍醐味です。"
    },
    {
      q: "妙見温泉周辺の初冬のおすすめ観光スポットは？",
      a: "車で約25分の場所には、坂本龍馬とお龍が日本初の新婚旅行で訪れたことでも名高い「霧島神宮」（国宝本殿・拝殿・幣殿）があり、初冬の厳かな杉木立と荘厳な朱塗りの社殿が心を洗ってくれます。また、天降川沿いには犬飼滝や和気神社、丸尾滝などの名所が点在。さらに車で30分ほどの霧島温泉市場で温泉蒸し料理を味わったり、高千穂河原で霧島連山の雄大な火山景観を望むドライブもおすすめです。"
    },
    {
      q: "鹿児島空港や新幹線駅からのアクセス方法と所要時間は？",
      a: "妙見温泉は全国の温泉地の中でもトップクラスのアクセスの良さを誇ります。鹿児島空港から車またはタクシーでわずか約15〜20分（路線バスでも約25分）。九州新幹線の停車駅であるJR鹿児島中央駅からは、日豊本線特急「きりしま」でJR隼人駅まで約30分、隼人駅からタクシーまたは路線バスで約15分で到着します。羽田や伊丹から飛行機を利用すれば、空港到着から30分足らずで秘湯の露天風呂に浸かることができる利便性が大きな魅力です。"
    }
  ];

  const pageContent = `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '妙見温泉 旅館, 妙見石原荘, 鳥遊ぶ森の宿 ふたり静, きらく温泉, 田島本館, 妙見温泉 ねむ, 自噴炭酸泉, 天降川 露天風呂, 鹿児島黒豚しゃぶしゃぶ, 鹿児島黒牛, 11月 12月 鹿児島温泉',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の鹿児島県霧島・天降川渓流と妙見温泉の自噴露天風呂'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function KagoshimaMyokenPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
    datePublished: '2026-09-29T12:00:00+09:00',
    dateModified: '2026-09-29T12:00:00+09:00',
    author: {
      '@type': 'Organization',
      name: 'クラドトラベル編集部',
      url: 'https://croud-travel.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラドトラベル',
      url: 'https://croud-travel.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.com/${slug}'
    }
  };

  const hotelList = [
${hotelCardsCode}
  ];

  const faqList = ${JSON.stringify(faqList, null, 2)};

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-100 selection:text-amber-900 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <header className="relative w-full h-[65vh] min-h-[480px] max-h-[640px] flex items-end justify-start overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="初冬の鹿児島県・天降川渓流と妙見温泉の雪見露天風呂"
          fill
          priority
          className="object-cover object-center brightness-[0.72] scale-105 transition duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-600/90 text-white text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full backdrop-blur-xs shadow-xs">
            <Sun className="w-4 h-4 text-amber-200" />
            <span>11・12月 冬の極上秘湯旅特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-md">
            鹿児島・霧島妙見温泉＆安良川<br className="hidden sm:inline" />
            天降川渓流の自噴炭酸泉露天と極上黒豚しゃぶしゃぶ名宿5選
          </h1>
          <p className="text-stone-200 text-sm sm:text-base max-w-3xl leading-relaxed drop-shadow-xs">
            11月から澄み渡る南国の冬へ。天降川の川面と一体化する直下自噴炭酸水素塩泉、清流のせせらぎに包まれる静寂の隠れ家、本物のかごしま黒豚しゃぶしゃぶと日本一の鹿児島黒牛を味わい尽くす旅。
          </p>

          <div className="flex flex-wrap gap-3 pt-1 text-xs text-amber-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>ベストシーズン: 11月〜12月下旬（南国の爽やかな冬晴れと天降川の澄んだ渓流美）</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Utensils className="w-3.5 h-3.5 text-amber-300" />
              <span>旬の美味: かごしま黒豚出汁しゃぶしゃぶ・日本一鹿児島黒牛・天降川鮎・本格芋焼酎</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Waves className="w-3.5 h-3.5 text-amber-300" />
              <span>名湯泉質: ナトリウム・カルシウム・マグネシウム-炭酸水素塩泉（直下自噴美肌泉）</span>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-stone-500 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-stone-900 transition">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-900 transition">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-700 font-medium">鹿児島・妙見温泉 初冬名宿5選</span>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mt-6">

        {/* Introduction Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <Sparkles className="w-4 h-4" />
            妙見温泉の初冬の魅力
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 leading-snug">
            地中から轟音とともに湧き出す奇跡の自噴炭酸泉。<br />
            空港からわずか15分で出逢える天降川渓流の静謐な隠れ里
          </h2>

          <div className="text-stone-600 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              鹿児島県霧島市、霧島山系の雄大な山並みを背に錦江湾へと注ぐ清流「天降川（あもりがわ）」。その深い渓谷沿いに湯けむりを立ち上らせる妙見温泉は、全国の温泉通から「日本屈指の自噴泉の聖地」として絶賛される名湯です。初冬の11月から12月にかけて、南国ならではの柔らかな日差しと澄み渡る冷気が心地よく交錯し、渓流沿いの木々が静かに冬の装いへと移ろう贅沢な季節を迎えます。
            </p>
            <p>
              妙見温泉の最大の特長は、地下深くから炭酸ガスとともに自噴するナトリウム・カルシウム・マグネシウム-炭酸水素塩泉。源泉温度が高く、空気に一切触れさせることなく湯船の足元や直近から掛け流される「生きた温泉」は、微細な気泡が肌を包み込み、古い角質を落としてみずみずしい潤いを与えてくれます。川のせせらぎを間近に聞く露天風呂に肩まで浸かれば、渓谷を渡る初冬の冷気と熱い名湯のコントラストが心身の深部まで浸透していきます。
            </p>
            <p>
              そして夜の宴を彩るのは、薩摩が誇る日本一の食材たち。サツマイモを食べて育ち、脂の融点が低く芳醇な甘みを湛えた「かごしま黒豚」の極上しゃぶしゃぶやすき焼き、日本一の栄冠に輝く「鹿児島黒牛」のステーキ、天降川の清流で育った鮎の塩焼きや新鮮なきびなごのお造り。さらに蔵元直送の本格芋焼酎とともに味わう郷土会席は、初冬の夜をどこまでも豊かに温めてくれます。
            </p>
            <p>
              さらに妙見温泉の大きな魅力が、空港から車でわずか約15分という驚異的な立地の良さです。飛行機を降りてレンタカーやタクシーに乗れば、30分後には天降川の瀬音を聞く渓流露天風呂で湯浴みを楽しんでいるという、都会の日常から瞬時に別世界へと切り替わる非日常の旅が実現します。初冬の穏やかな南国の日差しと、手つかずの自然が残る渓谷の静寂が、訪れる旅人を心からの深い癒やしへと導きます。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-100">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <ThermometerSun className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-stone-900 text-sm">直下自噴の炭酸水素塩泉</h3>
                <p className="text-xs text-stone-500 mt-1">空気に触れさせない新鮮な名湯。細やかな気泡と重曹成分がもたらす極上の美肌効果。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <Utensils className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-stone-900 text-sm">かごしま黒豚と鹿児島黒牛</h3>
                <p className="text-xs text-stone-500 mt-1">とろける黒豚出汁しゃぶと黒牛ステーキ。天降川の鮎と薩摩本格芋焼酎を堪能。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <Compass className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-stone-900 text-sm">空港から車で15分の極上アクセス</h3>
                <p className="text-xs text-stone-500 mt-1">鹿児島空港からわずか15分。到着後すぐに渓流露天風呂へ飛び込める抜群の利便性。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-10">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full mb-2">
              <Landmark className="w-4 h-4" />
              厳選宿泊施設
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              初冬の鹿児島・妙見温泉で泊まるべき名宿5選
            </h2>
            <p className="text-stone-500 text-sm mt-1">
              楽天トラベルで最高クラスの評価を誇る、天降川の自噴温泉と薩摩の美味を極めた宿
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                id={\`hotel-\${hotel.id}\`}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200 hover:shadow-md transition duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image Container */}
                  <div className="relative lg:col-span-5 h-64 lg:h-auto min-h-[260px]">
                    <Image
                      src={hotel.img}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-xs">
                      <span>第{hotel.id}位</span>
                    </div>
                  </div>

                  {/* Hotel Content */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full text-xs font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                          <span>{hotel.rating}</span>
                        </div>
                        <span className="text-xs text-stone-400">口コミ {hotel.reviews}件</span>
                        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          {hotel.price}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {hotel.name}
                      </h3>

                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                        {hotel.story}
                      </p>
                    </div>

                    {/* Room & Gourmet Tips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-100 text-xs">
                      <div className="space-y-1">
                        <div className="font-bold text-stone-800 flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-amber-700" />
                          客室選びのアドバイス
                        </div>
                        <p className="text-stone-600 leading-relaxed">
                          {hotel.roomTip}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="font-bold text-stone-800 flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-amber-700" />
                          必食の夕食プラン
                        </div>
                        <p className="text-stone-600 leading-relaxed">
                          {hotel.gourmetTip}
                        </p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-stone-400 tracking-wider uppercase">この宿の注目ポイント</h4>
                      <ul className="space-y-1.5 text-xs text-stone-700">
                        {hotel.highlights.map((item: string, hIdx: number) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Access & Booking Link */}
                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="text-[11px] text-stone-500 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <span>{hotel.access}</span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition duration-200 shadow-xs hover:shadow-md shrink-0"
                      >
                        <span>空室・料金プランを確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local Gourmet Section */}
        <section className="bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-300 text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Utensils className="w-4 h-4 text-amber-300" />
            初冬の薩摩美食手帖
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            11月・12月の鹿児島・妙見で味わい尽くす極上グルメと冬の恵み
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                最高峰銘柄「かごしま黒豚」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                サツマイモを飼料に育つ純粋バークシャー種「かごしま黒豚」。きめ細やかな肉質と旨味成分のアミノ酸が凝縮された脂身は甘く軽やかで、特製鰹出汁にくぐらせるしゃぶしゃぶやすき焼きは、他では味わえない絶品です。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-amber-400" />
                和牛日本一「鹿児島黒牛」ステーキ
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                全国和牛能力共進会で日本一の称号を獲得した「鹿児島黒牛」。美しい霜降りと芳醇な香りが口の中でとろけ、桜島溶岩プレートや炭火で香ばしく焼き上げるステーキは、旅の夜を華やかに彩る贅沢なメインディッシュです。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                天降川の鮎ときびなご・本格芋焼酎
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                天降川の清流で育った鮎の塩焼きや、錦江湾で獲れる新鮮なきびなごのお刺身。さらに鹿児島が誇る老舗蔵元の本格芋焼酎はお湯割りにすることで香りが一段と立ち、初冬の温泉旅情を最高潮に高めてくれます。
              </p>
            </div>
          </div>
        </section>

        {/* 1 Night 2 Days Itinerary Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <Footprints className="w-4 h-4" />
            おすすめ滞在プラン
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の鹿児島・霧島妙見温泉 1泊2日満喫モデルコース
          </h2>
          <div className="space-y-6 pt-2">
            <div className="border-l-2 border-amber-600 pl-4 sm:pl-6 space-y-2">
              <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                1日目：鹿児島空港から15分の隠れ里へ・天降川の自噴露天とかごしま黒豚しゃぶ
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                空港到着からあっという間にチェックイン、清流のせせらぎと直下自噴炭酸泉の湯浴み
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                各地から飛行機で鹿児島空港に到着後、レンタカーまたは路線バス・タクシーでわずか約15分。深い緑と清らかな水が流れる天降川渓谷の妙見温泉へ早くも到着します。まずは明治レトロな木造駅舎「JR肥薩線 嘉例川駅」に立ち寄り、ノスタルジックな記念撮影。午後は宿に早めのチェックインを果たし、川面と一体化する渓流露天風呂で、湯底から直接自噴する新鮮な炭酸水素塩泉に浸かります。微細な炭酸の泡が肌を包み、日頃の疲れが溶け出していく感覚を満喫。夕餉には、黄金出汁でくぐらせるとろける「かごしま黒豚しゃぶしゃぶ」と、香ばしい本格芋焼酎のお湯割りに酔いしれます。
              </p>
            </div>

            <div className="border-l-2 border-amber-600 pl-4 sm:pl-6 space-y-2">
              <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                2日目：鳥の歌声と朝の清流露天風呂・国宝霧島神宮参拝と黒酢本舗
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                澄み渡る朝霧の中での目覚まし湯から、荘厳な国宝霧島神宮と福山黒酢レストランへ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                南国の爽やかな冬の朝、天降川のせせらぎと鳥の声をBGMに朝露天風呂へ。重曹成分が肌を清浄にしてくれるため、朝からお肌が驚くほどつるつるに整います。地元の新鮮卵やさつま揚げが並ぶ朝食を味わい、宿を出発。車で約25分の国宝「霧島神宮」へ向かい、初冬の澄んだ杉木立に囲まれた朱塗りの荘厳な本殿で心静かに参拝。その後、錦江湾と桜島を望む霧島市福山町の黒酢壺畑レストランへ移動し、壺造り黒酢を使ったヘルシーなランチと特産品ショッピングを堪能して、余裕をもって鹿児島空港へ戻る贅沢な休日プランです。
              </p>
            </div>
          </div>
        </section>

        {/* Travel Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <Compass className="w-4 h-4" />
            初冬の妙見温泉 旅の心得とアクセスガイド
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            南国の冬と極上温泉をゆったり楽しむための知恵
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-700" />
                鹿児島空港から車で15分の至近アクセス
              </h3>
              <p>
                東京（羽田・成田）や大阪（伊丹・関空）から飛行機で鹿児島空港へ。空港から県道470号線を経由して車でわずか約15分で妙見温泉へ到着します。
              </p>
              <p>
                飛行機を降りてからあっという間に温泉宿にチェックインできるため、長距離移動の疲労感が極めて少なく、初冬の週末を利用した1泊2日の弾丸リフレッシュ旅にも最適です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Mountain className="w-4 h-4 text-amber-700" />
                嘉例川駅レトロ散策と霧島神宮ドライブ
              </h3>
              <p>
                妙見温泉から車で約10分のJR肥薩線「嘉例川駅」は、明治36年開業の木造駅舎が登録有形文化財に指定された名所。
              </p>
              <p>
                また、車で約25分の国宝「霧島神宮」へ足を伸ばせば、初冬の澄んだ森の中に佇む荘厳な朱塗りの社殿で心洗われる参拝が叶います。豪雪の心配がほぼない南国ならではの快適なドライブが楽しめます。
              </p>
            </div>
          </div>

          <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <ThermometerSun className="w-4 h-4 text-amber-700" />
              炭酸水素塩泉の正しい入浴法と美肌キープ術
            </h3>
            <p>
              妙見温泉の炭酸水素塩泉は肌の皮脂や角質を優しく落とす作用があるため、入浴するだけで肌がすべすべになります。
            </p>
            <p>
              そのため、石鹸でゴシゴシ身体を洗う必要はありません。湯船にゆったり浸かった後は、重曹成分が肌を清浄にしてくれるため、軽く水分を拭き取るだけに留め、部屋に戻ったら乳液やオイルで水分を閉じ込める保湿ケアを行うと、翌朝驚くほど滑らかな美肌を実感できます。
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の鹿児島・妙見温泉旅行 FAQ
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-start gap-2">
                  <span className="text-amber-800 shrink-0 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link Section */}
        <section className="bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-amber-300" />
              あわせて読みたい南九州・鹿児島の冬温泉特集
            </h3>
            <p className="text-xs sm:text-sm text-amber-200">
              南国の冬と名湯、極上の黒豚・黒牛会席を満喫する厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-kagoshima-kirishima-onsen-ryoma-black-pork-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">鹿児島・霧島温泉郷</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                霧島神宮の初冬参拝と坂本龍馬ゆかりの名湯
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                立ち込める硫黄の湯けむりと国宝霧島神宮、かごしま黒豚しゃぶしゃぶを味わう歴史ロマン旅。
              </p>
            </Link>

            <Link 
              href="/winter-kagoshima-ibusuki-onsen-sunamushi-black-pork-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">鹿児島・指宿温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                指宿名物砂むし温泉と冬の錦江湾絶景
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                波打ち際の天然砂むし温泉で全身デトックス、黒豚料理と温かな南国ステイを満喫。
              </p>
            </Link>

            <Link 
              href="/winter-miyazaki-takachiho-yokagura-gorge-takachihogyu-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">宮崎・高千穂峡</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                神話の里・高千穂の夜神楽と高千穂牛会席
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                冬の夜に奉納される重要無形民俗文化財の夜神楽と高千穂峡の荘厳な渓谷美を巡る旅。
              </p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
`;

  const outputDir = path.join(__dirname, '..', '..', 'src', 'app', slug);
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'page.tsx'), pageContent, 'utf8');
  console.log(`Generated: src/app/${slug}/page.tsx`);
}

module.exports = { generateKagoshimaMyokenPage };
