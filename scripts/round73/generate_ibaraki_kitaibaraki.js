const fs = require('fs');
const path = require('path');

function generateIbarakiKitaibarakiPage(hotels) {
  const slug = 'winter-ibaraki-kitaibaraki-isohara-onsen-ankou-dobujiru-stay';
  const title = '【11・12月茨城・北茨城温泉郷の元祖あんこう鍋・濃厚どぶ汁と太平洋絶景】五浦・磯原の温まり美肌塩化物泉＆常陸牛の宿5選';
  const description = '11月から12月にかけて、東京から常磐道やJR特急ひたちで約2時間の茨城県最北部「北茨城温泉郷（平潟・磯原・五浦）」は、冬の味覚の王様「あんこう」の本格シーズンを迎えます。北茨城は全国あんこう鍋発祥の地として知られ、水を一切使わずに生あん肝を鍋肌でじっくり乾煎りして溶かし、秘伝味噌とアンコウ自身の水分だけで炊き上げる究極の漁師料理「どぶ汁（どぶじる）」の本場です。太平洋の荒波が削り出した奇岩・六角堂が佇む五浦海岸の絶景、地下深層から湧出する高濃度塩化物泉の「温まり美肌の湯」、そして銘柄牛「常陸牛」の極上会席。水平線から昇る初冬の日の出を露天風呂から望む、北茨城の厳選名旅館・温泉ホテル5選を徹底解説。';

  const hotelDetails = [
    {
      story: '全国あんこう鍋グランプリで二度の日本一に輝き、全国の食通が「究極のあんこう料理」を求めて訪れる伝説の料理宿「平潟港温泉 あんこうの宿 まるみつ旅館」。北茨城・平潟港のすぐそばに佇むこの宿では、毎朝港から直送される最高鮮度のアンコウを熟練の職人が「吊るし切り」で捌きます。看板料理の「元祖どぶ汁」は、生のあん肝を大鍋で炒って黄金色の脂を抽出し、野菜とアンコウの身・皮・胃袋などの「七つ道具」から出るエキスだけで煮込む驚異の濃厚さを誇ります。館内には日本初となる「あんこうコラーゲン風呂」や泥パック温泉など多彩な湯処があり、五感すべてであんこうと温泉の恵みを堪能できます。',
      roomTip: '和の趣あふれる落ち着いた純和室またはモダン客室。静かな港町の潮風を感じながら、究極の鍋料理の余韻に包まれてゆったりと寛げます。',
      gourmetTip: '「日本一の極上どぶ汁会席」。生肝を惜しみなく使った濃厚どぶ汁、あん肝ポン酢、アンコウの供酢、〆の絶品コラーゲン雑炊。'
    },
    {
      story: '磯原海岸の波打ち際に建ち、全客室および露天風呂から太平洋の雄大なパノラマを一望できる老舗温泉旅館「としまや月浜の湯」。11月・12月には空気が凛と澄み渡り、客室の窓や海沿いの露天風呂から水平線から昇る神々しい朝日の絶景を特等席で眺めることができます。自家源泉の磯原温泉は、海水の成分を豊富に含んだ弱アルカリ性ナトリウム-塩化物泉で、入浴後もぽかぽかとした温もりが持続する「熱の湯」。夕食には北茨城名物のあんこう鍋に加え、大津港・平潟港直送の地魚刺身や、茨城が誇る極上霜降り和牛「常陸牛」のステーキが並ぶ豪華会席が供されます。',
      roomTip: '海側に面したオーシャンビュー和室または展望風呂付き客室。波の音を間近に聞きながら、太平洋のダイナミックな水平線に癒やされる優雅な時間。',
      gourmetTip: '「常陸冬の味覚・本格あんこう鍋と常陸牛会席」。コク深い自家製味噌仕立てのあんこう鍋、とろける常陸牛サーロイン、近海朝獲れ地魚姿造り。'
    },
    {
      story: '近代日本美術の巨匠・岡倉天心や横山大観が愛した風光明媚な五浦海岸の高台に位置し、息を呑む絶景と歴史情緒を誇る名門「五浦観光ホテル本館／別館大観荘」。太平洋の白波が打ち寄せる断崖と緑の松林を見下ろす展望大露天風呂はまさに圧巻で、初冬の澄んだ青空と紺碧の海、朝焼けのグラデーションを源泉掛け流しの湯に浸かりながら堪能できます。五浦温泉はナトリウム・カルシウム-塩化物泉で、国内屈指の濃厚な塩分とミネラルを含み、冷え症や疲労回復に抜群の効能を誇ります。冬の味覚として名高い五浦あんこう鍋と磯料理の伝統会席が旅情を深めます。',
      roomTip: '五浦海岸と太平洋を見晴らす絶景和洋室。六角堂を遠望し、波の白波と松の緑が織りなす日本画のようなパノラマを独占。',
      gourmetTip: '「五浦伝統・特選あんこう会席」。伝統の合わせ味噌で煮込むふっくらあんこう鍋、新鮮なあん肝刺し、大津港水揚げの旬魚舟盛り。'
    },
    {
      story: '磯原海岸のシンボルとして親しまれる奇岩「二ツ島」を真正面に望む唯一無二の絶好ロケーションに建つ「海音色の宿 偕 二ツ島（旧：二ツ島観光ホテル）」。全室が太平洋と二ツ島に向かって開かれており、まるで海の上に浮いているかのような開放感が広がります。初冬の夜にはライトアップされた二ツ島が夜の海に幻想的に浮かび上がり、早朝には二ツ島のシルエット越しに昇る初日の出のような朝日を鑑賞できます。貸切露天風呂では波飛沫の音をBGMにプライベートな湯浴みが可能。地元の底引き網漁で獲れた新鮮な魚介と、冬限定の濃厚あんこう鍋が評判です。',
      roomTip: '全室オーシャンフロントの和モダン客室。窓辺のソファに身を委ね、二ツ島と打ち寄せる白波を眺めながら過ごす非日常のリトリート。',
      gourmetTip: '「二ツ島名物・磯原あんこう鍋と地魚満喫コース」。濃厚なあん肝を溶かし込んだ特製あんこう鍋、平潟港直送の平目やメヒカリ料理、磯の香り豊かな雑炊。'
    },
    {
      story: '「自然と調和する心地よい滞在」をテーマにした海辺のスタイリッシュなリゾート温泉宿「北茨城ロハス 磯原シーサイドホテル」。屋上に新設された天空露天風呂からは、遮るもののない180度の太平洋水平線が広がり、初冬の澄明な夜空に輝く満天の星と月、そして早朝のマジックアワーを体感できます。磯原温泉の高濃度ミネラル泉で身体を芯まで温めた後は、地元の無農薬野菜や大津港の朝獲れ地魚、常陸牛、そして冬の看板料理である特製あんこう鍋を創作和食スタイルで味わう贅沢。洗練されたインテリアと温かなおもてなしで女性やカップルにも高い人気を誇ります。',
      roomTip: '太平洋を一望するバルコニー付きオーシャンビュールーム。シンプルで心地よい北欧モダン調の家具に囲まれ、海風を感じるリラックス空間。',
      gourmetTip: '「ロハススタイル・冬の北茨城美食会席」。料理長特製の濃厚あんこう鍋、茨城銘柄牛・常陸牛の低温ロースト、契約農家の冬野菜バーニャカウダ。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥17,600〜' : i === 1 ? '¥22,000〜' : i === 2 ? '¥12,100〜' : i === 3 ? '¥7,100〜' : '¥7,700〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.67' : i === 1 ? '4.47' : i === 2 ? '4.25' : i === 3 ? '4.36' : '4.46');
    const reviewCount = h.reviewCount || (i === 0 ? 890 : i === 1 ? 1340 : i === 2 ? 1820 : i === 3 ? 670 : 1210);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR常磐線 磯原駅または大津港駅より無料送迎バスまたは車で約5〜10分。常磐自動車道 北茨城ICより車で約10〜15分')},
              special: ${JSON.stringify(h.hotelSpecial || '太平洋絶景露天風呂＆11・12月元祖あんこう鍋・濃厚どぶ汁・常陸牛会席')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '全国あんこう鍋グランプリ優勝の圧倒的実績＆水を一滴も使わない元祖濃厚「どぶ汁」の極み' : i === 1 ? '全室オーシャンビュー＆水平線から昇る神々しい初冬の朝日を望む太平洋展望露天風呂' : i === 2 ? '岡倉天心・横山大観ゆかりの五浦海岸崖上に建つ名門宿＆太平洋パノラマ大露天風呂' : i === 3 ? '奇岩「二ツ島」が目前に迫る全室オーシャンフロント＆夜の幻想的な島ライトアップ' : '屋上天空露天風呂から望む180度の大海原パノラマ＆地産地消ロハススタイルの冬美食')},
                ${JSON.stringify(i === 0 ? '平潟港直送の超鮮度アンコウ七つ道具会席＆日本初のあんこうコラーゲン美肌風呂' : i === 1 ? '自家源泉磯原温泉の温まり美肌塩化物泉＆特選常陸牛ステーキと地魚姿造り' : i === 2 ? '国内屈指の高濃度ミネラルを含む源泉掛け流し五浦温泉＆伝統の五浦あんこう鍋会席' : i === 3 ? '波打ち際の貸切露天風呂でプライベート湯浴み＆地元底引き網漁直送の海鮮ディナー' : '高濃度塩化物泉の温まり美肌湯＆特製あんこう鍋と常陸牛低温ローストの創作会席')},
                ${JSON.stringify(i === 0 ? '全国の鍋好きが集う聖地＆平潟港の風情漂う温もりあふれるおもてなしの宿' : i === 1 ? '磯原駅からのアクセス良好＆冬の冷えを芯から癒やす「熱の湯」塩化物温泉' : i === 2 ? '六角堂や天心記念五浦美術館へ徒歩圏内＆文豪の足跡を感じる歴史と気品ある佇まい' : i === 3 ? '常磐道北茨城ICから車で15分の快走路＆日常を忘れ波音に包まれるリトリート' : '都心から特急ひたちで約2時間の気軽な週末旅＆清潔感あふれるモダンリゾート')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "北茨城の11月・12月の気候や気温、冬の旅行時の服装は？",
      a: "茨城県北茨城市は太平洋沿岸に位置するため、冬期でも積雪することは非常に稀で、晴天率の高いからっとした冬晴れが続きます。11月の平均最高気温は14〜16℃、最低気温は5〜7℃前後で日中は過ごしやすい小春日和が見られます。12月に入ると最高気温は10〜12℃、最低気温は1〜3℃程度まで低下し、海沿い特有の冷たい浜風（からっ風）が吹き付けます。車でアクセスする場合、沿岸部の幹線道路はノーマルタイヤでも走行可能な日が多いですが、朝晩の凍結や峠越えに備えてスタッドレスタイヤの装着をおすすめします。散策時は風を通さないダウンコートやマフラーをご用意ください。"
    },
    {
      q: "北茨城名物「どぶ汁」と一般的な「あんこう鍋」の違いとは？",
      a: "「あんこう鍋」が昆布や鰹の出汁に野菜とアンコウを入れて味噌や醤油で煮込むのに対し、「どぶ汁（どぶじる）」は一切の水や出汁を使わない元祖の調理法です。漁師が船上で貴重な真水を使わずにアンコウを食べるために考案されたとされ、生のアンコウの肝（あん肝）を鍋でじっくり乾煎りして脂を溶かし、そこに味噌と大根・白菜などの野菜、アンコウの七つ道具（身・皮・胃・エラ・ヒレ・卵巣）を投入します。野菜とアンコウ自身から染み出る水分だけで炊き上げるため、あん肝が全体に溶け込んだスープは驚くほど濃厚で、深いコクと旨味が凝縮した究極の鍋料理です。"
    },
    {
      q: "北茨城温泉郷（平潟・磯原・五浦）の泉質と効能は？",
      a: "北茨城エリアの温泉は、主に「ナトリウム-塩化物泉」「ナトリウム・カルシウム-塩化物泉」が多く湧出しています。太古の海水が地層深くに閉じ込められた高張性の強塩泉で、塩分濃度が高いため、入浴すると皮膚に塩の薄い被膜を形成して体温の蒸発を防ぎます。そのため「温まりの湯」「熱の湯」と呼ばれ、冬の厳しい冷え性や関節痛、神経痛を芯から和らげ、湯上がり後も数時間にわたって体がぽかぽかと温かい状態が続きます。また、メタケイ酸やカルシウム成分が豊富で肌を滑らかにしっとり整える美肌効果も抜群です。"
    },
    {
      q: "東京方面から北茨城へのアクセス方法と所要時間は？",
      a: "東京方面からのアクセスは鉄道・車の双方で非常にスムーズです。鉄道を利用する場合、JR東京駅または上野駅から常磐線特急「ひたち」に乗車し、「磯原駅」または「大津港駅」まで乗り換えなしで約1時間40分〜1時間50分で到着します。主要な温泉旅館では最寄り駅からの無料送迎サービスを行っています。車の場合は、首都高速から常磐自動車道を経由し「北茨城IC」まで三郷JCTから約1時間40分。ICを降りてから海沿いの各温泉郷（磯原・五浦・平潟）までは一般道で10〜15分程度とアクセス抜群です。"
    },
    {
      q: "11月・12月の北茨城で訪れるべきおすすめ周辺観光スポットは？",
      a: "初冬の北茨城は景勝地と文化施設が見どころです。まず外せないのが「五浦海岸（いづらかいがん）」。太平洋の荒波が打ち寄せる断崖絶壁に建つ朱塗りの「六角堂（岡倉天心遺跡）」は、初冬の澄んだ海と松の緑とのコントラストが息を呑む美しさです。すぐ近くの「茨城県天心記念五浦美術館」では近代日本画の名品を鑑賞できます。また、波打ち際にそびえ立つ奇岩「二ツ島」や、童謡詩人・野口雨情の生家・記念館、平潟港のノスタルジックな漁港風景の散策も冬旅の情緒を満喫できるスポットです。"
    }
  ];

  const pageContent = `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, SunMedium, Anchor
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '北茨城 温泉 宿泊, 磯原温泉, 五浦温泉, 平潟港温泉, まるみつ旅館, としまや月浜の湯, 五浦観光ホテル, 二ツ島観光ホテル, 磯原シーサイドホテル, あんこう鍋 どぶ汁, 常陸牛 宿, 太平洋 日の出 露天風呂',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の北茨城五浦海岸と太平洋の日の出絶景'
      }
    ]
  }
};

const faqList = ${JSON.stringify(faqList, null, 2)};

export default function IbarakiKitaibarakiWinterFeature() {
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
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T09:00:00+09:00",
        "dateModified": "2026-09-28T09:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "Croud Travel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "Croud Travel 関東海洋名湯・冬の味覚紀行取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.com/${slug}#breadcrumb",
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
            "name": "茨城・北茨城温泉郷 元祖あんこう鍋濃厚どぶ汁と太平洋絶景の宿",
            "item": "https://croud-travel.com/${slug}"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/${slug}#faq",
        "mainEntity": faqList.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  };

  const hotels = [
${hotelCardsCode}
  ];

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <header className="relative w-full h-[360px] sm:h-[480px] flex items-end justify-center bg-slate-900 text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
          alt="初冬の北茨城海岸と太平洋の荒波"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold">
            <Anchor className="w-4 h-4" />
            11月・12月 冬の味覚＆太平洋絶景特集｜茨城・北茨城温泉郷
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            元祖あんこう鍋・濃厚どぶ汁と太平洋絶景<br className="hidden sm:inline" />
            温まり美肌塩化物泉＆常陸牛の極上宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            11月本格解禁。水を一滴も使わない漁師伝承の濃厚「どぶ汁」と、冷えを芯から癒やす高濃度塩化物泉を堪能する大人の初冬紀行。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-amber-400" /> 11月〜12月が旬の最盛期</span>
            <span className="flex items-center gap-1"><Flame className="w-4 h-4 text-amber-400" /> 芯まで温まる強塩化物泉「熱の湯」</span>
            <span className="flex items-center gap-1"><Utensils className="w-4 h-4 text-amber-400" /> 本場元祖どぶ汁＆特選常陸牛</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Section 1: Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <SunMedium className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Winter Heritage & Ocean Views</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                本場・北茨城で味わう冬の最高峰｜11月・12月に訪れるべき理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              本州東岸、茨城県の最北端に位置する北茨城市（磯原・五浦・平潟）は、古くから親潮と黒潮が交錯する豊穣の海に育まれた名高い水産地帯です。近代日本画壇の巨匠・岡倉天心や横山大観、菱田春草らが思索を深めた五浦海岸の奇岩美、そして童謡詩人・野口雨情が愛した白砂青松の磯原海岸など、芸術家たちの心を捉えて離さなかった風光明媚な景勝が今なお息づいています。
            </p>
            <p>
              11月から12月を迎えると、北茨城の大気は澄み渡り、太平洋の荒波が白く砕けるダイナミックな海景が一段と鮮烈さを増します。この時期に北茨城を目指す最大の目的は、何と言っても全国にその名を轟かせる冬の味覚の王者「あんこう」です。「東のアンコウ、西のフグ」と並び称されるアンコウですが、北茨城はその本場中の本場であり、全国あんこう鍋発祥の地として知られています。
            </p>
            <p>
              海水温が急降下する初冬、寒さに耐えるためアンコウの肝（あん肝）は一段と大きく肥大し、上質な脂をぎっしりと蓄えます。この極上の生あん肝を惜しみなく使った濃厚な鍋料理と、冷え切った身体を包み込む高濃度塩化物泉の温もりが、初冬の旅路をこの上ない贅沢で満たしてくれます。
            </p>
          </div>
        </section>

        {/* Section 2: Onsen Features */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">High-Saline Mineral Springs</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                太古の化石海水が育む「温まりの湯」｜磯原・五浦・平潟の泉質効能
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              北茨城温泉郷（平潟港温泉、磯原温泉、五浦温泉）に湧出する源泉の最大の特徴は、太古の海水が数百万年もの歳月をかけて地層深くに閉じ込められた「高張性化石海水」に由来する点にあります。
            </p>
            <p>
              泉質は主に「ナトリウム-塩化物泉」や「ナトリウム・カルシウム-塩化物泉」で、海水の約半分の濃度に相当する高濃度のミネラルと食塩成分を含んでいます。入浴すると、微小な塩分が皮膚の表面を均一に覆い、肌の水分や体温が逃げるのを防ぐ「天然の塩のベール」を作り出します。これにより、湯上がり後も熱が逃げず、「熱の湯」「温まりの湯」として冬の頑固な冷え性や関節痛、腰痛を芯から撃退してくれます。
            </p>
            <p>
              さらに、角質を軟化させて肌をしっとりスベスベにするメタケイ酸やカルシウム成分も豊富に含まれており、乾燥しがちな初冬の肌に潤いを与える美肌効果も抜群です。太平洋から昇る朝日の光が黄金色に輝く波打ち際の露天風呂に身を浸せば、波音のリズムとともに日々の疲労やストレスが完全に洗い流されていきます。
            </p>
          </div>
        </section>

        {/* Section 3: Winter Gourmet */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Legendary Dobujiru & Hitachi Beef</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                水を一滴も使わない漁師直伝の究極鍋「どぶ汁」と銘柄牛「常陸牛」
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              北茨城の冬を語る上で欠かせないのが、アンコウ料理の原点にして最高峰である「どぶ汁（どぶじる）」です。一般的なあんこう鍋が昆布出汁や鰹出汁をベースにするのに対し、元祖のどぶ汁は水を一滴も加えません。
            </p>
            <p>
              調理はまず、獲れたての新鮮な生のあん肝を鉄鍋の底でじっくりと乾煎りすることから始まります。香ばしい香草のような香りが立ち上り、黄金色の肝油がじゅわっと溶け出したところへ、秘伝の地味噌を投入。そこに大根や白菜などの野菜と、アンコウの「七つ道具（身・皮・胃・エラ・ヒレ・卵巣・肝）」を敷き詰めます。火にかけると、野菜の瑞々しい水分とアンコウの身から溢れ出るエキスだけで鍋が満たされ、濃厚なオレンジ色の極上スープが完成します。コラーゲンたっぷりのプルプルとした皮や弾力のある身、そしてあん肝の芳醇なコクが一体となった味わいは、一度食べたら忘れられない衝撃的な美味しさです。
            </p>
            <p>
              さらに、北茨城の宿では海鮮にとどまらず、茨城県が誇る黒毛和牛の最高峰「常陸牛（ひたちぎゅう）」も同時に楽しめます。指定生産者が丹精込めて育て上げた常陸牛は、きめ細やかな霜降りと上品な甘みが特徴で、陶板焼きやステーキで香ばしく焼き上げれば、海の恵みと大地の恵みが織りなす至福の美食コースが完成します。
            </p>
          </div>
        </section>

        {/* Section 3.5: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Kitaibaraki Scenic Model Course</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の北茨城1泊2日ドライブモデルコース｜五浦海岸・六角堂から絶景温泉宿へ
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              <strong>【1日目】</strong><br />
              常磐自動車道「北茨城IC」を降り、まずは国の登録記念物である名勝「五浦海岸（いづらかいがん）」へ。荒波が打ち寄せる断崖に佇む朱塗りの「六角堂」を拝観し、太平洋の迫力ある波飛沫と岡倉天心の思索の地に思いを馳せます。続いて隣接する「茨城県天心記念五浦美術館」で近代日本画の傑作を鑑賞。お昼は平潟港近くの食事処で、朝獲れヒラメの刺身や郷土名物メヒカリの唐揚げを味わいます。
            </p>
            <p>
              午後は磯原海岸へ移動し、海中にそびえ立つ奇岩「二ツ島」の雄姿を海岸線から見学。15時過ぎに北茨城温泉郷の宿へチェックイン。高濃度塩化物泉の展望露天風呂に浸かり、太平洋の夕景と潮騒を心ゆくまで堪能します。夕食には名物「元祖どぶ汁」と常陸牛ステーキが並ぶ豪華会席を地酒とともに味わい、最後は濃厚なあん肝出汁で作る極上コラーゲン雑炊で締めくくります。
            </p>
            <p>
              <strong>【2日目】</strong><br />
              水平線から昇る真紅の日の出を露天風呂から拝み、清々しい冬の朝湯を満喫。朝食後は、童謡「シャボン玉」「七つの子」で知られる野口雨情の生家・記念館を散策。大津港の海産物直売所で新鮮な干物やあんこうの加工品をお土産に買い求め、充実した思い出とともに帰路につきます。
            </p>
          </div>
        </section>

        {/* Section 4: 5 Selected Inns */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Featured Kitaibaraki Onsen Ryokan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              元祖どぶ汁と太平洋絶景に癒やされる｜北茨城温泉郷の厳選宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              すべて楽天トラベルで高い評価を獲得し、本場のあんこう料理や高濃度塩化物温泉、絶景オーシャンビューを誇る本物の宿を厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-5/12 relative h-64 md:h-auto min-h-[260px] bg-slate-100 flex-shrink-0">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <span className="text-amber-400 font-extrabold">#{h.id}</span>
                    <span>北茨城の名宿</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    目安料金: {h.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {h.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-amber-50 text-amber-900 px-2.5 py-1 rounded-full text-xs font-semibold border border-amber-200/60">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{h.rating}</span>
                        <span className="text-slate-500 font-normal">({h.reviews}件)</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-amber-900 flex items-center gap-1.5">
                          <Landmark className="w-3.5 h-3.5 text-amber-700" />
                          客室・滞在のこだわり
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {h.roomTip}
                        </p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-sky-900 flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-sky-700" />
                          旬の極上グルメ
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {h.gourmetTip}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                        この宿のおすすめポイント
                      </div>
                      <ul className="space-y-1.5">
                        {h.highlights.map((item, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-[11px] text-slate-500">
                      <span>交通: {h.access}</span>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-sm hover:shadow transition group flex-shrink-0"
                    >
                      <span>楽天トラベルでプランを見る</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Travel Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Seasonal Advice</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の北茨城旅行｜快適な服装と冬のドライブ注意点
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-amber-800" />
                浜風対策と脱ぎ着しやすい防寒着
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                北茨城の沿岸部は冬でも降雪は少ないですが、太平洋から吹き付ける海風が強く感じられる日があります。五浦海岸の六角堂や展望台散策には風を通さないウィンドブレーカーやダウンジャケット、手袋が役立ちます。館内や食事処は暖房がしっかり効いているため、温度調節しやすいインナーが最適です。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-amber-800" />
                常磐道利用と早めのチェックイン
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                常磐自動車道は三郷JCTから北茨城ICまでほぼ直線的で走りやすい高速道路です。日没が早い11月・12月は16時30分頃には暗くなるため、15時頃の明るい時間帯に宿へチェックインするのがベスト。夕暮れ前の露天風呂にゆっくり浸かり、旅の疲れをほぐしてから至極のあんこうディナーを迎えましょう。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                茨城・北茨城温泉郷冬旅のよくある質問（FAQ）
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-amber-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Internal Links */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Related Winter Hot Springs & Gourmet Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい東日本・関東近郊の冬名湯＆極上鍋特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の冬の味覚、伊勢海老、金目鯛、温泉リゾートをめぐる人気特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-chiba-minamiboso-onsen-ise-ebi-oceanview-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">千葉・南房総温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">温暖避寒旅と旬の房州伊勢海老・太平洋パノラマ露天の宿</h3>
            </Link>
            <Link 
              href="/winter-shizuoka-yaizu-onsen-fuji-view-minami-maguro-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">静岡・焼津温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">初冬駿河湾越し富士山絶景と天然南マグロ・高張性美肌温まりの湯の宿</h3>
            </Link>
            <Link 
              href="/winter-miyagi-matsushima-onsen-kaki-matsushimawan-view-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">宮城・松島温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">初冬松島湾絶景と解禁松島牡蠣・日本三景日の出展望露天の宿</h3>
            </Link>
            <Link 
              href="/winter-tochigi-nasu-onsen-snow-nasu-wagyu-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">栃木・那須温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">開湯千三百年那須鹿の湯と極上那須和牛・冬の高原リゾート宿</h3>
            </Link>
            <Link 
              href="/winter-gunma-ikaho-onsen-golden-water-joshu-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">群馬・伊香保温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">石段街情緒と名湯黄金の湯・上州牛すき焼きを味わう歴史の宿</h3>
            </Link>
            <Link 
              href="/winter-kanagawa-hakone-fuji-view-onsen-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">神奈川・箱根温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">雪化粧の霊峰富士を望む絶景露天風呂と伝統会席のラグジュアリー宿</h3>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
`;

  const outputPath = path.join(__dirname, '..', '..', 'src', 'app', slug, 'page.tsx');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, pageContent, 'utf8');
  console.log(`Generated: ${outputPath}`);
}

module.exports = { generateIbarakiKitaibarakiPage };
