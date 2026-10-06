import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Sunrise, Waves, Sun, Flame, Landmark, Building, Fish, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月高知】太平洋の奇跡「だるま朝日！名宿5選',
  description: '11月中旬から1月中旬、高知県室戸岬は、冷気と黒潮の海水温差が生む冬の光学現象「だるま朝日・だるま夕日」のベストシーズン。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: 'だるま朝日, だるま夕日, 室戸岬, 室戸キンメダイ, 室戸キンメ丼, 御厨人窟 初日の出, 空海, ホテルなはり, 岬観光ホテル, リゾートホテル海辺の果樹園, 11月 12月 1月 高知旅行, 室戸海洋深層水',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kochi-muroto-daruma-sunrise-kinmedai-deepsea-stay/"
  },
  openGraph: {
    title: '【11・12・1月高知】太平洋の奇跡「だるま朝日！名宿5選',
    description: '11月中旬から1月中旬、高知県室戸岬は、冷気と黒潮の海水温差が生む冬の光学現象「だるま朝日・だるま夕日」のベストシーズン。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-kochi-muroto-daruma-sunrise-kinmedai-deepsea-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の室戸岬だるま朝日と太平洋の奇跡'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月高知】太平洋の奇跡「だるま朝日・だるま夕日」と冬の極上「室戸キンメダイ」・御厨人窟初日の出＆海洋深層水リゾート宿5選",
    description: "11月中旬から1月中旬、高知県室戸岬は、冷気と黒潮の海水温差が生む冬の光学現象「だるま朝日・だるま夕日」のベストシーズン。弘法大師空海が開眼した御厨人窟からの元旦初日の出、深海から水揚げされる冬の極上ブランド魚「室戸キンメダイ（金目鯛）」の煮付けやキンメ丼。冬の陽だまりリゾートと太平洋を望む厳選名宿5選と1泊2日モデルコースを徹底ガイドします。",
    images: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function KochiMurotoDarumaWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12・1月高知】太平洋の奇跡「だるま朝日・だるま夕日」と冬の極上「室戸キンメダイ」・御厨人窟初日の出＆海洋深層水リゾート宿5選",
    description: "11月中旬から1月中旬、高知県室戸岬は、冷気と黒潮の海水温差が生む冬の光学現象「だるま朝日・だるま夕日」のベストシーズン。弘法大師空海が開眼した御厨人窟からの元旦初日の出、深海から水揚げされる冬の極上ブランド魚「室戸キンメダイ（金目鯛）」の煮付けやキンメ丼。冬の陽だまりリゾートと太平洋を望む厳選名宿5選と1泊2日モデルコースを徹底ガイドします。",
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    datePublished: '2026-10-02',
    dateModified: '2026-10-02',
    author: {
      '@type': 'Organization',
      name: 'クラドトラベル編集部',
      url: 'https://croud-travel.pages.dev'
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.pages.dev/winter-kochi-muroto-daruma-sunrise-kinmedai-deepsea-stay'
    }
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://croud-travel.pages.dev'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '冬の特集一覧',
        item: 'https://croud-travel.pages.dev/features'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '高知・室戸だるま太陽＆金目鯛特集',
        item: 'https://croud-travel.pages.dev/winter-kochi-muroto-daruma-sunrise-kinmedai-deepsea-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "室戸岬の「だるま朝日・だるま夕日」とは？見られる時期と時間帯の条件は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "「だるま朝日・だるま夕日」は、大気と海水の温度差によって光が下方に屈折して生じる下位蜃気楼現象です。太陽が水平線に接する瞬間、海面に映ったもう一つの太陽の像がせり上がり、二つの太陽がくびれて合体することで縁起の良い「だるま」のような形に見えます。ベストシーズンは海水温が比較的高く冷え込みが厳しい「11月中旬から1月中旬」。朝日が見られるのは室戸岬の東海岸（黒岩鼻周辺など）、夕日が見られるのは西海岸（道の駅キラメッセ室戸周辺など）です。出現率は冬でも快晴かつ風が穏やかな日の1割〜2割程度と希少で、「幸運をもたらす太陽」として珍重されています。"
        }
      },
      {
        '@type': 'Question',
        name: "冬のブランド魚「室戸キンメダイ」の特徴と名物「室戸キンメ丼」のルールは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "室戸岬沖は、海岸からわずか数キロで水深1,000メートルを超える急峻な海底地形（室戸海山）があり、清浄な室戸海洋深層水が湧昇しています。ここで一本釣りされる金目鯛は「日戻りキンメ」と呼ばれ、鮮度が抜群。特に11月〜1月の冬場は産卵に向けて上質な脂がたっぷりと乗り、身の甘みと旨味が最高潮に達します。名物「室戸キンメ丼」は地元協議会が定めた統一ルールがあり、「室戸沖の天然金目鯛の照り焼き」と「季節の地魚の刺身」をひとつの丼に盛り、最後は金目鯛のアラから取った熱々の出汁をかけてお茶漬け風に締めくくります。"
        }
      },
      {
        '@type': 'Question',
        name: "弘法大師空海が開眼した「御厨人窟（みくろど）」の見どころと初日の出の魅力は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "御厨人窟（みくろど）と神明窟（しんめいくつ）は、室戸岬の先端近くにある波の浸食によってできた天然の海食洞窟です。平安時代初期、若き日の弘法大師（空海）がここで厳しい虚空蔵求聞持法の修行を行い、洞窟の中から見えたものが「空と海」だけであったことから「空海」の法名を名乗ったと伝えられる仏教史上の聖地です。洞窟内には静寂と神聖な空気が満ち、洞窟の入口から太平洋を望むと、元旦の初日の出が水平線から真っ赤に昇る奇跡の光景を拝むことができます。新年の開運・心願成就に強力なパワースポットです。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の室戸岬の気候と服装、黒潮による暖かさについて教えてください。",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "室戸岬は沖合を暖流の黒潮が直接洗うため、本州や四国内陸部に比べて冬でも非常に温暖です。真冬の12月・1月でも日中の最高気温が12度〜15度前後まで上がる日が多く、「陽だまりの南国」の風情が漂います。ただし、岬の先端は太平洋からの海風が強く吹き抜けるため、防風性のあるウィンドブレーカーやジャケット、風に飛ばされない帽子が必須です。朝日の鑑賞や夕暮れ時は急激に冷え込むため、重ね着できるフリースや薄手ダウンを用意しておくと安心です。"
        }
      },
      {
        '@type': 'Question',
        name: "室戸岬へのアクセスルート（高知空港・高知市街から）とドライブの注意点は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "高知龍馬空港または高知市街から室戸岬へは、国道55号を南東へ一本道で走るシーサイドドライブ（所要時間約1時間45分〜2時間）。公共交通機関の場合は、ごめん・なはり線の終点「奈半利駅」から高知東部交通バスに乗り換えて約50分で室戸岬に到着します。海岸沿いは平坦で雪や路面凍結の心配はほぼ皆無（ノーマルタイヤで走行可能）ですが、カーブが多く大型トラックも通行するためスピードの出し過ぎには注意が必要です。途中の「道の駅キラメッセ室戸」や「北川村モネの庭」に立ち寄りながらのドライブが最適です。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "ホテル　なはり",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/20702/20702.jpg",
              rating: 4.05,
              reviews: 607,
              price: "¥7,300〜",
              access: "御免奈半利線　奈半利駅／高速南国ＩＣより約１時間１５分／高知空港より約５０分／バス高知東部交通「法恩寺通」より徒歩３分",
              special: "雄大な自然と黒潮香る南国土佐東部のビジネス・観光・レジャーに、行動の拠点としてご利用下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20702%2F20702.html",
              story: "土佐くろしお鉄道ごめん・なはり線の終着「奈半利駅」より徒歩圏内に位置し、室戸岬観光の拠点として絶大な信頼を誇る料理自慢の宿「ホテル なはり」。冬の最大の目玉は、室戸海洋深層水が育む地魚と、沖合で一本釣りされた極上の「室戸キンメダイ」づくし会席です。脂の乗った金目鯛の煮付けは、甘辛い特製タレがふっくらとした白身に染み渡り、口の中でとろけるような至福の旨味。さらに冬の戻り鰹の藁焼きタタキや、クジラ料理など土佐ならではの滋味が贅沢に並びます。最上階の大浴場には室戸海洋深層水を贅沢に沸かしたミネラル豊富な湯が注がれ、入浴後は肌がしっとりと潤い、体の芯まで温まります。",
              roomTip: "和室または広めのツインルーム。落ち着いた和の趣で、旅の疲れを畳の上でゆったりと癒せる快適な空間です。",
              gourmetTip: "「室戸キンメダイ丸ごと一匹煮付け会席」。深海の恵みである金目鯛を秘伝出汁でふっくら炊き上げた冬の看板料理。",
              highlights: [
                "室戸海洋深層水の大浴場完備・深海のミネラル成分が肌を包み込む温まりの湯",
                "室戸キンメダイ一匹丸ごと煮付けが絶品・鰹のタタキと土佐郷土料理の競演",
                "ごめん・なはり線奈半利駅徒歩圏内・室戸世界ジオパークへの周遊に最適"
              ]
            },
            {
              id: 2,
              name: "岬観光ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/139956/139956.jpg",
              rating: 3.71,
              reviews: 108,
              price: "¥7,700〜",
              access: "【お車】高知自動車道、南国ICより約2時間　【その他】「奈半利駅」より路線バスにて約55分",
              special: "【登録有形文化財に登録】室戸岬の海岸にあり朝日や夕日が楽しめます",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139956%2F139956.html",
              story: "室戸岬の先端、波打ち際すぐ目の前に佇み、国の登録有形文化財にも指定されている歴史ある名建築「岬観光ホテル」。昭和初期に建てられた本館は、レトロな木造洋風建築の美学が随所に息づき、まるで映画の舞台に迷い込んだかのようなノスタルジックな空気に包まれます。客室の窓正面には遮るもののない太平洋の大海原が広がり、冬の朝には水平線から昇る真紅の朝陽、夕暮れには空と海を黄金色に染め上げる夕日を部屋にいながら独占。夕食は室戸港に揚がった新鮮な金目鯛や地魚のお造り、名物室戸キンメ丼など、素材の鮮度を活かした温かい手料理でもてなしてくれます。",
              roomTip: "オーシャンフロント和室。窓のすぐ下に太平洋の白波が打ち寄せ、冬の「だるま太陽」を部屋の暖かさの中で拝める特等席です。",
              gourmetTip: "「岬の磯会席・金目鯛と旬魚尽くし」。新鮮な金目鯛の刺身と照り煮、室戸野菜を使った滋味深い手作り料理を堪能。",
              highlights: [
                "登録有形文化財の木造洋風建築・太平洋の荒波が目の前に迫る唯一無二のロケーション",
                "部屋の窓から「だるま朝日・夕日」を観賞・波音を子守唄に眠るノスタルジックステイ",
                "御厨人窟や室戸岬灯台まで車数分・弘法大師ゆかりの聖地巡りに最高の立地"
              ]
            },
            {
              id: 3,
              name: "リゾートホテル海辺の果樹園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13721/13721.jpg",
              rating: 4.08,
              reviews: 674,
              price: "¥7,300〜",
              access: "高知空港より車１５分／高知東部自動車道高知龍馬空港ICから１５分／夜須駅より車で3分",
              special: "【海抜50mの小高い丘から太平洋を一望】全室40平米以上の客室！ファミリー・カップルご利用にご好評♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13721%2F13721.html",
              story: "太平洋を一望する小高い丘の上に建ち、果樹園の緑と南欧風の白壁がリゾート感を醸し出す「リゾートホテル海辺の果樹園」。温暖な土佐の冬の陽だまりを満喫できる広大な敷地には、全室オーシャンビューのバルコニー付き客室が並びます。冬の朝、水平線から昇る光芒をベッドから眺める時間は極上の贅沢。敷地内には海洋深層水を取り入れた露天風呂付き大浴場やサウナを備え、ミネラルたっぷりの湯が旅の疲れを心地よく解きほぐします。夕食は土佐伝統の豪快な「皿鉢（さわち）料理」や、金目鯛、土佐あかうしのステーキなど、海山の恵みが競演する華やかなコースが揃います。",
              roomTip: "オーシャンビューデラックスツイン。広々としたバルコニーから太平洋のパノラマを一望でき、冬の澄んだ星空も楽しめます。",
              gourmetTip: "「土佐海鮮皿鉢会席と金目鯛プラン」。豪快な鰹のタタキ盛り合わせと、上品な甘み広がる金目鯛のソテーや煮付けを贅沢に。",
              highlights: [
                "全室太平洋望むバルコニー付き・南欧風リゾートで味わう温暖な土佐の冬",
                "海洋深層水露天風呂とサウナ・土佐名物豪快「皿鉢料理」ディナーを堪能",
                "果樹園の豊かな自然に囲まれた癒しの丘・家族旅行や記念日ステイに大好評"
              ]
            },
            {
              id: 4,
              name: "オーベルジュ　土佐山",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/72851/72851.jpg",
              rating: 4.63,
              reviews: 249,
              price: "¥30,580〜",
              access: "高知駅よりお車にて約４０分",
              special: "ここは、したたる緑と澄みわたる流れに抱かれた「オーベルジュ」至福の味わいと極上の空間をご用意。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72851%2F72851.html",
              story: "鏡川の清流と山懐に抱かれたオーベルジュスタイルの最高峰隠れ宿「オーベルジュ 土佐山」。室戸岬への周遊ドライブと組み合わせて、土佐の山海の美を極めたい大人旅に絶大な人気を誇ります。木のぬくもりを大切にした建築美と、川のせせらぎが心地よいヴィラ＆客室。冬のディナーは、室戸沖で水揚げされた極上の金目鯛や伊勢海老、土佐あかうし、地元の契約農家が育てる冬根菜を、洗練されたフレンチジャポネのフルコースで提供。天然温泉「土佐山温泉」はとろみのある美肌の湯で、冬の澄んだ星空を仰ぎながらの露天風呂は言葉を失うほどの静寂と贅沢に満ちています。",
              roomTip: "清流を望むヴィラスイート。独立したプライベート空間で、暖炉や薪ストーブの温もりとともに静かな冬籠もりを満喫できます。",
              gourmetTip: "「土佐山冬のスペシャリテディナー」。室戸産金目鯛のポワレと土佐あかうしのロースト、山里の冬野菜をワインとともに。",
              highlights: [
                "自然と建築美が融合する最高峰隠れ宿・室戸金目鯛と土佐あかうしの極上フレンチ",
                "美肌の天然温泉露天風呂・冬の澄み渡る満天の星空を眺める静寂のプライベート空間",
                "一流シェフが織りなす至高の美食体験・大人の特別な冬のご褒美旅にふさわしい宿"
              ]
            },
            {
              id: 5,
              name: "ホテルＴＡＭＡＩ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/20497/20497.jpg",
              rating: 3.13,
              reviews: 502,
              price: "¥7,700〜",
              access: "ごめん・なはり線「安芸駅」より徒歩５分／高知空港よりお車で30分",
              special: "■アパ パートナーホテルズ加盟店■太平洋の水平線が見え太陽がふりそそぎ、黒潮が舞う本格的ホテルです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20497%2F20497.html",
              story: "安芸市街の中心に位置し、室戸岬への海岸ドライブ（国道55号）の玄関口として快適な利便性を誇るシティ＆ビジネスホテル「ホテルＴＡＭＡＩ」。最上階の展望レストランからは、雄大な太平洋と安芸平野のパノラマが一面に広がり、冬の夕暮れ時には水面が黄金色に輝くロマンチックな景観を楽しめます。客室は清潔で機能的な設備が整い、全室無料Wi-Fiや充実のアメニティを完備。朝食ビュッフェでは、安芸名物の「ちりめんじゃこ」をたっぷりと載せるちりめん丼や、地元産の新鮮卵、温かい郷土汁が並び、室戸へのドライブの活力をチャージできます。",
              roomTip: "海側高層階ツインルーム。大きな窓から太平洋の水平線を望み、静かで落ち着いた夜を快適に過ごせます。",
              gourmetTip: "「安芸名物ちりめん丼と朝食バイキング」。釜揚げちりめんを炊きたてご飯に山盛りにし、特製ポン酢でさっぱりといただく絶品。",
              highlights: [
                "安芸市街中心の快適拠点・最上階展望レストランから太平洋パノラマを一望",
                "安芸名物ちりめん丼の朝食バイキング・室戸岬への海岸ドライブに抜群の機動力",
                "広々とした無料駐車場完備・ビジネスから観光まで安心のハイクオリティ設備"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "室戸岬の「だるま朝日・だるま夕日」とは？見られる時期と時間帯の条件は？",
    "a": "「だるま朝日・だるま夕日」は、大気と海水の温度差によって光が下方に屈折して生じる下位蜃気楼現象です。太陽が水平線に接する瞬間、海面に映ったもう一つの太陽の像がせり上がり、二つの太陽がくびれて合体することで縁起の良い「だるま」のような形に見えます。ベストシーズンは海水温が比較的高く冷え込みが厳しい「11月中旬から1月中旬」。朝日が見られるのは室戸岬の東海岸（黒岩鼻周辺など）、夕日が見られるのは西海岸（道の駅キラメッセ室戸周辺など）です。出現率は冬でも快晴かつ風が穏やかな日の1割〜2割程度と希少で、「幸運をもたらす太陽」として珍重されています。"
  },
  {
    "q": "冬のブランド魚「室戸キンメダイ」の特徴と名物「室戸キンメ丼」のルールは？",
    "a": "室戸岬沖は、海岸からわずか数キロで水深1,000メートルを超える急峻な海底地形（室戸海山）があり、清浄な室戸海洋深層水が湧昇しています。ここで一本釣りされる金目鯛は「日戻りキンメ」と呼ばれ、鮮度が抜群。特に11月〜1月の冬場は産卵に向けて上質な脂がたっぷりと乗り、身の甘みと旨味が最高潮に達します。名物「室戸キンメ丼」は地元協議会が定めた統一ルールがあり、「室戸沖の天然金目鯛の照り焼き」と「季節の地魚の刺身」をひとつの丼に盛り、最後は金目鯛のアラから取った熱々の出汁をかけてお茶漬け風に締めくくります。"
  },
  {
    "q": "弘法大師空海が開眼した「御厨人窟（みくろど）」の見どころと初日の出の魅力は？",
    "a": "御厨人窟（みくろど）と神明窟（しんめいくつ）は、室戸岬の先端近くにある波の浸食によってできた天然の海食洞窟です。平安時代初期、若き日の弘法大師（空海）がここで厳しい虚空蔵求聞持法の修行を行い、洞窟の中から見えたものが「空と海」だけであったことから「空海」の法名を名乗ったと伝えられる仏教史上の聖地です。洞窟内には静寂と神聖な空気が満ち、洞窟の入口から太平洋を望むと、元旦の初日の出が水平線から真っ赤に昇る奇跡の光景を拝むことができます。新年の開運・心願成就に強力なパワースポットです。"
  },
  {
    "q": "冬の室戸岬の気候と服装、黒潮による暖かさについて教えてください。",
    "a": "室戸岬は沖合を暖流の黒潮が直接洗うため、本州や四国内陸部に比べて冬でも非常に温暖です。真冬の12月・1月でも日中の最高気温が12度〜15度前後まで上がる日が多く、「陽だまりの南国」の風情が漂います。ただし、岬の先端は太平洋からの海風が強く吹き抜けるため、防風性のあるウィンドブレーカーやジャケット、風に飛ばされない帽子が必須です。朝日の鑑賞や夕暮れ時は急激に冷え込むため、重ね着できるフリースや薄手ダウンを用意しておくと安心です。"
  },
  {
    "q": "室戸岬へのアクセスルート（高知空港・高知市街から）とドライブの注意点は？",
    "a": "高知龍馬空港または高知市街から室戸岬へは、国道55号を南東へ一本道で走るシーサイドドライブ（所要時間約1時間45分〜2時間）。公共交通機関の場合は、ごめん・なはり線の終点「奈半利駅」から高知東部交通バスに乗り換えて約50分で室戸岬に到着します。海岸沿いは平坦で雪や路面凍結の心配はほぼ皆無（ノーマルタイヤで走行可能）ですが、カーブが多く大型トラックも通行するためスピードの出し過ぎには注意が必要です。途中の「道の駅キラメッセ室戸」や「北川村モネの庭」に立ち寄りながらのドライブが最適です。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-rose-100 selection:text-rose-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の室戸岬だるま朝日と太平洋の奇跡" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-rose-900/80 backdrop-blur-md text-rose-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-rose-400/30">
            <Sunrise className="w-4 h-4 text-rose-300" />
            11月・12月・1月 冬の高知・室戸岬だるま太陽＆金目鯛特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月高知】太平洋の奇跡「だるま朝日・だるま夕日」と冬の極上「室戸キンメダイ」・御厨人窟初日の出＆海洋深層水リゾート宿5選
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            太平洋を洗う暖流・黒潮と冬の冷気が紡ぎ出す光の奇跡「だるま朝日・だるま夕日」。弘法大師空海が悟りを開いた聖地・御厨人窟からの元旦初日の出と、深海から水揚げされる冬の極上魚王「室戸キンメダイ」。甘辛い照り煮と熱々の出汁茶漬けで締める名物キンメ丼、室戸海洋深層水の温もり。南国・土佐の冬の温かさと雄大な絶景に抱かれる名宿ステイをお届けします。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-rose-400" /> 旬の時期：11月中旬〜1月中旬（だるま太陽好適期＆新春初日の出）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-400" /> エリア：高知県室戸市・安芸郡（室戸世界ジオパーク）</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-rose-400" /> 旬グルメ：室戸キンメダイ・室戸キンメ丼・鰹藁焼きタタキ・土佐あかうし</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Introduction</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              水平線に宿る幸運の太陽と、弘法大師が仰いだ空と海の永遠
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              四国の東南端、太平洋へ鋭く突き出た高知県室戸岬。黒潮が激しく打ち寄せる岩礁と亜熱帯性植物が自生するこの岬は、ユネスコ世界ジオパークにも認定された地球の鼓動を直に体感できる特別な地です。日本列島が厳しい真冬の寒さに覆われる11月から1月にかけて、室戸岬周辺は黒潮の暖流のおかげで日中は15度前後のポカポカとした陽光に恵まれ、冬の「陽だまりリゾート」として旅人を優しく迎えてくれます。
            </p>
            <p>
              この冬の室戸で最も神秘的な瞬間が、水平線に現れる「だるま朝日」と「だるま夕日」です。海水の温度と冷え切った大気の温度差によって生じる光の蜃気楼現象。太陽が水平線に接すると、まるで海からもう一つの太陽が立ち上がるようにくびれ、縁起の良い「だるま」の形を創り出します。東海岸からは黄金色のだるま朝日が昇り、西海岸へ回れば空と海を茜色に染め上げるだるま夕日が沈む。この両方を同じ岬周辺で観賞できるのは、世界でも室戸岬をおいて他にありません。
            </p>
            <p>
              岬の先端には、平安の偉人・弘法大師（空海）が若き日に修行した「御厨人窟（みくろど）」が鎮座します。岩穴の中で厳しい行に励み、洞窟から見える「空」と「海」に心を洗われて「空海」の法名を得たとされる聖地。冷涼な未明の空気の中、洞窟の向こうの水平線から昇る元旦の初日の出を拝む時間は、魂が洗われるような神聖な感動に満ちています。
            </p>
            <p>
              そして冬の室戸を訪れる最大の歓びが、深海から水揚げされる至高のブランド魚「室戸キンメダイ」です。室戸沖は海岸からわずか数キロで水深1,000メートルに達する急深な海。冷涼な室戸海洋深層水で育った金目鯛は、11月から1月に脂乗りが最高潮に達します。丸ごと一匹を煮付けにした芳醇な甘み、そして刺身と照り焼きを載せ最後に出汁茶漬けでいただく名物「室戸キンメ丼」の贅沢な味わいは、旅の記憶に深く刻まれます。海洋深層水の湯で体を潤し、黒潮の恵みを堪能する。冬の室戸には、人生で一度は体験すべき至高の冬旅があります。
            </p>
          </div>
        </section>

        {/* 3 Key Highlights Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の室戸岬を満喫する3つの絶対的ハイライト
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              幸運をもたらすだるま太陽、空海開眼の聖地初日の出、そして極上の室戸キンメダイ。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700 font-bold">
                <Sunrise className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                1. 幸運の奇跡！「だるま朝日・だるま夕日」
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                11月中旬〜1月中旬限定の光学現象。黒潮と冷気の温度差が生む幻想的なダルマ型の太陽は、見られた者に幸運をもたらすと古くから珍重されています。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                <Fish className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                2. 冬に脂が乗る魚王「室戸キンメダイ」
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                海洋深層水の豊かな海で育つ一本釣り金目鯛。照り煮の濃厚な旨味や、炙り刺身、熱々の魚骨出汁をかけて締める名物「室戸キンメ丼」は圧巻の美味です。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700 font-bold">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                3. 空海修行の地「御厨人窟」新春初日の出
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                弘法大師が悟りを開き「空海」の名を得た天然洞窟。洞窟から望む太平洋の水平線から昇る元旦の初日の出は、新春の最強開運スポットとして知られます。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel Recommendations Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Inns</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の室戸岬＆土佐海岸を満喫する厳選名宿5選
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              金目鯛料理自慢の宿、登録有形文化財の岬ホテル、太平洋一望の南欧風リゾートまで、楽天トラベル公式データに基づき厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Hotel Image & Basic Badges */}
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-rose-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-xs">
                      厳選第 {hotel.id} 位
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-xl text-white text-xs flex justify-between items-center">
                      <div className="flex items-center gap-1 text-amber-300 font-bold">
                        <Star className="w-4 h-4 fill-amber-300" />
                        <span>{hotel.rating}</span>
                        <span className="text-slate-300 font-normal">({hotel.reviews}件)</span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-300 text-[10px] block">最安目安（1名/泊）</span>
                        <span className="text-sm font-black text-amber-300">{hotel.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hotel Story & Details */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
                          {hotel.special}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3">
                        {hotel.name}
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed mb-4">
                        {hotel.story}
                      </p>

                      {/* Highlights */}
                      <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100 space-y-2 mb-4">
                        <span className="text-xs font-bold text-stone-700 block mb-1">宿の注目ポイント＆こだわり</span>
                        {hotel.highlights.map((hl: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Practical Tips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600">
                        <div className="bg-rose-50/60 p-2.5 rounded-lg border border-rose-100">
                          <span className="font-bold text-rose-900 block mb-0.5">客室選びのヒント</span>
                          {hotel.roomTip}
                        </div>
                        <div className="bg-amber-50/60 p-2.5 rounded-lg border border-amber-100">
                          <span className="font-bold text-amber-900 block mb-0.5">美食ポイント</span>
                          {hotel.gourmetTip}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="text-xs text-stone-500">
                        <MapPin className="w-3.5 h-3.5 inline mr-1 text-stone-400" />
                        {hotel.access}
                      </div>
                      <a 
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold text-sm rounded-xl shadow-md transition-all shrink-0"
                      >
                        <span>空室・宿泊プランを確認する</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-8">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Course</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              だるま太陽と室戸キンメダイを極める冬の1泊2日モデルコース
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              北川村モネの庭、室戸岬の西海岸だるま夕日、極上金目鯛ディナー、早朝の御厨人窟だるま朝日を巡る至高の旅。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Day 1 */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-3 py-1 rounded-lg text-xs font-bold">
                1日目：高知空港出発・北川村モネの庭＆室戸西海岸だるま夕日
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-stone-700 border-l-2 border-rose-200 pl-4">
                <li>
                  <span className="font-bold text-rose-900 block">11:00 高知龍馬空港を出発・国道55号シーサイドドライブ</span>
                  レンタカーで出発し、左手に雄大な太平洋を眺めながら東へドライブ。途中の安芸市で名物「ちりめん丼」ランチ。
                </li>
                <li>
                  <span className="font-bold text-rose-900 block">13:30 「北川村 モネの庭 マルモッタン」散策</span>
                  フランス本家から世界で唯一認定された庭園。冬の澄んだ光の中に咲く花々と青い睡蓮池の静寂を鑑賞。
                </li>
                <li>
                  <span className="font-bold text-rose-900 block">15:30 「道の駅 キラメッセ室戸」周辺でだるま夕日待機</span>
                  室戸西海岸のビュースポットへ移動。16:45頃、水平線に沈む太陽がだるま型にくびれる奇跡のサンセットを観賞。
                </li>
                <li>
                  <span className="font-bold text-rose-900 block">17:30 ホテルにチェックイン・海洋深層水の大浴場で温まる</span>
                  室戸・奈半利の宿へ。海洋深層水のお湯に浸かり、ミネラル成分で肌をしっとり潤しながらリフレッシュ。
                </li>
                <li>
                  <span className="font-bold text-rose-900 block">19:00 冬の至高の恵み「室戸キンメダイ尽くし会席」</span>
                  甘辛い特製タレで煮付けた金目鯛丸ごと一匹と、獲れたての鰹の藁焼きタタキ、地酒「土佐鶴」に舌鼓を打つ。
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-xs font-bold">
                2日目：御厨人窟だるま朝日・室戸ジオパーク＆キンメ丼ランチ
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-stone-700 border-l-2 border-amber-200 pl-4">
                <li>
                  <span className="font-bold text-amber-900 block">06:30 室戸東海岸（黒岩鼻・御厨人窟周辺）でだるま朝日</span>
                  未明に出発。太平洋の水平線から真っ赤に立ち昇る「だるま朝日」を拝み、一年の開運と心願成就を祈願。
                </li>
                <li>
                  <span className="font-bold text-amber-900 block">07:30 弘法大師開眼の地「御厨人窟」を参拝</span>
                  洞窟内から空と海を望む聖域へ。波音だけが響く神聖な空間で、静かに心を整える。
                </li>
                <li>
                  <span className="font-bold text-amber-900 block">08:30 ホテルに戻り朝食＆チェックアウト</span>
                  朝の光が差し込むレストランで和朝食をいただき、ゆったりと出発準備。
                </li>
                <li>
                  <span className="font-bold text-amber-900 block">10:00 室戸岬灯台＆乱礁遊歩道ジオパーク散策</span>
                  日本一の光達距離を誇る白亜の室戸岬灯台と、巨大な奇岩が連なる海岸遊歩道を散策。地球の力強さを体感。
                </li>
                <li>
                  <span className="font-bold text-amber-900 block">12:30 地元食堂で名物「室戸キンメ丼」ランチ後、帰路へ</span>
                  照り焼きと刺身が競演し、最後は熱々の魚骨出汁をかけてお茶漬けにする絶品キンメ丼を満喫。高知空港へ。
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Travel Guide & Practical Tips */}
        <section className="bg-stone-100/80 rounded-3xl p-6 sm:p-10 border border-stone-200 space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Travel Advice</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の室戸岬旅行を快適に楽しむための実践ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 flex items-center gap-1.5">
                <ThermometerSun className="w-4 h-4 text-rose-600" />
                気候と防風対策
              </h3>
              <p>
                黒潮の影響で日中は比較的温暖ですが、岬の先端は遮るものがなく海風が吹き抜けます。だるま朝日や初日の出を観賞する早朝は冷え込むため、防風性のあるジャケットやマフラー、ニット帽、カイロを持参しましょう。足元は歩きやすいスニーカーが適しています。
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-rose-600" />
                だるま太陽の撮影ポイント
              </h3>
              <p>
                「だるま朝日」は室戸岬東海岸（県道203号沿い・黒岩鼻周辺）、「だるま夕日」は西海岸（道の駅キラメッセ室戸〜羽根岬周辺）で狙えます。望遠レンズ（200mm〜400mm以上）と三脚を用意し、日の出・日の入りの約20分前には現地にスタンバイするのが鉄則です。
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-rose-600" />
                キンメ丼の営業時間と事前予約
              </h3>
              <p>
                室戸キンメ丼を提供する名店（花月、料亭花月、道の駅など）は、お昼時に観光客で大変混雑し、限定食数が売り切れることもあります。特に年末年始や週末は、事前の電話確認または早めの午前11時台の入店をおすすめします。
              </p>
            </div>
          </div>
        </section>

        {/* Internal Link Section */}
        <section className="space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい四国の冬特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/winter-kochi-ashizuri-onsen-ocean-starry-katsuo-tosa-beef-stay"
              className="group bg-white p-4 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all hover:border-rose-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded block w-fit mb-2">高知・足摺岬</span>
                <h3 className="text-sm font-bold text-stone-800 group-hover:text-rose-600 line-clamp-2">
                  足摺岬温泉と冬の満天星空・鰹藁焼きと土佐牛ステイ
                </h3>
              </div>
              <span className="text-xs text-rose-600 font-semibold mt-3 block">記事を読む →</span>
            </Link>

            <Link 
              href="/winter-kochi-city-tosa-kue-katsuo-akagyu-castle-stay"
              className="group bg-white p-4 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all hover:border-rose-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded block w-fit mb-2">高知・高知市</span>
                <h3 className="text-sm font-bold text-stone-800 group-hover:text-rose-600 line-clamp-2">
                  高知城冬景色と天然クエ鍋・ひろめ市場屋台と土佐あかうしステイ
                </h3>
              </div>
              <span className="text-xs text-rose-600 font-semibold mt-3 block">記事を読む →</span>
            </Link>

            <Link 
              href="/winter-kochi-yuzu-hotspring-stay"
              className="group bg-white p-4 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all hover:border-rose-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded block w-fit mb-2">高知・北川村馬路村</span>
                <h3 className="text-sm font-bold text-stone-800 group-hover:text-rose-600 line-clamp-2">
                  土佐柚子温泉郷と冬の香り湯・柚子ポン酢と郷土美食ステイ
                </h3>
              </div>
              <span className="text-xs text-rose-600 font-semibold mt-3 block">記事を読む →</span>
            </Link>

            <Link 
              href="/winter-tokushima-naruto-onsen-uzushio-naruto-tai-stay"
              className="group bg-white p-4 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all hover:border-rose-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded block w-fit mb-2">徳島・鳴門</span>
                <h3 className="text-sm font-bold text-stone-800 group-hover:text-rose-600 line-clamp-2">
                  鳴門海峡の冬渦潮と鳴門温泉・冬の鳴門鯛しゃぶしゃぶステイ
                </h3>
              </div>
              <span className="text-xs text-rose-600 font-semibold mt-3 block">記事を読む →</span>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の室戸岬旅行に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200 rounded-2xl p-5 hover:border-rose-200 transition-colors">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Editorial Note */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">
            幸運の太陽と空海の祈りが照らす、太平洋のフロンティアへ
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            水平線にくびれる真紅のだるま太陽、弘法大師が悟りを開いた御厨人窟の静寂、そして冬に極上の脂を蓄えた室戸キンメダイの旨味。11月から1月の室戸岬は、地球の鼓動と人の温もりに触れる特別なパワースポットです。心洗われる新しい一年の始まりに、室戸岬への冬旅を計画してみましょう。
          </p>
          <div className="pt-4">
            <Link 
              href="/features"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors text-sm"
            >
              <span>冬の特集一覧へ戻る</span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-kochi-muroto-daruma-sunrise-kinmedai-deepsea-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
