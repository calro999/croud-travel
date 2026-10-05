import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Sun, Flame, Landmark, Building, Waves, ThermometerSun, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月静岡】南アルプス秘境「夢の吊橋」冬のコバルトブルー・とろとろ美女づくりの湯＆冬の猪鍋・大井川鐵道名湯宿5選",
  description: "11月から1月、静岡県川根本町の奥大井・寸又峡は、大間ダム湖が年間で最も冴え渡るミルキーブルーに輝く「夢の吊橋」の絶景シーズン。美容液のように肌を包み込む名湯「美女づくりの湯（寸又峡温泉）」、南アルプスの大自然が育んだ熱々の郷土料理「猪鍋（ししなべ）」、大井川鐵道のアプト式鉄道と奥大井湖上駅の冬景色。秘境の冬を心ゆくまで堪能する厳選名宿5選とモデルコースを徹底ガイドします。",
  keywords: '夢の吊橋, 寸又峡温泉, 美女づくりの湯, 翠紅苑, 川根温泉ホテル, 湯屋飛龍の宿, 奥大井湖上駅, 大井川鐵道, 猪鍋, 11月 12月 1月 静岡旅行, 川根本町',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-shizuoka-sumatakyo-onsen-yumenotsuribashi-bijin-jibier-stay/"
  },
  openGraph: {
    title: "【11・12・1月静岡】南アルプス秘境「夢の吊橋」冬のコバルトブルー・とろとろ美女づくりの湯＆冬の猪鍋・大井川鐵道名湯宿5選",
    description: "11月から1月、静岡県川根本町の奥大井・寸又峡は、大間ダム湖が年間で最も冴え渡るミルキーブルーに輝く「夢の吊橋」の絶景シーズン。美容液のように肌を包み込む名湯「美女づくりの湯（寸又峡温泉）」、南アルプスの大自然が育んだ熱々の郷土料理「猪鍋（ししなべ）」、大井川鐵道のアプト式鉄道と奥大井湖上駅の冬景色。秘境の冬を心ゆくまで堪能する厳選名宿5選とモデルコースを徹底ガイドします。",
    url: 'https://croud-travel.com/winter-shizuoka-sumatakyo-onsen-yumenotsuribashi-bijin-jibier-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の寸又峡夢の吊橋とコバルトブルーの湖面'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月静岡】南アルプス秘境「夢の吊橋」冬のコバルトブルー・とろとろ美女づくりの湯＆冬の猪鍋・大井川鐵道名湯宿5選",
    description: "11月から1月、静岡県川根本町の奥大井・寸又峡は、大間ダム湖が年間で最も冴え渡るミルキーブルーに輝く「夢の吊橋」の絶景シーズン。美容液のように肌を包み込む名湯「美女づくりの湯（寸又峡温泉）」、南アルプスの大自然が育んだ熱々の郷土料理「猪鍋（ししなべ）」、大井川鐵道のアプト式鉄道と奥大井湖上駅の冬景色。秘境の冬を心ゆくまで堪能する厳選名宿5選とモデルコースを徹底ガイドします。",
    images: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function ShizuokaSumatakyoOnsenWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12・1月静岡】南アルプス秘境「夢の吊橋」冬のコバルトブルー・とろとろ美女づくりの湯＆冬の猪鍋・大井川鐵道名湯宿5選",
    description: "11月から1月、静岡県川根本町の奥大井・寸又峡は、大間ダム湖が年間で最も冴え渡るミルキーブルーに輝く「夢の吊橋」の絶景シーズン。美容液のように肌を包み込む名湯「美女づくりの湯（寸又峡温泉）」、南アルプスの大自然が育んだ熱々の郷土料理「猪鍋（ししなべ）」、大井川鐵道のアプト式鉄道と奥大井湖上駅の冬景色。秘境の冬を心ゆくまで堪能する厳選名宿5選とモデルコースを徹底ガイドします。",
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    datePublished: '2026-10-02',
    dateModified: '2026-10-02',
    author: {
      '@type': 'Organization',
      name: 'クラドトラベル編集部',
      url: 'https://croud-travel.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.com/winter-shizuoka-sumatakyo-onsen-yumenotsuribashi-bijin-jibier-stay'
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
        item: 'https://croud-travel.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '冬の特集一覧',
        item: 'https://croud-travel.com/features'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '静岡・寸又峡温泉＆夢の吊橋特集',
        item: 'https://croud-travel.com/winter-shizuoka-sumatakyo-onsen-yumenotsuribashi-bijin-jibier-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "「夢の吊橋」の冬（11月〜1月）の水の色が最も美しい理由と見頃は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "寸又峡の「夢の吊橋（ゆめのつりばし）」は、大間ダム湖に架かる長さ90m、高さ8mの木造吊り橋です。湖水が神秘的なエメラルドグリーンやコバルトブルーに見えるのは、わずかな微粒子に光が散乱する「チンダル現象」によるものです。夏場は降雨により水が濁ることがありますが、11月から1月の冬期は雨が少なく水量が安定し、プランクトンが減少して不純物が極限まで無くなるため、年間を通じて最も水が澄み渡り、息を呑むような鮮烈なミルキーブルーに輝きます。特に午前10時〜午後14時の太陽が真上から差し込む時間帯が最高の撮影タイミングです。"
        }
      },
      {
        '@type': 'Question',
        name: "寸又峡温泉「美女づくりの湯」の泉質と冬の効能について教えてください。",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "寸又峡温泉は、南アルプスの麓の地下深くから湧出するアルカリ性単純硫黄温泉（低張性・アルカリ性・高温泉）です。無色透明ながらほのかな硫黄の香りを放ち、特徴的なのは「まるで美容液に浸かっているかのようなトロリとした粘性」です。アルカリ性の成分が肌の古い角質をやさしく溶かし、硫黄成分が肌の血行を促進して代謝を活性化させるため、入浴後は肌がつるつる・すべすべになり「美女づくりの湯」として全国に名を馳せています。冷え性改善、神経痛、筋肉痛、疲労回復に抜群の効果があります。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の奥大井名物「猪鍋（ししなべ）」の特徴と美味しさの秘密は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "奥大井・川根本町の山々はどんぐりや椎の実などの自然の木の実が豊富で、ここで育った天然の猪は11月から1月の冬期、厳しい寒さに備えて極上の脂を身にまといます。天然猪肉の脂身は一般的な豚肉と異なり、融点が低くサラリとしており、煮込むほどに柔らかく上品な甘みが出汁に溶け出します。寸又峡では、地元産の生姜やニンニクを効かせた自家製合わせ味噌で、根菜やキノコ、豆腐とともに煮込む「ぼたん鍋」として提供され、体の芯から温まる冬の最高のご馳走です。"
        }
      },
      {
        '@type': 'Question',
        name: "「奥大井湖上駅」の冬の見どころとアクセス方法は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "奥大井湖上駅（おくおおいこじょうえき）は、大井川鐵道井川線（南アルプスあぷとライン）の駅で、長島ダムのダム湖（接岨湖）に突き出た半島状の尾根の上に佇む「日本屈指の秘境駅」です。湖面にかかる真っ赤な「奥大井レインボーブリッジ」とエメラルドグリーンの水面、そして冬枯れの山々とのコントラストは絶景。駅に併設されたレイクコテージ奥大井や、対岸の展望スポット（県道388号沿い）からの眺望が特に有名です。列車でのアクセスのほか、対岸の遊歩道から橋を歩いて渡ることも可能です。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の寸又峡・奥大井へのアクセス道路状況と車の注意点（凍結・チェーン）は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "寸又峡へ向かう主要道路（県道77号川根寸又峡線）は、山間部の渓谷沿いを通るため、道幅が狭く対向車とのすれ違いに注意が必要な箇所があります。静岡県内ですが、標高約600mの山間部に位置するため、12月下旬〜1月の寒波到来時には日陰や橋の上で路面凍結が発生することがあります。車で訪れる際は必ずスタッドレスタイヤを装着するか、チェーンを携行してください。また、大井川鐵道大井川本線の一部区間の運行状況を事前に確認し、代行バスや路線バス（千頭駅〜寸又峡温泉）を上手に活用しましょう。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "翠紅苑",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10709/10709.jpg",
              rating: 4.22,
              reviews: 997,
              price: "¥10,450〜",
              access: "JR金谷駅より大井川鉄道乗換え千頭駅より寸又峡温泉行きバス40分",
              special: "大正浪漫を感じる建物で、「美女づくりの湯」と「奥大井の食材をつかった料理」を堪能する",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10709%2F10709.html",
              story: "寸又峡温泉の入口、大正ロマン漂う格調高いレトロモダン建築が旅人を迎える老舗名宿「翠紅苑（すいこうえん）」。和の伝統美と洋の洗練が調和した館内には暖炉の火が温かく灯り、中庭の日本庭園には冬の澄んだ陽光が降り注ぎます。自慢の大浴場「美女づくりの湯」は、南アルプスの麓から湧き出るpH値の高いアルカリ性単純硫黄泉。まるで美容液に浸かっているかのようにトロリとした滑らかな湯ざわりで、入浴後には肌が驚くほどしっとりすべすべになります。冬の夕食は、地元猟師から仕入れる新鮮な天然猪肉を使った「秘伝味噌仕立ての猪鍋」や山女魚の塩焼き、手打ち蕎麦など、奥大井の冬の恵みを贅沢に盛り込んだ郷土会席。夢の吊橋遊歩道入口まで徒歩約20分と散策拠点にも最適です。",
              roomTip: "本館和モダンツインまたは書院造り和室。大正ロマンの風情を残しつつ快適なベッドと広縁を備え、静寂の山景を望めます。",
              gourmetTip: "「冬の奥大井ジビエ会席・特製猪鍋プラン」。脂の甘み際立つ天然猪肉を、生姜と自家製赤味噌で煮込んだ極上の温まり鍋。",
              highlights: [
                "大正ロマンの風情漂う老舗名宿・暖炉の温もりと日本庭園が彩る上質な空間",
                "とろとろの「美女づくりの湯」大浴場・露天風呂で冷え切った体を芯から解きほぐす",
                "夢の吊橋遊歩道入口まで徒歩20分・冬のミルキーブルー散策に最高の拠点"
              ]
            },
            {
              id: 2,
              name: "寸又峡温泉　湯屋飛龍の宿",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12546/12546.jpg",
              rating: 3.71,
              reviews: 352,
              price: "¥9,900〜",
              access: "東海道線金谷駅より大井川鉄道で千頭駅下車 寸又峡温泉行きバスにて約60分 / 静岡ICより362号線経由約2時間",
              special: "【PH9.1美女づくりの湯】寸又峡の秘境に佇む温泉旅館。「とろっぬる」露天風呂と山菜・川魚料理を堪能",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12546%2F12546.html",
              story: "寸又峡温泉街の閑静な奥に佇み、全客室わずか数室のアットホームな温もりに満ちた湯宿「寸又峡温泉 湯屋飛龍の宿」。ここの魅力は何と言っても、とろとろの自家源泉を贅沢に掛け流す岩造りの温泉風呂です。湯口から絶え間なく注がれる硫黄の香り漂う湯は、肌をすべるように滑らかで、体の芯まで熱を行き渡らせてくれます。主人が腕を振るう夕食は、冬の山里の温もりそのもの。臭みが一切なく旨味が凝縮した猪鍋をはじめ、大井川の清流で育ったヤマメやイワナの骨酒、奥大井特産の原木椎茸や山菜料理など、素朴でありながら滋味深い本物の郷土料理が並びます。秘境ならではの静寂に包まれた冬籠もりにぴったりの隠れ宿です。",
              roomTip: "純和風客室8畳〜10畳。窓から冬枯れの寸又峡渓谷の山並みを望み、こたつに入ってゆったりと寛げる温かな空間です。",
              gourmetTip: "「天然猪鍋と川魚の炭火塩焼き会席」。コラーゲン豊富な猪肉と地酒の相性が抜群で、冬の奥大井の夜を豊かに演出します。",
              highlights: [
                "全室少数の静寂の隠れ宿・加水なし自家源泉かけ流しの極上硫黄泉を堪能",
                "天然猪肉を贅沢に使った秘伝味噌鍋・大井川ヤマメの塩焼きと地酒の共演",
                "こたつ完備の温かな和室客室・奥大井の豊かな自然音に包まれる贅沢な休息"
              ]
            },
            {
              id: 3,
              name: "大井川鐵道　川根温泉ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/172896/172896.jpg",
              rating: 4.65,
              reviews: 685,
              price: "¥15,200〜",
              access: "新東名島田金谷ＩＣよりお車にて約３５分／大井川鉄道　川根温泉笹間渡駅より徒歩にて約１０分",
              special: "温泉宿・ホテル総選挙ファミリー部門5年連続全国1位受賞！壮大な自然に囲まれた癒しと寛ぎの温泉宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172896%2F172896.html",
              story: "大井川本線の終着・千頭駅より手前、大井川の清流沿いに建つ「大井川鐵道 川根温泉ホテル」。楽天トラベルアワードでも常に高い評価を誇る人気リゾート宿です。目の前を大井川鐵道の線路が走り、冬晴れの空の下を力強く煙を吐きながら走るSL列車を客室やロビーから間近に観賞できます。館内の天然温泉は、毎分ドラム缶3本分以上の豊富な湯量を誇る高濃度の塩化物泉（温まりの湯）。露天風呂からは大井川の雄大な流れを望み、湯冷め知らずのポカポカ感が持続します。夕食はライブキッチンを備えた豪華バイキングで、地元川根茶を使った料理やローストビーフ、静岡の海の幸・山の幸が食べ放題。大人から子供まで大満足のリゾートステイが叶います。",
              roomTip: "トレインビュー和洋室。大きな窓の正面に大井川鐵道の鉄橋が広がり、通過するSLや普通列車を特等席から眺められます。",
              gourmetTip: "「創作ディナーバイキング」。静岡県産食材をふんだんに使った温かい料理コーナーや、川根茶スイーツが充実。",
              highlights: [
                "目の前をSLが走るトレインビューホテル・豊富な湯量の塩化物泉と絶景露天風呂",
                "地元食材と川根茶を活かした豪華ディナーバイキング・ライブキッチン完備",
                "楽天トラベルアワード連続受賞の安心品質・充実した館内設備と温かな接客"
              ]
            },
            {
              id: 4,
              name: "寸又峡温泉　光山荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54305/54305.jpg",
              rating: 4.00,
              reviews: 10,
              price: "¥8,800〜",
              access: "大井川鉄道　千頭駅からバスで４０分（「寸又峡温泉第3駐車場バス停」下車より徒歩10分）",
              special: "美女づくりで大好評の寿光の湯・夢殿。郷土料理で舌鼓。光山荘で心と身体もリフレッシュして下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54305%2F54305.html",
              story: "寸又峡の温泉街に佇み、昔ながらの湯治宿の温かさと親しみやすいおもてなしでリピーターを惹きつける「寸又峡温泉 光山荘」。源泉から引かれた良質な「美女づくりの湯」を満喫できる男女別大浴場は、硫黄の香りと湯の花が漂う本物の温泉好きを唸らせる名湯です。湯上がりは肌がツルツルになると女性客からも大絶賛。料理は女将が丹精込めて手作りする奥大井の家庭的な郷土料理で、冬は熱々の猪鍋や山菜の天ぷら、川根茶を使った手作り豆腐などが食卓を彩ります。過度な華美さを削ぎ落とし、本物の名湯と温かい人情に癒されたい冬の一人旅や湯治ステイに最高の隠れ家です。",
              roomTip: "渓流側和室。窓の外に広がる山里の冬景色と清らかな風を感じながら、静かに読書や休息を楽しめる落ち着いた部屋です。",
              gourmetTip: "「奥大井の手作り山里膳」。冬期限定の特製しし鍋をメインに、山の恵みを丁寧に調理した温もりあふれる料理が並びます。",
              highlights: [
                "本物の湯治文化を受け継ぐ名湯宿・女将手作りの温かな郷土料理としし鍋",
                "硫黄の香り漂う濃厚な単純硫黄泉・湯上がりの肌が驚くほど滑らかになる美肌湯",
                "一人旅や長期湯治にも優しい料金設定・心の琴線に触れる素朴な人情宿"
              ]
            },
            {
              id: 5,
              name: "川根温泉ふれあいコテージ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/44267/44267.jpg",
              rating: 4.73,
              reviews: 37,
              price: "¥32,100〜",
              access: "大井川鐵道 大井川本線 川根温泉笹間渡駅から徒歩２分",
              special: "全棟源泉かけ流し温泉付きの一棟貸しコテージで、日常の喧騒から離れた心休まるひと時を…",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44267%2F44267.html",
              story: "道の駅「川根温泉」に隣接し、全棟に自家源泉掛け流しの専用露天風呂または内湯を備えた贅沢な一棟貸し宿泊施設「川根温泉ふれあいコテージ」。4名〜8名定員のゆったりとした木造コテージは、木の温もりあふれるリビングと充実したキッチン設備、プライベート感抜群の温泉風呂を完備しています。冬の澄み渡る夜空を見上げながら、完全な貸切空間でいつでも好きな時に極上の塩化物泉に浸かる贅沢は格別。食材を持ち込んで仲間や家族と鍋パーティーを楽しむ自炊スタイルはもちろん、隣接する温泉施設のレストランを利用することも可能。寸又峡や奥大井湖上駅観光の拠点として、マイペースな冬のグループ旅・家族旅を叶えてくれます。",
              roomTip: "専用露天風呂付きコテージ。大井川の川風を感じながら、24時間いつでも源泉かけ流しの天然温泉を独占できます。",
              gourmetTip: "「コテージで楽しむ冬の鍋プラン」。地元精肉店の猪肉や静岡ブランド豚を取り寄せ、プライベート空間で熱々鍋を囲めます。",
              highlights: [
                "全棟源泉かけ流し温泉風呂付き一棟貸しコテージ・気兼ねない完全プライベート空間",
                "大井川鐵道川根温泉笹間渡駅徒歩2分・家族やグループで楽しむ冬の鍋ステイ",
                "道の駅川根温泉隣接・満天の冬星空を眺めながら入る専用温泉風呂"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "「夢の吊橋」の冬（11月〜1月）の水の色が最も美しい理由と見頃は？",
    "a": "寸又峡の「夢の吊橋（ゆめのつりばし）」は、大間ダム湖に架かる長さ90m、高さ8mの木造吊り橋です。湖水が神秘的なエメラルドグリーンやコバルトブルーに見えるのは、わずかな微粒子に光が散乱する「チンダル現象」によるものです。夏場は降雨により水が濁ることがありますが、11月から1月の冬期は雨が少なく水量が安定し、プランクトンが減少して不純物が極限まで無くなるため、年間を通じて最も水が澄み渡り、息を呑むような鮮烈なミルキーブルーに輝きます。特に午前10時〜午後14時の太陽が真上から差し込む時間帯が最高の撮影タイミングです。"
  },
  {
    "q": "寸又峡温泉「美女づくりの湯」の泉質と冬の効能について教えてください。",
    "a": "寸又峡温泉は、南アルプスの麓の地下深くから湧出するアルカリ性単純硫黄温泉（低張性・アルカリ性・高温泉）です。無色透明ながらほのかな硫黄の香りを放ち、特徴的なのは「まるで美容液に浸かっているかのようなトロリとした粘性」です。アルカリ性の成分が肌の古い角質をやさしく溶かし、硫黄成分が肌の血行を促進して代謝を活性化させるため、入浴後は肌がつるつる・すべすべになり「美女づくりの湯」として全国に名を馳せています。冷え性改善、神経痛、筋肉痛、疲労回復に抜群の効果があります。"
  },
  {
    "q": "冬の奥大井名物「猪鍋（ししなべ）」の特徴と美味しさの秘密は？",
    "a": "奥大井・川根本町の山々はどんぐりや椎の実などの自然の木の実が豊富で、ここで育った天然の猪は11月から1月の冬期、厳しい寒さに備えて極上の脂を身にまといます。天然猪肉の脂身は一般的な豚肉と異なり、融点が低くサラリとしており、煮込むほどに柔らかく上品な甘みが出汁に溶け出します。寸又峡では、地元産の生姜やニンニクを効かせた自家製合わせ味噌で、根菜やキノコ、豆腐とともに煮込む「ぼたん鍋」として提供され、体の芯から温まる冬の最高のご馳走です。"
  },
  {
    "q": "「奥大井湖上駅」の冬の見どころとアクセス方法は？",
    "a": "奥大井湖上駅（おくおおいこじょうえき）は、大井川鐵道井川線（南アルプスあぷとライン）の駅で、長島ダムのダム湖（接岨湖）に突き出た半島状の尾根の上に佇む「日本屈指の秘境駅」です。湖面にかかる真っ赤な「奥大井レインボーブリッジ」とエメラルドグリーンの水面、そして冬枯れの山々とのコントラストは絶景。駅に併設されたレイクコテージ奥大井や、対岸の展望スポット（県道388号沿い）からの眺望が特に有名です。列車でのアクセスのほか、対岸の遊歩道から橋を歩いて渡ることも可能です。"
  },
  {
    "q": "冬の寸又峡・奥大井へのアクセス道路状況と車の注意点（凍結・チェーン）は？",
    "a": "寸又峡へ向かう主要道路（県道77号川根寸又峡線）は、山間部の渓谷沿いを通るため、道幅が狭く対向車とのすれ違いに注意が必要な箇所があります。静岡県内ですが、標高約600mの山間部に位置するため、12月下旬〜1月の寒波到来時には日陰や橋の上で路面凍結が発生することがあります。車で訪れる際は必ずスタッドレスタイヤを装着するか、チェーンを携行してください。また、大井川鐵道大井川本線の一部区間の運行状況を事前に確認し、代行バスや路線バス（千頭駅〜寸又峡温泉）を上手に活用しましょう。"
  }
];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-teal-100 selection:text-teal-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の寸又峡夢の吊橋とコバルトブルーの湖面" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-teal-900/80 backdrop-blur-md text-teal-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-teal-400/30">
            <Waves className="w-4 h-4 text-teal-300" />
            11月・12月・1月 冬の静岡・寸又峡夢の吊橋＆美女づくりの湯特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月静岡】南アルプス秘境「夢の吊橋」冬のコバルトブルー・とろとろ美女づくりの湯＆冬の猪鍋・大井川鐵道名湯宿5選
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            南アルプスの深き懐、大間ダム湖に架かる奇跡の絶景「夢の吊橋」。冬晴れの日差しを受け、年間で最も澄み切った鮮烈なミルキーブルーに輝く水面。肌に吸い付くようにとろとろのアルカリ硫黄泉「美女づくりの湯」と、天然猪肉を秘伝味噌で煮込む冬の熱々「猪鍋」。大井川鐵道のSL列車と湖上に浮かぶ秘境駅。奥大井の冬の静寂と温もりに抱かれる名宿ステイをお届けします。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-teal-400" /> 旬の時期：11月中旬〜1月下旬（湖水の透明度最高峰＆天然猪肉旬）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-teal-400" /> エリア：静岡県榛原郡川根本町（寸又峡温泉・奥大井・川根温泉）</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-teal-400" /> 旬グルメ：天然猪鍋（ぼたん鍋）・川根茶・山女魚塩焼き・手打ち蕎麦</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Introduction</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              南アルプスの清流が織りなす青の奇跡と、古湯がもたらす至極の潤い
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              静岡県の中央を南北に貫く大井川の最上流部、南アルプスの峻険な山脈に抱かれた秘境・寸又峡（すまたきょう）。温暖な静岡県にありながら、冬には深山特有の凛とした冷気が張り詰め、渓谷の木々は葉を落として澄み切った青空が広がります。この11月から1月にかけての冬こそ、寸又峡を象徴する名所「夢の吊橋」が最も神秘的な輝きを放つベストシーズンです。
            </p>
            <p>
              長さ90メートル、水面からの高さ8メートルの吊り橋の下に広がる大間ダム湖は、太陽光が水中の微粒子によって散乱する「チンダル現象」によって、鮮やかなコバルトブルーやミルキーブルーに見えます。夏場の台風や多雨の季節と異なり、冬期は雨がほとんど降らず水流が穏やかに保たれるため、水中の濁りが極限まで沈殿。宝石のトルコ石を溶かし込んだかのような純度の高い青色が、冬枯れの白い岩肌と劇的な対比を描き出します。「橋の真ん中で祈ると恋が実る」という伝説も、澄んだ冬の静寂の中でより神聖な響きを帯びます。
            </p>
            <p>
              そして、冬の散策で冷え切った旅人を至福の温もりで包み込んでくれるのが、寸又峡温泉自慢の「美女づくりの湯」です。南アルプスの麓から湧き出る単純硫黄泉は、手に取った瞬間に誰もが驚くほどのトロリとした粘性を帯びています。弱アルカリ性の湯が肌の角質を優しく整え、硫黄成分が血行を促進。湯上がりには全身が絹のようにしっとりと潤い、体の芯までポカポカとした熱が長時間持続します。
            </p>
            <p>
              夜の宴を彩るのは、南アルプスの自然林で育った天然猪の「猪鍋（ししなべ）」です。冬の木の実をたっぷり食べて良質な脂を蓄えた天然の猪肉は、豚肉よりも軽やかで芳醇な甘みを誇り、自家製味噌と根菜の出汁で煮込むほどに奥深いコクが広がります。さらに、煙を上げて走る大井川鐵道のSL列車や、湖上に浮かぶ神秘の無人駅「奥大井湖上駅」。冬の寸又峡には、都会の喧騒を完全に忘れ去ることができる、贅沢な静寂と本物の癒しが息づいています。
            </p>
          </div>
        </section>

        {/* 3 Key Highlights Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の寸又峡・奥大井を満喫する3つの絶対的ハイライト
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              年間最高の透明度を誇る湖面、美容液のような極上美肌湯、そして山里の冬の味覚。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700 font-bold">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                1. 冬こそ最高峰！「夢の吊橋」ミルキーブルー
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                雨が少なく水が澄み渡る11月〜1月はチンダル現象が最も冴え渡る季節。揺れる吊り橋の足元に広がる吸い込まれそうなエメラルドブルーは息を呑む絶景です。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                2. とろとろ「美女づくりの湯」＆冬の天然猪鍋
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                美容液のような粘性と硫黄の香りを放つ名湯で肌をつるつるに整え、夕食には脂の乗った天然猪肉の熱々味噌鍋で体の内側から温まります。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700 font-bold">
                <Mountain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                3. 奥大井湖上駅の絶景＆大井川鐵道SL旅
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                ダム湖に突き出た尾根にぽつんと浮かぶ秘境「奥大井湖上駅」と赤いレインボーブリッジ。大井川鐵道の冬景色をゆったり楽しむ列車の旅も魅力です。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel Recommendations Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Inns</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の寸又峡＆奥大井を堪能する厳選名宿5選
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              美女づくりの湯の老舗宿、源泉かけ流しの隠れ家、SLを望むリゾートホテルまで、楽天トラベル公式データに基づき厳選。
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
                    <div className="absolute top-4 left-4 bg-teal-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-xs">
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
                        <span className="text-xs font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
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
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Practical Tips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600">
                        <div className="bg-teal-50/60 p-2.5 rounded-lg border border-teal-100">
                          <span className="font-bold text-teal-900 block mb-0.5">客室選びのヒント</span>
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
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold text-sm rounded-xl shadow-md transition-all shrink-0"
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
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Course</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              夢の吊橋と奥大井湖上駅を巡る冬の1泊2日モデルコース
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              大井川鐵道の車窓美、奥大井湖上駅の絶景、寸又峡温泉での極上の湯浴みとしし鍋、翌朝の夢の吊橋散策プラン。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Day 1 */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-3 py-1 rounded-lg text-xs font-bold">
                1日目：大井川鐵道SL旅・奥大井湖上駅＆寸又峡温泉チェックイン
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-stone-700 border-l-2 border-teal-200 pl-4">
                <li>
                  <span className="font-bold text-teal-900 block">10:30 新東名島田金谷ICまたは大井川鐵道新金谷駅を出発</span>
                  大井川沿いの風光明媚な国道473号を北上。途中、川根温泉の道の駅で足湯に浸かりながらひと休み。
                </li>
                <li>
                  <span className="font-bold text-teal-900 block">12:30 千頭駅前で「川根茶手打ち蕎麦」ランチ</span>
                  香り高い川根茶を練り込んだ茶そばや、地元の山菜天ぷらを千頭駅前の食事処で味わう。
                </li>
                <li>
                  <span className="font-bold text-teal-900 block">14:00 「奥大井湖上駅」の展望所からエメラルド湖面を観賞</span>
                  県道沿いの展望スポットから、青い湖面に浮かぶ秘境駅と赤い鉄橋のパノラマを観賞。レイクコテージ奥大井へ足を延ばすのもおすすめ。
                </li>
                <li>
                  <span className="font-bold text-teal-900 block">16:00 寸又峡温泉の宿にチェックイン・美女づくりの湯を満喫</span>
                  温泉街の宿へ到着。トロトロの単純硫黄泉に浸かり、冬の寒風で冷えた体を芯まで解きほぐす至福の湯浴み。
                </li>
                <li>
                  <span className="font-bold text-teal-900 block">18:30 冬の奥大井郷土会席・熱々の「天然猪鍋」を堪能</span>
                  自家製味噌で煮込んだ甘みあふれる天然猪肉と、ヤマメの塩焼き、地酒を囲んで静かな冬の夜長を過ごす。
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-xs font-bold">
                2日目：早朝の「夢の吊橋」散策＆川根茶カフェ
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-stone-700 border-l-2 border-amber-200 pl-4">
                <li>
                  <span className="font-bold text-amber-900 block">07:30 朝の澄んだ空気の中で温泉朝風呂＆朝食</span>
                  朝の光が差し込む大浴場で湯浴みを楽しみ、山里の素朴で温かい朝食をしっかりいただく。
                </li>
                <li>
                  <span className="font-bold text-amber-900 block">08:45 寸又峡プロムナードを歩き「夢の吊橋」へ</span>
                  宿を出発し、落石防止トンネルを抜けて遊歩道へ。午前中の光が湖面に差し込むタイミングを狙う。
                </li>
                <li>
                  <span className="font-bold text-amber-900 block">09:15 「夢の吊橋」を渡る・ミルキーブルーの絶景</span>
                  足元に広がる鮮烈なコバルトブルーの水面。吊り橋の中央で願いを込めながら、スリリングで美しい空中散歩を満喫。
                </li>
                <li>
                  <span className="font-bold text-amber-900 block">11:00 温泉街の古民家カフェで名物スイーツ＆足湯</span>
                  温泉街に戻り、地元川根茶を使った手作りスイーツや珈琲を味わいながら足湯でひと休み。
                </li>
                <li>
                  <span className="font-bold text-amber-900 block">13:30 川根茶の直売所で新茶・冬茶のお土産購入後、帰路へ</span>
                  銘茶「川根茶」の茶葉や特産品を購入し、冬の豊かな余韻とともに帰路のドライブへ。
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Travel Guide & Practical Tips */}
        <section className="bg-stone-100/80 rounded-3xl p-6 sm:p-10 border border-stone-200 space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Travel Advice</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の寸又峡・奥大井旅行を快適に楽しむための実践ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 flex items-center gap-1.5">
                <ThermometerSun className="w-4 h-4 text-teal-600" />
                夢の吊橋散策の服装と靴
              </h3>
              <p>
                遊歩道は1周約90分（アップダウンのある階段約300段を含む）のコースです。吊り橋の足場は木板2枚分で隙間があるため、ヒールやサンダルは厳禁。歩きやすいスニーカーまたはトレッキングシューズが必須です。山陰は冷え込むためフリースやダウンを持参しましょう。
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-teal-600" />
                冬の道路事情と運転の注意
              </h3>
              <p>
                千頭駅から寸又峡へ至る県道77号は、一部道幅が狭く大型バスや対向車とのすれ違いに注意が必要です。また、12月下旬〜1月の厳冬期は朝晩に日陰が路面凍結することがあります。必ずスタッドレスタイヤを装着し、余裕を持ったスケジュールで走行しましょう。
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-teal-600" />
                冬の混雑回避と光のベストタイム
              </h3>
              <p>
                紅葉シーズンのような橋の上での数時間待ちは冬にはありませんが、週末は日中に観光客が集中します。午前8時〜10時台の早い時間に訪れると、静まり返った渓谷でほぼ貸切状態で渡ることができます。また湖面が最も青く輝くのは太陽光が差し込む10:00〜14:00です。
              </p>
            </div>
          </div>
        </section>

        {/* Internal Link Section */}
        <section className="space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい静岡・東海の冬特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/winter-shizuoka-umegashima-onsen-okushizu-surugashamo-stay"
              className="group bg-white p-4 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all hover:border-teal-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded block w-fit mb-2">静岡・奥静岡</span>
                <h3 className="text-sm font-bold text-stone-800 group-hover:text-teal-600 line-clamp-2">
                  梅ヶ島温泉の極上美肌湯と奥静岡の雪景色・駿河軍鶏鍋ステイ
                </h3>
              </div>
              <span className="text-xs text-teal-600 font-semibold mt-3 block">記事を読む →</span>
            </Link>

            <Link 
              href="/winter-shizuoka-yaizu-onsen-fuji-view-minami-maguro-stay"
              className="group bg-white p-4 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all hover:border-teal-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded block w-fit mb-2">静岡・焼津温泉</span>
                <h3 className="text-sm font-bold text-stone-800 group-hover:text-teal-600 line-clamp-2">
                  焼津温泉から望む富士山絶景と冬の極上南マグロ尽くしステイ
                </h3>
              </div>
              <span className="text-xs text-teal-600 font-semibold mt-3 block">記事を読む →</span>
            </Link>

            <Link 
              href="/winter-shizuoka-shuzenji-late-momiji-bamboo-stay"
              className="group bg-white p-4 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all hover:border-teal-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded block w-fit mb-2">静岡・伊豆修善寺</span>
                <h3 className="text-sm font-bold text-stone-800 group-hover:text-teal-600 line-clamp-2">
                  修善寺温泉の竹林の小径と冬の静寂・歴史ある湯治ステイ
                </h3>
              </div>
              <span className="text-xs text-teal-600 font-semibold mt-3 block">記事を読む →</span>
            </Link>

            <Link 
              href="/winter-shizuoka-hamanako-kanzanji-torafugu-unagi-stay"
              className="group bg-white p-4 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all hover:border-teal-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded block w-fit mb-2">静岡・浜名湖舘山寺</span>
                <h3 className="text-sm font-bold text-stone-800 group-hover:text-teal-600 line-clamp-2">
                  浜名湖舘山寺温泉と冬の天然トラフグ・名物鰻と湖畔温泉ステイ
                </h3>
              </div>
              <span className="text-xs text-teal-600 font-semibold mt-3 block">記事を読む →</span>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の寸又峡温泉旅行に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200 rounded-2xl p-5 hover:border-teal-200 transition-colors">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
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
            澄み切った青の奇跡と極上の湯が誘う、南アルプス冬の隠れ里
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            冬の大気の中で一段と輝きを増す夢の吊橋のミルキーブルー、美容液のように肌を包み込む名湯の潤い、そして囲炉裏端でいただく熱々の猪鍋。11月から1月の寸又峡には、現代人が忘れかけている静寂と本物の安らぎが満ちています。心洗われる冬の秘境旅へ足を踏み入れてみましょう。
          </p>
          <div className="pt-4">
            <Link 
              href="/features"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors text-sm"
            >
              <span>冬の特集一覧へ戻る</span>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
