import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Sunrise, Sun, Mountain, Flame, Landmark, Building, ThermometerSnowflake, Camera
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月山梨：富士山を望む絶景温泉！名宿5選',
  description: '11月から1月、山梨県山中湖・忍野村は、夕陽が富士山頂に重なり黄金色に輝く奇跡の天体ショー「ダイヤモンド富士」と。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '山中湖 ダイヤモンド富士, 忍野八海 冬, 紅富士, 甲州ほうとう鍋, 富士マリオットホテル山中湖, ホテルマウント富士, 富士クラシックホテル, 山中湖秀山荘, ラコストリ山中湖, 山中湖温泉, 11月 12月 1月 山梨旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-yamanashi-yamanakako-oshino-diamond-fuji-houtou-stay/"
  },
  openGraph: {
    title: '11・12・1月山梨：富士山を望む絶景温泉！名宿5選',
    description: '11月から1月、山梨県山中湖・忍野村は、夕陽が富士山頂に重なり黄金色に輝く奇跡の天体ショー「ダイヤモンド富士」と。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-yamanashi-yamanakako-oshino-diamond-fuji-houtou-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の山中湖と夕暮れのダイヤモンド富士'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月山梨：冬の澄天に輝く「ダイヤモンド富士」と雪化粧の忍野八海・熱々「甲州ほうとう鍋」＆富士山を望む絶景温泉宿5選",
    description: "11月から1月、山梨県山中湖・忍野村は、夕陽が富士山頂に重なり黄金色に輝く奇跡の天体ショー「ダイヤモンド富士」と、朝陽に白雪が紅く染まる「紅富士」の最盛期を迎えます。世界文化遺産・忍野八海の神秘的なコバルトブルーの湧水池と白銀の茅葺き民家、冷えた体を芯から温める熱々の甲州ほうとう鍋や甲州ワインビーフ。富士山と湖を一望する絶景露天風呂を備えた厳選名宿5選を徹底ガイドします。",
    images: ['https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function YamanashiYamanakakoOshinoWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "11・12・1月山梨：冬の澄天に輝く「ダイヤモンド富士」と雪化粧の忍野八海・熱々「甲州ほうとう鍋」＆富士山を望む絶景温泉宿5選",
    description: "11月から1月、山梨県山中湖・忍野村は、夕陽が富士山頂に重なり黄金色に輝く奇跡の天体ショー「ダイヤモンド富士」と、朝陽に白雪が紅く染まる「紅富士」の最盛期を迎えます。世界文化遺産・忍野八海の神秘的なコバルトブルーの湧水池と白銀の茅葺き民家、冷えた体を芯から温める熱々の甲州ほうとう鍋や甲州ワインビーフ。富士山と湖を一望する絶景露天風呂を備えた厳選名宿5選を徹底ガイドします。",
    image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&q=80',
    datePublished: '',
    dateModified: '',
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
      '@id': 'https://croud-travel.pages.dev/winter-yamanashi-yamanakako-oshino-diamond-fuji-houtou-stay'
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
        name: '山梨・山中湖ダイヤモンド富士＆忍野八海特集',
        item: 'https://croud-travel.pages.dev/winter-yamanashi-yamanakako-oshino-diamond-fuji-houtou-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "山中湖の「ダイヤモンド富士」とは？11月〜1月の観測時期とおすすめポイントは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "ダイヤモンド富士とは、富士山頂に太陽が重なる瞬間に、まるでダイヤモンドのように光り輝く奇跡の自然現象です。山中湖は富士山の北東に位置するため、10月中旬から2月下旬にかけて湖畔の各地で日没時にダイヤモンド富士を観測できます。特に11月から1月は天候が安定して空気が極めて澄み渡るため、年間で最も美しくクリアなダイヤモンド富士が見られるゴールデンシーズンです。代表的な観測スポットは、11月上旬〜中旬の「平野湖畔・きらら」、11月下旬〜12月の「長池親水公園」、1月上旬〜中旬の「旭日丘湖畔」など、時期によって観測地点が湖畔沿いに移動します。観測時刻は午後15時25分〜15時45分頃です。"
        }
      },
      {
        '@type': 'Question',
        name: "朝日に赤く染まる「紅富士（べにふじ）」と「赤富士」の違いは何ですか？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "「赤富士」は夏の早朝、雪のない山肌が朝陽に照らされて赤く染まる現象を指します。一方、「紅富士（べにふじ）」は11月から2月の真冬、山頂から裾野まで真っ白な雪に覆われた富士山が、澄み切った朝陽を浴びて鮮やかなピンク色や真紅に染まり輝く冬限定の絶景です。山中湖畔からは、朝6時45分〜7時15分頃の日の出の瞬間に、静まり返った湖面とともに神々しい紅富士を拝むことができます。"
        }
      },
      {
        '@type': 'Question',
        name: "世界遺産「忍野八海」の冬の見どころと混雑回避のポイントは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "忍野八海（おしにはっかい）は、富士山の伏流水が数十年の歳月をかけて湧き出る8つの湧水池で、世界文化遺産「富士山」の構成資産に登録されています。冬は湧水の透明度が年間で最も高くなり、深さ8メートルの「湧池」や「鏡池」の底まで吸い込まれそうなコバルトブルーが輝きます。さらに茅葺き屋根の古民家や水車小屋に白雪が積もり、背後にそびえる白銀の富士山と相まって日本の原風景を描き出します。冬の観光は午前9時前の早朝がおすすめ。観光客が少なく、朝の斜光が水面を照らす静寂の絶景を独占できます。"
        }
      },
      {
        '@type': 'Question',
        name: "本場山梨の「甲州ほうとう鍋」の特徴と冬に食べる魅力は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "ほうとうは、小麦粉を練って平たく太めに切った麺を、カボチャ、里芋、大根、白菜、きのこなどの野菜とともに、味噌仕立ての汁で煮込んだ山梨県の代表的な郷土料理です。麺を茹でずに生麺のまま煮込むため、小麦粉のデンプンが汁に溶け出して自然なとろみがつき、熱が逃げにくく最後まで熱々のままいただけます。特にカボチャが煮崩れて甘みが溶け込んだ濃厚な味噌スープは、氷点下に冷え込む冬の山中湖で冷えた体を芯からポカポカに温めてくれます。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の山中湖・忍野八海観光での気温、防寒対策、車の冬用タイヤの必要性は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "山中湖は標高約1,000mの高原に位置するため、冬の寒さは北海道並みに厳しく、11月〜1月の朝晩はマイナス5℃〜マイナス15℃近くまで冷え込みます。ダイヤモンド富士の日没待ちや早朝の紅富士鑑賞には、厚手の防風ダウンジャケット、フリース、裏起毛パンツ、ニット帽、厚手の手袋、ネックウォーマー、使い捨てカイロが不可欠です。また車で訪れる場合、中央道や東富士五湖道路、湖畔道路は降雪や夜間の路面凍結（ブラックアイスバーン）が頻発するため、スタッドレスタイヤまたはチェーンの装着が絶対に必須です。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "富士マリオットホテル山中湖",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/160833/160833.jpg",
              rating: 4.42,
              reviews: 141,
              price: "¥13,642〜",
              access: "富士急行線　富士山駅からお車にて約４０分",
              special: "山中湖で心潤うひとときを。40㎡を超える広いお部屋と広い温泉でごゆっくりお過ごしいただけます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F160833%2F160833.html",
              story: "山中湖畔の閑静な森の中に佇む国際的リゾートホテル「富士マリオットホテル山中湖」。標高約1,000mの高原に位置し、冬の澄み切った大気の中で優雅なリトリートを体験できます。客室の一部にはプライベートな温泉露天風呂または温泉浴室が設えられており、美肌効果の高い山中湖温泉の湯に浸かりながら冬の静寂な森や雪景色を眺める贅沢が叶います。夕食は山梨の豊かな風土を五感で味わうグリルディナー。甲州ワインビーフのジューシーなグリルをはじめ、富士山麓の契約農家から届く冬根菜や甲州ワインとの極上ペアリングなど、上質で洗練された美食の世界が広がります。冬の森に佇む大人の隠れ家として最高の滞在を約束します。",
              roomTip: "温泉露天風呂付きプレミアルーム。客室にいながら24時間いつでも山中湖温泉の湯を独占でき、冬の澄んだ星空を眺めながらのプライベート湯浴みは格別です。",
              gourmetTip: "「甲州ワインビーフグリルディナー」。ワイン粕を飼料に育った銘柄牛の旨味を豪快に引き出し、地元産赤ワインソースで味わう贅沢なメインディッシュ。",
              highlights: [
                "森に囲まれた国際リゾート・客室温泉露天風呂で楽しむ冬の星空とプライベート湯浴み",
                "ジューシーな甲州ワインビーフグリルと富士山麓契約農家の冬野菜・洗練のディナー",
                "山中湖ICから車で15分・冬の静寂と上質なホスピタリティで心身をリフレッシュ"
              ]
            },
            {
              id: 2,
              name: "富士山と湖を望むリゾート　ホテル　マウント富士",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/75376/75376.jpg",
              rating: 4.35,
              reviews: 1462,
              price: "¥12,400〜",
              access: "富士山駅より御殿場方面の路線バスへ乗り、ホテルマウント富士入口にて下車。バス停まで送迎バスあり。（要連絡）",
              special: "1,100ｍの高台に建つ、ホテル中庭から望む　“雄大な富士山”　をぜひご堪能下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75376%2F75376.html",
              story: "山中湖を見下ろす大出山の山頂、標高1,100mの絶景パノラマに建つ「ホテル マウント富士」。「富士山を見るために建てられたホテル」の名の通り、正面に雄大な富士山、眼下に山中湖を一望する息を呑む絶景が広がります。自慢の展望露天風呂「はなれの湯」やロウリュサウナ「満天星の湯」からは、朝日に紅く染まる「紅富士」や、冬の澄天にそびえる雪化粧の富士山を湯船から一望。夕食は伝統のフランス料理または日本料理会席。冬は甲州牛や富士の介（サーモン）、熱々の創作ほうとう仕立てなど、冬の味覚を優雅に堪能できます。刻一刻と表情を変える霊峰富士を朝から晩まで眺められる唯一無二の名宿です。",
              roomTip: "富士山ビュープレミアムツイン。大きなピクチャーウィンドウから額縁に収まったような富士山の雄姿を朝から夕暮れまで鑑賞できます。",
              gourmetTip: "「フレンチディナーコース・冬の富士讃歌」。富士山麓の厳選食材と冬ジビエや甲州牛を取り入れた、華やかで繊細な正統派フルコース。",
              highlights: [
                "標高1,100m山頂パノラマ・露天風呂やサウナから富士山と紅富士を一望する絶景",
                "富士山麓の美味を凝縮した伝統フレンチまたは日本料理会席・絶景朝食ビュッフェ",
                "ダイヤモンド富士観賞ポイントへのアクセス抜群・ロウリュサウナで極上のととのい"
              ]
            },
            {
              id: 3,
              name: "富士クラシックホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/27986/27986.jpg",
              rating: 4.18,
              reviews: 1134,
              price: "¥6,800〜",
              access: "富士急行線「河口湖駅」・中央道河口湖ＩＣより２５分／東名高速富士ＩＣより４５分",
              special: "【雄大な富士山の眺望を満喫】全室及びレストラン・大浴場から富士山を眺める宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27986%2F27986.html",
              story: "富士山北麓の広大な大自然に抱かれ、名匠デズモンド・ミュアヘッド設計のコースに隣接する優雅なクラシックホテル「富士クラシックホテル」。ヨーロッパの山岳リゾートを思わせる重厚な佇まいと木造建築のぬくもりが、冬の高原ステイを特別な時間へと昇華させます。客室のワイドウィンドウからは遮るもののない富士山のダイナミックな姿を真正面に望み、夕暮れ時には山肌が夕陽に照らされて茜色から紫紺へと移ろうドラマチックな色彩美に息を呑みます。夕食は富士山麓の新鮮な食材をふんだんに使った洋食または和食コース。静寂の中で大人の贅沢な時間を過ごせます。",
              roomTip: "マウントビューツインルーム。富士山に向かって配置された広々とした空間で、雪を冠した神々しい霊峰の姿を心ゆくまで堪能できます。",
              gourmetTip: "「シェフ特製富士の恵みディナー」。山梨県産銘柄豚や地場野菜を丁寧にローストし、香り高いトリュフソースとともに味わう至福の一皿。",
              highlights: [
                "静寂の高原リゾート・客室のワイドウィンドウから望むダイナミックな雪富士パノラマ",
                "地元銘柄豚のローストとトリュフソース・ヨーロッパ調のシックなメインダイニング",
                "名匠設計の広大な敷地・富士の裾野に沈む夕陽と星空を心ゆくまで眺める休日"
              ]
            },
            {
              id: 4,
              name: "フォレストリゾート　山中湖　秀山荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/70889/70889.jpg",
              rating: 4.01,
              reviews: 464,
              price: "¥11,918〜",
              access: "新宿駅より高速バスで２時間１５分",
              special: "やまなしグリーンゾーンは9/30迄！展望室から望む富士山＆バナジウム含有飲料水が利用可能",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70889%2F70889.html",
              story: "山中湖畔の高台に位置し、富士山と湖の両方を望む好ロケーションを誇る「フォレストリゾート 山中湖 秀山荘」。アットホームで心温まるおもてなしと、四季折々の富士山を望む開放的な展望露天風呂が魅力です。冬の澄んだ空気の中、露天風呂に浸かれば、白銀の富士山頂が夕日に輝く絶景が目の前に広がります。夕食は山梨の郷土の味覚をふんだんに取り入れた会席料理。具だくさんの熱々「甲州ほうとう鍋」をはじめ、甲州名物の馬刺しや旬の小鉢が並び、冷えた体を芯から温めてくれます。一人旅から家族連れまで寛げる居心地の良さが評判です。",
              roomTip: "富士山展望和室。畳の温もりを感じながら窓辺の椅子に腰掛けて、刻々と変わる富士の稜線をのんびりと眺めることができます。",
              gourmetTip: "「季節の和会席と熱々ほうとう鍋プラン」。平打ちの手打ち麺に自家製味噌とかぼちゃの甘みが溶け込んだ、ほっとする本場山梨の味。",
              highlights: [
                "富士山と山中湖を望む展望露天風呂・具だくさん熱々ほうとう鍋と馬刺しの和会席",
                "手打ち平打ち麺とカボチャがとろける本場ほうとう・体の芯から温まる冬の郷土膳",
                "アットホームな寛ぎとリーズナブルな価格・家族旅行や夫婦の富士見旅に最適"
              ]
            },
            {
              id: 5,
              name: "全室富士山＆山中湖ビュー　ラコストリ山中湖",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/130029/130029.jpg",
              rating: 5.00,
              reviews: 108,
              price: "¥16,500〜",
              access: "富士吉田駅から路線バスで平野バス停下車、徒歩５分",
              special: "富士山ひとりじめ！全室富士山＆山中湖ビュー！全客室から富士山と山中湖を見ることがことができます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F130029%2F130029.html",
              story: "山中湖の湖畔至近に位置し、全室から雄大な富士山と山中湖のダブルビューを独占できる隠れ家的プチホテル「全室富士山＆山中湖ビュー ラコストリ山中湖。」。わずか数室のみのプライベート空間で、全室にイタリア直輸入の調度品やこだわりのベッドが配置され、贅沢な寛ぎを演出しています。テラスに出れば、湖面に映る「逆さ富士」や、冬の澄天を茜色に染めるダイヤモンド富士の鑑賞スポットへも歩いてすぐ。夕食は地元山梨の厳選食材を活かしたイタリアンまたは創作フレンチのフルコース。記念日や大切な人との冬旅に最高のひとときを約束します。",
              roomTip: "レイク＆富士ビューテラスルーム。湖と富士山が織りなすパノラマをテラスから一望し、朝陽が昇る湖面の輝きを特等席で体感。",
              gourmetTip: "「創作イタリアン・甲州ワインペアリングディナー。」。甲州ワインビーフのタリアータや自家製パスタを、厳選された勝沼ワインとともに。",
              highlights: [
                "全室富士山＆湖ビュー・わずか数室の大人の隠れ家と甲州ワインペアリングディナー",
                "イタリア直輸入の優雅な調度品・湖畔散策やダイヤモンド富士観賞に絶好の立地",
                "テラスから望む逆さ富士と朝焼けの感動・記念日を彩るプライベートリゾート"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "山中湖の「ダイヤモンド富士」とは？11月〜1月の観測時期とおすすめポイントは？",
    "a": "ダイヤモンド富士とは、富士山頂に太陽が重なる瞬間に、まるでダイヤモンドのように光り輝く奇跡の自然現象です。山中湖は富士山の北東に位置するため、10月中旬から2月下旬にかけて湖畔の各地で日没時にダイヤモンド富士を観測できます。特に11月から1月は天候が安定して空気が極めて澄み渡るため、年間で最も美しくクリアなダイヤモンド富士が見られるゴールデンシーズンです。代表的な観測スポットは、11月上旬〜中旬の「平野湖畔・きらら」、11月下旬〜12月の「長池親水公園」、1月上旬〜中旬の「旭日丘湖畔」など、時期によって観測地点が湖畔沿いに移動します。観測時刻は午後15時25分〜15時45分頃です。"
  },
  {
    "q": "朝日に赤く染まる「紅富士（べにふじ）」と「赤富士」の違いは何ですか？",
    "a": "「赤富士」は夏の早朝、雪のない山肌が朝陽に照らされて赤く染まる現象を指します。一方、「紅富士（べにふじ）」は11月から2月の真冬、山頂から裾野まで真っ白な雪に覆われた富士山が、澄み切った朝陽を浴びて鮮やかなピンク色や真紅に染まり輝く冬限定の絶景です。山中湖畔からは、朝6時45分〜7時15分頃の日の出の瞬間に、静まり返った湖面とともに神々しい紅富士を拝むことができます。"
  },
  {
    "q": "世界遺産「忍野八海」の冬の見どころと混雑回避のポイントは？",
    "a": "忍野八海（おしにはっかい）は、富士山の伏流水が数十年の歳月をかけて湧き出る8つの湧水池で、世界文化遺産「富士山」の構成資産に登録されています。冬は湧水の透明度が年間で最も高くなり、深さ8メートルの「湧池」や「鏡池」の底まで吸い込まれそうなコバルトブルーが輝きます。さらに茅葺き屋根の古民家や水車小屋に白雪が積もり、背後にそびえる白銀の富士山と相まって日本の原風景を描き出します。冬の観光は午前9時前の早朝がおすすめ。観光客が少なく、朝の斜光が水面を照らす静寂の絶景を独占できます。"
  },
  {
    "q": "本場山梨の「甲州ほうとう鍋」の特徴と冬に食べる魅力は？",
    "a": "ほうとうは、小麦粉を練って平たく太めに切った麺を、カボチャ、里芋、大根、白菜、きのこなどの野菜とともに、味噌仕立ての汁で煮込んだ山梨県の代表的な郷土料理です。麺を茹でずに生麺のまま煮込むため、小麦粉のデンプンが汁に溶け出して自然なとろみがつき、熱が逃げにくく最後まで熱々のままいただけます。特にカボチャが煮崩れて甘みが溶け込んだ濃厚な味噌スープは、氷点下に冷え込む冬の山中湖で冷えた体を芯からポカポカに温めてくれます。"
  },
  {
    "q": "冬の山中湖・忍野八海観光での気温、防寒対策、車の冬用タイヤの必要性は？",
    "a": "山中湖は標高約1,000mの高原に位置するため、冬の寒さは北海道並みに厳しく、11月〜1月の朝晩はマイナス5℃〜マイナス15℃近くまで冷え込みます。ダイヤモンド富士の日没待ちや早朝の紅富士鑑賞には、厚手の防風ダウンジャケット、フリース、裏起毛パンツ、ニット帽、厚手の手袋、ネックウォーマー、使い捨てカイロが不可欠です。また車で訪れる場合、中央道や東富士五湖道路、湖畔道路は降雪や夜間の路面凍結（ブラックアイスバーン）が頻発するため、スタッドレスタイヤまたはチェーンの装着が絶対に必須です。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-orange-100 selection:text-orange-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の山中湖とダイヤモンド富士" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-orange-900/80 backdrop-blur-md text-orange-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-orange-400/30">
            <Sun className="w-4 h-4 text-orange-300" />
            11月・12月・1月 冬の富士山麓・ダイヤモンド富士＆名水忍野八海特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">「11・12・1月山梨」冬の澄天に輝く「ダイヤモンド富士」と雪化粧の忍野八海・熱々「甲州ほうとう鍋」＆富士山を望む絶景温泉宿5選</h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            標高1,000mの高原に広がる山中湖。夕暮れの富士山頂に太陽が重なる奇跡の瞬間「ダイヤモンド富士」と、朝陽に染まる真紅の「紅富士」。世界遺産・忍野八海のエメラルドの湧水池と白雪の茅葺き民家。冷えた体を芯から温める熱々の甲州ほうとう鍋や甲州ワインビーフ、高アルカリ温泉の富士見露天風呂を満喫する冬の至高旅をご案内します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-orange-400" /> 旬の時期：11月中旬〜1月下旬（ダイヤモンド富士＆紅富士最盛期）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-orange-400" /> エリア：山梨県南都留郡山中湖村・忍野村</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-orange-400" /> 旬グルメ：甲州手打ちほうとう・甲州ワインビーフ・忍野名水豆腐・吉田うどん</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-orange-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Introduction</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              一年で最も空気が澄み渡る真冬の山中湖と、霊峰富士が魅せる天体のアート
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              富士五湖の中で最も標高が高く（標高980m）、富士山に一番近い湖として知られる山梨県・山中湖。11月から1月にかけての冬、この地は厳寒の気候とともに、年間を通じて最も美しく研ぎ澄まされた季節を迎えます。大気中の水蒸気が凍りつき、どこまでも青く抜けた冬晴れの空の下、白銀に輝く富士山の稜線が圧倒的な迫力で迫ってきます。
            </p>
            <p>
              この時期の山中湖が世界中の写真家や旅人を魅了してやまない最大の理由が、夕暮れ時に太陽が富士山頂に吸い込まれるように沈み、山頂でパッとダイヤモンドのように光芒を放つ「ダイヤモンド富士」です。山中湖は湖畔の角度と太陽の軌道が絶妙に一致するため、10月中旬から2月下旬にかけて湖畔の各地でこの奇跡の天体ショーが観測されます。特に11月から1月は天候の晴天率が極めて高く、日没時のダイヤモンド富士だけでなく、早朝の澄み切った朝陽に純白の雪肌がピンクや深紅に染まる「紅富士（べにふじ）」の美しさも格別です。
            </p>
            <p>
              古くから富士講の巡礼者たちが心身を清めた霊地である忍野八海。かつての巨大湖「宇津湖」が富士山噴火によって干上がり、残された湧水口が長い歳月を経て現在の神秘的な八つの池を形作りました。冬の朝、水温13度を保つ清らかな湧水からは湯気のような水蒸気が立ち上り、霧氷をまとった木々と相まって幻想的な幽玄の世界を創出します。
            </p>
            <p>
              さらに、山中湖の隣に位置する忍野村には、富士山の雪解け水が数十年の歳月をかけて地下の溶岩層で濾過されて湧き出る「忍野八海（おしにはっかい）」が静かに佇みます。茅葺き屋根の古民家に白い雪が降り積もり、水深8mの底まで透き通る神秘的なコバルトブルーの水面と富士山の競演は、息を呑む日本の原風景。氷点下の寒さに冷えた体を温めるのは、武田信玄の陣中食から生まれた具だくさんの熱々「甲州ほうとう鍋」と、pH高濃度の美肌温泉。冬だからこそ出会える感動がここにあります。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-100">
            <div className="flex items-start gap-3 p-3.5 bg-orange-50/60 rounded-2xl border border-orange-100">
              <Sun className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-stone-900 text-sm">ダイヤモンド富士</h3>
                <p className="text-stone-600 text-xs mt-1">夕暮れの富士山頂に太陽が重なる奇跡の光芒。11〜1月が最高潮。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 bg-orange-50/60 rounded-2xl border border-orange-100">
              <Mountain className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-stone-900 text-sm">雪化粧の忍野八海</h3>
                <p className="text-stone-600 text-xs mt-1">富士山伏流水の透明な湧水池と白雪の茅葺き民家が織りなす絶景。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 bg-orange-50/60 rounded-2xl border border-orange-100">
              <Flame className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-stone-900 text-sm">熱々甲州ほうとう鍋</h3>
                <p className="text-stone-600 text-xs mt-1">手打ち平打ち麺とカボチャが溶け込む濃厚味噌汁で体を芯から温める。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive Section: Gourmet & Scenery */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-8">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-orange-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Scenery & Gastronomy</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              光と雪が織りなす霊峰の刹那と、武田信玄が愛した郷土の滋味
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <Camera className="w-5 h-5 text-orange-600" />
                ダイヤモンド富士と紅富士のベストタイム
              </h3>
              <p>
                山中湖の冬は、太陽の動きとともに一日の中でドラマチックに景色が移り変わります。早朝6時45分頃、東の地平線から太陽が昇り始めると、まず白銀に染まった富士山の山頂部が淡いピンク色に染まります。光が徐々に山肌を下りていくにつれて鮮やかな真紅へと変わり、雪の凹凸が陰影をくっきりと浮かび上がらせる「紅富士」の瞬間は、わずか十数分間の奇跡です。
              </p>
              <p>
                そして午後15時30分前後、太陽が西の空へと傾き、富士山の稜線へとゆっくりと近づいていきます。山頂中央に太陽がピタリと重なるその数分間、周囲の空気が金色に輝き、眩いばかりの光が湖面へと一筋の光の道（サンロード）を描き出します。
              </p>
              <p>
                また、冬の山中湖では暖房完備の快適なドーム船で楽しむ「ワカサギ釣り」も大人気です。氷点下の外気を感じることなく、湖上で釣れたてのワカサギをサクサクの天ぷらにして味わう体験は、冬の山中湖ならではの醍醐味です。
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <Utensils className="w-5 h-5 text-orange-600" />
                本場甲州ほうとう鍋と甲州ワインビーフの極み
              </h3>
              <p>
                甲斐の武将・武田信玄が自らの陣中食として考案したと伝えられる「ほうとう」。一般的なうどんと異なり、塩を一切使わずに小麦粉を水で捏ねた幅広の麺を生のまま鍋に放り込みます。鍋には大きめに切った甘いカボチャ、里芋、人参、ゴボウ、白菜、油揚げ、椎茸などが惜しみなく入ります。
              </p>
              <p>
                カボチャがホロホロに煮崩れ、生麺から出たデンプンと地元蔵元の米麹味噌が混ざり合うことで、とろみのある濃厚な黄金色の汁が完成します。また、山梨県産の良質なブドウ搾り粕を飼料にして育てられた「甲州ワインビーフ」のサーロインや陶板焼きは、きめ細やかな霜降りと上品な甘みが特徴で、熱々のほうとうとともに冬の贅沢な夕餉を彩ります。
              </p>
              <p>
                富士山麓の厳しい寒さを耐え抜くために発達した郷土料理は、素材本来の豊かな甘みと発酵味噌のコクが調和し、旅人の心までじんわりと温めてくれます。
              </p>
            </div>
          </div>

          <div className="bg-amber-50/70 p-5 sm:p-6 rounded-2xl border border-amber-200/60">
            <h4 className="font-bold text-amber-950 text-base mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              忍野八海の名水が育む「忍野豆腐」と「湧水蕎麦」
            </h4>
            <p className="text-amber-900 text-xs sm:text-sm leading-relaxed">
              富士山に降り注いだ雪や雨が、数十年の歳月をかけて溶岩の間を浸透しながら磨かれた忍野の湧水は、ミネラル分が極めてバランス良く含まれた軟水です。この清冽な名水で作られる「忍野豆腐」は、大豆本来の甘みと滑らかな舌触りが際立ち、冬は湯豆腐や冷奴でそのピュアな美味しさを実感できます。また、名水で打たれる十割蕎麦の喉越しの良さも格別です。
            </p>
          </div>
        </section>

        {/* Hotel Recommendations Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-orange-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-xl sm:text-3xl font-black text-stone-900">
              【山梨・山中湖】富士山と湖を望む絶景温泉宿＆高原リゾート5選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              ダイヤモンド富士の観測スポットに近く、客室や露天風呂から雪富士を望む贅沢な温泉宿・リゾートホテル
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((h) => (
              <div key={h.id} className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 hover:border-orange-300 transition-all duration-300 space-y-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-2/5 shrink-0">
                    <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-stone-100 group">
                      <img 
                        src={h.img} 
                        alt={h.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>★ {h.rating}</span>
                        <span className="text-slate-400 text-[10px]">({h.reviews}件)</span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-orange-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                        {h.price}
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-3/5 space-y-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-orange-800 mb-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>山中湖温泉・忍野高原エリア</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-stone-900 leading-snug">
                        {h.name}
                      </h3>
                      <p className="text-stone-500 text-xs mt-1 flex items-center gap-1">
                        <Compass className="w-3.5 h-3.5" /> {h.access}
                      </p>
                      <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mt-3">
                        {h.story}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-stone-100 text-xs">
                      <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200/60">
                        <span className="font-bold text-stone-800 block mb-0.5">客室のポイント</span>
                        <span className="text-stone-600">{h.roomTip}</span>
                      </div>
                      <div className="bg-orange-50/60 p-2.5 rounded-xl border border-orange-100">
                        <span className="font-bold text-orange-950 block mb-0.5">自慢の冬グルメ</span>
                        <span className="text-orange-900">{h.gourmetTip}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50/80 rounded-2xl p-4 border border-stone-200/60 space-y-2">
                  <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block">宿のハイライト</span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-stone-600">
                    {h.highlights.map((hl: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <a 
                    href={h.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
                  >
                    <span>楽天トラベルでプラン・空室を見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-orange-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の山中湖・忍野八海 絶景1泊2日モデルコース
            </h2>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-orange-200 space-y-6">
              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">1日目 11:00</span>
                <h3 className="font-bold text-stone-900 text-base mt-1">忍野八海を散策＆名水とうふ・ほうとうランチ</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  忍野八海に到着。水深8mの湧池の透き通るブルーと雪の茅葺き民家を散策。名水で作られた出来立ての忍野豆腐を味わい、地元専門店で熱々の甲州ほうとう鍋をいただく。
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">1日目 14:30</span>
                <h3 className="font-bold text-stone-900 text-base mt-1">山中湖長池親水公園へ移動＆ダイヤモンド富士スタンバイ</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  山中湖畔の長池親水公園または平野浜へ。三脚と防寒着を整えて待機。15時30分頃、富士山頂に太陽が重なりダイヤモンドの閃光を放つ奇跡の瞬間に感動。
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">1日目 16:30</span>
                <h3 className="font-bold text-stone-900 text-base mt-1">絶景ホテルにチェックイン＆富士見露天風呂</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  宿にチェックインし、冷え切った体を山中湖温泉の湯で解きほぐす。露天風呂から夕暮れにシルエットを浮かび上がらせる富士山を眺める至福の時間。
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">1日目 18:30</span>
                <h3 className="font-bold text-stone-900 text-base mt-1">甲州ワインビーフと山梨の味覚ディナー</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  霜降り甲州ワインビーフのグリルや地元契約農家の冬野菜を、本場勝沼の甲州ワインとともにじっくり堪能。
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">2日目 06:45</span>
                <h3 className="font-bold text-stone-900 text-base mt-1">早朝の湖畔で白雪が赤く染まる「紅富士」を鑑賞</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  客室や展望デッキ、湖畔から朝陽を浴びて深紅に染まる紅富士を観賞。静寂の湖面に映る逆さ富士の美しさに息を呑む。
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">2日目 10:30</span>
                <h3 className="font-bold text-stone-900 text-base mt-1">山中湖パノラマ台＆紅富士の湯へ立ち寄り</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  三国峠へ向かう途中の「パノラマ台」から富士山と山中湖を一望。日帰り温泉「紅富士の湯」で高アルカリ温泉の朝風呂を満喫し、お土産処で信玄餅やほうとうを購入して帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-orange-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-orange-600" />
              冬の山中湖・忍野八海旅行 よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="p-4 sm:p-5 bg-stone-50 rounded-2xl border border-stone-200/60 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-orange-600 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link Section */}
        <section className="bg-gradient-to-br from-slate-900 to-stone-900 rounded-3xl p-6 sm:p-10 text-white space-y-6 shadow-xl">
          <div className="border-b border-slate-700 pb-4">
            <span className="text-orange-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              あわせて読みたい！全国の11・12・1月冬の温泉＆味覚特集
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              富士山絶景・名湯・冬の味覚を堪能する至極の厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              href="/winter-kanagawa-hakone-fuji-view-onsen-stay"
              className="group p-4 bg-slate-800/70 hover:bg-slate-800 rounded-2xl border border-slate-700/80 hover:border-orange-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 bg-orange-950/80 border border-orange-400/40 text-orange-300 text-[10px] font-bold rounded-md mb-2">
                  神奈川・箱根富士見温泉
                </span>
                <h3 className="font-bold text-white text-sm group-hover:text-orange-300 transition-colors line-clamp-2">
                  冬の澄んだ芦ノ湖と富士山絶景露天・箱根名湯と極上会席を堪能する名宿
                </h3>
              </div>
              <span className="text-xs text-orange-400 font-semibold mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                特集を見る →
              </span>
            </Link>

            <Link 
              href="/winter-shizuoka-izunagaoka-onsen-fujiview-kinmedai-izugyu-stay"
              className="group p-4 bg-slate-800/70 hover:bg-slate-800 rounded-2xl border border-slate-700/80 hover:border-orange-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 bg-orange-950/80 border border-orange-400/40 text-orange-300 text-[10px] font-bold rounded-md mb-2">
                  静岡・伊豆長岡温泉
                </span>
                <h3 className="font-bold text-white text-sm group-hover:text-orange-300 transition-colors line-clamp-2">
                  富士見テラスパノラマと伊豆の美肌名湯・金目鯛姿煮＆伊豆牛を味わう名宿
                </h3>
              </div>
              <span className="text-xs text-orange-400 font-semibold mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                特集を見る →
              </span>
            </Link>

            <Link 
              href="/winter-nagano-suwa-onsen-lake-view-shinshu-beef-stay"
              className="group p-4 bg-slate-800/70 hover:bg-slate-800 rounded-2xl border border-slate-700/80 hover:border-orange-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 bg-orange-950/80 border border-orange-400/40 text-orange-300 text-[10px] font-bold rounded-md mb-2">
                  長野・上諏訪温泉
                </span>
                <h3 className="font-bold text-white text-sm group-hover:text-orange-300 transition-colors line-clamp-2">
                  冬の諏訪湖御神渡りと名湯上諏訪温泉・信州牛すき焼き＆諏訪五蔵地酒名宿
                </h3>
              </div>
              <span className="text-xs text-orange-400 font-semibold mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                特集を見る →
              </span>
            </Link>

            <Link 
              href="/winter-yamanashi-kawaguchiko-onsen-fuji-view-koshu-beef-stay"
              className="group p-4 bg-slate-800/70 hover:bg-slate-800 rounded-2xl border border-slate-700/80 hover:border-orange-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 bg-orange-950/80 border border-orange-400/40 text-orange-300 text-[10px] font-bold rounded-md mb-2">
                  山梨・河口湖温泉
                </span>
                <h3 className="font-bold text-white text-sm group-hover:text-orange-300 transition-colors line-clamp-2">
                  冬花火と逆さ富士・甲州ワインビーフと絶景露天風呂を愉しむ河口湖名宿
                </h3>
              </div>
              <span className="text-xs text-orange-400 font-semibold mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                特集を見る →
              </span>
            </Link>

            <Link 
              href="/winter-ibaraki-oarai-nakaminato-ankou-sunrise-stay"
              className="group p-4 bg-slate-800/70 hover:bg-slate-800 rounded-2xl border border-slate-700/80 hover:border-orange-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 bg-orange-950/80 border border-orange-400/40 text-orange-300 text-[10px] font-bold rounded-md mb-2">
                  茨城・大洗＆那珂湊
                </span>
                <h3 className="font-bold text-white text-sm group-hover:text-orange-300 transition-colors line-clamp-2">
                  神磯の鳥居初日の出と冬の極上あんこう鍋どぶ汁・那珂湊市場買い出し名宿
                </h3>
              </div>
              <span className="text-xs text-orange-400 font-semibold mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                特集を見る →
              </span>
            </Link>

            <Link 
              href="/winter-chiba-choshi-inubosaki-sunrise-kinmedai-hamaguri-stay"
              className="group p-4 bg-slate-800/70 hover:bg-slate-800 rounded-2xl border border-slate-700/80 hover:border-orange-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 bg-orange-950/80 border border-orange-400/40 text-orange-300 text-[10px] font-bold rounded-md mb-2">
                  千葉・犬吠埼＆銚子
                </span>
                <h3 className="font-bold text-white text-sm group-hover:text-orange-300 transition-colors line-clamp-2">
                  本州一早い初日の出「犬吠埼」と冬の極上銚子つりきんめ・九十九里地蛤鍋
                </h3>
              </div>
              <span className="text-xs text-orange-400 font-semibold mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                特集を見る →
              </span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-yamanashi-yamanakako-oshino-diamond-fuji-houtou-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
